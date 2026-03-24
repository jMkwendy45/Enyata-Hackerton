import { Router } from "express";

import authRouter from "./auth";

const router = Router();

/**
 * @openapi
 * /api/health:
 *   get:
 *     summary: Health check endpoint
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: API is healthy
 */
router.get("/health", (_req, res) => {
  res.status(200).json({ ok: true, message: "API is healthy" });
});

router.use("/auth", authRouter);

export default router;
