import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "./app/Todoslice";

function Todo_list() {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <div>
      {todos.map((todo) => (
        <div
          className="px-4 py-2 flex items-center justify-between bg-blue-800 m-2 text-white rounded-lg"
          key={todo.id}
        >
          <div className="text-xs overflow-scroll w-[20vh] ">{todo.text}</div>

          <div className="flex justify-between gap-3">
            <button className="bg-yellow-400 px-2 py-1 rounded-lg">Edit</button>
            <button
              className="bg-red-500 px-2 py-1 rounded-lg"
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todo_list;
