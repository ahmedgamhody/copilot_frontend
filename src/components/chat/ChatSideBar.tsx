import { CircleFadingPlus, Search } from "lucide-react";
import SideBarChat from "./SideBarChat";
import CustomDialog from "./CustomDialog";

export default function ChatSideBar() {
  const chats = [
    {
      id: 1,
      title: "Chat 1",
      description: "This is the first chat",
    },
    {
      id: 2,
      title: "Chat 2",
      description: "This is the second chat",
    },
    {
      id: 3,
      title: "Chat 3",
      description: "This is the third chat",
    },
    {
      id: 4,
      title: "Chat 4",
      description: "This is the fourth chat",
    },
    {
      id: 5,
      title: "Chat 5",
      description: "This is the fifth chat",
    },
    {
      id: 6,
      title: "Chat 6",
      description: "This is the sixth chat",
    },
    {
      id: 7,
      title: "Chat 7",
      description: "This is the seventh chat",
    },
    {
      id: 8,
      title: "Chat 8",
      description: "This is the eighth chat",
    },
    {
      id: 9,
      title: "Chat 9",
      description: "This is the ninth chat",
    },
  ];

  function handleDelete(id: number) {
    console.log("Chat Deleted Successfully", id);
  }

  return (
    <aside className="h-[103vh] bg-gray-50 flex flex-col">
      {/* Fixed Header Section */}
      <div className="p-4 flex-shrink-0">
        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded-md duration-200">
          <CircleFadingPlus className="text-secondary w-6 h-6" />
          <h1 className="text-lg font-semibold text-secondary">New chat</h1>
        </div>
        <div className="flex mt-4 items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded-md duration-200">
          <Search className="text-secondary w-6 h-6" />
          <h1 className="text-lg font-semibold text-secondary">Search chats</h1>
        </div>
        <div className="flex mt-4 items-center gap-2 p-2 rounded-md justify-between">
          <h1 className="text-lg font-semibold">History</h1>
          <CustomDialog
            text="Delete All"
            title="Confirm Deletion All Chats"
            actionText="Delete All"
            className="bg-red-500 text-white duration-300 hover:bg-red-700"
          />
        </div>
      </div>

      {/* Scrollable Chats Section */}
      <div className="flex-1 overflow-y-auto px-4">
        <div className="p-2">
          {chats.map((chat, index) => {
            return (
              <SideBarChat
                chat={chat}
                key={index}
                handleDelete={handleDelete}
              />
            );
          })}
        </div>
      </div>

      <div className="p-4 flex-shrink-0 flex justify-center items-center">
        <button className="bg-primary text-white px-6 py-2.5 rounded-md hover:bg-slate-600 transition duration-300 font-medium text-sm">
          Logout
        </button>
      </div>
    </aside>
  );
}
