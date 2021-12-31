import { IconButton, ListItem, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Todo = ({ id, name, handleDelete }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => handleDelete(id)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText primary={name} />
    </ListItem>
  );
};

export default Todo;
