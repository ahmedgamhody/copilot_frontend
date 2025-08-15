import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  num: number;
}

export default function AccordionItem({
  title,
  children,
  num,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white text-primary rounded-2xl mt-6 max-w-7xl w-full shadow-md overflow-hidden p-1 transition-all duration-300 ease-in-out hover:shadow-lg">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex items-start justify-between group transition-all duration-200"
      >
        <div className="bg-secondary text-white font-bold text-xl px-6 py-4 rounded-l-2xl rounded-br-[80px] group-hover:bg-opacity-90 transition-all duration-300">
          Test <br /> Question <br /> {`${num}`}
        </div>
        <div className="flex-1 px-6 py-4 text-left font-bold text-lg md:text-xl group-hover:text-secondary transition-colors duration-200">
          {title}
        </div>
        <div className="px-6 py-4">
          <div
            className={`transform transition-all duration-300 ease-in-out ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <ChevronDown
              size={24}
              className="text-primary group-hover:text-secondary transition-colors duration-200"
            />
          </div>
        </div>
      </div>

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="py-4 px-6 text-md md:text-lg font-semibold text-start">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
