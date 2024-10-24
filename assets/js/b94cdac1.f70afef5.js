"use strict";(self.webpackChunkhakehardware=self.webpackChunkhakehardware||[]).push([[8978],{5449:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=t(4848),s=t(8453);const o={title:"Install Portainer Host/Agent"},r=void 0,a={id:"guides/linux/install-portainer-host-agent",title:"Install Portainer Host/Agent",description:"Introduction",source:"@site/docs/guides/linux/install-portainer-host-agent.md",sourceDirName:"guides/linux",slug:"/guides/linux/install-portainer-host-agent",permalink:"/docs/guides/linux/install-portainer-host-agent",draft:!1,unlisted:!1,editUrl:"https://github.com/greentree2010/greennode.github.io/edit/main/docs/guides/linux/install-portainer-host-agent.md",tags:[],version:"current",frontMatter:{title:"Install Portainer Host/Agent"},sidebar:"guides",previous:{title:"Install Docker on Debian",permalink:"/docs/guides/linux/install-docker-debian"},next:{title:"Install Nvidia Drivers Ubuntu",permalink:"/docs/guides/linux/install-nvidia-drivers-ubuntu"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Installing Portainer Host",id:"installing-portainer-host",level:2},{value:"Installing a Portainer Agent",id:"installing-a-portainer-agent",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:'If you run Docker, adding a GUI like Portainer to it can really enhance the experience. I prefer Portainer, but there are a few other options out there. Although having a GUI for Docker is really cool - what I love about Portainer is that if you have lots of COMETs (or other PCs) running Docker, you can run a single Portainer "Host" and the rest can just run Portainer "Agents". These agents connect to your main Portainer instance and you can view everything in a single location. It is really convenient!'}),"\n",(0,i.jsx)(n.p,{children:"We will cover both installing the Portainer Host and the Agents in this guide."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"architecture",src:t(8128).A+"",width:"753",height:"747"})}),"\n",(0,i.jsx)(n.h2,{id:"installing-portainer-host",children:"Installing Portainer Host"}),"\n",(0,i.jsxs)(n.p,{children:["For reference, this is the guide I use from the ",(0,i.jsx)(n.a,{href:"https://docs.portainer.io/start/install-ce/server/docker/linux",children:"Official Portainer Docs"})," Because Portainer runs as a container inside Docker, the installation is SUPER easy. The first step is to create the volume that Portainer will use"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo docker volume create portainer_data\n"})}),"\n",(0,i.jsx)(n.p,{children:"Now run the Docker command to download and deploy the Portainer image"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:2.21.2\n"})}),"\n",(0,i.jsx)(n.p,{children:'Make sure that you update the "portainer/portainer-ce:2.21.2" is the latest version by checking the Official Docs listed above. To confirm the deployment was successful, you can run'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo docker ps\n"})}),"\n",(0,i.jsx)(n.p,{children:"Which should list the Docker container for Portainer like this"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"architecture",src:t(743).A+"",width:"1473",height:"126"})}),"\n",(0,i.jsxs)(n.p,{children:["You can now access Portainer by opening up a browser and either running ",(0,i.jsx)(n.code,{children:"https://localhost:9443"})," if Portainer is running on your current PC, or use the IP address of the PC that is running Portainer, for instance; ",(0,i.jsx)(n.code,{children:"https://192.168.69.10:9443"}),". Firefox will give you the warning below, and Chrome will likely have something similar:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"architecture",src:t(7939).A+"",width:"916",height:"278"})}),"\n",(0,i.jsx)(n.p,{children:'This is okay, it\'s because it is using a self-signed certificate since you are hosting the website locally. Click "Advanced" and then "Accept the Risk and Continue". Now you need to create a login for Portainer, I usually leave the Username as "Admin" and then create whatever password you wish. Then hit "Create user".'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"architecture",src:t(982).A+"",width:"1027",height:"591"})}),"\n",(0,i.jsx)(n.p,{children:'Once you log in, click the big "Get Started" button to view your Environments'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"architecture",src:t(6329).A+"",width:"835",height:"683"})}),"\n",(0,i.jsx)(n.p,{children:"Here is where you can view your PC running Portainer. I do not know if this is like container-ception or something, but you can view the container that is running the container that lets you view the container. The magic of Docker."}),"\n",(0,i.jsx)(n.p,{children:'This is not really a guide on how to use Portainer, but a few quick notes: If you click the card for the "local" environment that is the PC running Portainer. We will see how to add external environments for other PCs running on your network soon. But inside this environment there is a menu on the left side that has all sorts of options - for the most part this can also be seen in the main content area'}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Stacks"})," - These are like Docker Compose files, basically infrastructure as code. Allowing you to deploy many Docker containers at once."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Container"})," - This will list out all the containers you have running"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Image"})," - This will show you all the images you have downloaded"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Volume"})," - This will show you all the volumes you have created"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Networks"})," - If you see the pattern here, this will show you the Networks. By default you will already have some."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"installing-a-portainer-agent",children:"Installing a Portainer Agent"}),"\n",(0,i.jsx)(n.p,{children:'So now that you have a Host running, you can connect many Agents. To do this, click the "Environment-related" menu under "Administration". Then click "Add environment" (top right).\r\nSelect "Docker Standalone"'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"architecture",src:t(7052).A+"",width:"260",height:"217"})}),"\n",(0,i.jsx)(n.p,{children:'Then click the "Start Wizard" button. Leave "Agent" selected, and then copy the command listed for "Linux & Windows WSL". Open up the terminal on the PC you want to add as an Agent, and paste it in. Do not forget "sudo" if you did not enable running Docker without sudo.'}),"\n",(0,i.jsx)(n.p,{children:'Once the container deploys, go back to Portainer and fill out the "Name" input. This can be basically whatever you want. I usually come up with fun names or themes for my PCs so I can remember what they are. In the second input you will need to put the IP address of the PC you are adding and the port 9001. You can find your local network IP by running'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"hostname -I\n"})}),"\n",(0,i.jsx)(n.p,{children:"Usually it's something like 192.168.X.X (where the X will be dependent on your network). In the below example, mine is 192.168.69.10"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"architecture",src:t(4546).A+"",width:"497",height:"55"})}),"\n",(0,i.jsx)(n.p,{children:"So in Portainer to add my Environment I will put"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"architecture",src:t(4370).A+"",width:"615",height:"202"})}),"\n",(0,i.jsx)(n.p,{children:'And then click "Connect". You should see an alert notifying you that the environment was connected. If you missed it, simply click on the "Home" button to go back to the main screen and see if your new Environment is there.'}),"\n",(0,i.jsxs)(n.p,{children:["You can now manage both environments from a single website, super efficient! You can add as many environments as you want. I've run 10+ before and it really is a time saver. Here is what it looks like with four (bob is shut off which is why it shows as ",(0,i.jsx)(n.code,{children:"down"}),")"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"architecture",src:t(3739).A+"",width:"1028",height:"735"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},4370:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/agent-707eed85c8ab8c0800e59e7ffcd3e2b0.png"},8128:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/architecture-f34ab73d58189e4b58774c1744d789d6.png"},743:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/docker-ps-18746c118d9a4d18c6ea10b16e6bdf2f.png"},3739:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/environments-f7a6911e09c2cb2e0d4c14764cd7325f.png"},6329:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/get-started-6f1e2eaf843b3d2b827b0e6cfa86c9ef.png"},4546:(e,n,t)=>{t.d(n,{A:()=>i});const i="data:image/png;base64,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"},982:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/register-b9067927e85192431abc86c32fb8ec0b.png"},7939:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/security-ed39c8653165c2eeae887e5755eea1fe.png"},7052:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/standalone-24647e8ec438d3ccbac184172b4b9295.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(6540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);