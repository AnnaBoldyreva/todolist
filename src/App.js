import React from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Tasks from "./Tasks";



class App extends React.Component {

    constructor(props){
        super(props);
        this.newTaskTitleRef = React.createRef();

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

    onAddTaskClick = () => {

            let newText = this.newTaskTitleRef.current.value;

            let newTask = {
                title: newText,
                isDone: false,
                priority: 'low'
            };
            this.newTaskTitleRef.current.value = '';

            let newTasks = [...this.state.tasks, newTask];
            this.setState({tasks: newTasks});



    };

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue : newFilterValue
        });

    };



    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <div className='todoList-header'>
                        <h3 className='todoList-header_title'>What to learn</h3>
                        <div className='todoList-newTaskForm'>
                            <input ref={this.newTaskTitleRef} type='text' placeholder='New task name'/>
                            <button onClick={this.onAddTaskClick}>Add</button>

                        </div>
                    </div>

                    {/*<Header />*/}
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

