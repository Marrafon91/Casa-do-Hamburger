import { useState } from "react";
import Input from "../../components/Input";
import { Link } from "react-router";
import Button from "../../components/Button";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmePassword, setConfirmPassword] = useState("");
  const [cep, setCep] = useState("");

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({ name, email, password, confirmePassword, cep });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-screen items-center justify-center bg-[#161410]"
    >
      <div className="flex flex-col items-center justify-center gap-2 bg-[#161410]">
        <Link to="/">
          <img src="./logo.png" alt="" className="mt-2 mb-4 h-25 w-25" />
        </Link>
        <Input
          placeholder="Nome"
          autoComplete="off"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Email"
          autoComplete="username"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          autoComplete="new-password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          placeholder="Confirme sua Senha"
          type="password"
          autoComplete="off"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Input
          placeholder="CEP"
          type="text"
          onChange={(e) => setCep(e.target.value)}
        />

        <Button title="Criar conta"/>
        <Link to="/login" className="w-full">
        <Button title="Já tenho uma conta" variant="outline" />
        </Link>
      </div>
    </form>
  );
};

export default Register;
