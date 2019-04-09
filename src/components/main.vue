<template>
  <div class="c-main">
    <x-row>
        <x-col span=0 :pc="{span:3,offset:0}"></x-col>
        <x-col span=24 :pc="{span:12,offset:0}">
            <div class="main-content">main</div>
        </x-col>
        <x-col span=0 :pc="{span:6,offset:0}">
            <div class="sider-bar">sider</div>
        </x-col>
        <x-col span=0 :pc="{span:3,offset:0}"></x-col>
    </x-row>
  </div>
</template>

<script>
    import Row from './row'
    import Col from './col'
    export default {
        name: 'cMain',
        components: {'x-row': Row, 'x-col': Col}
    }
</script>

<style lang="scss" scoped>
    .c-main{
        .main-content{
            border: 1px solid red;
            margin: 0 10px;
        }
        .sider-bar{
            display: none;
        }
        @media (min-width: 993px){
            .sider-bar{
                display: block;
                border: 1px solid green;
            }
        }
    }
</style>
