import { Modal, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { useState } from "react";

const useStyles = makeStyles({
  modal: {
    position: "absolute",
    width: 400,
    background: "white",
    border: "2px solid white",
    padding: "16px 32px 24px",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const ModalForm = ({ handleEdit, handleClose, open, active }) => {
  const styles = useStyles();
  const [inputValue, setInputValue] = useState("");

  const onEdit = (e) => {
    e.preventDefault();
    handleEdit(active, inputValue);
    handleClose();
    setInputValue("");
  };

  return (
    <Modal
      className={styles.container}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={styles.modal}>
        <form onSubmit={onEdit}>
          <TextField
            type="search"
            id="standard-basic"
            label="Modifique la tarea"
            variant="standard"
            autoComplete="off"
            value={inputValue}
            onChange={({ target }) => setInputValue(target.value)}
          />
        </form>
      </Box>
    </Modal>
  );
};

export default ModalForm;
