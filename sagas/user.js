import { all, fork, takeEvery, call, put, delay } from 'redux-saga/effects';

import axios from 'axios';
import * as action from '../reducers/user';

function loginApi() {
    return axios.post('./login');
}

function * login ({ payload }) {
    try {
        const { loginData } = payload;
        console.log('### login data > ', loginData);
        
        yield delay(2000);
        yield put({
            type : actions.LOG_IN_SUCCESS,
        });
    } catch (e) {
        console.log('### login data > ', loginData);
        yield put({
            type : actions.LOG_IN_FAILURE,
        });
    }
}

function logoutApi() {
    return axios.post('/logout');
}

function * logout () {
    try {
        yield delay(2000);
        yield put({
            type : actions.LOG_OUT_SUCCESS,
        });
    } catch (e) {
        console.log('### login data > ', loginData);
        yield put({
            type : actions.LOG_OUT_FAILURE,
            payload : {
                e,
            }
        });
    }
}

function signUpApi () {
    return axios.post('/signUp');
}

function * signUp ({ payload }) {
    try {
        const { signUpData } = payload;
        console.log('### signUp Data > ', signUpData);

        yield delay(2000);
        yield put({
            type : actions.SIG_UP_SUCCESS,
        });
    } catch (e) {
        console.log('### signUp data_error > ', loginData);
        yield put({
            type : actions.SIG_UP_FAILURE,
            payload : {
                e,
            }
        });
    }
}

function * watchLogin() {
    yield takeEvery(action.LOG_IN_REQUEST, login);
    yield takeEvery(action.LOG_OUT_REQUEST, logout);
}

function * watchSignUp() {
    yield takeEvery(action.SIGN_UP_REQUEST, signUp);
}

/**
 *  1. userSaga가 all을 이용해 watchLogin을 등록하고
 *  2. watchLogin이 takeEvery를 이용하여 action을 dispatch를 한다.
 *  3. LOG_IN_REQUEST action이 dispatch되면 login이라는 함수 실행
 *  4. login은 payload를 통하여 action을 dispatch 할 떄 param을 받는다.
 *  5. 그 이후 delay를 준다
 */
export default function * userSaga() {
    yield all ([
        fork(watchLogin),
        fork(watchSignUp),
    ]);
}