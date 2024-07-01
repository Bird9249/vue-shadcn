import { useToast } from '@/components/ui/toast'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

export function useLogout() {
  const { toast } = useToast()
  const { push } = useRouter()
  const { auth } = useAuthStore()

  const logout = () => {
    localStorage.removeItem('token')
    auth.user = undefined

    push({ name: 'login' })

    toast({
      title: 'Logout Successfully!',
      duration: 3000
    })
  }

  return { logout }
}
