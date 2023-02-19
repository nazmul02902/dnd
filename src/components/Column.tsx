import { AddIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Heading,
  IconButton,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import useColumnTask from "../hooks/useColumnTask";
import { columnType, taskType } from "../utils/types";
import Task from "./Task";

const columnColorScheme: Record<columnType, string> = {
  todo: "gray",
  "in progress": "blue",
  blocked: "red",
  completed: "green",
};

const mockTasks: taskType[] = [
  {
    id: "1",
    title: "mock Title",
    column: columnType.TO_DO,
    color: "red.600",
  },
  {
    id: "1",
    title: "mock Title",
    column: columnType.COMPLETED,
    color: "green.600",
  },
  {
    id: "1",
    title: "mock Title",
    column: columnType.TO_DO,
    color: "blue.600",
  },
];

const Column = ({ column }: { column: columnType }) => {
  const {tasks, addEmptyTask} = useColumnTask(column);
  return (
    <Box>
      <Heading>
        <Badge py={1} px={2} colorScheme={columnColorScheme[column]}>
          {column}
        </Badge>
      </Heading>
      <IconButton w={"full"} aria-label="add" icon={<AddIcon />} onClick={addEmptyTask} />
      <Stack
        boxShadow={"md"}
        mt="2"
        bgColor={useColorModeValue("gray.50", "gray.900")}
        spacing="4"
        p="4"
      >
        {tasks.map((task, i) => {
          return (
            <Task
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
