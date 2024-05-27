import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

function* fetchUserItemsById(action) {
    console.log('userItem action', action.payload)
    try {
        const response = yield axios.get('/api/my-items');
        yield put({
            type: 'SET_USER_ITEMS',
            payload: response.data
        })
    }
    catch (error) {
        console.log('AXIOS | GET items by user error', error);
    }
}

function* addUserItem(action) {
    console.log('addItem Saga', action.payload)
    try {
        yield axios.post('/api/new-item', action.payload);
        yield put({
            type: 'FETCH_USER_ITEMS'
        })
    } catch (err) {
        console.log('Error in ADD item', err)
    }
}

function* fetchUserItemById(action) {
    console.log('addAUserItemSaga', action)
    try {
        yield axios.post('/api/my-item', action.payload.id)
        yield put({
            type: 'SET_USER_ITEM',
            payload: action.payload
        })
    }
    catch (error) {
        console.log('Error in get a user item', error)
    }

}

function* userItemsSaga() {
    yield takeLatest('FETCH_USER_ITEMS', fetchUserItemsById);
    yield takeLatest('FETCH_USER_ITEM', fetchUserItemById);
    yield takeLatest('ADD_USER_ITEM', addUserItem)
}

export default userItemsSaga;

