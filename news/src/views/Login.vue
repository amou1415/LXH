<template>
  <div>
    <!-- 只要写页面即可
    就在这个单文件组件里面-->
    <div class="closeBtn">
      <span class="iconfont iconicon-test"></span>
    </div>
    <div class="logo">
      <span class="iconfont iconnew"></span>
    </div>

    <!-- <h1>这里是红色的标题</h1> -->

    <!-- 为什么以前这里不能用大写?
        因为 html 只接受小写标签, 部分大小写
        但是现在 webpack 会帮我们自动处理这些问题
    所以可以用驼峰命名法帮助方便编程-->

    <!-- 输入框子组件接收的数据包括
        type 输入框的类型
        placeholder 是未输入前的提示
    rule 用来验证输入合法性的正则表达式(我们这里的传值, 传一个字符串进去,子组件在转换成正则对象)-->

    <!-- 如果还需要区别不同输入框弹出的错误提示不一样, 可以继续传值 -->
    <!-- 输入框每次的数据变动都会主动触发 valueChange 的自定义事件,
    父组件需要监听这个事件获取参数并进行处理-->
    <!-- 每个输入框的作用都不一样, 一个是用来传用户名的, 一个用来传密码的
    所以监听到不同输入框的时间, 绑定的函数也应该不一样-->
    <AuthInput
      type="text"
      placeholder="请输入用户名"
      rule="^.{3,10}$"
      errMsg="请输入正确的用户名"
      @valueChange="setUserName"
    ></AuthInput>
    <!-- 登录页如果要添加一个输入密码的输入框怎么办
        不需要在碰输入框组建了
    只需要这里传值即可-->
    <AuthInput
      type="password"
      placeholder="请输入密码"
      rule="^.{6}$"
      errMsg="请输入正确密码"
      @valueChange="setPassword"
    ></AuthInput>

    <!-- 子组件发送被监听的事件
        跟原生事件是不一样的,即使同名
        也不是同一个事件
    所以尽量起一个独特好辨认的名字-->
    <AuthBtn btnText="登录" @clickBtn="login"></AuthBtn>
  </div>
</template>

<script>
// var authInput = {
//     以前是直接写组件对象
// }
// 现在是引用单文件组件
// import authInput from '../components/authInput.vue'
// 可以使用 @ 符号直接代表 src 所在目录
// 1. 引入子组件
import AuthInput from "@/components/AuthInput.vue";
import AuthBtn from "@/components/AuthBtn.vue";

export default {
  data() {
    return {
      // 用来接收和暂存子组件发送过来的数据
      username: "",
      password: ""
    };
  },
  // 2.注册子组件, components
  components: {
    // key 是组件名
    // value 是组建对象
    // authInput: authInput
    AuthInput,
    // AuthBtn: AuthBtn 缩写
    AuthBtn
  },
  methods: {
    setPassword(password) {
      // 这里的 password 只是形参, 用来接受子组件事件传递过来的参数
      // console.log('父组件接收到了密码输入框的数据更新, 先存在自己的data 当中');
      this.password = password;
    },
    setUserName(username) {
      // console.log('父组件接收到了用户名输入框的数据更新, 先存在自己的data 当中');
      this.username = username;
    },
    login() {
      if (!this.username || this.password) {
        this.$toast("请输入完整信息");
      }
      // this.$axios({
      //axios是基于promise机制的一个请求库
      //现在先熟悉promise的应用
      //promise最大的特点是回调函数直接跟在前一个函数后面，使用.then进行拼接
      //这叫链式调用
      //这里执行登陆
      //     url:'http://liangwei.tech:3000/post',
      //     // method是指请求类型
      //     method:'get'
      // }).then(
      //     // function(res){
      //     //     console.log(res);
      //     // }
      //     res => {
      //         // res.data就是服务器返回的数据，接下来只需要根据数据结构进行渲染即可，数据结果已经是json格式
      //         console.log(res.data);
      //     }
      // )

      //post方式
      this.$axios({
        url: "http://liangwei.tech:3000/login",
        method: "post",
        data: {
          username: "10010",
          password: "123"
        }
      }).then(res => {
        console.log(res.data);
        const { statusCode, message } = res.data;
        if (statusCode == 200 && message) {
          this.$toast.success(message);
        } else {
          this.$toast.success(message);
          const { data } = res.data;
          localStorage.setItem("token", data.token);
          localStorage.setItem("user_id", data.user.id);
        }
        //     this.$toast(res.data.message)
        // if (res.data.statusCode == 200 && res.data.message){
        //     this.$toast(res.data.message)
        // }
      });
      // .catch(err=>{
      //     console.dir(err);
      //     console.log(err.response);
      //     this.$toast.fail(err.response.data.message ||"系统错误")

      // })

      // console.log('父组件监听到子组件传递过来的时间,绑定的函数被触发了');
      // 每次我们的输入框子组件输入的数据都会存放在 data 当中
      // 所以这里如果要登录
      // 直接获取 this.username 和 this.password 即可
      // console.log('登录按钮被点击');
      // console.log('用户名是'+this.username);
      // console.log('密码是'+this.password);
      // 这里获取到的数据就可以用来发送请求了
      // this.$axios({
      //     url:"/post",
      //     method:"get",
      // }).then(res=>{
      //     console.log(res);

      // })
    }
  }
};
</script>

<style lang="less" scoped>
// 假设我再登录页写一个样式
// 因为是单页应用,所以会影响其他组件
// 这是很大的问题
// 解决办法非常简单
// 只需要在 style 标签添加属性 scoped
// 即可保证这里写的所有样式支队这个单文件组件生效
// h1 {
//     color: red;
// }

/* 这里默认只是写 css 的地方
如果要写 less
需要添加一个 lang 属性 */
.closeBtn {
  padding: 6.667vw;
  span {
    // fontsize: 27px;
    // 这里应该使用 vw 单位
    // 有了插件以后只需要 alt + z
    // 就可以转换为 vw 单位
    font-size: 7.5vw;
  }
}
.logo {
  text-align: center;
  span {
    font-size: 35vw;
    color: #d81e06;
  }
}
</style>