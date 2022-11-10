<template>
    <form  @submit.prevent="handleLogin">
        <div>
            <h1 class="header">Supabase + Vue 3</h1>
            <p class="description">Sign in via magic link with your email below</p>
            <div>
                <KInput v-model="email" />
            </div>
            <div>
                <KButton type="submit" 
                    :theme-color="'primary'"
                    :disabled="loading" >
                {{'Send magic link'}}
                </KButton>
            </div>
        </div>
    </form>
</template>

<script setup>
import { Input as KInput } from '@progress/kendo-vue-inputs';
import { Button as KButton } from '@progress/kendo-vue-buttons';
const supabase = useSupabaseClient()

const loading = ref(false)
const email = ref("")
const handleLogin = async () => {
    try {
        loading.value = true
        const { error } = await supabase.auth.signIn({ email: email.value })
        if (error) throw error
        alert("Check your email for the login link!")
    } catch (error) {
        alert(error.error_description || error.message)
    } finally {
        loading.value = false
    }
}
</script>
