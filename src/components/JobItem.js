import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import { CardContext } from "../App";

function JobItem({ item }) {
  const setPath = useContext(CardContext);
  return (
    <Box
      width={320}
      height={260}
      bgcolor="#001C30"
      color={"#fff"}
      borderRadius={2}
      position={"relative"}
      boxSizing={"border-box"}
      paddingLeft={3}
      paddingRight={3}
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
      <Typography variantMapping={{ body1: "p" }} fontSize={13}>
        {item.description}
      </Typography>
      <Box width={"87%"} textAlign={"center"} position={"absolute"} bottom={15}>
        <Button
          variant="contained"
          color="success"
          size="small"
          href={item.id}
          onClick={() => {
            setPath(item.id);
          }}
        >
          read more
        </Button>
      </Box>
    </Box>
  );
}

export default JobItem;
