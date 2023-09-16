import { getTicker, seedTable } from "../controllers/ticker";

const express = require("express");
const router = express.Router();

router.get("/getTicker", getTicker);
router.get("/seed", seedTable);
export default router;
