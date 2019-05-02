<template>
    <footer class="c-footer">
        <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
    </footer>
</template>
<script>
export default {
  
}
</script>

<style lang="scss" scoped>
    .c-footer {
        display: none;
    }
    @media (min-width: 993px) {
        .c-footer {
            display: block;
            background: #fff;
            >p {
                margin-left: 12.5%;
                padding: 40px 10px;
                font-size: 14px;
                color: #999;
            }
        }
    }
</style>

