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

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setActive({});
  };

  const editing = () => {
    handleOpen();
    setActive(todo);
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
        handleEdit={handleEdit}
        active={active}
      />
    </>
  );
};

export default Todo;
