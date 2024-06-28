import { InferOutput, minLength, object, pipe, string } from "valibot";

export const LoginDto = object({
  username: pipe(string(), minLength(0)),
  password: pipe(string(), minLength(4)),
});

export type LoginDtoType = InferOutput<typeof LoginDto>;
