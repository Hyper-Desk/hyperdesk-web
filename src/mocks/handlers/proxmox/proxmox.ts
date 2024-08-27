import { isoHandler } from "./iso";
import { proxyHandler } from "./proxy";
import { storageHandler } from "./storage";
import { tokenHandler } from "./token";
import { vmListHandler } from "./vmList";

export const handlers = [
  proxyHandler,
  vmListHandler,
  tokenHandler,
  storageHandler,
  isoHandler,
];
