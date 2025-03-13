import { Container } from "@mui/material";
import KanbanBoard from "../components/KanbanBoard";

export default function Home() {
  return (
    <Container maxWidth="xl">
      <KanbanBoard />
    </Container>
  );
}
