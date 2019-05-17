import React from 'react';
import ReactDOM from 'react-dom';
//reduxパッケージからcreateStoreをimport
import {createStore} from 'redux';
//作成したstoreを全Componentに渡す為の機能をもつProviderという特殊なComponentをimport
import {Provider} from 'react-redux';

import './index.css';
import reducer from './reducers';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

//sotreを作成、storeがアプリ内stateを保存している
const store = createStore(reducer);

ReactDOM.render(
//各コンポーネントをラップする事でsotreのデータを渡している
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
//