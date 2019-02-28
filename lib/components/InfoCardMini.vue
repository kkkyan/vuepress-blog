<template>
  <div class="info-card">
    <div
      class="info-card-header"
      :style="headerStyle"
    >
      <img
        class="info-avatar"
        :src="avatar"
        :alt="nickname"
      >
      <!-- <section class="info-nickname">
          {{ nickname }}
        </section>

        <section
          v-if="description"
          class="info-desc"
          v-html="description"
        /> -->
    </div>
  </div>
</template>

<script>
// import IconInfo from './IconInfo.vue'
import GeoPattern from 'geopattern'

export default {
  name: 'InfoCardMini',

  components: {
    // IconInfo,
  },

  computed: {
    info () {
      return this.$site.themeConfig.personalInfo || {}
    },

    nickname () {
      return this.info.nickname || 'Unknown'
    },

    description () {
      return this.info.description || null
    },

    avatar () {
      return this.info.avatar || '/assets/img/avatar_unknown.jpg'
    },

    headerStyle () {
      return {
        'background-image': !this.$ssrContext ? GeoPattern.generate(this.nickname, { color: '#eee' }).toDataUrl() : null,
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
@require '~@theme/styles/variables'

$headerBgHeight = 120px
$avatarHeight = 80px

.info-card
  padding 0
  a
    color $grayTextColor
    font-weight normal
  .info-card-header
    height $headerBgHeight
    .info-avatar
      display block
      width $avatarHeight
      height $avatarHeight
      margin 0 auto
      border 3px solid #fff
      border-radius 50%
      box-shadow: 0 0 2px alpha(black, 0.2)
      transform translateY(($headerBgHeight - $avatarHeight) /2 )
    .info-nickname
      display block
      font-size 1.5rem
      font-weight bold
      text-align center
  .info-card-body
    cursor default
    padding 1rem
    border-bottom 1px solid $borderColor
    text-align center

    .info-desc
      margin 1rem 0
    .info-contact
      color $grayTextColor
      word-break break-all
      line-height 160%
      .icon
        fill $grayTextColor

</style>
