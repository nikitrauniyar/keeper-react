(this["webpackJsonpkeeper-part-3-starting"]=this["webpackJsonpkeeper-part-3-starting"]||[]).push([[0],{3:function(e,t,n){e.exports=n(9)},9:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(2);var c=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,"Keeper"))};var o=function(){const e=(new Date).getFullYear();return l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright \u24d2 ",e))};var u=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{onClick:()=>{console.log("Delete was triggered"),e.onDelete(e.id)}},"DELETE"))};var i=function(e){const[t,n]=Object(a.useState)({title:"",content:""});function r(e){const{name:t,value:a}=e.target;n(e=>({...e,[t]:a}))}return l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("input",{onChange:r,name:"title",placeholder:"Title",value:t.title}),l.a.createElement("textarea",{onChange:r,name:"content",placeholder:"Take a note...",rows:"3",value:t.content}),l.a.createElement("button",{onClick:a=>{a.preventDefault(),e.onAdd(t),n({title:"",content:""})}},"Add")))};var m=function(){const[e,t]=Object(a.useState)([]);function n(e){t(t=>t.filter((t,n)=>n!==e))}return l.a.createElement("div",null,l.a.createElement(c,null),l.a.createElement(i,{onAdd:function(e){t(t=>[...t,e])}}),e.map((e,t)=>l.a.createElement(u,{key:t,id:t,title:e.title,content:e.content,onDelete:n})),l.a.createElement(o,null))};n.n(r).a.render(l.a.createElement(m,null),document.getElementById("root"))}},[[3,1,2]]]);
//# sourceMappingURL=main.410206d7.chunk.js.map