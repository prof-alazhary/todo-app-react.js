import React from 'react';

class TodoRow extends React.Component {   
    handleChecke(e) {
        this.props.onTodoChecked(e.target.id);
    }
    render() {
        return (
            <li
                onClick={this.handleChecke.bind(this)}
                className={this.props.checked ? 'checked' : ''}
                id={this.props.id}
            >
                {this.props.title}
                <span className="close">×</span>
            </li>
        );
    }
}

export default TodoRow;
