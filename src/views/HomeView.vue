<script setup>
import { useFlash } from '@/composables/useFlash'

let { flash } = useFlash()
</script>

<template>
  <main>
    <div>
      <button @click="flash('Information', 'Home', 'info')">Learn the page</button>
    </div>
  </main>
</template>
