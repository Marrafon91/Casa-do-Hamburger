import type { LoginDTO, UserDTO } from "../models/users";
import { api } from "../utils/api";

export function insertUser(body: LoginDTO) {
  return api.post<UserDTO>("/login", body);
}
