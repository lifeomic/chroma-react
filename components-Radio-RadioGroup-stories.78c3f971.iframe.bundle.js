"use strict";(self.webpackChunk_lifeomic_chroma_react=self.webpackChunk_lifeomic_chroma_react||[]).push([[4696],{"./src/components/Radio/RadioGroup.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,InverseBlue:()=>InverseBlue,InverseDark:()=>InverseDark,__namedExportsOrder:()=>__namedExportsOrder,default:()=>RadioGroup_stories});var react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),makeStyles=__webpack_require__("./src/styles/makeStyles.ts"),useRadioGroup=__webpack_require__("./src/components/Radio/useRadioGroup.ts"),screenreaderOnly=__webpack_require__("./src/styles/screenreaderOnly.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const useStyles=(0,makeStyles.Z)((theme=>({root:{border:0,display:"inline-flex",flexDirection:"column",height:"100%",margin:0,minWidth:0,padding:0,verticalAlign:"top",width:"100%"},legend:{color:theme.palette.black[800],fontSize:theme.pxToRem(14),fontWeight:theme.typography.fontWeightBold,marginBottom:theme.spacing(1.5),padding:0,"&:empty":{marginBottom:theme.spacing(0)}},legendInverse:{color:theme.palette.common.white},radios:{display:"flex",flexDirection:"column","& > *:not(:last-child)":{marginBottom:theme.spacing(2)}},alignCenter:{alignItems:"center"},alignStart:{alignItems:"flex-start"},justifyStart:{justifyContent:"flex-start"},justifyEvenly:{justifyContent:"space-evenly"},justifyBetween:{justifyContent:"space-between"},justifyCenter:{justifyContent:"center"},directionRow:{flexDirection:"row","& > *:not(:last-child)":{margin:theme.spacing(0,2,0,0)},"& label":{whiteSpace:"nowrap"}},directionColumn:{flexDirection:"column"},srOnly:{...screenreaderOnly.e},required:{color:theme.palette.error[500],margin:theme.spacing(0,.5)},requiredInverse:{color:theme.palette.common.white}})),{name:"ChromaRadioGroup"}),RadioGroup=_ref=>{let{"aria-label":ariaLabel,className,align="flex-start",color="default",children,direction="column",justify="flex-start",name,onChange,value,title,showRequiredLabel,...rootProps}=_ref;const classes=useStyles({}),[contextValue,setContextValue]=react.useState(value);react.useEffect((()=>{setContextValue(value)}),[value]);return(0,jsx_runtime.jsx)(useRadioGroup.L.Provider,{value:{color,name,onChange:e=>{setContextValue(e.target.value),onChange?.(e)},value:contextValue},children:(0,jsx_runtime.jsxs)("fieldset",{className:(0,clsx_m.Z)(classes.root,className),role:"radiogroup",...rootProps,children:[(0,jsx_runtime.jsxs)("legend",{className:(0,clsx_m.Z)(classes.legend,{[classes.legendInverse]:"inverse"===color},!title&&ariaLabel&&classes.srOnly),children:[showRequiredLabel&&(0,jsx_runtime.jsx)("span",{className:(0,clsx_m.Z)(classes.required,"inverse"===color&&classes.requiredInverse),children:"*"}),title||ariaLabel]}),(0,jsx_runtime.jsx)("div",{className:(0,clsx_m.Z)(classes.radios,{[classes.directionRow]:"row"===direction,[classes.directionColumn]:"column"===direction},{[classes.alignCenter]:"center"===align,[classes.alignStart]:"flex-start"===align},{[classes.justifyBetween]:"space-between"===justify,[classes.justifyEvenly]:"space-evenly"===justify,[classes.justifyStart]:"flex-start"===justify,[classes.justifyCenter]:"center"===justify}),children})]})})};RadioGroup.displayName="RadioGroup";try{useStyles.displayName="useStyles",useStyles.__docgenInfo={description:"",displayName:"useStyles",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Radio/RadioGroup.tsx#useStyles"]={docgenInfo:useStyles.__docgenInfo,name:"useStyles",path:"src/components/Radio/RadioGroup.tsx#useStyles"})}catch(__react_docgen_typescript_loader_error){}try{RadioGroup.displayName="RadioGroup",RadioGroup.__docgenInfo={description:'The Radio Group and Radio components are styled radio inputs. They are typically\nused in combination; however, Radio can work on its own as well.\n\n### Accessibility\n\n- The component renders as a fieldset.\n- The component has the `role="radiogroup"` attribute.\n- The title for the component renders as a legend.\n\n### Links\n\n- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Radio/RadioGroup.tsx)\n- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Radio/Radio.stories.tsx)',displayName:"RadioGroup",props:{align:{defaultValue:{value:"flex-start"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},direction:{defaultValue:{value:"column"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"column"'},{value:'"row"'}]}},justify:{defaultValue:{value:"flex-start"},description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"space-between"'},{value:'"space-evenly"'},{value:'"flex-start"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},showRequiredLabel:{defaultValue:null,description:"This property shows the required asterisk (*). Required validation needs to be implemented separately.",name:"showRequiredLabel",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"default"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"inverse"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Radio/RadioGroup.tsx#RadioGroup"]={docgenInfo:RadioGroup.__docgenInfo,name:"RadioGroup",path:"src/components/Radio/RadioGroup.tsx#RadioGroup"})}catch(__react_docgen_typescript_loader_error){}var Radio=__webpack_require__("./src/components/Radio/Radio.tsx");const RadioGroup_stories={title:"Form Components/Radio/RadioGroup",component:RadioGroup,args:{title:"Radio Group"},argTypes:{onChange:{action:"clicked"}}},Template=args=>(0,jsx_runtime.jsxs)(RadioGroup,{...args,children:[(0,jsx_runtime.jsx)(Radio.Y8,{value:"opt1",label:"Option 1"}),(0,jsx_runtime.jsx)(Radio.Y8,{value:"opt2",label:"Option 2"})]});Template.displayName="Template";const Default={render:Template},InverseDark={render:Template,parameters:{backgrounds:{default:"dark"}},args:{color:"inverse"}},InverseBlue={render:Template,parameters:{backgrounds:{default:"blue"}},args:{color:"inverse"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: Template\n}",...Default.parameters?.docs?.source}}},InverseDark.parameters={...InverseDark.parameters,docs:{...InverseDark.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  parameters: {\n    backgrounds: {\n      default: 'dark'\n    }\n  },\n  args: {\n    color: 'inverse'\n  }\n}",...InverseDark.parameters?.docs?.source}}},InverseBlue.parameters={...InverseBlue.parameters,docs:{...InverseBlue.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  parameters: {\n    backgrounds: {\n      default: 'blue'\n    }\n  },\n  args: {\n    color: 'inverse'\n  }\n}",...InverseBlue.parameters?.docs?.source}}};const __namedExportsOrder=["Default","InverseDark","InverseBlue"]},"./src/styles/screenreaderOnly.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>screenreaderOnlyStyles});const screenreaderOnlyStyles={position:"absolute",width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:0}}}]);