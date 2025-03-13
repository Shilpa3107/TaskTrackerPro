import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertTaskSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/tasks", async (_req, res) => {
    const tasks = await storage.getTasks();
    res.json(tasks);
  });

  app.post("/api/tasks", async (req, res) => {
    const result = insertTaskSchema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({ message: "Invalid task data" });
      return;
    }
    const task = await storage.createTask(result.data);
    res.json(task);
  });

  app.patch("/api/tasks/:id/status", async (req, res) => {
    const id = parseInt(req.params.id);
    const { status } = req.body;
    
    if (!status || typeof status !== "string") {
      res.status(400).json({ message: "Invalid status" });
      return;
    }

    try {
      const task = await storage.updateTaskStatus(id, status);
      res.json(task);
    } catch (error) {
      res.status(404).json({ message: (error as Error).message });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
