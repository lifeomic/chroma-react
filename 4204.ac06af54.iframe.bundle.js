(self.webpackChunk_lifeomic_chroma_react=self.webpackChunk_lifeomic_chroma_react||[]).push([[4204,225],{"./node_modules/focus-visible/dist/focus-visible.js":function(){!function(){"use strict";function applyFocusVisiblePolyfill(scope){var hadKeyboardEvent=!0,hadFocusVisibleRecently=!1,hadFocusVisibleRecentlyTimeout=null,inputTypesWhitelist={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function isValidFocusTarget(el){return!!(el&&el!==document&&"HTML"!==el.nodeName&&"BODY"!==el.nodeName&&"classList"in el&&"contains"in el.classList)}function focusTriggersKeyboardModality(el){var type=el.type,tagName=el.tagName;return!("INPUT"!==tagName||!inputTypesWhitelist[type]||el.readOnly)||"TEXTAREA"===tagName&&!el.readOnly||!!el.isContentEditable}function addFocusVisibleClass(el){el.classList.contains("focus-visible")||(el.classList.add("focus-visible"),el.setAttribute("data-focus-visible-added",""))}function removeFocusVisibleClass(el){el.hasAttribute("data-focus-visible-added")&&(el.classList.remove("focus-visible"),el.removeAttribute("data-focus-visible-added"))}function onKeyDown(e){e.metaKey||e.altKey||e.ctrlKey||(isValidFocusTarget(scope.activeElement)&&addFocusVisibleClass(scope.activeElement),hadKeyboardEvent=!0)}function onPointerDown(e){hadKeyboardEvent=!1}function onFocus(e){isValidFocusTarget(e.target)&&(hadKeyboardEvent||focusTriggersKeyboardModality(e.target))&&addFocusVisibleClass(e.target)}function onBlur(e){isValidFocusTarget(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(hadFocusVisibleRecently=!0,window.clearTimeout(hadFocusVisibleRecentlyTimeout),hadFocusVisibleRecentlyTimeout=window.setTimeout((function(){hadFocusVisibleRecently=!1}),100),removeFocusVisibleClass(e.target))}function onVisibilityChange(e){"hidden"===document.visibilityState&&(hadFocusVisibleRecently&&(hadKeyboardEvent=!0),addInitialPointerMoveListeners())}function addInitialPointerMoveListeners(){document.addEventListener("mousemove",onInitialPointerMove),document.addEventListener("mousedown",onInitialPointerMove),document.addEventListener("mouseup",onInitialPointerMove),document.addEventListener("pointermove",onInitialPointerMove),document.addEventListener("pointerdown",onInitialPointerMove),document.addEventListener("pointerup",onInitialPointerMove),document.addEventListener("touchmove",onInitialPointerMove),document.addEventListener("touchstart",onInitialPointerMove),document.addEventListener("touchend",onInitialPointerMove)}function removeInitialPointerMoveListeners(){document.removeEventListener("mousemove",onInitialPointerMove),document.removeEventListener("mousedown",onInitialPointerMove),document.removeEventListener("mouseup",onInitialPointerMove),document.removeEventListener("pointermove",onInitialPointerMove),document.removeEventListener("pointerdown",onInitialPointerMove),document.removeEventListener("pointerup",onInitialPointerMove),document.removeEventListener("touchmove",onInitialPointerMove),document.removeEventListener("touchstart",onInitialPointerMove),document.removeEventListener("touchend",onInitialPointerMove)}function onInitialPointerMove(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(hadKeyboardEvent=!1,removeInitialPointerMoveListeners())}document.addEventListener("keydown",onKeyDown,!0),document.addEventListener("mousedown",onPointerDown,!0),document.addEventListener("pointerdown",onPointerDown,!0),document.addEventListener("touchstart",onPointerDown,!0),document.addEventListener("visibilitychange",onVisibilityChange,!0),addInitialPointerMoveListeners(),scope.addEventListener("focus",onFocus,!0),scope.addEventListener("blur",onBlur,!0),scope.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&scope.host?scope.host.setAttribute("data-js-focus-visible",""):scope.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var event;window.applyFocusVisiblePolyfill=applyFocusVisiblePolyfill;try{event=new CustomEvent("focus-visible-polyfill-ready")}catch(error){(event=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(event)}"undefined"!=typeof document&&applyFocusVisiblePolyfill(document)}()},"./node_modules/reakit/es/Tooltip/Tooltip.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>Tooltip});var reakit_system_createComponent__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/reakit-system/es/createComponent.js"),reakit_system_createHook__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/reakit-system/es/createHook.js"),_rollupPluginBabelHelpers_959e870d_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/reakit/es/_rollupPluginBabelHelpers-959e870d.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),reakit_utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/reakit-utils/es/useForkRef.js"),reakit_utils_getDocument__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/reakit-utils/es/getDocument.js"),_Disclosure_DisclosureContent_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/reakit/es/Disclosure/DisclosureContent.js"),_Portal_Portal_js__WEBPACK_IMPORTED_MODULE_7__=(__webpack_require__("./node_modules/react-dom/index.js"),__webpack_require__("./node_modules/reakit/es/Portal/Portal.js")),_TooltipState_6abdaa20_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/reakit/es/TooltipState-6abdaa20.js");function globallyHideTooltipOnEscape(event){event.defaultPrevented||"Escape"===event.key&&_TooltipState_6abdaa20_js__WEBPACK_IMPORTED_MODULE_2__.g.show(null)}var useTooltip=(0,reakit_system_createHook__WEBPACK_IMPORTED_MODULE_3__.B)({name:"Tooltip",compose:_Disclosure_DisclosureContent_js__WEBPACK_IMPORTED_MODULE_4__.f,useState:_TooltipState_6abdaa20_js__WEBPACK_IMPORTED_MODULE_2__.u,keys:["unstable_portal"],useOptions:function useOptions(_ref){var _ref$unstable_portal=_ref.unstable_portal,unstable_portal=void 0===_ref$unstable_portal||_ref$unstable_portal,options=(0,_rollupPluginBabelHelpers_959e870d_js__WEBPACK_IMPORTED_MODULE_5__._)(_ref,["unstable_portal"]);return(0,_rollupPluginBabelHelpers_959e870d_js__WEBPACK_IMPORTED_MODULE_5__.a)({unstable_portal},options)},useProps:function useProps(options,_ref2){var htmlRef=_ref2.ref,htmlStyle=_ref2.style,htmlWrapElement=_ref2.wrapElement,htmlProps=(0,_rollupPluginBabelHelpers_959e870d_js__WEBPACK_IMPORTED_MODULE_5__._)(_ref2,["ref","style","wrapElement"]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var _options$unstable_pop;(0,reakit_utils_getDocument__WEBPACK_IMPORTED_MODULE_6__.M)(null===(_options$unstable_pop=options.unstable_popoverRef)||void 0===_options$unstable_pop?void 0:_options$unstable_pop.current).addEventListener("keydown",globallyHideTooltipOnEscape)}),[]);var wrapElement=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(element){return options.unstable_portal&&(element=(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Portal_Portal_js__WEBPACK_IMPORTED_MODULE_7__.h,null,element)),htmlWrapElement?htmlWrapElement(element):element}),[options.unstable_portal,htmlWrapElement]);return(0,_rollupPluginBabelHelpers_959e870d_js__WEBPACK_IMPORTED_MODULE_5__.a)({ref:(0,reakit_utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__.c)(options.unstable_popoverRef,htmlRef),role:"tooltip",style:(0,_rollupPluginBabelHelpers_959e870d_js__WEBPACK_IMPORTED_MODULE_5__.a)({},options.unstable_popoverStyles,{pointerEvents:"none"},htmlStyle),wrapElement},htmlProps)}}),Tooltip=(0,reakit_system_createComponent__WEBPACK_IMPORTED_MODULE_9__.L)({as:"div",memo:!0,useHook:useTooltip})},"./node_modules/reakit/es/Tooltip/TooltipReference.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{v:()=>TooltipReference});var reakit_system_createComponent__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/reakit-system/es/createComponent.js"),reakit_system_createHook__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/reakit-system/es/createHook.js"),_Box_Box_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/reakit/es/Box/Box.js"),_rollupPluginBabelHelpers_959e870d_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/reakit/es/_rollupPluginBabelHelpers-959e870d.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),reakit_utils_useForkRef__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/reakit-utils/es/useForkRef.js"),reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/reakit-utils/es/useLiveRef.js"),_TooltipState_6abdaa20_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/reakit/es/TooltipState-6abdaa20.js"),useTooltipReference=(0,reakit_system_createHook__WEBPACK_IMPORTED_MODULE_1__.B)({name:"TooltipReference",compose:_Box_Box_js__WEBPACK_IMPORTED_MODULE_2__.E,useState:_TooltipState_6abdaa20_js__WEBPACK_IMPORTED_MODULE_3__.u,useProps:function useProps(options,_ref){var htmlRef=_ref.ref,htmlOnFocus=_ref.onFocus,htmlOnBlur=_ref.onBlur,htmlOnMouseEnter=_ref.onMouseEnter,htmlOnMouseLeave=_ref.onMouseLeave,htmlProps=(0,_rollupPluginBabelHelpers_959e870d_js__WEBPACK_IMPORTED_MODULE_4__._)(_ref,["ref","onFocus","onBlur","onMouseEnter","onMouseLeave"]),onFocusRef=(0,reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_5__.c)(htmlOnFocus),onBlurRef=(0,reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_5__.c)(htmlOnBlur),onMouseEnterRef=(0,reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_5__.c)(htmlOnMouseEnter),onMouseLeaveRef=(0,reakit_utils_useLiveRef__WEBPACK_IMPORTED_MODULE_5__.c)(htmlOnMouseLeave),onFocus=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(event){var _onFocusRef$current,_options$show;null===(_onFocusRef$current=onFocusRef.current)||void 0===_onFocusRef$current||_onFocusRef$current.call(onFocusRef,event),event.defaultPrevented||null===(_options$show=options.show)||void 0===_options$show||_options$show.call(options)}),[options.show]),onBlur=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(event){var _onBlurRef$current,_options$hide;null===(_onBlurRef$current=onBlurRef.current)||void 0===_onBlurRef$current||_onBlurRef$current.call(onBlurRef,event),event.defaultPrevented||null===(_options$hide=options.hide)||void 0===_options$hide||_options$hide.call(options)}),[options.hide]),onMouseEnter=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(event){var _onMouseEnterRef$curr,_options$show2;null===(_onMouseEnterRef$curr=onMouseEnterRef.current)||void 0===_onMouseEnterRef$curr||_onMouseEnterRef$curr.call(onMouseEnterRef,event),event.defaultPrevented||null===(_options$show2=options.show)||void 0===_options$show2||_options$show2.call(options)}),[options.show]),onMouseLeave=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(event){var _onMouseLeaveRef$curr,_options$hide2;null===(_onMouseLeaveRef$curr=onMouseLeaveRef.current)||void 0===_onMouseLeaveRef$curr||_onMouseLeaveRef$curr.call(onMouseLeaveRef,event),event.defaultPrevented||null===(_options$hide2=options.hide)||void 0===_options$hide2||_options$hide2.call(options)}),[options.hide]);return(0,_rollupPluginBabelHelpers_959e870d_js__WEBPACK_IMPORTED_MODULE_4__.a)({ref:(0,reakit_utils_useForkRef__WEBPACK_IMPORTED_MODULE_6__.c)(options.unstable_referenceRef,htmlRef),tabIndex:0,onFocus,onBlur,onMouseEnter,onMouseLeave,"aria-describedby":options.baseId},htmlProps)}}),TooltipReference=(0,reakit_system_createComponent__WEBPACK_IMPORTED_MODULE_7__.L)({as:"div",useHook:useTooltipReference})},"./node_modules/reakit/es/TooltipState-6abdaa20.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{g:()=>globalState,u:()=>useTooltipState});var _rollupPluginBabelHelpers_959e870d_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/reakit/es/_rollupPluginBabelHelpers-959e870d.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),reakit_utils_useSealedState__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/reakit-utils/es/useSealedState.js"),_Popover_PopoverState_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/reakit/es/Popover/PopoverState.js"),globalState={currentTooltipId:null,listeners:new Set,subscribe:function subscribe(listener){var _this=this;return this.listeners.add(listener),function(){_this.listeners.delete(listener)}},show:function show(id){this.currentTooltipId=id,this.listeners.forEach((function(listener){return listener(id)}))},hide:function hide(id){this.currentTooltipId===id&&(this.currentTooltipId=null,this.listeners.forEach((function(listener){return listener(null)})))}};function useTooltipState(initialState){void 0===initialState&&(initialState={});var _useSealedState=(0,reakit_utils_useSealedState__WEBPACK_IMPORTED_MODULE_1__.T)(initialState),_useSealedState$place=_useSealedState.placement,placement=void 0===_useSealedState$place?"top":_useSealedState$place,_useSealedState$unsta=_useSealedState.unstable_timeout,initialTimeout=void 0===_useSealedState$unsta?0:_useSealedState$unsta,sealed=(0,_rollupPluginBabelHelpers_959e870d_js__WEBPACK_IMPORTED_MODULE_2__._)(_useSealedState,["placement","unstable_timeout"]),_React$useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialTimeout),timeout=_React$useState[0],setTimeout=_React$useState[1],showTimeout=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),hideTimeout=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),popover=(0,_Popover_PopoverState_js__WEBPACK_IMPORTED_MODULE_3__.v)((0,_rollupPluginBabelHelpers_959e870d_js__WEBPACK_IMPORTED_MODULE_2__.a)({},sealed,{placement})),clearTimeouts=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){null!==showTimeout.current&&window.clearTimeout(showTimeout.current),null!==hideTimeout.current&&window.clearTimeout(hideTimeout.current)}),[]),hide=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){clearTimeouts(),popover.hide(),hideTimeout.current=window.setTimeout((function(){globalState.hide(popover.baseId)}),timeout)}),[clearTimeouts,popover.hide,timeout,popover.baseId]),show=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){clearTimeouts(),!timeout||globalState.currentTooltipId?(globalState.show(popover.baseId),popover.show()):(globalState.show(null),showTimeout.current=window.setTimeout((function(){globalState.show(popover.baseId),popover.show()}),timeout))}),[clearTimeouts,timeout,popover.show,popover.baseId]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){return globalState.subscribe((function(id){id!==popover.baseId&&(clearTimeouts(),popover.visible&&popover.hide())}))}),[popover.baseId,clearTimeouts,popover.visible,popover.hide]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){return function(){clearTimeouts(),globalState.hide(popover.baseId)}}),[clearTimeouts,popover.baseId]),(0,_rollupPluginBabelHelpers_959e870d_js__WEBPACK_IMPORTED_MODULE_2__.a)({},popover,{hide,show,unstable_timeout:timeout,unstable_setTimeout:setTimeout})}var keys=[].concat(_Popover_PopoverState_js__WEBPACK_IMPORTED_MODULE_3__.v.__keys,["unstable_timeout","unstable_setTimeout"]);useTooltipState.__keys=keys}}]);