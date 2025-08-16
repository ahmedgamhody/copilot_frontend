// ChatInput.tsx
import { useState } from "react";
import { Message } from "@/interfaces";
import { Paperclip, Send } from "lucide-react";
import FileDropzone from "./FileDropzone"; // Import the dropzone component

export default function ChatInput({
  message,
  setMessage,
  handleSubmit,
  handleKeyPress,
  messages,
}: {
  message: string;
  setMessage: (msg: string) => void;
  handleSubmit: () => void;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  messages: Message[];
}) {
  const [showDropzone, setShowDropzone] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  // Enhanced submit handler to include files
  const handleSubmitWithFiles = () => {
    if (message.trim() || files.length > 0) {
      // Here you can handle the files along with the message
      console.log("Sending message:", message);
      console.log("With files:", files);

      // Call the original submit handler
      handleSubmit();

      // Reset files after sending
      setFiles([]);
      setShowDropzone(false);
    }
  };

  // Enhanced key press handler
  const handleKeyPressWithFiles = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter" && (message.trim() || files.length > 0)) {
      handleSubmitWithFiles();
    } else {
      handleKeyPress(e);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {messages.length === 0 && (
        <h1 className="text-3xl md:text-4xl font-light text-gray-800 text-center mb-8 italic">
          What's on your mind today?
        </h1>
      )}

      {/* File Dropzone */}
      <FileDropzone
        isOpen={showDropzone}
        onClose={() => setShowDropzone(false)}
        files={files}
        onFilesChange={setFiles}
      />

      {/* Input Container */}
      <div className="relative">
        <div className="flex items-center">
          <button
            type="button"
            title="Attachment"
            onClick={() => setShowDropzone((prev) => !prev)}
            className={`absolute left-4 z-10 transition-colors ${
              showDropzone || files.length > 0
                ? "text-blue-600"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <Paperclip size={20} />
          </button>

          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPressWithFiles}
            placeholder="Type your question here..."
            className="w-full pl-12 pr-16 py-4 bg-white border border-gray-200 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent text-gray-700 placeholder-gray-400"
          />

          {/* Send Button */}
          <button
            title="Send Message"
            onClick={handleSubmitWithFiles}
            disabled={!message.trim() && files.length === 0}
            className={`absolute right-2 p-3 rounded-full transition-all duration-200 ${
              message.trim() || files.length > 0
                ? "bg-gray-800 text-white hover:bg-gray-900 shadow-md hover:shadow-lg"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <Send size={18} />
          </button>
        </div>
      </div>

      {/* File count indicator (optional) */}
      {files.length > 0 && !showDropzone && (
        <div className="mt-2 text-center">
          <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {files.length} file{files.length > 1 ? "s" : ""} selected
          </span>
        </div>
      )}
    </div>
  );
}
