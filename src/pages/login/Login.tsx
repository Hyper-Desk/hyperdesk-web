import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { LoginFormFields, loginFormSchema } from "./lib/loginFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { loginRequest } from "./apis/loginRequest";
import { useToast } from "@/components/ui/use-toast";

export default function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormFields>({ resolver: zodResolver(loginFormSchema) });
  const { toast } = useToast();

  const onSubmit: SubmitHandler<LoginFormFields> = async (formData) => {
    try {
      const { accessToken, userId } = await loginRequest(
        formData.id,
        formData.password,
      );
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userId", userId);
      toast({
        variant: "primary",
        title: "로그인 성공",
        description: "메인 페이지로 이동합니다.",
      });
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error);
        if (error.response?.status === 400) {
          setError("root", {
            message: "아이디 또는 비밀번호가 일치하지 않습니다.",
          });
        } else if (error.response?.status === 401) {
          setError("root", {
            message: "아이디 또는 비밀번호가 일치하지 않습니다.",
          });
        } else {
          setError("root", {
            message: "서버 오류가 발생했습니다. 다시 시도해주세요.",
          });
        }
      }
    }
  };

  return (
    <div className="flex h-full w-full items-center justify-center p-16">
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="mb-4 text-5xl font-bold text-primary">로그인</h1>
        <div className="flex w-96 flex-col">
          <input
            {...register("id")}
            type="text"
            placeholder="아이디"
            className="my-2 rounded-md border p-2"
          />
          <input
            {...register("password")}
            type="password"
            placeholder="비밀번호"
            className="my-2 rounded-md border p-2"
          />
          <Button
            className="my-2 rounded-md bg-primary p-2 text-white hover:bg-primary-dark"
            disabled={isSubmitting}
          >
            {isSubmitting ? "로그인 중..." : "로그인"}
          </Button>
          <Link
            to="/signup"
            className="my-2 rounded-md text-sm font-medium
            flex items-center justify-center
            border border-primary-dark bg-white p-2 text-primary-dark hover:bg-gray-200"
          >
            회원가입
          </Link>
          {errors.id && (
            <p className="my-2 rounded-md text-sm font-medium text-red-500 w-full h-[10px] flex justify-center items-center">
              {errors.id.message}
            </p>
          )}
          {errors.password && (
            <p className="my-2 rounded-md text-sm font-medium text-red-500 w-full h-[10px] flex justify-center items-center">
              {errors.password.message}
            </p>
          )}
          {errors.root && (
            <p className="my-2 rounded-md text-sm font-medium text-red-500 w-full h-[10px] flex justify-center items-center">
              {errors.root.message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
