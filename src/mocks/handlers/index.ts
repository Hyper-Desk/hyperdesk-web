import { handlers as userHandlers } from "./user";
import { handlers as proxmoxHandlers } from "./proxmox";

export const handlers = [...userHandlers, ...proxmoxHandlers];
