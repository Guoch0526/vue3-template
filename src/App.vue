<template>
  <router-view />
</template>

<script lang="ts">
  import { defineComponent, onMounted } from 'vue'

  export default defineComponent({
    name: 'App',
    components: {},

    setup() {
      onMounted(() => {
        console.log('App onMounted')
      })
    }
  })
</script>

<style lang="scss">
  @import '@src/assets/style/index.scss';
</style>
