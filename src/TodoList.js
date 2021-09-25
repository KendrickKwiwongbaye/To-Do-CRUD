import React from "react"

const TodoList =({inputText, setInputText, todos, setTodos})=>{

    const handleChange=(event)=>{
        setInputText(event.target.value)
    }

    const addItem=(event)=>{
        event.preventDefault()
        setInputText("")
        setTodos([
            ...todos,{text: inputText , id: Math.random() *1}
        ])
    }

    const shouldDisplaybutton = inputText.length > 0

    return(
        <div>
            <input type="text" value={inputText} placeholder="Enter a task.." onChange={handleChange}/>
            {shouldDisplaybutton && <button  class="btn btn-primary" onClick={addItem}>ADD TASK</button>}
        </div>
    )
}

export default TodoList