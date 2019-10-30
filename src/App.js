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
            {id: 0, title:'HTML',  isDone:true, priority:'low'},
            {id: 1, title:'JS',    isDone:true, priority:'middle'},
            {id: 2, title:'React', isDone:false, priority:'high'},
            {id: 3, title:'Git',   isDone:true,  priority:'high'},
            {id: 4, title:'Babel', isDone:false,  priority:'high'}
        ],
        filterValue: 'All'
    };

    nextTaskId = 5;

    addTask = (newText) => {
        let newTask = {
            id: this.nextTaskId,
            title: newText,
            isDone: false,
            priority: 'low'
        };
        this.nextTaskId++;
        let newTasks = [...this.state.tasks, newTask];
        this.setState({tasks: newTasks});
    };

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        });

    };

    changeStatus = (taskId, isDone) =>{
        this.changeTask(taskId, {isDone:isDone});
        // let newTasks = this.state.tasks.map( t =>  {
        //    if (t.id !== taskId){
        //        return t;
        //    }else {
        //        return {...t, isDone: isDone};
        //    }
        // });
        // this.setState({
        //     tasks: newTasks
        //     })
    };

    changeTitle = (taskId, title) => {
        this.changeTask(taskId, {title: title})
        // let newTasks = this.state.tasks.map(t => {
        //     if (t.id !== taskId){
        //         return t
        //     }
        //     else {
        //         return {...t, title: title}
        //     }
        // });
        // this.setState({tasks: newTasks})

    };

    changeTask = (taskId, obj) => {
        let newTasks = this.state.tasks.map(t => {
            if (t.id !== taskId){
                return t
            }
            else {
                return {...t, ...obj}
            }
        });
        this.setState({tasks: newTasks})
    };

    render = () => {
        return (
            <div className="App">
                <div className="todoList">

                    <Header addTask={this.addTask}/>
                    <Tasks changeStatus={this.changeStatus}
                           changeTitle={this.changeTitle}
                        tasks={this.state.tasks.filter(t => {
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

