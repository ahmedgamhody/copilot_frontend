import { IChat } from "@/interfaces";
import { Trash } from "lucide-react";

export default function SideBarChat({
  chat,
  handleDelete,
}: {
  chat: IChat;
  handleDelete: (id: number) => void;
}) {
  return (
    <div className="flex items-center justify-between mb-4 border-b border-secondary p-2">
      <div>
        <h1 className="font-semibold">{chat.title}</h1>
        <p className="text-sm text-gray-500">{chat.description}</p>
      </div>
      <Trash
        onClick={() => handleDelete(chat.id)}
        className="text-secondary w-10 h-10 cursor-pointer hover:text-red-500 hover:bg-red-100 duration-200 p-2 rounded-md"
      />
    </div>
  );
}
