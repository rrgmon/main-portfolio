!function(){"use strict";const e=document.getElementsByClassName("card"),s=document.getElementsByClassName("card-pop"),t=window.matchMedia("(max-width: 900px)");t.addEventListener("onload change",void(t.matches?function(){for(let t=0;t<e.length;t++)e[t].addEventListener("mouseover",(()=>{s[t].classList.add("card-pop-display")})),e[t].addEventListener("mouseout",(()=>{s[t].classList.remove("card-pop-display")}))}():function(){for(let t=0;t<e.length;t++)e[t].removeEventListener("mouseover",(()=>{s[t].classList.add("card-pop-display")})),e[t].removeEventListener("mouseout",(()=>{s[t].classList.remove("card-pop-display")}))}()))}();
//# sourceMappingURL=index.7cbd8427.js.map
