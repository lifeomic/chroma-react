(self.webpackChunk_lifeomic_chroma_react=self.webpackChunk_lifeomic_chroma_react||[]).push([[6256],{"./src/components/IconButton/IconButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Color:()=>Color,Default:()=>Default,Disabled:()=>Disabled,Icon:()=>Icon,InverseBlue:()=>InverseBlue,InverseDark:()=>InverseDark,Size:()=>Size,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _IconButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/IconButton/IconButton.tsx"),_lifeomic_chromicons__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@lifeomic/chromicons/dist/chromicons.esm.js");const __WEBPACK_DEFAULT_EXPORT__={component:_IconButton__WEBPACK_IMPORTED_MODULE_1__.hU,args:{"aria-label":"Edit",icon:_lifeomic_chromicons__WEBPACK_IMPORTED_MODULE_0__.I8b},argTypes:{disabled:{description:"`boolean`",table:{defaultValue:{summary:!1}},control:{type:"boolean"}},onClick:{action:"clicked"}}},Default={},Icon={parameters:{docs:{description:{story:'For a list of available icons, see our <a href="https://lifeomic.github.io/chromicons.com/">Chrōmicons catalog</a>.'}}},args:{icon:_lifeomic_chromicons__WEBPACK_IMPORTED_MODULE_0__.Zrf}},Size={args:{size:0}},Color={args:{color:"negative"}},Disabled={args:{disabled:!0}},InverseDark={parameters:{backgrounds:{default:"dark"}},args:{color:"inverse"}},InverseBlue={parameters:{backgrounds:{default:"blue"}},args:{color:"inverse"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},Icon.parameters={...Icon.parameters,docs:{...Icon.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: 'For a list of available icons, see our <a href=\"https://lifeomic.github.io/chromicons.com/\">Chrōmicons catalog</a>.'\n      }\n    }\n  },\n  args: {\n    icon: Settings\n  }\n}",...Icon.parameters?.docs?.source}}},Size.parameters={...Size.parameters,docs:{...Size.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 0\n  }\n}",...Size.parameters?.docs?.source}}},Color.parameters={...Color.parameters,docs:{...Color.parameters?.docs,source:{originalSource:"{\n  args: {\n    color: 'negative'\n  }\n}",...Color.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},InverseDark.parameters={...InverseDark.parameters,docs:{...InverseDark.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    backgrounds: {\n      default: 'dark'\n    }\n  },\n  args: {\n    color: 'inverse'\n  }\n}",...InverseDark.parameters?.docs?.source}}},InverseBlue.parameters={...InverseBlue.parameters,docs:{...InverseBlue.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    backgrounds: {\n      default: 'blue'\n    }\n  },\n  args: {\n    color: 'inverse'\n  }\n}",...InverseBlue.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Icon","Size","Color","Disabled","InverseDark","InverseBlue"]},"./src/components/IconButton/IconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{hU:()=>IconButton});var clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/styles/makeStyles.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/focus-visible/dist/focus-visible.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const useStyles=(0,_styles__WEBPACK_IMPORTED_MODULE_3__.Z)((theme=>({root:{alignItems:"center",backgroundColor:"transparent",border:0,color:theme.palette.black[500],cursor:"pointer",display:"inline-flex",flex:"0 0 auto",justifyContent:"center",margin:0,outline:"none",padding:theme.spacing(1.5),position:"relative",transition:"color 0.25s ease, opacity 0.25s ease",userSelect:"none","&:hover":{color:theme.palette.primary.main},"&:focus":{borderRadius:"9999px",color:theme.palette.primary.main,outline:"none","&.focus-visible":{boxShadow:theme.boxShadows.focusVisible}},"&:disabled":{cursor:"default",pointerEvents:"none",color:theme.palette.black[200]}},inverse:{background:"transparent",color:theme.palette.common.white,"&:hover":{color:theme.palette.common.white,opacity:.85},"&:focus":{color:theme.palette.common.white,opacity:.75,"&.focus-visible":{boxShadow:theme.boxShadows.focusVisibleInverse}},"&:disabled":{color:theme.hexToRgba(theme.palette.common.white,.45)}},negative:{color:theme.palette.negative.main,"&:hover, &:focus":{color:theme.palette.negative.dark},"&:disabled":{color:theme.palette.negative.main,opacity:.44}},positive:{color:theme.palette.positive.main,"&:hover, &:focus":{color:theme.palette.positive.dark},"&:disabled":{color:theme.palette.positive.main,opacity:.44}},size0:{"& > svg":{width:18,height:18}},size1:{"& > svg":{width:24,height:24}},paddingTop0:{paddingTop:0},paddingTop1:{paddingTop:theme.spacing(.5)},paddingTop2:{paddingTop:theme.spacing(1)},paddingTop3:{paddingTop:theme.spacing(1.5)},paddingBottom0:{paddingBottom:0},paddingBottom1:{paddingBottom:theme.spacing(.5)},paddingBottom2:{paddingBottom:theme.spacing(1)},paddingBottom3:{paddingBottom:theme.spacing(1.5)},paddingLeft0:{paddingLeft:0},paddingLeft1:{paddingLeft:theme.spacing(.5)},paddingLeft2:{paddingLeft:theme.spacing(1)},paddingLeft3:{paddingLeft:theme.spacing(1.5)},paddingRight0:{paddingRight:0},paddingRight1:{paddingRight:theme.spacing(.5)},paddingRight2:{paddingRight:theme.spacing(1)},paddingRight3:{paddingRight:theme.spacing(1.5)}})),{name:"ChromaIconButton"}),IconButton=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{"aria-label":ariaLabel,className,color="default",disabled,icon:Icon,paddingTop,paddingBottom,paddingLeft,paddingRight,size=1,...rootProps}=_ref;const classes=useStyles({});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{ref,"aria-label":ariaLabel,type:"button",className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(classes.root,{[classes.size0]:0===size},{[classes.inverse]:"inverse"===color,[classes.negative]:"negative"===color,[classes.positive]:"positive"===color},{[classes.paddingTop0]:0===paddingTop,[classes.paddingTop1]:1===paddingTop,[classes.paddingTop2]:2===paddingTop,[classes.paddingTop3]:3===paddingTop},{[classes.paddingBottom0]:0===paddingBottom,[classes.paddingBottom1]:1===paddingBottom,[classes.paddingBottom2]:2===paddingBottom,[classes.paddingBottom3]:3===paddingBottom},{[classes.paddingLeft0]:0===paddingLeft,[classes.paddingLeft1]:1===paddingLeft,[classes.paddingLeft2]:2===paddingLeft,[classes.paddingLeft3]:3===paddingLeft},{[classes.paddingRight0]:0===paddingRight,[classes.paddingRight1]:1===paddingRight,[classes.paddingRight2]:2===paddingRight,[classes.paddingRight3]:3===paddingRight},className),disabled,tabIndex:disabled?-1:0,...rootProps,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon,{role:"img","aria-hidden":!0})})}));try{useStyles.displayName="useStyles",useStyles.__docgenInfo={description:"",displayName:"useStyles",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconButton/IconButton.tsx#useStyles"]={docgenInfo:useStyles.__docgenInfo,name:"useStyles",path:"src/components/IconButton/IconButton.tsx#useStyles"})}catch(__react_docgen_typescript_loader_error){}try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"A Button element with an icon only. Since it's only an icon that's rendered,\nit's required to pass the `aria-label` prop so that screen readers can give\nmeaning to the button.\n\n### Accessibility\n\n- The Icon Button has `type=\"button\"`.\n  - Pressing `Tab` will set focus to the element\n  - Pressing `Space` or `Enter` triggers the click action.\n\n### Links\n\n- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/IconButton/IconButton.tsx)\n- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/IconButton/IconButton.stories.tsx)",displayName:"IconButton",props:{"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element.",name:"aria-label",required:!0,type:{name:"string"}},color:{defaultValue:{value:"default"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"negative"'},{value:'"positive"'},{value:'"default"'},{value:'"inverse"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:'NamedExoticComponent<Pick<SVGProps<SVGSVGElement>, "string" | "style" | "clipPath" | "filter" | "mask" | "path" | "name" | "mode" | "className" | "children" | "aria-label" | ... 457 more ... | "zoomAndPan"> & { ...; }> & { ...; }'}},size:{defaultValue:{value:"1"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"}]}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"}]}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"}]}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconButton/IconButton.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"src/components/IconButton/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/styles/makeStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>makeStyles});var _mui_styles__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/styles/makeStyles/makeStyles.js");const makeStyles=(styles,options)=>(0,_mui_styles__WEBPACK_IMPORTED_MODULE_0__.Z)(styles,options)},"./node_modules/focus-visible/dist/focus-visible.js":function(){!function(){"use strict";function applyFocusVisiblePolyfill(scope){var hadKeyboardEvent=!0,hadFocusVisibleRecently=!1,hadFocusVisibleRecentlyTimeout=null,inputTypesWhitelist={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function isValidFocusTarget(el){return!!(el&&el!==document&&"HTML"!==el.nodeName&&"BODY"!==el.nodeName&&"classList"in el&&"contains"in el.classList)}function focusTriggersKeyboardModality(el){var type=el.type,tagName=el.tagName;return!("INPUT"!==tagName||!inputTypesWhitelist[type]||el.readOnly)||"TEXTAREA"===tagName&&!el.readOnly||!!el.isContentEditable}function addFocusVisibleClass(el){el.classList.contains("focus-visible")||(el.classList.add("focus-visible"),el.setAttribute("data-focus-visible-added",""))}function removeFocusVisibleClass(el){el.hasAttribute("data-focus-visible-added")&&(el.classList.remove("focus-visible"),el.removeAttribute("data-focus-visible-added"))}function onKeyDown(e){e.metaKey||e.altKey||e.ctrlKey||(isValidFocusTarget(scope.activeElement)&&addFocusVisibleClass(scope.activeElement),hadKeyboardEvent=!0)}function onPointerDown(e){hadKeyboardEvent=!1}function onFocus(e){isValidFocusTarget(e.target)&&(hadKeyboardEvent||focusTriggersKeyboardModality(e.target))&&addFocusVisibleClass(e.target)}function onBlur(e){isValidFocusTarget(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(hadFocusVisibleRecently=!0,window.clearTimeout(hadFocusVisibleRecentlyTimeout),hadFocusVisibleRecentlyTimeout=window.setTimeout((function(){hadFocusVisibleRecently=!1}),100),removeFocusVisibleClass(e.target))}function onVisibilityChange(e){"hidden"===document.visibilityState&&(hadFocusVisibleRecently&&(hadKeyboardEvent=!0),addInitialPointerMoveListeners())}function addInitialPointerMoveListeners(){document.addEventListener("mousemove",onInitialPointerMove),document.addEventListener("mousedown",onInitialPointerMove),document.addEventListener("mouseup",onInitialPointerMove),document.addEventListener("pointermove",onInitialPointerMove),document.addEventListener("pointerdown",onInitialPointerMove),document.addEventListener("pointerup",onInitialPointerMove),document.addEventListener("touchmove",onInitialPointerMove),document.addEventListener("touchstart",onInitialPointerMove),document.addEventListener("touchend",onInitialPointerMove)}function removeInitialPointerMoveListeners(){document.removeEventListener("mousemove",onInitialPointerMove),document.removeEventListener("mousedown",onInitialPointerMove),document.removeEventListener("mouseup",onInitialPointerMove),document.removeEventListener("pointermove",onInitialPointerMove),document.removeEventListener("pointerdown",onInitialPointerMove),document.removeEventListener("pointerup",onInitialPointerMove),document.removeEventListener("touchmove",onInitialPointerMove),document.removeEventListener("touchstart",onInitialPointerMove),document.removeEventListener("touchend",onInitialPointerMove)}function onInitialPointerMove(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(hadKeyboardEvent=!1,removeInitialPointerMoveListeners())}document.addEventListener("keydown",onKeyDown,!0),document.addEventListener("mousedown",onPointerDown,!0),document.addEventListener("pointerdown",onPointerDown,!0),document.addEventListener("touchstart",onPointerDown,!0),document.addEventListener("visibilitychange",onVisibilityChange,!0),addInitialPointerMoveListeners(),scope.addEventListener("focus",onFocus,!0),scope.addEventListener("blur",onBlur,!0),scope.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&scope.host?scope.host.setAttribute("data-js-focus-visible",""):scope.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var event;window.applyFocusVisiblePolyfill=applyFocusVisiblePolyfill;try{event=new CustomEvent("focus-visible-polyfill-ready")}catch(error){(event=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(event)}"undefined"!=typeof document&&applyFocusVisiblePolyfill(document)}()}}]);