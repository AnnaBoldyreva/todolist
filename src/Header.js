import React from 'react';
import './App.css';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.newTaskTitleRef = React.createRef();


    };

    onAddTaskClick = () => {
        let newText = this.newTaskTitleRef.current.value;
        this.newTaskTitleRef.current.value = '';
        this.props.addTask(newText)
    };

    render = () => {
        return (
            <div className='todoList-header'>
                <h3 className='todoList-header_title'>What to learn</h3>
                <div className='todoList-newTaskForm'>
                    <input ref={this.newTaskTitleRef} type='text' placeholder='New task name'/>
                    <button onClick={this.onAddTaskClick}>Add</button>

                </div>
            </div>

        );
    }
}


export default Header;

