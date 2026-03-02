import { Router } from "express";

import { getVersion } from "#module/public/public.controller";

const router: Router = Router();

// .../version
router.get("/version", getVersion);

export default router;
