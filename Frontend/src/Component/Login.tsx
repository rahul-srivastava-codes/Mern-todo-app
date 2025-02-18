import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  async function login(e: any) {
    e.preventDefault();
    const user = await axios.post("http://localhost:3000/login", {
      email,
      password,
    });
    if (user.data === "Success") {
      setemail("");
      setpassword("");
      navigate("/todo");
    } else {
      navigate("/signup");
      alert("Login failed");
    }
  }
  return (
    <div>
      <div className="bg-green-300 w-[100vw] h-[91vh] flex flex-col items-center justify-center gap-3">
        <div className="text-5xl italic px-2 py-4">
          Login to the world of TODO
        </div>
        <form onSubmit={login} className="flex gap-3 flex-col justify-center">
          <div className="flex flex-col gap-2">
            <div className="text-xl">Enter your email id</div>
            <input
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="text"
              className="bg-white text-black rounded-lg"
              placeholder="Enter your email id"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-xl">Password</div>
            <input
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              className="bg-white text-black rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2 relative ">
            <button className="px-2 py-1 bg-blue-700 text-white rounded-lg hover:bg-red-400  absolute hover:text-black ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
