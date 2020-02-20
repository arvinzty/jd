<template>
  <div id="homeSlider">
    <Slider cname="sli" :items="items"/>
    <ul class="list">
      <router-link tag="li" :to="{name:tem.href}" v-for="tem in arr" :key="tem.img">
        <img :src="tem.img" />
        <h4>{{tem.title}}</h4>
      </router-link>
    </ul>
  </div>
</template>

<script>
import Slider from '@/components/common/slider.vue'
export default {
  name: 'homeSlider',
  components: {
    Slider
  },
  props: {},
  data () {
    return {
      items: [{
        href: '/home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t13744/11/2508939408/43213/58bfe502/5a421ff3N52d0a474.jpg?width=750&height=320'
      }, {
        href: '/home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t16138/325/817844900/36681/5d874455/5a422029Ncd678ea3.jpg?width=750&height=320'
      }, {
        href: '/home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t13465/324/2563794460/43029/3ffca963/5a421f83Ne8089231.jpg?width=750&height=320'
      }],
      arr: [{
        href: 'download',
        img: '//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
        title: '优惠券'
      }, {
        href: 'home',
        img: '//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
        title: '领红包'
      }, {
        href: 'home',
        img: '//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
        title: '抢钢镚'
      }, {
        href: 'home',
        img: '//img12.360buyimg.com/jrpmobile/jfs/t4618/115/2179710654/11347/bf520df/58ec9d84Nfd169001.png?width=132&height=132',
        title: '领京豆'
      }, {
        href: 'home',
        img: '//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
        title: '白条提额'
      }]
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
//当用了scoped时，当前只能控制组件的最外层样式，想要控制组件的内部样式，就需要用穿透::v-deep
.sli::v-deep{
  margin-top: 7.5rem;
  img{
    width: 100%;
  }
}
.list{
  @include list(row);
  background-color: white;
  padding-top: 2.5rem;
  padding-bottom: 1.25rem;
  justify-content: space-around;
  li
  {
    text-align: center;
    img
    {
      display: inline-block;
      width: 4.625rem;
      height: 4.625rem;
      margin-bottom: 0.5rem;
    }
    h4
    {
      font-size: 1rem;
    }
  }
}
</style>
