import {combineReducers} from 'redux';
import text from './text';
//reducerによりActionが発生した際にActionのtypeによって状態をどう変化するかを定義するところ
//index.jsはアプリ内のreducerをまとめる役割
export default combineReducers({text});

//複数のreducerを持った場合
//combineReducers({text, foo, baz});