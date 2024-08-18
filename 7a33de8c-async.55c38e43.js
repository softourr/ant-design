(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["7a33de8c"],{"02e664c9":function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return l;}});var o=a("777fffbe"),i=a("f19d2b93"),n=o._(a("5b220c3d")),r=o._(a("e22febe0")),l=e=>{let t=n.default.useCallback(()=>(0,i.jsxs)("svg",{width:20,height:20,viewBox:"0 0 24 24",fill:"currentColor",...e,children:[(0,i.jsx)("title",{children:"Theme icon"}),(0,i.jsx)("g",{fillRule:"evenodd",children:(0,i.jsx)("g",{fillRule:"nonzero",children:(0,i.jsx)("path",{d:"M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z"})})})]}),[e]);return(0,i.jsx)(r.default,{component:t,...e});};},"7a33de8c":function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return f;}});var o=a("777fffbe"),i=a("f19d2b93"),n=a("e22febe0"),r=a("a9d1a279"),l=a("3835a2b7"),d=a("ee09c92e"),s=a("9c86e52a"),c=o._(a("da01d958")),u=a("6afe185a"),m=o._(a("0a03b273")),h=o._(a("02e664c9")),f=e=>{let{value:t=["light"],onChange:a}=e,o=(0,l.useTheme)(),{pathname:f,search:p}=(0,s.useLocation)(),x=t.includes("happy-work"),g=t.includes("dark"),v=(0,c.default)();return(0,i.jsxs)(r.FloatButton.Group,{trigger:"click",icon:(0,i.jsx)(h.default,{}),"aria-label":"Theme Switcher",badge:{dot:!0},children:[(0,i.jsx)(m.default,{to:(0,u.getLocalizedPathname)("/theme-editor",(0,u.isZhCN)(f),p),style:{display:"block",marginBottom:o.margin},children:(0,i.jsx)(r.FloatButton,{icon:(0,i.jsx)(n.BgColorsOutlined,{}),tooltip:(0,i.jsx)(s.FormattedMessage,{id:"app.footer.theme"})})}),(0,i.jsx)(r.FloatButton,{icon:(0,i.jsx)(d.DarkTheme,{}),type:g?"primary":"default",onClick:e=>{v(e,g),g?a(t.filter(e=>"dark"!==e)):a([...t,"dark"]);},tooltip:(0,i.jsx)(s.FormattedMessage,{id:"app.theme.switch.dark"})}),(0,i.jsx)(r.FloatButton,{icon:(0,i.jsx)(d.CompactTheme,{}),type:t.includes("compact")?"primary":"default",onClick:()=>{t.includes("compact")?a(t.filter(e=>"compact"!==e)):a([...t,"compact"]);},tooltip:(0,i.jsx)(s.FormattedMessage,{id:"app.theme.switch.compact"})}),(0,i.jsx)(r.FloatButton,{badge:{dot:!0},icon:(0,i.jsx)(n.SmileOutlined,{}),type:x?"primary":"default",onClick:()=>{x?a(t.filter(e=>"happy-work"!==e)):a([...t,"happy-work"]);},tooltip:(0,i.jsx)(s.FormattedMessage,{id:x?"app.theme.switch.happy-work.off":"app.theme.switch.happy-work.on"})})]});};},da01d958:function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return d;}});var o=a("777fffbe"),i=a("5b220c3d"),n=a("d45d433f"),r=o._(a("f6b00492"));let l=`
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

.dark::view-transition-old(root) {
  z-index: 1;
}

.dark::view-transition-new(root) {
  z-index: 999;
}

::view-transition-old(root) {
  z-index: 999;
}

::view-transition-new(root) {
  z-index: 1;
}
`;var d=()=>{let{token:{colorBgElevated:e}}=r.default.useToken(),t=(0,i.useRef)({colorBgElevated:e}),a=(e,t)=>{(0,n.updateCSS)(`
    * {
    transition: none !important;
  }
    `,"disable-transition"),document.documentElement.animate({clipPath:t?[...e].reverse():e},{duration:500,easing:"ease-in",pseudoElement:t?"::view-transition-old(root)":"::view-transition-new(root)"}).addEventListener("finish",()=>{(0,n.removeCSS)("disable-transition");});};return(0,i.useEffect)(()=>{"function"==typeof document.startViewTransition&&(0,n.updateCSS)(l,"view-transition-style");},[]),(0,i.useEffect)(()=>{e!==t.current.colorBgElevated&&(t.current.colorBgElevated=e);},[e]),(o,i)=>{if(!(o&&"function"==typeof document.startViewTransition))return;let r=Date.now(),l=o.clientX,d=o.clientY,s=Math.hypot(Math.max(l,innerWidth-l),Math.max(d,innerHeight-d));(0,n.updateCSS)(`
    [data-prefers-color='dark'] {
      color-scheme: light !important;
    }

    [data-prefers-color='light'] {
      color-scheme: dark !important;
    }
    `,"color-scheme"),document.startViewTransition(async()=>{for(;e===t.current.colorBgElevated;)await new Promise(e=>{setTimeout(e,1e3/60);});let a=document.documentElement;a.classList.remove(i?"dark":"light"),a.classList.add(i?"light":"dark");}).ready.then(()=>{console.log(`Theme transition finished in ${Date.now()-r}ms`);let e=[`circle(0px at ${l}px ${d}px)`,`circle(${s}px at ${l}px ${d}px)`];(0,n.removeCSS)("color-scheme"),a(e,i);});};};}}]);
//# sourceMappingURL=7a33de8c-async.55c38e43.js.map