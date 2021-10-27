"use strict";(self.webpackChunktemplate_utils=self.webpackChunktemplate_utils||[]).push([[725],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8692:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=["components"],l={id:"roadmap",title:"Roadmap"},u=void 0,s={unversionedId:"about/roadmap",id:"about/roadmap",isDocsHomePage:!1,title:"Roadmap",description:"We would like to add more features to the functionality to let teams using this tool to focus more on business needs and",source:"@site/docs/about/roadmap.md",sourceDirName:"about",slug:"/about/roadmap",permalink:"/template-utils/docs/about/roadmap",editUrl:"https://github.com/videki/template-utils/docs/about/roadmap.md",tags:[],version:"current",frontMatter:{id:"roadmap",title:"Roadmap"},sidebar:"docs",previous:{title:"Customization examples",permalink:"/template-utils/docs/samples/customization-examples"}},c=[],p={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We would like to add more features to the functionality to let teams using this tool to focus more on business needs and\nprovide open source DMS functionality. To achieve this we are likely to add features like listed below:   "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"VCS based template repository: git repository based template store to provide template and document structure history"),(0,a.kt)("li",{parentName:"ul"},"Result store database support: ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"download cache (redis)"),(0,a.kt)("li",{parentName:"ul"},"long-term store (git)    "))),(0,a.kt)("li",{parentName:"ul"},"Document set decision table support: rule based decision table control for template alternatives to\nprovide business editable template sets (Excel based Drools decision table)"),(0,a.kt)("li",{parentName:"ul"},"DTO jsonpath and microservice support (to run the tool as a separate service without any impact of the DTO changes\nused in then templates)  "),(0,a.kt)("li",{parentName:"ul"},"Document signing  ")),(0,a.kt)("p",null,"(Note: These are improvement ideas of the core team, not scheduled tasks with deadlines)"))}m.isMDXComponent=!0}}]);