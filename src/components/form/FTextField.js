import { TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

function FTextField({ name, ...other }) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          {...other}
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
}

export default FTextField;
