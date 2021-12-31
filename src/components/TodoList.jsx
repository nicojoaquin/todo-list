import { useEffect, useState } from "react";
import { Grid, List, TextField, Typography, Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import Todo from "./Todo";

const TodoList = () => {
  //Lista de todos
  const listStorage = JSON.parse(sessionStorage.getItem("todoList"));
  const [list, setList] = useState(listStorage ? listStorage : []);

  //Estado del valor del input
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    sessionStorage.setItem("todoList", JSON.stringify(list));
  }, [list]);

  //Agrego lo que escribo en el input, a un estado.
  const handleInputValue = ({ target }) => setInputValue(target.value);

  //Objeto de la tarea
  const todo = {
    name: inputValue,
    finished: false,
  };

  //Funcion que agrega lo escrito, a la lista.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    //Creamos un objeto "todo", con el id de una fecha, y el nombre del valor del input
    setList([{ id: new Date().getTime(), ...todo }, ...list]);
    setInputValue("");
  };

  //Cambia el estado de la tarea entre finalizada o no
  const handleCheck = (id) => {
    setList(
      list.map((listItem) =>
        listItem.id === id
          ? { ...listItem, finished: !listItem.finished }
          : listItem
      )
    );
  };

  //Elimino con un filter la tarea
  const handleDelete = (id) =>
    setList(list.filter((listItem) => listItem.id !== id));

  return (
    <>
      <Typography variant="h1" align="center" mt={3} color={grey[800]}>
        To Do List
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          label="Ingrese aqui una tarea"
          variant="standard"
          autoComplete="off"
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
                <Todo
                  key={todo.id}
                  {...todo}
                  handleCheck={handleCheck}
                  handleDelete={handleDelete}
                />
              ))}
            </List>
          )}
        </Grid>
      </Box>
    </>
  );
};

export default TodoList;
