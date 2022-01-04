import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import ModalForm from "./ModalForm";

const Todo = ({
  todo,
  id,
  name,
  finished,
  handleCheck,
  handleDelete,
  handleEdit,
}) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState({});
  const [inputValue, setInputValue] = useState("");

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setActive({});
  };

  const editing = () => {
    handleOpen();
    setInputValue(name);
    setActive(todo);
  };

  const onEdit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    handleEdit(active, inputValue);
    handleClose();
    setInputValue("");
  };

  return (
    <>
      <ListItem
        secondaryAction={
          <>
            <IconButton onClick={editing}>
              <EditIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => handleDelete(id)}
            >
              <DeleteIcon />
            </IconButton>
          </>
        }
      >
        <ListItemText primary={name} secondary={finished && "Terminada"} />
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={finished}
            disableRipple
            onChange={() => handleCheck(id)}
          />
        </ListItemIcon>
      </ListItem>
      <ModalForm
        handleClose={handleClose}
        open={open}
        onEdit={onEdit}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </>
  );
};

export default Todo;
