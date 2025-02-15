import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import Todo_form from "./Component/Todo_form";

function App() {
  return (
    <>
      <div>
        <div>
          <div className="navbar flex items-center justify-evenly px-2 py-4 text-white bg-zinc-400">
            <Link to="/todo">Todo</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        </div>

        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/todo" element={<Todo_form />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
