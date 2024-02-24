"use strict";(self.webpackChunkillium_documentation=self.webpackChunkillium_documentation||[]).push([[8361],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>f});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(i),h=n,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return i?r.createElement(f,a(a({ref:t},c),{},{components:i})):r.createElement(f,a({ref:t},c))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,a=new Array(o);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,a[1]=l;for(var u=2;u<o;u++)a[u]=i[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}h.displayName="MDXCreateElement"},3197:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=i(7462),n=(i(7294),i(3905));const o={sidebar_position:11},a="Coin Distribution",l={unversionedId:"overview/emission-schedule",id:"overview/emission-schedule",title:"Coin Distribution",description:"!!THIS SECTION IS  A WORK IN PROGRESS!!",source:"@site/docs/overview/emission-schedule.md",sourceDirName:"overview",slug:"/overview/emission-schedule",permalink:"/overview/emission-schedule",draft:!1,editUrl:"https://github.com/project-illium/illium-documentation/docs/overview/emission-schedule.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Chain Selection",permalink:"/overview/chain-selection"}},s={},u=[{value:"10 Year Distribution Target",id:"10-year-distribution-target",level:2},{value:"Genesis Distribution",id:"genesis-distribution",level:2},{value:"Validator Distribution",id:"validator-distribution",level:2},{value:"Treasury Distribution",id:"treasury-distribution",level:2},{value:"Long Term Inflation Rate",id:"long-term-inflation-rate",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...i}=e;return(0,n.kt)(d,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"coin-distribution"},"Coin Distribution"),(0,n.kt)("p",null,"!!THIS SECTION IS  A WORK IN PROGRESS!!"),(0,n.kt)("p",null,"Check back later or offer some feedback!"),(0,n.kt)("h2",{id:"10-year-distribution-target"},"10 Year Distribution Target"),(0,n.kt)("p",null,"The protocol aims to have distributed a total of 2",(0,n.kt)("sup",null,"60")," = 1,152,921,504,606,846,976 coins by the\nend of the 10-year period following the genesis block."),(0,n.kt)("h2",{id:"genesis-distribution"},"Genesis Distribution"),(0,n.kt)("p",null,"Of the 2",(0,n.kt)("sup",null,"60")," coins, 20% or 230,584,300,921,369,395 coins are created in the genesis block. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A quarter of that 20% or 57,646,075,230,000,000 coins is earmarked for a founders reward."),(0,n.kt)("li",{parentName:"ul"},"The other three-quarters or 17,293,822,257,000,000 coins will be distributed via faucets, puzzle scripts, grants, and donations to dependency developers.",(0,n.kt)("br",{parentName:"li"}),"The full list of recipients of this distribution with amounts will be published here when available.")),(0,n.kt)("p",null,"A technical note: The consensus algorithm ",(0,n.kt)("em",{parentName:"p"},"requires")," some coins be created up front in the genesis block so that they can be staked\nand used to validate transactions. The blockchain could not move forward without at least some coins created up front."),(0,n.kt)("h2",{id:"validator-distribution"},"Validator Distribution"),(0,n.kt)("p",null,"75% of the initial 2",(0,n.kt)("sup",null,"60")," or 864,691,128,500,000,000 coins will be distributed to validators, at one-week\nintervals over a 10-year period, according to an exponential decay function (more coins are distributed in the early periods\nthan later periods). "),(0,n.kt)("p",null,"Each validator will receive a reward in proportion to their share of the total weighted stake on the network."),(0,n.kt)("h2",{id:"treasury-distribution"},"Treasury Distribution"),(0,n.kt)("p",null,"5% of the initial 2",(0,n.kt)("sup",null,"60")," or 57,646,075,230,000,000 coins will be distributed to the illium treasury, also at one-week intervals and\naccording to the same exponential decay function used for the validator distribution."),(0,n.kt)("p",null,"These coins can only be released from the treasury to a recipient with the approval of a majority of the validators. The purpose of the treasury\nis to fund protocol development, marketing, conferences, grants or any other activity validators deemed necessary. "),(0,n.kt)("p",null,"Alternatively validators could choose not to distribute the treasury funds if it's not believed the benefit from doing so would\nexceed the downward pressure on price from the increased circulating supply."),(0,n.kt)("h2",{id:"long-term-inflation-rate"},"Long Term Inflation Rate"),(0,n.kt)("p",null,"After the initial 10-year period the protocol targets a 2% annualized increase supply, also distributed over one-week periods."),(0,n.kt)("p",null,"Of these coins:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"95% will be awarded to validators in proportion to their weighted stake."),(0,n.kt)("li",{parentName:"ul"},"5% will be paid into the illium treasury.")))}p.isMDXComponent=!0}}]);