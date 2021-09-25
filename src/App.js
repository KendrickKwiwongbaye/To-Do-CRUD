import React,{useState, useEffect} from "react"
import TodoContainer from "./TodoContainer"
import TodoList from "./TodoList"


const App=()=>{
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    const data = localStorage.getItem("todos")
    if(data){
      setTodos(JSON.parse(data))
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos" ,JSON.stringify(todos))
  })

  return(
    <div>
      <TodoList inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}/>
      <TodoContainer inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App