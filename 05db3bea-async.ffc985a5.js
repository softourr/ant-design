(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["05db3bea"],{"05db3bea":function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return s;}});var i=t("f19d2b93");t("65d724af");var o=t("5b220c3d"),a=t("a9d1a279"),r=t("e22febe0"),d=t("ff0f89d2"),s=()=>{let{getPrefixCls:e}=(0,o.useContext)(a.ConfigProvider.ConfigContext),n=e(),t=(0,d.css)`
    &.${n}-btn-primary:not([disabled]):not(.${n}-btn-dangerous) {
      border-width: 0;

      > span {
        position: relative;
      }

      &::before {
        content: '';
        background: linear-gradient(135deg, #6253E1, #04BEFE);
        position: absolute;
        inset: 0;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `;return(0,i.jsx)(a.ConfigProvider,{button:{className:t},children:(0,i.jsxs)(a.Space,{children:[(0,i.jsx)(a.Button,{type:"primary",size:"large",icon:(0,i.jsx)(r.AntDesignOutlined,{}),children:"Gradient Button"}),(0,i.jsx)(a.Button,{size:"large",children:"Button"})]})});};}}]);
//# sourceMappingURL=05db3bea-async.ffc985a5.js.map