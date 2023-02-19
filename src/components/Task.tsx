import { DeleteIcon } from "@chakra-ui/icons";
import { Box, EditableTextarea, IconButton, Textarea } from "@chakra-ui/react";
import { taskType } from "../utils/types";



const Task = ({id, color, column, title}: taskType) => {
  return (
    <Box bgColor={color} rounded="lg" pos={"relative"} role="group" cursor={"grab"}>
      <IconButton
        pos={"absolute"}
        top={0}
        right={0}
        opacity={0}
        _groupHover={{opacity: 1}}
        aria-label="delete-task"
        icon={<DeleteIcon />}
        zIndex={100}
      />
      <Textarea value={title} resize="vertical" cursor={"inherit"} />
    </Box>
  );
};

export default Task;
