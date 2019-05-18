import React from 'react';

class TodoHeader extends React.Component {
    constructor(props){
        super(props);
        this.textInput = React.createRef();
    }
    getRandmoId(){
        //this is just for testing purposes
        //afterthat we'll get the Id from the DB..
        const id = Math.random().toString();
        return id.slice(2,5);
    }
    handleAddTodo(e){
        const txt = this.textInput.current;
        if(txt.value){
            const todo = { title: txt.value , checked: false, id: this.getRandmoId() }
            this.props.onTodoAdd(todo);
            txt.value = "";
        }
    }
    render() {
        return (
            <div id="myDIV" className="header">
                <h2>My To Do List</h2>
                <input ref={this.textInput} type="text" id="myInput" placeholder="Title..." />
                <span onClick={this.handleAddTodo.bind(this)} className="addBtn">
                    Add
                </span>
            </div>
        );
    }
}

export default TodoHeader;
