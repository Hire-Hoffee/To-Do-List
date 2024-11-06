"use client";

import { useState } from "react";
import * as SC from "./page.styles";
import TasksList from "@/components/TasksList/TasksList";
import TaskManage from "@/components/TaskManage/TaskManage";
import FilterBar from "@/components/FilterBar/FilterBar";
import { useAppSelector } from "@/store";
import { Snackbar } from "@mui/material";

export default function Home() {
  const tasks = useAppSelector((state) => state.tasks.tasksList);
  const [open, setOpen] = useState(false);

  const handleSaveTasksList = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setOpen(true);
  };

  return (
    <SC.Container>
      <SC.SaveButton variant="contained" onClick={handleSaveTasksList}>
        Сохранить
      </SC.SaveButton>
      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={() => setOpen(false)}
        message="Данные сохранены"
      />
      <SC.Title>Список дел</SC.Title>
      <TaskManage />
      <FilterBar />
      <TasksList />
    </SC.Container>
  );
}
