import { type Task, type InsertTask } from "@shared/schema";

export interface IStorage {
  getTasks(): Promise<Task[]>;
  createTask(task: InsertTask): Promise<Task>;
  updateTaskStatus(id: number, status: string): Promise<Task>;
}

let tasks: Task[] = [];
let idCounter = 1;

export class MemoryStorage implements IStorage {
  async getTasks(): Promise<Task[]> {
    return tasks;
  }

  async createTask(insertTask: InsertTask): Promise<Task> {
    const newTask: Task = {
      id: idCounter++,
      ...insertTask,
    };
    tasks.push(newTask);
    return newTask;
  }

  async updateTaskStatus(id: number, status: string): Promise<Task> {
    const task = tasks.find((task) => task.id === id);
    if (!task) {
      throw new Error(`Task with id ${id} not found`);
    }
    task.status = status;
    return task;
  }
}

export const storage = new MemoryStorage();
