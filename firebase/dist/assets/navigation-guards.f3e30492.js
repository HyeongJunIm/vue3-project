import{b as a,s,u}from"./index.2f033bc0.js";function o(t){const{isAuthenticated:e}=s(u());return t.matched.some(r=>r.meta.requiresAuth)&&!e.value?(alert("\uB85C\uADF8\uC778\uC774 \uD544\uC694\uD55C \uD398\uC774\uC9C0\uC785\uB2C8\uB2E4."),"/"):!0}var n=a(async({app:t,router:e})=>{e.beforeEach(o)});export{n as default};