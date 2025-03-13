import { useDrop } from "react-dnd";
import { Paper, Typography } from "@mui/material";
import type { Task } from "@shared/schema";
import TaskCard from "./TaskCard";
import { useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface Props {
  title: string;
  status: string;
  tasks: Task[];
}

export default function TaskColumn({ title, status, tasks }: Props) {
  const queryClient = useQueryClient();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "TASK",
    drop: async (item: Task) => {
      if (item.status !== status) {
        await apiRequest("PATCH", `/api/tasks/${item.id}/status`, { status });
        queryClient.invalidateQueries({ queryKey: ["/api/tasks"] });
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <Paper
      ref={drop}
      sx={{
        p: 2,
        minHeight: 500,
        backgroundColor: isOver ? "action.hover" : "background.paper",
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </Paper>
  );
}
