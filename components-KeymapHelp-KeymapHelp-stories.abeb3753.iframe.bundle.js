"use strict";(self.webpackChunk_lifeomic_chroma_react=self.webpackChunk_lifeomic_chroma_react||[]).push([[9201],{"./src/components/KeymapHelp/KeymapHelp.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AdditionalKeys:()=>AdditionalKeys,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>KeymapHelp_stories});var react=__webpack_require__("./node_modules/react/index.js"),index_es=__webpack_require__("./node_modules/react-hotkeys/index.es.js"),makeStyles=__webpack_require__("./src/styles/makeStyles.ts"),Button=__webpack_require__("./src/components/Button/Button.tsx"),Chip=__webpack_require__("./src/components/Chip/Chip.tsx"),Modal=__webpack_require__("./src/components/Modal/Modal.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const KEY_MAP={SHOW_KEYMAP_HELP:"shift+?"},BASE_KEY_MAP_DOCS=[{sequences:["shift+?"],description:"Show keyboard shortcuts"},{sequences:["["],description:"Toggle sidebar"}],useStyles=(0,makeStyles.Z)((theme=>({root:{},sequence:{paddingLeft:theme.spacing(3.75)}})),{name:"ChromaKeymapHelp"}),KeymapHelp=_ref=>{let{closeButtonText,keyMapDocs,keyListenerTestId}=_ref;const classes=useStyles({}),[isOpen,setIsOpen]=react.useState(!1),onClose=()=>{setIsOpen(!1)},HANDLERS={SHOW_KEYMAP_HELP:()=>setIsOpen(!0)},docs=[...BASE_KEY_MAP_DOCS];return keyMapDocs&&keyMapDocs.forEach((x=>docs.push(x))),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(index_es.GlobalHotKeys,{keyMap:KEY_MAP,handlers:HANDLERS,children:(0,jsx_runtime.jsx)("span",{"data-testid":keyListenerTestId})}),(0,jsx_runtime.jsx)(Modal.u_,{isOpen,title:"Keyboard shortcuts",onDismiss:onClose,actions:(0,jsx_runtime.jsx)(Button.zx,{variant:"contained",onClick:onClose,children:closeButtonText||"Close"}),children:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("table",{children:(0,jsx_runtime.jsx)("tbody",{children:docs.map((_ref2=>{let{sequences,description}=_ref2;const name=sequences.join("|");return(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)("td",{children:description}),(0,jsx_runtime.jsx)("td",{className:classes.sequence,children:sequences.map((sequence=>(0,jsx_runtime.jsx)(Chip.Af,{label:sequence},sequence)))})]},name)}))})})})})]})};try{useStyles.displayName="useStyles",useStyles.__docgenInfo={description:"",displayName:"useStyles",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/KeymapHelp/KeymapHelp.tsx#useStyles"]={docgenInfo:useStyles.__docgenInfo,name:"useStyles",path:"src/components/KeymapHelp/KeymapHelp.tsx#useStyles"})}catch(__react_docgen_typescript_loader_error){}try{KeymapHelp.displayName="KeymapHelp",KeymapHelp.__docgenInfo={description:'The KeymapHelp component provides a modal UI for detailing a set of keyboard shortcuts.\n\nThe modal is "invisible" unless raised using `Shift + ?`. To show the default experience now, press `Shift + ?`.\n\n### Links\n\n- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/KeymapHelp/KeymapHelp.tsx)\n- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/KeymapHelp/KeymapHelp.stories.tsx)',displayName:"KeymapHelp",props:{keyMapDocs:{defaultValue:null,description:"Additional key map docs to display. We can't use getApplicationKeyMap()\nbecause of https://github.com/greena13/react-hotkeys/issues/228",name:"keyMapDocs",required:!1,type:{name:"KeyBindingDoc[]"}},closeButtonText:{defaultValue:null,description:"",name:"closeButtonText",required:!1,type:{name:"string"}},keyListenerTestId:{defaultValue:null,description:"",name:"keyListenerTestId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/KeymapHelp/KeymapHelp.tsx#KeymapHelp"]={docgenInfo:KeymapHelp.__docgenInfo,name:"KeymapHelp",path:"src/components/KeymapHelp/KeymapHelp.tsx#KeymapHelp"})}catch(__react_docgen_typescript_loader_error){}const KeymapHelp_stories={component:KeymapHelp,decorators:[story=>(0,jsx_runtime.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[(0,jsx_runtime.jsx)("p",{children:"Open with shift + ?"}),story()]})]},Default={},AdditionalKeys={args:{keyMapDocs:[{sequences:["ctrl","alt","delete"],description:"Bring up the help menu"}]}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},AdditionalKeys.parameters={...AdditionalKeys.parameters,docs:{...AdditionalKeys.parameters?.docs,source:{originalSource:"{\n  args: {\n    keyMapDocs: [{\n      sequences: ['ctrl', 'alt', 'delete'],\n      description: 'Bring up the help menu'\n    }]\n  }\n}",...AdditionalKeys.parameters?.docs?.source}}};const __namedExportsOrder=["Default","AdditionalKeys"]},"./src/components/Chip/Chip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Af:()=>Chip});var clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_lifeomic_chromicons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@lifeomic/chromicons/dist/chromicons.esm.js"),_styles__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/styles/makeStyles.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const useStyles=(0,_styles__WEBPACK_IMPORTED_MODULE_3__.Z)((theme=>({root:{margin:theme.spacing(1.25,1.25,0,0),height:theme.pxToRem(30),borderRadius:theme.pxToRem(4),backgroundColor:theme.palette.black[50],display:"inline-flex",alignItems:"center",color:theme.palette.black[600],paddingLeft:theme.spacing(1),paddingRight:theme.spacing(1)},label:{fontSize:theme.typography.caption.fontSize,fontWeight:theme.typography.fontWeightBold,paddingRight:theme.pxToRem(10),whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:theme.spacing(37.5),letterSpacing:"0.4px"},noDeleteButtonLabel:{paddingRight:0},svgStyle:{width:theme.pxToRem(10),height:theme.pxToRem(10)},deleteButton:{alignItems:"center",background:theme.palette.black[600],borderRadius:9999,border:"none",display:"inline-flex",justifyContent:"center",color:theme.palette.common.white,cursor:"pointer",height:theme.pxToRem(14),minHeight:theme.pxToRem(10),minWidth:theme.pxToRem(10),padding:0,width:theme.pxToRem(14),transition:"background 0.25s ease, opacity 0.25s ease","&:hover":{background:theme.palette.black[600],opacity:.85},"&:disabled":{background:theme.palette.black[300],color:theme.palette.common.white,cursor:"initial"},"&:focus":{background:theme.palette.black[400],outline:"none"}}})),{name:"ChromaChip"}),Chip=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{children,label="",disableDelete,onDelete,className,...rootProps}=_ref;const classes=useStyles({});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{ref,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(classes.root,className),tabIndex:0,"aria-label":label,...rootProps,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)(classes.label,!onDelete&&classes.noDeleteButtonLabel),children:label}),!!onDelete&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:classes.deleteButton,"aria-label":"Remove",disabled:disableDelete,onClick:onDelete,type:"button",tabIndex:0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_lifeomic_chromicons__WEBPACK_IMPORTED_MODULE_1__.X,{className:classes.svgStyle,"aria-hidden":!0})}),children]})}));try{useStyles.displayName="useStyles",useStyles.__docgenInfo={description:"",displayName:"useStyles",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Chip/Chip.tsx#useStyles"]={docgenInfo:useStyles.__docgenInfo,name:"useStyles",path:"src/components/Chip/Chip.tsx#useStyles"})}catch(__react_docgen_typescript_loader_error){}try{Chip.displayName="Chip",Chip.__docgenInfo={description:"The Chip component is used for labeling items, tracking selected items in a list, etc.\n\n### Accessibility\n\n- The Chip has a `tabIndex` set so it can be tabbed into.\n  - Pressing `Tab` again, will set focus to the removal button.\n  - When the removal button is focused, pressing `Space` or `Enter` triggers the click action.\n- The Chip has `aria-label` set to the provided label.\n\n### Links\n\n- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/Chip/Chip.tsx)\n- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/Chip/Chip.stories.tsx)",displayName:"Chip",props:{label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},disableDelete:{defaultValue:null,description:"",name:"disableDelete",required:!1,type:{name:"boolean"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Chip/Chip.tsx#Chip"]={docgenInfo:Chip.__docgenInfo,name:"Chip",path:"src/components/Chip/Chip.tsx#Chip"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>AnimatePresence});var tslib_es6=__webpack_require__("./node_modules/framer-motion/node_modules/tslib/tslib.es6.mjs"),react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/framesync/dist/es/index.mjs"),use_unmount_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs");var PresenceContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/PresenceContext.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs"),presenceId=0;function getPresenceId(){var id=presenceId;return presenceId++,id}var PresenceChild=function(_a){var children=_a.children,initial=_a.initial,isPresent=_a.isPresent,onExitComplete=_a.onExitComplete,custom=_a.custom,presenceAffectsLayout=_a.presenceAffectsLayout,presenceChildren=(0,use_constant.h)(newChildrenMap),id=(0,use_constant.h)(getPresenceId),context=(0,react.useMemo)((function(){return{id,initial,isPresent,custom,onExitComplete:function(childId){var e_1,_a;presenceChildren.set(childId,!0);try{for(var _b=(0,tslib_es6.XA)(presenceChildren.values()),_c=_b.next();!_c.done;_c=_b.next()){if(!_c.value)return}}catch(e_1_1){e_1={error:e_1_1}}finally{try{_c&&!_c.done&&(_a=_b.return)&&_a.call(_b)}finally{if(e_1)throw e_1.error}}null==onExitComplete||onExitComplete()},register:function(childId){return presenceChildren.set(childId,!1),function(){return presenceChildren.delete(childId)}}}}),presenceAffectsLayout?void 0:[isPresent]);return(0,react.useMemo)((function(){presenceChildren.forEach((function(_,key){return presenceChildren.set(key,!1)}))}),[isPresent]),react.useEffect((function(){!isPresent&&!presenceChildren.size&&(null==onExitComplete||onExitComplete())}),[isPresent]),react.createElement(PresenceContext.O.Provider,{value:context},children)};function newChildrenMap(){return new Map}var LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs");function getChildKey(child){return child.key||""}var AnimatePresence=function(_a){var children=_a.children,custom=_a.custom,_b=_a.initial,initial=void 0===_b||_b,onExitComplete=_a.onExitComplete,exitBeforeEnter=_a.exitBeforeEnter,_c=_a.presenceAffectsLayout,presenceAffectsLayout=void 0===_c||_c,_d=(0,tslib_es6.CR)(function useForceUpdate(){var isUnmountingRef=(0,react.useRef)(!1),_a=(0,tslib_es6.CR)((0,react.useState)(0),2),forcedRenderCount=_a[0],setForcedRenderCount=_a[1];(0,use_unmount_effect.z)((function(){return isUnmountingRef.current=!0}));var forceRender=(0,react.useCallback)((function(){!isUnmountingRef.current&&setForcedRenderCount(forcedRenderCount+1)}),[forcedRenderCount]);return[(0,react.useCallback)((function(){return es.ZP.postRender(forceRender)}),[forceRender]),forcedRenderCount]}(),1),forceRender=_d[0],forceRenderLayoutGroup=(0,react.useContext)(LayoutGroupContext.p).forceRender;forceRenderLayoutGroup&&(forceRender=forceRenderLayoutGroup);var isInitialRender=(0,react.useRef)(!0),isMounted=(0,react.useRef)(!0);(0,react.useEffect)((function(){return function(){isMounted.current=!1}}),[]);var filteredChildren=function onlyElements(children){var filtered=[];return react.Children.forEach(children,(function(child){(0,react.isValidElement)(child)&&filtered.push(child)})),filtered}(children),presentChildren=(0,react.useRef)(filteredChildren),allChildren=(0,react.useRef)(new Map).current,exiting=(0,react.useRef)(new Set).current;if(function updateChildLookup(children,allChildren){children.forEach((function(child){var key=getChildKey(child);allChildren.set(key,child)}))}(filteredChildren,allChildren),isInitialRender.current)return isInitialRender.current=!1,react.createElement(react.Fragment,null,filteredChildren.map((function(child){return react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,initial:!!initial&&void 0,presenceAffectsLayout},child)})));for(var childrenToRender=(0,tslib_es6.ev)([],(0,tslib_es6.CR)(filteredChildren),!1),presentKeys=presentChildren.current.map(getChildKey),targetKeys=filteredChildren.map(getChildKey),numPresent=presentKeys.length,i=0;i<numPresent;i++){var key=presentKeys[i];-1===targetKeys.indexOf(key)?exiting.add(key):exiting.delete(key)}return exitBeforeEnter&&exiting.size&&(childrenToRender=[]),exiting.forEach((function(key){if(-1===targetKeys.indexOf(key)){var child=allChildren.get(key);if(child){var insertionIndex=presentKeys.indexOf(key);childrenToRender.splice(insertionIndex,0,react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!1,onExitComplete:function(){allChildren.delete(key),exiting.delete(key);var removeIndex=presentChildren.current.findIndex((function(presentChild){return presentChild.key===key}));if(presentChildren.current.splice(removeIndex,1),!exiting.size){if(presentChildren.current=filteredChildren,!1===isMounted.current)return;forceRender(),onExitComplete&&onExitComplete()}},custom,presenceAffectsLayout},child))}}})),childrenToRender=childrenToRender.map((function(child){var key=child.key;return exiting.has(key)?child:react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,presenceAffectsLayout},child)})),presentChildren.current=childrenToRender,react.createElement(react.Fragment,null,exiting.size?childrenToRender:childrenToRender.map((function(child){return(0,react.cloneElement)(child)})))}},"./node_modules/framer-motion/dist/es/utils/use-reduced-motion.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>useReducedMotion});var prefersReducedMotion,tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/node_modules/tslib/tslib.es6.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_value_index_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/framer-motion/dist/es/value/index.mjs"),_value_use_on_change_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/framer-motion/dist/es/value/use-on-change.mjs");function useReducedMotion(){!prefersReducedMotion&&function initPrefersReducedMotion(){if(prefersReducedMotion=(0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_1__.B)(null),"undefined"!=typeof window)if(window.matchMedia){var motionMediaQuery_1=window.matchMedia("(prefers-reduced-motion)"),setReducedMotionPreferences=function(){return prefersReducedMotion.set(motionMediaQuery_1.matches)};motionMediaQuery_1.addListener(setReducedMotionPreferences),setReducedMotionPreferences()}else prefersReducedMotion.set(!1)}();var _a=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.CR)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(prefersReducedMotion.get()),2),shouldReduceMotion=_a[0],setShouldReduceMotion=_a[1];return(0,_value_use_on_change_mjs__WEBPACK_IMPORTED_MODULE_3__.p)(prefersReducedMotion,setShouldReduceMotion),shouldReduceMotion}},"./node_modules/framer-motion/dist/es/value/use-on-change.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>useMultiOnChange,p:()=>useOnChange});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");function useOnChange(value,callback){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){if((0,_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_1__.i)(value))return value.onChange(callback)}),[callback])}function useMultiOnChange(values,handler){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var subscriptions=values.map((function(value){return value.onChange(handler)}));return function(){return subscriptions.forEach((function(unsubscribe){return unsubscribe()}))}}))}},"./node_modules/reakit-utils/es/useIsomorphicEffect.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>useIsomorphicEffect});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),useIsomorphicEffect="undefined"==typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useEffect:react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect},"./node_modules/reakit/es/Portal/Portal.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>Portal});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),reakit_utils_useIsomorphicEffect__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/reakit-utils/es/useIsomorphicEffect.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js");function getBodyElement(){return"undefined"!=typeof document?document.body:null}var PortalContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(getBodyElement());function Portal(_ref){var children=_ref.children,context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PortalContext)||getBodyElement(),hostNode=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((function(){if("undefined"!=typeof document){var element=document.createElement("div");return element.className=Portal.__className,element}return null}))[0];return(0,reakit_utils_useIsomorphicEffect__WEBPACK_IMPORTED_MODULE_2__.Y)((function(){if(hostNode&&context)return context.appendChild(hostNode),function(){context.removeChild(hostNode)}}),[hostNode,context]),hostNode?(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PortalContext.Provider,{value:hostNode},children),hostNode):null}Portal.__className="__reakit-portal",Portal.__selector="."+Portal.__className}}]);