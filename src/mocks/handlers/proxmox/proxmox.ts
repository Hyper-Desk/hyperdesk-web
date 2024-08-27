import { proxyHandler } from "./proxy";
import { tokenHandler } from "./token";
import { vmListHandler } from "./vmList";

export const handlers = [proxyHandler, vmListHandler, tokenHandler];
