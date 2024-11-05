import React from "react";
import * as SC from "./Task.styles";
import { Box, Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";

function Task() {
  return (
    <SC.Container>
      <Typography>Task</Typography>
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
