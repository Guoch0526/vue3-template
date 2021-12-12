<template>
  <div class="hello">
    <HelloWorld :msg="msg" />
  </div>
</template>

<script lang="ts">
  import HelloWorld from '@src/components/HelloWorld.vue'
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'About',
    data() {
      return {
        msg: 'HelloWorld!'
      }
    },
    components: {
      HelloWorld
    },
    setup() {}
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
