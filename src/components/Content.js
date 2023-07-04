import { Box, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import JobItem from "./JobItem";
import { ContextValues } from "../App";

function Content() {
  const { data } = useContext(ContextValues);
  console.log(data);
  return (
    <Box maxWidth={"1000px"} margin="0 auto" sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 1, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        rowGap={5}
        marginLeft="0"
      >
        {!data.length ? (
          <Typography textAlign="center" display="block" width="100%">
            No search match
          </Typography>
        ) : (
          data?.map((item, index) => (
            <Grid
              item
              xs={5}
              sm={4}
              md={4}
              key={index}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <JobItem key={index} item={item} />
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
}

export default Content;
