import React from 'react';
import './App.css';
import AddNewItemForm from "./AddNewItemForm";
import Footer from "./Footer";
import Tasks from "./Tasks";
import TodoListTitle from "./TodoListTitle";



class TodoList extends React.Component {

    constructor(props){
        super(props);

    };

    state = {
        tasks : [
            // {id: 0, title:'HTML',  isDone:true, priority:'low'},
            // {id: 1, title:'JS',    isDone:true, priority:'middle'},
            // {id: 2, title:'React', isDone:false, priority:'high'},
            // {id: 3, title:'Git',   isDone:true,  priority:'high'},
            // {id: 4, title:'Babel', isDone:false,  priority:'high'}
        ],
        filterValue: 'All'
    };

    nextTaskId = 0;

    componentDidMount() {
        this.restoreState();
    }

    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem('our-state-' + this.props.id ,stateAsString);
    };

    restoreState = () => {
      let state = {
          tasks: [],
          filterValue: 'All'
      };
      let stateAsString = localStorage.getItem('our-state-' + this.props.id );
      if (stateAsString !== null) {
          state = JSON.parse(stateAsString);
      }
      this.setState(state, () => {this.state.tasks.forEach(t=>{
          if(t.id >= this.nextTaskId){
              this.nextTaskId = t.id + 1
          }
      })});
    };

    addTask = (newText) => {
        let newTask = {
            id: this.nextTaskId,
            title: newText,
            isDone: false,
            priority: 'low'
        };
        this.nextTaskId++;
        let newTasks = [...this.state.tasks, newTask];
        this.setState({tasks: newTasks},
            () => {this.saveState();});

    };

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        },() => {this.saveState();});

    };

    changeStatus = (taskId, isDone) =>{
        this.changeTask(taskId, {isDone:isDone});
    };

    changeTitle = (taskId, title) => {
        this.changeTask(taskId, {title: title})
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
        this.setState({tasks: newTasks},() => {this.saveState();})
    };

    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <div>
                        <TodoListTitle title={this.props.title}/>
                        <AddNewItemForm addItem={this.addTask}/>
                    </div>
                    <Tasks changeStatus={this.changeStatus}
                           changeTitle={this.changeTitle}
                        tasks={this.props.tasks.filter(t => {
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

export default TodoList;

