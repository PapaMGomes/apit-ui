(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[290],{6499:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return ne}});var i=t(7294),r=t(5953),a=t(3915),n=t(9499),s=t(5434),d=t(714),l={className:"animate__animated animate__fadeInDown"},c=d.ZP.section.withConfig({displayName:"styles__Backdrop",componentId:"sc-53451m-0"})([""," background:#000000a1;padding-top:16vh;"],{position:"fixed",width:"100%",height:"100%",top:"0px",left:"0px",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",zIndex:"30"}),m=d.ZP.article.attrs(l).withConfig({displayName:"styles__ModalContainer",componentId:"sc-53451m-1"})([""," height:40vh;background:",";max-height:75vh;max-width:1440px;"],{padding:"1.5rem",paddingBottom:"2.5rem",display:"flex",flexDirection:"column",zIndex:"50",borderRadius:"0.5rem",marginLeft:"3.5rem",marginRight:"3.5rem"},(function(e){return e.theme.colors.bgPrimary})),p=d.ZP.div.withConfig({displayName:"styles__ModalHeader",componentId:"sc-53451m-2"})([""]),g=d.ZP.div.withConfig({displayName:"styles__ModalBody",componentId:"sc-53451m-3"})([""," ::-webkit-scrollbar-thumb{border:0px solid #ffffff;background-color:",";}"],{flex:"1 1 auto",overflowY:"auto",overflowX:"hidden"},(function(e){var o=e.theme;return e.color||o.colors.primary})),f=d.ZP.div.withConfig({displayName:"styles__ModalFooter",componentId:"sc-53451m-4"})(["",""],{paddingTop:"0.5rem",paddingBottom:"0.5rem"}),h=d.ZP.button.attrs(l).withConfig({displayName:"styles__Button",componentId:"sc-53451m-5"})([""," background:",";color:",";> svg{","}"],{paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",display:"flex",justifyContent:"center",alignItems:"center",zIndex:"50",borderRadius:"9999px",position:"relative",bottom:"1.25rem"},(function(e){var o=e.theme;return e.color||o.colors.primary}),(function(e){return e.theme.colors.bgPrimary}),{fontSize:"1.125rem",marginLeft:"0.5rem"}),u=t(5893);function w(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);o&&(i=i.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,i)}return t}function x(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?w(Object(t),!0).forEach((function(o){(0,n.Z)(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}var y=function(e){var o=(0,i.useRef)(null),t=e.color,r=e.width,a=e.isOpen,n=e.height,d=e.header,l=e.footer,w=e.maxWidth,y=e.children,b=e.maxHeight,C=e.onClickClose,j=e.onBackdropClick,_=e.containerStyle;(0,i.useEffect)((function(){document.body.style.overflow=a?"hidden":"auto"}),[a]);return(0,u.jsx)(u.Fragment,{children:a&&(0,u.jsxs)(c,{ref:o,onClick:function(e){var t=e.target;t===o.current&&j&&j()},children:[(0,u.jsxs)(m,{style:x(x({maxWidth:w,maxHeight:b},_),{},{width:r||490,height:n||"fit-content"}),children:[d&&(0,u.jsx)(p,{children:d}),(0,u.jsx)(g,{color:t,children:y}),l&&(0,u.jsx)(f,{children:l})]}),C&&(0,u.jsxs)(h,{color:t,onClick:function(){return C()},children:["Fechar",(0,u.jsx)(s.FU5,{})]})]})})},b=t(3750),C=d.ZP.section.withConfig({displayName:"styles__Container",componentId:"sc-5yed5i-0"})([""]),j=d.ZP.p.withConfig({displayName:"styles__Title",componentId:"sc-5yed5i-1"})([""," color:",";"],{marginBottom:"1rem",fontWeight:"700",width:"100%",display:"flex",justifyContent:"space-between"},(function(e){var o=e.theme,t=e.color;return t||o.colors.text})),_=d.ZP.article.withConfig({displayName:"styles__Content",componentId:"sc-5yed5i-2"})([""," scroll-snap-align:center;"],{display:"grid",gap:"0.75rem","@media (max-width: 640px)":{width:"70vw"}}),k=d.ZP.div.withConfig({displayName:"styles__Card",componentId:"sc-5yed5i-3"})([""," border:1px solid ",";"],{paddingLeft:"1rem",paddingRight:"1rem",paddingTop:"0.5rem",paddingBottom:"0.5rem","--tw-shadow":"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",borderRadius:"0.5rem",display:"flex",alignItems:"center",justifyContent:"space-between"},(function(e){return e.theme.colors.gray})),P=d.ZP.p.withConfig({displayName:"styles__Text",componentId:"sc-5yed5i-4"})(["",""],{fontSize:"100%"}),v=d.ZP.i.withConfig({displayName:"styles__Icon",componentId:"sc-5yed5i-5"})([""," > svg{","}"],{display:"flex",alignItems:"center"},{marginRight:"0.25rem"}),I=function(e){var o=e.color,t=e.items,i=e.title,r=e.workload;return(0,u.jsxs)(C,{children:[(0,u.jsxs)(j,{color:o,children:[i,(0,u.jsxs)(v,{children:[(0,u.jsx)(b.lN8,{}),r," horas"]})]}),(0,u.jsx)(_,{children:t.map((function(e,o){return(0,u.jsxs)(k,{children:[(0,u.jsx)(P,{children:e.title}),(0,u.jsxs)(v,{children:[(0,u.jsx)(b.lN8,{}),e.workload,"h"]})]},o)}))})]})},N=d.ZP.section.withConfig({displayName:"styles__Container",componentId:"sc-1v6a0be-0"})([""]),Z=d.ZP.article.withConfig({displayName:"styles__Header",componentId:"sc-1v6a0be-1"})([""," background:",";color:",";"],{height:"6rem",width:"100%",paddingLeft:"1.25rem",paddingRight:"1.25rem",borderTopLeftRadius:"0.5rem",borderTopRightRadius:"0.5rem",display:"flex",flexDirection:"column",justifyContent:"center"},(function(e){return e.color}),(function(e){return e.theme.colors.bgPrimary})),T=d.ZP.h4.withConfig({displayName:"styles__Title",componentId:"sc-1v6a0be-2"})(["",""],{fontSize:"1.125rem",display:"flex"}),z=d.ZP.i.withConfig({displayName:"styles__Icon",componentId:"sc-1v6a0be-3"})([""," > svg{","}"],{marginLeft:"0.75rem",display:"flex",alignItems:"center",fontSize:"1rem"},{marginLeft:"0.25rem"}),R=d.ZP.p.withConfig({displayName:"styles__Subtitle",componentId:"sc-1v6a0be-4"})(["",""],{marginTop:"1rem"}),O=d.ZP.section.withConfig({displayName:"styles__Body",componentId:"sc-1v6a0be-5"})([""," scroll-snap-type:x mandatory;&::-webkit-scrollbar{","}"],{paddingLeft:"1.25rem",paddingRight:"1.25rem",paddingTop:"0.75rem",paddingBottom:"0.75rem",display:"grid",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:"1.75rem","@media (max-width: 640px)":{display:"flex",overflowX:"auto"}},{display:"none"}),L=function(e){var o=e.isOpen,t=e.onBackdropClick,i=e.onClose,r=e.course,n=function(e){return e?e.reduce((function(e,o){var t=o.workload;return e+Number(t)}),0):0},s=n(r.basic),d=n(r.specific),l=s+d;return(0,u.jsx)(y,{width:"90vw",isOpen:o,color:r.color,onClickClose:i,onBackdropClick:t,containerStyle:{padding:"0px 0px 2.5rem 0px"},header:(0,u.jsxs)(Z,{color:r.color,children:[(0,u.jsxs)(T,{children:[r.title,(0,u.jsxs)(z,{children:[l,"h",(0,u.jsx)(b.lN8,{})]})]}),(0,u.jsx)(R,{children:"Confira as diciplinas do curso"})]}),children:(0,u.jsx)(N,{children:(0,u.jsxs)(O,{children:[(0,u.jsx)(I,{title:"B\xe1sico",items:r.basic,color:a.Z.colors.blue,workload:s}),(0,u.jsx)(I,{title:"Espec\xedfico",items:r.specific,color:a.Z.colors.red,workload:d})]})})})},E=t(8152),B=(0,d.ZP)(E.zj).withConfig({displayName:"styles__Container",componentId:"sc-1riog4o-0"})(["",""],{marginTop:"2rem"}),S=d.ZP.h4.withConfig({displayName:"styles__Title",componentId:"sc-1riog4o-1"})([""," color:",";"],{fontSize:"1.125rem",fontWeight:"700",marginBottom:"2rem"},(function(e){return e.theme.colors.orange})),F=d.ZP.article.withConfig({displayName:"styles__Content",componentId:"sc-1riog4o-2"})(["",""],{display:"grid",gap:"1.25rem",gridTemplateColumns:"repeat(5, minmax(0, 1fr))","@media (max-width: 890px)":{gridTemplateColumns:"repeat(2, minmax(0, 1fr))"}}),A=d.ZP.div.withConfig({displayName:"styles__Card",componentId:"sc-1riog4o-3"})([""," &:hover{> figure > img{transform:scale(1.2);}> section{> b{transform:scale(1.1);}> button{"," color:",";}}}"],{height:"14rem","--tw-shadow":"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",borderRadius:"0.5rem",cursor:"pointer"},{fontWeight:"700"},(function(e){return e.color})),D=d.ZP.section.withConfig({displayName:"styles__CardBody",componentId:"sc-1riog4o-4"})(["",""],{height:"40%",paddingLeft:"1.25rem",paddingRight:"1.25rem",paddingTop:"1.25rem",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}),M=d.ZP.figure.withConfig({displayName:"styles__ImageContainer",componentId:"sc-1riog4o-5"})(["",""],{height:"60%",width:"100%",borderTopLeftRadius:"0.5rem",borderTopRightRadius:"0.5rem",overflow:"hidden"}),G=d.ZP.img.withConfig({displayName:"styles__Image",componentId:"sc-1riog4o-6"})(["",""],{borderTopLeftRadius:"0.5rem",borderTopRightRadius:"0.5rem",objectFit:"cover",width:"100%",height:"100%",transitionProperty:"transform",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"700ms"}),W=d.ZP.b.withConfig({displayName:"styles__CardTitle",componentId:"sc-1riog4o-7"})(["",""],{transitionProperty:"transform",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"500ms"}),X=(0,d.ZP)(E.JI).withConfig({displayName:"styles__Button",componentId:"sc-1riog4o-8"})([""]),H=function(){var e=(0,i.useState)(!1),o=e[0],t=e[1],r=(0,i.useState)({}),n=r[0],s=r[1],d=[{image:"/_next/static/images/management-16757dacf848799566285cbc6ddee46b.jpg",title:"Administra\xe7\xe3o",color:a.Z.colors.purple,basic:[{title:"Cidadania e Participa\xe7\xe3o Social",workload:36},{title:"Direito do Trabalho",workload:26},{title:"Educa\xe7\xe3o para o Trabalho",workload:40},{title:"Matem\xe1tica Aplicada e Financeira",workload:50},{title:"Portugu\xeas e Reda\xe7\xe3o Comercial",workload:56}],specific:[{title:"Gest\xe3o Empresarial",workload:50},{title:"Introdu\xe7\xe3o a Administra\xe7\xe3o",workload:20},{title:"Administra\xe7\xe3o Financeira",workload:20},{title:"Contabilidade Geral",workload:24},{title:"Administra\xe7\xe3o de RH",workload:20},{title:"Administra\xe7\xe3o e Marketing",workload:30},{title:"Economia e Mercado de Capitais",workload:40},{title:"Administra\xe7\xe3o de Materiais e Produtos",workload:24}]},{image:"/_next/static/images/logistics-b042fdfa09fa65c0c8cb3a8d12e8939e.jpg",title:"Log\xedstica",color:a.Z.colors.red,basic:[{title:"Portugu\xeas e Reda\xe7\xe3o Comercial",workload:40},{title:"Compet\xeancias  b\xe1sicas",workload:40},{title:"Cidadania e Participa\xe7\xe3o social",workload:20},{title:"Contextualiza\xe7\xe3o Teorico-Pratica de aprendizagem",workload:36},{title:"Gest\xe3o de Pessoas aplicada a log\xedstica",workload:32},{title:"Matem\xe1tica Financeira e Contabilidade",workload:40}],specific:[{title:"Log\xedstica de Armazenagem e Gest\xe3o de Estoques",workload:20},{title:"Planejamento estrat\xe9gico e log\xedstico",workload:14},{title:"Sistema de canais de Marketing e Log\xedstica",workload:16},{title:"Log\xedstica no Comercio exterior",workload:16},{title:"Tecnologia da informa\xe7\xe3o em Log\xedstica",workload:16},{title:"Estrat\xe9gia do transporte",workload:16},{title:"Legisla\xe7\xe3o aplicada log\xedstica e \xe9tica",workload:16},{title:"Log\xedstica Integrada",workload:16},{title:"Gest\xe3o de log\xedstica reversa",workload:16},{title:"Gest\xe3o da cadeia de suprimentos",workload:16},{title:"Gest\xe3o de Custos log\xedsticos",workload:16},{title:"Administra\xe7\xe3o da produ\xe7\xe3o",workload:14},{title:"Gest\xe3o ambiental",workload:16}]},{image:"/_next/static/images/retail-91fb8bd19c0202b42987e553865b07a4.jpg",title:"Varejo",color:a.Z.colors.orange,basic:[{title:"Portugu\xeas e Reda\xe7\xe3o Comercia",workload:46},{title:"Contextualiza\xe7\xe3o Te\xf3rica-Pratica de Aprendizagem",workload:40},{title:"Cidadania e Participa\xe7\xe3o social",workload:32},{title:"Matem\xe1tica aplicada e Financeira",workload:50},{title:"Educa\xe7\xe3o e Direito do trabalho",workload:40}],specific:[{title:"Gest\xe3o de Varejo",workload:24},{title:"Marketing no varejo",workload:48},{title:"Log\xedstica e estoque",workload:40},{title:"Tecnologia da informa\xe7\xe3o",workload:48},{title:"Log\xedstica e Transporte",workload:48}]}];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(B,{children:[(0,u.jsx)(S,{children:"Cursos"}),(0,u.jsx)(F,{children:d.map((function(e,o){return(0,u.jsxs)(A,{color:e.color,onClick:function(){return function(e){s(e),t(!0)}(e)},children:[(0,u.jsx)(M,{children:(0,u.jsx)(G,{src:e.image,alt:e.title})}),(0,u.jsxs)(D,{children:[(0,u.jsx)(W,{children:e.title}),(0,u.jsx)(X,{children:"Ver mais"})]})]},o)}))})]}),(0,u.jsx)(L,{course:n,isOpen:o,onClose:function(){return t(!1)}})]})},q=t(2927),V=(0,d.ZP)(E.zj).withConfig({displayName:"styles__Container",componentId:"sc-zkgjnd-0"})(["",""],{marginTop:"3rem"}),J=d.ZP.b.withConfig({displayName:"styles__Title",componentId:"sc-zkgjnd-1"})([""]),U=d.ZP.article.withConfig({displayName:"styles__Content",componentId:"sc-zkgjnd-2"})([""," scroll-snap-type:x mandatory;&::-webkit-scrollbar{","}"],{marginTop:"1.5rem",marginBottom:"1.5rem",display:"grid",gap:"0.5rem",gridTemplateColumns:"repeat(5, minmax(0, 1fr))","@media (max-width: 890px)":{display:"flex",overflowX:"auto"}},{display:"none"}),Y=d.ZP.div.withConfig({displayName:"styles__Card",componentId:"sc-zkgjnd-3"})([""," border:1px solid ",";scroll-snap-align:center;"],{padding:"1rem",display:"flex",alignItems:"center",justifyContent:"center","--tw-shadow":"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",borderRadius:"0.5rem","@media (max-width: 890px)":{minWidth:"50vw"}},(function(){return q.m.program.color})),K=d.ZP.p.withConfig({displayName:"styles__Text",componentId:"sc-zkgjnd-4"})(["",""],{textAlign:"center",cursor:"default"}),Q=function(){return(0,u.jsxs)(V,{children:[(0,u.jsx)(J,{children:"No processo de aperfei\xe7oamento do Est\xe1gio, auxiliamos as institui\xe7\xf5es de ensino a:"}),(0,u.jsx)(U,{children:[{label:"identificar as oportunidades de Est\xe1gio"},{label:"ajustar suas condi\xe7\xf5es de realiza\xe7\xe3o de Est\xe1gio"},{label:"fazer o acompanhamento administrativo"},{label:"encaminhar negocia\xe7\xe3o de seguros contra acidentes pessoais do estudante"},{label:"cadastrar os estudantes interessados em Est\xe1gio para encaminhar para as concedentes"}].map((function(e,o){return(0,u.jsx)(Y,{children:(0,u.jsx)(K,{children:e.label})},o)}))}),(0,u.jsx)(J,{children:"Oferecemos ainda a sele\xe7\xe3o dos locais de est\xe1gio e organizamos o cadastro das empresas concedentes destas oportunidades."})]})},$=d.ZP.p.withConfig({displayName:"styles__Text",componentId:"sc-18x9am7-0"})([""," color:",";"],{width:"60%",marginTop:"1rem",textAlign:"center","@media (max-width: 640px)":{fontSize:"0.75rem"}},(function(e){return e.theme.colors.bgPrimary})),ee=(0,d.ZP)(E.JI).withConfig({displayName:"styles__Button",componentId:"sc-18x9am7-1"})([""," background:#FFF;color:var(--footer-color);"],{paddingLeft:"1rem",paddingRight:"1rem",marginTop:"1.5rem",fontWeight:"700",fontSize:"80%","@media (max-width: 640px)":{width:"50%"}}),oe=t(2402),te=t(3071),ie=t(6350),re=function(){return(0,u.jsxs)(ie.Z,{color:q.m.program.color,containerClass:"h-[40vh]",children:[(0,u.jsx)(ie.t,{children:"Programas"}),(0,u.jsx)($,{children:"A APIT disponibiliza, \xe0s Institui\xe7\xf5es de Ensino, servi\xe7os que garantem a qualidade, controle, acompanhamento e a legalidade dos est\xe1gios dos seus estudantes."}),(0,u.jsx)(ee,{onClick:function(){return(0,oe.X)(te.D.curriculumRegistration)},children:"Cadastre seu curr\xedculo"})]})},ae=t(6515),ne=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r.Z,{title:"Programas"}),(0,u.jsxs)(E.p_,{children:[(0,u.jsx)(re,{}),(0,u.jsx)(Q,{}),(0,u.jsx)(H,{}),(0,u.jsx)(ae.Z,{})]})]})}},2569:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/program",function(){return t(6499)}])}},function(e){e.O(0,[228,755,90,774,888,179],(function(){return o=2569,e(e.s=o);var o}));var o=e.O();_N_E=o}]);