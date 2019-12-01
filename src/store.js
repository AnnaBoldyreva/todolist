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
            }
    }
    return state;
};

const store = createStore(reducer);
export default store;