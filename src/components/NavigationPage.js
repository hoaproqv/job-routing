import { Box, Pagination } from "@mui/material";
import React from "react";

function NavigationPage({setPage}) {
  return (
    <Box width="100%" display={"flex"} justifyContent={"center"} marginTop={5}>
      <Box width={190}>
        <Pagination onChange={(event, page)=>{setPage(page)}} count={3} color="primary" />
      </Box>
    </Box>
  );
}

export default NavigationPage;
