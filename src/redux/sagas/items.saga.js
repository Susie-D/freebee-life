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

function* itemsSaga() {
    yield takeLatest('GET_ITEMS', fetchAllItems);
}

export default itemsSaga;