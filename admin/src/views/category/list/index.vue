<template>
  <el-data-table :url="url" :columns="columns" :form="form" ref="dataTable" />
</template>

<script>
export default {
  data() {
    return {
      url: "/admin/api/categorise",
      columns: [
        {
          prop: "name",
          label: "名称",
          formatter: (row, column, cellValue, index) => {
            // return row.status ? '启用' : '弃用'
          }
        }
      ],
      form: [
        {
          type: "input",
          id: "name",
          label: "名称",
          el: {
            placeholder: "请输入"
          }
        }
      ]
    };
  }
};
</script>

<style></style>
