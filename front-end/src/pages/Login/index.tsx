import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { insertUser } from "../../services/login";
import type { LoginDTO } from "../../types/users";
import axios from "axios";
import { UserContext } from "../../context/UserContext";

const Login = () => {
  const [formData, setFormData] = useState<LoginDTO>({
    email: "",
    password: "",
  });

  const { user, setUser } = useContext(UserContext);

  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await insertUser(formData);

      setUser(response.data);
      setError(null);

      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        switch (error.response?.status) {
          case 404:
            setError("Usuário não encontrado");
            break;

          case 400:
            setError("Usuário e senha são obrigatórios");
            break;

          case 401:
            setError("E-mail ou senha inválidos");
            break;

          default:
            setError("Erro ao realizar login");
            break;
        }
      } else {
        setError("Erro inesperado ao realizar login");
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
            name="email"
            type="email"
            placeholder="E-mail"
            autoComplete="username"
            value={formData.email}
            onChange={handleChange}
          />

          <Input
            name="password"
            type="password"
            placeholder="Senha"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
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
