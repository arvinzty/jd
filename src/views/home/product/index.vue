<template>
  <div id="product">
    <Panel title="新品推荐">
      <Slider :options="swiperOption" :items="items" class="sli"></Slider>
    </Panel>
  </div>
</template>

<script>
import Panel from '@/components/common/panel'
import Slider from '@/components/common/slider'
export default {
  name: 'product',
  components: {
    Slider,
    Panel
  },
  props: {},
  data () {
    return {
      swiperOption: {
        slidesPerView: 2.3,
        spaceBetween: 30,
        freeMode: true
      },
      items: [{
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t13963/267/2355123229/48850/254f797a/5a3c59aeN9cb550f6.jpg?width=335&height=421'
      }, {
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t13021/306/1996997425/21953/bda69db3/5a2f6a17N9da099b1.jpg?width=335&height=421'
      }, {
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t14125/310/1997192193/46667/3c910f8b/5a2f6a36Nad95b650.jpg?width=335&height=421'
      }, {
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t15784/188/381232069/39444/8878571d/5a2f6a4aNbd5a574c.jpg?width=335&height=421'
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
#product::v-deep{
  .sli{
    box-sizing: border-box;
    padding: 0 1.5rem;
    //  img{
    //   width: 13rem;
    //   height: 13rem;
    //   padding: 1rem;
    // }
    a{
      display: inline-block;
      width: 100%;
      img{
        width: 100%;
        display: block;
        height: 14.625rem;
        border: 1px solid #fafafa;
      }
    }
  }
}
</style>
