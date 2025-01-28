import express from "express";
import { smsProviders } from "../const.js";
import { enqueueSMS } from '../controllers/sms.js';

const router = express.Router();



router.post('/enqueue', enqueueSMS);



export default router;