import { Router } from "express";

import { login, register } from "../controllers/auth.controller";

const router = Router();

/**
 * @openapi
 * /api/auth/register:
 *   post:
 *     summary: Register user (stub)
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *     responses:
 *       201:
 *         description: Register endpoint ready
 *       400:
 *         description: Missing required fields
 */
router.post("/register", register);

/**
 * @openapi
 * /api/auth/login:
 *   post:
 *     summary: Login user (stub)
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *     responses:
 *       200:
 *         description: Login endpoint ready
 *       400:
 *         description: Missing required fields
 */
router.post("/login", login);

export default router;
