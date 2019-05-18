import React from 'react';

class TodoRow extends React.Component {   
    handleChecke(e) {
        if(e.target.nodeName == "LI"){
            this.props.onTodoChecked(e.target.id);
        }
    }
    handleRemove(id,e){
        this.props.onTodoRemoved(id)
    }
    render() {
        return (
            <li
                onClick={this.handleChecke.bind(this)}
                className={this.props.checked ? 'checked' : ''}
                id={this.props.id}
            >
                {this.props.title}
                <span onClick={this.handleRemove.bind(this, this.props.id)} className="close">×</span>
            </li>
        );
    }
}

export default TodoRow;
