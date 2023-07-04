import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider } from "@mui/material";
import getAPI from "../../function/getAPI.js";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minwidth: 300,
  maxWidth: 700,
  minHeight: 275,
  bgcolor: "#121212",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color: "#fff",
};

function Item() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAPI({ id: id });
      setItem(data);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <Modal
        open={true}
        onClose={() => navigate("/")}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            variant="h4"
            textAlign={"center"}
            fontSize={{ xs: 16, sm: 22, md: "2.125rem" }}
          >
            {item?.title}
          </Typography>
          <Divider
            variant="middle"
            sx={{ backgroundColor: "white", marginTop: "10px" }}
          />
          <Typography
            fontSize={{ xs: 10, sm: 14, md: 18 }}
            textAlign={"center"}
            paddingTop={1}
            height={80}
          >
            {item?.description}
          </Typography>
          <Box
            textAlign={"center"}
            fontSize={{ xs: 15, sm: 20, md: 25 }}
            marginTop={2}
          >
            Skill
            <Box
              display={"flex"}
              justifyContent={"center"}
              width={1}
              height={"auto"}
              flexWrap={"wrap"}
              gap={"10px"}
              marginTop={1}
              marginBottom={1}
            >
              {item?.skills.map((i, index) => (
                <Box
                  paddingLeft={1.5}
                  paddingRight={1.5}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontSize={13}
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
          </Box>
          <Typography
            textAlign={"center"}
            marginTop={4}
            fontSize={{ xs: 12, sm: 16, md: 20 }}
          >
            City: {item?.city}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default Item;
