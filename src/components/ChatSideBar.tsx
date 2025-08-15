import { CircleMinus, SquarePen } from "lucide-react";

export default function ChatSideBar() {
  return (
    <aside className="h-[103vh] bg-[#eeeeee] p-4">
      <h2 className="text-xl font-bold mb-4 flex items-center justify-between">
        <CircleMinus className="w-5 h-5 cursor-pointer" />
        <SquarePen className="w-5 h-5 cursor-pointer" />
      </h2>
      <h2 className="text-xl font-bold mb-4">Chat History</h2>
      <div>ss</div>
    </aside>
  );
}
