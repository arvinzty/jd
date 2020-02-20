<template>
  <div id="navBar">
    <ul>
      <router-link tag="li" :to="{path:'/'}" >
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shouye"></use>
        </svg>
        <p>首页</p>
      </router-link>
      <router-link tag="li" :to="{path:'/index/money'}" >
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-licaishouyi"></use>
        </svg>
        <p>理财</p>
      </router-link>
      <router-link tag="li" :to="{path:'/index/raise'}" >
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-baitiaoshanfu"></use>
        </svg>
        <p>白条</p>
      </router-link>
      <router-link tag="li" :to="{path:'/index/ious'}" >
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jingdongzhongchou"></use>
        </svg>
        <p>众筹</p>
      </router-link>
      <router-link tag="li" :to="{name:'/index/mine'}" >
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-wode"></use>
        </svg>
        <p>我的</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'navBar',
  components: {},
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
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
#navBar ul{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: white;
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 1000;
  text-align: center;
  .router-link-active{
    color: #F04752;
    animation: ani 0.6s;
  }
  li{
    padding: 0.3rem 1rem;
    svg{
      font-size: 4rem;
    }
    p{
      line-height: 1.3rem;
    }
  }
}

@keyframes ani{
  from{transform: scale(65%);}
  to{transform: scale(100%);}
}
</style>
