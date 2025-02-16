import { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  async function done(e) {
    e.preventDefault();

    const response = await axios.post("http://localhost:3000/signup", {
      name,
      email,
      password,
    });
    if (response.status === 200) {
      navigate("/login");
      setemail("");
      setpassword("");
      setname("");
    }
  }

  return (
    <div>
      <div className="bg-green-300 w-[100vw] h-[91vh] flex flex-col items-center justify-center gap-3">
        <div className="text-5xl italic px-2 py-4">
          Signup to the world of TODO
        </div>
        <form onSubmit={done} className="flex gap-3 flex-col justify-center">
          <div className="flex flex-col gap-2">
            <div className="text-xl select-none">Enter your name</div>
            <input
              required
              type="text"
              value={name}
              className="bg-white text-black rounded-lg border-2 drop-shadow-md text-mono  border-yellow-200"
              placeholder="Enter your name"
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-xl select-none">Enter your email id</div>
            <input
              required
              value={email}
              type="email"
              className="bg-white text-black rounded-lg border-2 drop-shadow-md text-mono  border-yellow-200"
              placeholder="Enter your email id"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-xl select-none">Password</div>
            <input
              value={password}
              type="password"
              required
              placeholder="Enter your password"
              className="bg-white text-black rounded-lg border-2 drop-shadow-md text-mono  border-yellow-200"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 relative">
            <button className="px-2 py-1 bg-blue-600 hover:border-1 hover: border-white rounded-lg   absolute  hover:bg-red-500 hover:text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
