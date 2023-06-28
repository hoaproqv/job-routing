import { Box, Button, Typography } from "@mui/material";
import React from "react";

function Item(props) {
  console.log(props)
  return (
    <Box>
      <Box
        width={700}
        height={300}
        bgcolor={"#121212"}
        position={"absolute"}
        top={"50%"}
        left={"50%"}
        sx={{ transform: "translate(-50%, -50%)", m: 1 }}
      >
        <Typography
          variant="h6"
          fontSize={16}
          textAlign={"center"}
          marginTop={1}
          borderBottom={"0.5px solid"}
          paddingBottom={0.5}
        >
          {item.title}
        </Typography>
        <Box
          display={"flex"}
          justifyContent={"flex-start"}
          width={1}
          height={"auto"}
          flexWrap={"wrap"}
          gap={"10px"}
          marginTop={1}
          marginBottom={1}
        >
          {item.skills.map((i, index) => (
            <Box
              paddingLeft={1.5}
              paddingRight={1.5}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              fontSize={10}
              bgcolor={"red"}
              key={index}
              width={"max-content"}
              height={20}
              borderRadius={5}
            >
              {i}
            </Box>
          ))}
        </Box>
        <Typography variantMapping={"p"} fontSize={13}>
          {item.description}
        </Typography>
        <Box
          width={"87%"}
          textAlign={"center"}
          position={"absolute"}
          bottom={15}
        >
          <Button variant="contained" color="success" size="small">
            read more
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Item;
