import React from "react"
import TodoText from "./TodoText"

const TodoContainer=({inputText, setInputText, todos, setTodos, todo})=>{
    return(
        <div>
            {todos.map(todoo=>(
                <TodoText key={todoo.id} todoo={todoo} todo={todo} text={todoo.text} id={todoo.id} setTodos={setTodos} todos={todos}/>
            ))}
        </div>
    )
}

export default TodoContainer