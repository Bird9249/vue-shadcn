import { IRole, roles } from "./roles.db";

export interface IUser {
  id: number;
  username: string;
  password: string;
  roles: IRole[];
}

export const users: IUser[] = [
  {
    id: 1,
    username: "user",
    password: "1234",
    roles: roles.filter((val) => val.userId === 1),
  },
  {
    id: 2,
    username: "product",
    password: "1234",
    roles: roles.filter((val) => val.userId === 2),
  },
  {
    id: 3,
    username: "admin",
    password: "1234",
    roles: roles.filter((val) => val.userId === 3),
  },
];
