<template>
    <div class="c-content">
        <x-row>
            <x-col span=0 :pc="{span:2,offset:0}"></x-col>
            <x-col span=24 :pc="{span:18,offset:0}">
                <div class="topic-inner">
                    <div class="topic-title">关于</div>
                    <div class="topic-info">
                        
                    </div>
                    <div class="markdown-body">
                        <p>CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
                        <p>CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。</p>
                        <p>CNode 的 SLA 保证是，一个9，即 90.000000%。</p>
                        <p>社区目前由 @alsotang 在维护，有问题请联系：https://github.com/alsotang</p>
                        <p>请关注我们的官方微博：http://weibo.com/cnodejs</p>
                    </div>
                </div>
            </x-col>
           
            <x-col span=0 :pc="{span:2,offset:0}"></x-col>
        </x-row>
    </div>
</template>
<script>
import Row from './row'
import Col from './col'
// import {mapActions, mapGetters} from 'vuex'
export default {
    name: 'cDetail',
    components: {
        'x-row': Row,
        'x-col': Col
    },
    data() {
        return {
            topic: {},
            author: {}
        }
    },
    created() {
        console.log(1)
        let id = this.$route.params.topicId
        console.log('id',id)
        this.getTopicById({topicId: id}).then(res =>{
            this.topic = res.data
            this.author = res.data.author
        }).catch(err => {console.log(err)})
    },
    methods: {
        ...mapActions(['getTopicById'])
    },
    filters: {
        tab(val) {
            if(val === 'share') {
                return '分享'
            }else if(val == 'ask') {
                return '问答'
            }else if(val == 'job') {
                return '招聘'
            }else if(val == 'good') {
                return '精华'
            }
            return '分享';
        }
    }
}
</script>
<style>
    @import url('../assets/markdown.css');
     .c-content {
        margin: 20px;
        padding: 20px 20px;
        width: 100%;
        border-radius: 4px;
    }
    .topic-inner {
        margin: 15px 10px;
        padding:20px 0  40px 0;
        background: #fff;
        border-radius: 4px;
    }
    .topic-inner>.topic-title {
        padding-left: 10px;
        font-size: 26px;
        font-weight: bold;
    }
    .topic-inner>.topic-info {
        font-size: 12px;
        color: #999;
        padding: 10px 0 10px 10px;
        border-bottom: 1px solid #ddd;
        margin-bottom: 10px;
    }
    .topic-inner>.topic-info>span {
        display: inline-flex;
        justify-content: flex-start;
        align-items: center;
        vertical-align: middle;
    }
    .topic-inner>.topic-info>span::before {
        content: '';
        display: inline-block;
        height: 5px;
        width: 5px;
        margin: 0 3px;
        background: #888;
        border-radius: 50%;
    }
    .markdown-body {
        margin-left: 10px;
        margin-right: 10px;
    }
    .sider-bar {
        display: none;
    }
    @media (min-width:993px) {
        .c-content {
            margin: 0 10px;
        }
        .sider-bar {
            display: block;
        }
    }
</style>
