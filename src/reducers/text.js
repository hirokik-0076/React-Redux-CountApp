import {TEXT_CHANGE} from '../actions';

const initialState = {textLength: 0, textValue: 'initial value'};
//state,actionから、新しいstateを作成してreturnで返している。
export default (state = initialState, action) => {
  switch (action.type) {
    case TEXT_CHANGE:
      return {textValue: action.textValue, textLength: action.textLength};
    default:
      return state;
  }
};