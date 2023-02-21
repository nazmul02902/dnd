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
  const updateTask = useCallback(
    (id: any, updatedTask: any) => {
      setTasks((allTask) => {
        const columnTask = allTask[column];
        console.log(updatedTask);
        return {
          ...allTask,
          [column]: columnTask.map((task) =>
            task.id === id ? { ...task, ...updatedTask } : task
          ),
        };
      });
    },
    [column, setTasks]
  );

  const deleteTask = useCallback(
    (id: any) => {
      setTasks((allTask) => {
        const columnTask = allTask[column];
        return {
          ...allTask,
          [column]: columnTask.filter((task) => task.id !== id),
        };
      });
    },
    [column, setTasks]
  );
  const handleTaskDrop = useCallback(
    (from: columnType, id: taskType["id"]) => {
      console.log(from, id);
      setTasks((allTask) => {
        const fromColumTasks = allTask[from];
        const toColumnTaasks = allTask[column];
        const movingTask = fromColumTasks.find((task) => task.id === id);

        if (!movingTask) {
          console.log("not found");
          return allTask;
        }

        return {
          ...allTask,
          [from]: fromColumTasks.filter((task) => task.id !== id),
          [column]: [{ ...movingTask, column }, ...toColumnTaasks],
        };
      });
    },
    [column, setTasks]
  );
  const swap = (arr: any, i: number, j: number) => {
    const copy = [...arr];
    const top = copy[i];
    copy[i] = copy[j];
    copy[j] = top;
    return copy;
  };
  const swapTask = useCallback(
    (i: number, j: number) => {
      setTasks((allTasks) => {
        const columnTasks = allTasks[column];
        return {
          ...allTasks,
          [column]: swap(columnTasks, i, j),
        };
      });
    },
    [column, setTasks]
  );
  return {
    tasks: tasks[column],
    addEmptyTask,
    updateTask,
    handleTaskDrop,
    deleteTask,
    swapTask,
  };
};

export default useColumnTask;
