import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir, readdir, stat, unlink, readFile } from 'fs/promises';
import path from 'path';
import { getCurrentUserFromRequest } from '@/lib/auth.server';

const uploadDir = path.join(process.cwd(), 'public', 'uploads');

const ensureUploadDir = async () => {
  await mkdir(uploadDir, { recursive: true });
};

const getMetadataPath = (fileName: string) => path.join(uploadDir, `${fileName}.meta.json`);

const getFileMetadata = async (fileName: string) => {
  const metadataPath = getMetadataPath(fileName);

  try {
    const metadata = await readFile(metadataPath, 'utf8');
    return JSON.parse(metadata) as {
      uploadedBy?: string;
      uploadedByEmail?: string;
      sharedWith?: Array<{ id: string; email: string; name: string }>;
    };
  } catch {
    return null;
  }
};

export async function GET() {
  await ensureUploadDir();

  const files = (await readdir(uploadDir)).filter((name) => !name.endsWith('.meta.json'));
  const fileMeta = await Promise.all(
    files.map(async (name) => {
      const filePath = path.join(uploadDir, name);
      const fileStats = await stat(filePath);
      const metadata = await getFileMetadata(name);
      const uploaderName = metadata?.uploadedBy || metadata?.uploadedByEmail || undefined;
      return {
        id: name,
        name,
        size: fileStats.size,
        type: 'application/octet-stream',
        uploadDate: fileStats.mtime.toISOString(),
        url: `/uploads/${name}`,
        uploadedBy: uploaderName,
        uploadedByEmail: metadata?.uploadedByEmail || undefined,
        sharedWith: metadata?.sharedWith || [],
      };
    })
  );

  return NextResponse.json(fileMeta);
}

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUserFromRequest(request);

    if (!user) {
      return NextResponse.json({ error: 'Authentication required.' }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get('file');
    const uploaderNameField = formData.get('uploaderName');
    const uploaderEmailField = formData.get('uploaderEmail');

    if (!file || typeof file === 'string') {
      return NextResponse.json({ error: 'No file provided.' }, { status: 400 });
    }

    await ensureUploadDir();

    const fileName = `${Date.now()}-${String(file.name || 'upload')}`;
    const fileBuffer = Buffer.from(await (file as File).arrayBuffer());
    const filePath = path.join(uploadDir, fileName);
    await writeFile(filePath, fileBuffer);

    const uploaderName =
      (typeof uploaderNameField === 'string' && uploaderNameField.trim()) ||
      user.name ||
      user.email;
    const uploaderEmail =
      (typeof uploaderEmailField === 'string' && uploaderEmailField.trim()) ||
      user.email;
    const metadataPath = getMetadataPath(fileName);
    await writeFile(metadataPath, JSON.stringify({ uploadedBy: uploaderName, uploadedByEmail: uploaderEmail }));

    return NextResponse.json({
      id: fileName,
      name: fileName,
      size: fileBuffer.length,
      type: (file as File).type || 'application/octet-stream',
      uploadDate: new Date().toISOString(),
      url: `/uploads/${fileName}`,
      uploadedBy: uploaderName,
      uploadedByEmail: uploaderEmail,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unable to upload file.' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const user = await getCurrentUserFromRequest(request);

    if (!user) {
      return NextResponse.json({ error: 'Authentication required.' }, { status: 401 });
    }

    const fileId = request.nextUrl.searchParams.get('id');

    if (!fileId) {
      return NextResponse.json({ error: 'File id is required.' }, { status: 400 });
    }

    const safeFileId = path.basename(fileId);
    const filePath = path.join(uploadDir, safeFileId);

    await ensureUploadDir();

    try {
      await stat(filePath);
    } catch {
      return NextResponse.json({ error: 'File not found.' }, { status: 404 });
    }

    await unlink(filePath);

    try {
      const metadataPath = getMetadataPath(safeFileId);
      await unlink(metadataPath);
    } catch {
      // Ignore missing metadata files.
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unable to delete file.' },
      { status: 500 }
    );
  }
}
