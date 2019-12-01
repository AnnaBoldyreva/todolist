import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";




class App extends React.Component {
    state = {
        todoLists: []
    };

    nextItemId = 0;

    addTodoList = (title) => {
        let newItem = {
            title: title,
            id: this.nextItemId
        };
        this.nextItemId ++;
        this.setState({
            todoLists: [...this.state.todoLists, newItem]
        }, () => {
            this.saveState()
        });
    };

    componentDidMount() {
        this.restoreState();
    }

    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem('todoLists',stateAsString);
    };

    restoreState = () => {

        let stateAsString = localStorage.getItem('todoLists');
        if (stateAsString) {
           let state = JSON.parse(stateAsString);
           state.todoLists.forEach(t=>{
               if(t.id >= this.nextItemId){
               this.nextItemId = t.id +1;
               }
           });
           this.setState(state)
        }
    };


    render = () => {
        const todoLists = this.props.todolists.map(tl => <TodoList id={tl.id} title={tl.title}/>);
        return (
            <>
                <div className='itemForm'>
                    <AddNewItemForm addItem={this.addTodoList}/>
                </div>

            <div className="App">
                {todoLists}
            </div>
                </>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        todolists: state.todolists
    }
};

export default connect(mapStateToProps)(App);




