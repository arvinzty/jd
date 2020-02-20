<template>
  <div id="heade">
    <span class="left">
      <router-link to= "/" tag="span">登录&nbsp;</router-link>|
      <router-link to= "/" tag="span">注册</router-link>
    </span>
    <btn class="btnDownload">app下载</btn>
  </div>
</template>

<script>
import btn from '@/components/common/btn.vue'
export default {
  name: 'heade',
  components: {
    btn
  },
  props: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>
<style lang="scss" scoped>
#heade{
    color: #666;
    height: 6.25rem;
    line-height: 6.25rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    font-size: 2rem;
    background: #fff url(//m.jr.jd.com/spe/qyy/main/images/jr-logo.png) center center no-repeat;
    background-size: auto 50%;
    z-index: 100;
    .left{
      font-size: 1.75rem;
      height: 30px;
      line-height: 1.875rem;
      margin: 1.0625rem 0 0 1.125rem;
    }
    .btnDownload{
      float: right;
      font-size: 1.5rem;
      border-width: 0;
      height: 3.5rem;
      line-height: 3.5rem;
      min-width: 7.5rem;
      padding: 0;
      border-radius: 0.25rem;
      margin: 1.75rem 1.5rem 0 0;
    }

  }
</style>
