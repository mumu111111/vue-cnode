<template>
<div class="topic">
    <c-header></c-header>
    <c-detail></c-detail>
    <c-footer></c-footer>
</div>
</template>
<script>
    import Detail from '../components/topicDetail'

    export default {
        name: 'cDetail',
        components: {'c-detail': Detail}
    }
</script>
<style lang="scss" scoped>
</style> 