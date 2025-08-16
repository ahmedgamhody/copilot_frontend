// FileDropzone.tsx
import React, { useCallback } from "react";
import { X, Upload, FileUp } from "lucide-react";

interface FileDropzoneProps {
  isOpen: boolean;
  onClose: () => void;
  files: File[];
  onFilesChange: (files: File[]) => void;
}

export default function FileDropzone({
  isOpen,
  onClose,
  files,
  onFilesChange,
}: FileDropzoneProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      onFilesChange([...files, ...acceptedFiles]);
    },
    [files, onFilesChange]
  );

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    onDrop(selectedFiles);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    onDrop(droppedFiles);
  };

  const removeFile = (indexToRemove: number) => {
    onFilesChange(files.filter((_, index) => index !== indexToRemove));
  };

  if (!isOpen) return null;

  return (
    <div className="mb-4">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <div
          className="border-2 border-dashed border-blue-200 rounded-xl p-8 text-center hover:border-blue-600 transition-colors cursor-pointer bg-gray-50"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => document.getElementById("fileInput")?.click()}
        >
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              <FileUp className="w-8 h-8 text-gray-500" />
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Choose a file or drag & drop it here
          </h3>

          <p className="text-gray-500 mb-6 text-sm">
            JPEG, PNG, PDG, and MP4 formats, up to 50MB
          </p>

          <button className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm">
            Browse File
          </button>

          <input
            id="fileInput"
            aria-label="Upload your files"
            type="file"
            multiple
            accept=".jpeg,.jpg,.png,.pdf,.mp4"
            onChange={handleFileInput}
            className="hidden"
          />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-4 text-gray-500 hover:text-gray-700 transition-colors flex items-center gap-2 text-sm"
        >
          <X className="w-4 h-4" />
          Close
        </button>
      </div>

      {/* Selected Files Display */}
      {files.length > 0 && (
        <div className="mt-4 bg-white rounded-2xl border border-gray-200 shadow-sm p-4">
          <div className="flex flex-wrap gap-2">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2"
              >
                <Upload className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-gray-700 max-w-32 truncate">
                  {file.name}
                </span>
                <span className="text-xs text-gray-500">
                  ({(file.size / 1024 / 1024).toFixed(1)}MB)
                </span>
                <button
                  title="Remove file"
                  onClick={() => removeFile(index)}
                  className="text-red-500 hover:text-red-700 transition-colors ml-2"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
