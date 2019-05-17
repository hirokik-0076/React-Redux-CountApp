import React, {Component} from 'react';
//connect関数を用いて、今まで作成したstate、Action、Componentとの関連付け
import {connect} from 'react-redux';
import {textChange} from '../actions';

class App extends Component {
  render() {
    const props = this.props;

    return (
      <React.Fragment>
        <div>文字数： {props.textLength}</div>
        <textarea
          type="text"
          onChange={e => props.textChange(e.target.value, e.target.value.length)}
        />
      </React.Fragment>
    );
  }
}

//stateからComponentに必要な情報を抜き出してpropsとしてマッピングする機能をもつ
const mapStateToProps = state => (
  {
    textValue: state.text.textValue,
    textLength: state.text.textLength,
});

//dispathch関数は、あるactionが発生した場合reducerにtypeに応じた状態遷移を実行する関数
//mapDispathchTopropsは入力された文字と文字数を表示するため
const mapDispatchToProps = dispatch => (
  {
    textChange: (textValue, textLength) =>
      dispatch(textChange(textValue, textLength)),
});

//Componentの名前であるAppを引数にとり結びつけている。
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
