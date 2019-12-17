import React, { Component } from 'react'
import './Task.css'

export default class Task extends Component {
state={
    input:"",
    todolist:[
    ]
}


handleChange=(e)=>
{
    this.setState({
        input: e.target.value
    })
}
addTodo = () => 
{
  let x= this.state.todolist.length
  if(this.state.input)
  {
    this.setState({todolist: this.state.todolist.concat({id:x, text:this.state.input, isComplete:false, label:"Complete" })})
this.setState({input:""})
}

}

handleDelete=(i)=>
{
    this.setState({todolist:this.state.todolist.filter((el,index)=> index!==i)})
    
};  

handleComplete=(id)=>
{  
    
    const todo = this.state.todolist.find(todo => todo.id === id)
    todo.isComplete=!todo.isComplete
    if(todo.isComplete){
        todo.label="Undo"
    }
    else
    todo.label="Complete"
    this.setState({todolist: this.state.todolist})

}


    render() {
        return (
            <div className="holder">

                <div className="navBar">
                <div className="labels">
                    <h1 className="appName">To-Do App!</h1>
                    <p className="appText">Add new to-do</p>
                </div>
                <div className="input-section">
                    <input className="input-space" type="text" value= {this.state.input} onChange={this.handleChange}/>
                    <button type="button" className="btn btn-outline-light" onClick={ this.addTodo}>Add</button>
                </div>
                </div>
              
                <div>
                    {this.state.todolist.map((el,i)=> 
                    <div key={i} className="taskSpace"> 
                    <h2 className="taskName" style={(el.isComplete)? {textDecoration:"line-through"}:{textDecoration:"none"}}>{el.text}</h2>
                        <button type="button" className="btn btn-outline-info" onClick={()=>this.handleComplete(i)}>{el.label}</button>
                        <button type="button" className="btn btn-outline-danger" onClick={()=>this.handleDelete(i)}>Delete</button>
                    </div>)}
                </div>

            </div>
        )
    }
}


