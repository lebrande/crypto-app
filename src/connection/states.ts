import { AppError } from "../error/types";
import { Connection } from "./types";

export type ConnectionState = {
  type: 'NO_METAMASK';
} | {
  type: 'METAMASK_CONNECTED';
  connection: Connection;
} | {
  type: 'METAMASK_ERROR';
  error: AppError;
};