"use strict";(self.webpackChunkillium_documentation=self.webpackChunkillium_documentation||[]).push([[794],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=r.createContext({}),l=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=l(t.components);return r.createElement(u.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,u=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),c=l(n),f=o,d=c["".concat(u,".").concat(f)]||c[f]||m[f]||a;return n?r.createElement(d,i(i({ref:e},p),{},{components:n})):r.createElement(d,i({ref:e},p))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s[c]="string"==typeof t?t:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1621:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:8},i="Assets",s={unversionedId:"overview/Protocol Overview/assets",id:"overview/Protocol Overview/assets",title:"Assets",description:"Illium has native support for fungible and non-fungible assets (or tokens). An asset transfer looks no",source:"@site/docs/overview/Protocol Overview/assets.md",sourceDirName:"overview/Protocol Overview",slug:"/overview/Protocol Overview/assets",permalink:"/docs/overview/Protocol Overview/assets",draft:!1,editUrl:"https://github.com/project-illium/illium-documentation/docs/overview/Protocol Overview/assets.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Smart Contracts",permalink:"/docs/overview/Protocol Overview/smart_contracts"},next:{title:"Consensus Algorithm",permalink:"/docs/overview/Protocol Overview/consensus"}},u={},l=[],p={toc:l},c="wrapper";function m(t){let{components:e,...n}=t;return(0,o.kt)(c,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"assets"},"Assets"),(0,o.kt)("p",null,"Illium has native support for fungible and non-fungible assets (or tokens). An asset transfer looks no\ndifferent from ordinary transfers or smart contracts on chain so it's not possible to distinguish a transaction\nwhich transfers assets from all other illium transactions. "),(0,o.kt)("p",null,"To enable the token protocol we are going to once again modify our output commitment. This time we will add an\n",(0,o.kt)("inlineCode",{parentName:"p"},"assetID")," field."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"outputCommitment := blake2s(scriptHash, amount, assetID, state, salt)\n")),(0,o.kt)("p",null,"For regular illium (ILX) transfers the ",(0,o.kt)("inlineCode",{parentName:"p"},"assetID")," is just a zero byte array. For all other transfers it's the unique\nID of the asset. In this way we can mark outputs as representing a specific asset but keep that information hidden\nto the rest of the network. "),(0,o.kt)("p",null,"To go along with this change we're going to need to modify our transaction validation lurk program to distinguish\nbetween illium (ILX) coins and other assets and to verify that neither are being inflated. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func ProveTransactionValidity(priv PrivateParams, pub PublicParams) bool {\n    ilxInputTotal := 0\n    assetInputTotals := make(map[[32]byte]uint64)\n\n    for i, input := range priv.Inputs {\n        \n        h := blake2s(append(input.Index, input.Commitment...))\n        \n        if !ValidateInclusionProof(h, input.InclusionProof, pub.TxocRoot) {\n                return false\n        }\n        \n        preimage := append(input.ScriptHash, input.Amount, in.AssetID, in.State, input.Salt)\n        if !bytes.Equal(input.Commitment, blake2s(preimage)) {\n                return false\n        }\n\n        unlockingScript := append(input.ScriptCommitment, input.ScriptParams...)\n        if !bytes.Equal(input.ScriptHash, blake2s(unlockingScript)) {\n                return false\n        }\n\n        if !ValidateUnlockingScript(unlockingScript, input.UnlockingParams, pub.Locktime) {\n                return false\n        }\n\n        if input.AssetID == ILX_ASSET_ID {\n                ilxInputTotal += input.Amount\n        } else {\n                assetInputTotals[input.AssetID] += input.Amount\n        }\n\n        nullifier := blake2s(append(input.Index, input.Salt, unlockingScript))\n        \n        if !bytes.Equal(pub.Nullifiers[i], nullifier) {\n                return false\n        }\n    }\n    \n    ilxOutputTotal := 0\n    assetOutputTotals := make(map[[32]byte]uint64)\n    \n    for i, output : range priv.Outputs {\n        preimage := append(output.ScriptHash, output.Amount, output.AssetID, output.State, output.Salt)\n        if !bytes.Equal(pub.Outputs[i].Commitment, blake2s(preimage)) {\n                return false\n        }\n        if output.AssetID == ILX_ASSET_ID {\n                ilxOutputTotal += output.Amount\n        } else {\n                assetOutputTotals[output.AssetID] += output.Amount\n        }\n    }\n    \n    if ilxOutputTotal + pub.Fee > ilxInputTotal {\n            return false\n    }\n    \n    for assetID, total := range assetOutputTotals {\n        if total > assetInputTotals[assetID] {\n                return false\n        }\n    }\n    \n    return true\n}\n")),(0,o.kt)("p",null,"And to go along with this we will need a new transaction type to mint new assets:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf"},"message MintTransaction {\n    AssetType type            = 1;\n    bytes asset_ID            = 2;\n    bytes document_hash       = 3;\n    uint64 new_tokens         = 4;\n    repeated Output outputs   = 5;\n    uint64 fee                = 6;\n    repeated bytes nullifiers = 7;\n    bytes txoc_root           = 8;\n    bytes mint_key            = 9;\n    int64 locktime            = 10;\n    bytes signature           = 11;\n    bytes proof               = 12;\n\n    enum AssetType {\n        FIXED_SUPPLY    = 0;\n        VARIABLE_SUPPLY = 1;\n    }\n}\n")))}m.isMDXComponent=!0}}]);