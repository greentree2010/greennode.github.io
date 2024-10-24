"use strict";(self.webpackChunkhakehardware=self.webpackChunkhakehardware||[]).push([[6247],{3718:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=r(4848),s=r(8453);const a={},i="Story Validator Install Guide",o={id:"guides/comet/Run Story Validator",title:"Story Validator Install Guide",description:"System Requirements",source:"@site/docs/guides/comet/Run Story Validator.md",sourceDirName:"guides/comet",slug:"/guides/comet/Run Story Validator",permalink:"/docs/guides/comet/Run Story Validator",draft:!1,unlisted:!1,editUrl:"https://github.com/greentree2010/greentree2010.github.io/edit/main/docs/guides/comet/Run Story Validator.md",tags:[],version:"current",frontMatter:{}},l={},d=[{value:"System Requirements",id:"system-requirements",level:2},{value:"Install dependencies",id:"install-dependencies",level:3},{value:"Download Story-Geth binary",id:"download-story-geth-binary",level:3},{value:"Download Story binary",id:"download-story-binary",level:3},{value:"Init Iliad node",id:"init-iliad-node",level:3},{value:"Create story-geth service file",id:"create-story-geth-service-file",level:3},{value:"Create story service file",id:"create-story-service-file",level:3},{value:"Reload and start story-geth",id:"reload-and-start-story-geth",level:3},{value:"Reload and start story",id:"reload-and-start-story",level:3},{value:"Check logs",id:"check-logs",level:3},{value:"Check sync status",id:"check-sync-status",level:3},{value:"Create validator",id:"create-validator",level:3},{value:"Export validator Public Key &amp; Private key",id:"export-validator-public-key--private-key",level:3},{value:"Important: Please keep your private key in a safe place Your EVM Private Key saved to: <code>/root/.story/story/config/private_key.txt</code>",id:"important-please-keep-your-private-key-in-a-safe-place-your-evm-private-key-saved-to-rootstorystoryconfigprivate_keytxt",level:2},{value:"Faucet link: https://faucet.story.foundation/",id:"faucet-link-httpsfaucetstoryfoundation",level:2},{value:"Create validator",id:"create-validator-1",level:3},{value:"Validator Staking",id:"validator-staking",level:3},{value:"Check your Validator on Explorer",id:"check-your-validator-on-explorer",level:3},{value:"Get your validator info:",id:"get-your-validator-info",level:2},{value:"Result:",id:"result",level:2},{value:"Paste HEX Validator Address: D6F92FD7D0460AA9E4CF4D299FE479E93395DCF3 to search on https://testnet.story.explorers.guru/",id:"paste-hex-validator-address-d6f92fd7d0460aa9e4cf4d299fe479e93395dcf3-to-search-on-httpstestnetstoryexplorersguru",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"story-validator-install-guide",children:"Story Validator Install Guide"})}),"\n",(0,n.jsx)(t.h2,{id:"system-requirements",children:"System Requirements"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Category"}),(0,n.jsx)(t.th,{children:"Requirements"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"CPU"}),(0,n.jsx)(t.td,{children:"4 cores"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"RAM"}),(0,n.jsx)(t.td,{children:"8+ GB"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Bandwidth"}),(0,n.jsx)(t.td,{children:"10 MBps for Download / Upload"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Disk"}),(0,n.jsx)(t.td,{children:"200+ GB"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"install-dependencies",children:"Install dependencies"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sudo apt update\nsudo apt-get update\nsudo apt install curl git make jq build-essential gcc unzip wget lz4 aria2 -y\n"})}),"\n",(0,n.jsx)(t.h3,{id:"download-story-geth-binary",children:"Download Story-Geth binary"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'wget https://story-geth-binaries.s3.us-west-1.amazonaws.com/geth-public/geth-linux-amd64-0.9.2-ea9f0d2.tar.gz\ntar -xzvf geth-linux-amd64-0.9.2-ea9f0d2.tar.gz\n[ ! -d "$HOME/go/bin" ] && mkdir -p $HOME/go/bin\nif ! grep -q "$HOME/go/bin" $HOME/.bash_profile; then\n  echo \'export PATH=$PATH:$HOME/go/bin\' >> $HOME/.bash_profile\nfi\nsudo cp geth-linux-amd64-0.9.2-ea9f0d2/geth $HOME/go/bin/story-geth\nsource $HOME/.bash_profile\nstory-geth version\n'})}),"\n",(0,n.jsx)(t.h3,{id:"download-story-binary",children:"Download Story binary"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'wget https://story-geth-binaries.s3.us-west-1.amazonaws.com/story-public/story-linux-amd64-0.9.11-2a25df1.tar.gz\ntar -xzvf story-linux-amd64-0.9.11-2a25df1.tar.gz\n[ ! -d "$HOME/go/bin" ] && mkdir -p $HOME/go/bin\nif ! grep -q "$HOME/go/bin" $HOME/.bash_profile; then\n  echo \'export PATH=$PATH:$HOME/go/bin\' >> $HOME/.bash_profile\nfi\nsudo cp story-linux-amd64-0.9.11-2a25df1/story $HOME/go/bin/story\nsource $HOME/.bash_profile\nstory version\n'})}),"\n",(0,n.jsx)(t.h3,{id:"init-iliad-node",children:"Init Iliad node"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'story init --network iliad --moniker "Your_moniker_name"\n'})}),"\n",(0,n.jsx)(t.h3,{id:"create-story-geth-service-file",children:"Create story-geth service file"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sudo tee /etc/systemd/system/story-geth.service > /dev/null <<EOF\n[Unit]\nDescription=Story Geth Client\nAfter=network.target\n\n[Service]\nUser=root\nExecStart=/root/go/bin/story-geth --iliad --syncmode full\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=4096\n\n[Install]\nWantedBy=multi-user.target\nEOF\n"})}),"\n",(0,n.jsx)(t.h3,{id:"create-story-service-file",children:"Create story service file"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sudo tee /etc/systemd/system/story.service > /dev/null <<EOF\n[Unit]\nDescription=Story Consensus Client\nAfter=network.target\n\n[Service]\nUser=root\nExecStart=/root/go/bin/story run\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=4096\n\n[Install]\nWantedBy=multi-user.target\nEOF\n"})}),"\n",(0,n.jsx)(t.h3,{id:"reload-and-start-story-geth",children:"Reload and start story-geth"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sudo systemctl daemon-reload && \\\nsudo systemctl start story-geth && \\\nsudo systemctl enable story-geth && \\\nsudo systemctl status story-geth\n"})}),"\n",(0,n.jsx)(t.h3,{id:"reload-and-start-story",children:"Reload and start story"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sudo systemctl daemon-reload && \\\nsudo systemctl start story && \\\nsudo systemctl enable story && \\\nsudo systemctl status story\n"})}),"\n",(0,n.jsx)(t.h3,{id:"check-logs",children:"Check logs"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sudo journalctl -u story-geth -f -o cat\n"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Wait a minute for connect peers"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sudo journalctl -u story -f -o cat\n"})}),"\n",(0,n.jsx)(t.h3,{id:"check-sync-status",children:"Check sync status"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl localhost:26657/status | jq\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/user-attachments/assets/9f418369-e7b0-43d8-be84-7508f49b2801",alt:"image"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Waiting for your node ",(0,n.jsx)(t.code,{children:"catching_up"}),"\nis ",(0,n.jsx)(t.code,{children:"false"}),"\nyou can create validator."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"create-validator",children:"Create validator"}),"\n",(0,n.jsx)(t.h3,{id:"export-validator-public-key--private-key",children:"Export validator Public Key & Private key"}),"\n",(0,n.jsxs)(t.p,{children:["By default, when you run ",(0,n.jsx)(t.code,{children:"story init"}),"\na validator key is created for you. To view your validator key, run the following command:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"story validator export\n"})}),"\n",(0,n.jsx)(t.p,{children:"In addition, if you want to export the derived EVM private key of your validator into the default data config directory, please run the following:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"story validator export --export-evm-key\n"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.h2,{id:"important-please-keep-your-private-key-in-a-safe-place-your-evm-private-key-saved-to-rootstorystoryconfigprivate_keytxt",children:["Important: Please keep your private key in a safe place Your EVM Private Key saved to: ",(0,n.jsx)(t.code,{children:"/root/.story/story/config/private_key.txt"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.h2,{id:"faucet-link-httpsfaucetstoryfoundation",children:["Faucet link: ",(0,n.jsx)(t.a,{href:"https://faucet.story.foundation/",children:"https://faucet.story.foundation/"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"create-validator-1",children:"Create validator"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'story validator create --stake 1000000000000000000 --private-key "your_private_key"\n'})}),"\n",(0,n.jsx)(t.h3,{id:"validator-staking",children:"Validator Staking"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'story validator stake \\\n   --validator-pubkey "VALIDATOR_PUB_KEY_IN_BASE64" \\\n   --stake 1000000000000000000 \\\n   --private-key xxxxxxxxxxxxxx\n'})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Replace ",(0,n.jsx)(t.code,{children:"VALIDATOR_PUB_KEY_IN_BASE64"})]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"check-your-validator-on-explorer",children:"Check your Validator on Explorer"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.h2,{id:"get-your-validator-info",children:"Get your validator info:"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"curl -s localhost:26657/status | jq -r '.result.validator_info'\n"})}),"\n",(0,n.jsx)(t.h2,{id:"result",children:"Result:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'{ \n    "address": "D6F92FD7D0460AA9E4CF4D299FE479E93395DCF3", \n    "pub_key": { \n          "type": "tendermint/PubKeySecp256k1",\n          "value": "A+46wEmBx5QQscNOKhmJgaAQjdr85s1OzvNimMiaysp3" \n    }, \n     "voting_power": "15000" \n}\n'})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.h2,{id:"paste-hex-validator-address-d6f92fd7d0460aa9e4cf4d299fe479e93395dcf3-to-search-on-httpstestnetstoryexplorersguru",children:["Paste HEX Validator Address: D6F92FD7D0460AA9E4CF4D299FE479E93395DCF3 to search on ",(0,n.jsx)(t.a,{href:"https://testnet.story.explorers.guru/",children:"https://testnet.story.explorers.guru/"})]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>o});var n=r(6540);const s={},a=n.createContext(s);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);