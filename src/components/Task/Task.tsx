import React from "react";
import * as SC from "./Task.styles";
import { Box, Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import CloseIcon from "@mui/icons-material/Close";
import type { TTask } from "../../types";
import { useAppDispatch } from "@/store";
import { setTaskStatus } from "@/store/tasksSlice";

type Props = {
  task: TTask;
};

function Task({ task }: Props) {
  const dispatch = useAppDispatch();

  const handleCompleteTask = () => {
    if (task.status === "deleted") {
      return;
    }
    if (task.status !== "completed") {
      dispatch(setTaskStatus({ id: task.id, status: "completed" }));
      return;
    }
    dispatch(setTaskStatus({ id: task.id, status: "active" }));
  };

  const handleDeleteTask = () => {
    if (task.status !== "deleted") {
      dispatch(setTaskStatus({ id: task.id, status: "deleted" }));
      return;
    }
    dispatch(setTaskStatus({ id: task.id, status: "active" }));
  };

  return (
    <SC.Container>
      <Typography sx={{ textDecoration: task.status === "completed" ? "line-through" : "none" }}>
        {task.text || "Lorem"}
      </Typography>
      <Box>
        <Button onClick={handleCompleteTask}>
          {task.status === "completed" ? <CloseIcon /> : <DoneIcon />}
        </Button>
        <Button onClick={handleDeleteTask}>
          {task.status === "deleted" ? <RestoreFromTrashIcon /> : <DeleteIcon />}
        </Button>
      </Box>
    </SC.Container>
  );
}

export default Task;
