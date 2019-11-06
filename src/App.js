import React from 'react';
import './App.css';
import TodoList from "./TodoList";




class App extends React.Component {
    render = () => {
        return (
            <div className="App">
              <TodoList/>
              <TodoList/>
            </div>
        );
    }
}

export default App;

