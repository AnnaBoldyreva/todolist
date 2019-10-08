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
                let newTask = {
                    title: 'Java',
                    isDone: false,
                    priority: 'low'
                };
                let newTasks = [...this.state.tasks, newTask];
                this.setState({tasks: newTasks});
            }, 2000);
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
                    <div className='todoList-header'>
                        <h3 className='todoList-header_title'>What to learn</h3>
                        <div className='todoList-newTaskForm'>
                            <input type='text' placeholder='New task name'/>
                            <button onClick={()=> {alert('yo')}}>Add</button>

                        </div>
                    </div>

                    {/*<Header />*/}
                    <Tasks tasks={this.state.tasks} />
                    <Footer filterValue={this.state.filterValue} />

                </div>
            </div>
        );
    }
}

export default App;

