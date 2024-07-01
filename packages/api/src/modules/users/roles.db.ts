import { IPermission, permissions } from "./permission.db";

export interface IRole {
  id: number;
  name: string;
  isDefault: boolean;
  permissions?: IPermission[];
  userId: number;
}

export const roles: IRole[] = [
  {
    id: 1,
    name: "user management",
    isDefault: false,
    permissions: permissions.filter((per) => per.roleId === 1),
    userId: 1,
  },
  {
    id: 2,
    name: "product management",
    isDefault: false,
    permissions: permissions.filter((per) => per.roleId === 2),
    userId: 2,
  },
  {
    id: 3,
    name: "admin",
    isDefault: true,
    userId: 3,
  },
];
