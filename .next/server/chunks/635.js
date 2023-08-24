exports.id = 635;
exports.ids = [635];
exports.modules = {

/***/ 4209:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(1913);
module.exports = createProxy("/Users/phamtiendat/Repository/anh-hieu-traveling/node_modules/next/dist/client/image-component.js");
 //# sourceMappingURL=image-component.js.map


/***/ }),

/***/ 7139:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getImgProps", ({
    enumerable: true,
    get: function() {
        return getImgProps;
    }
}));
const _warnonce = __webpack_require__(1233);
const _imageblursvg = __webpack_require__(8136);
const _imageconfig = __webpack_require__(2405);
const VALID_LOADING_VALUES = (/* unused pure expression or super */ null && ([
    "lazy",
    "eager",
    undefined
]));
function isStaticRequire(src) {
    return src.default !== undefined;
}
function isStaticImageData(src) {
    return src.src !== undefined;
}
function isStaticImport(src) {
    return typeof src === "object" && (isStaticRequire(src) || isStaticImageData(src));
}
const allImgs = new Map();
let perfObserver;
function getInt(x) {
    if (typeof x === "undefined") {
        return x;
    }
    if (typeof x === "number") {
        return Number.isFinite(x) ? x : NaN;
    }
    if (typeof x === "string" && /^[0-9]+$/.test(x)) {
        return parseInt(x, 10);
    }
    return NaN;
}
function getWidths(param, width, sizes) {
    let { deviceSizes, allSizes } = param;
    if (sizes) {
        // Find all the "vw" percent sizes used in the sizes prop
        const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
        const percentSizes = [];
        for(let match; match = viewportWidthRe.exec(sizes); match){
            percentSizes.push(parseInt(match[2]));
        }
        if (percentSizes.length) {
            const smallestRatio = Math.min(...percentSizes) * 0.01;
            return {
                widths: allSizes.filter((s)=>s >= deviceSizes[0] * smallestRatio),
                kind: "w"
            };
        }
        return {
            widths: allSizes,
            kind: "w"
        };
    }
    if (typeof width !== "number") {
        return {
            widths: deviceSizes,
            kind: "w"
        };
    }
    const widths = [
        ...new Set(// > are actually 3x in the green color, but only 1.5x in the red and
        // > blue colors. Showing a 3x resolution image in the app vs a 2x
        // > resolution image will be visually the same, though the 3x image
        // > takes significantly more data. Even true 3x resolution screens are
        // > wasteful as the human eye cannot see that level of detail without
        // > something like a magnifying glass.
        // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
        [
            width,
            width * 2 /*, width * 3*/ 
        ].map((w)=>allSizes.find((p)=>p >= w) || allSizes[allSizes.length - 1]))
    ];
    return {
        widths,
        kind: "x"
    };
}
function generateImgAttrs(param) {
    let { config, src, unoptimized, width, quality, sizes, loader } = param;
    if (unoptimized) {
        return {
            src,
            srcSet: undefined,
            sizes: undefined
        };
    }
    const { widths, kind } = getWidths(config, width, sizes);
    const last = widths.length - 1;
    return {
        sizes: !sizes && kind === "w" ? "100vw" : sizes,
        srcSet: widths.map((w, i)=>loader({
                config,
                src,
                quality,
                width: w
            }) + " " + (kind === "w" ? w : i + 1) + kind).join(", "),
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        src: loader({
            config,
            src,
            quality,
            width: widths[last]
        })
    };
}
function getImgProps(param, _state) {
    let { src, sizes, unoptimized = false, priority = false, loading, className, quality, width, height, fill = false, style, onLoad, onLoadingComplete, placeholder = "empty", blurDataURL, fetchPriority, layout, objectFit, objectPosition, lazyBoundary, lazyRoot, ...rest } = param;
    const { imgConf, showAltText, blurComplete, defaultLoader } = _state;
    let config;
    let c = imgConf || _imageconfig.imageConfigDefault;
    if ("allSizes" in c) {
        config = c;
    } else {
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        config = {
            ...c,
            allSizes,
            deviceSizes
        };
    }
    let loader = rest.loader || defaultLoader;
    // Remove property so it's not spread on <img> element
    delete rest.loader;
    delete rest.srcSet;
    // This special value indicates that the user
    // didn't define a "loader" prop or "loader" config.
    const isDefaultLoader = "__next_img_default" in loader;
    if (isDefaultLoader) {
        if (config.loader === "custom") {
            throw new Error('Image with src "' + src + '" is missing "loader" prop.' + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader");
        }
    } else {
        // The user defined a "loader" prop or config.
        // Since the config object is internal only, we
        // must not pass it to the user-defined "loader".
        const customImageLoader = loader;
        loader = (obj)=>{
            const { config: _, ...opts } = obj;
            return customImageLoader(opts);
        };
    }
    if (layout) {
        if (layout === "fill") {
            fill = true;
        }
        const layoutToStyle = {
            intrinsic: {
                maxWidth: "100%",
                height: "auto"
            },
            responsive: {
                width: "100%",
                height: "auto"
            }
        };
        const layoutToSizes = {
            responsive: "100vw",
            fill: "100vw"
        };
        const layoutStyle = layoutToStyle[layout];
        if (layoutStyle) {
            style = {
                ...style,
                ...layoutStyle
            };
        }
        const layoutSizes = layoutToSizes[layout];
        if (layoutSizes && !sizes) {
            sizes = layoutSizes;
        }
    }
    let staticSrc = "";
    let widthInt = getInt(width);
    let heightInt = getInt(height);
    let blurWidth;
    let blurHeight;
    if (isStaticImport(src)) {
        const staticImageData = isStaticRequire(src) ? src.default : src;
        if (!staticImageData.src) {
            throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(staticImageData));
        }
        if (!staticImageData.height || !staticImageData.width) {
            throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(staticImageData));
        }
        blurWidth = staticImageData.blurWidth;
        blurHeight = staticImageData.blurHeight;
        blurDataURL = blurDataURL || staticImageData.blurDataURL;
        staticSrc = staticImageData.src;
        if (!fill) {
            if (!widthInt && !heightInt) {
                widthInt = staticImageData.width;
                heightInt = staticImageData.height;
            } else if (widthInt && !heightInt) {
                const ratio = widthInt / staticImageData.width;
                heightInt = Math.round(staticImageData.height * ratio);
            } else if (!widthInt && heightInt) {
                const ratio = heightInt / staticImageData.height;
                widthInt = Math.round(staticImageData.width * ratio);
            }
        }
    }
    src = typeof src === "string" ? src : staticSrc;
    let isLazy = !priority && (loading === "lazy" || typeof loading === "undefined");
    if (!src || src.startsWith("data:") || src.startsWith("blob:")) {
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
        unoptimized = true;
        isLazy = false;
    }
    if (config.unoptimized) {
        unoptimized = true;
    }
    if (isDefaultLoader && src.endsWith(".svg") && !config.dangerouslyAllowSVG) {
        // Special case to make svg serve as-is to avoid proxying
        // through the built-in Image Optimization API.
        unoptimized = true;
    }
    if (priority) {
        fetchPriority = "high";
    }
    const qualityInt = getInt(quality);
    if (false) {}
    const imgStyle = Object.assign(fill ? {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit,
        objectPosition
    } : {}, showAltText ? {} : {
        color: "transparent"
    }, style);
    const blurStyle = placeholder === "blur" && blurDataURL && !blurComplete ? {
        backgroundSize: imgStyle.objectFit || "cover",
        backgroundPosition: imgStyle.objectPosition || "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundImage: 'url("data:image/svg+xml;charset=utf-8,' + (0, _imageblursvg.getImageBlurSvg)({
            widthInt,
            heightInt,
            blurWidth,
            blurHeight,
            blurDataURL,
            objectFit: imgStyle.objectFit
        }) + '")'
    } : {};
    if (false) {}
    const imgAttributes = generateImgAttrs({
        config,
        src,
        unoptimized,
        width: widthInt,
        quality: qualityInt,
        sizes,
        loader
    });
    if (false) {}
    const props = {
        ...rest,
        loading: isLazy ? "lazy" : loading,
        fetchPriority,
        width: widthInt,
        height: heightInt,
        decoding: "async",
        className,
        style: {
            ...imgStyle,
            ...blurStyle
        },
        sizes: imgAttributes.sizes,
        srcSet: imgAttributes.srcSet,
        src: imgAttributes.src
    };
    const meta = {
        unoptimized,
        priority,
        placeholder,
        fill
    };
    return {
        props,
        meta
    };
} //# sourceMappingURL=get-img-props.js.map


/***/ }),

/***/ 8136:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * A shared function, used on both client and server, to generate a SVG blur placeholder.
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getImageBlurSvg", ({
    enumerable: true,
    get: function() {
        return getImageBlurSvg;
    }
}));
function getImageBlurSvg(param) {
    let { widthInt, heightInt, blurWidth, blurHeight, blurDataURL, objectFit } = param;
    const std = blurWidth && blurHeight ? "1" : "20";
    const svgWidth = blurWidth || widthInt;
    const svgHeight = blurHeight || heightInt;
    const feComponentTransfer = blurDataURL.startsWith("data:image/jpeg") ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%" : "";
    if (svgWidth && svgHeight) {
        return "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 " + svgWidth + " " + svgHeight + "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='" + std + "'/%3E" + feComponentTransfer + "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='" + blurDataURL + "'/%3E%3C/svg%3E";
    }
    const preserveAspectRatio = objectFit === "contain" ? "xMidYMid" : objectFit === "cover" ? "xMidYMid slice" : "none";
    return "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='" + preserveAspectRatio + "' x='0' y='0' height='100%25' width='100%25' href='" + blurDataURL + "'/%3E%3C/svg%3E";
} //# sourceMappingURL=image-blur-svg.js.map


/***/ }),

/***/ 2405:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    VALID_LOADERS: function() {
        return VALID_LOADERS;
    },
    imageConfigDefault: function() {
        return imageConfigDefault;
    }
});
const VALID_LOADERS = [
    "default",
    "imgix",
    "cloudinary",
    "akamai",
    "custom"
];
const imageConfigDefault = {
    deviceSizes: [
        640,
        750,
        828,
        1080,
        1200,
        1920,
        2048,
        3840
    ],
    imageSizes: [
        16,
        32,
        48,
        64,
        96,
        128,
        256,
        384
    ],
    path: "/_next/image",
    loader: "default",
    loaderFile: "",
    domains: [],
    disableStaticImages: false,
    minimumCacheTTL: 60,
    formats: [
        "image/webp"
    ],
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
    contentDispositionType: "inline",
    remotePatterns: [],
    unoptimized: false
}; //# sourceMappingURL=image-config.js.map


/***/ }),

/***/ 3791:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    unstable_getImgProps: function() {
        return unstable_getImgProps;
    }
});
const _interop_require_default = __webpack_require__(7063);
const _getimgprops = __webpack_require__(7139);
const _warnonce = __webpack_require__(1233);
const _imagecomponent = __webpack_require__(4209);
const _imageloader = /*#__PURE__*/ _interop_require_default._(__webpack_require__(2372));
const unstable_getImgProps = (imgProps)=>{
    (0, _warnonce.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":false}
    });
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
};
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map


/***/ }),

/***/ 2372:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
function defaultLoader(param) {
    let { config, src, width, quality } = param;
    if (false) {}
    return config.path + "?url=" + encodeURIComponent(src) + "&w=" + width + "&q=" + (quality || 75) + ( false ? 0 : "");
}
// We use this to determine if the import is the default loader
// or a custom loader defined by the user in next.config.js
defaultLoader.__next_img_default = true;
const _default = defaultLoader; //# sourceMappingURL=image-loader.js.map


/***/ }),

/***/ 1233:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "warnOnce", ({
    enumerable: true,
    get: function() {
        return warnOnce;
    }
}));
let warnOnce = (_)=>{};
if (false) {} //# sourceMappingURL=warn-once.js.map


/***/ }),

/***/ 7495:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(3791);


/***/ }),

/***/ 3030:
/***/ (() => {



/***/ }),

/***/ 1900:
/***/ (() => {



/***/ }),

/***/ 9483:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(4595)


/***/ }),

/***/ 7253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ri: () => (/* binding */ Gallery)
/* harmony export */ });
/* unused harmony exports CheckButton, buildLayout, buildLayoutFlat */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const getStyle = (styleProp, fallback, context) => {
    if (typeof styleProp === "function") {
        return styleProp(context);
    }
    if (typeof styleProp === "object") {
        return styleProp;
    }
    return fallback(context);
};
const rotationTransformMap = {
    3: "rotate(180deg)",
    2: "rotateY(180deg)",
    4: "rotate(180deg) rotateY(180deg)",
    5: "rotate(270deg) rotateY(180deg)",
    6: "rotate(90deg)",
    7: "rotate(90deg) rotateY(180deg)",
    8: "rotate(270deg)",
};
const SELECTION_MARGIN = 16;
const gallery = {
    display: "flex",
    flexWrap: "wrap",
};
const thumbnail = ({ item }) => {
    const rotationTransformValue = rotationTransformMap[item.orientation];
    const style = {
        cursor: "pointer",
        maxWidth: "none",
        width: item.scaledWidth,
        height: item.scaledHeight,
        marginLeft: item.marginLeft,
        marginTop: 0,
        transform: rotationTransformValue,
    };
    if (item.isSelected) {
        const ratio = item.scaledWidth / item.scaledHeight;
        const viewportHeight = item.scaledHeight - SELECTION_MARGIN * 2;
        const viewportWidth = item.viewportWidth - SELECTION_MARGIN * 2;
        let height, width;
        if (item.scaledWidth > item.scaledHeight) {
            width = item.scaledWidth - SELECTION_MARGIN * 2;
            height = Math.floor(width / ratio);
        }
        else {
            height = item.scaledHeight - SELECTION_MARGIN * 2;
            width = Math.floor(height * ratio);
        }
        const marginTop = Math.abs(Math.floor((viewportHeight - height) / 2));
        const marginLeft = Math.abs(Math.floor((viewportWidth - width) / 2));
        style.width = width;
        style.height = height;
        style.marginLeft = marginLeft === 0 ? 0 : -marginLeft;
        style.marginTop = marginTop === 0 ? 0 : -marginTop;
    }
    return style;
};
const tileViewport = ({ item, }) => {
    const styles = {
        width: item.viewportWidth,
        height: item.scaledHeight,
        overflow: "hidden",
    };
    if (item.nano) {
        styles.background = `url(${item.nano})`;
        styles.backgroundSize = "cover";
        styles.backgroundPosition = "center center";
    }
    if (item.isSelected) {
        styles.width = item.viewportWidth - SELECTION_MARGIN * 2;
        styles.height = item.scaledHeight - SELECTION_MARGIN * 2;
        styles.margin = SELECTION_MARGIN;
    }
    return styles;
};
const customOverlay = ({ hover, }) => ({
    pointerEvents: "none",
    opacity: hover ? 1 : 0,
    position: "absolute",
    height: "100%",
    width: "100%",
});
const galleryItem = ({ margin }) => ({
    margin,
    WebkitUserSelect: "none",
    position: "relative",
    background: "#eee",
    padding: "0px",
});
const tileOverlay = ({ showOverlay, }) => ({
    pointerEvents: "none",
    opacity: 1,
    position: "absolute",
    height: "100%",
    width: "100%",
    background: showOverlay
        ? "linear-gradient(to bottom,rgba(0,0,0,0.26),transparent 56px,transparent)"
        : "none",
});
const tileIconBar = {
    pointerEvents: "none",
    opacity: 1,
    position: "absolute",
    height: "36px",
    width: "100%",
};
const tileDescription = {
    background: "white",
    width: "100%",
    margin: 0,
    userSelect: "text",
    WebkitUserSelect: "text",
    MozUserSelect: "text",
    overflow: "hidden",
};
const bottomBar = {
    padding: "2px",
    pointerEvents: "none",
    position: "absolute",
    minHeight: "0px",
    maxHeight: "160px",
    width: "100%",
    bottom: "0px",
    overflow: "hidden",
};
const tagItemBlock = {
    display: "inline-block",
    cursor: "pointer",
    pointerEvents: "visible",
    margin: "2px",
};
const tagItem = () => ({
    display: "inline",
    padding: ".2em .6em .3em",
    fontSize: "75%",
    fontWeight: "600",
    lineHeight: "1",
    color: "yellow",
    background: "rgba(0,0,0,0.65)",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "baseline",
    borderRadius: ".25em",
});
const checkButton = ({ isVisible, }) => ({
    visibility: isVisible ? "visible" : "hidden",
    background: "none",
    float: "left",
    width: 36,
    height: 36,
    border: "none",
    padding: 6,
    cursor: "pointer",
    pointerEvents: "visible",
});

const CheckButton = (props) => {
    const { isSelected, isVisible, onClick } = props;
    const { selectedColor, hoverColor, color } = props;
    const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const circleStyle = { display: isSelected ? "block" : "none" };
    const fillColor = isSelected ? selectedColor : hover ? hoverColor : color;
    const handleMouseOver = () => setHover(true);
    const handleMouseOut = () => setHover(false);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { "data-testid": "grid-gallery-item_check-button", title: "Select", style: checkButton({ isVisible }), onClick: onClick, onMouseOver: handleMouseOver, onMouseOut: handleMouseOut, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", { fill: fillColor, height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("radialGradient", { id: "shadow", cx: "38", cy: "95.488", r: "10.488", gradientTransform: "matrix(1 0 0 -1 -26 109)", gradientUnits: "userSpaceOnUse", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", { offset: ".832", stopColor: "#010101" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", { offset: "1", stopColor: "#010101", stopOpacity: "0" })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", { style: circleStyle, opacity: ".26", fill: "url(#shadow)", cx: "12", cy: "13.512", r: "10.488" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", { style: circleStyle, fill: "#FFF", cx: "12", cy: "12.2", r: "8.292" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M0 0h24v24H0z", fill: "none" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" })] }) }));
};
CheckButton.defaultProps = {
    isSelected: false,
    isVisible: true,
    color: "#FFFFFFB2",
    selectedColor: "#4285F4FF",
    hoverColor: "#FFFFFFFF",
};

const Image = (props) => {
    const { item, thumbnailImageComponent: ThumbnailImageComponent } = props;
    const styleContext = { item };
    const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const thumbnailProps = {
        key: props.index,
        "data-testid": "grid-gallery-item_thumbnail",
        src: item.src,
        alt: item.alt ? item.alt : "",
        title: typeof item.caption === "string" ? item.caption : null,
        style: getStyle(props.thumbnailStyle, thumbnail, styleContext),
    };
    const handleCheckButtonClick = (event) => {
        if (!props.isSelectable) {
            return;
        }
        props.onSelect(props.index, event);
    };
    const handleViewportClick = (event) => {
        props.onClick(props.index, event);
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "ReactGridGallery_tile", "data-testid": "grid-gallery-item", onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), style: galleryItem({ margin: props.margin }), children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "ReactGridGallery_tile-icon-bar", style: tileIconBar, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CheckButton, { isSelected: item.isSelected, isVisible: item.isSelected || (props.isSelectable && hover), onClick: handleCheckButtonClick }) }), !!item.tags && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "ReactGridGallery_tile-bottom-bar", style: bottomBar, children: item.tags.map((tag, index) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { title: tag.title, style: tagItemBlock, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: getStyle(props.tagStyle, tagItem, styleContext), children: tag.value }) }, tag.key || index))) })), !!item.customOverlay && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "ReactGridGallery_custom-overlay", style: customOverlay({ hover }), children: item.customOverlay })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "ReactGridGallery_tile-overlay", style: tileOverlay({
                    showOverlay: hover && !item.isSelected && props.isSelectable,
                }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "ReactGridGallery_tile-viewport", "data-testid": "grid-gallery-item_viewport", style: getStyle(props.tileViewportStyle, tileViewport, styleContext), onClick: handleViewportClick, children: ThumbnailImageComponent ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ThumbnailImageComponent, { ...props, imageProps: thumbnailProps })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { ...thumbnailProps })) }), item.thumbnailCaption && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "ReactGridGallery_tile-description", style: tileDescription, children: item.thumbnailCaption }))] }));
};
Image.defaultProps = {
    isSelectable: true,
};

const objectStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    pointerEvents: "none",
    zIndex: -1,
    opacity: 0,
};
const ResizeListener = ({ onResize, }) => {
    const objectRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const onResizeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(onResize);
    onResizeRef.current = onResize;
    const _onResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
        onResizeRef.current();
    }, []);
    const handleLoad = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
        const obj = objectRef.current;
        if (obj && obj.contentDocument && obj.contentDocument.defaultView) {
            obj.contentDocument.defaultView.addEventListener("resize", _onResize);
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        return () => {
            const obj = objectRef.current;
            if (obj && obj.contentDocument && obj.contentDocument.defaultView) {
                obj.contentDocument.defaultView.removeEventListener("resize", _onResize);
            }
        };
    }, []);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("object", { onLoad: handleLoad, ref: objectRef, tabIndex: -1, type: "text/html", data: "about:blank", title: "", style: objectStyles }));
};

const calculateCutOff = (items, totalRowWidth, protrudingWidth) => {
    const cutOff = [];
    let cutSum = 0;
    for (let i in items) {
        const item = items[i];
        const fractionOfWidth = item.scaledWidth / totalRowWidth;
        cutOff[i] = Math.floor(fractionOfWidth * protrudingWidth);
        cutSum += cutOff[i];
    }
    let stillToCutOff = protrudingWidth - cutSum;
    while (stillToCutOff > 0) {
        for (let i in cutOff) {
            cutOff[i]++;
            stillToCutOff--;
            if (stillToCutOff < 0)
                break;
        }
    }
    return cutOff;
};
const getRow = (images, { containerWidth, rowHeight, margin }) => {
    const row = [];
    const imgMargin = 2 * margin;
    const items = [...images];
    let totalRowWidth = 0;
    while (items.length > 0 && totalRowWidth < containerWidth) {
        const item = items.shift();
        const scaledWidth = Math.floor(rowHeight * (item.width / item.height));
        const extendedItem = {
            ...item,
            scaledHeight: rowHeight,
            scaledWidth,
            viewportWidth: scaledWidth,
            marginLeft: 0,
        };
        row.push(extendedItem);
        totalRowWidth += extendedItem.scaledWidth + imgMargin;
    }
    const protrudingWidth = totalRowWidth - containerWidth;
    if (row.length > 0 && protrudingWidth > 0) {
        const cutoff = calculateCutOff(row, totalRowWidth, protrudingWidth);
        for (const i in row) {
            const pixelsToRemove = cutoff[i];
            const item = row[i];
            item.marginLeft = -Math.abs(Math.floor(pixelsToRemove / 2));
            item.viewportWidth = item.scaledWidth - pixelsToRemove;
        }
    }
    return [row, items];
};
const getRows = (images, options, rows = []) => {
    const [row, imagesLeft] = getRow(images, options);
    const nextRows = [...rows, row];
    if (options.maxRows && nextRows.length >= options.maxRows) {
        return nextRows;
    }
    if (imagesLeft.length) {
        return getRows(imagesLeft, options, nextRows);
    }
    return nextRows;
};
const buildLayout = (images, { containerWidth, maxRows, rowHeight, margin }) => {
    rowHeight = typeof rowHeight === "undefined" ? 180 : rowHeight;
    margin = typeof margin === "undefined" ? 2 : margin;
    if (!images)
        return [];
    if (!containerWidth)
        return [];
    const options = { containerWidth, maxRows, rowHeight, margin };
    return getRows(images, options);
};
const buildLayoutFlat = (images, options) => {
    const rows = buildLayout(images, options);
    return [].concat.apply([], rows);
};

const Gallery = (props) => {
    const galleryRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { maxRows, rowHeight, margin, enableImageSelection } = props;
    const { defaultContainerWidth, images } = props;
    const [containerWidth, setContainerWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultContainerWidth);
    const handleResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
        if (!galleryRef.current) {
            return;
        }
        let width = galleryRef.current.clientWidth;
        try {
            width = galleryRef.current.getBoundingClientRect().width;
        }
        catch (err) { }
        setContainerWidth(Math.floor(width));
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        handleResize();
    }, []);
    const thumbnails = buildLayoutFlat(images, {
        containerWidth,
        maxRows,
        rowHeight,
        margin,
    });
    const handleSelect = (index, event) => {
        event.preventDefault();
        props.onSelect(index, images[index], event);
    };
    const handleClick = (index, event) => {
        props.onClick(index, images[index], event);
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { id: props.id, className: "ReactGridGallery", ref: galleryRef, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ResizeListener, { onResize: handleResize }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: gallery, children: thumbnails.map((item, index) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Image, { item: item, index: index, margin: margin, height: rowHeight, isSelectable: enableImageSelection, onClick: handleClick, onSelect: handleSelect, tagStyle: props.tagStyle, tileViewportStyle: props.tileViewportStyle, thumbnailStyle: props.thumbnailStyle, thumbnailImageComponent: props.thumbnailImageComponent }, item.key || index))) })] }));
};
Gallery.displayName = "Gallery";
Gallery.defaultProps = {
    id: "ReactGridGallery",
    enableImageSelection: true,
    rowHeight: 180,
    margin: 2,
    defaultContainerWidth: 0,
    onClick: () => { },
    onSelect: () => { },
};


//# sourceMappingURL=react-grid-gallery.esm.js.map


/***/ }),

/***/ 695:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $0: () => (/* binding */ useEventCallback),
/* harmony export */   CT: () => (/* binding */ getSlide),
/* harmony export */   Eq: () => (/* binding */ cleanup),
/* harmony export */   Fy: () => (/* binding */ makeUseContext),
/* harmony export */   Ju: () => (/* binding */ hasSlides),
/* harmony export */   Nc: () => (/* binding */ cssClass),
/* harmony export */   OV: () => (/* binding */ LightboxPropsProvider),
/* harmony export */   P0: () => (/* binding */ ImageSlide),
/* harmony export */   QB: () => (/* binding */ isImageSlide),
/* harmony export */   RD: () => (/* binding */ useLightboxProps),
/* harmony export */   Su: () => (/* binding */ useRTL),
/* harmony export */   TX: () => (/* binding */ createIconDisabled),
/* harmony export */   U2: () => (/* binding */ createIcon),
/* harmony export */   VI: () => (/* binding */ isImageFitCover),
/* harmony export */   Wy: () => (/* binding */ clsx),
/* harmony export */   Xl: () => (/* binding */ composePrefix),
/* harmony export */   ZP: () => (/* binding */ Lightbox),
/* harmony export */   _7: () => (/* binding */ useAnimation),
/* harmony export */   cO: () => (/* binding */ makeComposePrefix),
/* harmony export */   gJ: () => (/* binding */ cssVar),
/* harmony export */   hI: () => (/* binding */ useEvents),
/* harmony export */   hU: () => (/* binding */ IconButton),
/* harmony export */   l6: () => (/* binding */ createModule),
/* harmony export */   oc: () => (/* binding */ useLightboxState),
/* harmony export */   wQ: () => (/* binding */ addToolbarButton)
/* harmony export */ });
/* unused harmony exports Carousel, CarouselModule, CloseIcon, Controller, ControllerContext, ControllerModule, ErrorIcon, EventsContext, EventsProvider, Lightbox, LightboxDefaultProps, LightboxDispatchContext, LightboxPropsContext, LightboxStateContext, LightboxStateProvider, LoadingIcon, Navigation, NavigationButton, NavigationModule, NextIcon, NoScroll, NoScrollModule, Portal, PortalModule, PreviousIcon, Root, RootModule, SwipeState, TimeoutsContext, TimeoutsProvider, Toolbar, ToolbarModule, computeSlideRect, createNode, devicePixelRatio, getSlideIfPresent, getSlideIndex, hasWindow, label, parseLengthPercentage, round, setRef, stopNavigationEventsPropagation, useContainerRect, useController, useDelay, useForkRef, useLayoutEffect, useLightboxDispatch, useLoseFocus, useMotionPreference, usePointerEvents, usePointerSwipe, usePreventSwipeNavigation, useSensors, useThrottle, useTimeouts, useWheelSwipe, withPlugins */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8768);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8704);
'use client';





const LightboxDefaultProps = {
    open: false,
    close: () => { },
    index: 0,
    slides: [],
    render: {},
    plugins: [],
    toolbar: { buttons: [_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_CLOSE */ .t9] },
    labels: {},
    animation: {
        fade: 250,
        swipe: 500,
        easing: {
            fade: "ease",
            swipe: "ease-out",
            navigation: "ease-in-out",
        },
    },
    carousel: {
        finite: false,
        preload: 2,
        padding: "16px",
        spacing: "30%",
        imageFit: _types_js__WEBPACK_IMPORTED_MODULE_2__/* .IMAGE_FIT_CONTAIN */ .j3,
        imageProps: {},
    },
    controller: {
        ref: null,
        focus: true,
        aria: false,
        touchAction: "none",
        closeOnPullDown: false,
        closeOnBackdropClick: false,
    },
    portal: {},
    on: {},
    styles: {},
    className: "",
};

function createModule(name, component) {
    return { name, component };
}
function createNode(module, children) {
    return { module, children };
}
function traverseNode(node, target, apply) {
    if (node.module.name === target) {
        return apply(node);
    }
    if (node.children) {
        return [
            createNode(node.module, node.children.flatMap((n) => { var _a; return (_a = traverseNode(n, target, apply)) !== null && _a !== void 0 ? _a : []; })),
        ];
    }
    return [node];
}
function traverse(nodes, target, apply) {
    return nodes.flatMap((node) => { var _a; return (_a = traverseNode(node, target, apply)) !== null && _a !== void 0 ? _a : []; });
}
function withPlugins(root, plugins = [], augmentations = []) {
    let config = root;
    const contains = (target) => {
        const nodes = [...config];
        while (nodes.length > 0) {
            const node = nodes.pop();
            if ((node === null || node === void 0 ? void 0 : node.module.name) === target)
                return true;
            if (node === null || node === void 0 ? void 0 : node.children)
                nodes.push(...node.children);
        }
        return false;
    };
    const addParent = (target, module) => {
        if (target === "") {
            config = [createNode(module, config)];
            return;
        }
        config = traverse(config, target, (node) => [createNode(module, [node])]);
    };
    const append = (target, module) => {
        config = traverse(config, target, (node) => [createNode(node.module, [createNode(module, node.children)])]);
    };
    const addChild = (target, module, precede) => {
        config = traverse(config, target, (node) => {
            var _a;
            return [
                createNode(node.module, [
                    ...(precede ? [createNode(module)] : []),
                    ...((_a = node.children) !== null && _a !== void 0 ? _a : []),
                    ...(!precede ? [createNode(module)] : []),
                ]),
            ];
        });
    };
    const addSibling = (target, module, precede) => {
        config = traverse(config, target, (node) => [
            ...(precede ? [createNode(module)] : []),
            node,
            ...(!precede ? [createNode(module)] : []),
        ]);
    };
    const addModule = (module) => {
        append(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .MODULE_CONTROLLER */ .l4, module);
    };
    const replace = (target, module) => {
        config = traverse(config, target, (node) => [createNode(module, node.children)]);
    };
    const remove = (target) => {
        config = traverse(config, target, (node) => node.children);
    };
    const augment = (augmentation) => {
        augmentations.push(augmentation);
    };
    plugins.forEach((plugin) => {
        plugin({
            contains,
            addParent,
            append,
            addChild,
            addSibling,
            addModule,
            replace,
            remove,
            augment,
        });
    });
    return {
        config,
        augmentation: (props) => augmentations.reduce((acc, augmentation) => augmentation(acc), props),
    };
}

const clsx = (...classes) => [...classes].filter((cls) => Boolean(cls)).join(" ");
const cssPrefix$3 = "yarl__";
const cssClass = (name) => `${cssPrefix$3}${name}`;
const cssVar = (name) => `--${cssPrefix$3}${name}`;
const composePrefix = (base, prefix) => `${base}${prefix ? `_${prefix}` : ""}`;
const makeComposePrefix = (base) => (prefix) => composePrefix(base, prefix);
const label = (labels, lbl) => (labels && labels[lbl] ? labels[lbl] : lbl);
const cleanup = (...cleaners) => () => {
    cleaners.forEach((cleaner) => {
        cleaner();
    });
};
const makeUseContext = (name, contextName, context) => () => {
    const ctx = react__WEBPACK_IMPORTED_MODULE_0__.useContext(context);
    if (!ctx) {
        throw new Error(`${name} must be used within a ${contextName}.Provider`);
    }
    return ctx;
};
const hasWindow = () => typeof window !== "undefined";
function round(value, decimals = 0) {
    const factor = 10 ** decimals;
    return Math.round((value + Number.EPSILON) * factor) / factor;
}
const isImageSlide = (slide) => slide.type === undefined || slide.type === "image";
const isImageFitCover = (image, imageFit) => image.imageFit === _types_js__WEBPACK_IMPORTED_MODULE_2__/* .IMAGE_FIT_COVER */ .rO || (image.imageFit !== _types_js__WEBPACK_IMPORTED_MODULE_2__/* .IMAGE_FIT_CONTAIN */ .j3 && imageFit === _types_js__WEBPACK_IMPORTED_MODULE_2__/* .IMAGE_FIT_COVER */ .rO);
function parseLengthPercentage(input) {
    if (typeof input === "number") {
        return { pixel: input };
    }
    if (typeof input === "string") {
        const value = parseInt(input, 10);
        return input.endsWith("%") ? { percent: value } : { pixel: value };
    }
    return { pixel: 0 };
}
function computeSlideRect(containerRect, padding) {
    const paddingValue = parseLengthPercentage(padding);
    const paddingPixels = paddingValue.percent !== undefined ? (containerRect.width / 100) * paddingValue.percent : paddingValue.pixel;
    return {
        width: Math.max(containerRect.width - 2 * paddingPixels, 0),
        height: Math.max(containerRect.height - 2 * paddingPixels, 0),
    };
}
const devicePixelRatio = () => (hasWindow() ? window === null || window === void 0 ? void 0 : window.devicePixelRatio : undefined) || 1;
const getSlideIndex = (index, slidesCount) => slidesCount > 0 ? ((index % slidesCount) + slidesCount) % slidesCount : 0;
const hasSlides = (slides) => slides.length > 0;
const getSlide = (slides, index) => slides[getSlideIndex(index, slides.length)];
const getSlideIfPresent = (slides, index) => hasSlides(slides) ? getSlide(slides, index) : undefined;
function addToolbarButton(toolbar, key, button) {
    if (!button)
        return toolbar;
    const { buttons, ...restToolbar } = toolbar;
    const index = buttons.findIndex((item) => item === key);
    const buttonWithKey = react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(button) ? react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(button, { key }, null) : button;
    if (index >= 0) {
        const result = [...buttons];
        result.splice(index, 1, buttonWithKey);
        return { buttons: result, ...restToolbar };
    }
    return { buttons: [buttonWithKey, ...buttons], ...restToolbar };
}
function stopNavigationEventsPropagation() {
    const stopPropagation = (event) => {
        event.stopPropagation();
    };
    return { onPointerDown: stopPropagation, onKeyDown: stopPropagation, onWheel: stopPropagation };
}

const EventsContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const useEvents = makeUseContext("useEvents", "EventsContext", EventsContext);
function EventsProvider({ children }) {
    const [subscriptions] = react__WEBPACK_IMPORTED_MODULE_0__.useState({});
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => () => {
        Object.keys(subscriptions).forEach((topic) => delete subscriptions[topic]);
    }, [subscriptions]);
    const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        const unsubscribe = (topic, callback) => {
            var _a;
            (_a = subscriptions[topic]) === null || _a === void 0 ? void 0 : _a.splice(0, subscriptions[topic].length, ...subscriptions[topic].filter((cb) => cb !== callback));
        };
        const subscribe = (topic, callback) => {
            if (!subscriptions[topic]) {
                subscriptions[topic] = [];
            }
            subscriptions[topic].push(callback);
            return () => unsubscribe(topic, callback);
        };
        const publish = (...[topic, event]) => {
            var _a;
            (_a = subscriptions[topic]) === null || _a === void 0 ? void 0 : _a.forEach((callback) => callback(event));
        };
        return { publish, subscribe, unsubscribe };
    }, [subscriptions]);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(EventsContext.Provider, { value: context }, children);
}

const LightboxPropsContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const useLightboxProps = makeUseContext("useLightboxProps", "LightboxPropsContext", LightboxPropsContext);
function LightboxPropsProvider({ children, ...props }) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(LightboxPropsContext.Provider, { value: props }, children);
}

const LightboxStateContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const useLightboxState = makeUseContext("useLightboxState", "LightboxStateContext", LightboxStateContext);
const LightboxDispatchContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const useLightboxDispatch = makeUseContext("useLightboxDispatch", "LightboxDispatchContext", LightboxDispatchContext);
function reducer(state, action) {
    switch (action.type) {
        case "swipe": {
            const { slides } = state;
            const increment = (action === null || action === void 0 ? void 0 : action.increment) || 0;
            const globalIndex = state.globalIndex + increment;
            const currentIndex = getSlideIndex(globalIndex, slides.length);
            const currentSlide = getSlideIfPresent(slides, currentIndex);
            const animation = increment || action.duration
                ? {
                    increment,
                    duration: action.duration,
                    easing: action.easing,
                }
                : undefined;
            return { slides, currentIndex, globalIndex, currentSlide, animation };
        }
        case "update":
            return {
                slides: action.slides,
                currentIndex: action.index,
                globalIndex: action.index,
                currentSlide: getSlideIfPresent(action.slides, action.index),
            };
        default:
            throw new Error(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .UNKNOWN_ACTION_TYPE */ .c3);
    }
}
function LightboxStateProvider({ slides, index, children }) {
    const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0__.useReducer(reducer, {
        slides,
        currentIndex: index,
        globalIndex: index,
        currentSlide: getSlideIfPresent(slides, index),
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        dispatch({ type: "update", slides, index });
    }, [slides, index]);
    const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({ ...state, state, dispatch }), [state, dispatch]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(LightboxDispatchContext.Provider, { value: dispatch },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(LightboxStateContext.Provider, { value: context }, children)));
}

const TimeoutsContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const useTimeouts = makeUseContext("useTimeouts", "TimeoutsContext", TimeoutsContext);
function TimeoutsProvider({ children }) {
    const [timeouts] = react__WEBPACK_IMPORTED_MODULE_0__.useState([]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => () => {
        timeouts.forEach((tid) => window.clearTimeout(tid));
        timeouts.splice(0, timeouts.length);
    }, [timeouts]);
    const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        const removeTimeout = (id) => {
            timeouts.splice(0, timeouts.length, ...timeouts.filter((tid) => tid !== id));
        };
        const setTimeout = (fn, delay) => {
            const id = window.setTimeout(() => {
                removeTimeout(id);
                fn();
            }, delay);
            timeouts.push(id);
            return id;
        };
        const clearTimeout = (id) => {
            if (id !== undefined) {
                removeTimeout(id);
                window.clearTimeout(id);
            }
        };
        return { setTimeout, clearTimeout };
    }, [timeouts]);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(TimeoutsContext.Provider, { value: context }, children);
}

const IconButton = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function IconButton({ label: label$1, className, icon: Icon, renderIcon, onClick, style, ...rest }, ref) {
    const { styles, labels } = useLightboxProps();
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { ref: ref, type: "button", "aria-label": label(labels, label$1), className: clsx(cssClass(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ELEMENT_BUTTON */ .bg), className), onClick: onClick, style: { ...style, ...styles.button }, ...rest }, renderIcon ? renderIcon() : react__WEBPACK_IMPORTED_MODULE_0__.createElement(Icon, { className: cssClass(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ELEMENT_ICON */ .vg), style: styles.icon })));
});

function svgIcon(name, children) {
    const icon = (props) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", "aria-hidden": "true", focusable: "false", ...props }, children));
    icon.displayName = name;
    return icon;
}
function createIcon(name, glyph) {
    return svgIcon(name, react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", { fill: "currentColor" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
        glyph));
}
function createIconDisabled(name, glyph) {
    return svgIcon(name, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("mask", { id: "strike" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M0 0h24v24H0z", fill: "white" }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M0 0L24 24", stroke: "black", strokeWidth: 4 }))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M0.70707 2.121320L21.878680 23.292883", stroke: "currentColor", strokeWidth: 2 }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", { fill: "currentColor", mask: "url(#strike)" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
            glyph)));
}
const CloseIcon = createIcon("Close", react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }));
const PreviousIcon = createIcon("Previous", react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" }));
const NextIcon = createIcon("Next", react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" }));
const LoadingIcon = createIcon("Loading", react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, Array.from({ length: 8 }).map((_, index, array) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { key: index, x1: "12", y1: "6.5", x2: "12", y2: "1.8", strokeLinecap: "round", strokeWidth: "2.6", stroke: "currentColor", strokeOpacity: (1 / array.length) * (index + 1), transform: `rotate(${(360 / array.length) * index}, 12, 12)` })))));
const ErrorIcon = createIcon("Error", react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z" }));

const useLayoutEffect = hasWindow() ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

function useMotionPreference() {
    const [reduceMotion, setReduceMotion] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        var _a, _b;
        const mediaQuery = (_a = window.matchMedia) === null || _a === void 0 ? void 0 : _a.call(window, "(prefers-reduced-motion: reduce)");
        setReduceMotion(mediaQuery === null || mediaQuery === void 0 ? void 0 : mediaQuery.matches);
        const listener = (event) => setReduceMotion(event.matches);
        (_b = mediaQuery === null || mediaQuery === void 0 ? void 0 : mediaQuery.addEventListener) === null || _b === void 0 ? void 0 : _b.call(mediaQuery, "change", listener);
        return () => { var _a; return (_a = mediaQuery === null || mediaQuery === void 0 ? void 0 : mediaQuery.removeEventListener) === null || _a === void 0 ? void 0 : _a.call(mediaQuery, "change", listener); };
    }, []);
    return reduceMotion;
}

function currentTransformation(node) {
    let x = 0;
    let y = 0;
    let z = 0;
    const matrix = window.getComputedStyle(node).transform;
    const matcher = matrix.match(/matrix.*\((.+)\)/);
    if (matcher) {
        const values = matcher[1].split(",").map((str) => Number.parseInt(str, 10));
        if (values.length === 6) {
            x = values[4];
            y = values[5];
        }
        else if (values.length === 16) {
            x = values[12];
            y = values[13];
            z = values[14];
        }
    }
    return { x, y, z };
}
function useAnimation(nodeRef, computeAnimation) {
    const snapshot = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const animation = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const reduceMotion = useMotionPreference();
    useLayoutEffect(() => {
        var _a, _b, _c;
        if (nodeRef.current && snapshot.current !== undefined && !reduceMotion) {
            const { keyframes, duration, easing, onfinish } = computeAnimation(snapshot.current, nodeRef.current.getBoundingClientRect(), currentTransformation(nodeRef.current)) || {};
            if (keyframes && duration) {
                (_a = animation.current) === null || _a === void 0 ? void 0 : _a.cancel();
                animation.current = undefined;
                try {
                    animation.current = (_c = (_b = nodeRef.current).animate) === null || _c === void 0 ? void 0 : _c.call(_b, keyframes, { duration, easing });
                }
                catch (err) {
                    console.error(err);
                }
                if (animation.current) {
                    animation.current.onfinish = () => {
                        animation.current = undefined;
                        onfinish === null || onfinish === void 0 ? void 0 : onfinish();
                    };
                }
            }
        }
        snapshot.current = undefined;
    });
    return {
        prepareAnimation: (currentSnapshot) => {
            snapshot.current = currentSnapshot;
        },
        isAnimationPlaying: () => { var _a; return ((_a = animation.current) === null || _a === void 0 ? void 0 : _a.playState) === "running"; },
    };
}

function useContainerRect() {
    const [containerRect, setContainerRect] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
    const containerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const observerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const setContainerRef = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node) => {
        containerRef.current = node;
        if (observerRef.current) {
            observerRef.current.disconnect();
            observerRef.current = undefined;
        }
        const updateContainerRect = () => {
            if (node) {
                const styles = window.getComputedStyle(node);
                const parse = (value) => parseFloat(value) || 0;
                setContainerRect({
                    width: Math.round(node.clientWidth - parse(styles.paddingLeft) - parse(styles.paddingRight)),
                    height: Math.round(node.clientHeight - parse(styles.paddingTop) - parse(styles.paddingBottom)),
                });
            }
            else {
                setContainerRect(undefined);
            }
        };
        updateContainerRect();
        if (node && typeof ResizeObserver !== "undefined") {
            observerRef.current = new ResizeObserver(updateContainerRect);
            observerRef.current.observe(node);
        }
    }, []);
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
        setContainerRef,
        containerRef,
        containerRect,
    }), [setContainerRef, containerRef, containerRect]);
}

function useDelay() {
    const timeoutId = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const { setTimeout, clearTimeout } = useTimeouts();
    return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((callback, delay) => {
        clearTimeout(timeoutId.current);
        timeoutId.current = setTimeout(callback, delay > 0 ? delay : 0);
    }, [setTimeout, clearTimeout]);
}

function useEventCallback(fn) {
    const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(fn);
    useLayoutEffect(() => {
        ref.current = fn;
    });
    return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((...args) => { var _a; return (_a = ref.current) === null || _a === void 0 ? void 0 : _a.call(ref, ...args); }, []);
}

function setRef(ref, value) {
    if (typeof ref === "function") {
        ref(value);
    }
    else if (ref) {
        ref.current = value;
    }
}
function useForkRef(refA, refB) {
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => refA == null && refB == null
        ? null
        : (refValue) => {
            setRef(refA, refValue);
            setRef(refB, refValue);
        }, [refA, refB]);
}

function useLoseFocus(focus, disabled = false) {
    const focused = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    useLayoutEffect(() => {
        if (disabled && focused.current) {
            focused.current = false;
            focus();
        }
    }, [disabled, focus]);
    const onFocus = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        focused.current = true;
    }, []);
    const onBlur = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        focused.current = false;
    }, []);
    return { onFocus, onBlur };
}

function useRTL() {
    const [isRTL, setIsRTL] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    useLayoutEffect(() => {
        setIsRTL(window.getComputedStyle(window.document.documentElement).direction === "rtl");
    }, []);
    return isRTL;
}

function useSensors() {
    const [subscribers] = react__WEBPACK_IMPORTED_MODULE_0__.useState({});
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        const notifySubscribers = (type, event) => {
            var _a;
            (_a = subscribers[type]) === null || _a === void 0 ? void 0 : _a.forEach((listener) => {
                if (!event.isPropagationStopped())
                    listener(event);
            });
        };
        return {
            registerSensors: {
                onPointerDown: (event) => notifySubscribers(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_POINTER_DOWN */ .NZ, event),
                onPointerMove: (event) => notifySubscribers(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_POINTER_MOVE */ .N4, event),
                onPointerUp: (event) => notifySubscribers(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_POINTER_UP */ .S2, event),
                onPointerLeave: (event) => notifySubscribers(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_POINTER_LEAVE */ .pE, event),
                onPointerCancel: (event) => notifySubscribers(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_POINTER_CANCEL */ .Vt, event),
                onKeyDown: (event) => notifySubscribers(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_KEY_DOWN */ .ds, event),
                onKeyUp: (event) => notifySubscribers(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_KEY_UP */ .Bm, event),
                onWheel: (event) => notifySubscribers(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_WHEEL */ .yq, event),
            },
            subscribeSensors: (type, callback) => {
                if (!subscribers[type]) {
                    subscribers[type] = [];
                }
                subscribers[type].unshift(callback);
                return () => {
                    const listeners = subscribers[type];
                    if (listeners) {
                        listeners.splice(0, listeners.length, ...listeners.filter((el) => el !== callback));
                    }
                };
            },
        };
    }, [subscribers]);
}

function useThrottle(callback, delay) {
    const lastCallbackTime = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const delayCallback = useDelay();
    const executeCallback = useEventCallback((...args) => {
        lastCallbackTime.current = Date.now();
        callback(args);
    });
    return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((...args) => {
        delayCallback(() => {
            executeCallback(args);
        }, delay - (Date.now() - lastCallbackTime.current));
    }, [delay, executeCallback, delayCallback]);
}

const slidePrefix = makeComposePrefix("slide");
const slideImagePrefix = makeComposePrefix("slide_image");
function ImageSlide({ slide: image, offset, render, rect, imageFit, imageProps, onClick, onLoad, style, }) {
    var _a, _b, _c, _d, _e, _f, _g;
    const [status, setStatus] = react__WEBPACK_IMPORTED_MODULE_0__.useState(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .SLIDE_STATUS_LOADING */ .Xe);
    const { publish } = useEvents();
    const { setTimeout } = useTimeouts();
    const imageRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        if (offset === 0) {
            publish((0,_types_js__WEBPACK_IMPORTED_MODULE_2__/* .activeSlideStatus */ .J1)(status));
        }
    }, [offset, status, publish]);
    const handleLoading = useEventCallback((img) => {
        ("decode" in img ? img.decode() : Promise.resolve())
            .catch(() => { })
            .then(() => {
            if (!img.parentNode) {
                return;
            }
            setStatus(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .SLIDE_STATUS_COMPLETE */ .Zv);
            setTimeout(() => {
                onLoad === null || onLoad === void 0 ? void 0 : onLoad(img);
            }, 0);
        });
    });
    const setImageRef = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((img) => {
        imageRef.current = img;
        if (img === null || img === void 0 ? void 0 : img.complete) {
            handleLoading(img);
        }
    }, [handleLoading]);
    const handleOnLoad = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event) => {
        handleLoading(event.currentTarget);
    }, [handleLoading]);
    const onError = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        setStatus(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .SLIDE_STATUS_ERROR */ .fS);
    }, []);
    const cover = isImageFitCover(image, imageFit);
    const nonInfinite = (value, fallback) => (Number.isFinite(value) ? value : fallback);
    const maxWidth = nonInfinite(Math.max(...((_b = (_a = image.srcSet) === null || _a === void 0 ? void 0 : _a.map((x) => x.width)) !== null && _b !== void 0 ? _b : []).concat(image.width ? [image.width] : [])), ((_c = imageRef.current) === null || _c === void 0 ? void 0 : _c.naturalWidth) || 0);
    const maxHeight = nonInfinite(Math.max(...((_e = (_d = image.srcSet) === null || _d === void 0 ? void 0 : _d.map((x) => x.height)) !== null && _e !== void 0 ? _e : []).concat(image.height ? [image.height] : [])), ((_f = imageRef.current) === null || _f === void 0 ? void 0 : _f.naturalHeight) || 0);
    const defaultStyle = maxWidth && maxHeight
        ? {
            maxWidth: `min(${maxWidth}px, 100%)`,
            maxHeight: `min(${maxHeight}px, 100%)`,
        }
        : {
            maxWidth: "100%",
            maxHeight: "100%",
        };
    const srcSet = (_g = image.srcSet) === null || _g === void 0 ? void 0 : _g.sort((a, b) => a.width - b.width).map((item) => `${item.src} ${item.width}w`).join(", ");
    const estimateActualWidth = () => rect && !cover && image.width && image.height ? (rect.height / image.height) * image.width : Number.MAX_VALUE;
    const sizes = srcSet && rect && hasWindow() ? `${Math.round(Math.min(estimateActualWidth(), rect.width))}px` : undefined;
    const { style: imagePropsStyle, className: imagePropsClassName, ...restImageProps } = imageProps || {};
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { ref: setImageRef, onLoad: handleOnLoad, onError: onError, onClick: onClick, draggable: false, className: clsx(cssClass(slideImagePrefix()), cover && cssClass(slideImagePrefix("cover")), status !== _types_js__WEBPACK_IMPORTED_MODULE_2__/* .SLIDE_STATUS_COMPLETE */ .Zv && cssClass(slideImagePrefix("loading")), imagePropsClassName), style: { ...defaultStyle, ...style, ...imagePropsStyle }, ...restImageProps, alt: image.alt, sizes: sizes, srcSet: srcSet, src: image.src }),
        status !== _types_js__WEBPACK_IMPORTED_MODULE_2__/* .SLIDE_STATUS_COMPLETE */ .Zv && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssClass(slidePrefix(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .SLIDE_STATUS_PLACEHOLDER */ .$L)) },
            status === _types_js__WEBPACK_IMPORTED_MODULE_2__/* .SLIDE_STATUS_LOADING */ .Xe &&
                ((render === null || render === void 0 ? void 0 : render.iconLoading) ? (render.iconLoading()) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(LoadingIcon, { className: clsx(cssClass(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ELEMENT_ICON */ .vg), cssClass(slidePrefix(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .SLIDE_STATUS_LOADING */ .Xe))) }))),
            status === _types_js__WEBPACK_IMPORTED_MODULE_2__/* .SLIDE_STATUS_ERROR */ .fS &&
                ((render === null || render === void 0 ? void 0 : render.iconError) ? (render.iconError()) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorIcon, { className: clsx(cssClass(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ELEMENT_ICON */ .vg), cssClass(slidePrefix(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .SLIDE_STATUS_ERROR */ .fS))) })))))));
}

var SwipeState;
(function (SwipeState) {
    SwipeState[SwipeState["NONE"] = 0] = "NONE";
    SwipeState[SwipeState["SWIPE"] = 1] = "SWIPE";
    SwipeState[SwipeState["PULL_DOWN"] = 2] = "PULL_DOWN";
    SwipeState[SwipeState["ANIMATION"] = 3] = "ANIMATION";
})(SwipeState || (SwipeState = {}));

function usePointerEvents(subscribeSensors, onPointerDown, onPointerMove, onPointerUp, disabled) {
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        if (disabled)
            return () => { };
        return cleanup(subscribeSensors(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_POINTER_DOWN */ .NZ, onPointerDown), subscribeSensors(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_POINTER_MOVE */ .N4, onPointerMove), subscribeSensors(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_POINTER_UP */ .S2, onPointerUp), subscribeSensors(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_POINTER_LEAVE */ .pE, onPointerUp), subscribeSensors(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_POINTER_CANCEL */ .Vt, onPointerUp));
    }, [subscribeSensors, onPointerDown, onPointerMove, onPointerUp, disabled]);
}

var Gesture;
(function (Gesture) {
    Gesture[Gesture["NONE"] = 0] = "NONE";
    Gesture[Gesture["SWIPE"] = 1] = "SWIPE";
    Gesture[Gesture["PULL_DOWN"] = 2] = "PULL_DOWN";
})(Gesture || (Gesture = {}));
const SWIPE_THRESHOLD = 30;
function usePointerSwipe(subscribeSensors, isSwipeValid, containerWidth, swipeAnimationDuration, onSwipeStart, onSwipeProgress, onSwipeFinish, onSwipeCancel, pullDownEnabled, onPullDownStart, onPullDownProgress, onPullDownFinish, onPullDownCancel) {
    const offset = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const pointers = react__WEBPACK_IMPORTED_MODULE_0__.useRef([]);
    const activePointer = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const startTime = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const gesture = react__WEBPACK_IMPORTED_MODULE_0__.useRef(Gesture.NONE);
    const clearPointer = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event) => {
        if (activePointer.current === event.pointerId) {
            activePointer.current = undefined;
            gesture.current = Gesture.NONE;
        }
        const currentPointers = pointers.current;
        currentPointers.splice(0, currentPointers.length, ...currentPointers.filter((p) => p.pointerId !== event.pointerId));
    }, []);
    const addPointer = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event) => {
        clearPointer(event);
        event.persist();
        pointers.current.push(event);
    }, [clearPointer]);
    const onPointerDown = useEventCallback((event) => {
        addPointer(event);
    });
    const onPointerUp = useEventCallback((event) => {
        if (pointers.current.find((x) => x.pointerId === event.pointerId) &&
            activePointer.current === event.pointerId) {
            const duration = Date.now() - startTime.current;
            const currentOffset = offset.current;
            if (gesture.current === Gesture.SWIPE) {
                if (Math.abs(currentOffset) > 0.3 * containerWidth ||
                    (Math.abs(currentOffset) > 5 && duration < swipeAnimationDuration)) {
                    onSwipeFinish(currentOffset, duration);
                }
                else {
                    onSwipeCancel(currentOffset);
                }
            }
            else if (gesture.current === Gesture.PULL_DOWN) {
                if (currentOffset > 2 * SWIPE_THRESHOLD) {
                    onPullDownFinish(currentOffset, duration);
                }
                else {
                    onPullDownCancel(currentOffset);
                }
            }
            offset.current = 0;
            gesture.current = Gesture.NONE;
        }
        clearPointer(event);
    });
    const onPointerMove = useEventCallback((event) => {
        const pointer = pointers.current.find((p) => p.pointerId === event.pointerId);
        if (pointer) {
            const isCurrentPointer = activePointer.current === event.pointerId;
            if (event.buttons === 0) {
                if (isCurrentPointer && offset.current !== 0) {
                    onPointerUp(event);
                }
                else {
                    clearPointer(pointer);
                }
                return;
            }
            const deltaX = event.clientX - pointer.clientX;
            const deltaY = event.clientY - pointer.clientY;
            if (activePointer.current === undefined) {
                const startGesture = (newGesture) => {
                    addPointer(event);
                    activePointer.current = event.pointerId;
                    startTime.current = Date.now();
                    gesture.current = newGesture;
                };
                if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > SWIPE_THRESHOLD && isSwipeValid(deltaX)) {
                    startGesture(Gesture.SWIPE);
                    onSwipeStart();
                }
                else if (pullDownEnabled && Math.abs(deltaY) > Math.abs(deltaX) && deltaY > SWIPE_THRESHOLD) {
                    startGesture(Gesture.PULL_DOWN);
                    onPullDownStart();
                }
            }
            else if (isCurrentPointer) {
                if (gesture.current === Gesture.SWIPE) {
                    offset.current = deltaX;
                    onSwipeProgress(deltaX);
                }
                else if (gesture.current === Gesture.PULL_DOWN) {
                    offset.current = deltaY;
                    onPullDownProgress(deltaY);
                }
            }
        }
    });
    usePointerEvents(subscribeSensors, onPointerDown, onPointerMove, onPointerUp);
}

const WHEEL = "wheel";
function preventDefault(event) {
    if (Math.abs(event.deltaX) > Math.abs(event.deltaY) || event.ctrlKey) {
        event.preventDefault();
    }
}
function usePreventSwipeNavigation() {
    const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node) => {
        var _a;
        if (node) {
            node.addEventListener(WHEEL, preventDefault, { passive: false });
        }
        else {
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.removeEventListener(WHEEL, preventDefault);
        }
        ref.current = node;
    }, []);
}

function useWheelSwipe(swipeState, subscribeSensors, isSwipeValid, containerWidth, swipeAnimationDuration, onSwipeStart, onSwipeProgress, onSwipeFinish, onSwipeCancel) {
    const offset = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const intent = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const intentCleanup = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const resetCleanup = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    const wheelResidualMomentum = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const startTime = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const { setTimeout, clearTimeout } = useTimeouts();
    const cancelSwipeIntentCleanup = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        if (intentCleanup.current) {
            clearTimeout(intentCleanup.current);
            intentCleanup.current = undefined;
        }
    }, [clearTimeout]);
    const cancelSwipeResetCleanup = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        if (resetCleanup.current) {
            clearTimeout(resetCleanup.current);
            resetCleanup.current = undefined;
        }
    }, [clearTimeout]);
    const handleCleanup = useEventCallback(() => {
        if (swipeState !== SwipeState.SWIPE) {
            offset.current = 0;
            startTime.current = 0;
            cancelSwipeIntentCleanup();
            cancelSwipeResetCleanup();
        }
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(handleCleanup, [swipeState, handleCleanup]);
    const handleCancelSwipe = useEventCallback((currentSwipeOffset) => {
        resetCleanup.current = undefined;
        if (offset.current === currentSwipeOffset) {
            onSwipeCancel(offset.current);
        }
    });
    const onWheel = useEventCallback((event) => {
        if (event.ctrlKey) {
            return;
        }
        if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
            return;
        }
        if (swipeState === SwipeState.NONE) {
            if (Math.abs(event.deltaX) <= 1.2 * Math.abs(wheelResidualMomentum.current)) {
                wheelResidualMomentum.current = event.deltaX;
                return;
            }
            if (!isSwipeValid(-event.deltaX)) {
                return;
            }
            intent.current += event.deltaX;
            cancelSwipeIntentCleanup();
            if (Math.abs(intent.current) > 30) {
                intent.current = 0;
                wheelResidualMomentum.current = 0;
                startTime.current = Date.now();
                onSwipeStart();
            }
            else {
                const currentSwipeIntent = intent.current;
                intentCleanup.current = setTimeout(() => {
                    intentCleanup.current = undefined;
                    if (currentSwipeIntent === intent.current) {
                        intent.current = 0;
                    }
                }, swipeAnimationDuration);
            }
        }
        else if (swipeState === SwipeState.SWIPE) {
            let newSwipeOffset = offset.current - event.deltaX;
            newSwipeOffset = Math.min(Math.abs(newSwipeOffset), containerWidth) * Math.sign(newSwipeOffset);
            offset.current = newSwipeOffset;
            onSwipeProgress(newSwipeOffset);
            cancelSwipeResetCleanup();
            if (Math.abs(newSwipeOffset) > 0.2 * containerWidth) {
                wheelResidualMomentum.current = event.deltaX;
                onSwipeFinish(newSwipeOffset, Date.now() - startTime.current);
                return;
            }
            resetCleanup.current = setTimeout(() => handleCancelSwipe(newSwipeOffset), 2 * swipeAnimationDuration);
        }
        else {
            wheelResidualMomentum.current = event.deltaX;
        }
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => subscribeSensors(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_WHEEL */ .yq, onWheel), [subscribeSensors, onWheel]);
}

const cssContainerPrefix = makeComposePrefix("container");
const ControllerContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const useController = makeUseContext("useController", "ControllerContext", ControllerContext);
function Controller({ children, ...props }) {
    var _a;
    const { carousel, animation, controller, on, styles, render } = props;
    const [toolbarWidth, setToolbarWidth] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
    const state = useLightboxState();
    const dispatch = useLightboxDispatch();
    const [swipeState, setSwipeState] = react__WEBPACK_IMPORTED_MODULE_0__.useState(SwipeState.NONE);
    const swipeOffset = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const pullDownOffset = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const pullDownOpacity = react__WEBPACK_IMPORTED_MODULE_0__.useRef(1);
    const { registerSensors, subscribeSensors } = useSensors();
    const { subscribe, publish } = useEvents();
    const cleanupAnimationIncrement = useDelay();
    const cleanupSwipeOffset = useDelay();
    const cleanupPullDownOffset = useDelay();
    const { containerRef, setContainerRef, containerRect } = useContainerRect();
    const handleContainerRef = useForkRef(usePreventSwipeNavigation(), setContainerRef);
    const carouselRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const setCarouselRef = useForkRef(carouselRef, undefined);
    const isRTL = useRTL();
    const rtl = (value) => (isRTL ? -1 : 1) * (typeof value === "number" ? value : 1);
    const focus = useEventCallback(() => { var _a; return (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.focus(); });
    const getLightboxProps = useEventCallback(() => props);
    const getLightboxState = useEventCallback(() => state);
    const prev = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((params) => publish(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_PREV */ .KN, params), [publish]);
    const next = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((params) => publish(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_NEXT */ .Eb, params), [publish]);
    const close = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => publish(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_CLOSE */ .t9), [publish]);
    const isSwipeValid = (offset) => !(carousel.finite &&
        ((rtl(offset) > 0 && state.currentIndex === 0) ||
            (rtl(offset) < 0 && state.currentIndex === state.slides.length - 1)));
    const setSwipeOffset = (offset) => {
        var _a;
        swipeOffset.current = offset;
        (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.style.setProperty(cssVar("swipe_offset"), `${Math.round(offset)}px`);
    };
    const pullDownEnabled = controller.closeOnPullDown;
    const setPullDownOffset = (offset) => {
        var _a, _b;
        pullDownOffset.current = offset;
        pullDownOpacity.current = (() => {
            const threshold = 60;
            const minOpacity = 0.5;
            return Math.min(Math.max(round(1 - (offset / threshold) * (1 - minOpacity), 2), minOpacity), 1);
        })();
        (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.style.setProperty(cssVar("pull_down_offset"), `${Math.round(offset)}px`);
        (_b = containerRef.current) === null || _b === void 0 ? void 0 : _b.style.setProperty(cssVar("pull_down_opacity"), `${pullDownOpacity.current}`);
    };
    const { prepareAnimation: preparePullDownAnimation } = useAnimation(carouselRef, (snapshot, rect, translate) => {
        if (carouselRef.current && containerRect) {
            return {
                keyframes: [
                    {
                        transform: `translate(0, ${snapshot.rect.y - rect.y + translate.y}px)`,
                        opacity: snapshot.opacity,
                    },
                    { transform: "translate(0, 0)", opacity: 1 },
                ],
                duration: snapshot.duration,
                easing: animation.easing.fade,
            };
        }
        return undefined;
    });
    const pullDown = (offset, cancel) => {
        if (pullDownEnabled) {
            setPullDownOffset(offset);
            let duration = 0;
            if (carouselRef.current) {
                duration = animation.fade * (cancel ? 2 : 1);
                preparePullDownAnimation({
                    rect: carouselRef.current.getBoundingClientRect(),
                    opacity: pullDownOpacity.current,
                    duration,
                });
            }
            cleanupPullDownOffset(() => {
                setPullDownOffset(0);
                setSwipeState(SwipeState.NONE);
            }, duration);
            setSwipeState(SwipeState.ANIMATION);
            if (!cancel) {
                close();
            }
        }
    };
    const { prepareAnimation, isAnimationPlaying } = useAnimation(carouselRef, (snapshot, rect, translate) => {
        var _a;
        if (carouselRef.current && containerRect && ((_a = state.animation) === null || _a === void 0 ? void 0 : _a.duration)) {
            const parsedSpacing = parseLengthPercentage(carousel.spacing);
            const spacingValue = (parsedSpacing.percent
                ? (parsedSpacing.percent * containerRect.width) / 100
                : parsedSpacing.pixel) || 0;
            return {
                keyframes: [
                    {
                        transform: `translate(${rtl(state.globalIndex - snapshot.index) * (containerRect.width + spacingValue) +
                            snapshot.rect.x -
                            rect.x +
                            translate.x}px, 0)`,
                    },
                    { transform: "translate(0, 0)" },
                ],
                duration: state.animation.duration,
                easing: state.animation.easing,
            };
        }
        return undefined;
    });
    const swipe = useEventCallback((action) => {
        var _a, _b;
        const currentSwipeOffset = action.offset || 0;
        const swipeDuration = !currentSwipeOffset ? (_a = animation.navigation) !== null && _a !== void 0 ? _a : animation.swipe : animation.swipe;
        const swipeEasing = !currentSwipeOffset && !isAnimationPlaying() ? animation.easing.navigation : animation.easing.swipe;
        let { direction } = action;
        const count = (_b = action.count) !== null && _b !== void 0 ? _b : 1;
        let newSwipeState = SwipeState.ANIMATION;
        let newSwipeAnimationDuration = swipeDuration * count;
        if (!direction) {
            const containerWidth = containerRect === null || containerRect === void 0 ? void 0 : containerRect.width;
            const elapsedTime = action.duration || 0;
            const expectedTime = containerWidth
                ? (swipeDuration / containerWidth) * Math.abs(currentSwipeOffset)
                : swipeDuration;
            if (count !== 0) {
                if (elapsedTime < expectedTime) {
                    newSwipeAnimationDuration =
                        (newSwipeAnimationDuration / expectedTime) * Math.max(elapsedTime, expectedTime / 5);
                }
                else if (containerWidth) {
                    newSwipeAnimationDuration =
                        (swipeDuration / containerWidth) * (containerWidth - Math.abs(currentSwipeOffset));
                }
                direction = rtl(currentSwipeOffset) > 0 ? _types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_PREV */ .KN : _types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_NEXT */ .Eb;
            }
            else {
                newSwipeAnimationDuration = swipeDuration / 2;
            }
        }
        let increment = 0;
        if (direction === _types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_PREV */ .KN) {
            if (isSwipeValid(rtl(1))) {
                increment = -count;
            }
            else {
                newSwipeState = SwipeState.NONE;
                newSwipeAnimationDuration = swipeDuration;
            }
        }
        else if (direction === _types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_NEXT */ .Eb) {
            if (isSwipeValid(rtl(-1))) {
                increment = count;
            }
            else {
                newSwipeState = SwipeState.NONE;
                newSwipeAnimationDuration = swipeDuration;
            }
        }
        newSwipeAnimationDuration = Math.round(newSwipeAnimationDuration);
        cleanupSwipeOffset(() => {
            setSwipeOffset(0);
            setSwipeState(SwipeState.NONE);
        }, newSwipeAnimationDuration);
        if (carouselRef.current) {
            prepareAnimation({
                rect: carouselRef.current.getBoundingClientRect(),
                index: state.globalIndex,
            });
        }
        setSwipeState(newSwipeState);
        publish(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_SWIPE */ .Tn, {
            type: "swipe",
            increment,
            duration: newSwipeAnimationDuration,
            easing: swipeEasing,
        });
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        var _a, _b;
        if (((_a = state.animation) === null || _a === void 0 ? void 0 : _a.increment) && ((_b = state.animation) === null || _b === void 0 ? void 0 : _b.duration)) {
            cleanupAnimationIncrement(() => dispatch({ type: "swipe", increment: 0 }), state.animation.duration);
        }
    }, [state.animation, dispatch, cleanupAnimationIncrement]);
    const swipeParams = [
        subscribeSensors,
        isSwipeValid,
        (containerRect === null || containerRect === void 0 ? void 0 : containerRect.width) || 0,
        animation.swipe,
        () => setSwipeState(SwipeState.SWIPE),
        (offset) => setSwipeOffset(offset),
        (offset, duration) => swipe({ offset, duration, count: 1 }),
        (offset) => swipe({ offset, count: 0 }),
    ];
    const pullDownParams = [
        () => {
            if (pullDownEnabled) {
                setSwipeState(SwipeState.PULL_DOWN);
            }
        },
        (offset) => setPullDownOffset(offset),
        (offset) => pullDown(offset),
        (offset) => pullDown(offset, true),
    ];
    usePointerSwipe(...swipeParams, pullDownEnabled, ...pullDownParams);
    useWheelSwipe(swipeState, ...swipeParams);
    const focusOnMount = useEventCallback(() => {
        var _a;
        if (controller.focus) {
            (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(focusOnMount, [focusOnMount]);
    const onViewCallback = useEventCallback(() => {
        var _a;
        (_a = on.view) === null || _a === void 0 ? void 0 : _a.call(on, { index: state.currentIndex });
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(onViewCallback, [state.globalIndex, onViewCallback]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => cleanup(subscribe(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_PREV */ .KN, (action) => swipe({ direction: _types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_PREV */ .KN, ...action })), subscribe(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_NEXT */ .Eb, (action) => swipe({ direction: _types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_NEXT */ .Eb, ...action })), subscribe(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_SWIPE */ .Tn, (action) => dispatch(action))), [subscribe, swipe, dispatch]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => subscribeSensors(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_KEY_UP */ .Bm, (event) => {
        if (event.key === _types_js__WEBPACK_IMPORTED_MODULE_2__/* .VK_ESCAPE */ .PU) {
            close();
        }
    }), [subscribeSensors, close]);
    const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
        prev,
        next,
        close,
        focus,
        slideRect: containerRect ? computeSlideRect(containerRect, carousel.padding) : { width: 0, height: 0 },
        containerRect: containerRect || { width: 0, height: 0 },
        subscribeSensors,
        containerRef,
        setCarouselRef,
        toolbarWidth,
        setToolbarWidth,
    }), [
        prev,
        next,
        close,
        focus,
        subscribeSensors,
        containerRect,
        containerRef,
        setCarouselRef,
        toolbarWidth,
        setToolbarWidth,
        carousel.padding,
    ]);
    react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(controller.ref, () => ({
        prev,
        next,
        close,
        focus,
        getLightboxProps,
        getLightboxState,
    }), [prev, next, close, focus, getLightboxProps, getLightboxState]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: handleContainerRef, className: clsx(cssClass(cssContainerPrefix()), cssClass(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .CLASS_FLEX_CENTER */ .aN)), style: {
            ...(swipeState === SwipeState.SWIPE
                ? { [cssVar("swipe_offset")]: `${Math.round(swipeOffset.current)}px` }
                : null),
            ...(swipeState === SwipeState.PULL_DOWN
                ? {
                    [cssVar("pull_down_offset")]: `${Math.round(pullDownOffset.current)}px`,
                    [cssVar("pull_down_opacity")]: `${pullDownOpacity.current}`,
                }
                : null),
            ...(controller.touchAction !== "none"
                ? { [cssVar("controller_touch_action")]: controller.touchAction }
                : null),
            ...styles.container,
        }, ...(controller.aria ? { role: "presentation", "aria-live": "polite" } : null), tabIndex: -1, ...registerSensors }, containerRect && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(ControllerContext.Provider, { value: context },
        children, (_a = render.controls) === null || _a === void 0 ? void 0 :
        _a.call(render)))));
}
const ControllerModule = createModule(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .MODULE_CONTROLLER */ .l4, Controller);

function cssPrefix$2(value) {
    return composePrefix(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .MODULE_CAROUSEL */ .k0, value);
}
function cssSlidePrefix(value) {
    return composePrefix("slide", value);
}
function CarouselSlide({ slide, offset }) {
    const containerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const { currentIndex } = useLightboxState();
    const { slideRect, close } = useController();
    const { render, carousel: { imageFit, imageProps }, on: { click: onClick }, controller: { closeOnBackdropClick }, styles: { slide: style }, } = useLightboxProps();
    const renderSlide = () => {
        var _a, _b, _c, _d;
        let rendered = (_a = render.slide) === null || _a === void 0 ? void 0 : _a.call(render, { slide, offset, rect: slideRect });
        if (!rendered && isImageSlide(slide)) {
            rendered = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(ImageSlide, { slide: slide, offset: offset, render: render, rect: slideRect, imageFit: imageFit, imageProps: imageProps, onClick: offset === 0 ? () => onClick === null || onClick === void 0 ? void 0 : onClick({ index: currentIndex }) : undefined }));
        }
        return rendered ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (_b = render.slideHeader) === null || _b === void 0 ? void 0 :
            _b.call(render, { slide }),
            ((_c = render.slideContainer) !== null && _c !== void 0 ? _c : (({ children }) => children))({ slide, children: rendered }), (_d = render.slideFooter) === null || _d === void 0 ? void 0 :
            _d.call(render, { slide }))) : null;
    };
    const handleBackdropClick = (event) => {
        const container = containerRef.current;
        const target = event.target instanceof HTMLElement ? event.target : undefined;
        if (closeOnBackdropClick &&
            target &&
            container &&
            (target === container ||
                (Array.from(container.children).find((x) => x === target) &&
                    target.classList.contains(cssClass(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .CLASS_FULLSIZE */ .yS))))) {
            close();
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: containerRef, className: clsx(cssClass(cssSlidePrefix()), offset === 0 && cssClass(cssSlidePrefix("current")), cssClass(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .CLASS_FLEX_CENTER */ .aN)), onClick: handleBackdropClick, style: style }, renderSlide()));
}
function Placeholder() {
    const style = useLightboxProps().styles.slide;
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssClass("slide"), style: style });
}
function Carousel({ carousel: { finite, preload, padding, spacing } }) {
    const { slides, currentIndex, globalIndex } = useLightboxState();
    const { setCarouselRef } = useController();
    const spacingValue = parseLengthPercentage(spacing);
    const paddingValue = parseLengthPercentage(padding);
    const items = [];
    if ((slides === null || slides === void 0 ? void 0 : slides.length) > 0) {
        for (let i = currentIndex - preload; i < currentIndex; i += 1) {
            const key = globalIndex + i - currentIndex;
            items.push(!finite || i >= 0 ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(CarouselSlide, { key: key, slide: slides[(i + preload * slides.length) % slides.length], offset: i - currentIndex })) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Placeholder, { key: key })));
        }
        items.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(CarouselSlide, { key: globalIndex, slide: slides[currentIndex], offset: 0 }));
        for (let i = currentIndex + 1; i <= currentIndex + preload; i += 1) {
            const key = globalIndex + i - currentIndex;
            items.push(!finite || i <= slides.length - 1 ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(CarouselSlide, { key: key, slide: slides[i % slides.length], offset: i - currentIndex })) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Placeholder, { key: key })));
        }
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: setCarouselRef, className: clsx(cssClass(cssPrefix$2()), items.length > 0 && cssClass(cssPrefix$2("with_slides"))), style: {
            [`${cssVar(cssPrefix$2("slides_count"))}`]: items.length,
            [`${cssVar(cssPrefix$2("spacing_px"))}`]: spacingValue.pixel || 0,
            [`${cssVar(cssPrefix$2("spacing_percent"))}`]: spacingValue.percent || 0,
            [`${cssVar(cssPrefix$2("padding_px"))}`]: paddingValue.pixel || 0,
            [`${cssVar(cssPrefix$2("padding_percent"))}`]: paddingValue.percent || 0,
        } }, items));
}
const CarouselModule = createModule(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .MODULE_CAROUSEL */ .k0, Carousel);

function NavigationButton({ label, icon, renderIcon, action, onClick, disabled, style }) {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconButton, { label: label, icon: icon, renderIcon: renderIcon, className: cssClass(`navigation_${action}`), disabled: disabled, onClick: onClick, style: style, ...useLoseFocus(useController().focus, disabled) }));
}
function Navigation({ carousel: { finite }, animation, render: { buttonPrev, buttonNext, iconPrev, iconNext }, styles, }) {
    var _a;
    const { slides, currentIndex } = useLightboxState();
    const { prev, next, subscribeSensors } = useController();
    const isRTL = useRTL();
    const prevDisabled = slides.length === 0 || (finite && currentIndex === 0);
    const nextDisabled = slides.length === 0 || (finite && currentIndex === slides.length - 1);
    const throttle = ((_a = animation.navigation) !== null && _a !== void 0 ? _a : animation.swipe) / 2;
    const prevThrottled = useThrottle(prev, throttle);
    const nextThrottled = useThrottle(next, throttle);
    const handleKeyDown = useEventCallback((event) => {
        if (event.key === _types_js__WEBPACK_IMPORTED_MODULE_2__/* .VK_ARROW_LEFT */ .Sl && !(isRTL ? nextDisabled : prevDisabled)) {
            (isRTL ? nextThrottled : prevThrottled)();
        }
        if (event.key === _types_js__WEBPACK_IMPORTED_MODULE_2__/* .VK_ARROW_RIGHT */ .NH && !(isRTL ? prevDisabled : nextDisabled)) {
            (isRTL ? prevThrottled : nextThrottled)();
        }
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => subscribeSensors(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_KEY_DOWN */ .ds, handleKeyDown), [subscribeSensors, handleKeyDown]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        buttonPrev ? (buttonPrev()) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavigationButton, { label: "Previous", action: _types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_PREV */ .KN, icon: PreviousIcon, renderIcon: iconPrev, style: styles.navigationPrev, disabled: prevDisabled, onClick: prev })),
        buttonNext ? (buttonNext()) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavigationButton, { label: "Next", action: _types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_NEXT */ .Eb, icon: NextIcon, renderIcon: iconNext, style: styles.navigationNext, disabled: nextDisabled, onClick: next }))));
}
const NavigationModule = createModule(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .MODULE_NAVIGATION */ .Op, Navigation);

const noScroll = cssClass(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .CLASS_NO_SCROLL */ .Tf);
const noScrollPadding = cssClass(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .CLASS_NO_SCROLL_PADDING */ .M9);
function isHTMLElement(element) {
    return "style" in element;
}
function padScrollbar(element, padding, rtl) {
    const styles = window.getComputedStyle(element);
    const property = rtl ? "padding-left" : "padding-right";
    const computedValue = rtl ? styles.paddingLeft : styles.paddingRight;
    const originalValue = element.style.getPropertyValue(property);
    element.style.setProperty(property, `${(parseInt(computedValue, 10) || 0) + padding}px`);
    return () => {
        if (originalValue) {
            element.style.setProperty(property, originalValue);
        }
        else {
            element.style.removeProperty(property);
        }
    };
}
function NoScroll({ children }) {
    const rtl = useRTL();
    useLayoutEffect(() => {
        const cleanup = [];
        const { body, documentElement } = document;
        const scrollbar = Math.round(window.innerWidth - documentElement.clientWidth);
        if (scrollbar > 0) {
            cleanup.push(padScrollbar(body, scrollbar, rtl));
            const elements = body.getElementsByTagName("*");
            for (let i = 0; i < elements.length; i += 1) {
                const element = elements[i];
                if (isHTMLElement(element) &&
                    window.getComputedStyle(element).getPropertyValue("position") === "fixed" &&
                    !element.classList.contains(noScrollPadding)) {
                    cleanup.push(padScrollbar(element, scrollbar, rtl));
                }
            }
        }
        body.classList.add(noScroll);
        return () => {
            body.classList.remove(noScroll);
            cleanup.forEach((clean) => clean());
        };
    }, [rtl]);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, children);
}
const NoScrollModule = createModule(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .MODULE_NO_SCROLL */ .HE, NoScroll);

function cssPrefix$1(value) {
    return composePrefix(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .MODULE_PORTAL */ .SA, value);
}
function setAttribute(element, attribute, value) {
    const previousValue = element.getAttribute(attribute);
    element.setAttribute(attribute, value);
    return () => {
        if (previousValue) {
            element.setAttribute(attribute, previousValue);
        }
        else {
            element.removeAttribute(attribute);
        }
    };
}
function Portal({ children, animation, styles, className, on, portal, close }) {
    const [mounted, setMounted] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    const [visible, setVisible] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    const cleanup = react__WEBPACK_IMPORTED_MODULE_0__.useRef([]);
    const { setTimeout } = useTimeouts();
    const { subscribe } = useEvents();
    const reduceMotion = useMotionPreference();
    const animationDuration = !reduceMotion ? animation.fade : 0;
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        setMounted(true);
        return () => {
            setMounted(false);
            setVisible(false);
        };
    }, []);
    const handleClose = useEventCallback(() => {
        var _a;
        setVisible(false);
        (_a = on.exiting) === null || _a === void 0 ? void 0 : _a.call(on);
        setTimeout(() => {
            var _a;
            (_a = on.exited) === null || _a === void 0 ? void 0 : _a.call(on);
            close();
        }, animationDuration);
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => subscribe(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_CLOSE */ .t9, handleClose), [subscribe, handleClose]);
    const handleEnter = useEventCallback((node) => {
        var _a, _b, _c;
        node.scrollTop;
        setVisible(true);
        (_a = on.entering) === null || _a === void 0 ? void 0 : _a.call(on);
        const elements = (_c = (_b = node.parentNode) === null || _b === void 0 ? void 0 : _b.children) !== null && _c !== void 0 ? _c : [];
        for (let i = 0; i < elements.length; i += 1) {
            const element = elements[i];
            if (["TEMPLATE", "SCRIPT", "STYLE"].indexOf(element.tagName) === -1 && element !== node) {
                cleanup.current.push(setAttribute(element, "inert", "true"));
                cleanup.current.push(setAttribute(element, "aria-hidden", "true"));
            }
        }
        setTimeout(() => {
            var _a;
            (_a = on.entered) === null || _a === void 0 ? void 0 : _a.call(on);
        }, animationDuration);
    });
    const handleExit = useEventCallback(() => {
        cleanup.current.forEach((clean) => clean());
        cleanup.current = [];
    });
    const handleRef = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node) => {
        if (node) {
            handleEnter(node);
        }
        else {
            handleExit();
        }
    }, [handleEnter, handleExit]);
    return mounted
        ? (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: handleRef, className: clsx(className, cssClass("root"), cssClass(cssPrefix$1()), cssClass(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .CLASS_NO_SCROLL_PADDING */ .M9), visible && cssClass(cssPrefix$1("open"))), role: "presentation", "aria-live": "polite", style: {
                ...(animation.fade !== LightboxDefaultProps.animation.fade
                    ? { [cssVar("fade_animation_duration")]: `${animationDuration}ms` }
                    : null),
                ...(animation.easing.fade !== LightboxDefaultProps.animation.easing.fade
                    ? { [cssVar("fade_animation_timing_function")]: animation.easing.fade }
                    : null),
                ...styles.root,
            } }, children), portal.root || document.body)
        : null;
}
const PortalModule = createModule(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .MODULE_PORTAL */ .SA, Portal);

function Root({ children }) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, children);
}
const RootModule = createModule(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .MODULE_ROOT */ .lT, Root);

function cssPrefix(value) {
    return composePrefix(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .MODULE_TOOLBAR */ .hb, value);
}
function Toolbar({ toolbar: { buttons }, render: { buttonClose, iconClose }, styles }) {
    const { close, setToolbarWidth } = useController();
    const { setContainerRef, containerRect } = useContainerRect();
    useLayoutEffect(() => {
        setToolbarWidth(containerRect === null || containerRect === void 0 ? void 0 : containerRect.width);
    }, [setToolbarWidth, containerRect === null || containerRect === void 0 ? void 0 : containerRect.width]);
    const renderCloseButton = () => {
        if (buttonClose)
            return buttonClose();
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconButton, { key: _types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_CLOSE */ .t9, label: "Close", icon: CloseIcon, renderIcon: iconClose, onClick: close });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: setContainerRef, style: styles.toolbar, className: cssClass(cssPrefix()), ...stopNavigationEventsPropagation() }, buttons === null || buttons === void 0 ? void 0 : buttons.map((button) => (button === _types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_CLOSE */ .t9 ? renderCloseButton() : button))));
}
const ToolbarModule = createModule(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .MODULE_TOOLBAR */ .hb, Toolbar);

function renderNode(node, props) {
    var _a;
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(node.module.component, { key: node.module.name, ...props }, (_a = node.children) === null || _a === void 0 ? void 0 : _a.map((child) => renderNode(child, props)));
}
function mergeAnimation(defaultAnimation, animation = {}) {
    const { easing: defaultAnimationEasing, ...restDefaultAnimation } = defaultAnimation;
    const { easing, ...restAnimation } = animation;
    return {
        easing: { ...defaultAnimationEasing, ...easing },
        ...restDefaultAnimation,
        ...restAnimation,
    };
}
function Lightbox({ carousel, animation, render, toolbar, controller, on, plugins, slides, index, ...restProps }) {
    const { animation: defaultAnimation, carousel: defaultCarousel, render: defaultRender, toolbar: defaultToolbar, controller: defaultController, on: defaultOn, slides: defaultSlides, index: defaultIndex, plugins: defaultPlugins, ...restDefaultProps } = LightboxDefaultProps;
    const { config, augmentation } = withPlugins([
        createNode(PortalModule, [
            createNode(NoScrollModule, [
                createNode(ControllerModule, [
                    createNode(CarouselModule),
                    createNode(ToolbarModule),
                    createNode(NavigationModule),
                ]),
            ]),
        ]),
    ], plugins || defaultPlugins);
    const props = augmentation({
        animation: mergeAnimation(defaultAnimation, animation),
        carousel: { ...defaultCarousel, ...carousel },
        render: { ...defaultRender, ...render },
        toolbar: { ...defaultToolbar, ...toolbar },
        controller: { ...defaultController, ...controller },
        on: { ...defaultOn, ...on },
        ...restDefaultProps,
        ...restProps,
    });
    if (!props.open)
        return null;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(LightboxPropsProvider, { ...props },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(LightboxStateProvider, { slides: slides || defaultSlides, index: index || defaultIndex },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(TimeoutsProvider, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(EventsProvider, null, renderNode(createNode(RootModule, config), props))))));
}



/***/ }),

/***/ 7913:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Thumbnails)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(695);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8768);




const defaultThumbnailsProps = {
    ref: null,
    position: "bottom",
    width: 120,
    height: 80,
    border: 1,
    borderRadius: 4,
    padding: 4,
    gap: 16,
    imageFit: "contain",
    vignette: true,
};
const resolveThumbnailsProps = (thumbnails) => ({
    ...defaultThumbnailsProps,
    ...thumbnails,
});
function useThumbnailsProps() {
    const { thumbnails } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxProps */ .RD)();
    return resolveThumbnailsProps(thumbnails);
}

const cssPrefix = (value) => (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .composePrefix */ .Xl)(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_THUMBNAILS */ .dA, value);
const cssThumbnailPrefix = (value) => cssPrefix((0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .composePrefix */ .Xl)("thumbnail", value));

const VideoThumbnailIcon = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .U2)("VideoThumbnail", react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" }));
const UnknownThumbnailIcon = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .U2)("UnknownThumbnail", react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M23 18V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zM8.5 12.5l2.5 3.01L14.5 11l4.5 6H5l3.5-4.5z" }));
function renderThumbnail({ slide, render, rect, imageFit }) {
    var _a;
    const customThumbnail = (_a = render.thumbnail) === null || _a === void 0 ? void 0 : _a.call(render, { slide, render, rect, imageFit });
    if (customThumbnail) {
        return customThumbnail;
    }
    const thumbnailIconClass = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(cssThumbnailPrefix(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ELEMENT_ICON */ .vg));
    if (!(0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isImageSlide */ .QB)(slide)) {
        if (slide.type === "video") {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                "poster" in slide && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { alt: "", src: slide.poster, className: (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .clsx */ .Wy)((0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .CLASS_FULLSIZE */ .yS), (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(cssPrefix("contain_image"))) })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(VideoThumbnailIcon, { className: thumbnailIconClass })));
        }
    }
    else {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ImageSlide */ .P0, { slide: slide, render: render, rect: rect, imageFit: imageFit });
    }
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(UnknownThumbnailIcon, { className: thumbnailIconClass });
}
const activePrefix = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .makeComposePrefix */ .cO)("active");
const fadeInPrefix = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .makeComposePrefix */ .cO)("fadein");
const fadeOutPrefix = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .makeComposePrefix */ .cO)("fadeout");
const placeholderPrefix = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .makeComposePrefix */ .cO)("placeholder");
const DELAY = "delay";
const DURATION = "duration";
function Thumbnail({ slide, onClick, active, fadeIn, fadeOut, placeholder }) {
    const { render, styles } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxProps */ .RD)();
    const { width, height, imageFit } = useThumbnailsProps();
    const rect = { width, height };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .clsx */ .Wy)((0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .CLASS_FLEX_CENTER */ .aN), (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(cssThumbnailPrefix()), active && (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(cssThumbnailPrefix(activePrefix())), fadeIn && (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(cssThumbnailPrefix(fadeInPrefix())), fadeOut && (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(cssThumbnailPrefix(fadeOutPrefix())), placeholder && (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(cssThumbnailPrefix(placeholderPrefix()))), style: {
            ...(fadeIn
                ? {
                    [(0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssVar */ .gJ)(cssThumbnailPrefix(fadeInPrefix(DURATION)))]: `${fadeIn.duration}ms`,
                    [(0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssVar */ .gJ)(cssThumbnailPrefix(fadeInPrefix(DELAY)))]: `${fadeIn.delay}ms`,
                }
                : null),
            ...(fadeOut
                ? {
                    [(0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssVar */ .gJ)(cssThumbnailPrefix(fadeOutPrefix(DURATION)))]: `${fadeOut.duration}ms`,
                    [(0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssVar */ .gJ)(cssThumbnailPrefix(fadeOutPrefix(DELAY)))]: `${fadeOut.delay}ms`,
                }
                : null),
            ...styles.thumbnail,
        }, onClick: onClick }, slide && renderThumbnail({ slide, render, rect, imageFit })));
}

function isHorizontal(position) {
    return ["top", "bottom"].includes(position);
}
function boxSize(thumbnails, dimension, includeGap) {
    return dimension + 2 * (thumbnails.border + thumbnails.padding) + (includeGap ? thumbnails.gap : 0);
}
function ThumbnailsTrack({ visible, containerRef }) {
    const track = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const { carousel, styles } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxProps */ .RD)();
    const { slides, globalIndex, animation } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxState */ .oc)();
    const { publish, subscribe } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useEvents */ .hI)();
    const isRTL = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useRTL */ .Su)();
    const thumbnails = useThumbnailsProps();
    const { position, width, height, border, borderRadius, padding, gap, vignette } = thumbnails;
    const index = globalIndex;
    const animationDuration = (animation === null || animation === void 0 ? void 0 : animation.duration) || 0;
    const offset = (animationDuration > 0 && (animation === null || animation === void 0 ? void 0 : animation.increment)) || 0;
    const { prepareAnimation } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useAnimation */ ._7)(track, (snapshot) => ({
        keyframes: isHorizontal(position)
            ? [
                {
                    transform: `translateX(${(isRTL ? -1 : 1) * boxSize(thumbnails, width, true) * offset + snapshot}px)`,
                },
                { transform: "translateX(0)" },
            ]
            : [
                {
                    transform: `translateY(${boxSize(thumbnails, height, true) * offset + snapshot}px)`,
                },
                { transform: "translateY(0)" },
            ],
        duration: animationDuration,
        easing: animation === null || animation === void 0 ? void 0 : animation.easing,
    }));
    const handleControllerSwipe = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useEventCallback */ .$0)(() => {
        let animationOffset = 0;
        if (containerRef.current && track.current) {
            const containerRect = containerRef.current.getBoundingClientRect();
            const trackRect = track.current.getBoundingClientRect();
            animationOffset = isHorizontal(position)
                ? trackRect.left - containerRect.left - (containerRect.width - trackRect.width) / 2
                : trackRect.top - containerRect.top - (containerRect.height - trackRect.height) / 2;
        }
        prepareAnimation(animationOffset);
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cleanup */ .Eq)(subscribe(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_SWIPE */ .Tn, handleControllerSwipe)), [subscribe, handleControllerSwipe]);
    const { finite } = carousel;
    const preload = Math.max(Math.min(carousel.preload, slides.length - 1), 0);
    const items = [];
    if ((0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .hasSlides */ .Ju)(slides)) {
        if (offset < 0) {
            for (let i = index - preload + offset; i < index - preload; i += 1) {
                items.push({ slide: null, index: i, placeholder: true });
            }
        }
        for (let i = index - preload - (offset > 0 ? offset : 0); i < index; i += 1) {
            if (!(finite && i < 0)) {
                items.push({ slide: (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .getSlide */ .CT)(slides, i), index: i });
            }
            else {
                items.push({ slide: null, index: i, placeholder: true });
            }
        }
        items.push({ slide: (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .getSlide */ .CT)(slides, index), index });
        for (let i = index + 1; i <= index + preload - (offset < 0 ? offset : 0); i += 1) {
            if (!finite || i <= slides.length - 1) {
                items.push({ slide: (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .getSlide */ .CT)(slides, i), index: i });
            }
            else {
                items.push({ slide: null, index: i, placeholder: true });
            }
        }
        if (offset > 0) {
            for (let i = index + preload + 1; i <= index + preload + offset; i += 1) {
                items.push({ slide: null, index: i, placeholder: true });
            }
        }
    }
    const handleClick = (slideIndex) => () => {
        if (slideIndex > index) {
            publish(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_NEXT */ .Eb, { count: slideIndex - index });
        }
        else if (slideIndex < index) {
            publish(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_PREV */ .KN, { count: index - slideIndex });
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .clsx */ .Wy)((0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(cssPrefix("container")), (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .CLASS_FLEX_CENTER */ .aN)), style: {
            ...(!visible ? { display: "none" } : null),
            ...(width !== defaultThumbnailsProps.width
                ? { [(0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssVar */ .gJ)(cssThumbnailPrefix("width"))]: `${boxSize(thumbnails, width)}px` }
                : null),
            ...(height !== defaultThumbnailsProps.height
                ? { [(0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssVar */ .gJ)(cssThumbnailPrefix("height"))]: `${boxSize(thumbnails, height)}px` }
                : null),
            ...(border !== defaultThumbnailsProps.border
                ? { [(0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssVar */ .gJ)(cssThumbnailPrefix("border"))]: `${border}px` }
                : null),
            ...(borderRadius !== defaultThumbnailsProps.borderRadius
                ? { [(0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssVar */ .gJ)(cssThumbnailPrefix("border_radius"))]: `${borderRadius}px` }
                : null),
            ...(padding !== defaultThumbnailsProps.padding
                ? { [(0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssVar */ .gJ)(cssThumbnailPrefix("padding"))]: `${padding}px` }
                : null),
            ...(gap !== defaultThumbnailsProps.gap ? { [(0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssVar */ .gJ)(cssThumbnailPrefix("gap"))]: `${gap}px` } : null),
            ...styles.thumbnailsContainer,
        } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", { ref: track, style: styles.thumbnailsTrack, className: (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .clsx */ .Wy)((0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(cssPrefix("track")), (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .CLASS_FLEX_CENTER */ .aN)) }, items.map(({ slide, index: slideIndex, placeholder }) => {
            const fadeAnimationDuration = animationDuration / Math.abs(offset || 1);
            const fadeIn = (offset > 0 && slideIndex > index + preload - offset && slideIndex <= index + preload) ||
                (offset < 0 && slideIndex < index - preload - offset && slideIndex >= index - preload)
                ? {
                    duration: fadeAnimationDuration,
                    delay: ((offset > 0
                        ? slideIndex - (index + preload - offset)
                        : index - preload - offset - slideIndex) -
                        1) *
                        fadeAnimationDuration,
                }
                : undefined;
            const fadeOut = (offset > 0 && slideIndex < index - preload) || (offset < 0 && slideIndex > index + preload)
                ? {
                    duration: fadeAnimationDuration,
                    delay: (offset > 0
                        ? offset - (index - preload - slideIndex)
                        : -offset - (slideIndex - (index + preload))) * fadeAnimationDuration,
                }
                : undefined;
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Thumbnail, { key: slideIndex, slide: slide, active: slideIndex === index, fadeIn: fadeIn, fadeOut: fadeOut, placeholder: Boolean(placeholder), onClick: handleClick(slideIndex) }));
        })),
        vignette && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(cssPrefix("vignette")) })));
}

const ThumbnailsContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const useThumbnails = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .makeUseContext */ .Fy)("useThumbnails", "ThumbnailsContext", ThumbnailsContext);
function ThumbnailsContextProvider({ children, ...props }) {
    const [visible, setVisible] = react__WEBPACK_IMPORTED_MODULE_0__.useState(true);
    const containerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const { ref, position } = resolveThumbnailsProps(props.thumbnails);
    const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
        visible,
        show: () => setVisible(true),
        hide: () => setVisible(false),
    }), [visible]);
    react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(ref, () => context, [context]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_js__WEBPACK_IMPORTED_MODULE_1__/* .LightboxPropsProvider */ .OV, { ...props },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThumbnailsContext.Provider, { value: context },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: containerRef, className: (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .clsx */ .Wy)((0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(cssPrefix()), (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(cssPrefix(`${position}`))) },
                ["start", "top"].includes(position) && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThumbnailsTrack, { containerRef: containerRef, visible: visible })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(cssPrefix("wrapper")) }, children),
                ["end", "bottom"].includes(position) && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThumbnailsTrack, { containerRef: containerRef, visible: visible }))))));
}

const thumbnailsIcon = () => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { strokeWidth: 2, stroke: "currentColor", strokeLinejoin: "round", fill: "none", d: "M3 5l18 0l0 14l-18 0l0-14z" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M5 14h4v3h-4zM10 14h4v3h-4zM15 14h4v3h-4z" })));
const ThumbnailsVisible = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .U2)("ThumbnailsVisible", thumbnailsIcon());
const ThumbnailsHidden = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .createIconDisabled */ .TX)("ThumbnailsHidden", thumbnailsIcon());
function ThumbnailsButton() {
    const { visible, show, hide } = useThumbnails();
    const { render } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxProps */ .RD)();
    if (render.buttonThumbnails) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, render.buttonThumbnails({ visible, show, hide }));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_js__WEBPACK_IMPORTED_MODULE_1__/* .IconButton */ .hU, { label: visible ? "Hide thumbnails" : "Show thumbnails", icon: visible ? ThumbnailsVisible : ThumbnailsHidden, renderIcon: visible ? render.iconThumbnailsVisible : render.iconThumbnailsHidden, onClick: visible ? hide : show }));
}

function Thumbnails({ augment, contains, append, addParent }) {
    augment(({ thumbnails: thumbnailsProps, toolbar, ...restProps }) => {
        const thumbnails = resolveThumbnailsProps(thumbnailsProps);
        return {
            toolbar: (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .addToolbarButton */ .wQ)(toolbar, _types_js__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_THUMBNAILS */ .dA, thumbnails.showToggle ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThumbnailsButton, null) : null),
            thumbnails,
            ...restProps,
        };
    });
    const module = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .createModule */ .l6)(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_THUMBNAILS */ .dA, ThumbnailsContextProvider);
    if (contains(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_FULLSCREEN */ .zr)) {
        append(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_FULLSCREEN */ .zr, module);
    }
    else {
        addParent(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .MODULE_CONTROLLER */ .l4, module);
    }
}




/***/ }),

/***/ 8768:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $L: () => (/* binding */ SLIDE_STATUS_PLACEHOLDER),
/* harmony export */   Bm: () => (/* binding */ EVENT_ON_KEY_UP),
/* harmony export */   Eb: () => (/* binding */ ACTION_NEXT),
/* harmony export */   HE: () => (/* binding */ MODULE_NO_SCROLL),
/* harmony export */   J1: () => (/* binding */ activeSlideStatus),
/* harmony export */   KN: () => (/* binding */ ACTION_PREV),
/* harmony export */   M9: () => (/* binding */ CLASS_NO_SCROLL_PADDING),
/* harmony export */   N4: () => (/* binding */ EVENT_ON_POINTER_MOVE),
/* harmony export */   NH: () => (/* binding */ VK_ARROW_RIGHT),
/* harmony export */   NZ: () => (/* binding */ EVENT_ON_POINTER_DOWN),
/* harmony export */   Op: () => (/* binding */ MODULE_NAVIGATION),
/* harmony export */   PU: () => (/* binding */ VK_ESCAPE),
/* harmony export */   S2: () => (/* binding */ EVENT_ON_POINTER_UP),
/* harmony export */   SA: () => (/* binding */ MODULE_PORTAL),
/* harmony export */   Sl: () => (/* binding */ VK_ARROW_LEFT),
/* harmony export */   Tf: () => (/* binding */ CLASS_NO_SCROLL),
/* harmony export */   Tn: () => (/* binding */ ACTION_SWIPE),
/* harmony export */   Vt: () => (/* binding */ EVENT_ON_POINTER_CANCEL),
/* harmony export */   Xe: () => (/* binding */ SLIDE_STATUS_LOADING),
/* harmony export */   Zv: () => (/* binding */ SLIDE_STATUS_COMPLETE),
/* harmony export */   aN: () => (/* binding */ CLASS_FLEX_CENTER),
/* harmony export */   bg: () => (/* binding */ ELEMENT_BUTTON),
/* harmony export */   c3: () => (/* binding */ UNKNOWN_ACTION_TYPE),
/* harmony export */   dA: () => (/* binding */ PLUGIN_THUMBNAILS),
/* harmony export */   ds: () => (/* binding */ EVENT_ON_KEY_DOWN),
/* harmony export */   fS: () => (/* binding */ SLIDE_STATUS_ERROR),
/* harmony export */   hb: () => (/* binding */ MODULE_TOOLBAR),
/* harmony export */   j3: () => (/* binding */ IMAGE_FIT_CONTAIN),
/* harmony export */   k0: () => (/* binding */ MODULE_CAROUSEL),
/* harmony export */   l4: () => (/* binding */ MODULE_CONTROLLER),
/* harmony export */   lT: () => (/* binding */ MODULE_ROOT),
/* harmony export */   pE: () => (/* binding */ EVENT_ON_POINTER_LEAVE),
/* harmony export */   rO: () => (/* binding */ IMAGE_FIT_COVER),
/* harmony export */   t9: () => (/* binding */ ACTION_CLOSE),
/* harmony export */   vg: () => (/* binding */ ELEMENT_ICON),
/* harmony export */   yS: () => (/* binding */ CLASS_FULLSIZE),
/* harmony export */   yq: () => (/* binding */ EVENT_ON_WHEEL),
/* harmony export */   zr: () => (/* binding */ PLUGIN_FULLSCREEN)
/* harmony export */ });
/* unused harmony exports ACTIVE_SLIDE_COMPLETE, ACTIVE_SLIDE_ERROR, ACTIVE_SLIDE_LOADING, ACTIVE_SLIDE_PLAYING, PLUGIN_CAPTIONS, PLUGIN_COUNTER, PLUGIN_DOWNLOAD, PLUGIN_INLINE, PLUGIN_SHARE, PLUGIN_SLIDESHOW, PLUGIN_ZOOM, SLIDE_STATUS_PLAYING */
const MODULE_CAROUSEL = "carousel";
const MODULE_CONTROLLER = "controller";
const MODULE_NAVIGATION = "navigation";
const MODULE_NO_SCROLL = "no-scroll";
const MODULE_PORTAL = "portal";
const MODULE_ROOT = "root";
const MODULE_TOOLBAR = "toolbar";
const PLUGIN_CAPTIONS = "captions";
const PLUGIN_COUNTER = "counter";
const PLUGIN_DOWNLOAD = "download";
const PLUGIN_FULLSCREEN = "fullscreen";
const PLUGIN_INLINE = "inline";
const PLUGIN_SHARE = "share";
const PLUGIN_SLIDESHOW = "slideshow";
const PLUGIN_THUMBNAILS = "thumbnails";
const PLUGIN_ZOOM = "zoom";
const SLIDE_STATUS_LOADING = "loading";
const SLIDE_STATUS_PLAYING = "playing";
const SLIDE_STATUS_ERROR = "error";
const SLIDE_STATUS_COMPLETE = "complete";
const SLIDE_STATUS_PLACEHOLDER = "placeholder";
const activeSlideStatus = (status) => `active-slide-${status}`;
const ACTIVE_SLIDE_LOADING = activeSlideStatus(SLIDE_STATUS_LOADING);
const ACTIVE_SLIDE_PLAYING = activeSlideStatus(SLIDE_STATUS_PLAYING);
const ACTIVE_SLIDE_ERROR = activeSlideStatus(SLIDE_STATUS_ERROR);
const ACTIVE_SLIDE_COMPLETE = activeSlideStatus(SLIDE_STATUS_COMPLETE);
const CLASS_FULLSIZE = "fullsize";
const CLASS_FLEX_CENTER = "flex_center";
const CLASS_NO_SCROLL = "no_scroll";
const CLASS_NO_SCROLL_PADDING = "no_scroll_padding";
const ACTION_PREV = "prev";
const ACTION_NEXT = "next";
const ACTION_SWIPE = "swipe";
const ACTION_CLOSE = "close";
const EVENT_ON_POINTER_DOWN = "onPointerDown";
const EVENT_ON_POINTER_MOVE = "onPointerMove";
const EVENT_ON_POINTER_UP = "onPointerUp";
const EVENT_ON_POINTER_LEAVE = "onPointerLeave";
const EVENT_ON_POINTER_CANCEL = "onPointerCancel";
const EVENT_ON_KEY_DOWN = "onKeyDown";
const EVENT_ON_KEY_UP = "onKeyUp";
const EVENT_ON_WHEEL = "onWheel";
const VK_ESCAPE = "Escape";
const VK_ARROW_LEFT = "ArrowLeft";
const VK_ARROW_RIGHT = "ArrowRight";
const ELEMENT_BUTTON = "button";
const ELEMENT_ICON = "icon";
const IMAGE_FIT_CONTAIN = "contain";
const IMAGE_FIT_COVER = "cover";
const UNKNOWN_ACTION_TYPE = "Unknown action type";




/***/ })

};
;