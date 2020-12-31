import React from 'react';

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete} = props;
  return (
    <div className="incomplete-area">
       <p className="title">未完了のTODO</p>
       <ul>
        {todos.map((todo, index) => {
          return (
            //keyは仮想DOMは変更後とその差分だけ表示しているので何番目かを把握するためにかく
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button　onClick={() => onClickComplete(index)}>完了</button>
              {/*アロー関数で処理しないと、リロードの際にindex分（個数分）処理が発火する*/}
              <button　onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
       </ul>
     </div>
  );
};