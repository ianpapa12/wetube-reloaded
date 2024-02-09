import express from "express";
import { join, login } from "../controllers/userController";
import { trending, search } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login); //login은 user가 함으로 usercontroller에서 설정
globalRouter.get("/search", search); //search는 video를 찾으므로 videocontroller에서 설정

export default globalRouter;
