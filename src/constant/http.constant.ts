export const successCode = {
  // 200 series
  ok: 200,
  created: 201,
  accepted: 202,
  noContent: 204,
  resetContent: 205,
  partialContent: 206,
  nonAuthoritativeInformation: 203,

  // 300 series
  redirectionSeeOther: 303,
  redirectionUseProxy: 305,
  redirectionNotModified: 304,
  redirectionMultipleChoices: 300,
  redirectionMovedPermanently: 301,
  redirectionMovedTemporarily: 302,
  redirectionTemporaryRedirect: 307,
  redirectionPermanentRedirect: 308,
} as const;

export const errorCode = {
  // 400 series
  teapot: 418,
  forbidden: 403,
  linkExpired: 410,
  unauthorized: 401,
  badException: 400,
  largePayload: 413,
  notAcceptable: 406,
  tooManyRequest: 429,
  conflictException: 409,
  notFoundException: 404,
  validationException: 422,
  unsupportedMediaType: 415,

  // 500 series
  badGateway: 502,
  internalServer: 500,
  notImplemented: 501,
  insufficientStorage: 507,
} as const;

export const errorMessage = {
  unknown: "something went wrong",
  missingRequiredEnv: "missing required env variables",
} as const;
