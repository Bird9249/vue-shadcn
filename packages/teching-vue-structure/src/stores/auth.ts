import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const auth = reactive<{ user: { id: number; username: string } | undefined }>({ user: undefined })

  return { auth }
})
