var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,a=f||u||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,d=function(){return a.Date.now()};function v(e,t,n){var o,r,i,f,u,a,c=0,v=!1,b=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=o,i=r;return o=r=void 0,c=t,f=e.apply(i,n)}function S(e){return c=e,u=setTimeout(O,t),v?g(e):f}function j(e){var n=e-a;return void 0===a||n>=t||n<0||b&&e-c>=i}function O(){var e=d();if(j(e))return h(e);u=setTimeout(O,function(e){var n=t-(e-a);return b?s(n,i-(e-c)):n}(e))}function h(e){return u=void 0,y&&o?g(e):(o=r=void 0,f)}function T(){var e=d(),n=j(e);if(o=arguments,r=this,a=e,n){if(void 0===u)return S(a);if(b)return u=setTimeout(O,t),g(a)}return void 0===u&&(u=setTimeout(O,t)),f}return t=p(t)||0,m(n)&&(v=!!n.leading,i=(b="maxWait"in n)?l(p(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=a=r=u=void 0},T.flush=function(){return void 0===u?f:h(d())},T}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(m(e)){var f="function"==typeof e.valueOf?e.valueOf():e;e=m(f)?f+"":f}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var u=o.test(e);return u||r.test(e)?i(e.slice(2),u?2:8):n.test(e)?NaN:+e}const b=document.querySelector(".feedback-form"),y=document.querySelector(".feedback-form input"),g=document.querySelector(".feedback-form textarea");b.addEventListener("submit",(function(e){e.preventDefault()})),y.addEventListener("input",(function(e){localStorage.setItem("feedback-form-state",JSON.stringify({email:e.target.value})),console.log(JSON.parse(localStorage.getItem("feedback-form-state")))})),g.addEventListener("input",(function(e){localStorage.setItem("feedback-form-state",JSON.stringify({textarea:e.target.value}))}));
//# sourceMappingURL=03-feedback.515160b4.js.map
