"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[823],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),s=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,b=m["".concat(d,".").concat(u)]||m[u]||l[u]||a;return n?o.createElement(b,i(i({ref:t},p),{},{components:n})):o.createElement(b,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2995:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var o=n(3117),r=n(102),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:3,sidebar_label:"MobX integration"},d="MobX integration (advanced)",s={unversionedId:"advanced/mobx",id:"advanced/mobx",isDocsHomePage:!1,title:"MobX integration (advanced)",description:"This section is intended for developers who are already using MobX in their application and don't want to use the built-in React, Vue or Reactive bindings.",source:"@site/docs/advanced/mobx.md",sourceDirName:"advanced",slug:"/advanced/mobx",permalink:"/SyncedStore/docs/advanced/mobx",editUrl:"https://github.com/yousefed/SyncedStore/edit/master/docs/docs/advanced/mobx.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"MobX integration"},sidebar:"tutorialSidebar",previous:{title:"Boxed values",permalink:"/SyncedStore/docs/advanced/boxed"},next:{title:"Yjs integration",permalink:"/SyncedStore/docs/advanced/yjs"}},p=[{value:"Example",id:"example",children:[],level:2}],l={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mobx-integration-advanced"},"MobX integration (advanced)"),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Only for MobX users")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This section is intended for developers who are already using MobX in their application and don't want to use the built-in React, Vue or ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/yousefED/reactive"},"Reactive")," bindings."))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"SyncedStore")," works seamlessly together with the ",(0,a.kt)("a",{parentName:"p",href:"https://mobx.js.org"},"MobX FRP library"),". To enable this, call ",(0,a.kt)("inlineCode",{parentName:"p"},"enableMobxBindings")," once, for example when setting up your store."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import * as mobx from "mobx";\nimport { enableMobxBindings } from "@syncedstore/core";\n\nenableMobxBindings(mobx);\n')),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"You can now use mobx functionality such as reactions, autorun, etc. You can also use ",(0,a.kt)("inlineCode",{parentName:"p"},"mobx-react")," to combine ",(0,a.kt)("em",{parentName:"p"},"SyncedStore"),", ",(0,a.kt)("em",{parentName:"p"},"mobx"),", and ",(0,a.kt)("em",{parentName:"p"},"React"),"."),(0,a.kt)("p",null,"Compared to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/react"},"default React example"),", we now wrap the component using ",(0,a.kt)("inlineCode",{parentName:"p"},"observer"),", and we don't need the ",(0,a.kt)("inlineCode",{parentName:"p"},"useSyncedStore")," hook anymore."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"live",live:!0},'import React from "react";\nimport { store } from "./store"; // the store we defined above\nimport { observer } from "mobx-react-lite";\nimport * as mobx from "mobx";\nimport { enableMobxBindings } from "@syncedstore/core";\n\n// enable mobx bindings\nenableMobxBindings(mobx);\n\n// use the observer pattern from mobx-react-lite.\nexport const App = observer(() => {\n  return (\n    <div>\n      <p>Todo items:</p>\n      <ul>\n        {store.todos.map((todo, i) => {\n          return (\n            <li key={i} style={{ textDecoration: todo.completed ? "line-through" : "" }}>\n              <label>\n                <input type="checkbox" checked={todo.completed} onClick={() => (todo.completed = !todo.completed)} />\n                {todo.title}\n              </label>\n            </li>\n          );\n        })}\n      </ul>\n      <input\n        placeholder="Enter a todo item and hit enter"\n        type="text"\n        onKeyPress={(event) => {\n          if (event.key === "Enter") {\n            const target = event.target as HTMLInputElement;\n            // Add a todo item using the text added in the textfield\n            store.todos.push({ completed: false, title: target.value });\n            target.value = "";\n          }\n        }}\n        style={{ width: "200px", maxWidth: "100%" }}\n      />\n    </div>\n  );\n});\n\nexport default App;\n')))}m.isMDXComponent=!0}}]);