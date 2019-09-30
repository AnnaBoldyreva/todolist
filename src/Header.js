import React from 'react';
import './App.css';


class Header extends React.Component {
    render = () => {
        return (
<div className='todoList-header'>
    <h3 className='todoList-header_title'>What to learn</h3>
    <div className='todoList-newTaskForm'>
        <input type='text' placeholder='New task name'/>
        <button>Add</button>

    </div>
</div>

        );
    }
}


export default Header;

