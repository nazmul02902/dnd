import { Container, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import Column from "./components/Column";
import Header from "./components/Header";
import Task from "./components/Task";
import ToggleColor from "./components/ToggleColor";
import useColumnTask from "./hooks/useColumnTask";
import { columnType } from "./utils/types";

function App() {
  // const data = useColumnTask();
  return (
    <main>
      <ToggleColor />
      <Header />
      <Container maxWidth={"container.lg"} px="4" py="4">
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 16, md: 4 }}>
          <Column column={columnType.TO_DO} />
          <Column column={columnType.IN_PROGRESS} />
          <Column column={columnType.BLOCKED} />
          <Column column={columnType.COMPLETED} />
        </SimpleGrid>
      </Container>
    </main>
  );
}

export default App;
