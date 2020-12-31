import React from 'react';

//css in js
//jsの中にcｓｓを管理すること
// オブジェクトで管理することになるので書き方に変更あるところに注意が必要
const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  borderRadius: "8px",
  padding: "8px",
  margin: "8px",
}

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div style={style}>
    <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
    <button onClick={onClick}>追加</button>
  </div>
  );
};
//コンポーネントの手順
// まずファイルをつくる
//なんの機能が必要なのか考える
//その機能（情報）を親（App.js）を参照にpropsでもとをつくる
//メリット
//見た目がよい
//使いまわしができる
//CSSの変更 css in js 
//cssの管理もコンポーネントの中身で行う
