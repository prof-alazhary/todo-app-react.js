import React from 'react';

class TodoHeader extends React.Component {
    render() {
        return (
            <div id="myDIV" className="header">
                <h2>My To Do List</h2>
                <input type="text" id="myInput" placeholder="Title..." />
                <span onClick={() => {}} className="addBtn">
                    Add
                </span>
            </div>
        );
    }
}

export default TodoHeader;
