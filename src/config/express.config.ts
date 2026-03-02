import express, { type Express } from "express";

import { default as mainRoute } from "#route/main.route";
import { securityHeaders, setupBase } from "#util/start.util";

const app: Express = express();

app.use(securityHeaders);

app.use(mainRoute);

setupBase(app);

export default app;
