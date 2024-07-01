<script setup lang="ts">
import { CircleUser, Home, Menu, Package, Package2 } from 'lucide-vue-next'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useLogout } from '@/modules/authentication/composibles/logout.composible'
import type { UserResponse } from '@/modules/authentication/types/login.type'

const props = defineProps<{
  user?: UserResponse
}>()

const { logout } = useLogout()
</script>

<template>
  <header
    class="flex h-14 items-center justify-between md:justify-end gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6"
  >
    <Sheet>
      <SheetTrigger as-child>
        <Button variant="outline" size="icon" class="shrink-0 md:hidden">
          <Menu class="h-5 w-5" />
          <span class="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" class="flex flex-col">
        <nav class="grid gap-2 text-lg font-medium">
          <a href="#" class="flex items-center gap-2 text-lg font-semibold">
            <Package2 class="h-6 w-6" />
            <span class="sr-only">Acme Inc</span>
          </a>
          <a
            href="#"
            class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
          >
            <Home class="h-5 w-5" />
            Dashboard
          </a>

          <a
            href="#"
            class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
          >
            <Package class="h-5 w-5" />
            Products
          </a>
        </nav>
      </SheetContent>
    </Sheet>

    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button variant="secondary" size="icon" class="rounded-full">
          <CircleUser class="h-5 w-5" />
          <span class="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{{ props.user?.username }}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          class="cursor-pointer"
          @click="
            () => {
              logout()
            }
          "
          >Logout</DropdownMenuItem
        >
      </DropdownMenuContent>
    </DropdownMenu>
  </header>
</template>
