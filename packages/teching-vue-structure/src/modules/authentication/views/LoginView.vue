<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Loader2 } from 'lucide-vue-next'
import { useLogin } from '../composibles/login.composibles'

const { login, isSubmitting } = useLogin()
</script>

<template>
  <div class="min-w-[100vw] min-h-[100vh] flex justify-center items-center">
    <Card class="w-[350px]">
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
      </CardHeader>
      <CardContent>
        <form @submit="login">
          <div class="grid gap-y-4">
            <FormField v-slot="{ componentField }" name="username">
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="enter username" v-bind="componentField" />
                </FormControl>

                <FormMessage />
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="password">
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="enter password" v-bind="componentField" />
                </FormControl>

                <FormMessage />
              </FormItem>
            </FormField>

            <Button :disabled="isSubmitting" type="submit">
              <span v-if="!isSubmitting"> Sign in </span>
              <span v-else class="flex items-center">
                <Loader2 class="w-4 h-4 mr-2 animate-spin" />
                Please wait
              </span>
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  </div>
</template>
