"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[857],{1857:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var a=n(885),s=(n(486),n(6411)),i=n(156),r=n(184),c=function(){var e=(0,i.Tn)(),t=(0,a.Z)(e,2),n=t[0],c=t[1].isLoading;return(0,r.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault();var t=e.currentTarget,a=t.elements.name.value,s=t.elements.number.value;n({name:a,number:s}),t.reset()},children:[(0,r.jsx)("input",{placeholder:"name",className:"input",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,r.jsx)("input",{placeholder:"phone number",className:"input",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),c&&(0,r.jsx)(s.Z,{}),(0,r.jsx)("button",{className:"button",type:"submit",children:"Add contact"})]})},o=n(5048),l=n(1128),u=function(){var e=(0,o.I0)();return(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text",children:"Find contacts by name"}),(0,r.jsx)("input",{className:"input",type:"text",onChange:function(t){var n=t.target.value;e((0,l.M6)(n))}})]})},d=n(8185),m=n(2791),p=n(387),h=function(e){var t=e.contact,n=e.onEdit;return(0,r.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault();var a=e.currentTarget,s=a.elements.name.value,i=a.elements.number.value,r={id:t._id,name:s,number:i};n(r),a.reset()},children:[(0,r.jsx)("input",{defaultValue:t.name,className:"input",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,r.jsx)("input",{defaultValue:t.number,className:"input",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,r.jsx)("button",{className:"button",type:"submit",children:"Edit"})]})},b=n(974),f=n(7505),x=function(){var e=(0,m.useState)(!1),t=(0,a.Z)(e,2),n=t[0],c=t[1],l=(0,m.useState)({}),u=(0,a.Z)(l,2),x=u[0],j=u[1],v=(0,m.useState)(1),N=(0,a.Z)(v,2),g=N[0],Z=N[1],y=(0,o.v9)((function(e){return e.filter})),C=(0,i.wY)({page:g,filter:y}),k=C.data,_=C.isLoading,A=C.refetch,z=(0,i.Nt)(),w=(0,a.Z)(z,2),E=w[0],M=w[1].isLoading,S=(0,i.i)(),q=(0,a.Z)(S,1)[0],F=(0,i.eE)(),D=(0,a.Z)(F,1)[0];(0,m.useEffect)((function(){A()}),[]);var L=function(e){c(!n),j(e)};return(0,r.jsxs)(r.Fragment,{children:[n&&(0,r.jsxs)(p.Z,{toggleModal:L,children:[(0,r.jsx)("button",{type:"button",onClick:L,className:"close-btn",children:"Close"}),(0,r.jsx)(h,{contact:x,onEdit:function(e){q(e),L()}})]}),_&&(0,r.jsx)(s.Z,{}),M&&(0,r.jsx)(s.Z,{}),(null===k||void 0===k?void 0:k.contacts)&&!M&&(0,r.jsx)("ul",{className:"contacts-list",children:k.contacts.map((function(e){return(0,r.jsxs)("li",{className:"contacts-item",children:[e.name,":"," ",(0,r.jsx)("span",{className:"contacts-number",children:e.number}),(0,r.jsx)("button",{className:"favotite-btn",type:"button",onClick:function(){D({id:e._id,favorite:!e.favorite})},children:(0,r.jsx)(d.kRm,{className:"favorite-icon",style:{fill:e.favorite&&"rgb(255, 244, 84)"}})}),(0,r.jsx)("button",{className:"button edit-btn",type:"button",onClick:function(){return L(e)},children:"Edit"}),(0,r.jsx)("button",{className:"button",type:"button",onClick:function(){E(e._id)},children:"Delete"})]},e._id)}))}),(0,r.jsx)(f.Z,{alignItems:"center",children:(0,r.jsx)(b.Z,{count:(null===k||void 0===k?void 0:k.total)>5?Math.ceil(k.total/5):1,variant:"outlined",onChange:function(e,t){Z(t)}})})]})},j=function(){return(0,r.jsxs)("div",{className:"phonebook",children:[(0,r.jsx)("h1",{className:"title",children:"Phonebook"}),(0,r.jsx)(c,{}),(0,r.jsx)("h2",{className:"title",children:"Contacts"}),(0,r.jsx)(u,{}),(0,r.jsx)(x,{className:"contacts-list"})]})}},486:function(){}}]);
//# sourceMappingURL=857.141ae62b.chunk.js.map