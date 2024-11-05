import React from "react";
import * as SC from "./TasksList.styles";
import Task from "../Task/Task";

function TasksList() {
  return (
    <SC.Container>
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </SC.Container>
  );
}

export default TasksList;
