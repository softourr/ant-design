(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["5cb60d94"],{"0521ffe7":function(e,t,o){"use strict";o.d(t,"__esModule",{value:!0}),o.d(t,"default",{enumerable:!0,get:function(){return l;}});var a=o("777fffbe"),r=o("f19d2b93"),n=a._(o("5b220c3d")),d=a._(o("e22febe0"));let s=({color:e="currentColor"})=>(0,r.jsxs)("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:e,children:[(0,r.jsx)("title",{children:"External Link Icon"}),(0,r.jsx)("path",{d:"M853.333 469.333A42.667 42.667 0 0 0 810.667 512v256A42.667 42.667 0 0 1 768 810.667H256A42.667 42.667 0 0 1 213.333 768V256A42.667 42.667 0 0 1 256 213.333h256A42.667 42.667 0 0 0 512 128H256a128 128 0 0 0-128 128v512a128 128 0 0 0 128 128h512a128 128 0 0 0 128-128V512a42.667 42.667 0 0 0-42.667-42.667z"}),(0,r.jsx)("path",{d:"M682.667 213.333h67.413L481.707 481.28a42.667 42.667 0 0 0 0 60.587 42.667 42.667 0 0 0 60.586 0L810.667 273.92v67.413A42.667 42.667 0 0 0 853.333 384 42.667 42.667 0 0 0 896 341.333V170.667A42.667 42.667 0 0 0 853.333 128H682.667a42.667 42.667 0 0 0 0 85.333z"})]}),i=n.default.forwardRef((e,t)=>(0,r.jsx)(d.default,{component:()=>(0,r.jsx)(s,{color:e.color}),ref:t,...e}));var l=i;},"25b7aed2":function(e,t,o){"use strict";o.d(t,"__esModule",{value:!0}),o.d(t,"default",{enumerable:!0,get:function(){return a.default;}});var a=o("777fffbe")._(o("b622e337"));},32564716:function(e,t,o){"use strict";o.d(t,"__esModule",{value:!0}),o.d(t,"default",{enumerable:!0,get:function(){return m;}});var a=o("777fffbe"),r=o("852bbaa9"),n=o("f19d2b93"),d=r._(o("5b220c3d")),s=o("e22febe0"),i=o("a9d1a279"),l=o("3835a2b7"),c=a._(o("11749eed")),u=o("a2d2c823");let p=(0,l.createStyles)(({token:e,css:t})=>({wrapper:t`
    position: relative;
    border: 1px solid ${e.colorBorderSecondary};
    border-radius: ${e.borderRadius}px;
    padding: ${e.paddingMD}px ${e.paddingLG}px ${2*e.paddingMD}px;
    margin-bottom: ${e.marginLG}px;
  `,title:t`
    font-size: ${e.fontSizeLG}px;
    font-weight: ${e.fontWeightStrong};
    color: ${e.colorTextHeading};

    &:hover {
      color: ${e.colorTextHeading};
    }
  `,description:t`
    margin-top: ${e.margin}px;
  `,demo:t`
    margin-top: ${e.marginLG}px;
    display: flex;
    justify-content: center;
  `,copy:t`
    position: absolute;
    inset-inline-end: ${e.paddingMD}px;
    inset-block-start: ${e.paddingMD}px;
    cursor: pointer;
  `,copyTip:t`
    color: ${e.colorTextTertiary};
  `,copiedTip:t`
    .anticon {
      color: ${e.colorSuccess};
    }
  `,tip:t`
    color: ${e.colorTextTertiary};
    margin-top: ${2*e.marginMD}px;
  `}));var m=({children:e,title:t,description:o,tip:a,asset:r})=>{let{styles:l}=p(),m=(0,d.useRef)(null),[f,x]=d.default.useState(!1),{message:b}=i.App.useApp(),h=async()=>{try{if(m.current){let e=await (0,u.nodeToGroup)(m.current);(0,c.default)(JSON.stringify(e.toSketchJSON())),x(!0),setTimeout(()=>{x(!1);},5e3);}}catch{b.error("\u590D\u5236\u5931\u8D25");}};return(0,n.jsxs)("div",{className:l.wrapper,id:r.id,children:[(0,n.jsx)("a",{className:l.title,href:`#${r.id}`,children:t}),o&&(0,n.jsx)("div",{className:l.description,dangerouslySetInnerHTML:{__html:o}}),(0,n.jsx)("div",{className:l.copy,children:f?(0,n.jsxs)("div",{className:l.copiedTip,children:[(0,n.jsx)(s.CheckOutlined,{}),(0,n.jsx)("span",{style:{marginInlineStart:8},children:"\u5DF2\u590D\u5236\uFF0C\u4F7F\u7528 Kitchen \u63D2\u4EF6\u5373\u53EF\u7C98\u8D34"})]}):(0,n.jsxs)("button",{type:"button",onClick:h,className:l.copyTip,children:[(0,n.jsx)(s.SketchOutlined,{}),(0,n.jsx)("span",{style:{marginInlineStart:8},children:"\u590D\u5236 Sketch JSON"})]})}),(0,n.jsx)("div",{className:l.demo,ref:m,children:e}),(0,n.jsx)("div",{className:l.tip,children:a})]});};},"4a76bcde":function(e,t,o){"use strict";o.d(t,"__esModule",{value:!0}),o.d(t,"default",{enumerable:!0,get:function(){return n;}});var a=o("f19d2b93"),r=o("a9d1a279"),n=({error:e})=>{let{token:t}=r.theme.useToken();return e?(0,a.jsx)(r.Alert,{banner:!0,type:"error",message:e.toString(),style:{color:t.colorError}}):null;};},"5c457583":function(e,t,o){"use strict";o.d(t,"__esModule",{value:!0}),o.d(t,"default",{enumerable:!0,get:function(){return l;}});var a=o("777fffbe"),r=o("f19d2b93"),n=o("3835a2b7"),d=a._(o("7543cefa")),s=a._(o("4a76bcde"));let i=(0,n.createStyles)(({token:e,css:t})=>{let{colorBgContainer:o}=e;return{editor:t`
      // override dumi editor styles
      .dumi-default-source-code-editor {
        .dumi-default-source-code {
          background: ${o};
          &-scroll-container {
            scrollbar-width: thin;
            scrollbar-color: unset;
          }
        }
        .dumi-default-source-code > pre,
        .dumi-default-source-code-scroll-content > pre,
        .dumi-default-source-code-editor-textarea {
          padding: ${e.paddingSM}px ${e.padding}px;
        }

        .dumi-default-source-code > pre,
        .dumi-default-source-code-scroll-content > pre {
          font-size: ${e.fontSize}px;
          line-height: 2;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
        }

        // disable dumi default copy button
        .dumi-default-source-code-copy {
          display: none;
        }

        &::after {
          border-radius: 0 !important;
        }

        &:hover:not(:focus-within) {
          &::after {
            box-shadow: 0 0 0 1px ${e.colorPrimaryBorderHover} inset;
          }
        }
      }
    `};});var l=e=>{let{styles:t}=i();return(0,r.jsxs)("div",{className:t.editor,children:[(0,r.jsx)(d.default,{lang:e.lang,initialValue:e.initialValue,onChange:e.onChange}),(0,r.jsx)(s.default,{error:e.error})]});};},"5c780b35":function(e,t,o){"use strict";o.d(t,"__esModule",{value:!0}),o.d(t,"default",{enumerable:!0,get:function(){return b;}});var a=o("777fffbe"),r=o("852bbaa9"),n=o("f19d2b93"),d=r._(o("5b220c3d")),s=o("a9d1a279"),i=o("3835a2b7"),l=a._(o("b9d455d5")),c=a._(o("afe4535d")),u=a._(o("fc273388")),p=a._(o("ba953c8b")),m=a._(o("5c457583"));let f=(0,i.createStyles)(({token:e,css:t})=>{let{colorIcon:o,antCls:a}=e;return{code:t`
      position: relative;
      margin-top: -${e.margin}px;
    `,copyButton:t`
      color: ${o};
      position: absolute;
      z-index: 2;
      top: 16px;
      inset-inline-end: ${e.padding}px;
      width: 32px;
      text-align: center;
      padding: 0;
    `,copyIcon:t`
      ${a}-typography-copy {
        position: relative;
        margin-inline-start: 0;

        // expand clickable area
        &::before {
          content: '';
          display: block;
          position: absolute;
          top: -5px;
          inset-inline-start: -9px;
          bottom: -5px;
          inset-inline-end: -9px;
        }
      }
      ${a}-typography-copy:not(${a}-typography-copy-success) {
        color: ${o};

        &:hover {
          color: ${o};
        }
      }
    `};}),x={tsx:"TypeScript",jsx:"JavaScript",style:"CSS"};var b=({sourceCode:e="",jsxCode:t="",styleCode:o="",entryName:a,onSourceChange:r,error:i})=>{let b={};e&&(b.tsx=""),t&&(b.jsx=""),o&&(b.style="");let[h,g]=d.default.useState(b),{codeType:j,setCodeType:v}=(0,d.useContext)(p.default),y={tsx:null==e?void 0:e.trim(),jsx:null==t?void 0:t.trim(),style:null==o?void 0:o.trim()};(0,d.useEffect)(()=>{let a={tsx:u.default.highlight(e,u.default.languages.javascript,"jsx"),jsx:u.default.highlight(t,u.default.languages.javascript,"jsx"),style:u.default.highlight(o,u.default.languages.css,"css")};Object.keys(a).forEach(e=>{a[e]||delete a[e];}),g(a);},[t,e,o]);let $=Object.keys(h),{styles:L}=f(),_=(0,d.useMemo)(()=>$.map(e=>{var t;return{label:x[e],key:e,children:(0,n.jsxs)("div",{className:L.code,children:["tsx"===e?(0,n.jsx)(m.default,{error:i,lang:e,initialValue:y[e],onChange:e=>{null==r||r({[a]:e});}}):(t=["pre",{lang:e,highlighted:h[e]}],(0,l.default)(t,[[e=>c.default.isElement(e)&&"pre"===c.default.getTagName(e),(e,t)=>{let o=c.default.getAttributes(e);return(0,n.jsx)("pre",{className:`language-${o.lang}`,children:(0,n.jsx)("code",{dangerouslySetInnerHTML:{__html:o.highlighted}})},t);}]])),(0,n.jsx)(s.Button,{type:"text",className:L.copyButton,children:(0,n.jsx)(s.Typography.Text,{className:L.copyIcon,copyable:{text:y[e]}})})]})};}),[JSON.stringify(h),L.code,L.copyButton,L.copyIcon]);return $.length?1===$.length?(0,n.jsx)(m.default,{error:i,lang:$[0],initialValue:y[$[0]],onChange:e=>{null==r||r({[a]:e});}}):(0,n.jsx)(s.Tabs,{centered:!0,className:"highlight",activeKey:j,onChange:v,items:_}):null;};},"5cb60d94":function(e,t,o){"use strict";o.d(t,"__esModule",{value:!0}),o.d(t,"default",{enumerable:!0,get:function(){return i;}});var a=o("777fffbe"),r=o("f19d2b93"),n=o("9c86e52a"),d=a._(o("877316a5")),s=a._(o("32564716")),i=e=>{let t=(0,n.useTabMeta)();return(null==t?void 0:t.frontmatter.title)==="Design"?(0,r.jsx)(s.default,{...e}):(0,r.jsx)(d.default,{...e});};},"877316a5":function(e,t,o){"use strict";let a;o.d(t,"__esModule",{value:!0}),o.d(t,"default",{enumerable:!0,get:function(){return N;}});var r=o("777fffbe"),n=o("852bbaa9"),d=o("f19d2b93"),s=n._(o("5b220c3d")),i=o("e22febe0"),l=r._(o("1cb7d57d")),c=o("a9d1a279"),u=o("3835a2b7"),p=r._(o("600aabe0")),m=o("9c86e52a"),f=r._(o("5cf39197")),x=r._(o("91a66390")),b=r._(o("8cdda671")),h=r._(o("e155cded")),g=r._(o("5c780b35")),j=r._(o("b550a850")),v=r._(o("96241d43")),y=r._(o("bb8535f3")),$=r._(o("0521ffe7")),L=r._(o("e0472e0f")),_=r._(o("ba953c8b")),C=r._(o("714a8bde")),M=o("6afe185a");let{ErrorBoundary:S}=c.Alert,k=({type:e,demo:t})=>{window.gtag&&window.gtag("event","demo",{event_category:e,event_label:t});},w=(0,u.createStyles)(({token:e})=>{let{borderRadius:t}=e;return{codeHideBtn:(0,u.css)`
      position: sticky;
      bottom: 0;
      z-index: 1;
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0 0 ${t}px ${t}px;
      border-top: 1px solid ${e.colorSplit};
      color: ${e.colorTextSecondary};
      transition: all ${e.motionDurationMid} ease-in-out;
      background-color: ${e.colorBgElevated};
      cursor: pointer;
      &:hover {
        color: ${e.colorPrimary};
      }
      span {
        margin-inline-end: ${e.marginXXS}px;
      }
    `};});var N=e=>{var t;let{asset:o,expand:r,iframe:n,demoUrl:u,children:N,title:T,description:R,originDebug:z,jsx:O,style:D,compact:B,background:E,filename:F,version:A,simplify:Z,clientOnly:H,pkgDependencyList:I}=e,{showDebug:J,codeType:V}=(0,s.useContext)(_.default),{pkg:P}=(0,m.useSiteData)(),G=(0,x.default)(),{styles:K}=w(),U="index.tsx",q=o.dependencies[U].value,W=function(){let[e,t]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{a??(a=new Promise(e=>{(0,M.ping)(t=>"timeout"!==t&&"error"!==t?e(!0):e(!1));})),a.then(t);},[]),e;}(),X=(0,s.useRef)(null),Y=(0,s.useRef)(null),{node:Q,error:ee,setSource:et}=(0,m.useLiveDemo)(o.id,{iframe:!!n,containerRef:Y}),eo=(0,s.useRef)(null),ea=(0,s.useRef)(null),er=(0,s.useRef)(null),en=(0,s.useRef)(null),[ed,es]=(0,s.useState)(!1),{theme:ei}=(0,s.useContext)(C.default),{hash:el,pathname:ec,search:eu}=G,ep=`https://ant.design${ec}${eu}#${o.id}`,[em,ef]=(0,s.useState)(!1);(0,s.useEffect)(()=>{ef(/preview-(\d+)-ant-design/.test(window.location.hostname));},[]);let ex=e=>{es(e=>!e),k({type:"expand",demo:e});};(0,s.useEffect)(()=>{if(o.id===el.slice(1)){var e;null===(e=eo.current)||void 0===e||e.click();}},[]),(0,s.useEffect)(()=>{es(r);},[r]);let eb=!n&&H?(0,d.jsx)(h.default,{children:N}):N;X.current||(X.current=n?(0,d.jsx)(b.default,{children:(0,d.jsx)("iframe",{src:u,height:!0===n?void 0:n,title:"demo",className:"iframe-demo"})}):eb);let eh=(0,p.default)("code-box",{expand:ed,"code-box-debug":z,"code-box-simplify":Z}),eg=(0,p.default)("highlight-wrapper",{"highlight-wrapper-expand":ed}),ej=`
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width">
          <meta name="theme-color" content="#000000">
        </head>
        <body>
          <div id="container" style="padding: 24px" />
          <script>const mountNode = document.getElementById('container');</script>
        </body>
      </html>
    `,ev="tsx"===V?"tsx":"js",ey=O.split("\n").reduce((e,t)=>{let o=t.match(/import .+? from '(.+)';$/);if(null==o?void 0:o[1]){let t=o[1].split("/"),a=t[0].startsWith("@")?`${t[0]}/${t[1]}`:t[0];e[a]??(e[a]=I[a]??"latest");}return e;},{antd:P.version});ey["@ant-design/icons"]="latest","tsx"===ev&&(ey["@types/react"]="^18.0.0",ey["@types/react-dom"]="^18.0.0"),ey.react="^18.0.0",ey["react-dom"]="^18.0.0";let e$={title:`${T} - antd@${ey.antd}`,html:ej,js:`const { createRoot } = ReactDOM;
${O.replace(/import\s+(?:React,\s+)?{(\s+[^}]*\s+)}\s+from\s+'react'/,"const { $1 } = React;").replace(/import\s+{(\s+[^}]*\s+)}\s+from\s+'antd';/,"const { $1 } = antd;").replace(/import\s+{(\s+[^}]*\s+)}\s+from\s+'@ant-design\/icons';/,"const { $1 } = icons;").replace("import moment from 'moment';","").replace("import React from 'react';","").replace(/import\s+{\s+(.*)\s+}\s+from\s+'react-router';/,"const { $1 } = ReactRouter;").replace(/import\s+{\s+(.*)\s+}\s+from\s+'react-router-dom';/,"const { $1 } = ReactRouterDOM;").replace(/([A-Za-z]*)\s+as\s+([A-Za-z]*)/,"$1:$2").replace(/export default/,"const ComponentDemo =")}

createRoot(mountNode).render(<ComponentDemo />);
`,editors:"001",css:"",js_external:["react@18/umd/react.development.js","react-dom@18/umd/react-dom.development.js","dayjs@1/dayjs.min.js",`antd@${P.version}/dist/antd-with-locales.min.js`,"@ant-design/icons/dist/index.umd.js","react-router-dom/dist/umd/react-router-dom.production.min.js","react-router/dist/umd/react-router.production.min.js"].map(e=>`https://unpkg.com/${e}`).join(";"),js_pre_processor:"typescript"},eL={title:`${T} - antd@${ey.antd}`,js:`${/import React(\D*)from 'react';/.test(O)?"":`import React from 'react';
`}import { createRoot } from 'react-dom/client';
${O.replace(/export default/,"const ComponentDemo =")}

createRoot(mountNode).render(<ComponentDemo />);
`,css:"",json:JSON.stringify({name:"antd-demo",dependencies:ey},null,2)},e_="tsx"===ev?q:O,eC="import React from 'react';",eM=/import React(\D*)from 'react';/,eS=e_.match(eM);eS&&([eC]=eS,e_=e_.replace(eM,"").trim());let ek=`
${eC}
import './index.css';
${e_}
    `.trim(),ew=(D||"").trim().replace(RegExp(`#${o.id}\\s*`,"g"),"").replace("</style>","").replace("<style>","").replace("```css","").replace("```",""),eN=`import React from 'react';
import { createRoot } from 'react-dom/client';
import Demo from './demo';

createRoot(document.getElementById('container')).render(<Demo />);
  `,eT={title:`${T} - antd@${ey.antd}`,main:"index.js",dependencies:{...ey,"rc-util":I["rc-util"],react:"^18.0.0","react-dom":"^18.0.0","react-scripts":"^5.0.0"},devDependencies:{typescript:"^5.0.2"},scripts:{start:"react-scripts start",build:"react-scripts build",test:"react-scripts test --env=jsdom",eject:"react-scripts eject"},browserslist:[">0.2%","not dead"]},eR={files:{"package.json":{content:eT},"index.css":{content:ew},[`index.${ev}`]:{content:eN},[`demo.${ev}`]:{content:ek},"index.html":{content:ej}}},ez={title:`${T} - antd@${ey.antd}`,template:"create-react-app",dependencies:ey,description:"",files:{"index.css":ew,[`index.${ev}`]:eN,[`demo.${ev}`]:ek,"index.html":ej}};"tsx"===ev&&(ez.files["tsconfig.json"]=JSON.stringify({compilerOptions:{target:"esnext",module:"esnext",esModuleInterop:!0,moduleResolution:"node",jsx:"react",jsxFactory:"React.createElement",jsxFragmentFactory:"React.Fragment"}},null,2));let eO=ei.includes("dark")?"#303030":"#f0f2f5",eD=(0,d.jsxs)("section",{className:eh,id:o.id,children:[(0,d.jsx)("section",{className:"code-box-demo",style:{padding:n||B?0:void 0,overflow:n||B?"hidden":void 0,backgroundColor:"grey"===E?eO:void 0},ref:Y,children:Q||(0,d.jsx)(S,{children:(0,d.jsx)(s.default.StrictMode,{children:X.current})})}),!Z&&(0,d.jsxs)("section",{className:"code-box-meta markdown",children:[(0,d.jsxs)("div",{className:"code-box-title",children:[(0,d.jsx)(c.Tooltip,{title:z?(0,d.jsx)(m.FormattedMessage,{id:"app.demo.debug"}):"",children:(0,d.jsx)("a",{href:`#${o.id}`,ref:eo,children:T})}),(0,d.jsx)(j.default,{title:(0,d.jsx)(m.FormattedMessage,{id:"app.content.edit-demo"}),filename:F})]}),R&&(0,d.jsx)("div",{className:"code-box-description",dangerouslySetInnerHTML:{__html:R}}),(0,d.jsxs)(c.Flex,{wrap:!0,gap:"middle",className:"code-box-actions",children:[em&&(0,d.jsx)(c.Tooltip,{title:(0,d.jsx)(m.FormattedMessage,{id:"app.demo.online"}),children:(0,d.jsx)("a",{className:"code-box-code-action",target:"_blank",rel:"noreferrer",href:ep,children:(0,d.jsx)(i.LinkOutlined,{"aria-label":"open in new tab",className:"code-box-online"})})}),W?(0,d.jsxs)("form",{className:"code-box-code-action",action:"//riddle.alibaba-inc.com/riddles/define",method:"POST",target:"_blank",ref:er,onClick:()=>{var e;k({type:"riddle",demo:o.id}),null===(e=er.current)||void 0===e||e.submit();},children:[(0,d.jsx)("input",{type:"hidden",name:"data",value:JSON.stringify(eL)}),(0,d.jsx)(c.Tooltip,{title:(0,d.jsx)(m.FormattedMessage,{id:"app.demo.riddle"}),children:(0,d.jsx)(L.default,{className:"code-box-riddle"})})]}):null,(0,d.jsx)(c.Tooltip,{title:(0,d.jsx)(m.FormattedMessage,{id:"app.demo.stackblitz"}),children:(0,d.jsx)("span",{className:"code-box-code-action",onClick:()=>{k({type:"stackblitz",demo:o.id}),l.default.openProject(ez,{openFile:[`demo.${ev}`]});},children:(0,d.jsx)(i.ThunderboltOutlined,{className:"code-box-stackblitz",style:{transform:"scale(1.2)"}})})}),(0,d.jsxs)("form",{className:"code-box-code-action",action:"https://codepen.io/pen/define",method:"POST",target:"_blank",ref:en,onClick:()=>{var e;k({type:"codepen",demo:o.id}),null===(e=en.current)||void 0===e||e.submit();},children:[(0,d.jsx)(h.default,{children:(0,d.jsx)("input",{type:"hidden",name:"data",value:JSON.stringify(e$)})}),(0,d.jsx)(c.Tooltip,{title:(0,d.jsx)(m.FormattedMessage,{id:"app.demo.codepen"}),children:(0,d.jsx)(v.default,{className:"code-box-codepen"})})]}),J&&(0,d.jsxs)("form",{className:"code-box-code-action",action:"https://codesandbox.io/api/v1/sandboxes/define",method:"POST",target:"_blank",ref:ea,onClick:()=>{var e;k({type:"codesandbox",demo:o.id}),null===(e=ea.current)||void 0===e||e.submit();},children:[(0,d.jsx)("input",{type:"hidden",name:"parameters",value:(t=JSON.stringify(eR),f.default.compressToBase64(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""))}),(0,d.jsx)(c.Tooltip,{title:(0,d.jsx)(m.FormattedMessage,{id:"app.demo.codesandbox"}),children:(0,d.jsx)(y.default,{className:"code-box-codesandbox"})})]}),(0,d.jsx)(c.Tooltip,{title:(0,d.jsx)(m.FormattedMessage,{id:"app.demo.separate"}),children:(0,d.jsx)("a",{className:"code-box-code-action","aria-label":"open in new tab",target:"_blank",rel:"noreferrer",href:u,children:(0,d.jsx)($.default,{className:"code-box-separate"})})}),(0,d.jsx)(c.Tooltip,{title:(0,d.jsx)(m.FormattedMessage,{id:`app.demo.code.${ed?"hide":"show"}`}),children:(0,d.jsxs)("div",{className:"code-expand-icon code-box-code-action",children:[(0,d.jsx)("img",{alt:"expand code",src:(null==ei?void 0:ei.includes("dark"))?"https://gw.alipayobjects.com/zos/antfincdn/btT3qDZn1U/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/antfincdn/Z5c7kzvi30/expand.svg",className:ed?"code-expand-icon-hide":"code-expand-icon-show",onClick:()=>ex(o.id)}),(0,d.jsx)("img",{alt:"expand code",src:(null==ei?void 0:ei.includes("dark"))?"https://gw.alipayobjects.com/zos/antfincdn/CjZPwcKUG3/OpROPHYqWmrMDBFMZtKF.svg":"https://gw.alipayobjects.com/zos/antfincdn/4zAaozCvUH/unexpand.svg",className:ed?"code-expand-icon-show":"code-expand-icon-hide",onClick:()=>ex(o.id)})]})})]})]}),ed&&(0,d.jsxs)("section",{className:eg,children:[(0,d.jsx)(g.default,{sourceCode:q,jsxCode:O,styleCode:D,error:ee,entryName:U,onSourceChange:et}),(0,d.jsxs)("div",{tabIndex:0,role:"button",className:K.codeHideBtn,onClick:()=>es(!1),children:[(0,d.jsx)(i.UpOutlined,{}),(0,d.jsx)(m.FormattedMessage,{id:"app.demo.code.hide.simplify"})]})]},"code")]});return((0,s.useEffect)(()=>{if(!D)return;let e=document.createElement("style");return e.type="text/css",e.innerHTML=D,e["data-demo-url"]=u,document.head.appendChild(e),()=>{document.head.removeChild(e);};},[D,u]),A)?(0,d.jsx)(c.Badge.Ribbon,{text:A,color:A.includes("<")?"red":void 0,children:eD}):eD;};},"8cdda671":function(e,t,o){"use strict";o.d(t,"__esModule",{value:!0}),o.d(t,"default",{enumerable:!0,get:function(){return d;}});var a=o("f19d2b93"),r=o("3835a2b7");let n=(0,r.createStyles)(({token:e,css:t})=>({browserMockup:t`
    position: relative;
    border-top: 2em solid rgba(230, 230, 230, 0.7);
    border-radius: ${e.borderRadiusSM}px ${e.borderRadiusSM}px 0 0;
    box-shadow: 0 0.1em 0.5em 0 rgba(0, 0, 0, 0.28);
    &::before {
      position: absolute;
      top: -1.25em;
      inset-inline-start: 1em;
      display: block;
      width: 0.5em;
      height: 0.5em;
      background-color: #f44;
      border-radius: 50%;
      box-shadow:
        0 0 0 2px #f44,
        1.5em 0 0 2px #9b3,
        3em 0 0 2px #fb5;
      content: '';
    }
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: -1.6em;
      inset-inline-start: 5.5em;
      width: calc(100% - 6em);
      height: 1.2em;
      background-color: #fff;
      border-radius: ${e.borderRadiusSM}px;
    }
    & > * {
      display: block;
    }
  `}));var d=({children:e})=>{let{styles:t}=n();return(0,a.jsx)("div",{className:t.browserMockup,children:e});};},"96241d43":function(e,t,o){"use strict";o.d(t,"__esModule",{value:!0}),o.d(t,"default",{enumerable:!0,get:function(){return l;}});var a=o("777fffbe"),r=o("f19d2b93"),n=a._(o("5b220c3d")),d=a._(o("e22febe0"));let s=()=>(0,r.jsxs)("svg",{viewBox:"0 0 15 15",fill:"currentColor",children:[(0,r.jsx)("title",{children:"codepen icon"}),(0,r.jsx)("path",{d:"M14.777304,4.75062256 L7.77734505,0.0839936563 C7.60939924,-0.0279665065 7.39060662,-0.0279665065 7.22266081,0.0839936563 L0.222701813,4.75062256 C0.0836082937,4.84334851 5.66973453e-05,4.99945222 4.6875e-05,5.16662013 L4.6875e-05,9.83324903 C4.6875e-05,10.0004355 0.0836088906,10.1565596 0.222701812,10.2492466 L7.22266081,14.9158755 C7.30662908,14.9718752 7.403316,14.999875 7.50000292,14.999875 C7.59668984,14.999875 7.69337678,14.9718752 7.77734505,14.9158755 L14.777304,10.2492466 C14.9163976,10.1565206 14.9999492,10.0004169 14.999959,9.83324903 L14.999959,5.16662013 C14.9999492,4.99945222 14.9163976,4.84334851 14.777304,4.75062256 Z M7.50000292,9.23237755 L4.90139316,7.4999502 L7.50000292,5.76755409 L10.0986127,7.4999502 L7.50000292,9.23237755 Z M8,4.89905919 L8,1.43423573 L13.598561,5.16665138 L10.9999824,6.89904747 L8,4.89905919 Z M7.00000586,4.89905919 L4.00002344,6.89904747 L1.40141366,5.16665138 L7.00000586,1.43423573 L7.00000586,4.89905919 Z M3.09865372,7.4999502 L1.00004102,8.89903575 L1.00004102,6.10089589 L3.09865372,7.4999502 Z M4.00002344,8.10085292 L7.00000586,10.1008412 L7.00000586,13.5656334 L1.40141366,9.83328028 L4.00002344,8.10085292 Z M8,10.1008412 L10.9999824,8.10085292 L13.5985922,9.83328028 L8,13.5656647 L8,10.1008412 L8,10.1008412 Z M11.9013521,7.4999502 L13.9999648,6.10089589 L13.9999648,8.899067 L11.9013521,7.4999502 Z"})]}),i=n.default.forwardRef((e,t)=>(0,r.jsx)(d.default,{component:s,ref:t,...e}));var l=i;},b550a850:function(e,t,o){"use strict";o.d(t,"__esModule",{value:!0}),o.d(t,"default",{enumerable:!0,get:function(){return i;}});var a=o("f19d2b93"),r=o("e22febe0"),n=o("a9d1a279"),d=o("3835a2b7");let s=(0,d.createStyles)(({token:e,css:t})=>{let{colorIcon:o,colorText:a,iconCls:r}=e;return{editButton:t`
      a& {
        position: relative;
        top: -2px;
        display: inline-block;
        text-decoration: none;
        vertical-align: middle;
        margin-inline-start: ${e.marginXS}px;
        ${r} {
          display: block;
          color: ${o};
          font-size: ${e.fontSizeLG}px;
          transition: all ${e.motionDurationSlow};
          &:hover {
            color: ${a};
          }
        }
      }
    `};});var i=({title:e,filename:t})=>{let{styles:o}=s();return(0,a.jsx)(n.Tooltip,{title:e,children:(0,a.jsx)("a",{className:o.editButton,href:`https://github.com/ant-design/ant-design/edit/master/${t}`,target:"_blank",rel:"noopener noreferrer",children:(0,a.jsx)(r.EditOutlined,{})})});};},bb8535f3:function(e,t,o){"use strict";o.d(t,"__esModule",{value:!0}),o.d(t,"default",{enumerable:!0,get:function(){return l;}});var a=o("777fffbe"),r=o("f19d2b93"),n=a._(o("5b220c3d")),d=a._(o("e22febe0"));let s=()=>(0,r.jsxs)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",children:[(0,r.jsx)("title",{children:"CodeSandbox Icon"}),(0,r.jsx)("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"})]}),i=n.default.forwardRef((e,t)=>(0,r.jsx)(d.default,{component:s,ref:t,...e}));var l=i;},bc7b36fe:function(e,t,o){e.exports="";},e0472e0f:function(e,t,o){"use strict";o.d(t,"__esModule",{value:!0}),o.d(t,"default",{enumerable:!0,get:function(){return l;}});var a=o("777fffbe"),r=o("f19d2b93"),n=a._(o("5b220c3d")),d=a._(o("e22febe0"));let s=()=>(0,r.jsxs)("svg",{viewBox:"0 0 14 14",fill:"currentColor",children:[(0,r.jsx)("title",{children:"Riddle logo"}),(0,r.jsx)("path",{d:"M13.8875145,13.1234844 C13.8687399,13.0691875 13.8499977,13.0329687 13.8312555,12.9786562 L11.3687445,8.83296875 C12.9187468,8.05754687 13.9640694,6.49009375 13.9640694,4.68728125 C13.9624994,2.09095312 11.7968694,0 9.10938728,0 L3.86404855,0 C3.04217572,0 2.37028902,0.648703125 2.37028902,1.44223437 L2.37028902,1.82090625 L0.746871676,1.82090625 C0.33593526,1.82090625 0,2.14526562 0,2.54203125 L0,13.4478437 C0,13.7540937 0.242191908,13.9879375 0.559368786,13.9879375 C0.615627746,13.9879375 0.67187052,13.9698281 0.72812948,13.9517187 L13.440615,13.9517187 C13.7578081,13.9517187 14,13.7178906 14,13.4116406 C14,13.321125 13.9624994,13.2125 13.8875145,13.1234844 Z M3.49061272,8.0394375 L3.49061272,2.9206875 L8.71719306,2.9206875 C9.74375723,2.9206875 10.5843723,3.73232812 10.5843723,4.7235 C10.5843723,5.71465625 9.76249942,6.5081875 8.71719306,6.5081875 L6.53280462,6.5081875 L6.53280462,6.52629688 C6.45781965,6.52629688 6.3828185,6.5625 6.3093711,6.59870313 C6.04843699,6.74354688 5.95469364,7.08598438 6.10467977,7.33792188 L8.3078104,11.0325469 L3.4906289,11.0325469 L3.4906289,8.0394375 L3.49061272,8.0394375 Z M1.1203237,12.8881406 L1.1203237,2.9206875 L2.3703052,2.9206875 L2.3703052,11.5545313 C2.3703052,11.8607813 2.61249711,12.0946094 2.92969017,12.0946094 L2.94843237,12.0946094 C2.98593295,12.1127188 3.04219191,12.1127188 3.09843468,12.1127188 L9.16563006,12.1127188 C9.48280694,12.1127188 9.72499884,11.878875 9.72499884,11.572625 L9.72499884,11.5364219 C9.76249942,11.3915938 9.74375723,11.2482813 9.66875607,11.1215469 L7.5593526,7.58835938 L8.6984185,7.58835938 C10.3406104,7.58835938 11.6843514,6.29095313 11.6843514,4.703875 C11.6843514,3.1168125 10.3406104,1.81939063 8.6984185,1.81939063 L3.4906289,1.81939063 L3.4906289,1.44073437 C3.4906289,1.24310937 3.65937341,1.08017187 3.86406474,1.08017187 L9.09061272,1.08017187 C11.143741,1.08017187 12.8234173,2.7019375 12.8234173,4.68578125 C12.8234173,6.21853125 11.8343538,7.5340625 10.4343538,8.05603125 C10.378111,8.07414063 10.3406104,8.09223438 10.2843514,8.11034375 C10.0234173,8.25517188 9.92967399,8.597625 10.0796763,8.8495625 L12.5062405,12.8881563 L1.12030751,12.8881563 L1.1203237,12.8881406 Z"})]}),i=n.default.forwardRef((e,t)=>(0,r.jsx)(d.default,{component:s,ref:t,...e}));var l=i;},e155cded:function(e,t,o){"use strict";o.d(t,"__esModule",{value:!0}),o.d(t,"default",{enumerable:!0,get:function(){return r;}});var a=o("5b220c3d"),r=({children:e})=>{let[t,o]=(0,a.useState)(!1);return(0,a.useLayoutEffect)(()=>{o(!0);},[]),t?e:null;};}}]);
//# sourceMappingURL=5cb60d94-async.b61b166f.js.map