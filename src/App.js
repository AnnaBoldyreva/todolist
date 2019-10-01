import React from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Tasks from "./Tasks";


class App extends React.Component {
    tasks = [
        {title:'HTML',  isDone:true, priority:'low'},
        {title:'JS',    isDone:true, priority:'middle'},
        {title:'React', isDone:false, priority:'high'},
        {title:'Git',   isDone:true, priority:'high'}
    ];
    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <Header />
                    <Tasks tasks={this.tasks} />
                    <Footer />

                </div>
            </div>
        );
    }
}

export default App;

