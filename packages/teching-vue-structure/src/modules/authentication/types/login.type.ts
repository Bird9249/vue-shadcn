export interface LoginResponse {
  user: UserResponse
  token: string
  message: string
}

export interface UserResponse {
  id: number
  username: string
  permissions: string[]
  roles: {
    name: 'product management'
    isDefault: false
  }[]
}
