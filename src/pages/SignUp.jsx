/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">SignUp</h1>
      <form className="flex flex-col gap-4">
        <input
          type={"text"}
          placeholder={"Username"}
          id={"username"}
          className="border p-3 rounded-lg"
        />
        <input
          type={"email"}
          placeholder={"email"}
          id={"email"}
          className="border p-3 rounded-lg"
        />
        <input
          type={"password"}
          placeholder={"your password here..."}
          id={"password"}
          className="border p-3 rounded "
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80">
          SignUp
        </button>
      </form>

      <div className="flex p-3 gap-2">{/* mt-5 was to be used but i liked p-3 better */}
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-sky-400">SignIn </span>
        </Link>
      </div>
    </div>
  );
}
