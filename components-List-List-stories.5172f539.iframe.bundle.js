"use strict";(self.webpackChunk_lifeomic_chroma_react=self.webpackChunk_lifeomic_chroma_react||[]).push([[8101],{"./src/components/List/List.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Avatars:()=>Avatars,Default:()=>Default,Icons:()=>Icons,Margin:()=>Margin,Padding:()=>Padding,SecondaryText:()=>SecondaryText,Sections:()=>Sections,Title:()=>Title,TitleIcon:()=>TitleIcon,TrailingIcons:()=>TrailingIcons,__namedExportsOrder:()=>__namedExportsOrder,default:()=>List_stories});var react=__webpack_require__("./node_modules/react/index.js"),makeStyles=__webpack_require__("./src/styles/makeStyles.ts"),Text=__webpack_require__("./src/components/Text/Text.tsx"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),Box=__webpack_require__("./src/components/Box/Box.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const useStyles=(0,makeStyles.Z)((theme=>{const stringOrThemeSpacing=value=>"string"==typeof value?value:"number"==typeof value?theme.spacing(value):void 0;return{title:{color:theme.palette.text.primary},hasTitleIcon:{"& + $list":{marginLeft:theme.pxToRem(30)},alignItems:"center",display:"grid",gap:theme.spacing(1),gridTemplateColumns:`${theme.pxToRem(22)} 1fr`},titleIcon:{color:theme.palette.text.hint,height:theme.pxToRem(22),width:theme.pxToRem(22)},list:{backgroundColor:theme.palette.common.white,margin:0,maxHeight:theme.pxToRem(432),minWidth:theme.pxToRem(224),overflowY:"auto",listStyle:"none",paddingBottom:theme.spacing(1),padding:0},margin:{margin:_ref=>{let{margin}=_ref;return stringOrThemeSpacing(margin)}},marginLeft:{marginLeft:_ref2=>{let{marginLeft}=_ref2;return stringOrThemeSpacing(marginLeft)}},marginRight:{marginRight:_ref3=>{let{marginRight}=_ref3;return stringOrThemeSpacing(marginRight)}},marginTop:{marginTop:_ref4=>{let{marginTop}=_ref4;return stringOrThemeSpacing(marginTop)}},marginBottom:{marginBottom:_ref5=>{let{marginBottom}=_ref5;return stringOrThemeSpacing(marginBottom)}},marginX:{marginLeft:_ref6=>{let{marginX}=_ref6;return stringOrThemeSpacing(marginX)},marginRight:_ref7=>{let{marginX}=_ref7;return stringOrThemeSpacing(marginX)}},marginY:{marginTop:_ref8=>{let{marginY}=_ref8;return stringOrThemeSpacing(marginY)},marginBottom:_ref9=>{let{marginY}=_ref9;return stringOrThemeSpacing(marginY)}},padding:{padding:_ref10=>{let{padding}=_ref10;return stringOrThemeSpacing(padding)}},paddingLeft:{paddingLeft:_ref11=>{let{paddingLeft}=_ref11;return stringOrThemeSpacing(paddingLeft)}},paddingRight:{paddingRight:_ref12=>{let{paddingRight}=_ref12;return stringOrThemeSpacing(paddingRight)}},paddingTop:{paddingTop:_ref13=>{let{paddingTop}=_ref13;return stringOrThemeSpacing(paddingTop)}},paddingBottom:{paddingBottom:_ref14=>{let{paddingBottom}=_ref14;return stringOrThemeSpacing(paddingBottom)}},paddingX:{paddingLeft:_ref15=>{let{paddingX}=_ref15;return stringOrThemeSpacing(paddingX)},paddingRight:_ref16=>{let{paddingX}=_ref16;return stringOrThemeSpacing(paddingX)}},paddingY:{paddingTop:_ref17=>{let{paddingY}=_ref17;return stringOrThemeSpacing(paddingY)},paddingBottom:_ref18=>{let{paddingY}=_ref18;return stringOrThemeSpacing(paddingY)}}}}),{name:"ChromaList"}),List=props=>{const{"aria-label":ariaLabel,children,className,items,title,titleIcon:TitleIcon,margin,marginTop,marginBottom,marginLeft,marginRight,marginY,marginX,padding,paddingTop,paddingBottom,paddingLeft,paddingRight,paddingY,paddingX,...rootProps}=props,classes=useStyles(props);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[!!title&&(0,jsx_runtime.jsxs)(Box.xu,{className:(0,clsx_m.Z)(classes.title,!!TitleIcon&&classes.hasTitleIcon),marginBottom:1.5,children:[!!TitleIcon&&(0,jsx_runtime.jsx)(TitleIcon,{role:"img","aria-hidden":!0,className:classes.titleIcon}),(0,jsx_runtime.jsx)(Text.xv,{weight:"bold",size:"body",children:title})]}),(0,jsx_runtime.jsx)("ul",{"aria-label":ariaLabel,className:(0,clsx_m.Z)(classes.list,className,margin&&classes.margin,marginTop&&classes.marginTop,marginBottom&&classes.marginBottom,marginLeft&&classes.marginLeft,marginRight&&classes.marginRight,marginX&&classes.marginX,marginY&&classes.marginY,padding&&classes.padding,paddingTop&&classes.paddingTop,paddingBottom&&classes.paddingBottom,paddingLeft&&classes.paddingLeft,paddingRight&&classes.paddingRight,paddingX&&classes.paddingX,paddingY&&classes.paddingY),...rootProps,children:items})]})};try{useStyles.displayName="useStyles",useStyles.__docgenInfo={description:"",displayName:"useStyles",props:{"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"(ReactElement<ListItemProps, string | JSXElementConstructor<any>> | ReactElement<ListGroupHeadingProps, string | JSXElementConstructor<...>>)[]"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},titleIcon:{defaultValue:null,description:"",name:"titleIcon",required:!1,type:{name:"MemoExoticComponent<(props: SVGProps<SVGSVGElement>) => Element>"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"string | number"}},marginTop:{defaultValue:null,description:"",name:"marginTop",required:!1,type:{name:"string | number"}},marginBottom:{defaultValue:null,description:"",name:"marginBottom",required:!1,type:{name:"string | number"}},marginLeft:{defaultValue:null,description:"",name:"marginLeft",required:!1,type:{name:"string | number"}},marginRight:{defaultValue:null,description:"",name:"marginRight",required:!1,type:{name:"string | number"}},marginX:{defaultValue:null,description:"",name:"marginX",required:!1,type:{name:"string | number"}},marginY:{defaultValue:null,description:"",name:"marginY",required:!1,type:{name:"string | number"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"string | number"}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:"string | number"}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:"string | number"}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:"string | number"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"string | number"}},paddingX:{defaultValue:null,description:"",name:"paddingX",required:!1,type:{name:"string | number"}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!1,type:{name:"string | number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/List/List.tsx#useStyles"]={docgenInfo:useStyles.__docgenInfo,name:"useStyles",path:"src/components/List/List.tsx#useStyles"})}catch(__react_docgen_typescript_loader_error){}try{List.displayName="List",List.__docgenInfo={description:"Lists are used to render groups of items with consistent styling. Can be split into multiple sections with List Group Headings. \n\n### Accessibility\n\n- The \\<ul\\> and \\<li\\> hierarchy is correct.\n- An aria-label is required.\n\n### Links\n\n- [Component Source (List)](https://github.com/lifeomic/chroma-react/blob/master/src/components/List/List.tsx)\n- [Story Source](https://github.com/lifeomic/chroma-react/blob/master/stories/components/List/List.stories.tsx)",displayName:"List",props:{"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!1,type:{name:"(ReactElement<ListItemProps, string | JSXElementConstructor<any>> | ReactElement<ListGroupHeadingProps, string | JSXElementConstructor<...>>)[]"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},titleIcon:{defaultValue:null,description:"",name:"titleIcon",required:!1,type:{name:"MemoExoticComponent<(props: SVGProps<SVGSVGElement>) => Element>"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"string | number"}},marginTop:{defaultValue:null,description:"",name:"marginTop",required:!1,type:{name:"string | number"}},marginBottom:{defaultValue:null,description:"",name:"marginBottom",required:!1,type:{name:"string | number"}},marginLeft:{defaultValue:null,description:"",name:"marginLeft",required:!1,type:{name:"string | number"}},marginRight:{defaultValue:null,description:"",name:"marginRight",required:!1,type:{name:"string | number"}},marginX:{defaultValue:null,description:"",name:"marginX",required:!1,type:{name:"string | number"}},marginY:{defaultValue:null,description:"",name:"marginY",required:!1,type:{name:"string | number"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"string | number"}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:"string | number"}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:"string | number"}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:"string | number"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"string | number"}},paddingX:{defaultValue:null,description:"",name:"paddingX",required:!1,type:{name:"string | number"}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!1,type:{name:"string | number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/List/List.tsx#List"]={docgenInfo:List.__docgenInfo,name:"List",path:"src/components/List/List.tsx#List"})}catch(__react_docgen_typescript_loader_error){}const ListItem_useStyles=(0,makeStyles.Z)((theme=>({root:{padding:0,width:"100%"},item:{alignItems:"center",backgroundColor:theme.palette.common.white,border:"none",cursor:"pointer",display:"flex",fontFamily:theme.typography.fontFamily,fontSize:theme.pxToRem(14),gap:theme.spacing(1),letterSpacing:"0.015625em",margin:0,outline:"none",overflow:"hidden",padding:theme.spacing(1,0),textAlign:"left",userSelect:"none",width:"100%","&:focus":{outline:"none"}},buttonItem:{"&:focus, &:hover":{backgroundColor:"rgba(222,244,252, 0.6)"},"&:disabled, &[disabled]":{"&, & *":{color:theme.palette.text.disabled}}},readonlyItem:{cursor:"default","&:focus.focus-visible":{backgroundColor:"rgba(222,244,252, 0.6)"}},avatar:{alignSelf:"flex-start"},icon:{alignSelf:"flex-start",minWidth:theme.pxToRem(18)},trailingIcon:{marginRight:0,marginLeft:"auto"},text:{lineHeight:1.35},secondaryText:{color:theme.palette.text.secondary,fontSize:theme.pxToRem(12)}})),{name:"ChromaListItem"}),ListItem=react.forwardRef(((_ref,ref)=>{let{avatar,className,children,disabled,icon:Icon,iconClassName,onClick,secondaryText,text,trailingIcon:TrailingIcon,trailingIconClassName,...rootProps}=_ref;const classes=ListItem_useStyles({}),Tag=onClick?"button":"div";return(0,jsx_runtime.jsx)("li",{className:classes.root,ref,...rootProps,children:(0,jsx_runtime.jsxs)(Tag,{className:(0,clsx_m.Z)(classes.item,onClick?classes.buttonItem:classes.readonlyItem,className),disabled,onClick,children:[!!Icon&&!avatar&&(0,jsx_runtime.jsx)(Icon,{role:"img","aria-hidden":!0,className:(0,clsx_m.Z)(classes.icon,iconClassName),width:18,height:18}),!!avatar&&!Icon&&react.cloneElement(react.Children.only(avatar),{className:classes.avatar,size:0}),(0,jsx_runtime.jsxs)(Box.xu,{direction:"column",align:"flex-start",gap:.25,children:[!!text&&(0,jsx_runtime.jsx)(Box.xu,{className:classes.text,children:text}),(0,jsx_runtime.jsx)(Box.xu,{className:classes.text,children}),!!secondaryText&&(0,jsx_runtime.jsx)(Box.xu,{className:classes.secondaryText,children:secondaryText})]}),!!TrailingIcon&&(0,jsx_runtime.jsx)(TrailingIcon,{role:"img","aria-hidden":!0,className:(0,clsx_m.Z)(classes.icon,classes.trailingIcon,trailingIconClassName),width:18,height:18})]})})}));try{ListItem_useStyles.displayName="useStyles",ListItem_useStyles.__docgenInfo={description:"",displayName:"useStyles",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/List/ListItem.tsx#useStyles"]={docgenInfo:ListItem_useStyles.__docgenInfo,name:"useStyles",path:"src/components/List/ListItem.tsx#useStyles"})}catch(__react_docgen_typescript_loader_error){}try{ListItem.displayName="ListItem",ListItem.__docgenInfo={description:"",displayName:"ListItem",props:{avatar:{defaultValue:null,description:"",name:"avatar",required:!1,type:{name:"ReactElement<AvatarProps, string | JSXElementConstructor<any>>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"MemoExoticComponent<(props: SVGProps<SVGSVGElement>) => Element>"}},iconClassName:{defaultValue:null,description:"",name:"iconClassName",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"any"}},secondaryText:{defaultValue:null,description:"",name:"secondaryText",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},trailingIcon:{defaultValue:null,description:"",name:"trailingIcon",required:!1,type:{name:"MemoExoticComponent<(props: SVGProps<SVGSVGElement>) => Element>"}},trailingIconClassName:{defaultValue:null,description:"",name:"trailingIconClassName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/List/ListItem.tsx#ListItem"]={docgenInfo:ListItem.__docgenInfo,name:"ListItem",path:"src/components/List/ListItem.tsx#ListItem"})}catch(__react_docgen_typescript_loader_error){}const ListGroupHeading_useStyles=(0,makeStyles.Z)((theme=>({root:{color:theme.palette.text.hint,fontSize:theme.pxToRem(10),fontWeight:theme.typography.fontWeightBold,letterSpacing:theme.pxToRem(1),padding:theme.spacing(.25,0,.5),textTransform:"uppercase","&:not(:first-child)":{borderTop:`solid 1px ${theme.palette.divider}`,marginTop:theme.spacing(.75),paddingTop:theme.spacing(1.25)}}})),{name:"ChromaListGroupHeading"}),ListGroupHeading=_ref=>{let{className,children}=_ref;const classes=ListGroupHeading_useStyles({});return(0,jsx_runtime.jsx)("li",{className:(0,clsx_m.Z)(classes.root,className),children})};ListGroupHeading.displayName="ListGroupHeading";try{ListGroupHeading_useStyles.displayName="useStyles",ListGroupHeading_useStyles.__docgenInfo={description:"",displayName:"useStyles",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/List/ListGroupHeading.tsx#useStyles"]={docgenInfo:ListGroupHeading_useStyles.__docgenInfo,name:"useStyles",path:"src/components/List/ListGroupHeading.tsx#useStyles"})}catch(__react_docgen_typescript_loader_error){}try{ListGroupHeading.displayName="ListGroupHeading",ListGroupHeading.__docgenInfo={description:"",displayName:"ListGroupHeading",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/List/ListGroupHeading.tsx#ListGroupHeading"]={docgenInfo:ListGroupHeading.__docgenInfo,name:"ListGroupHeading",path:"src/components/List/ListGroupHeading.tsx#ListGroupHeading"})}catch(__react_docgen_typescript_loader_error){}var Avatar=__webpack_require__("./src/components/Avatar/Avatar.tsx"),chromicons_esm=__webpack_require__("./node_modules/@lifeomic/chromicons/dist/chromicons.esm.js"),example_avatar_1=__webpack_require__("./src/assets/example-avatar-1.jpg"),example_avatar_2=__webpack_require__("./src/assets/example-avatar-2.jpg");const List_stories={component:List,args:{items:[(0,jsx_runtime.jsx)(ListItem,{children:"Option 1"},"1"),(0,jsx_runtime.jsx)(ListItem,{children:"Option 2"},"2"),(0,jsx_runtime.jsx)(ListItem,{children:"Option 3"},"3")]},argTypes:{margin:{type:{name:"string"}},marginTop:{type:{name:"string"}},marginRight:{type:{name:"string"}},marginBottom:{type:{name:"string"}},marginLeft:{type:{name:"string"}},marginX:{type:{name:"string"}},marginY:{type:{name:"string"}},padding:{type:{name:"string"}},paddingTop:{type:{name:"string"}},paddingRight:{type:{name:"string"}},paddingBottom:{type:{name:"string"}},paddingLeft:{type:{name:"string"}},paddingX:{type:{name:"string"}},paddingY:{type:{name:"string"}}}},Default={args:{"aria-label":"List with multiple items"}},Title={parameters:{docs:{description:{story:"The List component takes an `title` prop."}}},args:{"aria-label":"List with a title",title:"Title"}},TitleIcon={parameters:{docs:{description:{story:"The List component takes an `titleIcon` prop. It's recommended to use the [Chromicons](https://lifeomic.github.io/chromicons.com/) icon set."}}},args:{"aria-label":"List with title icon and title",title:"Title",titleIcon:chromicons_esm.voY}},Icons={args:{"aria-label":"List with icons",items:[(0,jsx_runtime.jsx)(ListItem,{icon:chromicons_esm.$Tp,children:"Option 1"},"1"),(0,jsx_runtime.jsx)(ListItem,{icon:chromicons_esm.$Tp,children:"Option 2"},"2"),(0,jsx_runtime.jsx)(ListItem,{icon:chromicons_esm.$Tp,children:"Option 3"},"3")]}},TrailingIcons={args:{"aria-label":"List with trailing icons",items:[(0,jsx_runtime.jsx)(ListItem,{trailingIcon:chromicons_esm._Qn,children:"Option 1"},"1"),(0,jsx_runtime.jsx)(ListItem,{trailingIcon:chromicons_esm._Qn,children:"Option 2"},"2"),(0,jsx_runtime.jsx)(ListItem,{trailingIcon:chromicons_esm._Qn,children:"Option 3"},"3")]}},Avatars={args:{"aria-label":"List with avatars",items:[(0,jsx_runtime.jsx)(ListItem,{avatar:(0,jsx_runtime.jsx)(Avatar.qE,{name:"1",src:example_avatar_1}),children:"Option 1"},"1"),(0,jsx_runtime.jsx)(ListItem,{avatar:(0,jsx_runtime.jsx)(Avatar.qE,{name:"2",src:example_avatar_2}),children:"Option 2"},"2"),(0,jsx_runtime.jsx)(ListItem,{avatar:(0,jsx_runtime.jsx)(Avatar.qE,{name:"Third Person"}),children:"Option 3"},"3")]}},Sections={args:{"aria-label":"List with multiple sections of items",items:[(0,jsx_runtime.jsx)(ListGroupHeading,{children:"Section 1"},"section-1"),(0,jsx_runtime.jsx)(ListItem,{children:"Option 1"},"item-1"),(0,jsx_runtime.jsx)(ListItem,{children:"Option 2"},"item-2"),(0,jsx_runtime.jsx)(ListItem,{children:"Option 3"},"item-3"),(0,jsx_runtime.jsx)(ListGroupHeading,{children:"Section 2"},"section-2"),(0,jsx_runtime.jsx)(ListItem,{children:"Option 4"},"item-4"),(0,jsx_runtime.jsx)(ListItem,{children:"Option 5"},"item-5"),(0,jsx_runtime.jsx)(ListItem,{children:"Option 6"},"item-6")]}},SecondaryText={args:{"aria-label":"List with some items with secondary text",items:[(0,jsx_runtime.jsx)(ListGroupHeading,{children:"Section 1"},"section-1"),(0,jsx_runtime.jsx)(ListItem,{text:"Option 1",secondaryText:"This is secondary text"},"item-1"),(0,jsx_runtime.jsx)(ListItem,{children:"Option 2"},"item-2"),(0,jsx_runtime.jsx)(ListItem,{children:"Option 3"},"item-3"),(0,jsx_runtime.jsx)(ListGroupHeading,{children:"Section 2"},"section-2"),(0,jsx_runtime.jsx)(ListItem,{children:"Option 4"},"item-4"),(0,jsx_runtime.jsx)(ListItem,{children:"Option 5"},"item-5"),(0,jsx_runtime.jsx)(ListItem,{text:"Option 6",secondaryText:"This is secondary text"},"item-6")]}},Margin={args:{"aria-label":"List with some margin",items:[(0,jsx_runtime.jsx)(ListGroupHeading,{children:"Section 1"},"section-1"),(0,jsx_runtime.jsx)(ListItem,{children:"Option 1"},"item-1"),(0,jsx_runtime.jsx)(ListItem,{children:"Option 2"},"item-2"),(0,jsx_runtime.jsx)(ListItem,{children:"Option 3"},"item-3")],margin:"50px"}},Padding={args:{"aria-label":"List with some padding",items:[(0,jsx_runtime.jsx)(ListGroupHeading,{children:"Section 1"},"section-1"),(0,jsx_runtime.jsx)(ListItem,{children:"Option 1"},"item-1"),(0,jsx_runtime.jsx)(ListItem,{children:"Option 2"},"item-2"),(0,jsx_runtime.jsx)(ListItem,{children:"Option 3"},"item-3")],padding:"1rem"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    'aria-label': 'List with multiple items'\n  }\n}",...Default.parameters?.docs?.source}}},Title.parameters={...Title.parameters,docs:{...Title.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: 'The List component takes an `title` prop.'\n      }\n    }\n  },\n  args: {\n    'aria-label': 'List with a title',\n    title: 'Title'\n  }\n}",...Title.parameters?.docs?.source}}},TitleIcon.parameters={...TitleIcon.parameters,docs:{...TitleIcon.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: \"The List component takes an `titleIcon` prop. It's recommended to use the [Chromicons](https://lifeomic.github.io/chromicons.com/) icon set.\"\n      }\n    }\n  },\n  args: {\n    'aria-label': 'List with title icon and title',\n    title: 'Title',\n    titleIcon: Database\n  }\n}",...TitleIcon.parameters?.docs?.source}}},Icons.parameters={...Icons.parameters,docs:{...Icons.parameters?.docs,source:{originalSource:'{\n  args: {\n    \'aria-label\': \'List with icons\',\n    items: [<ListItem key="1" icon={HeartCircle}>\n        Option 1\n      </ListItem>, <ListItem key="2" icon={HeartCircle}>\n        Option 2\n      </ListItem>, <ListItem key="3" icon={HeartCircle}>\n        Option 3\n      </ListItem>]\n  }\n}',...Icons.parameters?.docs?.source}}},TrailingIcons.parameters={...TrailingIcons.parameters,docs:{...TrailingIcons.parameters?.docs,source:{originalSource:'{\n  args: {\n    \'aria-label\': \'List with trailing icons\',\n    items: [<ListItem key="1" trailingIcon={ChevronRight}>\n        Option 1\n      </ListItem>, <ListItem key="2" trailingIcon={ChevronRight}>\n        Option 2\n      </ListItem>, <ListItem key="3" trailingIcon={ChevronRight}>\n        Option 3\n      </ListItem>]\n  }\n}',...TrailingIcons.parameters?.docs?.source}}},Avatars.parameters={...Avatars.parameters,docs:{...Avatars.parameters?.docs,source:{originalSource:'{\n  args: {\n    \'aria-label\': \'List with avatars\',\n    items: [<ListItem key="1" avatar={<Avatar name="1" src={Avatar1} />}>\n        Option 1\n      </ListItem>, <ListItem key="2" avatar={<Avatar name="2" src={Avatar2} />}>\n        Option 2\n      </ListItem>, <ListItem key="3" avatar={<Avatar name="Third Person" />}>\n        Option 3\n      </ListItem>]\n  }\n}',...Avatars.parameters?.docs?.source}}},Sections.parameters={...Sections.parameters,docs:{...Sections.parameters?.docs,source:{originalSource:'{\n  args: {\n    \'aria-label\': \'List with multiple sections of items\',\n    items: [<ListGroupHeading key="section-1">Section 1</ListGroupHeading>, <ListItem key="item-1">Option 1</ListItem>, <ListItem key="item-2">Option 2</ListItem>, <ListItem key="item-3">Option 3</ListItem>, <ListGroupHeading key="section-2">Section 2</ListGroupHeading>, <ListItem key="item-4">Option 4</ListItem>, <ListItem key="item-5">Option 5</ListItem>, <ListItem key="item-6">Option 6</ListItem>]\n  }\n}',...Sections.parameters?.docs?.source}}},SecondaryText.parameters={...SecondaryText.parameters,docs:{...SecondaryText.parameters?.docs,source:{originalSource:'{\n  args: {\n    \'aria-label\': \'List with some items with secondary text\',\n    items: [<ListGroupHeading key="section-1">Section 1</ListGroupHeading>, <ListItem key="item-1" text="Option 1" secondaryText="This is secondary text" />, <ListItem key="item-2">Option 2</ListItem>, <ListItem key="item-3">Option 3</ListItem>, <ListGroupHeading key="section-2">Section 2</ListGroupHeading>, <ListItem key="item-4">Option 4</ListItem>, <ListItem key="item-5">Option 5</ListItem>, <ListItem key="item-6" text="Option 6" secondaryText="This is secondary text" />]\n  }\n}',...SecondaryText.parameters?.docs?.source}}},Margin.parameters={...Margin.parameters,docs:{...Margin.parameters?.docs,source:{originalSource:'{\n  args: {\n    \'aria-label\': \'List with some margin\',\n    items: [<ListGroupHeading key="section-1">Section 1</ListGroupHeading>, <ListItem key="item-1">Option 1</ListItem>, <ListItem key="item-2">Option 2</ListItem>, <ListItem key="item-3">Option 3</ListItem>],\n    margin: \'50px\'\n  }\n}',...Margin.parameters?.docs?.source}}},Padding.parameters={...Padding.parameters,docs:{...Padding.parameters?.docs,source:{originalSource:'{\n  args: {\n    \'aria-label\': \'List with some padding\',\n    items: [<ListGroupHeading key="section-1">Section 1</ListGroupHeading>, <ListItem key="item-1">Option 1</ListItem>, <ListItem key="item-2">Option 2</ListItem>, <ListItem key="item-3">Option 3</ListItem>],\n    padding: \'1rem\'\n  }\n}',...Padding.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Title","TitleIcon","Icons","TrailingIcons","Avatars","Sections","SecondaryText","Margin","Padding"]}}]);