import {useState} from 'react';
import './App.css';

function App() {
  const [toDos, setTodos] = useState([])
  const [toDo,setTodo] = useState('')
  const d = new Date()
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {d.getDate()}/{d.getMonth() +1}/{d.getFullYear()} </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos([...toDos,{id:Date.now(),text:toDo , status: false}])}  className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => {
            if(!obj.status){
      return(  <div className="todo">
          <div className="left">
            <input onChange={(e) => {
              console.log(e.target.value)
              console.log(obj)
              setTodos(toDos.filter(obj2=>{
                if(obj2.id===obj.id){
                  obj2.status=e.target.value
                }
                return obj2
              }))
            }} value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
        </div>)}
        else return null;
})}

{
  toDos.map((obj) =>{
    if(obj.status){
      return(
        <div class="checked">
           <p>{obj.text}</p>
        </div>
   
    )}
    else return null;
  })
}
      </div>
    </div>
  );
}

export default App;
