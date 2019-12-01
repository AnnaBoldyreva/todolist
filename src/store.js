import {createStore} from "redux";


const initialState = {
    todolists: [
        {'id': 0, 'title': 'today', tasks:[{id: 0, title:'HTML',  isDone:true, priority:'low'}]},
        {'id': 1, 'title': 'tomorrow', tasks:[{id: 1, title:'CSS',  isDone:false, priority:'low'}]},
        {'id': 2, 'title': 'to eat', tasks:[{id: 2, title:'JS',  isDone:true, priority:'low'}]}
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD-TODOLIST':
            return {
                ...state,
                todolists: [...state.todolists, action.newTodolist]
            };
        case 'ADD-TASK':
            return {
                ...state,
                todolists: state.todolists.map((tl)=> {
                    if (tl.id === action.todolistId){
                        return {...tl,tasks: [...tl.tasks,action.newTask]}
                    } else {
                        return tl
                    }
                })
            }
    }
    return state;
};

const store = createStore(reducer);
export default store;