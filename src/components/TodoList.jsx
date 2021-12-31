import { useState } from "react";
import { Grid, List, TextField, Typography, Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import Todo from "./Todo";

const TodoList = () => {
  //Lista de todos
  const [list, setList] = useState([]);

  //Estado del valor del input
  const [inputValue, setInputValue] = useState("");

  //Agrego lo que escribo en el input, a un estado.
  const handleInputValue = ({ target }) => setInputValue(target.value);

  //Funcion que agrega lo escrito, a la lista.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "") return;
    //Creamos un objeto "todo", con el id de una fecha, y el nombre del valor del input
    setList([{ id: new Date().getTime(), name: inputValue }, ...list]);
    setInputValue("");
  };

  //Elimino con un filter la tarea
  const handleDelete = (id) => {
    setList(list.filter((listItem) => listItem.id !== id));
  };

  return (
    <div>
      <Typography variant="h1" align="center" mt={3} color={grey[800]}>
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
              color={grey[600]}
              mt={3}
            >
              Agregue tareas aqui
            </Typography>
          ) : (
            <List>
              {list.map((todo) => (
                <Todo key={todo.id} {...todo} handleDelete={handleDelete} />
              ))}
            </List>
          )}
        </Grid>
      </Box>
    </div>
  );
};

export default TodoList;
