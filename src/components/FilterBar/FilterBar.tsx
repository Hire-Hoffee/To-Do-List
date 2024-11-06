import React from "react";
import * as SC from "./FilterBar.styles";
import { Tabs, Box } from "@mui/material";
import { useAppDispatch } from "@/store";
import { setTab } from "@/store/tasksSlice";

function FilterBar() {
  const [value, setValue] = React.useState(0);
  const dispatch = useAppDispatch();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <SC.Container>
      <Box sx={{ borderBottom: 1, borderColor: "divider", margin: "auto" }}>
        <Tabs value={value} onChange={handleChange} textColor="primary">
          <SC.CustomTab label="Текущие дела" onClick={() => dispatch(setTab("active"))} />
          <SC.CustomTab label="Все дела" onClick={() => dispatch(setTab(null))} />
          <SC.CustomTab label="Выполненные дела" onClick={() => dispatch(setTab("completed"))} />
          <SC.CustomTab label="Корзина" onClick={() => dispatch(setTab("deleted"))} />
        </Tabs>
      </Box>
    </SC.Container>
  );
}

export default FilterBar;
