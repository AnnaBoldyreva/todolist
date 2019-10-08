import React from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Tasks from "./Tasks";


class App extends React.Component {

    constructor(props){
        super(props);

        setTimeout(
            () => {
                this.state.tasks.push({title:'Git',  isDone:true, priority:'low'})},2000

        );
    };

    state = {
        tasks : [
            {title:'HTML',  isDone:true, priority:'low'},
            {title:'JS',    isDone:true, priority:'middle'},
            {title:'React', isDone:false, priority:'high'},
            {title:'Git',   isDone:true,  priority:'high'},
            {title:'Babel', isDone:false,  priority:'high'}
        ],
        filterValue: 'Active'
    };



    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <Header />
                    <Tasks tasks={this.state.tasks} />
                    <Footer filterValue={this.state.filterValue} />

                </div>
            </div>
        );
    }
}

export default App;

