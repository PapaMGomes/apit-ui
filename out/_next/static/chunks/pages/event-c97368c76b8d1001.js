(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[369],{7285:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},9546:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},a=n(7285);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},6505:function(e,t,n){"use strict";var r=n(930);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=d,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),c=(a=n(148))&&a.__esModule?a:{default:a},u=n(7285),s=n(523),f=n(9546);n(7206);function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,s=p.length;u<s;u++){var f=p[u];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?a=!1:n.add(f);else{var d=o.props[f],l=r[f]||new Set;"name"===f&&i||!l.has(d)?(l.add(d),r[f]=l):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,i.default.cloneElement(e,c)}return i.default.cloneElement(e,{key:a})}))}var m=function(e){var t=e.children,n=i.useContext(u.AmpStateContext),r=i.useContext(s.HeadManagerContext);return i.default.createElement(c.default,{reduceComponentsToState:h,headManager:r,inAmpMode:f.isInAmpMode(n)},t)};t.default=m,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},148:function(e,t,n){"use strict";var r=n(7980),o=n(3227),a=n(8361),i=(n(2191),n(5971)),c=n(2715),u=n(1193);function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294));var d=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e)).emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=d},5953:function(e,t,n){"use strict";n(7294);var r=n(9008),o=n.n(r),a=n(5893);t.Z=function(e){var t=e.title;return(0,a.jsx)(o(),{children:(0,a.jsxs)("title",{children:["APIT - ",t]})})}},6350:function(e,t,n){"use strict";n.d(t,{t:function(){return s},Z:function(){return f}});n(7294);var r=n(8152),o=n(714),a=o.ZP.section.withConfig({displayName:"styles__Container",componentId:"sc-1a0nhdc-0"})([""," background:",";box-shadow:0px 8px 24px ",";"],{borderBottomLeftRadius:"65%",borderBottomRightRadius:"30%",minHeight:"240px","@media (max-width: 640px)":{maxHeight:"34vh"}},(function(e){var t=e.theme,n=e.color;return n||t.colors.primary}),(function(e){var t=e.theme,n=e.color;return n||t.colors.primary})),i=(0,o.ZP)(r.zj).withConfig({displayName:"styles__Content",componentId:"sc-1a0nhdc-1"})(["",""],{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}),c=o.ZP.p.attrs({className:"animate__animated animate__fadeInDown"}).withConfig({displayName:"styles__Title",componentId:"sc-1a0nhdc-2"})([""," color:",";"],{textAlign:"center",width:"60%",fontSize:"2.4rem",fontWeight:"700",cursor:"default",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"700ms","@media (max-width: 640px)":{fontSize:"1.125rem"}},(function(e){return e.theme.colors.bgPrimary})),u=n(5893),s=function(e){return(0,u.jsx)(c,{children:e.children})},f=function(e){var t=e.children,n=e.containerClass,r=e.color;return(0,u.jsx)(a,{color:r,className:n,children:(0,u.jsx)(i,{children:t})})}},9675:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});n(7294);var r=n(5953),o=n(8152),a=n(2927),i=n(6350),c=n(5893),u=function(){return(0,c.jsx)(i.Z,{color:a.m.event.color,containerClass:"h-[40vh] sm:h-[35vh]",children:(0,c.jsx)(i.t,{children:"Eventos"})})},s=function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.Z,{title:"Eventos"}),(0,c.jsx)(o.p_,{children:(0,c.jsx)(u,{})})]})}},9755:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/event",function(){return n(9675)}])},9008:function(e,t,n){e.exports=n(6505)}},function(e){e.O(0,[774,888,179],(function(){return t=9755,e(e.s=t);var t}));var t=e.O();_N_E=t}]);