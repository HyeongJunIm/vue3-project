import{Q as m,i as u}from"./QForm.ff50ba13.js";import{bg as c,V as p,o as f,d as w,j as e,q as b,ad as l,aN as g,w as h,c as v,bZ as V}from"./index.5ba5d6ce.js";const x=v("div",{class:"text-h5 text-center text-weight-bold q-mb-xl"}," \uBE44\uBC00\uBC88\uD638 \uCC3E\uAE30 ",-1),q={__name:"FindPasswordForm",emits:["changeView","closeDialog"],setup(Q,{emit:o}){const n=c(),i=o,a=p(""),r=async()=>{await V(a),n.notify("\uC774\uBA54\uC77C\uB85C \uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815 \uB9C1\uD06C\uB97C \uBCF4\uB0C8\uC5B4\uC694!"),i("closeDialog")};return(d,t)=>(f(),w("div",null,[x,e(u,{class:"q-gutter-y-md",onSubmit:h(r,["prevent"])},{default:b(()=>[e(m,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=s=>a.value=s),placeholder:"\uAC00\uC785\uD55C \uC774\uBA54\uC77C",outlined:"",dense:""},null,8,["modelValue"]),e(l,{label:"\uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815",class:"full-width",unelevated:"",color:"primary",type:"submit"}),e(g),e(l,{label:"\uB85C\uADF8\uC778 \uD558\uAE30",class:"full-width",unelevated:"",flat:"",onClick:t[1]||(t[1]=s=>d.$emit("changeView","SignInForm"))})]),_:1})]))}};export{q as default};