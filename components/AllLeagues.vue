<template>
    <Grid
      ref="grid"
      :style="{ height: '320px' }"
      :data-items="allUsers"
      :columns="[
        { field: 'username', title: 'Player' },
        { field: 'champion', title: 'Champion' },
        { field: 'goalscorer', title: 'Top GoalScorer' },
        { title: 'User Page', cell: 'myTemplate', filterable: false, width: '220px' } 
      ]"
    >
    <template v-slot:myTemplate="{props}">
            <td class="k-command-cell">
              <KButton
                  :style="{ width: '100px'}"
                  :type="'button'"
                  :theme-color="'primary'"
                  >
                  <NuxtLink
                    :to="`/hi/${props.dataItem.username}`"
                  >
                  {{props.dataItem.username}}
                  </NuxtLink>
              </KButton>
          </td>
        </template>
    </Grid>
    pageviews: {{pageviews}}
  </template>
  <script setup lang="ts">
import { Button as KButton} from '@progress/kendo-vue-buttons'
  import { Grid } from '@progress/kendo-vue-grid';
  const pageviews = useState('pageviews');
  const supabase = useSupabaseClient()
const allUsers = await supabase
    .from('profiles').select(`username, champion, goalscorer`);

  //const { data } = await useFetch('/api/users')
  </script>

   