var tns=function(){function t(){for(var t,e,n,i=arguments[0]||{},a=1,o=arguments.length;a<o;a++)if(null!==(t=arguments[a]))for(e in t)n=t[e],i!==n&&void 0!==n&&(i[e]=n);return i}function e(t){return["true","false","null"].indexOf(t)>=0?JSON.parse(t):t}function n(t,e){return localStorage.setItem(t,e),e}function i(){return void 0===window.tnsId?window.tnsId=1:window.tnsId++,"tns"+window.tnsId}function a(t){var e=document.createElement("style");return t&&e.setAttribute("media",t),document.querySelector("head").appendChild(e),e.sheet?e.sheet:e.styleSheet}function o(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):"addRule"in t&&t.addRule(e,n,i)}function r(t,e){return Math.atan2(t,e)*(180/Math.PI)}function s(t,e){return Math.abs(90-Math.abs(t))>=90-e?"horizontal":Math.abs(90-Math.abs(t))<=e&&"vertical"}function c(t,e){return t.hasAttribute(e)}function l(t,e){return t.getAttribute(e)}function u(t){return void 0!==t.item}function d(t,e){if(t=u(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function f(t,e){t=u(t)||t instanceof Array?t:[t],e=e instanceof Array?e:[e];for(var n=e.length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function h(t){var e=t.cloneNode(!0);t.parentNode.insertBefore(e,t),t.remove(),t=null}function p(t){c(t,"hidden")||d(t,{hidden:""})}function v(t){c(t,"hidden")&&f(t,"hidden")}function m(t){return"boolean"==typeof t.complete?t.complete:"number"==typeof t.naturalWidth?0!==t.naturalWidth:void 0}function y(t){for(var e=document.createElement("fakeelement"),n=(t.length,0);n<t.length;n++)if(prop=t[n],void 0!==e.style[prop])return prop;return!1}function g(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}function b(t,e){for(var n in e){var i=("touchstart"===n||"touchmove"===n)&&M;t.addEventListener(n,e[n],i)}}function x(t,e){for(var n in e){var i=("touchstart"===n||"touchmove"===n)&&M;t.removeEventListener(n,e[n],i)}}function E(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){this.topics[t]&&this.topics[t].forEach(function(t){t(e)})}}}function C(t,e,n,i,a,o,r){function s(){o-=c,u+=d,t.style[e]=n+u+l+i,o>0?setTimeout(s,c):r()}var c=Math.min(o,10),l=a.indexOf("%")>=0?"%":"px",a=a.replace(l,""),u=Number(t.style[e].replace(n,"").replace(i,"").replace(l,"")),d=(a-u)/o*c;setTimeout(s,c)}!function(){"use strict";"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}(),function(){"use strict";var t,e,n,i=window,a=document,o=Object,r="length",s="item contains add remove toggle toString toLocaleString".split(" "),c=s[2],l=s[3],u=s[4],d="prototype",f="defineProperty"in o||"__defineGetter__"in o[d]||null,h=function(t,e,n,i){o.defineProperty?o.defineProperty(t,e,{configurable:!1===f||!!i,get:n}):t.__defineGetter__(e,n)},p=function(t,e){var n=this,i=[],a={},d=0,f=0,p=function(){if(d>=f)for(;f<d;++f)!function(t){h(n,t,function(){return v(),i[t]},!1)}(f)},v=function(){var n,o,s=arguments,c=/\s+/;if(s[r])for(o=0;o<s[r];++o)if(c.test(s[o]))throw n=new SyntaxError('String "'+s[o]+'" contains an invalid character'),n.code=5,n.name="InvalidCharacterError",n;for(i=(""+t[e]).replace(/^\s+|\s+$/g,"").split(c),""===i[0]&&(i=[]),a={},o=0;o<i[r];++o)a[i[o]]=!0;d=i[r],p()};return v(),h(n,r,function(){return v(),d}),n[s[6]]=n[s[5]]=function(){return v(),i.join(" ")},n.item=function(t){return v(),i[t]},n.contains=function(t){return v(),!!a[t]},n[c]=function(){v.apply(n,o=arguments);for(var o,s,c=0,l=o[r];c<l;++c)s=o[c],a[s]||(i.push(s),a[s]=!0);d!==i[r]&&(d=i[r]>>>0,t[e]=i.join(" "),p())},n[l]=function(){v.apply(n,o=arguments);for(var o,s={},c=0,l=[];c<o[r];++c)s[o[c]]=!0,delete a[o[c]];for(c=0;c<i[r];++c)s[i[c]]||l.push(i[c]);i=l,d=l[r]>>>0,t[e]=i.join(" "),p()},n[u]=function(t,e){return v.apply(n,[t]),void 0!==e?e?(n[c](t),!0):(n[l](t),!1):a[t]?(n[l](t),!1):(n[c](t),!0)},function(t,e){if(e)for(var n=0;n<7;++n)e(t,s[n],{enumerable:!1})}(n,o.defineProperty),n},v=function(t,e,n){h(t[d],e,function(){var t,i=this,o="__defineGetter__defineProperty"+e;if(i[o])return t;if(i[o]=!0,!1===f){for(var s,c=v.mirror=v.mirror||a.createElement("div"),l=c.childNodes,u=l[r],d=0;d<u;++d)if(l[d]._R===i){s=l[d];break}s||(s=c.appendChild(a.createElement("div"))),t=p.call(s,i,n)}else t=new p(i,n);return h(i,e,function(){return t}),delete i[o],t},!0)};if(i.DOMTokenList)t=a.createElement("div").classList,d=i.DOMTokenList[d],t[c].apply(t,s),2>t[r]&&(e=d[c],n=d[l],d[c]=function(){for(var t=0,n=arguments;t<n[r];++t)e.call(this,n[t])},d[l]=function(){for(var t=0,e=arguments;t<e[r];++t)n.call(this,e[t])}),t[u]("List",!1)&&(d[u]=function(t,e){var n=this;return n[(e=void 0===e?!n.contains(t):e)?c:l](t),!!e});else{if(f)try{h({},"support")}catch(t){f=!1}p.polyfill=!0,i.DOMTokenList=p,v(i.Element,"classList","className"),v(i.HTMLLinkElement,"relList","rel"),v(i.HTMLAnchorElement,"relList","rel"),v(i.HTMLAreaElement,"relList","rel")}}();var w=!1;try{var T=Object.defineProperty({},"passive",{get:function(){w=!0}});window.addEventListener("test",null,T)}catch(t){}var M=!!w&&{passive:!0},S=navigator.userAgent,D=localStorage;D.tnsApp?D.tnsApp!==S&&(D.tnsApp=S,["tnsCalc","tnsSubpixel","tnsCSSMQ","tnsTf","tnsTsDu","tnsTsDe","tnsAnDu","tnsAnDe","tnsTsEn","tnsAnEn"].forEach(function(t){D.removeItem(t)})):D.tnsApp=S;var L=document,A={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40},N=e(D.tnsCalc||n("tnsCalc",function(){var t=document,e=t.body,n=t.createElement("div"),i=!1;e.appendChild(n);try{for(var a,o=["calc(10px)","-moz-calc(10px)","-webkit-calc(10px)"],r=0;r<3;r++)if(a=o[r],n.style.width=a,10===n.offsetWidth){i=a.replace("(10px)","");break}}catch(t){}return e.removeChild(n),i}())),k=e(D.tnsSubpixel||n("tnsSubpixel",function(){var t,e=document,n=e.body,i=e.createElement("div"),a=e.createElement("div");i.style.cssText="width: 10px",a.style.cssText="float: left; width: 5.5px; height: 10px;",t=a.cloneNode(!0),i.appendChild(a),i.appendChild(t),n.appendChild(i);var o=a.offsetTop!==t.offsetTop;return n.removeChild(i),o}())),O=e(D.tnsCSSMQ||n("tnsCSSMQ",function(){var t=document,e=t.body,n=t.createElement("div");n.className="tns-mq-test",e.appendChild(n);var i=window.getComputedStyle?window.getComputedStyle(n).position:n.currentStyle.position;return e.removeChild(n),"absolute"===i}())),P=e(D.tnsTf||n("tnsTf",y(["transform","WebkitTransform","MozTransform","msTransform","OTransform"]))),I=e(D.tnsTsDu||n("tnsTsDu",y(["transitionDuration","WebkitTransitionDuration","MozTransitionDuration","OTransitionDuration"]))),z=e(D.tnsTsDe||n("tnsTsDe",y(["transitionDelay","WebkitTransitionDelay","MozTransitionDelay","OTransitionDelay"]))),R=e(D.tnsAnDu||n("tnsAnDu",y(["animationDuration","WebkitAnimationDuration","MozAnimationDuration","OAnimationDuration"]))),H=e(D.tnsAnDe||n("tnsAnDe",y(["animationDelay","WebkitAnimationDelay","MozAnimationDelay","OAnimationDelay"]))),W=e(D.tnsTsEn||n("tnsTsEn",g(I,"Transition"))),B=e(D.tnsAnEn||n("tnsAnEn",g(R,"Animation")));return function(e){function n(){if(jt<=Gt){Yt=!1;ue=Pt?ie:0,void 0!==ue&&ye.emit("indexChanged",Tt()),Ne&&p(Ne),De&&p(De),Fe&&p(Fe)}else Yt=e.arrowKeys,Ae&&v(Ne),Me&&v(De),We&&v(Fe)}function c(t){clearTimeout(kt),kt=setTimeout(function(){Nt!==rn()&&(u(),"outer"===Ft&&ye.emit("outerResized",Tt(t)))},100)}function u(){Nt=rn();var t=ue,e=Gt;($t||Xt)&&(Gt=on()),It||(G(),Et(),K()),Xt&&Ut&&xt(),S(),$t&&Gt!==e&&(ye.emit("itemsChanged"),n(),sn(),Xt||O||g(),Pt||O||T(),Q(0),F(),M(),wt(),q(),ue!==t&&(ye.emit("indexChanged",Tt()),U()),navigator.msMaxTouchPoints&&_())}function y(t){return(t.cssRules?t.cssRules:t.rules).length}function g(){Ht.style.width=100*ae/Gt+"%"}function w(t){for(var e="",n="0",i=0;i<t;i++){var a=i<t-1?"+"+(i+1):"";i>0&&(n=N?N+"("+100*i+"% / "+t+")":100*i/t+"%"),e+="#"+Ce+" .tns-item:nth-child("+t+"n"+a+"){left:"+n+"}"}return e}function T(){for(var t=0;t<ae;t++){for(var e=ue%Gt,n=t%Gt;n<e;)n+=Gt;Bt[t].style.left=100*(n-e)/Gt+"%"}}function M(){if(ee){var t=ue,e=ue+Gt;for(Ut&&(t-=1,e+=1);t<e;t++)[].forEach.call(Bt[t].querySelectorAll(".tns-lazy-img"),function(t){var e={};e[W]=function(t){t.stopPropagation()},b(t,e),t.classList.contains("loaded")||(t.src=l(t,"data-src"),t.classList.add("loaded"))})}}function S(){if(Jt){for(var t=[],e=ue;e<ue+Gt;e++)[].forEach.call(Bt[e].querySelectorAll("img"),function(e){t.push(e)});0===t.length?j():D(t)}}function D(t){t.forEach(function(e,n){m(e)&&t.splice(n,1)}),0===t.length?j():setTimeout(function(){D(t)},16)}function j(){for(var t,e=[],n=ue;n<ue+Gt;n++)e.push(Bt[n].offsetHeight);t=Math.max.apply(null,e),Ht.style.height!==t&&(I&&X(Kt),Ht.style.height=t+"px")}function G(){At=[0];for(var t,e=Bt[0].getBoundingClientRect().top,n=1;n<ae;n++)t=Bt[n].getBoundingClientRect().top,At.push(t-e)}function _(){zt.style.msScrollSnapPointsX="snapInterval(0%, "+100/Gt+"%)"}function F(){var t,e,n,i;ue!==de&&(ue>de?(t=de,e=Math.min(de+Gt,ue),n=Math.max(de+Gt,ue),i=ue+Gt):(t=Math.max(ue+Gt,de),e=de+Gt,n=ue,i=Math.min(ue+Gt,de))),_t%1!=0&&(t=Math.round(t),e=Math.round(e),n=Math.round(n),i=Math.round(i));for(var a=t;a<e;a++)d(Bt[a],{"aria-hidden":"true",tabindex:"-1"});for(var o=n;o<i;o++)d(Bt[o],{"aria-hidden":"false"}),f(Bt[o],["tabindex"])}function q(){Ae&&(ze=Ie!==-1?Ie:!Vt&&Ut?(ue-1)%jt:ue%jt,Ie=-1,ze!==Re&&(d(Le[Re],{tabindex:"-1","aria-selected":"false"}),d(Le[ze],{tabindex:"0","aria-selected":"true"}),Re=ze))}function U(){if(Me&&!Vt){var t=[],e=[];ue===he?(t.push(we),e.push(Te),ut(we,Te)):Qt||ue!==pe?e.push(we,Te):(t.push(Te),e.push(we),ut(Te,we)),t.length>0&&t.forEach(function(t){t.disabled||(t.disabled=!0)}),e.length>0&&e.forEach(function(t){t.disabled&&(t.disabled=!1)})}}function X(t,e){t=t?t/1e3+"s":"",e=e||Ht,e.style[I]=t,Pt||(e.style[R]=t),It||(Rt.style[I]=t)}function Y(){var t;if(It)if(Xt)t=-Xt*ue+"px";else{var e=P?ae:Gt;t=100*-ue/e+"%"}else t=-At[ue]+"px";return t}function K(t){t||(t=Y()),Ht.style[se]=ce+t+le}function Q(t,e){void 0===t&&(t=Kt),I&&X(t),cn(t,e)}function V(){ve=!0,re&&sn(),ue!==de&&ye.emit("indexChanged",Tt()),ye.emit("transitionStart",Tt()),Q()}function J(t){function e(t){return t.toLowerCase().replace(/-/g,"")}if(ye.emit("transitionEnd",Tt(t)),!Pt&&ne.length>0)for(var n=0;n<Gt;n++){var i=ne[n];I&&X(0,i),Lt&&z&&(i.style[z]=i.style[H]=""),i.classList.remove(St),i.classList.add(Dt)}if(!t||!Pt&&t.target.parentNode===Ht||t.target===Ht&&e(t.propertyName)===e(se)){if(!re){var a=ue;sn(),ue!==a&&(Q(0),ye.emit("indexChanged",Tt()))}F(),(Ae&&!Vt||Ae&&Vt&&Oe.indexOf(ue%jt)===-1)&&wt(),q(),U(),M(),S(),"inner"===Ft&&ye.emit("innerLoaded",Tt()),ve=!1,de=ue}}function $(t){if(!ve){var e,n=ue%jt;switch(n<0&&(n+=jt),t){case"next":e=1;break;case"prev":e=-1;break;case"first":e=-n;break;case"last":e=jt-1-n;break;default:if("number"==typeof t){var i=t%jt;i<0&&(i+=jt),!Vt&&Ut&&(i+=1),e=i-n}}ue+=e,re&&sn(),ue%jt!=de%jt&&V()}}function Z(t){ve||(ue+=t*_t,V())}function tt(){Z(-1)}function et(){Qt&&ue===pe?$(0):Z(1)}function nt(t){if(!ve){for(var e,n=t.target||t.srcElement;null===l(n,"data-nav");)n=n.parentNode;e=Ie=Number(l(n,"data-nav")),$(e)}}function it(){rt(),d(Fe,{"data-action":"stop"}),Fe.innerHTML=Xe+Ge[1],qe=!0}function at(){ot(),d(Fe,{"data-action":"start"}),Fe.innerHTML=Xe.replace("Stop","Start")+Ge[0],qe=!1}function ot(){qe="paused",clearInterval(He)}function rt(){qe!==!0&&(clearInterval(He),He=setInterval(function(){Z(je)},Be))}function st(){qe?at():it()}function ct(){Ke!=L.hidden&&qe!==!1&&(L.hidden?ot():rt()),Ke=L.hidden}function lt(t){switch(t=t||window.event,t.keyCode){case A.LEFT:tt();break;case A.RIGHT:et()}}function ut(t,e){"object"==typeof t&&"object"==typeof e&&t===L.activeElement&&(t.blur(),e.focus())}function dt(t){t=t||window.event;var e=t.keyCode;L.activeElement;switch(e){case A.LEFT:case A.UP:case A.PAGEUP:we.disabled||tt();break;case A.RIGHT:case A.DOWN:case A.PAGEDOWN:Te.disabled||et();break;case A.HOME:$(0);break;case A.END:$(jt-1)}}function ft(t){t=t||window.event;var e=t.keyCode,n=L.activeElement,i=l(n,"data-nav");switch(e){case A.LEFT:case A.PAGEUP:i>0&&ut(n,n.previousElementSibling);break;case A.UP:case A.HOME:0!==i&&ut(n,Le[0]);break;case A.RIGHT:case A.PAGEDOWN:i<ke-1&&ut(n,n.nextElementSibling);break;case A.DOWN:case A.END:i<ke-1&&ut(n,Le[ke-1]);break;case A.ENTER:case A.SPACE:nt(t)}}function ht(){Q(0,Ht.scrollLeft()),de=ue}function pt(t){return t.target||t.srcElement}function vt(t){return"a"===t.tagName.toLowerCase()}function mt(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function yt(t){t=t||window.event,vt(pt(t))&&"touchstart"!==t.type&&mt(t);var e="touchstart"===t.type?t.changedTouches[0]:t;Ze=parseInt(e.clientX),tn=parseInt(e.clientY),Qe=Number(Ht.style[se].replace(ce,"").replace(le,"").replace(/(px|%)/g,"")),"touchstart"===t.type?ye.emit("touchStart",Tt(t)):(ye.emit("dragStart",Tt(t)),nn=!0)}function gt(t){if(t=t||window.event,nn&&"mousemove"===t.type&&!an&&(an=!0),null!==Ze){vt(pt(t))&&"touchmove"!==t.type&&mt(t);var n="touchmove"===t.type?t.changedTouches[0]:t;if(Ve=parseInt(n.clientX)-Ze,Je=parseInt(n.clientY)-tn,s(r(Je,Ve),15)===e.axis){Ot=!0,"touchmove"===t.type?ye.emit("touchMove",Tt(t)):ye.emit("dragMove",Tt(t));var i=Qe;if(It){i+=P?Ve*Gt*100/(Nt*ae):100*Ve/Nt,i+="%"}else i+=Je,i+="px";P&&X(0),Ht.style[se]=ce+i+le}}}function bt(t){if(t=t||window.event,nn&&(nn=!1),Ot){Ot=!1;var e=0===t.type.indexOf("touch")?t.changedTouches[0]:t;if(Ve=parseInt(e.clientX)-Ze,Je=parseInt(e.clientY)-tn,Ze=tn=null,It){var n=-Ve*Gt/Nt;n=Ve>0?Math.floor(n):Math.ceil(n),ue+=n}else{var i=-(Qe+Je);if(i<=0)ue=he;else if(i>=At[At.length-1])ue=pe;else{var a=0;do{a++,ue=Je<0?a+1:a}while(a<ae&&i>=At[a+1])}}0===t.type.indexOf("touch")?ye.emit("touchEnd",Tt(t)):ye.emit("dragEnd",Tt(t)),V()}if(an){an=!1;var o=pt(t);vt(o)&&b(o,{click:function t(e){mt(e),x(o,{click:t})}})}}function xt(){Nt||(Nt=rn()),Rt.style.cssText+="margin: 0px "+(Nt%Xt+qt)/2+"px"}function Et(){Rt.style.height=At[ue+Gt]-At[ue]+"px"}function Ct(){Oe=[];for(var t=!Vt&&Ut?ue-1:ue,e=t%jt%Gt;e<jt;)!Vt&&e+Gt>jt&&(e=jt-Gt),Oe.push(e),e+=Gt;(Vt&&Oe.length*Gt<jt||!Vt&&Oe[0]>0)&&Oe.unshift(0)}function wt(){Ae&&!e.navContainer&&(Ct(),Oe!==Pe&&(Pe.length>0&&Pe.forEach(function(t){d(Le[t],{hidden:""})}),Oe.length>0&&Oe.forEach(function(t){f(Le[t],"hidden")}),Pe=Oe))}function Tt(t){return{container:Ht,slideItems:Bt,navItems:Le,prevButton:we,nextButton:Te,items:Gt,index:ue,indexCached:de,navCurrent:ze,navCurrentCached:Re,slideCount:jt,cloneCount:ie,slideCountNew:ae,event:t||{}}}if(e=t({container:L.querySelector(".slider"),mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,mouseDrag:!1,nested:!1,onInit:!1},e||{}),"object"==typeof e.container&&null!==e.container){if("gallery"===e.mode){e.axis="horizontal",e.edgePadding=!1,e.loop=!0,e.autoHeight=!0,e.slideBy="page";var Mt="tns-fadeIn",St="tns-fadeOut",Dt="tns-normal",Lt=!1;R&&(Mt=e.animateIn,St=e.animateOut,Dt=e.animateNormal,Lt=e.animateDelay)}var At,Nt,kt,Ot,Pt="carousel"===e.mode,It="horizontal"===e.axis,zt=L.createElement("div"),Rt=L.createElement("div"),Ht=e.container,Wt=Ht.parentNode,Bt=Ht.children,jt=Bt.length,Gt=e.items,_t="page"===e.slideBy?Gt:e.slideBy,Ft=e.nested,qt=e.gutter,Ut=e.edgePadding,Xt=!!e.fixedWidth&&e.fixedWidth+Number(e.gutter),Yt=e.arrowKeys,Kt=e.speed,Qt=e.rewind,Vt=!e.rewind&&e.loop,Jt=e.autoHeight,$t=!Xt&&e.responsive,Zt=!1,te=a(),ee=e.lazyload,ne=[],ie=Vt?2*jt:Ut?1:0,ae=Pt?jt+2*ie:jt+ie,oe=!(!Xt||Vt||Ut),re=!Pt||!Vt,se=It?"left":"top",ce="",le="",ue=Pt?ie:0,de=ue,fe=Ut?1:0,he=fe,pe=ae-Gt-fe,ve=!1,me=e.onInit,ye=new E,ge=Ht.id,be=Ht.className,xe=Bt[0].id,Ee=Bt[0].className,Ce=Ht.id||i();if($t&&($t[0]||($t[0]=e.items),Zt=Object.keys($t).sort(function(t,e){return t-e})),e.controls)var we,Te,Me=e.controls,Se=e.controlsText,De=!!e.controlsContainer&&e.controlsContainer;if(e.nav)var Le,Ae=e.nav,Ne=e.navContainer||!1,ke=e.navContainer?jt:Math.ceil(jt/Gt),Oe=[],Pe=Oe,Ie=-1,ze=0,Re=0;if(e.autoplay)var He,We=e.autoplay,Be=e.autoplayTimeout,je="forward"===e.autoplayDirection?1:-1,Ge=e.autoplayText,_e=e.autoplayHoverPause,Fe=e.autoplayButton,qe=!1,Ue=!1,Xe="<span hidden>Stop Animation</span>",Ye=e.autoplayResetOnVisibility,Ke=!1;if(e.touch)var Qe,Ve,Je,$e=e.touch,Ze=null,tn=null;if(e.mouseDrag)var en=e.mouseDrag,nn=!1,an=!1;P&&(se=P,ce="translate",ce+=It?"X(":"Y(",le=")");var on=function(){return Xt?function(){return Math.max(1,Math.min(jt,Math.floor(Nt/Xt)))}:function(){var t;return Nt||(Nt=rn()),Zt.forEach(function(e){Nt>=e&&(t=$t[e])}),Math.max(1,Math.min(jt,t))}}(),rn=function(){return It&&!Xt&&Ut?function(){return zt.clientWidth-2*(Ut+qt)}:function(){return zt.clientWidth}}();ye.on("itemsChanged",function(){pe=ae-Gt-fe,"page"===e.slideBy&&(_t=Gt),Ae&&!e.navContainer&&(ke=Math.ceil(jt/Gt))}),function(){zt.appendChild(Rt),Wt.insertBefore(zt,Ht),Rt.appendChild(Ht),Nt=rn(),($t||Xt)&&(Gt=on(),ye.emit("itemsChanged"));var t=It?"tns-outer tns-hdx":"tns-outer";if(zt.className=t,t=It?"tns-inner":"tns-inner tns-hdy",Rt.className=t,""===Ht.id&&(Ht.id=Ce),t=" tns-slider tns-"+e.mode,t+=k?" tns-subpixel":" tns-no-subpixel",t+=N?" tns-calc":" tns-no-calc",Pt&&(t+=" tns-"+e.axis),Pt&&Jt&&(t+=" tns-hdy"),Ht.className+=t,Ut)if(Xt)xt();else{var i=Ut+qt,a=Ut;Rt.style.cssText+=It?"margin: 0 "+a+"px 0 "+i+"px":"padding: "+i+"px 0 "+a+"px 0"}for(var r=0;r<jt;r++){var s=Bt[r];s.id=Ce+"-item"+r,s.classList.add("tns-item"),!Pt&&Dt&&s.classList.add(Dt),d(s,{"aria-hidden":"true",tabindex:"-1"})}if(Vt||Ut){for(var l=L.createDocumentFragment(),h=L.createDocumentFragment(),p=ie;p--;){var v=p%jt,m=Bt[v].cloneNode(!0);if(f(m,"id"),h.insertBefore(m,h.firstChild),Pt){var x=Bt[jt-1-v].cloneNode(!0);f(x,"id"),l.appendChild(x)}}Ht.insertBefore(l,Ht.firstChild),Ht.appendChild(h),Bt=Ht.children}for(var E=ue;E<ue+Gt;E++){var s=Bt[E];d(s,{"aria-hidden":"false"}),f(s,["tabindex"]),Pt||(s.classList.remove(Dt),s.classList.add(Mt))}if(It){var C=stringSlideFontSize=stringSlideGutter="",D="width:";if(Pt){var A=stringContainerFontSize="";if(A+="width:",Xt?(A+=Xt*ae+"px",D+=Xt+"px"):(O?A+=N?N+"("+100*ae+"% / "+e.items+")":100*ae/e.items+"%":g(),D+=N?N+"(100% / "+ae+")":100/ae+"%"),A+=";",k){var P=window.getComputedStyle(Bt[0]).fontSize;P.indexOf("em")!==-1&&(P=16*Number(P.replace(/r?em/,""))+"px"),stringContainerFontSize=" font-size: 0;",stringSlideFontSize=" font-size: "+P+";"}o(te,"#"+Ce,A+stringContainerFontSize,y(te))}else D+=N?N+"(100% / "+e.items+")":100/e.items+"%",C=w(Gt);if(D+=";",qt&&(Ut||Xt||(Rt.style.marginRight=-qt+"px"),stringSlideGutter="padding-right: "+qt+"px;"),o(te,"#"+Ce+" .tns-item",D+stringSlideGutter+stringSlideFontSize,y(te)),!Pt&&O&&C.split("#").forEach(function(t){t.length>0&&te.insertRule("#"+t,te.cssRules.length)}),Pt&&!k)for(var I=0;I<Bt.length;I++){var z=N?N+"("+100*I+"% / "+ae+")":100*I/ae+"%";te.insertRule("#"+Ce+" .tns-item:nth-child("+(I+1)+") { margin-left: "+z+"; }",te.cssRules.length)}if($t&&O)for(var R=Zt.length,E=0;E<R;E++){var H,B,j=Zt[E],F=$t[j];H=N?N+"(100% * "+ae+" / "+F+")":100*ae/F+"%",H="#"+Ce+"{width: "+H+"}",B=Pt?"":w(F),te.insertRule("@media (min-width: "+j/16+"em) {"+H+B+"}",te.cssRules.length)}}else qt&&(Ut||(Rt.style.marginBottom=-qt+"px"),o(te,"#"+Ce+" .tns-item","margin-bottom: "+qt+"px;",0)),G(),Et();if(Pt?K():O||(T(),ye.on("indexChanged",function(){ue%Gt!=de%Gt&&T()})),navigator.msMaxTouchPoints&&(zt.classList.add("ms-touch"),b(zt,{scroll:ht}),_()),Ae){if(e.navContainer)d(Ne,{"aria-label":"Carousel Pagination"}),Le=Ne.children,[].forEach.call(Le,function(t,e){d(t,{"data-nav":e,tabindex:"-1","aria-selected":"false","aria-controls":Ce+"-item"+e})});else{for(var q="",E=0;E<jt;E++)q+='<button data-nav="'+E+'" tabindex="-1" aria-selected="false" aria-controls="'+Ce+"-item"+E+'" hidden type="button"></button>';q='<div class="tns-nav" aria-label="Carousel Pagination">'+q+"</div>",zt.insertAdjacentHTML("afterbegin",q),[].forEach.call(zt.children,function(t){t.classList.contains("tns-nav")&&(Ne=t)}),Le=Ne.children,wt()}d(Le[0],{tabindex:"0","aria-selected":"true"})}if(We&&(Fe?d(Fe,{"data-action":"stop"}):(Ne||(zt.insertAdjacentHTML("afterbegin",'<div class="tns-nav" aria-label="Carousel Pagination"></div>'),Ne=zt.querySelector(".tns-nav")),Ne.insertAdjacentHTML("beforeend",'<button data-action="stop" type="button">'+Xe+Ge[0]+"</button>"),Fe=Ne.querySelector("[data-action]")),it()),Me&&(e.controlsContainer?(we=De.children[0],Te=De.children[1],d(De,{"aria-label":"Carousel Navigation",tabindex:"0"}),d(we,{"data-controls":"prev"}),d(Te,{"data-controls":"next"}),d(De.children,{"aria-controls":Ce,tabindex:"-1"})):(zt.insertAdjacentHTML("afterbegin",'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+Ce+'" type="button">'+Se[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+Ce+'" type="button">'+Se[1]+"</button></div>"),[].forEach.call(zt.children,function(t){t.classList.contains("tns-controls")&&(De=t)}),we=De.children[0],Te=De.children[1]),Vt||(we.disabled=!0)),Pt){if(W){var U={};U[W]=J,b(Ht,U)}$e&&b(Ht,{touchstart:yt,touchmove:gt,touchend:bt,touchcancel:bt}),en&&b(Ht,{mousedown:yt,mousemove:gt,mouseup:bt,mouseleave:bt})}if(Ae)for(var X=0;X<jt;X++)b(Le[X],{click:nt,keydown:ft});Me&&(b(De,{keydown:dt}),b(we,{click:tt}),b(Te,{click:et})),We&&(b(Fe,{click:st}),_e&&(b(Ht,{mouseover:function(){qe&&(at(),Ue=!0)}}),b(Ht,{mouseout:function(){!qe&&Ue&&(it(),Ue=!1)}})),Ye&&b(document,{visibilitychange:ct})),Yt&&b(document,{keydown:lt}),"inner"===Ft?ye.on("outerResized",function(){u(),ye.emit("innerLoaded",Tt())}):(b(window,{resize:c}),"outer"===Ft&&ye.on("innerLoaded",S)),n(),M(),S(),"function"==typeof me&&me(Tt()),"inner"===Ft&&ye.emit("innerLoaded",Tt())}();var sn=function(){return Vt?function(){var t=he,e=pe;if(Pt&&(t+=_t,e-=_t),Xt&&Nt%(Xt+qt)!=0&&(e-=1),ue>e)for(;ue>=t+jt;)ue-=jt;else if(ue<t)for(;ue<=e-jt;)ue+=jt}:function(){ue=Math.max(he,Math.min(pe,ue))}}(),cn=function(){return Pt?function(t,e){if(e||(e=Y()),oe&&ue===pe){var n=P?100*-((ae-Gt)/ae):100*-(ae/Gt-1);e=Math.max(Number(e.replace("%","")),n)+"%"}I||!t?K(e):C(Ht,se,ce,le,e,Kt,J),It||Et()}:function(){ne=[];var t={};t[W]=t[B]=J,x(Bt[de],t),b(Bt[ue],t),function(){for(var t=de,e=de+Gt;t<e;t++){var n=Bt[t];if(I&&X(Kt,n),Lt&&z){var i=Lt*(t-de)/1e3;n.style[z]=i+"s",n.style[H]=i+"s"}n.classList.remove(Mt),n.classList.add(St),ne.push(n)}}(),function(){for(var t=ue,e=ue+Gt;t<e;t++){var n=Bt[t];if(I&&X(Kt,n),Lt&&z){var i=Lt*(t-ue)/1e3;n.style[z]=i+"s",n.style[H]=i+"s"}n.classList.remove(Dt),n.classList.add(Mt)}}(),W||setTimeout(J,Kt)}}();return{getInfo:Tt,events:ye,goTo:$,destroy:function(){if(te.disabled=!0,Wt.insertBefore(Ht,zt),zt.remove(),zt=Rt=null,Ht.id=ge||"",Ht.className=be||"",f(Ht,["style"]),Vt)for(var t=ie;t--;)Bt[0].remove(),Bt[Bt.length-1].remove();for(var n=jt;n--;)Bt[n].id=xe||"",Bt[n].className=Ee||"";f(Bt,["style","aria-hidden","tabindex"]),Ce=jt=null,Me&&(e.controlsContainer?(f(De,["aria-label","tabindex"]),f(De.children,["aria-controls","tabindex"]),h(De)):De=we=Te=null),Ae&&(e.navContainer?(f(Ne,["aria-label"]),f(Le,["aria-selected","aria-controls","tabindex"]),h(Ne)):Ne=null,Le=null),We&&(e.navContainer?h(Fe):Ne=null,x(document,{visibilitychange:ct})),h(Ht),Yt&&x(document,{keydown:lt}),x(window,{resize:c})}}}}}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
