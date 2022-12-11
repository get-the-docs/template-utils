"use strict";(self.webpackChunkdocument_engine=self.webpackChunkdocument_engine||[]).push([[245],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||c;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2213:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const c={id:"architecture",title:"Architecture"},i=void 0,a={unversionedId:"documentation/architecture",id:"documentation/architecture",title:"Architecture",description:"Architecture",source:"@site/docs/documentation/architecture.md",sourceDirName:"documentation",slug:"/documentation/architecture",permalink:"/docs/documentation/architecture",draft:!1,editUrl:"https://github.com/get-the-docs/document-engine/docs/documentation/architecture.md",tags:[],version:"current",frontMatter:{id:"architecture",title:"Architecture"},sidebar:"docs",previous:{title:"Usage",permalink:"/docs/getting-started/usage/"},next:{title:"Built-in components",permalink:"/docs/documentation/components"}},u={},l=[{value:"Architecture",id:"architecture",level:2}],s={toc:l};function p(e){let{components:t,...c}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"This is a java library, which aggregates and extends the capabilities of\nthe underlying template engine and converter tools.\nFor the value replacement it currently only supports pojo value objects."),(0,o.kt)("p",null,"The engine aggregates components to parse, convert and merge documents,\nwhere these features are pluggable components to ensure long-term usability and\ncustomization. Thus, there is a built-in set of template engine wrappers and converters shipped with the engine with\nthe ability of adding 3rd party building blocks."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"structure",src:r(9180).Z,width:"1044",height:"643"})))}p.isMDXComponent=!0},9180:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/overview-key_elements-f28c49c8ba7a44625df3cd4431a242d9.png"}}]);