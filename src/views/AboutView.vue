<script lang="ts" setup>
import { useCounterStore } from '@/stores'

const { count, doubleCount } = storeToRefs(useCounterStore())
const countStore = useCounterStore()

</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      pinia store:
      <h3>count: {{count}}</h3>
      <h3>doubleCount: {{doubleCount}}</h3>
      <button class="btn" @click="countStore.increment">add</button>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

.btn {
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  background-color: #55ba83;
  border-radius: 10px;
  outline: none;
}
</style>
