(this.webpackJsonpcomp=this.webpackJsonpcomp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(7),o=a.n(s),c=a(2),i=a(3),l=a(5),u=a(4),d=a(8),h=(a(13),a(0)),j=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange1=function(e){var t=parseInt(e.target.value);n.setState({Num1:t}),n.props.onSumChange(n.props.id,t+n.state.Num2)},n.handleChange2=function(e){var t=parseInt(e.target.value);n.setState({Num2:t}),n.props.onSumChange(n.props.id,t+n.state.Num1)},n.state={Num1:0,Num2:0,Sum:0},n}return Object(i.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"mainContainer",children:[Object(h.jsx)("input",{className:"inputStyle",style:{borderWidth:1,margin:10},placeholder:"Num1",onChange:this.handleChange1}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{className:"inputStyle",style:{borderWidth:1,margin:10},placeholder:"Num2",onChange:this.handleChange2}),Object(h.jsx)("br",{}),Object(h.jsxs)("label",{className:"outStyle",children:["sum: ",this.state.Num1+this.state.Num2]})]})}}]),a}(n.Component),b=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={sumArray:[]},n.applyTedad=function(e,t){for(var a=[],r=[],s=0;s<e;s++)r.push(0);for(var o=0;o<e;o++)a.push(Object(h.jsx)(j,{id:o,onSumChange:n.onSumChange},e+"_"+o));var c={compArray:a,sumArray:r};t?n.state=c:n.setState(c)},n.onSumChange=function(e,t){console.log("inkjaaaaa"),console.log(e,t),console.log(n.state.sumArray);var a=Object(d.a)(n.state.sumArray);a[e]=t,n.setState({sumArray:a}),console.log(a)},n.applyTedad(n.props.Tedad,!0),n}return Object(i.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return e.Tedad!==this.props.Tedad&&this.applyTedad(e.Tedad,!1),!0}},{key:"render",value:function(){for(var e=0,t=0;t<this.state.sumArray.length;t++)e+=this.state.sumArray[t];return Object(h.jsxs)("div",{children:[this.state.compArray,Object(h.jsx)("hr",{}),Object(h.jsxs)("label",{children:[e,Object(h.jsx)("hr",{}),this.state.sumArray.join("-")]})]})}}]),a}(n.Component),p=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={tedad:3,errorMessage:"",MainComponent:[]},e.handleChange=function(t){var a=parseInt(t.target.value);""===t.target.value||isNaN(t.target.value)?e.setState({tedad:0,errorMessage:"\u0639\u062f\u062f \u0628\u0627\u06cc\u062f \u0648\u0627\u0631\u062f \u0628\u0634\u0648\u062f."}):a>10||a<0?e.setState({tedad:0,errorMessage:" \u0639\u062f\u062f \u0628\u0627\u06cc\u062f \u0628\u06cc\u0646 \u0635\u0641\u0631 \u0648 ".concat(10," \u0628\u0627\u0634\u062f. ")}):e.setState({tedad:a,errorMessage:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{style:{width:"500px",margin:"0px outo",border:"2px solid black",backgroundColor:"rgb(219,112,147)"},children:[Object(h.jsx)("input",{style:{width:"fit-content",textAlign:"center",borderWidth:1,margin:10,backgroundColor:"rgb(255,218,185)"},defaultValue:"3",placeholder:"\u062a\u0639\u062f\u0627\u062f \u0631\u0648 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f.",onChange:this.handleChange}),Object(h.jsx)("label",{children:"\u062a\u0639\u062f\u0627\u062f \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f."}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{style:{color:"gold"},children:this.state.errorMessage}),Object(h.jsx)(b,{Tedad:this.state.tedad})]})}}]),a}(n.Component),g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),s(e),o(e)}))};o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root")),g()}},[[15,1,2]]]);
//# sourceMappingURL=main.73aee84e.chunk.js.map