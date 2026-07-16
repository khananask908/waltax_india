'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Upload, Download, Trash2, File, FileText, Image, Video, Music } from 'lucide-react';
import Button from '../ui/Button';
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

const FileManager = () => {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [removingFileId, setRemovingFileId] = useState<string | null>(null);
  const currentUser = getCurrentUser();

  const fetchFiles = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/uploads', {
        headers: {
          Authorization: `Bearer ${getAuthToken() || ''}`,
        },
      });

      if (!response.ok) {
        throw new Error('Unable to load files right now.');
      }

      const data = await response.json();
      setFiles(Array.isArray(data) ? data : []);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to load files.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchFiles();
  }, []);

  const getFileIcon = (type: string) => {
    if (type.includes('image')) return <Image className="h-8 w-8 text-blue-500" />;
    if (type.includes('video')) return <Video className="h-8 w-8 text-purple-500" />;
    if (type.includes('audio')) return <Music className="h-8 w-8 text-green-500" />;
    if (type.includes('pdf')) return <FileText className="h-8 w-8 text-red-500" />;
    return <File className="h-8 w-8 text-gray-500" />;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleFileUpload = async (selectedFiles: FileList) => {
    if (!getAuthToken()) {
      setError('Please sign in before uploading files.');
      return;
    }

    setUploading(true);
    setError(null);

    try {
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('uploaderName', currentUser?.name || '');
        formData.append('uploaderEmail', currentUser?.email || '');

        const response = await fetch('/api/uploads', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${getAuthToken() || ''}`,
          },
          body: formData,
        });

        if (!response.ok) {
          const data = await response.json().catch(() => ({}));
          throw new Error(data.error || 'Upload failed.');
        }

        const uploadedFile = await response.json();
        setFiles(prev => [uploadedFile, ...prev]);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to upload files.');
    } finally {
      setUploading(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length > 0) {
      handleFileUpload(droppedFiles);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      handleFileUpload(selectedFiles);
    }
  };

  const downloadFile = (file: UploadedFile) => {
    const link = document.createElement('a');
    link.href = file.url;
    link.download = file.name;
    link.click();
  };

  const deleteFile = async (file: UploadedFile) => {
    if (!getAuthToken()) {
      setError('Please sign in before deleting files.');
      return;
    }

    setRemovingFileId(file.id);
    setError(null);

    try {
      const response = await fetch(`/api/uploads?id=${encodeURIComponent(file.id)}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${getAuthToken() || ''}`,
        },
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || 'Unable to delete file.');
      }

      setFiles(prev => prev.filter(item => item.id !== file.id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to delete file.');
    } finally {
      setRemovingFileId(null);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">File Manager</h2>
          <p className="text-sm text-gray-500 mt-1">
            {currentUser ? `Uploading as ${currentUser.name}` : 'Sign in to upload and share files'}
          </p>
        </div>
        <div className="text-sm text-gray-500">
          {files.length} files • {formatFileSize(files.reduce((total, file) => total + file.size, 0))} total
        </div>
      </div>

      {/* Upload Area */}
      <div
        className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
          dragOver ? 'border-primary-500 bg-primary-50' : 'border-gray-300 hover:border-primary-400'
        }`}
        onDrop={handleDrop}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
      >
        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {uploading ? 'Uploading files...' : 'Upload your documents'}
        </h3>
        <p className="text-gray-600 mb-4">
          Drag and drop files here, or click to select files
        </p>
        <input
          type="file"
          multiple
          onChange={handleFileInput}
          className="hidden"
          id="file-upload"
          disabled={uploading}
        />
        <label htmlFor="file-upload">
          <Button
            as="span"
            disabled={uploading}
            className="cursor-pointer"
          >
            {uploading ? 'Uploading...' : 'Select Files'}
          </Button>
        </label>
      </div>

      {error ? (
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      ) : null}

      {/* Files List */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Files</h3>
        {loading ? (
          <div className="text-center py-8 text-gray-500">Loading your files…</div>
        ) : files.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No files uploaded yet. Upload your first document above.
          </div>
        ) : (
          <div className="space-y-3">
            {files.map((file, index) => (
              <motion.div
                key={file.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  {getFileIcon(file.type)}
                  <div>
                    <h4 className="font-medium text-gray-900">{file.name}</h4>
                    <p className="text-sm text-gray-500">
                      {formatFileSize(file.size)} • Uploaded on {new Date(file.uploadDate).toLocaleDateString()}
                      {(file.uploadedBy || file.uploadedByEmail) ? ` • Uploaded by ${file.uploadedBy || file.uploadedByEmail}` : ''}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => void downloadFile(file)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    title="Download"
                  >
                    <Download className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => void deleteFile(file)}
                    disabled={removingFileId === file.id}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                    title="Remove"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FileManager;