<script setup>
import { ref } from 'vue'
import TabbableTextarea from '../components/TabbableTextarea.vue'

let comment = ref('Default content')
</script>

<template>
  <main>
    <div>
      <p style="margin-bottom: 1rem; font-size: 1.25rem; color: greenyellow">
        Custom textarea that allows tabs
      </p>
    </div>
    <form>
      <TabbableTextarea
        v-model="comment"
        style="
          background-color: black;
          color: greenyellow;
          width: 100%;
          height: 480px;
          resize: none;
        "
      />
    </form>
  </main>
</template>
