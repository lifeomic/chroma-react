(self.webpackChunk_lifeomic_chroma_react=self.webpackChunk_lifeomic_chroma_react||[]).push([[1747],{"./src/components/Button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Color:()=>Color,Default:()=>Default,Disabled:()=>Disabled,FullWidth:()=>FullWidth,Icon:()=>Icon,InverseBlue:()=>InverseBlue,InverseDark:()=>InverseDark,Outlined:()=>Outlined,TextOnly:()=>TextOnly,TrailingIcon:()=>TrailingIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Button/Button.tsx"),_lifeomic_chromicons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@lifeomic/chromicons/dist/chromicons.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:_Button__WEBPACK_IMPORTED_MODULE_3__.zx,argTypes:{onClick:{action:"clicked"}}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.zx,{...args,children:"Button"});Template.displayName="Template";const Default={render:Template},Outlined={render:Template,args:{variant:"outlined"}},TextOnly={render:Template,args:{variant:"text"}},Disabled={render:Template,args:{disabled:!0}},Icon={render:Template,parameters:{docs:{description:{story:"The Button component takes an `icon` prop. It's recommended to use the [Chromicons](https://lifeomic.github.io/chromicons.com/) icon set."}}},args:{icon:_lifeomic_chromicons__WEBPACK_IMPORTED_MODULE_1__.I8b}},TrailingIcon={render:Template,parameters:{docs:{description:{story:"The Button component takes an `icon` prop. It's recommended to use the [Chromicons](https://lifeomic.github.io/chromicons.com/) icon set."}}},args:{trailingIcon:_lifeomic_chromicons__WEBPACK_IMPORTED_MODULE_1__._ME}},Color={render:Template,args:{color:"negative"},parameters:{docs:{description:{story:"The button component takes multiple different colors, for different styled buttons. Typically, the `inverse` color is used when a button needs to be on a dark-colored background. When the action of the button will have a negative or positive impact, `negative` or `positive` color are used."}}}},FullWidth={render:Template,args:{fullWidth:!0}},InverseDark={render:Template,parameters:{backgrounds:{default:"dark"}},args:{color:"inverse"}},InverseBlue={render:Template,parameters:{backgrounds:{default:"blue"}},args:{color:"inverse"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: Template\n}",...Default.parameters?.docs?.source}}},Outlined.parameters={...Outlined.parameters,docs:{...Outlined.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    variant: 'outlined'\n  }\n}",...Outlined.parameters?.docs?.source}}},TextOnly.parameters={...TextOnly.parameters,docs:{...TextOnly.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    variant: 'text'\n  }\n}",...TextOnly.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},Icon.parameters={...Icon.parameters,docs:{...Icon.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: "The Button component takes an `icon` prop. It\'s recommended to use the [Chromicons](https://lifeomic.github.io/chromicons.com/) icon set."\n      }\n    }\n  },\n  args: {\n    icon: Edit\n  }\n}',...Icon.parameters?.docs?.source}}},TrailingIcon.parameters={...TrailingIcon.parameters,docs:{...TrailingIcon.parameters?.docs,source:{originalSource:'{\n  render: Template,\n  parameters: {\n    docs: {\n      description: {\n        story: "The Button component takes an `icon` prop. It\'s recommended to use the [Chromicons](https://lifeomic.github.io/chromicons.com/) icon set."\n      }\n    }\n  },\n  args: {\n    trailingIcon: ChevronDown\n  }\n}',...TrailingIcon.parameters?.docs?.source}}},Color.parameters={...Color.parameters,docs:{...Color.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    color: 'negative'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'The button component takes multiple different colors, for different styled ' + 'buttons. Typically, the `inverse` color is used when a button needs to be ' + 'on a dark-colored background. When the action of the button will have a ' + 'negative or positive impact, `negative` or `positive` color are used.'\n      }\n    }\n  }\n}",...Color.parameters?.docs?.source}}},FullWidth.parameters={...FullWidth.parameters,docs:{...FullWidth.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    fullWidth: true\n  }\n}",...FullWidth.parameters?.docs?.source}}},InverseDark.parameters={...InverseDark.parameters,docs:{...InverseDark.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  parameters: {\n    backgrounds: {\n      default: 'dark'\n    }\n  },\n  args: {\n    color: 'inverse'\n  }\n}",...InverseDark.parameters?.docs?.source}}},InverseBlue.parameters={...InverseBlue.parameters,docs:{...InverseBlue.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  parameters: {\n    backgrounds: {\n      default: 'blue'\n    }\n  },\n  args: {\n    color: 'inverse'\n  }\n}",...InverseBlue.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Outlined","TextOnly","Disabled","Icon","TrailingIcon","Color","FullWidth","InverseDark","InverseBlue"]},"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{zx:()=>Button});var clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/styles/makeStyles.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/focus-visible/dist/focus-visible.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const useStyles=(0,_styles__WEBPACK_IMPORTED_MODULE_3__.Z)((theme=>({root:{background:theme.palette.primary.main,border:`${theme.pxToRem(1)} solid transparent`,borderRadius:theme.pxToRem(4),color:theme.palette.common.white,cursor:"pointer",display:"inline-block",whiteSpace:"nowrap",fontFamily:theme.typography.fontFamily,fontSize:theme.typography.button.fontSize,fontWeight:theme.typography.fontWeightBold,letterSpacing:theme.pxToRem(.5),lineHeight:theme.pxToRem(19),margin:0,maxHeight:theme.pxToRem(35),minWidth:theme.pxToRem(64),outline:"none",overflow:"hidden",paddingBottom:theme.pxToRem(7),paddingLeft:theme.pxToRem(11),paddingRight:theme.pxToRem(11),paddingTop:theme.pxToRem(7),position:"relative",textOverflow:"ellipsis",transition:"background-color 0.25s ease, color 0.25s ease, opacity 0.25s ease",userSelect:"none",verticalAlign:"middle","&:hover":{backgroundColor:theme.palette.primary[900],outline:"none"},"&:focus":{outline:"none"},"&:focus.focus-visible":{boxShadow:theme.boxShadows.focusVisible},"&:disabled":{cursor:"default",pointerEvents:"none",backgroundColor:theme.palette.primary.main,opacity:.44},"&::-moz-focus-inner":{border:"none"}},containedInverse:{backgroundColor:theme.palette.common.white,color:theme.palette.primary.main,"&:hover":{backgroundColor:theme.palette.common.white,color:theme.palette.primary.main,opacity:.85},"&:focus":{outline:"none"},"&:focus.focus-visible":{boxShadow:theme.boxShadows.focusVisibleInverse},"&:disabled, &[disabled]":{backgroundColor:theme.hexToRgba(theme.palette.common.white,.45),color:theme.palette.text.secondary}},outlined:{backgroundColor:"transparent",borderColor:theme.palette.primary.main,color:theme.palette.primary.main,transition:"border 0.25s ease, color 0.25s ease","&:hover":{backgroundColor:"transparent",borderColor:theme.palette.primary[900],color:theme.palette.primary[900]},"&:disabled":{backgroundColor:"transparent",borderColor:theme.palette.primary.main,color:theme.palette.primary.main,opacity:.44}},outlinedInverse:{borderColor:theme.palette.common.white,color:theme.palette.common.white,"&:hover":{color:theme.palette.common.white,opacity:.85,borderColor:theme.hexToRgba(theme.palette.common.white,.85)},"&:focus.focus-visible":{boxShadow:theme.boxShadows.focusVisibleInverse},"&:disabled, &[disabled]":{color:theme.hexToRgba(theme.palette.common.white,.45),opacity:1,borderColor:theme.hexToRgba(theme.palette.common.white,.45)}},text:{backgroundColor:"transparent",color:theme.palette.primary.main,transition:"color 0.25s ease","&:hover":{backgroundColor:"transparent",color:theme.palette.primary[900]},"&:disabled":{backgroundColor:"transparent",color:theme.palette.primary.main,opacity:.44}},textInverse:{color:theme.palette.common.white,"&:hover":{color:theme.palette.common.white,opacity:.85},"&:focus":{outline:"none"},"&:focus.focus-visible":{boxShadow:theme.boxShadows.focusVisibleInverse},"&:disabled, &[disabled]":{color:theme.palette.common.white,opacity:.44}},containedNegative:{backgroundColor:theme.palette.negative.main,color:theme.palette.common.white,"&:hover":{backgroundColor:theme.palette.negative.dark},"&:disabled, &[disabled]":{backgroundColor:theme.palette.negative.main,color:theme.palette.common.white}},containedPositive:{backgroundColor:theme.palette.positive.main,color:theme.palette.common.white,"&:hover":{backgroundColor:theme.palette.positive.dark},"&:disabled, &[disabled]":{backgroundColor:theme.palette.positive.main,color:theme.palette.common.white}},outlinedNegative:{borderColor:theme.palette.negative.main,color:theme.palette.negative.main,"&:hover":{borderColor:theme.palette.negative.dark,color:theme.palette.negative.dark},"&:disabled, &[disabled]":{borderColor:theme.palette.negative.main,color:theme.palette.negative.main}},outlinedPositive:{borderColor:theme.palette.positive.main,color:theme.palette.positive.main,"&:hover":{borderColor:theme.palette.positive.dark,color:theme.palette.positive.dark},"&:disabled, &[disabled]":{borderColor:theme.palette.positive.main,color:theme.palette.positive.main}},textNegative:{color:theme.palette.negative.main,"&:hover":{color:theme.palette.negative.dark},"&:disabled":{color:theme.palette.negative.main}},textPositive:{color:theme.palette.positive.main,"&:hover":{color:theme.palette.positive.dark},"&:disabled":{color:theme.palette.positive.main}},fullWidth:{width:"100%"},icon:{height:theme.spacing(2),marginRight:theme.spacing(1),position:"relative",top:theme.pxToRem(-1),verticalAlign:"middle",width:theme.spacing(2)},trailingIcon:{marginRight:0,marginLeft:theme.spacing(1)}})),{name:"ChromaButton"}),Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className,color="default",children,disabled,fullWidth,icon:Icon,trailingIcon:TrailingIcon,variant="contained",...rootProps}=_ref;const classes=useStyles({});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button",{ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(classes.root,{[classes.outlined]:"outlined"===variant,[classes.text]:"text"===variant},{[classes.containedInverse]:"contained"===variant&&"inverse"===color,[classes.outlinedInverse]:"outlined"===variant&&"inverse"===color,[classes.textInverse]:"text"===variant&&"inverse"===color,[classes.containedNegative]:"contained"===variant&&"negative"===color,[classes.outlinedNegative]:"outlined"===variant&&"negative"===color,[classes.textNegative]:"text"===variant&&"negative"===color,[classes.containedPositive]:"contained"===variant&&"positive"===color,[classes.outlinedPositive]:"outlined"===variant&&"positive"===color,[classes.textPositive]:"text"===variant&&"positive"===color},fullWidth&&classes.fullWidth,className),disabled:!!disabled||void 0,tabIndex:disabled?-1:0,type:"button",...rootProps,children:[!!Icon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon,{role:"img","aria-hidden":!0,className:classes.icon}),children,!!TrailingIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TrailingIcon,{role:"img","aria-hidden":!0,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(classes.icon,classes.trailingIcon)})]})}));try{useStyles.displayName="useStyles",useStyles.__docgenInfo={description:"",displayName:"useStyles",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#useStyles"]={docgenInfo:useStyles.__docgenInfo,name:"useStyles",path:"src/components/Button/Button.tsx#useStyles"})}catch(__react_docgen_typescript_loader_error){}try{Button.displayName="Button",Button.__docgenInfo={description:'A typical Button component.\n\n### Accessibility\n\n- The Button has `type="button"`.\n- Pressing `Tab` will set focus to the element\n- Pressing `Space` or `Enter` triggers the click action.\n- When the Button has focus, Space and Enter keys activates it.\n- When the Button is disabled, the tabIndex is set to `-1`.\n- The icon of Button has `role="img"` and `aria-hidden` attributes so that it\ndoes not get picked up by screen readers.\n\n### Links\n\n- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Button/Button.tsx)\n- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Button/Button.stories.tsx)',displayName:"Button",props:{color:{defaultValue:{value:"default"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"negative"'},{value:'"positive"'},{value:'"default"'},{value:'"inverse"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"MemoExoticComponent<(props: SVGProps<SVGSVGElement>) => Element>"}},variant:{defaultValue:{value:"contained"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"contained"'},{value:'"outlined"'}]}},trailingIcon:{defaultValue:null,description:"",name:"trailingIcon",required:!1,type:{name:"MemoExoticComponent<(props: SVGProps<SVGSVGElement>) => Element>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/styles/makeStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>makeStyles});var _mui_styles__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/styles/makeStyles/makeStyles.js");const makeStyles=(styles,options)=>(0,_mui_styles__WEBPACK_IMPORTED_MODULE_0__.Z)(styles,options)},"./node_modules/focus-visible/dist/focus-visible.js":function(){!function(){"use strict";function applyFocusVisiblePolyfill(scope){var hadKeyboardEvent=!0,hadFocusVisibleRecently=!1,hadFocusVisibleRecentlyTimeout=null,inputTypesWhitelist={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function isValidFocusTarget(el){return!!(el&&el!==document&&"HTML"!==el.nodeName&&"BODY"!==el.nodeName&&"classList"in el&&"contains"in el.classList)}function focusTriggersKeyboardModality(el){var type=el.type,tagName=el.tagName;return!("INPUT"!==tagName||!inputTypesWhitelist[type]||el.readOnly)||"TEXTAREA"===tagName&&!el.readOnly||!!el.isContentEditable}function addFocusVisibleClass(el){el.classList.contains("focus-visible")||(el.classList.add("focus-visible"),el.setAttribute("data-focus-visible-added",""))}function removeFocusVisibleClass(el){el.hasAttribute("data-focus-visible-added")&&(el.classList.remove("focus-visible"),el.removeAttribute("data-focus-visible-added"))}function onKeyDown(e){e.metaKey||e.altKey||e.ctrlKey||(isValidFocusTarget(scope.activeElement)&&addFocusVisibleClass(scope.activeElement),hadKeyboardEvent=!0)}function onPointerDown(e){hadKeyboardEvent=!1}function onFocus(e){isValidFocusTarget(e.target)&&(hadKeyboardEvent||focusTriggersKeyboardModality(e.target))&&addFocusVisibleClass(e.target)}function onBlur(e){isValidFocusTarget(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(hadFocusVisibleRecently=!0,window.clearTimeout(hadFocusVisibleRecentlyTimeout),hadFocusVisibleRecentlyTimeout=window.setTimeout((function(){hadFocusVisibleRecently=!1}),100),removeFocusVisibleClass(e.target))}function onVisibilityChange(e){"hidden"===document.visibilityState&&(hadFocusVisibleRecently&&(hadKeyboardEvent=!0),addInitialPointerMoveListeners())}function addInitialPointerMoveListeners(){document.addEventListener("mousemove",onInitialPointerMove),document.addEventListener("mousedown",onInitialPointerMove),document.addEventListener("mouseup",onInitialPointerMove),document.addEventListener("pointermove",onInitialPointerMove),document.addEventListener("pointerdown",onInitialPointerMove),document.addEventListener("pointerup",onInitialPointerMove),document.addEventListener("touchmove",onInitialPointerMove),document.addEventListener("touchstart",onInitialPointerMove),document.addEventListener("touchend",onInitialPointerMove)}function removeInitialPointerMoveListeners(){document.removeEventListener("mousemove",onInitialPointerMove),document.removeEventListener("mousedown",onInitialPointerMove),document.removeEventListener("mouseup",onInitialPointerMove),document.removeEventListener("pointermove",onInitialPointerMove),document.removeEventListener("pointerdown",onInitialPointerMove),document.removeEventListener("pointerup",onInitialPointerMove),document.removeEventListener("touchmove",onInitialPointerMove),document.removeEventListener("touchstart",onInitialPointerMove),document.removeEventListener("touchend",onInitialPointerMove)}function onInitialPointerMove(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(hadKeyboardEvent=!1,removeInitialPointerMoveListeners())}document.addEventListener("keydown",onKeyDown,!0),document.addEventListener("mousedown",onPointerDown,!0),document.addEventListener("pointerdown",onPointerDown,!0),document.addEventListener("touchstart",onPointerDown,!0),document.addEventListener("visibilitychange",onVisibilityChange,!0),addInitialPointerMoveListeners(),scope.addEventListener("focus",onFocus,!0),scope.addEventListener("blur",onBlur,!0),scope.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&scope.host?scope.host.setAttribute("data-js-focus-visible",""):scope.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var event;window.applyFocusVisiblePolyfill=applyFocusVisiblePolyfill;try{event=new CustomEvent("focus-visible-polyfill-ready")}catch(error){(event=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(event)}"undefined"!=typeof document&&applyFocusVisiblePolyfill(document)}()}}]);