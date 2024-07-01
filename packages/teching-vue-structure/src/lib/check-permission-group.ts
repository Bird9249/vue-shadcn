import type { UserResponse } from '@/modules/authentication/types/login.type'

export default (group: string, authPer: UserResponse) => {
  if (authPer.roles.some((val) => val.isDefault)) return true

  return authPer.permissions.every((permission) => permission.startsWith(group))
}
