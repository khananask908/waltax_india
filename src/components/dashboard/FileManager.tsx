'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Upload, Download, Trash2, File, FileText, Image, Video, Music } from 'lucide-react';
import Button from '../ui/Button';

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  uploadDate: string;
  url: string;
}

const FileManager = () => {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  // Mock data for demonstration
  useEffect(() => {
    const mockFiles: UploadedFile[] = [
      {
        id: '1',
        name: 'Company_Registration_Documents.pdf',
        size: 2048576,
        type: 'application/pdf',
        uploadDate: '2024-01-15',
        url: '#'
      },
      {
        id: '2',
        name: 'GST_Certificate.jpg',
        size: 1024000,
        type: 'image/jpeg',
        uploadDate: '2024-01-10',
        url: '#'
      },
      {
        id: '3',
        name: 'Financial_Statements.xlsx',
        size: 512000,
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        uploadDate: '2024-01-05',
        url: '#'
      }
    ];
    setFiles(mockFiles);
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
    setUploading(true);
    
    // Simulate file upload
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      const newFile: UploadedFile = {
        id: Date.now().toString() + i,
        name: file.name,
        size: file.size,
        type: file.type,
        uploadDate: new Date().toISOString().split('T')[0],
        url: URL.createObjectURL(file)
      };
      
      // Simulate upload delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFiles(prev => [...prev, newFile]);
    }
    
    setUploading(false);
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

  const deleteFile = (id: string) => {
    setFiles(prev => prev.filter(file => file.id !== id));
  };

  const downloadFile = (file: UploadedFile) => {
    // In a real implementation, this would download from cloud storage
    const link = document.createElement('a');
    link.href = file.url;
    link.download = file.name;
    link.click();
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900">File Manager</h2>
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

      {/* Files List */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Files</h3>
        {files.length === 0 ? (
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
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => downloadFile(file)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    title="Download"
                  >
                    <Download className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => deleteFile(file.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Delete"
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