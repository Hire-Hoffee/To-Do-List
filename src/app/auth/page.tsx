import React from "react";
import AuthForm from "@/components/AuthForm/AuthForm";
import { Box } from "@mui/material";

function AuthPage() {
  return (
    <Box display="flex" justifyContent="center" marginTop="100px">
      <AuthForm />
    </Box>
  );
}

export default AuthPage;
