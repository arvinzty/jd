<template>
  <div id="hea" v-show="show">
    <div id="heade">
      <span class="left">
        <router-link to= "/login" tag="span">登录&nbsp;</router-link>|
        <router-link to= "/login" tag="span">注册</router-link>
      </span>
        <a href="http://dl.hdslb.com/mobile/latest/iBiliPlayer-bili.apk?t=1582200606000&spm_id_from=333.47.b_646f776e6c6f61642d6c696e6b.1"><btn class="btnDownload">app下载</btn></a>
    </div>
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
  computed: {
    show () {
      // console.log(this.$store.state.token !== '')
      if (this.$store.state.token !== '') {
        return false
      } else {
        return true
      }
    }
  },
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
#hea{
  height: 7.5rem;
  widows: 100vw;
}
</style>
