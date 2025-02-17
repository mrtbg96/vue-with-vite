import { ref, watch } from 'vue'

export function useStorage(key) {
  let storedValue = read()

  let value = ref(storedValue)

  watch(value, write)

  function read() {
    return JSON.parse(localStorage.getItem(key))
  }

  function write() {
    if (['', null].includes(value.value)) {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, JSON.stringify(value.value))
    }
  }

  return value
}
