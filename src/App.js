import { Container } from "@mui/material"
import TodoList from "./components/TodoList"

const App = () => {
  return (
    <>
      <Container fixed>
        <TodoList />
      </Container>
    </>
  )
}

export default App

