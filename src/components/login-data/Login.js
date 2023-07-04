import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Modal,
  Stack,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { FCheckbox, FTextField, FormProvider } from "../form";
import AvatarLogin from "./AvatarLogin";
import { style, loginButton, cancelButton } from "./css";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ContextValues } from "../../App";

function Login() {
  const { setIsLogin, setDataUser } = useContext(ContextValues);
  const defaultValues = {
    username: "hanhoa97",
    password: "12345",
    remember: true,
  };
  const schema = yup
    .object({
      username: yup.string().required(),
      password: yup.string().required(),
    })
    .required();
  const methods = useForm({ defaultValues, resolver: yupResolver(schema) });
  const { handleSubmit, isSubmitting } = methods;
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = (data) => {
    setIsLogin(true);
    setDataUser(data);
    navigate("/");
  };

  return (
    <Modal
      open={true}
      onClose={() => navigate("/")}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <FormProvider
          methods={methods}
          onSubmit={handleSubmit(onSubmit)}
          style={{ border: "3px solid #f1f1f1" }}
        >
          <AvatarLogin />
          <div className="container" style={{ padding: "16px" }}>
            <Stack spacing={2}>
              <FTextField name="username" label="Username" autoComplete="off" />

              <FTextField
                id="outlined-adornment-password"
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ my: 2 }}
            >
              <FCheckbox name="remember" label="Remember me" />
            </Stack>
            <LoadingButton
              type="submit"
              loading={isSubmitting}
              style={loginButton}
            >
              Login
            </LoadingButton>
          </div>

          <div className="container" style={{ padding: "10px" }}>
            <Button
              type="button"
              className="cancelbtn"
              onClick={() => navigate("/")}
              style={cancelButton}
            >
              Cancel
            </Button>
            <span
              className="psw"
              style={{ float: "right", paddingTop: " 16px", color: "red" }}
            >
              <Link to="#">Forgot password?</Link>
            </span>
          </div>
        </FormProvider>
      </Box>
    </Modal>
  );
}

export default Login;
