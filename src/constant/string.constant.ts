/* eslint-disable */

import { join } from "node:path";
import { readFileSync } from "node:fs";

import { type LogLevelType, type PackageJsonType } from "./type.constant";

const packageJsonFilePath: string = join(process.cwd(), "/package.json");
const packageJsonFile: PackageJsonType = JSON.parse(readFileSync(packageJsonFilePath, "utf-8"));

export const appTestEnv = ["local", "development", "staging"] as const;

export const appEmojis = {
  warn: "❗️",
  info: "🚀",
  http: "🔗",
  error: "❌",
  debug: "🐛",
  silly: "🤪",
  verbose: "🔊",
  fallback: "👽",
} as const;

export const appStrings = {
  apiV1: "api/v1",
  localEnvFile: ".env.local",
  stagEnvFile: ".env.staging",
  prodEnvFile: ".env.production",
  devEnvFile: ".env.development",

  date: "date",
  name: "name",
  email: "email",
  unknown: "unknown",
  endDate: "endDate",
  uniqueId: "uniqueId",
  startDate: "startDate",
  identifier: "identifier",
  macAddress: "macAddress",

  fallbackPort: "8545",
  dateFormat: "YYYY-MM-DD",
  development: "development",
  appVersion: packageJsonFile.version,
  dateTimeFormat: "YYYY-MM-DD HH:mm:ss",
} as const;

export const appRegex = {
  namePattern: /^[a-zA-Z\s'-]{2,69}$/, // yubin karki
  decimalPattern: /^\d{1,5}(\.\d{1,20})?$/, // 10200.365555
  emailPattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // yubin@email.com
  datePattern: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/, // 2020-05-14
  versionPattern: /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, // 1.1.1.1 or 999.999.999.999
} as const;

export const colorCodes: Record<LogLevelType, string> = {
  warn: "\x1b[33m", // yellow
  info: "\x1b[36m", // cyan
  http: "\x1b[35m", // magenta
  debug: "\x1b[34m", // blue
  error: "\x1b[31m", // red
  silly: "\x1b[32m", // green
  verbose: "\x1b[37m", // white
};
