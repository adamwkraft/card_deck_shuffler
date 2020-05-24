(this.webpackJsonpcard_deck_shuffler=this.webpackJsonpcard_deck_shuffler||[]).push([[0],{12:function(e,t,a){e.exports=a(28)},17:function(e,t,a){},18:function(e,t,a){},27:function(e,t){},28:function(e,t,a){"use strict";a.r(t);var n=a(6),l=a(7),r=a(4),o=a(11),c=a(10),s=a(0),i=a.n(s),u=a(8),h=a.n(u);a(17),a(9),a(18);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var l;Object(n.a)(this,a),(l=t.call(this,e)).handleOptionChange=function(e){l.setState({selectedOption:e.target.value})};for(var o=[],c=["Clubs","Diamonds","Hearts","Spades"],s=["2","3","4","5","6","7","8","9","10","Jack","Queen","King","Ace"],i=1,u=0;u<c.length;u++)for(var h=0;h<s.length;h++)console.log({ordinal_num:i,suit:c[u],value:s[h]}),o.push({ordinal_num:i,suit:c[u],value:s[h]}),i+=1;console.log("ADAM ORIG DECK "+o);var d=o.slice();return d=p(d,777),l.state={seed:777,orig_deck:o,deck:d,selectedOption:"option1"},l.handleSeedChange=l.handleSeedChange.bind(Object(r.a)(l)),l.handleShuffle=l.handleShuffle.bind(Object(r.a)(l)),l}return Object(l.a)(a,[{key:"handleSeedChange",value:function(e){this.setState({seed:e.target.value})}},{key:"handleShuffle",value:function(e){var t=this.state.orig_deck.slice(),a=p(this.state.orig_deck,this.state.seed);this.setState({orig_deck:t,deck:a})}},{key:"render",value:function(){var e;"option1"===this.state.selectedOption?e=1:"option2"===this.state.selectedOption?e=2:"option3"===this.state.selectedOption?e=3:"option4"===this.state.selectedOption&&(e=4);var t=function(e,t){var a;1===t?a=e.slice(0,13):2===t?a=e.slice(13,26):3===t?a=e.slice(26,39):4===t&&(a=e.slice(39,52));for(var n=[],l=[],r=[],o=[],c=0;c<a.length;c++)"Clubs"===a[c].suit?n.push(a[c]):"Diamonds"===a[c].suit?l.push(a[c]):"Hearts"===a[c].suit?r.push(a[c]):"Spades"===a[c].suit?o.push(a[c]):console.log("Error, bad suit");n=m(n,"ordinal_num"),l=m(l,"ordinal_num"),r=m(r,"ordinal_num"),o=m(o,"ordinal_num");var s="";for(c=0;c<n.length;c++)s+=" "+n[c].value;var i="";for(c=0;c<l.length;c++)i+=" "+l[c].value;var u="";for(c=0;c<r.length;c++)u+=" "+r[c].value;var h="";for(c=0;c<o.length;c++)h+=" "+o[c].value;return[s,i,u,h]}(this.state.deck,e);return i.a.createElement("div",{className:"deck_shuffler"},i.a.createElement("h1",null,"Card Deck Shuffler"),i.a.createElement("p",null,"Seed: "),i.a.createElement("input",{type:"text",id:"seed_input",value:this.state.seed,onChange:this.handleSeedChange}),i.a.createElement("form",null,i.a.createElement("p",null,"Player Number: "),i.a.createElement("div",{className:"form-check"},i.a.createElement("label",null,i.a.createElement("input",{type:"radio",name:"react-tips",value:"option1",checked:"option1"===this.state.selectedOption,onChange:this.handleOptionChange,className:"form-check-input"}),"Player 1")),i.a.createElement("div",{className:"form-check"},i.a.createElement("label",null,i.a.createElement("input",{type:"radio",name:"react-tips",value:"option2",checked:"option2"===this.state.selectedOption,onChange:this.handleOptionChange,className:"form-check-input"}),"Player 2")),i.a.createElement("div",{className:"form-check"},i.a.createElement("label",null,i.a.createElement("input",{type:"radio",name:"react-tips",value:"option3",checked:"option3"===this.state.selectedOption,onChange:this.handleOptionChange,className:"form-check-input"}),"Player 3")),i.a.createElement("div",{className:"form-check"},i.a.createElement("label",null,i.a.createElement("input",{type:"radio",name:"react-tips",value:"option4",checked:"option4"===this.state.selectedOption,onChange:this.handleOptionChange,className:"form-check-input"}),"Player 4"))),i.a.createElement("br",null),i.a.createElement("button",{onClick:this.handleShuffle},"Shuffle"),i.a.createElement("br",null),i.a.createElement("p",null,"Deck results Player ",e,":"),i.a.createElement("p",null,i.a.createElement("b",null,"\u2663")," ",i.a.createElement("b",null,"Clubs:")),i.a.createElement("p",null,t[0]),i.a.createElement("p",null,i.a.createElement("b",{style:{color:"red"}},"\u2666")," ",i.a.createElement("b",null,"Diamonds:")),i.a.createElement("p",null,t[1]),i.a.createElement("p",null,i.a.createElement("b",{style:{color:"red"}},"\u2665")," ",i.a.createElement("b",null,"Hearts:")),i.a.createElement("p",null,t[2]),i.a.createElement("p",null,i.a.createElement("b",null,"\u2660")," ",i.a.createElement("b",null,"Spades:")),i.a.createElement("p",null,t[3]))}}]),a}(i.a.Component);function m(e,t){return e.sort((function(e,a){var n=e[t],l=a[t];return n<l?-1:n>l?1:0}))}function p(e,t){console.log("ADAM DECK BEFORE ",e);var n=a(19)(t);console.log(n());for(var l,r,o=e.length;0!==o;)r=Math.floor(n()*o),l=e[o-=1],e[o]=e[r],e[r]=l;return console.log("ADAM DECK AFTER",e),e}h.a.render(i.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"}},[[12,1,2]]]);
//# sourceMappingURL=main.bbe1e065.chunk.js.map