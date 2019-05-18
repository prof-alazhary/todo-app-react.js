import React from 'react';
import TodoHeader from './TodoHeader';
import TodoBody from './TodoBody';
import cloneDeep from 'lodash/cloneDeep';

console.log(cloneDeep);

class TodoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todos: [...TODOS] };
    }
    handleTodoChecked(id) {
        const todos = cloneDeep(this.state.todos);
        const todo = todos.find(todo => todo.id == id);
        todo.checked = !todo.checked;
        this.setState({ todos });
    }
    handleAddTodo(todo) {
        const todos = cloneDeep(this.state.todos);
        todos.push(todo)
        this.setState({ todos });
    }
    render() {
        return (
            <div>
                <TodoHeader 
                    onTodoAdd={this.handleAddTodo.bind(this)}
                />
                <TodoBody
                    todos={this.state.todos}
                    onTodoChecked={this.handleTodoChecked.bind(this)}
                />
            </div>
        );
    }
}
const TODOS = [
    { title: 'hamad', checked: true, id: '123' },
    { title: 'Ali', checked: false, id: '456' },
    { title: 'Ibraheem', checked: true, id: '789' }
];
export default TodoContainer;
