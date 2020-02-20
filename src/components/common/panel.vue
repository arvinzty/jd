<template>
  <section :class="[panelClass,tem]" >
    <h4>-{{title}}-</h4>
    <slot/>
  </section>
</template>

<script>
export default {
  components: {},
  props: {
    tem: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: '标题'
    }
  },
  data () {
    return {
      panelClass: 'panel'
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
@import '@/assets/css/element.scss';
.panel{
  @include panel;
}
</style>
