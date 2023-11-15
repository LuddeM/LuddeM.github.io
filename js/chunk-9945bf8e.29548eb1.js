(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9945bf8e"],{7754:function(t,e,n){"use strict";var o=n("7c58"),s=n.n(o);s.a},"7c58":function(t,e,n){},acca:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"projects"},[n("PageDescription",{attrs:{title:t.IntroText.title,description:t.IntroText.text}}),n("ProjectContainer")],1)},s=[],r=n("6946"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"project-container"},[n("section",{staticClass:"section is-hidden-tablet"},[n("div",{staticClass:"columns is-multiline is-centered"},t._l(t.projectItems,(function(e,o){return n("div",{key:"project-item-"+o,staticClass:"column"},[n("ProjectCard",{attrs:{projectItemInfo:e},on:{itemPressed:t.onItemPressed}})],1)})),0)]),n("section",{staticClass:"section is-hidden-mobile"},t._l(t.projectItems,(function(e,o){return n("div",{key:"project-item-"+o},[n("ProjectRow",{attrs:{projectItemInfo:e},on:{itemPressed:t.onItemPressed}})],1)})),0)])},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"project-item",on:{click:t.onCardPress}},[t.IsCardSelected?n("span",[n("ProjectCardBack",{attrs:{projectItemInfo:t.projectItemInfo}})],1):n("span",[n("ProjectCardFront",{attrs:{projectItemInfo:t.projectItemInfo}})],1)])},l=[],d=n("2b0e"),u=n("0819"),m=n("7dfd"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card is-project-card is-front"},[n("div",{staticClass:"card-image has-text-centered"},[n("figure",{staticClass:"image"},[n("img",{attrs:{src:t.projectItemInfo.image,alt:"Placeholder image"}})])]),t.showText?n("div",{staticClass:"card-content has-text-centered centered-in-parent"},[n("div",{staticClass:"text-background"},[n("h1",{staticClass:"title is-5"},[t._v(t._s(t.projectItemInfo.title))]),n("h2",{staticClass:"subtitle is-6"},[t._v("Read More..")])])]):t._e()])},I=[],f=d["a"].extend({name:"ProjectCardFront",props:{projectItemInfo:{type:u["a"],required:!0},showText:{type:Boolean,required:!1,default:!0}},data:function(){return{Icons:m["b"]}}}),j=f,h=n("2877"),C=Object(h["a"])(j,p,I,!1,null,null,null),P=C.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card is-project-card is-back"},[n("div",{staticClass:"card-content has-text-centered"},[n("h1",{staticClass:"title is-4"},[t._v(t._s(t.projectItemInfo.title))]),n("h2",{staticClass:"subtitle is-6"},[t._v(t._s(t.projectItemInfo.subtitle))]),n("div",{staticClass:"content has-text-left"},[n("span",{domProps:{innerHTML:t._s(t.projectItemInfo.summary)}}),n("PointsList",{attrs:{points:t.projectItemInfo.infoPoints}})],1),null!==t.projectItemInfo.videoLink?n("section",{staticClass:"section has-text-centered",staticStyle:{position:"relative","padding-top":"56.25%"}},[n("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:t.projectItemInfo.videoLink,title:t.projectItemInfo.title,frameborder:"0",allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]):t._e(),null!==t.projectItemInfo.mediaItems?n("span",[n("LightBoxMedia",{attrs:{mediaItems:t.projectItemInfo.mediaItems,mediaPerRow:2,numberOfRows:3}})],1):t._e()])])},w=[],b=n("ca19"),x=n("7e7a"),_=d["a"].extend({name:"ProjectCardBack",props:{projectItemInfo:{type:u["a"],required:!0}},components:{LightBoxMedia:b["a"],PointsList:x["a"]},data:function(){return{Icons:m["b"]}}}),g=_,k=Object(h["a"])(g,v,w,!1,null,null,null),y=k.exports,R=d["a"].extend({name:"ProjectItem",props:{projectItemInfo:{type:u["a"],required:!0}},components:{ProjectCardFront:P,ProjectCardBack:y},methods:{onCardPress:function(t){if(!0!==this.IsCardSelected){this.$emit("itemPressed",this),this.IsCardSelected=!0;var e=t.target;this.$nextTick((function(){if(e.scrollIntoView({behavior:"auto",block:"center",inline:"start"}),!(window.innerHeight+Math.round(window.scrollY)>=document.body.offsetHeight)){var t=this.$el.scrollHeight;window.scrollBy(0,-t/5)}}))}}},data:function(){return{Icons:m["b"],IsCardSelected:!1}}}),$=R,E=Object(h["a"])($,i,l,!1,null,null,null),S=E.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"project-row"},[n("ProjectRowCard",{attrs:{projectItemInfo:t.projectItemInfo},on:{itemPressed:t.onItemPressed}}),t.IsItemSelected?n("ProjectInfoWindow",{attrs:{projectItemInfo:t.projectItemInfo},on:{onClose:t.onClosed}}):t._e()],1)},M=[],O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"project-row-card",class:{"click-disabled":!1===t.canExpand},on:{click:t.onReadMorePressed}},[n("ProjectRowContent",{attrs:{projectItemInfo:t.projectItemInfo,showExtended:!1}}),t.canExpand?n("div",{staticClass:"has-text-centered",attrs:{id:"show-full-project-info-button"}},[n("h2",{staticClass:"subtitle is-6"},[t._v("See More")]),n("img",{attrs:{src:t.Icons.arrowDown}})]):t._e()],1)},B=[],T=n("1efc"),q=d["a"].extend({name:"ProjectRowCard",props:{projectItemInfo:{type:u["a"],required:!0}},methods:{onReadMorePressed:function(){console.log("Pressed For More Info"),this.$emit("itemPressed",!0)}},data:function(){return{Icons:m["b"]}},computed:{canExpand:function(){return null!==this.projectItemInfo.videoLink||null!==this.projectItemInfo.mediaItems}},components:{ProjectRowContent:T["a"]}}),F=q,H=(n("7754"),Object(h["a"])(F,O,B,!1,null,"667f8acf",null)),D=H.exports,W=n("60b4"),J=d["a"].extend({name:"ProjectRow",props:{projectItemInfo:{type:u["a"],required:!0}},components:{ProjectRowCard:D,ProjectInfoWindow:W["a"]},methods:{onItemPressed:function(t){this.IsItemSelected=t,this.$emit("itemPressed",this)},onClosed:function(){this.onItemPressed(!1)}},data:function(){return{Icons:m["b"],IsItemSelected:!1}}}),V=J,Y=Object(h["a"])(V,L,M,!1,null,null,null),z=Y.exports,A=n("109f"),G=d["a"].extend({name:"ProjectContainer",components:{ProjectCard:S,ProjectRow:z},data:function(){return{projectItems:Object(A["a"])(),currentCard:null}},methods:{onItemPressed:function(t){null!==this.currentCard&&(this.currentCard.IsCardSelected=!1),this.currentCard=t}}}),K=G,N=Object(h["a"])(K,c,a,!1,null,null,null),Q=N.exports,U=n("3909"),X={name:"Projects",data:function(){return{IntroText:U["a"].Introduction}},mounted:function(){document.title="Projects | Ludvig's Website"},components:{PageDescription:r["a"],ProjectContainer:Q}},Z=X,tt=Object(h["a"])(Z,o,s,!1,null,null,null);e["default"]=tt.exports}}]);
//# sourceMappingURL=chunk-9945bf8e.29548eb1.js.map