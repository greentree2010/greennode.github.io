"use strict";(self.webpackChunkhakehardware=self.webpackChunkhakehardware||[]).push([[5141],{3659:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=o(4848),s=o(8453);const i={title:"Install OS on eMMC using SD Card"},t=void 0,a={id:"guides/comet/install-os-on-comet",title:"Install OS on eMMC using SD Card",description:"Introduction",source:"@site/docs/guides/comet/install-os-on-comet.md",sourceDirName:"guides/comet",slug:"/guides/comet/install-os-on-comet",permalink:"/docs/guides/comet/install-os-on-comet",draft:!1,unlisted:!1,editUrl:"https://github.com/greentree2010/greennode.github.io/edit/main/docs/guides/comet/install-os-on-comet.md",tags:[],version:"current",frontMatter:{title:"Install OS on eMMC using SD Card"},sidebar:"guides",previous:{title:"Build Autonomys Images for COMET (CM3588)",permalink:"/docs/guides/comet/build-autonomys-image"},next:{title:"Prepare Micro SD Card",permalink:"/docs/guides/comet/prepare-micro-sd-card"}},d={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Debian",id:"debian",level:2},{value:"Download the ISO",id:"download-the-iso",level:3},{value:"Write Image to Micro SD Card",id:"write-image-to-micro-sd-card",level:3},{value:"Boot the Micro SD Card",id:"boot-the-micro-sd-card",level:3},{value:"Recommended Post-Install Steps",id:"recommended-post-install-steps",level:3},{value:"Change Root Password",id:"change-root-password",level:4},{value:"Remove the <code>pi</code> user",id:"remove-the-pi-user",level:4},{value:"Add a new user",id:"add-a-new-user",level:4},{value:"Disable root Login over SSH",id:"disable-root-login-over-ssh",level:4},{value:"Update Sources",id:"update-sources",level:4},{value:"Update Your System",id:"update-your-system",level:4},{value:"Set Hostname",id:"set-hostname",level:4},{value:"Reboot",id:"reboot",level:4},{value:"Armbian",id:"armbian",level:2},{value:"Write Image to Micro SD Card",id:"write-image-to-micro-sd-card-1",level:3},{value:"Boot from Micro SD Card",id:"boot-from-micro-sd-card",level:3},{value:"Open Media Vault",id:"open-media-vault",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(n.p,{children:"This guide will cover how to install Debian Bookworm, Armbian, and Open Media Vault on your COMET using an SD Card. For this guide you will need:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Micro SD Card (at least 8GB)"}),"\n",(0,r.jsx)(n.li,{children:"At least 64GB eMMC storage for the OS."}),"\n",(0,r.jsx)(n.li,{children:"As USB Micro SD Card Adapter or Micro SD Card Reader"}),"\n",(0,r.jsx)(n.li,{children:"Windows OS"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["There is an ",(0,r.jsx)(n.a,{href:"https://wiki.friendlyelec.com/wiki/index.php/CM3588#Option_1:_Install_OS_via_TF_Card",children:"Official Guide"})," from FriendlyElec, however I found it a bit difficult to follow and it had a few steps missing."]}),"\n",(0,r.jsx)(n.p,{children:"Before proceed please make sure you have done the following:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://hakehardware.github.io/docs/guides/comet/prepare-micro-sd-card",children:"Prepare Your Micro SD Card"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"debian",children:"Debian"}),"\n",(0,r.jsx)(n.p,{children:"I highly recommend the Debian Core for Autonomys. Although Ubuntu Desktop works, it will use more resources."}),"\n",(0,r.jsx)(n.h3,{id:"download-the-iso",children:"Download the ISO"}),"\n",(0,r.jsxs)(n.p,{children:["We will be using the official images created by FriendlyElec. All of their SD-to-eMMC images can be found on their ",(0,r.jsx)(n.a,{href:"https://drive.google.com/drive/folders/1k5M_5s10M_HOoFb-_uZ80_7d6quG7hli",children:"Google Drive"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Find the appropriate image"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Debian Image: ",(0,r.jsx)(n.code,{children:"rk3588-eflasher-debian-bookworm-core-6.1-arm64-20240818.img.gz"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"write-image-to-micro-sd-card",children:"Write Image to Micro SD Card"}),"\n",(0,r.jsx)(n.p,{children:"Next, the image needs to be written to the micro SD card. The steps are described here:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://hakehardware.github.io/docs/guides/comet/write-image-to-sd-card",children:"Write Image to Micro SD Card"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"boot-the-micro-sd-card",children:"Boot the Micro SD Card"}),"\n",(0,r.jsx)(n.p,{children:"Insert the micro SD card into the COMET and turn it on. It should automatically boot from the micro SD card and install the operating system. It is recommended to have a monitor hooked up for this step so you can see the install progress."}),"\n",(0,r.jsx)(n.p,{children:"NOTE: The HDMI port closest to the USB port is an INPUT. You must use the other 2 ports to get a video OUTPUT signal."}),"\n",(0,r.jsx)(n.p,{children:"Once completed, you can power off the system and remove the micro SD card."}),"\n",(0,r.jsx)(n.h3,{id:"recommended-post-install-steps",children:"Recommended Post-Install Steps"}),"\n",(0,r.jsxs)(n.p,{children:["Power the COMET back on and it should boot into Debian. By default there are two accounts, log in to the ",(0,r.jsx)(n.code,{children:"root"})," account:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["root - username ",(0,r.jsx)(n.code,{children:"root"})," and password ",(0,r.jsx)(n.code,{children:"fa"})]}),"\n",(0,r.jsxs)(n.li,{children:["pi - username ",(0,r.jsx)(n.code,{children:"pi"})," and password ",(0,r.jsx)(n.code,{children:"pi"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"change-root-password",children:"Change Root Password"}),"\n",(0,r.jsx)(n.p,{children:"Log in as root so that you can change the root password and set up a user account. To change the password run"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"passwd\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"remove-the-pi-user",children:["Remove the ",(0,r.jsx)(n.code,{children:"pi"})," user"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"userdel -r pi\n"})}),"\n",(0,r.jsx)(n.h4,{id:"add-a-new-user",children:"Add a new user"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"useradd -m -s /bin/bash <USERNAME>\n"})}),"\n",(0,r.jsx)(n.p,{children:"Set the password for your user"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"passwd <USERNAME>\n"})}),"\n",(0,r.jsx)(n.p,{children:"And add your user to the sudo group"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"usermod -aG sudo <USERNAME>\n"})}),"\n",(0,r.jsx)(n.h4,{id:"disable-root-login-over-ssh",children:"Disable root Login over SSH"}),"\n",(0,r.jsx)(n.p,{children:"I typically disable root login over SSH, as I only ever use my user account. Open up sshd_config"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"nano /etc/ssh/sshd_config\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then find the entry for ",(0,r.jsx)(n.code,{children:"PermitRootLogin"})," and set it to ",(0,r.jsx)(n.code,{children:"no"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"root-login-no",src:o(9545).A+"",width:"172",height:"61"})}),"\n",(0,r.jsx)(n.h4,{id:"update-sources",children:"Update Sources"}),"\n",(0,r.jsx)(n.p,{children:"By default some mirrors are used that I am not familiar with. I usually set them back to the default"}),"\n",(0,r.jsx)(n.p,{children:"Back up the sources list"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mv /etc/apt/sources.list /etc/apt/sources.list.old\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then create and open up a new one with nano"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"nano /etc/apt/sources.list\n"})}),"\n",(0,r.jsx)(n.p,{children:"Paste in the following"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"deb http://deb.debian.org/debian bookworm main non-free-firmware\r\ndeb-src http://deb.debian.org/debian bookworm main non-free-firmware\r\n\r\ndeb http://deb.debian.org/debian-security/ bookworm-security main non-free-firmware\r\ndeb-src http://deb.debian.org/debian-security/ bookworm-security main non-free-firmware\r\n\r\ndeb http://deb.debian.org/debian bookworm-updates main non-free-firmware\r\ndeb-src http://deb.debian.org/debian bookworm-updates main non-free-firmware\r\n\r\ndeb http://deb.debian.org/debian bookworm-backports main non-free-firmware\r\ndeb-src http://deb.debian.org/debian bookworm-backports main non-free-firmware\n"})}),"\n",(0,r.jsx)(n.h4,{id:"update-your-system",children:"Update Your System"}),"\n",(0,r.jsx)(n.p,{children:"Now that we have the correct repositories, update your system"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"apt update && apt upgrade -y\n"})}),"\n",(0,r.jsx)(n.h4,{id:"set-hostname",children:"Set Hostname"}),"\n",(0,r.jsx)(n.p,{children:"By default you get the hostname of CM3588. This might be fine, but you can set your own. You can do this with"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"hostnamectl set-hostname <NEW_HOSTNAME>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["And then open up the hosts file and swap out any instance of ",(0,r.jsx)(n.code,{children:"CM3588"})," with your new hostname"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"nano /etc/hosts\n"})}),"\n",(0,r.jsx)(n.h4,{id:"reboot",children:"Reboot"}),"\n",(0,r.jsx)(n.p,{children:"Now reboot and login with the new user"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"reboot now\n"})}),"\n",(0,r.jsx)(n.h2,{id:"armbian",children:"Armbian"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:'The CM3588 has "community support" for Armbian. Meaning it may not work and should be used only if the associated risks have been accepted.'})}),"\n",(0,r.jsx)(n.p,{children:"Please make sure you have prepared your micro SD card before proceeding"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://hakehardware.github.io/docs/guides/comet/prepare-micro-sd-card",children:"Prepare Your Micro SD Card"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Download the Armbian OS for the CM3588 NAS Kit"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.armbian.com/nanopc-cm3588-nas/",children:"Armbian Download"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"At the time of this guide, there are three options available: Desktop, Minimal/IOT, and Dedicated Applications (OpenMediaVault). If you want a GUI then go for the Desktop. I will be using this headless, so the minimal/IOT image is what I downloaded and what this guide follows."}),"\n",(0,r.jsx)(n.h3,{id:"write-image-to-micro-sd-card-1",children:"Write Image to Micro SD Card"}),"\n",(0,r.jsx)(n.p,{children:"Next, the image needs to be written to the micro SD card. The steps are described here:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://hakehardware.github.io/docs/guides/comet/write-image-to-sd-card",children:"Write Image to Micro SD Card"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"boot-from-micro-sd-card",children:"Boot from Micro SD Card"}),"\n",(0,r.jsx)(n.p,{children:"Once the image has been written, insert it into the COMET and turn it on. It will automatically boot from the micro SD card. At this point I usually SSH into the COMET as it is easier to manage it from my main PC. But you could hook up a keyboard and monitor as well. Either way, after first login you will go through a setup process to reset the root password and create a new user. Once completed, update the system with"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"apt update && apt upgrade -y\n"})}),"\n",(0,r.jsx)(n.p,{children:"Once this is finished you can install Armbian on to the eMMC, which will erase everything on it, and write the OS to it so you can boot directly to Armbian via the eMMC. To do this via the CLI, run the following command"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"armbian-install\n"})}),"\n",(0,r.jsx)(n.p,{children:"A screen will pop up, select the option"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"2. Boot from eMMC - system on eMMC\n"})}),"\n",(0,r.jsx)(n.p,{children:"The system will be installed and you will be given the option to Power Off the system, choose that option and remove the SD. Now power the system back on and it should boot from the eMMC and you can log in using the username and password you created during the setup. At this point you should be good to go!"}),"\n",(0,r.jsxs)(n.p,{children:["If you can, make sure you ",(0,r.jsx)(n.a,{href:"https://www.armbian.com/newsflash/armbian-needs-your-help/",children:"support the Armbian project"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"open-media-vault",children:"Open Media Vault"}),"\n",(0,r.jsx)(n.p,{children:"TODO"})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9545:(e,n,o)=>{o.d(n,{A:()=>r});const r="data:image/png;base64,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"},8453:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>a});var r=o(6540);const s={},i=r.createContext(s);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);