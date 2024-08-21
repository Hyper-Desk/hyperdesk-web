import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { DomainFormFields, domainFormSchema } from "../lib/domainFormSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { useProxmoxStore } from "@/stores/useProxmoxStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { instance } from "@/lib/instance";

export default function DomainForm() {
  const { toast } = useToast();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DomainFormFields>({
    resolver: zodResolver(domainFormSchema),
  });
  const { setDomain, setPort, setUserId, setPassword } = useProxmoxStore(
    (state) => state,
  );
  const { isError, error } = useQuery({
    queryKey: ["proxy"],
    queryFn: async () => {
      const { data } = await instance.get("/user/proxy");
      setValue("domain", data.address);
      setValue("port", data.port);
      return data;
    },
    retry: false,
  });

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
    setDomain(formData.domain);
    setPort(formData.port);
    setUserId(formData.id);
    setPassword(formData.password);

    toast({
      variant: "primary",
      title: "등록 완료",
      description: "하이퍼바이저가 등록되었습니다.",
    });
  };

  return (
    <form
      className="flex flex-col items-center w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-4 self-center w-7/8">
        <h1 className="text-4xl font-bold text-primary">
          🖥️ 하이퍼바이저 등록
        </h1>
        <div className="flex gap-4 w-full justify-center mt-4">
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
        <div className="my-2 rounded-md text-sm w-full h-[10px] font-medium flex justify-center items-center text-red-500">
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
