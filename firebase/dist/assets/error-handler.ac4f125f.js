import{b as n,N as l}from"./index.5deb3121.js";import{g as s}from"./error-message.73b8b582.js";var t=n(async({app:r})=>{r.config.errorHandler=(o,e,a)=>{console.log("### app.config.handler ###"),console.log("err : ",o),console.log("instance : ",e),console.log("info : ",a),l.create(s(o.code))}});export{t as default};