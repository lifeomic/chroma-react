"use strict";(self.webpackChunk_lifeomic_chroma_react=self.webpackChunk_lifeomic_chroma_react||[]).push([[4530],{"./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>AnimatePresence});var tslib_es6=__webpack_require__("./node_modules/framer-motion/node_modules/tslib/tslib.es6.mjs"),react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/framesync/dist/es/index.mjs"),use_unmount_effect=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs");var PresenceContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/PresenceContext.mjs"),use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs"),presenceId=0;function getPresenceId(){var id=presenceId;return presenceId++,id}var PresenceChild=function(_a){var children=_a.children,initial=_a.initial,isPresent=_a.isPresent,onExitComplete=_a.onExitComplete,custom=_a.custom,presenceAffectsLayout=_a.presenceAffectsLayout,presenceChildren=(0,use_constant.h)(newChildrenMap),id=(0,use_constant.h)(getPresenceId),context=(0,react.useMemo)((function(){return{id,initial,isPresent,custom,onExitComplete:function(childId){var e_1,_a;presenceChildren.set(childId,!0);try{for(var _b=(0,tslib_es6.XA)(presenceChildren.values()),_c=_b.next();!_c.done;_c=_b.next()){if(!_c.value)return}}catch(e_1_1){e_1={error:e_1_1}}finally{try{_c&&!_c.done&&(_a=_b.return)&&_a.call(_b)}finally{if(e_1)throw e_1.error}}null==onExitComplete||onExitComplete()},register:function(childId){return presenceChildren.set(childId,!1),function(){return presenceChildren.delete(childId)}}}}),presenceAffectsLayout?void 0:[isPresent]);return(0,react.useMemo)((function(){presenceChildren.forEach((function(_,key){return presenceChildren.set(key,!1)}))}),[isPresent]),react.useEffect((function(){!isPresent&&!presenceChildren.size&&(null==onExitComplete||onExitComplete())}),[isPresent]),react.createElement(PresenceContext.O.Provider,{value:context},children)};function newChildrenMap(){return new Map}var LayoutGroupContext=__webpack_require__("./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs");function getChildKey(child){return child.key||""}var AnimatePresence=function(_a){var children=_a.children,custom=_a.custom,_b=_a.initial,initial=void 0===_b||_b,onExitComplete=_a.onExitComplete,exitBeforeEnter=_a.exitBeforeEnter,_c=_a.presenceAffectsLayout,presenceAffectsLayout=void 0===_c||_c,_d=(0,tslib_es6.CR)(function useForceUpdate(){var isUnmountingRef=(0,react.useRef)(!1),_a=(0,tslib_es6.CR)((0,react.useState)(0),2),forcedRenderCount=_a[0],setForcedRenderCount=_a[1];(0,use_unmount_effect.z)((function(){return isUnmountingRef.current=!0}));var forceRender=(0,react.useCallback)((function(){!isUnmountingRef.current&&setForcedRenderCount(forcedRenderCount+1)}),[forcedRenderCount]);return[(0,react.useCallback)((function(){return es.ZP.postRender(forceRender)}),[forceRender]),forcedRenderCount]}(),1),forceRender=_d[0],forceRenderLayoutGroup=(0,react.useContext)(LayoutGroupContext.p).forceRender;forceRenderLayoutGroup&&(forceRender=forceRenderLayoutGroup);var isInitialRender=(0,react.useRef)(!0),isMounted=(0,react.useRef)(!0);(0,react.useEffect)((function(){return function(){isMounted.current=!1}}),[]);var filteredChildren=function onlyElements(children){var filtered=[];return react.Children.forEach(children,(function(child){(0,react.isValidElement)(child)&&filtered.push(child)})),filtered}(children),presentChildren=(0,react.useRef)(filteredChildren),allChildren=(0,react.useRef)(new Map).current,exiting=(0,react.useRef)(new Set).current;if(function updateChildLookup(children,allChildren){children.forEach((function(child){var key=getChildKey(child);allChildren.set(key,child)}))}(filteredChildren,allChildren),isInitialRender.current)return isInitialRender.current=!1,react.createElement(react.Fragment,null,filteredChildren.map((function(child){return react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,initial:!!initial&&void 0,presenceAffectsLayout},child)})));for(var childrenToRender=(0,tslib_es6.ev)([],(0,tslib_es6.CR)(filteredChildren),!1),presentKeys=presentChildren.current.map(getChildKey),targetKeys=filteredChildren.map(getChildKey),numPresent=presentKeys.length,i=0;i<numPresent;i++){var key=presentKeys[i];-1===targetKeys.indexOf(key)?exiting.add(key):exiting.delete(key)}return exitBeforeEnter&&exiting.size&&(childrenToRender=[]),exiting.forEach((function(key){if(-1===targetKeys.indexOf(key)){var child=allChildren.get(key);if(child){var insertionIndex=presentKeys.indexOf(key);childrenToRender.splice(insertionIndex,0,react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!1,onExitComplete:function(){allChildren.delete(key),exiting.delete(key);var removeIndex=presentChildren.current.findIndex((function(presentChild){return presentChild.key===key}));if(presentChildren.current.splice(removeIndex,1),!exiting.size){if(presentChildren.current=filteredChildren,!1===isMounted.current)return;forceRender(),onExitComplete&&onExitComplete()}},custom,presenceAffectsLayout},child))}}})),childrenToRender=childrenToRender.map((function(child){var key=child.key;return exiting.has(key)?child:react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,presenceAffectsLayout},child)})),presentChildren.current=childrenToRender,react.createElement(react.Fragment,null,exiting.size?childrenToRender:childrenToRender.map((function(child){return(0,react.cloneElement)(child)})))}},"./node_modules/framer-motion/dist/es/utils/use-reduced-motion.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>useReducedMotion});var prefersReducedMotion,tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/node_modules/tslib/tslib.es6.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_value_index_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/framer-motion/dist/es/value/index.mjs"),_value_use_on_change_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/framer-motion/dist/es/value/use-on-change.mjs");function useReducedMotion(){!prefersReducedMotion&&function initPrefersReducedMotion(){if(prefersReducedMotion=(0,_value_index_mjs__WEBPACK_IMPORTED_MODULE_1__.B)(null),"undefined"!=typeof window)if(window.matchMedia){var motionMediaQuery_1=window.matchMedia("(prefers-reduced-motion)"),setReducedMotionPreferences=function(){return prefersReducedMotion.set(motionMediaQuery_1.matches)};motionMediaQuery_1.addListener(setReducedMotionPreferences),setReducedMotionPreferences()}else prefersReducedMotion.set(!1)}();var _a=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.CR)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(prefersReducedMotion.get()),2),shouldReduceMotion=_a[0],setShouldReduceMotion=_a[1];return(0,_value_use_on_change_mjs__WEBPACK_IMPORTED_MODULE_3__.p)(prefersReducedMotion,setShouldReduceMotion),shouldReduceMotion}},"./node_modules/framer-motion/dist/es/value/use-motion-value.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>useMotionValue});var tslib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/framer-motion/node_modules/tslib/tslib.es6.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_index_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/value/index.mjs"),_context_MotionConfigContext_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs"),_utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs");function useMotionValue(initial){var value=(0,_utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_1__.h)((function(){return(0,_index_mjs__WEBPACK_IMPORTED_MODULE_2__.B)(initial)}));if((0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_MotionConfigContext_mjs__WEBPACK_IMPORTED_MODULE_3__._).isStatic){var setLatest_1=(0,tslib__WEBPACK_IMPORTED_MODULE_4__.CR)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initial),2)[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){return value.onChange(setLatest_1)}),[])}return value}},"./node_modules/framer-motion/dist/es/value/use-on-change.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>useMultiOnChange,p:()=>useOnChange});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs");function useOnChange(value,callback){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){if((0,_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_1__.i)(value))return value.onChange(callback)}),[callback])}function useMultiOnChange(values,handler){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var subscriptions=values.map((function(value){return value.onChange(handler)}));return function(){return subscriptions.forEach((function(unsubscribe){return unsubscribe()}))}}))}},"./node_modules/framer-motion/dist/es/value/use-transform.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>useTransform});var tslib_es6=__webpack_require__("./node_modules/framer-motion/node_modules/tslib/tslib.es6.mjs"),interpolate=__webpack_require__("./node_modules/popmotion/dist/es/utils/interpolate.mjs"),getMixer=function(v){return function(v){return"object"==typeof v&&v.mix}(v)?v.mix:void 0};var use_motion_value=__webpack_require__("./node_modules/framer-motion/dist/es/value/use-motion-value.mjs"),use_on_change=__webpack_require__("./node_modules/framer-motion/dist/es/value/use-on-change.mjs"),es=__webpack_require__("./node_modules/framesync/dist/es/index.mjs");var use_constant=__webpack_require__("./node_modules/framer-motion/dist/es/utils/use-constant.mjs");function useTransform(input,inputRangeOrTransformer,outputRange,options){var transformer="function"==typeof inputRangeOrTransformer?inputRangeOrTransformer:function transform(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];var useImmediate=!Array.isArray(args[0]),argOffset=useImmediate?0:-1,inputValue=args[0+argOffset],inputRange=args[1+argOffset],outputRange=args[2+argOffset],options=args[3+argOffset],interpolator=(0,interpolate.s)(inputRange,outputRange,(0,tslib_es6.pi)({mixer:getMixer(outputRange[0])},options));return useImmediate?interpolator(inputValue):interpolator}(inputRangeOrTransformer,outputRange,options);return Array.isArray(input)?useListTransform(input,transformer):useListTransform([input],(function(_a){var latest=(0,tslib_es6.CR)(_a,1)[0];return transformer(latest)}))}function useListTransform(values,transformer){var latest=(0,use_constant.h)((function(){return[]}));return function useCombineMotionValues(values,combineValues){var value=(0,use_motion_value.c)(combineValues()),updateValue=function(){return value.set(combineValues())};return updateValue(),(0,use_on_change.f)(values,(function(){return es.ZP.update(updateValue,!1,!0)})),value}(values,(function(){latest.length=0;for(var numValues=values.length,i=0;i<numValues;i++)latest[i]=values[i].get();return transformer(latest)}))}},"./node_modules/reakit-utils/es/useIsomorphicEffect.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>useIsomorphicEffect});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),useIsomorphicEffect="undefined"==typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useEffect:react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect},"./node_modules/reakit/es/Portal/Portal.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>Portal});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),reakit_utils_useIsomorphicEffect__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/reakit-utils/es/useIsomorphicEffect.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js");function getBodyElement(){return"undefined"!=typeof document?document.body:null}var PortalContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(getBodyElement());function Portal(_ref){var children=_ref.children,context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PortalContext)||getBodyElement(),hostNode=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((function(){if("undefined"!=typeof document){var element=document.createElement("div");return element.className=Portal.__className,element}return null}))[0];return(0,reakit_utils_useIsomorphicEffect__WEBPACK_IMPORTED_MODULE_2__.Y)((function(){if(hostNode&&context)return context.appendChild(hostNode),function(){context.removeChild(hostNode)}}),[hostNode,context]),hostNode?(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PortalContext.Provider,{value:hostNode},children),hostNode):null}Portal.__className="__reakit-portal",Portal.__selector="."+Portal.__className}}]);