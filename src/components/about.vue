<template>
  <div class="about">
    <c-header></c-header>
    <c-content></c-content>
  </div>
</template>

<script>
import Content from './content.vue'
export default {
        name: 'content',
        components: {'c-content': Content}
}
</script>

<style lang="scss" scoped>

</style>
