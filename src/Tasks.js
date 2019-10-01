import React from 'react';
import './App.css';
import TodoTask from "./TodoTask";


class Tasks extends React.Component {
    render = () => {
        let taskElement = this.props.tasks.map( (task) => {
            return <TodoTask title={task.title} isDone={task.isDone} />
            });
        return (

            <div>
                {taskElement}
            </div>


        );
    }
}


export default Tasks;

