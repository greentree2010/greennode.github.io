"use strict";(self.webpackChunkhakehardware=self.webpackChunkhakehardware||[]).push([[8375],{9102:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=r(4848),n=r(8453);const i={title:"Dockerize Filezilla"},o=void 0,a={id:"guides/support/dockerize-filezilla",title:"Dockerize Filezilla",description:"I never really thought of running an FTP client in Docker but I have a use case now: My raid 5 array is hosted on my server which is just a headless Ubuntu Server instance. Sure, I could use ftp in the CLI but when I have Docker and can just spin up a FileZilla instance and access it via the browser it just does not seem enticing. I actually have a lot going on with my raid array, but basically how I have it set up is that at the group level the group \u201csmbusers\u201d has access, and then at the user level it\u2019s owned by root.",source:"@site/docs/guides/support/dockerize-filezilla.md",sourceDirName:"guides/support",slug:"/guides/support/dockerize-filezilla",permalink:"/docs/guides/support/dockerize-filezilla",draft:!1,unlisted:!1,editUrl:"https://github.com/greentree2010/greentree2010.github.io/edit/main/docs/guides/support/dockerize-filezilla.md",tags:[],version:"current",frontMatter:{title:"Dockerize Filezilla"},sidebar:"guides",previous:{title:"Back Up and Assemble an MDADM RAID5 Array",permalink:"/docs/guides/support/backup-restore-mdadm"},next:{title:"Grafana - Monitor NVIDIA GPU",permalink:"/docs/guides/support/monitor-gpu-grafana"}},l={},c=[];function u(e){const t={a:"a",code:"code",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"I never really thought of running an FTP client in Docker but I have a use case now: My raid 5 array is hosted on my server which is just a headless Ubuntu Server instance. Sure, I could use ftp in the CLI but when I have Docker and can just spin up a FileZilla instance and access it via the browser it just does not seem enticing. I actually have a lot going on with my raid array, but basically how I have it set up is that at the group level the group \u201csmbusers\u201d has access, and then at the user level it\u2019s owned by root."}),"\n",(0,s.jsx)(t.p,{children:"Permissions are probably the hardest to figure out when it comes to something like this because FZ will need be able to write to the array. We will cover how to ensure your permissions are set up correctly. Enough rambling, let\u2019s install!"}),"\n",(0,s.jsx)(t.p,{children:"I found two popular options for the docker image:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://hub.docker.com/r/linuxserver/filezilla",children:"https://hub.docker.com/r/linuxserver/filezilla"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/jlesage/docker-filezilla",children:"https://github.com/jlesage/docker-filezilla"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Both of these seem to be good options but ultimately I swent with the one created by jlesage (thanks!). The github provides decent instructions so feel free to check those out for the latest."}),"\n",(0,s.jsx)(t.p,{children:"My final docker-compose looks like"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'services:\r\n  filezilla:\r\n    image: jlesage/filezilla\r\n    container_name: filezilla\r\n    ports:\r\n      - "5800:5800"  # Web interface\r\n    volumes:\r\n      - "<DOWNLOAD LOCATION>:/storage:rw"  # Mounting RAID array\r\n      - "config:/config:rw"  # Configuration\r\n    environment:\r\n      - USER_ID=1000\r\n      - GROUP_ID=1001\r\n      - TZ=<TIMEZONE>\r\n      - UMASK=0002\r\n      - DARK_MODE=1\r\n    restart: unless-stopped\r\n\r\nvolumes:\r\n  config:\n'})}),"\n",(0,s.jsx)(t.p,{children:"Here are some considerations:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"I chose to mount my raid array to \u2018/storage\u2019 so that I could download directly to it since that is where I store all my files anyway. You can pass in a HDD or folder depending on your use case"}),"\n",(0,s.jsx)(t.li,{children:"I chose to use a named volume for my config, so Docker just creates the volume and the container uses it. Easy."}),"\n",(0,s.jsx)(t.li,{children:"I set USER_ID to 1000 which is my user account\u2019s ID, then I set my GROUP_ID to 1001 which is the ID for my \u2018smbusers\u2019 group which has rw access to the array."}),"\n",(0,s.jsx)(t.li,{children:"I set UMASK to 0002 which allows newly created files to allow rw for the group by default. So anyone in the \u2018smbusers\u2019 group can rw the files and folders created by FZ"}),"\n",(0,s.jsx)(t.li,{children:"And of course DARK_MODE=1 because dark mode is superior"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"You can find out your IDs by running this command"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"id <username>\n"})}),"\n",(0,s.jsxs)(t.p,{children:["I get the following output\r\n",(0,s.jsx)(t.img,{alt:"id-hakehardware",src:r(9462).A+"",width:"1146",height:"43"})]}),"\n",(0,s.jsx)(t.p,{children:"The key parts are UID=1000 and GID for \u2018smbusers\u2019 is 1001. Also, prior to this I had already added my user \u201chakehardware\u201d to the \u201csmbusers\u201d group which is why it shows up when I run the '\u201cid\u201d command. If a group you expect to be in doesn\u2019t show up you will need to add your user to that group first."})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},9462:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/id-hakehardware-a8bd007d5aad38d621b7669a26b911d4.jpg"},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>a});var s=r(6540);const n={},i=s.createContext(n);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);