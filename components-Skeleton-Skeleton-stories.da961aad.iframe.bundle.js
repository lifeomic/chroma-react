"use strict";(self.webpackChunk_lifeomic_chroma_react=self.webpackChunk_lifeomic_chroma_react||[]).push([[7060],{"./src/components/Skeleton/Skeleton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Skeleton_stories});__webpack_require__("./node_modules/react/index.js");var clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),makeStyles=__webpack_require__("./src/styles/makeStyles.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const useStyles=(0,makeStyles.Z)((theme=>({"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.4},"100%":{opacity:1}},"@keyframes shine":{"0%":{transform:"translateX(-100%)"},"50%":{transform:"translateX(100%)"},"100%":{transform:"translateX(100%)"}},root:{backgroundColor:theme.palette.graphite[200]},fullHeight:{height:"100%"},fullWidth:{width:"100%"},pulseAnimation:{animation:"$pulse 1.5s ease-in-out 0.5s infinite"},shineAnimation:{overflow:"hidden",position:"relative","&::after":{animation:"$shine 1.6s linear 0.5s infinite",background:`linear-gradient(90deg, transparent, ${theme.palette.graphite[100]}, transparent)`,bottom:0,content:"''",left:0,position:"absolute",right:0,top:0}},noAnimation:{},circle:{borderRadius:"50%"},rectangle:{borderRadius:theme.shape.borderRadius}})),{name:"ChromaSkeleton"}),Skeleton=_ref=>{let{animation="pulse",className,fullHeight,fullWidth,height,variant="rectangle",width,...rootProps}=_ref;const classes=useStyles({});return(0,jsx_runtime.jsx)("span",{"aria-busy":!0,className:(0,clsx_m.Z)(classes.root,{[classes.pulseAnimation]:"pulse"===animation,[classes.shineAnimation]:"shine"===animation,[classes.noAnimation]:"none"===animation},{[classes.circle]:"circle"===variant,[classes.rectangle]:"rectangle"===variant},fullHeight&&classes.fullHeight,fullWidth&&classes.fullWidth,className),style:{height,width},...rootProps})};Skeleton.displayName="Skeleton";try{useStyles.displayName="useStyles",useStyles.__docgenInfo={description:"",displayName:"useStyles",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Skeleton/Skeleton.tsx#useStyles"]={docgenInfo:useStyles.__docgenInfo,name:"useStyles",path:"src/components/Skeleton/Skeleton.tsx#useStyles"})}catch(__react_docgen_typescript_loader_error){}try{Skeleton.displayName="Skeleton",Skeleton.__docgenInfo={description:"The Skeleton component is used as a placeholder preview before the data gets loaded to reduce load-time frustration.\n\n### Accessibility\n\n- The component has the [`aria-busy`](https://developer.mozilla.org/en-US/docs/Web/API/Element/ariaBusy) attribute.\n\n### Links\n\n- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Skeleton/Skeleton.tsx)\n- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Skeleton/Skeleton.stories.tsx)",displayName:"Skeleton",props:{fullHeight:{defaultValue:null,description:"",name:"fullHeight",required:!1,type:{name:"boolean"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},animation:{defaultValue:{value:"pulse"},description:"",name:"animation",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"pulse"'},{value:'"shine"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"rectangle"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"rectangle"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Skeleton/Skeleton.tsx#Skeleton"]={docgenInfo:Skeleton.__docgenInfo,name:"Skeleton",path:"src/components/Skeleton/Skeleton.tsx#Skeleton"})}catch(__react_docgen_typescript_loader_error){}const Skeleton_stories={component:Skeleton,args:{height:30,width:300},decorators:[story=>(0,jsx_runtime.jsx)("div",{style:{display:"flex",flex:1,width:"100%",height:"100%"},children:story()})]},Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/styles/makeStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>makeStyles});var _mui_styles__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/styles/makeStyles/makeStyles.js");const makeStyles=(styles,options)=>(0,_mui_styles__WEBPACK_IMPORTED_MODULE_0__.Z)(styles,options)}}]);