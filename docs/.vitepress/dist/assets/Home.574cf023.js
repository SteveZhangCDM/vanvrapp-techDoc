import{e as t,u as e,f as a,g as s,o as i,c as l,a as o,w as c,h as n,t as r,i as v,_ as f,p as u,j as d,F as m,r as k,k as p,l as h,m as g}from"./app.06ca5107.js";u("data-v-0cb9fda2");const y={key:0,class:"home-hero"},x={key:0,class:"figure"},_=["src","alt"],I={key:1,id:"main-title",class:"title"},T={key:2,class:"description"};d();var A=t({setup(t){const{site:u,frontmatter:d}=e(),m=a((()=>{const{heroImage:t,heroText:e,tagline:a,actionLink:s,actionText:i}=d.value;return t||e||a||s&&i})),k=a((()=>d.value.heroText||u.value.title));return(t,e)=>s(m)?(i(),l("header",y,[s(d).heroImage?(i(),l("figure",x,[o("img",{class:"image",src:s(c)(s(d).heroImage),alt:s(d).heroAlt},null,8,_)])):n("v-if",!0),s(k)?(i(),l("h1",I,r(s(k)),1)):n("v-if",!0),s(d).tagline?(i(),l("p",T,r(s(d).tagline),1)):n("v-if",!0),s(d).actionLink&&s(d).actionText?(i(),v(f,{key:3,item:{link:s(d).actionLink,text:s(d).actionText},class:"action"},null,8,["item"])):n("v-if",!0),s(d).altActionLink&&s(d).altActionText?(i(),v(f,{key:4,item:{link:s(d).altActionLink,text:s(d).altActionText},class:"action alt"},null,8,["item"])):n("v-if",!0)])):n("v-if",!0)}});A.__scopeId="data-v-0cb9fda2",u("data-v-e39c13e0");const L={key:0,class:"home-features"},b={class:"wrapper"},$={class:"container"},j={class:"features"},w={key:0,class:"title"},C={key:1,class:"details"};d();var F=t({setup(t){const{frontmatter:c}=e(),v=a((()=>c.value.features&&c.value.features.length>0)),f=a((()=>c.value.features?c.value.features:[]));return(t,e)=>s(v)?(i(),l("div",L,[o("div",b,[o("div",$,[o("div",j,[(i(!0),l(m,null,k(s(f),((t,e)=>(i(),l("section",{key:e,class:"feature"},[t.title?(i(),l("h2",w,r(t.title),1)):n("v-if",!0),t.details?(i(),l("p",C,r(t.details),1)):n("v-if",!0)])))),128))])])])])):n("v-if",!0)}});F.__scopeId="data-v-e39c13e0",u("data-v-30918238");const q={key:0,class:"footer"},z={class:"container"},B={class:"text"};d();var D=t({setup(t){const{frontmatter:a}=e();return(t,e)=>s(a).footer?(i(),l("footer",q,[o("div",z,[o("p",B,r(s(a).footer),1)])])):n("v-if",!0)}});D.__scopeId="data-v-30918238",u("data-v-10122c92");const E={class:"home","aria-labelledby":"main-title"},G={class:"home-content"};d();var H=t({setup:t=>(t,e)=>{const a=p("Content");return i(),l("main",E,[h(A),g(t.$slots,"hero",{},void 0,!0),h(F),o("div",G,[h(a)]),g(t.$slots,"features",{},void 0,!0),h(D),g(t.$slots,"footer",{},void 0,!0)])}});H.__scopeId="data-v-10122c92";export{H as default};