import { useState } from "react";
import { Link } from "react-router";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { insertUser } from "../../services/login";
import type { UserDTO } from "../../models/users";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<UserDTO | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      if (!email || !password) {
        setError("E-mail e senha são obrigatorios");
        return;
      }

      const response = await insertUser({
        email,
        password,
      });

      setUser(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          setError("Usuário não encontrado");
        } else if (error.response?.status === 400) {
          setError("Usuário e senha são obrigatórios");
        } else if (error.response?.status === 401) {
          setError("Email ou senha inválidos");
        } else {
          setError("Erro ao realizar login");
        }
      }
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-screen items-center justify-center bg-[#161410]"
    >
      <div className="flex flex-col justify-center gap-2 bg-[#161410]">
        <Link to="/">
          <img
            src="./logo.png"
            alt="Logo"
            className="mx-auto mt-2 mb-4 h-25 w-25"
          />
        </Link>
        <div className="mb-3 flex flex-col gap-2">
          <Input
            type="email"
            placeholder="E-mail"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Senha"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <p className="text-left text-sm font-bold text-red-500">{error}</p>

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
