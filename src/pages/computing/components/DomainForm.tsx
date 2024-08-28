import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { DomainFormFields, domainFormSchema } from "../lib/domainFormSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import { useToken } from "../hooks/useToken";
import { useProxy } from "../hooks/useProxy";

export default function DomainForm() {
  const { toast } = useToast();
  const { mutateAsync } = useToken();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DomainFormFields>({
    resolver: zodResolver(domainFormSchema),
  });
  const { isError, error } = useProxy(setValue);

  useEffect(() => {
    if (isError) {
      toast({
        variant: "destructive",
        title: "프록시 정보 불러오기 실패",
        description: "프록시 정보를 등록한적이 없습니다.",
      });
    }
  }, [isError, error, toast]);

  const onSubmit: SubmitHandler<DomainFormFields> = async (formData) => {
    await mutateAsync(formData);
  };

  return (
    <form
      className="flex w-full flex-col items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-7/8 flex flex-col gap-4 self-center">
        <h1 className="text-4xl font-bold text-primary">
          🖥️ 하이퍼바이저 등록
        </h1>
        <div className="mt-4 flex w-full justify-center gap-4">
          <div className="flex flex-col gap-4">
            <Label
              htmlFor="domain"
              className="text-base font-bold text-gray-900"
            >
              도메인 또는 IP 주소
            </Label>
            <Input
              {...register("domain")}
              id="domain"
              placeholder="도메인 또는 IP 주소를 입력하세요."
              className="w-[400px]"
            />
          </div>

          <div className="flex flex-col gap-4">
            <Label htmlFor="port" className="text-base font-bold text-gray-900">
              포트번호
            </Label>
            <Input
              {...register("port")}
              id="port"
              placeholder="포트번호를 입력하세요."
              type="number"
            />
          </div>

          <div className="flex flex-col gap-4">
            <Label htmlFor="id" className="text-base font-bold text-gray-900">
              아이디
            </Label>
            <Input
              {...register("id")}
              id="id"
              placeholder="아이디를 입력해주세요."
            />
          </div>

          <div className="flex flex-col gap-4">
            <Label
              htmlFor="password"
              className="text-base font-bold text-gray-900"
            >
              비밀번호
            </Label>
            <Input
              {...register("password")}
              id="password"
              placeholder="비밀번호를 입력해주세요."
              type="password"
            />
          </div>
        </div>
        <Button className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "등록 중..." : "등록하기"}
        </Button>
        <div className="my-2 flex h-[10px] w-full items-center justify-center rounded-md text-sm font-medium text-red-500">
          {errors.root?.message ||
            errors.domain?.message ||
            errors.port?.message ||
            errors.id?.message ||
            errors.password?.message}
        </div>
      </div>
    </form>
  );
}
