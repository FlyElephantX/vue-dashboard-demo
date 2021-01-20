<template>
  <div>
    <el-table
        :data="tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
        style="width: 100%">
      <el-table-column
          prop="index"
          label="序号"
          width="180">
      </el-table-column>
      <el-table-column
          prop="name"
          label="姓名"
          width="180">
      </el-table-column>
      <el-table-column
          prop="address"
          label="地址">
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5, 10, 20, 40]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next"
          :total="tableData.length"
          prev-text="上一页"
          next-text="下一页">
      </el-pagination>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PersonInfoList',
  data() {
    return {
      currentPage: 1,
      pageSize: 5,
      tableData: []
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    handleSizeChange(size) {
      this.pageSize = size
    },
    handleCurrentChange(page) {
      this.currentPage = page
    },
    getData() {
      this.$axios.get("http://127.0.0.1:7025/home/person/list").then((response) => {
        console.log("返回数据:" + JSON.stringify(response.data));
        let list = JSON.parse(JSON.stringify(response.data));
        this.tableData.push(...list);
        console.log("table:" + this.tableData);
      })
      // for (let i = 0; i < 100; i++) {
      //   let obj = {
      //     index: (i + 1),
      //     name: 'Elephant',
      //     address: '北京市 海淀区'
      //   };
      //   this.tableData.push(obj);
      // }
    }
  }
}
</script>

<style scoped>

</style>