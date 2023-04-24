import { Router } from "express";
import { getHomePage } from "../controllers/home.controllers.mjs";
const homeRouter = Router();

homeRouter.route('/')
  .get(getHomePage);

export default homeRouter;