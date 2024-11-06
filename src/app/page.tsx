"use client";

import { useState } from "react";
import * as SC from "./page.styles";
import TasksList from "@/components/TasksList/TasksList";
import TaskManage from "@/components/TaskManage/TaskManage";
import FilterBar from "@/components/FilterBar/FilterBar";
import { useAppSelector } from "@/store";
import { Snackbar, Button } from "@mui/material";

export default function Home() {
  const tasks = useAppSelector((state) => state.tasks.tasksList);
  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleSaveTasksList = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setSnackbarMessage("Данные сохранены");
    setOpen(true);
  };

  const handleClearTasksList = () => {
    localStorage.removeItem("tasks");
    setSnackbarMessage("Память очищена");
    setOpen(true);
  };

  return (
    <SC.Container>
      <SC.ButtonsContainer>
        <Button variant="contained" onClick={handleSaveTasksList}>
          Сохранить
        </Button>
        <Button variant="contained" color="error" onClick={handleClearTasksList}>
          Очистить память
        </Button>
      </SC.ButtonsContainer>
      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={() => setOpen(false)}
        message={snackbarMessage}
      />
      <SC.Title>Список дел</SC.Title>
      <TaskManage />
      <FilterBar />
      <TasksList />
    </SC.Container>
  );
}
