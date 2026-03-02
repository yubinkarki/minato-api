import { type Request, type Response } from "express";

import { appStrings } from "#constant/common-string.constant";

export function getVersion(_: Request, res: Response): void {
  res.status(200).send(`App version is ${appStrings.appVersion}`);
}
