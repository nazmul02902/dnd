import { DeleteIcon } from "@chakra-ui/icons";
import { Box, IconButton, Textarea } from "@chakra-ui/react";

type taskType = {
  id?: string;
  title?: string;
  column?: string;
  color?: string;
};

const Task = (props: taskType) => {
  return (
    <Box bgColor={"gray.700"} rounded="lg" pos={"relative"}>
      <IconButton
        pos={"absolute"}
        top={0}
        right={0}
        aria-label="delete-task"
        icon={<DeleteIcon />}
        zIndex={100}
      />
      <Textarea height={"full"} />
    </Box>
  );
};

export default Task;
