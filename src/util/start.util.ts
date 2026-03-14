import { type Express, type Response, type Request, type NextFunction } from "express";

import { successMessage, errorMessage } from "#constant/http.constant";

/**
 * Middleware that sets various security headers on the response.
 *
 * @function securityHeaders
 * @param {Request} _ The incoming Express request (unused)
 * @param {Response} res The Express response object
 * @param {NextFunction} next The next middleware function
 *
 * @remarks
 * Applies the following security headers:
 *
 * - **X-Frame-Options** (`SAMEORIGIN`)
 * - **X-Content-Type-Options** (`nosniff`)
 * - **Cross-Origin-Resource-Policy** (`same-origin`)
 * - **Referrer-Policy** (`strict-origin-when-cross-origin`)
 * - **Strict-Transport-Security** (`max-age=2629800; includeSubDomains`)
 *
 * @example
 * app.use(securityHeaders);
 */
export function securityHeaders(_: Request, res: Response, next: NextFunction): void {
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Cross-Origin-Resource-Policy", "same-origin");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("Strict-Transport-Security", "max-age=2629800; includeSubDomains");

  next();
}

/**
 * Configures base and fallback routes for the Express application.
 *
 * @function setupBase
 * @param {Express} app The Express application instance
 *
 * @remarks
 * Registers the following routes:
 *
 * - **Base Route** (`GET /`): Startup verification endpoint that returns `200 OK` with a confirmation message
 * - **Fallback Route** (`ALL *`): Handles all undefined routes and returns `404 Not Found` with a generic message
 *
 * The fallback route must be registered after all other routes to properly catch unmatched requests
 *
 * @example
 * setupBase(app);
 */
export function setupBase(app: Express): void {
  // base route
  app.get("/", (_: Request, res: Response): void => {
    res.status(200).send(`${successMessage.baseUrl}`);
  });

  // undefined route
  app.use((_: Request, res: Response): void => {
    res.status(404).send(`${errorMessage.noRoute}`);
  });
}
