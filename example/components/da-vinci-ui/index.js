/* eslint-disable */
import * as React from 'react';
import React__default, { forwardRef, useState, useEffect, useId, useCallback, useRef, useLayoutEffect, createContext, useContext } from 'react';
import uuid from 'react-uuid';
import { createPortal } from 'react-dom';
import CustomLink from 'next/link';
import Cookie from 'cookie-universal';
import { createRoot } from 'react-dom/client';
import Image from 'next/image';

// TODO: #134 UI Avatar component in used next image
function Avatar(props) {
    var children = props.children, className = props.className, size = props.size, shape = props.shape, srcImg = props.srcImg, color = props.color, name = props.name, textColor = props.textColor, randomColor = props.randomColor, style = props.style;
    var avatarSize = AvatarSize(size);
    return (React__default.createElement("div", { className: "text-semibold box-content flex cursor-pointer items-center justify-center \n      ".concat(className || ' ').concat(avatarSize + ' ').concat(shape === 'square' ? 'border-classes ' : 'rounded-full ').concat(textColor + ' ').concat(randomColor ? avatarColor$1[colorKey$1(randomColor)] : color), style: style },
        children,
        !srcImg && !children && name && NameFirstandLastName(name),
        !children && srcImg && (React__default.createElement("img", { src: srcImg, alt: "avatar", className: "h-full w-full object-cover object-center \n      ".concat(shape === 'square' ? 'border-classes ' : 'rounded-full ') }))));
}
/**
 * @typedef {Object} AvatarProps
 * @property {string} [size] - Size of the avatar (default: md)
 * @property {string} [shape] - Shape of the avatar (default: circle)
 * @property {string} [color] - Color of the avatar (default: bg-gray-700)
 * @property {string} [textColor] - Text color of the avatar (default: text-white)
 * @property {string} [srcImg] - Image source of the avatar
 * @property {string} [name] - Name of the avatar
 */
Avatar.defaultProps = {
    size: 'default',
    shape: 'square',
    color: 'bg-gray-700',
    textColor: 'text-white',
};
// Todo: Color palete uygun hale getirilecek
var avatarColor$1 = [
    'bg-pink-500',
    'bg-gray-800',
    'bg-yellow-800',
    'bg-purple-500',
    'bg-green-800',
    'bg-indigo-500',
    'bg-pink-800',
    'bg-indigo-800',
    'bg-purple-800',
    'bg-red-500',
    'bg-green-500',
    'bg-gray-500',
    'bg-blue-800',
    'bg-yellow-500',
    'bg-blue-500',
    'bg-red-800',
    'bg-red-300',
    'bg-yellow-300',
    'bg-green-300',
    'bg-blue-300',
    'bg-indigo-300',
    'bg-purple-300',
    'bg-pink-300',
    'bg-gray-300',
];
function AvatarSize(value) {
    switch (value) {
        case '2xl':
            return ' w-24 h-24 text-[32px]';
        case 'xl':
            return ' w-20 h-20 text-[32px]';
        case 'lg':
            return ' w-16 h-16 text-[24px]';
        case 'md':
            return ' w-12 h-12 text-[20px]';
        case 'sm':
            return ' w-8 h-8 text-[16px]';
        case 'xs':
            return ' w-6 h-6 text-[14px]';
        case 'xxs':
            return ' w-5 h-5 text-[12px]';
        default:
            return ' w-10 h-10 text-[18px]';
    }
}
function NameFirstandLastName(name) {
    return name
        .split(' ')
        .map(function (n) { return n[0]; })
        .join('')
        .toUpperCase();
}
function colorKey$1(value) {
    var arrayLength = avatarColor$1.length - 1;
    if (value > arrayLength) {
        return value % arrayLength;
    }
    return value;
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function Button(props) {
    // TODO: create themes > solid, dark, borderless,
    // TODO: create types > primary, secondary, tertiary, ghost, link
    var children = props.children, icon = props.icon, isActive = props.isActive, className = props.className, rest = __rest(props, ["children", "icon", "isActive", "className"]);
    /* It's a string of classes that are applied to the button when it's hovered over or if it's active etc.. */
    return (React__default.createElement("button", __assign({ className: "py-2 flex flex-row items-center justify-center text-gray-600 hover:bg-gray-200 hover:button-classes ".concat(!icon ? 'px-2' : '', " ").concat(isActive && 'button-classes', " ").concat(className) }, rest),
        icon && (React__default.createElement("div", { className: "px-2 [&>svg]:w-6 [&>svg]:h-6 leading-none" }, icon)),
        React__default.createElement("div", { className: "w-full max-w-[150px] font-medium" }, children)));
}
Button.defaultProps = {
    isActive: true,
};

var Card = React__default.forwardRef(function (props, ref) {
    var children = props.children, className = props.className;
    return (React__default.createElement("div", { ref: ref, className: "card-classes ".concat(className || '') }, children));
});
Card.defaultProps = {
    hasBorders: true,
};

var CheckboxGroup = forwardRef(function (props, ref) {
    var children = props.children, // ✅
    defaultValue = props.defaultValue, // ✅
    description = props.description, // ✅
    label = props.label, // ✅
    onChange = props.onChange, // ✅
    orientation = props.orientation; // ✅
    props.required; // TODO 🚨
    var listClassName = props.listClassName;
    var _a = useState(defaultValue ? defaultValue : []), values = _a[0], setValues = _a[1];
    useEffect(function () {
        if (!values)
            return;
        if (onChange) {
            onChange(values);
        }
    }, [values]);
    var customChildren = React__default.Children.map(children, function (child) {
        var _a, _b;
        if (React__default.isValidElement(child)) {
            return React__default.cloneElement(child, {
                defaultChecked: defaultValue
                    ? (_a = defaultValue.find(function (e) { return e.name === child.props.name; })) === null || _a === void 0 ? void 0 : _a.value
                    : (_b = values.find(function (e) { return e.name === child.props.name; })) === null || _b === void 0 ? void 0 : _b.value,
                onChangeEvent: function (e) {
                    var name = e.target.name;
                    var value = e.target.checked;
                    if (e.target.checked) {
                        setValues(function (prev) { return __spreadArray(__spreadArray([], prev, true), [{ name: name, value: value }], false); });
                    }
                    else {
                        setValues(function (prev) { return prev.filter(function (v) { return v.name !== name; }); });
                    }
                },
                // TODO: complete other functions
            });
        }
        return child;
    });
    return (React__default.createElement("div", { ref: ref, className: "flex flex-col gap-2" },
        (label || description) && (React__default.createElement("div", { className: "flex flex-col" },
            label && (React__default.createElement("label", { className: "text-sm font-medium text-gray-700" }, label)),
            description && (React__default.createElement("p", { className: "text-sm text-gray-500" }, description)))),
        React__default.createElement("div", { className: "flex ".concat(orientation === 'horizontal'
                ? 'flex-row  gap-4'
                : 'flex-col gap-[2px]', " ").concat(listClassName || '') }, customChildren)));
});
CheckboxGroup.defaultProps = {
    orientation: 'vertical',
};

// TODO: style improvement
// TODO: card component
/**
 * Layers are `unselectable` (`::selection: none`) by default. If you want to make it selectable, you can use the `selectable` prop.
 */
var CheckBox = forwardRef(function (props, ref) {
    var id = useId();
    var className = props.className, // ✅
    checked = props.checked, // ✅
    name = props.name, // ✅
    disabled = props.disabled, // ✅
    onChangeEvent = props.onChangeEvent, // ✅
    onChangeChecked = props.onChangeChecked, // ✅
    label = props.label, // ✅
    hideCheckbox = props.hideCheckbox, // ✅
    defaultChecked = props.defaultChecked, // ✅
    selectableLabel = props.selectableLabel, // ✅
    customIcon = props.customIcon; // 🚨 TODO
    props.type;
    if (!label && !name) {
        throw new Error('You must provide a label or name to checkbox');
    }
    return (React__default.createElement("div", { className: "flex flex-row items-center cursor-pointer ".concat(className || '') },
        React__default.createElement("input", { ref: ref, type: "checkbox", checked: checked, disabled: disabled, name: name, value: name, defaultChecked: defaultChecked, id: id, className: " cursor-pointer h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 ".concat(customIcon ? 'hidden' : '', " ").concat(hideCheckbox ? 'hidden' : ''), onChange: function (e) {
                if (onChangeEvent) {
                    onChangeEvent(e);
                }
                if (onChangeChecked) {
                    onChangeChecked(e.target.checked);
                }
                // TODO: test these with group
            } }),
        label && (React__default.createElement("label", { htmlFor: id, className: "cursor-pointer pl-2 w-[-webkit-fill-available] ".concat(selectableLabel ? '' : 'select-none') }, label))));
});
CheckBox.defaultProps = {
    selectableLabel: false,
};
CheckBox.Group = CheckboxGroup;

function mergeRefs() {
    var refs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        refs[_i] = arguments[_i];
    }
    return function (node) {
        // @ts-ignore
        refs.forEach(function (ref) { return assignRef(ref, node); });
    };
}
function useMergedRef() {
    var refs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        refs[_i] = arguments[_i];
    }
    return useCallback(mergeRefs.apply(void 0, refs), refs);
}
function assignRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    }
    else if (typeof ref === 'object' && ref !== null && 'current' in ref) {
        // eslint-disable-next-line no-param-reassign
        ref.current = value;
    }
}

var DEFAULT_EVENTS = ['mousedown', 'touchstart'];
function useClickOutside(handler, events, nodes) {
    var ref = useRef();
    useEffect(function () {
        var listener = function (event) {
            var target = (event !== null && event !== void 0 ? event : {}).target;
            if (Array.isArray(nodes)) {
                var shouldIgnore = (target === null || target === void 0 ? void 0 : target.hasAttribute('data-ignore-outside-clicks')) ||
                    !document.body.contains(target);
                var shouldTrigger = nodes.every(function (node) { return !!node && !node.contains(target); });
                shouldTrigger && !shouldIgnore && handler();
            }
            else if (ref.current && !ref.current.contains(target)) {
                handler();
            }
        };
        (events || DEFAULT_EVENTS).forEach(function (fn) {
            return document.addEventListener(fn, listener);
        });
        return function () {
            (events || DEFAULT_EVENTS).forEach(function (fn) {
                return document.removeEventListener(fn, listener);
            });
        };
    }, [ref, handler, nodes]);
    return ref;
}

function useEventListener(type, listener, element) {
    var listenerRef = useRef(listener);
    useEffect(function () {
        listenerRef.current = listener;
    });
    useEffect(function () {
        var el = element === undefined ? window : element;
        var internalListener = function (ev) {
            return listenerRef.current(ev);
        };
        el === null || el === void 0 ? void 0 : el.addEventListener(type, internalListener);
        return function () {
            el === null || el === void 0 ? void 0 : el.removeEventListener(type, internalListener);
        };
    }, [type, element]);
}

var useIsomorphicEffect = typeof document !== 'undefined' ? useLayoutEffect : useEffect;
// thx to: https://github.com/mantinedev/mantine/blob/master/src/mantine-hooks/src/use-isomorphic-effect/use-isomorphic-effect.ts

var DaVinciLogo = function (props) { return (React.createElement("svg", __assign({ width: 32, height: 32, viewBox: "0 0 128 128" }, props),
    React.createElement("defs", null,
        React.createElement("path", { id: "a", d: "M103.44 27.85c-2.15-5.08-6.79-11.67-11.58-14.6C80.72 6.4 66.56 5.08 53.93 7.5 34.09 11.3 15.5 24.13 6.19 42.21c-6.59 12.8-7.95 32.31.83 44.59 5.73 8.01 17.1 11.04 26.12 7.28 6.13-2.55 9.93-8.23 15.23-11.95 6.88-4.84 14.34-3.47 22.32-3.78 22.91-.87 41.64-29.39 32.75-50.5zM69.75 60.89c-1.82.7-4.21 1.11-6.17.82-1.98-.31-4.08-1.76-5.13-3.48-3.65-5.92 2.41-12.77 8.01-14.26 2.78-.74 6.86-.28 9.07 1.63 5.73 4.95-.52 13.25-5.78 15.29z" })),
    React.createElement("use", { fill: "#f79329", href: "#a" }),
    React.createElement("path", { fill: "#ed6c30", d: "M43.47 21.59c1.57-1.26 3.59-2.05 5.48-2.21 3.45-.3 5.89 2.77 5.75 6.17-.19 4.3-4.91 6.39-8.85 6.22-3.06-.13-5.58-2.89-5.07-5.87.31-1.74 1.33-3.2 2.69-4.31z" }),
    React.createElement("path", { fill: "#bdcf46", d: "M16.49 53.68c1.19-4.79 6.88-7.82 10.93-4.4 3.86 3.25 2.05 9.69-2.04 12.05-2.72 1.57-6.76.52-8.33-2.39-.87-1.61-1-3.5-.56-5.26z" }),
    React.createElement("path", { fill: "#006ca2", d: "M28.73 70.02c2.27 4.3.76 10.93-4.77 11.39-5.53.46-8.62-6.05-7.19-10.81 1.43-4.74 7.29-5.52 10.59-2.4.56.53 1.02 1.14 1.37 1.82z" }),
    React.createElement("path", { fill: "#fcc21b", d: "M38.28 39.46c-1.49 2.74-4.96 5.13-8.17 4.73-4.03-.5-5.61-5.3-3.86-8.73 2.4-4.7 9.92-6.58 12.44-.8.69 1.59.42 3.29-.41 4.8z" }),
    React.createElement("defs", null,
        React.createElement("path", { id: "b", d: "M73.56 88.64c-5.05-.2-10.42 2.1-13.7 6.37-3.4 4.42-3.3 10.08-3.44 15.38-.08 2.88.4 6.9-1.69 9.24-.94 1.05-1.93 1.27-3.21 1.43-.5.06-2.94-.32-2.02 1.08 1.75 2.67 8.26 3.35 11.05 3.47 7.5.34 14.88-2.98 19.83-8.59.51-.59 1-1.2 1.46-1.83 3.69-5.08 5.85-12.28 3.48-18.33-2.14-5.45-6.8-8.03-11.76-8.22z" })),
    React.createElement("use", { fill: "#fff", href: "#b" }),
    React.createElement("clipPath", { id: "c" },
        React.createElement("use", { href: "#b" })),
    React.createElement("path", { fill: "#ed6c30", d: "M65.05 103.63c.11.24.21.55.26.94.31 2.38 2.13 2.9 4.29 2.9 2.19 0 4.92-.48 4.92 2.46-.01 1.26-.61 2.19.65 2.96 1.9 1.16 5.54.89 7.38-.32 1.14-.75 2.74-1.42 2.02.71-.42 1.23-1.24 2.36-1.84 3.52-.66 1.27-1.49 2.28-2.49 3.3-.73.75-1.23 1.65-2.07 2.29-2.15 1.63-4.95 2.14-7.46 2.96-3.36 1.1-6.57 3.06-10.17 2.05-3.81-1.07-7.96-.64-11.71-1.87-1.85-.61-3-1.73-2.72-3.72.25-1.71 1.42-2.35 2.98-2.69 1.76-.39 3.2-.86 4.01-2.62.7-1.49.22-3.66.12-5.24-.14-2.15-.38-4.42.17-6.53.46-1.74.97-3.48 1.73-5.12.35-.77.72-1.71 1.28-2.35.87-1 1.94-1.45 3.12-1.98.37.95-.42 2.46-.56 3.42-.23 1.65-.18 3.42 1.5 4.09 1.63.62 3.8-.82 4.59.84z", clipPath: "url(#c)" }),
    React.createElement("path", { fill: "#855c52", d: "M91.93 60.63c5.67-6.52 9.85-14.31 14.96-21.29 3.14-4.28 6.03-8.8 8.95-13.21 1.85-2.79 4.51-7.68 8.43-7.61.68.01 1.3.3 1.85.69 1.21.86 1.2 2.93.8 4.21-1.59 5.15-4.57 10.08-7.07 14.84-.95 1.82-1.92 3.64-2.93 5.43-2.95 5.25-6.03 10.43-8.75 15.81-1.06 2.1-2.06 4.22-2.97 6.38-.57 1.34-1.45 2.48-1.8 3.88-.36 1.44-3.61-2.61-3.81-2.93-.74-1.23-1.42-1.88-2.74-2.32-.95-.31-6.04-1.04-5.63-2.66.11-.42.37-.83.71-1.22z" }),
    React.createElement("defs", null,
        React.createElement("path", { id: "d", d: "M102.54 68.36c-.96-2.01-2.82-3.14-4.45-4.14-.42-.26-.84-.51-1.22-.77-2.58-1.77-4.79-2.2-6.57-1.35-2.67 1.28-4.56 4.66-6.09 7.38-.42.74-.8 1.42-1.15 1.98-2.87 4.47-5.64 7.9-10.54 11.2l-.42.27c-1.11.71-2.63 1.69-2.75 3.46-.05.75.16 1.88 1.47 2.99 1.43 1.21 3 1.95 4.52 2.66.54.25 1.09.51 1.62.79 1.75.92 3.34 2.13 5.03 3.42l1 .75c.26.19.52.45.8.7.78.73 1.75 1.65 3.01 2 .43.12.81.18 1.15.18 1.36 0 2.04-.84 2.41-1.29l.15-.18c1.46-1.71 2.18-4 2.81-6.02.3-.98.59-1.91.93-2.69.54-1.23 1.05-2.47 1.56-3.71 1.12-2.74 2.18-5.33 3.55-7.8.32-.59.79-1.2 1.29-1.84 1.47-1.94 3.5-4.6 1.89-7.99z" })),
    React.createElement("use", { fill: "#78a3ad", href: "#d" }),
    React.createElement("clipPath", { id: "e" },
        React.createElement("use", { href: "#d" })),
    React.createElement("path", { fill: "#2f2f2f", d: "M93.71 98.86c-.72 0-1.42-.35-1.87-.99-.53-.79-.85-1.57-1.14-2.26-.26-.63-.48-1.17-.81-1.6-3.07-3.96-6.79-6.7-12.85-9.47-1.81-.83-3.46-1.24-4.86-1.24-1.25 0-2.26-1.01-2.26-2.25s1.01-2.25 2.26-2.25c2.05 0 4.32.56 6.73 1.65 4.71 2.15 10.13 5.12 14.54 10.81.71.91 1.09 1.83 1.42 2.65.23.56.43 1.04.71 1.45.7 1.03.42 2.43-.6 3.12-.4.25-.84.38-1.27.38z", clipPath: "url(#e)" }))); };
var SvgClear = function (props) { return (React.createElement("svg", __assign({ width: 32, height: 32, viewBox: "0 0 24 24" }, props),
    React.createElement("path", { fill: "currentColor", d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" }))); };
var SvgEyeOff = function (props) { return (React.createElement("svg", __assign({ width: 32, height: 32, viewBox: "0 0 512 512" }, props),
    React.createElement("path", { fill: "currentColor", d: "m63.998 86.005 21.998-21.998L447.999 426.01l-21.998 21.998zM259.34 192.09l60.57 60.57a64.07 64.07 0 0 0-60.57-60.57Zm-6.68 127.82-60.57-60.57a64.07 64.07 0 0 0 60.57 60.57Z" }),
    React.createElement("path", { fill: "currentColor", d: "M256 352a96 96 0 0 1-92.6-121.34l-69.07-69.08C66.12 187.42 39.24 221.14 16 256c26.42 44 62.56 89.24 100.2 115.18C159.38 400.92 206.33 416 255.76 416A233.47 233.47 0 0 0 335 402.2l-53.61-53.6A95.84 95.84 0 0 1 256 352Zm0-192a96 96 0 0 1 92.6 121.34L419.26 352c29.15-26.25 56.07-61.56 76.74-96-26.38-43.43-62.9-88.56-101.18-114.82C351.1 111.2 304.31 96 255.76 96a222.92 222.92 0 0 0-78.21 14.29l53.11 53.11A95.84 95.84 0 0 1 256 160Z" }))); };
var SvgEyeOn = function (props) { return (React.createElement("svg", __assign({ width: 32, height: 32, viewBox: "0 0 512 512" }, props),
    React.createElement("circle", { cx: 256, cy: 256, r: 64, fill: "currentColor" }),
    React.createElement("path", { fill: "currentColor", d: "M394.82 141.18C351.1 111.2 304.31 96 255.76 96c-43.69 0-86.28 13-126.59 38.48C88.52 160.23 48.67 207 16 256c26.42 44 62.56 89.24 100.2 115.18C159.38 400.92 206.33 416 255.76 416c49 0 95.85-15.07 139.3-44.79C433.31 345 469.71 299.82 496 256c-26.38-43.43-62.9-88.56-101.18-114.82ZM256 352a96 96 0 1 1 96-96 96.11 96.11 0 0 1-96 96Z" }))); };
function SvgX(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fill: "currentColor", d: "M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" })));
}
function SvgLeftArrow(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 16 16" }, props),
        React.createElement("path", { fill: "currentColor", d: "M13.5 8.5a.5.5 0 0 0 0-1H3.803l4.031-3.628a.5.5 0 1 0-.668-.744l-5 4.5a.5.5 0 0 0 0 .744l5 4.5a.5.5 0 1 0 .668-.744L3.803 8.5H13.5Z" })));
}
function SvgRightArrow(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 16 16" }, props),
        React.createElement("path", { fill: "currentColor", d: "M2.5 7.5a.5.5 0 1 0 0 1h9.697l-4.031 3.628a.5.5 0 1 0 .668.744l5-4.5a.5.5 0 0 0 0-.744l-5-4.5a.5.5 0 0 0-.668.744L12.197 7.5H2.5Z" })));
}

function Space(props) {
    var spacing = props.spacing, direction = props.direction;
    var spaceStyle = spacing
        ? direction === 'vertical'
            ? { height: "".concat(spacing, "px") }
            : { width: "".concat(spacing, "px") }
        : {};
    return (React__default.createElement("div", { className: "".concat(!spacing
            ? direction === 'vertical'
                ? 'h-hf-side-padding w-[-webkit-fill-available]'
                : 'w-hf-side-padding h-auto'
            : ''), style: spaceStyle }));
}
Space.defaultProps = {
    direction: 'vertical',
};

var renderDefaultIcon = function (children) {
    return (React__default.createElement("div", { className: "flex items-center box-border justify-center w-fit  z-10" }, children));
};

var renderUserInputIcon = function (direction, children) {
    return (React__default.createElement("div", { className: "flex items-center relative box-border justify-center cursor-text pointer-events-none w-fit [&>*]:cursor-text [&>*]:pointer-events-none  z-10 ".concat(direction === 'before' ? 'pr-[10px]' : 'pl-[10px]') }, children));
};

// TODO: add leftComponent and rightComponent
var Input = React__default.forwardRef(function (props, ref) {
    var className = props.className, // ✅
    size = props.sizing, // ✅
    leftIcon = props.leftIcon, // ✅
    rightIcon = props.rightIcon, password = props.password, // ✅
    onChange = props.onChange, hideInput = props.hideInput, // ✅
    showClear = props.showClear, // ✅
    leftComponent = props.leftComponent, wrapperClasses = props.wrapperClasses, // ✅
    rest = __rest(props, ["className", "sizing", "leftIcon", "rightIcon", "password", "onChange", "hideInput", "showClear", "leftComponent", "wrapperClasses"]);
    var _a = useState(false), isActive = _a[0], setIsActive = _a[1];
    var _b = useState(false), showPassword = _b[0], setShowPassword = _b[1];
    var clickTracker = useClickOutside(function () { return setIsActive(false); });
    var refs = useMergedRef(ref, clickTracker);
    return (React__default.createElement("div", { "data-name": "input-wrapper", className: '!w-full max-w-[250px] relative flex flex-row items-center justify-between input-classes cursor-text max-h-full' +
            ' ' +
            "".concat(isActive ? 'hover:!bg-gray-200 !outline-gray-300' : '', "\n    ") +
            "".concat(rest.type === 'time' ? '!w-fit max-w-none' : '') +
            ' ' +
            "".concat(wrapperClasses || '') },
        React__default.createElement("div", { "data-name": "input-focus-helper", className: "absolute inset-0 z-0 w-full h-full", onClick: function () {
                clickTracker.current.focus();
                if (hideInput) {
                    // @ts-ignore
                    rest.onClick();
                }
            } }),
        React__default.createElement("div", { className: "flex flex-row flex-wrap", "data-name": "input-left-side" },
            leftIcon && renderUserInputIcon('before', leftIcon),
            leftComponent && leftComponent,
            leftComponent && React__default.createElement(Space, { direction: "horizontal", spacing: 10 }),
            React__default.createElement("input", __assign({ onFocus: function () { return setIsActive(true); }, autoFocus: isActive, ref: refs, "data-size": size, onChange: onChange, type: password ? (showPassword ? 'text' : 'password') : 'text', className: 'data-[size=large]:!py-3 data-[size=small]:!py-0 relative bg-transparent outline-none border-none pointer-events-auto z-10 w-fit ' +
                    ' ' +
                    "".concat(className || '', " ").concat(props.disabled ? 'text-gray-600' : '', " ") +
                    "".concat(hideInput ? 'hidden' : '') }, rest))),
        rightIcon && renderUserInputIcon('after', rightIcon),
        showClear &&
            renderDefaultIcon(React__default.createElement("button", { onClick: function () {
                    clickTracker.current.value = '';
                    clickTracker.current.focus();
                } },
                React__default.createElement(SvgClear, { className: "w-5 h-5" }))),
        password &&
            (showPassword
                ? renderDefaultIcon(React__default.createElement("button", { className: "relative z-20", onClick: function () {
                        setShowPassword(false);
                        clickTracker.current.type === 'password';
                    } },
                    React__default.createElement(SvgEyeOn, { className: "w-5 h-5" })))
                : renderDefaultIcon(React__default.createElement("button", { className: "relative z-20", onClick: function () {
                        setShowPassword(true);
                        clickTracker.current.type === 'text';
                    } },
                    React__default.createElement(SvgEyeOff, { className: "w-5 h-5" }))))));
});
Input.defaultProps = {
    sizing: 'default',
};

/* eslint-disable react/no-unused-prop-types */
var Portal = React__default.forwardRef(function (props, ref) {
    var children = props.children, target = props.target, className = props.className, style = props.style;
    var _a = useState(false), mounted = _a[0], setMounted = _a[1];
    var customRef = useRef(null);
    useEffect(function () {
        if (!document)
            return;
        setMounted(true);
        // @ts-ignore
        customRef.current = !target
            ? document.createElement('div')
            : typeof target === 'string'
                ? document.querySelector(target)
                : target;
        if (!target) {
            document.body.appendChild(customRef.current);
        }
        return function () {
            !target && document.body.removeChild(customRef.current);
        };
    }, [target]);
    if (!mounted) {
        return null;
    }
    return createPortal(React__default.createElement("div", { style: style, ref: ref, className: className }, children), customRef.current);
});

var DatepickerCtx = createContext({
    date: new Date(),
    visible: {
        month: 0,
        year: 1970,
    },
    view: 'date',
    nextMonth: function () { },
    prevMonth: function () { },
    nextYear: function () { },
    prevYear: function () { },
    nextDecade: function () { },
    prevDecade: function () { },
    selectMonth: function (m) { },
    selectYear: function (y) { },
    selectDate: function (d) { },
    viewMonths: function () { },
    viewYears: function () { },
    isVisible: false,
    showCalendar: function () { },
    toggleCalendar: function () { },
    isSelectedDate: function (d) { return false; },
});
function useDatepickerCtx(date, onChange, ref) {
    var _a, _b;
    var _c = useState({
        month: (_a = date === null || date === void 0 ? void 0 : date.getMonth()) !== null && _a !== void 0 ? _a : new Date().getMonth(),
        year: (_b = date === null || date === void 0 ? void 0 : date.getFullYear()) !== null && _b !== void 0 ? _b : new Date().getFullYear(),
    }), monthYear = _c[0], setMonthYear = _c[1];
    var _d = useState('date'), view = _d[0], setView = _d[1];
    var _e = useState(false), isVisible = _e[0], setVisible = _e[1];
    var selectDate = function (d) {
        onChange(new Date(monthYear.year, monthYear.month, d));
        setVisible(false);
    };
    var isSelectedDate = function (d) {
        if (d === date.getDate() &&
            monthYear.month === date.getMonth() &&
            monthYear.year === date.getFullYear()) {
            return true;
        }
        return false;
    };
    var selectMonth = function (m) {
        setMonthYear(function (state) { return (__assign(__assign({}, state), { month: m })); });
        setView('date');
    };
    var selectYear = function (y) {
        setMonthYear(function (state) { return (__assign(__assign({}, state), { year: y })); });
        setView('month');
    };
    useEffect(function () {
        function mouseDownListener(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setVisible(false);
            }
        }
        if (isVisible) {
            setMonthYear({ month: date.getMonth(), year: date.getFullYear() });
            document.addEventListener('mousedown', mouseDownListener);
        }
        return function () {
            document.removeEventListener('mousedown', mouseDownListener);
        };
    }, [isVisible]);
    return {
        date: date,
        visible: monthYear,
        view: view,
        nextMonth: function () {
            return setMonthYear(function (state) {
                return state.month >= 11
                    ? { month: 0, year: state.year + 1 }
                    : { month: state.month + 1, year: state.year };
            });
        },
        prevMonth: function () {
            return setMonthYear(function (state) {
                return state.month <= 0
                    ? { month: 11, year: state.year - 1 }
                    : { month: state.month - 1, year: state.year };
            });
        },
        nextYear: function () {
            return setMonthYear(function (state) { return (__assign(__assign({}, state), { year: state.year + 1 })); });
        },
        prevYear: function () {
            return setMonthYear(function (state) { return (__assign(__assign({}, state), { year: state.year - 1 })); });
        },
        nextDecade: function () {
            return setMonthYear(function (state) { return (__assign(__assign({}, state), { year: state.year + 12 })); });
        },
        prevDecade: function () {
            return setMonthYear(function (state) { return (__assign(__assign({}, state), { year: state.year - 12 })); });
        },
        selectMonth: selectMonth,
        selectYear: selectYear,
        selectDate: selectDate,
        viewMonths: function () { return setView('month'); },
        viewYears: function () { return setView('year'); },
        isVisible: isVisible,
        showCalendar: function () { return setVisible(true); },
        toggleCalendar: function () { return setVisible(function (state) { return !state; }); },
        isSelectedDate: isSelectedDate,
    };
}

/**
 * Util functions
 */
/**
 * For formatting date
 * @param date
 */
function formattedDate(date) {
    return "".concat(date.getDate(), " ").concat(monthNames[date.getMonth()], " ").concat(date.getFullYear());
}
/**
 * Beginning of Day of Week of a Month
 * @param date
 */
function beginningDayOfWeek(m, y) {
    return new Date(y, m, 1).getDay();
}
/**
 * Days in month
 */
function daysInMonth(month, year) {
    switch (month) {
        case 0:
        case 2:
        case 4:
        case 6:
        case 7:
        case 9:
        case 11:
            return 31;
        case 1:
            return isLeapYear(year) ? 29 : 28;
        default:
            return 30;
    }
}
/**
 * Is Leap Year
 * @param year
 */
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
var daysOfWeekNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];
var monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

function SvgCalendarOutline(props) {
    return (React__default.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 12 12" }, props),
        React__default.createElement("path", { fill: "currentColor", d: "M3 5.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0ZM3.5 7a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1ZM5 5.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0ZM5.5 7a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1ZM7 5.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0Zm-6-2A2.5 2.5 0 0 1 3.5 1h5A2.5 2.5 0 0 1 11 3.5v5A2.5 2.5 0 0 1 8.5 11h-5A2.5 2.5 0 0 1 1 8.5v-5ZM3.5 2a1.5 1.5 0 0 0-1.415 1h7.83A1.5 1.5 0 0 0 8.5 2h-5ZM10 4H2v4.5A1.5 1.5 0 0 0 3.5 10h5A1.5 1.5 0 0 0 10 8.5V4Z" })));
}

/* eslint-disable react/button-has-type */
// eslint-disable-next-line @typescript-eslint/ban-types
var DateSelection = function () {
    var _a = useContext(DatepickerCtx), nextMonth = _a.nextMonth, prevMonth = _a.prevMonth, viewMonths = _a.viewMonths, viewYears = _a.viewYears, selectDate = _a.selectDate, _b = _a.visible, month = _b.month, year = _b.year, isSelectedDate = _a.isSelectedDate;
    var dates = [];
    for (var i = 0; i < beginningDayOfWeek(month, year); i++) {
        dates.push(React__default.createElement("div", { key: "emptybefore".concat(i) }));
    }
    var _loop_1 = function (i) {
        dates.push(React__default.createElement("button", { key: "day".concat(i), className: "hover:bg-gray-200 rounded p-1 text-sm ".concat(isSelectedDate(i) ? 'bg-gray-300 ' : ''), onClick: function () { return selectDate(i); }, style: { textAlign: 'center' } }, i));
    };
    for (var i = 1; i <= daysInMonth(month, year); i++) {
        _loop_1(i);
    }
    return (React__default.createElement("div", { className: "text-gray-800", style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
            gridTemplateRows: '2rem auto',
            alignItems: 'stretch',
        } },
        React__default.createElement("button", { className: buttonClassName, onClick: function () { return prevMonth(); } },
            React__default.createElement(SvgLeftArrow, { className: "w-5 h-5 stroke-current", style: { strokeWidth: 0 } })),
        React__default.createElement("button", { className: "".concat(buttonClassName, " "), style: { gridColumn: '2/5' }, onClick: function () { return viewMonths(); } }, monthNames[month]),
        React__default.createElement("button", { className: "".concat(buttonClassName, " "), style: { gridColumn: '5/7' }, onClick: function () { return viewYears(); } }, year),
        React__default.createElement("button", { className: buttonClassName, onClick: function () { return nextMonth(); } },
            React__default.createElement(SvgRightArrow, { className: "w-5 h-5 stroke-current", style: { strokeWidth: 0 } })),
        daysOfWeekNames.map(function (day) { return (React__default.createElement("div", { key: (200 + day).toString(), className: "p-1 text-sm ", style: { textAlign: 'center' } }, day[0])); }),
        dates));
};
/**
 * Month Selection Component
 * @param props
 */
// eslint-disable-next-line @typescript-eslint/ban-types
var MonthSelection = function () {
    var _a = useContext(DatepickerCtx), viewYears = _a.viewYears, selectMonth = _a.selectMonth, nextYear = _a.nextYear, prevYear = _a.prevYear, visible = _a.visible;
    return (React__default.createElement("div", { className: "h-48", style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gridTemplateRows: '2rem auto',
            alignItems: 'stretch',
        } },
        React__default.createElement("div", { className: "flex", style: { gridColumn: '1/5' } },
            React__default.createElement(CalButton, { chevron: "left", onClick: function () { return prevYear(); } }),
            React__default.createElement(CalButton, { className: "flex-grow", onClick: function () { return viewYears(); } }, visible.year),
            React__default.createElement(CalButton, { chevron: "right", onClick: function () { return nextYear(); } })),
        monthNames.map(function (month, index) { return (React__default.createElement(CalButton, { key: uuid(), onClick: function () { return selectMonth(index); } }, month.substring(0, 3))); })));
};
/**
 * Year Selection Component
 * @param props
 */
// eslint-disable-next-line @typescript-eslint/ban-types
var YearSelection = function () {
    var _a = useContext(DatepickerCtx), selectYear = _a.selectYear, prevDecade = _a.prevDecade, nextDecade = _a.nextDecade, year = _a.visible.year;
    var years = [];
    var _b = [year - 6, year + 6], minYear = _b[0], maxYear = _b[1];
    var _loop_2 = function (i) {
        years.push(React__default.createElement(CalButton, { onClick: function () { return selectYear(i); } }, i));
    };
    for (var i = minYear; i < maxYear; i++) {
        _loop_2(i);
    }
    return (React__default.createElement("div", { className: "h-48", style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gridTemplateRows: '2rem auto',
            alignItems: 'stretch',
        } },
        React__default.createElement("div", { className: "flex", style: { gridColumn: '1/5' } },
            React__default.createElement(CalButton, { chevron: "left", onClick: function () { return prevDecade(); } }),
            React__default.createElement(CalButton, { className: "flex-grow" }, "".concat(minYear, " - ").concat(maxYear - 1)),
            React__default.createElement(CalButton, { chevron: "right", onClick: function () { return nextDecade(); } })),
        years));
};
var buttonClassName = 'hover:bg-gray-200 rounded p-1 text-sm flex align-center justify-center focus:outline-none';
var CalButton = function (props) {
    var children = null;
    if (props.chevron && props.chevron === 'left') {
        children = (React__default.createElement(SvgLeftArrow, { className: "w-5 h-5 stroke-current", style: { strokeWidth: 0 } }));
    }
    else if (props.chevron && props.chevron === 'right') {
        children = (React__default.createElement(SvgRightArrow, { className: "w-5 h-5 stroke-current", style: { strokeWidth: 0 } }));
    }
    else
        children = props.children;
    return (React__default.createElement("button", { className: "".concat(buttonClassName, " ").concat(props.className), style: props.style, onClick: props.onClick }, children));
};
var Calendar = React__default.forwardRef(function (props, ref) {
    var view = useContext(DatepickerCtx).view;
    var selectionComponent = null;
    switch (view) {
        case 'date':
            selectionComponent = React__default.createElement(DateSelection, null);
            break;
        case 'month':
            selectionComponent = React__default.createElement(MonthSelection, null);
            break;
        case 'year':
            selectionComponent = React__default.createElement(YearSelection, null);
            break;
    }
    var isMobile = true;
    // navigator.userAgent.indexOf('iPhone') > 0 ||
    // navigator.userAgent.indexOf('iPad') > 0 ||
    // navigator.userAgent.indexOf('iPod') > 0 ||
    // navigator.userAgent.indexOf('Android') > 0;
    return isMobile && props.portalAtMobile ? (React__default.createElement(Portal, { className: "fixed inset-0 w-full h-full flex items-center justify-center bg-black/40 backdrop-blur-sm z-40" },
        React__default.createElement(Card, { className: "bg-white w-fit shadow-lg max-w-xs !p-2 rounded-lg ", ref: props.calendarRef }, selectionComponent))) : (React__default.createElement(Card, { className: "bg-white absolute top-10 left-0 w-fit shadow-lg max-w-xs !p-2 rounded-lg ", ref: props.calendarRef }, selectionComponent));
});
var RawDatePicker = function (_a) {
    var date = _a.date, onChange = _a.onChange, portalAtMobile = _a.portalAtMobile;
    var _b = useState(false), showDatePicker = _b[0], setShowDatePicker = _b[1];
    var clickRef = useClickOutside(function () { return setShowDatePicker(false); });
    var popupNode = useRef();
    var ctxValue = useDatepickerCtx(date, onChange, popupNode);
    var calendarRef = useRef(null);
    return (React__default.createElement(DatepickerCtx.Provider, { value: ctxValue },
        React__default.createElement("div", { className: "w-fit relative h-fit", ref: clickRef },
            React__default.createElement(Input, { type: "text", onFocus: function () {
                    setShowDatePicker(true);
                }, value: date
                    ? formattedDate(date)
                    : calendarRef
                        ? calendarRef.current
                            ? formattedDate(calendarRef.current) // TODO: Wroooong type definition.
                            : ''
                        : '', readOnly: true, rightIcon: React__default.createElement("button", { className: "flex items-center justify-center text-sm  text-gray-700 px-2 focus:outline-none", onClick: function () { return ctxValue.toggleCalendar(); } },
                    React__default.createElement(SvgCalendarOutline, { className: "w-5 h-5", color: "#666" })) }),
            showDatePicker && (React__default.createElement(Calendar, { ref: calendarRef, calendarRef: clickRef, portalAtMobile: portalAtMobile })))));
};
RawDatePicker.defaultProps = {
    portalAtMobile: true,
};
var DatePicker = function (props) { return (React__default.createElement(RawDatePicker, { date: props.date, onChange: props.onChange, portalAtMobile: props.portalAtMobile })); };

function Indicator(props) {
    var children = props.children, className = props.className, size = props.size, shape = props.shape, style = props.style, textColor = props.textColor, randomColor = props.randomColor, borderColor = props.borderColor, position = props.position, overflowCount = props.overflowCount, bgColor = props.bgColor, count = props.count, text = props.text; props.dot;
    // TODO: #135 Dot Position asimetrict @habibokumus
    return (React__default.createElement("div", { className: "relative w-fit" },
        children,
        React__default.createElement("div", { className: "absolute text-sm leading-3\n        ".concat(className || ' ', "\n        ").concat(shape === 'square' ? 'border-classes ' : 'rounded-full ', "\n        ").concat(textColor + ' ', "\n        ").concat(size ? BadgeSize(size) : '', "\n        ").concat(borderColor + ' ', "\n        ").concat(position ? BadgePosition(position) : '', "\n        ").concat(bgColor + ' ', "\n        ").concat(randomColor ? avatarColor[colorKey(randomColor)] : ''), style: style }, overflowCount
            ? BadgeOverflowCount(overflowCount, count)
            : count
                ? count
                : text)));
}
Indicator.defaultProps = {
    size: 'md',
    shape: 'circle',
    bgColor: 'bg-gray-700',
    textColor: 'text-white',
    borderColor: 'border-white',
    position: 'top-left',
};
var BadgePosition = function (value) {
    switch (value) {
        case 'top-right':
            return '-top-[12%] -right-[15%] translate-x-[15%] -translate-y-[10%]';
        case 'bottom-left':
            return '-bottom-[12%] -left-[15%] -translate-x-[15%] -translate-y-[10%]';
        case 'bottom-right':
            return '-bottom-[12%] -right-[15%] translate-x-[15%] -translate-y-[10%]';
        default:
            return '-top-[12%] -left-[15%] -translate-x-[15%] -translate-y-[10%]';
    }
};
var avatarColor = [
    'bg-pink-500',
    'bg-gray-800',
    'bg-yellow-800',
    'bg-purple-500',
    'bg-green-800',
    'bg-indigo-500',
    'bg-pink-800',
    'bg-indigo-800',
    'bg-purple-800',
    'bg-red-500',
    'bg-green-500',
    'bg-gray-500',
    'bg-blue-800',
    'bg-yellow-500',
    'bg-blue-500',
    'bg-red-800',
    'bg-red-300',
    'bg-yellow-300',
    'bg-green-300',
    'bg-blue-300',
    'bg-indigo-300',
    'bg-purple-300',
    'bg-pink-300',
    'bg-gray-300',
];
var BadgeSize = function (value) {
    switch (value) {
        case 'sm':
            return 'text-[9px] leading-[9px] border-[1px] border-solid px-[3px] py-[1px] ';
        case 'lg':
            return 'text-[16px] leading-[16px] border-[1px] border-solid px-[6px] py-[2px] ';
        default:
            return 'text-[12px] leading-[12px] border-[1px] border-solid px-[4px] py-[1px]';
    }
};
var BadgeOverflowCount = function (overflowCount, count) {
    if (count > overflowCount) {
        return "".concat(overflowCount, "+");
    }
    return count;
};
var colorKey = function (value) {
    var arrayLength = avatarColor.length - 1;
    if (value > arrayLength) {
        return value % arrayLength;
    }
    return value;
};

var NavContext = createContext({
    isExpanded: true,
    setIsExpanded: function () {
        console.log();
    },
});
var NavProvider = function (_a) {
    var children = _a.children;
    var _b = useState(), isExpanded = _b[0], setIsExpanded = _b[1];
    return (React__default.createElement(NavContext.Provider, { value: {
            isExpanded: isExpanded,
            setIsExpanded: setIsExpanded,
        } }, children));
};

// TODO: https://ui.mantine.dev/category/navbars copy something
function Layout(props) {
    var children = props.children, className = props.className, hasSidebar = props.hasSidebar, fullHeight = props.fullHeight;
    return (React__default.createElement("div", { className: "\n        w-[-webkit-fill-available]  max-w-[100vw] flex box-border ".concat(className || '', " ").concat(hasSidebar ? 'flex-row' : 'flex-col', " ").concat(fullHeight ? 'h-full' : '') },
        React__default.createElement(NavProvider, null, children)));
}
Layout.defaultProps = {
    hasSidebar: false,
};

// TODO: active classname is not logical
var Link = forwardRef(function (props, ref) {
    var children = props.children, className = props.className, icon = props.icon, isActive = props.isActive, rest = __rest(props, ["children", "className", "icon", "isActive"]);
    return (React__default.createElement(CustomLink, __assign({}, rest, { ref: ref }),
        React__default.createElement("div", { className: "py-2 flex flex-row items-center justify-center text-gray-600 hover:bg-gray-200 hover:button-classes ".concat(!icon ? 'px-2' : '', " ").concat(isActive && 'button-classes', " ").concat(className) },
            icon && (React__default.createElement("div", { className: "px-2 [&>svg]:w-6 [&>svg]:h-6  leading-none" }, icon)),
            React__default.createElement("div", { className: "w-full max-w-[150px] font-medium" }, children))));
});

// TODO: forward the ref
var Modal = React__default.forwardRef(function (props, ref) {
    var children = props.children, title = props.title, className = props.className, isOpen = props.isOpen, closeOnOverlayClick = props.closeOnOverlayClick, fullScreen = props.fullScreen; props.onClose; props.onOpen; var closeIcon = props.closeIcon, closeOnEsc = props.closeOnEsc, footerButtons = props.footerButtons, size = props.size, overlayClasses = props.overlayClasses, footer = props.footer;
    var _a = useState(isOpen), isOpened = _a[0], setIsOpened = _a[1];
    var closeModal = useCallback(function () {
        setIsOpened(false);
    }, []);
    var clickedOutside = useClickOutside(function () {
        if (closeOnOverlayClick) {
            closeModal();
        }
    });
    useEventListener('keyup', function (e) {
        if (closeOnEsc) {
            if (e.key === 'Escape') {
                closeModal();
            }
        }
    });
    useEffect(function () {
        if (!document)
            return;
        setIsOpened(isOpen);
    }, [isOpen]);
    if (!isOpened)
        return null;
    return (React__default.createElement(Portal, { className: "fixed inset-0 bg-black/50 w-screen h-screen ".concat(overlayClasses) },
        React__default.createElement(Card, { ref: function (cardRef) {
                clickedOutside.current = cardRef;
            }, className: "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 \n                ".concat(fullScreen ? 'w-screen h-screen' : '', "\n                ").concat(!fullScreen &&
                (size === 'small'
                    ? 'w-[400px]'
                    : size === 'large'
                        ? 'w-[700px]'
                        : 'w-[550px]'), "\n                ").concat(className || '', "\n                ") },
            React__default.createElement("div", { className: "w-full h-full relative" },
                typeof closeIcon === 'boolean' && closeIcon && (React__default.createElement("button", { className: "top-0 right-0 absolute", onClick: function () { return closeModal(); } },
                    React__default.createElement(SvgX, { className: "w-5 h-5" }))),
                typeof closeIcon !== 'boolean' && closeIcon && (React__default.createElement("button", { className: "top-0 right-0 absolute", onClick: function () { return closeModal(); } }, closeIcon)),
                title && (React__default.createElement(React__default.Fragment, null,
                    React__default.createElement("div", null, title),
                    React__default.createElement(Space, { direction: "vertical" }))),
                children),
            footer && (React__default.createElement(React__default.Fragment, null,
                React__default.createElement(Space, { direction: "vertical" }),
                footer)),
            footerButtons && (React__default.createElement(React__default.Fragment, null,
                React__default.createElement(Space, { direction: "vertical" }),
                React__default.createElement("div", { className: "flex flex-row w-full justify-end gap-2" }, footerButtons.map(function (button) {
                    return (React__default.createElement(Button, { key: uuid(), className: "".concat(button.buttonClasses || ''), onClick: button.onClick }, button.text));
                })))))));
});
Modal.defaultProps = {
    isOpen: false,
    size: 'medium',
    closeOnOverlayClick: true,
    closeOnEsc: true,
    fullScreen: false,
    closeIcon: true,
};

function SvgExpandToRight(props) {
    return (React__default.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 48 48" }, props),
        React__default.createElement("mask", { id: "svgIDa" },
            React__default.createElement("g", { fill: "none", strokeLinejoin: "round", strokeWidth: "4" },
                React__default.createElement("path", { fill: "#fff", stroke: "#fff", d: "M6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9Z" }),
                React__default.createElement("path", { stroke: "#000", strokeLinecap: "round", d: "M32 6v36M16 20l4 4l-4 4" }),
                React__default.createElement("path", { stroke: "#fff", strokeLinecap: "round", d: "M26 6h12M26 42h12" }))),
        React__default.createElement("path", { fill: "currentColor", d: "M0 0h48v48H0z", mask: "url(#svgIDa)" })));
}

function Nav(props) {
    var children = props.children, className = props.className, items = props.items, expanded = props.expanded, hasExpandButton = props.hasExpandButton, activeItem = props.activeItem, logo = props.logo, vertical = props.vertical;
    var context = React__default.useContext(NavContext);
    useEffect(function () {
        if (!window)
            return;
        context.setIsExpanded(expanded);
    }, [expanded]);
    return (React__default.createElement(NavContext.Consumer, null, function (_a) {
        var isExpanded = _a.isExpanded, setIsExpanded = _a.setIsExpanded;
        return (React__default.createElement("nav", { className: '' },
            React__default.createElement(Card, { className: 'w-[-webkit-fill-available] flex gap-[6px] text-gray-600 ' +
                    ' ' +
                    (vertical ? 'flex-col' : 'flex-row') +
                    ' ' +
                    (className || ' ') },
                logo ? (logo) : (React__default.createElement("div", { className: "flex items-center gap-2 font-medium font-serif w-auto justify-center" },
                    React__default.createElement(DaVinciLogo, { className: "w-6 h-6" }),
                    isExpanded && 'DaVinci UI')),
                vertical ? (React__default.createElement("div", { className: "w-full h-8" })) : (React__default.createElement("div", { className: "h-full w-8" })),
                children
                    ? children
                    : items === null || items === void 0 ? void 0 : items.map(function (item) {
                        return (React__default.createElement(Link, { key: uuid(), isActive: item.link === (activeItem === null || activeItem === void 0 ? void 0 : activeItem.link), href: item.link, className: "!justify-start", icon: item.icon }, vertical ? (isExpanded ? item.label : '') : item.label));
                    }),
                hasExpandButton && vertical && (React__default.createElement(React__default.Fragment, null,
                    React__default.createElement("div", { className: "w-full h-8" }),
                    React__default.createElement("button", { className: "w-fit ml-3", onClick: function () {
                            setIsExpanded(!isExpanded);
                        } },
                        React__default.createElement(SvgExpandToRight, { className: isExpanded ? 'rotate-180' : '' })))))));
    }));
}
Nav.defaultProps = {
    expanded: true,
    hasExpandButton: true,
    vertical: true,
};

function SvgSuccess(props) {
    return (React__default.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm-5 14.414l-3.707-3.707l1.414-1.414L11 13.586l4.793-4.793l1.414 1.414L11 16.414z", fill: "currentColor" })));
}
function SvgError(props) {
    return (React__default.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm-3 16h-2v-2h2v2zm0-4h-2V6h2v8z", fill: "currentColor" })));
}
function SvgWarning(props) {
    return (React__default.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm.706 13.293l-1.414 1.414L12 13.415l-3.292 3.292l-1.414-1.414l3.292-3.292l-3.292-3.292l1.414-1.414L12 10.587l3.292-3.292l1.414 1.414l-3.292 3.292l3.292 3.292z", fill: "currentColor" })));
}
function SvgInfo(props) {
    return (React__default.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { d: "M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm-2 13H7v-2h7v2zm3-4H7V9h10v2z", fill: "currentColor" })));
}
var NotificationIcons = {
    success: React__default.createElement(SvgSuccess, { className: "text-[#4BB543] w-5 h-5" }),
    error: React__default.createElement(SvgError, { className: "text-red-600 w-5 h-5" }),
    warning: React__default.createElement(SvgWarning, { className: "text-[#FFCC00] w-5 h-5" }),
    info: React__default.createElement(SvgInfo, { className: "text-sky-600 w-5 h-5" }),
};

function NotificationCard(_a) {
    var data = _a.data, id = _a.id;
    var closeNotification = useCallback(function () {
        var _a;
        return (_a = document.querySelector('[data-id="' + id + '"]')) === null || _a === void 0 ? void 0 : _a.remove();
    }, []);
    return (React__default.createElement(Card, { className: "min-w-[300px] ".concat(data.className) },
        React__default.createElement("div", { className: "w-full h-fit flex flex-row items-start gap-5" },
            React__default.createElement("div", { className: "leading-none text-lg" }, data.icon ? data.icon : NotificationIcons[data.type]),
            React__default.createElement("div", { className: "flex flex-col gap-1 w-full" },
                React__default.createElement("div", { className: "flex flex-row items-center justify-between w-full" },
                    React__default.createElement("div", { className: "leading-none font-semibold text-base" }, data.title),
                    React__default.createElement("button", { onClick: function () {
                            closeNotification();
                        } },
                        React__default.createElement(SvgX, { className: "w-4 h-4" }))),
                React__default.createElement("div", { className: "text-sm" }, data.content)))));
}

var cookies = Cookie();
// TODO: add jsx support: https://stackoverflow.com/a/70464490
function NotificationProvider(_a) {
    var _b = _a.defaultSettings, defaultSettings = _b === void 0 ? {
        error: {
            duration: 3000,
            title: 'Error',
            position: 'top',
        },
        info: {
            duration: 3000,
            title: 'Info',
            position: 'top',
        },
        success: {
            duration: 3000,
            title: 'Success',
            position: 'top',
        },
        warning: {
            duration: 3000,
            title: 'Warning',
            position: 'top',
        },
    } : _b;
    var _c = useState(null), latestCookie = _c[0], setLatestCookie = _c[1];
    var wrapperRef = useRef(null);
    var _d = useState(false), isWrapperCreated = _d[0], setIsWrapperCreated = _d[1];
    if (JSON.stringify(defaultSettings) !==
        JSON.stringify(cookies.get('da-vinci-notification-settings'))) {
        cookies.set('da-vinci-notification-settings', JSON.stringify(defaultSettings), {
            path: '/',
            sameSite: true,
            encode: function (value) { return value; },
        });
    }
    useIsomorphicEffect(function () {
        document.addEventListener('cookiechange', function () {
            // TODO: trigger notif.
            var currentCookie = cookies.get('da-vinci-notification', {
                parseJSON: true,
            });
            setLatestCookie(currentCookie);
        });
    });
    useEffect(function () {
        if (!document || !wrapperRef.current)
            return;
        if (isWrapperCreated)
            return;
        document.body.appendChild(wrapperRef.current);
        setIsWrapperCreated(true);
    }, [isWrapperCreated, wrapperRef.current]);
    // useEffect(() => {
    //   if (!window) return
    // }, [])
    useEffect(function () {
        if (!latestCookie || Object.entries(latestCookie).length === 0)
            return;
        if (!isWrapperCreated)
            return;
        var div = wrapperRef.current;
        if (!div)
            return;
        var innerWrapper = document.querySelector("[data-position=\"".concat(latestCookie.position, "\"]"));
        if (!innerWrapper) {
            innerWrapper = document.createElement('div');
            innerWrapper.setAttribute('data-position', latestCookie.position);
            // TODO: add default styles setting to wrapper
            // TODO: optimize css 👇🏻 (take normal css classes, parse it with position)
            innerWrapper.className =
                'flex flex-col gap-5 fixed w-fit z-100' +
                    ' ' +
                    'data-[position=bottom]:bottom-hf-side-padding data-[position=bottom]:left-1/2 data-[position=bottom]:-translate-x-1/2' +
                    ' ' +
                    'data-[position=top]:top-hf-side-padding data-[position=top]:left-1/2 data-[position=top]:-translate-x-1/2' +
                    ' ' +
                    'data-[position=topLeft]:top-hf-side-padding data-[position=topLeft]:left-hf-side-padding' +
                    ' ' +
                    'data-[position=bottomLeft]:bottom-hf-side-padding data-[position=bottomLeft]:left-hf-side-padding' +
                    ' ' +
                    'data-[position=topRight]:top-hf-side-padding data-[position=topRight]:right-hf-side-padding' +
                    ' ' +
                    'data-[position=bottomRight]:bottom-hf-side-padding data-[position=bottomRight]:right-hf-side-padding';
            wrapperRef.current.appendChild(innerWrapper);
        }
        var id = uuid();
        var notification = document.createElement('div');
        notification.setAttribute('class', 'da-vinci-notification-single');
        notification.setAttribute('role', 'alert');
        notification.setAttribute('data-id', id);
        innerWrapper.appendChild(notification);
        var root = createRoot(notification);
        root.render(React__default.createElement(NotificationCard, { id: id, data: latestCookie }));
        if (Number(latestCookie.duration) !== Number(0)) {
            setTimeout(function () {
                root.unmount();
                notification.remove();
            }, latestCookie.duration);
        }
    }, [latestCookie, isWrapperCreated]);
    return (React__default.createElement("div", { ref: wrapperRef, id: "da-vinci-notification" }));
}
var toastNotification = function (settings) {
    var defaultSettings = cookies.get('da-vinci-notification-settings');
    console.log({ settings: settings });
    var toastType = settings.type;
    cookies.set('da-vinci-notification', JSON.stringify({
        type: settings.type || 'success',
        content: settings.content || 'All is done.',
        /* I couldn't pass 0 directly */
        duration: settings.duration === 0
            ? 0
            : settings.duration || defaultSettings[toastType].duration || 3000,
        title: settings.title || defaultSettings[toastType].title || 'Success',
        position: settings.position || defaultSettings[toastType].position || 'top',
        icon: settings.icon,
        className: settings.className || defaultSettings[toastType].className,
    }), {
        path: '/',
        sameSite: true,
    });
    return document.dispatchEvent(new Event('cookiechange'));
};
var success = function (settings) {
    toastNotification(__assign(__assign({}, settings), { type: 'success' }));
};
var info = function (settings) {
    toastNotification(__assign(__assign({}, settings), { type: 'info' }));
};
var warning = function (settings) {
    toastNotification(__assign(__assign({}, settings), { type: 'warning' }));
};
var error = function (settings) {
    toastNotification(__assign(__assign({}, settings), { type: 'error' }));
};
var toast = {
    success: success,
    info: info,
    warning: warning,
    error: error,
};
var Notification = {
    Provider: NotificationProvider,
    toast: toast,
};

/**
 * @typedef {object} OverflowListProps
 * @description Makes a small list from elements. If the list is too long, it will be hidden and a button will be shown to open the list.
 * @description Suggested use with `Avatar` component and `nestedAvatars` prop.
 */
var OverflowList = React__default.forwardRef(function (props, ref) {
    var children = props.children; props.maxElements; props.numberComponent; var maxWidth = props.maxWidth, nestedAvatars = props.nestedAvatars;
    var wrapperRef = React__default.useRef(null);
    var _a = useState(); _a[0]; var setShowingCount = _a[1];
    var _b = useState(), overflowingCount = _b[0]; _b[1];
    var _c = useState(); _c[0]; _c[1];
    useEffect(function () {
        if (!window || !wrapperRef.current)
            return;
        var wrapperWidth = wrapperRef.current.offsetWidth;
        wrapperRef.current.childElementCount;
        var elementWidth = wrapperRef.current.children[0]
            .offsetWidth;
        var showingElementCount = Math.floor(wrapperWidth / elementWidth);
        setShowingCount(showingElementCount);
    }, [wrapperRef]);
    var customChildren = React__default.Children.map(children, function (child, idx) {
        if (React__default.isValidElement(child)) {
            return React__default.cloneElement(child);
        }
    });
    return (React__default.createElement("div", null,
        React__default.createElement("div", { ref: function (ref) {
                // @ts-ignore
                wrapperRef.current = ref;
            }, className: "flex flex-row items-center ".concat(nestedAvatars
                ? 'first:[&>*]:ml-0 [&>*]:border-2 [&>*]:border-solid [&>*]:border-white [&>*]:ml-[-7px] [&>*]:hover:!ml-px hover:[&>*]:scale-110'
                : '', " [&>*]:transition-all [&>*]:duration-100 [&>*]:transform \n        flex-wrap  flex-1 box-border ").concat(maxWidth ? maxWidth : 'max-w-full', "\n        ") }, customChildren),
        React__default.createElement("div", null, overflowingCount)));
});
OverflowList.defaultProps = {
    maxWidth: 'max-w-full',
};

// TODO: seo optimization
// TODO: add siblings
var Pagination = forwardRef(function (props, ref) {
    var className = props.className, current = props.current, total = props.total, perPage = props.perPage, maxPageCount = props.maxPageCount, onChange = props.onChange;
    var _a = useState(current ? current : 1), currentPage = _a[0], setCurrentPage = _a[1];
    useEffect(function () {
        if (!current)
            return;
        setCurrentPage(current ? current : 1);
    }, [current]);
    /**
     * How many pages are there in pagination
     */
    var paginationCount = Math.ceil(total / (perPage ? perPage : 1));
    var paginationArray = Array.from({ length: paginationCount }, function (_, i) { return i + 1; });
    /**
     * Generate dynamic list for map
     */
    var _b = useState(), dynamicPaginationList = _b[0], setDynamicPaginationList = _b[1];
    useEffect(function () {
        // If pagination count is less than max page count
        var maxPage = maxPageCount;
        if (maxPage % 2 === 0) {
            maxPage = maxPage - 1;
        }
        if (paginationCount >= maxPage) {
            if (currentPage <= maxPage / 2) {
                setDynamicPaginationList(paginationArray.slice(0, maxPage));
            }
            else if (currentPage > paginationCount - maxPage / 2) {
                setDynamicPaginationList(paginationArray.slice(paginationCount - maxPage, paginationCount));
            }
            else {
                setDynamicPaginationList(paginationArray.slice(currentPage - maxPage / 2, currentPage + maxPage / 2));
            }
        }
        else {
            setDynamicPaginationList(paginationArray);
        }
    }, [currentPage]);
    return (React__default.createElement("div", { ref: ref, className: "flex flex-row items-center justify-center gap-1 ".concat(className) },
        React__default.createElement(Button, { disabled: currentPage === 1, onClick: function () {
                if (currentPage !== 1) {
                    setCurrentPage(currentPage - 1);
                    if (onChange) {
                        onChange(currentPage - 1);
                    }
                }
            } },
            React__default.createElement(SvgLeftArrow, null)),
        dynamicPaginationList &&
            dynamicPaginationList.map(function (page, index) {
                return (React__default.createElement(Button, { key: page, className: "".concat(page === currentPage
                        ? 'bg-gray-200 text-gray-800'
                        : 'bg-gray-100 text-gray-700', " w-10 "), onClick: function () {
                        if (onChange) {
                            onChange(Number(page));
                        }
                        setCurrentPage(Number(page));
                    } }, page));
            }),
        React__default.createElement(Button, { disabled: currentPage === paginationCount, onClick: function () {
                if (currentPage < paginationCount) {
                    setCurrentPage(currentPage + 1);
                    if (onChange) {
                        onChange(currentPage + 1);
                    }
                }
            } },
            React__default.createElement(SvgRightArrow, null))));
});
Pagination.defaultProps = {
    maxPageCount: 10,
};

var RadioGroup = forwardRef(function (props, ref) {
    var children = props.children, // ✅
    defaultValue = props.defaultValue, // ✅
    description = props.description, // ✅
    label = props.label, // ✅
    onChange = props.onChange, // ✅
    orientation = props.orientation; // ✅
    props.required; // TODO 🚨
    var listClassName = props.listClassName, // ✅,
    name = props.name;
    var _a = useState(defaultValue ? defaultValue : []), values = _a[0], setValues = _a[1];
    useEffect(function () {
        if (!values)
            return;
        if (onChange) {
            onChange(values);
        }
    }, [values]);
    var customChildren = React__default.Children.map(children, function (child) {
        var _a, _b;
        if (React__default.isValidElement(child)) {
            return React__default.cloneElement(child, {
                name: name,
                defaultChecked: defaultValue
                    ? (_a = defaultValue.find(function (e) { return e.name === child.props.name; })) === null || _a === void 0 ? void 0 : _a.value
                    : (_b = values.find(function (e) { return e.name === child.props.name; })) === null || _b === void 0 ? void 0 : _b.value,
                onChangeEvent: function (e) {
                    var name = e.target.name;
                    var value = e.target.checked;
                    if (e.target.checked) {
                        setValues(function (prev) { return __spreadArray(__spreadArray([], prev, true), [{ name: name, value: value }], false); });
                    }
                    else {
                        setValues(function (prev) { return prev.filter(function (v) { return v.name !== name; }); });
                    }
                },
                // TODO: complete other functions
            });
        }
        return child;
    });
    return (React__default.createElement("div", { ref: ref, className: "flex flex-col gap-2" },
        (label || description) && (React__default.createElement("div", { className: "flex flex-col" },
            label && (React__default.createElement("label", { className: "text-sm font-medium text-gray-700" }, label)),
            description && (React__default.createElement("p", { className: "text-sm text-gray-500" }, description)))),
        React__default.createElement("div", { className: "flex ".concat(orientation === 'horizontal'
                ? 'flex-row  gap-4'
                : 'flex-col gap-[2px]', " ").concat(listClassName || '') }, customChildren)));
});
RadioGroup.defaultProps = {
    orientation: 'vertical',
};

// TODO: style improvement
// TODO: card component
/**
 * Layers are `unselectable` (`::selection: none`) by default. If you want to make it selectable, you can use the `selectable` prop.
 */
var Radio = forwardRef(function (props, ref) {
    var id = useId();
    var className = props.className, // ✅
    checked = props.checked, // ✅
    name = props.name, // ✅
    disabled = props.disabled, // ✅
    onChangeEvent = props.onChangeEvent, // ✅
    onChangeChecked = props.onChangeChecked, // ✅
    label = props.label, // ✅
    hideRadio = props.hideRadio, // ✅
    defaultChecked = props.defaultChecked, // ✅
    selectableLabel = props.selectableLabel, // ✅
    customIcon = props.customIcon; // 🚨 TODO
    props.type;
    if (!label && !name) {
        throw new Error('You must provide a label or name to Radio');
    }
    return (React__default.createElement("div", { className: "flex flex-row items-center cursor-pointer ".concat(className || '') },
        React__default.createElement("input", { ref: ref, type: "radio", checked: checked, disabled: disabled, name: name, value: name, defaultChecked: defaultChecked, id: id, className: " cursor-pointer h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 ".concat(customIcon ? 'hidden' : '', " ").concat(hideRadio ? 'hidden' : ''), onChange: function (e) {
                if (onChangeEvent) {
                    onChangeEvent(e);
                }
                if (onChangeChecked) {
                    onChangeChecked(e.target.checked);
                }
                // TODO: test these with group
            } }),
        label && (React__default.createElement("label", { htmlFor: id, className: "cursor-pointer pl-2 w-[-webkit-fill-available] ".concat(selectableLabel ? '' : 'select-none') }, label))));
});
Radio.defaultProps = {
    selectableLabel: false,
};
Radio.Group = RadioGroup;

var TagGroup = forwardRef(function (props, ref) {
    var children = props.children, // ✅
    maxTagCount = props.maxTagCount, // ✅
    avatarShape = props.avatarShape, // ✅
    classNames = props.classNames, // ✅
    focusFn = props.focusFn, // ✅
    className = props.className, // ✅
    showMore = props.showMore;
    var customChildren = React__default.Children.map(children, function (child) {
        var _a;
        if (React__default.isValidElement(child)) {
            return React__default.cloneElement(child, {
                key: (_a = child.props) === null || _a === void 0 ? void 0 : _a.tagKey,
                avatarShape: avatarShape,
                className: classNames,
            });
        }
    });
    var allowedTags = customChildren.slice(0, maxTagCount);
    var hiddenTags = customChildren.slice(maxTagCount, customChildren.length);
    return (React__default.createElement("div", { ref: ref, className: "flex flex-row items-center flex-wrap gap-1 relative ".concat(className || '') },
        focusFn && (React__default.createElement("div", { "data-name": "select-focus-helper", className: "absolute inset-0 z-0 w-full h-full", onClick: function () {
                focusFn();
            } })),
        allowedTags,
        maxTagCount && showMore && hiddenTags && hiddenTags.length !== 0 && (React__default.createElement("button", { className: "text-xs" },
            "+",
            hiddenTags.length))));
});

var Tag = forwardRef(function (props, ref) {
    var children = props.children, type = props.type, // ✅
    avatarShape = props.avatarShape, // ✅
    avatarSrc = props.avatarSrc, // ✅
    className = props.className, // ✅
    closable = props.closable; // ✅
    props.color; // 🚨
    var onClose = props.onClose, // ✅
    removeNodeOnClose = props.removeNodeOnClose; // ✅
    props.tagKey;
    var tagRef = useRef(null);
    var mergedRef = useMergedRef(tagRef, ref);
    return (React__default.createElement("div", { ref: mergedRef, className: 'w-fit px-1 py-px text-xs rounded-sm cursor-default leading-none flex flex-row items-center relative z-[53] ' +
            "".concat(type === 'light'
                ? 'bg-gray-300'
                : type === 'solid'
                    ? 'bg-primary'
                    : 'bg-gray-100 border-gray-700') +
            ' ' +
            "".concat(className || '') },
        avatarSrc && (React__default.createElement(Image, { className: 'inline leading-none mr-[2px]' +
                ' ' +
                "".concat(avatarShape === 'square' ? 'rounded-xs' : 'rounded-full'), src: avatarSrc, width: 13, height: 13, alt: children.toString() })),
        React__default.createElement("div", { className: "leading-none" }, children),
        closable && (React__default.createElement("button", { className: "leading-none ml-[2px]", onClick: function () {
                var _a;
                if (onClose) {
                    onClose();
                }
                if (removeNodeOnClose) {
                    if (!tagRef)
                        return;
                    if (!tagRef.current)
                        return;
                    (_a = tagRef.current) === null || _a === void 0 ? void 0 : _a.remove();
                }
            } },
            React__default.createElement(SvgX, null)))));
});
Tag.defaultProps = {
    type: 'light',
    avatarShape: 'circle',
    removeNodeOnClose: true,
};

// TODO: show/list selected items
var Select = React__default.forwardRef(function (props, ref) {
    var data = props.data, // ✅
    clearable = props.clearable; // ✅
    props.creatable; // 🚨
    var defaultValue = props.defaultValue, // ✅
    label = props.label, // ✅
    description = props.description, // ✅
    disabled = props.disabled; // ✅
    props.filter; // 🚨
    var leftIcon = props.leftIcon, // 🚨
    initiallyOpened = props.initiallyOpened; // ✅
    props.itemComponent; // 🚨
    var maxDropdownHeight = props.maxDropdownHeight, // ✅
    onChange = props.onChange; // ✅
    props.onSearchChange; // 🚨
    props.searchValue; // 🚨
    props.searchable; // 🚨
    var placeholder = props.placeholder; // ✅
    props.size; // 🚨
    props.withAsterisk; // 🚨
    var dropdownZIndex = props.dropdownZIndex, // ✅
    multiple = props.multiple, // ✅
    closeOnEsc = props.closeOnEsc; // ✅
    __rest(props, ["data", "clearable", "creatable", "defaultValue", "label", "description", "disabled", "filter", "leftIcon", "initiallyOpened", "itemComponent", "maxDropdownHeight", "onChange", "onSearchChange", "searchValue", "searchable", "placeholder", "size", "withAsterisk", "dropdownZIndex", "multiple", "closeOnEsc"]);
    // states
    var _a = useState(!disabled ? (initiallyOpened === true ? true : false) : false), isDropdownOpened = _a[0], setIsDropdownOpened = _a[1];
    var _b = useState(), inputHeight = _b[0], setInputHeight = _b[1];
    var _c = useState(defaultValue ? defaultValue : []), selected = _c[0], setSelected = _c[1];
    var _d = useState(), inputWidth = _d[0], setInputWidth = _d[1];
    var _e = useState(), tagGroupWidth = _e[0], setTagGroupWidth = _e[1];
    var _f = useState(999); _f[0]; var setMaxTagCount = _f[1];
    // refs
    var inputRef = useRef(null);
    var inputId = useId().replaceAll(':', '') + '-input';
    var tagGroupRef = useRef(null);
    // callbacks
    var openDropdown = useCallback(function () {
        setIsDropdownOpened(true);
    }, []);
    var closeDropdown = useCallback(function () {
        setIsDropdownOpened(false);
    }, []);
    var getInputSizes = useCallback(function () {
        if (tagGroupRef) {
            if (tagGroupRef.current) {
                setTagGroupWidth(tagGroupRef.current.offsetWidth);
            }
        }
        if (!inputRef.current)
            return;
        if (inputRef.current.offsetHeight === inputHeight)
            return;
        setInputHeight(inputRef.current.offsetHeight);
        setInputWidth(inputRef.current.offsetWidth);
    }, [inputHeight]);
    var selectHandler = useCallback(function (value) {
        var selectedType = typeof value === 'string' ? 'string' : 'object';
        if (multiple) {
            if (selectedType === 'string') {
                if (selected.includes(value)) {
                    setSelected(selected.filter(function (item) { return item !== value; }));
                    if (onChange) {
                        onChange(selected.filter(function (item) { return item !== value; }));
                    }
                }
                else {
                    setSelected(selected.concat([value]));
                    if (onChange) {
                        onChange(selected.concat([value]));
                    }
                }
            }
            else {
                if (selected.includes(value)) {
                    setSelected(selected.filter(function (item) {
                        return item.label !== value.label;
                    }));
                }
                else {
                    setSelected(__spreadArray(__spreadArray([], selected, true), [
                        value,
                    ], false));
                }
            }
        }
        else {
            // @ts-ignore
            setSelected([value]);
            if (onChange) {
                onChange(value);
            }
            closeDropdown();
        }
    }, [multiple, selected, onChange, closeDropdown]);
    // custom hooks
    useEventListener('keyup', function (e) {
        if (closeOnEsc) {
            if (e.key === 'Escape') {
                closeDropdown();
            }
        }
    });
    var portalRef = useClickOutside(function () {
        closeDropdown();
    });
    // useeffects
    useEffect(function () {
        if (!inputRef.current)
            return;
        getInputSizes();
    }, [inputRef.current]);
    useEffect(function () {
        if (!tagGroupRef || !tagGroupRef.current)
            return;
        getInputSizes();
    }, [selected, tagGroupRef]);
    useEffect(function () {
        if (!tagGroupWidth || !inputWidth)
            return;
        if (inputWidth - 150 >= tagGroupWidth) {
            // overflows
            setMaxTagCount(selected.length);
        }
    }, [tagGroupWidth, inputWidth, selected]);
    return (React__default.createElement("div", { className: "w-full max-w-[250px] h-fit relative flex flex-col" },
        label && typeof label === 'string' ? (React__default.createElement("div", { className: "font-medium mb-[2px] leading-none text-sm" }, label)) : (label),
        description && typeof description === 'string' ? (React__default.createElement("div", { className: "text-xs leading-none font-light mb-[6px]" }, description)) : (description),
        React__default.createElement("div", { className: "".concat(inputId, " w-full h-fit relative flex flex-col") },
            React__default.createElement(Input, { type: "text", ref: inputRef, leftIcon: leftIcon, hideInput: selected && selected.length > 0, leftComponent: selected &&
                    selected.length > 0 && (React__default.createElement("div", { className: "z-50 w-full relative" },
                    React__default.createElement(TagGroup, { focusFn: openDropdown, ref: tagGroupRef, 
                        // maxTagCount={maxTagCount}
                        showMore: true }, selected.map(function (item) {
                        var selectedType = typeof item === 'string' ? 'string' : 'object';
                        var tagLabel = selectedType === 'string'
                            ? item
                            : item.label;
                        return (item && (React__default.createElement(Tag, { tagKey: tagLabel, key: uuid(), closable: true, className: "z-[52] relative", removeNodeOnClose: false, onClose: function () {
                                if (typeof item === 'string') {
                                    selectHandler(tagLabel);
                                }
                                else {
                                    selectHandler(item);
                                }
                            } }, tagLabel)));
                    })))), rightIcon: selected.length === 0 ? (React__default.createElement(SvgLeftArrow, { className: "rotate-[270deg] w-3 h-3" })) : clearable ? (React__default.createElement("button", { className: "" },
                    React__default.createElement(SvgClear, { className: "w-4 h-4 !pointer-events-auto !z-20 cursor-pointer relative", onClick: function () {
                            setSelected([]);
                        } }))) : (React__default.createElement(SvgLeftArrow, { className: "rotate-[270deg] w-3 h-3" })), placeholder: !selected ? placeholder : '', disabled: disabled, onClick: function () {
                    openDropdown();
                } }),
            isDropdownOpened && inputHeight && (React__default.createElement(Portal, { ref: portalRef, target: ".".concat(inputId), className: "\n                absolute \n                ".concat(dropdownZIndex ? dropdownZIndex : 'z-20 ', " \n                left-0 w-full\n            "), style: {
                    top: inputHeight + 10,
                } },
                React__default.createElement(Card, { className: "shadow-sm px-0 py-0 ".concat(maxDropdownHeight ? maxDropdownHeight : 'max-h-[200px]', "\n                overflow-hidden overflow-y-auto relative\n              ") }, data.map(function (item) {
                    var optionLabel = typeof item === 'string' ? item : item.label;
                    var optionValue = typeof item === 'string' ? item : item.value;
                    var defaultSelected;
                    if (typeof item === 'string') {
                        defaultSelected = selected.includes(item);
                    }
                    else {
                        defaultSelected =
                            selected.filter(function (a) { return a.value === optionValue; }).length !== 0;
                    }
                    return (React__default.createElement(CheckBox, { key: optionValue, onChangeChecked: function () {
                            if (typeof item === 'string') {
                                selectHandler(optionValue);
                            }
                            else {
                                selectHandler(item);
                            }
                        }, "data-option": optionValue, defaultChecked: defaultSelected, className: "w-full py-1 hover:bg-gray-100 px-3 font-light", label: optionLabel, name: optionValue, hideCheckbox: multiple ? false : true }));
                })),
                React__default.createElement(Space, { spacing: 10 }),
                selected && selected.length > 0 && React__default.createElement(Input, null))))));
});

function Sider(props) {
    var children = props.children, className = props.className;
    var context = React__default.useContext(NavContext);
    var isExpanded = context === null || context === void 0 ? void 0 : context.isExpanded;
    return (React__default.createElement("div", { className: 'block' +
            ' ' +
            'max-w-[240px]' +
            ' ' +
            (className || ' ') +
            ' ' +
            (isExpanded ? 'w-full' : 'w-20') +
            ' ' +
            ' transform transition-width ' }, children));
}

// Or Drawer
var SideSheet = forwardRef(function (props, ref) {
    var children = props.children, className = props.className, placement = props.placement, title = props.title, isOpen = props.isOpen, size = props.size; props.onOpen; props.onClose; var closeIcon = props.closeIcon, closeOnEsc = props.closeOnEsc, withSideSpace = props.withSideSpace, closeOnOverlayClick = props.closeOnOverlayClick, overlayClasses = props.overlayClasses, footerButtons = props.footerButtons;
    var _a = useState(isOpen), isOpened = _a[0], setIsOpened = _a[1];
    var closeModal = useCallback(function () {
        setIsOpened(false);
    }, []);
    var clickedOutside = useClickOutside(function () {
        if (closeOnOverlayClick) {
            closeModal();
        }
    });
    var refs = useMergedRef(clickedOutside, ref);
    useEventListener('keyup', function (e) {
        if (closeOnEsc) {
            if (e.key === 'Escape') {
                closeModal();
            }
        }
    });
    useEffect(function () {
        if (!document)
            return;
        setIsOpened(isOpen);
    }, [isOpen]);
    if (!isOpened)
        return null;
    return (React__default.createElement(Portal, { className: "fixed inset-0 bg-black/50 w-screen h-screen ".concat(overlayClasses || '') },
        React__default.createElement(Card, { ref: refs, className: "absolute  \n          ".concat(calculateClasses({ placement: placement, withSideSpace: withSideSpace, size: size }), "\n          ").concat(className || '') },
            React__default.createElement("div", { className: "w-full h-full relative flex flex-col" },
                typeof closeIcon === 'boolean' && closeIcon && (React__default.createElement("button", { className: "top-0 right-0 absolute", onClick: function () { return closeModal(); } },
                    React__default.createElement(SvgX, { className: "w-5 h-5" }))),
                typeof closeIcon !== 'boolean' && closeIcon && (React__default.createElement("button", { className: "top-0 right-0 absolute", onClick: function () { return closeModal(); } }, closeIcon)),
                title && (React__default.createElement(React__default.Fragment, null,
                    React__default.createElement("div", { className: "font-medium" }, title),
                    React__default.createElement(Space, { direction: "vertical" }))),
                children,
                footerButtons && (React__default.createElement(React__default.Fragment, null,
                    React__default.createElement(Space, { direction: "vertical" }),
                    React__default.createElement("div", { className: "flex flex-row w-full gap-2" }, footerButtons.map(function (button) {
                        return (React__default.createElement(Button, { key: uuid(), className: "".concat(button.buttonClasses || ''), onClick: button.onClick }, button.text));
                    }))))))));
});
SideSheet.defaultProps = {
    withSideSpace: true,
    placement: 'right',
    size: 'medium',
    closeOnOverlayClick: true,
    closeOnEsc: true,
    closeIcon: true,
};
var calculateClasses = function (_a) {
    var placement = _a.placement, withSideSpace = _a.withSideSpace, size = _a.size;
    var positions = {
        left: "".concat(withSideSpace
            ? 'left-hf-side-padding top-hf-side-padding/2'
            : 'left-0 top-0'),
        right: "".concat(withSideSpace
            ? 'right-hf-side-padding top-hf-side-padding/2'
            : 'right-0 top-0'),
        top: "".concat(withSideSpace
            ? 'left-hf-side-padding/2 top-hf-side-padding'
            : 'left-0 top-0'),
        bottom: "".concat(withSideSpace
            ? 'left-hf-side-padding/2 bottom-hf-side-padding'
            : 'left-0 bottom-0'),
    };
    var sizes = {
        topBottom: "".concat((size === 'medium'
            ? 'h-[30vw]'
            : size === 'large'
                ? 'h-[50vw]'
                : 'h-[20vw]') +
            ' ' +
            (withSideSpace
                ? 'w-[-webkit-fill-available] mx-hf-side-padding'
                : 'w-full')),
        leftRight: "".concat((size === 'medium'
            ? 'w-[35vw]'
            : size === 'large'
                ? 'w-[50vw]'
                : 'w-[25vw]') +
            ' max-w-[600px] ' +
            (withSideSpace
                ? 'h-[-webkit-fill-available] my-hf-side-padding'
                : 'h-full')),
    };
    return "".concat(positions[placement], " ").concat(sizes[placement === 'left' || placement === 'right' ? 'leftRight' : 'topBottom']);
};

function Spin(props) {
    var size = props.size, className = props.className, style = props.style, children = props.children, spinColor = props.spinColor, circleColor = props.circleColor;
    return (React__default.createElement("div", { className: "flex flex-row items-center gap-4" },
        React__default.createElement("svg", { className: "inline animate-spin".concat(className || ' ').concat(size && SpinSize(size) + ' ').concat(spinColor && SpinTheme(spinColor) + ' ').concat(circleColor), viewBox: "0 0 100 101", fill: "none", style: style }, svgPath()),
        children));
}
Spin.defaultProps = {
    size: 'lg',
    shape: 'square',
    type: 'light',
    spinColor: 'brand',
    circleColor: 'text-oceaner-blue-100',
};
var SpinSize = function (value) {
    switch (value) {
        case 'sm':
            return 'h-4 w-4 ';
        case 'lg':
            return 'w-8 h-8';
        case 'xl':
            return 'w-10 h-10';
        default:
            return 'w-6 h-6 ';
    }
};
var SpinTheme = function (value) {
    switch (value) {
        case 'danger':
            return 'fill-error';
        case 'important':
            return 'fill-odin-gray-900';
        case 'informative':
            return 'fill-odin-gray-300';
        case 'severe':
            return 'fill-valhala-orange-800';
        case 'subtle':
            return 'fill-ui-black';
        case 'success':
            return 'fill-success';
        case 'warning':
            return ' fill-alert ';
        default:
            return 'fill-oceaner-blue-700';
    }
};
var svgPath = function () {
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement("path", { d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z", fill: "currentColor" }),
        React__default.createElement("path", { d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z", fill: "currentFill" })));
};

function SvgSort(props) {
    return (React__default.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { fill: "currentColor", d: "M18.2 9.3L12 3L5.8 9.3c-.2.2-.3.4-.3.7s.1.5.3.7c.2.2.4.3.7.3h11c.3 0 .5-.1.7-.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7zM5.8 14.7L12 21l6.2-6.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3h-11c-.3 0-.5.1-.7.3c-.2.2-.3.5-.3.7s.1.5.3.7z" })));
}
function SvgSearch(props) {
    return (React__default.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 12 12" }, props),
        React__default.createElement("path", { fill: "currentColor", d: "M5 1a4 4 0 1 0 2.248 7.31l2.472 2.47a.75.75 0 1 0 1.06-1.06L8.31 7.248A4 4 0 0 0 5 1ZM2.5 5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0Z" })));
}

var Table = forwardRef(function (props, ref) {
    var cols = props.cols, // ✅
    rows = props.rows, // ✅
    withBorder = props.withBorder, // ✅
    highlightOnHover = props.highlightOnHover, // ✅
    stripedHorizontal = props.stripedHorizontal, // ✅
    stripedVertical = props.stripedVertical; // ✅
    props.withColumnBorders; // 🚨
    var maxRows = props.maxRows, // ✅
    currentPage = props.currentPage, // ✅
    hidePagination = props.hidePagination, // ✅
    onPageChange = props.onPageChange;
    var _a = useState(currentPage ? currentPage : 1), current = _a[0], setCurrent = _a[1];
    var _b = useState(), showingRows = _b[0], setShowingRows = _b[1];
    var _c = useState(), rowsState = _c[0], setRowsState = _c[1];
    var _d = useState(), updateTable = _d[0], setUpdateTable = _d[1];
    var _e = useState(), searchInput = _e[0], setSearchInput = _e[1];
    useEffect(function () {
        if (!rows)
            return;
        setRowsState(rows);
    }, [rows]);
    useEffect(function () {
        if (!rowsState || !current)
            return;
        setShowingRows(rowsState.slice((current - 1) * maxRows, (current - 1) * maxRows + maxRows));
    }, [rowsState, current, updateTable]);
    return (React__default.createElement("div", { className: "flex flex-col" },
        React__default.createElement("header", { className: "px-5 py-4 border-b border-gray-100" },
            React__default.createElement("h2", { className: "font-semibold text-gray-800" }, "Customers")),
        React__default.createElement("table", { className: "table-auto w-full" },
            React__default.createElement("thead", { className: "text-xs font-semibold uppercase text-gray-400 bg-gray-50" },
                React__default.createElement("tr", { className: "".concat(cols[0].width ? 'flex flex-row items-center' : '') }, cols &&
                    cols.map(function (col) {
                        return (React__default.createElement("th", { key: col.title, className: "p-2 whitespace-nowrap ".concat(col.width || '') },
                            React__default.createElement("div", { className: "flex flex-row items-center gap-px" },
                                React__default.createElement("div", { className: "font-semibold text-left" }, col.title),
                                col.sorter && (React__default.createElement("button", { className: "leading-none", onClick: function () {
                                        setRowsState(rowsState === null || rowsState === void 0 ? void 0 : rowsState.sort(col.sorter));
                                        setUpdateTable(uuid());
                                        // reverse if already sorted
                                        if ((rowsState === null || rowsState === void 0 ? void 0 : rowsState[0][col.title]) ===
                                            showingRows[0][col.title]) {
                                            setRowsState(rowsState === null || rowsState === void 0 ? void 0 : rowsState.reverse());
                                            setUpdateTable(uuid());
                                        }
                                    } },
                                    React__default.createElement(SvgSort, null))),
                                col.search && (
                                // TODO: change this with portal
                                React__default.createElement("div", { className: "relative w-fit h-fit leading-none" },
                                    React__default.createElement("input", { id: "modal", className: "peer/modal hidden", type: "checkbox", name: "status" }),
                                    React__default.createElement("label", { htmlFor: "modal", className: "peer-checked/modal:flex cursor-pointer" },
                                        React__default.createElement(SvgSearch, null)),
                                    React__default.createElement(Card, { className: "hidden peer-checked/modal:flex absolute top-7 !w-fit left-2 bg-white flex-col gap-2" },
                                        React__default.createElement("div", { className: "relative w-full h-full flex flex-row items-center gap-1" },
                                            React__default.createElement(Input, { placeholder: "Search", value: searchInput, onChange: function (e) {
                                                    setSearchInput(e.target.value);
                                                } }),
                                            React__default.createElement("button", { onClick: function () {
                                                    setRowsState(rows);
                                                    setSearchInput('');
                                                } },
                                                React__default.createElement("label", { htmlFor: "modal", className: "peer-checked/modal:flex" },
                                                    React__default.createElement(SvgX, { className: "w-4 h-4 cursor-pointer" })))),
                                        React__default.createElement("div", null,
                                            React__default.createElement(Button, { onClick: function () {
                                                    setRowsState(rowsState === null || rowsState === void 0 ? void 0 : rowsState.filter(function (row) {
                                                        return row[col.title]
                                                            .toLowerCase()
                                                            .includes(searchInput === null || searchInput === void 0 ? void 0 : searchInput.toLowerCase());
                                                    }));
                                                } }, "Search"))))))));
                    }))),
            React__default.createElement("tbody", { className: "text-sm ".concat(withBorder ? 'divide-y divide-gray-100' : '') }, showingRows &&
                showingRows.map(function (row) {
                    return (React__default.createElement("tr", { key: row.name, className: "".concat(cols[0].width ? 'flex flex-row items-center' : '') +
                            ' ' +
                            "".concat(stripedVertical ? 'odd:bg-gray-100' : '') +
                            ' ' +
                            "".concat(highlightOnHover
                                ? stripedHorizontal
                                    ? 'hover:outline-solid hover:outline-gray-300 hover:outline'
                                    : 'hover:bg-gray-100'
                                : '') }, cols &&
                        cols.map(function (col) {
                            return (React__default.createElement("td", { key: col.title, className: 'p-2 ' +
                                    ' ' +
                                    "".concat(stripedHorizontal ? ' odd:bg-gray-200 ' : '', " ").concat(col.width || '') },
                                React__default.createElement("div", { className: "text-left" }, row[col.title])));
                        })));
                }))),
        React__default.createElement(Space, { direction: "vertical" }),
        !hidePagination && (React__default.createElement(Pagination, { total: rows.length, current: current, perPage: maxRows, onChange: function (page) {
                setCurrent(page);
                if (onPageChange) {
                    onPageChange(page);
                }
            } }))));
});
Table.defaultProps = {
    withBorder: true,
    maxRows: 15,
    currentPage: 1,
    hidePagination: false,
};

function SvgClock(props) {
    return (React__default.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24" }, props),
        React__default.createElement("path", { fill: "currentColor", d: "M13 12.175V9q0-.425-.287-.713Q12.425 8 12 8t-.712.287Q11 8.575 11 9v3q0 .5.175.925q.175.425.525.775l2.125 2.125q.3.3.713.3q.412 0 .712-.3q.275-.3.275-.712q0-.413-.275-.688ZM12 4q-.425 0-.712.287Q11 4.575 11 5t.288.713Q11.575 6 12 6t.713-.287Q13 5.425 13 5t-.287-.713Q12.425 4 12 4Zm8 8q0-.425-.288-.713Q19.425 11 19 11t-.712.287Q18 11.575 18 12t.288.712Q18.575 13 19 13t.712-.288Q20 12.425 20 12Zm-8 6q-.425 0-.712.288Q11 18.575 11 19t.288.712Q11.575 20 12 20t.713-.288Q13 19.425 13 19t-.287-.712Q12.425 18 12 18Zm-6-6q0-.425-.287-.713Q5.425 11 5 11t-.713.287Q4 11.575 4 12t.287.712Q4.575 13 5 13t.713-.288Q6 12.425 6 12Zm6 10q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z" })));
}

/**
 * @param {string} defaultValue - default value of the input
 * @param {boolean} withIcon- displays clock at the end of the input
 * @description - Don't forget to define a width for the input for preventing the input from expanding
 */
var TimePicker = forwardRef(function (props, ref) {
    var withIcon = props.withIcon, // ✅
    defaultValue = props.defaultValue, // ✅
    onChange = props.onChange, // ✅
    rest = __rest(props, ["withIcon", "defaultValue", "onChange"]);
    // states
    var _a = useState(false), isDropdownOpened = _a[0], setIsDropdownOpened = _a[1];
    var _b = useState(defaultValue ? defaultValue : '00:00'), timeValue = _b[0], setTimeValue = _b[1];
    console.log({ timeValue: timeValue });
    // callbacks
    var openDropdown = useCallback(function () {
        setIsDropdownOpened(true);
    }, []);
    var closeDropdown = useCallback(function () {
        setIsDropdownOpened(false);
    }, []);
    // refs
    var refs = useMergedRef(ref);
    var outsideRef = useClickOutside(function () {
        closeDropdown();
    });
    var hours = new Array(24)
        .fill(0)
        .map(function (_, i) { return (i < 10 ? "0".concat(i) : "".concat(i)); });
    var minutes = new Array(60)
        .fill(0)
        .map(function (_, i) { return (i < 10 ? "0".concat(i) : "".concat(i)); });
    return (React__default.createElement("div", { ref: outsideRef, className: "w-fit h-fit relative", "data-name": "time-picker-wrapper" },
        React__default.createElement(Input, __assign({ onFocus: openDropdown, wrapperClasses: "font-mono", rightIcon: withIcon ? (React__default.createElement(SvgClock, { className: "-ml-[5px] pointer-events-none text-gray-600" })) : null, 
            // onClick={openDropdown}
            ref: refs, value: timeValue, onChange: function (e) {
                setTimeValue(e.target.value);
                onChange && onChange(e);
            }, className: "hide-indicator", type: 'time' }, rest)),
        isDropdownOpened && (React__default.createElement(Card, { "data-name": "time-picker-dropdown", className: "grid grid-cols-2 w-full mt-2 !p-0 overflow-hidden" },
            React__default.createElement("div", { "data-name": "time-picker-hours", className: "overflow-y-auto !h-40 flex items-center flex-col scrollbar-hide" }, hours.map(function (hour) {
                var minute = timeValue === null || timeValue === void 0 ? void 0 : timeValue.split(':')[1];
                var currentHour = timeValue === null || timeValue === void 0 ? void 0 : timeValue.split(':')[0];
                return (React__default.createElement("button", { className: "py-1 hover:bg-gray-100 w-full text-sm rounded-r ".concat(currentHour === hour ? 'bg-gray-100' : ''), key: uuid(), onClick: function () {
                        setTimeValue("".concat(hour, ":").concat(minute));
                        new Event('input', { bubbles: true });
                        // TODO: Trigger onChange event at `TimePicker`.
                        // refs?.current.dispatchEvent(event)
                    } }, hour));
            })),
            React__default.createElement("div", { "data-name": "time-picker-minutes", className: "overflow-y-auto !h-40 flex items-center flex-col scrollbar-hide" }, minutes.map(function (minute) {
                var hour = timeValue === null || timeValue === void 0 ? void 0 : timeValue.split(':')[0];
                var currentMinute = timeValue === null || timeValue === void 0 ? void 0 : timeValue.split(':')[1];
                return (React__default.createElement("button", { className: "py-1 hover:bg-gray-100 w-full text-sm rounded-l ".concat(currentMinute === hour ? 'bg-gray-100' : ''), key: uuid(), onClick: function () {
                        setTimeValue("".concat(hour, ":").concat(minute));
                        new Event('input', { bubbles: true });
                        // TODO: Trigger onChange event at `TimePicker`.
                        // element.dispatchEvent(event)
                    } }, minute));
            }))))));
});
TimePicker.defaultProps = {
    withIcon: true,
};

function ClipboardCopy(_a) {
    var copyText = _a.copyText;
    var _b = useState(false), isCopied = _b[0], setIsCopied = _b[1];
    function copyTextToClipboard(text) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!('clipboard' in navigator)) return [3 /*break*/, 2];
                        return [4 /*yield*/, navigator.clipboard.writeText(text)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [2 /*return*/];
                }
            });
        });
    }
    var handleCopyClick = function () {
        copyTextToClipboard(copyText)
            .then(function () {
            setIsCopied(true);
            setTimeout(function () {
                setIsCopied(false);
            }, 1500);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    return (React__default.createElement("button", { className: "ml-3 text-ui-3xl", onClick: handleCopyClick },
        React__default.createElement("div", { className: (isCopied ? 'text-success' : '') +
                ' flex transform flex-row items-center transition hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none' },
            React__default.createElement(Copy24Filled, null),
            isCopied && React__default.createElement("span", { className: "text-lg" }, "Copied !"))));
}
function Copy24Filled() {
    return (React__default.createElement("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24" },
        React__default.createElement("path", { fill: "currentColor", d: "M13 6.75V2H8.75A2.25 2.25 0 0 0 6.5 4.25v13a2.25 2.25 0 0 0 2.25 2.25h9A2.25 2.25 0 0 0 20 17.25V9h-4.75A2.25 2.25 0 0 1 13 6.75Zm1.5 0V2.5l5 5h-4.25a.75.75 0 0 1-.75-.75ZM5.503 4.627A2.251 2.251 0 0 0 4 6.75v10.504a4.75 4.75 0 0 0 4.75 4.75h6.494a2.25 2.25 0 0 0 2.122-1.5H8.75a3.25 3.25 0 0 1-3.25-3.25l.003-12.627Z" })));
}

function Title(props) {
    var _a = useState(false), onMouse = _a[0], setonMouse = _a[1];
    var children = props.children, className = props.className, heading = props.heading, weight = props.weight, color = props.color, copyable = props.copyable, context = props.context, style = props.style;
    var textSize = HeadingSize(heading);
    var copyContent = context ? context : children === null || children === void 0 ? void 0 : children.toString();
    return (React__default.createElement("div", { className: "flex w-fit ".concat(className ? className + ' ' : '').concat(textSize + ' ').concat(weight ? 'font-' + weight : '', " ").concat(copyable ? 'pr-5' : '').concat(HeadingColor(color)), style: style, onMouseOver: function (e) { return setonMouse(true); }, onMouseOut: function (e) { return setonMouse(false); } },
        children,
        copyable && onMouse && (React__default.createElement(ClipboardCopy, { copyText: copyContent }))));
}
Title.defaultProps = {
    heading: '1',
    weight: 'normal',
};
var HeadingColor = function (color) {
    switch (color) {
        case 'primary':
            return 'text-oceaner-blue-700';
        case 'secondary':
            return 'text-valhala-orange-500';
        case 'warning':
            return 'text-alert';
        case 'danger':
            return 'text-error';
        case 'tertiary':
            return 'text-odin-gray-900';
        default:
            return 'text-ui-black';
    }
};
var HeadingSize = function (size) {
    switch (size) {
        case '2':
            return 'text-ui-7xl';
        case '3':
            return 'text-ui-6xl';
        case '4':
            return 'text-ui-5xl';
        case '5':
            return 'text-ui-4xl';
        case '6':
            return 'text-ui-3xl';
        default:
            return 'text-ui-8xl';
    }
};

export { Avatar, Button, Card, CheckBox, CheckboxGroup, DatePicker, Indicator, Input, Layout, Link, Modal, Nav, Notification, NotificationCard, NotificationProvider, OverflowList, Pagination, Portal, Radio, Select, SideSheet, Sider, Space, Spin, Table, Tag, TagGroup, TimePicker, Title, toast };
