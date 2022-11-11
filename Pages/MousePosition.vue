<template>
    <div>Mouse position is at: {{ x }}, {{ y }}</div>
</template>
<script setup lang="ts">
const x = ref(0);
const y = ref(0);

function update(event: MouseEvent) {
x.value = event.pageX;
y.value = event.pageY;
}

onMounted(() => window.addEventListener('mousemove', update));
onUnmounted(() => window.removeEventListener('mousemove', update));
</script>
  