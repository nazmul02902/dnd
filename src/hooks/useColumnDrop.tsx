import { useDrop } from "react-dnd";
import { columnType } from "../utils/types";

const useColumnDrop = (column: columnType, handleTaskDrop: any) => {
  const [{ isOver }, dropRef] = useDrop<any, void, any>({
    accept: "task",
    drop: (dragItem) => {
      console.log(dragItem);
      if (!dragItem || dragItem.from === column) {
        return;
      }

       handleTaskDrop(dragItem.from, dragItem.id);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });
  return { isOver, dropRef };
};

export default useColumnDrop;
