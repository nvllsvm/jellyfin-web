define(["require", "css!./loading-legacy"], function(require) {
    "use strict";
    var loadingElem;
    return {
        show: function() {
            var elem = loadingElem;
            elem || (elem = document.createElement("img"), elem.src = require.toUrl(".").split("?")[0] + "/loader2.gif", loadingElem = elem, elem.classList.add("loading-spinner"), document.body.appendChild(elem)), elem.classList.remove("hide")
        },
        hide: function() {
            var elem = loadingElem;
            elem && elem.classList.add("hide")
        }
    }
});