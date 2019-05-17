export const TEXT_CHANGE = 'TEXTCHANGE';

//Action Creater
export const textChange = (textValue, textLength) => {
//textの数を数えるactionを定義
  return {
    type: TEXT_CHANGE,
    textValue: textValue,
    textLength: textLength,
  };
};