import React from 'react';
import './App.css';


class TodoTask extends React.Component {

    state = {
      editMode: false
    };

    activateEditMode = () => {
        this.setState({editMode: true})

    };

    onIsDoneChanged = (e)=> {

        this.props.changeStatus( this.props.task.id, e.currentTarget.checked)
    };

    deactivateEditMode = () => {
        this.setState({editMode: false})
    };

    onTitleChanged = (e) => {
        this.props.changeTitle(this.props.task.id, e.currentTarget.value)

    };

    render = () => {
        let classForDone = this.props.task.isDone === true ? 'todoList-task done': 'todoList-task';
        return (

            <div className="todoList-tasks">
                <div className={classForDone}>
                    <input type="checkbox" checked={this.props.task.isDone} onChange={this.onIsDoneChanged}/>
                    {this.state.editMode
                    ? <input onBlur={this.deactivateEditMode } autoFocus={true} value={this.props.task.title} onChange={this.onTitleChanged}/>
                    : <span onClick={this.activateEditMode}>{this.props.task.id} - title: {this.props.task.title}</span>}, priority- {this.props.task.priority}
                </div>
            </div>


        );
    }
}


export default TodoTask;

