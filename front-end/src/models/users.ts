export type LoginDTO = {
  email: string;
  password: string;
};

export type RegisterDTO = {
  name: string;
  email: string;
  password: string;
  confirmePassword: string;
  cep: string;
};

export type UserDTO = {
  id: string;
  name: string;
  password: string;
  email: string;
  cep: string;
};
