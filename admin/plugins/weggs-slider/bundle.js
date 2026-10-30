const t = `# Weggs Slider

Carousel slider pour les sections de la home

An AgentCMS plugin. Install the ZIP from the admin: **Plugins → Install plugin**.

## Develop

\`\`\`bash
npm install
npm run build     # type-check, build dist/bundle.js, pack weggs-slider.zip
npm run check     # validate the package + render a demo site with it
npm run preview   # render the demo site and take screenshots
npm run serve     # serve the demo site on http://localhost:4321/
\`\`\`

Bump \`version\` in \`manifest.json\`, \`src/manifest.tsx\` and \`package.json\` for each release: installing a newer ZIP upgrades the plugin in place.
`, n = "weggs-slider", i = `
.weggs-slider{position:relative;padding:0 2.5rem}
.weggs-slider__track{overflow:hidden}
.weggs-slider__track .weggs-pets-grid{flex-wrap:nowrap;transition:transform .4s cubic-bezier(.25,.1,.25,1);will-change:transform}
.weggs-slider__track .weggs-pets-card{flex:0 0 calc((100% - 2 * 1.75rem) / 3);min-width:0}
.weggs-slider__btn{display:flex;position:absolute;top:50%;transform:translateY(-50%);align-items:center;justify-content:center;width:2.25rem;height:2.25rem;border-radius:50%;background:#fff;border:2px solid var(--wp-border,#e2e8f0);box-shadow:0 2px 8px rgba(13,27,62,.1);cursor:pointer;color:var(--wp-navy,#0d1b3e);transition:all .15s;z-index:2}
.weggs-slider__btn:hover{background:var(--wp-navy,#0d1b3e);color:#fff;border-color:var(--wp-navy,#0d1b3e)}
.weggs-slider__btn:disabled{opacity:.3;cursor:default;pointer-events:none}
.weggs-slider__prev{left:0}
.weggs-slider__next{right:0}
@media(max-width:900px){.weggs-slider__track .weggs-pets-card{flex:0 0 calc((100% - 1.75rem) / 2)}}
@media(max-width:600px){.weggs-slider{padding:0 2rem}.weggs-slider__track .weggs-pets-card{flex:0 0 85%}}
`, s = `
(function(){
  "use strict";
  function init(root){
    var track=root.querySelector(".weggs-slider__track");
    var grid=track&&track.querySelector(".weggs-pets-grid");
    var prev=root.querySelector(".weggs-slider__prev");
    var next=root.querySelector(".weggs-slider__next");
    if(!track||!grid||!prev||!next)return;
    var idx=0;
    function cw(){
      var card=grid.querySelector(".weggs-pets-card");
      if(!card)return 0;
      var gap=parseFloat(getComputedStyle(grid).columnGap)||28;
      return card.getBoundingClientRect().width+gap;
    }
    function vis(){var w=cw();return w?Math.max(1,Math.floor(track.offsetWidth/w)):1;}
    function total(){return grid.querySelectorAll(".weggs-pets-card").length;}
    function maxIdx(){return Math.max(0,total()-vis());}
    function upd(){
      idx=Math.max(0,Math.min(idx,maxIdx()));
      grid.style.transform="translateX(-"+(idx*cw())+"px)";
      prev.disabled=idx===0;
      next.disabled=idx>=maxIdx();
    }
    prev.addEventListener("click",function(){idx=Math.max(0,idx-vis());upd();});
    next.addEventListener("click",function(){idx=Math.min(maxIdx(),idx+vis());upd();});
    window.addEventListener("resize",function(){idx=0;upd();});
    upd();
  }
  document.querySelectorAll("[data-weggs-slider]").forEach(init);
})();
`, a = {
  id: n,
  name: "Weggs Slider",
  version: "1.0.0",
  description: "Carousel slider pour les sections de la home",
  author: "Weggs",
  readme: t,
  register(r) {
    r.addFilter("page.head.extra", (e) => `${e}<style data-weggs-slider-css>${i}</style>
`), r.addFilter("page.body.end", (e) => `${e}<script data-weggs-slider-js>${s}<\/script>
`);
  }
};
export {
  a as default
};
