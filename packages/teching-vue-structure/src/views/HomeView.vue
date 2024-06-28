<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/stores/auth'
import { useAxiosStore } from '@/stores/axios'
import { onMounted } from 'vue'

const { auth } = useAuthStore()
const { api } = useAxiosStore()

onMounted(async () => {
  const token = localStorage.getItem('token')

  const res = await api.get<{ id: number; username: string }>('/auth', {
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined
    }
  })

  api.defaults.headers.common.Authorization = token ? `Bearer ${token}` : undefined

  auth.user = { id: res.data.id, username: res.data.username }
})
</script>

<template>
  <main class="min-w-[100vw] min-h-[100vh] flex flex-col justify-center items-center">
    <div class="">
      {{ auth.user?.username }}
    </div>
    <Button>Hi</Button>
  </main>
</template>
