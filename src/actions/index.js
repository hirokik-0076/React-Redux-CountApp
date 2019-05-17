export const TEXTCHANGE = 'TEXTCHANGE';

//Action Creater
export const textChange = (textValue, textLength) => {
//textの数を数えるactionを定義
  return {
    type: TEXTCHANGE,
    textValue: textValue,
    textLength: textLength,
  };
};