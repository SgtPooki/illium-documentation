"use strict";(self.webpackChunkillium_documentation=self.webpackChunkillium_documentation||[]).push([[9867],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return n?o.createElement(m,r(r({ref:t},p),{},{components:n})):o.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5025:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const i={sidebar_position:8},r="Block Relay",l={unversionedId:"protocol/block-relay",id:"protocol/block-relay",title:"Block Relay",description:"Illium uses a block compression protocol called Xthinner when relaying blocks to minimize network bandwidth usage.",source:"@site/docs/protocol/block-relay.md",sourceDirName:"protocol",slug:"/protocol/block-relay",permalink:"/protocol/block-relay",draft:!1,editUrl:"https://github.com/project-illium/illium-documentation/docs/protocol/block-relay.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"specSidebar",previous:{title:"Block Format",permalink:"/protocol/blocks"}},s={},c=[{value:"CTOR",id:"ctor",level:3},{value:"XThinner Spec",id:"xthinner-spec",level:3},{value:"Checksums",id:"checksums",level:3},{value:"Errors",id:"errors",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"block-relay"},"Block Relay"),(0,a.kt)("p",null,"Illium uses a block compression protocol called Xthinner when relaying blocks to minimize network bandwidth usage."),(0,a.kt)("h3",{id:"ctor"},"CTOR"),(0,a.kt)("p",null,"There is a consensus rule for blocks that require transactions in a block to be sorted by transaction ID (lowest to highest).\nThis rule allows us to compute the bare minimum amount of txid bytes needed to disambiguate a block txid from other txids\nin our mempool."),(0,a.kt)("h3",{id:"xthinner-spec"},"XThinner Spec"),(0,a.kt)("p",null,"Ultimately we'll refer you to the Xthinner ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/project-illium/ilxd/blob/master/mempool/xthinner.go"},"code")," for\nthe implementation details. But we will copy a high level overview written by Jonathan Toomim here:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"(a) Encoding"))),(0,a.kt)("p",null,"For encoding, we use a stack-based state machine that follows a three-stage cycle. At the end of each cycle, the bytes on the stack represent enough of the TXID\u2019s initial bytes in order to be able to uniquely identify that TXID in mempool. At the start of each cycle, we\u2019re left with the initial bytes for the previous transaction. Our three stages are as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"We can pop 1 or more bytes off the stack as necessary to disambiguate from the previous block transaction."),(0,a.kt)("li",{parentName:"ol"},"We can push 1 or more bytes onto the stack as necessary to disambiguate from neighboring mempool transactions."),(0,a.kt)("li",{parentName:"ol"},"We commit to a transaction using the prefix encoded on the stack.")),(0,a.kt)("p",null,"We will always need to pop and push at least 1 byte per transaction; otherwise, encoding ambiguities would result. Each pop or push after the first can be encoded as a 1-bit command, where a ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," indicates that we\u2019re ready to move onto the next stage of the state machine and a ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," indicates that we still need to do at least one more pop or push in the current stage. Let\u2019s go through an example. Let\u2019s say the following list of hashes are the TXIDs in our mempool, where the bolded TXIDs are the ones in our block:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"00011aad25656886a26599ec50d2356a09fbc0bf7b31625635112d4407be47f7\n0001f62a39b2e11ab1944d2deae329c142cda52b678da21c53d821d609af8555\n00023f9d3909138f56a5b7ea8d8e93868f44035a48a9de5d7a156facceff4c18\n00026251be10dc0c2c6db58c767f7c733f04dd0ca98cd58e6692ac9ed0a7a635\n",(0,a.kt)("strong",{parentName:"p"},"000287fcf35fd7158f76478c57fcf38018bb9c9e7fd0710ae23a3943501bc29e"),"\n00036f7da3c5f8972be8ec4ccd40741fb2fe11c19c97bcd92806377877266823\n",(0,a.kt)("strong",{parentName:"p"},"000437444d7882fe565f45af0135eaf8fe899a90b3864f16233e077fd0545de1"),"\n0004418502e0b7ca6be66dbfb22b1d44b8d130e4881273244175d2b31c87ef6a\n",(0,a.kt)("strong",{parentName:"p"},"000443e44278f21fd9c6b36074c3b69e127826e622b077952a418bb025a38099"),"\n",(0,a.kt)("strong",{parentName:"p"},"00047864535649e341b433f5b5046742889b19f032163dd2c828000dfeeabdd8"),"\n",(0,a.kt)("strong",{parentName:"p"},"00047ff913facd948fbac75f6834f0594f333cf0d798513c044b888f78bc3cfc"),"\n",(0,a.kt)("strong",{parentName:"p"},"0004bc10acad694635899c094a9265e21ce4ba2941c093859b2d30de6b942246"),"\n",(0,a.kt)("strong",{parentName:"p"},"00054c9111edeab8dbc5cdb0911efbcf13291d7388d2898d05017abe2f6c1ecf"),"\n00057a5224fcc5b7b88230e6345053bf8b5616d851551d9127a20eaa5f9d319d\n",(0,a.kt)("strong",{parentName:"p"},"00064091bb8f250943a8eaa69cd0fa1b83b57a30d96b71ea319a085aabb81d8e"),"\n00064d71e4f0c3aac3338069e020b699a3d693f800cb7d622e5b3c0f16829533\n",(0,a.kt)("strong",{parentName:"p"},"0007ed917e16035ec722d30eefd849c2a25580d5873131346b9321222caf8761"),"\n0007edd6bf4dd7981639b7ec3ba29671010eb8b34056d265db44395cb5f33282\n",(0,a.kt)("strong",{parentName:"p"},"000811bab64454e8dc3802753a6430ee79142d5b0e4fb7a9ce17534c17ca3ccb"),"\n00081cfcab0c75a3e25c6166451792ed3c7cdaf3ab839b9bdc2978f7fc54e263")),(0,a.kt)("p",null,"Our state machine starts with an empty stack."),(0,a.kt)("p",null,"1.1 (Round 1 stage 1) We don\u2019t need to pop off any bytes to disambiguate from the previous transaction (because there was none), so we encode a ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," into our state machine pop command list. ",(0,a.kt)("inlineCode",{parentName:"p"},"pops.extend([0])"),"."),(0,a.kt)("p",null,"1.2 Our transaction needs ",(0,a.kt)("inlineCode",{parentName:"p"},"00 02 87")," to disambiguate it from its neighbors, and our stack currently empty, so we need to push a total of three bytes onto the stack. ",(0,a.kt)("inlineCode",{parentName:"p"},"pushbytes.extend([0x00, 0x02, 0x87])")," The first push is always needed, so we only need to add two 1 values to our push command list. ",(0,a.kt)("inlineCode",{parentName:"p"},"pushes.extend([1, 1, 0])")),(0,a.kt)("p",null,"1.3 Our stack is now ",(0,a.kt)("inlineCode",{parentName:"p"},"00 02 87"),". That\u2019s enough information to uniquely identify this transaction as long as the recipient of this message has that transaction in their mempool and does not have a conflicting transaction with the same prefix."),(0,a.kt)("p",null,"1.4 We\u2019ll talk about the checksumming later."),(0,a.kt)("p",null,"2.1 We have ",(0,a.kt)("inlineCode",{parentName:"p"},"00 02 87")," on our stack, and our next transaction begins with ",(0,a.kt)("inlineCode",{parentName:"p"},"00 04 37"),", so we need to pop off two bytes. The first pop is automatic, so we need to tell our state machine to pop a second byte before going to the next stage. ",(0,a.kt)("inlineCode",{parentName:"p"},"pops.extend([1, 0])")),(0,a.kt)("p",null,"2.2 We now have ",(0,a.kt)("inlineCode",{parentName:"p"},"00")," on our stack. We need ",(0,a.kt)("inlineCode",{parentName:"p"},"00 04 37")," to disambiguate from the mempool transaction beginning with ",(0,a.kt)("inlineCode",{parentName:"p"},"00 04 41"),", so we push two bytes: ",(0,a.kt)("inlineCode",{parentName:"p"},"pushbytes.extend([0x04, 0x37])"),". The first push is automatic, so we only need to tell our state machine about the second push before switching to the next tx. ",(0,a.kt)("inlineCode",{parentName:"p"},"pushes.extend([1, 0])")),(0,a.kt)("p",null,"2.3 This leaves ",(0,a.kt)("inlineCode",{parentName:"p"},"00 04 37")," on our stack to uniquely identify our transaction."),(0,a.kt)("p",null,"3.1 Our next tx begins with ",(0,a.kt)("inlineCode",{parentName:"p"},"00 04 43"),". Only the last byte differs from our stack value, and that pop happens automatically, so we tell our state machine to perform no additional pops. ",(0,a.kt)("inlineCode",{parentName:"p"},"pops.extend([0])")),(0,a.kt)("p",null,"3.2 We now have ",(0,a.kt)("inlineCode",{parentName:"p"},"00 04")," on our stack. We need one more byte ",(0,a.kt)("inlineCode",{parentName:"p"},"43")," to disambiguate from the nearest mempool neighbor, ",(0,a.kt)("inlineCode",{parentName:"p"},"00 04 41"),", so we only need our one automatic push for that. ",(0,a.kt)("inlineCode",{parentName:"p"},"pushbytes.extend([0x43])"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"pushes.extend([0])"),"."),(0,a.kt)("p",null,"3.3 This leaves ",(0,a.kt)("inlineCode",{parentName:"p"},"00 04 43")," on our stack to uniquely identify our transaction."),(0,a.kt)("p",null,"And so on."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"(b) Decoding")),(0,a.kt)("p",null,"Our encoded data for the first three transactions from part (a) was this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pops      = [0, 1, 0, 0]\npushes    = [1, 1, 0, 1, 0, 0]\npushbytes = [0x00, 0x02, 0x87, 0x04, 0x37, 0x43]\n")),(0,a.kt)("p",null,"To decode, we run our state machine with that data."),(0,a.kt)("p",null,"1.1 Our stack is empty to start with. We can\u2019t do our automatic first pop, so we skip that step. The next bit in our pop command list is 0, so we do not do any additional pops. Our stack remains empty."),(0,a.kt)("p",null,"1.2 We do an automatic push of ",(0,a.kt)("inlineCode",{parentName:"p"},"00"),". Our pushes list has two ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," values followed by a ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),", so we do two additional pushes of ",(0,a.kt)("inlineCode",{parentName:"p"},"02 87")," to finish this stage."),(0,a.kt)("p",null,"1.3 Our stack is now ",(0,a.kt)("inlineCode",{parentName:"p"},"00 02 87"),". We check our mempool for transactions beginning with those bytes, and hopefully only find one such transaction, which we append to our block."),(0,a.kt)("p",null,"2.1 The next two values in our pops list are ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),", so we do our automatic pop plus one more, leaving us with only ",(0,a.kt)("inlineCode",{parentName:"p"},"00")," on our stack."),(0,a.kt)("p",null,"2.2 Our next values in pushes are ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),", so we do our automatic push plus one more. This pushes ",(0,a.kt)("inlineCode",{parentName:"p"},"04 37")," onto our existing ",(0,a.kt)("inlineCode",{parentName:"p"},"00"),"."),(0,a.kt)("p",null,"2.3 We now have ",(0,a.kt)("inlineCode",{parentName:"p"},"00 04 37")," on our stack. We check our mempool for transactions beginning with those bytes, and hopefully only find one such transaction, which we append to our block."),(0,a.kt)("p",null,"3.1 The next value in our pops list is ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),", so we only do our automatic pop, leaving us with ",(0,a.kt)("inlineCode",{parentName:"p"},"00 04")," on our stack."),(0,a.kt)("p",null,"3.2 The next value in our pushes list is ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),", so we only do our automatic push. Our next value in pushbytes is ",(0,a.kt)("inlineCode",{parentName:"p"},"43"),", so we push that onto our stack."),(0,a.kt)("p",null,"3.3 We now have ",(0,a.kt)("inlineCode",{parentName:"p"},"00 04 43")," on our stack. We check our mempool for transactions beginning with those bytes, and hopefully only find one such transaction, which we append to our block."),(0,a.kt)("h3",{id:"checksums"},"Checksums"),(0,a.kt)("p",null,"The Xthinner spec calls for the XthinnerBlock to have a checksum attached that can be used to detect collisions.\nHowever, in illium blocks come quickly and typically have few transactions. With such a small number of transactions\ncollisions are less likely. In the event a collision happens the validation of the txRoot will fail and we will just\nrequest the full list of block txids from the relaying peer."),(0,a.kt)("p",null,"If checksums were included we could use them to narrow down the range in block where the collision occurred and just\nrequest a smaller range of txids from our peer instead of the full list. This would save bandwidth. However, for it to\nbe worth it the bandwidth savings needs to exceed the extra bandwidth cost of the checksums. At small block sizes this isn't\nworth it. So we omit the checksums."),(0,a.kt)("h3",{id:"errors"},"Errors"),(0,a.kt)("p",null,"There are two possible decode failures:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"There are no transactions in the mempool with the given prefix (missing tx)."),(0,a.kt)("li",{parentName:"ol"},"There are one or more transactions in the mempool with the same prefix (collision).")),(0,a.kt)("p",null,"In these cases the caller should request the missing transaction(s) from the remote peer before proceeding\nto block validation."),(0,a.kt)("p",null,"The final failure case is the block's tx merkle root may fail to validate. This could\nmean one of two things:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"We had a transaction in the mempool that collided with a transaction in the block,\nbut the block's transaction was not in the mempool. This is very unlikely but possible."),(0,a.kt)("li",{parentName:"ol"},"The peer maliciously sent us an invalid block.")),(0,a.kt)("p",null,"In both cases the solution is to download the full list of txids from the remote peer."))}u.isMDXComponent=!0}}]);