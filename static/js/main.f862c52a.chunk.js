(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),o=n(2),i=n(3),l=n(5),r=n(4),s=n(1);n(12);function u(){return(new Date).toUTCString().slice(-12,-4)}var m=n(0),d=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={time:u()},e.timerId=0,e.handleInterval=function(){e.setState({time:u()})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){e.handleInterval(),console.info(e.state.time)}),1e3)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"Clock",children:[Object(m.jsx)("strong",{className:"Clock__name",children:this.props.clockName})," time is ",Object(m.jsx)("span",{className:"Clock__time",children:this.state.time})]})}}]),n}(s.Component);function h(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var v=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={clockName:"Clock-0",hasClock:!0},e.timerId=0,e.handleInterval=function(){e.setState({clockName:h()})},e.handleContextmenuClick=function(t){t.preventDefault(),e.setState({hasClock:!1})},e.handleLeftClick=function(t){t.preventDefault(),e.setState({hasClock:!0})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){return e.handleInterval()}),3300),document.addEventListener("contextmenu",this.handleContextmenuClick),document.addEventListener("click",this.handleLeftClick)}},{key:"componentDidUpdate",value:function(e,t){var n=this.state,c=n.hasClock,a=n.clockName;c&&t.clockName!==a&&console.debug("Renamed from ".concat(t.clockName," to ").concat(a))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId),document.removeEventListener("contextmenu",this.handleContextmenuClick),document.removeEventListener("click",this.handleLeftClick)}},{key:"render",value:function(){var e=this.state,t=e.hasClock,n=e.clockName;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React clock"}),t&&Object(m.jsx)(d,{clockName:n})]})}}]),n}(s.Component);a.a.render(Object(m.jsx)(v,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.f862c52a.chunk.js.map