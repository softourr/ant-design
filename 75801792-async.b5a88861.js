(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["75801792"],{75801792:function(e,i,n){"use strict";n.d(i,"__esModule",{value:!0}),n.d(i,"default",{enumerable:!0,get:function(){return s;}});var t=n("777fffbe"),d=n("f19d2b93"),a=t._(n("5b220c3d")),r=n("a9d1a279"),l=n("3835a2b7"),o=t._(n("600aabe0")),c=n("9c86e52a");let p=(0,l.createStyles)(({token:e,css:i})=>{let{antCls:n}=e;return{anchorToc:i`
      scrollbar-width: thin;
      scrollbar-color: unset;
      ${n}-anchor {
        ${n}-anchor-link-title {
          font-size: ${e.fontSizeSM}px;
        }
      }
    `,tocWrapper:i`
      position: fixed;
      top: ${e.headerHeight+e.contentMarginTop-8}px;
      inset-inline-end: 0;
      width: 160px;
      padding: ${e.paddingXS}px;
      border-radius: ${e.borderRadius}px;
      box-sizing: border-box;
      margin-inline-end: calc(16px - 100vw + 100%);
      z-index: 10;
      .toc-debug {
        color: ${e.purple6};
        &:hover {
          color: ${e.purple5};
        }
      }
      > div {
        box-sizing: border-box;
        width: 100%;
        max-height: calc(100vh - ${e.headerHeight+e.contentMarginTop+24}px) !important;
        margin: auto;
        overflow: auto;
        padding: ${e.paddingXXS}px;
        backdrop-filter: blur(8px);
      }

      @media only screen and (max-width: ${e.screenLG}px) {
        display: none;
      }
    `,articleWrapper:i`
      padding: 0 170px 32px 64px;

      &.rtl {
        padding: 0 64px 144px 170px;
      }

      @media only screen and (max-width: ${e.screenLG}px) {
        &,
        &.rtl {
          padding: 0 ${2*e.paddingLG}px;
        }
      }
    `};});var s=({showDebug:e,debugDemos:i=[]})=>{let{styles:n}=p(),t=(0,l.useTheme)(),s=(0,c.useRouteMeta)(),u=(0,c.useTabMeta)(),h=a.default.useMemo(()=>((null==u?void 0:u.toc)||s.toc).reduce((e,i)=>{if(2===i.depth)e.push({...i});else if(3===i.depth){let n=e[e.length-1];n&&(n.children=n.children||[],n.children.push({...i}));}return e;},[]),[null==u?void 0:u.toc,s.toc]);return s.frontmatter.toc?(0,d.jsx)("section",{className:n.tocWrapper,children:(0,d.jsx)(r.Anchor,{affix:!1,className:n.anchorToc,targetOffset:t.anchorTop,showInkInFixed:!0,items:h.map(n=>{var t;return{href:`#${n.id}`,title:n.title,key:n.id,children:null===(t=n.children)||void 0===t?void 0:t.filter(n=>e||!i.includes(n.id)).map(e=>({key:e.id,href:`#${e.id}`,title:(0,d.jsx)("span",{className:(0,o.default)({"toc-debug":i.includes(e.id)}),children:null==e?void 0:e.title})}))};})})}):null;};}}]);
//# sourceMappingURL=75801792-async.b5a88861.js.map