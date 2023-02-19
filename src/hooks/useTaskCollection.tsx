import { useLocalStorage } from "usehooks-ts";
import { columnType, taskType } from "../utils/types";
import { v4 as uuidv4 } from "uuid";

const useTaskCollection = () => {
  return useLocalStorage<{ [key in columnType]: taskType[] }>("task", {
    todo: [
      {
        id: uuidv4(),
        column: columnType.TO_DO,
        title: "Task one",
        color: "blue.600",
      },
    ],
    "in progress": [
      {
        id: uuidv4(),
        column: columnType.IN_PROGRESS,
        title: "Task one",
        color: "yellow.600",
      },
    ],
    blocked: [
      {
        id: uuidv4(),
        column: columnType.BLOCKED,
        title: "Task one",
        color: "red.600",
      },
    ],
    completed: [
      {
        id: uuidv4(),
        column: columnType.COMPLETED,
        title: "Task one",
        color: "green.600",
      },
    ],
  });
};

export default useTaskCollection;
