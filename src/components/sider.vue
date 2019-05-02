<template>
    <div class="c-sider">
        <div class="link">今日头条</div>
        <p v-for="item in toutiao" :key="item.docid"><a :href="item.link" target="_blank">{{item.title}}</a></p>
        <div class="link" target="_blank">科技新闻</div>
        <p v-for="tech in techs" :key="tech.docid"><a :href="tech.link" target="_blank">{{tech.title}}</a></p>
    </div>
</template>
<script>
import request from '../helpers/sider-request'
export default {
  name: "cSider",
  data() {
      return {
          toutiao: [],
          techs: []
      }
  },
  created() {
      request('https://www.apiopen.top/journalismApi').then(res =>{
          this.toutiao = res.data.toutiao
          this.techs = res.data.tech

      }).catch(err =>{})
  }
};
</script>
<style lang="scss" scoped>
.c-sider {
        background: #fff;
        border-radius: 4px;
        padding-bottom: 10px;
        >.link {
            background: #eee;
            font-size: 14px;
            padding: 12px 0 12px 10px;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
        }
        >p {
            font-size: 12px;
            color: #666;
            padding: 15px 10px;
            cursor: pointer;
            &:hover {
                text-decoration: underline;
                background: #eee;
            }
        }
    }
</style> 