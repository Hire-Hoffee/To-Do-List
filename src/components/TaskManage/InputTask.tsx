import React from "react";
import { Input } from "@mui/material";
import { Controller, Control, FieldValues, Path } from "react-hook-form";

type Props<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  placeholder?: string;
};

function InputTask<T extends FieldValues>({ control, name, placeholder }: Props<T>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field: { value, onChange, onBlur } }) => (
        <Input
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          sx={{ color: "#fff" }}
        />
      )}
    />
  );
}

export default InputTask;
