<script setup>
import { useStorage } from '../composables/useStorage'

let food = useStorage('food')
let drink = useStorage('drink')
</script>

<template>
  <main>
    <div>
      <p>What is your favorite food?</p>
    </div>
    <div>
      <input type="text" id="food" v-model="food" />
    </div>

    <div>
      <p>What is your favorite drink?</p>
    </div>
    <div>
      <input type="text" id="drink" v-model="drink" />
    </div>
  </main>
</template>
