(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{139:function(e,t,n){},140:function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n(13),i=n.n(c),o=n(12),s=n(6),u=n.n(s),l=n(9),d=n(15),j=n(59),p=n(68),b=n(23),h=n.n(b),f="LoggedJournalAppUser",x=function(e){return localStorage.setItem(f,JSON.stringify(e))},O=function(){return JSON.parse(localStorage.getItem(f))},g=function(){return localStorage.removeItem(f)},m="http://localhost:3001/api/journalEntries",v=function(){if(O())return{headers:{Authorization:"bearer ".concat(O().token)}}},y={getAll:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(m);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),createNew:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post(m,t,v());case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),edit:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.put("".concat(m,"/").concat(t.id),t,v());case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),remove:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.delete("".concat(m,"/").concat(t),v());case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),addImage:function(){var e=Object(l.a)(u.a.mark((function e(t,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("".concat(m,"/").concat(t,"/images"),n,v());case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),removeImage:function(){var e=Object(l.a)(u.a.mark((function e(t,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.delete("".concat(m,"/").concat(t,"/images/").concat(n),v());case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},w="http://localhost:3001/api/users",k=function(){if(O())return{headers:{Authorization:"bearer ".concat(O().token)}}},E={getAll:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(w);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),createNew:function(){var e=Object(l.a)(u.a.mark((function e(t,n){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={username:t,password:n},e.next=3,h.a.post(w,r);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.delete("".concat(w,"/").concat(t),k());case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},I=function(){return function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.getAll();case 2:n=e.sent,t({type:"INIT_USERS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},N=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"ADD_USER",data:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_USERS":return t.data;case"ADD_USER":return[].concat(Object(p.a)(e),[t.data]);case"REMOVE_USER":return e.filter((function(e){return e.id!==t.data}));default:return e}},C=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"ADD_JOURNAL_ENTRY",data:e}),n(I());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},R=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"EDIT_JOURNAL_ENTRY",data:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},D=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"ADD_IMAGE",data:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},T=function(e,t){return function(){var n=Object(l.a)(u.a.mark((function n(r){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r({type:"REMOVE_IMAGE",journalEntryId:e,imageId:t});case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},A=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.remove(e);case 2:n({type:"REMOVE_JOURNAL_ENTRY",data:e}),n(I());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_JOURNAL_ENTRIES":return t.data;case"ADD_JOURNAL_ENTRY":return[].concat(Object(p.a)(e),[t.data]);case"EDIT_JOURNAL_ENTRY":return e.map((function(e){return e.id===t.data.id?t.data:e}));case"ADD_IMAGE":var n=e.find((function(e){return e.id===t.data.journalEntry.id})),r=Object(j.a)(Object(j.a)({},n),{},{images:n.images.concat(t.data)});return e.map((function(e){return e.id!==t.data.journalEntry.id?e:r}));case"REMOVE_IMAGE":var a=e.find((function(e){return e.id===t.journalEntryId})),c=Object(j.a)(Object(j.a)({},a),{},{images:a.images.filter((function(e){return e.id!==t.imageId}))});return e.map((function(e){return e.id!==t.journalEntryId?e:c}));case"REMOVE_JOURNAL_ENTRY":return e.filter((function(e){return e.id!==t.data}));default:return e}},_=function(e,t,n){return function(){var a=Object(l.a)(u.a.mark((function a(c){return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:c({type:"SET_NOTIFICATION",data:{messageType:t,message:e}}),r&&clearTimeout(r),r=setTimeout((function(){c(L())}),1e3*n);case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},L=function(){return{type:"REMOVE_NOTIFICATION"}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NOTIFICATION":return t.data;case"REMOVE_NOTIFICATION":return null;default:return e}},z=n(190),F=n(178),J=n(1),M=function(e){var t=e.journalEntry,n=e.showEditForm,r=e.setShowEditForm,c=Object(o.b)(),i=Object(a.useState)(t.content),s=Object(d.a)(i,2),j=s[0],p=s[1],b=Object(a.useState)(t.feelings),h=Object(d.a)(b,2),f=h[0],x=h[1],O=Object(a.useState)(t.title),g=Object(d.a)(O,2),m=g[0],v=g[1],w=function(){var e=Object(l.a)(u.a.mark((function e(a){var i,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,i=t.id,e.next=5,y.edit({id:i,content:j,feelings:f,title:m});case 5:o=e.sent,c(R(o)),c(_("Journal entry edited","success",5)),r(!n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),c(_("".concat(e.t0.response.data.error),"error",5));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(J.jsxs)("span",{children:[Object(J.jsx)("h4",{children:"Edit journal entry"}),Object(J.jsxs)("form",{onSubmit:w,children:[Object(J.jsxs)("div",{children:[Object(J.jsx)("div",{children:Object(J.jsx)(z.a,{label:"Title",fullWidth:!0,id:"title",value:m,onChange:function(e){var t=e.target;return v(t.value)}})}),Object(J.jsx)("div",{children:Object(J.jsx)(z.a,{label:"Feelings",fullWidth:!0,id:"feelings",value:f,onChange:function(e){var t=e.target;return x(t.value)}})}),Object(J.jsx)(z.a,{label:"Content",multiline:!0,rows:7,fullWidth:!0,id:"editedContent",value:j,onChange:function(e){var t=e.target;return p(t.value)}})]}),Object(J.jsx)("br",{}),Object(J.jsx)(F.a,{style:{marginRight:"10px"},variant:"contained",color:"primary",type:"submit",children:"Submit"}),Object(J.jsx)(F.a,{style:{marginRight:"10px"},variant:"contained",color:"secondary",onClick:function(){return v(t.title),p(t.content),void x(t.feelings)},children:"Reset original values"}),Object(J.jsx)(F.a,{style:{marginRight:"10px"},variant:"contained",onClick:function(){return v(t.title),p(t.content),x(t.feelings),void r(!n)},children:"Cancel"})]})]})},W=n(180),V=n(96),G=n.n(V),P=n(95),Y=n.n(P),H=n(74),Z=n.n(H),q=n(93),K=n.n(q),Q=n(94),X=n.n(Q),$=n(17),ee=n(181),te=n(179),ne=Object(te.a)((function(){return{journalEntryImage:{position:"relative","& .imageDeleteButton":{display:"none"},"& .zoomButton":{display:"none"},"&:hover .zoomButton":{display:"block",position:"absolute",color:"white",top:"10px",left:"1px",zIndex:"100"},"&:hover .imageDeleteButton":{display:"block",position:"absolute",color:"white",top:"10px",right:"1px",zIndex:"100"}},zoomedImage:{position:"relative",marginTop:"25px","& .closeZoomButton":{display:"inline-block",position:"absolute",color:"black",top:"0px",right:"0px",zIndex:"100"},"& .zoomedBackgroundImage":{height:"auto",maxWidth:"".concat(window.innerWidth-160,"px")}}}})),re=function(e){var t=e.journalEntry;if(!t)return null;var n=ne(),r=Object($.f)(),c=Object(o.b)(),i=new Date(t.date),s=i.getDate(),j=i.getMonth(),p=i.getFullYear(),b=Object(a.useState)(""),h=Object(d.a)(b,2),f=h[0],x=h[1],O=t.id,g=Object(a.useState)(!1),m=Object(d.a)(g,2),v=m[0],w=m[1],k=Object(a.useState)(!0),E=Object(d.a)(k,2),I=E[0],N=E[1],S=Object(a.useState)(!1),C=Object(d.a)(S,2),R=C[0],U=C[1],L=Object(a.useState)(""),B=Object(d.a)(L,2),z=B[0],V=B[1],P="";z&&(P=t.images.find((function(e){return e.id===z})));var H=function(){var e=Object(l.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(_("Deleting image, please wait...","success",5)),e.next=3,y.removeImage(t,n);case 3:c(T(t,n)),c(_("Image deleted","success",5));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),q=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),f&&null!==f){e.next=5;break}return e.abrupt("return",c(_("Please choose an image before uploading","error",5)));case 5:return e.prev=5,N(!1),(n=new FormData).append("image",f),e.next=11,y.addImage(O,n);case 11:r=e.sent,c(D(r)),c(_("Image added successfully","success",5)),N(!0),x(null),document.getElementById("imageUpload").value="",e.next=26;break;case 19:e.prev=19,e.t0=e.catch(5),N(!1),e.t0.response.data.error?c(_("".concat(e.t0.response.data.error),"error",15)):c(_("".concat(e.t0.response.data),"error",5)),N(!0),x(null),document.getElementById("imageUpload").value="";case 26:case"end":return e.stop()}}),e,null,[[5,19]])})));return function(t){return e.apply(this,arguments)}}();return Object(J.jsxs)("div",{children:[!1===v&&!1===R?Object(J.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:[Object(J.jsx)("div",{style:{margin:"5px"},children:Object(J.jsx)(F.a,{variant:"contained",color:"primary",startIcon:Object(J.jsx)(Y.a,{}),onClick:function(){return w(!v)},children:"Edit"})}),Object(J.jsx)("div",{style:{margin:"5px"},children:Object(J.jsx)(F.a,{variant:"contained",color:"primary",startIcon:Object(J.jsx)(G.a,{}),onClick:function(){return U(!R)},children:"Add image"})}),Object(J.jsx)("div",{style:{margin:"5px"},children:Object(J.jsx)(F.a,{variant:"contained",color:"secondary",startIcon:Object(J.jsx)(Z.a,{}),onClick:function(){return function(e){window.confirm("Are you sure you want to remove this journal entry? Confirming will also delete the images of this journal entry.")&&(c(A(e)),c(_("Journal entry deleted","success",5)),r.push("/journalEntries"))}(t.id)},children:"Delete"})})]}):null,Object(J.jsx)("div",{style:{marginTop:"10px"},children:!1===v&&R&&!0===I?Object(J.jsxs)("div",{children:[Object(J.jsx)("h2",{children:"Add image"}),Object(J.jsx)("div",{children:"Upload one image at a time. The maximum number of images per entry is 10. Accepted formats are .jpeg, .jpg, .png and .gif."}),Object(J.jsx)("br",{}),Object(J.jsxs)("form",{onSubmit:q,children:[Object(J.jsx)("input",{accept:"image/png, image/jpg, image/gif, image/jpeg",type:"file",id:"imageUpload",onChange:function(e){return x(e.target.files[0])}}),Object(J.jsx)("label",{htmlFor:"imageUpload"}),Object(J.jsxs)("div",{style:{marginTop:"15px"},children:[f&&!0===I?Object(J.jsx)(F.a,{style:{marginRight:"10px"},variant:"contained",color:"primary",type:"submit",children:"Add image"}):null,Object(J.jsx)(F.a,{variant:"contained",onClick:function(){return U(!1),void x("")},children:"Close"})]})]})]}):null}),!0===R&&!1===I?Object(J.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:[Object(J.jsx)(ee.a,{}),Object(J.jsx)("span",{style:{marginLeft:"10px"},children:"Image uploading..."})]}):null,Object(J.jsx)("div",{style:{marginTop:"25px",marginBottom:"25px"},children:v?Object(J.jsx)(M,{journalEntry:t,showEditForm:v,setShowEditForm:w}):null}),Object(J.jsxs)("div",{style:{marginBottom:"25px",marginTop:"25px"},children:[Object(J.jsx)("h2",{children:"".concat(s,"/").concat(j,"/").concat(p)}),Object(J.jsx)("h1",{children:t.title}),Object(J.jsx)("h4",{children:t.feelings?"Feelings: ".concat(t.feelings):null}),Object(J.jsx)("div",{style:{whiteSpace:"pre-line"},children:t.content})]}),Object(J.jsx)("div",{children:t.images?""===z?Object(J.jsx)("div",{style:{position:"relative",display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr",gridGap:"10px",justifyContent:"space-between",marginTop:"25px"},children:t.images.map((function(e){return Object(J.jsxs)("div",{className:n.journalEntryImage,children:[Object(J.jsx)("p",{className:"backgroundImage",style:{backgroundImage:"url(".concat(e.imageUrl,")"),height:"200px",width:"100%",backgroundSize:"cover",backgroundPosition:"center"}}),Object(J.jsx)(W.a,{className:"imageDeleteButton",onClick:function(){return H(t.id,e.id)},children:Object(J.jsx)(Z.a,{})}),Object(J.jsx)(W.a,{className:"zoomButton",onClick:function(){return function(e){V(e)}(e.id)},children:Object(J.jsx)(K.a,{})})]},e.id)}))}):Object(J.jsxs)("div",{className:n.zoomedImage,children:[Object(J.jsx)("img",{className:"zoomedBackgroundImage",src:P.imageUrl}),Object(J.jsx)(W.a,{className:"closeZoomButton",onClick:function(){return V("")},children:Object(J.jsx)(X.a,{})})]}):null})]})},ae=n(18),ce=function(e){var t=e.showAddForm,n=e.setShowAddForm,r=Object(o.b)(),c=Object(a.useState)(""),i=Object(d.a)(c,2),s=i[0],j=i[1],p=Object(a.useState)(""),b=Object(d.a)(p,2),h=b[0],f=b[1],x=Object(a.useState)(""),O=Object(d.a)(x,2),g=O[0],m=O[1],v=function(){var e=Object(l.a)(u.a.mark((function e(a){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,y.createNew({title:s,content:h,feelings:g});case 4:c=e.sent,r(C(c)),r(_("New journal entry added","success",5)),j(""),f(""),m(""),n(!t),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),r(_("".concat(e.t0.response.data.error),"error",5));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(J.jsxs)("div",{children:[Object(J.jsx)("h3",{style:{textAlign:"left"},children:"How was your day?"}),Object(J.jsxs)("form",{onSubmit:v,children:[Object(J.jsxs)("div",{children:[Object(J.jsx)("div",{children:Object(J.jsx)(z.a,{label:"Title",fullWidth:!0,id:"title",value:s,onChange:function(e){var t=e.target;return j(t.value)}})}),Object(J.jsx)("div",{children:Object(J.jsx)(z.a,{label:"Feelings",fullWidth:!0,id:"feelings",value:g,onChange:function(e){var t=e.target;return m(t.value)}})}),Object(J.jsx)("div",{children:Object(J.jsx)(z.a,{multiline:!0,label:"Describe your day",rows:7,fullWidth:!0,id:"content",value:h,onChange:function(e){var t=e.target;return f(t.value)}})})]}),Object(J.jsx)("br",{}),Object(J.jsx)(F.a,{style:{marginRight:"10px"},variant:"contained",color:"primary",type:"submit",children:"Submit"}),Object(J.jsx)(F.a,{style:{marginRight:"10px"},variant:"contained",color:"secondary",onClick:function(){return j(""),f(""),void m("")},children:"Reset"}),Object(J.jsx)(F.a,{style:{marginRight:"10px"},variant:"contained",onClick:function(){return j(""),f(""),m(""),void n(!t)},children:"Cancel"})]})]})},ie=function(e,t){return{type:"SET_FILTER",data:{filter:e,radioButtonValue:t}}},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FILTER":return t.data;default:return e}},se=n(176),ue=n(177),le=n(193),de=n(182),je=n(191),pe=function(){var e=Object(o.b)(),t=Object(a.useState)("date"),n=Object(d.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(""),s=Object(d.a)(i,2),u=s[0],l=s[1];return Object(J.jsxs)("span",{children:[Object(J.jsxs)(se.a,{component:"fieldset",children:[Object(J.jsx)(ue.a,{component:"legend",style:{textAlign:"left"},children:"Filter by"}),Object(J.jsxs)(le.a,{row:!0,"aria-label":"position",name:"position",defaultValue:"date",onChange:function(t){c(t.target.value),e(ie(u,t.target.value))},children:[Object(J.jsx)(de.a,{value:"date",control:Object(J.jsx)(je.a,{color:"primary"}),label:"Date"}),Object(J.jsx)(de.a,{value:"title",control:Object(J.jsx)(je.a,{color:"primary"}),label:"Title"})]})]}),Object(J.jsx)(z.a,{variant:"outlined",label:"Write your filter here",onChange:function(t){l(t.target.value),e(ie(t.target.value,r))}})]})},be=n(183),he=n(141),fe=n(184),xe=n(185),Oe=n(186),ge=n(187),me=function(e){var t=e.currentUser,n=e.journalEntries,r=Object(o.b)(),c=Object(o.c)((function(e){return e.filter})),i=Object(a.useState)(!1),s=Object(d.a)(i,2),u=s[0],l=s[1];if(!t)return null;var j=n.filter((function(e){return e.user.id===t.id})),p=j.sort((function(e,t){return new Date(t.date)-new Date(e.date)}));return Object(J.jsxs)("div",{children:[0===j.length&&!1===u?Object(J.jsx)("h3",{style:{marginBottom:"20px"},children:"Nothing here yet! Get started by adding a new entry."}):null,u?Object(J.jsx)(ce,{showAddForm:u,setShowAddForm:l}):Object(J.jsx)(F.a,{variant:"contained",color:"primary",onClick:function(){return l(!u)},children:"Add new entry"}),j.length>0&&!1===u?Object(J.jsxs)("div",{children:[Object(J.jsx)("br",{}),Object(J.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"25px"},children:[Object(J.jsx)("h1",{children:"Journal entries"}),Object(J.jsx)(pe,{})]}),Object(J.jsx)(be.a,{component:he.a,children:Object(J.jsx)(fe.a,{children:Object(J.jsxs)(xe.a,{children:[Object(J.jsxs)(Oe.a,{children:[Object(J.jsx)(ge.a,{children:"Date"}),Object(J.jsx)(ge.a,{children:"Title"}),Object(J.jsx)(ge.a,{children:"Options"})]}),(c&&"title"===c.radioButtonValue?p.filter((function(e){return e.title.toLowerCase().includes(c.filter.toLowerCase())})):c&&"date"===c.radioButtonValue?p.filter((function(e){return new Date(e.date).toDateString().toLowerCase().includes(c.filter.toLowerCase())})):p).map((function(e){return Object(J.jsxs)(Oe.a,{children:[Object(J.jsx)(ge.a,{children:new Date(e.date).toDateString()}),Object(J.jsx)(ge.a,{children:e.title}),Object(J.jsxs)(ge.a,{children:[Object(J.jsx)(ae.b,{to:"journalEntries/".concat(e.id),children:Object(J.jsx)(F.a,{style:{marginRight:"10px"},variant:"contained",color:"primary",children:"View"})}),Object(J.jsx)(F.a,{variant:"contained",color:"secondary",onClick:function(){return t=e.id,void(window.confirm("Are you sure you want to remove this journal entry? Confirming will also delete the images of this journal entry.")&&(r(A(t)),r(_("Journal entry deleted","success",5))));var t},children:"Delete"})]})]},e.id)}))]})})})]}):null,Object(J.jsx)("br",{})]})},ve=function(){var e=Object(o.b)(),t=Object($.f)(),n=function(){var n=Object(l.a)(u.a.mark((function n(r){var a,c,i;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.prev=1,a=r.target.username.value,c=r.target.password.value,n.next=6,E.createNew(a,c);case 6:i=n.sent,e(N(i)),e(_("New account created","success",5)),t.push("/login"),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),e(_("".concat(n.t0.response.data.error),"error",5));case 15:r.target.username.value="",r.target.password.value="";case 17:case"end":return n.stop()}}),n,null,[[1,12]])})));return function(e){return n.apply(this,arguments)}}();return Object(J.jsxs)("div",{children:[Object(J.jsx)("h2",{children:"Create account"}),Object(J.jsxs)("div",{children:["Already have an account? ",Object(J.jsx)(ae.b,{to:"/login",children:"Login here."})]}),Object(J.jsxs)("form",{onSubmit:n,children:[Object(J.jsx)("div",{children:Object(J.jsx)(z.a,{label:"Username",name:"username",id:"username"})}),Object(J.jsx)("div",{children:Object(J.jsx)(z.a,{label:"Password",name:"password",type:"password",id:"password"})}),Object(J.jsx)("br",{}),Object(J.jsx)(F.a,{id:"register-button",variant:"contained",color:"primary",type:"submit",children:"Register"})]})]})},ye=n(100),we=n(194),ke=n(97),Ee=n.n(ke),Ie=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"LOGIN",data:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Ne=function(){return function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"LOGOUT"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return t.data;case"LOGOUT":return null;default:return e}},Ce=Object(te.a)((function(){return{button:{flexGrow:1}}})),Re=function(){var e=Object(o.b)(),t=Object($.f)(),n=Object(o.c)((function(e){return e.currentUser})),r=Object(a.useState)(),c=Object(d.a)(r,2),i=c[0],s=c[1],u=Ce(),l=function(){s(null)};return Object(J.jsxs)("span",{children:[Object(J.jsx)(W.a,{className:u.button,color:"inherit","aria-controls":"profileDropdown","aria-haspopup":"true",onClick:function(e){s(e.currentTarget)},children:Object(J.jsx)(Ee.a,{})}),Object(J.jsxs)(ye.a,{id:"profileDropdown",anchorEl:i,open:Boolean(i),onClose:l,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:[Object(J.jsx)(ae.b,{style:{color:"inherit",textDecoration:"none"},to:"/users/".concat(n.id),children:Object(J.jsx)(we.a,{onClick:l,children:"My account"})}),Object(J.jsx)(we.a,{onClick:function(){return e(Ne()),g(),void t.push("/")},children:"Logout"})]})]})},De={login:function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("http://localhost:3001/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Te=function(){var e=Object(o.b)(),t=Object($.f)(),n=Object(a.useState)(""),r=Object(d.a)(n,2),c=r[0],i=r[1],s=Object(a.useState)(""),j=Object(d.a)(s,2),p=j[0],b=j[1],h=function(){var n=Object(l.a)(u.a.mark((function n(r){var a;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.prev=1,n.next=4,De.login({username:c,password:p});case 4:a=n.sent,i(""),b(""),e(Ie(a)),x(a),e(_("".concat(a.username," logged in"),"success",5)),t.push("/journalEntries"),n.next=18;break;case 13:n.prev=13,n.t0=n.catch(1),i(""),b(""),e(_("Wrong username or password","error",5));case 18:case"end":return n.stop()}}),n,null,[[1,13]])})));return function(e){return n.apply(this,arguments)}}();return Object(J.jsxs)("div",{children:[Object(J.jsx)("h2",{children:"Login"}),Object(J.jsxs)("div",{children:["New to us? ",Object(J.jsx)(ae.b,{to:"/register",children:"Register here."})]}),Object(J.jsxs)("form",{onSubmit:h,children:[Object(J.jsx)("div",{children:Object(J.jsx)(z.a,{label:"Username",type:"text",id:"username",value:c,name:"Username",onChange:function(e){var t=e.target;return i(t.value)}})}),Object(J.jsx)("div",{children:Object(J.jsx)(z.a,{label:"Password",type:"password",id:"password",value:p,name:"Password",onChange:function(e){var t=e.target;return b(t.value)}})}),Object(J.jsx)("br",{}),Object(J.jsx)("div",{children:Object(J.jsx)(F.a,{id:"login-button",variant:"contained",color:"primary",className:"login-button",type:"submit",children:"Login"})})]})]})},Ae=n(192),Ue=Object(te.a)((function(){return{notification:{width:"100%",textAlign:"left",marginBottom:"25px"}}})),_e=function(e){var t=e.notification,n=Ue();return null===t?null:"error"===t.messageType?Object(J.jsx)("div",{className:n.notification,children:Object(J.jsxs)(Ae.a,{severity:"error",children:[t.message,"!"]})}):Object(J.jsx)("div",{className:n.notification,children:Object(J.jsxs)(Ae.a,{severity:"success",children:[t.message,"!"]})})},Le=n.p+"static/media/sunset.13aabe2b.jpg",Be=n.p+"static/media/flower.676f415a.jpg",ze=function(){return Object(J.jsx)("div",{style:{marginBottom:"25px"},children:Object(J.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gridGap:"25px"},children:[Object(J.jsxs)("div",{style:{position:"relative"},children:[Object(J.jsx)("p",{className:"homePageBackgroundImage",style:{backgroundImage:"url(".concat(Be,")"),height:"600px",maxWidth:"100%",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}),Object(J.jsx)("div",{style:{fontSize:"x-large",position:"absolute",color:"white",top:"0",display:"flex",flexDirection:"column",justifyContent:"center",height:"100%",textAlign:"center",paddingLeft:"100px",paddingRight:"100px"},children:Object(J.jsxs)("p",{className:"subtitle",children:["Ever dreamed of an online journal? We got you! In this journal, you can give the day a title, describe your day and your feelings and add up to 10 images per entry to bring your journal entries to life! ",Object(J.jsx)("strong",{children:"Happy journaling!"})]})})]}),Object(J.jsxs)("div",{className:"imgTextWrapper",style:{position:"relative"},children:[Object(J.jsx)("p",{className:"homePageBackgroundImage",style:{backgroundImage:"url(".concat(Le,")"),height:"600px",maxWidth:"100%",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}),Object(J.jsxs)("div",{className:"subtitle",style:{fontSize:"x-large",position:"absolute",color:"white",top:"0",display:"flex",flexDirection:"column",justifyContent:"center",height:"100%",textAlign:"center",paddingLeft:"100px",paddingRight:"100px"},children:[Object(J.jsx)("p",{children:"New to us? No worries! Register here and keep your journal entries password protected, just like a locked diary."}),Object(J.jsx)(ae.b,{to:"/register",style:{color:"white",textDecoration:"none",border:"1px solid white",padding:"10px 20px"},children:Object(J.jsx)("strong",{children:"Register"})}),Object(J.jsx)("p",{children:"Already a member? Login here!"}),Object(J.jsx)(ae.b,{to:"/login",style:{color:"white",textDecoration:"none",border:"1px solid white",padding:"10px 20px"},children:Object(J.jsx)("strong",{children:"Login"})})]})]})]})})},Fe=function(e){var t=e.users,n=Object(o.b)(),r=Object($.f)(),a=Object($.g)().id,c=t.find((function(e){return e.id===a}));if(!c)return null;var i=function(e){window.confirm("Are you sure you want to remove your account? Confirming will delete your account permanently!")&&(n(function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.remove(e);case 2:n({type:"REMOVE_USER",data:e});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e)),n(Ne()),g(),r.push("/login"))};return Object(J.jsxs)("div",{children:[Object(J.jsx)("h2",{children:"Account information"}),Object(J.jsx)(be.a,{component:he.a,children:Object(J.jsx)(fe.a,{children:Object(J.jsxs)(xe.a,{children:[Object(J.jsxs)(Oe.a,{children:[Object(J.jsx)(ge.a,{children:"Username"}),Object(J.jsx)(ge.a,{children:c.username})]}),Object(J.jsxs)(Oe.a,{children:[Object(J.jsx)(ge.a,{children:"Journal entries added"}),Object(J.jsx)(ge.a,{children:c.journalEntries.length})]}),Object(J.jsxs)(Oe.a,{children:[Object(J.jsx)(ge.a,{children:"Joined"}),Object(J.jsx)(ge.a,{children:new Date(c.date).toDateString()})]}),Object(J.jsx)(Oe.a,{children:Object(J.jsx)(ge.a,{children:Object(J.jsx)(F.a,{variant:"contained",color:"secondary",onClick:function(){return i(c.id)},children:"Delete account"})})})]})})})]})},Je=n(188),Me=n(189),We=n(142),Ve=Object(te.a)((function(){return{root:{display:"flex",textTransform:"uppercase",zIndex:1},title:{marginRight:"15px"},rightSide:{marginLeft:"auto"},appBar:{backgroundColor:"black"},toolbar:{minHeight:60,zIndex:1},bottomAppBar:{bottom:0,backgroundColor:"white",color:"black"}}})),Ge=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.journalEntries})),n=Object(o.c)((function(e){return e.users})),r=Object(o.c)((function(e){return e.currentUser})),c=Object(o.c)((function(e){return e.notification})),i=Object($.h)("/journalEntries/:id"),s=i?t.find((function(e){return e.id===i.params.id})):null;Object(a.useEffect)((function(){e(function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.getAll();case 2:n=e.sent,t({type:"INIT_JOURNAL_ENTRIES",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e(I());var t=O();t&&e(Ie(t))}),[e]);var d=Ve();return Object(J.jsxs)("div",{children:[Object(J.jsx)("div",{className:d.root,children:Object(J.jsx)(Je.a,{position:"static",elevation:0,className:d.appBar,children:r?Object(J.jsxs)(Me.a,{className:d.toolbar,children:[Object(J.jsx)(We.a,{variant:"h6",className:d.title,children:Object(J.jsx)(ae.b,{style:{color:"white",textDecoration:"none"},to:"/",children:"Journal"})}),Object(J.jsx)(F.a,{style:{color:"inherit"},component:ae.b,to:"/journalEntries",children:"Your journal entries"}),Object(J.jsx)("div",{className:d.rightSide,children:Object(J.jsx)(Re,{})})]}):Object(J.jsxs)(Me.a,{children:[Object(J.jsx)(We.a,{variant:"h6",className:d.title,children:Object(J.jsx)(ae.b,{style:{color:"white",textDecoration:"none"},to:"/",children:"Journal"})}),Object(J.jsxs)("div",{className:d.rightSide,children:[Object(J.jsx)(F.a,{component:ae.b,to:"/login",style:{color:"inherit"},children:"Login"}),Object(J.jsx)(F.a,{component:ae.b,to:"/register",style:{color:"inherit"},children:"Register"})]})]})})}),Object(J.jsxs)("div",{style:{marginLeft:"25px",marginTop:"25px",marginRight:"25px",textAlign:"center"},children:[Object(J.jsx)(_e,{notification:c}),Object(J.jsxs)($.c,{children:[Object(J.jsx)($.a,{path:"/journalEntries/:id",children:Object(J.jsx)(re,{journalEntry:s})}),Object(J.jsx)($.a,{path:"/journalEntries",children:Object(J.jsx)(me,{currentUser:r,journalEntries:t})}),Object(J.jsx)($.a,{path:"/register",children:Object(J.jsx)(ve,{})}),Object(J.jsx)($.a,{path:"/login",children:Object(J.jsx)(Te,{})}),Object(J.jsx)($.a,{path:"/users/:id",children:Object(J.jsx)(Fe,{users:n})}),Object(J.jsx)($.a,{path:"/",children:r?Object(J.jsx)(me,{currentUser:r,journalEntries:t}):Object(J.jsx)(ze,{})})]})]})]})},Pe=n(42),Ye=n(98),He=n(99),Ze=Object(Pe.combineReducers)({journalEntries:U,users:S,currentUser:Se,notification:B,filter:oe}),qe=Object(Pe.createStore)(Ze,Object(He.composeWithDevTools)(Object(Pe.applyMiddleware)(Ye.a)));n(139);i.a.render(Object(J.jsx)(o.a,{store:qe,children:Object(J.jsx)(ae.a,{children:Object(J.jsx)(Ge,{})})}),document.getElementById("root"))}},[[140,1,2]]]);
//# sourceMappingURL=main.6fcb8854.chunk.js.map