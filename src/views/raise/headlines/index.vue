<template>
  <div id="headlines">
    <img src="//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png" alt="">
    <div>
      <p class="ani">百万白条券免费送，速来领取！！</p>
      <p class="ani">签到领流量，1元500M！</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headlines',
  components: {},
  props: {},
  data () {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        direction: 'vertical'
      },
      arr: []
    }
  },
  watch: {},
  computed: {},
  methods: {
    // ani () {
    //   const arr = document.querySelectorAll('.ani')
    //   let tem = 1
    //   console.log(arr)
    //   console.log(tem)
    //   arr[0].style.color = 'blue'
    //   arr.forEach(v => {
    //     v.style.transform = 'translate(0,-3.5rem)'
    //   })
    //   tem = ((tem - 1) < 0 ? 1 : tem)
    //   arr[tem].style.transform = 'translate(0,3.5rem)'
    // }
  },
  created () {},
  mounted () {
    this.arr = document.querySelectorAll('.ani')
    let index = 0
    setInterval(() => {
      if (index === 0) {
        this.arr[0].style.visibility = 'hidden'
        this.arr[1].style.visibility = 'visible'
      } else {
        this.arr[1].style.visibility = 'hidden'
        this.arr[0].style.visibility = 'visible'
      }
      index = (++index > 1 ? 0 : index)
    }, 3000)
  }
}
</script>
<style lang="scss" scoped>
#headlines{
  display: flex;
  // flex-wrap: nowrap;
  height: 3.5rem;
  // margin-top: 7.5rem;
  // overflow: hidden;
  background-color: white;
  img{
    height: 100%;
  }
  p{
    // display: inline-block;
    font-size: 1.5rem;
    line-height: 3.5rem;
    padding-left: 2rem;
    // transition: all 1s;
    position: relative;
  }
  p:nth-child(2){
    top: -3.5rem;
    visibility: hidden;
  }
}
</style>
