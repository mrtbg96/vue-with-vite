<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { ref, onMounted } from 'vue'

let message = ref('')

onMounted(() => alert('Hello, world!'))

setTimeout(() => {
  message.value = 'Lorem ipsum dolar sit amet consectetur.'
}, 5000)
</script>

<template>
  <main>
    <h1>{{ message }}</h1>

    <TheWelcome />
  </main>
</template>
