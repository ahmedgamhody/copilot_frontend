import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
export default function CustomDialog({
  text,
  title,
  actionText,
  className,
}: {
  text: string;
  title: string;
  actionText: string;
  className?: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="text-lg font-semibold text-secondary hover:text-red-500 hover:bg-red-100 duration-200 p-2 rounded-md"
        >
          {text}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button className={className}>{actionText}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
