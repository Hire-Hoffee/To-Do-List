import React from "react";
import * as SC from "./TasksList.styles";
import Task from "../Task/Task";
import { useAppSelector } from "@/store";
import { Typography } from "@mui/material";

function TasksList() {
  const tasks = useAppSelector((state) => state.tasks.tasksList);

  return (
    <SC.Container>
      {tasks.length > 0 ? (
        tasks.map((task) => <Task key={task.id} task={task} />)
      ) : (
        <Typography>Нет задач</Typography>
      )}
    </SC.Container>
  );
}

export default TasksList;
