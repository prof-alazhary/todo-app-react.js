import React from 'react';
import TodoRow from './TodoRow';

class TodoBody extends React.Component {

    render() {
        const todos = [];
        this.props.todos.forEach(todo => {
            todos.push(<TodoRow key={todo.id} {...todo} onTodoChecked={this.props.onTodoChecked} />);
        });
        return <ul id="myUL">{todos}</ul>;
    }
}

export default TodoBody;
