import { z } from "zod";

export const domainFormSchema = z.object({
  domain: z.string().min(1, {
    message: "도메인 또는 IP 주소를 입력하세요.",
  }),
  port: z.string().min(1, {
    message: "포트번호를 입력하세요.",
  }),
  id: z.string().min(1, {
    message: "아이디를 입력해주세요.",
  }),
  password: z.string().min(1, {
    message: "비밀번호를 입력해주세요.",
  }),
});

export type DomainFormFields = z.infer<typeof domainFormSchema>;
