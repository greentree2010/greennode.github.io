"use strict";(self.webpackChunkhakehardware=self.webpackChunkhakehardware||[]).push([[725],{5394:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>A,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=t(4848),r=t(8453);const s={title:"Node (Docker)"},i=void 0,a={id:"guides/autonomys/docker-node-autonomys",title:"Node (Docker)",description:"This guide was created for Gemeni 3h testnet and will be updated to mainnet once released.",source:"@site/docs/guides/autonomys/docker-node-autonomys.md",sourceDirName:"guides/autonomys",slug:"/guides/autonomys/docker-node-autonomys",permalink:"/docs/guides/autonomys/docker-node-autonomys",draft:!1,unlisted:!1,editUrl:"https://github.com/greentree2010/greennode.github.io/edit/main/docs/guides/autonomys/docker-node-autonomys.md",tags:[],version:"current",frontMatter:{title:"Node (Docker)"},sidebar:"guides",previous:{title:"Autonomys",permalink:"/docs/category/autonomys"},next:{title:"Cluster Farmer (Docker)",permalink:"/docs/guides/autonomys/docker-cluster-autonomys"}},A={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Forward Ports",id:"forward-ports",level:2},{value:"Create an Autonomys Network in Docker",id:"create-an-autonomys-network-in-docker",level:2},{value:"Node Stack File",id:"node-stack-file",level:2},{value:"Using a Bind Mount for Node Data",id:"using-a-bind-mount-for-node-data",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"This guide was created for Gemeni 3h testnet and will be updated to mainnet once released."})}),"\n",(0,o.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(n.p,{children:["To run an Autonomys Node on Docker make sure your hardware and OS are supported ",(0,o.jsx)(n.a,{href:"https://docs.autonomys.xyz/docs/farming-&-staking/farming/intro#operating-system",children:"Official Docs"})]}),"\n",(0,o.jsx)(n.p,{children:"Here are a few quick things to keep in mind:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"You will need at least 100GB of SSD storage for a Farming Node."}),"\n",(0,o.jsx)(n.li,{children:"You will need to forward two ports: 30333 and 30433"}),"\n",(0,o.jsx)(n.li,{children:"The Node will need to be accessible by any PCs running a Cluster Controller, or if you do not run a cluster, then by the Farmer."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"You should have Docker or Docker Desktop installed."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://hakehardware.github.io/docs/guides/linux/install-docker-debian",children:"Install Docker on Debian"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"This guide also uses Portainer to manage Docker. I highly recommend it."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://hakehardware.github.io/docs/guides/linux/install-portainer-host-agent",children:"Install Portainer Host/Agent"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"forward-ports",children:"Forward Ports"}),"\n",(0,o.jsx)(n.p,{children:"Port forwarding allows you to map a specific port on your public IP address to a particular internal IP address. This tells your router to forward incoming requests on that port to the specified internal IP. Forwarding ports varies based on the type of equipment and configuration you have. Most of the time simply navigating to the router or modem UI you can find the Port Forwarding section and configure it. However, that is not always the case. I recommend that you google your router/modem model number to identify the appropriate steps. There are a lot of resources out there already to help you out."}),"\n",(0,o.jsx)(n.p,{children:"I am using the UniFi Dream Machine Pro and there is a user interface that allows me to forward my ports easily"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Port Forward",src:t(7470).A+"",width:"1061",height:"243"})}),"\n",(0,o.jsx)(n.p,{children:"In the above example, you can see ports 30333 and 30433 map to the IP where my Node is running (192.168.69.100)."}),"\n",(0,o.jsx)(n.h2,{id:"create-an-autonomys-network-in-docker",children:"Create an Autonomys Network in Docker"}),"\n",(0,o.jsx)(n.p,{children:"The first step is to create a dedicated network for Autonomys. This is especially a good idea if you plan to run a Node + Cluster on the same PC. You can do this with a Docker command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo docker network create \\\r\n  --driver bridge \\\r\n  --subnet 172.25.0.0/16 \\\r\n  --gateway 172.25.0.1 \\\r\n  autonomys-network\n"})}),"\n",(0,o.jsx)(n.p,{children:'This creates a new network called "autonomys-network" using the subnet 172.25.0.0/16 and the gateway 172.25.0.1.'}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Network Create",src:t(1812).A+"",width:"547",height:"157"})}),"\n",(0,o.jsx)(n.h2,{id:"node-stack-file",children:"Node Stack File"}),"\n",(0,o.jsx)(n.p,{children:"I will be creating a dedicated stack file for my Node. If you also plan to run a Cluster on the same PC as your Node, we can create a second stack file for your Cluster which uses the same network we created earlier. If you will be running a Cluster on a different PC entirely, we will also create a stack file on that PC. You do not need to modify anything in this guide for either scenario."}),"\n",(0,o.jsx)(n.p,{children:'Open up Portainer, select the environment you want to run the Node on, and then click "Stacks".'}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Network Create",src:t(9396).A+"",width:"802",height:"97"})}),"\n",(0,o.jsxs)(n.p,{children:['Then click "+ Add Stack". Add a name, I usually just call mine "autonomys", and then move down to the Web editor. I have hosted the node yaml file in the "autonomys-files" repo and can be viewed here: ',(0,o.jsx)(n.a,{href:"https://github.com/hakehardware/autonomys_files/blob/main/node.yaml",children:"node.yaml"})]}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsxs)(n.p,{children:["If you are using an ARM platform like the COMET, you must uncomment the ",(0,o.jsx)(n.code,{children:"platform: linux/amd64"})," in the node.yaml file"]})}),"\n",(0,o.jsx)(n.p,{children:"A few things to note:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:'The first two entries under "ports" are not required if you are using the default ports. One situation you would not be using the default ports is if you are running more than one Node. For instance if you have Space Acres on a computer (which runs a node) and also running the Advanced CLI or Docker with a Node.'}),"\n",(0,o.jsx)(n.li,{children:'You can also remove the corresponding entries in the "command" section for the same reason'}),"\n",(0,o.jsxs)(n.li,{children:["I have enabled prometheus metrics with ",(0,o.jsx)(n.code,{children:"--promtheus-listen-on"}),". This is optional but recommended."]}),"\n",(0,o.jsxs)(n.li,{children:["Update the ",(0,o.jsx)(n.code,{children:"--name"})," to something relevant to you."]}),"\n",(0,o.jsx)(n.li,{children:'The "labels" section is optional, but you should keep it if you plan to run my Space Port monitoring app.'}),"\n",(0,o.jsx)(n.li,{children:"Update the timezone to your timezone"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"using-a-bind-mount-for-node-data",children:"Using a Bind Mount for Node Data"}),"\n",(0,o.jsx)(n.p,{children:"The above YAML code uses a named volume which will put the Node Data on your OS drive. If you have a seperate hard drive mounted you can explicitely specify the Node Data location with a bind mount."}),"\n",(0,o.jsx)(n.p,{children:'Update the "volumes" section found in the node service from'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"    volumes:\r\n      -  node-data:/var/subspace:rw\n"})}),"\n",(0,o.jsx)(n.p,{children:"to"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"    volumes:\r\n      -  /your/node/data/path:/var/subspace:rw\n"})}),"\n",(0,o.jsx)(n.p,{children:'Note that this should be the full path to where you want the Node data. Then remove the "volumes" section at the bottom'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"volumes:\r\n  node-data:\n"})}),"\n",(0,o.jsx)(n.p,{children:'Once you have your stack file ready, you can scroll down and click the "Deploy" button. At this point the image will be downloaded and all containers (just the Node for now) will be deployed, this may take a moment. Once completed, you will be redirected to the stacks page, click the "autonomys" stack to view the associated containers.'}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Node Container",src:t(643).A+"",width:"1600",height:"237"})}),"\n",(0,o.jsx)(n.p,{children:'To view the logs, under the "Quick Actions" column, click the first icon that looks like a sheet of paper. This is really helpful to see how things are progressing. Initially you will see fust a few peers, but overtime they should increase to 40, give it a few hours though. If you are not seeing the peers increase then it may be an issue with port forwarding.'}),"\n",(0,o.jsx)(n.p,{children:"Next, you will see logs like:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"2024-10-06T15:00:57.441368Z  INFO Consensus: substrate: \u2699\ufe0f  Syncing  0.0 bps, target=#3589783 (4 peers), best: #0 (0x0c12\u20261c34), finalized #0 (0x0c12\u20261c34), \u2b07 13.5kiB/s \u2b06 3.9kiB/s\n"})}),"\n",(0,o.jsx)(n.p,{children:"Let us dissect this a bit to see what is going on:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Syncing  0.0 bps"})," - This is normal at first and we should see it increase"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"target=#3589783"})," - This is the current block height, and will increase."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"(4 peers)"})," - Current peers. This should eventually increase to 40"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"best: #0"})," - Our current synced blocks, this will eventually need to reach the ",(0,o.jsx)(n.code,{children:"target"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The other parts are not super important right now. Eventually the snap sync will kick in and you will see a log like:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"2024-10-06T15:05:37.481031Z  INFO Consensus: substrate: \u2699\ufe0f  Syncing 711748.0 bps, target=#3589832 (6 peers), best: #3558740 (0x123e\u2026cff3), finalized #3558740 (0x123e\u2026cff3), \u2b07 219.0kiB/s \u2b06 2.0kiB/s\n"})}),"\n",(0,o.jsxs)(n.p,{children:["As you can see we had a HUGE jump in ",(0,o.jsx)(n.code,{children:"best"}),". Unfortunately it will still require some syncing as we are only at ",(0,o.jsx)(n.code,{children:"3558740"})," and we need to get to ",(0,o.jsx)(n.code,{children:"3589832"}),". It should not take more than an hour or so to sync though. If it is taking longer than it could be due to the connections being blocked or port forwarding not set up correctly."]}),"\n",(0,o.jsxs)(n.p,{children:["One way to make sure you have your ports forwarded correctly is to check on ",(0,o.jsx)(n.a,{href:"https://www.yougetsignal.com/tools/open-ports/",children:"you get signal"}),'. Just enter 30333 and 30433 and click "Check".']}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"port-open",src:t(5689).A+"",width:"167",height:"38"})}),"\n",(0,o.jsxs)(n.p,{children:["And that is it! As mentioned earlier, it is quite simple to add a cluster, so check out the ",(0,o.jsx)(n.a,{href:"https://hakehardware.github.io/docs/guides/autonomys/docker-cluster-autonomys",children:"Farmer Cluster Guide for Autonomys"}),", and that is covered in the Farmer Guide."]})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},7470:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/dream_machine_port_forward-b5a230dac12e1c47547119a2cb1e1228.png"},1812:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/network-create-7d1c7585f6a897ef2c799e3be472fbdf.png"},643:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/node_container-2e8b438ca52c6a360c87c8ddc8305715.png"},5689:(e,n,t)=>{t.d(n,{A:()=>o});const o="data:image/png;base64,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"},9396:(e,n,t)=>{t.d(n,{A:()=>o});const o="data:image/png;base64,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"},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(6540);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);