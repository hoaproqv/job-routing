import { Box, Grid } from '@mui/material'
import React from 'react'
import JobItem from './JobItem'

function Content({data}) {
  return (
    <Box width="1000px" margin="0 auto" sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 1, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          rowGap={5}
          marginLeft="0"
        >
          {data?.map((item, index) => (
            <Grid item xs={2} sm={4} md={4}
              key={index}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <JobItem key={index} item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
  )
}

export default Content
