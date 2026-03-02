import { default as expressApp } from "#config/express.config";

import { appStrings } from "#constant/common-string.constant";
import { errorMessage as EM } from "#constant/http.constant";

const appPort: string | undefined = process.env.APP_PORT;
const appEnv: string | undefined = process.env.APP_ENVIRONMENT;

if (!appPort || !appEnv) throw new Error(EM.missingRequiredEnv);

expressApp.set("trust proxy", true);

expressApp
  .listen(appPort, () => console.info(`${appStrings.startSuccess} at port ${appPort}`))
  .on("error", (e: unknown) => console.error("error starting the app", e));
