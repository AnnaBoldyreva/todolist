import React from 'react';
import './App.css';
import TodoTask from "./TodoTask";


class Tasks extends React.Component {
    render = () => {
        return (

            <div>
                <TodoTask title='JS'    isDone={true}/>
                <TodoTask title='CSS'   isDone={true}/>
                <TodoTask title='React' isDone={false}/>
                <TodoTask title='Git'   isDone={true}/>
            </div>


        );
    }
}


export default Tasks;

