(this["webpackJsonpreact-burger"]=this["webpackJsonpreact-burger"]||[]).push([[0],{100:function(e,t,n){e.exports={main:"main_main__OFmn0"}},101:function(e,t,n){e.exports={overlay:"modal-overlay_overlay__3PHOs"}},114:function(e,t,n){},199:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(32),i=n.n(a),s=(n(114),n(6)),o=n(99),l=n.n(o),d=n(10),u=n(100),j=n.n(u),b=n(50),m=n.n(b),p=n.p+"static/media/check.2022ce2b.svg",O=n(0);function f(e){var t=e.order;return t?Object(O.jsxs)("div",{className:"".concat(m.a.details," pb-30"),children:[Object(O.jsx)("p",{className:"".concat(m.a.digits," text text_type_digits-large mb-8"),children:t.number}),Object(O.jsx)("p",{className:"text text_type_main-medium",children:"\u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0437\u0430\u043a\u0430\u0437\u0430"}),Object(O.jsx)("img",{className:"".concat(m.a.checkmark," mt-15 mb-15"),src:p,alt:"order-details"}),Object(O.jsx)("p",{className:"text text_type_main-default mb-2",children:"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 \u043d\u0430\u0447\u0430\u043b\u0438 \u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c"}),Object(O.jsx)("p",{className:"text text_type_main-default text_color_inactive",children:"\u0414\u043e\u0436\u0434\u0438\u0442\u0435\u0441\u044c \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u043d\u0430 \u043e\u0440\u0431\u0438\u0442\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0442\u0430\u043d\u0446\u0438\u0438"})]}):null}var _=n(51),x=n.n(_),g=n(101),h=n.n(g);function v(e){var t=e.onClick;return Object(O.jsx)("div",{className:h.a.overlay,onClick:t})}var y=n(4),N=function(e){var t=e.children,n=e.title,r=e.onClose,i=e.isVisible;return Object(c.useEffect)((function(){if(i){var e=function(e){"Escape"===e.key&&r()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}}),[r,i]),i?Object(a.createPortal)(Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(v,{onClick:r}),Object(O.jsxs)("div",{className:"".concat(x.a.modal," pr-10 pl-10 pt-10"),children:[Object(O.jsxs)("div",{className:x.a.header,children:[Object(O.jsx)("h2",{className:"text text_type_main-large",children:n}),Object(O.jsx)("button",{className:x.a.close,onClick:r,children:Object(O.jsx)(y.CloseIcon,{type:"primary"})})]}),t]})]}),document.querySelector("#modals")):null},k=n(17),I=n(12),T=n(2),C=n(38),E=function(){return Object(C.b)()},w=C.c,S=n(208),R=n(73),D=n.n(R);function B(e){var t=e.children,n=e.ingredient,c=e.innerRef,r=e.className,a=e.onClick,i=Object(d.h)();return Object(O.jsx)(s.b,{to:{pathname:"/ingredients/".concat(n._id),state:{background:i}},innerRef:c,className:r,onClick:a,children:t},n._id)}var P=Object(c.forwardRef)((function(e,t){var n=e.ingredient,r=e.onIngredientClick,a=e.count,i=Object(c.useCallback)((function(){r(n)}),[r,n]);return Object(O.jsx)(B,{ingredient:n,className:D.a.ingredient_card,innerRef:t,onClick:i,children:Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(y.Counter,{count:a,size:"small"}),Object(O.jsx)("img",{src:n.image,alt:n.name}),Object(O.jsxs)("div",{className:"".concat(D.a.price," mt-1 mb-1"),children:[Object(O.jsx)("span",{className:"text text_type_main-default mr-2",children:n.price})," ",Object(O.jsx)(y.CurrencyIcon,{type:"primary"})]}),Object(O.jsx)("p",{children:n.name})]})})}));var U=function(e){var t=e.ingredient,n=e.onIngredientClick,c=e.count,r=Object(S.a)({type:"ingredient",item:{ingredient:t}}),a=Object(k.a)(r,2)[1];return Object(O.jsx)(P,{ingredient:t,onIngredientClick:n,count:c,ref:a})},z=n(52),L=n.n(z),G=Object(c.forwardRef)((function(e,t){var n=e.title,c=e.ingredients,r=e.type,a=e.onIngredientClick,i=e.counts;return Object(O.jsxs)("section",{ref:t,className:"".concat(L.a.ingredients_list," pt-10"),children:[Object(O.jsx)("h2",{className:"".concat(L.a.ingredients_list_title," mb-6 text text_type_main-medium"),children:n}),Object(O.jsx)("div",{className:"".concat(L.a.cards_box," pl-4 pr-4"),children:c.filter((function(e){return e.type===r})).map((function(e){return Object(O.jsx)(U,{ingredient:e,onIngredientClick:a,count:i[e._id]},e._id)}))})]})})),F=n(39),A=n.n(F);var J=function(e){var t=e.handleIngredientDetailsOpen,n=w((function(e){var t=e.burgerConstructor;return{selectedIngredients:t.selectedIngredients,selectedBun:t.selectedBun}})),r=n.selectedIngredients,a=n.selectedBun,i=w((function(e){return{ingredients:e.ingredients.ingredients}})).ingredients,s=Object(c.useMemo)((function(){return i.reduce((function(e,t){return"bun"===t.type?Object(T.a)(Object(T.a)({},e),{},Object(I.a)({},t._id,a&&t._id===a._id?1:0)):Object(T.a)(Object(T.a)({},e),{},Object(I.a)({},t._id,r.filter((function(e){return e._id===t._id})).length))}),{})}),[i,r,a]),o=Object(c.useState)("bun"),l=Object(k.a)(o,2),d=l[0],u=l[1],j=Object(c.useRef)(null),b=Object(c.useRef)(null),m=Object(c.useRef)(null),p=Object(c.useCallback)((function(){u("bun")}),[u]),f=Object(c.useCallback)((function(){u("sauce")}),[u]),_=Object(c.useCallback)((function(){u("main")}),[u]),x=Object(c.useCallback)((function(e){if(null!=b.current&&null!=m.current){var t=e.target.scrollTop,n=b.current.offsetTop,c=m.current.offsetTop;t+200<=n?p():t+200<=c?f():_()}}),[p,_,f]);return Object(O.jsxs)("section",{className:"".concat(A.a.ingredients_section," pt-10 mr-10"),children:[Object(O.jsx)("h1",{className:"text text_type_main-large",children:"\u0421\u043e\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u0443\u0440\u0433\u0435\u0440"}),Object(O.jsxs)("div",{className:"".concat(A.a.ingredients_tabs," pt-5"),children:[Object(O.jsx)(y.Tab,{value:"bun",active:"bun"===d,onClick:p,children:"\u0411\u0443\u043b\u043a\u0438"}),Object(O.jsx)(y.Tab,{value:"sauce",active:"sauce"===d,onClick:f,children:"\u0421\u043e\u0443\u0441\u044b"}),Object(O.jsx)(y.Tab,{value:"main",active:"main"===d,onClick:_,children:"\u041d\u0430\u0447\u0438\u043d\u043a\u0438"})]}),Object(O.jsxs)("div",{className:"".concat(A.a.scrollbox," ").concat(A.a.scrollbar),onScroll:x,children:[Object(O.jsx)(G,{ref:j,title:"\u0411\u0443\u043b\u043a\u0438",type:"bun",ingredients:i,counts:s,onIngredientClick:t},"bun"),Object(O.jsx)(G,{ref:b,title:"\u0421\u043e\u0443\u0441\u044b",type:"sauce",ingredients:i,counts:s,onIngredientClick:t},"sauce"),Object(O.jsx)(G,{ref:m,title:"\u041d\u0430\u0447\u0438\u043d\u043a\u0438",type:"main",ingredients:i,counts:s,onIngredientClick:t},"main")]})]})},M=n(209),q=n(29),V=n.n(q),H=n(53),Y=n.n(H),Z=Object(c.forwardRef)((function(e,t){var n=e.ingredient,r=e.index,a=e.handleDelete,i=Object(c.useCallback)((function(){return a(r)}),[a,r]);return Object(O.jsxs)("div",{className:"".concat(Y.a.constructor_item," mb-4 pl-8"),ref:t,children:[Object(O.jsx)("div",{className:Y.a.ingredient_button,children:Object(O.jsx)("button",{className:Y.a.drag_button,children:Object(O.jsx)(y.DragIcon,{type:"primary"})})}),Object(O.jsx)(y.ConstructorElement,{text:n.name,price:n.price,thumbnail:n.image,handleClose:i})]})})),Q="DELETE_IGREDIENT",W="DROP_INGREDIENT",X="GET_ORDER_NUMBER_SUCCESS",$="REORDER_CONSTRUCTOR_ITEM";var K=function(e){var t=e.ingredient,n=e.index,r=e.handleDelete,a=Object(c.useRef)(null),i=E(),s=Object(S.a)({type:"constructor-item",item:{dragIndex:n}}),o=Object(k.a)(s,2)[1],l=Object(M.a)({accept:"constructor-item",drop:function(e){var t=e.dragIndex;i({type:$,payload:{itemIndex:n,dragIndex:t}})}}),d=Object(k.a)(l,2)[1];return Object(c.useEffect)((function(){o(d(a))}),[o,d]),Object(O.jsx)(Z,{ingredient:t,index:n,handleDelete:r,ref:a})},ee=Object(c.forwardRef)((function(e,t){var n=e.onSubmit,r=e.ingredients,a=E(),i=w((function(e){return e.burgerConstructor.selectedIngredients})),s=w((function(e){return e.burgerConstructor.selectedBun})),o=Object(c.useMemo)((function(){return i.reduce((function(e,t){return e+t.price}),s?s.price:0)}),[i,s]),l=Object(c.useCallback)((function(){s&&n(i.concat(s))}),[n,i,s]),d=Object(c.useCallback)((function(e){a({type:Q,payload:{deleteIndex:e}})}),[a]);return 0===r.length?null:Object(O.jsxs)("section",{className:"".concat(V.a.constructor_section," pt-25"),ref:t,children:[Object(O.jsxs)("div",{className:V.a.constructor_list,children:[s&&Object(O.jsx)("div",{className:"pl-9 pr-4",children:Object(O.jsx)(y.ConstructorElement,{type:"top",isLocked:!0,text:"".concat(s.name," (\u0432\u0435\u0440\u0445)"),price:s.price,thumbnail:s.image})}),Object(O.jsx)("div",{className:"".concat(V.a.constructor_items," ").concat(V.a.scrollbar,"  mt-4 mb-4 pl-4 pr-4"),children:i.map((function(e,t){return Object(O.jsx)(K,{ingredient:e,index:t,handleDelete:d},e.uid)}))}),s?Object(O.jsx)("div",{className:"pl-9 pr-4",children:Object(O.jsx)(y.ConstructorElement,{type:"bottom",isLocked:!0,text:"".concat(s.name," (\u043d\u0438\u0437)"),price:s.price,thumbnail:s.image})}):null]}),Object(O.jsxs)("div",{className:"".concat(V.a.order," pt-10"),children:[Object(O.jsxs)("div",{className:"".concat(V.a.order_price," mr-10"),children:[Object(O.jsx)("span",{className:"text text_type_digits-medium mr-2",children:o}),Object(O.jsx)(y.CurrencyIcon,{type:"primary"})]}),Object(O.jsx)(y.Button,{type:"primary",size:"large",onClick:l,children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"})]})]})})),te=n(210);var ne=function(e){var t=e.onSubmit,n=E(),c=Object(M.a)({accept:"ingredient",drop:function(e){var t=e.ingredient;n({type:W,payload:{ingredient:Object(T.a)(Object(T.a)({},t),{},{uid:Object(te.a)()})}})}}),r=Object(k.a)(c,2)[1],a=w((function(e){return{ingredients:e.ingredients.ingredients}})).ingredients;return Object(O.jsx)(ee,{onSubmit:t,ingredients:a,ref:r})},ce="https://norma.nomoreparties.space/api",re=function(e){return e&&e.ok?e.json():e.json().then((function(t){return Promise.reject({message:"\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status),data:t})}))};function ae(e){return fetch("".concat(ce,"/auth/token"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})}).then((function(e){return re(e)}))}var ie="DELETE_SELECTED_INGREDIENT_DATA",se="GET_INGREDIENTS_REQUEST",oe="GET_INGREDIENTS_SUCCESS",le="GET_INGREDIENTS_FAILED",de="SELECT_INGREDIENT",ue=function(){return function(e){e({type:se}),fetch("".concat(ce,"/ingredients")).then((function(e){return re(e)})).then((function(t){t&&t.success?e({type:oe,payload:{ingredients:t.data}}):e({type:le})})).catch((function(e){return console.log(e)}))}},je="DELETE_ORDER_DATA",be="GET_ORDER_NUMBER_REQUEST",me="GET_ORDER_NUMBER_FAILED",pe=function(e){return function(t){t({type:be}),function(e){return fetch("".concat(ce,"/orders"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ingredients:e})}).then((function(e){return re(e)}))}(e).then((function(e){e&&e.success?t({type:X,payload:{order:e.order}}):t({type:me})})).catch((function(e){return console.log(e)}))}};var Oe=function(){var e=E(),t=Object(d.g)(),n=w((function(e){var t=e.ingredients;return{ingredients:t.ingredients,selectedIngredient:t.selectedIngredient,order:e.order.order,loggedIn:e.user.loggedIn}})),r=n.order,a=n.loggedIn,i=Object(c.useCallback)((function(t){e({type:de,payload:{ingredient:t}})}),[e]),s=Object(c.useCallback)((function(n){a?e(pe(n.map((function(e){return e._id})))):t.push("/login")}),[e,t,a]),o=Object(c.useCallback)((function(){e({type:je})}),[e]);return Object(O.jsxs)("main",{className:"".concat(j.a.main," pb-10"),children:[Object(O.jsx)(J,{handleIngredientDetailsOpen:i}),Object(O.jsx)(ne,{onSubmit:s}),Object(O.jsx)(N,{isVisible:!!r,onClose:o,children:r?Object(O.jsx)(f,{order:r}):null})]})},fe=function(){return Object(O.jsx)(Oe,{})};function _e(e){var t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0}function xe(e,t,n){var c=(n=n||{}).expires;if("number"==typeof c&&c){var r=new Date;r.setTime(r.getTime()+1e3*c),c=n.expires=r}if(c&&c instanceof Date&&c.toUTCString&&(n.expires=c.toUTCString()),null!=t){var a=e+"="+(t=encodeURIComponent(t));for(var i in n){a+="; "+i;var s=n[i];!0!==s&&(a+="="+s)}document.cookie=a}}var ge="USER_REGISTER",he="USER_LOGIN",ve="USER_SET_DATA",ye="USER_LOGOUT",Ne="GET_USER_INFO",ke="SET_USER_INFO",Ie=function(e,t,n,c){return function(){(function(e){var t=e.email,n=e.password,c=e.name;return fetch("".concat(ce,"/auth/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:n,name:c})}).then((function(e){return re(e)}))})({email:e,password:t,name:n}).then((function(e){console.log("registerUser",e),c.push("/login")})).catch((function(e){return console.log(e)}))}},Te=function(e,t,n){return function(c){(function(e){var t=e.email,n=e.password;return fetch("".concat(ce,"/auth/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:n})}).then((function(e){return re(e)}))})({email:e,password:t}).then((function(e){if(console.log("loginUser",e),null!=e.accessToken){var t=e.accessToken.split("Bearer ")[1];t&&e.refreshToken&&(xe("authToken",t),localStorage.setItem("refreshToken",e.refreshToken)),e.success&&(c({type:he}),n.push("/"))}})).catch((function(e){return console.log(e)}))}},Ce=function(e,t){return function(n){null!=e&&function(e){return fetch("".concat(ce,"/auth/logout"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:e})}).then((function(e){return re(e)}))}(e).then((function(e){console.log("logoutUser",e),e.success&&localStorage.removeItem("refreshToken")})).then((function(e){n({type:ye}),t.push("/login")})).catch((function(e){return console.log(e)}))}},Ee=function(e){return function(t){null!=e&&function(e){return fetch("".concat(ce,"/auth/user"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return re(e)}))}(e).then((function(e){console.log("getUserInfoApi",e),t({type:Ne,payload:{name:e.user.name,email:e.user.email}})})).catch((function(e){if(console.log(e),"jwt expired"===e.data.message){var t=localStorage.getItem("refreshToken");if(null==t)return;ae(t).then((function(e){console.log("refreshToken",e);var t=e.accessToken.split("Bearer ")[1];t&&e.refreshToken&&(xe("authToken",t),localStorage.setItem("refreshToken",e.refreshToken))})).catch((function(e){return console.log(e)}))}}))}},we=function(e,t,n,c){return function(r){null!=e&&function(e,t){var n=t.name,c=t.email,r=t.password;return fetch("".concat(ce,"/auth/user"),{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)},body:JSON.stringify({name:n,email:c,password:r})}).then((function(e){return re(e)}))}(e,{name:t,email:n,password:c}).then((function(e){console.log("setUserInfoApi",e),r({type:ke,payload:{name:e.user.name,email:e.user.email,password:e.user.password}})})).catch((function(e){if(console.log(e),"jwt expired"===e.data.message){var t=localStorage.getItem("refreshToken");if(null==t)return;ae(t).then((function(e){console.log("refreshToken",e);var t=e.accessToken.split("Bearer ")[1];t&&e.refreshToken&&(xe("authToken",t),localStorage.setItem("refreshToken",e.refreshToken))})).catch((function(e){return console.log(e)}))}}))}},Se=n(9),Re=n.n(Se),De=function(){var e=E(),t=Object(d.g)(),n=w((function(e){return{email:e.user.email,password:e.user.password,name:e.user.name,loggedIn:e.user.loggedIn}})),r=n.email,a=n.password,i=n.name,o=Object(c.useCallback)((function(t){var n=t.target,c=n.name,r=n.value;e({type:ge,payload:Object(I.a)({},c,r)})}),[e]),l=Object(c.useCallback)((function(n){n.preventDefault(),e(Ie(r,a,i,t))}),[e,r,i,a,t]);return Object(O.jsx)("div",{className:Re.a.main,children:Object(O.jsxs)("div",{className:"".concat(Re.a.form__block," pt-20"),children:[Object(O.jsx)("h1",{className:"text text_type_main-medium mb-6",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(O.jsxs)("form",{className:Re.a.form,onSubmit:l,children:[Object(O.jsx)("div",{className:"mb-6",children:Object(O.jsx)(y.Input,{type:"text",placeholder:"\u0418\u043c\u044f",onChange:function(e){return o(e)},value:i,name:"name",error:!1,errorText:"\u041e\u0448\u0438\u0431\u043a\u0430",size:"default"})}),Object(O.jsx)("div",{className:"mb-6",children:Object(O.jsx)(y.Input,{type:"email",placeholder:"E-mail",onChange:function(e){return o(e)},value:r,name:"email",error:!1,errorText:"\u041e\u0448\u0438\u0431\u043a\u0430",size:"default"})}),Object(O.jsx)("div",{className:"mb-6",children:Object(O.jsx)(y.PasswordInput,{onChange:function(e){return o(e)},value:a,name:"password"})}),Object(O.jsx)(y.Button,{type:"primary",size:"medium",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(O.jsx)("div",{children:Object(O.jsxs)("p",{className:"text text_type_main-default text_color_inactive mt-20",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"," ",Object(O.jsx)(s.b,{to:"/login",className:Re.a.login,children:"\u0412\u043e\u0439\u0442\u0438"})]})})]})})},Be=function(){var e=E(),t=Object(d.g)(),n=w((function(e){return{email:e.user.email,password:e.user.password,loggedIn:e.user.loggedIn}})),r=n.email,a=n.password,i=Object(c.useCallback)((function(t){var n=t.target,c=n.name,r=n.value;e({type:ve,payload:Object(I.a)({},c,r)})}),[e]),o=Object(c.useCallback)((function(n){n.preventDefault(),e(Te(r,a,t))}),[e,r,a,t]);return Object(O.jsx)("div",{className:Re.a.main,children:Object(O.jsxs)("div",{className:"".concat(Re.a.form__block," pt-20"),children:[Object(O.jsx)("h1",{className:"text text_type_main-medium mb-6",children:"\u0412\u0445\u043e\u0434"}),Object(O.jsxs)("form",{className:Re.a.form,onSubmit:o,children:[Object(O.jsx)("div",{className:"mb-6",children:Object(O.jsx)(y.Input,{type:"email",placeholder:"E-mail",onChange:function(e){return i(e)},value:r,name:"email",error:!1,errorText:"\u041e\u0448\u0438\u0431\u043a\u0430",size:"default"})}),Object(O.jsx)("div",{className:"mb-6",children:Object(O.jsx)(y.PasswordInput,{onChange:function(e){return i(e)},value:a,name:"password"})}),Object(O.jsx)(y.Button,{type:"primary",size:"medium",children:"\u0412\u043e\u0439\u0442\u0438"})]}),Object(O.jsx)("div",{className:Re.a.register,children:Object(O.jsxs)("p",{className:"text text_type_main-default text_color_inactive mt-20",children:["\u0412\u044b \u2014 \u043d\u043e\u0432\u044b\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c?"," ",Object(O.jsx)(s.b,{to:"/register",className:Re.a.link,children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})}),Object(O.jsx)("div",{className:Re.a.forgot_password,children:Object(O.jsxs)("p",{className:"text text_type_main-default text_color_inactive mt-4",children:["\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?"," ",Object(O.jsx)(s.b,{to:"/forgot-password",className:Re.a.link,children:"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"})]})})]})})},Pe="FORGOT_PASSWORD_SET_EMAIL",Ue="RESET_PASSWORD",ze=function(e,t,n){return function(c){(function(e,t){return fetch("".concat(ce,"/password-reset/reset"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,token:t})}).then((function(e){return re(e)}))})(e,t).then((function(e){console.log(e),e.success&&(n.push("/"),c({type:Ue}))})).catch((function(e){return console.log(e)}))}},Le=function(e,t){return function(){(function(e){return fetch("".concat(ce,"/password-reset"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})}).then((function(e){return re(e)}))})(e).then((function(e){console.log("forgotPasswordApi",e),e.success&&(t.push("/reset-password"),console.log("redir",e))})).catch((function(e){return console.log(e)}))}},Ge=function(){var e=E(),t=Object(d.g)(),n=w((function(e){return{email:e.resetPassword.email}})).email,r=Object(c.useCallback)((function(t){var n=t.target,c=n.name,r=n.value;e({type:Pe,payload:Object(I.a)({},c,r)})}),[e]),a=Object(c.useCallback)((function(c){c.preventDefault(),e(Le(n,t))}),[e,n,t]);return Object(O.jsx)("div",{className:Re.a.main,children:Object(O.jsxs)("div",{className:"".concat(Re.a.form__block," pt-20"),children:[Object(O.jsx)("h1",{className:"text text_type_main-medium mb-6",children:"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f"}),Object(O.jsxs)("form",{className:Re.a.form,onSubmit:a,children:[Object(O.jsx)("div",{className:"mb-6",children:Object(O.jsx)(y.Input,{type:"email",placeholder:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 e-mail",onChange:function(e){r(e)},value:n,name:"email",error:!1,errorText:"\u041e\u0448\u0438\u0431\u043a\u0430",size:"default"})}),Object(O.jsx)(y.Button,{type:"primary",size:"medium",children:"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c"})]}),Object(O.jsx)("div",{children:Object(O.jsxs)("p",{className:"text text_type_main-default text_color_inactive mt-20",children:["\u0412\u0441\u043f\u043e\u043c\u043d\u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?"," ",Object(O.jsx)(s.b,{to:"/login",className:Re.a.link,children:"\u0412\u043e\u0439\u0442\u0438"})]})})]})})},Fe=function(){var e=Object(c.useState)({password:"",resetToken:""}),t=Object(k.a)(e,2),n=t[0],r=t[1],a=w((function(e){return{email:e.resetPassword.email}})).email,i=E(),o=Object(d.g)(),l=Object(c.useCallback)((function(e){var t=e.target,n=t.name,c=t.value;r(Object(I.a)({},n,c))}),[]),u=Object(c.useCallback)((function(e){e.preventDefault(),i(ze(n.password,n.resetToken,o))}),[i,o,n]);return Object(c.useEffect)((function(){a||o.push("/forgot-password")}),[]),Object(O.jsx)("div",{className:Re.a.main,children:Object(O.jsxs)("div",{className:"".concat(Re.a.form__block," pt-20"),children:[Object(O.jsx)("h1",{className:"text text_type_main-medium mb-6",children:"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f"}),Object(O.jsxs)("form",{className:Re.a.form,onSubmit:u,children:[Object(O.jsx)("div",{className:"mb-6",children:Object(O.jsx)(y.PasswordInput,{onChange:function(e){return l(e)},value:n.password,name:"password"})}),Object(O.jsx)("div",{className:"mb-6",children:Object(O.jsx)(y.Input,{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0434 \u0438\u0437 \u043f\u0438\u0441\u044c\u043c\u0430",onChange:function(e){return l(e)},value:n.resetToken,name:"code",error:!1,errorText:"\u041e\u0448\u0438\u0431\u043a\u0430",size:"default"})}),Object(O.jsx)(y.Button,{type:"primary",size:"medium",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]}),Object(O.jsxs)("p",{className:"text text_type_main-default text_color_inactive mt-20",children:["\u0412\u0441\u043f\u043e\u043c\u043d\u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?"," ",Object(O.jsx)(s.b,{to:"/login",className:Re.a.link,children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})},Ae=n(25),Je=n.n(Ae),Me=function(){var e=w((function(e){return{name:e.user.name,email:e.user.email,password:e.user.password}})),t=e.name,n=e.email,r=e.password,a=Object(c.useState)({username:t,useremail:n,userpassword:r}),i=Object(k.a)(a,2),o=i[0],l=i[1],u=E(),j=Object(d.g)();Object(c.useEffect)((function(){u(Ee(_e("authToken")))}),[u]),Object(c.useEffect)((function(){l((function(e){return Object(T.a)(Object(T.a)({},e),{},{username:t||"",useremail:n||""})}))}),[n,t]);var b=Object(c.useCallback)((function(e){l((function(t){return Object(T.a)(Object(T.a)({},t),{},Object(I.a)({},e.target.name,e.target.value))}))}),[]),m=Object(c.useCallback)((function(e){e.preventDefault(),u(we(_e("authToken"),o.username,o.useremail,o.userpassword))}),[u,o]),p=o.username!==t||o.useremail!==n||o.userpassword!==r;return Object(O.jsxs)("div",{className:"".concat(Je.a.main," pt-20"),children:[Object(O.jsxs)("nav",{className:"".concat(Je.a.nav," mr-15"),children:[Object(O.jsx)(s.c,{to:"/profile",activeClassName:Je.a.active_link,className:"".concat(Je.a.navlink," text text_type_main-medium text_color_inactive mb-6"),children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"}),Object(O.jsx)(s.c,{to:"/",className:"".concat(Je.a.navlink," text text_type_main-medium text_color_inactive mb-6"),children:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0437\u0430\u043a\u0430\u0437\u043e\u0432"}),Object(O.jsx)("button",{className:"".concat(Je.a.logout," text text_type_main-medium text_color_inactive mb-6"),onClick:function(){null!=localStorage.getItem("refreshToken")&&u(Ce(localStorage.getItem("refreshToken"),j))},children:"\u0412\u044b\u0445\u043e\u0434"}),Object(O.jsx)("p",{className:"".concat(Je.a.nav_text," text text_type_main-default text_color_inactive"),children:"\u0412 \u044d\u0442\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u0432\u043e\u0438 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"})]}),Object(O.jsxs)("form",{className:Je.a.form,onSubmit:m,children:[Object(O.jsx)("div",{className:"mb-6",children:Object(O.jsx)(y.Input,{type:"text",placeholder:"\u0418\u043c\u044f",onChange:function(e){b(e)},icon:"EditIcon",value:o.username,name:"username",error:!1,errorText:"\u041e\u0448\u0438\u0431\u043a\u0430",size:"default"})}),Object(O.jsx)("div",{className:"mb-6",children:Object(O.jsx)(y.Input,{type:"text",placeholder:"\u041b\u043e\u0433\u0438\u043d",onChange:function(e){b(e)},icon:"EditIcon",value:o.useremail,name:"useremail",error:!1,errorText:"\u041e\u0448\u0438\u0431\u043a\u0430",size:"default"})}),Object(O.jsx)("div",{children:Object(O.jsx)(y.Input,{type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:function(e){b(e)},icon:"EditIcon",value:o.userpassword,name:"userpassword",error:!1,errorText:"\u041e\u0448\u0438\u0431\u043a\u0430",size:"default"})}),p&&Object(O.jsxs)("div",{className:"mt-6",children:[Object(O.jsx)(y.Button,{type:"primary",size:"small",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),Object(O.jsx)(y.Button,{type:"secondary",size:"small",onClick:function(){l({username:t,useremail:n,userpassword:r})},children:"\u041e\u0442\u043c\u0435\u043d\u0430"})]})]})]})};var qe=function(e){var t=w((function(e){return{loggedIn:e.user.loggedIn}})).loggedIn,n=Object(d.h)();return Object(O.jsx)(d.b,Object(T.a)(Object(T.a)({},e),{},{children:t?e.children:Object(O.jsx)(d.a,{to:{pathname:"/login",state:{from:n}}})}))},Ve=n(40),He=n.n(Ve);function Ye(e){var t=e.ingredient||{},n=t.image_large,c=t.name,r=t.calories,a=t.proteins,i=t.fat,s=t.carbohydrates;return Object(O.jsx)("div",{className:"".concat(He.a.details," pt-10 pb-15"),children:Object(O.jsxs)("div",{className:He.a.content,children:[Object(O.jsx)("img",{className:He.a.image,src:n,alt:c}),Object(O.jsx)("p",{className:"text text_type_main-medium mt-4 mb-8",children:c}),Object(O.jsxs)("ul",{className:He.a.list,children:[Object(O.jsxs)("li",{children:[Object(O.jsx)("p",{className:"text text_type_main-default text_color_inactive mb-2",children:"\u041a\u0430\u043b\u043e\u0440\u0438\u0438,\u043a\u043a\u0430\u043b"}),Object(O.jsx)("span",{className:"text text_type_digits-default text_color_inactive",children:r})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("p",{className:"text text_type_main-default text_color_inactive mb-2",children:"\u0411\u0435\u043b\u043a\u0438, \u0433"}),Object(O.jsx)("span",{className:"text text_type_digits-default text_color_inactive",children:a})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("p",{className:"text text_type_main-default text_color_inactive mb-2",children:"\u0416\u0438\u0440\u044b, \u0433"}),Object(O.jsx)("span",{className:"text text_type_digits-default text_color_inactive",children:i})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("p",{className:"text text_type_main-default text_color_inactive mb-2",children:"\u0423\u0433\u043b\u0435\u0432\u043e\u0434\u044b, \u0433"}),Object(O.jsx)("span",{className:"text text_type_digits-default text_color_inactive",children:s})]})]})]})})}function Ze(){var e=Object(d.i)().id,t=w((function(e){return{ingredients:e.ingredients.ingredients}})).ingredients.find((function(t){return t._id===e}));return t?Object(O.jsx)(Ye,{ingredient:t}):null}function Qe(){var e=Object(d.i)().id,t=Object(d.g)(),n=E(),r=w((function(e){var t=e.ingredients;return{ingredients:t.ingredients,selectedIngredient:t.selectedIngredient}})),a=r.selectedIngredient,i=r.ingredients,s=Object(c.useMemo)((function(){return a||i.find((function(t){return t._id===e}))}),[e,a,i]),o=Object(c.useCallback)((function(){n({type:ie}),t.goBack()}),[n,t]);return Object(O.jsx)(N,{isVisible:!!s,onClose:o,title:"\u0414\u0435\u0442\u0430\u043b\u0438 \u0438\u043d\u0433\u0440\u0435\u0434\u0438\u0435\u043d\u0442\u0430",children:s&&Object(O.jsx)(Ye,{ingredient:s})})}var We=function(e){var t=w((function(e){return{loggedIn:e.user.loggedIn}})).loggedIn;return Object(O.jsx)(d.b,Object(T.a)(Object(T.a)({},e),{},{children:t?Object(O.jsx)(d.a,{to:"/login"}):e.children}))},Xe=function(){return Object(O.jsx)(O.Fragment,{})},$e=n(23),Ke=n.n($e);var et=function(){return Object(O.jsxs)("header",{className:"".concat(Ke.a.header," p-4"),children:[Object(O.jsxs)("nav",{className:Ke.a.nav,children:[Object(O.jsxs)(s.c,{exact:!0,to:"/",className:"".concat(Ke.a.navLink," pr-5 pt-4 pb-4 mr-2"),activeClassName:Ke.a.active_link,children:[Object(O.jsx)(y.BurgerIcon,{type:"primary"}),Object(O.jsx)("span",{className:"text text_type_main-default ml-2",children:"\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440"})]}),Object(O.jsxs)(s.c,{to:"/feed",className:"".concat(Ke.a.navLink," pl-5 pr-5 pt-4 pb-4"),activeClassName:Ke.a.active_link,children:[Object(O.jsx)(y.ListIcon,{type:"primary"}),Object(O.jsx)("span",{className:"text text_type_main-default ml-2",children:"\u041b\u0435\u043d\u0442\u0430 \u0437\u0430\u043a\u0430\u0437\u043e\u0432"})]})]}),Object(O.jsx)(y.Logo,{}),Object(O.jsx)("div",{className:Ke.a.auth,children:Object(O.jsxs)(s.c,{exact:!0,to:"/profile",className:"".concat(Ke.a.navLink," pl-5 pr-5 pt-4 pb-4"),activeClassName:Ke.a.active_link,children:[Object(O.jsx)(y.ProfileIcon,{type:"primary"}),Object(O.jsx)("span",{className:"text text_type_main-default ml-2",children:"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"})]})})]})};function tt(){var e=Object(d.h)(),t=e.state&&e.state.background,n=E();return Object(c.useEffect)((function(){n(ue())}),[n]),Object(O.jsxs)("div",{className:l.a.page,children:[Object(O.jsx)(et,{}),Object(O.jsxs)(d.d,{location:t||e,children:[Object(O.jsx)(d.b,{exact:!0,path:"/",children:Object(O.jsx)(fe,{})}),Object(O.jsx)(We,{path:"/register",children:Object(O.jsx)(De,{})}),Object(O.jsx)(We,{path:"/login",children:Object(O.jsx)(Be,{})}),Object(O.jsx)(We,{path:"/forgot-password",children:Object(O.jsx)(Ge,{})}),Object(O.jsx)(We,{path:"/reset-password",children:Object(O.jsx)(Fe,{})}),Object(O.jsx)(qe,{path:"/profile",children:Object(O.jsx)(Me,{})}),Object(O.jsx)(qe,{path:"/ingredients/:id",children:Object(O.jsx)(Ze,{})}),Object(O.jsx)(qe,{path:"/profile/orders",children:Object(O.jsx)(Qe,{})}),Object(O.jsx)(d.b,{path:"/feed",exact:!0,children:Object(O.jsx)(Xe,{})}),Object(O.jsx)(d.b,{path:"/feed/:id",children:Object(O.jsx)("div",{children:"feed id"})}),Object(O.jsx)(qe,{path:"/profile/orders",exact:!0,children:Object(O.jsx)("div",{children:"profile orders"})}),Object(O.jsx)(qe,{path:"/profile/orders/:id",children:Object(O.jsx)("div",{children:"profile orders id"})})]}),t&&Object(O.jsx)(d.b,{path:"/ingredients/:id",children:Object(O.jsx)(Qe,{})})]})}var nt=function(){return Object(O.jsx)(s.a,{children:Object(O.jsx)(tt,{})})},ct=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,211)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))},rt=n(207),at=n(108),it=n(206).a,st=n(107),ot=n(22),lt=n(77),dt={selectedIngredients:[],selectedBun:null},ut={ingredients:[],ingredientsRequest:!1,ingredientsFailed:!1,selectedIngredient:null},jt={order:null,orderNumberRequest:!1,orderNumberFailed:!1},bt={email:""},mt={email:"",password:"",name:"",loggedIn:!!localStorage.getItem("refreshToken")},pt=Object(ot.b)({order:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be:return Object(T.a)(Object(T.a)({},e),{},{orderNumberRequest:!0});case X:return Object(T.a)(Object(T.a)({},e),{},{orderNumberRequest:!1,orderNumberFailed:!1,order:t.payload.order});case me:return Object(T.a)(Object(T.a)({},jt),{},{orderNumberFailed:!0});case je:return Object(T.a)(Object(T.a)({},e),{},{order:null});default:return e}},ingredients:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se:return Object(T.a)(Object(T.a)({},e),{},{ingredientsFailed:!1,ingredientsRequest:!0});case oe:return Object(T.a)(Object(T.a)({},e),{},{ingredientsFailed:!1,ingredientsRequest:!1,ingredients:t.payload.ingredients});case le:return Object(T.a)(Object(T.a)({},ut),{},{ingredientsFailed:!0});case de:return Object(T.a)(Object(T.a)({},e),{},{selectedIngredient:t.payload.ingredient});case ie:return Object(T.a)(Object(T.a)({},e),{},{selectedIngredient:null});default:return e}},burgerConstructor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return Object(T.a)(Object(T.a)({},e),{},{selectedIngredients:[],selectedBun:null});case W:var n=t.payload.ingredient;return"bun"===n.type?Object(T.a)(Object(T.a)({},e),{},{selectedBun:n}):Object(T.a)(Object(T.a)({},e),{},{selectedIngredients:[].concat(Object(lt.a)(e.selectedIngredients),[n])});case Q:return Object(T.a)(Object(T.a)({},e),{},{selectedIngredients:e.selectedIngredients.filter((function(e,n){return n!==t.payload.deleteIndex}))});case $:var c=t.payload,r=c.dragIndex,a=c.itemIndex,i=Object(lt.a)(e.selectedIngredients),s=i[r];return i[r]=i[a],i[a]=s,Object(T.a)(Object(T.a)({},e),{},{selectedIngredients:i});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ge:var n,c,r;return Object(T.a)(Object(T.a)({},e),{},{email:null!==(n=t.payload.email)&&void 0!==n?n:e.email,password:null!==(c=t.payload.password)&&void 0!==c?c:e.password,name:null!==(r=t.payload.name)&&void 0!==r?r:e.name});case ve:var a,i;return Object(T.a)(Object(T.a)({},e),{},{email:null!==(a=t.payload.email)&&void 0!==a?a:e.email,password:null!==(i=t.payload.password)&&void 0!==i?i:e.password});case he:return Object(T.a)(Object(T.a)({},e),{},{loggedIn:!0});case ye:return Object(T.a)(Object(T.a)({},e),{},{email:"",password:"",loggedIn:!1});case Ne:var s,o;return Object(T.a)(Object(T.a)({},e),{},{email:null!==(s=t.payload.email)&&void 0!==s?s:e.email,name:null!==(o=t.payload.name)&&void 0!==o?o:e.name});case ke:var l,d,u;return Object(T.a)(Object(T.a)({},e),{},{email:null!==(l=t.payload.email)&&void 0!==l?l:e.email,name:null!==(d=t.payload.name)&&void 0!==d?d:e.name,password:null!==(u=t.payload.password)&&void 0!==u?u:e.password});default:return e}},resetPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Pe:return Object(T.a)(Object(T.a)({},e),{},{email:t.payload.email});case Ue:return Object(T.a)(Object(T.a)({},e),{},{email:""});default:return e}}}),Ot=it(Object(ot.a)(st.a)),ft=Object(ot.d)(pt,Ot);i.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(C.a,{store:ft,children:Object(O.jsx)(rt.a,{backend:at.a,children:Object(O.jsx)(nt,{})})})}),document.getElementById("root")),ct()},23:function(e,t,n){e.exports={header:"header_header__2PCJV",nav:"header_nav__Yn7D9",navLink:"header_navLink__2qrHS",active_link:"header_active_link__1bgGB"}},25:function(e,t,n){e.exports={main:"profile_main__242OX",nav:"profile_nav__B_z69",active_link:"profile_active_link__MU5sa",navlink:"profile_navlink__1MZdx",logout:"profile_logout__3chQM",form:"profile_form__3ORnl"}},29:function(e,t,n){e.exports={constructor_section:"burger-constructor_constructor_section__3FdfH",constructor_list:"burger-constructor_constructor_list__2mBcy",constructor_items:"burger-constructor_constructor_items__2t2yl",order:"burger-constructor_order__SsnH4",scrollbox:"burger-constructor_scrollbox__3Z23P",scrollbar:"burger-constructor_scrollbar__-c9tN"}},39:function(e,t,n){e.exports={ingredients_section:"burger-ingredients_ingredients_section__l8mYY",ingredients_tabs:"burger-ingredients_ingredients_tabs__1zFeW",scrollbox:"burger-ingredients_scrollbox__2apTV",scrollbar:"burger-ingredients_scrollbar__2rVSV"}},40:function(e,t,n){e.exports={details:"ingredient-details_details__28kCX",content:"ingredient-details_content__1TZrm",image:"ingredient-details_image__3EkJL",list:"ingredient-details_list__3jN0U"}},50:function(e,t,n){e.exports={details:"order-details_details__2Chva",checkmark:"order-details_checkmark__3mkme",digits:"order-details_digits__33cjV"}},51:function(e,t,n){e.exports={modal:"modal_modal__-GJUR",header:"modal_header__2r55q",close:"modal_close__VSo9S"}},52:function(e,t,n){e.exports={ingredients_list:"ingredients-section_ingredients_list__1mz_n",ingredients_list_title:"ingredients-section_ingredients_list_title__2YZ9h",cards_box:"ingredients-section_cards_box__1j8gA"}},53:function(e,t,n){e.exports={constructor_item:"burger-constructor-item_constructor_item__N6dYK",ingredient_button:"burger-constructor-item_ingredient_button__1wYRz",drag_button:"burger-constructor-item_drag_button__2w73P"}},73:function(e,t,n){e.exports={ingredient_card:"ingredient-card_ingredient_card__1DunG",price:"ingredient-card_price__zyJet"}},9:function(e,t,n){e.exports={form__block:"pages_form__block__2hBXl",form:"pages_form__8Bp6z",login:"pages_login__2A9qH"}},99:function(e,t,n){e.exports={page:"app_page__1NvGu"}}},[[199,1,2]]]);
//# sourceMappingURL=main.f703533d.chunk.js.map