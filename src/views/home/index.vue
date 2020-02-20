<template>
  <div id="home">
    <Heade/>
    <HomeSlider/>
    <Novice/>
    <Borrow/>
    <Money/>
    <Product/>
    <Life/>
    <Footer/>
    <!-- <NavBar/> -->
  </div>
</template>

<script>
import Heade from '@/views/header'
import HomeSlider from '@/views/home/homeSlider'
import Novice from '@/views/home/novice'
import Borrow from '@/views/home/borrow'
import Money from '@/views/home/money'
import Product from '@/views/home/product'
import Life from '@/views/home/life'
import Footer from '@/views/footer'
// import NavBar from '@/views/navBar'
export default {
  name: 'home',
  components: {
    Heade,
    HomeSlider,
    Novice,
    Borrow,
    Money,
    Product,
    Life,
    Footer
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
#home::after{
  content: '';
  display: block;
  clear: both;
  width: 100%;
  height: 0;
}
</style>
