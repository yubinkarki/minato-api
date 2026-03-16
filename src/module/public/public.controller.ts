import { type Request, type Response } from "express";

import { appStrings } from "#root/src/constant/string.constant";
import { sendSuccess } from "#util/helper.util";

const appUrl: string = process.env.APP_URL as string;
const appEnv: string = process.env.APP_ENVIRONMENT as string;

export function getVersion(_: Request, res: Response): void {
  sendSuccess(res, { version: appStrings.appVersion, environment: appEnv, url: appUrl });
}
