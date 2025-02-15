"use strict";(self.webpackChunk_lifeomic_chroma_react=self.webpackChunk_lifeomic_chroma_react||[]).push([[692],{"./src/components/SlideOver/SlideOver.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomHeader:()=>CustomHeader,Default:()=>Default,HeaderWithIcon:()=>HeaderWithIcon,PanelActions:()=>PanelActions,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SlideOver_stories});var react=__webpack_require__("./node_modules/react/index.js"),makeStyles=__webpack_require__("./src/styles/makeStyles.ts"),Combination=__webpack_require__("./node_modules/react-remove-scroll/dist/es2015/Combination.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const useStyles=(0,makeStyles.Z)((theme=>({"@keyframes fade-in":{"0%":{opacity:0},"100%":{opacity:1}},"@keyframes fade-out":{"0%":{opacity:1},"100%":{opacity:0}},"@keyframes slide-in":{"0%":{width:0,maxWidth:0},"100%":{maxWidth:"100%",width:"var(--slideover-width)"}},"@keyframes slide-out":{"0%":{maxWidth:"100%",width:"var(--slideover-width)"},"100%":{width:0,maxWidth:0}},root:{"--slideover-width":"28rem",backgroundColor:theme.palette.common.white,bottom:0,display:"flex",position:"absolute",right:0,top:0,zIndex:theme.zIndex.slideOver,boxShadow:theme.boxShadows.elevatedContent,animation:"$slide-in 0.25s ease-in-out",transform:"translate3d(0, 0, 0)","@media (prefers-reduced-motion)":{animation:"$slide-in 0.1s ease-in-out"}},transitionClose:{animation:"$slide-out 0.2s ease-in-out","@media (prefers-reduced-motion)":{animation:"$slide-out 0.1s ease-in-out"}},fadeInAnimation:{animation:"$fade-in 1s"},fadeOutAnimation:{animation:"$fade-out 0.15s"},inner:{maxWidth:"var(--slideover-width)",position:"relative",width:"100vw"},content:{backgroundColor:"white",display:"flex",flexDirection:"column",height:"100%",overflowY:"auto"}})),{name:"ChromaSlideOver"}),SlideOver=_ref=>{let{classes:additionalClasses,className,children,isOpen=!1,...rootProps}=_ref;const classes=useStyles({}),[localIsOpen,setLocalIsOpen]=react.useState(isOpen),[isTransitioningClosed,setIsTransitioningClosed]=react.useState(!1);return react.useEffect((()=>{if(!1===localIsOpen&&!0===isOpen)return setLocalIsOpen(!0),void setIsTransitioningClosed(!1);!0===localIsOpen&&0==isOpen&&setIsTransitioningClosed(!0)}),[isOpen,localIsOpen]),!1===localIsOpen?null:(0,jsx_runtime.jsx)(Combination.Z,{forwardProps:!0,children:(0,jsx_runtime.jsx)("section",{className:(0,clsx_m.Z)(classes.root,additionalClasses?.root,isTransitioningClosed&&classes.transitionClose,className),onAnimationEnd:()=>{localIsOpen&&isTransitioningClosed&&setLocalIsOpen(!1)},...rootProps,children:(0,jsx_runtime.jsx)("div",{className:(0,clsx_m.Z)(classes.inner,additionalClasses?.inner),children:(0,jsx_runtime.jsx)("div",{className:(0,clsx_m.Z)(classes.content,classes.fadeInAnimation,isTransitioningClosed&&classes.fadeOutAnimation,additionalClasses?.content),children})})})})};SlideOver.displayName="SlideOver";try{useStyles.displayName="useStyles",useStyles.__docgenInfo={description:"",displayName:"useStyles",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SlideOver/SlideOver.tsx#useStyles"]={docgenInfo:useStyles.__docgenInfo,name:"useStyles",path:"src/components/SlideOver/SlideOver.tsx#useStyles"})}catch(__react_docgen_typescript_loader_error){}try{SlideOver.displayName="SlideOver",SlideOver.__docgenInfo={description:"Slide Overs are used to display content that is hidden until toggled open.\n\n**NOTE:** The parent must have `position: relative` for this to work properly.\n\n**NOTE:** This component locks the body from scrolling by design, so that users\ncan scroll the Slide Over panel.\n\n### Accessibility\n\n- The SlideOver locks scroll when open.\n\n### Links\n\n- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/SlideOver/SlideOver.tsx)\n- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/SlideOver/SlideOver.stories.tsx)",displayName:"SlideOver",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"{ root?: string; inner?: string; content?: string | undefined; } | undefined"}},isOpen:{defaultValue:{value:"false"},description:"",name:"isOpen",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SlideOver/SlideOver.tsx#SlideOver"]={docgenInfo:SlideOver.__docgenInfo,name:"SlideOver",path:"src/components/SlideOver/SlideOver.tsx#SlideOver"})}catch(__react_docgen_typescript_loader_error){}var IconButton=__webpack_require__("./src/components/IconButton/IconButton.tsx"),Text=__webpack_require__("./src/components/Text/Text.tsx"),chromicons_esm=__webpack_require__("./node_modules/@lifeomic/chromicons/dist/chromicons.esm.js"),Box=__webpack_require__("./src/components/Box/Box.tsx");const Header_useStyles=(0,makeStyles.Z)((theme=>({root:{backgroundColor:theme.palette.black[50]},titleIcon:{color:theme.palette.text.hint,minHeight:theme.pxToRem(22),minWidth:theme.pxToRem(22),height:theme.pxToRem(22),width:theme.pxToRem(22)},overflow:{flex:1,overflow:"hidden"},text:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},button:{marginRight:theme.pxToRem(-10)}})),{name:"ChromaSlideOverHeader"}),Header=_ref=>{let{children,classes:additionalClasses,className,onClose,title,titleIcon:TitleIcon,...rootProps}=_ref;const classes=Header_useStyles({});return(0,jsx_runtime.jsxs)(Box.xu,{align:"center",gap:1,justify:"space-between",padding:2,className:(0,clsx_m.Z)(classes.root,additionalClasses?.root,className),...rootProps,children:[title&&(0,jsx_runtime.jsxs)(Box.xu,{align:"center",gap:1,className:classes.overflow,children:[!!TitleIcon&&(0,jsx_runtime.jsx)(TitleIcon,{role:"img","aria-hidden":!0,className:classes.titleIcon}),(0,jsx_runtime.jsx)(Text.xv,{className:(0,clsx_m.Z)(classes.text,additionalClasses?.text),size:"body",weight:"bold",children:title})]}),(0,jsx_runtime.jsxs)(Box.xu,{align:"center",gap:1,children:[(0,jsx_runtime.jsx)(Box.xu,{justify:"flex-end",align:"center",gap:1,children}),(0,jsx_runtime.jsx)(IconButton.hU,{className:(0,clsx_m.Z)(classes.button,additionalClasses?.button),"aria-label":"Close panel",icon:chromicons_esm.X,onClick:onClose,size:0})]})]})};Header.displayName="Header";try{Header_useStyles.displayName="useStyles",Header_useStyles.__docgenInfo={description:"",displayName:"useStyles",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SlideOver/Header.tsx#useStyles"]={docgenInfo:Header_useStyles.__docgenInfo,name:"useStyles",path:"src/components/SlideOver/Header.tsx#useStyles"})}catch(__react_docgen_typescript_loader_error){}try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => any"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},titleIcon:{defaultValue:null,description:"",name:"titleIcon",required:!1,type:{name:"MemoExoticComponent<(props: SVGProps<SVGSVGElement>) => Element>"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"{ root?: string; text?: string; button?: string | undefined; } | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SlideOver/Header.tsx#Header"]={docgenInfo:Header.__docgenInfo,name:"Header",path:"src/components/SlideOver/Header.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}var Avatar=__webpack_require__("./src/components/Avatar/Avatar.tsx");const Body_useStyles=(0,makeStyles.Z)((theme=>({root:{display:"flex",padding:theme.spacing(2),width:"100%",height:"100%"}})),{name:"ChromaSlideOverBody"}),Body=_ref=>{let{as,className,children,...rootProps}=_ref;const classes=Body_useStyles({}),AsComponent=as||"div";return(0,jsx_runtime.jsx)(AsComponent,{className:(0,clsx_m.Z)(classes.root,className),...rootProps,children})};Body.displayName="Body";try{Body_useStyles.displayName="useStyles",Body_useStyles.__docgenInfo={description:"",displayName:"useStyles",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SlideOver/Body.tsx#useStyles"]={docgenInfo:Body_useStyles.__docgenInfo,name:"useStyles",path:"src/components/SlideOver/Body.tsx#useStyles"})}catch(__react_docgen_typescript_loader_error){}try{Body.displayName="Body",Body.__docgenInfo={description:"",displayName:"Body",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SlideOver/Body.tsx#Body"]={docgenInfo:Body.__docgenInfo,name:"Body",path:"src/components/SlideOver/Body.tsx#Body"})}catch(__react_docgen_typescript_loader_error){}const Actions_useStyles=(0,makeStyles.Z)((theme=>({root:{borderTop:`1px solid ${theme.palette.divider}`}})),{name:"ChromaSlideOverActions"}),Actions=_ref=>{let{className,children,...rootProps}=_ref;const classes=Actions_useStyles({});return(0,jsx_runtime.jsx)(Box.xu,{className:(0,clsx_m.Z)(classes.root,className),gap:1,padding:2,...rootProps,children})};Actions.displayName="Actions";try{Actions_useStyles.displayName="useStyles",Actions_useStyles.__docgenInfo={description:"",displayName:"useStyles",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SlideOver/Actions.tsx#useStyles"]={docgenInfo:Actions_useStyles.__docgenInfo,name:"useStyles",path:"src/components/SlideOver/Actions.tsx#useStyles"})}catch(__react_docgen_typescript_loader_error){}try{Actions.displayName="Actions",Actions.__docgenInfo={description:"",displayName:"Actions",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},flexChildren:{defaultValue:null,description:"",name:"flexChildren",required:!1,type:{name:"boolean"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"boolean"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"end"'},{value:'"baseline"'},{value:'"center"'},{value:'"start"'},{value:'"stretch"'},{value:'"flex-end"'},{value:'"flex-start"'}]}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"column"'},{value:'"row"'}]}},justify:{defaultValue:null,description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"space-between"'},{value:'"space-evenly"'},{value:'"flex-end"'},{value:'"flex-start"'}]}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},fullHeight:{defaultValue:null,description:"",name:"fullHeight",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"string | number"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"string | number"}},marginTop:{defaultValue:null,description:"",name:"marginTop",required:!1,type:{name:"string | number"}},marginBottom:{defaultValue:null,description:"",name:"marginBottom",required:!1,type:{name:"string | number"}},marginLeft:{defaultValue:null,description:"",name:"marginLeft",required:!1,type:{name:"string | number"}},marginRight:{defaultValue:null,description:"",name:"marginRight",required:!1,type:{name:"string | number"}},marginX:{defaultValue:null,description:"",name:"marginX",required:!1,type:{name:"string | number"}},marginY:{defaultValue:null,description:"",name:"marginY",required:!1,type:{name:"string | number"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"string | number"}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:"string | number"}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:"string | number"}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:"string | number"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"string | number"}},paddingX:{defaultValue:null,description:"",name:"paddingX",required:!1,type:{name:"string | number"}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!1,type:{name:"string | number"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"",name:"bgColor",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SlideOver/Actions.tsx#Actions"]={docgenInfo:Actions.__docgenInfo,name:"Actions",path:"src/components/SlideOver/Actions.tsx#Actions"})}catch(__react_docgen_typescript_loader_error){}var Button=__webpack_require__("./src/components/Button/Button.tsx");const SlideOver_stories={component:SlideOver,decorators:[story=>(0,jsx_runtime.jsx)("div",{style:{height:"200px"},children:story()})]},Template=args=>{const[isOpen,setIsOpen]=react.useState(!1);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.zx,{onClick:()=>{setIsOpen(!isOpen)},children:"Toggle SlideOver"}),(0,jsx_runtime.jsx)(SlideOver,{...args,isOpen,children:args.children})]})},Default={render:Template,args:{children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Header,{title:"Panel Title",onClose:()=>{}}),(0,jsx_runtime.jsx)(Body,{children:(0,jsx_runtime.jsx)(Text.xv,{children:"Content"})})]})}},HeaderWithIcon={render:Template,args:{children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Header,{title:"Panel Title",titleIcon:chromicons_esm.Zrf,onClose:()=>{}}),(0,jsx_runtime.jsx)(Body,{children:(0,jsx_runtime.jsx)(Text.xv,{children:"Content"})})]})}},CustomHeader={render:Template,args:{children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(Header,{onClose:()=>{},children:[(0,jsx_runtime.jsx)(Avatar.qE,{name:"Chroma"}),(0,jsx_runtime.jsx)(Text.xv,{children:"Custom Header"})]}),(0,jsx_runtime.jsx)(Body,{children:(0,jsx_runtime.jsx)(Text.xv,{children:"Content"})})]})}},PanelActions={render:Template,args:{children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Header,{title:"Panel Title",onClose:()=>{}}),(0,jsx_runtime.jsx)(Body,{children:(0,jsx_runtime.jsx)(Text.xv,{children:"Content"})}),(0,jsx_runtime.jsxs)(Actions,{justify:"flex-end",children:[(0,jsx_runtime.jsx)(Button.zx,{variant:"text",children:"Cancel"}),(0,jsx_runtime.jsx)(Button.zx,{children:"Save"})]})]})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    children: <>\n        <Header title="Panel Title" onClose={() => {}} />\n        <Body>\n          <Text>Content</Text>\n        </Body>\n      </>\n  }\n}',...Default.parameters?.docs?.source}}},HeaderWithIcon.parameters={...HeaderWithIcon.parameters,docs:{...HeaderWithIcon.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    children: <>\n        <Header title="Panel Title" titleIcon={Settings} onClose={() => {}} />\n        <Body>\n          <Text>Content</Text>\n        </Body>\n      </>\n  }\n}',...HeaderWithIcon.parameters?.docs?.source}}},CustomHeader.parameters={...CustomHeader.parameters,docs:{...CustomHeader.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    children: <>\n        <Header onClose={() => {}}>\n          <Avatar name="Chroma" />\n          <Text>Custom Header</Text>\n        </Header>\n        <Body>\n          <Text>Content</Text>\n        </Body>\n      </>\n  }\n}',...CustomHeader.parameters?.docs?.source}}},PanelActions.parameters={...PanelActions.parameters,docs:{...PanelActions.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  args: {\n    children: <>\n        <Header title="Panel Title" onClose={() => {}} />\n        <Body>\n          <Text>Content</Text>\n        </Body>\n        <Actions justify="flex-end">\n          <Button variant="text">Cancel</Button>\n          <Button>Save</Button>\n        </Actions>\n      </>\n  }\n}',...PanelActions.parameters?.docs?.source}}};const __namedExportsOrder=["Default","HeaderWithIcon","CustomHeader","PanelActions"]},"./src/components/Avatar/Avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{qE:()=>Avatar});var clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react=__webpack_require__("./node_modules/react/index.js"),makeStyles=__webpack_require__("./src/styles/makeStyles.ts");const AvatarSizeContext=react.createContext({size:1});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const useStyles=(0,makeStyles.Z)((theme=>({root:{alignItems:"center",backgroundColor:theme.palette.primary.main,border:`${theme.pxToRem(1)} solid ${theme.palette.black[100]}`,borderRadius:9999,color:theme.palette.common.white,display:"inline-flex",flexShrink:0,justifyContent:"center",outline:"none",position:"relative",transition:"opacity 0.25s ease, border 0.25s ease",userSelect:"none","&:focus":{opacity:.85,border:`${theme.pxToRem(2)} solid ${theme.palette.black[700]}`}},size0:{fontSize:theme.typography.caption.fontSize,fontWeight:theme.typography.fontWeightBold,width:theme.pxToRem(22),height:theme.pxToRem(22)},size1:{fontSize:theme.typography.body1.fontSize,width:theme.pxToRem(32),height:theme.pxToRem(32)},size2:{fontSize:theme.typography.h5.fontSize,width:theme.pxToRem(42),height:theme.pxToRem(42)},img:{width:"100%",height:"100%",objectFit:"cover",maxWidth:"100%",verticalAlign:"middle",borderRadius:9999},defaultSrc:{fill:theme.palette.common.white},clickable:{cursor:"pointer","&:hover":{opacity:.85,border:`${theme.pxToRem(1)} solid ${theme.palette.black[700]}`}}})),{name:"ChromaAvatar"}),getInitials=name=>{if(!name)return"";const[firstName]=name.split(" ");return firstName?.charAt(0)?.toUpperCase()},Avatar=react.forwardRef(((_ref,ref)=>{let{className,children,name="",onClick,size=1,src,useDefaultSrc=!1,onError:bubbleError,...rootProps}=_ref;const classes=useStyles({}),[error,setError]=react.useState(!1);return react.useEffect((()=>{setError(!1)}),[src]),(0,jsx_runtime.jsxs)("div",{ref,className:(0,clsx_m.Z)(classes.root,{[classes.size0]:0===size,[classes.size1]:1===size,[classes.size2]:2===size},onClick&&classes.clickable,className),onClick,"aria-label":src||!name||useDefaultSrc?void 0:name,role:onClick?"button":void 0,tabIndex:onClick?0:void 0,...rootProps,children:[!error&&src||useDefaultSrc?null:getInitials(name),src&&!error&&!useDefaultSrc&&(0,jsx_runtime.jsx)("img",{onError:error=>{setError(!0),bubbleError&&bubbleError(error)},className:classes.img,src,alt:name}),useDefaultSrc&&(0,jsx_runtime.jsx)("svg",{className:(0,clsx_m.Z)(classes.img,classes.defaultSrc),fill:"currentColor",viewBox:"0 0 128 128",role:"img",children:(0,jsx_runtime.jsxs)("g",{children:[(0,jsx_runtime.jsx)("path",{d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),(0,jsx_runtime.jsx)("path",{d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"})]})}),children&&(0,jsx_runtime.jsx)(AvatarSizeContext.Provider,{value:{size},children})]})}));try{useStyles.displayName="useStyles",useStyles.__docgenInfo={description:"",displayName:"useStyles",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.tsx#useStyles"]={docgenInfo:useStyles.__docgenInfo,name:"useStyles",path:"src/components/Avatar/Avatar.tsx#useStyles"})}catch(__react_docgen_typescript_loader_error){}try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:'The Avatar component is used to represent a user. It displays a profile picture, their name initials, or fallback icon.\n\n### Accessibility\n\n- An `aria-label` is set with the `name`.\n- When the Avatar is clickable, the Avatar has `role="button"`.\n- When the Avatar is clickable, it has a `tabIndex={0}`.\n- The Avatar source image, when provided, has an `alt` set to the `name`.\n\n### Links\n\n- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Avatar/Avatar.tsx)\n- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Avatar/Avatar.stories.tsx)',displayName:"Avatar",props:{name:{defaultValue:{value:""},description:"",name:"name",required:!1,type:{name:"string"}},size:{defaultValue:{value:"1"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"}]}},src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}},useDefaultSrc:{defaultValue:{value:"false"},description:"",name:"useDefaultSrc",required:!1,type:{name:"boolean"}},onError:{defaultValue:null,description:"",name:"onError",required:!1,type:{name:"ReactEventHandler<HTMLImageElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"src/components/Avatar/Avatar.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{zx:()=>Button});var clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/styles/makeStyles.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/focus-visible/dist/focus-visible.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const useStyles=(0,_styles__WEBPACK_IMPORTED_MODULE_3__.Z)((theme=>({root:{background:theme.palette.primary.main,border:`${theme.pxToRem(1)} solid transparent`,borderRadius:theme.pxToRem(4),color:theme.palette.common.white,cursor:"pointer",display:"inline-block",whiteSpace:"nowrap",fontFamily:theme.typography.fontFamily,fontSize:theme.typography.button.fontSize,fontWeight:theme.typography.fontWeightBold,letterSpacing:theme.pxToRem(.5),lineHeight:theme.pxToRem(19),margin:0,maxHeight:theme.pxToRem(35),minWidth:theme.pxToRem(64),outline:"none",overflow:"hidden",paddingBottom:theme.pxToRem(7),paddingLeft:theme.pxToRem(11),paddingRight:theme.pxToRem(11),paddingTop:theme.pxToRem(7),position:"relative",textOverflow:"ellipsis",transition:"background-color 0.25s ease, color 0.25s ease, opacity 0.25s ease",userSelect:"none",verticalAlign:"middle","&:hover":{backgroundColor:theme.palette.primary[900],outline:"none"},"&:focus":{outline:"none"},"&:focus.focus-visible":{boxShadow:theme.boxShadows.focusVisible},"&:disabled":{cursor:"default",pointerEvents:"none",backgroundColor:theme.palette.primary.main,opacity:.44},"&::-moz-focus-inner":{border:"none"}},containedInverse:{backgroundColor:theme.palette.common.white,color:theme.palette.primary.main,"&:hover":{backgroundColor:theme.palette.common.white,color:theme.palette.primary.main,opacity:.85},"&:focus":{outline:"none"},"&:focus.focus-visible":{boxShadow:theme.boxShadows.focusVisibleInverse},"&:disabled, &[disabled]":{backgroundColor:theme.hexToRgba(theme.palette.common.white,.45),color:theme.palette.text.secondary}},outlined:{backgroundColor:"transparent",borderColor:theme.palette.primary.main,color:theme.palette.primary.main,transition:"border 0.25s ease, color 0.25s ease","&:hover":{backgroundColor:"transparent",borderColor:theme.palette.primary[900],color:theme.palette.primary[900]},"&:disabled":{backgroundColor:"transparent",borderColor:theme.palette.primary.main,color:theme.palette.primary.main,opacity:.44}},outlinedInverse:{borderColor:theme.palette.common.white,color:theme.palette.common.white,"&:hover":{color:theme.palette.common.white,opacity:.85,borderColor:theme.hexToRgba(theme.palette.common.white,.85)},"&:focus.focus-visible":{boxShadow:theme.boxShadows.focusVisibleInverse},"&:disabled, &[disabled]":{color:theme.hexToRgba(theme.palette.common.white,.45),opacity:1,borderColor:theme.hexToRgba(theme.palette.common.white,.45)}},text:{backgroundColor:"transparent",color:theme.palette.primary.main,transition:"color 0.25s ease","&:hover":{backgroundColor:"transparent",color:theme.palette.primary[900]},"&:disabled":{backgroundColor:"transparent",color:theme.palette.primary.main,opacity:.44}},textInverse:{color:theme.palette.common.white,"&:hover":{color:theme.palette.common.white,opacity:.85},"&:focus":{outline:"none"},"&:focus.focus-visible":{boxShadow:theme.boxShadows.focusVisibleInverse},"&:disabled, &[disabled]":{color:theme.palette.common.white,opacity:.44}},containedNegative:{backgroundColor:theme.palette.negative.main,color:theme.palette.common.white,"&:hover":{backgroundColor:theme.palette.negative.dark},"&:disabled, &[disabled]":{backgroundColor:theme.palette.negative.main,color:theme.palette.common.white}},containedPositive:{backgroundColor:theme.palette.positive.main,color:theme.palette.common.white,"&:hover":{backgroundColor:theme.palette.positive.dark},"&:disabled, &[disabled]":{backgroundColor:theme.palette.positive.main,color:theme.palette.common.white}},outlinedNegative:{borderColor:theme.palette.negative.main,color:theme.palette.negative.main,"&:hover":{borderColor:theme.palette.negative.dark,color:theme.palette.negative.dark},"&:disabled, &[disabled]":{borderColor:theme.palette.negative.main,color:theme.palette.negative.main}},outlinedPositive:{borderColor:theme.palette.positive.main,color:theme.palette.positive.main,"&:hover":{borderColor:theme.palette.positive.dark,color:theme.palette.positive.dark},"&:disabled, &[disabled]":{borderColor:theme.palette.positive.main,color:theme.palette.positive.main}},textNegative:{color:theme.palette.negative.main,"&:hover":{color:theme.palette.negative.dark},"&:disabled":{color:theme.palette.negative.main}},textPositive:{color:theme.palette.positive.main,"&:hover":{color:theme.palette.positive.dark},"&:disabled":{color:theme.palette.positive.main}},fullWidth:{width:"100%"},icon:{height:theme.spacing(2),marginRight:theme.spacing(1),position:"relative",top:theme.pxToRem(-1),verticalAlign:"middle",width:theme.spacing(2)},trailingIcon:{marginRight:0,marginLeft:theme.spacing(1)}})),{name:"ChromaButton"}),Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className,color="default",children,disabled,fullWidth,icon:Icon,trailingIcon:TrailingIcon,variant="contained",...rootProps}=_ref;const classes=useStyles({});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button",{ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(classes.root,{[classes.outlined]:"outlined"===variant,[classes.text]:"text"===variant},{[classes.containedInverse]:"contained"===variant&&"inverse"===color,[classes.outlinedInverse]:"outlined"===variant&&"inverse"===color,[classes.textInverse]:"text"===variant&&"inverse"===color,[classes.containedNegative]:"contained"===variant&&"negative"===color,[classes.outlinedNegative]:"outlined"===variant&&"negative"===color,[classes.textNegative]:"text"===variant&&"negative"===color,[classes.containedPositive]:"contained"===variant&&"positive"===color,[classes.outlinedPositive]:"outlined"===variant&&"positive"===color,[classes.textPositive]:"text"===variant&&"positive"===color},fullWidth&&classes.fullWidth,className),disabled:!!disabled||void 0,tabIndex:disabled?-1:0,type:"button",...rootProps,children:[!!Icon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon,{role:"img","aria-hidden":!0,className:classes.icon}),children,!!TrailingIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TrailingIcon,{role:"img","aria-hidden":!0,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(classes.icon,classes.trailingIcon)})]})}));try{useStyles.displayName="useStyles",useStyles.__docgenInfo={description:"",displayName:"useStyles",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#useStyles"]={docgenInfo:useStyles.__docgenInfo,name:"useStyles",path:"src/components/Button/Button.tsx#useStyles"})}catch(__react_docgen_typescript_loader_error){}try{Button.displayName="Button",Button.__docgenInfo={description:'A typical Button component.\n\n### Accessibility\n\n- The Button has `type="button"`.\n- Pressing `Tab` will set focus to the element\n- Pressing `Space` or `Enter` triggers the click action.\n- When the Button has focus, Space and Enter keys activates it.\n- When the Button is disabled, the tabIndex is set to `-1`.\n- The icon of Button has `role="img"` and `aria-hidden` attributes so that it\ndoes not get picked up by screen readers.\n\n### Links\n\n- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Button/Button.tsx)\n- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Button/Button.stories.tsx)',displayName:"Button",props:{color:{defaultValue:{value:"default"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"negative"'},{value:'"positive"'},{value:'"default"'},{value:'"inverse"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"MemoExoticComponent<(props: SVGProps<SVGSVGElement>) => Element>"}},variant:{defaultValue:{value:"contained"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"contained"'},{value:'"outlined"'}]}},trailingIcon:{defaultValue:null,description:"",name:"trailingIcon",required:!1,type:{name:"MemoExoticComponent<(props: SVGProps<SVGSVGElement>) => Element>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/use-sidecar/dist/es2015/medium.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>createSidecarMedium,s:()=>createMedium});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/use-sidecar/node_modules/tslib/tslib.es6.js");function ItoI(a){return a}function innerCreateMedium(defaults,middleware){void 0===middleware&&(middleware=ItoI);var buffer=[],assigned=!1;return{read:function(){if(assigned)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return buffer.length?buffer[buffer.length-1]:defaults},useMedium:function(data){var item=middleware(data,assigned);return buffer.push(item),function(){buffer=buffer.filter((function(x){return x!==item}))}},assignSyncMedium:function(cb){for(assigned=!0;buffer.length;){var cbs=buffer;buffer=[],cbs.forEach(cb)}buffer={push:function(x){return cb(x)},filter:function(){return buffer}}},assignMedium:function(cb){assigned=!0;var pendingQueue=[];if(buffer.length){var cbs=buffer;buffer=[],cbs.forEach(cb),pendingQueue=buffer}var executeQueue=function(){var cbs=pendingQueue;pendingQueue=[],cbs.forEach(cb)},cycle=function(){return Promise.resolve().then(executeQueue)};cycle(),buffer={push:function(x){pendingQueue.push(x),cycle()},filter:function(filter){return pendingQueue=pendingQueue.filter(filter),buffer}}}}}function createMedium(defaults,middleware){return void 0===middleware&&(middleware=ItoI),innerCreateMedium(defaults,middleware)}function createSidecarMedium(options){void 0===options&&(options={});var medium=innerCreateMedium(null);return medium.options=tslib__WEBPACK_IMPORTED_MODULE_0__.pi({async:!0,ssr:!1},options),medium}},"./node_modules/use-sidecar/node_modules/tslib/tslib.es6.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_T:()=>__rest,pi:()=>__assign});var __assign=function(){return __assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};function __rest(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&(t[p[i]]=s[p[i]])}return t}}}]);