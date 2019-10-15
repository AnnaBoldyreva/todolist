import React from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Tasks from "./Tasks";



class App extends React.Component {

    constructor(props){
        super(props);

    };

    state = {
        tasks : [
            {title:'HTML',  isDone:true, priority:'low'},
            {title:'JS',    isDone:true, priority:'middle'},
            {title:'React', isDone:false, priority:'high'},
            {title:'Git',   isDone:true,  priority:'high'},
            {title:'Babel', isDone:false,  priority:'high'}
        ],
        filterValue: 'All'
    };


    addTask = (newText) => {
        let newTask = {
            title: newText,
            isDone: false,
            priority: 'low'
        };


        let newTasks = [...this.state.tasks, newTask];
        this.setState({tasks: newTasks});
    };


    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        });

    };

    render = () => {
        return (
            <div className="App">
                <div className="todoList">

                    <Header addTask={this.addTask}/>
                    <Tasks tasks={this.state.tasks.filter(t => {
                        if (this.state.filterValue === 'All'){
                            return true;
                            }
                        if (this.state.filterValue === 'Active'){
                            return !t.isDone;
                        }
                        if (this.state.filterValue === 'Completed'){
                            return t.isDone;
                        }}

                    )} />
                    <Footer filterValue={this.state.filterValue} changeFilter={this.changeFilter} />

                </div>
            </div>
        );
    }
}

export default App;

