import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import Todo_form from "./Component/Todo_form";
import { useEffect } from "react";
import { motion } from "motion/react";

function App() {
  useEffect(() => {
    const disableRightClick = (e: MouseEvent) => {
      e.preventDefault();
    };
  });
  return (
    <>
      <div>
        <div>
          <div className="navbar flex items-center justify-evenly px-2 py-4 text-white bg-zinc-400 ">
            <Link className="text-xl " to="/todo">
              <motion.div
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.9,
                    type: "spring",
                    stiffness: 50,
                  },
                }}
              >
                Todo
              </motion.div>
            </Link>
            <Link className="text-xl " to="/login">
              <motion.div
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.9,
                    type: "spring",
                    stiffness: 50,
                  },
                }}
              >
                Login
              </motion.div>
            </Link>
            <Link className="text-xl " to="/signup">
              <motion.div
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.9,
                    type: "spring",
                    stiffness: 50,
                  },
                }}
              >
                Signup
              </motion.div>
            </Link>
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
