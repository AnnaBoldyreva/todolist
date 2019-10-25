import React from 'react';
import './App.css';


class Header extends React.Component {


    constructor(props) {
        super(props);
        this.newTaskTitleRef = React.createRef();


    };

    state = {
        error : false
    };



    onAddTaskClick = () => {
        let newText = this.newTaskTitleRef.current.value;
        if (newText === ''){
            this.setState({error: true});
        } else {
            this.setState({error: false});
            this.newTaskTitleRef.current.value = '';
            this.props.addTask(newText)
        }
    };

    onErrorChanged = () => {
        this.setState({error: false})
    };

    onKeyPress = (e) => {
       if (e.key === 'Enter'){
           alert('hey')
       }
    };


    render = () => {
        let errorFilter = this.state.error ? 'error': '';
        return (
            <div className='todoList-header'>
                <h3 className='todoList-header_title'>What to learn</h3>
                <div className='todoList-newTaskForm'>
                    <input ref={this.newTaskTitleRef}
                           type='text'
                           placeholder='New task name'
                           className={errorFilter}
                           onChange={this.onErrorChanged}
                           onKeyPress={this.onKeyPress}/>
                    <button onClick={this.onAddTaskClick}>Add</button>

                </div>
            </div>

        );
    }
}


export default Header;

