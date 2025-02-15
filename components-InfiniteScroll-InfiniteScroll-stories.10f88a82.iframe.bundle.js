"use strict";(self.webpackChunk_lifeomic_chroma_react=self.webpackChunk_lifeomic_chroma_react||[]).push([[567],{"./src/components/InfiniteScroll/InfiniteScroll.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>InfiniteScroll_stories});var react=__webpack_require__("./node_modules/react/index.js");const utils_useInterval=function useInterval(callback,delay){const savedCallback=(0,react.useRef)();(0,react.useEffect)((()=>{savedCallback.current=callback}),[callback]),(0,react.useEffect)((()=>{if(delay){const id=setInterval((()=>{!function tick(){savedCallback.current&&savedCallback.current()}()}),delay);return()=>clearInterval(id)}}),[delay])};const events_useWindowSize=function useWindowSize(){const getSize=(0,react.useCallback)((()=>({width:window.innerWidth,height:window.innerHeight})),[]),[size,setSize]=(0,react.useState)(getSize());return(0,react.useEffect)((()=>{function handleResize(){setSize(getSize())}return window.addEventListener("resize",handleResize),()=>{window.removeEventListener("resize",handleResize)}}),[getSize]),size},WINDOW="window",helpers_getParentSize=function(ref){return ref.current.parentNode.getBoundingClientRect()},helpers_getMySize=function(ref){return ref.current.getBoundingClientRect()};function useInfiniteScroll(_ref){let{loading,hasNextPage,loadMore,scrollOffset=250,debounceInterval=250,scrollContainer=WINDOW}=_ref;const ref=(0,react.useRef)(),{height:windowHeight,width:windowWidth}=events_useWindowSize(),[listen,setListen]=(0,react.useState)(!0);async function listenBottomOffset(){if(listen&&!loading&&hasNextPage&&ref.current){if("parent"===scrollContainer&&!function isParentInView(){if(ref.current&&ref.current.parentNode){const{left,right,top,bottom}=helpers_getParentSize(ref);if(windowWidth&&left>windowWidth)return!1;if(right<0)return!1;if(windowHeight&&top>windowHeight)return!1;if(bottom<0)return!1}return!0}())return;(function getBottomOffset(){const{bottom}=helpers_getMySize(ref);let bottomOffset=windowHeight?bottom-windowHeight:0;if("parent"===scrollContainer){const{bottom:parentBottom}=helpers_getParentSize(ref);bottomOffset=bottom-parentBottom}return bottomOffset})()<scrollOffset&&(setListen(!1),await loadMore())}}return(0,react.useEffect)((()=>{loading||setListen(!0)}),[loading]),utils_useInterval((()=>listenBottomOffset()),hasNextPage?debounceInterval:0),ref}const events_useInfiniteScroll=useInfiniteScroll;try{useInfiniteScroll.displayName="useInfiniteScroll",useInfiniteScroll.__docgenInfo={description:"",displayName:"useInfiniteScroll",props:{loading:{defaultValue:null,description:"",name:"loading",required:!0,type:{name:"boolean"}},hasNextPage:{defaultValue:null,description:"",name:"hasNextPage",required:!0,type:{name:"boolean"}},loadMore:{defaultValue:null,description:"",name:"loadMore",required:!0,type:{name:"() => Promise<any>"}},scrollOffset:{defaultValue:{value:"250"},description:"",name:"scrollOffset",required:!1,type:{name:"number"}},debounceInterval:{defaultValue:{value:"250"},description:"",name:"debounceInterval",required:!1,type:{name:"number"}},scrollContainer:{defaultValue:{value:"window"},description:"",name:"scrollContainer",required:!1,type:{name:"enum",value:[{value:'"window"'},{value:'"parent"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hooks/events/useInfiniteScroll.tsx#useInfiniteScroll"]={docgenInfo:useInfiniteScroll.__docgenInfo,name:"useInfiniteScroll",path:"src/hooks/events/useInfiniteScroll.tsx#useInfiniteScroll"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const InfiniteScroll=_ref=>{let{children,className,...props}=_ref;const infiniteRef=events_useInfiniteScroll({...props});return(0,jsx_runtime.jsx)("div",{ref:infiniteRef,className,children})};InfiniteScroll.displayName="InfiniteScroll";try{InfiniteScroll.displayName="InfiniteScroll",InfiniteScroll.__docgenInfo={description:"The InfiniteScroll component provides endless scroll behavior. It is a thin\nwrapper with hooks that detect if the element is in view, whether to fetch more\nresults based on position offset relative to the parent, etc. You will need to\ntoggle loading on and off to load more results\n\n### Links\n\n- [Component Source](https://github.com/lifeomic/chroma-react/blob/master/src/components/InfiniteScroll/InfiniteScroll.tsx)\n- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/InfiniteScroll/InfiniteScroll.stories.tsx)",displayName:"InfiniteScroll",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},loading:{defaultValue:null,description:"",name:"loading",required:!0,type:{name:"boolean"}},hasNextPage:{defaultValue:null,description:"",name:"hasNextPage",required:!0,type:{name:"boolean"}},loadMore:{defaultValue:null,description:"",name:"loadMore",required:!0,type:{name:"() => Promise<any>"}},scrollOffset:{defaultValue:null,description:"",name:"scrollOffset",required:!1,type:{name:"number"}},debounceInterval:{defaultValue:null,description:"",name:"debounceInterval",required:!1,type:{name:"number"}},scrollContainer:{defaultValue:null,description:"",name:"scrollContainer",required:!1,type:{name:"enum",value:[{value:'"window"'},{value:'"parent"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InfiniteScroll/InfiniteScroll.tsx#InfiniteScroll"]={docgenInfo:InfiniteScroll.__docgenInfo,name:"InfiniteScroll",path:"src/components/InfiniteScroll/InfiniteScroll.tsx#InfiniteScroll"})}catch(__react_docgen_typescript_loader_error){}const InfiniteScroll_stories={component:InfiniteScroll,decorators:[story=>(0,jsx_runtime.jsx)("div",{style:{display:"flex",border:"1px solid gray",height:300,width:150},children:(0,jsx_runtime.jsx)("div",{style:{flex:"1 1 auto",overflowY:"scroll"},children:story()})})]},Template=args=>{let i=0;const getPage=()=>new Array(30).fill(null).map((()=>i++)),[items,setItems]=react.useState(getPage()),[loading,setLoading]=react.useState(!1);return(0,jsx_runtime.jsx)(InfiniteScroll,{...args,loadMore:async()=>{setLoading(!0),setItems(items.concat(getPage())),setLoading(!1)},loading,children:items.map((item=>(0,jsx_runtime.jsx)("p",{style:{textAlign:"center"},children:item},item)))})};Template.displayName="Template";const Default={render:Template,args:{scrollContainer:"parent",hasNextPage:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    scrollContainer: 'parent',\n    hasNextPage: true\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);