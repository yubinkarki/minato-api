/**
 * Generates a UTC timestamp in ISO 8601 format without milliseconds.
 *
 * @function getIsoTimestamp
 *
 * @returns {string} The current UTC timestamp in format `YYYY-MM-DD HH:mm:ss`
 *
 * @remarks
 * - Converts the current date and time to an ISO 8601 formatted string in UTC timezone
 * - Milliseconds are intentionally stripped for cleaner log output
 * - Returns UTC time, not local timezone, ensuring consistency across all timezones
 * - Suitable for server logs and distributed system logging
 */
export function getIsoTimestamp(): string {
  const now: Date = new Date();
  // now.toISOString >> 2026-03-08T02:26:14.273Z
  return now.toISOString().replace("T", " ").split(".")[0];
}
