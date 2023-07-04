import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

function FCheckbox({ name, ...other }) {
  const { control } = useFormContext();
  return (
    <FormControlLabel
      control={
        <Controller
          name="remember"
          control={control}
          render={({ field }) => <Checkbox {...field} checked={field.value} />}
        />
      }
      {...other}
    />
  );
}

export default FCheckbox;
