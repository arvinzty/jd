<template>
  <div id="welfare">
    <Panel title="更多福利">
      <section>
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t7456/56/1425209238/21928/f1fe492d/599cee57Naea99020.jpg?width=250&height=330" alt="">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t7894/126/1440046618/24763/5ce6a129/599cee04Ne77b3641.jpg?width=250&height=330" alt="">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t6385/103/1675552688/24265/91be4150/59549aedNa30670f7.jpg?width=250&height=330" alt="">
      </section>
      <router-link :to="{name:'home'}" tag="span">
        更多福利 >
      </router-link>
    </Panel>
  </div>
</template>

<script>
import Panel from '@/components/common/panel.vue'
export default {
  name: 'welfare',
  components: {
    Panel
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
#welfare section{
  position: relative;
  // display: flex;
  // flex-direction: row;
  // flex-wrap: nowrap;
  img{
    width: 33%;
  }
}
#welfare span{
    position: absolute;
    top: 3rem;
    right: 2rem;
    color: rgba($color: #000000, $alpha: 0.6);
    font-size: 1.4rem;
  }
</style>
