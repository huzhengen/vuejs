<template>
	<el-form :model="ruleForm2" :label-position="labelPosition" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
	  <el-form-item label="用户名" prop="name">
	    <el-input type="text" v-model="ruleForm2.name" auto-complete="off"></el-input>
	  </el-form-item>
	  <el-form-item label="密码" prop="pass">
	    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
	  </el-form-item>
	  <el-form-item>
	    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
	  </el-form-item>
	</el-form>
</template>

<script>
  export default {
    data() {
      // var validatePass = (rule, value, callback) => {
      //   if (value === '') {
      //     callback(new Error('请输入密码'));
      //   }
      // };
      return {
      	labelPosition: 'top',
        ruleForm2: {
          name: '',
          pass: '',
        },
        rules2: {
          name: [
            { required: true, message: '请填写用户名', trigger: 'blur' }
          ],
          pass: [
            { required: true, message: '请填写密码', trigger: 'blur' }
          ]            
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('正在登陆......');
            console.log('开始登陆，写入数据库数据')
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>

<style>
	
</style>