import styled from "@emotion/styled";
import { Tab } from "@mui/material";

export const Container = styled.div`
  background-color: #495162;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  max-width: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CustomTab = styled(Tab)`
  color: #fff;
`;
