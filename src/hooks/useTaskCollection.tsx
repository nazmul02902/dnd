import { useLocalStorage } from "usehooks-ts";
import { columnType, taskType } from "../utils/types";
import { v4 as uuidv4 } from "uuid";

const useTaskCollection = () => {
  return useLocalStorage<{ [key in columnType]: taskType[] }>("task", {
    todo: [
      {
        id: uuidv4(),
        column: columnType.TO_DO,
        title: "Task to do one",
        color: "blue.600",
      },
    ],
    "in progress": [
      {
        id: uuidv4(),
        column: columnType.IN_PROGRESS,
        title: "Task in progress one",
        color: "yellow.600",
      },
    ],
    blocked: [
      {
        id: uuidv4(),
        column: columnType.BLOCKED,
        title: "Task blocked one",
        color: "red.600",
      },
    ],
    completed: [
      {
        id: uuidv4(),
        column: columnType.COMPLETED,
        title: "Task completed one",
        color: "green.600",
      },
    ],
  });
};

export default useTaskCollection;
