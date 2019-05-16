import React from 'react';


class TodoContainer extends React.Component{

    render(){
        return(<div>
                    <div id="myDIV" className="header">
                        <h2 >My To Do List</h2>
                        <input type="text" id="myInput" placeholder="Title..."/>
                        <span onClick={()=>{}} className="addBtn">Add</span>
                    </div>

                    <ul id="myUL">
                        <li>Hit the gym
                            <span className="close">×</span>
                        </li>
                        <li className="checked">Pay bills
                            <span className="close">×</span></li>
                        <li>Meet George
                            <span className="close">×</span>
                        </li>
                    </ul>
                </div>)

    }
}

export default TodoContainer;