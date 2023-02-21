import { DeleteIcon } from "@chakra-ui/icons";
import { Box, EditableTextarea, IconButton, Textarea } from "@chakra-ui/react";
import useColumnTask from "../hooks/useColumnTask";
import { useTaskDragAndDrop } from "../hooks/useDragAndDrop";

const Task = ({ id, color, column, title, index }: any) => {
  const { deleteTask, updateTask, swapTask } = useColumnTask(column);
  const { ref, isDragging } = useTaskDragAndDrop({
    index,
    task: { id, color, column, title },
    swapTask
    
  });
  return (
    <Box
      ref={ref}
      bgColor={color}
      rounded="lg"
      pos={"relative"}
      role="group"
      cursor={"grab"}
      opacity={isDragging ? 0.3 : 1}
    >
      <IconButton
        pos={"absolute"}
        top={0}
        right={0}
        opacity={0}
        _groupHover={{ opacity: 1 }}
        aria-label="delete-task"
        icon={<DeleteIcon />}
        zIndex={100}
        onClick={() => {
          deleteTask(id);
        }}
      />
      <Textarea
        value={title}
        resize="vertical"
        cursor={"inherit"}
        onChange={(event) => {
          const newTitle = event.target.value;
          updateTask(id, { id, column, title: newTitle, color });
        }}
      />
    </Box>
  );
};

export default Task;
