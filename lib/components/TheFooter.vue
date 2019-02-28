<template>
  <footer class="footer">
    <p>
      <span>Powered by </span>

      <a
        href="https://vuepress.vuejs.org"
        target="_blank"
      >
        Vuepress
      </a>
    </p>
  </footer>
</template>

<script>
// import IconSns from './IconSns.vue'

export default {
  name: 'TheFooter',

  components: {
    // IconSns,
  },

  computed: {
    // sns () {
    //   return this.$site.themeConfig.personalInfo.sns || {}
    // },
  },
}
</script>

<style lang="stylus" scoped>
@require '~@theme/styles/variables'

.footer
  color $grayTextColor
  padding-bottom 1.5rem
  text-align center
  border-top 1px solid $borderColor
</style>
