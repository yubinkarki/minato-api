import { type Express, type Response, type Request, type NextFunction } from "express";

import { appStrings } from "#constant/common-string.constant";

/**
 * Middleware that sets various security headers on the response.
 *
 * @function securityHeaders
 * @param {Request} _ The incoming Express request (unused)
 * @param {Response} res The Express response object
 * @param {NextFunction} next The next middleware function
 *
 * @description
 * Applies the following headers:
 *
 * - **X-Frame-Options**: Prevents your site from being embedded in iframes on other domains
 *   - Value: `SAMEORIGIN`
 *
 * - **X-Content-Type-Options**: Tells the browser not to MIME-sniff and to strictly use the Content-Type header
 *   - Value: `nosniff`
 *
 * - **Cross-Origin-Resource-Policy (CORP)**: Restricts how other sites can embed or load your resources
 *   - Value: `same-origin`
 *
 * - **Referrer-Policy**: Controls how much of your URL is shared with the next site
 *   - Value: `strict-origin-when-cross-origin`
 *
 * - **Strict-Transport-Security (HSTS)**: Forces the browser to only connect via HTTPS for the specified time
 *   - Value: `max-age=2629800; includeSubDomains`
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
 * @description
 * Registers the following routes:
 *
 * - **Base Route**
 *   - Method: `GET`
 *   - Path: `/`
 *   - Purpose: Startup verification endpoint
 *   - Response: `200 OK` with a startup confirmation message
 *
 * - **Fallback Route**
 *   - Method: `ALL`
 *   - Path: `*` (any unmatched route)
 *   - Purpose: Handles undefined routes
 *   - Response: `404 Not Found` with a generic message
 *
 * @remarks
 * The fallback route must be registered after all other routes to properly catch unmatched requests.
 */
export function setupBase(app: Express): void {
  // base route
  app.get("/", (_: Request, res: Response): void => {
    res.status(200).send(`${appStrings.startSuccess}`);
  });

  // undefined route
  app.use((_: Request, res: Response): void => {
    res.status(404).send(`${appStrings.noRoute}`);
  });
}
