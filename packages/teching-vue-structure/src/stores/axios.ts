import { useToast } from '@/components/ui/toast'
import axios, { AxiosError } from 'axios'
import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

export const useAxiosStore = defineStore('axios', () => {
  const { toast } = useToast()
  const { push } = useRouter()

  const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL
  })

  instance.interceptors.response.use(
    (res) => {
      return res
    },
    (err: AxiosError) => {
      if (err.response?.status === 400)
        toast({ title: err.response!.data as string, variant: 'destructive', duration: 3000 })

      if (err.response?.status === 401) push({ name: 'login' })

      toast({ title: err.response!.data as string, variant: 'destructive', duration: 3000 })

      return Promise.reject(err)
    }
  )

  const api = computed(() => instance)

  return { api }
})
