(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{169:function(t,e,n){var content=n(176);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("e3033dee",content,!0,{sourceMap:!1})},170:function(t,e,n){var content=n(181);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("23018d52",content,!0,{sourceMap:!1})},171:function(t,e,n){var content=n(184);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("0c862793",content,!0,{sourceMap:!1})},172:function(t,e,n){var content=n(186);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("40ed6d66",content,!0,{sourceMap:!1})},173:function(t,e,n){var content=n(188);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("769dc293",content,!0,{sourceMap:!1})},174:function(t,e,n){var content=n(190);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("55d2f077",content,!0,{sourceMap:!1})},175:function(t,e,n){"use strict";var r=n(169);n.n(r).a},176:function(t,e,n){(t.exports=n(50)(!1)).push([t.i,".header{display:flex;align-items:center;flex-direction:row;margin-left:9px;position:absolute;top:30px;width:95vw;z-index:2}.header img{border-radius:50%;height:40px;margin-right:3%}.header a{font-weight:700;font-size:1rem}@media only screen and (min-width:600px){.header{margin-left:10px;width:405px;top:25px}}",""])},177:function(t,e,n){"use strict";var r=n(3),o=n(16),c=n(20),l=n(100),h=n(52),d=n(9),f=n(53).f,v=n(68).f,m=n(10).f,w=n(178).trim,x=r.Number,y=x,$=x.prototype,k="Number"==c(n(67)($)),E="trim"in String.prototype,O=function(t){var e=h(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,c=(e=E?e.trim():w(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,d=l.length;i<d;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,r)}}return+e};if(!x(" 0o1")||!x("0b1")||x("+0x1")){x=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof x&&(k?d(function(){$.valueOf.call(n)}):"Number"!=c(n))?l(new y(O(e)),n,x):O(e)};for(var _,S=n(8)?f(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;S.length>C;C++)o(y,_=S[C])&&!o(x,_)&&m(x,_,v(y,_));x.prototype=$,$.constructor=x,n(11)(r,"Number",x)}},178:function(t,e,n){var r=n(7),o=n(19),c=n(9),l=n(179),h="["+l+"]",d=RegExp("^"+h+h+"*"),f=RegExp(h+h+"*$"),v=function(t,e,n){var o={},h=c(function(){return!!l[t]()||"​"!="​"[t]()}),d=o[t]=h?e(m):l[t];n&&(o[n]=d),r(r.P+r.F*h,"String",o)},m=v.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(f,"")),t};t.exports=v},179:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},180:function(t,e,n){"use strict";var r=n(170);n.n(r).a},181:function(t,e,n){(t.exports=n(50)(!1)).push([t.i,".navigation{display:flex;flex-direction:row;justify-content:space-between;position:absolute;width:95vw;top:15px;align-self:center;z-index:2}.navigation-element{border-radius:2px;height:3px;background:#9e9e9e}.navigation-active{background:#fff}@media only screen and (min-width:600px){.navigation{width:405px;top:11px}}",""])},182:function(t,e,n){function r(t){return-1!==t.type.indexOf("mouse")?t.clientX:t.touches[0].clientX}function o(t){return-1!==t.type.indexOf("mouse")?t.clientY:t.touches[0].clientY}var c=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}(),l={install:function(t,e){function n(t){var e=this.$$touchObj,n=t.type.indexOf("touch")>=0,c=t.type.indexOf("mouse")>=0;n&&(e.lastTouchStartTime=t.timeStamp),c&&e.lastTouchStartTime&&t.timeStamp-e.lastTouchStartTime<350||e.touchStarted||(w(this),e.touchStarted=!0,e.touchMoved=!1,e.swipeOutBounded=!1,e.startX=r(t),e.startY=o(t),e.currentX=0,e.currentY=0,e.touchStartTime=t.timeStamp,m(t,this,"start"))}function l(t){var n=this.$$touchObj;if(n.currentX=r(t),n.currentY=o(t),n.touchMoved){if(!n.swipeOutBounded){var c=e.swipeTolerance;n.swipeOutBounded=Math.abs(n.startX-n.currentX)>c&&Math.abs(n.startY-n.currentY)>c}}else{var l=e.tapTolerance;n.touchMoved=Math.abs(n.startX-n.currentX)>l||Math.abs(n.startY-n.currentY)>l,n.touchMoved&&m(t,this,"moved")}n.touchMoved&&m(t,this,"moving")}function h(){var t=this.$$touchObj;x(this),t.touchStarted=t.touchMoved=!1,t.startX=t.startY=0}function d(t){var n=this.$$touchObj,r=t.type.indexOf("touch")>=0,o=t.type.indexOf("mouse")>=0;if(r&&(n.lastTouchEndTime=t.timeStamp),!(o&&n.lastTouchEndTime&&t.timeStamp-n.lastTouchEndTime<350))if(n.touchStarted=!1,x(this),m(t,this,"end"),n.touchMoved){if(!n.swipeOutBounded){var c,l=e.swipeTolerance;c=Math.abs(n.startX-n.currentX)<l?n.startY>n.currentY?"top":"bottom":n.startX>n.currentX?"left":"right",n.callbacks["swipe."+c]?m(t,this,"swipe."+c,c):m(t,this,"swipe",c)}}else n.callbacks.longtap&&t.timeStamp-n.touchStartTime>e.longTapTimeInterval?(t.preventDefault(),m(t,this,"longtap")):m(t,this,"tap")}function f(){w(this)}function v(){x(this)}function m(t,e,n,param){var r=e.$$touchObj.callbacks[n]||[];if(0===r.length)return null;for(var i=0;i<r.length;i++){var o=r[i];o.modifiers.stop&&t.stopPropagation(),o.modifiers.prevent&&t.preventDefault(),o.modifiers.self&&t.target!==t.currentTarget||"function"==typeof o.value&&(param?o.value(param,t):o.value(t))}}function w(t){var n=t.$$touchClass||e.touchClass;n&&t.classList.add(n)}function x(t){var n=t.$$touchClass||e.touchClass;n&&t.classList.remove(n)}e=Object.assign({},{disableClick:!1,tapTolerance:10,swipeTolerance:30,longTapTimeInterval:400,touchClass:""},e||{}),t.directive("touch",{bind:function(t,e){t.$$touchObj=t.$$touchObj||{callbacks:{},hasBindTouchEvents:!1};var r=e.arg||"tap";switch(r){case"swipe":var o=e.modifiers;if(o.left||o.right||o.top||o.bottom){for(var i in e.modifiers)if(["left","right","top","bottom"].indexOf(i)>=0){var m="swipe."+i;t.$$touchObj.callbacks[m]=t.$$touchObj.callbacks[m]||[],t.$$touchObj.callbacks[m].push(e)}}else t.$$touchObj.callbacks.swipe=t.$$touchObj.callbacks.swipe||[],t.$$touchObj.callbacks.swipe.push(e);break;default:t.$$touchObj.callbacks[r]=t.$$touchObj.callbacks[r]||[],t.$$touchObj.callbacks[r].push(e)}if(!t.$$touchObj.hasBindTouchEvents){var w=!!c&&{passive:!0};t.addEventListener("touchstart",n,w),t.addEventListener("touchmove",l,w),t.addEventListener("touchcancel",h),t.addEventListener("touchend",d),t.addEventListener("mousedown",n),t.addEventListener("mousemove",l),t.addEventListener("mouseup",d),t.addEventListener("mouseenter",f),t.addEventListener("mouseleave",v),t.$$touchObj.hasBindTouchEvents=!0}},unbind:function(t){t.removeEventListener("touchstart",n),t.removeEventListener("touchmove",l),t.removeEventListener("touchcancel",h),t.removeEventListener("touchend",d),t.removeEventListener("mousedown",n),t.removeEventListener("mousemove",l),t.removeEventListener("mouseup",d),t.removeEventListener("mouseenter",f),t.removeEventListener("mouseleave",v),delete t.$$touchObj}}),t.directive("touch-class",{bind:function(t,e){t.$$touchClass=e.value},unbind:function(t){delete t.$$touchClass}})}};t.exports=l},183:function(t,e,n){"use strict";var r=n(171);n.n(r).a},184:function(t,e,n){(t.exports=n(50)(!1)).push([t.i,".story-content{height:100%;width:100%;position:absolute;top:0;background-position:50%;background-size:cover;-webkit-animation:zoomin 10s ease-in infinite;animation:zoomin 10s ease-in infinite;transition:all .5s ease-in-out;z-index:1}.story-parent{height:100%;overflow:hidden;position:relative}.info-block,.story-content img{width:100%;height:100%}.info-block{display:flex;position:absolute;z-index:1;justify-content:center;align-items:center}.info-block h1{text-align:center;margin:0;background-color:rgba(0,188,212,.7);padding:25px 20px;font-size:2rem}.cta-block{display:flex;flex-direction:column;width:100%;z-index:1;position:absolute;justify-content:flex-end;align-items:center;bottom:0;background-image:linear-gradient(rgba(0,0,0,.03137),#151515);cursor:pointer}.cta-block svg{width:35px;height:35px;fill:#fff}.cta-block span{margin-bottom:20px;margin-top:2px;font-size:1.2rem;font-weight:600}@media only screen and (min-width:600px){.story-content{width:420px}}@-webkit-keyframes zoomin{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.3);transform:scale(1.3)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes zoomin{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.3);transform:scale(1.3)}to{-webkit-transform:scale(1);transform:scale(1)}}",""])},185:function(t,e,n){"use strict";var r=n(172);n.n(r).a},186:function(t,e,n){(t.exports=n(50)(!1)).push([t.i,".container{display:flex;width:100vw;flex-direction:column}@media only screen and (min-width:600px){.container{width:420px;margin-bottom:0}}",""])},187:function(t,e,n){"use strict";var r=n(173);n.n(r).a},188:function(t,e,n){(t.exports=n(50)(!1)).push([t.i,".Exception{display:flex;width:100%;flex-direction:column;justify-content:center;align-items:center}.Exception h1{margin:0;font-size:2rem}.Exception p{font-size:1.5rem}",""])},189:function(t,e,n){"use strict";var r=n(174);n.n(r).a},190:function(t,e,n){(t.exports=n(50)(!1)).push([t.i,".base{background-position:50%;background-size:cover}section{background:rgba(38,38,38,.98039);color:#fff;display:flex;flex-direction:row;justify-content:center;height:100vh;width:100%}",""])},191:function(t,e,n){"use strict";n.r(e);n(54);var r=n(6),o={props:{brandLogo:String,brandName:String}},c=(n(175),n(18)),l=Object(c.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("img",{attrs:{src:this.brandLogo}}),this._v(" "),e("a",[this._v(this._s(this.brandName))])])},[],!1,null,null,null).exports,h=(n(177),{props:{storiesCount:Number},mounted:function(){var t=this;this.$root.$on("ActiveNavigation",function(e){for(var n=0;n<t.storiesCount;n++)t.$refs.stories[n].style.backgroundColor="#9e9e9e";t.$refs.stories[e].style.backgroundColor="#fff"})}}),d=(n(180),Object(c.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navigation"},t._l(t.storiesCount,function(e){return n("div",{key:e,ref:"stories",refInFor:!0,staticClass:"navigation-element",style:{width:"calc(95% / "+t.storiesCount+")"},attrs:{"v-bind:ref":"nav-"+e}})}),0)},[],!1,null,null,null).exports),f=(n(101),n(0)),v=n(182),m=n.n(v);f.a.use(m.a);var w=0,x={props:{rawData:Object},data:function(){return{storyImage:this.rawData.stories[w].image,storyHeadline:this.rawData.stories[w].headline,ctaEnabled:this.rawData.stories[w].ctaEnabled,buttonLabel:this.rawData.stories[w].button.label}},mounted:function(){this.$root.$emit("ActiveNavigation",w)},methods:{ctaClick:function(){var t=this.rawData.stories[w].button;if(void 0!==t)switch(t.action){case"webpage":window.open(t.result,"_blank").focus()}},swipeHandler:function(t){if(void 0!==t)switch(t){case"left":w<this.rawData.stories.length-1&&(w+=1,this.changeStory());break;case"right":w>0&&(w-=1,this.changeStory())}},convertHex:function(t,e){return t=t.replace("#",""),"rgba("+parseInt(t.substring(0,2),16)+","+parseInt(t.substring(2,4),16)+","+parseInt(t.substring(4,6),16)+","+e/100+")"},changeStory:function(){this.$root.$emit("ActiveNavigation",w),this.$root.$emit("BaseImage",this.rawData.stories[w].image),this.storyImage=this.rawData.stories[w].image,this.storyHeadline=this.rawData.stories[w].headline,"true"===this.rawData.stories[w].ctaEnabled?(this.$refs.ctaBlock.style.display="flex",this.buttonLabel=this.rawData.stories[w].button.label):this.$refs.ctaBlock.style.display="none",this.$refs.Headline.style.backgroundColor=this.convertHex(this.rawData.stories[w].headlineColor,this.rawData.stories[w].headlineOpacity)}}},y=(n(183),{components:{StoryHeader:l,StoryNavigation:d,StoryContent:Object(c.a)(x,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"touch",rawName:"v-touch:swipe",value:t.swipeHandler,expression:"swipeHandler",arg:"swipe"}],staticClass:"story-parent"},[n("div",{staticClass:"story-content",style:{"background-image":"url("+t.storyImage+")"}}),t._v(" "),n("div",{staticClass:"info-block"},[n("h1",{ref:"Headline"},[t._v(t._s(t.storyHeadline))])]),t._v(" "),n("div",{ref:"ctaBlock",staticClass:"cta-block",on:{click:t.ctaClick}},[n("svg",{staticStyle:{"enable-background":"new 0 0 284.929 284.929"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"284.929px",height:"284.929px",viewBox:"0 0 284.929 284.929","xml:space":"preserve"}},[n("g",[n("path",{attrs:{d:"M282.082,195.285L149.028,62.24c-1.901-1.903-4.088-2.856-6.562-2.856s-4.665,0.953-6.567,2.856L2.856,195.285\n\t\tC0.95,197.191,0,199.378,0,201.853c0,2.474,0.953,4.664,2.856,6.566l14.272,14.271c1.903,1.903,4.093,2.854,6.567,2.854\n\t\tc2.474,0,4.664-0.951,6.567-2.854l112.204-112.202l112.208,112.209c1.902,1.903,4.093,2.848,6.563,2.848\n\t\tc2.478,0,4.668-0.951,6.57-2.848l14.274-14.277c1.902-1.902,2.847-4.093,2.847-6.566\n\t\tC284.929,199.378,283.984,197.188,282.082,195.285z"}})])]),t._v(" "),n("span",[t._v(t._s(t.buttonLabel))])])])},[],!1,null,null,null).exports},props:{rawData:Object}}),$=(n(185),Object(c.a)(y,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("StoryHeader",{attrs:{"brand-logo":this.rawData.logo,"brand-name":this.rawData.brand}}),this._v(" "),e("StoryNavigation",{attrs:{"stories-count":this.rawData.stories.length}}),this._v(" "),e("StoryContent",{attrs:{"raw-data":this.rawData}})],1)},[],!1,null,null,null).exports),k=(n(187),Object(c.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"Exception"},[e("h1",[this._v("Error!")]),this._v(" "),e("p",[this._v("Profile not found!")])])}],!1,null,null,null).exports),E=n(91),O=n.n(E),_={components:{BaseStory:$,StoryException:k},asyncData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.route,t.next=3,O.a.get("http://www.mocky.io/v2/5cdfd16a3300001212608b2f").catch(function(t){return{isValid:!1}});case 3:if(void 0===(n=t.sent).data){t.next=8;break}return t.abrupt("return",{rawData:n.data,isValid:!0});case 8:return t.abrupt("return",{isValid:!1});case 9:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),mounted:function(){var t=this;this.$root.$on("BaseImage",function(e){t.$refs.baseContainer.style.backgroundImage="url('"+e+"')"})}},S=(n(189),Object(c.a)(_,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"baseContainer",staticClass:"base"},[e("script",{attrs:{src:"http://localhost:8098"}}),this._v(" "),e("section",[this.isValid?e("BaseStory",{attrs:{"raw-data":this.rawData}}):e("StoryException")],1)])},[],!1,null,null,null));e.default=S.exports}}]);