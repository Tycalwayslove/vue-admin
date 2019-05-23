<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Activity name">
        <el-input v-model="form.name"/>
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-select v-model="form.region" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai"/>
          <el-option label="Zone two" value="beijing"/>
        </el-select>
      </el-form-item>
      <el-form-item label="Activity time">
        <el-col :span="11">
          <el-date-picker
            v-model="form.date1"
            type="date"
            placeholder="Pick a date"
            style="width: 100%;"
          />
        </el-col>
        <el-col :span="2" class="line">-</el-col>
        <el-col :span="11">
          <el-time-picker
            v-model="form.date2"
            type="fixed-time"
            placeholder="Pick a time"
            style="width: 100%;"
          />
        </el-col>
      </el-form-item>
      <el-form-item label="Instant delivery">
        <el-switch v-model="form.delivery"/>
      </el-form-item>
      <el-form-item label="Activity type">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="Online activities" name="type"/>
          <el-checkbox label="Promotion activities" name="type"/>
          <el-checkbox label="Offline activities" name="type"/>
          <el-checkbox label="Simple brand exposure" name="type"/>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Resources">
        <el-radio-group v-model="form.resource">
          <el-radio label="Sponsor"/>
          <el-radio label="Venue"/>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input v-model="form.desc" type="textarea"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>

    <!-- 弹出框 -->
    <!-- Form -->
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="formData" :rules="rules" ref="ruleForm">
        <el-form-item label="活动名称" :label-width="formLabelWidth" prop="name">
          <el-input v-model="formData.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号" :label-width="formLabelWidth" prop="phone">
          <el-input v-model="formData.phone" autocomplete="off" @keyup.native="proving1"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth" prop="region">
          <el-select v-model="formData.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleCancel('ruleForm')">取 消</el-button>
        <el-button type="primary" @click="handleComfirm('ruleForm')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      dialogFormVisible: false,
      formLabelWidth: "120px",
      formData: {
        name: undefined,
        phone: undefined,
        region: undefined
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在3到5个字符串之间", trigger: "blur" }
        ],
        phone: [
          { required: true, message: "请输入电话号码", trigger: "blur" }

          // {
          //   type: "integer",
          //   require: true,
          //   message: "请输入手机号,必须是整数",
          //   transform: value => +value
          // }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      // this.$message("submit!");
      this.dialogFormVisible = true;
    },
    onCancel() {
      this.$message({
        message: "cancel!",
        type: "warning"
      });
    },
    handleComfirm(formName) {
      this.$refs[formName].validate(valid => {
        console.log(valid);
        if (valid) {
          alert("sucess");
          this.dialogFormVisible = false;
        } else {
          console.log("error ,there is no sucess");
          return false;
        }
      });
    },
    handleCancel(formName) {
      this.$refs[formName].resetFields();
      this.dialogFormVisible = false;
    },
    proving1() {
      this.formData.phone = this.formData.phone.replace(/[^\.\d]/g, "");
      this.formData.phone = this.formData.phone.replace(".", "");
    }
  }
};
</script>

<style scoped>
.line {
  text-align: center;
}
</style>

