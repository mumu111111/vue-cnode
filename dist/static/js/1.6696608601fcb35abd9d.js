webpackJsonp([1],{"41fD":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o=a("Dd8w"),n=a.n(o),c=a("m79M"),e=a("boE+"),i=a("NYxO"),r={name:"cDetail",components:{"x-row":c.a,"x-col":e.a},data:function(){return{topic:{},author:{}}},created:function(){var t=this;console.log(1);var s=this.$route.params.topicId;console.log("id",s),this.getTopicById({topicId:s}).then(function(s){t.topic=s.data,t.author=s.data.author}).catch(function(t){console.log(t)})},methods:n()({},Object(i.b)(["getTopicById"])),filters:{tab:function(t){return"share"===t?"分享":"ask"==t?"问答":"job"==t?"招聘":"good"==t?"精华":"分享"}}},l={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"c-topic-detail"},[a("x-row",[a("x-col",{attrs:{span:"0",pc:{span:2,offset:0}}}),t._v(" "),a("x-col",{attrs:{span:"24",pc:{span:15,offset:0}}},[a("div",{staticClass:"topic-inner"},[a("div",{staticClass:"topic-title"},[t._v(t._s(t.topic.title))]),t._v(" "),a("div",{staticClass:"topic-info"},[a("span",[t._v("发布于 1 小时前")]),t._v(" "),a("span",[t._v("作者 "+t._s(t.author.loginname))]),t._v(" "),a("span",[t._v(t._s(t.topic.visit_count)+" 次浏览")]),t._v(" "),a("span",[t._v("来自 "+t._s(t._f("tab")(t.topic.tab)))])]),t._v(" "),a("div",{staticClass:"markdown-body",domProps:{innerHTML:t._s(t.topic.content)}})])]),t._v(" "),a("x-col",{attrs:{span:"0",pc:{span:5,offset:0}}},[a("div",{staticClass:"sider-bar"},[a("c-sider")],1)]),t._v(" "),a("x-col",{attrs:{span:"0",pc:{span:2,offset:0}}})],1)],1)},staticRenderFns:[]};var p={name:"cDetail",components:{"c-detail":a("VU/8")(r,l,!1,function(t){a("v89q")},null,null).exports}},d={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"topic"},[s("c-header"),this._v(" "),s("c-detail"),this._v(" "),s("c-footer")],1)},staticRenderFns:[]};var v=a("VU/8")(p,d,!1,function(t){a("cTZk")},"data-v-dba8fd26",null);s.default=v.exports},cTZk:function(t,s){},v89q:function(t,s){}});
//# sourceMappingURL=1.6696608601fcb35abd9d.js.map