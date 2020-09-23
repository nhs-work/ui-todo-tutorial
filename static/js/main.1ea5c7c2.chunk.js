(this["webpackJsonpui-todo"]=this["webpackJsonpui-todo"]||[]).push([[0],{110:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(25),c=n.n(o),u=(n(73),n(74),n(22)),i=n(36),s=n(6),d=function(t){return{type:"SET_TODOS",data:t}},p=function(t,e){return{type:"ADD_TODO",data:{id:t,description:e}}},l=function(t){return{type:"REMOVE_TODO",data:{id:t}}},f=function(t,e){var n=e.type,a=e.data;switch(n){case"SET_TODOS":return Object(s.a)(Object(s.a)({},t),{},{todos:a});case"ADD_TODO":var r=Object(s.a)(Object(s.a)({},t.todos),{},Object(i.a)({},a.id,{description:a.description}));return Object(s.a)(Object(s.a)({},t),{},{todos:r});case"REMOVE_TODO":var o=Object(s.a)({},t.todos);return delete o[a.id],Object(s.a)(Object(s.a)({},t),{},{todos:o});case"UPDATE_TODO":var c=Object(s.a)(Object(s.a)({},t.todos),{},Object(i.a)({},a.id,{description:a.description}));return Object(s.a)(Object(s.a)({},t),{},{todos:c});default:return t}},O={todos:{}},b=Object(a.createContext)(O),m=function(t){var e=t.children,n=Object(a.useReducer)(f,O),o=Object(u.a)(n,2),c=o[0],i=o[1];return r.a.createElement(b.Provider,{value:{state:c,dispatch:i}},e)},h=function(){return r.a.createElement("h1",{"data-cy":"header"},"TODO")},v=n(5),j=n.n(v),y=n(11),E=n(113),_=n(50),k=n(114),w=n(48),x=n.n(w);n(76);n(79).config();x.a.initializeApp({apiKey:"AIzaSyBup8BGS7ufqVOEkqREqaLshyRmELaSkR8",authDomain:"test-38f47.firebaseapp.com",databaseURL:"https://test-38f47.firebaseio.com",projectId:"test-38f47",storageBucket:"test-38f47.appspot.com",messagingSenderId:"376951504968",appId:"1:376951504968:web:5fa27ea5f775ea85d4d87d"});var T=x.a.firestore(),g={fetchTodos:function(){var t=Object(y.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={},t.next=3,T.collection("todo-list").get();case 3:return t.sent.docs.forEach((function(t){e[t.id]=t.data()})),t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),addTodo:function(){var t=Object(y.a)(j.a.mark((function t(e,n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.collection("todo-list").doc(e).set({description:n});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),updateTodo:function(){var t=Object(y.a)(j.a.mark((function t(e,n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.collection("todo-list").doc(e).update({description:n});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),deleteTodo:function(){var t=Object(y.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.collection("todo-list").doc(e).delete();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},D=function(){var t=Object(a.useState)(""),e=Object(u.a)(t,2),n=e[0],o=e[1],c=Object(a.useContext)(b).dispatch,i=function(){var t=Object(y.a)(j.a.mark((function t(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(k.a)(),t.next=3,g.addTodo(e,n).then((function(){c(p(e,n)),o("")})).catch((function(t){return console.log(t)}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"todo-input"},r.a.createElement(E.a,{value:n,onChange:function(t){var e=t.target.value;return o(e)},placeholder:"Add a TODO",size:"large",className:"todo-input__input","data-cy":"todo-input__input"}),r.a.createElement(_.a,{type:"primary",shape:"round",onClick:i,className:"todo-input__button","data-cy":"todo-input__button"},"Add"))},S=function(t){var e=Object(a.useState)(!1),n=Object(u.a)(e,2),o=n[0],c=n[1],i=Object(a.useState)(t.description),s=Object(u.a)(i,2),d=s[0],p=s[1];return r.a.createElement("div",{className:"todo-task"},r.a.createElement("input",{className:"todo-task__name","data-cy":"todo-task__name",value:d,disabled:!o,onChange:function(t){return p(t.target.value)}}),!o&&r.a.createElement(_.a,{type:"primary",shape:"round",className:"todo-task__button","data-cy":"todo-task__button-edit",onClick:function(){return c(!0)}},"Edit"),o&&r.a.createElement(_.a,{type:"primary",shape:"round",className:"todo-task__button","data-cy":"todo-task__button-update",onClick:function(){c(!1),t.update(t.id,d)}},"Update"),!o&&r.a.createElement(_.a,{type:"primary",shape:"round",className:"todo-task__button","data-cy":"todo-task__button-delete",onClick:function(){o||t.delete(t.id)}},"Delete"))},C=function(){var t=Object(a.useContext)(b).dispatch,e=Object(a.useContext)(b).state;Object(a.useEffect)((function(){(function(){var e=Object(y.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.fetchTodos().then((function(e){return t(d(e))})).catch((function(t){return console.log(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]);var n=function(){var e=Object(y.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.deleteTodo(n).then((function(){return t(l(n))})).catch((function(t){return console.log(t)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(y.a)(j.a.mark((function e(n,a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.updateTodo(n,a).then((function(){return t(p(n,a))})).catch((function(t){return console.log(t)}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"todo-list","data-cy":"todo-list"},Object.entries(e.todos).map((function(t){var e=Object(u.a)(t,2),a=e[0],c=e[1];return r.a.createElement(S,{key:a,description:c.description,delete:n,update:o,id:a})})))},N=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(h,null),r.a.createElement(m,null,r.a.createElement(D,null),r.a.createElement(C,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},68:function(t,e,n){t.exports=n(110)},73:function(t,e,n){},74:function(t,e,n){}},[[68,1,2]]]);
//# sourceMappingURL=main.1ea5c7c2.chunk.js.map