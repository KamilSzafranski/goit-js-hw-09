!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r);var u=r("iU1Pc"),a=document.querySelector("input[name=amount]"),c=document.querySelector("input[name=step]"),l=document.querySelector("input[name=delay]"),d=document.querySelector("form.form"),f=function(e,n){var o=Math.random()>.3;return new Promise((function(t,r){setTimeout((function(){o?t({position:e,delay:n}):r({position:e,delay:n})}),n)}))};d.addEventListener("submit",(function(n){n.preventDefault();for(var o=Number(a.value),t=Number(c.value),r=Number(l.value),d=(i,0);d<o;d++)f(d+1,r).then((function(n){var o=n.position,t=n.delay;e(u).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;e(u).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))})),r+=t}))}();
//# sourceMappingURL=03-promises.e0a1c266.js.map