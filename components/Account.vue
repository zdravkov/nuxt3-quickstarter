<template>
    <KForm
        :initialValues="formUser"
        @submit="updateProfile">
        <FormContent />
    </KForm>
    <Loader v-if="loading" :size="'small'" :type="'pulsing'" />
</template>

<script setup>
import { Loader } from "@progress/kendo-vue-indicators";
    import { Form as KForm } from "@progress/kendo-vue-form";
    import FormContent from './FormContent.vue';
    const supabase = useSupabaseClient()
    
    const loading = ref(true)
    const username = ref('')
    const champion = ref('')
    const goalscorer = ref('')
    
    loading.value = true
    const user = useSupabaseUser();
    let { data } = await supabase
        .from('profiles')
        .select(`username, champion, goalscorer`)
        .eq('id', user.value.id)
        .single()
    if (data) {
        username.value = data.username
        champion.value = data.champion
        goalscorer.value = data.goalscorer
    }
    const formUser = computed(()=>{
        return {
            username: username.value,
            champion: champion.value,
            goalscorer: goalscorer.value,
        }
    })
    loading.value = false
    
    async function updateProfile(dataItem) {
        try {
            loading.value = true
            const user = useSupabaseUser();

            const updates = {
                id: user.value.id,
                updated_at: new Date(),
                ...dataItem
            }
            let { error } = await supabase.from('profiles').upsert(updates, {
                returning: 'minimal', // Don't return the value after inserting
            })
            if (error) throw error
        } catch (error) {
            alert(error.message)
        } finally {
            loading.value = false
        }
    }

    </script>
    
    