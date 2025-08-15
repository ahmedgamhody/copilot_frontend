import { Message } from "@/interfaces";
import { Paperclip, Send } from "lucide-react";

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
  return (
    <div className="w-full max-w-4xl mx-auto">
      {messages.length === 0 && (
        <h1 className="text-3xl md:text-4xl font-light text-gray-800 text-center mb-8 italic">
          What's on your mind today?
        </h1>
      )}

      {/* Input Container */}
      <div className="relative">
        <div className="flex items-center">
          <button
            type="button"
            title="Attachment"
            className="absolute left-4 z-10 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <Paperclip size={20} />
          </button>

          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your question here..."
            className="w-full pl-12 pr-16 py-4 bg-white border border-gray-200 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent text-gray-700 placeholder-gray-400"
          />

          {/* Send Button */}
          <button
            title="Send Message"
            onClick={handleSubmit}
            disabled={!message.trim()}
            className={`absolute right-2 p-3 rounded-full transition-all duration-200 ${
              message.trim()
                ? "bg-gray-800 text-white hover:bg-gray-900 shadow-md hover:shadow-lg"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
