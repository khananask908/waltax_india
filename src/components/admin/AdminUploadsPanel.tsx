'use client';

import { useEffect, useState } from 'react';
import { Download, FileText, Send } from 'lucide-react';
import { getAuthToken, getCurrentUser } from '@/lib/auth';

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  uploadDate: string;
  url: string;
  uploadedBy?: string;
  uploadedByEmail?: string;
}

interface UserOption {
  id: string;
  name: string;
  email: string;
  company?: string;
  role?: string;
}

const AdminUploadsPanel = () => {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [users, setUsers] = useState<UserOption[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedUserId, setSelectedUserId] = useState<string>('');
  const [recipientEmail, setRecipientEmail] = useState<string>('');
  const [sending, setSending] = useState(false);
  const [loading, setLoading] = useState(true);
  const [usersLoading, setUsersLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch('/api/uploads', {
          headers: {
            Authorization: `Bearer ${getAuthToken() || ''}`,
          },
        });

        if (!response.ok) {
          throw new Error('Unable to load uploaded files.');
        }

        const data = await response.json();
        setFiles(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unable to load uploaded files.');
      } finally {
        setLoading(false);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users', {
          headers: {
            Authorization: `Bearer ${getAuthToken() || ''}`,
          },
        });

        if (!response.ok) {
          throw new Error('Unable to load users.');
        }

        const data = await response.json();
        const nextUsers = Array.isArray(data)
          ? data.filter((user: unknown) => typeof user === 'object' && user !== null)
          : [];
        setUsers(nextUsers as UserOption[]);
      } catch (err) {
        setUsers([]);
      } finally {
        setUsersLoading(false);
      }
    };

    void fetchFiles();
    void fetchUsers();
  }, []);

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleSendToUser = async () => {
    const currentUser = getCurrentUser();
    const recipientValue = selectedUserId || recipientEmail.trim();

    if (!selectedFile) {
      setError('Please choose a file to upload.');
      return;
    }

    if (!recipientValue) {
      setError('Please select a recipient user or type a recipient email.');
      return;
    }

    setSending(true);
    setError(null);
    setSuccess(null);

    try {
      const uploadFormData = new FormData();
      uploadFormData.append('file', selectedFile);
      uploadFormData.append('uploaderName', currentUser?.name || '');
      uploadFormData.append('uploaderEmail', currentUser?.email || '');

      const uploadResponse = await fetch('/api/uploads', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${getAuthToken() || ''}`,
        },
        body: uploadFormData,
      });

      const uploadedFile = await uploadResponse.json().catch(() => ({}));

      if (!uploadResponse.ok) {
        throw new Error(uploadedFile.error || 'Unable to upload file.');
      }

      const shareResponse = await fetch('/api/uploads/share', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getAuthToken() || ''}`,
        },
        body: JSON.stringify({
          fileId: uploadedFile.id,
          userId: selectedUserId || undefined,
          recipientEmail: recipientEmail.trim() || undefined,
        }),
      });

      const shareData = await shareResponse.json().catch(() => ({}));

      if (!shareResponse.ok) {
        throw new Error(shareData.error || 'Unable to share file.');
      }

      setFiles((prev) => [uploadedFile, ...prev]);
      setSuccess(`File uploaded and shared with ${shareData.recipientName || recipientValue}.`);
      setSelectedFile(null);
      setSelectedUserId('');
      setRecipientEmail('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to send file.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Uploaded files</h2>
          <p className="mt-1 text-sm text-slate-500">Review files shared by users and download them directly.</p>
        </div>
      </div>

      {error ? (
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>
      ) : null}

      {success ? (
        <div className="mt-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">{success}</div>
      ) : null}

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto]">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Choose file to upload</label>
            <input
              type="file"
              onChange={(event) => setSelectedFile(event.target.files?.[0] ?? null)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            />
            {selectedFile ? <p className="mt-2 text-xs text-slate-500">Selected: {selectedFile.name}</p> : null}
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Recipient</label>
            <select
              value={selectedUserId}
              onChange={(event) => setSelectedUserId(event.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              disabled={usersLoading}
            >
              <option value="">Choose a saved user</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name} ({user.email})
                </option>
              ))}
            </select>
            <input
              type="email"
              value={recipientEmail}
              onChange={(event) => setRecipientEmail(event.target.value)}
              placeholder="Or enter recipient email"
              className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            />
            {users.length === 0 ? (
              <p className="mt-2 text-xs text-slate-500">No saved users found yet. You can type an email directly.</p>
            ) : null}
          </div>
          <div className="flex items-end">
            <button
              type="button"
              onClick={() => void handleSendToUser()}
              disabled={sending || !selectedFile || (!selectedUserId && !recipientEmail.trim())}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {sending ? 'Uploading...' : 'Upload & Send'}
            </button>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="mt-6 text-sm text-slate-500">Loading uploaded files…</div>
      ) : files.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-sm text-slate-500">
          No files have been uploaded yet.
        </div>
      ) : (
        <div className="mt-6 space-y-3">
          {files.map((file) => (
            <div key={file.id} className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-white p-2 text-primary-600 shadow-sm">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-slate-900">{file.name}</p>
                  <p className="text-sm text-slate-500">
                    {formatFileSize(file.size)} • Uploaded on {new Date(file.uploadDate).toLocaleDateString()}
                    {(file.uploadedBy || file.uploadedByEmail) ? ` • Uploaded by ${file.uploadedBy || file.uploadedByEmail}` : ''}
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = file.url;
                  link.download = file.name;
                  link.click();
                }}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700"
              >
                <Download className="h-4 w-4" />
                Download
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminUploadsPanel;
