<template>
  <div class="app-container">
    <el-row :span="24" class="base-header">
      <el-row :span="24" class="header-title">筛选器</el-row>
      <el-row :span="24">
        <el-col :span="20">
          <el-select v-model="value1" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>

          <el-select v-model="value2" filterable placeholder="请选择">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="FilterData">查找</el-button>
        </el-col>
      </el-row>
    </el-row>
    <el-row :span="24" class="base-contaienr">
      <el-row :span="24" class="container-table">
        <el-row :span="24" class="base-header">
          <el-row :span="24" class="header-title">表格内容</el-row>
          <el-row :span="24">
            <el-col :span="24">
              <!-- 表格 -->
              <el-table :data="list" border style="width: 100%">
                <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
                <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                <el-table-column prop="age" label="年龄" width="120"></el-table-column>
                <el-table-column prop="province" label="省份" width="120"></el-table-column>
                <el-table-column prop="city" label="市区" width="120"></el-table-column>
                <el-table-column prop="address" label="地址" width="300"></el-table-column>
                <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
                <el-table-column prop="status" label="姓名" width="120"></el-table-column>
                <el-table-column fixed="right" label="操作" width="100">
                  <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-col>
          </el-row>
        </el-row>
      </el-row>
      <el-row :span="24" class="container-pagination">
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      </el-row>
    </el-row>
  </div>
</template>
<script>
import { getDemoList } from "@/api/democrud";
export default {
  name: "democrud",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      options2: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value1: "", //option1 select值
      value2: "", //option2 select值

      list: [],
      total: null,
      listLoading: true
    };
  },
  methods: {
    // 筛选按钮
    FilterData() {
      this.$message({
        showClose: true,
        message: "开始筛选",
        type: "success"
      });
    },
    fetchDemoData() {
      getDemoList().then(response => {
        console.log(response);
        this.list = response.data.items;
        this.listLoading = false;
      });
    }
  },
  mounted() {
    this.fetchDemoData();
  }
};
</script>

<style lang="scss" scoped>
.header-title {
  font-size: 20px;
  font-weight: 700;
  line-height: 40px;
}
.container-pagination {
  margin-top: 40px;
  text-align: right;
}
</style>
