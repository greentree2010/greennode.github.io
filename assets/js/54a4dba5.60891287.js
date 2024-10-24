"use strict";(self.webpackChunkgreentree2010=self.webpackChunkgreentree2010||[]).push([[103],{528:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=t(4848),o=t(8453);const s={title:"Node Exporter"},a=void 0,i={id:"guides/linux/node-exporter",title:"Node Exporter",description:"Introduction",source:"@site/docs/guides/linux/node-exporter.md",sourceDirName:"guides/linux",slug:"/guides/linux/node-exporter",permalink:"/docs/guides/linux/node-exporter",draft:!1,unlisted:!1,editUrl:"https://github.com/greentree2010/greentree2010.github.io/edit/main/docs/guides/linux/node-exporter.md",tags:[],version:"current",frontMatter:{title:"Node Exporter"},sidebar:"guides",previous:{title:"Learn How to Use Grafana to Monitor Your System",permalink:"/docs/guides/linux/use-grafana-to-monitor-system"},next:{title:"Host a Local AI",permalink:"/docs/guides/linux/host-local-ai"}},d={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Download",id:"download",level:2},{value:"Install",id:"install",level:2},{value:"Create a Node Exporter User",id:"create-a-node-exporter-user",level:2},{value:"Create node_exporter Service",id:"create-node_exporter-service",level:2},{value:"Update Prometheus Config",id:"update-prometheus-config",level:2},{value:"Importing the Dashboard",id:"importing-the-dashboard",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(n.p,{children:"Node Exporter is a tool used for monitoring hardware and OS metrics on Linux systems. It collects a variety of performance data, such as CPU usage, memory consumption, disk I/O, and network statistics, and exposes this information in a format that Prometheus can scrape. This allows users to monitor the health and performance of their systems in real time and set up alerts based on the collected metrics."}),"\n",(0,r.jsxs)(n.p,{children:["There is a nice guide on the Prometheus site: ",(0,r.jsx)(n.a,{href:"https://prometheus.io/docs/guides/node-exporter/",children:"node_exporter"})]}),"\n",(0,r.jsx)(n.p,{children:"This guide assumes you have Docker installed and Grafana cloud already set up with Prometheus. If you need help with that check out"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://hakehardware.github.io/docs/guides/linux/install-docker-debian",children:"Install Docker on Debian"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://hakehardware.github.io/docs/guides/linux/install-portainer-host-agent",children:"Install Portainer Host/Agent"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://hakehardware.github.io/docs/guides/linux/use-grafana-to-monitor-system",children:"Use Grafana to Monitor Your System"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"This will get you up to speed. For each PC you want to monitor you will need to complete the set up process to start publishing metrics."}),"\n",(0,r.jsx)(n.h2,{id:"download",children:"Download"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["I have made the mistake of downloading the darwin version so double check it is ",(0,r.jsx)(n.code,{children:"linux"})," and you have the correct platform. I hate how similar ",(0,r.jsx)(n.code,{children:"arm64"})," and ",(0,r.jsx)(n.code,{children:"amd64"})," look :|"]})}),"\n",(0,r.jsxs)(n.p,{children:["Grab the link for the latest version of node_exporter on the Prometheus download page. You likely want the one that ends in ",(0,r.jsx)(n.code,{children:"linux-amd64.tar.gz"})," for standard Linux and ",(0,r.jsx)(n.code,{children:"linux-arm64.tar.gz"})," for ARM boards like the COMET."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/prometheus/node_exporter/releases",children:"node_exporter download"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"You can download the file with"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"wget <URL>\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then extract it with"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"tar xvfz <FILENAME>\n"})}),"\n",(0,r.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,r.jsxs)(n.p,{children:["To install, copy the node_exporter ",(0,r.jsx)(n.code,{children:"/usr/local/bin"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo cp <FOLDER>/node_exporter /usr/local/bin\n"})}),"\n",(0,r.jsx)(n.h2,{id:"create-a-node-exporter-user",children:"Create a Node Exporter User"}),"\n",(0,r.jsx)(n.p,{children:"Add a new user that is specifically for Node Exporter. This user will actually run the service created in a moment"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo useradd --no-create-home --shell /bin/false node_exporter\n"})}),"\n",(0,r.jsx)(n.p,{children:"Change the ownership of the executable just copied to the user just created"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo chown node_exporter:node_exporter /usr/local/bin/node_exporter\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can safely delete the file we downloaded earlier along with the folder"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"rm -rf <EXTRACTED FOLDER> <DOWNLOADED FILE>.tar.gz\n"})}),"\n",(0,r.jsx)(n.h2,{id:"create-node_exporter-service",children:"Create node_exporter Service"}),"\n",(0,r.jsx)(n.p,{children:"A service will now be created. It\u2019s really simple. Create a new service called \u2018node_exporter\u2019 with nano"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo nano /etc/systemd/system/node_exporter.service\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"[Unit]\r\nDescription=Node Exporter\r\nWants=network-online.target\r\nAfter=network-online.target\r\n\r\n[Service]\r\nUser=node_exporter\r\nGroup=node_exporter\r\nType=simple\r\nExecStart=/usr/local/bin/node_exporter\r\n\r\n[Install]\r\nWantedBy=multi-user.target\n"})}),"\n",(0,r.jsx)(n.p,{children:"This service will now start our node_exporter script with the user node_exporter that we created earlier"}),"\n",(0,r.jsx)(n.p,{children:"Reload the daemon"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo systemctl daemon-reload\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then start the service"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo systemctl start node_exporter\n"})}),"\n",(0,r.jsx)(n.p,{children:"And lastly enable the service so it starts automatically on reboot"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo systemctl enable node_exporter\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can check the status of the service to make sure it is running with"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo systemctl status node_exporter\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You should see it is ",(0,r.jsx)(n.code,{children:"enabled"})," and ",(0,r.jsx)(n.code,{children:"active"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"service-enabled",src:t(2759).A+"",width:"799",height:"187"})}),"\n",(0,r.jsx)(n.h2,{id:"update-prometheus-config",children:"Update Prometheus Config"}),"\n",(0,r.jsx)(n.p,{children:"In order for Prometheus to get metrics from node_exporter, it needs to be added to the Prometheus config. If you followed my guide on Grafana, you can edit this file by opening it up with nano"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"nano ~/prometheus/config.yaml\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then add a new job for node_exporter"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"  - job_name: 'node_exporter'\r\n    static_configs:\r\n      - targets: ['172.20.0.1:9100']\n"})}),"\n",(0,r.jsx)(n.p,{children:"Take note of the IP address. This is the gateway of the monitoring network we set up in the Grafana guide. In order for node_exporter to reach Prometheus the gateway of the Docker network that Prometheus is on must be used."}),"\n",(0,r.jsx)(n.p,{children:"If you have a different network gateway for Prometheus, you will need to change it. Once the config is updated, restart the Prometheus docker container so the changes take effect. If you are adding a node_exporter job running on another PC, you will use the IP address of the other PC as the target."}),"\n",(0,r.jsx)(n.p,{children:'You can be sure the node_exporter target was loaded by checking the web frontend for Prometheus. Click the "Status" menu item in the navbar and then the "Targets" menu item to see all connected targets'}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"target-up",src:t(6121).A+"",width:"526",height:"248"})}),"\n",(0,r.jsx)(n.h2,{id:"importing-the-dashboard",children:"Importing the Dashboard"}),"\n",(0,r.jsxs)(n.p,{children:['There is a default dashboard that you can import to get started. Open up Grafana, got to "Dasbboards" and then click the button "New", from the dropdown select "Import". Then enter ',(0,r.jsx)(n.code,{children:"1860"}),' where it says "URL or ID". Then click "Load"']}),"\n",(0,r.jsx)(n.p,{children:'I usually make the name a bit more descriptive and change the UID slightly as well. Then select the Prometheus data source you set up. Finally click "Import"'}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"import",src:t(7115).A+"",width:"648",height:"428"})}),"\n",(0,r.jsx)(n.p,{children:"You should see the dashboard load with the default layout."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"dash",src:t(9224).A+"",width:"1226",height:"502"})}),"\n",(0,r.jsx)(n.p,{children:"And that's it! You can now monitor your PC easily from anywhere. You can even add alerts and other cool things, but that is outside the scope of this guide."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},9224:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/dash-3808059196dcf43cbdbb6375676d0cbd.png"},7115:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/import-eb736bb99ffeafa6218e460cf1534228.png"},2759:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/service-enabled-1772e0e0d5415b1979adce094f9c3c9a.jpg"},6121:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/target-up-5beee5c19cc5edfb9cebfb833805a52b.png"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var r=t(6540);const o={},s=r.createContext(o);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);