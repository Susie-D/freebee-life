import { combineReducers } from 'redux';

const userItems = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_ITEMS':
            return action.payload;
        default:
            return state;
    }
};

const userItem = (state = {}, action) => {
    switch (action.type) {
        case 'SET_USER_ITEM': {
            return action.payload;
        }
        default:
            return state;
    }
};

const deleteUserItem = (state = {}, action) => {
    switch (action.type) {
        case 'DELETE_ITEM':
            return action.payload;
        default:
            return state;
    }
};

const editUserItem = (state = {}, action) => {
    switch (action.type) {
        case 'SET_EDIT_USER_ITEM':
            return action.payload;
        case 'EDIT_USER_ITEM_INPUT':
            return {
                ...state,
                [action.payload.name]: action.payload.value
            };
        default:
            return state
    }
};


export default combineReducers({
    userItems,
    userItem,
    deleteUserItem,
    editUserItem,
});
