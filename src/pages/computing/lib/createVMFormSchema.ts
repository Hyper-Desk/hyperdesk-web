import { z } from "zod";

export const VMFormSchema = z.object({
  node: z
    .string()
    .min(1, "가상머신 이름을 입력해주세요.")
    .regex(/^[a-zA-Z0-9_-]*$/, "영문, 숫자, -, _ 만 입력 가능합니다."),
  vmid: z
    .number({
      message: "숫자를 입력해주세요.",
    })
    .min(100, "100 이상의 숫자를 입력해주세요.")
    .max(999999999, "999999999 이하의 숫자를 입력해주세요."),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  country: z.string().min(1, "Country is required"),
  street: z.string().min(1, "Street is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zip: z.string().min(1, "Zip is required"),
});
