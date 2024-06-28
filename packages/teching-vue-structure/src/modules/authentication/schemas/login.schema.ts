import { minLength, object, pipe, string, type InferInput } from 'valibot'

export const LoginSchema = object({
  username: pipe(string(), minLength(0)),
  password: pipe(string(), minLength(4))
})

export type LoginSchemaType = InferInput<typeof LoginSchema>
