export interface LoginResponse {
  user: { id: number; username: string }
  token: string
  message: string
}
