import { useState } from "react";
import {
  Grid,
  IconButton,
  List,
  ListItem,
  TextField,
  Typography,
  Box,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoList = () => {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([{ id: new Date().getTime(), name: inputValue }, ...list]);
    setInputValue("");
  };

  const handleDelete = (id) => {
    setList(list.filter((listItem) => listItem.id !== id));
  };

  return (
    <div>
      <Typography variant="h1" align="center" mt={3}>
        To Do List
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          label="Ingrese aqui una tarea"
          variant="standard"
          value={inputValue}
          onChange={handleInputValue}
        />
      </form>
      <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
        <Grid item xs={12} md={6}>
          {list.length === 0 ? (
            <Typography
              variant="h4"
              component="h2"
              align="center"
              color="red"
              mt={3}
            >
              Agregue tareas aqui
            </Typography>
          ) : (
            <List>
              {list.map(({ id, name }) => (
                <ListItem
                  key={id}
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
              ))}
            </List>
          )}
        </Grid>
      </Box>
    </div>
  );
};

export default TodoList;
