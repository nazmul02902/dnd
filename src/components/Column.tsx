import { AddIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Heading,
  IconButton,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { columnType } from "../utils/types";
import Task from "./Task";



const Column = (props: {column: columnType}) => {
  return (
    <Box>
      <Heading>
        <Badge py={1} px={2} colorScheme="red">
          This is badge area
        </Badge>
      </Heading>
      <IconButton w={"full"} aria-label="add" icon={<AddIcon />} />
      <Stack
        boxShadow={"md"}
        mt="2"
        bgColor={useColorModeValue("gray.50", "gray.900")}
        spacing="4"
        p="4"
      >
        <Task />
        <Task />
        <Task />
        <Task />
      </Stack>
    </Box>
  );
};

export default Column;
