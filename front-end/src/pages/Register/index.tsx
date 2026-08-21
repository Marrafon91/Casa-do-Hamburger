import { useState } from "react";
import Input from "../../components/Input";
import { Link } from "react-router";
import Button from "../../components/Button";
import type { RegisterDTO } from "../../types/users";
import { registerUser } from "../../services/login";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState<RegisterDTO>({
    name: "",
    email: "",
    password: "",
    confirmePassword: "",
    cep: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmePassword ||
      !formData.cep
    ) {
      setError("Todas as informações são obrigatórias");
      return;
    }

    if (formData.password !== formData.confirmePassword) {
      setError("As senhas não são iguais");
      return;
    }

    try {
      await registerUser(formData);

      setFormData({
        name: "",
        email: "",
        password: "",
        confirmePassword: "",
        cep: "",
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        switch (error.response?.status) {
          case 400:
            setError("Todas as informações são obrigatórias");
            break;

          case 409:
            setError("E-mail já cadastrado");
            break;

          case 500:
            setError("Erro no servidor. Tente novamente mais tarde!");
            break;

          default:
            setError("Ocorreu um erro ao criar a conta");
        }
      } else {
        setError("Ocorreu um erro inesperado");
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

        <Input
          name="name"
          placeholder="Nome"
          autoComplete="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />

        <Input
          name="email"
          placeholder="Email"
          autoComplete="username"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />

        <Input
          name="password"
          placeholder="Senha"
          autoComplete="new-password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />

        <Input
          name="confirmePassword"
          placeholder="Confirme sua Senha"
          type="password"
          autoComplete="new-password"
          value={formData.confirmePassword}
          onChange={handleChange}
        />

        <Input
          name="cep"
          placeholder="CEP"
          type="text"
          autoComplete="postal-code"
          value={formData.cep}
          onChange={handleChange}
        />
        <p className="font-bold text-red-500"> {error}</p>
        <div className="mt-3 flex w-full flex-col gap-2">
          <Button title="Criar conta" type="submit" />

          <Link to="/login" className="w-full">
            <Button title="Já tenho uma conta" variant="outline" />
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Register;
