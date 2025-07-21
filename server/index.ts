
import express from "express";
import cors from "cors";
import path from "path";

export function createServer() {
  const app = express();
  
  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Health check endpoint
  app.get("/health", (req, res) => {
    res.json({ status: "OK", timestamp: new Date().toISOString() });
  });

  // API routes
  app.use("/api", (req, res) => {
    res.json({ message: "API is working" });
  });

  return app;
}
