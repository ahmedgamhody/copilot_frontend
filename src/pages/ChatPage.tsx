import ChatInput from "@/components/chat/ChatInput";
import useTitle from "../hooks/useChangePageTitle";
import { useState } from "react";
import ChatMessagesBox from "@/components/chat/ChatMessagesBox";
import { Message } from "@/interfaces";

export default function ChatPage() {
  useTitle("Chat Page");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isSending, setIsSending] = useState(false);
  const handleSubmit = () => {
    if (message.trim()) {
      setIsSending(true);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, isUser: true },
      ]);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, isUser: false },
      ]);
      setMessage("");
      setIsSending(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="h-full flex flex-col">
      {messages.length === 0 ? (
        <div className="flex-1 flex items-center justify-center">
          <ChatInput
            message={message}
            setMessage={setMessage}
            handleSubmit={handleSubmit}
            handleKeyPress={handleKeyPress}
            messages={messages}
          />
        </div>
      ) : (
        <>
          <div className="flex-1 overflow-hidden">
            <ChatMessagesBox messages={messages} isSending={isSending} />
          </div>

          <div className="border-t border-gray-200 bg-white p-4">
            <ChatInput
              message={message}
              setMessage={setMessage}
              handleSubmit={handleSubmit}
              handleKeyPress={handleKeyPress}
              messages={messages}
            />
          </div>
        </>
      )}
    </div>
  );
}
