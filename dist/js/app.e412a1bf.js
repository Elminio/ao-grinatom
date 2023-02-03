(function(){"use strict";var t={5310:function(t,e,a){var n=a(9242),r=a(3396);const o={class:"wrapper"};function c(t,e){const a=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",o,[(0,r.Wm)(a)])}var l=a(89);const i={},s=(0,l.Z)(i,[["render",c]]);var d=s;const p=t=>((0,r.dD)("data-v-4f536576"),t=t(),(0,r.Cn)(),t),u=p((()=>(0,r._)("h1",null,"Welcome to the adaptive card page!",-1))),m={key:0,class:"wrapper-cards"},g={class:"wrapper-card"},y={class:"wrapper-card"},v={key:1},f={key:2};function x(t,e,a,n,o,c){const l=(0,r.up)("adaptive-card");return(0,r.wg)(),(0,r.iD)(r.HY,null,[u,n.isLoadingCardData||n.isLoadingCardTemplate?n.isLoadingCardData?((0,r.wg)(),(0,r.iD)("h2",v,"Card data is loading ...")):n.isLoadingCardTemplate?((0,r.wg)(),(0,r.iD)("h2",f,"Card template is loading ...")):(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",m,[(0,r._)("div",g,[(0,r.Wm)(l,{"card-data":n.cardData,"card-template":n.cardTemplate},null,8,["card-data","card-template"])]),(0,r._)("div",y,[(0,r.Wm)(l,{"card-data":n.cardData_2,"card-template":n.cardTemplate_2},null,8,["card-data","card-template"])])]))],64)}var w=a(4870);const b=t=>((0,r.dD)("data-v-3c588706"),t=t(),(0,r.Cn)(),t),C={key:0,class:"card card--version-1-0"},k={key:0,class:"card__body"},D={key:1,class:"card card--version-2-0"},h=b((()=>(0,r._)("p",null,"Still in development :)",-1))),_=[h],T={key:1};function O(t,e,a,n,o,c){return n.isTypeCardAdaptive?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},["1.0"===a.cardTemplate.version?((0,r.wg)(),(0,r.iD)("div",C,[a.cardTemplate.body?((0,r.wg)(),(0,r.iD)("div",k,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.cardTemplate.body,((t,e)=>((0,r.wg)(),(0,r.j4)((0,r.LL)(n.componentName+t.type),{key:t.type+e,componentName:n.componentName,content:t},null,8,["componentName","content"])))),128))])):(0,r.kq)("",!0)])):(0,r.kq)("",!0),"2.0"===a.cardTemplate.version?((0,r.wg)(),(0,r.iD)("div",D,_)):(0,r.kq)("",!0)],64)):((0,r.wg)(),(0,r.iD)("h3",T,"This is not an adaptive card :("))}var B=a(7139);const $=["data-bleed"];function H(t,e,a,n,o,c){return a.content.columns?((0,r.wg)(),(0,r.iD)("div",{key:0,class:(0,B.C_)(n.allClassBlock(a.content.style)),"data-bleed":a.content.bleed},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.content.columns,((t,e)=>((0,r.wg)(),(0,r.iD)("div",{key:t.type+e,class:(0,B.C_)(n.allClassBlockItem(t.width,t.align))},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.items,((t,e)=>((0,r.wg)(),(0,r.j4)((0,r.LL)(a.componentName+t.type),{key:t.type+e,componentName:a.componentName,content:t},null,8,["componentName","content"])))),128))],2)))),128))],10,$)):(0,r.kq)("",!0)}const j={class:"card__image"},L=["src","alt"];function N(t,e,a,n,o,c){return(0,r.wg)(),(0,r.iD)("div",j,[(0,r._)("img",{src:n.getData(n.cardData,a.content.url),alt:a.content.altText,class:(0,B.C_)(n.allClassBlock(a.content.size,a.content.style))},null,10,L)])}function S(t,e,a=!1,n=!1){let r="",o="${",c="}",l=e.slice(e.indexOf(o),e.indexOf(c)+1),i=l.replace(/\${|}/gi,"");if(a)return i;let s=i.split(".");const d=(t,e=0)=>{for(let a=e;a<s.length;a++)if(Object.hasOwnProperty.call(t,s[a])){let e=s[a];return"object"===typeof t[e]&&null!==t[e]?n?r=t[e]:d(t[e],a+1):r=t[e]}},p=t=>(r=t.replace(/\*\*(.*?)\*\*/g,"<b>$1</b>"),r=r.replace(/\*(.*?)\*/g,"<i>$1</i>"),r);return e.includes(o)?(d(t),n||(r=e.replace(l,r))):r=e,n||p(r),r}var I={props:{content:{type:Object,default:()=>{}}},setup(){const{value:t}=(0,r.f3)("getCardData"),e="card__image",a=e+"--",n=(...t)=>[e,t[0]&&[a+t[0].toLowerCase()],t[1]&&[a+t[1].toLowerCase()]];return{cardData:t,getData:S,allClassBlock:n}}};const A=(0,l.Z)(I,[["render",N],["__scopeId","data-v-d5a65ee2"]]);var P=A;const z=["innerHTML"];function M(t,e,a,n,o,c){return(0,r.wg)(),(0,r.iD)("p",{innerHTML:n.getData(n.cardData,a.content.text),class:(0,B.C_)(n.allClassBlock(a.content.size,a.content.spacing))},null,10,z)}var Y={props:{content:{type:Object,default:()=>{}}},setup(){const{value:t}=(0,r.f3)("getCardData"),e="card__text-block",a=e+"--",n=(...t)=>[e,t[0]&&[a+"size-"+t[0].toLowerCase()],t[1]&&[a+"spacing-"+t[1].toLowerCase()]];return{cardData:t,getData:S,allClassBlock:n}}};const Z=(0,l.Z)(Y,[["render",M],["__scopeId","data-v-88db079c"]]);var q=Z,J={props:{componentName:{type:String,default:""},content:{type:Object,default:()=>{}}},components:{AdaptiveCardImage:P,AdaptiveCardTextBlock:q},setup(){const t="card__column-set",e=t+"--",a=t+"-item",n=a+"--",r=(...a)=>[t,a[0]&&[e+a[0]]],o=(...t)=>[a,t[0]&&[n+t[0]],t[1]&&[n+t[1]]];return{allClassBlock:r,allClassBlockItem:o}}};const K=(0,l.Z)(J,[["render",H],["__scopeId","data-v-16d0eea9"]]);var F=K;const W={key:0};function E(t,e,a,n,o,c){return(0,r.wg)(),(0,r.iD)("div",{class:(0,B.C_)(n.classBlock)},[a.content.facts[0].$data?((0,r.wg)(),(0,r.iD)("table",W,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.getData(n.cardData,a.content.facts[0].$data,!1,!0),((t,e)=>((0,r.wg)(),(0,r.iD)("tr",{key:t+e},[(0,r._)("td",null,[(0,r._)("b",null,(0,B.zw)(t[n.getData(n.cardData,a.content.facts[0].title,!0)]),1)]),(0,r._)("td",null,(0,B.zw)(t[n.getData(n.cardData,a.content.facts[0].value,!0)]),1)])))),128))])):(0,r.kq)("",!0)],2)}var U={props:{content:{type:Object,default:()=>{}}},setup(){const{value:t}=(0,r.f3)("getCardData"),e="card__fact-set";return{cardData:t,getData:S,classBlock:e}}};const X=(0,l.Z)(U,[["render",E],["__scopeId","data-v-552168d2"]]);var G=X,Q={props:{cardData:{type:Object,default:()=>{}},cardTemplate:{type:Object,default:()=>{}}},components:{AdaptiveCardColumnSet:F,AdaptiveCardTextBlock:q,AdaptiveCardFactSet:G},setup(t){const{cardData:e,cardTemplate:a}=(0,w.BK)(t),n="AdaptiveCard",o=a.value.type===n;return(0,r.JJ)("getCardData",e),{componentName:n,isTypeCardAdaptive:o}}};const R=(0,l.Z)(Q,[["render",O],["__scopeId","data-v-3c588706"]]);var V=R,tt={components:{AdaptiveCard:V},setup(){const t=(0,w.iH)({}),e=(0,w.iH)({}),n=(0,w.iH)({}),r=(0,w.iH)({}),o=(0,w.iH)(!0),c=(0,w.iH)(!0),l=async()=>{try{t.value=await a(5374),e.value=await a(8241)}catch(n){alert("Ошибка при получении данных!")}finally{setTimeout((()=>{o.value=!1}),1e3)}},i=async()=>{try{n.value=await a(8186),r.value=await a(1426)}catch(t){alert("Ошибка при получении данных!")}finally{setTimeout((()=>{c.value=!1}),2e3)}};return l(),i(),{cardData:t,cardData_2:e,cardTemplate:n,cardTemplate_2:r,isLoadingCardData:o,isLoadingCardTemplate:c}}};const et=(0,l.Z)(tt,[["render",x],["__scopeId","data-v-4f536576"]]);var at=et,nt=a(678);const rt=[{path:"/",component:at}],ot=(0,nt.p7)({history:(0,nt.PO)(),routes:rt});var ct=ot;(0,n.ri)(d).use(ct).mount("#app")},8186:function(t){t.exports=JSON.parse('{"type":"AdaptiveCard","version":"1.0","body":[{"type":"ColumnSet","style":"accent","bleed":true,"columns":[{"type":"Column","width":"auto","items":[{"type":"Image","url":"${photo}","altText":"Profile picture","size":"Small","style":"Person"}]},{"type":"Column","width":"stretch","items":[{"type":"TextBlock","text":"Hi ${name}!","size":"Medium"},{"type":"TextBlock","text":"Here\'s a bit about your org...","spacing":"None"}]}]},{"type":"TextBlock","text":"Your manager is: **${manager.name}**"},{"type":"TextBlock","text":"Your peers are:"},{"type":"FactSet","facts":[{"$data":"${peers}","title":"${name}","value":"${title}"}]}]}')},1426:function(t){t.exports=JSON.parse('{"type":"AdaptiveCard","version":"1.0","body":[{"type":"ColumnSet","style":"passive","bleed":true,"columns":[{"type":"Column","width":"stretch","items":[{"type":"TextBlock","text":"Hi ${name}!","size":"Big"},{"type":"TextBlock","text":"Here\'s a bit about","spacing":"None"}]},{"type":"Column","width":"auto","items":[{"type":"Image","url":"${photo}","altText":"Profile picture","size":"big","style":"Person"}]},{"type":"Column","width":"stretch","align":"align-right","items":[{"type":"TextBlock","text":"Hi ${name}!","size":"small"},{"type":"TextBlock","text":"Here\'s a bit about","spacing":"None"}]}]},{"type":"TextBlock","text":"**Your** manager *is manager manager* manager is: **${manager.name}**"},{"type":"FactSet","facts":[{"$data":"${peers}","title":"${name}","value":"${title}"}]},{"type":"TextBlock","text":"text text text text text text text text text text text text text text text text text text text text text text text 22222"},{"type":"ColumnSet","style":"passive","bleed":true,"columns":[{"type":"Column","width":"auto","items":[{"type":"Image","url":"${photo}","altText":"Profile picture","size":"Small"}]},{"type":"Column","width":"stretch","align":"align-center","items":[{"type":"TextBlock","text":"Hi ${name}!","size":"Small"},{"type":"TextBlock","text":"Here\'s a bit about","spacing":"None"}]},{"type":"Column","width":"auto","items":[{"type":"Image","url":"${photo}","altText":"Profile picture","size":"Small"}]}]}]}')},5374:function(t){t.exports=JSON.parse('{"name":"Matt","photo":"https://pbs.twimg.com/profile_images/3647943215/d7f12830b3c17a5a9e4afcc370e3a37e_400x400.jpeg","manager":{"name":"Thomas","title":"PM Lead"},"peers":[{"name":"Lei","title":"Sr Program Manager"},{"name":"Andrew","title":"Program Manager II"},{"name":"Mary Anne","title":"Program Manager"}]}')},8241:function(t){t.exports=JSON.parse('{"name":"Elmin","photo":"https://www.bogportal.ru/upload/iblock/a3a/a3a55af1bbb2943c26891d930a8b2bdb.jpg","manager":{"name":"Alex","title":"Test task"},"peers":[{"name":"Maks","title":"UI/UX Design"},{"name":"Oleg","title":"Manager"}]}')}},e={};function a(n){var r=e[n];if(void 0!==r)return r.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,n,r,o){if(!n){var c=1/0;for(d=0;d<t.length;d++){n=t[d][0],r=t[d][1],o=t[d][2];for(var l=!0,i=0;i<n.length;i++)(!1&o||c>=o)&&Object.keys(a.O).every((function(t){return a.O[t](n[i])}))?n.splice(i--,1):(l=!1,o<c&&(c=o));if(l){t.splice(d--,1);var s=r();void 0!==s&&(e=s)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[n,r,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,o,c=n[0],l=n[1],i=n[2],s=0;if(c.some((function(e){return 0!==t[e]}))){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(i)var d=i(a)}for(e&&e(n);s<c.length;s++)o=c[s],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(d)},n=self["webpackChunkao_grinatom"]=self["webpackChunkao_grinatom"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(5310)}));n=a.O(n)})();
//# sourceMappingURL=app.e412a1bf.js.map