import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Plus } from "lucide-react";
import CreateVMForm from "./CreateVMForm";

interface CreateVMDialogProps {
  node: string;
}

export default function CreateVMDialog({ node }: CreateVMDialogProps) {
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div
          className="flex h-[350px] w-[350px] cursor-pointer items-center justify-center gap-2 rounded-2xl border-primary bg-white p-6 border-4 hover:bg-primary"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Plus color={hovered ? "#ffffff" : "#04c8a4"} size={100} />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="mb-4">
          <DialogTitle>VM 생성하기</DialogTitle>
          <DialogDescription>
            <span className="font-bold">{node}</span>에 새로운 VM을 생성합니다.
          </DialogDescription>
        </DialogHeader>
        <CreateVMForm node={node} setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
}
