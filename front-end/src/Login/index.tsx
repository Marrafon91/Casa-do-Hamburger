import { useState } from "react";
import Input from "../components/Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(email);
    console.log(password);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-screen items-center justify-center bg-[#161410]"
    >
      <div className="flex flex-col items-center justify-center gap-2 bg-black">
        <img src="./logo.png" alt="" className="mt-2 mb-4 h-25 w-25" />
        <Input
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="text-white">{email}</p>
        <button className="w-full cursor-pointer rounded-md bg-[#C92A0E] py-2 text-sm font-bold text-white">
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
