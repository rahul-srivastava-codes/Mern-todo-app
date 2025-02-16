import { useState } from "react";
import { useDispatch } from "react-redux";
import Todo_list from "./Todo_list";
import { addtodo } from "./app/Todoslice";

function Todo_form() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  function complete(e: any) {
    e.preventDefault;
    dispatch(addtodo(text));
    setText("");
  }
  return (
    <div className="bg-green-300 w-[100vw] h-[91vh] flex items-center justify-evenly gap-3">
      <div className="">
        <div className="text-2xl">Your TODO's</div>
        <form action={complete} className="flex flex-col gap-4 ">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="bg-white border-1 rounded-lg"
            placeholder="Add a new todo"
          />
          <button className="px-1 py-1 bg-blue-400 rounded-lg hover:bg-red-400">
            Add
          </button>
        </form>
      </div>
      <Todo_list></Todo_list>
    </div>
  );
}

export default Todo_form;
