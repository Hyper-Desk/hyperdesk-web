import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Plus } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  CreateNodeFormFields,
  createNodeFormSchema,
} from "../lib/createNodeFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function CreateNodeDialog() {
  const [hovered, setHovered] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateNodeFormFields>({
    resolver: zodResolver(createNodeFormSchema),
  });

  const onSubmit: SubmitHandler<CreateNodeFormFields> = async (formData) => {
    console.log(formData);
  };

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
        <form
          onSubmit={handleSubmit(onSubmit, (error) => console.log(error))}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-2">
            <Label htmlFor="vmid">VM ID</Label>
            <Input
              {...register("vmid")}
              id="vmid"
              type="text"
              placeholder="VM ID를 입력하세요"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="node">이름</Label>
            <Input
              {...register("node")}
              id="node"
              type="text"
              placeholder="이름을 입력하세요"
            />
          </div>
          <DialogFooter className="w-full flex items-center justify-between sm:justify-between">
            <p className="text-red-500">
              {errors.vmid
                ? errors.vmid.message
                : errors.node
                  ? errors.node.message
                  : ""}
            </p>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "생성 중..." : "생성"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
