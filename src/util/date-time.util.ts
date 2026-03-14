/**
 * Returns the current UTC timestamp as a space-separated date-time string.
 *
 * @function getIsoTimestamp
 *
 * @returns {string} Current UTC time in the format YYYY-MM-DD HH:mm:ss (no milliseconds)
 *
 * @remarks
 * - Built from Date.toISOString(), so the value is UTC-based
 * - The returned string is not strict ISO 8601 because it replaces "T" with a space and omits "Z"
 * - Milliseconds are intentionally removed for cleaner log output
 * - Useful for consistent server-side logging across environments
 * - Suitable for server logs and distributed system logging
 *
 * @example
 * getIsoTimestamp(); // "2026-03-14 09:45:30"
 */
export function getIsoTimestamp(): string {
  const now: Date = new Date();
  // now.toISOString >> 2026-03-08T02:26:14.273Z
  return now.toISOString().replace("T", " ").split(".")[0];
}
