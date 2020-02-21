<template>
  <div class="input-wrapper">
    <!-- <h1>这里是输入框组件的 h1</h1> -->
    <!-- 每当我们的这个 input 框接收到输入
    都要进行一次判断, 看看合不合法
    可以绑定 input 事件 -->

      <!-- 这里 input 是一个输入框
      我希望如果输入发生错误的时候它的样式被改变
      方法是动态 v-bind 绑定一个 class 进来 -->

      <!-- 为什么绑定 input 事件
      不是绑定 change / blur 事件
      是因为每次输入我们希望能够马上改变下划线样式, 不是等到失去焦点再判断 -->


      <!-- 以前我们的写法是绑定一个变量, 直接以字符串变量作为 class
      <input type="text" :class="isValid">
      这样子只会绑定一个字符串 true / false
      如果想根据布尔值动态添加 class 可以使用 对象的形式声明 -->
      <!-- 这个对象里面是 key : value 键值对
      其中 key 是准备添加的 class 
      value 是用来判断是否应该添加的布尔值 -->
      <!-- 现在我们希望 isValid 为 false, 自动添加 err class -->
      <!-- 假设我希望, 如果 isValid 为 true 则添加 success 的 class  -->
      <!-- 现在input 已经可以根据 isValid 动态改变 class 接下来只需要 给 err
      class 添加特定的 样式即可 -->
      <input
        :class="{
          err: !isValid,
          success: isValid
        }"
        :type="type" 
        :placeholder="placeholder"
        @input="checkValue"
        @blur="showAlert"
      >
      <!-- 监控失去焦点事件
      如果失去焦点(输入完毕)
      这个 input 的数据还是不合法
      需要弹窗提醒 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isValid: false
    }
  },
  props:['type','placeholder','rule','errMsg'],
  methods:{
    checkValue(event){
      const regExp = new RegExp(this.rule)
      this.isValid = regExp.test(event.target.value);
      this.$emit('valueChange',event.target.value)
    },
    showAlert(){
      //失去焦点触发函数
      //如果this.isValid已经是false
      //证明不合法，需要弹窗
      //合法就无弹窗
      if (!this.isValid){
        alert(this.errMsg)
      }
    }
  }
 
}
</script>

<style lang="less" scoped>
  // h1 {
  //   color: green;
  // }
  .input-wrapper {
    padding: 5.556vw;
    padding-top: 0;
    input {
      width: 100%;
      height: 10.556vw;
      box-sizing: border-box;
      background: #fff;
      border: none;
      /* 因为 vw 都是经过换算, 太小的数字容易被忽略,
      有一些浏览器会显示不出来
      一般小于 10px 的情况下,我们都会直接写像素 */
      border-bottom: 1px solid #666;
      outline: none;
    }
    .err {
      border-color: red;
    }
    .success {
      border-color: #666
    }
  }
  
</style>