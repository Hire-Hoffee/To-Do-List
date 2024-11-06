"use client";

import React from "react";
import * as SC from "./AuthForm.styles";
import { Typography, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import InputTask from "../TaskManage/InputTask";
import { useRouter } from "next/navigation";

function AuthForm() {
  const { handleSubmit, getValues, reset, control } = useForm<{
    username: string;
    password: string;
  }>({
    defaultValues: { username: "", password: "" },
    mode: "all",
  });

  const router = useRouter();

  const handleLogin = () => {
    const { username, password } = getValues();
    if (username === "admin" && password === "admin") {
      localStorage.setItem("auth", "true");
      router.push("/");
    }
    reset();
  };

  return (
    <SC.Container>
      <Typography variant="h4" fontWeight="bold">
        Авторизация
      </Typography>
      <InputTask control={control} name="username" placeholder="Логин" />
      <InputTask control={control} name="password" placeholder="Пароль" />
      <Button variant="contained" onClick={handleSubmit(handleLogin)}>
        Войти
      </Button>
    </SC.Container>
  );
}

export default AuthForm;
