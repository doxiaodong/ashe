(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./examples/Example1.tsx":function(e,t,n){"use strict";var r=n("react"),a=n("./src/index.ts"),s=n("./examples/store.ts"),i=function(e){var t=s.a.a+1;return r.createElement(r.Fragment,null,r.createElement("p",null,"hahaha",t),r.createElement("button",{onClick:s.a.plus},"++"))};i.displayName="Example1",t.a=Object(a.a)(i)},"./examples/observer.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c});var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=(n("react"),n("./node_modules/@mdx-js/react/dist/index.es.js")),s=n("./examples/Example1.tsx"),i={},l="wrapper";function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)(l,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"observer"},"observer"),Object(a.b)(s.a,{mdxType:"Example1"}))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"examples/observer.mdx"}}),c.isMDXComponent=!0},"./examples/store.ts":function(e,t,n){"use strict";var r,a,s,i,l,c=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js"),u=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),b=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js"),p=(n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js"),n("./node_modules/mobx/lib/mobx.module.js")),m=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/construct.js"),d=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),f=(n("./node_modules/reflect-metadata/Reflect.js"),function(){function e(){Object(u.a)(this,e),this._depsMap=new Map,this._instancesMap=new Map,this.Inject=this.Inject.bind(this),this.Injectable=this.Injectable.bind(this),this.replace=this.replace.bind(this),this.getInstance=this.getInstance.bind(this)}return Object(o.a)(e,[{key:"Inject",value:function(e){var t=this;return function(n,r){var a=e||Reflect.getMetadata("design:type",n,r),s=t;Object.defineProperty(n,r,{get:function(){return s.getInstance(a)}})}}},{key:"Injectable",value:function(){for(var e=this,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(t){0===n.length?e._inject(t):e._inject(t,n)}}},{key:"replace",value:function(e,t){var n=this;if(!Array.isArray(e))return this._replace(e,t);e.forEach(function(e,r){n._replace(e,t[r])})}},{key:"getInstance",value:function(e){return this._resolve(e)}},{key:"_replace",value:function(e,t){this._inject(e,null,this._getTargetUid(t))}},{key:"_inject",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=!!n,a=n||this._getTargetUid(e),s=this._depsMap.has(a),i=this._instancesMap.has(a);if(!s||r){var l=t||Reflect.getMetadata("design:paramtypes",e);l&&this._depsMap.set(a,l)}return r&&i&&this._instancesMap.delete(a),this._resolve(e,a,r),e}},{key:"_resolve",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=t||this._getTargetUid(e);if(this._instancesMap.has(r)&&!n)return this._instancesMap.get(r);var a=this._fixDepsInstance(this._depsMap.get(r)),s=Object(m.a)(e,Object(d.a)(a));return this._instancesMap.set(r,s),s}},{key:"_fixDepsInstance",value:function(e){var t=this;return(e||[]).map(function(e){var n=t._getTargetUid(e);return t._instancesMap.has(n)?t._instancesMap.get(n):new e})}},{key:"_getTargetUid",value:function(e){return e}}]),e}()),j=new f,v=j.Inject,_=j.Injectable,h=j.replace,O=j.getInstance;"undefined"!==typeof O&&O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getInstance",filename:"examples/di.ts"}}),"undefined"!==typeof h&&h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"replace",filename:"examples/di.ts"}}),"undefined"!==typeof _&&_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Injectable",filename:"examples/di.ts"}}),"undefined"!==typeof v&&v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Inject",filename:"examples/di.ts"}}),"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DI",filename:"examples/di.ts"}});var y=(r=_(),a=p.b.bound,r((i=function(){function e(){Object(u.a)(this,e),Object(c.a)(this,"a",l,this)}return Object(o.a)(e,[{key:"plus",value:function(){this.a+=1}}]),e}(),l=Object(b.a)(i.prototype,"a",[p.c],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),Object(b.a)(i.prototype,"plus",[a],Object.getOwnPropertyDescriptor(i.prototype,"plus"),i.prototype),s=i))||s);"undefined"!==typeof y&&y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Store",filename:"examples/store.ts"}});t.a=O(y)},"./src/index.ts":function(e,t,n){"use strict";var r=n("react"),a=n("./node_modules/mobx/lib/mobx.module.js");function s(){var e=Object(r.useState)(0)[1];return Object(r.useCallback)(function(){e(function(e){return e+1})},[])}function i(e){var t=Object(r.useRef)(null),n=s();t.current||(t.current=new a.a("[ashe]: observed component",function(){n()}));var i,l,c=function(){t.current&&!t.current.isDisposed&&t.current.dispose()};if(Object(r.useEffect)(function(){return c},[]),t.current.track(function(){try{i=e()}catch(t){l=t}}),l)throw c(),l;return i}s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useUpdate",filename:"src/useUpdate.ts"}});var l=i;i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useObserver",filename:"src/useObserver.ts"}});var c=n("./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),u=n.n(c);function o(e){var t=Object(r.memo)(function(t){return l(function(){return e(t)})});return u()(t,e),t.displayName=e.displayName,t}o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"observer",filename:"src/observer.ts"}}),n.d(t,"b",function(){return l}),n.d(t,"a",function(){return o}),"undefined"!==typeof useObserver&&useObserver&&useObserver===Object(useObserver)&&Object.isExtensible(useObserver)&&Object.defineProperty(useObserver,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useObserver",filename:"src/index.ts"}}),"undefined"!==typeof observer&&observer&&observer===Object(observer)&&Object.isExtensible(observer)&&Object.defineProperty(observer,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"observer",filename:"src/index.ts"}})}}]);