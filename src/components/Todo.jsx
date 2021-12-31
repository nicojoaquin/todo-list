import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Todo = ({ id, name, finished, handleCheck, handleDelete }) => {
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
  );
};

export default Todo;
