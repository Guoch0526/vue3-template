<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button @click="handleLoadPageNodes">loadPageNodes</el-button>

    <el-table v-loading="loading" :data="tableData" border class="table">
      <el-table-column prop="fcode" label="日期"> </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
  import api from '@src/api'
  import { to } from '@src/utils'
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'Index',
    data() {
      return {
        msg: 'helloworld',
        tableData: [],
        loading: false
      }
    },
    setup() {},
    methods: {
      async handleLoadPageNodes() {
        this.loading = true
        let [err, pagesNodes] = await to(api.loadPageNodes('440100'))
        this.loading = false

        if (err) {
          console.log(err)
          return false
        }

        this.tableData = pagesNodes.data.children.map(
          (v: { fcode: string; name: string }) => ({
            fcode: v.fcode,
            name: v.name
          })
        )
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

  .table {
    margin: 20px auto;
    width: 500px;
  }
</style>
