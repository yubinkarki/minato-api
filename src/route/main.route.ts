import { Router } from "express";

import { appStrings } from "#root/src/constant/common-string.constant";

import { default as publicRoute } from "./public.route";

const router: Router = Router();

const apiV1: string = appStrings.apiV1;

// host/api/v1/public
router.use(`/${apiV1}/public`, publicRoute);

export default router;
