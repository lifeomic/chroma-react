"use strict";(self.webpackChunk_lifeomic_chroma_react=self.webpackChunk_lifeomic_chroma_react||[]).push([[9897],{"./src/components/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{xv:()=>Text});var clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/styles/makeStyles.ts"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/styles/createTypography.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const useStyles=(0,_styles__WEBPACK_IMPORTED_MODULE_2__.Z)((theme=>({root:{color:theme.palette.black.main,fontFamily:theme.typography.fontFamily,margin:0},inverseColor:{color:theme.palette.common.white},negativeColor:{color:theme.palette.negative.main},positiveColor:{color:theme.palette.positive.main},headline:{fontSize:theme.pxToRem(20),letterSpacing:theme.pxToRem(.5),lineHeight:theme.pxToRem(28)},body:{fontSize:_styles__WEBPACK_IMPORTED_MODULE_3__.CH.body,lineHeight:theme.pxToRem(26)},subbody:{fontSize:theme.pxToRem(14),lineHeight:theme.pxToRem(22)},table:{fontSize:theme.pxToRem(14),lineHeight:theme.pxToRem(22)},caption:{fontSize:_styles__WEBPACK_IMPORTED_MODULE_3__.CH.caption,letterSpacing:theme.pxToRem(.5),lineHeight:theme.pxToRem(20)},button:{fontSize:_styles__WEBPACK_IMPORTED_MODULE_3__.CH.button,letterSpacing:theme.pxToRem(.5)},tooltip:{fontSize:_styles__WEBPACK_IMPORTED_MODULE_3__.CH.tooltip,letterSpacing:theme.pxToRem(.5),lineHeight:theme.pxToRem(18)},code:{fontFamily:theme.typography.fontFamilyMonospace,fontSize:_styles__WEBPACK_IMPORTED_MODULE_3__.CH.body,lineHeight:theme.pxToRem(26),letterSpacing:"normal"},familySecondary:{fontFamily:theme.typography.fontFamilySecondary},familyMonospace:{fontFamily:theme.typography.fontFamilyMonospace},weightLight:{fontWeight:theme.typography.fontWeightLight},weightRegular:{fontWeight:theme.typography.fontWeightRegular},weightBold:{fontWeight:theme.typography.fontWeightBold},marginBottom:{marginBottom:theme.spacing(1)},alignCenter:{textAlign:"center"},alignJustify:{textAlign:"justify"},alignLeft:{textAlign:"left"},alignRight:{textAlign:"right"}})),{name:"ChromaText"}),Text=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{align,children,className,color="default",family="primary",marginBottom,size="body",useH1=!1,weight="regular",...rootProps}=_ref;const classes=useStyles({}),Component=useH1?"h1":"headline"===size?"h6":"p";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(classes.root,{[classes.headline]:"headline"===size,[classes.body]:"body"===size,[classes.subbody]:"subbody"===size,[classes.table]:"table"===size,[classes.caption]:"caption"===size,[classes.button]:"button"===size,[classes.tooltip]:"tooltip"===size,[classes.code]:"code"===size},{[classes.familySecondary]:"secondary"===family,[classes.familyMonospace]:"monospace"===family},{[classes.weightLight]:"light"===weight,[classes.weightRegular]:"regular"===weight,[classes.weightBold]:"bold"===weight||"button"===size},{[classes.inverseColor]:"inverse"===color,[classes.negativeColor]:"negative"===color,[classes.positiveColor]:"positive"===color},marginBottom&&classes.marginBottom,{[classes.alignCenter]:"center"===align,[classes.alignJustify]:"justify"===align,[classes.alignLeft]:"left"===align,[classes.alignRight]:"right"===align},className),ref,...rootProps,children})}));try{useStyles.displayName="useStyles",useStyles.__docgenInfo={description:"",displayName:"useStyles",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#useStyles"]={docgenInfo:useStyles.__docgenInfo,name:"useStyles",path:"src/components/Text/Text.tsx#useStyles"})}catch(__react_docgen_typescript_loader_error){}try{Text.displayName="Text",Text.__docgenInfo={description:"Component for styling text. Replaces p and h[1-6]\n\n### Links\n\n- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Text/Text.tsx)\n- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Text/Text.stories.tsx)",displayName:"Text",props:{align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'},{value:'"center"'},{value:'"justify"'}]}},size:{defaultValue:{value:"body"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"button"'},{value:'"caption"'},{value:'"code"'},{value:'"table"'},{value:'"headline"'},{value:'"subbody"'},{value:'"tooltip"'}]}},family:{defaultValue:{value:"primary"},description:"",name:"family",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"monospace"'}]}},weight:{defaultValue:{value:"regular"},description:"",name:"weight",required:!1,type:{name:"enum",value:[{value:'"bold"'},{value:'"light"'},{value:'"regular"'}]}},marginBottom:{defaultValue:null,description:"",name:"marginBottom",required:!1,type:{name:"boolean"}},useH1:{defaultValue:{value:"false"},description:"There may be cases where the text needs to be an `h1` tag. The `useH1` prop can\nbe provided to set this. Be careful not to have too many `h1` tags for\naccessibility reasons.",name:"useH1",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"default"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"negative"'},{value:'"positive"'},{value:'"default"'},{value:'"inverse"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TextField/TextField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{nv:()=>TextField});var clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/styles/makeStyles.ts"),_private_forms__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/_private/forms/FormElementUtils.ts"),_private_forms__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/_private/forms/FormHelpMessage.tsx"),_private_forms__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/_private/forms/FormErrorMessage.tsx"),_private_UniqueId__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/_private/UniqueId.ts"),_Tooltip__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Tooltip/Tooltip.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const useStyles=(0,_styles__WEBPACK_IMPORTED_MODULE_2__.Z)((theme=>({root:{},label:{alignItems:"center",color:theme.palette.black[800],display:"flex",fontSize:theme.pxToRem(14),fontWeight:theme.typography.fontWeightBold,marginBottom:theme.spacing(1),"&:empty":{marginBottom:theme.spacing(0)}},labelIcon:{marginLeft:theme.spacing(.75),color:theme.palette.primary.main},labelIconInverse:{mixBlendMode:"screen"},labelSecondary:{color:theme.palette.text.hint,fontSize:theme.pxToRem(11),display:"inline-block",margin:theme.spacing(0,.75)},labelInverse:{color:theme.palette.common.white,"&$labelSecondary":{opacity:.9}},inputContainer:{position:"relative",minWidth:theme.pxToRem(180),width:"fit-content"},inputContainerFullWidth:{width:"100%","& $inputHasAdornment":{maxWidth:"unset"}},input:{backgroundColor:theme.hexToRgba(theme.palette.graphite[900],.15),border:"1px solid transparent",borderRadius:theme.pxToRem(4),color:theme.palette.text.primary,fontFamily:theme.typography.fontFamily,fontSize:theme.pxToRem(14),minWidth:theme.pxToRem(180),lineHeight:1.25,paddingBottom:theme.spacing(1),paddingLeft:theme.spacing(1.25),paddingRight:theme.spacing(1.25),paddingTop:theme.spacing(1),transition:"border 0.25s ease","&:focus":{outline:"none",backgroundColor:theme.hexToRgba(theme.palette.common.white,.5),border:`1px solid ${theme.hexToRgba(theme.palette.graphite[900],.45)}`},"&:disabled":{cursor:"not-allowed",opacity:.625},"&:read-only":{cursor:"not-allowed",opacity:.9,"&:focus":{backgroundColor:theme.hexToRgba(theme.palette.graphite[900],.15),border:"1px solid transparent"}},"&::-webkit-input-placeholder":{color:theme.palette.black[400]},"&::-moz-placeholder":{color:theme.palette.black[400]},"&:-ms-input-placeholder":{color:theme.palette.black[400]},"&:-moz-placeholder":{color:theme.palette.black[400]}},inputHasAdornment:{maxWidth:theme.pxToRem(152)},inputInverse:{backgroundColor:theme.hexToRgba(theme.palette.graphite[100],.1),color:theme.palette.common.white,"&:focus":{backgroundColor:theme.hexToRgba(theme.palette.graphite[100],.1),border:`1px solid ${theme.hexToRgba(theme.palette.graphite[100],.55)}`},"&:read-only":{opacity:1,"&:focus":{backgroundColor:theme.hexToRgba(theme.palette.graphite[100],.1)}},"&::-webkit-input-placeholder":{color:theme.hexToRgba(theme.palette.common.white,.8)},"&::-moz-placeholder":{color:theme.hexToRgba(theme.palette.common.white,.8)},"&:-ms-input-placeholder":{color:theme.hexToRgba(theme.palette.common.white,.8)},"&:-moz-placeholder":{color:theme.hexToRgba(theme.palette.common.white,.8)}},inputStartAdornment:{paddingLeft:theme.spacing(4.25)},inputEndAdornment:{paddingRight:theme.spacing(4.25)},adornment:{display:"flex",position:"absolute","& a, & button":{padding:0},"& svg":{height:theme.pxToRem(20),width:theme.pxToRem(20),"&, & a, & button":{color:theme.palette.black[500]}}},adornmentInverse:{"& a, & button, & svg":{color:theme.palette.common.white}},startAdornment:{bottom:8,left:10,top:8},endAdornment:{bottom:8,right:10,top:8},hasTrailer:{marginBottom:theme.spacing(.5)},inputError:{backgroundColor:theme.hexToRgba(theme.palette.graphite[100],.1),border:`1px solid ${theme.palette.error.main}`,"&:focus":{border:`1px solid ${theme.palette.error.main}`}},inputErrorInverse:{border:`1px solid ${theme.palette.error[700]}`},inputFullWidth:{width:"100%"},trailerMessage:{marginTop:theme.spacing(.875),marginLeft:0},errorMessage:{color:theme.palette.error.main,fontSize:theme.typography.caption.fontSize,fontWeight:theme.typography.fontWeightBold},errorMessageInverse:{mixBlendMode:"color-dodge"},helpMessage:{fontSize:theme.typography.caption.fontSize,color:theme.palette.text.hint},helpMessageInverse:{color:theme.palette.common.white},tooltipContainer:{display:"flex",outline:"none"},required:{color:theme.palette.error[500],margin:theme.spacing(0,.5)},requiredInverse:{color:theme.palette.common.white}})),{name:"ChromaTextField"}),TextField=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{"aria-label":ariaLabel,className,color="default",errorMessage,fullWidth,hasError,helpMessage,icon:Icon,id,label,name,secondaryLabel,tooltipMessage,startAdornment,endAdornment,showRequiredLabel,...rootProps}=_ref;const classes=useStyles({}),[uniqueId]=react__WEBPACK_IMPORTED_MODULE_0__.useState((()=>id||name||(0,_private_UniqueId__WEBPACK_IMPORTED_MODULE_3__.l)("textField-")));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(classes.root,className),children:[label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(classes.label,"inverse"===color&&classes.labelInverse),htmlFor:uniqueId,children:[showRequiredLabel&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(classes.required,"inverse"===color&&classes.requiredInverse),children:"*"}),label,!!Icon&&tooltipMessage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Tooltip__WEBPACK_IMPORTED_MODULE_5__.u,{title:tooltipMessage,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:classes.tooltipContainer,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Icon,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(classes.labelIcon,"inverse"===color&&classes.labelIconInverse),width:16,height:16,role:"img","aria-hidden":!0})})}),secondaryLabel&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(classes.labelSecondary,"inverse"===color&&classes.labelInverse),children:secondaryLabel})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(classes.inputContainer,fullWidth&&classes.inputContainerFullWidth),children:[startAdornment&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(classes.adornment,"inverse"===color&&classes.adornmentInverse,classes.startAdornment),children:startAdornment}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input",{"aria-describedby":(0,_private_forms__WEBPACK_IMPORTED_MODULE_6__.Oh)({hasError,hasHelpMessage:!!helpMessage,uniqueId}),"aria-label":ariaLabel,ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(classes.input,startAdornment||endAdornment?classes.inputHasAdornment:void 0,startAdornment&&classes.inputStartAdornment,endAdornment&&classes.inputEndAdornment,fullWidth&&classes.inputFullWidth,hasError&&classes.inputError,hasError&&"inverse"===color&&classes.inputErrorInverse,{[classes.inputInverse]:"inverse"===color}),type:"text",id:uniqueId,name,...rootProps}),endAdornment&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(classes.adornment,"inverse"===color&&classes.adornmentInverse,classes.endAdornment),children:endAdornment})]}),helpMessage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_private_forms__WEBPACK_IMPORTED_MODULE_7__.$,{color,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(classes.trailerMessage,classes.helpMessage,"inverse"===color&&classes.helpMessageInverse),rootElementId:uniqueId,describedById:(0,_private_forms__WEBPACK_IMPORTED_MODULE_6__.cU)(uniqueId),children:helpMessage}),hasError&&errorMessage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_private_forms__WEBPACK_IMPORTED_MODULE_8__.J,{color,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(classes.trailerMessage),rootElementId:uniqueId,describedById:(0,_private_forms__WEBPACK_IMPORTED_MODULE_6__.fH)(uniqueId),children:errorMessage})]})}));try{useStyles.displayName="useStyles",useStyles.__docgenInfo={description:"",displayName:"useStyles",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextField/TextField.tsx#useStyles"]={docgenInfo:useStyles.__docgenInfo,name:"useStyles",path:"src/components/TextField/TextField.tsx#useStyles"})}catch(__react_docgen_typescript_loader_error){}try{TextField.displayName="TextField",TextField.__docgenInfo={description:'An input component for form usage.\n\n### Accessibility\n\n- The label and input are "connected" via a uniqueId and the `for` + `id`\n  attributes.\n- The label has the `aria-hidden` attribute so it cannot be focused by\n  screenreaders. Instead, the input element receives the focus, and the label is\n  read as part of the input.\n- The component has `type="text"` by default.\n- The component uses a uniqueId to link the input to the help and error messages\n  via `aria-describedby`. This allows screenreaders to read the help and error\n  messages.\n- The icon has `aria-hidden` and `role="img"` attributes.\n\n### Links\n\n- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/TextField/TextField.tsx)\n- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/TextField/TextField.stories.tsx)',displayName:"TextField",props:{color:{defaultValue:{value:"default"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"inverse"'}]}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},hasError:{defaultValue:null,description:"",name:"hasError",required:!1,type:{name:"boolean"}},helpMessage:{defaultValue:null,description:"",name:"helpMessage",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"MemoExoticComponent<(props: SVGProps<SVGSVGElement>) => Element>"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},secondaryLabel:{defaultValue:null,description:"",name:"secondaryLabel",required:!1,type:{name:"string"}},tooltipMessage:{defaultValue:null,description:"",name:"tooltipMessage",required:!1,type:{name:"string"}},startAdornment:{defaultValue:null,description:"",name:"startAdornment",required:!1,type:{name:"ReactNode"}},endAdornment:{defaultValue:null,description:"",name:"endAdornment",required:!1,type:{name:"ReactNode"}},showRequiredLabel:{defaultValue:null,description:"This property shows the required asterisk (*). Required validation needs to be implemented separately.",name:"showRequiredLabel",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextField/TextField.tsx#TextField"]={docgenInfo:TextField.__docgenInfo,name:"TextField",path:"src/components/TextField/TextField.tsx#TextField"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Tooltip/Tooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Tooltip});var _styles_createTypography__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/styles/createTypography.ts"),_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/styles/makeStyles.ts"),framer_motion__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-reduced-motion.mjs"),framer_motion__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion.mjs"),reakit_Portal__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/reakit/es/Portal/Portal.js"),reakit_Tooltip__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/reakit/es/TooltipState-6abdaa20.js"),reakit_Tooltip__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/reakit/es/Tooltip/TooltipReference.js"),reakit_Tooltip__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/reakit/es/Tooltip/Tooltip.js"),clsx__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const useStyles=(0,_styles__WEBPACK_IMPORTED_MODULE_2__.Z)((theme=>({root:{backgroundColor:theme.palette.common.black,borderRadius:theme.pxToRem(4),boxShadow:theme.boxShadows.tooltip,color:theme.palette.common.white,fontFamily:theme.typography.fontFamily,fontSize:_styles_createTypography__WEBPACK_IMPORTED_MODULE_3__.CH.tooltip,letterSpacing:"0.021875em",maxWidth:theme.pxToRem(500),paddingLeft:theme.spacing(1),paddingRight:theme.spacing(1),paddingTop:theme.spacing(.5),paddingBottom:theme.spacing(.75),zIndex:theme.zIndex.tooltip}})),{name:"ChromaTooltip"}),Tooltip=_ref=>{let{children,className,defaultVisible=!1,placement="bottom",title="",gutter,...rootProps}=_ref;const classes=useStyles({}),shouldReduceMotion=(0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.J)(),tooltip=(0,reakit_Tooltip__WEBPACK_IMPORTED_MODULE_5__.u)({placement,visible:defaultVisible,gutter});return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{tooltip.place(placement)}),[placement,tooltip]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reakit_Tooltip__WEBPACK_IMPORTED_MODULE_6__.v,{...tooltip,children:referenceProps=>react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children),referenceProps)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reakit_Portal__WEBPACK_IMPORTED_MODULE_7__.h,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reakit_Tooltip__WEBPACK_IMPORTED_MODULE_8__.u,{...tooltip,as:framer_motion__WEBPACK_IMPORTED_MODULE_9__.E.div,className:(0,clsx__WEBPACK_IMPORTED_MODULE_10__.Z)(classes.root,className),animate:tooltip.visible?shouldReduceMotion?{opacity:1}:{opacity:1,transition:{delay:.75}}:{opacity:0},...rootProps,children:title})})]})};try{useStyles.displayName="useStyles",useStyles.__docgenInfo={description:"",displayName:"useStyles",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/Tooltip.tsx#useStyles"]={docgenInfo:useStyles.__docgenInfo,name:"useStyles",path:"src/components/Tooltip/Tooltip.tsx#useStyles"})}catch(__react_docgen_typescript_loader_error){}try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:'A popup that displays information related to an element when the element\nreceives keyboard focus or the mouse hovers over it.\n\n### Accessibility\n\n- Tooltip has `role="tooltip"`.\n- The child element has `aria-describedby`.\n\n### Links\n\n- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Tooltip/Tooltip.tsx)\n- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Tooltip/Tooltip.stories.tsx)',displayName:"Tooltip",props:{defaultVisible:{defaultValue:{value:"false"},description:"",name:"defaultVisible",required:!1,type:{name:"boolean"}},placement:{defaultValue:{value:"bottom"},description:"Actual `placement`.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"auto-start"'},{value:'"auto"'},{value:'"auto-end"'},{value:'"top-start"'},{value:'"top"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right"'},{value:'"right-end"'},{value:'"bottom-end"'},{value:'"bottom"'},{value:'"bottom-start"'},{value:'"left-end"'},{value:'"left"'},{value:'"left-start"'}]}},gutter:{defaultValue:null,description:"Offset between the reference and the popover on the main axis. Should not be combined with `unstable_offset`.",name:"gutter",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/Tooltip.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"src/components/Tooltip/Tooltip.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/_private/UniqueId.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function gen4Part(){return Math.random().toString(16).slice(-4)}function generateUniqueId(prefix){return(prefix||"").concat([gen4Part(),gen4Part(),gen4Part(),gen4Part(),gen4Part(),gen4Part(),gen4Part(),gen4Part()].join(""))}__webpack_require__.d(__webpack_exports__,{l:()=>generateUniqueId})},"./src/components/_private/forms/FormElementUtils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Oh:()=>buildDescribedBy,cU:()=>helpFor,fH:()=>errorFor});const buildDescribedBy=_ref=>{let{hasError,hasHelpMessage,uniqueId}=_ref;if(buildDescribedBy&&(hasHelpMessage||hasError))return hasError&&hasHelpMessage?`${errorFor(uniqueId)} ${helpFor(uniqueId)}`:hasError?errorFor(uniqueId):hasHelpMessage?helpFor(uniqueId):void 0},errorFor=uniqueId=>`error-for-${uniqueId}`,helpFor=uniqueId=>`help-for-${uniqueId}`},"./src/components/_private/forms/FormErrorMessage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>FormErrorMessage});var clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_styles__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/styles/makeStyles.ts")),_Text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Text/Text.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const useStyles=(0,_styles__WEBPACK_IMPORTED_MODULE_2__.Z)((theme=>({root:{color:theme.palette.error.main,lineHeight:1.25,marginTop:theme.spacing(.375)},inverse:{color:theme.palette.error[50]}})),{name:"ChromaFormErrorMessage"}),FormErrorMessage=_ref=>{let{className,describedById,color,children,rootElementId,...rootProps}=_ref;const classes=useStyles({});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_3__.xv,{size:"caption",weight:"bold","error-for":rootElementId,id:describedById,"aria-live":"assertive",role:"alert",className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(classes.root,"inverse"===color&&classes.inverse,className),...rootProps,children})};FormErrorMessage.displayName="FormErrorMessage";try{FormErrorMessage.displayName="FormErrorMessage",FormErrorMessage.__docgenInfo={description:"",displayName:"FormErrorMessage",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"inverse"'}]}},rootElementId:{defaultValue:null,description:'@description The root form element "id".  This is normally the id\napplied to an <input /> element.  We use this prop to set the\n"error-for" and "help-for" attributes.',name:"rootElementId",required:!1,type:{name:"string"}},describedById:{defaultValue:null,description:'@description A unique indentifier used to set the "id" of this element,\nwhich connects it with the root element.  This ensures screen readers\ncan read the error and help messages when one appears.\nThis ID should be something like "error-for-<id-of-input-element>" or\n"help-for-<id-of-input-element>".',name:"describedById",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/_private/forms/FormErrorMessage.tsx#FormErrorMessage"]={docgenInfo:FormErrorMessage.__docgenInfo,name:"FormErrorMessage",path:"src/components/_private/forms/FormErrorMessage.tsx#FormErrorMessage"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/_private/forms/FormHelpMessage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>FormHelpMessage});var clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_styles__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/styles/makeStyles.ts")),_Text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Text/Text.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const useStyles=(0,_styles__WEBPACK_IMPORTED_MODULE_2__.Z)((theme=>({root:{color:theme.palette.text.hint,lineHeight:1.25,marginTop:theme.spacing(.375)},inverse:{color:theme.palette.common.white,opacity:.9}})),{name:"ChromaFormHelpMessage"}),FormHelpMessage=_ref=>{let{className,color,children,rootElementId,describedById,...rootProps}=_ref;const classes=useStyles({});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_3__.xv,{size:"caption","help-for":rootElementId,id:describedById,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(classes.root,"inverse"===color&&classes.inverse,className),...rootProps,children})};FormHelpMessage.displayName="FormHelpMessage";try{FormHelpMessage.displayName="FormHelpMessage",FormHelpMessage.__docgenInfo={description:"",displayName:"FormHelpMessage",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"inverse"'}]}},rootElementId:{defaultValue:null,description:'@description The root form element "id".  This is normally the id\napplied to an <input /> element.  We use this prop to set the\n"error-for" and "help-for" attributes.',name:"rootElementId",required:!1,type:{name:"string"}},describedById:{defaultValue:null,description:'@description A unique indentifier used to set the "id" of this element,\nwhich connects it with the root element.  This ensures screen readers\ncan read the error and help messages when one appears.\nThis ID should be something like "error-for-<id-of-input-element>" or\n"help-for-<id-of-input-element>".',name:"describedById",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/_private/forms/FormHelpMessage.tsx#FormHelpMessage"]={docgenInfo:FormHelpMessage.__docgenInfo,name:"FormHelpMessage",path:"src/components/_private/forms/FormHelpMessage.tsx#FormHelpMessage"})}catch(__react_docgen_typescript_loader_error){}},"./src/styles/makeStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>makeStyles});var _mui_styles__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/styles/makeStyles/makeStyles.js");const makeStyles=(styles,options)=>(0,_mui_styles__WEBPACK_IMPORTED_MODULE_0__.Z)(styles,options)}}]);