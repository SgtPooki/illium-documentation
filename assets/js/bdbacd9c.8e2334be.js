"use strict";(self.webpackChunkillium_documentation=self.webpackChunkillium_documentation||[]).push([[6274],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||s;return n?a.createElement(h,i(i({ref:t},l),{},{components:n})):a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const s={sidebar_position:5,description:"Covenants and recursive scripts"},i="Covenants",o={unversionedId:"developers/covenants",id:"developers/covenants",title:"Covenants",description:"Covenants and recursive scripts",source:"@site/docs/developers/covenants.md",sourceDirName:"developers",slug:"/developers/covenants",permalink:"/developers/covenants",draft:!1,editUrl:"https://github.com/project-illium/illium-documentation/docs/developers/covenants.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Covenants and recursive scripts"},sidebar:"devSidebar",previous:{title:"Locktime",permalink:"/developers/locktime"},next:{title:"Smart Contracts",permalink:"/developers/smart-contracts"}},p={},c=[],l={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"covenants"},"Covenants"),(0,r.kt)("p",null,"In a basic transfer, there are usually no restrictions on which address the coins can be sent to or what the structure\nof the transaction must look like. "),(0,r.kt)("p",null,"Because the full list of private and public parameters are passed into the unlocking function, scripts have the ability\nto inspect any part of the private or public data and make decisions to unlock or remain locked based on this data. "),(0,r.kt)("p",null,"Using introspection a script can enforce restrictions on what parts of the transaction must look like or where the coins are sent. "),(0,r.kt)("p",null,"We call these restrictions covenants. "),(0,r.kt)("p",null,"Here's an example. The following script only allows funds to be sent to a specific address (or more specifically the address' script-hash)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lisp"},"(lambda (locking-params unlocking-params input-index private-params public-params)\n      !(import std/crypto/checksig)\n      !(assert-eq !(param pub-out 0 script-hash) 0x06efea8759a776da6aba3eae8cb8546259dcbf8b972336218eb60ebec93d5136)\n      !(assert-eq !(param pub-out 0 amount) !(param priv-in input-index amount))\n      !(assert (checksig unlocking-params (cdr locking-params) !(param sighash)))\n      t\n)\n")),(0,r.kt)("h1",{id:"recursive-scripts"},"Recursive Scripts"),(0,r.kt)("p",null,"Covenants can be used to require the funds be sent back into the same script. For example, the following is a recursive\nscript. The funds can only be sent back into the same script-hash."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lisp"},"(lambda (locking-params unlocking-params input-index private-params public-params)\n      !(import std/inputs/script-hash)\n      !(assert-eq !(param priv-out 0 amount) (!praram priv-in input-index amount))\n      (= !(param priv-out 0 script-hash) (script-hash !(params priv-in input-index)))\n)\n")),(0,r.kt)("p",null,"Recursive scripts really start to unlock the full power of illium. Consider that all inputs and outputs have a state field\nattached to them. Using a recursive script we can read the input state, mutate it in some way, and save the new state in the\noutput. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lisp"},"(lambda (locking-params unlocking-params input-index private-params public-params)\n      !(import std/inputs/script-hash)\n      !(assert-eq !(param priv-out 0 amount) (!praram priv-in input-index amount))\n      !(assert-eq !(param priv-out 0 script-hash) (script-hash !(params priv-in input-index)))\n      \n      (= !(param priv-out 0 state) (+ !(param priv-in input-index state) 1))\n)\n")),(0,r.kt)("p",null,"The above example reads an integer from the input state, increments it by one, and saves the new state in the next output,\nwhich a covenant enforces must be the same script. "),(0,r.kt)("p",null,"You can think of this script as a deployed contract. The contract has code that runs every time the utxo is spent and it also\nhas state associated with it that can be read and mutated. "),(0,r.kt)("p",null,"Let's take a look at a more practical example. The following is vault script. It has two keys, a hot key and a cold key. The\ncold key can spend the funds at any time. If the funds are spent with the hot key a covenant is enforced requiring the\nfunds move back into the same script while activating a timer. When the timer expires the hot key can spend the funds with\nno restrictions. Before the timer expires the cold key can still spend the funds. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"locking-params = (<recovery-window> <hot-pubkey> <cold-pubkey>)\nunlocking-params = (t <cold-signature>)\nor \nunlocking-params = (nil <output-index> <hot-signature> )\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lisp"},"(lambda (locking-params unlocking-params input-index private-params public-params))\n      !(import std/crypto/checksig)\n      !(import std/collections/nth)\n      !(import std/inputs/script-hash)\n\n      ;; cold-spend allows the funds to be spent any time using the cold key\n      !(defun cold-spend () (\n              (checksig (cdr unlocking-params) (cdr (cdr locking-params)) !(param sighash))\n      ))\n\n      ;; hot-spend allows coins to be spent with the hot key if the right conditions are met\n      !(defun hot-spend () (\n              !(def state !(param priv-in input-index state))\n              !(def locktime !(param locktime))\n        \n              ;; Make sure the locktime is within 120 seconds of the blocktime.\n              !(assert (< !(param locktime-precision) 120)\n              \n              ;; Validate the hot signature\n              !(assert (checksig (cdr (cdr unlocking-params)) (cons (nth 3 locking-params) (cons (nth 4 locking-params) nil)) !(param sighash)))\n                        \n              (if state\n                  ;; If state contains a timestamp allow the funds to be spent if the current time is\n                  ;; greater than the state timestamp plus the recovery-window.\n                  (> locktime (+ state (car locking-params))\n                  \n                  ;; If the state is nil\n                  (let ((output-index (car (cdr unlocking-params))))   \n                      ;; Make sure the full amount is transferred back into the contract.\n                      ;; Fees will need to be paid with additional inputs.\n                      !(assert-eq !(param priv-out output-index amount) !(param priv-in input-index amount))\n                      \n                      ;; Require funds are sent back into the same script-hash\n                      !(assert-eq !(param priv-out output-index script-hash) (script-hash !(params priv-in input-index)))\n                      \n                      ;; Require the new state contains the current timestamp\n                      !(assert-eq !(params priv-out output-index state) locktime)\n                      \n                      ;; Require the new salt be the hash of the previous salt. This is necessary because we are\n                      ;; assuming a potential adversarial case where the hot key may be compromised and the owner\n                      ;; of the cold key needs to be able to compute the output-commitment preimage to be able to\n                      ;; spend this output and recover his coins.\n                      !(assert-eq !(params priv-out output-index salt) (num (commit !(param priv-in input-index salt))))\n                      \n                      ;; Ensure the asset-id is the same as the input asset-id. This also prevents a potential attack\n                      ;; where the attacker sends junk tokens to this output.\n                      !(assert-eq !(params priv-out output-index asset-id) !(param priv-in input-index asset-id))\n                      t\n                  )\n              )\n      ))\n      \n      (if (car unlocking-params)\n          (cold-spend)\n          (hot-spend)\n      )\n)\n")))}m.isMDXComponent=!0}}]);