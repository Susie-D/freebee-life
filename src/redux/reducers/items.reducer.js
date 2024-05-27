import { combineReducers } from 'redux';

const items = (state = [], action) => {
    switch (action.type) {
        case 'SET_ITEMS':
            return action.payload;
        default:
            return state;
    }
}



const item = (state = {}, action) => {
    switch (action.type) {
        case 'SET_ITEM': {
            return action.payload;
        }
        default:
            return state;
    }
}
export default combineReducers({
    items,
    item
});
