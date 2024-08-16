import { Button } from "@/components/ui/button";
import { SignUpFormFields, signUpFormSchema } from "./lib/signUpFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { signUpRequest } from "./apis/signUpRequest";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

export default function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormFields>({ resolver: zodResolver(signUpFormSchema) });
  const { toast } = useToast();

  const onSubmit: SubmitHandler<SignUpFormFields> = async (formData) => {
    try {
      const { accessToken, userId } = await signUpRequest(
        formData.id,
        formData.password,
      );
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userId", userId);
      toast({
        variant: "primary",
        title: "회원가입 성공",
        description: "메인 페이지로 이동합니다.",
      });
      navigate("/");
    } catch (error) {
      console.error(error);
      setError("root", {
        message: "서버 오류가 발생했습니다. 다시 시도해주세요.",
      });
    }
  };

  return (
    <div className="flex h-full w-full items-center justify-center p-16">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-primary mb-4">
          계정을 생성하세요
        </h1>
        <form className="flex w-96 flex-col" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("id")}
            name="id"
            type="text"
            placeholder="아이디"
            className="my-2 rounded-md border p-2"
          />
          <input
            {...register("password")}
            name="password"
            type="password"
            placeholder="비밀번호"
            className="my-2 rounded-md border p-2"
          />
          <Button
            type="submit"
            className="my-2 rounded-md bg-primary p-2 text-white hover:bg-primary-dark"
            disabled={isSubmitting}
          >
            {isSubmitting ? "로딩 중..." : "회원가입"}
          </Button>
          <Link
            to="/login"
            className="my-2 rounded-md text-sm font-medium
            flex items-center justify-center
            border border-primary-dark bg-white p-2 text-primary-dark hover:bg-gray-200"
          >
            뒤로 가기
          </Link>
          <div className="my-2 rounded-md text-sm w-full h-[10px] font-medium flex justify-center items-center text-red-500">
            {errors.root && errors.root.message}
            {errors.id && errors.id.message}
            {errors.password && errors.password.message}
          </div>
        </form>
      </div>
    </div>
  );
}
