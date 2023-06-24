"use strict";(self.webpackChunkillium_documentation=self.webpackChunkillium_documentation||[]).push([[525],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,v=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(v,a(a({ref:t},u),{},{components:r})):n.createElement(v,a({ref:t},u))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9928:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:1,description:"Welcome to the illium protocol overview!"},a="Introduction",l={unversionedId:"overview/Protocol Overview/introduction",id:"overview/Protocol Overview/introduction",title:"Introduction",description:"Welcome to the illium protocol overview!",source:"@site/docs/overview/Protocol Overview/introduction.md",sourceDirName:"overview/Protocol Overview",slug:"/overview/Protocol Overview/introduction",permalink:"/docs/overview/Protocol Overview/introduction",draft:!1,editUrl:"https://github.com/project-illium/illium-documentation/docs/overview/Protocol Overview/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Welcome to the illium protocol overview!"},sidebar:"tutorialSidebar",previous:{title:"Protocol Overview",permalink:"/docs/category/protocol-overview"},next:{title:"zk-snarks",permalink:"/docs/overview/Protocol Overview/zk-snarks"}},s={},c=[{value:"What is Illium?",id:"what-is-illium",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In this guide we will provide a comprehensive overview of the Illium protocol. Trying to understand\nprotocols built on top of zk-snarks may seem like a daunting task, but we're going to make it dirt simple.\nIf you have a decent understanding of the Bitcoin protocol there's no reason you can't also understand Illium."),(0,o.kt)("p",null,"In fact,  in this guide we're going to reference Bitcoin quite a bit to as many of the concepts are similar. Where\nthey are different we will make sure to point it out. "),(0,o.kt)("p",null,"But first..."),(0,o.kt)("h2",{id:"what-is-illium"},"What is Illium?"),(0,o.kt)("p",null,"Illium is a new cryptocurrency that makes use of bleeding edge cryptography to enable zero-knowledge coin transfers,\ntokens, and smart contracts. In practical terms this means that all transactions are encrypted in such a way that only\nthe sender and recipient can decrypt the transaction and view the contents. Not only are the transactions encrypted, but\nit's not possible to distinguish between ordinary transfers, token transfers, and more complex smart contracts as all transactions look the same on the blockchain."),(0,o.kt)("p",null,"Consider the history of major breakthroughs in cryptocurrencies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bitcoin proved that it's possible to build a fully decentralized currency. Unfortunately transactions are fully\npublic and trivial to trace. It also offered limited ability to create programmable contracts."),(0,o.kt)("li",{parentName:"ul"},"Ethereum one upped Bitcoin by introducing fully programmable smart contracts. "),(0,o.kt)("li",{parentName:"ul"},"Zcash improved on both by making use of zk-snarks to encrypt tranasctions and improve privacy. Unfortunately Zcash's shielded transactions only work for basic transfers. "),(0,o.kt)("li",{parentName:"ul"},"Illium extends the use of zk-snarks to full blown smart contracts making all transactions fully private.")),(0,o.kt)("p",null,"It should be noted that while transactions are completely private, users can still choose to share private data with third parties if they have a need to. And the sharing of private\ndata need not be an all-or-nothing proposition whereby the person you share the data with necessarily sees everything. Instead it's possible to\nmake use Illium's zk-snark functionality to selectively share only the parts of a transaction or\ncontract that are relevant, while keeping everything else private. "),(0,o.kt)("p",null,"Additionally, Illium makes use of novel improvements to the avalanche consensus algorithm to offer nearly instantaneous transaction finalization."))}d.isMDXComponent=!0}}]);