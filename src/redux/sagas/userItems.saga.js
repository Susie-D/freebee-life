import axios from 'axios';
import { takeLatest, put, select } from 'redux-saga/effects';

const getUserIdFromState = (state) => state.user.id

function* fetchUserItemsById() {
    try {
        const userId = yield select(getUserIdFromState);
        const response = yield axios.get(`/api/user/${userId}/items`);
        yield put({
            type: 'SET_USER_ITEMS',
            payload: response.data,
        });
    } catch (error) {
        console.log('AXIOS | GET items by user error', error);
    }
}

function* addUserItem(action) {
    console.log('addItem Saga', action.payload);
    try {
        yield axios.post('/api/items', action.payload);
        yield put({
            type: 'FETCH_USER_ITEMS',
            payload: action.payload,
        });
    } catch (err) {
        console.log('AXIOS | POST in ADD item', err);
    }
}

function* fetchUserItemById(action) {
    try {
        yield axios.get(`/api/user/${action.payload.id}/items`);
        yield put({
            type: 'SET_USER_ITEM',
            payload: action.payload,
        });
    } catch (error) {
        console.log('AXIOS | GET Error in user item', error);
    }
}

function* deleteUserItem(action) {
    try {
        yield axios.delete(`/api/items/${action.payload}`);
        yield put({
            type: 'DELETE_ITEM',
            payload: action.payload
        });
    }
    catch (error) {
        console.log('AXIOS | DELETE Error in user item', error)
    }
}

function* fetchItemToEdit(action) {
    console.log('action fetch edit id', action.payload)
    try {
        const response = yield axios.get(`/api/items/${action.payload}`);
        console.log('response', response)
        yield put({
            type: 'SET_EDIT_USER_ITEM',
            payload: response.data[0]
        })
    } catch (err) {
        console.log('fetchItemToEdit error:', err)
    }
}

function* updateUserItem(action) {
    console.log('editUserItem', action.payload)
    try {
        yield axios.put(`/api/items/${action.payload.get('id')}`, action.payload);
        yield put({
            type: 'FETCH_USER_ITEMS'
        })
    }
    catch (error) {
        console.log('AXIOS | EDIT Error in user item', error)
    }
}


function* userItemsSaga() {
    yield takeLatest('FETCH_USER_ITEMS', fetchUserItemsById);
    yield takeLatest('FETCH_USER_ITEM', fetchUserItemById);
    yield takeLatest('ADD_USER_ITEM', addUserItem);

    yield takeLatest('DELETE_USER_ITEM', deleteUserItem);

    yield takeLatest('FETCH_EDIT_USER_ITEM', fetchItemToEdit);
    yield takeLatest('UPDATE_ITEM', updateUserItem);
}

export default userItemsSaga;
