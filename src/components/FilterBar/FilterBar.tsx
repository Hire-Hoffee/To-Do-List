import React from "react";
import * as SC from "./FilterBar.styles";
import { Tabs, Box } from "@mui/material";

function FilterBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <SC.Container>
      <Box sx={{ borderBottom: 1, borderColor: "divider", margin: "auto" }}>
        <Tabs value={value} onChange={handleChange} textColor="primary">
          <SC.CustomTab label="Текущие дела" />
          <SC.CustomTab label="Все дела" />
          <SC.CustomTab label="Выполненные дела" />
          <SC.CustomTab label="Корзина" />
        </Tabs>
      </Box>
    </SC.Container>
  );
}

export default FilterBar;
