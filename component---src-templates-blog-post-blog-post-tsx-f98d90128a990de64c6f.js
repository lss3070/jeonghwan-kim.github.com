(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/8Fb":function(e,t,n){var r=n("XKFU"),o=n("UExd")(!0);r(r.S,"Object",{entries:function(e){return o(e)}})},"4M6O":function(e,t,n){"use strict";n("RW0V"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("T39b");var r=n("TqRt");t.__esModule=!0,t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r;return function(){var o=this,a=arguments,i=function(){r=null,n||e.apply(o,a)},c=n&&!r;window.clearTimeout(r),r=setTimeout(i,t),c&&e.apply(o,a)}},t.isReactElement=i,t.shallowComparison=function e(t,n){var r,a=new Set(Object.keys(t).concat(Object.keys(n)));return 0!==(r=[]).concat.apply(r,(0,o.default)(a)).filter((function(r){if("object"==typeof t[r]){if(e(t[r],n[r]))return!0}else if(t[r]!==n[r]&&!i(t[r]))return!0})).length};var o=r(n("RIqP")),a=r(n("q1tI"));function i(e){return!!a.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return a.default.isValidElement(e)}))}},"8jZO":function(e,t,n){},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},INYr:function(e,t,n){"use strict";var r=n("XKFU"),o=n("CkkT")(6),a="findIndex",i=!0;a in[]&&Array(1)[a]((function(){i=!1})),r(r.P+r.F*i,"Array",{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),n("nGyu")(a)},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Kfvu:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.OutboundLink=l,t.trackCustomEvent=function(e){var t=e.category,n=e.action,r=e.label,o=e.value,a=e.nonInteraction,i=void 0!==a&&a,c=e.transport,l=e.hitCallback,s=e.callbackTimeout,u=void 0===s?1e3:s;if("undefined"!=typeof window&&window.ga){var d={eventCategory:t,eventAction:n,eventLabel:r,eventValue:o,nonInteraction:i,transport:c};l&&"function"==typeof l&&(d.hitCallback=function(e,t){void 0===t&&(t=1e3);var n=!1,r=function(){n||(n=!0,e())};return setTimeout(r,t),r}(l,u)),window.ga("send","event",d)}};var o=r(n("pVnL")),a=r(n("8OQS")),i=r(n("q1tI")),c=r(n("17x9"));function l(e){var t=e.eventCategory,n=e.eventAction,r=e.eventLabel,c=e.eventValue,l=(0,a.default)(e,["eventCategory","eventAction","eventLabel","eventValue"]);return i.default.createElement("a",(0,o.default)({},l,{onClick:function(o){"function"==typeof e.onClick&&e.onClick(o);var a=!0;return(0!==o.button||o.altKey||o.ctrlKey||o.metaKey||o.shiftKey||o.defaultPrevented)&&(a=!1),e.target&&"_self"!==e.target.toLowerCase()&&(a=!1),window.ga?window.ga("send","event",{eventCategory:t||"Outbound Link",eventAction:n||"click",eventLabel:r||e.href,eventValue:c,transport:a?"beacon":"",hitCallback:function(){a&&(document.location=e.href)}}):a&&(document.location=e.href),!1}}))}l.propTypes={href:c.default.string,target:c.default.string,eventCategory:c.default.string,eventAction:c.default.string,eventLabel:c.default.string,eventValue:c.default.number,onClick:c.default.func}},OGtf:function(e,t,n){var r=n("XKFU"),o=n("eeVq"),a=n("vhPU"),i=/"/g,c=function(e,t,n,r){var o=String(a(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(r).replace(i,"&quot;")+'"'),c+">"+o+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),r(r.P+r.F*o((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},ORnI:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=void 0;var o=r(n("VUT9"));t.Disqus=o.default;var a=r(n("qASQ"));t.CommentCount=a.default;var i=r(n("vAJ3"));t.CommentEmbed=i.default;var c=o.default;t.default=c},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},TDaC:function(e,t,n){},TSYQ:function(e,t,n){var r;n("LK8F"),function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},UExd:function(e,t,n){var r=n("nh4g"),o=n("DVgA"),a=n("aCFj"),i=n("UqcF").f;e.exports=function(e){return function(t){for(var n,c=a(t),l=o(c),s=l.length,u=0,d=[];s>u;)n=l[u++],r&&!i.call(c,n)||d.push(e?[n,c[n]]:c[n]);return d}}},VUT9:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=void 0;var o=r(n("pVnL")),a=r(n("8OQS")),i=r(n("VbXa")),c=r(n("q1tI")),l=r(n("17x9")),s=n("4M6O"),u=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="whatilearncom",n.embedUrl="https://"+n.shortname+".disqus.com/embed.js",n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,s.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.getDisqusConfig=function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,this.language=e.language}},n.loadInstance=function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById("dsq-embed-scr")?this.reloadInstance():(0,s.insertScript)(this.embedUrl,"dsq-embed-scr",window.document.body))},n.reloadInstance=function(){window&&window.DISQUS&&window.DISQUS.reset({reload:!0})},n.cleanInstance=function(){(0,s.removeScript)("dsq-embed-scr",window.document.body);try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);if(window.document.querySelector('[id^="dsq-app"]')){var t=window.document.getElementById(window.document.querySelector('[id^="dsq-app"]').id);t.parentNode.removeChild(t)}},n.render=function(){var e=this.props,t=(e.config,(0,a.default)(e,["config"]));return c.default.createElement("div",(0,o.default)({id:"disqus_thread"},t,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:86,columnNumber:7}}))},t}(c.default.Component);t.default=u,u.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string,language:l.default.string,remoteAuthS3:l.default.string,apiKey:l.default.string})}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},gSuK:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return z}));var r,o=n("Wbzz"),a=n("q1tI"),i=n.n(a),c=n("B7F5"),l=n("H8eV"),s=n("ORnI"),u=function(e){var t=e.markdownRemark,n={url:""+(e.site.siteMetadata.url+t.fields.slug),title:t.frontmatter.title};return t.fields.beforeGatsby||(n.identifier=t.id),i.a.createElement(s.Disqus,{config:n})},d=(n("f3/d"),n("a1Th"),n("Btvt"),n("XfO3"),n("HEwt"),n("rGqo"),n("rE2o"),n("ioFf"),n("pIFo"),n("LK8F"),n("hHhE"),n("/SS/"),r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),f=function(e){function t(t){var n=e.call(this,t)||this;return n.name="AssertionError",n}return d(t,e),t}(Error);function p(e,t){if(!e)throw new f(t)}n("yt8O"),n("/8Fb"),n("0l/t"),n("bWfx");function m(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],n=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(n))}));return t.length>0?"?"+t.join("&"):""}n("8+KV"),n("RW0V"),n("91GP"),n("V+eJ"),n("VRzm");var h=n("TSYQ"),v=n.n(h),w=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),y=function(){return(y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},g=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{l(r.next(e))}catch(t){a(t)}}function c(e){try{l(r.throw(e))}catch(t){a(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((r=r.apply(e,t||[])).next())}))},b=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(c){a=[6,c],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},E=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},k=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},S=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},O=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function C(e,t,n){var r=t.height,o=t.width,a=E(t,["height","width"]),i=y({height:r,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},a),c=window.open(e,"",Object.keys(i).map((function(e){return e+"="+i[e]})).join(", "));if(n)var l=window.setInterval((function(){try{(null===c||c.closed)&&(window.clearInterval(l),n(c))}catch(e){console.error(e)}}),1e3);return c}var I=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var n=t.props,r=n.onShareWindowClose,o=n.windowHeight,a=void 0===o?400:o,i=n.windowPosition,c=void 0===i?"windowCenter":i,l=n.windowWidth,s=void 0===l?550:l;C(e,y({height:a,width:s},"windowCenter"===c?S(s,a):O(s,a)),r)},t.handleClick=function(e){return g(t,void 0,void 0,(function(){var t,n,r,o,a,i,c,l,s,u;return b(this,(function(d){switch(d.label){case 0:return t=this.props,n=t.beforeOnClick,r=t.disabled,o=t.networkLink,a=t.onClick,i=t.url,c=t.openShareDialogOnClick,l=t.opts,s=o(i,l),r?[2]:(e.preventDefault(),n?(u=n(),k(u)?[4,u]:[3,2]):[3,2]);case 1:d.sent(),d.label=2;case 2:return c&&this.openShareDialog(s),a&&a(e,s),[2]}}))}))},t}return w(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),n=e.className,r=e.disabled,o=e.disabledStyle,a=e.forwardedRef,c=(e.networkLink,e.networkName),l=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),s=e.style,u=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,E(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),d=v()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!r,disabled:!!r},n),f=y(y(l?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},s),r&&o);return i.a.createElement("button",y({},u,{"aria-label":u["aria-label"]||c,className:d,onClick:this.handleClick,ref:a,style:f}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(a.Component),N=function(){return(N=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var q=function(e,t,n,r){function o(o,a){var c=n(o),l=N({},o);return Object.keys(c).forEach((function(e){delete l[e]})),i.a.createElement(I,N({},r,l,{forwardedRef:a,networkName:e,networkLink:t,opts:n(o)}))}return o.displayName="ShareButton-"+e,Object(a.forwardRef)(o)};var j=q("twitter",(function(e,t){var n=t.title,r=t.via,o=t.hashtags,a=void 0===o?[]:o,i=t.related,c=void 0===i?[]:i;return p(e,"twitter.url"),p(Array.isArray(a),"twitter.hashtags is not an array"),p(Array.isArray(c),"twitter.related is not an array"),"https://twitter.com/share"+m({url:e,text:n,via:r,hashtags:a.length>0?a.join(","):void 0,related:c.length>0?c.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400}),_=function(){return(_=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},x=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function T(e){var t=function(t){var n=t.bgStyle,r=t.borderRadius,o=t.iconFillColor,a=t.round,c=t.size,l=x(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return i.a.createElement("svg",_({viewBox:"0 0 64 64",width:c,height:c},l),a?i.a.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:n}):i.a.createElement("rect",{width:"64",height:"64",rx:r,ry:r,fill:e.color,style:n}),i.a.createElement("path",{d:e.path,fill:o}))};return t.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},t}var P=T({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});var A=q("facebook",(function(e,t){var n=t.quote,r=t.hashtag;return p(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+m({u:e,quote:n,hashtag:r})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400}),D=T({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"});var U=q("pocket",(function(e,t){var n=t.title;return p(e,"pocket.url"),"https://getpocket.com/save"+m({url:e,title:n})}),(function(e){return{title:e.title}}),{windowWidth:500,windowHeight:500}),R=T({color:"#EF3F56",networkName:"pocket",path:"M41.084 29.065l-7.528 7.882a2.104 2.104 0 0 1-1.521.666 2.106 2.106 0 0 1-1.522-.666l-7.528-7.882c-.876-.914-.902-2.43-.065-3.384.84-.955 2.228-.987 3.1-.072l6.015 6.286 6.022-6.286c.88-.918 2.263-.883 3.102.071.841.938.82 2.465-.06 3.383l-.015.002zm6.777-10.976C47.463 16.84 46.361 16 45.14 16H18.905c-1.2 0-2.289.82-2.716 2.044-.125.363-.189.743-.189 1.125v10.539l.112 2.096c.464 4.766 2.73 8.933 6.243 11.838.06.053.125.102.19.153l.04.033c1.882 1.499 3.986 2.514 6.259 3.014a14.662 14.662 0 0 0 6.13.052c.118-.042.235-.065.353-.087.03 0 .065-.022.098-.042a15.395 15.395 0 0 0 6.011-2.945l.039-.045.18-.153c3.502-2.902 5.765-7.072 6.248-11.852L48 29.674v-10.52c0-.366-.041-.728-.161-1.08l.022.015z"});function L(e){return function(e){if(Array.isArray(e))return M(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return M(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var V=function(e){var t=e.markdownRemark,n=e.siteMetadata,r={round:!0,size:48},o=n.url+t.fields.slug;return i.a.createElement("div",{className:"flex social-share-btns"},i.a.createElement("div",{className:"mr-1"},i.a.createElement(j,{url:o,hashtags:[].concat(L(t.frontmatter.tags||[]),[n.title.replace(/\s/g,"")])},i.a.createElement(P,r))),i.a.createElement("div",{className:"mr-1"},i.a.createElement(A,{url:o,hashtag:"#"+n.title.replace(/\s/g,"")},i.a.createElement(D,r))),i.a.createElement("div",{className:"mr-1"},i.a.createElement(U,{url:o},i.a.createElement(R,r))))},F=function(){function e(e,t,n){var r=this;this.targets=Array.from(e.querySelectorAll("a")),this.refs=t,this.sensitivity=n||-10,window.addEventListener("scroll",(function(){return r.onScroll()}))}var t=e.prototype;return t.onScroll=function(){var e=this;this.isOnTopOfDoc(this.refs[0])||this.deactiveateTarget(),this.refs.forEach((function(t){if(e.isOnTopOfDoc(t)){e.deactiveateTarget();var n=e.findTarget(t.id);n&&e.activate(n)}}))},t.isOnTopOfDoc=function(e){return document.documentElement.scrollTop-e.offsetTop>=this.sensitivity},t.deactiveateTarget=function(){var e=this;this.targets.forEach((function(t){return e.deactivate(t)}))},t.findTarget=function(e){return this.targets.filter((function(t){return decodeURIComponent(t.attributes.href.value.replace(/^#/,""))===e}))[0]},t.activate=function(e){e.classList.add("active")},t.deactivate=function(e){e.classList.remove("active")},e}(),W=(n("hcKI"),function(e){var t=e.tableOfContents;return Object(a.useEffect)((function(){var e=document.querySelector(".post-content"),t=Array.from(e.querySelectorAll("h1,h2,h3,h4,h5,h6")).filter((function(e){return e.id})),n=document.querySelector(".post-toc");new F(n,t)}),[]),i.a.createElement("div",{className:"post-toc",dangerouslySetInnerHTML:{__html:t}})}),B=(n("jNdD"),n("Kfvu")),K=function(e){var t=e.video;return i.a.createElement("div",{className:"post-video"},i.a.createElement("a",{id:"post-video",href:t.url,onClick:function(e){Object(B.trackCustomEvent)({category:"포스트/관련영상",action:"click",label:t.title})}},i.a.createElement("img",{src:t.thumb}),i.a.createElement("div",{className:"post-video-overlay"},i.a.createElement("div",{className:"video-icon-wrapper"},i.a.createElement("div",{className:"video-icon"})),i.a.createElement("div",{className:"post-video-title"},t.title?t.title:"영상 더보기"," »"))))},H=(n("INYr"),n("vwPu"),n("tUrg"),n("8jZO"),function(e){var t=e.className,n=e.type,r=e.link,a=e.to,c=e.children,l=e.onClick;return r?i.a.createElement(o.Link,{className:(t||"")+" btn btn-"+(n||"primary"),to:a,onClick:function(){return l}},c):i.a.createElement("button",{className:(t||"")+" btn btn-"+(n||"primary"),onClick:function(){return l()}},c)}),Q=function(e){var t=e.series,n=e.posts,r=e.nodeId,a=e.lite,c=n.findIndex((function(e){return e.id===r})),l=0===c?null:n[c-1],s=c===n.length?null:n[c+1];return console.log(s),a?i.a.createElement("div",{className:"series-nav mb-2 py-3 px-2"},i.a.createElement("div",{className:"mb-1"},i.a.createElement("span",{className:"series-title"},t.title),i.a.createElement("span",{className:"series-order"},"(",i.a.createElement("span",{className:"active"},c+1),"/",n.length,")")),i.a.createElement("div",{className:"series-controls flex"},l&&i.a.createElement("span",{className:"prev align-left"},i.a.createElement(H,{link:!0,type:"secondary",to:l.fields.slug},"« 이전")),s&&i.a.createElement("span",{className:"next align-right"},i.a.createElement(H,{link:!0,type:"secondary",to:s.fields.slug},"다음 »")))):i.a.createElement("div",{className:"series-navigator px-2 pt-3 pb-2"},i.a.createElement("h3",{className:"series-title"},t.title),i.a.createElement("div",{className:"post-list"},i.a.createElement("ul",null,n.map((function(e){var t=e.id===r;return i.a.createElement("li",{className:t?"active":"",key:e.fields.slug},t?i.a.createElement("div",{className:"active"},e.frontmatter.title):i.a.createElement(o.Link,{to:e.fields.slug},e.frontmatter.title))})))))},z=(n("TDaC"),t.default=function(e){var t=e.data,n=e.pageContext;console.log("data",t);var r=t.markdownRemark,a=t.series,s=t.video,d=n.previous,f=n.next;return i.a.createElement(c.a,null,i.a.createElement(l.a,{title:r.frontmatter.title}),i.a.createElement("article",{id:"post",className:"post container",itemScope:!0,itemType:"http://schema.org/BlogPosting"},i.a.createElement("div",{className:"flex"},(r.tableOfContents||a||s)&&i.a.createElement("aside",{className:"post-aside"},r.tableOfContents&&i.a.createElement(W,{tableOfContents:r.tableOfContents}),a&&i.a.createElement(Q,{lite:!0,series:a,nodeId:r.id,posts:t.allMarkdownRemark.nodes}),s&&i.a.createElement(K,{video:s})),i.a.createElement("main",{className:"post-container flex-1"},i.a.createElement("header",{className:"mb-7 post-header"},i.a.createElement("h1",{className:"mt-0 mb-1 post-title",itemProp:"name headline"},r.frontmatter.title),i.a.createElement("div",{className:"post-meta"},i.a.createElement("time",{className:"date",itemProp:"datePublished",dateTime:r.fields.date},r.fields.date))),i.a.createElement("div",{className:"post-content",itemProp:"articleBody",dangerouslySetInnerHTML:{__html:r.html}}),r.frontmatter.tags&&r.frontmatter.tags.length>0&&i.a.createElement("div",{className:"mt-7"},i.a.createElement("span",{className:"post-tags"},r.frontmatter.tags.map((function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.Link,{className:"btn btn-secondary","data-tag-name":e,to:"/tags/#"+e},"#",e)," ")})))),i.a.createElement(V,{markdownRemark:r,siteMetadata:t.site.siteMetadata}))),i.a.createElement("footer",{className:"post-footer footer-container py-10 mt-8"},(d||f)&&i.a.createElement("div",{className:"sibling-nav mb-4"},d&&i.a.createElement(H,{link:!0,type:"secondary",to:d.fields.slug},"« ",d.frontmatter.title),f&&i.a.createElement(H,{link:!0,type:"secondary",to:f.fields.slug},f.frontmatter.title," »")),a&&i.a.createElement(Q,{series:a,nodeId:r.id,posts:t.allMarkdownRemark.nodes}),i.a.createElement(u,{markdownRemark:r,site:t.site}))))},"2183261647")},hcKI:function(e,t,n){},jNdD:function(e,t,n){},qASQ:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=void 0;var o=r(n("pVnL")),a=r(n("8OQS")),i=r(n("VbXa")),c=r(n("q1tI")),l=r(n("17x9")),s=n("4M6O"),u=(0,s.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="whatilearncom",n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,s.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?u():(0,s.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,s.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var e=this.props,t=e.config,n=e.placeholder,r=(0,a.default)(e,["config","placeholder"]);return c.default.createElement("span",(0,o.default)({className:"disqus-comment-count","data-disqus-identifier":t.identifier,"data-disqus-url":t.url},r,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:53,columnNumber:7}}),n)},t}(c.default.Component);t.default=d,d.defaultProps={placeholder:"..."},d.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string}),placeholder:l.default.string}},tUrg:function(e,t,n){"use strict";n("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},vAJ3:function(e,t,n){"use strict";n("xfY5"),n("a1Th"),n("Btvt");var r=n("TqRt");t.__esModule=!0,t.default=void 0;var o=r(n("VbXa")),a=r(n("q1tI")),i=r(n("17x9")),c=function(e){function t(){return e.apply(this,arguments)||this}(0,o.default)(t,e);var n=t.prototype;return n.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},n.render=function(){return a.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentEmbed.jsx",lineNumber:17,columnNumber:13}})},t}(a.default.Component);t.default=c,c.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},c.propTypes={commentId:i.default.string.isRequired,width:i.default.number,height:i.default.number,showMedia:i.default.bool,showParentComment:i.default.bool}},vwPu:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-blog-post-blog-post-tsx-f98d90128a990de64c6f.js.map