import { type Response } from "express";

import { getIsoTimestamp } from "./date-time.util";
import { colorCodes } from "#constant/string.constant";
import { successMessage, successCode, errorMessage, errorCode } from "#constant/http.constant";
import {
  type CookieType,
  type LogLevelType,
  type ResponseDataType,
  type FinalResponseType,
  type ResponseMessageType,
} from "#constant/type.constant";

/**
 * Returns the ANSI color code mapped to a log level.
 *
 * @function getColorCode
 * @param {LogLevelType} level The log level to get the color code for
 *
 * @returns {string} The ANSI escape code for the specified log level (for example, "\x1b[31m" for error)
 *
 * @remarks
 * - ANSI codes work in most modern terminals and Node.js console environments
 * - Each code is prefixed with `\x1b[` (ESC character) and ends with `m`
 * - The color reset code `\x1b[0m` should be appended after the colored text
 *
 * @example
 * getColorCode("error"); // "\x1b[31m"
 */
export function getColorCode(level: LogLevelType): string {
  return colorCodes[level];
}

/**
 * Determines the message type of the provided response data.
 *
 * @function getMessageType
 * @param {ResponseDataType} data The response data to determine the type for
 *
 * @returns {ResponseMessageType} The inferred runtime type of the value
 *
 * @remarks
 * - Arrays are explicitly identified as "array" type even though `typeof` returns "object"
 * - For non-array values, the native `typeof` operator is used to determine the type
 *
 * @example
 * getMessageType([1, 2, 3]); // "array"
 * getMessageType("hello");   // "string"
 */
function getMessageType(data: ResponseDataType): ResponseMessageType {
  if (Array.isArray(data)) return "array";
  return typeof data as ResponseMessageType;
}

/**
 * Sends a success HTTP response using the shared response envelope.
 *
 * @function sendSuccess
 * @param {Response} res The Express Response object to send the response through
 * @param {ResponseDataType} data The payload to send to the client
 * @param {number} [code] Optional HTTP status code (defaults to 200 OK)
 * @param {CookieType} [cookie] Optional cookie object to set in the response headers
 *
 * @returns {Response} The Express Response object after sending the response
 *
 * @remarks
 * - The response is wrapped in a standardized format with `success: true`
 * - A timestamp is automatically added to track when the response was generated
 * - The message type is automatically detected from the data parameter
 * - If a cookie is provided, it will be set before sending the response
 * - The `Content-Type` header is automatically set to `application/json`
 * - If `data` is `null` or `undefined`, a generic success message is used as fallback
 *
 * @example
 * sendSuccess(res, "OK");
 * sendSuccess(res, { id: 1 }, 201);
 */
export function sendSuccess(res: Response, data: ResponseDataType, code?: number, cookie?: CookieType): Response {
  const finalResponse: FinalResponseType = {
    success: true,
    timestamp: getIsoTimestamp(),
    messageType: getMessageType(data),
    message: data ?? successMessage.generic,
  };

  const response: Response = res.status(code ?? successCode.ok).set("Content-Type", "application/json");

  if (cookie) return response.cookie(cookie.name, cookie.value, cookie.options).send(finalResponse);

  return response.send(finalResponse);
}

/**
 * Sends an error HTTP response using the shared response envelope.
 *
 * @function sendError
 * @param {Response} res The Express Response object to send the response through
 * @param {ResponseDataType} data The error payload to send (can include an Error instance)
 * @param {number} [code] Optional HTTP status code (defaults to 500 Internal Server Error)
 * @param {CookieType} [cookie] Optional cookie object to set in the response headers
 *
 * @returns {Response} The Express Response object after sending the response
 *
 * @remarks
 * - The response is wrapped in a standardized format with `success: false`
 * - A timestamp is automatically added to track when the error response was generated
 * - The message type is automatically detected from the data parameter
 * - If the data is an Error instance, the error message is extracted and message type is set to "string"
 * - If a cookie is provided, it will be set before sending the response
 * - The `Content-Type` header is automatically set to `application/json`
 * - If `data` is `null` or `undefined`, a generic error message is used as fallback
 *
 * @example
 * sendError(res, "Not found", 404);
 * sendError(res, new Error("Unauthorized"), 401);
 */
export function sendError(res: Response, data: ResponseDataType, code?: number, cookie?: CookieType): Response {
  const finalResponse: FinalResponseType = {
    success: false,
    timestamp: getIsoTimestamp(),
    messageType: getMessageType(data),
    message: data ?? errorMessage.generic,
  };

  if (data instanceof Error) {
    finalResponse.message = data.message;
    finalResponse.messageType = "string";
  }

  const response: Response = res.status(code ?? errorCode.internalServer).set("Content-Type", "application/json");

  if (cookie) return response.cookie(cookie.name, cookie.value, cookie.options).send(finalResponse);

  return response.send(finalResponse);
}
