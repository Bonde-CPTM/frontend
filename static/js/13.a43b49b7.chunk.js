(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[13],{115:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n(79),i=n(0),a=n(110),o=n.n(a).a.create({baseURL:"https://evento-bondecptm.herokuapp.com/"}),s=function(){var e=Object(i.useCallback)((function(e){return o.post("/event",Object(c.a)({},e))}),[]),t=Object(i.useCallback)((function(e){return o.patch("/event",Object(c.a)({},e))}),[]);return{newEvent:e,getEventById:Object(i.useCallback)((function(e){return console.log(e),o.get("/event/"+e)}),[]),editEvent:t,getEventAll:Object(i.useCallback)((function(){return o.get("/event/")}),[])}}},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(588),i=n(591),a=n(2),o=function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(c.a,{container:!0,justifyContent:"center",children:Object(a.jsx)(c.a,{item:!0,children:Object(a.jsx)(i.a,{color:"error",children:e.message})})})})}},117:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(79),i=n(579),a=n(2),o=function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(i.a,Object(c.a)({},e))})}},121:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var c=n(85),i=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";Object(c.a)(this,e),this.idEvent=t,this.nome=n,this.descricao=i,this.local=a,this.data=o,this.foto=s}},438:function(e,t,n){},582:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return $}));var c=n(79),i=n(26),a=n(593),o=n(588),s=n(591),r=n(594),j=n(595),l=n(596),d=n(597),b=n(598),u=n(599),O=n(581),x=n(600),h=n(523),f=n.n(h),m=n(524),g=n.n(m),p=n(525),v=n.n(p),y=n(0),C=n(422),k=n.n(C),E=(n(438),n(121)),w=n(115),S=n(521),R=n.n(S),T=n(578),F=n(579),P=n(116),B=n(117),I=n(143),L=n(2),M=function(e){var t=Object(I.a)({initialValues:{idFeedback:"",categoria:"",conteudo:""},onSubmit:function(t){console.log(t),e.onSubmit(t)}});return Object(L.jsx)(L.Fragment,{children:Object(L.jsx)("form",{onSubmit:t.handleSubmit,children:Object(L.jsxs)(o.a,{container:!0,spacing:2,justifyContent:"center",alignItems:"center",children:[Object(L.jsx)(o.a,{item:!0,xs:12,children:Object(L.jsx)(B.a,Object(c.a)({fullWidth:!0,type:"",label:"Mensagem",placeholder:"Digite sua mensagem",error:t.touched.conteudo&&Boolean(t.errors.conteudo),helperText:t.touched.conteudo&&t.errors.conteudo},t.getFieldProps("conteudo")))}),Object(L.jsx)(o.a,{item:!0,xs:12,children:Object(L.jsx)(T.a,{disablePortal:!0,id:"combo-box-demo",options:["Elogio","Ocorrencia","Reclamacao","Sugestao","Outros"],value:t.values.categoria,onChange:function(e,n){t.setFieldValue("categoria",n)},renderInput:function(e){return Object(L.jsx)(F.a,Object(c.a)(Object(c.a)({},e),{},{fullWidth:!0,label:"Tipo"}))}})}),Object(L.jsx)(o.a,{item:!0,xs:12,children:e.errorMessage?Object(L.jsx)(P.a,{message:e.errorMessage}):null}),Object(L.jsx)(o.a,{item:!0,children:Object(L.jsx)(a.a,{type:"submit",variant:"contained",color:"primary",children:"Enviar"})})]})})})},A=n(110),U=n.n(A),W=U.a.create({baseURL:"https://feedback-bondecptm.herokuapp.com/"}),V=n(3),H=n(522),J=n.n(H),z=n(439),D=n.n(z),G=n.p+"static/media/logo.c0649b1f.png",q=n(526),K=n.n(q),N=n(34),Q=n(23),X=U.a.create({baseURL:"https://ponto-bondecptm.herokuapp.com/"}),Y=n(32),Z={dots:!1,infinite:!1,slidesToShow:1,arrows:!1,swipe:!1,autoPlay:!1,accessibility:!1,speed:100},$=function(){var e=Object(Y.a)(),t=(Object(V.f)(),Object(y.useRef)()),n=Object(y.useState)(!1),h=Object(i.a)(n,2),m=h[0],p=h[1],C=Object(y.useState)(!1),S=Object(i.a)(C,2),T=S[0],F=S[1],P=function(){var e=Object(N.a)().getItem;return{getPoints:Object(y.useCallback)((function(){var t=e(Q.a.idCliente);return X.get("/point/"+t)}),[]),postPoints:Object(y.useCallback)((function(){var t=e(Q.a.idCliente);return X.post("/point/",{pontos:"8",idLogin:t})}),[])}}(),B=P.getPoints,I=P.postPoints,A=Object(y.useState)("0"),U=Object(i.a)(A,2),H=U[0],z=U[1];Object(y.useEffect)((function(){B().then((function(e){z(e.data.content.pontos)}))}),[]);var q=Object(y.useState)(0),$=Object(i.a)(q,2),_=$[0],ee=$[1],te=Object(w.a)(),ne=te.getEventAll,ce=te.getEventById,ie={sendFeedback:Object(y.useCallback)((function(e){return W.post("/feedback",Object(c.a)({},e))}),[]),getCategorias:Object(y.useCallback)((function(e){return W.get("/feedback/categoria")}),[])}.sendFeedback,ae=Object(y.useState)(new E.a),oe=Object(i.a)(ae,2),se=oe[0],re=oe[1],je=function(e){ce(e).then((function(e){200!==e.status&&204!==e.status||(re(e.data.content),ee(4))}))};Object(y.useEffect)((function(){t.current&&t.current.slickGoTo(_)}),[_]),Object(y.useEffect)((function(){ne().then((function(e){console.log(e),e.data&&e.data.content&&(fe(e.data.content),e.data.content.length>3?ue(e.data.content.slice(0,3)):ue(e.data.content))}))}),[ne]);var le=Object(y.useState)(new Array),de=Object(i.a)(le,2),be=de[0],ue=de[1],Oe=Object(y.useState)(new Array),xe=Object(i.a)(Oe,2),he=xe[0],fe=xe[1];return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("div",{style:{width:"100vw",background:"#fff",position:"fixed",top:0,zIndex:10,display:"flex",justifyContent:"flex-end"},children:Object(L.jsx)("div",{style:{marginTop:"5px",marginRight:"15px"},children:Object(L.jsx)(a.a,{variant:"contained",onClick:function(){p(!0)},children:Object(L.jsx)(R.a,{})})})}),Object(L.jsx)("div",{style:{marginTop:"45px"},children:Object(L.jsxs)(k.a,Object(c.a)(Object(c.a)({},Z),{},{ref:t,children:[Object(L.jsxs)("div",{children:[Object(L.jsx)(o.a,{container:!0,justifyContent:"center",children:Object(L.jsx)(o.a,{item:!0,children:Object(L.jsx)("img",{src:G,alt:"Logo Bonde CPTM"})})}),Object(L.jsxs)(o.a,{container:!0,alignItems:"center",direction:"column",spacing:2,style:{marginTop:"30px"},children:[Object(L.jsx)(o.a,{item:!0,children:Object(L.jsx)(s.a,{variant:"h5",children:"Eventos"})}),Object(L.jsx)(o.a,{item:!0,children:Object(L.jsx)(o.a,{container:!0,children:be.map((function(e,t){return Object(L.jsx)(o.a,{item:!0,md:6,xs:12,children:Object(L.jsx)("div",{onClick:function(){je(e.idEvent)},children:Object(L.jsx)(r.a,{children:Object(L.jsxs)(j.a,{children:[Object(L.jsx)(l.a,{component:"img",height:"140",image:e.foto,alt:"green iguana"}),Object(L.jsxs)(d.a,{children:[Object(L.jsx)(s.a,{gutterBottom:!0,variant:"h5",component:"div",children:e.nome}),Object(L.jsx)(s.a,{variant:"body2",color:"text.secondary",children:e.descricao})]})]})})})},t)}))})})]})]}),Object(L.jsxs)("div",{children:[Object(L.jsx)(s.a,{variant:"h4",align:"center",style:{marginBottom:"20px"},children:"Eventos"}),Object(L.jsx)(o.a,{container:!0,children:he.map((function(e,t){return Object(L.jsx)(o.a,{item:!0,md:6,xs:12,children:Object(L.jsx)("div",{onClick:function(){je(e.idEvent)},children:Object(L.jsx)(r.a,{children:Object(L.jsxs)(j.a,{children:[Object(L.jsx)(l.a,{component:"img",height:"140",image:e.foto,alt:"green iguana"}),Object(L.jsxs)(d.a,{children:[Object(L.jsx)(s.a,{gutterBottom:!0,variant:"h5",component:"div",children:e.nome}),Object(L.jsx)(s.a,{variant:"body2",color:"text.secondary",children:e.descricao})]})]})})})},t)}))})]}),Object(L.jsx)("div",{children:Object(L.jsx)("div",{style:{}})}),Object(L.jsx)("div",{children:Object(L.jsx)("div",{children:Object(L.jsx)(o.a,{container:!0,justifyContent:"center",children:Object(L.jsx)(o.a,{item:!0,md:6,xs:10,children:Object(L.jsx)("div",{style:{display:"flex",background:e.palette.primary.main,color:"white",justifyContent:"center",padding:"20px",marginTop:"30px",borderRadius:"20px"},children:Object(L.jsxs)(s.a,{children:["Voc\xea possui ",Object(L.jsx)("br",{}),Object(L.jsxs)("span",{style:{fontWeight:"bold"},children:[H," pontos"]})]})})})})})}),Object(L.jsx)("div",{children:Object(L.jsxs)(o.a,{container:!0,justifyContent:"center",direction:"column",spacing:2,children:[Object(L.jsx)(o.a,{item:!0,xs:10,children:Object(L.jsx)(o.a,{container:!0,justifyContent:"center",children:Object(L.jsx)(o.a,{item:!0,children:Object(L.jsx)("img",{style:{maxWidth:"100%",maxHeight:"200px"},src:se.foto})})})}),Object(L.jsx)(o.a,{item:!0,xs:10,children:Object(L.jsx)(s.a,{variant:"h5",align:"center",children:se.nome})}),Object(L.jsx)(o.a,{item:!0,xs:10,children:Object(L.jsx)(s.a,{variant:"h5",align:"center",children:se.local})}),Object(L.jsx)(o.a,{item:!0,xs:10,children:Object(L.jsx)(s.a,{variant:"h5",align:"center",children:se.data})}),Object(L.jsx)(o.a,{item:!0,xs:10,children:Object(L.jsx)(s.a,{variant:"h5",align:"center",children:se.descricao})}),Object(L.jsx)(o.a,{item:!0,xs:10,children:Object(L.jsx)(o.a,{container:!0,justifyContent:"center",children:Object(L.jsx)(o.a,{item:!0,children:Object(L.jsxs)(a.a,{onClick:function(){F(!0)},variant:"contained",color:"primary",children:[Object(L.jsx)(J.a,{style:{marginRight:"10px"}}),"Marcar presen\xe7a"]})})})}),Object(L.jsx)(o.a,{item:!0,xs:10})]})})]}))}),Object(L.jsx)("div",{style:{position:"fixed",bottom:0,width:"100vw"},children:Object(L.jsxs)(b.a,{showLabels:!0,value:_,onChange:function(e,t){ee(t)},children:[Object(L.jsx)(u.a,{onClick:function(){ee(0)},label:"Home",icon:Object(L.jsx)(f.a,{})}),Object(L.jsx)(u.a,{onClick:function(){ee(1)},label:"Eventos",icon:Object(L.jsx)(g.a,{})}),Object(L.jsx)(u.a,{onClick:function(){ee(2)},label:"Trens",icon:Object(L.jsx)(v.a,{})}),Object(L.jsx)(u.a,{onClick:function(){ee(3)},label:"Perfil",icon:Object(L.jsx)(K.a,{})})]})}),T?Object(L.jsx)(O.a,{open:T,onClose:function(){F(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(L.jsx)(x.a,{mt:5,children:Object(L.jsx)(o.a,{container:!0,justifyContent:"center",children:Object(L.jsx)(o.a,{item:!0,md:6,xs:10,style:{background:"#fff",padding:"30px",borderRadius:"20px"},children:Object(L.jsx)(D.a,{width:"100%",onUpdate:function(e,t){t&&I().then((function(e){200!==e.status&&204!==e.status||(z(e.data.content.pontos),F(!1),alert("Sucesso ao verificar o c\xf3digo"))}))}})})})})}):null,Object(L.jsx)(O.a,{open:m,onClose:function(){p(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(L.jsx)(x.a,{mt:5,children:Object(L.jsx)(o.a,{container:!0,justifyContent:"center",children:Object(L.jsxs)(o.a,{md:6,xs:10,style:{background:"#fff",padding:"30px",borderRadius:"20px"},children:[Object(L.jsx)(s.a,{variant:"h5",align:"center",style:{marginBottom:"20px"},children:"Enviar feedback"}),Object(L.jsx)(M,{onSubmit:function(e){ie(e).then((function(e){201!==e.status&&200!==e.status||p(!1)}))}})]})})})})]})}}}]);
//# sourceMappingURL=13.a43b49b7.chunk.js.map