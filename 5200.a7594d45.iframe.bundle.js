"use strict";(self.webpackChunk_lifeomic_chroma_react=self.webpackChunk_lifeomic_chroma_react||[]).push([[5200],{"./node_modules/reakit-utils/es/createOnKeyDown.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function createOnKeyDown(_temp){var _ref=void 0===_temp?{}:_temp,keyMap=_ref.keyMap,onKey=_ref.onKey,stopPropagation=_ref.stopPropagation,onKeyDown=_ref.onKeyDown,_ref$shouldKeyDown=_ref.shouldKeyDown,shouldKeyDown=void 0===_ref$shouldKeyDown?function(){return!0}:_ref$shouldKeyDown,_ref$preventDefault=_ref.preventDefault,preventDefault=void 0===_ref$preventDefault||_ref$preventDefault;return function(event){if(keyMap){var _onKeyDown$current,finalKeyMap="function"==typeof keyMap?keyMap(event):keyMap,shouldPreventDefault="function"==typeof preventDefault?preventDefault(event):preventDefault,shouldStopPropagation="function"==typeof stopPropagation?stopPropagation(event):stopPropagation;if(event.key in finalKeyMap){var action=finalKeyMap[event.key];if("function"==typeof action&&shouldKeyDown(event))return shouldPreventDefault&&event.preventDefault(),shouldStopPropagation&&event.stopPropagation(),onKey&&onKey(event),void action(event)}if(onKeyDown&&"current"in onKeyDown)null===(_onKeyDown$current=onKeyDown.current)||void 0===_onKeyDown$current||_onKeyDown$current.call(onKeyDown,event);else null==onKeyDown||onKeyDown(event)}}}__webpack_require__.d(__webpack_exports__,{B:()=>createOnKeyDown})},"./node_modules/reakit/es/Composite/Composite.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>unstable_useComposite});var createComponent=__webpack_require__("./node_modules/reakit-system/es/createComponent.js"),createHook=__webpack_require__("./node_modules/reakit-system/es/createHook.js"),Box=__webpack_require__("./node_modules/reakit/es/Box/Box.js"),_rollupPluginBabelHelpers_959e870d=__webpack_require__("./node_modules/reakit/es/_rollupPluginBabelHelpers-959e870d.js"),react=__webpack_require__("./node_modules/react/index.js"),useForkRef=__webpack_require__("./node_modules/reakit-utils/es/useForkRef.js"),useLiveRef=(__webpack_require__("./node_modules/reakit-warning/es/index.js"),__webpack_require__("./node_modules/reakit-utils/es/useLiveRef.js")),Tabbable=__webpack_require__("./node_modules/reakit/es/Tabbable/Tabbable.js"),useCreateElement=__webpack_require__("./node_modules/reakit-system/es/useCreateElement.js"),createOnKeyDown=__webpack_require__("./node_modules/reakit-utils/es/createOnKeyDown.js"),getDocument=__webpack_require__("./node_modules/reakit-utils/es/getDocument.js");function fireEvent(element,type,eventInit){return element.dispatchEvent(function createEvent(element,type,eventInit){var _eventInit,_eventInit2;if(void 0===eventInit&&(eventInit={}),"function"==typeof Event)return new Event(type,eventInit);var event=(0,getDocument.M)(element).createEvent("Event");return event.initEvent(type,null===(_eventInit=eventInit)||void 0===_eventInit?void 0:_eventInit.bubbles,null===(_eventInit2=eventInit)||void 0===_eventInit2?void 0:_eventInit2.cancelable),event}(element,type,eventInit))}function createKeyboardEvent(element,type,eventInit){if(void 0===eventInit&&(eventInit={}),"function"==typeof KeyboardEvent)return new KeyboardEvent(type,eventInit);var event=(0,getDocument.M)(element).createEvent("KeyboardEvent");return event.initKeyboardEvent(type,eventInit.bubbles,eventInit.cancelable,function getDefaultView(element){return(0,getDocument.M)(element).defaultView||window}(element),eventInit.key,eventInit.location,eventInit.ctrlKey,eventInit.altKey,eventInit.shiftKey,eventInit.metaKey),event}var isSelfTarget=__webpack_require__("./node_modules/reakit-utils/es/isSelfTarget.js"),CompositeState_de01a7f3=__webpack_require__("./node_modules/reakit/es/CompositeState-de01a7f3.js"),getActiveElement=__webpack_require__("./node_modules/reakit-utils/es/getActiveElement.js"),isIE11="undefined"!=typeof window&&"msCrypto"in window;var isIE11$1="undefined"!=typeof window&&"msCrypto"in window;function useKeyboardEventProxy(virtual,currentItem,htmlEventHandler){var eventHandlerRef=(0,useLiveRef.c)(htmlEventHandler);return(0,react.useCallback)((function(event){var _eventHandlerRef$curr;if(virtual&&function canProxyKeyboardEvent(event){return!!(0,isSelfTarget.U)(event)&&!event.metaKey&&"Tab"!==event.key}(event)){var currentElement=null==currentItem?void 0:currentItem.ref.current;if(currentElement&&(function fireKeyboardEvent(element,type,eventInit){return element.dispatchEvent(createKeyboardEvent(element,type,eventInit))}(currentElement,event.type,event),event.currentTarget.contains(currentElement)))return event.stopPropagation(),void event.preventDefault()}null===(_eventHandlerRef$curr=eventHandlerRef.current)||void 0===_eventHandlerRef$curr||_eventHandlerRef$curr.call(eventHandlerRef,event)}),[virtual,currentItem])}function isItem(items,element){return null==items?void 0:items.some((function(item){return!!element&&item.ref.current===element}))}var unstable_useComposite=(0,createHook.B)({name:"Composite",compose:[Tabbable.u],useState:CompositeState_de01a7f3.u,useOptions:function useOptions(options){return(0,_rollupPluginBabelHelpers_959e870d.a)({},options,{currentId:(0,CompositeState_de01a7f3.g)(options)})},useProps:function useProps(options,_ref){var htmlRef=_ref.ref,htmlOnFocus=_ref.onFocus,htmlOnBlur=_ref.onBlur,htmlOnKeyDown=_ref.onKeyDown,htmlOnKeyUp=_ref.onKeyUp,htmlProps=(0,_rollupPluginBabelHelpers_959e870d._)(_ref,["ref","onFocus","onBlur","onKeyDown","onKeyUp"]),ref=(0,react.useRef)(null),currentItem=(0,CompositeState_de01a7f3.f)(options.items,options.currentId),previousItem=(0,react.useRef)(void 0),onFocusRef=(0,useLiveRef.c)(htmlOnFocus),onBlurRef=(0,useLiveRef.c)(htmlOnBlur),activeElementRef=isIE11$1?function useActiveElementRef(elementRef){var activeElementRef=(0,react.useRef)(null);return(0,react.useEffect)((function(){var document=(0,getDocument.M)(elementRef.current),onFocus=function onFocus(event){var target=event.target;activeElementRef.current=target};return document.addEventListener("focus",onFocus,!0),function(){document.removeEventListener("focus",onFocus,!0)}}),[]),activeElementRef}(ref):void 0;(0,react.useEffect)((function(){var self=ref.current;self&&options.unstable_moves&&!currentItem&&self.focus()}),[options.unstable_moves,currentItem]);var onKeyDown=useKeyboardEventProxy(options.unstable_virtual,currentItem,htmlOnKeyDown),onKeyUp=useKeyboardEventProxy(options.unstable_virtual,currentItem,htmlOnKeyUp),onFocus=(0,react.useCallback)((function(event){var _onFocusRef$current2;if(options.unstable_virtual){var _onFocusRef$current,_currentItem$ref$curr,previousActiveElement=(null==activeElementRef?void 0:activeElementRef.current)||event.relatedTarget,previousActiveElementWasItem=isItem(options.items,previousActiveElement);if((0,isSelfTarget.U)(event)&&!previousActiveElementWasItem)return null===(_onFocusRef$current=onFocusRef.current)||void 0===_onFocusRef$current||_onFocusRef$current.call(onFocusRef,event),void(null==currentItem||null===(_currentItem$ref$curr=currentItem.ref.current)||void 0===_currentItem$ref$curr||_currentItem$ref$curr.focus());if(previousActiveElementWasItem)return void event.stopPropagation()}else if((0,isSelfTarget.U)(event)){var _options$setCurrentId;null===(_options$setCurrentId=options.setCurrentId)||void 0===_options$setCurrentId||_options$setCurrentId.call(options,null)}null===(_onFocusRef$current2=onFocusRef.current)||void 0===_onFocusRef$current2||_onFocusRef$current2.call(onFocusRef,event)}),[options.unstable_virtual,options.items,currentItem,options.setCurrentId]),onBlur=(0,react.useCallback)((function(event){var _onBlurRef$current;if(options.unstable_virtual){var _previousItem$current,targetIsItem=isItem(options.items,event.target),nextActiveElement=function getNextActiveElementOnBlur(event){return isIE11?(0,getActiveElement.v)(event.target):event.relatedTarget}(event),nextActiveElementIsItem=isItem(options.items,nextActiveElement);if((0,isSelfTarget.U)(event)&&nextActiveElementIsItem)return(null===(_previousItem$current=previousItem.current)||void 0===_previousItem$current?void 0:_previousItem$current.ref.current)&&fireEvent(previousItem.current.ref.current,"blur",event),previousItem.current=currentItem,void event.stopPropagation();targetIsItem?previousItem.current=currentItem:((null==currentItem?void 0:currentItem.ref.current)&&fireEvent(currentItem.ref.current,"blur",event),previousItem.current=void 0)}null===(_onBlurRef$current=onBlurRef.current)||void 0===_onBlurRef$current||_onBlurRef$current.call(onBlurRef,event)}),[options.unstable_virtual,options.items,currentItem]),onMove=(0,react.useMemo)((function(){return(0,createOnKeyDown.B)({onKeyDown,stopPropagation:!0,shouldKeyDown:function shouldKeyDown(event){return(0,isSelfTarget.U)(event)&&null===options.currentId},keyMap:function keyMap(){var _options$groups,isVertical="horizontal"!==options.orientation,isHorizontal="vertical"!==options.orientation,isGrid=!!(null===(_options$groups=options.groups)||void 0===_options$groups?void 0:_options$groups.length),first=options.first&&function(){return options.first()},last=options.last&&function(){return options.last()};return{ArrowUp:(isGrid||isVertical)&&function up(){if(isGrid){var _options$move,item=function findFirstEnabledItemInTheLastRow(items){return(0,CompositeState_de01a7f3.a)((0,CompositeState_de01a7f3.b)((0,CompositeState_de01a7f3.r)((0,CompositeState_de01a7f3.c)(items))))}(options.items);if(null==item?void 0:item.id)null===(_options$move=options.move)||void 0===_options$move||_options$move.call(options,item.id)}else{var _options$last;null===(_options$last=options.last)||void 0===_options$last||_options$last.call(options)}},ArrowRight:(isGrid||isHorizontal)&&first,ArrowDown:(isGrid||isVertical)&&first,ArrowLeft:(isGrid||isHorizontal)&&last,Home:first,End:last,PageUp:first,PageDown:last}}})}),[onKeyDown,options.currentId,options.orientation,options.groups,options.items,options.move,options.last,options.first]);return(0,_rollupPluginBabelHelpers_959e870d.a)({ref:(0,useForkRef.c)(ref,htmlRef),id:options.baseId,onFocus,onBlur,onKeyDown:onMove,onKeyUp,"aria-activedescendant":options.unstable_virtual&&(null==currentItem?void 0:currentItem.id)||void 0},htmlProps)},useComposeProps:function useComposeProps(options,htmlProps){htmlProps=(0,Box.E)(options,htmlProps,!0);var tabbableHTMLProps=(0,Tabbable.u)(options,htmlProps,!0);return options.unstable_virtual||null===options.currentId?tabbableHTMLProps:(0,_rollupPluginBabelHelpers_959e870d.a)({},htmlProps,{ref:tabbableHTMLProps.ref})}});(0,createComponent.L)({as:"div",useHook:unstable_useComposite,useCreateElement:function useCreateElement$1(type,props,children){return(0,useCreateElement.C)(type,props,children)}})},"./node_modules/reakit/es/Composite/CompositeItem.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>unstable_useCompositeItem});var createComponent=__webpack_require__("./node_modules/reakit-system/es/createComponent.js"),createHook=__webpack_require__("./node_modules/reakit-system/es/createHook.js"),_rollupPluginBabelHelpers_959e870d=__webpack_require__("./node_modules/reakit/es/_rollupPluginBabelHelpers-959e870d.js"),react=__webpack_require__("./node_modules/react/index.js"),useForkRef=__webpack_require__("./node_modules/reakit-utils/es/useForkRef.js"),useLiveRef=(__webpack_require__("./node_modules/reakit-warning/es/index.js"),__webpack_require__("./node_modules/reakit-utils/es/useLiveRef.js")),hasFocusWithin=__webpack_require__("./node_modules/reakit-utils/es/hasFocusWithin.js"),Clickable=__webpack_require__("./node_modules/reakit/es/Clickable/Clickable.js"),createOnKeyDown=__webpack_require__("./node_modules/reakit-utils/es/createOnKeyDown.js"),getDocument=__webpack_require__("./node_modules/reakit-utils/es/getDocument.js"),isSelfTarget=__webpack_require__("./node_modules/reakit-utils/es/isSelfTarget.js"),CompositeState_de01a7f3=__webpack_require__("./node_modules/reakit/es/CompositeState-de01a7f3.js"),Id=__webpack_require__("./node_modules/reakit/es/Id/Id.js");function isTextField(element){try{var isTextInput=element instanceof HTMLInputElement&&null!==element.selectionStart,isTextArea="TEXTAREA"===element.tagName,isContentEditable="true"===element.contentEditable;return isTextInput||isTextArea||isContentEditable||!1}catch(error){return!1}}var contains=__webpack_require__("./node_modules/reakit-utils/es/contains.js");function setTextFieldValue(element,value){element.value=value}function getWidget(item){return item.querySelector("[data-composite-item-widget]")}var unstable_useCompositeItem=(0,createHook.B)({name:"CompositeItem",compose:[Clickable.h,Id.i],useState:CompositeState_de01a7f3.u,keys:["stopId"],useOptions:function useOptions(options){return(0,_rollupPluginBabelHelpers_959e870d.a)({},options,{id:options.stopId||options.id,currentId:(0,CompositeState_de01a7f3.g)(options),unstable_clickOnSpace:!options.unstable_hasActiveWidget&&options.unstable_clickOnSpace})},useProps:function useProps(options,_ref){var htmlRef=_ref.ref,_ref$tabIndex=_ref.tabIndex,htmlTabIndex=void 0===_ref$tabIndex?0:_ref$tabIndex,htmlOnFocus=_ref.onFocus,htmlOnBlur=_ref.onBlur,htmlOnKeyDown=_ref.onKeyDown,htmlOnClick=_ref.onClick,htmlProps=(0,_rollupPluginBabelHelpers_959e870d._)(_ref,["ref","tabIndex","onFocus","onBlur","onKeyDown","onClick"]),ref=(0,react.useRef)(null),id=options.id,trulyDisabled=options.disabled&&!options.focusable,isCurrentItem=options.currentId===id,isCurrentItemRef=(0,useLiveRef.c)(isCurrentItem),hasFocusedComposite=(0,react.useRef)(!1),item=function useItem(options){return(0,react.useMemo)((function(){var _options$items;return null===(_options$items=options.items)||void 0===_options$items?void 0:_options$items.find((function(item){return options.id&&item.id===options.id}))}),[options.items,options.id])}(options),onFocusRef=(0,useLiveRef.c)(htmlOnFocus),onBlurRef=(0,useLiveRef.c)(htmlOnBlur),onKeyDownRef=(0,useLiveRef.c)(htmlOnKeyDown),onClickRef=(0,useLiveRef.c)(htmlOnClick),shouldTabIndex=!options.unstable_virtual&&!options.unstable_hasActiveWidget&&isCurrentItem||!options.items;(0,react.useEffect)((function(){var _options$registerItem;if(id)return null===(_options$registerItem=options.registerItem)||void 0===_options$registerItem||_options$registerItem.call(options,{id,ref,disabled:!!trulyDisabled}),function(){var _options$unregisterIt;null===(_options$unregisterIt=options.unregisterItem)||void 0===_options$unregisterIt||_options$unregisterIt.call(options,id)}}),[id,trulyDisabled,options.registerItem,options.unregisterItem]),(0,react.useEffect)((function(){var self=ref.current;self&&options.unstable_moves&&isCurrentItemRef.current&&self.focus()}),[options.unstable_moves]);var onFocus=(0,react.useCallback)((function(event){var _onFocusRef$current,_options$setCurrentId;if(null===(_onFocusRef$current=onFocusRef.current)||void 0===_onFocusRef$current||_onFocusRef$current.call(onFocusRef,event),!event.defaultPrevented&&!function isPortalEvent(event){return!(0,contains.r)(event.currentTarget,event.target)}(event)&&id&&(null===(_options$setCurrentId=options.setCurrentId)||void 0===_options$setCurrentId||_options$setCurrentId.call(options,id),(0,isSelfTarget.U)(event)&&options.unstable_virtual&&options.baseId)){var target=event.target,composite=(0,getDocument.M)(target).getElementById(options.baseId);composite&&(hasFocusedComposite.current=!0,composite.focus())}}),[id,options.setCurrentId,options.unstable_virtual,options.baseId]),onBlur=(0,react.useCallback)((function(event){var _onBlurRef$current;if(options.unstable_virtual&&hasFocusedComposite.current)return hasFocusedComposite.current=!1,void event.stopPropagation();null===(_onBlurRef$current=onBlurRef.current)||void 0===_onBlurRef$current||_onBlurRef$current.call(onBlurRef,event)}),[options.unstable_virtual]),onCharacterKeyDown=(0,react.useCallback)((function(event){var _onKeyDownRef$current;if(null===(_onKeyDownRef$current=onKeyDownRef.current)||void 0===_onKeyDownRef$current||_onKeyDownRef$current.call(onKeyDownRef,event),(0,isSelfTarget.U)(event)&&1===event.key.length&&" "!==event.key){var widget=getWidget(event.currentTarget);if(widget&&isTextField(widget)){widget.focus();var key=event.key;window.requestAnimationFrame((function(){setTextFieldValue(widget,key)}))}}}),[]),onKeyDown=(0,react.useMemo)((function(){return(0,createOnKeyDown.B)({onKeyDown:onCharacterKeyDown,stopPropagation:!0,shouldKeyDown:isSelfTarget.U,keyMap:function keyMap(){var isVertical="horizontal"!==options.orientation,isHorizontal="vertical"!==options.orientation,isGrid=!!(null==item?void 0:item.groupId),Delete=function Delete(event){var widget=getWidget(event.currentTarget);widget&&isTextField(widget)&&setTextFieldValue(widget,"")},up=options.up&&function(){return options.up()},next=options.next&&function(){return options.next()},down=options.down&&function(){return options.down()},previous=options.previous&&function(){return options.previous()};return{Delete,Backspace:Delete,ArrowUp:(isGrid||isVertical)&&up,ArrowRight:(isGrid||isHorizontal)&&next,ArrowDown:(isGrid||isVertical)&&down,ArrowLeft:(isGrid||isHorizontal)&&previous,Home:function Home(event){var _options$first,_options$previous;!isGrid||event.ctrlKey?null===(_options$first=options.first)||void 0===_options$first||_options$first.call(options):null===(_options$previous=options.previous)||void 0===_options$previous||_options$previous.call(options,!0)},End:function End(event){var _options$last,_options$next;!isGrid||event.ctrlKey?null===(_options$last=options.last)||void 0===_options$last||_options$last.call(options):null===(_options$next=options.next)||void 0===_options$next||_options$next.call(options,!0)},PageUp:function PageUp(){var _options$up,_options$first2;isGrid?null===(_options$up=options.up)||void 0===_options$up||_options$up.call(options,!0):null===(_options$first2=options.first)||void 0===_options$first2||_options$first2.call(options)},PageDown:function PageDown(){var _options$down,_options$last2;isGrid?null===(_options$down=options.down)||void 0===_options$down||_options$down.call(options,!0):null===(_options$last2=options.last)||void 0===_options$last2||_options$last2.call(options)}}}})}),[onCharacterKeyDown,options.orientation,item,options.up,options.next,options.down,options.previous,options.first,options.last]),onClick=(0,react.useCallback)((function(event){var _onClickRef$current;if(null===(_onClickRef$current=onClickRef.current)||void 0===_onClickRef$current||_onClickRef$current.call(onClickRef,event),!event.defaultPrevented){var widget=getWidget(event.currentTarget);widget&&!(0,hasFocusWithin.B)(widget)?widget.focus():(0,isSelfTarget.U)(event)&&!(0,hasFocusWithin.B)(event.currentTarget)&&self.focus()}}),[]);return(0,_rollupPluginBabelHelpers_959e870d.a)({ref:(0,useForkRef.c)(ref,htmlRef),id,tabIndex:shouldTabIndex?htmlTabIndex:-1,"aria-selected":!(!options.unstable_virtual||!isCurrentItem)||void 0,onFocus,onBlur,onKeyDown,onClick},htmlProps)}});(0,createComponent.L)({as:"button",memo:!0,useHook:unstable_useCompositeItem})},"./node_modules/reakit/es/CompositeState-de01a7f3.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>findFirstEnabledItem,b:()=>flatten,c:()=>groupItems,f:()=>findEnabledItemById,g:()=>getCurrentId,r:()=>reverse,u:()=>unstable_useCompositeState});var _rollupPluginBabelHelpers_959e870d=__webpack_require__("./node_modules/reakit/es/_rollupPluginBabelHelpers-959e870d.js"),react=__webpack_require__("./node_modules/react/index.js"),useSealedState=__webpack_require__("./node_modules/reakit-utils/es/useSealedState.js");function applyState(argument,currentValue){return function isUpdater(argument){return"function"==typeof argument}(argument)?argument(currentValue):argument}var IdState=__webpack_require__("./node_modules/reakit/es/Id/IdState.js");function reverse(array){return array.slice().reverse()}function findDOMIndex(items,item){return items.findIndex((function(currentItem){return!(!currentItem.ref.current||!item.ref.current)&&Boolean(currentItem.ref.current.compareDocumentPosition(item.ref.current)&Node.DOCUMENT_POSITION_PRECEDING)}))}function findFirstEnabledItem(items,excludeId){return excludeId?items.find((function(item){return!item.disabled&&item.id!==excludeId})):items.find((function(item){return!item.disabled}))}function findEnabledItemById(items,id){if(id)return null==items?void 0:items.find((function(item){return item.id===id&&!item.disabled}))}function groupItems(items){for(var _step,groups=[[]],_loop=function _loop(){var item=_step.value,group=groups.find((function(g){return!g[0]||g[0].groupId===item.groupId}));group?group.push(item):groups.push([item])},_iterator=(0,_rollupPluginBabelHelpers_959e870d.b)(items);!(_step=_iterator()).done;)_loop();return groups}function getMaxLength(rows){for(var _step,maxLength=0,_iterator=(0,_rollupPluginBabelHelpers_959e870d.b)(rows);!(_step=_iterator()).done;){var length=_step.value.length;length>maxLength&&(maxLength=length)}return maxLength}function verticalizeItems(items){for(var groups=groupItems(items),maxLength=getMaxLength(groups),verticalized=[],i=0;i<maxLength;i+=1)for(var _step,_iterator=(0,_rollupPluginBabelHelpers_959e870d.b)(groups);!(_step=_iterator()).done;){var group=_step.value;group[i]&&verticalized.push((0,_rollupPluginBabelHelpers_959e870d.a)({},group[i],{groupId:group[i].groupId?""+i:void 0}))}return verticalized}function flatten(grid){for(var _step,flattened=[],_iterator=(0,_rollupPluginBabelHelpers_959e870d.b)(grid);!(_step=_iterator()).done;){var row=_step.value;flattened.push.apply(flattened,row)}return flattened}function fillGroups(groups){for(var _step,maxLength=getMaxLength(groups),_iterator=(0,_rollupPluginBabelHelpers_959e870d.b)(groups);!(_step=_iterator()).done;){var group=_step.value;if(group.length<maxLength)for(var i=0;i<maxLength;i+=1)group[i]||(group[i]={id:"__EMPTY_ITEM__",disabled:!0,ref:{current:null},groupId:group[i-1].groupId})}return groups}function getCurrentId(options,passedId){var _findFirstEnabledItem;return passedId||null===passedId?passedId:options.currentId||null===options.currentId?options.currentId:null===(_findFirstEnabledItem=findFirstEnabledItem(options.items||[]))||void 0===_findFirstEnabledItem?void 0:_findFirstEnabledItem.id}var nullItem={id:null,ref:{current:null}};function getItemsInGroup(items,groupId){return items.filter((function(item){return item.groupId===groupId}))}var map={horizontal:"vertical",vertical:"horizontal"};function addItemAtIndex(array,item,index){return index in array?[].concat(array.slice(0,index),[item],array.slice(index)):[].concat(array,[item])}function reducer(state,action){var virtual=state.unstable_virtual,rtl=state.rtl,orientation=state.orientation,items=state.items,groups=state.groups,currentId=state.currentId,loop=state.loop,wrap=state.wrap,pastIds=state.pastIds,moves=state.unstable_moves,initialVirtual=state.initialVirtual,initialRTL=state.initialRTL,initialOrientation=state.initialOrientation,initialCurrentId=state.initialCurrentId,initialLoop=state.initialLoop,initialWrap=state.initialWrap;switch(action.type){case"registerGroup":var _group=action.group;if(0===groups.length)return(0,_rollupPluginBabelHelpers_959e870d.a)({},state,{groups:[_group]});var index=findDOMIndex(groups,_group);return(0,_rollupPluginBabelHelpers_959e870d.a)({},state,{groups:addItemAtIndex(groups,_group,index)});case"unregisterGroup":var _id=action.id,nextGroups=groups.filter((function(group){return group.id!==_id}));return nextGroups.length===groups.length?state:(0,_rollupPluginBabelHelpers_959e870d.a)({},state,{groups:nextGroups});case"registerItem":var _item=action.item,_group2=groups.find((function(r){var _r$ref$current;return null===(_r$ref$current=r.ref.current)||void 0===_r$ref$current?void 0:_r$ref$current.contains(_item.ref.current)})),nextItem=(0,_rollupPluginBabelHelpers_959e870d.a)({groupId:null==_group2?void 0:_group2.id},_item),_index=findDOMIndex(items,nextItem),nextState=(0,_rollupPluginBabelHelpers_959e870d.a)({},state,{items:addItemAtIndex(items,nextItem,_index)});return(0,_rollupPluginBabelHelpers_959e870d.a)({},nextState,{currentId:getCurrentId(nextState)});case"unregisterItem":var _id2=action.id,nextItems=items.filter((function(item){return item.id!==_id2}));if(nextItems.length===items.length)return state;var nextPastIds=pastIds.filter((function(pastId){return pastId!==_id2})),_nextState=(0,_rollupPluginBabelHelpers_959e870d.a)({},state,{pastIds:nextPastIds,items:nextItems});if(currentId&&currentId===_id2){var nextId=getCurrentId((0,_rollupPluginBabelHelpers_959e870d.a)({},_nextState,{currentId:nextPastIds[0]}));return(0,_rollupPluginBabelHelpers_959e870d.a)({},_nextState,{currentId:nextId})}return _nextState;case"move":var _id3=action.id;if(void 0===_id3)return state;var filteredPastIds=pastIds.filter((function(pastId){return pastId!==currentId&&pastId!==_id3})),_nextPastIds=currentId?[currentId].concat(filteredPastIds):filteredPastIds;if(null===_id3)return(0,_rollupPluginBabelHelpers_959e870d.a)({},state,{pastIds:_nextPastIds,unstable_moves:moves+1,currentId:getCurrentId(state,_id3)});var _item2=findEnabledItemById(items,_id3);return(0,_rollupPluginBabelHelpers_959e870d.a)({},state,{pastIds:_nextPastIds,unstable_moves:_item2?moves+1:moves,currentId:getCurrentId(state,null==_item2?void 0:_item2.id)});case"next":if(null==currentId)return reducer(state,(0,_rollupPluginBabelHelpers_959e870d.a)({},action,{type:"first"}));var isRTL=rtl&&"vertical"!==orientation,allItems=isRTL?reverse(items):items,currentItem=allItems.find((function(item){return item.id===currentId}));if(!currentItem)return reducer(state,(0,_rollupPluginBabelHelpers_959e870d.a)({},action,{type:"first"}));var isGrid=!!currentItem.groupId,currentIndex=allItems.indexOf(currentItem),_nextItems=allItems.slice(currentIndex+1),nextItemsInGroup=getItemsInGroup(_nextItems,currentItem.groupId);if(action.allTheWay){var _nextItem2=findFirstEnabledItem(isRTL?getItemsInGroup(allItems,currentItem.groupId):reverse(nextItemsInGroup));return reducer(state,(0,_rollupPluginBabelHelpers_959e870d.a)({},action,{type:"move",id:null==_nextItem2?void 0:_nextItem2.id}))}var oppositeOrientation=function getOppositeOrientation(orientation){return orientation&&map[orientation]}(isGrid?orientation||"horizontal":orientation),canLoop=loop&&loop!==oppositeOrientation,canWrap=isGrid&&wrap&&wrap!==oppositeOrientation,hasNullItem=action.hasNullItem||!isGrid&&canLoop&&null===initialCurrentId;if(canLoop){var sortedItems=function placeItemsAfter(items,id,shouldInsertNullItem){var index=items.findIndex((function(item){return item.id===id}));return[].concat(items.slice(index+1),shouldInsertNullItem?[nullItem]:[],items.slice(0,index))}(canWrap&&!hasNullItem?allItems:getItemsInGroup(allItems,currentItem.groupId),currentId,hasNullItem),_nextItem3=findFirstEnabledItem(sortedItems,currentId);return reducer(state,(0,_rollupPluginBabelHelpers_959e870d.a)({},action,{type:"move",id:null==_nextItem3?void 0:_nextItem3.id}))}if(canWrap){var _nextItem4=findFirstEnabledItem(hasNullItem?nextItemsInGroup:_nextItems,currentId),_nextId=hasNullItem?(null==_nextItem4?void 0:_nextItem4.id)||null:null==_nextItem4?void 0:_nextItem4.id;return reducer(state,(0,_rollupPluginBabelHelpers_959e870d.a)({},action,{type:"move",id:_nextId}))}var _nextItem=findFirstEnabledItem(nextItemsInGroup,currentId);return reducer(state,!_nextItem&&hasNullItem?(0,_rollupPluginBabelHelpers_959e870d.a)({},action,{type:"move",id:null}):(0,_rollupPluginBabelHelpers_959e870d.a)({},action,{type:"move",id:null==_nextItem?void 0:_nextItem.id}));case"previous":var _hasNullItem=!!!groups.length&&null===initialCurrentId,_nextState2=reducer((0,_rollupPluginBabelHelpers_959e870d.a)({},state,{items:reverse(items)}),(0,_rollupPluginBabelHelpers_959e870d.a)({},action,{type:"next",hasNullItem:_hasNullItem}));return(0,_rollupPluginBabelHelpers_959e870d.a)({},_nextState2,{items});case"down":var verticalItems=verticalizeItems(flatten(fillGroups(groupItems(items)))),_hasNullItem2=loop&&"horizontal"!==loop&&null===initialCurrentId,_nextState3=reducer((0,_rollupPluginBabelHelpers_959e870d.a)({},state,{orientation:"vertical",items:verticalItems}),(0,_rollupPluginBabelHelpers_959e870d.a)({},action,{type:"next",hasNullItem:_hasNullItem2}));return(0,_rollupPluginBabelHelpers_959e870d.a)({},_nextState3,{orientation,items});case"up":var _verticalItems=verticalizeItems(reverse(flatten(fillGroups(groupItems(items))))),_hasNullItem3=null===initialCurrentId,_nextState4=reducer((0,_rollupPluginBabelHelpers_959e870d.a)({},state,{orientation:"vertical",items:_verticalItems}),(0,_rollupPluginBabelHelpers_959e870d.a)({},action,{type:"next",hasNullItem:_hasNullItem3}));return(0,_rollupPluginBabelHelpers_959e870d.a)({},_nextState4,{orientation,items});case"first":var firstItem=findFirstEnabledItem(items);return reducer(state,(0,_rollupPluginBabelHelpers_959e870d.a)({},action,{type:"move",id:null==firstItem?void 0:firstItem.id}));case"last":var _nextState5=reducer((0,_rollupPluginBabelHelpers_959e870d.a)({},state,{items:reverse(items)}),(0,_rollupPluginBabelHelpers_959e870d.a)({},action,{type:"first"}));return(0,_rollupPluginBabelHelpers_959e870d.a)({},_nextState5,{items});case"setVirtual":return(0,_rollupPluginBabelHelpers_959e870d.a)({},state,{unstable_virtual:applyState(action.virtual,virtual)});case"setRTL":return(0,_rollupPluginBabelHelpers_959e870d.a)({},state,{rtl:applyState(action.rtl,rtl)});case"setOrientation":return(0,_rollupPluginBabelHelpers_959e870d.a)({},state,{orientation:applyState(action.orientation,orientation)});case"setCurrentId":var nextCurrentId=getCurrentId((0,_rollupPluginBabelHelpers_959e870d.a)({},state,{currentId:applyState(action.currentId,currentId)}));return(0,_rollupPluginBabelHelpers_959e870d.a)({},state,{currentId:nextCurrentId});case"setLoop":return(0,_rollupPluginBabelHelpers_959e870d.a)({},state,{loop:applyState(action.loop,loop)});case"setWrap":return(0,_rollupPluginBabelHelpers_959e870d.a)({},state,{wrap:applyState(action.wrap,wrap)});case"reset":return(0,_rollupPluginBabelHelpers_959e870d.a)({},state,{unstable_virtual:initialVirtual,rtl:initialRTL,orientation:initialOrientation,currentId:initialCurrentId,loop:initialLoop,wrap:initialWrap,unstable_moves:0,pastIds:[]});default:throw new Error}}function useAction(fn){return(0,react.useCallback)(fn,[])}function unstable_useCompositeState(initialState){void 0===initialState&&(initialState={});var _useSealedState=(0,useSealedState.T)(initialState),_useSealedState$unsta=_useSealedState.unstable_virtual,virtual=void 0!==_useSealedState$unsta&&_useSealedState$unsta,_useSealedState$rtl=_useSealedState.rtl,rtl=void 0!==_useSealedState$rtl&&_useSealedState$rtl,orientation=_useSealedState.orientation,currentId=_useSealedState.currentId,_useSealedState$loop=_useSealedState.loop,loop=void 0!==_useSealedState$loop&&_useSealedState$loop,_useSealedState$wrap=_useSealedState.wrap,wrap=void 0!==_useSealedState$wrap&&_useSealedState$wrap,sealed=(0,_rollupPluginBabelHelpers_959e870d._)(_useSealedState,["unstable_virtual","rtl","orientation","currentId","loop","wrap"]),_React$useReducer=(0,react.useReducer)(reducer,{unstable_virtual:virtual,rtl,orientation,items:[],groups:[],currentId,loop,wrap,unstable_moves:0,pastIds:[],initialVirtual:virtual,initialRTL:rtl,initialOrientation:orientation,initialCurrentId:currentId,initialLoop:loop,initialWrap:wrap}),_React$useReducer$=_React$useReducer[0],state=(_React$useReducer$.pastIds,_React$useReducer$.initialVirtual,_React$useReducer$.initialRTL,_React$useReducer$.initialOrientation,_React$useReducer$.initialCurrentId,_React$useReducer$.initialLoop,_React$useReducer$.initialWrap,(0,_rollupPluginBabelHelpers_959e870d._)(_React$useReducer$,["pastIds","initialVirtual","initialRTL","initialOrientation","initialCurrentId","initialLoop","initialWrap"])),dispatch=_React$useReducer[1],_React$useState=(0,react.useState)(!1),hasActiveWidget=_React$useState[0],setHasActiveWidget=_React$useState[1],idState=(0,IdState.C)(sealed);return(0,_rollupPluginBabelHelpers_959e870d.a)({},idState,{},state,{unstable_hasActiveWidget:hasActiveWidget,unstable_setHasActiveWidget:setHasActiveWidget,registerItem:useAction((function(item){return dispatch({type:"registerItem",item})})),unregisterItem:useAction((function(id){return dispatch({type:"unregisterItem",id})})),registerGroup:useAction((function(group){return dispatch({type:"registerGroup",group})})),unregisterGroup:useAction((function(id){return dispatch({type:"unregisterGroup",id})})),move:useAction((function(id){return dispatch({type:"move",id})})),next:useAction((function(allTheWay){return dispatch({type:"next",allTheWay})})),previous:useAction((function(allTheWay){return dispatch({type:"previous",allTheWay})})),up:useAction((function(allTheWay){return dispatch({type:"up",allTheWay})})),down:useAction((function(allTheWay){return dispatch({type:"down",allTheWay})})),first:useAction((function(){return dispatch({type:"first"})})),last:useAction((function(){return dispatch({type:"last"})})),unstable_setVirtual:useAction((function(value){return dispatch({type:"setVirtual",virtual:value})})),setRTL:useAction((function(value){return dispatch({type:"setRTL",rtl:value})})),setOrientation:useAction((function(value){return dispatch({type:"setOrientation",orientation:value})})),setCurrentId:useAction((function(value){return dispatch({type:"setCurrentId",currentId:value})})),setLoop:useAction((function(value){return dispatch({type:"setLoop",loop:value})})),setWrap:useAction((function(value){return dispatch({type:"setWrap",wrap:value})})),reset:useAction((function(){return dispatch({type:"reset"})}))})}var keys=[].concat(IdState.C.__keys,["unstable_virtual","rtl","orientation","items","groups","currentId","loop","wrap","unstable_moves","unstable_hasActiveWidget","registerItem","unregisterItem","registerGroup","unregisterGroup","move","next","previous","up","down","first","last","unstable_setVirtual","setRTL","setOrientation","setCurrentId","setLoop","setWrap","reset","unstable_setHasActiveWidget"]);unstable_useCompositeState.__keys=keys},"./node_modules/reakit/es/Id/Id.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>unstable_useId});var reakit_system_createComponent__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/reakit-system/es/createComponent.js"),reakit_system_createHook__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/reakit-system/es/createHook.js"),_rollupPluginBabelHelpers_959e870d_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/reakit/es/_rollupPluginBabelHelpers-959e870d.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_IdProvider_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/reakit/es/Id/IdProvider.js"),_IdState_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/reakit/es/Id/IdState.js"),unstable_useId=(0,reakit_system_createHook__WEBPACK_IMPORTED_MODULE_1__.B)({useState:_IdState_js__WEBPACK_IMPORTED_MODULE_2__.C,keys:["id"],useOptions:function useOptions(options,htmlProps){var generateId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_IdProvider_js__WEBPACK_IMPORTED_MODULE_3__.U),suffix=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((function(){return options.unstable_idCountRef?(options.unstable_idCountRef.current+=1,"-"+options.unstable_idCountRef.current):options.baseId?"-"+generateId(""):""}))[0],baseId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return options.baseId||generateId()}),[options.baseId,generateId]),id=htmlProps.id||options.id||""+baseId+suffix;return(0,_rollupPluginBabelHelpers_959e870d_js__WEBPACK_IMPORTED_MODULE_4__.a)({},options,{id})},useProps:function useProps(options,htmlProps){return(0,_rollupPluginBabelHelpers_959e870d_js__WEBPACK_IMPORTED_MODULE_4__.a)({id:options.id},htmlProps)}});(0,reakit_system_createComponent__WEBPACK_IMPORTED_MODULE_5__.L)({as:"div",useHook:unstable_useId})}}]);