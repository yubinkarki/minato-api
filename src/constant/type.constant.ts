export type LogLevelType = "error" | "warn" | "info" | "http" | "debug" | "verbose" | "silly";

export type LoggerMessageType = { filename: string; description: string | unknown };

export type PackageJsonType = {
  main: string;
  name: string;
  author: string;
  version: string;
  license: string;
  description: string;
};
