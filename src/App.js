import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";




class App extends React.Component {
    state = {
        todoLists: [
            {id: 1, title: 'First'},
            {id: 2, title: 'Second'},
            {id: 3, title: 'third'}
        ]
    };

    addTodoList = (title) => {
        alert(title)
    };

    render = () => {
        const todoLists = this.state.todoLists.map(tl => <TodoList id={tl.id} title={tl.title}/>);
        return (
            <>
                <div>
                    <AddNewItemForm addItem={this.addTodoList}/>
                </div>

            <div className="App">
                {todoLists}
            </div>
                </>
        );
    }
}

export default App;

