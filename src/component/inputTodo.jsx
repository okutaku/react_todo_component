import React from 'react';

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div className="input-area">
    <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
    <button onClick={onClick}>追加</button>
  </div>
  );
};
//コンポーネントの手順
// まずファイルをつくる
//なんの機能が必要なのか考える
//その機能（情報）を親（App.js）を参照にpropsでつくる