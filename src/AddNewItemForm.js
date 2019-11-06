import React from 'react';
import './App.css';


class AddNewItemForm extends React.Component {


    state = {
        error : false,
        title : ''
    };

    onAddItemClick = () => {
        let newText = this.state.title;
        if (newText !== ''){
            this.props.addItem(newText);
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
           this.onAddItemClick();
       }
    };


    render = () => {
        let errorFilter = this.state.error ? 'error': '';
        return (
            <div className='todoList-header'>
                <div className='todoList-newTaskForm'>
                    <input
                           type='text'
                           placeholder='New item name'
                           className={errorFilter}
                           onChange={this.onTitleChanged}
                           onKeyPress={this.onKeyPress}
                           value={this.state.title}/>
                    <button onClick={this.onAddItemClick}>Add</button>

                </div>
            </div>

        );
    }
}


export default AddNewItemForm;

