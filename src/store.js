import {createStore} from "redux";


const initialState = {
    todoLists: []
};

const reducer = (state = initialState, action) => {
    return state;
};

const store = createStore(reducer);
export default store;