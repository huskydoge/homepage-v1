(self.webpackChunkexample=self.webpackChunkexample||[]).push([[222],{49694:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var n=a(90382),r=a.n(n),l=a(54622),c=a(27378),m=a(9952),u=a(1085),s=a(68941),o=a(98730),d=a.n(o),p=a(80170),i=function(e){var t=e.data.node,a=e.tagsMap,n=t.frontmatter,o=n.title,i=n.excerpt,g=n.path,f=n.date,E=n.tags,h=n.cover,v=h?h.childImageSharp.fluid:null,x=(0,s.$W)(),y=d().resolvePageUrl(g),Z=d().parseMarkDown(d().trimExcerpt(i),!0);return c.createElement(m.Z,{className:r()("postCard-module--postCard--+PorL","cursor-default"),style:{padding:"0"},bordered:!0},c.createElement("div",null,c.createElement("a",{href:d().generateFullUrl(x,y)},v?c.createElement(l.Z,{fluid:v}):c.createElement("div",{className:"postCard-module--postCardImg--aKHzI"})),c.createElement("span",{className:"postCard-module--dateHolder--u4JXf"},f?d().formatDate(f):"")),c.createElement("div",{style:{padding:"0.8rem"}},c.createElement("h5",null,c.createElement("a",{href:d().generateFullUrl(x,y)},o)),c.createElement(u.Z,{wrap:!0,style:{margin:"-4px"}},E.map((function(e){return a[e]?c.createElement(p.Z,{key:"tag-"+e,tag:a[e]}):null}))),c.createElement("a",{href:d().generateFullUrl(x,y)},c.createElement("p",{style:{marginTop:"1rem"},dangerouslySetInnerHTML:{__html:Z}}))))}},97277:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return h}});var n=a(83864),r=a.n(n),l=a(25389),c=a.n(l),m=a(69238),u=a.n(m),s=a(29763),o=a(22767),d=a(27378),p=(a(13626),a(49089),a(49694)),i=a(57325),g=a(50798),f=a(98730),E=a.n(f),h=function(e){var t=e.data,a=e.pageContext.tag,n=t.allMdx.edges,l=u()(n,(function(e){return"posts"===e.node.frontmatter.type})),m=u()(n,(function(e){return"research"===e.node.frontmatter.type})),f=t.allTag?t.allTag.edges:[],h=c()(r()(f,(function(e){return e.node.name})),"node"),v=h[a],x=v?v.path:"#",y=v?v.description:"";return d.createElement(d.Fragment,null,d.createElement(g.Z,{title:a,description:"All post about "+a+". "+y+" ",path:E().resolvePageUrl(x,v),keywords:[a]}),d.createElement("div",{className:"marginTopTitle tags-module--tagsList--WkGoD"},d.createElement("h1",{className:"titleSeparate"},"#",a),d.createElement("h4",{className:"textCenter"},y)),m.length>0?d.createElement(d.Fragment,null,d.createElement("h2",null,"Research"),d.createElement(s.Z,{gutter:[20,20],type:"flex"},m.map((function(e,t){return d.createElement(o.Z,{key:t,xs:24,sm:24,md:24,lg:24},d.createElement(i.Z,{data:e,tagsMap:h}))})))):null,l.length>0?d.createElement(d.Fragment,null,d.createElement("h2",null,"Posts"),d.createElement(s.Z,{gutter:[20,20],type:"flex"},l.map((function(e,t){return d.createElement(o.Z,{key:t,xs:24,sm:24,md:12,lg:8},d.createElement(p.Z,{data:e,tagsMap:h}))})))):null)}},98129:function(e,t,a){var n=a(52033);e.exports=function(e,t){var a=[];return n(e,(function(e,n,r){t(e,n,r)&&a.push(e)})),a}},69238:function(e,t,a){var n=a(10263),r=a(98129),l=a(89278),c=a(19785);e.exports=function(e,t){return(c(e)?n:r)(e,l(t,3))}}}]);
//# sourceMappingURL=component---gatsby-theme-academic-src-templates-tags-index-jsx-f3ff55c86dc3315941ef.js.map