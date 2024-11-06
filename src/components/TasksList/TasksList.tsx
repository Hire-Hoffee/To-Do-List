import { useMemo } from "react";
import * as SC from "./TasksList.styles";
import Task from "../Task/Task";
import { useAppSelector } from "@/store";
import { Typography } from "@mui/material";

function TasksList() {
  const tasks = useAppSelector((state) => state.tasks.tasksList);
  const tab = useAppSelector((state) => state.tasks.tab);

  const filterTasks = useMemo(() => {
    if (tab === "active") return tasks.filter((task) => task.status === "active");
    if (tab === "completed") return tasks.filter((task) => task.status === "completed");
    if (tab === "deleted") return tasks.filter((task) => task.status === "deleted");
    if (!tab) return tasks;
    return tasks;
  }, [tasks, tab]);

  return (
    <SC.Container>
      {filterTasks.length > 0 ? (
        filterTasks.map((task) => <Task key={task.id} task={task} />)
      ) : (
        <Typography>Нет задач</Typography>
      )}
    </SC.Container>
  );
}

export default TasksList;
