<template>
  <div :class="[btn,tem]">
      <slot/>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    tem: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      btn: 'btn'
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/css/element.scss';
// @import '../../assets/css/element.scss';
.btn{
  @include btn;
}
</style>
