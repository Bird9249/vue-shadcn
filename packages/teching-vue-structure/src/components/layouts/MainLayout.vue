<script setup lang="ts">
import type { UserResponse } from '@/modules/authentication/types/login.type'
import { useAuthStore } from '@/stores/auth'
import { useAxiosStore } from '@/stores/axios'
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import HeaderLayout from './HeaderLayout.vue'
import SidebarLayout from './SidebarLayout.vue'

const { auth } = useAuthStore()
const { api } = useAxiosStore()

onMounted(async () => {
  const token = localStorage.getItem('token')

  const res = await api.get<UserResponse>('/auth', {
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined
    }
  })

  api.defaults.headers.common.Authorization = token ? `Bearer ${token}` : undefined

  auth.user = res.data
})
</script>

<template>
  <div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
    <SidebarLayout :permissions="auth.user" v-if="auth.user" />

    <div class="flex flex-col">
      <HeaderLayout :username="auth.user?.username" />

      <main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <RouterView />
      </main>
    </div>
  </div>
</template>
