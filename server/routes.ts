import { Request, Response } from "express";

export function setupRoutes(app: any) {
  // Health check endpoint
  app.get("/health", (req: Request, res: Response) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // API routes will be added here
  app.get("/api/test", (req: Request, res: Response) => {
    res.json({ message: "API is working" });
  });
}