import express from "express";
import humansRouter from "./humans";

const router = express.Router();

router.use("/humans", humansRouter);

export default router;
