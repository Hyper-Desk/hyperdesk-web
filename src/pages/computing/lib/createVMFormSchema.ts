import { z } from "zod";

export const VMFormSchema = z.object({
  node: z
    .string({
      required_error: "노드를 선택해주세요.",
    })
    .min(1, "노드를 선택해주세요."),
  name: z
    .string()
    .min(1, "가상머신 이름을 입력해주세요.")
    .regex(/^[a-zA-Z0-9_-]*$/, "영문, 숫자, -, _ 만 입력 가능합니다."),
  vmid: z
    .number({
      message: "숫자를 입력해주세요.",
    })
    .min(100, "100 이상의 숫자를 입력해주세요.")
    .max(999999999, "999999999 이하의 숫자를 입력해주세요."),
  osstorage: z
    .string({
      required_error: "OS 스토리지를 선택해주세요.",
    })
    .trim()
    .min(1, "OS 스토리지를 선택해주세요."),
  osiso: z
    .string({
      required_error: "OS ISO를 선택해주세요.",
    })
    .min(1, "OS ISO를 선택해주세요."),
  network: z
    .string({
      required_error: "네트워크를 선택해주세요.",
    })
    .min(1, "네트워크를 선택해주세요."),
});
