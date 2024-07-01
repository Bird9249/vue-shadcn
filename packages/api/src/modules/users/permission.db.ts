import {
  Permission,
  PermissionGroup,
} from "../../common/enums/permission.enum";

export interface IPermission {
  id: number;
  name: string;
  group: string;
  roleId: number;
}

export const permissions: IPermission[] = [];

const permissionGroup = Object.values(PermissionGroup).filter(
  (pg) => typeof pg === "string"
);
const permissionName = Object.values(Permission).filter(
  (p) => typeof p === "string"
);

permissionName.forEach((p) => {
  permissionGroup.forEach((pg, index) => {
    permissions.push({
      id: new Date().getTime(),
      group: pg,
      name: pg + ":" + p,
      roleId: index + 1,
    });
  });
});
