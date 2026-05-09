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

export type ResponseDataType =
  | string
  | unknown
  | (string | number | object)[]
  | Record<string | number, string | number | object | (string | number | object)[]>;

export type ResponseMessageType =
  | "array"
  | "string"
  | "number"
  | "bigint"
  | "symbol"
  | "object"
  | "boolean"
  | "function"
  | "undefined";

export type CookieType = {
  name: string;
  value: string;
  options: {
    path?: string;
    expires?: Date;
    maxAge?: number;
    secure?: boolean;
    httpOnly?: boolean;
    sameSite?: "strict" | "lax" | "none";
  };
};

export type FinalResponseType = {
  success: boolean;
  timestamp: string;
  message?: ResponseDataType;
  messageType: ResponseMessageType;
};

export type DetailedStatusResponse = {
  url: string;
  uptime: number;
  commit: string;
  version: string;
  environment: string;
  nodeVersion: string;
  memory: {
    heapUsedMB: number;
    rssMemoryMB: number;
    heapTotalMB: number;
  };
};
