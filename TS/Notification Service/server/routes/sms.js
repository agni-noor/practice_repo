import express from "express";
import { postSMS } from "../controllers/sms.js";

const router = express.Router();

router.get("/", postSMS);



export default router;