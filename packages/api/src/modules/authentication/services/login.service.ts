import { users } from "../../users/user.db";
import { LoginDtoType } from "../dtos/login.dto";

export const loginService = (input: LoginDtoType) => {
  return users.find(
    ({ username, password }) =>
      input.username === username && input.password === password
  );
};
