"use strict";(self.webpackChunk_lifeomic_chroma_react=self.webpackChunk_lifeomic_chroma_react||[]).push([[4953],{"./src/components/Divider/Divider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Direction:()=>Direction,InverseBlue:()=>InverseBlue,InverseDark:()=>InverseDark,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Divider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Divider/Divider.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Layout/Divider",component:_Divider__WEBPACK_IMPORTED_MODULE_2__.iz},Default={},InverseDark={parameters:{backgrounds:{default:"dark"}},args:{color:"inverse"}},InverseBlue={parameters:{backgrounds:{default:"blue"}},args:{color:"inverse"}},Direction={args:{direction:"row"},decorators:[story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{height:"50px"},children:story()})]};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},InverseDark.parameters={...InverseDark.parameters,docs:{...InverseDark.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    backgrounds: {\n      default: 'dark'\n    }\n  },\n  args: {\n    color: 'inverse'\n  }\n}",...InverseDark.parameters?.docs?.source}}},InverseBlue.parameters={...InverseBlue.parameters,docs:{...InverseBlue.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    backgrounds: {\n      default: 'blue'\n    }\n  },\n  args: {\n    color: 'inverse'\n  }\n}",...InverseBlue.parameters?.docs?.source}}},Direction.parameters={...Direction.parameters,docs:{...Direction.parameters?.docs,source:{originalSource:"{\n  args: {\n    direction: 'row'\n  },\n  decorators: [(story: Function) => <div style={{\n    height: '50px'\n  }}>{story()}</div>]\n}",...Direction.parameters?.docs?.source}}};const __namedExportsOrder=["Default","InverseDark","InverseBlue","Direction"]},"./src/components/Divider/Divider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{iz:()=>Divider});var clsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/styles/makeStyles.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const useStyles=(0,_styles__WEBPACK_IMPORTED_MODULE_2__.Z)((theme=>({root:{backgroundColor:theme.hexToRgba(theme.palette.common.black,.15),border:"none",flexShrink:0,margin:0,height:1,width:"100%"},default:{},row:{height:"100%",width:1},inverseColor:{backgroundColor:theme.hexToRgba(theme.palette.common.white,.25)},vSpacing0:{margin:0},vSpacing05:{margin:theme.spacing(.5,0)},vSpacing10:{margin:theme.spacing(1,0)},vSpacing15:{margin:theme.spacing(1.5,0)},vSpacing20:{margin:theme.spacing(2,0)},vSpacing25:{margin:theme.spacing(2.5,0)},vSpacing30:{margin:theme.spacing(3,0)},vSpacing35:{margin:theme.spacing(3.5,0)},vSpacing40:{margin:theme.spacing(4,0)},hSpacing0:{margin:0},hSpacing05:{margin:theme.spacing(0,.5)},hSpacing10:{margin:theme.spacing(0,1)},hSpacing15:{margin:theme.spacing(0,1.5)},hSpacing20:{margin:theme.spacing(0,2)},hSpacing25:{margin:theme.spacing(0,2.5)},hSpacing30:{margin:theme.spacing(0,3)},hSpacing35:{margin:theme.spacing(0,3.5)},hSpacing40:{margin:theme.spacing(0,4)}})),{name:"ChromaDivider"}),Divider=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className,color="default",direction="column",spacing=1,...rootProps}=_ref;const classes=useStyles({});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("hr",{ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_3__.Z)(classes.root,{[classes.row]:"row"===direction},{[classes.inverseColor]:"inverse"===color},{[classes.vSpacing0]:0===spacing&&"column"===direction,[classes.vSpacing05]:.5===spacing&&"column"===direction,[classes.vSpacing10]:1===spacing&&"column"===direction,[classes.vSpacing15]:1.5===spacing&&"column"===direction,[classes.vSpacing20]:2===spacing&&"column"===direction,[classes.vSpacing25]:2.5===spacing&&"column"===direction,[classes.vSpacing30]:3===spacing&&"column"===direction,[classes.vSpacing35]:3.5===spacing&&"column"===direction,[classes.vSpacing40]:4===spacing&&"column"===direction},{[classes.hSpacing0]:0===spacing&&"row"===direction,[classes.hSpacing05]:.5===spacing&&"row"===direction,[classes.hSpacing10]:1===spacing&&"row"===direction,[classes.hSpacing15]:1.5===spacing&&"row"===direction,[classes.hSpacing20]:2===spacing&&"row"===direction,[classes.hSpacing25]:2.5===spacing&&"row"===direction,[classes.hSpacing30]:3===spacing&&"row"===direction,[classes.hSpacing35]:3.5===spacing&&"row"===direction,[classes.hSpacing40]:4===spacing&&"row"===direction},className),...rootProps})}));try{useStyles.displayName="useStyles",useStyles.__docgenInfo={description:"",displayName:"useStyles",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Divider/Divider.tsx#useStyles"]={docgenInfo:useStyles.__docgenInfo,name:"useStyles",path:"src/components/Divider/Divider.tsx#useStyles"})}catch(__react_docgen_typescript_loader_error){}try{Divider.displayName="Divider",Divider.__docgenInfo={description:"A `Divider` is a thin line that groups content in lists and layouts. The divider\nrenders as an `<hr>`.\n\n### Links\n\n- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Divider/Divider.tsx)\n- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Divider/Divider.stories.tsx)",displayName:"Divider",props:{color:{defaultValue:{value:"default"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"inverse"'}]}},direction:{defaultValue:{value:"column"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"column"'},{value:'"row"'}]}},spacing:{defaultValue:{value:"1"},description:"",name:"spacing",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"1.5"},{value:"4"},{value:"0.5"},{value:"2.5"},{value:"3.5"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Divider/Divider.tsx#Divider"]={docgenInfo:Divider.__docgenInfo,name:"Divider",path:"src/components/Divider/Divider.tsx#Divider"})}catch(__react_docgen_typescript_loader_error){}},"./src/styles/makeStyles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>makeStyles});var _mui_styles__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/styles/makeStyles/makeStyles.js");const makeStyles=(styles,options)=>(0,_mui_styles__WEBPACK_IMPORTED_MODULE_0__.Z)(styles,options)}}]);