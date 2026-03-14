import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Converts a file URL string to the filesystem path equivalent of CommonJS `__filename`.
 *
 * @function getFilename
 * @param {string} filepath A file URL string, usually `import.meta.url`
 *
 * @returns {string} The absolute filesystem path of the current module file
 *
 * @remarks
 * - Only works in ESM context with `import.meta.url` available
 * - Returns the full file path including the filename and extension
 *
 * @example
 * getFilename(import.meta.url); // "/app/src/util/path.util.ts"
 */
export function getFilename(filepath: string): string {
  return fileURLToPath(filepath);
}

/**
 * Converts a file URL string to the directory path equivalent of CommonJS `__dirname`.
 *
 * @function getDirname
 * @param {string} filepath A file URL string, usually `import.meta.url`
 *
 * @returns {string} The absolute directory path of the current module
 *
 * @remarks
 * - Only works in ESM context with `import.meta.url` available
 * - Returns only the directory path without the filename
 *
 * @example
 * getDirname(import.meta.url); // "/app/src/util"
 */
export function getDirname(filepath: string): string {
  return dirname(fileURLToPath(filepath));
}
