"use strict";(self.webpackChunk_lifeomic_chroma_react=self.webpackChunk_lifeomic_chroma_react||[]).push([[5041],{"./src/components/Select/Select.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ph:()=>Select,yK:()=>Select_useStyles});var clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react=__webpack_require__("./node_modules/react/index.js"),es2015=__webpack_require__("./node_modules/react-focus-lock/dist/es2015/index.js"),PopoverState=__webpack_require__("./node_modules/reakit/es/Popover/PopoverState.js"),PopoverDisclosure=__webpack_require__("./node_modules/reakit/es/Popover/PopoverDisclosure.js"),Popover=__webpack_require__("./node_modules/reakit/es/Popover/Popover.js"),Portal=__webpack_require__("./node_modules/reakit/es/Portal/Portal.js"),chromicons_esm=__webpack_require__("./node_modules/@lifeomic/chromicons/dist/chromicons.esm.js"),makeStyles=__webpack_require__("./src/styles/makeStyles.ts"),FormElementUtils=__webpack_require__("./src/components/_private/forms/FormElementUtils.ts"),FormHelpMessage=__webpack_require__("./src/components/_private/forms/FormHelpMessage.tsx"),FormErrorMessage=__webpack_require__("./src/components/_private/forms/FormErrorMessage.tsx"),UniqueId=__webpack_require__("./src/components/_private/UniqueId.ts"),Text=__webpack_require__("./src/components/Text/Text.tsx"),use_reduced_motion=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-reduced-motion.mjs"),motion=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion.mjs"),Rover=__webpack_require__("./node_modules/reakit/es/Rover/Rover.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const useStyles=(0,makeStyles.Z)((theme=>({option:{alignItems:"center",backgroundColor:theme.palette.common.white,cursor:"pointer",display:"flex",minHeight:theme.pxToRem(26),outline:"none",paddingLeft:theme.spacing(2),paddingRight:theme.spacing(2),transition:"background-color 0.25s ease","&:hover, &:focus":{backgroundColor:theme.hexToRgba(theme.palette.primary[50],.6)}}})),{name:"ChromaRoverOption"}),RoverOption=react.memo((_ref=>{let{handleOptionSelect:handleSelectOption,option,rover,variants,value,disabled}=_ref;const classes=useStyles({}),{value:optionValue,meta}=option?.props||{},handleClick=react.useCallback((()=>{handleSelectOption(optionValue,meta)}),[optionValue,meta,handleSelectOption]);return(0,jsx_runtime.jsx)(Rover.u,{...rover,"aria-selected":optionValue===value,className:classes.option,as:motion.E.li,role:"option",value:option?.props?.value,variants,onClick:handleClick,disabled,children:react.cloneElement(option,{isChecked:optionValue===value,disabled,...option.props})})}));try{useStyles.displayName="useStyles",useStyles.__docgenInfo={description:"",displayName:"useStyles",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Select/RoverOption.tsx#useStyles"]={docgenInfo:useStyles.__docgenInfo,name:"useStyles",path:"src/components/Select/RoverOption.tsx#useStyles"})}catch(__react_docgen_typescript_loader_error){}try{RoverOption.displayName="RoverOption",RoverOption.__docgenInfo={description:"",displayName:"RoverOption",props:{option:{defaultValue:null,description:"",name:"option",required:!0,type:{name:"ReactElement<SelectOptionProps, string | JSXElementConstructor<any>>"}},handleOptionSelect:{defaultValue:null,description:"",name:"handleOptionSelect",required:!0,type:{name:"(optionValue: string, meta: any) => void"}},variants:{defaultValue:null,description:"",name:"variants",required:!1,type:{name:"Variants"}},rover:{defaultValue:null,description:"",name:"rover",required:!0,type:{name:"RoverStateReturn"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Select/RoverOption.tsx#RoverOption"]={docgenInfo:RoverOption.__docgenInfo,name:"RoverOption",path:"src/components/Select/RoverOption.tsx#RoverOption"})}catch(__react_docgen_typescript_loader_error){}var RoverState=__webpack_require__("./node_modules/reakit/es/Rover/RoverState.js"),getTestProps=__webpack_require__("./src/testUtils/getTestProps.ts"),screenreaderOnly=__webpack_require__("./src/styles/screenreaderOnly.ts"),Tooltip=__webpack_require__("./src/components/Tooltip/Tooltip.tsx");const testIds_placeholderText="select-placeholderText",Select_useStyles=(0,makeStyles.Z)((theme=>({root:{},popover:{background:theme.palette.common.white,borderRadius:theme.pxToRem(10),boxShadow:theme.boxShadows.popover,minWidth:theme.pxToRem(224),overflow:"hidden",zIndex:theme.zIndex.select,"&:focus":{outline:"none"}},label:{alignItems:"center",color:theme.palette.black[800],display:"flex",fontSize:theme.pxToRem(14),fontWeight:theme.typography.fontWeightBold,marginBottom:theme.spacing(1),"&:empty":{marginBottom:theme.spacing(0)}},labelSecondary:{fontSize:theme.pxToRem(11),display:"inline-block",margin:theme.spacing(0,.75),color:theme.palette.text.hint},labelInverse:{color:theme.palette.common.white,"&$labelSecondary":{opacity:.9}},labelIcon:{marginLeft:theme.spacing(.75),color:theme.palette.primary.main},labelIconInverse:{mixBlendMode:"screen"},tooltipContainer:{display:"flex",outline:"none"},button:{alignItems:"center",backgroundColor:theme.hexToRgba(theme.palette.graphite[900],.15),border:"solid 1px transparent",borderRadius:theme.pxToRem(4),color:theme.palette.text.primary,cursor:"pointer",display:"block",fontFamily:theme.typography.fontFamily,fontSize:theme.pxToRem(14),maxHeight:theme.pxToRem(84),minHeight:theme.pxToRem(35),margin:0,minWidth:theme.pxToRem(175),outline:"none",overflow:"hidden",padding:theme.spacing(.5,3.75,.5,1.25),position:"relative",transition:"border 0.5s ease","&:disabled":{cursor:"not-allowed",opacity:.625},"&:focus":{boxShadow:`0 0 0 2px ${theme.hexToRgba(theme.palette.primary[600],.3)}`,outline:"none"},"&::-moz-focus-inner":{border:"none"}},buttonInverse:{backgroundColor:theme.hexToRgba(theme.palette.graphite[100],.1),color:theme.palette.common.white,"&:focus":{boxShadow:`0 0 0 2px ${theme.hexToRgba(theme.palette.common.white,.3)}`},"& $chip":{background:theme.hexToRgba(theme.palette.common.white,.5),color:theme.palette.text.primary},"& $buttonText$placeholderText":{color:theme.palette.common.white}},buttonError:{backgroundColor:theme.hexToRgba(theme.palette.graphite[100],.1),border:`1px solid ${theme.palette.error.main}`,"&:focus":{border:`1px solid ${theme.palette.error.main}`}},buttonArrowContainer:{alignItems:"center",display:"flex",flexFlow:"column",minHeight:theme.pxToRem(32),height:theme.pxToRem(32),justifyContent:"center",position:"absolute",right:theme.pxToRem(-6),textAlign:"center",top:theme.pxToRem(1),width:"2rem"},buttonText:{color:"inherit",marginTop:theme.spacing(.125),overflow:"hidden",textAlign:"left",textOverflow:"ellipsis",whiteSpace:"nowrap",width:"100%","&$placeholderText":{color:theme.palette.text.hint}},placeholderText:{},comboBoxPlaceholder:{marginTop:theme.spacing(.25)},comboxBoxOverflow:{overflowY:"auto"},buttonFullWidth:{width:"100%"},arrowIcon:{alignSelf:"flex-start",position:"sticky",transition:"transform 0.25s ease",strokeOpacity:.6,top:theme.spacing(.5)},rotate:{transform:"rotate(180deg)",top:theme.spacing(.375)},ul:{display:"block",listStyle:"none",margin:0,maxHeight:theme.pxToRem(328),overflowY:"auto",padding:theme.spacing(1,0)},option:{alignItems:"center",backgroundColor:theme.palette.common.white,cursor:"pointer",display:"flex",minHeight:theme.pxToRem(26),outline:"none",paddingLeft:theme.spacing(2),paddingRight:theme.spacing(2),transition:"background-color 0.25s ease","&:hover, &:focus":{backgroundColor:theme.hexToRgba(theme.palette.primary[50],.6)}},chipList:{display:"flex",flexFlow:"wrap",margin:theme.spacing(-.5,-.5,0)},chip:{alignItems:"center",background:theme.palette.primary.main,borderRadius:theme.pxToRem(3),color:theme.palette.common.white,display:"inline-block",height:theme.pxToRem(22),fontSize:theme.pxToRem(12),margin:theme.spacing(.5,.25,0),overflow:"hidden",paddingLeft:theme.spacing(1),paddingRight:theme.spacing(1),textOverflow:"ellipsis",whiteSpace:"nowrap"},message:{marginTop:theme.spacing(.875),marginLeft:0},srOnly:{...screenreaderOnly.e},required:{color:theme.palette.error[500],margin:theme.spacing(0,.5)},requiredInverse:{color:theme.palette.common.white}})),{name:"ChromaSelect"}),popoverVariants={open:{opacity:1,offsetTop:-2,transition:{duration:.25,ease:"easeOut"}},closed:{opacity:0,offsetTop:-18}},popoverVariantsReduced={open:{opacity:1,transition:{duration:.2,ease:"easeOut"}},closed:{opacity:0}},listMotionVariants={open:{transition:{delayChildren:.025,staggerChildren:.045,duration:.2}},closed:{}},listMotionVariantsReduced={open:{},closed:{}},listItemMotionVariants={open:{y:0,opacity:1,transition:{y:{stiffness:1e3,velocity:-100}}},closed:{y:-16,opacity:0}},listItemMotionVariantsReduced={open:{opacity:1},closed:{opacity:0}},isHeadingElement=element=>"heading"===element.props["data-select-role"],Select=_ref=>{let{"aria-label":ariaLabel,children,className,color="default",errorMessage,fullWidth,hasError,helpMessage,icon:Icon,id,label,secondaryAction,secondaryLabel,onChange,placeholder,placement,popoverAriaLabel,selectedOptionDisplay,tooltipMessage,value,showRequiredLabel,popoverStyle,...rootProps}=_ref;const classes=Select_useStyles({}),popover=(0,PopoverState.v)({placement}),shouldReduceMotion=(0,use_reduced_motion.J)(),buttonRef=react.useRef(),[width,setWidth]=react.useState(50),[internalSelection,setInternalSelection]=react.useState(null),[uniqueId]=react.useState((()=>id||name||(0,UniqueId.l)("select-"))),rover=(0,RoverState.d)({loop:!0,orientation:"vertical"});react.useEffect((()=>{setWidth(buttonRef.current.getBoundingClientRect().width)})),react.useEffect((()=>{const match=react.Children.toArray(children).find((child=>react.isValidElement(child)?isHeadingElement(child)?null:child.props.value===value:null));setInternalSelection(match?match.props:null)}),[children,value]);const hidePopover=popover.hide,handleOptionSelected=react.useCallback(((optionValue,meta)=>{hidePopover(),onChange?.(optionValue,meta)}),[hidePopover,onChange]);return(0,jsx_runtime.jsxs)("div",{className:(0,clsx_m.Z)(classes.root,className),children:[(0,jsx_runtime.jsxs)("label",{"aria-hidden":"true",className:(0,clsx_m.Z)(classes.label,"inverse"===color&&classes.labelInverse,!label&&ariaLabel&&classes.srOnly),htmlFor:uniqueId,children:[showRequiredLabel&&(0,jsx_runtime.jsx)("span",{className:(0,clsx_m.Z)(classes.required,"inverse"===color&&classes.requiredInverse),children:"*"}),label||ariaLabel,!!Icon&&tooltipMessage&&(0,jsx_runtime.jsx)(Tooltip.u,{title:tooltipMessage,children:(0,jsx_runtime.jsx)("span",{className:classes.tooltipContainer,children:(0,jsx_runtime.jsx)(Icon,{className:(0,clsx_m.Z)(classes.labelIcon,"inverse"===color&&classes.labelIconInverse),width:16,height:16,role:"img","aria-hidden":!0})})}),secondaryLabel?(0,jsx_runtime.jsx)("span",{className:(0,clsx_m.Z)(classes.labelSecondary,"inverse"===color&&classes.labelInverse),children:secondaryLabel}):null]}),(0,jsx_runtime.jsx)(PopoverDisclosure.x,{className:(0,clsx_m.Z)(classes.button,hasError&&classes.buttonError,fullWidth&&classes.buttonFullWidth,{[classes.buttonInverse]:"inverse"===color}),ref:buttonRef,"aria-describedby":(0,FormElementUtils.Oh)({hasError,hasHelpMessage:!!helpMessage,uniqueId}),id:uniqueId,...popover,...rootProps,children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[!internalSelection&&(0,jsx_runtime.jsx)(Text.xv,{className:(0,clsx_m.Z)(classes.placeholderText,classes.buttonText),size:"subbody",...(0,getTestProps.g)(testIds_placeholderText),children:placeholder}),internalSelection&&!selectedOptionDisplay&&(0,jsx_runtime.jsx)(Text.xv,{className:classes.buttonText,size:"subbody",children:internalSelection.title}),internalSelection&&selectedOptionDisplay&&(0,jsx_runtime.jsx)(Text.xv,{className:classes.buttonText,size:"subbody",children:selectedOptionDisplay(internalSelection)}),(0,jsx_runtime.jsx)("div",{className:classes.buttonArrowContainer,role:"presentation",children:(0,jsx_runtime.jsx)(chromicons_esm._ME,{className:(0,clsx_m.Z)(classes.arrowIcon,popover.visible&&classes.rotate),"aria-hidden":!0,role:"img",width:18,height:18})})]})}),helpMessage&&(0,jsx_runtime.jsx)(FormHelpMessage.$,{className:classes.message,color,rootElementId:uniqueId,describedById:(0,FormElementUtils.cU)(uniqueId),children:helpMessage}),hasError&&(0,jsx_runtime.jsx)(FormErrorMessage.J,{className:classes.message,color,rootElementId:uniqueId,describedById:(0,FormElementUtils.fH)(uniqueId),children:errorMessage}),(0,jsx_runtime.jsx)(Portal.h,{children:(0,jsx_runtime.jsx)(es2015.ZP,{children:(0,jsx_runtime.jsx)(Popover.J,{"aria-label":label||ariaLabel||popoverAriaLabel,className:classes.popover,...popover,style:{width,...popoverStyle||{}},as:motion.E.div,animate:popover.visible?"open":"closed",variants:shouldReduceMotion?popoverVariantsReduced:popoverVariants,children:(0,jsx_runtime.jsx)(motion.E.ul,{className:classes.ul,role:"listbox",variants:shouldReduceMotion?listMotionVariantsReduced:listMotionVariants,children:popover.visible&&react.Children.map(children,(child=>{if(!react.isValidElement(child))return null;if(isHeadingElement(child))return child;const option=child;return(0,jsx_runtime.jsx)(RoverOption,{rover,value,option,handleOptionSelect:handleOptionSelected,variants:shouldReduceMotion?listItemMotionVariantsReduced:listItemMotionVariants,disabled:child?.props?.disabled})}))})})})})]})};Select.displayName="Select";try{Select_useStyles.displayName="useStyles",Select_useStyles.__docgenInfo={description:"",displayName:"useStyles",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Select/Select.tsx#useStyles"]={docgenInfo:Select_useStyles.__docgenInfo,name:"useStyles",path:"src/components/Select/Select.tsx#useStyles"})}catch(__react_docgen_typescript_loader_error){}try{Select.displayName="Select",Select.__docgenInfo={description:'An accessible select component. If you need a multi-select component, see ComboBox.\n\n### Accessibility\n\n- When the select menu is open, the arrow keys on a user\'s keyboard can be used\n  to navigate between options.\n- The Escape key closes the open menu.\n- Pressing the Enter key "clicks" the option.\n- A checkmark is read with the selected menu option.\n- The label and input are "connected" via a uniqueId and the `for` + `id`\n  attributes.\n- The label has the `aria-hidden` attribute so it cannot be focused by\n  screenreaders. Instead, the input element receives the focus, and the label is\n  read as part of the input.\n- The component uses a uniqueId to link the input to the help and error messages\n  via `aria-describedby`. This allows screenreaders to read the help and error\n  messages.\n- The icon has `aria-hidden` and `role="img"` attributes.\n\n### Links\n\n- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Select/Select.tsx)\n- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Select/Select.stories.tsx)',displayName:"Select",props:{"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},secondaryAction:{defaultValue:null,description:"",name:"secondaryAction",required:!1,type:{name:"SelectSecondaryAction"}},secondaryLabel:{defaultValue:null,description:"",name:"secondaryLabel",required:!1,type:{name:"string"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"MemoExoticComponent<(props: SVGProps<SVGSVGElement>) => Element>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string, meta: any) => void)"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},placement:{defaultValue:null,description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top-start"'},{value:'"top"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right"'},{value:'"right-end"'},{value:'"bottom-end"'},{value:'"bottom"'},{value:'"bottom-start"'},{value:'"left-end"'},{value:'"left"'},{value:'"left-start"'}]}},popoverAriaLabel:{defaultValue:null,description:"",name:"popoverAriaLabel",required:!1,type:{name:"string"}},selectedOptionDisplay:{defaultValue:null,description:"",name:"selectedOptionDisplay",required:!1,type:{name:"((option: SelectOptionProps) => ReactNode)"}},tooltipMessage:{defaultValue:null,description:"",name:"tooltipMessage",required:!1,type:{name:"string"}},showRequiredLabel:{defaultValue:null,description:"This property shows the required asterisk (*). Required validation needs to be implemented separately.",name:"showRequiredLabel",required:!1,type:{name:"boolean"}},popoverStyle:{defaultValue:null,description:"",name:"popoverStyle",required:!1,type:{name:"MotionStyle"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},color:{defaultValue:{value:"default"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"inverse"'}]}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},hasError:{defaultValue:null,description:"",name:"hasError",required:!1,type:{name:"boolean"}},helpMessage:{defaultValue:null,description:"",name:"helpMessage",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Select/Select.tsx#Select"]={docgenInfo:Select.__docgenInfo,name:"Select",path:"src/components/Select/Select.tsx#Select"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Select/SelectOption.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$m:()=>SelectOption});var clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),reakit_VisuallyHidden__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/reakit/es/VisuallyHidden/VisuallyHidden.js")),_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/styles/makeStyles.ts"),_Box__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Box/Box.tsx"),_Text__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Text/Text.tsx"),_IconButton__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/IconButton/IconButton.tsx"),_Tooltip__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/Tooltip/Tooltip.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const useStyles=(0,_styles__WEBPACK_IMPORTED_MODULE_2__.Z)((theme=>({root:{paddingTop:theme.spacing(.5),paddingBottom:theme.spacing(.5)},title:{lineHeight:1.3},subtitle:{color:theme.palette.text.hint,lineHeight:1.25,marginBottom:theme.spacing(.25),marginTop:theme.spacing(.25)},checked:{position:"relative","&::before":{background:theme.palette.primary.main,content:"''",display:"block",height:`calc(100% + ${theme.spacing(1)})`,position:"absolute",left:theme.spacing(-2),top:theme.spacing(-.5),width:4},"& *":{color:theme.palette.primary.main,"&$title":{fontWeight:900}}},disabled:{cursor:"not-allowed",opacity:.625},obviousHover:{"&:hover":{backgroundColor:theme.palette.primary[100]}}})),{name:"ChromaSelectOption"}),SelectOption=_ref=>{let{className,children,secondaryAction,isChecked,title,subtitle,disabled,...rootProps}=_ref;const classes=useStyles({});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_3__.xu,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(classes.root,className),fullWidth:!0,justify:"space-between",align:"center",...rootProps,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_3__.xu,{fullWidth:!0,children:[isChecked&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reakit_VisuallyHidden__WEBPACK_IMPORTED_MODULE_5__.T,{children:"✓"}),title&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_3__.xu,{direction:"column",justify:"flex-start",className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(isChecked&&classes.checked,disabled&&classes.disabled),children:[title&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_6__.xv,{className:classes.title,size:"subbody",children:title}),subtitle&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_6__.xv,{className:classes.subtitle,size:"caption",children:subtitle})]}),children]}),secondaryAction&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Tooltip__WEBPACK_IMPORTED_MODULE_7__.u,{title:`${title}: ${secondaryAction.label}`,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_IconButton__WEBPACK_IMPORTED_MODULE_8__.hU,{className:classes.obviousHover,"aria-label":secondaryAction?.label,icon:secondaryAction?.icon,onClick:e=>{e.stopPropagation(),secondaryAction.action(secondaryAction.args)},size:0})})]})};SelectOption.displayName="SelectOption";try{useStyles.displayName="useStyles",useStyles.__docgenInfo={description:"",displayName:"useStyles",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Select/SelectOption.tsx#useStyles"]={docgenInfo:useStyles.__docgenInfo,name:"useStyles",path:"src/components/Select/SelectOption.tsx#useStyles"})}catch(__react_docgen_typescript_loader_error){}try{SelectOption.displayName="SelectOption",SelectOption.__docgenInfo={description:"",displayName:"SelectOption",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},secondaryAction:{defaultValue:null,description:"",name:"secondaryAction",required:!1,type:{name:"SelectSecondaryAction"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},isChecked:{defaultValue:null,description:"",name:"isChecked",required:!1,type:{name:"boolean"}},meta:{defaultValue:null,description:"",name:"meta",required:!1,type:{name:"any"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Select/SelectOption.tsx#SelectOption"]={docgenInfo:SelectOption.__docgenInfo,name:"SelectOption",path:"src/components/Select/SelectOption.tsx#SelectOption"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Tooltip/Tooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Tooltip});var _styles_createTypography__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/styles/createTypography.ts"),_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/styles/makeStyles.ts"),framer_motion__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-reduced-motion.mjs"),framer_motion__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion.mjs"),reakit_Portal__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/reakit/es/Portal/Portal.js"),reakit_Tooltip__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/reakit/es/TooltipState-6abdaa20.js"),reakit_Tooltip__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/reakit/es/Tooltip/TooltipReference.js"),reakit_Tooltip__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/reakit/es/Tooltip/Tooltip.js"),clsx__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const useStyles=(0,_styles__WEBPACK_IMPORTED_MODULE_2__.Z)((theme=>({root:{backgroundColor:theme.palette.common.black,borderRadius:theme.pxToRem(4),boxShadow:theme.boxShadows.tooltip,color:theme.palette.common.white,fontFamily:theme.typography.fontFamily,fontSize:_styles_createTypography__WEBPACK_IMPORTED_MODULE_3__.CH.tooltip,letterSpacing:"0.021875em",maxWidth:theme.pxToRem(500),paddingLeft:theme.spacing(1),paddingRight:theme.spacing(1),paddingTop:theme.spacing(.5),paddingBottom:theme.spacing(.75),zIndex:theme.zIndex.tooltip}})),{name:"ChromaTooltip"}),Tooltip=_ref=>{let{children,className,defaultVisible=!1,placement="bottom",title="",gutter,...rootProps}=_ref;const classes=useStyles({}),shouldReduceMotion=(0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.J)(),tooltip=(0,reakit_Tooltip__WEBPACK_IMPORTED_MODULE_5__.u)({placement,visible:defaultVisible,gutter});return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{tooltip.place(placement)}),[placement,tooltip]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reakit_Tooltip__WEBPACK_IMPORTED_MODULE_6__.v,{...tooltip,children:referenceProps=>react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children),referenceProps)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reakit_Portal__WEBPACK_IMPORTED_MODULE_7__.h,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reakit_Tooltip__WEBPACK_IMPORTED_MODULE_8__.u,{...tooltip,as:framer_motion__WEBPACK_IMPORTED_MODULE_9__.E.div,className:(0,clsx__WEBPACK_IMPORTED_MODULE_10__.Z)(classes.root,className),animate:tooltip.visible?shouldReduceMotion?{opacity:1}:{opacity:1,transition:{delay:.75}}:{opacity:0},...rootProps,children:title})})]})};try{useStyles.displayName="useStyles",useStyles.__docgenInfo={description:"",displayName:"useStyles",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/Tooltip.tsx#useStyles"]={docgenInfo:useStyles.__docgenInfo,name:"useStyles",path:"src/components/Tooltip/Tooltip.tsx#useStyles"})}catch(__react_docgen_typescript_loader_error){}try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:'A popup that displays information related to an element when the element\nreceives keyboard focus or the mouse hovers over it.\n\n### Accessibility\n\n- Tooltip has `role="tooltip"`.\n- The child element has `aria-describedby`.\n\n### Links\n\n- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Tooltip/Tooltip.tsx)\n- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Tooltip/Tooltip.stories.tsx)',displayName:"Tooltip",props:{defaultVisible:{defaultValue:{value:"false"},description:"",name:"defaultVisible",required:!1,type:{name:"boolean"}},placement:{defaultValue:{value:"bottom"},description:"Actual `placement`.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"auto-start"'},{value:'"auto"'},{value:'"auto-end"'},{value:'"top-start"'},{value:'"top"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right"'},{value:'"right-end"'},{value:'"bottom-end"'},{value:'"bottom"'},{value:'"bottom-start"'},{value:'"left-end"'},{value:'"left"'},{value:'"left-start"'}]}},gutter:{defaultValue:null,description:"Offset between the reference and the popover on the main axis. Should not be combined with `unstable_offset`.",name:"gutter",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/Tooltip.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"src/components/Tooltip/Tooltip.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/_private/UniqueId.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function gen4Part(){return Math.random().toString(16).slice(-4)}function generateUniqueId(prefix){return(prefix||"").concat([gen4Part(),gen4Part(),gen4Part(),gen4Part(),gen4Part(),gen4Part(),gen4Part(),gen4Part()].join(""))}__webpack_require__.d(__webpack_exports__,{l:()=>generateUniqueId})},"./src/components/_private/forms/FormElementUtils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Oh:()=>buildDescribedBy,cU:()=>helpFor,fH:()=>errorFor});const buildDescribedBy=_ref=>{let{hasError,hasHelpMessage,uniqueId}=_ref;if(buildDescribedBy&&(hasHelpMessage||hasError))return hasError&&hasHelpMessage?`${errorFor(uniqueId)} ${helpFor(uniqueId)}`:hasError?errorFor(uniqueId):hasHelpMessage?helpFor(uniqueId):void 0},errorFor=uniqueId=>`error-for-${uniqueId}`,helpFor=uniqueId=>`help-for-${uniqueId}`},"./src/components/_private/forms/FormErrorMessage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>FormErrorMessage});var clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_styles__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/styles/makeStyles.ts")),_Text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Text/Text.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const useStyles=(0,_styles__WEBPACK_IMPORTED_MODULE_2__.Z)((theme=>({root:{color:theme.palette.error.main,lineHeight:1.25,marginTop:theme.spacing(.375)},inverse:{color:theme.palette.error[50]}})),{name:"ChromaFormErrorMessage"}),FormErrorMessage=_ref=>{let{className,describedById,color,children,rootElementId,...rootProps}=_ref;const classes=useStyles({});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_3__.xv,{size:"caption",weight:"bold","error-for":rootElementId,id:describedById,"aria-live":"assertive",role:"alert",className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(classes.root,"inverse"===color&&classes.inverse,className),...rootProps,children})};FormErrorMessage.displayName="FormErrorMessage";try{FormErrorMessage.displayName="FormErrorMessage",FormErrorMessage.__docgenInfo={description:"",displayName:"FormErrorMessage",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"inverse"'}]}},rootElementId:{defaultValue:null,description:'@description The root form element "id".  This is normally the id\napplied to an <input /> element.  We use this prop to set the\n"error-for" and "help-for" attributes.',name:"rootElementId",required:!1,type:{name:"string"}},describedById:{defaultValue:null,description:'@description A unique indentifier used to set the "id" of this element,\nwhich connects it with the root element.  This ensures screen readers\ncan read the error and help messages when one appears.\nThis ID should be something like "error-for-<id-of-input-element>" or\n"help-for-<id-of-input-element>".',name:"describedById",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/_private/forms/FormErrorMessage.tsx#FormErrorMessage"]={docgenInfo:FormErrorMessage.__docgenInfo,name:"FormErrorMessage",path:"src/components/_private/forms/FormErrorMessage.tsx#FormErrorMessage"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/_private/forms/FormHelpMessage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>FormHelpMessage});var clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),_styles__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/styles/makeStyles.ts")),_Text__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Text/Text.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const useStyles=(0,_styles__WEBPACK_IMPORTED_MODULE_2__.Z)((theme=>({root:{color:theme.palette.text.hint,lineHeight:1.25,marginTop:theme.spacing(.375)},inverse:{color:theme.palette.common.white,opacity:.9}})),{name:"ChromaFormHelpMessage"}),FormHelpMessage=_ref=>{let{className,color,children,rootElementId,describedById,...rootProps}=_ref;const classes=useStyles({});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_3__.xv,{size:"caption","help-for":rootElementId,id:describedById,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(classes.root,"inverse"===color&&classes.inverse,className),...rootProps,children})};FormHelpMessage.displayName="FormHelpMessage";try{FormHelpMessage.displayName="FormHelpMessage",FormHelpMessage.__docgenInfo={description:"",displayName:"FormHelpMessage",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"inverse"'}]}},rootElementId:{defaultValue:null,description:'@description The root form element "id".  This is normally the id\napplied to an <input /> element.  We use this prop to set the\n"error-for" and "help-for" attributes.',name:"rootElementId",required:!1,type:{name:"string"}},describedById:{defaultValue:null,description:'@description A unique indentifier used to set the "id" of this element,\nwhich connects it with the root element.  This ensures screen readers\ncan read the error and help messages when one appears.\nThis ID should be something like "error-for-<id-of-input-element>" or\n"help-for-<id-of-input-element>".',name:"describedById",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/_private/forms/FormHelpMessage.tsx#FormHelpMessage"]={docgenInfo:FormHelpMessage.__docgenInfo,name:"FormHelpMessage",path:"src/components/_private/forms/FormHelpMessage.tsx#FormHelpMessage"})}catch(__react_docgen_typescript_loader_error){}},"./src/styles/screenreaderOnly.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>screenreaderOnlyStyles});const screenreaderOnlyStyles={position:"absolute",width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:0}},"./src/testUtils/getTestProps.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>getTestProps});const getTestProps=id=>({"data-testid":id})}}]);