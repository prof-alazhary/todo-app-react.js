import React from 'react';
import TodoHeader from './TodoHeader';
import TodoBody from './TodoBody';

class TodoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todos: [...TODOS] };
    }
    handleTodoChecked(id) {
        const todo = this.state.todos.find(todo => todo.id == id);
        todo.checked = !todo.checked;
        this.setState(todo);
    }
    render() {
        return (
            <div>
                <TodoHeader />
                <TodoBody todos={this.state.todos}
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
