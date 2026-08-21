export interface LoginDTO {
  email: string;
  password: string;
}

export interface RegisterDTO {
  name: string;
  email: string;
  password: string;
  confirmePassword: string;
  cep: string;
}

export interface UserDTO {
  id: string;
  name: string;
  email: string;
  cep: string;
}

export type UserContextType = {
  user: UserDTO | null;
  setUser: React.Dispatch<React.SetStateAction<UserDTO | null>>;
};
