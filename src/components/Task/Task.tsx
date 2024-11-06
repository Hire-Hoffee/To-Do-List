import React from "react";
import * as SC from "./Task.styles";
import { Box, Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import type { TTask } from "../../types";

type Props = {
  task: TTask;
};

function Task({ task }: Props) {
  return (
    <SC.Container>
      <Typography>{task.text || "Lorem"}</Typography>
      <Box>
        <Button>
          <DoneIcon />
        </Button>
        <Button>
          <DeleteIcon />
        </Button>
      </Box>
    </SC.Container>
  );
}

export default Task;
