import express from "express";
import cors from "cors";
import { setupRoutes } from "./routes";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Setup routes
  setupRoutes(app);

  return app;
}