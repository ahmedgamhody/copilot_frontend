import ChatSideBar from "@/components/chat/ChatSideBar";
import ChatPage from "@/pages/ChatPage";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleSidebar } from "@/store/ui/uiSlice";
import { Menu, X } from "lucide-react";

export default function ChatLayout() {
  const { isSidebarOpen } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="flex-1 flex">
        {/* Sidebar with smooth animation */}
        <div
          className={`flex-shrink-0 transition-all duration-300 ease-in-out overflow-hidden ${
            isSidebarOpen ? "w-64 opacity-100" : "w-0 opacity-0"
          }`}
        >
          <div className="w-full">
            <ChatSideBar />
          </div>
        </div>

        <div className="flex-1 relative transition-all duration-300 ease-in-out">
          {/* Toggle sidebar button */}
          <button
            onClick={handleToggleSidebar}
            className="absolute top-4 left-4 z-10 p-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-200 ease-in-out"
            aria-label={isSidebarOpen ? "close sidebar" : "open sidebar"}
          >
            <div className="transition-transform duration-200 ease-in-out">
              {isSidebarOpen ? (
                <X className="w-5 h-5 text-gray-600" />
              ) : (
                <Menu className="w-5 h-5 text-gray-600" />
              )}
            </div>
          </button>
          <ChatPage />
        </div>
      </div>
    </div>
  );
}
