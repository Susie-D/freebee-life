import { combineReducers } from 'redux';

const userItems = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_ITEMS':
            return action.payload;
        default:
            return state;
    }
}

const userItem = (state = {}, action) => {
    switch (action.type) {
        case 'SET_USER_ITEM': {
            return action.payload;
        }
        default:
            return state;
    }
}
export default combineReducers({
    userItems,
    userItem
});
