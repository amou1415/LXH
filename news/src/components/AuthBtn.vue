<template>
  <div>
    <button class="btn" @click="sendClick">
      {{btnText}}
    </button>
  </div>
</template>

<script>
export default {
  props: ['btnText'],
  methods: {
    sendClick() {
      console.log('子组件被点击');
      // 这里被点击了, 主动告诉父组件
      // this.$emit(自定义事件名,参数(可选))
      this.$emit('clickBtn')
    }
  }
}
</script>

<style lang="less" scoped>
// 有 less 有 scoped
div {
  text-align: center;
}
.btn {
  width: 88.333vw;
  height: 13.333vw;
  background: #cc3300;
  border-radius: 6.667vw;
  border: none;
  font-size: 5vw;
  color: #fff;
  margin-top: 8vw;
}
</style>