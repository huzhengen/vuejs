<template>
	<el-form :model="ruleForm2" :label-position="labelPosition" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
	  <el-form-item label="用户名" prop="name">
	    <el-input type="text" v-model="ruleForm2.name" auto-complete="off"></el-input>
	  </el-form-item>
	  <el-form-item label="密码" prop="pass">
	    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
	  </el-form-item>
	  <el-form-item label="确认密码" prop="checkPass">
	    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
	  </el-form-item>
	  <el-form-item>
	    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
	    <el-button @click="resetForm('ruleForm2')">重置</el-button>
	  </el-form-item>
	</el-form>
</template>

<script>
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
      	labelPosition: 'top',
        ruleForm2: {
          name: '',
          pass: '',
          checkPass: '',
        },
        rules2: {
        	name: [
        		{required: true, min: 7, message: '用户名长度最短7', trigger: 'blur'}
        	],
          pass: [
            { required: true, validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { required: true, validator: validatePass2, trigger: 'blur' }
          ]        
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style>
	
</style>