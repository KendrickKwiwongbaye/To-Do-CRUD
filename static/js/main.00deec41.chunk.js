(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{12:function(t,e,o){},14:function(t,e,o){"use strict";o.r(e);var s=o(1),n=o.n(s),c=o(6),i=o.n(c),a=(o(12),o(5)),d=o.p+"static/media/trash-347.d91cf280.svg",r=o(0),u=function(t){var e=t.text,o=t.todos,s=t.setTodos,n=t.todoo;return Object(r.jsxs)("div",{className:"overallTask",children:[Object(r.jsx)("p",{className:"inputTask",children:e}),Object(r.jsx)("div",{className:"deleteTask",children:Object(r.jsx)("button",{class:"btn btn-light",onClick:function(){s(o.filter((function(t){return t.id!==n.id})))},children:Object(r.jsx)("img",{src:d,width:"auto",height:"12px",alt:"trash"})})})]})},j=function(t){t.inputText,t.setInputText;var e=t.todos,o=t.setTodos,s=t.todo;return Object(r.jsx)("div",{children:e.map((function(t){return Object(r.jsx)(u,{todoo:t,todo:s,text:t.text,id:t.id,setTodos:o,todos:e},t.id)}))})},l=o(7),b=function(t){var e=t.inputText,o=t.setInputText,s=t.todos,n=t.setTodos,c=e.length>0;return Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{type:"text",value:e,placeholder:"Enter a task..",onChange:function(t){o(t.target.value)}}),c&&Object(r.jsx)("button",{class:"btn btn-primary",onClick:function(t){t.preventDefault(),o(""),n([].concat(Object(l.a)(s),[{text:e,id:1*Math.random()}]))},children:"ADD TASK"})]})},x=function(){var t=Object(s.useState)(""),e=Object(a.a)(t,2),o=e[0],n=e[1],c=Object(s.useState)([]),i=Object(a.a)(c,2),d=i[0],u=i[1];return Object(s.useEffect)((function(){var t=localStorage.getItem("todos");t&&u(JSON.parse(t))}),[]),Object(s.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(d))})),Object(r.jsxs)("div",{children:[Object(r.jsx)(b,{inputText:o,setInputText:n,todos:d,setTodos:u}),Object(r.jsx)(j,{inputText:o,setInputText:n,todos:d,setTodos:u})]})};i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(x,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.00deec41.chunk.js.map