import React from 'react';
import './App.css';


class Header extends React.Component {


    state = {
        error : false,
        title : ''
    };

    onAddTaskClick = () => {
        let newText = this.state.title;
        if (newText !== ''){
            this.props.addTask(newText);
            this.setState({error: false, title: ''});
        }else {
            this.setState({error: true});
        }

    };


    onTitleChanged = (e) => {
        this.setState({
            title: e.currentTarget.value
    })
    };

    onKeyPress = (e) => {
       if (e.key === 'Enter'){
           this.onAddTaskClick();
       }
    };


    render = () => {
        let errorFilter = this.state.error ? 'error': '';
        return (
            <div className='todoList-header'>
                <h3 className='todoList-header_title'>What to learn</h3>
                <div className='todoList-newTaskForm'>
                    <input
                           type='text'
                           placeholder='New task name'
                           className={errorFilter}
                           onChange={this.onTitleChanged}
                           onKeyPress={this.onKeyPress}
                           value={this.state.title}/>
                    <button onClick={this.onAddTaskClick}>Add</button>

                </div>
            </div>

        );
    }
}


export default Header;

