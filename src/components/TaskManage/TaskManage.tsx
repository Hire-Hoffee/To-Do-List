import React from "react";
import * as SC from "./TaskManage.styles";
import { Button, Input, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ClearAllIcon from "@mui/icons-material/ClearAll";

function TaskManage() {
  return (
    <SC.Container>
      <Button variant="contained">
        <AddIcon />
        <Typography marginLeft="5px">Добавить</Typography>
      </Button>
      <Input type="text" placeholder="Новая задача" sx={{ color: "#fff" }} />
      <Button variant="contained" color="error">
        <ClearAllIcon />
        <Typography marginLeft="5px">Очистить</Typography>
      </Button>
    </SC.Container>
  );
}

export default TaskManage;
