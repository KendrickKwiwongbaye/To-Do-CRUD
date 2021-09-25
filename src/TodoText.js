import React from "react"
import tst from "./trash-347.svg"

const TodoText=({text, todos, setTodos, todoo})=>{

    const deletedItem=()=>{
        setTodos(todos.filter((el) => el.id !== todoo.id))
    }

    return(
        <div className="overallTask">
            <p className = "inputTask">{text}</p>
            <div className="deleteTask">
                <button  class="btn btn-light" onClick={deletedItem}><img src={tst} width="auto" height="12px" alt="trash"/></button>
            </div>
        </div>
    )
}

export default TodoText