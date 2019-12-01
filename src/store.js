import {createStore} from "redux";


const initialState = {
    todolists: [
        {'id': 0, 'title': 'today'},
        {'id': 1, 'title': 'tomorrow'},
        {'id': 2, 'title': 'to eat'}
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