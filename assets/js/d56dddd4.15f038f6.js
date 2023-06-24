"use strict";(self.webpackChunkillium_documentation=self.webpackChunkillium_documentation||[]).push([[613],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),l=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=l(t.components);return a.createElement(c.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=l(n),h=r,d=p["".concat(c,".").concat(h)]||p[h]||m[h]||o;return n?a.createElement(d,i(i({ref:e},u),{},{components:n})):a.createElement(d,i({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[p]="string"==typeof t?t:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},258:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:7},i="Smart Contracts",s={unversionedId:"overview/Protocol Overview/smart_contracts",id:"overview/Protocol Overview/smart_contracts",title:"Smart Contracts",description:"Thus far we've seen how we can create Bitcoin-like unlocking scripts, albeit with a more advanced turning complete",source:"@site/docs/overview/Protocol Overview/smart_contracts.md",sourceDirName:"overview/Protocol Overview",slug:"/overview/Protocol Overview/smart_contracts",permalink:"/illium-documentation/docs/overview/Protocol Overview/smart_contracts",draft:!1,editUrl:"https://github.com/project-illium/illium-documentation/docs/overview/Protocol Overview/smart_contracts.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Transaction Validation",permalink:"/illium-documentation/docs/overview/Protocol Overview/transaction_validation"},next:{title:"Assets",permalink:"/illium-documentation/docs/overview/Protocol Overview/assets"}},c={},l=[{value:"Output Commitments",id:"output-commitments",level:2},{value:"Covenants",id:"covenants",level:2},{value:"Smart Contracts",id:"smart-contracts-1",level:2}],u={toc:l},p="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"smart-contracts"},"Smart Contracts"),(0,r.kt)("p",null,"Thus far we've seen how we can create Bitcoin-like unlocking scripts, albeit with a more advanced turning complete\nprogramming language. But there is more to smart contracts than just unlocking scripts. Typically, smart contracts\nallow users to save data (state) inside a contract and to read and manipulate that state. "),(0,r.kt)("p",null,"Illium allows users to do this as well. To understand how we're going to have to introduce some changes to a few concepts\nwe've already taked about. "),(0,r.kt)("h2",{id:"output-commitments"},"Output Commitments"),(0,r.kt)("p",null,"First, the output commitment preimage is modified to include a ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," field."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"outputCommitment := blake2s(scriptHash, amount, state, salt)\n")),(0,r.kt)("p",null,"This makes it such that each output in the chain can now optionally have state attached to it, but the state will\nremain hidden behind the commitment hash. (Note that the state is included in the output ciphertext so recipients can\nread it)."),(0,r.kt)("p",null,"Nobody will be able to tell which contracts are saving and/or mutating state just by looking at the transactions in the\nblockchain as they all look the same."),(0,r.kt)("h2",{id:"covenants"},"Covenants"),(0,r.kt)("p",null,"In blockchain parlance a covenant is a restriction placed on an output such that it can only be spent if it sends the coins\nto a specific address. "),(0,r.kt)("p",null,"Bitcoin does not have covenants. Once you provide a signature script that satisfies the unlocking script you are free to\nsend the coins to any address of your pleasing. It's not possible to restrict ",(0,r.kt)("em",{parentName:"p"},"which")," address the coins are sent to."),(0,r.kt)("p",null,"Illium does have covenants. To enable this feature we have to modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidateUnlockingScript()")," function inside the\ntransaction validation lurk program to accept the private and public parameters as an input. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func ValidateUnlockingScript(unlockingScript, input.UnlockingParams, pub.Locktime, priv, pub) bool\n")),(0,r.kt)("p",null,"This is a form of ",(0,r.kt)("em",{parentName:"p"},"transaction introspection"),". The private and public parameters contain all the information, both\npublic and private, about the transaction being validated. This allows the unlocking script to inspect the relevant\nparts of the transaction and to make a decision to unlock or not based on what data the transaction includes."),(0,r.kt)("h2",{id:"smart-contracts-1"},"Smart Contracts"),(0,r.kt)("p",null,"From this we can enforce a covenant and start building something that looks like a smart contract (again we are writting\nthis is Go for readability, but in practice this would be written in lurk):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func Unlock(unlockingParams [][]byte, locktime pub.Locktime, priv PrivateParams, pub PublicParams) {\n    switch unlockingParams[0] {\n    case 0x00: \n        Method0()\n    case 0x01:\n        Method1()\n    case 0x02:\n        Method2()\n    }\n    \n    if !bytes.Equal(priv.Outputs[0].ScriptHash, priv.Inputs[0].ScriptHash) {\n        return false\n    }\n    return true\n}\n")),(0,r.kt)("p",null,"The above is a basic contract with three methods. The user can select which method gets executed by passing in ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),",\nor ",(0,r.kt)("inlineCode",{parentName:"p"},"2")," into the ",(0,r.kt)("inlineCode",{parentName:"p"},"ScriptParams"),". Further, the contract enforces a covenant which requires that coins can only be sent from\nthis output if they are sent right back to the ",(0,r.kt)("em",{parentName:"p"},"same")," ",(0,r.kt)("inlineCode",{parentName:"p"},"ScriptHash"),"."),(0,r.kt)("p",null,"This is essentially ",(0,r.kt)("em",{parentName:"p"},"recursive contract")," whereby each time a method is called the contract loops and enables the same three\nmethods to be called again by spending from the next output commitment."),(0,r.kt)("p",null,"This contract could read and mutate state if it wanted to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func Unlock(unlockingParams [][]byte, locktime pub.Locktime, priv PrivateParams, pub PublicParams) {\n    \n    state := priv.Inputs[0].State\n    \n    switch unlockingParams[0] {\n    case 0x00: \n        state = Method0(state)\n    case 0x01:\n        Method1()\n    case 0x02:\n        Method2()\n    }\n\n    if !bytes.Equal(priv.Outputs[0].State, state) {\n        return false\n    }\n    \n    if !bytes.Equal(priv.Outputs[0].ScriptHash, priv.Inputs[0].ScriptHash) {\n        return false\n    }\n    return true\n}\n")),(0,r.kt)("p",null,"In this contract ",(0,r.kt)("inlineCode",{parentName:"p"},"Method0")," reads the current contract state, mutates it, then enforces a covenant which requires that the\nnew state be saved in the output before enforcing the ",(0,r.kt)("inlineCode",{parentName:"p"},"ScriptHash")," covenant and setting up for the next iteration."),(0,r.kt)("p",null,"Contracts could even interact with other contracts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func Unlock(unlockingParams [][]byte, locktime pub.Locktime, priv PrivateParams, pub PublicParams) {\n\n    var (\n        state = priv.Inputs[1].State\n        contract2ScriptHash = []byte{//some script hash}\n    )\n    \n    switch unlockingParams[0] {\n    case 0x00:\n        if !bytes.Equal(priv.Inputs[1].ScriptHash, contract2ScriptHash) {\n            return false\n        }\n        state = Method0(state)\n    case 0x01:\n        Method1()\n    case 0x02:\n        Method2()\n    }\n\n    if !bytes.Equal(priv.Outputs[0].State, state) {\n        return false\n    }\n    \n    if !bytes.Equal(priv.Outputs[0].ScriptHash, priv.Inputs[0].ScriptHash) {\n        return false\n    }\n    return true\n}\n")),(0,r.kt)("p",null,"This contract requires that if ",(0,r.kt)("inlineCode",{parentName:"p"},"Method0()")," is called, ",(0,r.kt)("inlineCode",{parentName:"p"},"contract2")," must also be executed at the same time by enforcing\na covenant that ",(0,r.kt)("inlineCode",{parentName:"p"},"contract2")," must also be an input to the same transaction. Further it reads the state from ",(0,r.kt)("inlineCode",{parentName:"p"},"contract2"),"\nand uses it as an input for its own computation."),(0,r.kt)("p",null,"All told anything that could be done with smart contracts on Ethereum, say, can also be done in illium. While a UTXO-based\nsystem like illium is a little more complex to reason about than an account-based system like Ethereum, the complexity\ncould be abstracted away by a purpose-built smart contract IDE. "),(0,r.kt)("p",null,"There is just one caveat to all this. Unlike Ethereum, where the time it takes to verify a smart contract transaction\ngrows with the complexity of the contract, in illium the verification is constant time! This means that complex smart\ncontracts take no longer to verify than ordinary transfers. This is not only good for privacy, but also for scalability. "),(0,r.kt)("p",null,"The tradeoff here, however, is the more complex the smart contract, the more time it takes to create the proof for the\ntransaction. So the CPU time ends up being offloaded onto the prover (those creating the transactions) rather than the\nverifiers (the full nodes in the network)."))}m.isMDXComponent=!0}}]);