import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchAllItems() {
    try {
        const response = yield axios.get('/api/items/');

        yield put({
            type: 'SET_ITEMS',
            payload: response.data
        });
    } catch (error) {
        console.log('Axios | GET items error', error);
    }
}

function* fetchItemById(action) {
    console.log('action', action.payload)
    try {
        yield axios.get(`/item/${action.payload.id}`);

        yield put({
            type: 'SET_ITEM',
            payload: action.payload
        })
    } catch (error) {
        console.log('Axios | GET an item error', error)
    }
}





function* itemsSaga() {
    yield takeLatest('FETCH_ITEMS', fetchAllItems);
    yield takeLatest('FETCH_ITEM', fetchItemById);
}

export default itemsSaga;