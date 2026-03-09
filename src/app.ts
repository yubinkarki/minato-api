import { logger } from "#util/logger.util";
import { getFilename } from "#util/path.util";
import { errorMessage as EM } from "#constant/http.constant";
import { default as expressApp } from "#config/express.config";
import { successMessage, errorMessage } from "#constant/http.constant";

const appPort: string | undefined = process.env.APP_PORT;
const appEnv: string | undefined = process.env.APP_ENVIRONMENT;

if (!appPort || !appEnv) throw new Error(EM.missingRequiredEnv);

expressApp.set("trust proxy", true);

const filename: string = getFilename(import.meta.url);

expressApp
  .listen(appPort, () => logger.info({ description: `${successMessage.startSuccess} at port ${appPort}`, filename }))
  .on("error", (e: unknown) => logger.error({ description: `${errorMessage.systemStartError}: ${e}`, filename }));
