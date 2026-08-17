import { useState } from "react";
import { Link } from "react-router";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { insertUser } from "../../services/login";
import type { UserDTO } from "../../models/users";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<UserDTO | null>(null);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await insertUser({
        email,
        password,
      });

      console.log("DATA:", response.data);

      setUser(response.data);
    } catch (error) {
      console.error("Email e senha são Obrigatorios:", error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-screen items-center justify-center bg-[#161410]"
    >
      <div className="flex flex-col justify-center gap-2 bg-[#161410]">
        <Link to="/">
          <img src="./logo.png" alt="Logo" className="mt-2 mb-4 h-25 w-25" />
        </Link>

        <Input
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <p className="text-left font-bold text-red-500 text-sm">
          Usuário não encontrado
        </p>

        <Button title="Login" variant="default" type="submit" />

        <Link to="/register" className="w-full">
          <Button title="Não tenho uma conta" variant="outline" />
        </Link>

        {user && <p className="text-white">Bem-vindo, {user.name}</p>}
      </div>
    </form>
  );
};

export default Login;
