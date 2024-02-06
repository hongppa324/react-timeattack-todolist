import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/modules/todos";

export default function AddForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    if (!title || !content) {
      return alert(`제목과 내용을 입력해주세요`);
    }
    dispatch(addTodo({ title, content }));
  };

  return (
    <form onSubmit={submitHandler}>
      <label>제목</label>
      <input
        type="text"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      ></input>
      <label>내용</label>
      <input
        type="text"
        value={content}
        onChange={(event) => {
          setContent(event.target.value);
        }}
      ></input>
      <button>추가하기</button>
    </form>
  );
}
