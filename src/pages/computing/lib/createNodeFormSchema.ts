import { z } from "zod";

export const createNodeFormSchema = z.object({
  node: z.string().min(1, {
    message: "노드 이름을 입력하세요.",
  }),
  vmid: z.string().min(1, {
    message: "VM ID를 입력하세요.",
  }),
});

export type CreateNodeFormFields = z.infer<typeof createNodeFormSchema>;
