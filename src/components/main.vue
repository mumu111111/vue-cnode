<template>
  <div class="c-main">
    <x-row>
        <x-col span=0 :pc="{span:2,offset:0}"></x-col>
         <x-col span=24 :pc="{span:15,offset:0}">
                <div class="main-content">
                    <div class="main-content-navbar">
                        <ul>
                            <li :class="{active:query.tab==='all'}" @click="onClickTab" data-tab="all">全部</li>
                            <li :class="{active:query.tab==='good'}" @click="onClickTab" data-tab="good">精华</li>
                            <li :class="{active:query.tab==='share'}" @click="onClickTab" data-tab="share">分享</li>
                            <li :class="{active:query.tab==='ask'}" @click="onClickTab" data-tab="ask">问答</li>
                            <li :class="{active:query.tab==='job'}" @click="onClickTab" data-tab="job">招聘</li>
                        </ul>
                    </div>
                    <div v-for="topic in topics" :key="topic.id" class="topic">
                        <img :src="topic.author.avatar_url" :title="topic.author.loginname">
                        <div class="topic-info">
                            <div class="topic-info-inner">
                                <p class="topic-info-inner-tab">置顶</p>
                                <p class="topic-info-inner-title" :title="topic.title">
                                    <router-link :to="`./topic/${topic.id}`">{{topic.title}}</router-link>
                                </p>
                            </div>
                            <p class="topic-info-count"><span>{{topic.reply_count}}/</span><span>{{topic.visit_count}}</span></p>
                        </div>
                        <p class="topic-reply">
                            <router-link :to="`./topic/${topic.id}`"><span>最新回复：</span>{{$formatDate(topic.last_reply_at).des}}</router-link>
                        </p>
                    </div>
                    <div class="pagination-wrapper">
                        <x-pagination v-model="query.page"></x-pagination>
                    </div>
                </div>
        </x-col>
        <x-col span=0 :pc="{span:6,offset:0}">
            <div class="sider-bar">
                <c-sider></c-sider>
            </div>
        </x-col>
        <x-col span=0 :pc="{span:3,offset:0}"></x-col>
    </x-row>
    <div class="mask" v-if="isLoading">
        <div class="loading"></div>
    </div>
  </div>
</template>

<script>
import Row from "./row.vue";
import Col from "./col.vue";
import Pagination from "./pagination/pagination.vue";
import { mapActions } from "vuex";
export default {
  name: "cMain",
  data() {
    return {
      topics: null,
      query: {
        page: 1,
        tab: "all"
      },
      isLoading: false
    };
  },
  created() {
    this.isLoading = true;
    this.getTopics({ page: 1, limit: 20 })
      .then(res => {
        this.topics = res.data;
        this.isLoading = false;
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {
    query: {
      handler(val) {
        this.getTopics({ page: val.page, tab: val.tab, limit: 20 })
          .then(res => {
            this.topics = res.data;
          })
          .catch(err => {
            console.log(err);
          });
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    onClickTab(e) {
      this.query.tab = e.target.getAttribute("data-tab");
    },
    ...mapActions(["getTopics", "getTopicById"])
  },
  components: {
    "x-row": Row,
    "x-col": Col,
    "x-pagination": Pagination
  }
};
</script>

<style lang="scss" scoped>
$nodegreen: #80bd01;
$error: #f56c6c;
$warning: #e6a03c;
$tips: #919196;
.c-main {
  margin: 20px 0;
  border-radius: 4px;
  .mask {
    background: #fff;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    @keyframes scaleout {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
        opacity: 0;
      }
    }
    > .loading {
      width: 40px;
      height: 40px;
      background: $nodegreen;
      border-radius: 50%;
      position: fixed;
      top: 50%;
      left: 50%;
      margin: -20px 0 0 -20px;
      animation: scaleout 1.5s infinite ease-in-out;
    }
  }
  .main-content {
    margin: 0 10px;
    &-navbar {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      > ul {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background: #eee;
        color: $nodegreen;
        font-size: 14px;
        padding: 10px;
        > li {
          margin-right: 20px;
          padding: 2px 6px;
          border-radius: 4px;
          cursor: pointer;
          &:hover {
            color: #9e78c0;
          }
          &.active {
            background: $nodegreen;
            color: #fff;
          }
        }
      }
    }
    .topic {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border-bottom: 1px solid #eee;
      padding: 5px 0;
      background: #fff;
      &:hover {
        background: #eee;
      }
      > img {
        width: 30px;
        height: 30px;
        margin: 10px;
        border-radius: 4px;
        cursor: pointer;
      }
      &-info {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        max-width: 70%;
        &-inner {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 100%;
          order: 1;
          &-tab {
            font-size: 12px;
            background: $nodegreen;
            color: #fff;
            padding: 2px 5px;
            border-radius: 3px;
            margin: 0 5px 0 0;
            flex-shrink: 0;
          }
          &-tab-default {
            font-size: 12px;
            background: #ddd;
            color: #888;
            padding: 2px 5px;
            border-radius: 3px;
            margin: 0 5px 0 0;
            flex-shrink: 0;
          }
          &-title {
            font-size: 16px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            cursor: pointer;
            &:hover {
              text-decoration: underline;
            }
          }
        }
        &-count {
          order: 2;
          width: 70px;
          margin-left: 40px;
          text-align: start;
          flex-shrink: 0;
          > span:first-child {
            font-size: 14px;
            color: #9e78c0;
          }
          > span:last-child {
            font-size: 12px;
            color: #999;
          }
        }
      }
      &-reply {
        margin-left: auto;
        flex-shrink: 0;
        font-size: 12px;
        padding-right: 10px;
        cursor: pointer;
        span {
          display: none;
        }
      }
    }
    .pagination-wrapper {
      background: #fff;
      padding: 10px;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
  .sider-bar {
    display: none;
  }
  @media (min-width: 993px) {
    .main-content {
      margin: 0 10px;
      .topic {
        > img {
          margin: 10px 0 10px 10px;
        }
        &-info {
          flex-wrap: nowrap;
          &-inner {
            width: 90%;
            order: 2;
          }
          &-count {
            order: 1;
            margin-left: 0px;
            text-align: center;
          }
        }
        &-reply {
          span {
            display: inline;
          }
        }
      }
    }
    .sider-bar {
      display: block;
    }
  }
}
</style>
