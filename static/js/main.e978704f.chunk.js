(this.webpackJsonpnearby_food_joints=this.webpackJsonpnearby_food_joints||[]).push([[0],{24:function(e,t,a){},25:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},33:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(8),s=a.n(c),r=(a(24),a(25),a(6)),i=(a(29),a(30),a(1)),o=function(e){e.key;var t=e.name,a=e.image,n=e.locality,c=e.address,s=e.cuisines,r=e.cost,o=e.rating,l=e.votes,u=e.rating_color;return Object(i.jsxs)("div",{className:"restaurant-tile",children:[Object(i.jsx)("img",{alt:"",src:a,className:"rest-img"}),Object(i.jsxs)("div",{className:"rest-rating",children:[Object(i.jsx)("p",{style:{backgroundColor:"".concat(u)},children:o}),Object(i.jsxs)("div",{children:[l," votes"]})]}),Object(i.jsxs)("div",{className:"rest-details",children:[Object(i.jsx)("h2",{className:"rest-name",children:t}),Object(i.jsx)("div",{className:"rest-loc",children:n}),Object(i.jsx)("div",{className:"rest-add",children:c}),Object(i.jsx)("hr",{}),Object(i.jsxs)("div",{className:"rest-cusines",children:[Object(i.jsx)("strong",{children:"CUISINES:"})," ",s]}),Object(i.jsxs)("div",{className:"rest-cost",children:[Object(i.jsx)("strong",{children:"COST FOR TWO:"})," Rs.",r]})]})]})},l=a(14),u=a.n(l),j=a(18),d=a(11),b=(a(33),function(){var e=Object(n.useState)(),t=Object(d.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),o=Object(d.a)(s,2),l=o[0],b=o[1],h=Object(n.useState)([0,""]),O=Object(d.a)(h,2),v=O[0],x=O[1],f=Object(r.b)();Object(n.useEffect)((function(){g()}),[v]);var g=function(){var e=Object(j.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0===v[0]&&""===v[1]){e.next=8;break}return e.next=3,fetch("https://developers.zomato.com/api/v2.1/search?entity_id=".concat(v[0],"&entity_type=city&q=").concat(v[1],"&count=10"),{method:"GET",headers:{Accept:"application/json","user-key":"2ad63f94902019632381f2df301a60cc"}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,f({type:"SAVE_RESTAURANT",payload:a.restaurants});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.jsx)("div",{children:Object(i.jsx)("form",{className:"searchBar",onSubmit:function(e){e.preventDefault(),x([a,l])},children:Object(i.jsxs)("div",{children:[Object(i.jsxs)("select",{id:"select_id",className:"city form-control",onChange:function(e){c(e.target.value)},children:[Object(i.jsx)("option",{value:"0",hidden:!0,children:"Select City"}),Object(i.jsx)("option",{value:"1",children:"Delhi"}),Object(i.jsx)("option",{value:"3",children:"Mumbai"}),Object(i.jsx)("option",{value:"4",children:"Bengaluru"}),Object(i.jsx)("option",{value:"5",children:"Pune"}),Object(i.jsx)("option",{value:"6",children:"Hyderabad"})]}),Object(i.jsx)("input",{id:"getText",type:"text",className:"restaurant",placeholder:"Search for Restaurant",onChange:function(e){b(e.target.value)}}),Object(i.jsx)("button",{id:"getMessage",className:"search-btn",children:"Search"})]})})})}),h=function(){var e=Object(r.c)((function(e){return e.saveTheRestaurant}));return e.initialState&&(e=e.initialState),Object(i.jsxs)("div",{className:"homepage",children:[Object(i.jsxs)("div",{className:"foodJoint","data-testid":"todo-1",children:[Object(i.jsx)("h1",{children:"Best Restaurant Near You"}),Object(i.jsx)(b,{})]}),e.map((function(e){return Object(i.jsx)(o,{name:e.restaurant.name,image:e.restaurant.thumb,locality:e.restaurant.location.locality,address:e.restaurant.location.address,cuisines:e.restaurant.cuisines,cost:e.restaurant.average_cost_for_two,rating:e.restaurant.user_rating.aggregate_rating,votes:e.restaurant.user_rating.votes,rating_color:e.restaurant.user_rating.rating_obj.bg_color.type},e.restaurant.id)}))]})};var O=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(h,{})})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,37)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))},x=a(10),f=a(17),g=[],p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_RESTAURANT":return console.log(t.payload),Object(f.a)(Object(f.a)({},e),{},{initialState:t.payload});default:return e}},m=Object(x.a)({saveTheRestaurant:p}),y=Object(x.b)(m),N=a(19);s.a.render(Object(i.jsx)(r.a,{store:y,children:Object(i.jsx)(N.a,{children:Object(i.jsx)(O,{})})}),document.getElementById("root")),v()}},[[36,1,2]]]);
//# sourceMappingURL=main.e978704f.chunk.js.map