import { signIn } from "@/auth";
import { BASE_URL } from "@/lib/constant";
import { redirect } from "next/navigation";

export default async (prevState: any, formData: FormData) => {
  if (!formData.get("userId") || !(formData.get("userId") as string)?.trim()) {
    return { message: "no_userId" };
  }
  if (
    !formData.get("password") ||
    !(formData.get("password") as string)?.trim()
  ) {
    return { message: "no_password" };
  }
  let shouldRedirect = false;

  try {
    const response = await fetch(`${BASE_URL}/user/signup`, {
      method: "POST",
      body: formData,
      credentials: "include",
    });
    if (response.status === 403) {
      return { message: "user_exists" };
    }
    shouldRedirect = true;
    await signIn("credentials", {
      username: formData.get("userId"),
      password: formData.get("password"),
      redirect: false,
    });
  } catch (error) {
    console.error(error);
    return { message: "error" };
  }

  if (shouldRedirect) {
    redirect("/");
  }
};
