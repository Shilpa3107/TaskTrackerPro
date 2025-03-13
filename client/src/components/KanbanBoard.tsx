import { useState } from "react";
import { Grid, Fab } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TaskColumn from "./TaskColumn";
import TaskModal from "./TaskModal";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { useQuery } from "@tanstack/react-query";
import type { Task } from "@shared/schema";

const COLUMNS = [
  { title: "To Do", status: "todo" },
  { title: "In Progress", status: "inprogress" },
  { title: "Review", status: "review" },
  { title: "Done", status: "done" },
];

export default function KanbanBoard() {
  const [modalOpen, setModalOpen] = useState(false);
  const searchQuery = useSelector((state: RootState) => state.tasks.searchQuery);

  const { data: tasks = [] } = useQuery<Task[]>({ 
    queryKey: ["/api/tasks"]
  });

  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: 24 }}>
      <SearchBar />
      <DndProvider backend={HTML5Backend}>
        <Grid container spacing={3}>
          {COLUMNS.map(({ title, status }) => (
            <Grid item xs={12} sm={6} md={3} key={status}>
              <TaskColumn
                title={title}
                status={status}
                tasks={filteredTasks.filter((task) => task.status === status)}
              />
            </Grid>
          ))}
        </Grid>
      </DndProvider>
      <Fab
        color="primary"
        sx={{ position: "fixed", bottom: 24, right: 24 }}
        onClick={() => setModalOpen(true)}
      >
        <AddIcon />
      </Fab>
      <TaskModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
