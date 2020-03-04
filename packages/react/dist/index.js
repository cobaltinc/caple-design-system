import React, { createContext } from 'react';
import classnames from 'classnames';
import { icons } from 'feather-icons';
import 'react-transition-group';
import Cleave from 'cleave.js';
import raf from 'raf';
import ReactDOM from 'react-dom';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
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

var config = {
    prefix: 'caple'
};

var ConfigContext = createContext({
    prefix: config.prefix
});

var Avatar = (function (_a) {
    var _b = _a.size, size = _b === void 0 ? 80 : _b, _c = _a.shape, shape = _c === void 0 ? 'circle' : _c, src = _a.src, text = _a.text, alt = _a.alt, _d = _a.className, className = _d === void 0 ? '' : _d, style = _a.style;
    var useContext = React.useContext, useState = React.useState, useRef = React.useRef, useEffect = React.useEffect;
    var prefix = useContext(ConfigContext).prefix;
    var classPrefix = prefix + "-avatar";
    var classNames = classnames("" + classPrefix, classPrefix + "--shape-" + shape, className);
    var children = null;
    var span = useRef(null);
    var _e = useState(0.0), scale = _e[0], setScale = _e[1];
    useEffect(function () {
        if (span.current) {
            var textWidth = span.current.offsetWidth;
            setScale(size - 8 < textWidth ? (size - 8) / textWidth : 1);
        }
    });
    if (src) {
        children = <img className={classPrefix + "--image"} src={src} alt={alt}/>;
    }
    else if (text) {
        var transformString = "scale(" + scale + ") translateX(-50%)";
        var transformStyle = {
            msTransform: transformString,
            WebkitTransform: transformString,
            transform: transformString
        };
        var textStyle = {
            lineHeight: size + "px"
        };
        children = (<span className={classPrefix + "--text"} style={__assign(__assign({}, transformStyle), textStyle)} ref={span}>
        {text}
      </span>);
    }
    else {
        children = null;
    }
    var sizeStyle = {
        width: size,
        height: size
    };
    return (<span className={classNames} style={__assign(__assign({}, sizeStyle), style)}>
      {children}
    </span>);
});

var Badge = (function (_a) {
    var _b;
    var children = _a.children, count = _a.count, _c = _a.showZero, showZero = _c === void 0 ? false : _c, maxCount = _a.maxCount, _d = _a.dot, dot = _d === void 0 ? false : _d, _e = _a.backgroundColor, backgroundColor = _e === void 0 ? '#DE3618' : _e, _f = _a.textColor, textColor = _f === void 0 ? '#fff' : _f, _g = _a.className, className = _g === void 0 ? '' : _g, style = _a.style;
    var useContext = React.useContext;
    var prefix = useContext(ConfigContext).prefix;
    var classPrefix = prefix + "-badge";
    var classNames = classnames(classPrefix, className, (_b = {},
        _b[classPrefix + "--dot"] = dot,
        _b));
    var colorStyle = {
        backgroundColor: backgroundColor,
        color: textColor
    };
    var badge = null;
    if (count) {
        badge = (<sup className={classNames} style={colorStyle}>
        {maxCount && count > maxCount ? maxCount + "+" : count}
      </sup>);
    }
    else {
        if (count !== undefined) {
            badge = showZero ? <sup className={classNames} style={colorStyle}>0</sup> : null;
        }
        else if (dot) {
            badge = <sup className={classNames} style={colorStyle}/>;
        }
    }
    return (<span className={classPrefix + "--container"}>
      {children}
      {badge}
    </span>);
});

var warning = function (title, body) { return console.warn("%c " + title + "\n\n", 'font-weight: bold; font-size: 16px;', body); };
var camelToSnake = function (camel) { return camel.replace(/[\w]([A-Z])/g, function (s) { return s[0] + "-" + s[1]; }).toLowerCase(); };
var convertReactNodeTo = function (parentName, childName, reactNode) {
    return React.Children.toArray(reactNode).filter(function (element) {
        if (React.isValidElement(element) === false) {
            console.warn("%c " + parentName + "\n\n", 'font-weight: bold; font-size: 16px;', "Only accepts " + childName + " as it's children");
            return false;
        }
        return true;
    });
};
var concatReactNodeToString = function (reactNode) {
    return React.Children.toArray(reactNode)
        .filter(function (element) {
        return typeof element === 'string';
    })
        .concat()
        .toString();
};

var IconFeather = (function (_a) {
    var _b;
    var type = _a.type, _c = _a.size, size = _c === void 0 ? 16 : _c, _d = _a.rotate, rotate = _d === void 0 ? 0 : _d, _e = _a.spin, spin = _e === void 0 ? false : _e, _f = _a.strokeWidth, strokeWidth = _f === void 0 ? 2 : _f, _g = _a.color, color = _g === void 0 ? "#212B36" : _g, onClick = _a.onClick, _h = _a.className, className = _h === void 0 ? '' : _h, style = _a.style;
    var useContext = React.useContext;
    var prefix = useContext(ConfigContext).prefix;
    var classPrefix = prefix + "-icon";
    var classNames = classnames(classPrefix, className, (_b = {},
        _b[classPrefix + "--spin"] = spin,
        _b));
    var shapeStyle = {
        width: size,
        height: size,
        transform: "rotate(" + rotate + "deg)"
    };
    var iconStyle = {
        stroke: color,
        width: size,
        height: size
    };
    var svg = icons[type].toSvg(__assign({ 'stroke-width': strokeWidth }, iconStyle));
    var base64 = Buffer.from(svg, 'utf8').toString('base64');
    return (<i className={classNames} style={__assign(__assign({}, style), shapeStyle)} onClick={onClick}>
      <img src={"data:image/svg+xml;base64," + base64}/>
    </i>);
});

var Icon = function (_a) {
    var _b;
    var type = _a.type, component = _a.component, _c = _a.size, size = _c === void 0 ? 16 : _c, rotate = _a.rotate, _d = _a.spin, spin = _d === void 0 ? false : _d, _e = _a.color, color = _e === void 0 ? "#212B36" : _e, onClick = _a.onClick, _f = _a.className, className = _f === void 0 ? '' : _f, style = _a.style;
    if (!type && !component) {
        warning('Icon', 'Empty Icon');
        return null;
    }
    var useContext = React.useContext;
    var prefix = useContext(ConfigContext).prefix;
    var classPrefix = prefix + "-icon";
    var classNames = classnames(classPrefix, className, (_b = {},
        _b[classPrefix + "--spin"] = spin,
        _b));
    var shapeStyle = {
        width: size,
        height: size,
        transform: rotate ? "rotate(" + rotate + "deg)" : undefined
    };
    var iconStyle = {
        fill: color,
    };
    var IconComponent = require("./svgs/" + type + ".svg").ReactComponent;
    return (<i className={classNames} style={__assign(__assign({}, style), shapeStyle)} onClick={onClick}>
      <IconComponent style={iconStyle}/>
    </i>);
};
Icon.Feather = IconFeather;

var Text = (function (_a) {
    var _b;
    var children = _a.children, size = _a.size, _c = _a.paragraph, _d = _a.strong, strong = _d === void 0 ? false : _d, _e = _a.underline, underline = _e === void 0 ? false : _e, _f = _a.delete, del = _f === void 0 ? false : _f, _g = _a.mark, mark = _g === void 0 ? false : _g, _h = _a.code, code = _h === void 0 ? false : _h, color = _a.color, editable = _a.editable, placeholder = _a.placeholder, onChange = _a.onChange, _j = _a.className, className = _j === void 0 ? '' : _j, style = _a.style;
    var useContext = React.useContext;
    var prefix = useContext(ConfigContext).prefix;
    var classPrefix = prefix + "-text";
    var classNames = classnames(classPrefix, className, (_b = {},
        _b[classPrefix + "--size-" + size] = size !== undefined && typeof size === 'string',
        _b));
    var fontStyle = {
        fontWeight: strong ? 'bold' : 'normal',
        textDecoration: underline ? 'underline' : 'none',
    };
    if (color) {
        fontStyle.color = color;
    }
    if (mark) {
        children = <mark>{children}</mark>;
    }
    if (code) {
        children = <code>{children}</code>;
    }
    if (del) {
        children = <del>{children}</del>;
    }
    if (typeof size === 'number') {
        fontStyle.fontSize = size;
    }
    var onKeyDown = function (event) {
        var _a;
        if (event.key === 'Enter') {
            event.preventDefault();
        }
        (_a = onChange) === null || _a === void 0 ? void 0 : _a(event);
    };
    var onPaste = function (event) {
        event.preventDefault();
        var pastedData = event.clipboardData.getData('text/plain');
        window.document.execCommand('insertText', false, pastedData);
    };
    return (<Tag onKeyDown={onKeyDown} onPaste={onPaste} contentEditable={editable} placeholder={placeholder} suppressContentEditableWarning={editable} className={classNames} style={__assign(__assign({}, style), fontStyle)}>
      {children}
    </Tag>);
});

var BreadcrumbItem = function (_a) {
    var children = _a.children, href = _a.href, onClick = _a.onClick, hasSeperator = _a.hasSeperator, _b = _a.className, className = _b === void 0 ? '' : _b, style = _a.style;
    var useContext = React.useContext;
    var prefix = useContext(ConfigContext).prefix;
    var classPrefix = prefix + "-breadcrumb-item";
    var classNames = classnames(classPrefix, className);
    var isIcon = React.isValidElement(children);
    return (<span className={classNames}>
      <a href={href} className={classPrefix + "--text"} style={style} onClick={onClick}>
        {isIcon ?
        React.cloneElement(children, { size: 20, color: '#637381' }) :
        <Text strong size="large">{concatReactNodeToString(children)}</Text>}
      </a>
      {hasSeperator ?
        <span className={classPrefix + "--separator"}>
            <Icon type="chenvron-right" color="#C4CDD5"/>
          </span> : null} 
    </span>);
};

var Breadcrumb = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, style = _a.style;
    var useContext = React.useContext;
    var prefix = useContext(ConfigContext).prefix;
    var classPrefix = prefix + "-breadcrumb";
    var classNames = classnames(classPrefix, className);
    var crumbs = React.Children
        .toArray(children)
        .filter(function (element) {
        if (React.isValidElement(element) === false) {
            warning('Breadcrumb', 'Only accepts Breadcrumb.Item as it\'s children.');
            return false;
        }
        return true;
    })
        .map(function (element, index, elements) {
        return React.cloneElement(element, {
            hasSeperator: index !== elements.length - 1
        });
    });
    return (<div className={classNames} style={style}>
      {crumbs}
    </div>);
};
Breadcrumb.Item = BreadcrumbItem;

var Spinner = (function (_a) {
    var children = _a.children, _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? '#919EAB' : _c, _d = _a.dimColor, dimColor = _d === void 0 ? 'white' : _d, _e = _a.className, className = _e === void 0 ? '' : _e, style = _a.style;
    var useContext = React.useContext;
    var prefix = useContext(ConfigContext).prefix;
    var classPrefix = prefix + "-spinner";
    var classNames = classnames("" + classPrefix, className);
    var sizeStyle = {
        width: size,
        height: size
    };
    var spinner = (<i className={classNames} style={__assign(__assign({}, sizeStyle), style)}>
      <svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" style={sizeStyle}>
        <g fill="none" fillRule="evenodd">
          <g transform="translate(1 1)">
            <path d="M36 18c0-9.94-8.06-18-18-18" stroke={color} strokeWidth="2">
              <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"/>
            </path>
            <circle fill={color} cx="36" cy="18" r="1">
              <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite"/>
            </circle>
          </g>
        </g>
      </svg>
    </i>);
    return (children ?
        <div className={classPrefix + "--container"}>
        {children}
        <div className={classPrefix + "--dim"} style={{ backgroundColor: dimColor }}/>
        {spinner}
      </div> :
        spinner);
});

var Button = (function (_a) {
    var _b;
    var children = _a.children, _c = _a.type, type = _c === void 0 ? 'basic' : _c, _d = _a.size, size = _d === void 0 ? 'normal' : _d, _e = _a.block, block = _e === void 0 ? false : _e, _f = _a.disabled, disabled = _f === void 0 ? false : _f, _g = _a.loading, loading = _g === void 0 ? false : _g, onClick = _a.onClick, _h = _a.className, className = _h === void 0 ? '' : _h, style = _a.style;
    var useContext = React.useContext;
    var prefix = useContext(ConfigContext).prefix;
    var classPrefix = prefix + "-button";
    var classNames = classnames(classPrefix, classPrefix + "--type-" + type, classPrefix + "--size-" + size, className, (_b = {},
        _b[classPrefix + "--block"] = block,
        _b));
    var spinnerColor = type === 'basic' ? '#637381' : 'white';
    var spinnerSize = size === 'mini' ? 13 :
        size === 'small' ? 14 :
            size === 'normal' ? 18 :
                size === 'large' ? 26 : 32;
    return (<button className={classNames} style={style} disabled={!!disabled} onClick={onClick}>
      {loading ?
        <Spinner color={spinnerColor} size={spinnerSize}/> :
        children}
    </button>);
});

var Card = (function (_a) {
    var _b;
    var children = _a.children, header = _a.header, footer = _a.footer, _c = _a.collapsible, collapsible = _c === void 0 ? false : _c, onOpen = _a.onOpen, onClose = _a.onClose, _d = _a.loading, loading = _d === void 0 ? false : _d, _e = _a.className, className = _e === void 0 ? '' : _e, style = _a.style, _f = _a.headerClassName, headerClassName = _f === void 0 ? '' : _f, headerStyle = _a.headerStyle, _g = _a.footerClassName, footerClassName = _g === void 0 ? '' : _g, footerStyle = _a.footerStyle;
    var useContext = React.useContext, useState = React.useState;
    var prefix = useContext(ConfigContext).prefix;
    var classPrefix = prefix + "-card";
    var classNames = classnames(classPrefix, className);
    var _h = useState(typeof collapsible === 'object' ? collapsible.expand : true), expand = _h[0], setExpand = _h[1];
    var onClick = function () {
        var _a, _b;
        expand ? (_a = onClose) === null || _a === void 0 ? void 0 : _a() : (_b = onOpen) === null || _b === void 0 ? void 0 : _b();
        setExpand(!expand);
    };
    var caretColor = collapsible.caretColor;
    if (collapsible.animate) {
        // TODO: transition 후 height 고정 버그 수정해야함
        children = (<ExpandTransition open={expand}>
        <div className={classPrefix + "--content"}>
          {children}
        </div>
      </ExpandTransition>);
    }
    else {
        children = expand ?
            <div className={classPrefix + "--content"}>
        {children}
      </div> :
            null;
    }
    return (<div className={classNames} style={style}>
      {header || collapsible ?
        <div className={classnames(classPrefix + "--header", headerClassName)} style={headerStyle}>
            {header === undefined ? null :
            typeof header === 'string' ?
                <Text strong className={classPrefix + "--title"}>{header}</Text> :
                header}

            {loading ?
            <div className={classPrefix + "--collapse-dropdown"}>
                <Spinner size={20}/>
              </div> :
            collapsible ?
                <div className={classPrefix + "--collapse-dropdown"} onClick={onClick}>
                    <Icon type="caret-down" size={20} color={caretColor} className={classnames(classPrefix + "--caret", (_b = {}, _b["reverse"] = expand, _b))}/>
                  </div> :
                null}
          </div> :
        null}
      {children}
      {footer ?
        <div className={classnames(classPrefix + "--footer", footerClassName)} style={footerStyle}>
          {footer}
        </div> :
        null}
    </div>);
});

var Checkbox = (function (_a) {
    var _b;
    var name = _a.name, label = _a.label, value = _a.value, _c = _a.checked, checked = _c === void 0 ? false : _c, _d = _a.error, error = _d === void 0 ? false : _d, _e = _a.disabled, disabled = _e === void 0 ? false : _e, onChange = _a.onChange, _f = _a.className, className = _f === void 0 ? '' : _f, style = _a.style;
    var useState = React.useState, useContext = React.useContext;
    var prefix = useContext(ConfigContext).prefix;
    var classPrefix = prefix + "-checkbox";
    var _g = useState(checked), check = _g[0], setCheck = _g[1];
    var handleChange = function (event) {
        var _a;
        setCheck(event.target.checked);
        (_a = onChange) === null || _a === void 0 ? void 0 : _a(event);
    };
    var classNames = classnames(classPrefix, className, (_b = {},
        _b[classPrefix + "--disabled"] = disabled,
        _b));
    return (<label className={classNames} style={style}>
      <input type="checkbox" name={name} checked={check} disabled={disabled} value={value} onChange={handleChange}/>
      <span className={classPrefix + "--checkmark"}>
        {check ?
        !error ?
            disabled ?
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="15" height="15" rx="2.5" fill="#F9FAFB" stroke="#DFE3E8"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.31476 11.8585L3.13295 8.4415C2.95568 8.2535 2.95568 7.9475 3.13295 7.7575L3.77568 7.0745C3.95295 6.8865 4.24113 6.8865 4.4184 7.0745L6.63657 9.4665L11.5811 4.1415C11.7584 3.9535 12.0465 3.9535 12.2238 4.1415L12.8665 4.8255C13.0438 5.0135 13.0438 5.3205 12.8665 5.5075L6.95748 11.8585C6.78021 12.0465 6.49203 12.0465 6.31476 11.8585Z" fill="#919EAB"/>
                </svg> :
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="15" height="15" rx="2.5" fill="white"/>
                  <rect x="0.5" y="0.5" width="15" height="15" rx="2.5" fill="#617985" fillOpacity="0.02"/>
                  <rect x="0.5" y="0.5" width="15" height="15" rx="2.5" stroke="#5C6AC4"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.31476 11.8585L3.13295 8.4415C2.95568 8.2535 2.95568 7.9475 3.13295 7.7575L3.77568 7.0745C3.95295 6.8865 4.24113 6.8865 4.4184 7.0745L6.63657 9.4665L11.5811 4.1415C11.7584 3.9535 12.0465 3.9535 12.2238 4.1415L12.8665 4.8255C13.0438 5.0135 13.0438 5.3205 12.8665 5.5075L6.95748 11.8585C6.78021 12.0465 6.49203 12.0465 6.31476 11.8585Z" fill="#5C6AC4"/>
                </svg> :
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="15" height="15" rx="2.5" fill="#FBEAE5" stroke="#DE3617"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M6.31476 11.8585L3.13295 8.4415C2.95568 8.2535 2.95568 7.9475 3.13295 7.7575L3.77568 7.0745C3.95295 6.8865 4.24113 6.8865 4.4184 7.0745L6.63657 9.4665L11.5811 4.1415C11.7584 3.9535 12.0465 3.9535 12.2238 4.1415L12.8665 4.8255C13.0438 5.0135 13.0438 5.3205 12.8665 5.5075L6.95748 11.8585C6.78021 12.0465 6.49203 12.0465 6.31476 11.8585Z" fill="#BF0711"/>
              </svg> :
        !error ?
            disabled ?
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="15" height="15" rx="2.5" fill="#F9FAFB" stroke="#DFE3E8"/>
                </svg> :
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="15" height="15" rx="2.5" fill="#F9FAFB" stroke="#C4CDD5"/>
                </svg> :
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="15" height="15" rx="2.5" fill="#FBEAE5" stroke="#DE3617"/>
              </svg>}
      </span>
      {label ?
        <span className={classPrefix + "--text"}>
          {label}
        </span> : null}
    </label>);
});

var Collapse = (function (_a) {
    var _b;
    var children = _a.children, title = _a.title, _c = _a.defaultExpand, defaultExpand = _c === void 0 ? false : _c, _d = _a.animate, animate = _d === void 0 ? true : _d, titleColor = _a.titleColor, indicatorTitle = _a.indicatorTitle, _e = _a.indicatorColor, indicatorColor = _e === void 0 ? '#5C6AC4' : _e, caretColor = _a.caretColor, onOpen = _a.onOpen, onClose = _a.onClose, _f = _a.className, className = _f === void 0 ? '' : _f, style = _a.style;
    var useContext = React.useContext, useState = React.useState;
    var prefix = useContext(ConfigContext).prefix;
    var classPrefix = prefix + "-collapse";
    var classNames = classnames(classPrefix, className);
    var _g = useState(!!defaultExpand), expand = _g[0], setExpand = _g[1];
    var onClick = function () {
        var _a, _b;
        expand ? (_a = onClose) === null || _a === void 0 ? void 0 : _a() : (_b = onOpen) === null || _b === void 0 ? void 0 : _b();
        setExpand(!expand);
    };
    if (animate) {
        // TODO: transition 후 height 고정 버그 수정해야함
        children = (<ExpandTransition open={expand}>
        <div className={classPrefix + "--content"}>
          {children}
        </div>
      </ExpandTransition>);
    }
    else {
        children = expand ?
            <div className={classPrefix + "--content"}>
        {children}
      </div> :
            null;
    }
    return (<div className={classNames} style={style}>
      <div className={classPrefix + "--header"}>
        <Text strong color={titleColor} className={classPrefix + "--title"}>{title}</Text>
        <div className={classPrefix + "--collapse-dropdown"} onClick={onClick}>
          {indicatorTitle ? <Text size="small" color={indicatorColor} className={classPrefix + "--indicator"}>{indicatorTitle}</Text> : null}
          <Icon type="caret-down" size={20} color={caretColor} className={classnames(classPrefix + "--caret", (_b = {}, _b["reverse"] = expand, _b))}/>
        </div>
      </div>
      {children}
    </div>);
});

var Divider = (function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'horizontal' : _b, _c = _a.className, className = _c === void 0 ? '' : _c, style = _a.style;
    var useContext = React.useContext;
    var prefix = useContext(ConfigContext).prefix;
    var classPrefix = prefix + "-divider";
    var classNames = classnames("" + classPrefix, classPrefix + "-" + type, className);
    return (<hr className={classNames} style={style}/>);
});

var RowContext = createContext({});

var Row = (function (_a) {
    var children = _a.children, _b = _a.gutter, gutter = _b === void 0 ? 0 : _b, _c = _a.justify, justify = _c === void 0 ? 'start' : _c, _d = _a.align, align = _d === void 0 ? 'top' : _d, _e = _a.className, className = _e === void 0 ? '' : _e, style = _a.style;
    var useContext = React.useContext;
    var prefix = useContext(ConfigContext).prefix;
    var classPrefix = prefix + "-row";
    var classNames = classnames(classPrefix, className, classPrefix + "--justify-" + justify, classPrefix + "--align-" + align);
    var gutterStyle = null;
    if (Array.isArray(gutter)) {
        var horizontalGutter = gutter[0];
        var verticalGutter = gutter[1];
        gutterStyle = {
            marginTop: "-" + verticalGutter / 2 + "px",
            marginBottom: verticalGutter / 2 + "px",
            marginLeft: "-" + horizontalGutter / 2 + "px",
            marginRight: "-" + horizontalGutter / 2 + "px"
        };
    }
    else {
        gutterStyle = {
            marginLeft: "-" + gutter / 2 + "px",
            marginRight: "-" + gutter / 2 + "px"
        };
    }
    return (<RowContext.Provider value={{ gutter: gutter }}>
      <div className={classNames} style={__assign(__assign({}, style), gutterStyle)}>
        {children}
      </div>
    </RowContext.Provider>);
});

var Col = (function (_a) {
    var children = _a.children, _b = _a.span, span = _b === void 0 ? 16 : _b, _c = _a.offset, offset = _c === void 0 ? 0 : _c, order = _a.order, _d = _a.className, className = _d === void 0 ? '' : _d, style = _a.style;
    var useContext = React.useContext;
    var prefix = useContext(ConfigContext).prefix;
    var classPrefix = prefix + "-col";
    var classNames = classnames(classPrefix, className, classPrefix + "--col-" + span, classPrefix + "--offset-" + offset);
    return (<RowContext.Consumer>
      {function (_a) {
        var gutter = _a.gutter;
        var gutterStyle = {};
        if (gutter) {
            if (Array.isArray(gutter)) {
                var horizontalGutter = gutter[0];
                var verticalGutter = gutter[1];
                gutterStyle = {
                    marginTop: verticalGutter / 2 + "px",
                    marginBottom: verticalGutter / 2 + "px",
                    marginLeft: horizontalGutter / 2 + "px",
                    marginRight: horizontalGutter / 2 + "px"
                };
            }
            else {
                gutterStyle = {
                    marginLeft: gutter / 2 + "px",
                    marginRight: gutter / 2 + "px"
                };
            }
        }
        return (<div className={classNames} style={__assign(__assign({}, style), gutterStyle)}>
            {children}
          </div>);
    }}
    </RowContext.Consumer>);
});

var index = {
    Row: Row,
    Col: Col
};

var Header = (function (_a) {
    var children = _a.children, level = _a.level, _b = _a.strong, strong = _b === void 0 ? false : _b, _c = _a.underline, underline = _c === void 0 ? false : _c, _d = _a.delete, del = _d === void 0 ? false : _d, color = _a.color, editable = _a.editable, placeholder = _a.placeholder, onChange = _a.onChange, _e = _a.className, className = _e === void 0 ? '' : _e, style = _a.style;
    var useContext = React.useContext;
    var prefix = useContext(ConfigContext).prefix;
    var classPrefix = prefix + "-header";
    var classNames = classnames(classPrefix, className);
    if (level < 1 || level > 4) {
        warning('Header', 'Header only accept `1 | 2 | 3 | 4` as `level` value.');
    }
    var fontStyle = {
        fontWeight: strong ? 'bold' : 'normal',
        textDecoration: underline ? 'underline' : undefined,
    };
    if (color) {
        fontStyle.color = color;
    }
    if (del) {
        children = <del>{children}</del>;
    }
    var onKeyDown = function (event) {
        var _a;
        if (event.key === 'Enter') {
            event.preventDefault();
        }
        (_a = onChange) === null || _a === void 0 ? void 0 : _a(event);
    };
    var onPaste = function (event) {
        event.preventDefault();
        var pastedData = event.clipboardData.getData('text/plain');
        window.document.execCommand('insertText', false, pastedData);
    };
    return (<Tag onKeyDown={onKeyDown} onPaste={onPaste} contentEditable={editable} placeholder={placeholder} suppressContentEditableWarning={editable} className={classNames} style={__assign(__assign({}, style), fontStyle)}>
      {children}
    </Tag>);
});

React.forwardRef(function (_a, ref) {
    var _b, _c;
    var defaultValue = _a.defaultValue, placeholder = _a.placeholder, label = _a.label, name = _a.name, type = _a.type, _d = _a.size, size = _d === void 0 ? 'normal' : _d, _e = _a.borderType, borderType = _e === void 0 ? 'border' : _e, autoFocus = _a.autoFocus, _f = _a.block, block = _f === void 0 ? false : _f, _g = _a.disabled, disabled = _g === void 0 ? false : _g, align = _a.align, prefix = _a.prefix, subfix = _a.subfix, loading = _a.loading, onInput = _a.onInput, onFocus = _a.onFocus, onBlur = _a.onBlur, onKeyDown = _a.onKeyDown, onKeyUp = _a.onKeyUp, onKeyPress = _a.onKeyPress, onChange = _a.onChange, onPressEnter = _a.onPressEnter, _h = _a.className, className = _h === void 0 ? '' : _h, style = _a.style, _j = _a.labelClassName, labelClassName = _j === void 0 ? '' : _j, labelStyle = _a.labelStyle, _k = _a.inputClassName, inputClassName = _k === void 0 ? '' : _k, inputStyle = _a.inputStyle;
    var useContext = React.useContext, useState = React.useState;
    var classPrefix = useContext(ConfigContext).prefix + "-input";
    var _l = useState(false), focused = _l[0], setFocused = _l[1];
    var inputClassNames = classnames(classPrefix, inputClassName, classPrefix + "--size-" + size, classPrefix + "--border-type-" + borderType, (_b = {},
        _b[classPrefix + "--disabled"] = disabled,
        _b[classPrefix + "--focused"] = focused,
        _b));
    var handleFocus = function (event) {
        var _a;
        setFocused(true);
        (_a = onFocus) === null || _a === void 0 ? void 0 : _a(event);
    };
    var handleBlur = function (event) {
        var _a;
        setFocused(false);
        (_a = onBlur) === null || _a === void 0 ? void 0 : _a(event);
    };
    var handleKeyDown = function (event) {
        var _a, _b;
        if (event.keyCode === 13) {
            (_a = onPressEnter) === null || _a === void 0 ? void 0 : _a(event);
        }
        (_b = onKeyDown) === null || _b === void 0 ? void 0 : _b(event);
    };
    var iconSize = size === 'mini' ? 14 :
        size === 'small' ? 16 :
            size === 'normal' ? 20 :
                size === 'large' ? 24 : 30;
    return (<div className={classnames(classPrefix + "--container", className, (_c = {}, _c[classPrefix + "--block"] = block, _c))} style={style}>
      {label ?
        <Text paragraph size="small" className={classnames(classPrefix + "--label", labelClassName)} style={labelStyle}>
            {label}
          </Text> :
        null}

      <div className={inputClassNames} style={inputStyle}>
        {prefix ?
        <span className={classPrefix + "--prefix"}>
              {React.isValidElement(prefix) ?
            React.cloneElement(prefix, { size: iconSize }) :
            prefix}
            </span> :
        null}
        <input ref={ref} type={type} defaultValue={defaultValue} name={name} placeholder={placeholder} autoFocus={autoFocus} disabled={disabled} onInput={onInput} onFocus={handleFocus} onBlur={handleBlur} onKeyDown={handleKeyDown} onKeyPress={onKeyPress} onKeyUp={onKeyUp} onChange={onChange} style={{ textAlign: align }}/>
        {loading ?
        <Spinner size={iconSize}/> :
        subfix ?
            <span className={classPrefix + "--caret"}>
                {React.isValidElement(subfix) ?
                React.cloneElement(subfix, { size: iconSize }) :
                subfix}
              </span> :
            null}
      </div>
    </div>);
});

var Text$1 = (function (props) {
    var useRef = React.useRef, useEffect = React.useEffect;
    var inputRef = useRef(null);
    useEffect(function () {
        if (inputRef.current) {
            // tslint:disable-next-line: no-unused-expression
            new Cleave(inputRef.current, {
                blocks: props.blocks,
                delimiter: props.delimiter,
                uppercase: props.uppercase,
                lowercase: props.lowercase
            });
        }
    }, [inputRef]);
    return (<Input ref={inputRef} type="text" {...props}/>);
});

var Number$1 = (function (_a) {
    var _b = _a.group, group = _b === void 0 ? 'thousand' : _b, props = __rest(_a, ["group"]);
    var useRef = React.useRef, useEffect = React.useEffect;
    var inputRef = useRef(null);
    useEffect(function () {
        if (inputRef.current) {
            // tslint:disable-next-line: no-unused-expression
            new Cleave(inputRef.current, {
                numeral: true,
                numeralThousandsGroupStyle: group
            });
        }
    }, [inputRef]);
    return (<Input ref={inputRef} type={group === 'none' ? 'number' : 'text'} {...props}/>);
});

var Password = (function (_a) {
    var toggle = _a.toggle, props = __rest(_a, ["toggle"]);
    var useContext = React.useContext, useState = React.useState;
    var classPrefix = useContext(ConfigContext).prefix + "-input";
    var _b = useState(false), visible = _b[0], setVisible = _b[1];
    var handleClick = function () {
        setVisible(!visible);
    };
    return (<Input type={visible ? 'text' : 'password'} subfix={toggle ? <Icon type={visible ? 'gear' : 'close'} className={classPrefix + "--password-toggle"} color="#919EAB" onClick={handleClick}/> : undefined} {...props}/>);
});

var PhoneNumber = (function (_a) {
    var regionCode = _a.regionCode, _b = _a.delimiter, delimiter = _b === void 0 ? '-' : _b, props = __rest(_a, ["regionCode", "delimiter"]);
    var useRef = React.useRef, useEffect = React.useEffect;
    var inputRef = useRef(null);
    useEffect(function () {
        if (inputRef.current) {
            require("cleave.js/dist/addons/cleave-phone." + regionCode.toLowerCase());
            // tslint:disable-next-line: no-unused-expression
            new Cleave(inputRef.current, {
                phone: true,
                phoneRegionCode: regionCode,
                delimiter: delimiter
            });
        }
    }, [inputRef]);
    return (<Input ref={inputRef} type="tel" {...props}/>);
});

// https://github.com/andreypopp/react-textarea-autosize/
var HIDDEN_TEXTAREA_STYLE = "\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n";
var SIZING_STYLE = [
    'letter-spacing',
    'line-height',
    'padding-top',
    'padding-bottom',
    'font-family',
    'font-weight',
    'font-size',
    'font-variant',
    'text-rendering',
    'text-transform',
    'width',
    'text-indent',
    'padding-left',
    'padding-right',
    'border-width',
    'box-sizing',
];
var computedStyleCache = {};
var hiddenTextarea;
function calculateNodeStyling(node, useCache) {
    if (useCache === void 0) { useCache = false; }
    var nodeRef = (node.getAttribute('id') ||
        node.getAttribute('data-reactid') ||
        node.getAttribute('name'));
    if (useCache && computedStyleCache[nodeRef]) {
        return computedStyleCache[nodeRef];
    }
    var style = window.getComputedStyle(node);
    var boxSizing = style.getPropertyValue('box-sizing') ||
        style.getPropertyValue('-moz-box-sizing') ||
        style.getPropertyValue('-webkit-box-sizing');
    var paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) +
        parseFloat(style.getPropertyValue('padding-top'));
    var borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) +
        parseFloat(style.getPropertyValue('border-top-width'));
    var sizingStyle = SIZING_STYLE.map(function (name) { return name + ":" + style.getPropertyValue(name); }).join(';');
    var nodeInfo = {
        sizingStyle: sizingStyle,
        paddingSize: paddingSize,
        borderSize: borderSize,
        boxSizing: boxSizing,
    };
    if (useCache && nodeRef) {
        computedStyleCache[nodeRef] = nodeInfo;
    }
    return nodeInfo;
}
function calculateNodeHeight(uiTextNode, useCache, minRows, maxRows) {
    if (useCache === void 0) { useCache = false; }
    if (minRows === void 0) { minRows = null; }
    if (maxRows === void 0) { maxRows = null; }
    if (!hiddenTextarea) {
        hiddenTextarea = document.createElement('textarea');
        hiddenTextarea.setAttribute('tab-index', '-1');
        hiddenTextarea.setAttribute('aria-hidden', 'true');
        document.body.appendChild(hiddenTextarea);
    }
    // Fix wrap="off" issue
    // https://github.com/ant-design/ant-design/issues/6577
    if (uiTextNode.getAttribute('wrap')) {
        hiddenTextarea.setAttribute('wrap', uiTextNode.getAttribute('wrap'));
    }
    else {
        hiddenTextarea.removeAttribute('wrap');
    }
    // Copy all CSS properties that have an impact on the height of the content in
    // the textbox
    var _a = calculateNodeStyling(uiTextNode, useCache), paddingSize = _a.paddingSize, borderSize = _a.borderSize, boxSizing = _a.boxSizing, sizingStyle = _a.sizingStyle;
    // Need to have the overflow attribute to hide the scrollbar otherwise
    // text-lines will not calculated properly as the shadow will technically be
    // narrower for content
    hiddenTextarea.setAttribute('style', sizingStyle + ";" + HIDDEN_TEXTAREA_STYLE);
    hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || '';
    var minHeight = Number.MIN_SAFE_INTEGER;
    var maxHeight = Number.MAX_SAFE_INTEGER;
    var height = hiddenTextarea.scrollHeight;
    var overflowY;
    if (boxSizing === 'border-box') {
        // border-box: add border, since height = content + padding + border
        height += borderSize;
    }
    else if (boxSizing === 'content-box') {
        // remove padding, since height = content
        height -= paddingSize;
    }
    if (minRows !== null || maxRows !== null) {
        // measure height of a textarea with a single row
        hiddenTextarea.value = ' ';
        var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
        if (minRows !== null) {
            minHeight = singleRowHeight * minRows;
            if (boxSizing === 'border-box') {
                minHeight = minHeight + paddingSize + borderSize;
            }
            height = Math.max(minHeight, height);
        }
        if (maxRows !== null) {
            maxHeight = singleRowHeight * maxRows;
            if (boxSizing === 'border-box') {
                maxHeight = maxHeight + paddingSize + borderSize;
            }
            overflowY = height > maxHeight ? '' : 'hidden';
            height = Math.min(maxHeight, height);
        }
    }
    return { height: height, minHeight: minHeight, maxHeight: maxHeight, overflowY: overflowY };
}

var Textarea = (function (_a) {
    var _b;
    var value = _a.value, placeholder = _a.placeholder, label = _a.label, name = _a.name, _c = _a.borderType, borderType = _c === void 0 ? 'border' : _c, autoFocus = _a.autoFocus, _d = _a.disabled, disabled = _d === void 0 ? false : _d, align = _a.align, _e = _a.resizeType, resizeType = _e === void 0 ? 'vertical' : _e, _f = _a.rows, rows = _f === void 0 ? 1 : _f, _g = _a.autoSize, autoSize = _g === void 0 ? false : _g, loading = _a.loading, onInput = _a.onInput, onFocus = _a.onFocus, onBlur = _a.onBlur, onKeyDown = _a.onKeyDown, onKeyUp = _a.onKeyUp, onKeyPress = _a.onKeyPress, onChange = _a.onChange, onPressEnter = _a.onPressEnter, _h = _a.className, className = _h === void 0 ? '' : _h, style = _a.style, _j = _a.labelClassName, labelClassName = _j === void 0 ? '' : _j, labelStyle = _a.labelStyle, _k = _a.textareaClassName, textareaClassName = _k === void 0 ? '' : _k, textareaStyle = _a.textareaStyle;
    var useContext = React.useContext, useState = React.useState, useRef = React.useRef, useEffect = React.useEffect;
    var classPrefix = useContext(ConfigContext).prefix + "-textarea";
    var _l = useState(false), focused = _l[0], setFocused = _l[1];
    var _m = useState({}), resizeStyle = _m[0], setResizeStyle = _m[1];
    var textareaRef = useRef(null);
    var textareaClassNames = classnames(classPrefix, textareaClassName, classPrefix + "--border-type-" + borderType, (_b = {},
        _b[classPrefix + "--disabled"] = disabled,
        _b[classPrefix + "--focused"] = focused,
        _b));
    var handleFocus = function (event) {
        var _a;
        setFocused(true);
        (_a = onFocus) === null || _a === void 0 ? void 0 : _a(event);
    };
    var handleBlur = function (event) {
        var _a;
        setFocused(false);
        (_a = onBlur) === null || _a === void 0 ? void 0 : _a(event);
    };
    var resize = function () {
        raf(function () {
            if (textareaRef.current && autoSize) {
                var styles = calculateNodeHeight(textareaRef.current, false, undefined, undefined);
                setResizeStyle(styles);
            }
        });
    };
    var handleKeyDown = function (event) {
        var _a, _b;
        if (event.keyCode === 13) {
            (_a = onPressEnter) === null || _a === void 0 ? void 0 : _a(event);
        }
        (_b = onKeyDown) === null || _b === void 0 ? void 0 : _b(event);
        resize();
    };
    useEffect(function () {
        resize();
    }, [textareaRef, autoSize]);
    return (<div className={classnames(classPrefix + "--container", className)} style={style}>
      {label ?
        <Text paragraph size="small" className={classnames(classPrefix + "--label", labelClassName)} style={labelStyle}>
            {label}
          </Text> :
        null}

      <textarea ref={textareaRef} defaultValue={value} name={name} placeholder={placeholder} rows={rows} autoFocus={autoFocus} disabled={disabled} onInput={onInput} onFocus={handleFocus} onBlur={handleBlur} onKeyDown={handleKeyDown} onKeyPress={onKeyPress} onKeyUp={onKeyUp} onChange={onChange} className={textareaClassNames} style={__assign(__assign(__assign({}, textareaStyle), resizeStyle), { textAlign: align, resize: resizeType })}/>
      {loading ? <Spinner size={16} className={classPrefix + "--loading"}/> : null}
    </div>);
});

var index$1 = {
    Text: Text$1,
    Number: Number$1,
    Password: Password,
    PhoneNumber: PhoneNumber,
    Textarea: Textarea,
};

var Link = (function (_a) {
    var _b;
    var children = _a.children, _c = _a.size, size = _c === void 0 ? 'normal' : _c, href = _a.href, _d = _a.disabled, disabled = _d === void 0 ? false : _d, onClick = _a.onClick, _e = _a.className, className = _e === void 0 ? '' : _e, style = _a.style;
    var useContext = React.useContext;
    var prefix = useContext(ConfigContext).prefix;
    var classPrefix = prefix + "-link";
    var classNames = classnames(classPrefix, className, (_b = {},
        _b[classPrefix + "--size-" + size] = typeof size === 'string',
        _b[classPrefix + "--disabled"] = disabled,
        _b));
    return (<Tag href={disabled ? undefined : href} className={classNames} style={style} onClick={onClick}>
      {children}
    </Tag>);
});

var MenuItem = (function (_a) {
    var _b;
    var icon = _a.icon, title = _a.title, disabled = _a.disabled, active = _a.active, onClick = _a.onClick, _c = _a.className, className = _c === void 0 ? '' : _c, style = _a.style;
    var useContext = React.useContext;
    var prefix = useContext(ConfigContext).prefix;
    var classPrefix = prefix + "-menu-item";
    var classNames = classnames(classPrefix, className, (_b = {},
        _b[classPrefix + "--active"] = active,
        _b[classPrefix + "--disabled"] = disabled,
        _b));
    return (<div className={classNames} style={style} onClick={onClick}>
      {icon ?
        React.cloneElement(icon, { size: 20, className: classPrefix + "--icon" }) :
        null}
      <span className={classPrefix + "--title"}>{title}</span>
    </div>);
});

var Menu = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, style = _a.style;
    var useContext = React.useContext;
    var prefix = useContext(ConfigContext).prefix;
    var classPrefix = prefix + "-menu";
    var classNames = classnames(classPrefix, className);
    var items = null;
    if (children) {
        items = React.Children
            .toArray(children)
            .filter(function (element) {
            if (React.isValidElement(element) === false) {
                warning('Menu', 'Only accepts Menu.Item as it\'s children.');
                return false;
            }
            return true;
        });
    }
    return (<div className={classNames} style={style}>
      {items}
    </div>);
};
Menu.Item = MenuItem;

var Modal = (function (_a) {
    var children = _a.children, _b = _a.width, width = _b === void 0 ? 500 : _b, _c = _a.visible, visible = _c === void 0 ? false : _c, _d = _a.closable, _e = _a.zIndex, zIndex = _e === void 0 ? 1000 : _e, onClose = _a.onClose, _f = _a.className, className = _f === void 0 ? '' : _f, style = _a.style;
    var useContext = React.useContext, useEffect = React.useEffect, useState = React.useState;
    var prefix = useContext(ConfigContext).prefix;
    var classPrefix = prefix + "-modal";
    var classNames = classnames(classPrefix, className);
    var _g = useState(visible), show = _g[0], setShow = _g[1];
    var dimStyle = {
        display: show ? 'block' : 'none',
        zIndex: zIndex
    };
    var containerStyle = {
        width: width,
        zIndex: zIndex + 1
    };
    useEffect(function () {
        if (visible) {
            setShow(true);
        }
        else {
            setTimeout(function () {
                setShow(false);
            }, 240);
        }
    }, [visible]);
    return (<FadeTransition show={visible}>
      <div className={classPrefix + "--dim"} style={dimStyle} onClick={onClose}>
        <div className={classNames} style={__assign(__assign({}, style), containerStyle)} onClick={function (e) { return e.stopPropagation(); }}>
          <span onClick={onClose} className={classPrefix + "--close"}>
            <Icon type="close" size={20}/>
          </span>
          {children}
        </div>
      </div>
    </FadeTransition>);
});

var Popover = (function (_a) {
    var _b;
    var children = _a.children, content = _a.content, _c = _a.trigger, trigger = _c === void 0 ? 'click' : _c, _d = _a.placement, placement = _d === void 0 ? 'bottom' : _d, width = _a.width, _e = _a.className, className = _e === void 0 ? '' : _e, style = _a.style;
    var useState = React.useState, useEffect = React.useEffect, useContext = React.useContext, useRef = React.useRef;
    var _f = useState(false), visible = _f[0], setVisible = _f[1];
    var wrapperRef = useRef(null);
    var prefix = useContext(ConfigContext).prefix;
    var classPrefix = prefix + "-popover";
    var classNames = classnames(classPrefix, className, (_b = {},
        _b[classPrefix + "--active"] = visible,
        _b));
    var handleMouseEnter = trigger === 'hover' ? function () { return setVisible(true); } : undefined;
    var handleMouseLeave = trigger === 'hover' ? function () { return setVisible(false); } : undefined;
    var handleClick = trigger === 'click' ? function () { return setVisible(!visible); } : undefined;
    var handleClickOutside = trigger === 'click' ? function (event) {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setVisible(false);
        }
    } : undefined;
    var handleFocus = trigger === 'focus' ? function () { return setVisible(true); } : undefined;
    var handleBlur = trigger === 'focus' ? function () { return setVisible(false); } : undefined;
    useEffect(function () {
        if (handleClickOutside) {
            document.addEventListener('mousedown', handleClickOutside);
            return function () { document.removeEventListener('mousedown', handleClickOutside); };
        }
    }, [handleClickOutside]);
    var contentStyle = {
        width: width ? width : 'auto',
        whiteSpace: width ? 'normal' : 'nowrap',
        pointerEvents: visible ? 'all' : 'none'
    };
    return (<div ref={wrapperRef} className={classNames} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={style}>
      <span className={classPrefix + "--host"} onClick={handleClick} onFocus={handleFocus} onBlur={handleBlur}>
        {children}
      </span>
      <svg className={classnames(camelToSnake(placement), classPrefix + "--caret")} width="24" height="12" viewBox="0 0 24 12">
        <path fill="white" strokeWidth="1px" stroke="#EAEAEA" fillRule="evenodd" d="M20 12l-8-8-12 12"/>
      </svg>
      <div className={classnames(camelToSnake(placement), classPrefix + "--content")} style={contentStyle}>
        {content}
      </div>
    </div>);
});

var SelectOption = (function (_a) {
    var children = _a.children, value = _a.value, _b = _a.disabled;
    return null;
});

var Select = function (_a) {
    var _b, _c, _d;
    var children = _a.children, label = _a.label, name = _a.name, placeholder = _a.placeholder, _e = _a.size, size = _e === void 0 ? 'normal' : _e, _f = _a.borderType, borderType = _f === void 0 ? 'border' : _f, block = _a.block, _g = _a.disabled, disabled = _g === void 0 ? false : _g, _h = _a.align, align = _h === void 0 ? 'center' : _h, loading = _a.loading, onChange = _a.onChange, _j = _a.className, className = _j === void 0 ? '' : _j, style = _a.style, _k = _a.labelClassName, labelClassName = _k === void 0 ? '' : _k, labelStyle = _a.labelStyle, _l = _a.inputClassName, inputClassName = _l === void 0 ? '' : _l, inputStyle = _a.inputStyle;
    var _m, _o;
    var useContext = React.useContext, useState = React.useState, useRef = React.useRef, useEffect = React.useEffect;
    var classPrefix = useContext(ConfigContext).prefix + "-select";
    var _p = useState(false), focused = _p[0], setFocused = _p[1];
    var _q = useState(), active = _q[0], setActive = _q[1];
    var inputRef = useRef(null);
    var inputClassNames = classnames(classPrefix, inputClassName, classPrefix + "--size-" + size, classPrefix + "--border-type-" + borderType, (_b = {},
        _b[classPrefix + "--disabled"] = disabled,
        _b[classPrefix + "--focused"] = focused,
        _b));
    var iconSize = size === 'mini' ? 14 :
        size === 'small' ? 16 :
            size === 'normal' ? 20 :
                size === 'large' ? 24 : 30;
    var handleClick = function () {
        setFocused(!focused);
    };
    var handleClickOutside = function (event) {
        if (inputRef.current && !inputRef.current.contains(event.target)) {
            setFocused(false);
        }
    };
    useEffect(function () {
        if (handleClickOutside) {
            document.addEventListener('mousedown', handleClickOutside);
            return function () { document.removeEventListener('mousedown', handleClickOutside); };
        }
    }, [handleClickOutside]);
    var options = convertReactNodeTo('Select', 'Select.Option', children);
    return (<div className={classnames(classPrefix + "--container", className, (_c = {}, _c[classPrefix + "--block"] = block, _c))} style={style}>
      {label ?
        <Text paragraph size="small" className={classnames(classPrefix + "--label", labelClassName)} style={labelStyle}>
            {label}
          </Text> :
        null}
      
      <div ref={inputRef} className={inputClassNames} style={__assign(__assign({}, inputStyle), { textAlign: align })} onClick={handleClick}>
        <input name={name} defaultValue={(_m = active) === null || _m === void 0 ? void 0 : _m.value} disabled={disabled}/>
        <div className={classPrefix + "--value"} placeholder={placeholder}>
          {(_o = active) === null || _o === void 0 ? void 0 : _o.title}
        </div>
        {loading ?
        <Spinner size={iconSize} className={classPrefix + "--caret"}/> :
        <Icon type="caret-down" size={iconSize} className={classnames(classPrefix + "--caret", (_d = {}, _d["reverse"] = focused, _d))}/>}
      </div>

      <FadeTransition show={focused}>
        <div className={classPrefix + "--options"}>
          {options
        .map(function (element, index) {
        var _a;
        var _b;
        var props = element.props;
        var title = concatReactNodeToString(props.children);
        var handleOptionClick = function () {
            var _a;
            if (!disabled) {
                setActive({
                    key: index,
                    title: title,
                    value: props.value
                });
                (_a = onChange) === null || _a === void 0 ? void 0 : _a(props.value);
            }
        };
        return (<div className={classnames(classPrefix + "-option", (_a = {},
            _a[classPrefix + "-option--selected"] = ((_b = active) === null || _b === void 0 ? void 0 : _b.key) === index,
            _a[classPrefix + "-option--disabled"] = disabled,
            _a))} key={index} onClick={handleOptionClick}>
                    {props.children}
                  </div>);
    })}
        </div>
      </FadeTransition>
    </div>);
};
Select.Option = SelectOption;

var SwitchGroup = (function (_a) {
    var children = _a.children, _b = _a.multiple, multiple = _b === void 0 ? false : _b, onChange = _a.onChange, _c = _a.className, className = _c === void 0 ? '' : _c, style = _a.style;
    var useContext = React.useContext, useState = React.useState, useEffect = React.useEffect;
    var prefix = useContext(ConfigContext).prefix;
    var classPrefix = prefix + "-switch-group";
    var classNames = classnames(classPrefix, className);
    var convertReactNodeToSwitchs = function (reactNode) { return (convertReactNodeTo('Switch.Group', 'Switch', reactNode)
        .map(function (element, index, elements) {
        return React.cloneElement(element, {
            style: __assign(__assign({}, element.props.style), { borderTopRightRadius: index !== elements.length - 1 ? 0 : undefined, borderBottomRightRadius: index !== elements.length - 1 ? 0 : undefined, borderTopLeftRadius: index !== 0 ? 0 : undefined, borderBottomLeftRadius: index !== 0 ? 0 : undefined, marginLeft: index !== 0 ? -1 : undefined })
        });
    })); };
    var switchs = convertReactNodeToSwitchs(children);
    var _d = useState(switchs.map(function (_, index) {
        var checkedIndex = multiple ? -1 : switchs.findIndex(function (element) { return element.props.checked === true; });
        if (!multiple && checkedIndex === -1 && index === 0) {
            return true;
        }
        else {
            return checkedIndex !== -1 && checkedIndex === index ? true : false;
        }
    })), checkes = _d[0], setCheckes = _d[1];
    switchs = switchs
        .map(function (element, index) {
        return React.cloneElement(element, {
            checked: checkes[index]
        });
    });
    var onClick = function (index) {
        var _a;
        var changedCheckes = checkes.map(function (check, checkIndex) {
            if (!multiple) {
                return index === checkIndex ? true : false;
            }
            else {
                return index === checkIndex ? !check : check;
            }
        });
        setCheckes(changedCheckes);
        var values = switchs.filter(function (_, switchIndex) { return changedCheckes[switchIndex]; }).map(function (element) { return element.props.value; });
        (_a = onChange) === null || _a === void 0 ? void 0 : _a(values);
    };
    useEffect(function () {
        switchs = convertReactNodeToSwitchs(children);
        switchs = switchs
            .map(function (element, index) {
            return React.cloneElement(element, {
                checked: checkes[index]
            });
        });
    }, [children]);
    return (<div className={classNames} style={style}>
      {switchs
        .map(function (element, index) {
        var props = element.props;
        var switchClassPrefix = prefix + "-switch";
        return (<label className={switchClassPrefix + "--container"} key={index}>
                <input type="radio" defaultChecked={checkes[index]} value={props.value} name={props.name}/>
                <button className={classnames(switchClassPrefix, props.className)} style={props.style} disabled={!!props.disabled} onClick={function () { return onClick(index); }}>
                  {props.title}
                </button>
              </label>);
    })}
    </div>);
});

var Switch = function (_a) {
    var title = _a.title, value = _a.value, name = _a.name, _b = _a.checked, checked = _b === void 0 ? false : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, onChange = _a.onChange, _d = _a.className, className = _d === void 0 ? '' : _d, style = _a.style;
    var useContext = React.useContext, useState = React.useState;
    var prefix = useContext(ConfigContext).prefix;
    var classPrefix = prefix + "-switch";
    var classNames = classnames(classPrefix, className);
    var _e = useState(checked), check = _e[0], setCheck = _e[1];
    var handleClick = function () {
        var _a;
        (_a = onChange) === null || _a === void 0 ? void 0 : _a(!check, value);
        setCheck(!check);
    };
    return (<label className={classPrefix + "--container"}>
      <input type="radio" defaultChecked={check} value={value} name={name}/>
      <button className={classNames} style={style} disabled={!!disabled} onClick={handleClick}>
        {title}
      </button>
    </label>);
};
Switch.Group = SwitchGroup;

var TabItem = (function (_a) {
    var title = _a.title, _b = _a.className, style = _a.style;
    return null;
});

var Tab = function (_a) {
    var children = _a.children, active = _a.active, onChange = _a.onChange, _b = _a.className, className = _b === void 0 ? '' : _b, style = _a.style;
    var useContext = React.useContext, useEffect = React.useEffect, useState = React.useState;
    var prefix = useContext(ConfigContext).prefix;
    var classPrefix = prefix + "-tab";
    var classNames = classnames(classPrefix, className);
    var getActiveTab = function () {
        var tabs = convertReactNodeTo('Tab', 'Tab.item', children);
        var activeTab = tabs.find(function (element) { return element.props.title === active; });
        var select = tabs[0].props.title;
        var content = tabs[0].props.children;
        if (active && activeTab) {
            if (activeTab) {
                select = active;
                content = activeTab.props.children;
            }
        }
        return [select, content];
    };
    var _c = getActiveTab(), defaultSelect = _c[0], defaultContent = _c[1];
    var _d = useState(defaultSelect), currentSelect = _d[0], setCurrentSelect = _d[1];
    var _e = useState(defaultContent), currentContent = _e[0], setCurrentContent = _e[1];
    useEffect(function () {
        var _a = getActiveTab(), select = _a[0], content = _a[1];
        setCurrentSelect(select);
        setCurrentContent(content);
    }, [active, children]);
    var onClick = function (title, content, index) {
        var _a;
        if (currentSelect === title) {
            return;
        }
        setCurrentSelect(title);
        setCurrentContent(content);
        (_a = onChange) === null || _a === void 0 ? void 0 : _a(title, index);
    };
    return (<div className={classNames} style={style}>
      <div className={classPrefix + "--panes"}>
        {React.Children.toArray(children).map(function (element, index) {
        var _a;
        var props = element.props;
        var tabItemClassNames = classnames(prefix + "-tab-item", props.className, (_a = {},
            _a[classPrefix + "--active"] = currentSelect === props.title,
            _a));
        return (<div className={tabItemClassNames} style={props.style} onClick={function () { return onClick(props.title, props.children, index); }} key={props.title}>
                {props.title}
              </div>);
    })}
      </div>
      <div className={classPrefix + "--content"}>
        {currentContent}
      </div>
    </div>);
};
Tab.Item = TabItem;

var TableHead = (function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, style = _a.style;
    var useContext = React.useContext;
    var prefix = useContext(ConfigContext).prefix;
    var classPrefix = prefix + "-table-head";
    var classNames = classnames(classPrefix, className);
    var cells = convertReactNodeTo('Table.Head', 'Table.Cell', children).map(function (element) {
        return React.cloneElement(element, {
            type: 'th'
        });
    });
    return (<thead className={classNames}>
      {cells}
    </thead>);
});

var TableBody = (function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, style = _a.style;
    var useContext = React.useContext;
    var prefix = useContext(ConfigContext).prefix;
    var classPrefix = prefix + "-table-body";
    var classNames = classnames(classPrefix, className);
    var rows = convertReactNodeTo('Table.Head', 'Table.Row', children);
    return (<tbody className={classNames}>
      {rows}
    </tbody>);
});

var TableFoot = (function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, style = _a.style;
    var useContext = React.useContext;
    var prefix = useContext(ConfigContext).prefix;
    var classPrefix = prefix + "-table-tfoot";
    var classNames = classnames(classPrefix, className);
    return (<tfoot className={classNames}>
      {children}
    </tfoot>);
});

var TableRow = (function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, style = _a.style;
    var useContext = React.useContext;
    var prefix = useContext(ConfigContext).prefix;
    var classPrefix = prefix + "-table-row";
    var classNames = classnames(classPrefix, className);
    var cells = convertReactNodeTo('Table.Head', 'Table.Cell', children).map(function (element) {
        return React.cloneElement(element, {
            type: 'th'
        });
    });
    return (<tr className={classNames}>
      {cells}
    </tr>);
});

var TableCell = (function (_a) {
    var children = _a.children, _b = _a.type, _c = _a.className, className = _c === void 0 ? '' : _c, style = _a.style;
    var useContext = React.useContext;
    var prefix = useContext(ConfigContext).prefix;
    var classPrefix = prefix + "-table-cell";
    var classNames = classnames(classPrefix, className);
    return (<td className={classNames}>
      {children}
    </td>);
});

var Table = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, style = _a.style;
    var useContext = React.useContext;
    var prefix = useContext(ConfigContext).prefix;
    var classPrefix = prefix + "-table";
    var classNames = classnames(classPrefix, className);
    var cells = convertReactNodeTo('Table', 'Table.Head, Table.Body or Table.Foot', children);
    return (<table className={classNames}>
      {cells}
    </table>);
};
Table.Head = TableHead;
Table.Body = TableBody;
Table.Foot = TableFoot;
Table.Row = TableRow;
Table.Cell = TableCell;

var Tag = (function (_a) {
    var _b;
    var name = _a.name, _c = _a.size, size = _c === void 0 ? 'normal' : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.deletable, deletable = _e === void 0 ? false : _e, onClick = _a.onClick, _f = _a.className, className = _f === void 0 ? '' : _f, style = _a.style;
    var useContext = React.useContext;
    var prefix = useContext(ConfigContext).prefix;
    var classPrefix = prefix + "-tag";
    var classNames = classnames(classPrefix, className, (_b = {},
        _b[classPrefix + "--size-" + size] = typeof size === 'string',
        _b[classPrefix + "--disabled"] = disabled,
        _b));
    return (<div className={classNames} style={style} onClick={onClick}>
      {name}
      {deletable ?
        <span className={classPrefix + "--delete"}>X</span> :
        null}
    </div>);
});

var ToastCore = /** @class */ (function () {
    function ToastCore() {
        this.portal = null;
        var portalId = config.prefix + "-toast-portal";
        var portalElement = document.getElementById(portalId);
        if (portalElement) {
            this.portal = portalElement;
        }
        else {
            this.portal = document.createElement('div');
            this.portal.id = portalId;
            document.body.appendChild(this.portal);
        }
        ReactDOM.render(
        // TODO: 다른 좋은 방법 찾기
        // tslint:disable-next-line: jsx-no-bind
        <ToastManager bind={this.bind.bind(this)}/>, this.portal);
    }
    ToastCore.prototype.bind = function (createToast) {
        this.createToast = createToast;
    };
    ToastCore.prototype.show = function (message, option) {
        if (option === void 0) { option = { type: 'default', duration: 4500 }; }
        var _a, _b;
        (_b = (_a = this).createToast) === null || _b === void 0 ? void 0 : _b.call(_a, message, option);
    };
    ToastCore.prototype.success = function (message, duration) {
        if (duration === void 0) { duration = 4500; }
        this.show(message, { type: 'success', duration: duration });
    };
    ToastCore.prototype.error = function (message, duration) {
        if (duration === void 0) { duration = 4500; }
        this.show(message, { type: 'error', duration: duration });
    };
    ToastCore.prototype.warning = function (message, duration) {
        if (duration === void 0) { duration = 4500; }
        this.show(message, { type: 'warning', duration: duration });
    };
    return ToastCore;
}());
var core = new ToastCore();

var Toggle = (function (_a) {
    var _b;
    var value = _a.value, name = _a.name, _c = _a.on, on = _c === void 0 ? false : _c, _d = _a.size, size = _d === void 0 ? 'normal' : _d, _e = _a.error, _f = _a.disabled, disabled = _f === void 0 ? false : _f, onChange = _a.onChange, _g = _a.className, className = _g === void 0 ? '' : _g, style = _a.style;
    var useState = React.useState, useContext = React.useContext;
    var prefix = useContext(ConfigContext).prefix;
    var classPrefix = prefix + "-toggle";
    var classNames = classnames(classPrefix, className, (_b = {},
        _b[classPrefix + "--disabled"] = disabled,
        _b));
    var _h = useState(on), check = _h[0], setCheck = _h[1];
    var change = function (event) {
        var _a;
        setCheck(event.target.checked);
        (_a = onChange) === null || _a === void 0 ? void 0 : _a(event);
    };
    return (<label className={classNames} style={style}>
      <input type="checkbox" name={name} checked={check} disabled={disabled} value={value} onChange={change}/>
      <div className={classnames(classPrefix + "--button", classPrefix + "--size-" + size)}/>
    </label>);
});

var Tooltip = (function (_a) {
    var _b;
    var children = _a.children, _c = _a.placement, placement = _c === void 0 ? 'top' : _c, _d = _a.trigger, trigger = _d === void 0 ? 'hover' : _d, title = _a.title, width = _a.width, _e = _a.className, className = _e === void 0 ? '' : _e, style = _a.style;
    var useState = React.useState, useContext = React.useContext, useEffect = React.useEffect, useRef = React.useRef;
    var _f = useState(false), visible = _f[0], setVisible = _f[1];
    var prefix = useContext(ConfigContext).prefix;
    var classPrefix = prefix + "-tooltip";
    var classNames = classnames(classPrefix, className, (_b = {},
        _b[classPrefix + "--active"] = visible,
        _b));
    var wrapperRef = useRef(null);
    var handleMouseEnter = trigger === 'hover' ? function () { return setVisible(true); } : undefined;
    var handleMouseLeave = trigger === 'hover' ? function () { return setVisible(false); } : undefined;
    var handleClick = trigger === 'click' ? function () { return setVisible(!visible); } : undefined;
    var handleClickOutside = trigger === 'click' ? function (event) {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setVisible(false);
        }
    } : undefined;
    var handleFocus = trigger === 'focus' ? function () { return setVisible(true); } : undefined;
    var handleBlur = trigger === 'focus' ? function () { return setVisible(false); } : undefined;
    useEffect(function () {
        if (handleClickOutside) {
            document.addEventListener('mousedown', handleClickOutside);
            return function () { document.removeEventListener('mousedown', handleClickOutside); };
        }
    }, [handleClickOutside]);
    var widthStyle = {
        width: width ? width : 'auto',
        whiteSpace: width ? 'normal' : 'nowrap'
    };
    return (<div ref={wrapperRef} className={classNames} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={style}>
      <span className={classPrefix + "--host"} onClick={handleClick} onFocus={handleFocus} onBlur={handleBlur}>
        {children}
      </span>
      <svg className={classnames(camelToSnake(placement), classPrefix + "--caret")} width="24" height="12" viewBox="0 0 24 12">
        <path fill="#212B36" strokeWidth="1px" stroke="#EAEAEA" fillRule="evenodd" d="M20 12l-8-8-12 12"/>
      </svg>
      <div className={classnames(camelToSnake(placement), classPrefix + "--title")} style={widthStyle}>
        {title}
      </div>
    </div>);
});

var dragCounter = 0;
var Upload = (function (_a) {
    var _b;
    var children = _a.children, name = _a.name, value = _a.value, accept = _a.accept, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.draggable, onChange = _a.onChange, _e = _a.className, className = _e === void 0 ? '' : _e, style = _a.style;
    var useContext = React.useContext, useState = React.useState, useRef = React.useRef;
    var prefix = useContext(ConfigContext).prefix;
    var classPrefix = prefix + "-upload";
    var classNames = classnames(classPrefix, className, (_b = {},
        _b[classPrefix + "--disabled"] = disabled,
        _b));
    var _f = useState(false), dragging = _f[0], setDragging = _f[1];
    var _g = useState(value), file = _g[0], setFile = _g[1];
    var inputRef = useRef(null);
    var onFileChange = function (event) {
        var _a, _b;
        var files = event.target.files;
        var changedFile = (_a = files) === null || _a === void 0 ? void 0 : _a[0];
        setFile(changedFile);
        (_b = onChange) === null || _b === void 0 ? void 0 : _b(changedFile);
    };
    var onFileDrop = function (event) {
        var _a, _b;
        event.preventDefault();
        event.stopPropagation();
        var files = event.dataTransfer.files;
        var changedFile = (_a = files) === null || _a === void 0 ? void 0 : _a[0];
        setFile(changedFile);
        (_b = onChange) === null || _b === void 0 ? void 0 : _b(changedFile);
        setDragging(false);
    };
    var onDragEnter = function (event) {
        event.preventDefault();
        event.stopPropagation();
        dragCounter += 1;
        if (event.dataTransfer.items && event.dataTransfer.items.length > 0) {
            setDragging(true);
        }
    };
    var onDragLeave = function (event) {
        event.preventDefault();
        event.stopPropagation();
        dragCounter -= 1;
        if (dragCounter === 0) {
            setDragging(false);
        }
    };
    var onDragOver = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    var onChooseFile = function () {
        var _a;
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.click();
    };
    return (<div className={classNames} style={style} onClick={onChooseFile} onDrop={onFileDrop} onDragEnter={onDragEnter} onDragLeave={onDragLeave} onDragOver={onDragOver}>
      <input ref={inputRef} type="file" name={name} accept={accept} onChange={onFileChange}/>
      {children(file, dragging)}
    </div>);
});

export { Avatar, Badge, Breadcrumb, Button, Card, Checkbox, Collapse, Divider, index as Grid, Header, Icon, index$1 as Input, Link, Menu, Modal, Popover, Select, Spinner, Switch, Tab, Table, Tag, Text, core as Toast, Toggle, Tooltip, Upload };
