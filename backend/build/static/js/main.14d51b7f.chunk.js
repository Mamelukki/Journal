(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{141:function(e,t,n){},142:function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n(14),i=n.n(c),o=n(11),s=n(6),u=n.n(s),l=n(8),d=n(13),j=n(59),b=n(69),p=n(23),f=n.n(p),h="LoggedJournalAppUser",x=function(e){return localStorage.setItem(h,JSON.stringify(e))},O=function(){return JSON.parse(localStorage.getItem(h))},g=function(){return localStorage.removeItem(h)},m="/api/journalEntries",v=function(){if(O())return{headers:{Authorization:"bearer ".concat(O().token)}}},y={getAll:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(m);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),createNew:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post(m,t,v());case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),edit:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.put("".concat(m,"/").concat(t.id),t,v());case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),remove:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.delete("".concat(m,"/").concat(t),v());case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),addImage:function(){var e=Object(l.a)(u.a.mark((function e(t,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("".concat(m,"/").concat(t,"/images"),n,v());case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),removeImage:function(){var e=Object(l.a)(u.a.mark((function e(t,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.delete("".concat(m,"/").concat(t,"/images/").concat(n),v());case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},w="/api/users",k=function(){if(O())return{headers:{Authorization:"bearer ".concat(O().token)}}},E={getAll:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(w);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),createNew:function(){var e=Object(l.a)(u.a.mark((function e(t,n){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={username:t,password:n},e.next=3,f.a.post(w,r);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.delete("".concat(w,"/").concat(t),k());case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},I=function(){return function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.getAll();case 2:n=e.sent,t({type:"INIT_USERS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"ADD_USER",data:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_USERS":return t.data;case"ADD_USER":return[].concat(Object(b.a)(e),[t.data]);case"REMOVE_USER":return e.filter((function(e){return e.id!==t.data}));default:return e}},N=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"ADD_JOURNAL_ENTRY",data:e}),n(I());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},C=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"EDIT_JOURNAL_ENTRY",data:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},R=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"ADD_IMAGE",data:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},T=function(e,t){return function(){var n=Object(l.a)(u.a.mark((function n(r){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r({type:"REMOVE_IMAGE",journalEntryId:e,imageId:t});case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},A=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"REMOVE_JOURNAL_ENTRY",data:e}),n(I());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_JOURNAL_ENTRIES":return t.data;case"ADD_JOURNAL_ENTRY":return[].concat(Object(b.a)(e),[t.data]);case"EDIT_JOURNAL_ENTRY":return e.map((function(e){return e.id===t.data.id?t.data:e}));case"ADD_IMAGE":var n=e.find((function(e){return e.id===t.data.journalEntry.id})),r=Object(j.a)(Object(j.a)({},n),{},{images:n.images.concat(t.data)});return e.map((function(e){return e.id!==t.data.journalEntry.id?e:r}));case"REMOVE_IMAGE":var a=e.find((function(e){return e.id===t.journalEntryId})),c=Object(j.a)(Object(j.a)({},a),{},{images:a.images.filter((function(e){return e.id!==t.imageId}))});return e.map((function(e){return e.id!==t.journalEntryId?e:c}));case"REMOVE_JOURNAL_ENTRY":return e.filter((function(e){return e.id!==t.data}));default:return e}},_=function(e,t,n){return function(){var a=Object(l.a)(u.a.mark((function a(c){return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:c({type:"SET_NOTIFICATION",data:{messageType:t,message:e}}),r&&clearTimeout(r),r=setTimeout((function(){c(L())}),1e3*n);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},L=function(){return{type:"REMOVE_NOTIFICATION"}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NOTIFICATION":return t.data;case"REMOVE_NOTIFICATION":return null;default:return e}},z=n(192),F=n(180),J=n(1),M=function(e){var t=e.journalEntry,n=e.showEditForm,r=e.setShowEditForm,c=Object(o.b)(),i=Object(a.useState)(t.content),s=Object(d.a)(i,2),j=s[0],b=s[1],p=Object(a.useState)(t.feelings),f=Object(d.a)(p,2),h=f[0],x=f[1],O=Object(a.useState)(t.title),g=Object(d.a)(O,2),m=g[0],v=g[1],w=function(){var e=Object(l.a)(u.a.mark((function e(a){var i,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,i=t.id,e.next=5,y.edit({id:i,content:j,feelings:h,title:m});case 5:o=e.sent,c(C(o)),c(_("Journal entry edited","success",5)),r(!n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),c(_("".concat(e.t0.response.data.error),"error",5));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(J.jsxs)("span",{children:[Object(J.jsx)("h4",{children:"Edit journal entry"}),Object(J.jsxs)("form",{onSubmit:w,children:[Object(J.jsxs)("div",{children:[Object(J.jsx)("div",{children:Object(J.jsx)(z.a,{label:"Title",fullWidth:!0,id:"title",value:m,onChange:function(e){var t=e.target;return v(t.value)}})}),Object(J.jsx)("div",{children:Object(J.jsx)(z.a,{label:"Feelings",fullWidth:!0,id:"feelings",value:h,onChange:function(e){var t=e.target;return x(t.value)}})}),Object(J.jsx)(z.a,{label:"Content",multiline:!0,rows:7,fullWidth:!0,id:"editedContent",value:j,onChange:function(e){var t=e.target;return b(t.value)}})]}),Object(J.jsx)("br",{}),Object(J.jsx)(F.a,{style:{marginRight:"10px"},variant:"contained",color:"primary",type:"submit",children:"Submit"}),Object(J.jsx)(F.a,{style:{marginRight:"10px"},variant:"contained",color:"secondary",onClick:function(){return v(t.title),b(t.content),void x(t.feelings)},children:"Reset original values"}),Object(J.jsx)(F.a,{style:{marginRight:"10px"},variant:"contained",onClick:function(){return v(t.title),b(t.content),x(t.feelings),void r(!n)},children:"Cancel"})]})]})},W=n(182),V=n(66),G=n.n(V),Y=n(93),P=n.n(Y),H=n(94),Z=n.n(H),q=n(181),K=Object(q.a)((function(){return{journalEntryImage:{position:"relative","& .imageDeleteButton":{display:"none"},"& .zoomButton":{display:"none"},"&:hover .zoomButton":{display:"block",position:"absolute",color:"white",top:"10px",left:"1px",zIndex:"100"},"&:hover .imageDeleteButton":{display:"block",position:"absolute",color:"white",top:"10px",right:"1px",zIndex:"100"}},zoomedImage:{position:"relative",marginTop:"25px","& .closeZoomButton":{display:"inline-block",position:"absolute",color:"black",top:"0px",right:"0px",zIndex:"100"},"& .zoomedBackgroundImage":{height:"auto",maxWidth:"80%"}}}})),Q=function(e){var t=e.journalEntry,n=Object(o.b)(),r=Object(a.useState)(""),c=Object(d.a)(r,2),i=c[0],s=c[1],j=Object(a.useState)(!0),b=Object(d.a)(j,2),p=b[0],f=b[1],h=K(),x="";i&&(x=t.images.find((function(e){return e.id===i})));var O=function(){var e=Object(l.a)(u.a.mark((function e(t,r){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!0!==p){e.next=11;break}return f(!1),n(_("Deleting image, please wait","info",5)),e.next=6,y.removeImage(t,r);case 6:n(T(t,r)),n(_("Image deleted","success",5)),f(!0),e.next=12;break;case 11:n(_("Wait for the deletion to finish","error",5));case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),n(_("".concat(e.t0.response.data.error),"error",5)),f(!0);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(J.jsx)("div",{children:t.images?""===i?Object(J.jsx)("div",{style:{position:"relative",display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr",gridGap:"10px",justifyContent:"space-between",marginTop:"25px"},children:t.images.map((function(e){return Object(J.jsxs)("div",{className:h.journalEntryImage,children:[Object(J.jsx)("p",{className:"backgroundImage",style:{backgroundImage:"url(".concat(e.imageUrl,")"),height:"200px",width:"100%",backgroundSize:"cover",backgroundPosition:"center"}}),Object(J.jsx)(W.a,{className:"imageDeleteButton",onClick:function(){return O(t.id,e.id)},children:Object(J.jsx)(G.a,{})}),Object(J.jsx)(W.a,{className:"zoomButton",onClick:function(){return t=e.id,void s(t);var t},children:Object(J.jsx)(P.a,{})})]},e.id)}))}):Object(J.jsxs)("div",{className:h.zoomedImage,children:[Object(J.jsx)("img",{className:"zoomedBackgroundImage",src:x.imageUrl}),Object(J.jsx)(W.a,{className:"closeZoomButton",onClick:function(){return s("")},children:Object(J.jsx)(Z.a,{})})]}):null})},X=n(96),$=n.n(X),ee=n(95),te=n.n(ee),ne=n(17),re=n(183),ae=function(e){var t=e.journalEntry;if(!t)return null;var n=Object(ne.f)(),r=Object(o.b)(),c=new Date(t.date),i=c.getDate(),s=c.getMonth(),j=c.getFullYear(),b=Object(a.useState)(""),p=Object(d.a)(b,2),f=p[0],h=p[1],x=t.id,O=Object(a.useState)(!1),g=Object(d.a)(O,2),m=g[0],v=g[1],w=Object(a.useState)(!0),k=Object(d.a)(w,2),E=k[0],I=k[1],S=Object(a.useState)(!1),D=Object(d.a)(S,2),N=D[0],C=D[1],T=Object(a.useState)(!0),U=Object(d.a)(T,2),L=U[0],B=U[1],z=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to remove this journal entry? Confirming will also delete the images of this journal entry.")){e.next=18;break}if(e.prev=2,!0!==L){e.next=12;break}return B(!1),r(_("Deleting entry, please wait","info",5)),e.next=8,y.remove(t);case 8:r(A(t)),r(_("Journal entry deleted","success",5)),B(!0),n.push("/journalEntries");case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),r(_("".concat(e.t0.response.data.error),"success",5)),B(!0);case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),f&&null!==f){e.next=5;break}return e.abrupt("return",r(_("Please choose an image before uploading","error",5)));case 5:return e.prev=5,I(!1),(n=new FormData).append("image",f),e.next=11,y.addImage(x,n);case 11:a=e.sent,r(R(a)),r(_("Image added successfully","success",5)),I(!0),h(null),document.getElementById("imageUpload").value="",e.next=26;break;case 19:e.prev=19,e.t0=e.catch(5),I(!1),e.t0.response.data.error?r(_("".concat(e.t0.response.data.error),"error",15)):r(_("".concat(e.t0.response.data),"error",5)),I(!0),h(null),document.getElementById("imageUpload").value="";case 26:case"end":return e.stop()}}),e,null,[[5,19]])})));return function(t){return e.apply(this,arguments)}}();return Object(J.jsxs)("div",{children:[Object(J.jsxs)("div",{children:[!1===m&&!1===N?Object(J.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:[Object(J.jsx)("div",{style:{margin:"5px"},children:Object(J.jsx)(F.a,{variant:"contained",color:"primary",startIcon:Object(J.jsx)(te.a,{}),onClick:function(){return v(!m)},children:"Edit"})}),Object(J.jsx)("div",{style:{margin:"5px"},children:Object(J.jsx)(F.a,{variant:"contained",color:"primary",startIcon:Object(J.jsx)($.a,{}),onClick:function(){return C(!N)},children:"Add image"})}),Object(J.jsx)("div",{style:{margin:"5px"},children:Object(J.jsx)(F.a,{variant:"contained",color:"secondary",startIcon:Object(J.jsx)(G.a,{}),onClick:function(){return z(t.id)},children:"Delete"})})]}):null,Object(J.jsx)("div",{style:{marginTop:"10px"},children:!1===m&&N&&!0===E?Object(J.jsxs)("div",{children:[Object(J.jsx)("h2",{children:"Add image"}),Object(J.jsx)("div",{children:"Upload one image at a time. The maximum number of images per entry is 10. Accepted formats are .jpeg, .jpg, .png and .gif."}),Object(J.jsx)("br",{}),Object(J.jsxs)("form",{onSubmit:W,children:[Object(J.jsx)("input",{accept:"image/png, image/jpg, image/gif, image/jpeg",type:"file",id:"imageUpload",onChange:function(e){return h(e.target.files[0])}}),Object(J.jsx)("label",{htmlFor:"imageUpload"}),Object(J.jsxs)("div",{style:{marginTop:"15px"},children:[f&&!0===E?Object(J.jsx)(F.a,{style:{marginRight:"10px"},variant:"contained",color:"primary",type:"submit",children:"Add image"}):null,Object(J.jsx)(F.a,{variant:"contained",onClick:function(){return C(!1),void h("")},children:"Close"})]})]})]}):null}),!0===N&&!1===E?Object(J.jsxs)("div",{children:[Object(J.jsx)("h2",{children:"Add image"}),Object(J.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:[Object(J.jsx)(re.a,{}),Object(J.jsx)("span",{style:{marginLeft:"10px"},children:"Uploading image, please wait!"})]})]}):null]}),Object(J.jsx)("div",{style:{marginTop:"25px",marginBottom:"25px"},children:m?Object(J.jsx)(M,{journalEntry:t,showEditForm:m,setShowEditForm:v}):null}),Object(J.jsxs)("div",{style:{marginBottom:"25px",marginTop:"25px"},children:[Object(J.jsx)("h2",{children:"".concat(i,"/").concat(s,"/").concat(j)}),Object(J.jsx)("h1",{style:{textTransform:"uppercase"},children:t.title}),t.feelings?Object(J.jsxs)("h4",{children:["Feelings: ",t.feelings]}):null,Object(J.jsx)("div",{style:{whiteSpace:"pre-line"},children:t.content})]}),Object(J.jsx)("div",{children:Object(J.jsx)(Q,{journalEntry:t})})]})},ce=n(18),ie=function(e){var t=e.showAddForm,n=e.setShowAddForm,r=Object(o.b)(),c=Object(a.useState)(""),i=Object(d.a)(c,2),s=i[0],j=i[1],b=Object(a.useState)(""),p=Object(d.a)(b,2),f=p[0],h=p[1],x=Object(a.useState)(""),O=Object(d.a)(x,2),g=O[0],m=O[1],v=function(){var e=Object(l.a)(u.a.mark((function e(a){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,y.createNew({title:s,content:f,feelings:g});case 4:c=e.sent,r(N(c)),r(_("New journal entry added","success",5)),j(""),h(""),m(""),n(!t),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),r(_("".concat(e.t0.response.data.error),"error",5));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(J.jsxs)("div",{children:[Object(J.jsx)("h3",{style:{textAlign:"left"},children:"How was your day?"}),Object(J.jsxs)("form",{onSubmit:v,children:[Object(J.jsxs)("div",{children:[Object(J.jsx)("div",{children:Object(J.jsx)(z.a,{label:"Title",fullWidth:!0,id:"title",value:s,onChange:function(e){var t=e.target;return j(t.value)}})}),Object(J.jsx)("div",{children:Object(J.jsx)(z.a,{label:"Feelings",fullWidth:!0,id:"feelings",value:g,onChange:function(e){var t=e.target;return m(t.value)}})}),Object(J.jsx)("div",{children:Object(J.jsx)(z.a,{multiline:!0,label:"Describe your day",rows:7,fullWidth:!0,id:"content",value:f,onChange:function(e){var t=e.target;return h(t.value)}})})]}),Object(J.jsx)("br",{}),Object(J.jsx)(F.a,{style:{marginRight:"10px"},variant:"contained",color:"primary",type:"submit",children:"Submit"}),Object(J.jsx)(F.a,{style:{marginRight:"10px"},variant:"contained",color:"secondary",onClick:function(){return j(""),h(""),void m("")},children:"Reset"}),Object(J.jsx)(F.a,{style:{marginRight:"10px"},variant:"contained",onClick:function(){return j(""),h(""),m(""),void n(!t)},children:"Cancel"})]})]})},oe=function(e,t){return{type:"SET_FILTER",data:{filter:e,radioButtonValue:t}}},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FILTER":return t.data;default:return e}},ue=n(178),le=n(179),de=n(195),je=n(184),be=n(193),pe=function(){var e=Object(o.b)(),t=Object(a.useState)("date"),n=Object(d.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(""),s=Object(d.a)(i,2),u=s[0],l=s[1];return Object(J.jsxs)("span",{children:[Object(J.jsxs)(ue.a,{component:"fieldset",children:[Object(J.jsx)(le.a,{component:"legend",style:{textAlign:"left"},children:"Filter by"}),Object(J.jsxs)(de.a,{row:!0,"aria-label":"position",name:"position",defaultValue:"date",onChange:function(t){c(t.target.value),e(oe(u,t.target.value))},children:[Object(J.jsx)(je.a,{value:"date",control:Object(J.jsx)(be.a,{color:"primary"}),label:"Date"}),Object(J.jsx)(je.a,{value:"title",control:Object(J.jsx)(be.a,{color:"primary"}),label:"Title"})]})]}),Object(J.jsx)(z.a,{variant:"outlined",label:"Write your filter here",onChange:function(t){l(t.target.value),e(oe(t.target.value,r))}})]})},fe=n(185),he=n(143),xe=n(186),Oe=n(187),ge=n(188),me=n(189),ve=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.filter})),n=Object(o.c)((function(e){return e.journalEntries})),r=Object(o.c)((function(e){return e.currentUser})),c=Object(a.useState)(!1),i=Object(d.a)(c,2),s=i[0],j=i[1],b=Object(a.useState)(!0),p=Object(d.a)(b,2),f=p[0],h=p[1];if(!r)return null;var x=n.filter((function(e){return e.user.id===r.id})),O=x.sort((function(e,t){return new Date(t.date)-new Date(e.date)})),g=function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.confirm("Are you sure you want to remove this journal entry? Confirming will also delete the images of this journal entry.")){t.next=17;break}if(t.prev=2,!0!==f){t.next=11;break}return h(!1),e(_("Deleting entry, please wait","info",5)),t.next=8,y.remove(n);case 8:e(A(n)),e(_("Journal entry deleted","success",5)),h(!0);case 11:t.next=17;break;case 13:t.prev=13,t.t0=t.catch(2),e(_("".concat(t.t0.response.data.error),"success",5)),h(!0);case 17:case"end":return t.stop()}}),t,null,[[2,13]])})));return function(e){return t.apply(this,arguments)}}();return Object(J.jsxs)("div",{children:[0===x.length&&!1===s?Object(J.jsx)("h3",{style:{marginBottom:"20px"},children:"Nothing here yet! Get started by adding a new entry."}):null,s?Object(J.jsx)(ie,{showAddForm:s,setShowAddForm:j}):Object(J.jsx)(F.a,{variant:"contained",color:"primary",onClick:function(){return j(!s)},children:"Add new entry"}),x.length>0&&!1===s?Object(J.jsxs)("div",{children:[Object(J.jsx)("br",{}),Object(J.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"25px"},children:[Object(J.jsx)("h1",{children:"Journal entries"}),Object(J.jsx)(pe,{})]}),Object(J.jsx)(fe.a,{component:he.a,children:Object(J.jsx)(xe.a,{children:Object(J.jsxs)(Oe.a,{children:[Object(J.jsxs)(ge.a,{children:[Object(J.jsx)(me.a,{children:"Date"}),Object(J.jsx)(me.a,{children:"Title"}),Object(J.jsx)(me.a,{children:"Options"})]}),(t&&"title"===t.radioButtonValue?O.filter((function(e){return e.title.toLowerCase().includes(t.filter.toLowerCase())})):t&&"date"===t.radioButtonValue?O.filter((function(e){return"".concat(new Date(e.date).getDate(),"/").concat(new Date(e.date).getMonth(),"/").concat(new Date(e.date).getFullYear()).includes(t.filter)})):O).map((function(e){return Object(J.jsxs)(ge.a,{children:[Object(J.jsx)(me.a,{children:"".concat(new Date(e.date).getDate(),"/").concat(new Date(e.date).getMonth(),"/").concat(new Date(e.date).getFullYear())}),Object(J.jsx)(me.a,{children:e.title}),Object(J.jsxs)(me.a,{children:[Object(J.jsx)(ce.b,{to:"journalEntries/".concat(e.id),style:{textDecoration:"none"},children:Object(J.jsx)(F.a,{style:{marginRight:"10px"},variant:"contained",color:"primary",children:"View"})}),Object(J.jsx)(F.a,{variant:"contained",color:"secondary",onClick:function(){return g(e.id)},children:"Delete"})]})]},e.id)}))]})})})]}):null,Object(J.jsx)("br",{})]})},ye=function(){var e=Object(o.b)(),t=Object(ne.f)(),n=function(){var n=Object(l.a)(u.a.mark((function n(r){var a,c,i;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.prev=1,a=r.target.username.value,c=r.target.password.value,n.next=6,E.createNew(a,c);case 6:i=n.sent,e(S(i)),e(_("New account created","success",5)),t.push("/login"),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),e(_("".concat(n.t0.response.data.error),"error",5));case 15:r.target.username.value="",r.target.password.value="";case 17:case"end":return n.stop()}}),n,null,[[1,12]])})));return function(e){return n.apply(this,arguments)}}();return Object(J.jsxs)("div",{children:[Object(J.jsx)("h2",{children:"Create account"}),Object(J.jsxs)("div",{children:["Already have an account? ",Object(J.jsx)(ce.b,{to:"/login",children:"Login here."})]}),Object(J.jsxs)("form",{onSubmit:n,children:[Object(J.jsx)("div",{children:Object(J.jsx)(z.a,{label:"Username",name:"username",id:"username"})}),Object(J.jsx)("div",{children:Object(J.jsx)(z.a,{label:"Password",name:"password",type:"password",id:"password"})}),Object(J.jsx)("br",{}),Object(J.jsx)(F.a,{id:"register-button",variant:"contained",color:"primary",type:"submit",children:"Register"})]})]})},we=n(102),ke=n(196),Ee=n(97),Ie=n.n(Ee),Se=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"LOGIN",data:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},De=function(){return function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"LOGOUT"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return t.data;case"LOGOUT":return null;default:return e}},Ce=Object(q.a)((function(){return{button:{flexGrow:1}}})),Re=function(){var e=Object(o.b)(),t=Object(ne.f)(),n=Object(o.c)((function(e){return e.currentUser})),r=Object(a.useState)(),c=Object(d.a)(r,2),i=c[0],s=c[1],u=Ce(),l=function(){s(null)};return Object(J.jsxs)("span",{children:[Object(J.jsx)(W.a,{className:u.button,color:"inherit","aria-controls":"profileDropdown","aria-haspopup":"true",onClick:function(e){s(e.currentTarget)},children:Object(J.jsx)(Ie.a,{})}),Object(J.jsxs)(we.a,{id:"profileDropdown",anchorEl:i,open:Boolean(i),onClose:l,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:[Object(J.jsx)(ce.b,{style:{color:"inherit",textDecoration:"none"},to:"/users/".concat(n.id),children:Object(J.jsx)(ke.a,{onClick:l,children:"My account"})}),Object(J.jsx)(ke.a,{onClick:function(){return e(De()),g(),void t.push("/")},children:"Logout"})]})]})},Te={login:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ae=function(){var e=Object(o.b)(),t=Object(ne.f)(),n=Object(a.useState)(""),r=Object(d.a)(n,2),c=r[0],i=r[1],s=Object(a.useState)(""),j=Object(d.a)(s,2),b=j[0],p=j[1],f=function(){var n=Object(l.a)(u.a.mark((function n(r){var a;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.prev=1,n.next=4,Te.login({username:c,password:b});case 4:a=n.sent,i(""),p(""),e(Se(a)),x(a),e(_("".concat(a.username," logged in"),"success",5)),t.push("/journalEntries"),n.next=18;break;case 13:n.prev=13,n.t0=n.catch(1),i(""),p(""),e(_("Wrong username or password","error",5));case 18:case"end":return n.stop()}}),n,null,[[1,13]])})));return function(e){return n.apply(this,arguments)}}();return Object(J.jsxs)("div",{children:[Object(J.jsx)("h2",{children:"Login"}),Object(J.jsxs)("div",{children:["New to us? ",Object(J.jsx)(ce.b,{to:"/register",children:"Register here."})]}),Object(J.jsxs)("form",{onSubmit:f,children:[Object(J.jsx)("div",{children:Object(J.jsx)(z.a,{label:"Username",type:"text",id:"username",value:c,name:"Username",onChange:function(e){var t=e.target;return i(t.value)}})}),Object(J.jsx)("div",{children:Object(J.jsx)(z.a,{label:"Password",type:"password",id:"password",value:b,name:"Password",onChange:function(e){var t=e.target;return p(t.value)}})}),Object(J.jsx)("br",{}),Object(J.jsx)("div",{children:Object(J.jsx)(F.a,{id:"login-button",variant:"contained",color:"primary",className:"login-button",type:"submit",children:"Login"})})]})]})},Ue=n(194),_e=Object(q.a)((function(){return{notification:{width:"100%",textAlign:"left",marginBottom:"25px"}}})),Le=function(e){var t=e.notification,n=_e();return null===t?null:"info"===t.messageType?Object(J.jsx)("div",{className:n.notification,children:Object(J.jsxs)(Ue.a,{severity:"info",children:[t.message,"!"]})}):"error"===t.messageType?Object(J.jsx)("div",{className:n.notification,children:Object(J.jsxs)(Ue.a,{severity:"error",children:[t.message,"!"]})}):Object(J.jsx)("div",{className:n.notification,children:Object(J.jsxs)(Ue.a,{severity:"success",children:[t.message,"!"]})})},Be=n.p+"static/media/flowers.995c3038.jpg",ze=n.p+"static/media/cherrytree.539fe2dd.jpg",Fe=function(){return Object(J.jsx)("div",{children:Object(J.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gridGap:"25px"},children:[Object(J.jsxs)("div",{style:{position:"relative"},children:[Object(J.jsx)("p",{style:{backgroundImage:"url(".concat(Be,")"),height:"600px",maxWidth:"100%",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}),Object(J.jsx)("div",{style:{fontSize:"x-large",position:"absolute",color:"black",top:"0",display:"flex",flexDirection:"column",justifyContent:"center",height:"100%",textAlign:"center",paddingLeft:"15%",paddingRight:"15%"},children:Object(J.jsxs)("p",{children:["Ever dreamed of an online journal? We got you! In this journal, you can give the day a title, describe your day and your feelings and add up to 10 images per entry to bring your journal entries to life! ",Object(J.jsx)("strong",{children:"Happy journaling!"})]})})]}),Object(J.jsxs)("div",{style:{position:"relative"},children:[Object(J.jsx)("p",{style:{backgroundImage:"url(".concat(ze,")"),height:"600px",maxWidth:"100%",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}),Object(J.jsxs)("div",{style:{fontSize:"x-large",position:"absolute",color:"black",top:"0",display:"flex",flexDirection:"column",justifyContent:"center",height:"100%",textAlign:"center",paddingLeft:"15%",paddingRight:"15%"},children:[Object(J.jsx)("p",{children:"New to us? No worries! Register here and start journaling today!"}),Object(J.jsx)(ce.b,{to:"/register",style:{color:"black",textDecoration:"none",border:"1px solid black",padding:"10px 20px"},children:Object(J.jsx)("strong",{children:"Register"})}),Object(J.jsx)("p",{children:"Already a member? Login here!"}),Object(J.jsx)(ce.b,{to:"/login",style:{color:"black",textDecoration:"none",border:"1px solid black",padding:"10px 20px"},children:Object(J.jsx)("strong",{children:"Login"})})]})]})]})})},Je=function(e){var t=e.users,n=Object(o.b)(),r=Object(ne.f)(),a=Object(ne.g)().id,c=t.find((function(e){return e.id===a}));if(!c)return null;var i=function(e){window.confirm("Are you sure you want to remove your account? Confirming will delete your account permanently!")&&(n(function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.remove(e);case 2:n({type:"REMOVE_USER",data:e});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e)),n(De()),g(),r.push("/login"))};return Object(J.jsxs)("div",{children:[Object(J.jsx)("h2",{children:"Account information"}),Object(J.jsx)(fe.a,{component:he.a,children:Object(J.jsx)(xe.a,{children:Object(J.jsxs)(Oe.a,{children:[Object(J.jsxs)(ge.a,{children:[Object(J.jsx)(me.a,{children:"Username"}),Object(J.jsx)(me.a,{children:c.username})]}),Object(J.jsxs)(ge.a,{children:[Object(J.jsx)(me.a,{children:"Journal entries added"}),Object(J.jsx)(me.a,{children:c.journalEntries.length})]}),Object(J.jsxs)(ge.a,{children:[Object(J.jsx)(me.a,{children:"Joined"}),Object(J.jsx)(me.a,{children:new Date(c.date).toDateString()})]}),Object(J.jsx)(ge.a,{children:Object(J.jsx)(me.a,{children:Object(J.jsx)(F.a,{variant:"contained",color:"secondary",onClick:function(){return i(c.id)},children:"Delete account"})})})]})})})]})},Me=n(98),We=n.n(Me),Ve=n(99),Ge=n.n(Ve),Ye=n(190),Pe=n(191),He=n(144),Ze=Object(q.a)((function(){return{root:{display:"flex",textTransform:"uppercase",zIndex:1},title:{marginRight:"15px"},rightSide:{marginLeft:"auto"},appBar:{backgroundColor:"black"},toolbar:{minHeight:80,zIndex:1},bottomAppBar:{bottom:0,backgroundColor:"white",color:"black"}}})),qe=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.journalEntries})),n=Object(o.c)((function(e){return e.users})),r=Object(o.c)((function(e){return e.currentUser})),c=Object(o.c)((function(e){return e.notification})),i=Object(ne.h)("/journalEntries/:id"),s=i?t.find((function(e){return e.id===i.params.id})):null;Object(a.useEffect)((function(){e(function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.getAll();case 2:n=e.sent,t({type:"INIT_JOURNAL_ENTRIES",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e(I());var t=O();t&&e(Se(t))}),[e]);var d=Ze();return Object(J.jsxs)("div",{style:{paddingBottom:"30px"},children:[Object(J.jsx)("div",{className:d.root,children:Object(J.jsx)(Ye.a,{position:"static",elevation:0,className:d.appBar,children:r?Object(J.jsxs)(Pe.a,{className:d.toolbar,children:[Object(J.jsx)(He.a,{variant:"h5",className:d.title,children:Object(J.jsx)(ce.b,{style:{color:"white",textDecoration:"none"},to:"/",children:"Journal"})}),Object(J.jsx)(F.a,{style:{color:"inherit"},component:ce.b,to:"/journalEntries",children:"Your entries"}),Object(J.jsx)("div",{className:d.rightSide,children:Object(J.jsx)(Re,{})})]}):Object(J.jsxs)(Pe.a,{className:d.toolbar,children:[Object(J.jsx)(He.a,{variant:"h5",className:d.title,children:Object(J.jsx)(ce.b,{style:{color:"white",textDecoration:"none"},to:"/",children:"Journal"})}),Object(J.jsxs)("div",{className:d.rightSide,children:[Object(J.jsx)(F.a,{component:ce.b,to:"/login",style:{color:"inherit"},children:"Login"}),Object(J.jsx)(F.a,{component:ce.b,to:"/register",style:{color:"inherit"},children:"Register"})]})]})})}),Object(J.jsxs)("div",{style:{marginLeft:"25px",marginBottom:"60px",marginTop:"25px",marginRight:"25px",textAlign:"center"},children:[Object(J.jsx)(Le,{notification:c}),Object(J.jsxs)(ne.c,{children:[Object(J.jsx)(ne.a,{path:"/journalEntries/:id",children:Object(J.jsx)(ae,{journalEntry:s})}),Object(J.jsx)(ne.a,{path:"/journalEntries",children:Object(J.jsx)(ve,{})}),Object(J.jsx)(ne.a,{path:"/register",children:Object(J.jsx)(ye,{})}),Object(J.jsx)(ne.a,{path:"/login",children:Object(J.jsx)(Ae,{})}),Object(J.jsx)(ne.a,{path:"/users/:id",children:Object(J.jsx)(Je,{users:n})}),Object(J.jsx)(ne.a,{path:"/",children:r?Object(J.jsx)(ve,{}):Object(J.jsx)(Fe,{})})]})]}),Object(J.jsx)("footer",{style:{position:"absolute",bottom:"0",width:"100%",backgroundColor:"#f0f0f0"},children:Object(J.jsxs)("div",{style:{display:"flex",alignContent:"center",alignItems:"center",justifyContent:"center",padding:"25px"},children:[Object(J.jsx)("a",{href:"https://github.com/Mamelukki/Journal",style:{textDecoration:"none"},children:Object(J.jsx)(We.a,{style:{fontSize:"medium",color:"black",marginRight:"10px"}})}),Object(J.jsx)("a",{href:"https://unsplash.com/",style:{textDecoration:"none"},children:Object(J.jsx)(Ge.a,{style:{fontSize:"medium",color:"black"}})})]})})]})},Ke=n(45),Qe=n(100),Xe=n(101),$e=Object(Ke.combineReducers)({journalEntries:U,users:D,currentUser:Ne,notification:B,filter:se}),et=Object(Ke.createStore)($e,Object(Xe.composeWithDevTools)(Object(Ke.applyMiddleware)(Qe.a)));n(141);i.a.render(Object(J.jsx)(o.a,{store:et,children:Object(J.jsx)(ce.a,{children:Object(J.jsx)(qe,{})})}),document.getElementById("root"))}},[[142,1,2]]]);
//# sourceMappingURL=main.14d51b7f.chunk.js.map