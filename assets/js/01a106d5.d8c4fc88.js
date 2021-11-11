"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[295],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3936:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:3,sidebar_label:"React"},s="React integration",l={unversionedId:"react",id:"react",isDocsHomePage:!1,title:"React integration",description:"SyncedStore is designed to work seamlessly with React. Below, you'll find a basic todo app.",source:"@site/docs/react.md",sourceDirName:".",slug:"/react",permalink:"/SyncedStore/docs/react",editUrl:"https://github.com/yousefed/SyncedStore/edit/master/docs/docs/react.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"React"},sidebar:"tutorialSidebar",previous:{title:"Example",permalink:"/SyncedStore/docs/basics/example"},next:{title:"Vue",permalink:"/SyncedStore/docs/vue"}},p=[{value:"Mutable store",id:"mutable-store",children:[{value:"<code>useSyncedStore</code> Hook",id:"usesyncedstore-hook",children:[],level:3}],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"react-integration"},"React integration"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"SyncedStore")," is designed to work seamlessly with React. Below, you'll find a basic todo app.\nYou'll notice that the code is almost as simple as building a regular todo app."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"live",live:!0},'import React from "react";\nimport { useSyncedStore } from "@syncedstore/react";\nimport { store } from "./store"; // the store we defined above\n\nexport default function App() {\n  const state = useSyncedStore(store);\n\n  return (\n    <div>\n      <p>Todo items:</p>\n      <ul>\n        {state.todos.map((todo, i) => {\n          return (\n            <li key={i} style={{ textDecoration: todo.completed ? "line-through" : "" }}>\n              <label>\n                <input type="checkbox" checked={todo.completed} onClick={() => (todo.completed = !todo.completed)} />\n                {todo.title}\n              </label>\n            </li>\n          );\n        })}\n      </ul>\n      <input\n        placeholder="Enter a todo item and hit enter"\n        type="text"\n        onKeyPress={(event) => {\n          if (event.key === "Enter") {\n            const target = event.target as HTMLInputElement;\n            // Add a todo item using the text added in the textfield\n            state.todos.push({ completed: false, title: target.value });\n            target.value = "";\n          }\n        }}\n        style={{ width: "200px", maxWidth: "100%" }}\n      />\n    </div>\n  );\n}\n')),(0,a.kt)("h2",{id:"mutable-store"},"Mutable store"),(0,a.kt)("p",null,"If you're an experienced React developer, and used to using the ",(0,a.kt)("inlineCode",{parentName:"p"},"useState")," hook to manage state,\nyou'll notice a slight difference in how ",(0,a.kt)("em",{parentName:"p"},"SyncedStore")," stores work. Instead of ",(0,a.kt)("em",{parentName:"p"},"immutable")," state,\nwith ",(0,a.kt)("em",{parentName:"p"},"SyncedStore")," and the ",(0,a.kt)("em",{parentName:"p"},"useSyncedStore")," hook, you can mutate variables on the ",(0,a.kt)("inlineCode",{parentName:"p"},"store")," directly."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"SyncedStore")," uses the concept of Functional Reactive Programming, and in that way is similar to\nReact state management libraries like MobX."),(0,a.kt)("p",null,"Fancy words, but this actually makes your life a lot easier."),(0,a.kt)("h3",{id:"usesyncedstore-hook"},(0,a.kt)("inlineCode",{parentName:"h3"},"useSyncedStore")," Hook"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useSyncedStore")," hook takes one parameter, which should be the store returned from the ",(0,a.kt)("inlineCode",{parentName:"p"},"syncedStore")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const state = useSyncedStore(store);\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useSyncedStore")," hook is pretty smart. It automatically detects which properties of ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," you use in your React component."),(0,a.kt)("p",null,"If you only read from ",(0,a.kt)("inlineCode",{parentName:"p"},"state.todos[0].title"),", your component rerenders ",(0,a.kt)("em",{parentName:"p"},"if and only if")," the title of the first \"todo\" changes,\nwhether that's by you or by a remote user. So if another property changes (e.g.: a different todo item), your component doesn't rerender,\nwhich can save a huge performance overhead in your application, whilst keeping it easy to build your app!"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Learning more (advanced)")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"You can also pass a nested object (",(0,a.kt)("inlineCode",{parentName:"p"},"store.vehicles"),") or a Yjs object (e.g.: ",(0,a.kt)("inlineCode",{parentName:"p"},"Y.Doc"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Y.Array")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Y.Map"),") to the ",(0,a.kt)("inlineCode",{parentName:"p"},"useSyncedStore")," method."),(0,a.kt)("p",{parentName:"div"},"To learn more, the ",(0,a.kt)("inlineCode",{parentName:"p"},"useSyncedStore")," is actually a wrapper for ",(0,a.kt)("inlineCode",{parentName:"p"},"useReactive"),", from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/yousefED/reactive"},"reactive library"),"."))))}u.isMDXComponent=!0}}]);