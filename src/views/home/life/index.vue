<template>
  <div id="life">
    <Panle title="生活服务">
      <ul>
        <router-link tag="li" :to="{name:'home'}" >
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t4375/104/1184122472/3976/89741da4/58be8a6eNf10193d0.png?width=135&height=135" alt="">
          <p>惠加油</p>
        </router-link>
        <router-link tag="li" :to="{name:'home'}" >
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t4747/185/1901740991/5892/1383fb93/58f57851N17ee6993.jpg?width=132&height=132" alt="">
          <p>小白信用</p>
          <p class="org">全新升级</p>
        </router-link>
        <router-link tag="li" :to="{name:'home'}" >
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t3241/234/8044685271/3713/7b29f77f/58be89c8Nb9d41295.png?width=135&height=135" alt="">
          <p>信用卡还款</p>
        </router-link>
        <router-link tag="li" :to="{name:'home'}" >
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t3172/259/7993557249/4351/fd082707/58be8a81Nd7716a06.png?width=135&height=135" alt="">
          <p>卡转让</p>
        </router-link>
        <router-link tag="li" :to="{name:'home'}" >
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t3085/320/8107659086/4344/cdbba2dd/58be8acfNdadcaf00.png?width=135&height=135" alt="">
          <p>定期还款</p>
        </router-link>
      </ul>
    </Panle>
  </div>
</template>

<script>
import Panle from '@/components/common/panel'
export default {
  name: 'life',
  components: {
    Panle
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
@import '@/assets/css/element';
#life ul{
  @include list(row);
  padding-bottom: 0.5rem;
  li{
    box-sizing: content-box;
    width: 20%;
    text-align: center;
    img{
        width: 4.625rem;
        height: 4.625rem;
      }
    p{
      color: gray !important;
      padding: 0.3rem 0
    }
    .org{
      color: #FF801A !important;
    }
  }
}
</style>
