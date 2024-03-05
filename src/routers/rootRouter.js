import express from "express";
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
} from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import { publicOnlyMiddelware } from "../middlewares";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.route("/join").all(publicOnlyMiddelware).get(getJoin).post(postJoin);
rootRouter
  .route("/login")
  .all(publicOnlyMiddelware)
  .get(getLogin)
  .post(postLogin); //login은 user가 함으로 usercontroller에서 설정
rootRouter.get("/search", search);

export default rootRouter;
