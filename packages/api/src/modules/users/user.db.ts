export interface IUser {
  id: number;
  username: string;
  password: string;
}

export const users: IUser[] = [{ id: 1, username: "test", password: "1234" }];
