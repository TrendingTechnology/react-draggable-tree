/*!
 *  name: @feizheng/react-draggable-tree
 *  description: Draggable tree for react.
 *  homepage: https://github.com/afeiship/react-draggable-tree#readme
 *  version: 1.0.5
 *  date: 2020-09-04T06:01:26.306Z
 *  license: MIT
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("prop-types"),require("react"),require("@feizheng/noop"),require("@feizheng/react-tree"),require("classnames"),require("react-dom"),require("sortablejs")):"function"==typeof define&&define.amd?define(["prop-types","react","@feizheng/noop","@feizheng/react-tree","classnames","react-dom","sortablejs"],t):"object"==typeof exports?exports.ReactDraggableTree=t(require("prop-types"),require("react"),require("@feizheng/noop"),require("@feizheng/react-tree"),require("classnames"),require("react-dom"),require("sortablejs")):e.ReactDraggableTree=t(e["prop-types"],e.react,e["@feizheng/noop"],e["@feizheng/react-tree"],e.classnames,e["react-dom"],e.sortablejs)}(window,(function(e,t,n,r,o,i,s){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){
/*!
 * name: @feizheng/next-deep-clone
 * description: A fastest deep clone implement.
 * url: https://github.com/afeiship/next-deep-clone
 * version: 1.0.0
 * date: 2019-12-17 11:36:32
 * license: MIT
 */
!function(){var t=t||this||window||Function("return this")(),r=t.nx||n(8),o=Object.prototype.toString;r.deepClone=function(e){var t;return"object"==typeof e&&e?"[object Array]"===o.apply(e)?(t=[],r.forEach(e,(function(e,n){t[n]=r.deepClone(e)})),t):(t={},r.forIn(e,(function(e,n){t[e]=r.deepClone(n)})),t):e},e.exports&&(e.exports=r.deepClone)}()},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t){e.exports=i},function(e,t){e.exports=s},function(e,t,n){(function(e,r){var o;(function(){var i,s,c,a,u,_,f="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,p=f||l||Function("return this")(),h=(t&&!t.nodeType&&t&&"object"==typeof r&&r&&r.nodeType,p.nx=p.nx||{BREAKER:{},VERSION:"2.6.0",DEBUG:!1,GLOBAL:p});p.nx=h,void 0===(o=function(){return h}.call(t,n,t,r))||(r.exports=o),i=Array.prototype,s=Object.prototype.hasOwnProperty,c=/\[(\w+)\]/g,h.noop=function(){},h.stubTrue=function(){return!0},h.stubFalse=function(){return!1},h.stubValue=function(e){return e},h.error=function(e){throw new Error(e)},h.try=function(e){try{e()}catch(e){}},h.forEach=function(e,t,n){var r,o=e.length;for(r=0;r<o&&t.call(n,e[r],r,e)!==h.BREAKER;r++);},h.forIn=function(e,t,n){var r;for(r in e)if(s.call(e,r)&&t.call(n,r,e[r],e)===h.BREAKER)break},h.each=function(e,t,n){var r,o,i=function(r,o,i){return t.call(n,r,o,e,i)===h.BREAKER};if(e)if("number"==typeof(o=e.length))for(r=0;r<o&&!i(r,e[r],!0);r++);else for(r in e)if(s.call(e,r)&&i(r,e[r],!1))break},h.map=function(e,t,n){var r=[];return h.each(e,(function(){var e=t.apply(n,arguments);if(e===h.BREAKER)return h.BREAKER;r.push(e)})),r},h.mix=function(e){var t,n,r=e||{},o=arguments;for(t=1,n=o.length;t<n;t++)h.forIn(o[t],(function(e,t){r[e]=t}));return r},h.slice=function(e,t,n){return i.slice.call(e,t,n)},h.set=function(e,t,n){for(var r=t.replace(c,"$1").split("."),o=e||h.GLOBAL,i=r.length-1,s=r[i],a=0;a<i;a++){var u=r[a],_=isNaN(+r[a+1])?{}:[];o=o[u]=o[u]||_}return o[s]=n,e},h.get=function(e,t,n){if(!t)return e;var r=t.replace(c,".$1").split("."),o=e||h.GLOBAL;return r.forEach((function(e){o=o&&o[e]})),void 0!==n&&null==o?n:o},h.path=function(e,t,n){return null==n?this.get(e,t):this.set(e,t,n)},a=function(){},u={__class_id__:0,__type__:"nx.RootClass",__base__:Object,__meta__:{},__static__:!1,__statics__:{},__properties__:{},__methods__:{},__method_init__:h.noop,__static_init__:h.noop},_={base:function(){var e,t=this.base.caller;if(t&&(e=t.__base__))return e.apply(this,arguments)},parent:function(e){var t=void 0===this.__id__,n=h.slice(arguments,1),r=t?this.__base__:this.__base__.prototype,o=this["@"+e].__type__,i=["get","set"][n.length];switch(o){case"method":return r[e].apply(this,n);case"property":return r["@"+e][i].apply(this,n)}}},u.__methods__=a.prototype=h.mix({constructor:a,init:h.noop,destroy:h.noop,toString:function(){return"[Class@"+this.__type__+"]"}},_),h.mix(u.__statics__,_),h.mix(a,u),h.mix(a,u.__statics__),h.RootClass=a,h.defineProperty=function(e,t,n,r){var o,i,s,c,a,u="@"+t,_=n&&"object"==typeof n?n:{value:n};return"value"in _?(c=_.value,a="_"+t,o=function(){return a in this?this[a]:"function"==typeof c?c.call(this):c},i=function(e){this[a]=e}):(o=n.get||e[u]&&e[u].get||h.noop,i=n.set||e[u]&&e[u].set||h.noop),u in e&&(o.__base__=e[u].get,i.__base__=e[u].set),s=e[u]={__meta__:n,__name__:t,__type__:"property",__static__:!!r,get:o,set:i,configurable:!0},Object.defineProperty(e,t,s),s},h.defineMethod=function(e,t,n,r){var o="@"+t;return e[t]=n,e[o]={__meta__:n,__name__:t,__type__:"method",__static__:!!r}},h.defineBombMethod=function(e,t,n,r){t.split(",").forEach((function(t,o){h.defineMethod(e,t,n.call(e,t,o),r)}))},h.defineMembers=function(e,t,n,r){h.forIn(n,(function(n,o){n.indexOf(",")>-1?h.defineBombMethod(t,n,o,r):h["define"+e](t,n,o,r)}))},function(){var e=1,t=0;function n(e,t){this.type=e,this.meta=t,this.base=t.extends||h.RootClass,this.$base=this.base.prototype,this.__class_meta__={},this.__class__=null,this.__constructor__=null}n.prototype={constructor:n,initMetaProcessor:function(){var t=this.meta,n=t.methods||{},r=t.statics||{};h.mix(this.__class_meta__,{__type__:this.type,__meta__:t,__base__:this.base,__class_id__:e++,__method_init__:n.init||this.base.__method_init__,__static_init__:r.init||this.base.__static_init__,__static__:!t.methods&&!!t.statics})},createClassProcessor:function(){var e=this;this.__class__=function(){this.__id__=t++,e.__constructor__.apply(this,arguments),e.registerDebug(this)}},inheritProcessor:function(){var e=this.__class_meta__;this.inheritedClass(e),this.defineMethods(e,!0),this.defineMethods(e,!1),this.defineProperties(e)},inheritedClass:function(e){var t=function(){},n=this.__class__;t.prototype=this.$base,n.prototype=new t,n.prototype.$base=this.$base,n.prototype.constructor=n},defineMethods:function(e,t){var n=t?"statics":"methods",r="__"+n+"__",o=t?this.__class__:this.__class__.prototype,i=(t?this.base:this.base.prototype)[r]||{};h.forIn(this.meta[n],(function(e,t){i[e]&&"function"==typeof t&&(t.__base__=i[e])})),o[r]=h.mix(e[r],i,this.meta[n]),h.defineMembers("Method",o,o[r],t)},defineProperties:function(e){var t=e.__static__,n=t?this.__class__:this.__class__.prototype;n.__properties__=h.mix(e.__properties__,this.meta.properties),h.defineMembers("Property",n,n.__properties__,t)},methodsConstructorProcessor:function(){var e=this.__class_meta__;this.__constructor__=function(){e.__method_init__.apply(this,arguments)}},staticsConstructorProcessor:function(){this.__class_meta__.__static_init__.call(this.__class__)},registerProcessor:function(){var e=this.__class__,t=this.type,n=this.__class_meta__;h.mix(e.prototype,n),h.mix(e,n),-1===t.indexOf("nx.Anonymous")&&h.set(h.GLOBAL,t,e)},registerDebug:function(e){h.DEBUG&&(h.set(h,"__instances__."+(t-1),e),h.set(h,"__instances__.length",t))}},h.declare=function(t,r){var o=new n("string"==typeof t?t:"nx.Anonymous"+e,r||t);return o.initMetaProcessor(),o.createClassProcessor(),o.inheritProcessor(),o.methodsConstructorProcessor(),o.staticsConstructorProcessor(),o.registerProcessor(),o.__class__}}()}).call(this)}).call(this,n(9),n(10)(e))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),i=n(3),s=n.n(i),c=n(4),a=n.n(c),u=n(5),_=n.n(u),f=n(0),l=n.n(f),p=n(1),h=n.n(p),d=n(6),y=n.n(d),b=n(7),m=n.n(b);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=S(e);if(t){var o=S(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return E(this,n)}}function E(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var C="react-draggable-tree",M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(s,e);var t,n,r,i=R(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=i.call(this,e)).template=function(e,n){var r=e.item,o=e.independent;return(0,t.props.template)({item:r,independent:o,sortable:function(e){return t.initSortable(e,r)}},n)},t.handleSort=function(e,n){if(t.moved){var r=n.newIndex;t.getItems(e).splice(r,0,t.moved),t.moved=null,t.handleChange()}},t.handleRemove=function(e,n){var r=n.oldIndex,o=t.getItems(e);t.moved=o[r],o.splice(r,1)},t.handleUpdate=function(e,n){var r=n.oldIndex,o=n.newIndex,i=t.getItems(e),s=i[r];o<r?(i.splice(r,1),i.splice(o,0,s)):(i.splice(o+1,0,s),i.splice(r,1)),t.handleChange()},t.items=o()(e.items),t}return t=s,(n=[{key:"componentDidMount",value:function(){var e=y.a.findDOMNode(this.root);this.initSortable(e,null)}},{key:"initSortable",value:function(e,t){var n=this.props,r=n.options,o=n.disabled;e&&new m.a(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({draggable:".is-node",disabled:o,onSort:this.handleSort.bind(null,t),onRemove:this.handleRemove.bind(null,t),onUpdate:this.handleUpdate.bind(null,t)},r))}},{key:"getItems",value:function(e){var t=function(e){return"function"==typeof e?e:function(t,n){return n[e]}}(this.props.itemsKey);return e?t(-1,e):this.items}},{key:"handleChange",value:function(){var e=this.props.onChange;this.forceUpdate(),e({target:{value:this.items}})}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=(t.options,t.template,t.disabled),o=O(t,["className","options","template","disabled"]);return h.a.createElement(a.a,g({ref:function(t){return e.root=t},"data-component":C,disabled:r,className:_()(C,n),template:this.template},o))}}])&&P(t.prototype,n),r&&P(t,r),s}(p.Component);M.displayName=C,M.version="1.0.5",M.propTypes={className:l.a.string,items:l.a.array,onChange:l.a.func,template:l.a.func.isRequired,itemsKey:l.a.oneOfType([l.a.string,l.a.func]),options:l.a.object},M.defaultProps={itemsKey:"children",onChange:s.a};t.default=M}])}));
//# sourceMappingURL=index.js.map