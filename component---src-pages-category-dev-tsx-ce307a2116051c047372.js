(window.webpackJsonp=window.webpackJsonp||[]).push([[4,5],{"8VoU":function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return c}));var n=a("q1tI"),r=a.n(n),l=a("XEZr");t.default=function(e){return r.a.createElement(l.CateogryPosts,{title:"개발",activeCategory:"dev",posts:e.data.allMarkdownRemark.edges.map((function(e){return e.node}))})};var c="2233861546"},LCUr:function(e,t,a){},XEZr:function(e,t,a){"use strict";a.r(t),a.d(t,"CateogryPosts",(function(){return u})),a.d(t,"pageQuery",(function(){return d}));var n=a("Wbzz"),r=a("q1tI"),l=a.n(r),c=a("Hivy"),i=a("B7F5"),s=a("iDuC"),m=a("H8eV"),o=a("oh6M"),u=(a("LCUr"),function(e){var t=e.title,a=e.posts,r=e.activeCategory;return l.a.createElement(i.a,{hasHeaderBorder:!0,aside:l.a.createElement("div",{className:"category-list"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("label",null,"글분류")),l.a.createElement("li",null,l.a.createElement(n.Link,{to:"/category",className:r?"":"active"},"모든글")," "),l.a.createElement("li",null,l.a.createElement(n.Link,{to:"/category/series",className:"series"===r?"active":""},"연재물")," "),l.a.createElement("li",null,l.a.createElement(n.Link,{className:"dev"===r?"active":"",to:"/category/dev"},"개발")," "),l.a.createElement("li",null,l.a.createElement(n.Link,{to:"/category/think",className:"think"===r?"active":""},"생각")," ")))},l.a.createElement(m.a,{title:"분류: "+t}),l.a.createElement(c.b,null,l.a.createElement(c.a,{title:l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{type:"article",size:4}),t)},l.a.createElement(s.a,{posts:a.map((function(e){return{slug:e.fields.slug,title:e.frontmatter.title,meta:l.a.createElement("time",{dateTime:e.fields.date},e.fields.dateStr),excerpt:e.excerpt}}))}))))});t.default=function(e){return l.a.createElement(u,{title:"모든 글",posts:e.data.allMarkdownRemark.edges.map((function(e){return e.node}))})};var d="2401869814"},iDuC:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("Wbzz");a("pV4z");t.a=function(e){var t=e.posts;return r.a.createElement("ul",{id:"post-list",className:"post-list"},t.map((function(e){var t=e.title,a=e.slug,n=e.meta,c=e.excerpt;return r.a.createElement("li",{key:a,className:"post-item"},r.a.createElement(l.Link,{to:a},r.a.createElement("h2",{className:"post-item-title"},t),n&&r.a.createElement("div",{className:"post-item-meta"},n),c&&r.a.createElement("p",{className:"post-item-summary",dangerouslySetInnerHTML:{__html:c}})))})))}},pV4z:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-category-dev-tsx-ce307a2116051c047372.js.map