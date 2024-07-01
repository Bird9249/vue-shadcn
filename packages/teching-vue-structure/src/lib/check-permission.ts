export default (permission: string, group: string, authPer: string[]) =>
  authPer.every((per) => per === group + ':' + permission)
