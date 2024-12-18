import React, { useState } from 'react'
import TodoItem from './TodoItem';

const TodoList = () => {
   const [text, setText]= useState("");
   const [todo, setTodo]= useState([]);

   const handleChange=(event)=>{
    // console.log(event.target.value);
    setText(event.target.value);// when this function is called it will update text= "event.target.value"
   }

   const handleSubmit=()=>{

    let newItem={
        title:text,
        id: new Date().toDateString() + text
    }

    setTodo([...todo,newItem]);// new text will be added to todo array
    
    setText("")
   }

   const handleDelete=(id)=>{
    console.log("clicked delete");
    // console.log(id);
    const todoAfterDeletion=todo.filter(function(element,index){
        return element.id !==id // we are excluding the matched id element

    });
    // console.log(todoAfterDeletion);
    setTodo(todoAfterDeletion)
   }


   const handleEditTodo=(id,newItem)=>{
    let updatedTodo= todo.map((element)=>{
        if(element.id=== id){
          return {...element,title:newItem}  //this is updating the title to latest value;
        }
        return element;
    });
    setTodo(updatedTodo);
   }
  return (
    <div>
        <input type="text" value={text} onChange={handleChange} />
        <button onClick={handleSubmit}>submit</button>
        <ol>
            {/* {todo.map(function(element,index){
                return <li key={element.id}>{element.title}</li>
            })} */}
            <TodoItem todo={todo} handleDelete={handleDelete} 
            handleEditTodo={handleEditTodo}/>
        </ol>
      
    </div>
  )
}

export default TodoList