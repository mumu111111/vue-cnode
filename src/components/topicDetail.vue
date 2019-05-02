<template>
    <div class="c-topic-detail">
        <x-row>
            <x-col span=0 :pc="{span:3,offset:0}"></x-col>
            <x-col span=24 :pc="{span:14,offset:0}">
                <div class="topic-inner">
                    <div class="topic-title">{{topic.title}}</div>
                    <div class="topic-info">
                        <span>发布于 1 小时前</span>
                        <span>作者 {{author.loginname}}</span>
                        <span>{{topic.visit_count}} 次浏览</span>
                        <span>来自 {{topic.tab|tab}}</span>
                    </div>
                    <div class="markdown-body" v-html="topic.content"></div>
                </div>
            </x-col>
            <x-col span=0 :pc="{span:4,offset:0}">
                <div class="sider-bar">sider-bar</div>
            </x-col>
            <x-col span=0 :pc="{span:3,offset:0}"></x-col>
        </x-row>
    </div>
</template>
<script>
import Row from './row'
import Col from './col'
import {mapActions, mapGetters} from 'vuex'
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
        }
    }
}
</script>
<style>
    @import url('../assets/markdown.css');
     .c-topic-detail {
        padding: 20px 0;
        border-radius: 4px;
    }
    .topic-inner {
        margin: 0 10px;
        padding-left: 10px;
        padding-top: 10px;
        background: #fff;
        border-radius: 4px;
    }
    .topic-inner>.topic-title {
        font-size: 26px;
        font-weight: bold;
    }
    .topic-inner>.topic-info {
        font-size: 12px;
        color: #999;
        padding: 10px 0;
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
    }
    .sider-bar {
        display: none;
    }
    @media (min-width:993px) {
        .c-topic-detail {
            margin: 0 10px;
        }
        .sider-bar {
            display: block;
            border: 1px solid red;
        }
    }
</style>
