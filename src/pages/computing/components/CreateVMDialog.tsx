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

export default function CreateVMDialog() {
  const [hovered, setHovered] = useState(false);

  return (
    <Dialog>
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
            하이퍼바이저에 새로운 VM을 생성합니다.
          </DialogDescription>
        </DialogHeader>
        <CreateVMForm />
      </DialogContent>
    </Dialog>
  );
}
