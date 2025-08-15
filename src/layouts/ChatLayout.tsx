import ChatSideBar from "@/components/ChatSideBar";
import ChatPage from "@/pages/ChatPage";

export default function ChatLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex">
        <div className="w-64 flex-shrink-0">
          <ChatSideBar />
        </div>

        <div className="flex-1 relative">
          <ChatPage />
        </div>
      </div>
    </div>
  );
}
