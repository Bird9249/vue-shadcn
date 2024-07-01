<script setup lang="ts">
import { PermissionGroup } from '@/enum/permission.enum'
import checkPermissionGroup from '@/lib/check-permission-group'
import type { UserResponse } from '@/modules/authentication/types/login.type'
import { Home, Package, Users } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

const props = defineProps<{
  permissions: UserResponse
}>()
</script>

<template>
  <div class="hidden border-r bg-muted/40 md:block">
    <div class="flex h-full max-h-screen flex-col gap-2">
      <div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <RouterLink to="/" class="flex items-center gap-2 font-semibold">
          <span class="">Hello</span>
        </RouterLink>
      </div>
      <div class="flex-1">
        <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
          <RouterLink
            to="/"
            class="flex items-center gap-3 rounded-lg px-3 py-2 transition-all text-muted-foreground hover:text-primary"
            active-class="bg-muted text-primary hover:text-primary"
          >
            <Home class="h-4 w-4" />
            Dashboard
          </RouterLink>
          <RouterLink
            v-if="
              checkPermissionGroup(PermissionGroup.user as unknown as string, props.permissions)
            "
            to="/user"
            class="flex items-center gap-3 rounded-lg px-3 py-2 transition-all text-muted-foreground hover:text-primary"
            active-class="bg-muted text-primary hover:text-primary"
          >
            <Users class="h-4 w-4" />
            Users
          </RouterLink>
          <RouterLink
            v-if="
              checkPermissionGroup(PermissionGroup.product as unknown as string, props.permissions)
            "
            to="/product"
            class="flex items-center gap-3 rounded-lg px-3 py-2 transition-all text-muted-foreground hover:text-primary"
            active-class="bg-muted text-primary hover:text-primary"
          >
            <Package class="h-4 w-4" />
            Products
          </RouterLink>
        </nav>
      </div>
    </div>
  </div>
</template>
