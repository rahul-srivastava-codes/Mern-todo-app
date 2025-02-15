function Todo_form() {
  return (
    <div className="bg-zinc-300 w-[100vw] h-[91vh] flex flex-col items-center justify-center gap-3">
      <div className="text-2xl">Your TODO's</div>
      <form action="" className="flex flex-col gap-4 ">
        <input
          type="text"
          className="bg-white border-1"
          placeholder="Add a new todo"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Todo_form;
