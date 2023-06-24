"use strict";(self.webpackChunkillium_documentation=self.webpackChunkillium_documentation||[]).push([[909],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(t),m=o,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return t?i.createElement(h,a(a({ref:n},u),{},{components:t})):i.createElement(h,a({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var d=2;d<r;d++)a[d]=t[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2327:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=t(7462),o=(t(7294),t(3905));const r={sidebar_position:1,description:"Running a node"},a="Running a node",l={unversionedId:"node/running_a_node",id:"node/running_a_node",title:"Running a node",description:"Running a node",source:"@site/docs/node/running_a_node.md",sourceDirName:"node",slug:"/node/running_a_node",permalink:"/illium-documentation/docs/node/running_a_node",draft:!1,editUrl:"https://github.com/project-illium/illium-documentation/docs/node/running_a_node.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Running a node"},sidebar:"nodeSidebar",next:{title:"Config File",permalink:"/illium-documentation/docs/node/config_file"}},s={},d=[],u={toc:d},c="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"running-a-node"},"Running a node"),(0,o.kt)("p",null,"To start running an illum full node first head over to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/project-illium/ilxd/releases"},"downloads page"),"\nand download the binaries for your operating system."),(0,o.kt)("p",null,"The download will be a .zip file that contains two executables:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ilxd"),": The illium full node application"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ilxcli"),": A command line interface to interact with a running instance of ilxd")),(0,o.kt)("p",null,"To start the node with default options run the following command in the terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ ./ilxd\n")),(0,o.kt)("p",null,"To see a list of runtime option use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ ./ilxd --help\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Usage:\n  ilxd [OPTIONS]\n\nNode Options:\n  -v, --version               Display version information and exit\n  -C, --configfile=           Path to configuration file\n  -d, --datadir=              Directory to store data\n      --logdir=               Directory to log output\n      --walletdir=            Directory to store wallet data\n  -l, --loglevel=             Set the logging level [debug, info, notice,\n                              error, alert, critical, emergency]. (default:\n                              info)\n      --debug                 Enable libp2p debug logging to the terminal\n      --seedaddr=             Override the default seed addresses with the\n                              provided values\n      --listenaddr=           Override the default listen addresses with the\n                              provided values\n  -t, --testnet               Use the test network\n  -r, --regtest               Use regression testing mode\n      --regtestval            Set self as the regtest genesis validator. This\n                              can only be done on first startup.\n      --noupnp                Disable use of upnp\n      --useragent=            A custom user agent to advertise to the network\n      --notxindex             Disable the transaction index\n      --droptxindex           Delete the tx index from the database\n      --maxbanscore=          The maximum ban score a peer is allowed to have\n                              before getting banned (default: 100)\n      --banduration=          The duration for which banned peers are banned\n                              for (default: 24h)\n      --walletseed=           A mnemonic seed to initialize the node with. This\n                              can only be used on first startup.\n      --coinbaseaddr=         An optional address to send all coinbase rewards\n                              to. If this option is not used the wallet will\n                              automatically select an internal address.\n      --networkkey=           A network key to use for this node. This will\n                              override the node's peer ID.\n\n\nPolicy:\n      --minfeeperkilobyte=    The minimum fee per kilobyte that the node will\n                              accept in the mempool and generated blocks\n      --minstake=             The minimum stake required to accept a stake tx\n                              into the mempool or a generated block\n      --treasurywhitelist=    Allow these treasury txids into the mempool and\n                              generated blocks\n      --blocksizesoftlimit=   The maximum size block this node will generate\n      --maxmessagesize=       The maximum size of a network message. This is a\n                              hard limit. Setting this value different than all\n                              other nodes could fork you off the network.\n\nRPC Options:\n      --rpccert=              A path to the SSL certificate to use with gRPC\n      --rpckey=               A path to the SSL key to use with gRPC\n      --externalip=           This option should be used to specify the\n                              external IP address if using the auto-generated\n                              SSL certificate.\n      --grpclisten=           Add an interface/port to listen for experimental\n                              gRPC connections in multiaddr format\n                              (default:/ip4/127.0.0.1/tcp/5001)\n      --grpcauthtoken=        Set a token here if you want to enable client\n                              authentication with gRPC.\n      --disablenodeservice    Disable the node RPC service. This option should\n                              be used if running a public blockchain or wallet\n                              server.\n      --disablewalletservice  Disable the wallet RPC service. This option\n                              should be used if running a public blockchain or\n                              wallet server.\n\nHelp Options:\n  -h, --help                  Show this help message\n\n")))}p.isMDXComponent=!0}}]);