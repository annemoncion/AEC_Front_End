(this["webpackJsonpexercice-mock-api"]=this["webpackJsonpexercice-mock-api"]||[]).push([[0],{29:function(e,t,a){e.exports=a.p+"static/media/logo_annemoncion_illustration.2ef166be.svg"},32:function(e,t,a){e.exports=a(49)},37:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),o=a.n(l),c=(a(37),a(52)),i=a(53),u=a(26),m=a(8),s=a.n(m),p=a(13),d=a(11),f=a(12),h=a(24);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var v=r.a.createElement("g",{id:"fileb",transform:"translate(-2.3127 -1.3606)",strokeDashoffset:32.991,strokeLinecap:"round",strokeWidth:1.8898},r.a.createElement("path",{id:"filec",d:"m2.3127 96.682 47.673-95.321 47.673 95.321z"}),r.a.createElement("path",{id:"filed",d:"m2.3127 221.68 47.673-95.321 47.673 95.321z"}),r.a.createElement("path",{id:"filee",d:"m2.3127 346.68 47.673-95.321 47.673 95.321z"}),r.a.createElement("path",{id:"filef",d:"m2.3127 471.68 47.673-95.321 47.673 95.321z"}),r.a.createElement("path",{id:"fileg",d:"m2.3127 596.68 47.673-95.321 47.673 95.321z"}),r.a.createElement("path",{id:"fileh",d:"m2.3127 721.68 47.673-95.321 47.673 95.321z"}),r.a.createElement("path",{id:"filei",d:"m2.3127 846.68 47.673-95.321 47.673 95.321z"}),r.a.createElement("path",{id:"filej",d:"m2.3128 971.68 47.673-95.321 47.673 95.321z"}),r.a.createElement("path",{id:"filek",d:"m2.3127 1096.7 47.673-95.321 47.673 95.321z"})),g=function(e){var t=e.svgRef,a=e.title,n=b(e,["svgRef","title"]);return r.a.createElement("svg",E({id:"trianglesEnFile",viewBox:"0 0 95.347 1095.3",ref:t},n),a?r.a.createElement("title",null,a):null,v)},y=r.a.forwardRef((function(e,t){return r.a.createElement(g,E({svgRef:t},e))}));a.p;function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var x=function(e){var t=e.svgRef,a=(e.title,O(e,["svgRef","title"]));return r.a.createElement("svg",j({id:"vide",viewBox:"0 0 95.347 1095.3",ref:t},a))},w=r.a.forwardRef((function(e,t){return r.a.createElement(x,j({svgRef:t},e))}));a.p;var k=function(e){Object(h.a)({targets:"path",translateY:-125,duration:1200,loop:!0,easing:"linear"});var t={trianglesEnFile:y,vide:w}[e.toutLobjet.animation.nom];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"itemGrille "+e.toutLobjet.couleurBg},r.a.createElement("div",{className:"insideItem"},r.a.createElement("img",{src:e.image,alt:e.toutLobjet.nomCommun}),r.a.createElement(f.b,{to:"plante/"+e.nom+"?id="+e.idPerso}),r.a.createElement(t,null)),r.a.createElement("h3",{className:"titre"},e.toutLobjet.nomCommun)))};var I=function(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),l=a[0],o=a[1],c=Object(n.useState)(!1),i=Object(d.a)(c,2),u=i[0],m=i[1],f=Object(n.useState)(!1),h=Object(d.a)(f,2),E=h[0],b=h[1];function v(){return(v=Object(p.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:3001/plantes");case 3:return t=e.sent,e.next=6,t.json();case 6:if(a=e.sent,o(a),m(!0),b(!0),t.ok){e.next=12;break}throw Error(t.statusText);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){v.apply(this,arguments)}()}),[u]),Object(n.useEffect)((function(){var e=document.createElement("script");return e.src="/js/masonry.pkgd.js",e.async=!0,document.body.appendChild(e),function(){document.body.removeChild(e)}}),[E]),r.a.createElement("div",{className:"grillePlantes","data-masonry":'{ "itemSelector": ".itemGrille", "columnWidth": ".itemGrille", "percentPosition": true }'},Object.keys(l).map((function(e){return r.a.createElement(k,{key:e,idPerso:parseInt(e)+1,image:l[e].image,toutLobjet:l[e]})})))};var S=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{fluid:!0},r.a.createElement(i.a,null,r.a.createElement(u.a,{md:{span:6,offset:3},className:"mb-6"},r.a.createElement(I,null)))))},C=a(55),N=a(54),B=a(56),L=a(15);var A=function(e){var t=Object(n.useState)(1),a=Object(d.a)(t,2),l=a[0],o=a[1],m=Object(n.useState)({name:"",picture:"",habitat:["",""]}),f=Object(d.a)(m,2),h=f[0],E=f[1],b=Object(n.useState)(""),v=Object(d.a)(b,2),g=v[0],y=v[1],j=Object(n.useState)(!1),O=Object(d.a)(j,2),x=O[0],w=O[1];function k(){return(k=Object(p.a)(s.a.mark((function t(){var a,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o(e.location.search.substring(4,e.location.search.length)),console.log("l'\xe9tat est: "+l),t.next=5,fetch("http://localhost:3001/animals/"+l);case 5:return a=t.sent,t.next=8,a.json();case 8:if(n=t.sent,E(n),y(h.picture),w(!0),a.ok){t.next=14;break}throw Error(a.statusText);case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),console.log(t.t0);case 19:case"end":return t.stop()}}),t,null,[[0,16]])})))).apply(this,arguments)}function I(){return(I=Object(p.a)(s.a.mark((function t(a,n,r,o){var c,i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:3001/animals/"+l,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:l,name:a,picture:n,habitat:[{name:r},{name:o}]})});case 3:if(!(c=t.sent).ok){t.next=11;break}return t.next=7,c.json();case 7:return i=t.sent,e.history.push("/"),L.b.warn("Modification de l'animal "+a),t.abrupt("return",i);case 11:throw new Error("Request failed!");case 14:t.prev=14,t.t0=t.catch(0),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})))).apply(this,arguments)}function S(){return(S=Object(p.a)(s.a.mark((function t(a){var n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:3001/animals/"+l,{method:"delete"});case 3:if(!(n=t.sent).ok){t.next=12;break}return t.next=7,n.json();case 7:return r=t.sent,console.log("SUPPRESSION!"),e.history.push("/"),L.b.error("Supression de l'animal "+a),t.abrupt("return",r);case 12:throw new Error("Request failed!");case 15:t.prev=15,t.t0=t.catch(0),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){k.apply(this,arguments)}()}),[x]),r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement(C.a,null,r.a.createElement(C.a.Group,{controlId:"nomAnimal"},r.a.createElement(C.a.Label,null,"Nom de l'animal"),r.a.createElement(C.a.Control,{type:"text",defaultValue:h.name})),r.a.createElement(C.a.Group,{controlId:"photoAnimal"},r.a.createElement(C.a.Label,null,"URL d'une photo de l'animal"),r.a.createElement(C.a.Control,{type:"text",defaultValue:h.picture,onBlur:function(e){var t=document.getElementById("photoAnimal").value;y(t)}})),""!==g&&r.a.createElement(N.a,{src:h.picture,rounded:!0,width:"125"}),r.a.createElement(C.a.Group,{controlId:"habitat1"},r.a.createElement(C.a.Label,null,"Nom de l'habitat principal"),r.a.createElement(C.a.Control,{type:"text",defaultValue:h.habitat[0].name})),r.a.createElement(C.a.Group,{controlId:"habitat2"},r.a.createElement(C.a.Label,null,"Nom de l'habitat secondaire"),r.a.createElement(C.a.Control,{type:"text",defaultValue:h.habitat[1].name})),r.a.createElement(B.a,{variant:"primary",type:"submit",onClick:function(e){e.preventDefault(),function(e,t,a,n){I.apply(this,arguments)}(document.getElementById("nomAnimal").value,document.getElementById("photoAnimal").value,document.getElementById("habitat1").value,document.getElementById("habitat2").value)}},"Enregistrer"),r.a.createElement(B.a,{variant:"danger",type:"submit",onClick:function(e){e.preventDefault(),function(e){S.apply(this,arguments)}(document.getElementById("nomAnimal").value)}},"Supprimer"))))))};var R=function(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),l=a[0],o=a[1];function m(){return(m=Object(p.a)(s.a.mark((function t(a,n,r,l){var o,c,i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f();case 3:return o=t.sent,t.next=6,fetch("http://localhost:3001/animals/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:o,name:a,picture:n,habitat:[{name:r},{name:l}]})});case 6:if(!(c=t.sent).ok){t.next=14;break}return t.next=10,c.json();case 10:return i=t.sent,e.history.push("/"),L.b.success("Ajout de l'animal "+a),t.abrupt("return",i);case 14:throw new Error("Request failed!");case 17:t.prev=17,t.t0=t.catch(0),console.log(t.t0);case 20:case"end":return t.stop()}}),t,null,[[0,17]])})))).apply(this,arguments)}function f(){return h.apply(this,arguments)}function h(){return(h=Object(p.a)(s.a.mark((function e(){var t,a,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=0,e.next=4,fetch("http://localhost:3001/animals");case 4:return a=e.sent,e.next=7,a.json();case 7:for(n=e.sent,r=0;r<n.length;r++)n[r].id>t&&(t=n[r].id);if(a.ok){e.next=11;break}throw Error(a.statusText);case 11:return e.abrupt("return",t+1);case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement(C.a,null,r.a.createElement(C.a.Group,{controlId:"nomAnimal"},r.a.createElement(C.a.Label,null,"Nom de l'animal"),r.a.createElement(C.a.Control,{type:"text",placeholder:"Entrer le nom de l'animal"})),r.a.createElement(C.a.Group,{controlId:"photoAnimal"},r.a.createElement(C.a.Label,null,"URL d'une photo de l'animal"),r.a.createElement(C.a.Control,{type:"text",placeholder:"Entrer une URL valide",onBlur:function(e){var t=document.getElementById("photoAnimal").value;o(t)}})),""!==l&&r.a.createElement(N.a,{src:l,rounded:!0,width:"125"}),r.a.createElement(C.a.Group,{controlId:"habitat1"},r.a.createElement(C.a.Label,null,"Nom de l'habitat principal"),r.a.createElement(C.a.Control,{type:"text",placeholder:"Entrer le nom de l'habitat principal"})),r.a.createElement(C.a.Group,{controlId:"habitat2"},r.a.createElement(C.a.Label,null,"Nom de l'habitat secondaire"),r.a.createElement(C.a.Control,{type:"text",placeholder:"Entrer le nom de l'habitat secondaire"})),r.a.createElement(B.a,{variant:"primary",type:"submit",onClick:function(e){e.preventDefault(),function(e,t,a,n){m.apply(this,arguments)}(document.getElementById("nomAnimal").value,document.getElementById("photoAnimal").value,document.getElementById("habitat1").value,document.getElementById("habitat2").value)}},"Enregistrer"))))))};var P=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{history:e.history}))},F=a(27),G=a(28),z=a(31),T=a(30),U=a(29),W=a.n(U),D=function(e){Object(z.a)(a,e);var t=Object(T.a)(a);function a(e){return Object(F.a)(this,a),t.call(this,e)}return Object(G.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:"header"},r.a.createElement("img",{src:W.a,alt:"Logo Anne Moncion Illustration"}))}}]),a}(r.a.Component),J=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.b,{to:"/ajouterAnimal",className:"btn btn-primary mt-5"},"Ajouter un animal"))},V=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.b,{to:"/",className:"btn btn-primary mt-5"},"Retour \xe0 la liste des animaux"))},q=function(){return r.a.createElement("div",{className:"pageNotFound"},r.a.createElement("p",null,"Cette page est introuvable (ajouter une image cute 404)"))},M=a(5);a(45),a(46),a(47);var _=function(){var e=Object(M.f)();return console.log(e.pathname),r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{autoClose:3e3,hideProgressBar:!0}),r.a.createElement(D,null),r.a.createElement(M.c,null,r.a.createElement(M.a,{path:"/",exact:!0,component:S}),r.a.createElement(M.a,{path:"/ajouterAnimal",component:P}),r.a.createElement(M.a,{path:"/plante/:id",component:A}),r.a.createElement(M.a,{component:q})),"/ajouterAnimal"!==e.pathname&&!e.pathname.startsWith("/animal")&&r.a.createElement(J,null),"/"!==e.pathname&&r.a.createElement(V,null))};a(48),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f.a,null,r.a.createElement(_,{className:"app"}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.5c77943e.chunk.js.map