<template>
  <section :class="cname">
    <swiper :options="options" :notNextTick="options.notNextTick">
      <swiper-slide v-for="(tem,index) in items" :key="index">
        <router-link :to="{path: tem.href}">
          <img :src="tem.src" alt="" >
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination" v-if="options.pagination" slot="pagination"></div>
    </swiper>
  </section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  props: {
    cname: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default () {
        return {
          autoplay: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          },
          notNextTick: false
        }
      }
    },
    items: {
      type: Array,
      default () {
        return [{ href: '', src: '' }]
      }
    }
  },
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
<style lang="scss">
@import '~swiper/dist/css/swiper.css';
// img{
//   width: 100%
// }
</style>
