"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[798],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return y}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),y=o,m=u["".concat(c,".").concat(y)]||u[y]||p[y]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6561:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:1,sidebar_label:"Working with text"},c="Working with text",l={unversionedId:"advanced/text",id:"advanced/text",isDocsHomePage:!1,title:"Working with text",description:"There are several ways to work with text / strings in SyncedStore, depending on your needs for collaboration.",source:"@site/docs/advanced/text.md",sourceDirName:"advanced",slug:"/advanced/text",permalink:"/SyncedStore/docs/advanced/text",editUrl:"https://github.com/yousefed/SyncedStore/edit/master/docs/docs/advanced/text.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Working with text"},sidebar:"tutorialSidebar",previous:{title:"Vue",permalink:"/SyncedStore/docs/vue"},next:{title:"Rich text editors",permalink:"/SyncedStore/docs/advanced/richtext"}},d=[{value:"Plain strings on the store",id:"plain-strings-on-the-store",children:[],level:2},{value:"<code>SyncedText</code> objects",id:"syncedtext-objects",children:[{value:"Nested",id:"nested",children:[],level:3},{value:"On the root of a store",id:"on-the-root-of-a-store",children:[],level:3},{value:"Reference",id:"reference",children:[],level:3}],level:2},{value:"Rich text",id:"rich-text",children:[],level:2}],p={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"working-with-text"},"Working with text"),(0,a.kt)("p",null,"There are several ways to work with text / strings in ",(0,a.kt)("em",{parentName:"p"},"SyncedStore"),", depending on your needs for collaboration."),(0,a.kt)("h2",{id:"plain-strings-on-the-store"},"Plain strings on the store"),(0,a.kt)("p",null,"You can store strings in SyncedStore objects and arrays. E.g.:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'export const store = syncedStore({ myArray: [], myObject: {} });\nstore.myArray.push("first string");\nstore.myObject.property = "string value";\n')),(0,a.kt)("p",null,"This way, strings will be shared with other users. However, users cannot modify the same string simultaneously."),(0,a.kt)("h2",{id:"syncedtext-objects"},(0,a.kt)("inlineCode",{parentName:"h2"},"SyncedText")," objects"),(0,a.kt)("p",null,"To enable collaborative editing of strings, use a ",(0,a.kt)("inlineCode",{parentName:"p"},"SyncedText")," instance."),(0,a.kt)("h3",{id:"nested"},"Nested"),(0,a.kt)("p",null,"For example, if we want to add a collaborative ",(0,a.kt)("inlineCode",{parentName:"p"},"SyncedText")," property to ",(0,a.kt)("inlineCode",{parentName:"p"},"myObject"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import { SyncedText } from "@syncedstore/core";\n\nexport const store = syncedStore({ myObject: {} });\nstore.myObject.myText = new SyncedText("hello");\n\n// now, other users can simultaneously edit text by calling `insert` and `delete` methods\n\nstore.myObject.myText.insert(0, "My name is Bob, ");\n')),(0,a.kt)("h3",{id:"on-the-root-of-a-store"},"On the root of a store"),(0,a.kt)("p",null,"If you want to immediately have access to a ",(0,a.kt)("inlineCode",{parentName:"p"},"SyncedText")," instance, without having to instantiate one and add it to an object or array, you can define one in the shape of a store."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import { SyncedText } from "@syncedstore/core";\n\nexport const store = syncedStore({ myText: "text" });\n\n// now, other users can simultaneously edit text by calling `insert` and `delete` methods\n\nstore.myText.insert(0, "Hello world");\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"SyncedText")," instance (",(0,a.kt)("inlineCode",{parentName:"p"},"myText")," in the example above) is initialized empty, untill users add text to it."),(0,a.kt)("h3",{id:"reference"},"Reference"),(0,a.kt)("p",null,"SyncedText objects are similar to Yjs ",(0,a.kt)("inlineCode",{parentName:"p"},"Y.Text")," instances and support the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/yjs/yjs#shared-types"},"same methods"),"."),(0,a.kt)("h2",{id:"rich-text"},"Rich text"),(0,a.kt)("p",null,"If you want to build a true, Google Docs style collaborative text editing experience, continue to the ",(0,a.kt)("a",{parentName:"p",href:"richtext"},"rich text documentation and example"),"."))}u.isMDXComponent=!0}}]);