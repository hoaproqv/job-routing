import React, { useState, useEffect, useContext } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Container, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { ContextValues } from "../App";
import getAPI from "../function/getAPI";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Header() {
  const { isLogin, setIsLogin, dataUser, search, setSearch } =
    useContext(ContextValues);
  const navigate = useNavigate();
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  return (
    <Box sx={{ flexGrow: 1 }} marginBottom={5} width="100%">
      <AppBar position="static">
        <Container maxWidth="md">
          <Toolbar>
            <Box
              style={{ color: "white", paddingRight: "10px", fontSize: "20px" }}
            >
              <Link to={"/"} sx={{ display: { xs: "none", sm: "block" } }}>
                Job Routing
              </Link>
            </Box>
            <Search sx={{ width: { xs: "200px", sm: "300px" } }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                value={search}
                onChange={(event) => handleSearch(event)}
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box display="flex" alignItems="center">
              <Typography>{isLogin ? dataUser?.username : ""}</Typography>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={
                  isLogin
                    ? () => {
                        setIsLogin(false);
                      }
                    : () => {
                        navigate("/login");
                      }
                }
                color="inherit"
              >
                <Typography style={{ paddingRight: "10px" }}>
                  {isLogin ? "Logout" : "Login"}
                </Typography>
                <AccountCircle />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
