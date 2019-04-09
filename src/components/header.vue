<template>
  <div class="c-header">
    <x-row>
            <x-col span=0 :pc="{span:3,offset:0}"></x-col>
            <x-col span=24 :pc="{span:18,offset:0}">
                <div class="header-inner">
                    <router-link to="">
                        <div><img src="../../static/logo.svg"></div>
                    </router-link>
                    <ul class="navbar">
                        <li class="index-item">
                            <router-link to="/">首页</router-link>
                        </li>
                        <li>
                            <router-link to="/about">关于</router-link>
                        </li>
                       
                    </ul>
                </div>
            </x-col>
            <x-col span=0 :pc="{span:3,offset:0}"></x-col>
        </x-row>
  </div>
</template>

<script>
  import Row from './row'
  import Col from './col' 
  import request from '../helper/request.js'
  export default {
    name: 'cHeader',
    components: {'x-row': Row, 'x-col': Col},
    created(){
        request({ 
            method: 'GET',
            url: '/topics',
            data: {page: 1, tab: 'ask', limit: 10}
        }).then(res=>{
            console.log(res);
        })
    }
  }
</script>

<style lang="scss" scoped>
  .c-header{
    background: rgb(68,68,68);
    .header-inner {
            padding: 10px 20px;
            img {
                width: 120px;
                height: 30px;
                vertical-align: middle;
            }
            >.navbar {
                font-size: 14px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                >li {
                    flex-shrink: 0;
                    padding: 15px 10px;
                    color: #ddd;
                    &:hover {
                        color: #fff;
                    }
                    &:first-child {
                        padding: 10px 10px 10px 0;
                    }
                }
            }
        }
        @media (min-width:993px) {
            .header-inner {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px;
                img {
                    width: 120px;
                    height: 30px;
                }
                >.navbar {
                    font-size: 14px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    >li {
                        padding: 0 15px;
                        color: #ddd;
                        &:hover {
                            color: #fff;
                        }
                        &:first-child {
                            padding: 0 15px;
                        }
                    }
                }
            }
        }
  }
</style>
