webpackJsonp([1],{hrBl:function(t,o){},"neA+":function(t,o){},zRCK:function(t,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=n("Dd8w"),s=n.n(e),a=n("m79M"),c=n("boE+"),i=n("NYxO"),r={name:"cDetail",components:{"x-row":a.a,"x-col":c.a},data:function(){return{topic:{},author:{}}},created:function(){var t=this;console.log(1);var o=this.$route.params.topicId;console.log("id",o),this.getTopicById({topicId:o}).then(function(o){t.topic=o.data,t.author=o.data.author}).catch(function(t){console.log(t)})},methods:s()({},Object(i.b)(["getTopicById"])),filters:{tab:function(t){return"share"===t?"分享":"ask"==t?"问答":"job"==t?"招聘":"good"==t?"精华":"分享"}}},d={render:function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"c-content"},[n("x-row",[n("x-col",{attrs:{span:"0",pc:{span:2,offset:0}}}),t._v(" "),n("x-col",{attrs:{span:"24",pc:{span:18,offset:0}}},[n("div",{staticClass:"topic-inner"},[n("div",{staticClass:"topic-title"},[t._v("关于")]),t._v(" "),n("div",{staticClass:"topic-info"}),t._v(" "),n("div",{staticClass:"markdown-body"},[n("p",[t._v("CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。")]),t._v(" "),n("p",[t._v("CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。")]),t._v(" "),n("p",[t._v("CNode 的 SLA 保证是，一个9，即 90.000000%。")]),t._v(" "),n("p",[t._v("社区目前由 @alsotang 在维护，有问题请联系：https://github.com/alsotang")]),t._v(" "),n("p",[t._v("请关注我们的官方微博：http://weibo.com/cnodejs")])])])]),t._v(" "),n("x-col",{attrs:{span:"0",pc:{span:2,offset:0}}})],1)],1)},staticRenderFns:[]};var l={name:"content",components:{"c-content":n("VU/8")(r,d,!1,function(t){n("neA+")},null,null).exports}},p={render:function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"about"},[o("c-header"),this._v(" "),o("c-content")],1)},staticRenderFns:[]};var v=n("VU/8")(l,p,!1,function(t){n("hrBl")},"data-v-095d3a92",null);o.default=v.exports}});
//# sourceMappingURL=1.56a77b373bdb50f824cf.js.map