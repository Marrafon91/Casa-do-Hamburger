import type { LoginDTO, RegisterDTO, UserDTO } from "../models/users";
import { api } from "../utils/api";

export function insertUser(body: LoginDTO) {
  return api.post<UserDTO>("/login", body);
}

export function registerUser(body: RegisterDTO) {
  return api.post<UserDTO>("/register", body);
}
