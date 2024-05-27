import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

function* fetchUserItemsById() {
    try {
        const response = yield axios.get('/api/my-items');
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
        yield axios.post('/api/new-item', action.payload);
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
        yield axios.get('/api/my-item', action.payload.id);
        yield put({
            type: 'SET_USER_ITEM',
            payload: action.payload,
        });
    } catch (error) {
        console.log('AXIOS | GET Error in user item', error);
    }
}

function* deleteUserItem(action) {
    console.log('delete', action)
    try {
        yield axios.delete(`/api/my-item/${action.payload}`);
        yield put({
            type: 'DELETE_ITEM',
            payload: action.payload
        });
    }
    catch (error) {
        console.log('AXIOS | DELETE Error in user item', error)
    }
}


function* userItemsSaga() {
    yield takeLatest('FETCH_USER_ITEMS', fetchUserItemsById);
    yield takeLatest('FETCH_USER_ITEM', fetchUserItemById);
    yield takeLatest('ADD_USER_ITEM', addUserItem);
    yield takeLatest('DELETE_USER_ITEM', deleteUserItem);
}

export default userItemsSaga;
