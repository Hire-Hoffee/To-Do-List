import React from "react";
import * as SC from "./TaskManage.styles";
import { Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import InputTask from "./InputTask";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "@/store";
import { createTask, clearAllTasks } from "@/store/tasksSlice";

function TaskManage() {
  const { control, handleSubmit, getValues, reset } = useForm<{ text: string }>({
    defaultValues: { text: "" },
    mode: "all",
  });
  const dispatch = useAppDispatch();

  const handleCreateTask = () => {
    const { text } = getValues();
    const newTask = { id: Date.now(), text: text, completed: false, deleted: false };

    dispatch(createTask(newTask));
    reset();
  };

  return (
    <SC.Container>
      <Button variant="contained" onClick={handleSubmit(handleCreateTask)}>
        <AddIcon />
        <Typography marginLeft="5px">Добавить</Typography>
      </Button>
      <InputTask control={control} name="text" placeholder="Новая задача" />
      <Button variant="contained" color="error" onClick={() => dispatch(clearAllTasks())}>
        <ClearAllIcon />
        <Typography marginLeft="5px">Очистить</Typography>
      </Button>
    </SC.Container>
  );
}

export default TaskManage;
