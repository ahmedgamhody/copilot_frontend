import { CircleMinus, SquarePen } from "lucide-react";

export default function ChatSideBar() {
  return (
    <aside className="h-full bg-[#eeeeee] p-4">
      <h2 className="text-xl font-bold mb-4 flex items-center justify-between">
        <CircleMinus className="w-5 h-5 cursor-pointer" />
        <SquarePen className="w-5 h-5 cursor-pointer" />
      </h2>
      <h2 className="text-xl font-bold mb-4 ">Chat History</h2>
      <div className="h-[1px] w-full bg-gray-300 rounded mb-4">ss</div>
    </aside>
  );
}
