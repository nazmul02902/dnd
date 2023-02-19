import { columnType, taskType } from "../utils/types";
import useTaskCollection from "./useTaskCollection";
import { v4 as uuidv4 } from "uuid";
import randomColorGenerate from "../utils/helpers/randomColorGenerate";
import { useCallback } from "react";

const Max_col_length = 10;

const useColumnTask = (column: columnType) => {
  const [tasks, setTasks] = useTaskCollection();
  const columnTasks = tasks[column];

  const addEmptyTask = useCallback(() => {
    setTasks((allTasks) => {
      const columnTasks = allTasks[column];

      if (columnTasks.length > Max_col_length) {
        alert("too many taks");
        return allTasks;
      }
      const newColumnTask: taskType = {
        id: uuidv4(),
        title: `New ${column} task`,
        color: randomColorGenerate(".600"),
        column,
      };
      return {
        ...allTasks,
        [column]: [newColumnTask, ...columnTasks],
      };
    });
  }, [column, setTasks]);
  return {
    tasks: tasks[column],
    addEmptyTask,
  };
};

export default useColumnTask;
