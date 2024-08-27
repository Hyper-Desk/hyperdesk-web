import { isoHandler } from "./iso";
import { networkHandler } from "./network";
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
  networkHandler,
];
