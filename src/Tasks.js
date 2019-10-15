import React from 'react';
import './App.css';
import TodoTask from "./TodoTask";
import PropTypes from 'prop-types';


class Tasks extends React.Component {
    render = () => {
        let taskElement = this.props.tasks.map( (task) => {
            return <TodoTask   changeStatus={this.props.changeStatus}
                               task={task}
                               // title={task.title}
                               // isDone={task.isDone}
                               // priority={task.priority}
            />
            });
        return (

            <div>
                {taskElement}
            </div>


        );
    }
}


export default Tasks;
Tasks.propTypes = {
    tasks: PropTypes.array
};

