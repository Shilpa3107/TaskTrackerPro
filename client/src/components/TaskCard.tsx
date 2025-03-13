import { useDrag } from "react-dnd";
import { Card, CardContent, Typography } from "@mui/material";
import type { Task } from "@shared/schema";

interface Props {
  task: Task;
}

export default function TaskCard({ task }: Props) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TASK",
    item: task,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <Card sx={{ mb: 2, cursor: "move" }}>
        <CardContent>
          <Typography variant="h6" component="div">
            {task.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {task.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
