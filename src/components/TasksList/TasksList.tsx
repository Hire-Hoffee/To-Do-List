import React from "react";
import * as SC from "./TasksList.styles";
import Task from "../Task/Task";
import { useAppSelector } from "@/store";

function TasksList() {
  const tasks = useAppSelector((state) => state.tasks.tasksList);

  return (
    <SC.Container>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </SC.Container>
  );
}

export default TasksList;
