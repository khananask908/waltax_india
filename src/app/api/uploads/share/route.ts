import { NextRequest, NextResponse } from 'next/server';
import { readFile, writeFile, mkdir, stat } from 'fs/promises';
import path from 'path';
import { getCurrentUserFromRequest, getUsersCollection } from '@/lib/auth.server';

const uploadDir = path.join(process.cwd(), 'public', 'uploads');

const ensureUploadDir = async () => {
  await mkdir(uploadDir, { recursive: true });
};

const getMetadataPath = (fileName: string) => path.join(uploadDir, `${fileName}.meta.json`);

export async function POST(request: NextRequest) {
  try {
    const admin = await getCurrentUserFromRequest(request);

    if (!admin || admin.role !== 'admin') {
      return NextResponse.json({ error: 'Admin access required.' }, { status: 403 });
    }

    const body = await request.json();
    const { fileId, userId, recipientEmail } = body || {};

    if (!fileId || (!userId && !recipientEmail)) {
      return NextResponse.json({ error: 'File and recipient are required.' }, { status: 400 });
    }

    await ensureUploadDir();

    const filePath = path.join(uploadDir, fileId);
    try {
      await stat(filePath);
    } catch {
      return NextResponse.json({ error: 'File not found.' }, { status: 404 });
    }

    const collection = await getUsersCollection();
    let recipientName = 'Recipient';
    let recipientEmailValue = recipientEmail || '';
    let recipientId = userId;

    if (userId) {
      const recipient = await collection.findOne({ id: userId });
      if (recipient) {
        recipientName = recipient.name || recipient.email || 'Recipient';
        recipientEmailValue = recipient.email || recipientEmailValue;
        recipientId = recipient.id;
      }
    }

    if (!userId && recipientEmail) {
      recipientName = recipientEmail;
    }

    const metadataPath = getMetadataPath(fileId);
    let metadata: { uploadedBy?: string; uploadedByEmail?: string; sharedWith?: Array<{ id: string; email: string; name: string }> } = {};

    try {
      metadata = JSON.parse(await readFile(metadataPath, 'utf8'));
    } catch {
      metadata = {};
    }

    const sharedWith = metadata.sharedWith || [];
    const alreadyShared = sharedWith.some((entry) => entry.id === recipientId || entry.email === recipientEmailValue);

    if (!alreadyShared) {
      sharedWith.push({
        id: recipientId || recipientEmailValue,
        email: recipientEmailValue,
        name: recipientName,
      });
    }

    metadata.sharedWith = sharedWith;
    await writeFile(metadataPath, JSON.stringify(metadata));

    return NextResponse.json({
      success: true,
      recipientName,
      recipientEmail: recipientEmailValue,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unable to share file.' },
      { status: 500 }
    );
  }
}
