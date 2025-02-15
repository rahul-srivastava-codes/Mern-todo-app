function Login() {
  return (
    <div>
      <div className="bg-zinc-300 w-[100vw] h-[91vh] flex flex-col items-center justify-center gap-3">
        <div className="text-5xl italic px-2 py-4">
          Login to the world of TODO
        </div>
        <form action="" className="flex gap-3 flex-col justify-center">
          <div className="flex flex-col gap-2">
            <div className="text-xl">Enter your email id</div>
            <input
              type="text"
              className="bg-white text-black"
              placeholder="Enter your email id"
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-xl">Password</div>
            <input
              type="password"
              placeholder="Enter your password"
              className="bg-white text-black"
            />
          </div>
          <div className="flex flex-col gap-2 relative">
            <button className="px-2 py-1 bg-blue-300  absolute hover:border-1 hover:border-dotted">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
