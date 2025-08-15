import { useEffect, useRef } from "react";
import Spinner from "../ui/Spinner";
import { Message } from "@/interfaces";

interface ChatMessagesProps {
  messages: Message[];
  isSending: boolean;
}

export default function ChatMessagesBox({
  messages,
  isSending,
}: ChatMessagesProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <div className="h-[90vh] flex flex-col">
      <div className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-4">
            {messages?.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.isUser ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-[70%] rounded-lg px-4 py-2 ${
                    message.isUser
                      ? "bg-primary text-white"
                      : "bg-secondary text-white"
                  }`}
                >
                  {message?.text}
                </div>
              </div>
            ))}
            {isSending && (
              <div className="flex justify-end">
                <div className="bg-gray-100 rounded-lg px-4 py-3">
                  <Spinner />
                </div>
              </div>
            )}
          </div>
          <div ref={messagesEndRef} />
        </div>
      </div>
    </div>
  );
}
