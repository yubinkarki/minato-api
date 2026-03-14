import { getFilename } from "./path.util";
import { getColorCode } from "./helper.util";
import { getIsoTimestamp } from "./date-time.util";
import { appEmojis } from "#root/src/constant/string.constant";
import { type LogLevelType, type LoggerMessageType } from "#root/src/constant/type.constant";

/**
 * Custom logger class for colored console logging with multiple log levels.
 *
 * @class CustomLogger
 *
 * @remarks
 * - Provides methods to log messages at different severity levels with ANSI color coding and emojis
 * - Each log entry includes a timestamp, log level, source filename, and description
 * - Supports the following log levels: error, warn, info, http, debug, verbose, and silly
 *
 * @example
 * logger.info({ description: "Server started", filename: "app.ts" });
 * logger.error({ description: new Error("Something went wrong") });
 */
class CustomLogger {
  /**
   * Internal method that formats and outputs log messages to console.
   *
   * @private
   * @param {LogLevelType} level The log level for this message
   * @param {LoggerMessageType} detail Object containing description and filename
   *
   * @remarks
   * - If description is an Error instance, only the message property is logged
   * - Applies ANSI color codes for terminal output and resets color after message
   * - Formats the log message with emoji, timestamp, level, filepath, and description
   */
  private log(level: LogLevelType, detail: LoggerMessageType): void {
    const timestamp: string = getIsoTimestamp();
    const colorCode: string = getColorCode(level);
    const emoji: string = appEmojis[level] ?? appEmojis.fallback;
    const filepath: string = detail.filename ?? getFilename(import.meta.url);
    const description: string | unknown =
      detail.description instanceof Error ? detail.description.message : detail.description;

    const logMessage: string = `${emoji} ${timestamp} ${level.toUpperCase()} - ${filepath} - ${description}`;

    // eslint-disable-next-line no-console
    console.log(`${colorCode}${logMessage}\x1b[0m`);
  }

  error(detail: LoggerMessageType): void {
    this.log("error", detail);
  }

  warn(detail: LoggerMessageType): void {
    this.log("warn", detail);
  }

  info(detail: LoggerMessageType): void {
    this.log("info", detail);
  }

  http(detail: LoggerMessageType): void {
    this.log("http", detail);
  }

  debug(detail: LoggerMessageType): void {
    this.log("debug", detail);
  }

  silly(detail: LoggerMessageType): void {
    this.log("silly", detail);
  }

  verbose(detail: LoggerMessageType): void {
    this.log("verbose", detail);
  }
}

export const logger: CustomLogger = new CustomLogger();
