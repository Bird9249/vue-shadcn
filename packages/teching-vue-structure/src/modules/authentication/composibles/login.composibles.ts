import { useToast } from '@/components/ui/toast'
import { useAuthStore } from '@/stores/auth'
import { useAxiosStore } from '@/stores/axios'
import { toTypedSchema } from '@vee-validate/valibot'
import { useForm } from 'vee-validate'
import { useRouter } from 'vue-router'
import { LoginSchema } from '../schemas/login.schema'
import type { LoginResponse } from '../types/login.type'

export function useLogin() {
  const { api } = useAxiosStore()
  const { toast } = useToast()
  const { push } = useRouter()
  const { auth } = useAuthStore()

  const { handleSubmit, isSubmitting } = useForm({
    validationSchema: toTypedSchema(LoginSchema)
  })

  const login = handleSubmit(async (values) => {
    const res = await api.post<LoginResponse>('/auth', values)

    localStorage.setItem('token', res.data.token)
    auth.user = res.data.user

    api.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`

    push({ name: 'dashboard' })

    toast({
      title: res.data.message,
      duration: 3000
    })
  })

  return { login, isSubmitting }
}
