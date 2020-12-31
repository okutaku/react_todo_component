import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from './component/inputTodo';
import { IncompleteTodos } from './component/IncompleteTodos';
import { CompleteTodos } from './component/CompleteTodos'

export const App = () => {
  const[todoText, setTodoText] = useState('');//入力した場合を変数に入れる
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickedAdd = () => {
    if(todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  //何番目の行を判定したい場合、map,indexで関数をわたし、その関数の中で何番目に処理をしていくかをおこなっていく
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  }

  //onChangeで変わる値をvalueの中にしている
  //
  return (
    <>
     <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickedAdd} disabled={incompleteTodos.length >= 5}/>
     {incompleteTodos.length >=5 && (<p style={{color:"red"}}> 登録できるのは５個までです。消化してください</p>)}
     <IncompleteTodos todos={incompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete}/>
     <CompleteTodos todos={completeTodos} onClickBack={onClickBack}/>
    </>
  );
}
