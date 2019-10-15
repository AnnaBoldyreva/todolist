import React from 'react';
import './App.css';


class TodoTask extends React.Component {

    onIsDoneChanged = (e)=> {
        alert(e.currentTarget.checked)
    };

    render = () => {
        return (

            <div className="todoList-tasks">
                <div className="todoList-task">
                    <input type="checkbox" checked={this.props.isDone} onChange={this.onIsDoneChanged}/>
                    <span>{this.props.title}, priority- {this.props.priority}</span>
                </div>
            </div>


        );
    }
}


export default TodoTask;

