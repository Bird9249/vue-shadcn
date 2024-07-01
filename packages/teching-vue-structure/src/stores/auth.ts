import type { UserResponse } from '@/modules/authentication/types/login.type'
import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const auth = reactive<{
    user: UserResponse | undefined
  }>({ user: undefined })

  return { auth }
})
