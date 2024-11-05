"use client";

import * as SC from "./page.styles";
import TasksList from "@/components/TasksList/TasksList";
import TaskManage from "@/components/TaskManage/TaskManage";
import FilterBar from "@/components/FilterBar/FilterBar";

export default function Home() {
  return (
    <SC.Container>
      <SC.Title>Список дел</SC.Title>
      <TaskManage />
      <FilterBar />
      <TasksList />
    </SC.Container>
  );
}
