/**
 * ##### _app.js -> root 담당
 * ## store 
 *      - redux store
 *      - dispatch, getState, subscribe 포함
 * ## next
 *      - 액션을 다음 미들웨어로 전달하는 함수(express의 next와 비슷)
 *      - next(action)의 형식으로 사용
 *      - 다음 미들웨어가 없으면 리듀서로 액션을 전달한다
 * ## action
 *      - 현재 처리하고 있는 액션 객체
 * 
 * #### 리덕스의 스토어에는 여러개의 미들웨어를 등록가능
 *  새로운 액션이 디스패치되면 첫번째로 등록한 미들웨어가 호출되고, next(action)을 호출하면 다음 미들웨어로 액숀이 넘어간
 *  미들웨어에서 store.dispath를 사용하면 다른 액션을 추가적으로 발생 시킬수 있다.
 */

import Ract from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import reducers from '../reducers';
import rootSaga from '../sagas';
import AppLayout from '../components/AppLayout'

const NodeBird = ({ Component, store }) => {
    return (
        <Provider store={store} >
            <Head>
                <title>NodeBird</title>
            </Head>
            <AppLayout>
                <Component />
            </AppLayout>
        </Provider>
    );
};

NodeBird.PropTypes = {
    Component : PropTypes.elementType.isRequired,
    // store : PropTypes.object.isRequired,
};

/** 
 *  미들웨어를 스토어에 적용 할 때는 applyMiddleware  함수 사용
 * 
 */
// const configureStore = (initialState, options) => {
//     const sagaMiddleware = createSagaMiddleware();
//     const middleware = [sagaMiddleware];
//     const enhancer = process.env.NODE_ENV == 'production' 
//         ? compose(applyMiddleware(...middleware))
//         : compose (
//             applyMiddleware(...middleware),
//             !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
//         );
//         const store = createStore(reducers, initialState, enhancer);
//         sagaMiddleware.run(rootSaga);
//         return store;
// };

// export default withRedux(configureStore)(NodeBird);
export default NodeBird;

