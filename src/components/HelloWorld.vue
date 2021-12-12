<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="inCrement"> count is: </button>
    <p>{{ count }}</p>

    <button @click="inCrementTest"> count is: </button>
    <p>{{ countTest }}</p>
  </div>
</template>

<script>
  import { defineComponent, computed } from 'vue'
  import { useStore } from '@src/store'

  export default defineComponent({
    name: 'HelloWorld',
    props: {
      msg: {
        type: String,
        default: ''
      }
    },
    setup() {
      const store = useStore()

      const count = computed(() => store.state.commonModule.count)

      const countTest = computed(() => store.state.testModule.test)

      return {
        count,
        countTest,
        inCrement: () => store.commit('commonModule/increment'),
        inCrementTest: () => store.commit('testModule/incrementTest')
      }
    }
  })
</script>

<style lang="scss">
  .hello {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
