import { Router } from "express";
import { getRequestData } from "../controllers/whoami.controllers.mjs";
const whoamiRouter = Router();

whoamiRouter.route('/whoami')
  .get(getRequestData);

export default whoamiRouter;
