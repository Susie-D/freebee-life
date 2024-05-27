import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";

function* fetchUserItems() {
    console.log('FetchUserItems')

}

function* addUserItem(action) {
    console.log('addItem Saga', action.payload)
    try {
        yield axios.post('/api/new-item', action.payload);
        yield put({
            type: 'FETCH_USER_ITEM'
        })
    } catch (err) {
        console.log('Error in ADD item', err)
    }

}

function* userItemsSaga() {
    yield takeLatest('FETCH_USER_ITEMS', fetchUserItems);
    yield takeLatest('ADD_USER_ITEM', addUserItem)
}

export default userItemsSaga;

