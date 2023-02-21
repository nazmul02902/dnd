import { AddIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Heading,
  IconButton,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import useColumnDrop from "../hooks/useColumnDrop";
import useColumnTask from "../hooks/useColumnTask";
import { columnType, taskType } from "../utils/types";
import Task from "./Task";

const columnColorScheme: Record<columnType, string> = {
  todo: "gray",
  "in progress": "blue",
  blocked: "red",
  completed: "green",
};

const Column = ({ column }: { column: columnType }) => {
  const { tasks, addEmptyTask, handleTaskDrop } = useColumnTask(column);

  const { isOver, dropRef } = useColumnDrop(column, handleTaskDrop);

  return (
    <Box>
      <Heading>
        <Badge py={1} px={2} colorScheme={columnColorScheme[column]}>
          {column}
        </Badge>
      </Heading>
      <IconButton
        w={"full"}
        aria-label="add"
        icon={<AddIcon />}
        onClick={addEmptyTask}
      />
      <Stack
        ref={dropRef}
        boxShadow={"md"}
        mt="2"
        bgColor={useColorModeValue("gray.50", "gray.900")}
        spacing="4"
        p="4"
        minH={"400px"}
        opacity={isOver ? 0.5 : 1}
      >
        {tasks.map((task, i) => {
          return (
            <Task
            key={task.id}
              index={i}
              id={task.id}
              title={task.title}
              column={task.column}
              color={task.color}
            />
          );
        })}
      </Stack>
    </Box>
  );
};

export default Column;
