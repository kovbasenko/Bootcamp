(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),l=n.n(c),o=n(8),i=n(5),u=n(1),h=n(2),m=n(4),s=n(3),f=n(16),b=r.a.createContext(),g=function(e){return function(t){Object(m.a)(a,t);var n=Object(s.a)(a);function a(){return Object(u.a)(this,a),n.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var t=this;return r.a.createElement(b.Consumer,null,(function(n){return r.a.createElement(e,Object.assign({},t.props,{theme:n}))}))}}]),a}(a.Component)},d=g((function(e){var t=e.handleSubmit,n=e.handleChange,a=e.name,c=e.number,l=e.theme;return r.a.createElement("section",null,r.a.createElement("h2",{style:{color:"light"===l?"black":"white"}},"Phonebook"),r.a.createElement("form",{onSubmit:t},r.a.createElement("input",{onChange:n,name:"name",type:"text",placeholder:"Enter name...",value:a}),r.a.createElement("br",null),r.a.createElement("input",{value:c,onChange:n,name:"number",type:"number",placeholder:"Enter phone num..."}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Add contact")))})),v=g((function(e){var t=e.contacts,n=e.changeFilter,a=e.filteredContacts,c=e.removeContact,l=e.filter,o=e.theme;return 0!==t.length?r.a.createElement("section",null,r.a.createElement("h2",{style:{color:"light"===o?"black":"white"}},"Contacts"),t.length>1?r.a.createElement("input",{placeholder:"Search...",value:l,onChange:function(e){return n(e.target.value)}}):null,r.a.createElement("ul",null,a.map((function(e){var t=e.id,n=e.name,a=e.number;return r.a.createElement("li",{key:t,style:{color:"light"===o?"black":"white"}},n,": ",a,r.a.createElement("button",{onClick:function(){return c(t)}},"Delete"))})))):null})),p=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:localStorage.getItem("contacts")?Object(i.a)(JSON.parse(localStorage.getItem("contacts"))):[],name:"",number:"",filter:"",theme:"light"},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.contacts,r=n.name,c=n.number,l=!1;if(a.forEach((function(e){e.name===t.target.children[0].value&&(alert("".concat(t.target.children[0].value," is already in contacts")),l=!0)})),""===r||""===c||l)l=!1;else{var o={id:Object(f.a)(),name:r,number:c};e.setState({contacts:[].concat(Object(i.a)(a),[o])})}},e.handleChange=function(t){e.setState(Object(o.a)({},t.target.name,t.target.value))},e.changeFilter=function(t){e.setState({filter:t})},e.handleSearch=function(){var t=e.state,n=t.contacts,a=t.filter;return n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))},e.changeTheme=function(){e.setState((function(e){return{theme:"light"===e.theme?"black":"light"}}))},e.removeContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(h.a)(n,[{key:"componentDidUpdate",value:function(e,t){t.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,a=e.filter,c=e.contacts,l=e.theme;return r.a.createElement("section",{style:{backgroundColor:"light"===l?"white":"grey"}},r.a.createElement(b.Provider,{value:l},r.a.createElement("button",{onClick:this.changeTheme},l),r.a.createElement("br",null),r.a.createElement(d,{handleSubmit:this.handleSubmit,handleChange:this.handleChange,name:t,number:n}),r.a.createElement(v,{filter:a,contacts:c,filteredContacts:this.handleSearch(),changeFilter:this.changeFilter,removeContact:this.removeContact})))}}]),n}(a.Component);l.a.render(r.a.createElement(p,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.a3ba6a9d.chunk.js.map