import { Request, Response } from "express";

export const register = async (req: Request, res: Response): Promise<void> => {
  const { email } = req.body as { email?: string };

  if (!email) {
    res.status(400).json({ message: "Email is required" });
    return;
  }

  res.status(201).json({ message: "Register endpoint is ready", email });
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email } = req.body as { email?: string };

  if (!email) {
    res.status(400).json({ message: "Email is required" });
    return;
  }

  res.status(200).json({ message: "Login endpoint is ready", email });
};
