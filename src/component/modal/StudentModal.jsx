import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { pink } from "@mui/material/colors";
import { RxCross2 } from "react-icons/rx";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
};

export default function BasicModal({ data, setStudentDatas }) {
  const handleClose = () => setStudentDatas([]);

  return (
    <div>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <RxCross2 color="red" size={30} onClick={handleClose} />
          {data?.map((ele, i) => (
            <p key={i}>{ele.name}</p>
          ))}
          <button onClick={handleClose}>close modal</button>
        </Box>
      </Modal>
    </div>
  );
}
