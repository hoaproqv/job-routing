import { Box, Pagination } from "@mui/material";
import React, { useContext } from "react";
import { ContextValues } from "../App";

function NavigationPage() {
  const { setPage, data } = useContext(ContextValues);
  return (
    <Box
      width="100%"
      display={"flex"}
      justifyContent={"center"}
      margin={"20px 0px"}
    >
      {!data.length ? (
        ""
      ) : (
        <Box width={190}>
          <Pagination
            onChange={(event, page) => {
              setPage(page);
            }}
            count={3}
            color="primary"
            hideNextButton={data?.length < 6 ? true : false}
          />
        </Box>
      )}
    </Box>
  );
}

export default NavigationPage;
