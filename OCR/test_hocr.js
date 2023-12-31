/*! For license information please see hocr.fullscreen.js.LICENSE.txt */
(()=>{
    var e = {
        144: e=>{
            self,
            e.exports = (()=>{
                var e = {
                    788: e=>{
                        "use strict";
                        e.exports = function(e) {
                            var t = [];
                            return t.toString = function() {
                                return this.map((function(t) {
                                    var n = e(t);
                                    return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n
                                }
                                )).join("")
                            }
                            ,
                            t.i = function(e, n, r) {
                                "string" == typeof e && (e = [[null, e, ""]]);
                                var o = {};
                                if (r)
                                    for (var i = 0; i < this.length; i++) {
                                        var a = this[i][0];
                                        null != a && (o[a] = !0)
                                    }
                                for (var s = 0; s < e.length; s++) {
                                    var c = [].concat(e[s]);
                                    r && o[c[0]] || (n && (c[2] ? c[2] = "".concat(n, " and ").concat(c[2]) : c[2] = n),
                                    t.push(c))
                                }
                            }
                            ,
                            t
                        }
                    }
                    ,
                    811: e=>{
                        "use strict";
                        function t(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var n = 0, r = new Array(t); n < t; n++)
                                r[n] = e[n];
                            return r
                        }
                        e.exports = function(e) {
                            var n, r = (4,
                            function(e) {
                                if (Array.isArray(e))
                                    return e
                            }(n = e) || function(e, t) {
                                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                                    var n = []
                                      , r = !0
                                      , o = !1
                                      , i = void 0;
                                    try {
                                        for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value),
                                        4 !== n.length); r = !0)
                                            ;
                                    } catch (e) {
                                        o = !0,
                                        i = e
                                    } finally {
                                        try {
                                            r || null == s.return || s.return()
                                        } finally {
                                            if (o)
                                                throw i
                                        }
                                    }
                                    return n
                                }
                            }(n) || function(e, n) {
                                if (e) {
                                    if ("string" == typeof e)
                                        return t(e, 4);
                                    var r = Object.prototype.toString.call(e).slice(8, -1);
                                    return "Object" === r && e.constructor && (r = e.constructor.name),
                                    "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? t(e, 4) : void 0
                                }
                            }(n) || function() {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()), o = r[1], i = r[3];
                            if ("function" == typeof btoa) {
                                var a = btoa(unescape(encodeURIComponent(JSON.stringify(i))))
                                  , s = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a)
                                  , c = "/*# ".concat(s, " */")
                                  , l = i.sources.map((function(e) {
                                    return "/*# sourceURL=".concat(i.sourceRoot || "").concat(e, " */")
                                }
                                ));
                                return [o].concat(l).concat([c]).join("\n")
                            }
                            return [o].join("\n")
                        }
                    }
                    ,
                    278: (e,t,n)=>{
                        function r(e, ...t) {
                            e.debug && console.log("# ", new Date, ...t)
                        }
                        const o = new (n(635));
                        class i {
                            static isHocrElement(e, t, n={}) {
                                return void 0 === n._isHocrElement && (n._isHocrElement = !!Array.from(e.classList).find((e=>e.startsWith("ocr")))),
                                n._isHocrElement
                            }
                            static getHocrProperties(e, t={}, n={}) {
                                let {propertyParser: r} = t;
                                return r || (r = o),
                                n._hocr || (i.isHocrElement(e, t, n) ? n._hocr = r.parse(e.getAttribute("title")) : n._hocr = {}),
                                n._hocr
                            }
                            static queryHocr(...e) {
                                return Array.from(i.queryHocrAll(...e))[0]
                            }
                            static queryHocrAll(e, t={}, n={}) {
                                (Array.isArray(t) || "string" == typeof t) && (t = {
                                    class: t
                                }),
                                t.tag = t.tag || "*",
                                t.clauses = t.clauses || "",
                                t.title && (t.clauses += `[title*="${t.title}"]`),
                                t.class = t.class || "",
                                "string" == typeof t.class && (t.class = [t.class]);
                                let o = t.class.map((function(e) {
                                    return 0 === e.indexOf("ocr") ? e : "" === e ? "ocr" : 0 !== e.indexOf("x_") ? `ocr_ ${e}` : `ocr ${e}`
                                }
                                )).map((function(e) {
                                    return `${t.tag}[class^="${e}"]${t.clauses}`
                                }
                                )).join(",");
                                r(n, "findByOcrClass:", o);
                                const i = e.querySelectorAll(o);
                                let a = Array.from(i);
                                return t.terminal && (a = a.filter((function(e) {
                                    if (!e.querySelector('*[class^="ocr"]'))
                                        return e
                                }
                                ))),
                                t.nonTerminal && (a = a.filter((function(e) {
                                    if (e.querySelector('*[class^="ocr"]'))
                                        return e
                                }
                                ))),
                                t.filter && (r(n, {
                                    query: t
                                }),
                                a = a.filter(t.filter)),
                                Object.create(a, i.prototype)
                            }
                            static extendPrototypes({Element: e, Document: t}, n) {
                                [e.prototype, t.prototype].forEach((e=>{
                                    ["queryHocr", "queryHocrAll"].forEach((t=>{
                                        e[t] = function(e={}, n) {
                                            const r = e.context || this;
                                            return i[t](r, e, n)
                                        }
                                    }
                                    )),
                                    Object.defineProperty(e, "_hocr", {
                                        enumerable: !1,
                                        writable: !0
                                    }),
                                    Object.defineProperty(e, "hocr", {
                                        get() {
                                            return i.getHocrProperties(this, n, this)
                                        }
                                    }),
                                    Object.defineProperty(e, "_isHocrElement", {
                                        enumerable: !0,
                                        writable: !0
                                    }),
                                    Object.defineProperty(e, "isHocrElement", {
                                        get() {
                                            return i.isHocrElement(this, n, this)
                                        }
                                    })
                                }
                                )),
                                i._initialized = !0
                            }
                        }
                        e.exports = i
                    }
                    ,
                    865: (e,t,n)=>{
                        const r = n(278)
                          , o = n(635);
                        e.exports = {
                            HocrDOM: r,
                            HocrPropertyParser: o
                        }
                    }
                    ,
                    635: e=>{
                        const t = ";";
                        e.exports = class {
                            constructor(e={}) {
                                Object.assign(this, {
                                    debug: !1,
                                    allowUnknown: !1,
                                    allowUnknownEngineSpecific: !0,
                                    allowInvalidNumbers: !1,
                                    disableCardinalityChecks: !1
                                }, e),
                                this.parsers = {
                                    baseline: this.numberParser([parseFloat, parseInt]),
                                    bbox: this.numberParser(parseInt, {
                                        min: 0
                                    }, {
                                        length: 4
                                    }),
                                    cflow: this.stringParser({
                                        collapse: !0
                                    }),
                                    cuts: e=>e.map((e=>this.numberParser(parseInt)(e.split(",")))),
                                    hardbreak: this.booleanParser({
                                        collapse: !0
                                    }),
                                    image: this.stringParser({
                                        collapse: !0
                                    }),
                                    imagemd5: this.stringParser({
                                        collapse: !0
                                    }),
                                    lpageno: this.stringParser({
                                        collapse: !0
                                    }),
                                    ppageno: this.numberParser(parseInt, {
                                        min: 0
                                    }, {
                                        collapse: !0
                                    }),
                                    nlp: this.numberParser(parseFloat, {
                                        min: 0,
                                        max: 100
                                    }),
                                    order: this.numberParser(parseInt, {
                                        min: 0
                                    }, {
                                        collapse: !0
                                    }),
                                    poly: this.numberParser(parseInt, {
                                        min: 0
                                    }, {
                                        minLength: 4,
                                        modulo: 2
                                    }),
                                    scan_res: this.numberParser(parseInt, {
                                        min: 0
                                    }),
                                    textangle: this.numberParser(parseFloat, {}, {
                                        collapse: !0
                                    }),
                                    x_bboxes: this.numberParser(parseInt, {
                                        min: 0
                                    }),
                                    x_font: this.stringParser({
                                        collapse: !0
                                    }),
                                    x_fsize: this.numberParser(parseInt, {
                                        min: 0
                                    }),
                                    x_confs: this.numberParser(parseFloat, {
                                        min: 0,
                                        max: 100
                                    }),
                                    x_scanner: this.stringParser(),
                                    x_source: this.stringParser(),
                                    x_wconf: this.numberParser(parseFloat, {
                                        min: 0,
                                        max: 100
                                    })
                                }
                            }
                            checkCardinality(e, {length: t=-1, modulo: n=-1, collapse: r=!1, minLength: o=0, maxLength: i=Number.MAX_VALUE}) {
                                if (this.disableCardinalityChecks)
                                    return e;
                                if (r && (t = 1),
                                t > -1 && e.length != t)
                                    throw Error(`Incorrect number of arguments (${e.length} != ${t})`);
                                if (n > -1 && t % n > 0)
                                    throw Error(`Number of arguments not a multiple of ${n} (${e.length})`);
                                if (r)
                                    return e[0];
                                if (e.length < o)
                                    throw Error(`Not enough arguments (${e.length} < ${o})`);
                                if (e.length > i)
                                    throw Error(`Too many arguments (${e.length} > ${o})`);
                                return e
                            }
                            booleanParser(e={}) {
                                return t=>this.checkCardinality(t.map((e=>Boolean.valueOf()(e))), e)
                            }
                            stringParser(e={}) {
                                return t=>this.checkCardinality(t, e)
                            }
                            numberParser(e, {min: t=-Number.MAX_VALUE, max: n=Number.MAX_VALUE}={}, r={}) {
                                return Array.isArray(e) || (e = [e]),
                                o=>{
                                    let i = 0;
                                    return this.checkCardinality(o.map((r=>{
                                        let o = e[i++ % e.length](r);
                                        if (!this.allowInvalidNumbers) {
                                            if (Number.isNaN(o))
                                                throw Error(`Not a number: '${r}'`);
                                            if (o < t || o > n)
                                                throw Error(`Not in range [${t}..${n}]: '${r}'`)
                                        }
                                        return o
                                    }
                                    )), r)
                                }
                            }
                            parse(e) {
                                let n = this.tokenize(e);
                                this.debug && console.log(`tokenize('${e})`, n);
                                let r = {};
                                for (let o = 0; o < n.length; o++) {
                                    let i, a = n[o];
                                    if (a in this.parsers)
                                        i = this.parsers[a];
                                    else {
                                        if (!(this.allowUnknown || a.startsWith("x_") && this.allowUnknownEngineSpecific))
                                            throw Error(`Unknown property '${a}' in '${e}'`);
                                        i = this.stringParser()
                                    }
                                    let s, c = [];
                                    for (s = o + 1; s < n.length && n[s] !== t; s++)
                                        c.push(n[s]);
                                    o = s;
                                    try {
                                        c = i(c)
                                    } catch (t) {
                                        throw console.log(`Parse error in '${e}'`),
                                        t
                                    }
                                    r[a] = c
                                }
                                return this.debug && console.log("propertyMap", r),
                                r
                            }
                            tokenize(e) {
                                let n = []
                                  , r = e.split("")
                                  , o = !1
                                  , i = !1
                                  , a = []
                                  , s = ""
                                  , c = ()=>{
                                    n.push(a.join("")),
                                    a = []
                                }
                                ;
                                for (let e = 0; e < r.length; e++) {
                                    let l = e > 0 ? r[e - 1] : "";
                                    s = r[e],
                                    "'" !== s || "\\" == l || o ? '"' !== s || "\\" == l || i ? i || o || s !== t ? i || o || !s.match(/\s/) ? a.push(s) : a.length > 0 && c() : (a.length > 0 && c(),
                                    n[n.length - 1] !== t && n.push(t)) : (o && c(),
                                    o = !o) : (i && c(),
                                    i = !i)
                                }
                                return a.length > 0 && c(),
                                n
                            }
                        }
                    }
                    ,
                    524: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>s
                        });
                        var r = n(811)
                          , o = n.n(r)
                          , i = n(788)
                          , a = n.n(i)()(o());
                        a.push([e.id, ".hocrjs-toolbar{position:fixed;z-index:1;top:0;height:100%;border:none}.hocrjs-toolbar .toggler{float:left;position:fixed;left:0;font-family:monospace;color:#fff;background:#333;height:100vh;width:1em}.hocrjs-toolbar .toggler .toggler-inner{font-size:1.5em;top:40vh;position:fixed}.hocrjs-toolbar .toggler .toggler-hide{display:none}.hocrjs-toolbar .toggler .toggler-show{display:block}.hocrjs-toolbar .wrapper{position:fixed;margin-left:1em;background-color:rgba(180,180,190,0.85);overflow:hidden;left:-32em;transition:all 0.5s ease;height:100vh}.hocrjs-toolbar.expanded{border-right:3px solid #333}.hocrjs-toolbar.expanded .wrapper{padding-left:.5em;padding-right:.5em;width:15em;left:0}.hocrjs-toolbar.expanded .toggler-show{display:none}.hocrjs-toolbar.expanded .toggler-hide{display:block}.hocrjs-toolbar ul.features{list-style-type:none;padding:0}.hocrjs-toolbar ul.features li{background-color:#fcc;margin-bottom:2px;padding:5px 0}.hocrjs-toolbar ul.features li:before{content:'✗ '}.hocrjs-toolbar ul.features li.checked{background-color:#cfc}.hocrjs-toolbar ul.features li.checked:before{content:'✓ '}.hocrjs-toolbar ul.features li input[type='checkbox']{display:none}.hocrjs-toolbar ul.features li label{width:100%}.hocrjs-toolbar summary{font-size:120%}.hocrjs-toolbar summary span.font{font-size:100%}.hocrjs-toolbar select.font{width:80%;font-size:110%}\n", "", {
                            version: 3,
                            sources: ["webpack://./src/components/HocrToolbar/style.scss", "webpack://./src/_variables.scss"],
                            names: [],
                            mappings: "AAEA,gBACE,cAAe,CACf,SAAU,CACV,KAAM,CACN,WAAY,CACZ,WAAY,CALd,yBAOI,UAAW,CACX,cAAe,CACf,MAAO,CACP,qBAAsB,CACtB,UCSyB,CDRzB,eCSuB,CDRvB,YAAa,CACb,SAAU,CAdd,wCAgBM,eAAgB,CAChB,QAAS,CACT,cAAe,CAlBrB,uCAoBoB,YAAY,CApBhC,uCAqBoB,aAAa,CArBjC,yBAwBI,cAAe,CACf,eAAgB,CAChB,uCCPqC,CDQrC,eAAgB,CAChB,UAAW,CACX,wBAAyB,CACzB,YAAa,CA9BjB,yBAiCI,2BCZuB,CDrB3B,kCAmCM,iBAAkB,CAClB,kBAAmB,CACnB,UAAW,CACX,MAAO,CAtCb,uCAwCoB,YAAY,CAxChC,uCAyCoB,aAAa,CAzCjC,4BA4CI,oBAAqB,CACrB,SAAU,CA7Cd,+BAgDM,qBC/BmB,CDgCnB,iBAAkB,CAClB,aAAc,CAlDpB,sCAmDiB,YAAS,CAAK,uCAChB,qBClCC,CAAO,8CDoCP,YAAY,CAAA,sDAEhB,YAA4B,CAAA,qCAClC,UAAe,CAAA,wBAMnB,cACa,CAAA,kCACP,cACS,CAAA,4BAGT,SACG,CAAA,cACI",
                            sourcesContent: ["@import '../../variables';\n\n.hocrjs-toolbar {\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  height: 100%;\n  border: none;\n  .toggler {\n    float: left;\n    position: fixed;\n    left: 0;\n    font-family: monospace;\n    color: $color-toolbar-toggler;\n    background: $color-toolbar-border;\n    height: 100vh;\n    width: 1em;\n    .toggler-inner {\n      font-size: 1.5em;\n      top: 40vh;\n      position: fixed;\n    }\n    .toggler-hide { display:none; }\n    .toggler-show { display:block; }\n  }\n  .wrapper {\n    position: fixed;\n    margin-left: 1em;\n    background-color: $color-toolbar-bg;\n    overflow: hidden;\n    left: -32em;\n    transition: all 0.5s ease;\n    height: 100vh;\n  }\n  &.expanded {\n    border-right: $border-width solid $color-toolbar-border;\n    .wrapper { \n      padding-left: .5em;\n      padding-right: .5em;\n      width: 15em;\n      left: 0;\n    }\n    .toggler-show { display:none; }\n    .toggler-hide { display:block; }\n  }\n  ul.features {\n    list-style-type: none;\n    padding: 0;\n    // width: 19em;\n    li {\n      background-color: $color-unchecked;\n      margin-bottom: 2px;\n      padding: 5px 0;\n      &:before { content: '✗ '; }\n      &.checked {\n        background-color: $color-checked;\n        &:before { content: '✓ '; }\n      }\n      input[type='checkbox'] { display: none; }\n      label { width: 100%; }\n    }\n  }\n  input.zoom {\n    // width: 19em;\n  }\n  summary {\n    font-size: 120%;\n    span.font {\n      font-size: 100%;\n    }\n  }\n  select.font {\n    width: 80%;\n    font-size: 110%;\n  }\n}\n\n", "/*\n * Copyright (c) 2016-2017 Konstantin Baierer\n *\n * This software may be modified and distributed under the terms\n * of the MIT license.  See the LICENSE file for details.\n */\n\n$selector-ocr-page: '.ocr_page';\n$selector-ocr-classes: '*[class^=\"ocr\"]';\n$selector-ocr-line: '#{$selector-ocr-classes}[class*=\"line\"]';\n$selector-ocr-par: '.ocr_par';\n$selector-ocr-carea: '.ocr_carea';\n$selector-ocr-blank: '#{$selector-ocr-classes}.hocrjs-blank';\n$selector-ocr-inline-not-blank: '.ocr_line #{$selector-ocr-classes}:not(.hocrjs-blank)';\n$selector-ocr-inline-blank: '.ocr_line #{$selector-ocr-classes}.hocrjs-blank';\n$selector-ocr-not-page: '#{$selector-ocr-classes}:not(.ocr_page)';\n\n$border-width: 3px;\n$color-transparent: rgba(0,0,0,0);\n$color-unchecked: #ffcccc;\n$color-checked: #ccffcc;\n$color-toolbar-bg: rgba(180,180,190,0.85);\n$color-toolbar-toggler: white;\n$color-toolbar-border: #333;\n\n$color-highlight-page: #8B4513;\n$color-highlight-not-page: red;\n$color-highlight-inline-not-blank: green;\n$color-highlight-inline-blank: lighten(green, 30%);\n$color-highlight-carea: blue;\n$color-highlight-par: purple;\n$color-highlight-line: gold;\n\n@mixin transform($args) {\n  -webkit-transform: $args;\n  -ms-transform: $args;\n  transform: $args;\n}\n\n@mixin tooltip {\n  display: block;\n  background: white;\n  color: black !important;\n  border: 1px solid black;\n  font-family: monospace;\n  position: absolute;\n  font-size: 12px;\n  font-weight: bold;\n  line-height: 100%;\n  height: 15px;\n  top: -15px;\n}\n\n@mixin highlight-area($selector, $color) {\n  #{$selector} {\n    border: $border-width solid $color;\n    &:hover {\n      background: rgba(lighten($color, 30%), 0.2);\n    }\n  }\n}\n\n"],
                            sourceRoot: ""
                        }]);
                        const s = a
                    }
                    ,
                    892: (e,t,n)=>{
                        "use strict";
                        n.d(t, {
                            Z: ()=>s
                        });
                        var r = n(811)
                          , o = n.n(r)
                          , i = n(788)
                          , a = n.n(i)()(o());
                        a.push([e.id, '.hocr-viewer.hocr-viewer-toolbar-enabled>.hocr-viewer-container{transform:rotate(0);margin-left:1em}.hocr-viewer .hocr-viewer-container{min-height:100vh;position:relative !important;-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg)}.hocr-viewer .hocr-viewer-container>div{overflow:auto}.hocr-viewer .hocr-viewer-container p{margin:0}.hocr-viewer *[class^="ocr"]:hover::before{display:none}.hocr-viewer.hocr-viewer-feature-Layout *[class^="ocr"]{position:fixed;white-space:nowrap;justify-content:left;align-items:center}.hocr-viewer.hocr-viewer-feature-Layout.hocr-viewer-feature-Tooltip *[class^="ocr"]:hover::before{display:block;background:white;color:black !important;border:1px solid black;font-family:monospace;position:absolute;font-size:12px;font-weight:bold;line-height:100%;height:15px;top:-15px}.hocr-viewer.hocr-viewer-feature-Highlight{margin:-1px}.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightNotPage *[class^="ocr"]:not(.ocr_page){border:3px solid red}.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightNotPage *[class^="ocr"]:not(.ocr_page):hover{background:rgba(255,153,153,0.2)}.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightPage .ocr_page{border:3px solid #8b4513}.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightPage .ocr_page:hover{background:rgba(231,143,80,0.2)}.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightInlineNotBlank .ocr_line *[class^="ocr"]:not(.hocrjs-blank){border:3px solid green}.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightInlineNotBlank .ocr_line *[class^="ocr"]:not(.hocrjs-blank):hover{background:rgba(26,255,26,0.2)}.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightInlineBlank .ocr_line *[class^="ocr"].hocrjs-blank{border:3px solid #1aff1a}.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightInlineBlank .ocr_line *[class^="ocr"].hocrjs-blank:hover{background:rgba(179,255,179,0.2)}.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightLine *[class^="ocr"][class*="line"]{border:3px solid gold}.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightLine *[class^="ocr"][class*="line"]:hover{background:rgba(255,239,153,0.2)}.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightPar .ocr_par{border:3px solid purple}.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightPar .ocr_par:hover{background:rgba(255,26,255,0.2)}.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightCarea .ocr_carea{border:3px solid blue}.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightCarea .ocr_carea:hover{background:rgba(153,153,255,0.2)}.hocr-viewer.hocr-viewer-feature-BackgroundImage{background-repeat:no-repeat}.hocr-viewer.hocr-viewer-feature-BackgroundImage .ocr_page{background-size:contain}.hocr-viewer.hocr-viewer-feature-DisableEmStrong em{font-style:normal}.hocr-viewer.hocr-viewer-feature-DisableEmStrong strong{font-weight:normal}.hocr-viewer.hocr-viewer-feature-TransparentText .ocr_page{color:rgba(0,0,0,0)}\n', "", {
                            version: 3,
                            sources: ["webpack://./src/components/HocrViewer/style.scss", "webpack://./src/_variables.scss"],
                            names: [],
                            mappings: "AASA,gEAIM,mBAAoB,CACpB,eAAgB,CALtB,oCAUI,gBAAiB,CACjB,4BAA6B,CCc/B,8BDXiC,CCYjC,0BDZiC,CCajC,sBDbiC,CAdnC,wCAkBM,aAAc,CAlBpB,sCAqBQ,QAAS,CArBjB,2CA4BM,YAAa,CA5BnB,wDAkCM,cAAe,CACf,kBAAmB,CAGnB,oBAAqB,CACrB,kBAAmB,CAvCzB,kGC+BE,aAAc,CACd,gBAAiB,CACjB,sBAAuB,CACvB,sBAAuB,CACvB,qBAAsB,CACtB,iBAAkB,CAClB,cAAe,CACf,gBAAiB,CACjB,gBAAiB,CACjB,WAAY,CACZ,SAAU,CDzCZ,2CAoDI,WAAY,CApDhB,+GC8CI,oBA7B0B,CDjB9B,qHCgDM,gCAAqC,CDhD3C,uFC8CI,wBA9B0B,CDhB9B,6FCgDM,+BAAqC,CDhD3C,oIC8CI,sBA5BoC,CDlBxC,0ICgDM,8BAAqC,CDhD3C,2HC8CI,wBA3B8C,CDnBlD,iICgDM,gCAAqC,CDhD3C,4GC8CI,qBAxBuB,CDtB3B,kHCgDM,gCAAqC,CDhD3C,qFC8CI,uBAzBwB,CDrB5B,2FCgDM,+BAAqC,CDhD3C,yFC8CI,qBA1BwB,CDpB5B,+FCgDM,gCAAqC,CDhD3C,iDA+DI,2BAA4B,CA/DhC,2DAkEM,uBAAwB,CAlE9B,oDAwES,iBAAkB,CAxE3B,wDAyEa,kBAAmB,CAzEhC,2DA8EM,mBCrE2B",
                            sourcesContent: ["/*\n * Copyright (c) 2016-2017 Konstantin Baierer\n *\n * This software may be modified and distributed under the terms\n * of the MIT license.  See the LICENSE file for details.\n */\n\n@import '../../variables.scss';\n\n.hocr-viewer {\n\n  &.hocr-viewer-toolbar-enabled {\n    > .hocr-viewer-container {\n      transform: rotate(0);\n      margin-left: 1em;\n    }\n  }\n\n  .hocr-viewer-container {\n    min-height: 100vh;\n    position: relative !important;\n    // NOTE: This is important otherwise fixed will be relative to page not\n    // containing element\n    @include transform(rotate(0deg));\n    /* .transform(scale(0.7)); */\n    /* position: relative !important; */\n    & > div {\n      overflow: auto;\n    }\n    p {\n        margin: 0;\n    }\n  }\n\n\n  #{$selector-ocr-classes} {\n    &:hover::before {\n      display: none;\n    }\n  }\n\n  &.hocr-viewer-feature-Layout {\n    #{$selector-ocr-classes} {\n      position: fixed;\n      white-space: nowrap;\n      // XXX\n      // display: flex;\n      justify-content: left; /* align horizontal */\n      align-items: center; /* align vertical */\n    }\n    &.hocr-viewer-feature-Tooltip {\n      #{$selector-ocr-classes} {\n        &:hover::before {\n          @include tooltip\n        }\n      }\n    }\n  }\n\n\n  &.hocr-viewer-feature-Highlight {\n    margin: -1px;\n    &.hocr-viewer-feature-HighlightNotPage        {@include highlight-area($selector-ocr-not-page, $color-highlight-not-page)}\n    &.hocr-viewer-feature-HighlightPage           {@include highlight-area($selector-ocr-page, $color-highlight-page)}\n    &.hocr-viewer-feature-HighlightInlineNotBlank {@include highlight-area($selector-ocr-inline-not-blank, $color-highlight-inline-not-blank);}\n    &.hocr-viewer-feature-HighlightInlineBlank    {@include highlight-area($selector-ocr-inline-blank, $color-highlight-inline-blank);}\n    &.hocr-viewer-feature-HighlightLine           {@include highlight-area($selector-ocr-line, $color-highlight-line);}\n    &.hocr-viewer-feature-HighlightPar            {@include highlight-area($selector-ocr-par, $color-highlight-par);}\n    &.hocr-viewer-feature-HighlightCarea          {@include highlight-area($selector-ocr-carea, $color-highlight-carea);}\n  }\n\n  &.hocr-viewer-feature-BackgroundImage {\n    background-repeat: no-repeat;\n\n    #{$selector-ocr-page} {\n      background-size: contain;\n\n    }\n  }\n\n  &.hocr-viewer-feature-DisableEmStrong {\n    em { font-style: normal; }\n    strong { font-weight: normal; }\n  }\n\n  &.hocr-viewer-feature-TransparentText {\n    .ocr_page {\n      color: $color-transparent;\n    }\n  }\n\n\n}\n", "/*\n * Copyright (c) 2016-2017 Konstantin Baierer\n *\n * This software may be modified and distributed under the terms\n * of the MIT license.  See the LICENSE file for details.\n */\n\n$selector-ocr-page: '.ocr_page';\n$selector-ocr-classes: '*[class^=\"ocr\"]';\n$selector-ocr-line: '#{$selector-ocr-classes}[class*=\"line\"]';\n$selector-ocr-par: '.ocr_par';\n$selector-ocr-carea: '.ocr_carea';\n$selector-ocr-blank: '#{$selector-ocr-classes}.hocrjs-blank';\n$selector-ocr-inline-not-blank: '.ocr_line #{$selector-ocr-classes}:not(.hocrjs-blank)';\n$selector-ocr-inline-blank: '.ocr_line #{$selector-ocr-classes}.hocrjs-blank';\n$selector-ocr-not-page: '#{$selector-ocr-classes}:not(.ocr_page)';\n\n$border-width: 3px;\n$color-transparent: rgba(0,0,0,0);\n$color-unchecked: #ffcccc;\n$color-checked: #ccffcc;\n$color-toolbar-bg: rgba(180,180,190,0.85);\n$color-toolbar-toggler: white;\n$color-toolbar-border: #333;\n\n$color-highlight-page: #8B4513;\n$color-highlight-not-page: red;\n$color-highlight-inline-not-blank: green;\n$color-highlight-inline-blank: lighten(green, 30%);\n$color-highlight-carea: blue;\n$color-highlight-par: purple;\n$color-highlight-line: gold;\n\n@mixin transform($args) {\n  -webkit-transform: $args;\n  -ms-transform: $args;\n  transform: $args;\n}\n\n@mixin tooltip {\n  display: block;\n  background: white;\n  color: black !important;\n  border: 1px solid black;\n  font-family: monospace;\n  position: absolute;\n  font-size: 12px;\n  font-weight: bold;\n  line-height: 100%;\n  height: 15px;\n  top: -15px;\n}\n\n@mixin highlight-area($selector, $color) {\n  #{$selector} {\n    border: $border-width solid $color;\n    &:hover {\n      background: rgba(lighten($color, 30%), 0.2);\n    }\n  }\n}\n\n"],
                            sourceRoot: ""
                        }]);
                        const s = a
                    }
                    ,
                    34: (e,t,n)=>{
                        "use strict";
                        var r = n(811)
                          , o = n.n(r)
                          , i = n(788);
                        n.n(i)()(o()).push([e.id, ".hocrjs-toolbar{position:fixed;z-index:1;top:0;height:100%;border:none}.hocrjs-toolbar .toggler{float:left;position:fixed;left:0;font-family:monospace;color:#fff;background:#333;height:100vh;width:1em}.hocrjs-toolbar .toggler .toggler-inner{font-size:1.5em;top:40vh;position:fixed}.hocrjs-toolbar .toggler .toggler-hide{display:none}.hocrjs-toolbar .toggler .toggler-show{display:block}.hocrjs-toolbar .wrapper{position:fixed;margin-left:1em;background-color:rgba(180,180,190,0.85);overflow:hidden;left:-32em;transition:all 0.5s ease;height:100vh}.hocrjs-toolbar.expanded{border-right:3px solid #333}.hocrjs-toolbar.expanded .wrapper{padding-left:.5em;padding-right:.5em;width:15em;left:0}.hocrjs-toolbar.expanded .toggler-show{display:none}.hocrjs-toolbar.expanded .toggler-hide{display:block}.hocrjs-toolbar ul.features{list-style-type:none;padding:0}.hocrjs-toolbar ul.features li{background-color:#fcc;margin-bottom:2px;padding:5px 0}.hocrjs-toolbar ul.features li:before{content:'✗ '}.hocrjs-toolbar ul.features li.checked{background-color:#cfc}.hocrjs-toolbar ul.features li.checked:before{content:'✓ '}.hocrjs-toolbar ul.features li input[type='checkbox']{display:none}.hocrjs-toolbar ul.features li label{width:100%}.hocrjs-toolbar summary{font-size:120%}.hocrjs-toolbar summary span.font{font-size:100%}.hocrjs-toolbar select.font{width:80%;font-size:110%}\n", "", {
                            version: 3,
                            sources: ["webpack://./src/components/HocrToolbar/style.scss", "webpack://./src/_variables.scss"],
                            names: [],
                            mappings: "AAEA,gBACE,cAAe,CACf,SAAU,CACV,KAAM,CACN,WAAY,CACZ,WAAY,CALd,yBAOI,UAAW,CACX,cAAe,CACf,MAAO,CACP,qBAAsB,CACtB,UCSyB,CDRzB,eCSuB,CDRvB,YAAa,CACb,SAAU,CAdd,wCAgBM,eAAgB,CAChB,QAAS,CACT,cAAe,CAlBrB,uCAoBoB,YAAY,CApBhC,uCAqBoB,aAAa,CArBjC,yBAwBI,cAAe,CACf,eAAgB,CAChB,uCCPqC,CDQrC,eAAgB,CAChB,UAAW,CACX,wBAAyB,CACzB,YAAa,CA9BjB,yBAiCI,2BCZuB,CDrB3B,kCAmCM,iBAAkB,CAClB,kBAAmB,CACnB,UAAW,CACX,MAAO,CAtCb,uCAwCoB,YAAY,CAxChC,uCAyCoB,aAAa,CAzCjC,4BA4CI,oBAAqB,CACrB,SAAU,CA7Cd,+BAgDM,qBC/BmB,CDgCnB,iBAAkB,CAClB,aAAc,CAlDpB,sCAmDiB,YAAS,CAAK,uCAChB,qBClCC,CAAO,8CDoCP,YAAY,CAAA,sDAEhB,YAA4B,CAAA,qCAClC,UAAe,CAAA,wBAMnB,cACa,CAAA,kCACP,cACS,CAAA,4BAGT,SACG,CAAA,cACI",
                            sourcesContent: ["@import '../../variables';\n\n.hocrjs-toolbar {\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  height: 100%;\n  border: none;\n  .toggler {\n    float: left;\n    position: fixed;\n    left: 0;\n    font-family: monospace;\n    color: $color-toolbar-toggler;\n    background: $color-toolbar-border;\n    height: 100vh;\n    width: 1em;\n    .toggler-inner {\n      font-size: 1.5em;\n      top: 40vh;\n      position: fixed;\n    }\n    .toggler-hide { display:none; }\n    .toggler-show { display:block; }\n  }\n  .wrapper {\n    position: fixed;\n    margin-left: 1em;\n    background-color: $color-toolbar-bg;\n    overflow: hidden;\n    left: -32em;\n    transition: all 0.5s ease;\n    height: 100vh;\n  }\n  &.expanded {\n    border-right: $border-width solid $color-toolbar-border;\n    .wrapper { \n      padding-left: .5em;\n      padding-right: .5em;\n      width: 15em;\n      left: 0;\n    }\n    .toggler-show { display:none; }\n    .toggler-hide { display:block; }\n  }\n  ul.features {\n    list-style-type: none;\n    padding: 0;\n    // width: 19em;\n    li {\n      background-color: $color-unchecked;\n      margin-bottom: 2px;\n      padding: 5px 0;\n      &:before { content: '✗ '; }\n      &.checked {\n        background-color: $color-checked;\n        &:before { content: '✓ '; }\n      }\n      input[type='checkbox'] { display: none; }\n      label { width: 100%; }\n    }\n  }\n  input.zoom {\n    // width: 19em;\n  }\n  summary {\n    font-size: 120%;\n    span.font {\n      font-size: 100%;\n    }\n  }\n  select.font {\n    width: 80%;\n    font-size: 110%;\n  }\n}\n\n", "/*\n * Copyright (c) 2016-2017 Konstantin Baierer\n *\n * This software may be modified and distributed under the terms\n * of the MIT license.  See the LICENSE file for details.\n */\n\n$selector-ocr-page: '.ocr_page';\n$selector-ocr-classes: '*[class^=\"ocr\"]';\n$selector-ocr-line: '#{$selector-ocr-classes}[class*=\"line\"]';\n$selector-ocr-par: '.ocr_par';\n$selector-ocr-carea: '.ocr_carea';\n$selector-ocr-blank: '#{$selector-ocr-classes}.hocrjs-blank';\n$selector-ocr-inline-not-blank: '.ocr_line #{$selector-ocr-classes}:not(.hocrjs-blank)';\n$selector-ocr-inline-blank: '.ocr_line #{$selector-ocr-classes}.hocrjs-blank';\n$selector-ocr-not-page: '#{$selector-ocr-classes}:not(.ocr_page)';\n\n$border-width: 3px;\n$color-transparent: rgba(0,0,0,0);\n$color-unchecked: #ffcccc;\n$color-checked: #ccffcc;\n$color-toolbar-bg: rgba(180,180,190,0.85);\n$color-toolbar-toggler: white;\n$color-toolbar-border: #333;\n\n$color-highlight-page: #8B4513;\n$color-highlight-not-page: red;\n$color-highlight-inline-not-blank: green;\n$color-highlight-inline-blank: lighten(green, 30%);\n$color-highlight-carea: blue;\n$color-highlight-par: purple;\n$color-highlight-line: gold;\n\n@mixin transform($args) {\n  -webkit-transform: $args;\n  -ms-transform: $args;\n  transform: $args;\n}\n\n@mixin tooltip {\n  display: block;\n  background: white;\n  color: black !important;\n  border: 1px solid black;\n  font-family: monospace;\n  position: absolute;\n  font-size: 12px;\n  font-weight: bold;\n  line-height: 100%;\n  height: 15px;\n  top: -15px;\n}\n\n@mixin highlight-area($selector, $color) {\n  #{$selector} {\n    border: $border-width solid $color;\n    &:hover {\n      background: rgba(lighten($color, 30%), 0.2);\n    }\n  }\n}\n\n"],
                            sourceRoot: ""
                        }])
                    }
                    ,
                    292: (e,t,n)=>{
                        "use strict";
                        var r = n(811)
                          , o = n.n(r)
                          , i = n(788);
                        n.n(i)()(o()).push([e.id, '.hocr-viewer.hocr-viewer-toolbar-enabled>.hocr-viewer-container{transform:rotate(0);margin-left:1em}.hocr-viewer .hocr-viewer-container{min-height:100vh;position:relative !important;-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg)}.hocr-viewer .hocr-viewer-container>div{overflow:auto}.hocr-viewer .hocr-viewer-container p{margin:0}.hocr-viewer *[class^="ocr"]:hover::before{display:none}.hocr-viewer.hocr-viewer-feature-Layout *[class^="ocr"]{position:fixed;white-space:nowrap;justify-content:left;align-items:center}.hocr-viewer.hocr-viewer-feature-Layout.hocr-viewer-feature-Tooltip *[class^="ocr"]:hover::before{display:block;background:white;color:black !important;border:1px solid black;font-family:monospace;position:absolute;font-size:12px;font-weight:bold;line-height:100%;height:15px;top:-15px}.hocr-viewer.hocr-viewer-feature-Highlight{margin:-1px}.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightNotPage *[class^="ocr"]:not(.ocr_page){border:3px solid red}.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightNotPage *[class^="ocr"]:not(.ocr_page):hover{background:rgba(255,153,153,0.2)}.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightPage .ocr_page{border:3px solid #8b4513}.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightPage .ocr_page:hover{background:rgba(231,143,80,0.2)}.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightInlineNotBlank .ocr_line *[class^="ocr"]:not(.hocrjs-blank){border:3px solid green}.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightInlineNotBlank .ocr_line *[class^="ocr"]:not(.hocrjs-blank):hover{background:rgba(26,255,26,0.2)}.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightInlineBlank .ocr_line *[class^="ocr"].hocrjs-blank{border:3px solid #1aff1a}.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightInlineBlank .ocr_line *[class^="ocr"].hocrjs-blank:hover{background:rgba(179,255,179,0.2)}.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightLine *[class^="ocr"][class*="line"]{border:3px solid gold}.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightLine *[class^="ocr"][class*="line"]:hover{background:rgba(255,239,153,0.2)}.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightPar .ocr_par{border:3px solid purple}.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightPar .ocr_par:hover{background:rgba(255,26,255,0.2)}.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightCarea .ocr_carea{border:3px solid blue}.hocr-viewer.hocr-viewer-feature-Highlight.hocr-viewer-feature-HighlightCarea .ocr_carea:hover{background:rgba(153,153,255,0.2)}.hocr-viewer.hocr-viewer-feature-BackgroundImage{background-repeat:no-repeat}.hocr-viewer.hocr-viewer-feature-BackgroundImage .ocr_page{background-size:contain}.hocr-viewer.hocr-viewer-feature-DisableEmStrong em{font-style:normal}.hocr-viewer.hocr-viewer-feature-DisableEmStrong strong{font-weight:normal}.hocr-viewer.hocr-viewer-feature-TransparentText .ocr_page{color:rgba(0,0,0,0)}\n', "", {
                            version: 3,
                            sources: ["webpack://./src/components/HocrViewer/style.scss", "webpack://./src/_variables.scss"],
                            names: [],
                            mappings: "AASA,gEAIM,mBAAoB,CACpB,eAAgB,CALtB,oCAUI,gBAAiB,CACjB,4BAA6B,CCc/B,8BDXiC,CCYjC,0BDZiC,CCajC,sBDbiC,CAdnC,wCAkBM,aAAc,CAlBpB,sCAqBQ,QAAS,CArBjB,2CA4BM,YAAa,CA5BnB,wDAkCM,cAAe,CACf,kBAAmB,CAGnB,oBAAqB,CACrB,kBAAmB,CAvCzB,kGC+BE,aAAc,CACd,gBAAiB,CACjB,sBAAuB,CACvB,sBAAuB,CACvB,qBAAsB,CACtB,iBAAkB,CAClB,cAAe,CACf,gBAAiB,CACjB,gBAAiB,CACjB,WAAY,CACZ,SAAU,CDzCZ,2CAoDI,WAAY,CApDhB,+GC8CI,oBA7B0B,CDjB9B,qHCgDM,gCAAqC,CDhD3C,uFC8CI,wBA9B0B,CDhB9B,6FCgDM,+BAAqC,CDhD3C,oIC8CI,sBA5BoC,CDlBxC,0ICgDM,8BAAqC,CDhD3C,2HC8CI,wBA3B8C,CDnBlD,iICgDM,gCAAqC,CDhD3C,4GC8CI,qBAxBuB,CDtB3B,kHCgDM,gCAAqC,CDhD3C,qFC8CI,uBAzBwB,CDrB5B,2FCgDM,+BAAqC,CDhD3C,yFC8CI,qBA1BwB,CDpB5B,+FCgDM,gCAAqC,CDhD3C,iDA+DI,2BAA4B,CA/DhC,2DAkEM,uBAAwB,CAlE9B,oDAwES,iBAAkB,CAxE3B,wDAyEa,kBAAmB,CAzEhC,2DA8EM,mBCrE2B",
                            sourcesContent: ["/*\n * Copyright (c) 2016-2017 Konstantin Baierer\n *\n * This software may be modified and distributed under the terms\n * of the MIT license.  See the LICENSE file for details.\n */\n\n@import '../../variables.scss';\n\n.hocr-viewer {\n\n  &.hocr-viewer-toolbar-enabled {\n    > .hocr-viewer-container {\n      transform: rotate(0);\n      margin-left: 1em;\n    }\n  }\n\n  .hocr-viewer-container {\n    min-height: 100vh;\n    position: relative !important;\n    // NOTE: This is important otherwise fixed will be relative to page not\n    // containing element\n    @include transform(rotate(0deg));\n    /* .transform(scale(0.7)); */\n    /* position: relative !important; */\n    & > div {\n      overflow: auto;\n    }\n    p {\n        margin: 0;\n    }\n  }\n\n\n  #{$selector-ocr-classes} {\n    &:hover::before {\n      display: none;\n    }\n  }\n\n  &.hocr-viewer-feature-Layout {\n    #{$selector-ocr-classes} {\n      position: fixed;\n      white-space: nowrap;\n      // XXX\n      // display: flex;\n      justify-content: left; /* align horizontal */\n      align-items: center; /* align vertical */\n    }\n    &.hocr-viewer-feature-Tooltip {\n      #{$selector-ocr-classes} {\n        &:hover::before {\n          @include tooltip\n        }\n      }\n    }\n  }\n\n\n  &.hocr-viewer-feature-Highlight {\n    margin: -1px;\n    &.hocr-viewer-feature-HighlightNotPage        {@include highlight-area($selector-ocr-not-page, $color-highlight-not-page)}\n    &.hocr-viewer-feature-HighlightPage           {@include highlight-area($selector-ocr-page, $color-highlight-page)}\n    &.hocr-viewer-feature-HighlightInlineNotBlank {@include highlight-area($selector-ocr-inline-not-blank, $color-highlight-inline-not-blank);}\n    &.hocr-viewer-feature-HighlightInlineBlank    {@include highlight-area($selector-ocr-inline-blank, $color-highlight-inline-blank);}\n    &.hocr-viewer-feature-HighlightLine           {@include highlight-area($selector-ocr-line, $color-highlight-line);}\n    &.hocr-viewer-feature-HighlightPar            {@include highlight-area($selector-ocr-par, $color-highlight-par);}\n    &.hocr-viewer-feature-HighlightCarea          {@include highlight-area($selector-ocr-carea, $color-highlight-carea);}\n  }\n\n  &.hocr-viewer-feature-BackgroundImage {\n    background-repeat: no-repeat;\n\n    #{$selector-ocr-page} {\n      background-size: contain;\n\n    }\n  }\n\n  &.hocr-viewer-feature-DisableEmStrong {\n    em { font-style: normal; }\n    strong { font-weight: normal; }\n  }\n\n  &.hocr-viewer-feature-TransparentText {\n    .ocr_page {\n      color: $color-transparent;\n    }\n  }\n\n\n}\n", "/*\n * Copyright (c) 2016-2017 Konstantin Baierer\n *\n * This software may be modified and distributed under the terms\n * of the MIT license.  See the LICENSE file for details.\n */\n\n$selector-ocr-page: '.ocr_page';\n$selector-ocr-classes: '*[class^=\"ocr\"]';\n$selector-ocr-line: '#{$selector-ocr-classes}[class*=\"line\"]';\n$selector-ocr-par: '.ocr_par';\n$selector-ocr-carea: '.ocr_carea';\n$selector-ocr-blank: '#{$selector-ocr-classes}.hocrjs-blank';\n$selector-ocr-inline-not-blank: '.ocr_line #{$selector-ocr-classes}:not(.hocrjs-blank)';\n$selector-ocr-inline-blank: '.ocr_line #{$selector-ocr-classes}.hocrjs-blank';\n$selector-ocr-not-page: '#{$selector-ocr-classes}:not(.ocr_page)';\n\n$border-width: 3px;\n$color-transparent: rgba(0,0,0,0);\n$color-unchecked: #ffcccc;\n$color-checked: #ccffcc;\n$color-toolbar-bg: rgba(180,180,190,0.85);\n$color-toolbar-toggler: white;\n$color-toolbar-border: #333;\n\n$color-highlight-page: #8B4513;\n$color-highlight-not-page: red;\n$color-highlight-inline-not-blank: green;\n$color-highlight-inline-blank: lighten(green, 30%);\n$color-highlight-carea: blue;\n$color-highlight-par: purple;\n$color-highlight-line: gold;\n\n@mixin transform($args) {\n  -webkit-transform: $args;\n  -ms-transform: $args;\n  transform: $args;\n}\n\n@mixin tooltip {\n  display: block;\n  background: white;\n  color: black !important;\n  border: 1px solid black;\n  font-family: monospace;\n  position: absolute;\n  font-size: 12px;\n  font-weight: bold;\n  line-height: 100%;\n  height: 15px;\n  top: -15px;\n}\n\n@mixin highlight-area($selector, $color) {\n  #{$selector} {\n    border: $border-width solid $color;\n    &:hover {\n      background: rgba(lighten($color, 30%), 0.2);\n    }\n  }\n}\n\n"],
                            sourceRoot: ""
                        }])
                    }
                }
                  , t = {};
                function n(r) {
                    if (t[r])
                        return t[r].exports;
                    var o = t[r] = {
                        id: r,
                        exports: {}
                    };
                    return e[r](o, o.exports, n),
                    o.exports
                }
                n.n = e=>{
                    var t = e && e.__esModule ? ()=>e.default : ()=>e;
                    return n.d(t, {
                        a: t
                    }),
                    t
                }
                ,
                n.d = (e,t)=>{
                    for (var r in t)
                        n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                            enumerable: !0,
                            get: t[r]
                        })
                }
                ,
                n.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
                n.r = e=>{
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }
                ;
                var r = {};
                return (()=>{
                    "use strict";
                    n.r(r),
                    n.d(r, {
                        default: ()=>A
                    });
                    var e = function() {
                        var e = this
                          , t = e.$createElement
                          , n = e._self._c || t;
                        return n("div", {
                            class: e.classList
                        }, [e.enableToolbar ? n("hocr-toolbar", {
                            attrs: {
                                expandedInitial: e.expandToolbar
                            }
                        }) : e._e(), e._v(" "), n("div", {
                            staticClass: "hocr-viewer-container",
                            style: e.containerStyle,
                            domProps: {
                                innerHTML: e._s(e.hocrDom.innerHTML)
                            }
                        })], 1)
                    };
                    e._withStripped = !0;
                    var t = n(865)
                      , o = function() {
                        var e = this
                          , t = e.$createElement
                          , n = e._self._c || t;
                        return n("div", {
                            class: e.classList
                        }, [n("div", {
                            staticClass: "toggler",
                            on: {
                                click: e.toggle
                            }
                        }, [e._m(0), e._v(" "), e._m(1)]), e._v(" "), n("div", {
                            staticClass: "wrapper"
                        }, [n("button", {
                            attrs: {
                                disabled: 0 == e.$parent.currentPageIdx
                            },
                            on: {
                                click: e.$parent.prevPage
                            }
                        }, [e._v("prev")]), e._v(" "), n("button", [e._v(e._s(e.$parent.currentPageIdx + 1) + " / " + e._s(e.$parent.lastPageIdx + 1))]), e._v(" "), n("button", {
                            attrs: {
                                disabled: e.$parent.currentPageIdx == e.$parent.lastPageIdx
                            },
                            on: {
                                click: e.$parent.nextPage
                            }
                        }, [e._v("next")]), e._v(" "), n("details", {
                            attrs: {
                                open: ""
                            }
                        }, [n("summary", [e._v("Features")]), e._v(" "), n("ul", {
                            staticClass: "features"
                        }, e._l(Object.keys(e.$parent.featuresAvailable), (function(t) {
                            return t.match(/Highlight[A-Z]/) ? e._e() : n("li", {
                                key: t,
                                class: {
                                    checked: e.$parent.isFeatureEnabled(t)
                                },
                                on: {
                                    click: function(n) {
                                        return e.$parent.toggleFeature(t)
                                    }
                                }
                            }, [n("label", [e._v(e._s(t))])])
                        }
                        )), 0)]), e._v(" "), n("details", {
                            attrs: {
                                open: ""
                            }
                        }, [n("summary", [e._v("Highlighting")]), e._v(" "), n("ul", {
                            staticClass: "features"
                        }, e._l(Object.keys(e.$parent.featuresAvailable), (function(t) {
                            return t.match(/Highlight[A-Z]/) ? n("li", {
                                key: t,
                                class: {
                                    checked: e.$parent.isFeatureEnabled(t)
                                },
                                on: {
                                    click: function(n) {
                                        return e.$parent.toggleFeature(t)
                                    }
                                }
                            }, [n("input", {
                                attrs: {
                                    type: "checkbox"
                                }
                            }), e._v(" "), n("label", [e._v(e._s(t))])]) : e._e()
                        }
                        )), 0)]), e._v(" "), n("details", {
                            staticClass: "hocr-toolbar-zoom",
                            attrs: {
                                open: ""
                            }
                        }, [n("summary", [e._v("Zoom: "), n("span", {
                            staticClass: "zoom"
                        }, [e._v(e._s(e.$parent.currentZoomRounded))]), e._v("%\n      ")]), e._v(" "), n("button", {
                            staticClass: "zoom",
                            on: {
                                click: function(t) {
                                    return e.$parent.zoom("-0.1")
                                }
                            }
                        }, [e._v("-")]), e._v(" "), n("input", {
                            attrs: {
                                type: "range",
                                min: "0",
                                max: "5",
                                step: ".02"
                            },
                            domProps: {
                                value: e.$parent.currentZoom
                            },
                            on: {
                                change: function(t) {
                                    e.$parent.currentZoom = t.target.value
                                }
                            }
                        }), e._v(" "), n("button", {
                            staticClass: "zoom",
                            on: {
                                click: function(t) {
                                    return e.$parent.zoom("+0.1")
                                }
                            }
                        }, [e._v("+")]), e._v(" "), n("p", [n("button", {
                            staticClass: "zoom",
                            on: {
                                click: function(t) {
                                    return e.$parent.zoom("height")
                                }
                            }
                        }, [e._v("Fit height")]), e._v(" "), n("button", {
                            staticClass: "zoom",
                            on: {
                                click: function(t) {
                                    return e.$parent.zoom("width")
                                }
                            }
                        }, [e._v("Fit width")]), e._v(" "), n("button", {
                            staticClass: "zoom",
                            on: {
                                click: function(t) {
                                    return e.$parent.zoom("reset")
                                }
                            }
                        }, [e._v("100 %")])])]), e._v(" "), e.$parent.isFeatureEnabled("Font") ? n("details", {
                            attrs: {
                                open: ""
                            }
                        }, [e._m(2), e._v(" "), n("select", {
                            staticClass: "font",
                            on: {
                                change: function(t) {
                                    e.$parent.fontFamily = t.target.value
                                }
                            }
                        }, e._l(e.$parent.fontsAvailable, (function(t, r) {
                            return n("option", {
                                key: r,
                                style: {
                                    "font-size": "large",
                                    "font-family": r
                                },
                                domProps: {
                                    value: r
                                }
                            }, [e._v("\n          " + e._s(r) + "\n        ")])
                        }
                        )), 0)]) : e._e()])])
                    };
                    o._withStripped = !0;
                    const i = {
                        name: "HocrToolbar",
                        computed: {
                            classList: function() {
                                return {
                                    "hocrjs-toolbar": !0,
                                    expanded: this.expanded
                                }
                            }
                        },
                        props: {
                            expandedInitial: {
                                type: Boolean,
                                default: !1
                            }
                        },
                        data: function() {
                            return {
                                expanded: this.expandedInitial
                            }
                        },
                        methods: {
                            toggle: function() {
                                this.expanded = !this.expanded
                            }
                        }
                    };
                    function a(e, t, n, r, o, i, a, s) {
                        var c, l = "function" == typeof e ? e.options : e;
                        if (t && (l.render = t,
                        l.staticRenderFns = n,
                        l._compiled = !0),
                        r && (l.functional = !0),
                        i && (l._scopeId = "data-v-" + i),
                        a ? (c = function(e) {
                            (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
                            o && o.call(this, e),
                            e && e._registeredComponents && e._registeredComponents.add(a)
                        }
                        ,
                        l._ssrRegister = c) : o && (c = s ? function() {
                            o.call(this, (l.functional ? this.parent : this).$root.$options.shadowRoot)
                        }
                        : o),
                        c)
                            if (l.functional) {
                                l._injectStyles = c;
                                var u = l.render;
                                l.render = function(e, t) {
                                    return c.call(t),
                                    u(e, t)
                                }
                            } else {
                                var f = l.beforeCreate;
                                l.beforeCreate = f ? [].concat(f, c) : [c]
                            }
                        return {
                            exports: e,
                            options: l
                        }
                    }
                    n(34);
                    var s = a(i, o, [function() {
                        var e = this
                          , t = e.$createElement
                          , n = e._self._c || t;
                        return n("div", {
                            staticClass: "toggler-inner toggler-show"
                        }, [e._v("\n      >"), n("br"), e._v(">"), n("br"), e._v(">"), n("br"), e._v(">"), n("br"), e._v(">"), n("br"), e._v(">"), n("br"), e._v(">"), n("br"), e._v(">"), n("br"), e._v(">"), n("br")])
                    }
                    , function() {
                        var e = this
                          , t = e.$createElement
                          , n = e._self._c || t;
                        return n("div", {
                            staticClass: "toggler-inner toggler-hide"
                        }, [e._v("\n      <"), n("br"), e._v("<"), n("br"), e._v("<"), n("br"), e._v("<"), n("br"), e._v("<"), n("br"), e._v("<"), n("br"), e._v("<"), n("br"), e._v("<"), n("br"), e._v("<"), n("br")])
                    }
                    , function() {
                        var e = this
                          , t = e.$createElement
                          , n = e._self._c || t;
                        return n("summary", [e._v("Font: "), n("span", {
                            staticClass: "font"
                        })])
                    }
                    ], !1, null, null, null);
                    s.options.__file = "src/components/HocrToolbar/index.vue";
                    const c = s.exports
                      , l = {
                        features: {
                            disableEmStrong: {
                                enabled: !1
                            },
                            contentEditable: {
                                enabled: !1
                            },
                            tooltips: {
                                enabled: !0,
                                styleId: "hocr-viewer-tooltip-style"
                            },
                            transparentText: {
                                enabled: !1
                            }
                        }
                    };
                    var u = function() {
                        function e(t) {
                            var n = t.imagePrefix
                              , r = void 0 === n ? "" : n;
                            !function(e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError("Cannot call a class as a function")
                            }(this, e),
                            this.imagePrefix = r
                        }
                        var n;
                        return (n = [{
                            key: "apply",
                            value: function(e) {
                                var n = this
                                  , r = t.HocrDOM.queryHocr(e, "page");
                                t.HocrDOM.queryHocrAll(e, {
                                    title: "image"
                                }).forEach((function(e) {
                                    var o = t.HocrDOM.getHocrProperties(e).image;
                                    r.style.backgroundImage = "url(".concat(n.imagePrefix).concat(o, ")")
                                }
                                ))
                            }
                        }]) && function(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1,
                                r.configurable = !0,
                                "value"in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r)
                            }
                        }(e.prototype, n),
                        e
                    }();
                    var f = function() {
                        function e() {
                            !function(e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError("Cannot call a class as a function")
                            }(this, e)
                        }
                        var n;
                        return (n = [{
                            key: "$emit",
                            value: function() {
                                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                                    t[n] = arguments[n];
                                console.log({
                                    args: t
                                })
                            }
                        }, {
                            key: "apply",
                            value: function(e) {
                                var n = this;
                                t.HocrDOM.queryHocrAll(e, {
                                    class: ["line", "x_word"],
                                    clauses: ""
                                }).forEach((function(e) {
                                    e.setAttribute("contentEditable", "true"),
                                    e.addEventListener("input", (function() {
                                        return n.$emit("contentEdited", e)
                                    }
                                    ))
                                }
                                ))
                            }
                        }]) && function(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1,
                                r.configurable = !0,
                                "value"in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r)
                            }
                        }(e.prototype, n),
                        e
                    }();
                    var d = function() {
                        function e() {
                            !function(e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError("Cannot call a class as a function")
                            }(this, e)
                        }
                        var t;
                        return (t = [{
                            key: "removeCssFragment",
                            value: function(e, t) {
                                var n = document.querySelector("#".concat(e));
                                n && n.remove()
                            }
                        }, {
                            key: "addCssFragment",
                            value: function(e, t) {
                                var n = document.querySelector("#".concat(e));
                                n || ((n = document.createElement("style")).id = e,
                                document.head.appendChild(n)),
                                n.appendChild(document.createTextNode(t))
                            }
                        }]) && function(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1,
                                r.configurable = !0,
                                "value"in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r)
                            }
                        }(e, t),
                        e
                    }();
                    function p(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, r = new Array(t); n < t; n++)
                            r[n] = e[n];
                        return r
                    }
                    const h = {
                        BackgroundImage: u,
                        ContentEditable: f,
                        Font: function() {
                            function e(t) {
                                var n = t.fontFamily
                                  , r = void 0 === n ? "x" : n
                                  , o = t.fontsAvailable;
                                !function(e, t) {
                                    if (!(e instanceof t))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, e),
                                this.fontFamily = r;
                                var i = "hocr-view-font-styles";
                                d.removeCssFragment(i),
                                Object.keys(o).forEach((function(e) {
                                    var t = o[e].cssUrl;
                                    t && d.addCssFragment(i, '@import "'.concat(t, '";\n'))
                                }
                                ))
                            }
                            var n;
                            return (n = [{
                                key: "apply",
                                value: function(e) {
                                    var n = this;
                                    t.HocrDOM.queryHocrAll(e).forEach((function(e) {
                                        e.style.fontFamily = n.fontFamily
                                    }
                                    ))
                                }
                            }]) && function(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    r.enumerable = r.enumerable || !1,
                                    r.configurable = !0,
                                    "value"in r && (r.writable = !0),
                                    Object.defineProperty(e, r.key, r)
                                }
                            }(e.prototype, n),
                            e
                        }(),
                        HighlightBlank: function() {
                            function e() {
                                !function(e, t) {
                                    if (!(e instanceof t))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, e)
                            }
                            var n;
                            return (n = [{
                                key: "apply",
                                value: function(e) {
                                    t.HocrDOM.queryHocrAll(e).forEach((function(e) {
                                        "" === e.innerHTML.trim() && e.classList.add("hocrjs-blank")
                                    }
                                    ))
                                }
                            }]) && function(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    r.enumerable = r.enumerable || !1,
                                    r.configurable = !0,
                                    "value"in r && (r.writable = !0),
                                    Object.defineProperty(e, r.key, r)
                                }
                            }(e.prototype, n),
                            e
                        }(),
                        Layout: function() {
                            function e() {
                                !function(e, t) {
                                    if (!(e instanceof t))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, e)
                            }
                            var n;
                            return (n = [{
                                key: "apply",
                                value: function(e) {
                                    t.HocrDOM.queryHocrAll(e, {
                                        title: "bbox"
                                    }).forEach((function(e) {
                                        var n = t.HocrDOM.getHocrProperties(e).bbox;
                                        n && (e.style.position = "fixed",
                                        e.style.left = n[0] + "px",
                                        e.style.top = n[1] + "px",
                                        e.style.width = n[2] - n[0] + 1 + "px",
                                        e.style.height = n[3] - n[1] + 1 + "px")
                                    }
                                    ))
                                }
                            }]) && function(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    r.enumerable = r.enumerable || !1,
                                    r.configurable = !0,
                                    "value"in r && (r.writable = !0),
                                    Object.defineProperty(e, r.key, r)
                                }
                            }(e.prototype, n),
                            e
                        }(),
                        ScaleFont: function() {
                            function e(t) {
                                var n = t.fontFamily
                                  , r = void 0 === n ? "x" : n;
                                t.fonts,
                                function(e, t) {
                                    if (!(e instanceof t))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, e),
                                this.fontFamily = r,
                                this.minFontSize = 2,
                                this.wrapClass = "hocr-viewer-wrap",
                                this.wrap = {}
                            }
                            var n;
                            return (n = [{
                                key: "apply",
                                value: function(e) {
                                    var n = this;
                                    console.time("toggleScaleFont"),
                                    this.wrap = document.createElement("span"),
                                    this.wrap.classList.add(this.wrapClass),
                                    document.body.appendChild(this.wrap),
                                    t.HocrDOM.queryHocrAll(e, {
                                        terminal: !0
                                    }).forEach((function(e) {
                                        return n.scaleFont(e)
                                    }
                                    )),
                                    this.wrap.remove(),
                                    console.timeEnd("toggleScaleFont")
                                }
                            }, {
                                key: "scaleFont",
                                value: function(e) {
                                    var t = e.textContent.trim();
                                    if (0 !== t.length) {
                                        this.wrap.style.fontFamily = e.style.fontFamily,
                                        this.wrap.innerHTML = t;
                                        var n = parseInt(e.style.height.replace("px", ""))
                                          , r = parseInt(e.style.width.replace("px", ""))
                                          , o = n;
                                        if (o > this.minFontSize) {
                                            this.wrap.style.fontSize = o + "px";
                                            var i = o * n / this.wrap.offsetHeight
                                              , a = o * r / this.wrap.offsetWidth;
                                            o = i < a ? i : a
                                        }
                                        o < this.minFontSize && (o = this.minFontSize),
                                        e.style.fontSize = o + "px"
                                    }
                                }
                            }]) && function(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    r.enumerable = r.enumerable || !1,
                                    r.configurable = !0,
                                    "value"in r && (r.writable = !0),
                                    Object.defineProperty(e, r.key, r)
                                }
                            }(e.prototype, n),
                            e
                        }(),
                        Tooltip: function() {
                            function e() {
                                !function(e, t) {
                                    if (!(e instanceof t))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, e),
                                this.styleId = "hocr-viewer-tooltip-style"
                            }
                            var n;
                            return (n = [{
                                key: "apply",
                                value: function(e) {
                                    var n, r = {}, o = function(e, t) {
                                        var n;
                                        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                                            if (Array.isArray(e) || (n = function(e, t) {
                                                if (e) {
                                                    if ("string" == typeof e)
                                                        return p(e, t);
                                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                                    return "Object" === n && e.constructor && (n = e.constructor.name),
                                                    "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(e, t) : void 0
                                                }
                                            }(e))) {
                                                n && (e = n);
                                                var r = 0
                                                  , o = function() {};
                                                return {
                                                    s: o,
                                                    n: function() {
                                                        return r >= e.length ? {
                                                            done: !0
                                                        } : {
                                                            done: !1,
                                                            value: e[r++]
                                                        }
                                                    },
                                                    e: function(e) {
                                                        throw e
                                                    },
                                                    f: o
                                                }
                                            }
                                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                        }
                                        var i, a = !0, s = !1;
                                        return {
                                            s: function() {
                                                n = e[Symbol.iterator]()
                                            },
                                            n: function() {
                                                var e = n.next();
                                                return a = e.done,
                                                e
                                            },
                                            e: function(e) {
                                                s = !0,
                                                i = e
                                            },
                                            f: function() {
                                                try {
                                                    a || null == n.return || n.return()
                                                } finally {
                                                    if (s)
                                                        throw i
                                                }
                                            }
                                        }
                                    }(t.HocrDOM.queryHocrAll(e));
                                    try {
                                        for (o.s(); !(n = o.n()).done; )
                                            r[n.value.getAttribute("class")] = !0
                                    } catch (e) {
                                        o.e(e)
                                    } finally {
                                        o.f()
                                    }
                                    console.log("Detected OCR classes", Object.keys(r)),
                                    d.removeCssFragment(this.styleId),
                                    d.addCssFragment(this.styleId, Object.keys(r).map((function(e) {
                                        return ".".concat(e, ':hover::before { content: "').concat(e, '"; }\n')
                                    }
                                    )).join("\n"))
                                }
                            }]) && function(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    r.enumerable = r.enumerable || !1,
                                    r.configurable = !0,
                                    "value"in r && (r.writable = !0),
                                    Object.defineProperty(e, r.key, r)
                                }
                            }(e.prototype, n),
                            e
                        }()
                    }
                      , v = {
                        name: "HocrViewer",
                        components: {
                            HocrToolbar: c
                        },
                        props: {
                            hocr: {
                                type: String,
                                required: !0
                            },
                            initialZoom: {
                                type: Number,
                                default: 1
                            },
                            featureBackgroundImage: {
                                type: Boolean,
                                default: !0
                            },
                            featureContentEditable: {
                                type: Boolean,
                                default: !0
                            },
                            featureFont: {
                                type: Boolean,
                                default: !0
                            },
                            featureLayout: {
                                type: Boolean,
                                default: !0
                            },
                            featureScaleFont: {
                                type: Boolean,
                                default: !1
                            },
                            featureTransparentText: {
                                type: Boolean,
                                default: !1
                            },
                            featureTooltip: {
                                type: Boolean,
                                default: !1
                            },
                            featureHighlight: {
                                type: Boolean,
                                default: !0
                            },
                            featureHighlightPage: {
                                type: Boolean,
                                default: !1
                            },
                            featureHighlightNotPage: {
                                type: Boolean,
                                default: !1
                            },
                            featureHighlightBlank: {
                                type: Boolean,
                                default: !0
                            },
                            featureHighlightInlineNotBlank: {
                                type: Boolean,
                                default: !0
                            },
                            featureHighlightInlineBlank: {
                                type: Boolean,
                                default: !1
                            },
                            featureHighlightLine: {
                                type: Boolean,
                                default: !0
                            },
                            featureHighlightPar: {
                                type: Boolean,
                                default: !0
                            },
                            featureHighlightCarea: {
                                type: Boolean,
                                default: !0
                            },
                            featureDisableEmStrong: {
                                type: Boolean,
                                default: !0
                            },
                            enableToolbar: {
                                type: Boolean,
                                default: !0
                            },
                            expandToolbar: {
                                type: Boolean,
                                default: !0
                            },
                            imagePrefix: {
                                type: String,
                                default: ""
                            },
                            font: {
                                type: String,
                                default: "sans-serif"
                            },
                            fontsAvailable: {
                                type: Object,
                                default: function() {
                                    return {
                                        "sans-serif": {},
                                        serif: {},
                                        monospace: {},
                                        UnifrakturCook: {
                                            cssUrl: "https://fonts.googleapis.com/css?family=UnifrakturCook:700"
                                        },
                                        UnifrakturMaguntia: {
                                            cssUrl: "https://fonts.googleapis.com/css?family=UnifrakturMaguntia"
                                        },
                                        "Old Standard TT": {
                                            cssUrl: "https://fonts.googleapis.com/css?family=Old+Standard+TT"
                                        },
                                        Cardo: {
                                            cssUrl: "https://fonts.googleapis.com/css?family=Cardo"
                                        },
                                        "Noto Serif": {
                                            cssUrl: "https://fonts.googleapis.com/css?family=Noto+Serif:400,400i,700&subset=latin-ext"
                                        },
                                        "Libre Baskerville": {
                                            cssUrl: "https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700&subset=latin-ext"
                                        }
                                    }
                                }
                            }
                        },
                        data: function() {
                            var e = this;
                            return {
                                enableLayout: !1,
                                currentPageIdx: 0,
                                config: l,
                                featuresEnabled: Object.keys(this.$props).filter((function(t) {
                                    return t.startsWith("feature") && e[t]
                                }
                                )).map((function(e) {
                                    return e.replace("feature", "")
                                }
                                )),
                                fontFamily: this.font,
                                currentZoom: this.initialZoom
                            }
                        },
                        computed: {
                            classList: function() {
                                var e = {
                                    "hocr-viewer": !0,
                                    "hocr-viewer-toolbar-enabled": this.enableToolbar
                                };
                                return this.featuresEnabled.map((function(t) {
                                    return e["hocr-viewer-feature-".concat(t)] = !0
                                }
                                )),
                                e
                            },
                            lastPageIdx: function() {
                                return t.HocrDOM.queryHocrAll(this.shadowDom, "page").length - 1
                            },
                            currentPage: function() {
                                console.log("enter currentPage");
                                var e = t.HocrDOM.queryHocrAll(this.shadowDom, "page");
                                return e.length ? e[this.currentPageIdx] : (console.warn("No .ocr_page element found. Is this hOCR?"),
                                {})
                            },
                            containerStyle: function() {
                                var e = this.currentPage
                                  , n = t.HocrDOM.getHocrProperties(e).bbox
                                  , r = n[3] - n[1] + 1;
                                return {
                                    transform: "scale(".concat(this.currentZoom, ")"),
                                    "transform-origin": "top left",
                                    height: "".concat(r, "px")
                                }
                            },
                            featuresAvailable: function() {
                                var e = {};
                                return Object.keys(this.$props).filter((function(e) {
                                    return e.startsWith("feature")
                                }
                                )).map((function(e) {
                                    return e.replace("feature", "")
                                }
                                )).map((function(t) {
                                    t in e || (e[t] = !0)
                                }
                                )),
                                Object.assign(e, h),
                                e
                            },
                            features: function() {
                                var e = this
                                  , t = {};
                                return Object.keys(h).map((function(n) {
                                    if (e.featuresEnabled.includes(n)) {
                                        var r = h[n];
                                        t[n] = "function" != typeof r || new r(e)
                                    }
                                }
                                )),
                                t
                            },
                            shadowDom: function() {
                                console.log("enter shadowDom");
                                var e = document.createElement("div");
                                return e.innerHTML = this.hocr,
                                e
                            },
                            hocrDom: function() {
                                var e = this
                                  , t = document.createElement("div");
                                return t.innerHTML = this.currentPage.outerHTML,
                                Object.keys(this.features).map((function(n) {
                                    e.features[n].apply && e.features[n].apply(t)
                                }
                                )),
                                t
                            },
                            currentZoomRounded: function() {
                                return Math.floor(1e4 * this.currentZoom) / 100
                            }
                        },
                        mounted: function() {
                            this.zoom("height")
                        },
                        methods: {
                            prevPage: function() {
                                this.currentPageIdx = Math.max(this.currentPageIdx - 1, 0)
                            },
                            nextPage: function() {
                                this.currentPageIdx = Math.min(this.currentPageIdx + 1, this.lastPageIdx)
                            },
                            isFeatureEnabled: function(e) {
                                return this.featuresEnabled.includes(e)
                            },
                            toggleFeature: function(e) {
                                this.isFeatureEnabled(e) ? this.featuresEnabled.splice(this.featuresEnabled.indexOf(e), 1) : this.featuresEnabled.push(e)
                            },
                            zoom: function(e) {
                                var n = this.$el.querySelector(".hocr-viewer-container")
                                  , r = t.HocrDOM.getHocrProperties(t.HocrDOM.queryHocr(n)).bbox;
                                "string" == typeof e && ("height" === e ? e = window.innerHeight / r[3] : "width" === e ? e = window.innerWidth / r[2] : "reset" === e ? e = 1 : e.match(/^[+-]/) ? e = this.currentZoom + parseFloat(e) : console.error("Bad scaleFactor: '".concat(e, "'"))),
                                this.currentZoom = e,
                                this.$emit("scale-to", this.config.scaleFactor)
                            }
                        }
                    };
                    n(292);
                    var g = a(v, e, [], !1, null, null, null);
                    g.options.__file = "src/components/HocrViewer/index.vue";
                    const m = g.exports;
                    var b = n(892)
                      , y = n(524);
                    const A = {
                        HocrViewer: m,
                        HocrViewerStyle: b.Z,
                        HocrToolbar: c,
                        HocrToolbarStyle: y.Z
                    }
                }
                )(),
                r
            }
            )()
        }
        ,
        438: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>s
            });
            var r = n(15)
              , o = n.n(r)
              , i = n(645)
              , a = n.n(i)()(o());
            a.push([e.id, '/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace, monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}\n', "", {
                version: 3,
                sources: ["webpack://./node_modules/normalize.css/normalize.css"],
                names: [],
                mappings: "AAAA,2EAAA,CAA4E,KAW1E,gBAAiB,CACjB,6BAA8B,CAC/B,KAUC,QAAS,CACV,KAOC,aAAc,CACf,GAQC,aAAc,CACd,eAAgB,CACjB,GAWC,sBAAuB,CACvB,QAAS,CACT,gBAAiB,CAClB,IAQC,gCAAiC,CACjC,aAAc,CACf,EAUC,4BAA6B,CAC9B,YAQC,kBAAmB,CACnB,yBAA0B,CAC1B,gCAAiC,CAClC,SAQC,kBAAmB,CACpB,cAUC,gCAAiC,CACjC,aAAc,CACf,MAOC,aAAc,CACf,QASC,aAAc,CACd,aAAc,CACd,iBAAkB,CAClB,uBAAwB,CACzB,IAGC,cAAe,CAChB,IAGC,UAAW,CACZ,IAUC,iBAAkB,CACnB,sCAeC,mBAAoB,CACpB,cAAe,CACf,gBAAiB,CACjB,QAAS,CACV,aASC,gBAAiB,CAClB,cASC,mBAAoB,CACrB,sDAUC,yBAA0B,CAC3B,8HAUC,iBAAkB,CAClB,SAAU,CACX,kHAUC,6BAA8B,CAC/B,SAOC,6BAA8B,CAC/B,OAUC,qBAAsB,CACtB,aAAc,CACd,aAAc,CACd,cAAe,CACf,SAAU,CACV,kBAAmB,CACpB,SAOC,uBAAwB,CACzB,SAOC,aAAc,CACf,iCASC,qBAAsB,CACtB,SAAU,CACX,sFAQC,WAAY,CACb,gBAQC,4BAA6B,CAC7B,mBAAoB,CACrB,2CAOC,uBAAwB,CACzB,6BAQC,yBAA0B,CAC1B,YAAa,CACd,QAUC,aAAc,CACf,QAOC,iBAAkB,CACnB,SAUC,YAAa,CACd,SAOC,YAAa",
                sourcesContent: ['/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n'],
                sourceRoot: ""
            }]);
            const s = a
        }
        ,
        146: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>s
            });
            var r = n(15)
              , o = n.n(r)
              , i = n(645)
              , a = n.n(i)()(o());
            a.push([e.id, "html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}\n", "", {
                version: 3,
                sources: ["webpack://./src/normalize.scss"],
                names: [],
                mappings: "AAOA,KACE,sBAAuB,CACvB,gBAAiB,CACjB,yBAA0B,CAC1B,6BAA8B",
                sourcesContent: ["/*\n * Copyright (c) 2016-2017 Konstantin Baierer\n *\n * This software may be modified and distributed under the terms\n * of the MIT license.  See the LICENSE file for details.\n */\n\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\n"],
                sourceRoot: ""
            }]);
            const s = a
        }
        ,
        645: e=>{
            "use strict";
            e.exports = function(e) {
                var t = [];
                return t.toString = function() {
                    return this.map((function(t) {
                        var n = e(t);
                        return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n
                    }
                    )).join("")
                }
                ,
                t.i = function(e, n, r) {
                    "string" == typeof e && (e = [[null, e, ""]]);
                    var o = {};
                    if (r)
                        for (var i = 0; i < this.length; i++) {
                            var a = this[i][0];
                            null != a && (o[a] = !0)
                        }
                    for (var s = 0; s < e.length; s++) {
                        var c = [].concat(e[s]);
                        r && o[c[0]] || (n && (c[2] ? c[2] = "".concat(n, " and ").concat(c[2]) : c[2] = n),
                        t.push(c))
                    }
                }
                ,
                t
            }
        }
        ,
        15: e=>{
            "use strict";
            function t(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            e.exports = function(e) {
                var n, r, o = (r = 4,
                function(e) {
                    if (Array.isArray(e))
                        return e
                }(n = e) || function(e, t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                        var n = []
                          , r = !0
                          , o = !1
                          , i = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value),
                            !t || n.length !== t); r = !0)
                                ;
                        } catch (e) {
                            o = !0,
                            i = e
                        } finally {
                            try {
                                r || null == s.return || s.return()
                            } finally {
                                if (o)
                                    throw i
                            }
                        }
                        return n
                    }
                }(n, r) || function(e, n) {
                    if (e) {
                        if ("string" == typeof e)
                            return t(e, n);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name),
                        "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? t(e, n) : void 0
                    }
                }(n, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()), i = o[1], a = o[3];
                if ("function" == typeof btoa) {
                    var s = btoa(unescape(encodeURIComponent(JSON.stringify(a))))
                      , c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s)
                      , l = "/*# ".concat(c, " */")
                      , u = a.sources.map((function(e) {
                        return "/*# sourceURL=".concat(a.sourceRoot || "").concat(e, " */")
                    }
                    ));
                    return [i].concat(u).concat([l]).join("\n")
                }
                return [i].join("\n")
            }
        }
        ,
        379: (e,t,n)=>{
            "use strict";
            var r, o = function() {
                var e = {};
                return function(t) {
                    if (void 0 === e[t]) {
                        var n = document.querySelector(t);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                            try {
                                n = n.contentDocument.head
                            } catch (e) {
                                n = null
                            }
                        e[t] = n
                    }
                    return e[t]
                }
            }(), i = [];
            function a(e) {
                for (var t = -1, n = 0; n < i.length; n++)
                    if (i[n].identifier === e) {
                        t = n;
                        break
                    }
                return t
            }
            function s(e, t) {
                for (var n = {}, r = [], o = 0; o < e.length; o++) {
                    var s = e[o]
                      , c = t.base ? s[0] + t.base : s[0]
                      , l = n[c] || 0
                      , u = "".concat(c, " ").concat(l);
                    n[c] = l + 1;
                    var f = a(u)
                      , d = {
                        css: s[1],
                        media: s[2],
                        sourceMap: s[3]
                    };
                    -1 !== f ? (i[f].references++,
                    i[f].updater(d)) : i.push({
                        identifier: u,
                        updater: v(d, t),
                        references: 1
                    }),
                    r.push(u)
                }
                return r
            }
            function c(e) {
                var t = document.createElement("style")
                  , r = e.attributes || {};
                if (void 0 === r.nonce) {
                    var i = n.nc;
                    i && (r.nonce = i)
                }
                if (Object.keys(r).forEach((function(e) {
                    t.setAttribute(e, r[e])
                }
                )),
                "function" == typeof e.insert)
                    e.insert(t);
                else {
                    var a = o(e.insert || "head");
                    if (!a)
                        throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    a.appendChild(t)
                }
                return t
            }
            var l, u = (l = [],
            function(e, t) {
                return l[e] = t,
                l.filter(Boolean).join("\n")
            }
            );
            function f(e, t, n, r) {
                var o = n ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
                if (e.styleSheet)
                    e.styleSheet.cssText = u(t, o);
                else {
                    var i = document.createTextNode(o)
                      , a = e.childNodes;
                    a[t] && e.removeChild(a[t]),
                    a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
                }
            }
            function d(e, t, n) {
                var r = n.css
                  , o = n.media
                  , i = n.sourceMap;
                if (o ? e.setAttribute("media", o) : e.removeAttribute("media"),
                i && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")),
                e.styleSheet)
                    e.styleSheet.cssText = r;
                else {
                    for (; e.firstChild; )
                        e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(r))
                }
            }
            var p = null
              , h = 0;
            function v(e, t) {
                var n, r, o;
                if (t.singleton) {
                    var i = h++;
                    n = p || (p = c(t)),
                    r = f.bind(null, n, i, !1),
                    o = f.bind(null, n, i, !0)
                } else
                    n = c(t),
                    r = d.bind(null, n, t),
                    o = function() {
                        !function(e) {
                            if (null === e.parentNode)
                                return !1;
                            e.parentNode.removeChild(e)
                        }(n)
                    }
                    ;
                return r(e),
                function(t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
                            return;
                        r(e = t)
                    } else
                        o()
                }
            }
            e.exports = function(e, t) {
                (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = (void 0 === r && (r = Boolean(window && document && document.all && !window.atob)),
                r));
                var n = s(e = e || [], t);
                return function(e) {
                    if (e = e || [],
                    "[object Array]" === Object.prototype.toString.call(e)) {
                        for (var r = 0; r < n.length; r++) {
                            var o = a(n[r]);
                            i[o].references--
                        }
                        for (var c = s(e, t), l = 0; l < n.length; l++) {
                            var u = a(n[l]);
                            0 === i[u].references && (i[u].updater(),
                            i.splice(u, 1))
                        }
                        n = c
                    }
                }
            }
        }
    }
      , t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var o = t[r] = {
            id: r,
            exports: {}
        };
        return e[r](o, o.exports, n),
        o.exports
    }
    n.n = e=>{
        var t = e && e.__esModule ? ()=>e.default : ()=>e;
        return n.d(t, {
            a: t
        }),
        t
    }
    ,
    n.d = (e,t)=>{
        for (var r in t)
            n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
    }
    ,
    n.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    n.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
    (()=>{
        "use strict";
        var e = Object.freeze({});
        function t(e) {
            return null == e
        }
        function r(e) {
            return null != e
        }
        function o(e) {
            return !0 === e
        }
        function i(e) {
            return "string" == typeof e || "number" == typeof e || "symbol" == typeof e || "boolean" == typeof e
        }
        function a(e) {
            return null !== e && "object" == typeof e
        }
        var s = Object.prototype.toString;
        function c(e) {
            return "[object Object]" === s.call(e)
        }
        function l(e) {
            var t = parseFloat(String(e));
            return t >= 0 && Math.floor(t) === t && isFinite(e)
        }
        function u(e) {
            return r(e) && "function" == typeof e.then && "function" == typeof e.catch
        }
        function f(e) {
            return null == e ? "" : Array.isArray(e) || c(e) && e.toString === s ? JSON.stringify(e, null, 2) : String(e)
        }
        function d(e) {
            var t = parseFloat(e);
            return isNaN(t) ? e : t
        }
        function p(e, t) {
            for (var n = Object.create(null), r = e.split(","), o = 0; o < r.length; o++)
                n[r[o]] = !0;
            return t ? function(e) {
                return n[e.toLowerCase()]
            }
            : function(e) {
                return n[e]
            }
        }
        var h = p("slot,component", !0)
          , v = p("key,ref,slot,slot-scope,is");
        function g(e, t) {
            if (e.length) {
                var n = e.indexOf(t);
                if (n > -1)
                    return e.splice(n, 1)
            }
        }
        var m = Object.prototype.hasOwnProperty;
        function b(e, t) {
            return m.call(e, t)
        }
        function y(e) {
            var t = Object.create(null);
            return function(n) {
                return t[n] || (t[n] = e(n))
            }
        }
        var A = /-(\w)/g
          , C = y((function(e) {
            return e.replace(A, (function(e, t) {
                return t ? t.toUpperCase() : ""
            }
            ))
        }
        ))
          , w = y((function(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }
        ))
          , _ = /\B([A-Z])/g
          , $ = y((function(e) {
            return e.replace(_, "-$1").toLowerCase()
        }
        ))
          , k = Function.prototype.bind ? function(e, t) {
            return e.bind(t)
        }
        : function(e, t) {
            function n(n) {
                var r = arguments.length;
                return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t)
            }
            return n._length = e.length,
            n
        }
        ;
        function B(e, t) {
            t = t || 0;
            for (var n = e.length - t, r = new Array(n); n--; )
                r[n] = e[n + t];
            return r
        }
        function x(e, t) {
            for (var n in t)
                e[n] = t[n];
            return e
        }
        function S(e) {
            for (var t = {}, n = 0; n < e.length; n++)
                e[n] && x(t, e[n]);
            return t
        }
        function O(e, t, n) {}
        var j = function(e, t, n) {
            return !1
        }
          , E = function(e) {
            return e
        };
        function T(e, t) {
            if (e === t)
                return !0;
            var n = a(e)
              , r = a(t);
            if (!n || !r)
                return !n && !r && String(e) === String(t);
            try {
                var o = Array.isArray(e)
                  , i = Array.isArray(t);
                if (o && i)
                    return e.length === t.length && e.every((function(e, n) {
                        return T(e, t[n])
                    }
                    ));
                if (e instanceof Date && t instanceof Date)
                    return e.getTime() === t.getTime();
                if (o || i)
                    return !1;
                var s = Object.keys(e)
                  , c = Object.keys(t);
                return s.length === c.length && s.every((function(n) {
                    return T(e[n], t[n])
                }
                ))
            } catch (e) {
                return !1
            }
        }
        function D(e, t) {
            for (var n = 0; n < e.length; n++)
                if (T(e[n], t))
                    return n;
            return -1
        }
        function I(e) {
            var t = !1;
            return function() {
                t || (t = !0,
                e.apply(this, arguments))
            }
        }
        var H = "data-server-rendered"
          , M = ["component", "directive", "filter"]
          , P = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"]
          , z = {
            optionMergeStrategies: Object.create(null),
            silent: !1,
            productionTip: !1,
            devtools: !1,
            performance: !1,
            errorHandler: null,
            warnHandler: null,
            ignoredElements: [],
            keyCodes: Object.create(null),
            isReservedTag: j,
            isReservedAttr: j,
            isUnknownElement: j,
            getTagNamespace: O,
            parsePlatformTagName: E,
            mustUseProp: j,
            async: !0,
            _lifecycleHooks: P
        }
          , F = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
        function N(e) {
            var t = (e + "").charCodeAt(0);
            return 36 === t || 95 === t
        }
        function L(e, t, n, r) {
            Object.defineProperty(e, t, {
                value: n,
                enumerable: !!r,
                writable: !0,
                configurable: !0
            })
        }
        var R, U = new RegExp("[^" + F.source + ".$_\\d]"), q = "__proto__"in {}, V = "undefined" != typeof window, Z = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform, Y = Z && WXEnvironment.platform.toLowerCase(), W = V && window.navigator.userAgent.toLowerCase(), K = W && /msie|trident/.test(W), X = W && W.indexOf("msie 9.0") > 0, G = W && W.indexOf("edge/") > 0, Q = (W && W.indexOf("android"),
        W && /iphone|ipad|ipod|ios/.test(W) || "ios" === Y), J = (W && /chrome\/\d+/.test(W),
        W && /phantomjs/.test(W),
        W && W.match(/firefox\/(\d+)/)), ee = {}.watch, te = !1;
        if (V)
            try {
                var ne = {};
                Object.defineProperty(ne, "passive", {
                    get: function() {
                        te = !0
                    }
                }),
                window.addEventListener("test-passive", null, ne)
            } catch (e) {}
        var re = function() {
            return void 0 === R && (R = !V && !Z && void 0 !== n.g && n.g.process && "server" === n.g.process.env.VUE_ENV),
            R
        }
          , oe = V && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
        function ie(e) {
            return "function" == typeof e && /native code/.test(e.toString())
        }
        var ae, se = "undefined" != typeof Symbol && ie(Symbol) && "undefined" != typeof Reflect && ie(Reflect.ownKeys);
        ae = "undefined" != typeof Set && ie(Set) ? Set : function() {
            function e() {
                this.set = Object.create(null)
            }
            return e.prototype.has = function(e) {
                return !0 === this.set[e]
            }
            ,
            e.prototype.add = function(e) {
                this.set[e] = !0
            }
            ,
            e.prototype.clear = function() {
                this.set = Object.create(null)
            }
            ,
            e
        }();
        var ce = O
          , le = 0
          , ue = function() {
            this.id = le++,
            this.subs = []
        };
        ue.prototype.addSub = function(e) {
            this.subs.push(e)
        }
        ,
        ue.prototype.removeSub = function(e) {
            g(this.subs, e)
        }
        ,
        ue.prototype.depend = function() {
            ue.target && ue.target.addDep(this)
        }
        ,
        ue.prototype.notify = function() {
            for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++)
                e[t].update()
        }
        ,
        ue.target = null;
        var fe = [];
        function de(e) {
            fe.push(e),
            ue.target = e
        }
        function pe() {
            fe.pop(),
            ue.target = fe[fe.length - 1]
        }
        var he = function(e, t, n, r, o, i, a, s) {
            this.tag = e,
            this.data = t,
            this.children = n,
            this.text = r,
            this.elm = o,
            this.ns = void 0,
            this.context = i,
            this.fnContext = void 0,
            this.fnOptions = void 0,
            this.fnScopeId = void 0,
            this.key = t && t.key,
            this.componentOptions = a,
            this.componentInstance = void 0,
            this.parent = void 0,
            this.raw = !1,
            this.isStatic = !1,
            this.isRootInsert = !0,
            this.isComment = !1,
            this.isCloned = !1,
            this.isOnce = !1,
            this.asyncFactory = s,
            this.asyncMeta = void 0,
            this.isAsyncPlaceholder = !1
        }
          , ve = {
            child: {
                configurable: !0
            }
        };
        ve.child.get = function() {
            return this.componentInstance
        }
        ,
        Object.defineProperties(he.prototype, ve);
        var ge = function(e) {
            void 0 === e && (e = "");
            var t = new he;
            return t.text = e,
            t.isComment = !0,
            t
        };
        function me(e) {
            return new he(void 0,void 0,void 0,String(e))
        }
        function be(e) {
            var t = new he(e.tag,e.data,e.children && e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);
            return t.ns = e.ns,
            t.isStatic = e.isStatic,
            t.key = e.key,
            t.isComment = e.isComment,
            t.fnContext = e.fnContext,
            t.fnOptions = e.fnOptions,
            t.fnScopeId = e.fnScopeId,
            t.asyncMeta = e.asyncMeta,
            t.isCloned = !0,
            t
        }
        var ye = Array.prototype
          , Ae = Object.create(ye);
        ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach((function(e) {
            var t = ye[e];
            L(Ae, e, (function() {
                for (var n = [], r = arguments.length; r--; )
                    n[r] = arguments[r];
                var o, i = t.apply(this, n), a = this.__ob__;
                switch (e) {
                case "push":
                case "unshift":
                    o = n;
                    break;
                case "splice":
                    o = n.slice(2)
                }
                return o && a.observeArray(o),
                a.dep.notify(),
                i
            }
            ))
        }
        ));
        var Ce = Object.getOwnPropertyNames(Ae)
          , we = !0;
        function _e(e) {
            we = e
        }
        var $e = function(e) {
            this.value = e,
            this.dep = new ue,
            this.vmCount = 0,
            L(e, "__ob__", this),
            Array.isArray(e) ? (q ? function(e, t) {
                e.__proto__ = t
            }(e, Ae) : function(e, t, n) {
                for (var r = 0, o = n.length; r < o; r++) {
                    var i = n[r];
                    L(e, i, t[i])
                }
            }(e, Ae, Ce),
            this.observeArray(e)) : this.walk(e)
        };
        function ke(e, t) {
            var n;
            if (a(e) && !(e instanceof he))
                return b(e, "__ob__") && e.__ob__ instanceof $e ? n = e.__ob__ : we && !re() && (Array.isArray(e) || c(e)) && Object.isExtensible(e) && !e._isVue && (n = new $e(e)),
                t && n && n.vmCount++,
                n
        }
        function Be(e, t, n, r, o) {
            var i = new ue
              , a = Object.getOwnPropertyDescriptor(e, t);
            if (!a || !1 !== a.configurable) {
                var s = a && a.get
                  , c = a && a.set;
                s && !c || 2 !== arguments.length || (n = e[t]);
                var l = !o && ke(n);
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: function() {
                        var t = s ? s.call(e) : n;
                        return ue.target && (i.depend(),
                        l && (l.dep.depend(),
                        Array.isArray(t) && Oe(t))),
                        t
                    },
                    set: function(t) {
                        var r = s ? s.call(e) : n;
                        t === r || t != t && r != r || s && !c || (c ? c.call(e, t) : n = t,
                        l = !o && ke(t),
                        i.notify())
                    }
                })
            }
        }
        function xe(e, t, n) {
            if (Array.isArray(e) && l(t))
                return e.length = Math.max(e.length, t),
                e.splice(t, 1, n),
                n;
            if (t in e && !(t in Object.prototype))
                return e[t] = n,
                n;
            var r = e.__ob__;
            return e._isVue || r && r.vmCount ? n : r ? (Be(r.value, t, n),
            r.dep.notify(),
            n) : (e[t] = n,
            n)
        }
        function Se(e, t) {
            if (Array.isArray(e) && l(t))
                e.splice(t, 1);
            else {
                var n = e.__ob__;
                e._isVue || n && n.vmCount || b(e, t) && (delete e[t],
                n && n.dep.notify())
            }
        }
        function Oe(e) {
            for (var t = void 0, n = 0, r = e.length; n < r; n++)
                (t = e[n]) && t.__ob__ && t.__ob__.dep.depend(),
                Array.isArray(t) && Oe(t)
        }
        $e.prototype.walk = function(e) {
            for (var t = Object.keys(e), n = 0; n < t.length; n++)
                Be(e, t[n])
        }
        ,
        $e.prototype.observeArray = function(e) {
            for (var t = 0, n = e.length; t < n; t++)
                ke(e[t])
        }
        ;
        var je = z.optionMergeStrategies;
        function Ee(e, t) {
            if (!t)
                return e;
            for (var n, r, o, i = se ? Reflect.ownKeys(t) : Object.keys(t), a = 0; a < i.length; a++)
                "__ob__" !== (n = i[a]) && (r = e[n],
                o = t[n],
                b(e, n) ? r !== o && c(r) && c(o) && Ee(r, o) : xe(e, n, o));
            return e
        }
        function Te(e, t, n) {
            return n ? function() {
                var r = "function" == typeof t ? t.call(n, n) : t
                  , o = "function" == typeof e ? e.call(n, n) : e;
                return r ? Ee(r, o) : o
            }
            : t ? e ? function() {
                return Ee("function" == typeof t ? t.call(this, this) : t, "function" == typeof e ? e.call(this, this) : e)
            }
            : t : e
        }
        function De(e, t) {
            var n = t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e;
            return n ? function(e) {
                for (var t = [], n = 0; n < e.length; n++)
                    -1 === t.indexOf(e[n]) && t.push(e[n]);
                return t
            }(n) : n
        }
        function Ie(e, t, n, r) {
            var o = Object.create(e || null);
            return t ? x(o, t) : o
        }
        je.data = function(e, t, n) {
            return n ? Te(e, t, n) : t && "function" != typeof t ? e : Te(e, t)
        }
        ,
        P.forEach((function(e) {
            je[e] = De
        }
        )),
        M.forEach((function(e) {
            je[e + "s"] = Ie
        }
        )),
        je.watch = function(e, t, n, r) {
            if (e === ee && (e = void 0),
            t === ee && (t = void 0),
            !t)
                return Object.create(e || null);
            if (!e)
                return t;
            var o = {};
            for (var i in x(o, e),
            t) {
                var a = o[i]
                  , s = t[i];
                a && !Array.isArray(a) && (a = [a]),
                o[i] = a ? a.concat(s) : Array.isArray(s) ? s : [s]
            }
            return o
        }
        ,
        je.props = je.methods = je.inject = je.computed = function(e, t, n, r) {
            if (!e)
                return t;
            var o = Object.create(null);
            return x(o, e),
            t && x(o, t),
            o
        }
        ,
        je.provide = Te;
        var He = function(e, t) {
            return void 0 === t ? e : t
        };
        function Me(e, t, n) {
            if ("function" == typeof t && (t = t.options),
            function(e, t) {
                var n = e.props;
                if (n) {
                    var r, o, i = {};
                    if (Array.isArray(n))
                        for (r = n.length; r--; )
                            "string" == typeof (o = n[r]) && (i[C(o)] = {
                                type: null
                            });
                    else if (c(n))
                        for (var a in n)
                            o = n[a],
                            i[C(a)] = c(o) ? o : {
                                type: o
                            };
                    e.props = i
                }
            }(t),
            function(e, t) {
                var n = e.inject;
                if (n) {
                    var r = e.inject = {};
                    if (Array.isArray(n))
                        for (var o = 0; o < n.length; o++)
                            r[n[o]] = {
                                from: n[o]
                            };
                    else if (c(n))
                        for (var i in n) {
                            var a = n[i];
                            r[i] = c(a) ? x({
                                from: i
                            }, a) : {
                                from: a
                            }
                        }
                }
            }(t),
            function(e) {
                var t = e.directives;
                if (t)
                    for (var n in t) {
                        var r = t[n];
                        "function" == typeof r && (t[n] = {
                            bind: r,
                            update: r
                        })
                    }
            }(t),
            !t._base && (t.extends && (e = Me(e, t.extends, n)),
            t.mixins))
                for (var r = 0, o = t.mixins.length; r < o; r++)
                    e = Me(e, t.mixins[r], n);
            var i, a = {};
            for (i in e)
                s(i);
            for (i in t)
                b(e, i) || s(i);
            function s(r) {
                var o = je[r] || He;
                a[r] = o(e[r], t[r], n, r)
            }
            return a
        }
        function Pe(e, t, n, r) {
            if ("string" == typeof n) {
                var o = e[t];
                if (b(o, n))
                    return o[n];
                var i = C(n);
                if (b(o, i))
                    return o[i];
                var a = w(i);
                return b(o, a) ? o[a] : o[n] || o[i] || o[a]
            }
        }
        function ze(e, t, n, r) {
            var o = t[e]
              , i = !b(n, e)
              , a = n[e]
              , s = Le(Boolean, o.type);
            if (s > -1)
                if (i && !b(o, "default"))
                    a = !1;
                else if ("" === a || a === $(e)) {
                    var c = Le(String, o.type);
                    (c < 0 || s < c) && (a = !0)
                }
            if (void 0 === a) {
                a = function(e, t, n) {
                    if (b(t, "default")) {
                        var r = t.default;
                        return e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n] ? e._props[n] : "function" == typeof r && "Function" !== Fe(t.type) ? r.call(e) : r
                    }
                }(r, o, e);
                var l = we;
                _e(!0),
                ke(a),
                _e(l)
            }
            return a
        }
        function Fe(e) {
            var t = e && e.toString().match(/^\s*function (\w+)/);
            return t ? t[1] : ""
        }
        function Ne(e, t) {
            return Fe(e) === Fe(t)
        }
        function Le(e, t) {
            if (!Array.isArray(t))
                return Ne(t, e) ? 0 : -1;
            for (var n = 0, r = t.length; n < r; n++)
                if (Ne(t[n], e))
                    return n;
            return -1
        }
        function Re(e, t, n) {
            de();
            try {
                if (t)
                    for (var r = t; r = r.$parent; ) {
                        var o = r.$options.errorCaptured;
                        if (o)
                            for (var i = 0; i < o.length; i++)
                                try {
                                    if (!1 === o[i].call(r, e, t, n))
                                        return
                                } catch (e) {
                                    qe(e, r, "errorCaptured hook")
                                }
                    }
                qe(e, t, n)
            } finally {
                pe()
            }
        }
        function Ue(e, t, n, r, o) {
            var i;
            try {
                (i = n ? e.apply(t, n) : e.call(t)) && !i._isVue && u(i) && !i._handled && (i.catch((function(e) {
                    return Re(e, r, o + " (Promise/async)")
                }
                )),
                i._handled = !0)
            } catch (e) {
                Re(e, r, o)
            }
            return i
        }
        function qe(e, t, n) {
            if (z.errorHandler)
                try {
                    return z.errorHandler.call(null, e, t, n)
                } catch (t) {
                    t !== e && Ve(t)
                }
            Ve(e)
        }
        function Ve(e, t, n) {
            if (!V && !Z || "undefined" == typeof console)
                throw e;
            console.error(e)
        }
        var Ze, Ye = !1, We = [], Ke = !1;
        function Xe() {
            Ke = !1;
            var e = We.slice(0);
            We.length = 0;
            for (var t = 0; t < e.length; t++)
                e[t]()
        }
        if ("undefined" != typeof Promise && ie(Promise)) {
            var Ge = Promise.resolve();
            Ze = function() {
                Ge.then(Xe),
                Q && setTimeout(O)
            }
            ,
            Ye = !0
        } else if (K || "undefined" == typeof MutationObserver || !ie(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString())
            Ze = "undefined" != typeof setImmediate && ie(setImmediate) ? function() {
                setImmediate(Xe)
            }
            : function() {
                setTimeout(Xe, 0)
            }
            ;
        else {
            var Qe = 1
              , Je = new MutationObserver(Xe)
              , et = document.createTextNode(String(Qe));
            Je.observe(et, {
                characterData: !0
            }),
            Ze = function() {
                Qe = (Qe + 1) % 2,
                et.data = String(Qe)
            }
            ,
            Ye = !0
        }
        function tt(e, t) {
            var n;
            if (We.push((function() {
                if (e)
                    try {
                        e.call(t)
                    } catch (e) {
                        Re(e, t, "nextTick")
                    }
                else
                    n && n(t)
            }
            )),
            Ke || (Ke = !0,
            Ze()),
            !e && "undefined" != typeof Promise)
                return new Promise((function(e) {
                    n = e
                }
                ))
        }
        var nt = new ae;
        function rt(e) {
            ot(e, nt),
            nt.clear()
        }
        function ot(e, t) {
            var n, r, o = Array.isArray(e);
            if (!(!o && !a(e) || Object.isFrozen(e) || e instanceof he)) {
                if (e.__ob__) {
                    var i = e.__ob__.dep.id;
                    if (t.has(i))
                        return;
                    t.add(i)
                }
                if (o)
                    for (n = e.length; n--; )
                        ot(e[n], t);
                else
                    for (n = (r = Object.keys(e)).length; n--; )
                        ot(e[r[n]], t)
            }
        }
        var it = y((function(e) {
            var t = "&" === e.charAt(0)
              , n = "~" === (e = t ? e.slice(1) : e).charAt(0)
              , r = "!" === (e = n ? e.slice(1) : e).charAt(0);
            return {
                name: e = r ? e.slice(1) : e,
                once: n,
                capture: r,
                passive: t
            }
        }
        ));
        function at(e, t) {
            function n() {
                var e = arguments
                  , r = n.fns;
                if (!Array.isArray(r))
                    return Ue(r, null, arguments, t, "v-on handler");
                for (var o = r.slice(), i = 0; i < o.length; i++)
                    Ue(o[i], null, e, t, "v-on handler")
            }
            return n.fns = e,
            n
        }
        function st(e, n, r, i, a, s) {
            var c, l, u, f;
            for (c in e)
                l = e[c],
                u = n[c],
                f = it(c),
                t(l) || (t(u) ? (t(l.fns) && (l = e[c] = at(l, s)),
                o(f.once) && (l = e[c] = a(f.name, l, f.capture)),
                r(f.name, l, f.capture, f.passive, f.params)) : l !== u && (u.fns = l,
                e[c] = u));
            for (c in n)
                t(e[c]) && i((f = it(c)).name, n[c], f.capture)
        }
        function ct(e, n, i) {
            var a;
            e instanceof he && (e = e.data.hook || (e.data.hook = {}));
            var s = e[n];
            function c() {
                i.apply(this, arguments),
                g(a.fns, c)
            }
            t(s) ? a = at([c]) : r(s.fns) && o(s.merged) ? (a = s).fns.push(c) : a = at([s, c]),
            a.merged = !0,
            e[n] = a
        }
        function lt(e, t, n, o, i) {
            if (r(t)) {
                if (b(t, n))
                    return e[n] = t[n],
                    i || delete t[n],
                    !0;
                if (b(t, o))
                    return e[n] = t[o],
                    i || delete t[o],
                    !0
            }
            return !1
        }
        function ut(e) {
            return i(e) ? [me(e)] : Array.isArray(e) ? dt(e) : void 0
        }
        function ft(e) {
            return r(e) && r(e.text) && !1 === e.isComment
        }
        function dt(e, n) {
            var a, s, c, l, u = [];
            for (a = 0; a < e.length; a++)
                t(s = e[a]) || "boolean" == typeof s || (l = u[c = u.length - 1],
                Array.isArray(s) ? s.length > 0 && (ft((s = dt(s, (n || "") + "_" + a))[0]) && ft(l) && (u[c] = me(l.text + s[0].text),
                s.shift()),
                u.push.apply(u, s)) : i(s) ? ft(l) ? u[c] = me(l.text + s) : "" !== s && u.push(me(s)) : ft(s) && ft(l) ? u[c] = me(l.text + s.text) : (o(e._isVList) && r(s.tag) && t(s.key) && r(n) && (s.key = "__vlist" + n + "_" + a + "__"),
                u.push(s)));
            return u
        }
        function pt(e, t) {
            if (e) {
                for (var n = Object.create(null), r = se ? Reflect.ownKeys(e) : Object.keys(e), o = 0; o < r.length; o++) {
                    var i = r[o];
                    if ("__ob__" !== i) {
                        for (var a = e[i].from, s = t; s; ) {
                            if (s._provided && b(s._provided, a)) {
                                n[i] = s._provided[a];
                                break
                            }
                            s = s.$parent
                        }
                        if (!s && "default"in e[i]) {
                            var c = e[i].default;
                            n[i] = "function" == typeof c ? c.call(t) : c
                        }
                    }
                }
                return n
            }
        }
        function ht(e, t) {
            if (!e || !e.length)
                return {};
            for (var n = {}, r = 0, o = e.length; r < o; r++) {
                var i = e[r]
                  , a = i.data;
                if (a && a.attrs && a.attrs.slot && delete a.attrs.slot,
                i.context !== t && i.fnContext !== t || !a || null == a.slot)
                    (n.default || (n.default = [])).push(i);
                else {
                    var s = a.slot
                      , c = n[s] || (n[s] = []);
                    "template" === i.tag ? c.push.apply(c, i.children || []) : c.push(i)
                }
            }
            for (var l in n)
                n[l].every(vt) && delete n[l];
            return n
        }
        function vt(e) {
            return e.isComment && !e.asyncFactory || " " === e.text
        }
        function gt(t, n, r) {
            var o, i = Object.keys(n).length > 0, a = t ? !!t.$stable : !i, s = t && t.$key;
            if (t) {
                if (t._normalized)
                    return t._normalized;
                if (a && r && r !== e && s === r.$key && !i && !r.$hasNormal)
                    return r;
                for (var c in o = {},
                t)
                    t[c] && "$" !== c[0] && (o[c] = mt(n, c, t[c]))
            } else
                o = {};
            for (var l in n)
                l in o || (o[l] = bt(n, l));
            return t && Object.isExtensible(t) && (t._normalized = o),
            L(o, "$stable", a),
            L(o, "$key", s),
            L(o, "$hasNormal", i),
            o
        }
        function mt(e, t, n) {
            var r = function() {
                var e = arguments.length ? n.apply(null, arguments) : n({});
                return (e = e && "object" == typeof e && !Array.isArray(e) ? [e] : ut(e)) && (0 === e.length || 1 === e.length && e[0].isComment) ? void 0 : e
            };
            return n.proxy && Object.defineProperty(e, t, {
                get: r,
                enumerable: !0,
                configurable: !0
            }),
            r
        }
        function bt(e, t) {
            return function() {
                return e[t]
            }
        }
        function yt(e, t) {
            var n, o, i, s, c;
            if (Array.isArray(e) || "string" == typeof e)
                for (n = new Array(e.length),
                o = 0,
                i = e.length; o < i; o++)
                    n[o] = t(e[o], o);
            else if ("number" == typeof e)
                for (n = new Array(e),
                o = 0; o < e; o++)
                    n[o] = t(o + 1, o);
            else if (a(e))
                if (se && e[Symbol.iterator]) {
                    n = [];
                    for (var l = e[Symbol.iterator](), u = l.next(); !u.done; )
                        n.push(t(u.value, n.length)),
                        u = l.next()
                } else
                    for (s = Object.keys(e),
                    n = new Array(s.length),
                    o = 0,
                    i = s.length; o < i; o++)
                        c = s[o],
                        n[o] = t(e[c], c, o);
            return r(n) || (n = []),
            n._isVList = !0,
            n
        }
        function At(e, t, n, r) {
            var o, i = this.$scopedSlots[e];
            i ? (n = n || {},
            r && (n = x(x({}, r), n)),
            o = i(n) || t) : o = this.$slots[e] || t;
            var a = n && n.slot;
            return a ? this.$createElement("template", {
                slot: a
            }, o) : o
        }
        function Ct(e) {
            return Pe(this.$options, "filters", e) || E
        }
        function wt(e, t) {
            return Array.isArray(e) ? -1 === e.indexOf(t) : e !== t
        }
        function _t(e, t, n, r, o) {
            var i = z.keyCodes[t] || n;
            return o && r && !z.keyCodes[t] ? wt(o, r) : i ? wt(i, e) : r ? $(r) !== t : void 0
        }
        function $t(e, t, n, r, o) {
            if (n && a(n)) {
                var i;
                Array.isArray(n) && (n = S(n));
                var s = function(a) {
                    if ("class" === a || "style" === a || v(a))
                        i = e;
                    else {
                        var s = e.attrs && e.attrs.type;
                        i = r || z.mustUseProp(t, s, a) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {})
                    }
                    var c = C(a)
                      , l = $(a);
                    c in i || l in i || (i[a] = n[a],
                    o && ((e.on || (e.on = {}))["update:" + a] = function(e) {
                        n[a] = e
                    }
                    ))
                };
                for (var c in n)
                    s(c)
            }
            return e
        }
        function kt(e, t) {
            var n = this._staticTrees || (this._staticTrees = [])
              , r = n[e];
            return r && !t || xt(r = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), "__static__" + e, !1),
            r
        }
        function Bt(e, t, n) {
            return xt(e, "__once__" + t + (n ? "_" + n : ""), !0),
            e
        }
        function xt(e, t, n) {
            if (Array.isArray(e))
                for (var r = 0; r < e.length; r++)
                    e[r] && "string" != typeof e[r] && St(e[r], t + "_" + r, n);
            else
                St(e, t, n)
        }
        function St(e, t, n) {
            e.isStatic = !0,
            e.key = t,
            e.isOnce = n
        }
        function Ot(e, t) {
            if (t && c(t)) {
                var n = e.on = e.on ? x({}, e.on) : {};
                for (var r in t) {
                    var o = n[r]
                      , i = t[r];
                    n[r] = o ? [].concat(o, i) : i
                }
            }
            return e
        }
        function jt(e, t, n, r) {
            t = t || {
                $stable: !n
            };
            for (var o = 0; o < e.length; o++) {
                var i = e[o];
                Array.isArray(i) ? jt(i, t, n) : i && (i.proxy && (i.fn.proxy = !0),
                t[i.key] = i.fn)
            }
            return r && (t.$key = r),
            t
        }
        function Et(e, t) {
            for (var n = 0; n < t.length; n += 2) {
                var r = t[n];
                "string" == typeof r && r && (e[t[n]] = t[n + 1])
            }
            return e
        }
        function Tt(e, t) {
            return "string" == typeof e ? t + e : e
        }
        function Dt(e) {
            e._o = Bt,
            e._n = d,
            e._s = f,
            e._l = yt,
            e._t = At,
            e._q = T,
            e._i = D,
            e._m = kt,
            e._f = Ct,
            e._k = _t,
            e._b = $t,
            e._v = me,
            e._e = ge,
            e._u = jt,
            e._g = Ot,
            e._d = Et,
            e._p = Tt
        }
        function It(t, n, r, i, a) {
            var s, c = this, l = a.options;
            b(i, "_uid") ? (s = Object.create(i))._original = i : (s = i,
            i = i._original);
            var u = o(l._compiled)
              , f = !u;
            this.data = t,
            this.props = n,
            this.children = r,
            this.parent = i,
            this.listeners = t.on || e,
            this.injections = pt(l.inject, i),
            this.slots = function() {
                return c.$slots || gt(t.scopedSlots, c.$slots = ht(r, i)),
                c.$slots
            }
            ,
            Object.defineProperty(this, "scopedSlots", {
                enumerable: !0,
                get: function() {
                    return gt(t.scopedSlots, this.slots())
                }
            }),
            u && (this.$options = l,
            this.$slots = this.slots(),
            this.$scopedSlots = gt(t.scopedSlots, this.$slots)),
            l._scopeId ? this._c = function(e, t, n, r) {
                var o = Lt(s, e, t, n, r, f);
                return o && !Array.isArray(o) && (o.fnScopeId = l._scopeId,
                o.fnContext = i),
                o
            }
            : this._c = function(e, t, n, r) {
                return Lt(s, e, t, n, r, f)
            }
        }
        function Ht(e, t, n, r, o) {
            var i = be(e);
            return i.fnContext = n,
            i.fnOptions = r,
            t.slot && ((i.data || (i.data = {})).slot = t.slot),
            i
        }
        function Mt(e, t) {
            for (var n in t)
                e[C(n)] = t[n]
        }
        Dt(It.prototype);
        var Pt = {
            init: function(e, t) {
                if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
                    var n = e;
                    Pt.prepatch(n, n)
                } else
                    (e.componentInstance = function(e, t) {
                        var n = {
                            _isComponent: !0,
                            _parentVnode: e,
                            parent: t
                        }
                          , o = e.data.inlineTemplate;
                        return r(o) && (n.render = o.render,
                        n.staticRenderFns = o.staticRenderFns),
                        new e.componentOptions.Ctor(n)
                    }(e, Qt)).$mount(t ? e.elm : void 0, t)
            },
            prepatch: function(t, n) {
                var r = n.componentOptions;
                !function(t, n, r, o, i) {
                    var a = o.data.scopedSlots
                      , s = t.$scopedSlots
                      , c = !!(a && !a.$stable || s !== e && !s.$stable || a && t.$scopedSlots.$key !== a.$key)
                      , l = !!(i || t.$options._renderChildren || c);
                    if (t.$options._parentVnode = o,
                    t.$vnode = o,
                    t._vnode && (t._vnode.parent = o),
                    t.$options._renderChildren = i,
                    t.$attrs = o.data.attrs || e,
                    t.$listeners = r || e,
                    n && t.$options.props) {
                        _e(!1);
                        for (var u = t._props, f = t.$options._propKeys || [], d = 0; d < f.length; d++) {
                            var p = f[d]
                              , h = t.$options.props;
                            u[p] = ze(p, h, n, t)
                        }
                        _e(!0),
                        t.$options.propsData = n
                    }
                    r = r || e;
                    var v = t.$options._parentListeners;
                    t.$options._parentListeners = r,
                    Gt(t, r, v),
                    l && (t.$slots = ht(i, o.context),
                    t.$forceUpdate())
                }(n.componentInstance = t.componentInstance, r.propsData, r.listeners, n, r.children)
            },
            insert: function(e) {
                var t, n = e.context, r = e.componentInstance;
                r._isMounted || (r._isMounted = !0,
                rn(r, "mounted")),
                e.data.keepAlive && (n._isMounted ? ((t = r)._inactive = !1,
                an.push(t)) : tn(r, !0))
            },
            destroy: function(e) {
                var t = e.componentInstance;
                t._isDestroyed || (e.data.keepAlive ? nn(t, !0) : t.$destroy())
            }
        }
          , zt = Object.keys(Pt);
        function Ft(n, i, s, c, l) {
            if (!t(n)) {
                var f = s.$options._base;
                if (a(n) && (n = f.extend(n)),
                "function" == typeof n) {
                    var d;
                    if (t(n.cid) && void 0 === (n = function(e, n) {
                        if (o(e.error) && r(e.errorComp))
                            return e.errorComp;
                        if (r(e.resolved))
                            return e.resolved;
                        var i = qt;
                        if (i && r(e.owners) && -1 === e.owners.indexOf(i) && e.owners.push(i),
                        o(e.loading) && r(e.loadingComp))
                            return e.loadingComp;
                        if (i && !r(e.owners)) {
                            var s = e.owners = [i]
                              , c = !0
                              , l = null
                              , f = null;
                            i.$on("hook:destroyed", (function() {
                                return g(s, i)
                            }
                            ));
                            var d = function(e) {
                                for (var t = 0, n = s.length; t < n; t++)
                                    s[t].$forceUpdate();
                                e && (s.length = 0,
                                null !== l && (clearTimeout(l),
                                l = null),
                                null !== f && (clearTimeout(f),
                                f = null))
                            }
                              , p = I((function(t) {
                                e.resolved = Vt(t, n),
                                c ? s.length = 0 : d(!0)
                            }
                            ))
                              , h = I((function(t) {
                                r(e.errorComp) && (e.error = !0,
                                d(!0))
                            }
                            ))
                              , v = e(p, h);
                            return a(v) && (u(v) ? t(e.resolved) && v.then(p, h) : u(v.component) && (v.component.then(p, h),
                            r(v.error) && (e.errorComp = Vt(v.error, n)),
                            r(v.loading) && (e.loadingComp = Vt(v.loading, n),
                            0 === v.delay ? e.loading = !0 : l = setTimeout((function() {
                                l = null,
                                t(e.resolved) && t(e.error) && (e.loading = !0,
                                d(!1))
                            }
                            ), v.delay || 200)),
                            r(v.timeout) && (f = setTimeout((function() {
                                f = null,
                                t(e.resolved) && h(null)
                            }
                            ), v.timeout)))),
                            c = !1,
                            e.loading ? e.loadingComp : e.resolved
                        }
                    }(d = n, f)))
                        return function(e, t, n, r, o) {
                            var i = ge();
                            return i.asyncFactory = e,
                            i.asyncMeta = {
                                data: t,
                                context: n,
                                children: r,
                                tag: o
                            },
                            i
                        }(d, i, s, c, l);
                    i = i || {},
                    kn(n),
                    r(i.model) && function(e, t) {
                        var n = e.model && e.model.prop || "value"
                          , o = e.model && e.model.event || "input";
                        (t.attrs || (t.attrs = {}))[n] = t.model.value;
                        var i = t.on || (t.on = {})
                          , a = i[o]
                          , s = t.model.callback;
                        r(a) ? (Array.isArray(a) ? -1 === a.indexOf(s) : a !== s) && (i[o] = [s].concat(a)) : i[o] = s
                    }(n.options, i);
                    var p = function(e, n, o) {
                        var i = n.options.props;
                        if (!t(i)) {
                            var a = {}
                              , s = e.attrs
                              , c = e.props;
                            if (r(s) || r(c))
                                for (var l in i) {
                                    var u = $(l);
                                    lt(a, c, l, u, !0) || lt(a, s, l, u, !1)
                                }
                            return a
                        }
                    }(i, n);
                    if (o(n.options.functional))
                        return function(t, n, o, i, a) {
                            var s = t.options
                              , c = {}
                              , l = s.props;
                            if (r(l))
                                for (var u in l)
                                    c[u] = ze(u, l, n || e);
                            else
                                r(o.attrs) && Mt(c, o.attrs),
                                r(o.props) && Mt(c, o.props);
                            var f = new It(o,c,a,i,t)
                              , d = s.render.call(null, f._c, f);
                            if (d instanceof he)
                                return Ht(d, o, f.parent, s);
                            if (Array.isArray(d)) {
                                for (var p = ut(d) || [], h = new Array(p.length), v = 0; v < p.length; v++)
                                    h[v] = Ht(p[v], o, f.parent, s);
                                return h
                            }
                        }(n, p, i, s, c);
                    var h = i.on;
                    if (i.on = i.nativeOn,
                    o(n.options.abstract)) {
                        var v = i.slot;
                        i = {},
                        v && (i.slot = v)
                    }
                    !function(e) {
                        for (var t = e.hook || (e.hook = {}), n = 0; n < zt.length; n++) {
                            var r = zt[n]
                              , o = t[r]
                              , i = Pt[r];
                            o === i || o && o._merged || (t[r] = o ? Nt(i, o) : i)
                        }
                    }(i);
                    var m = n.options.name || l;
                    return new he("vue-component-" + n.cid + (m ? "-" + m : ""),i,void 0,void 0,void 0,s,{
                        Ctor: n,
                        propsData: p,
                        listeners: h,
                        tag: l,
                        children: c
                    },d)
                }
            }
        }
        function Nt(e, t) {
            var n = function(n, r) {
                e(n, r),
                t(n, r)
            };
            return n._merged = !0,
            n
        }
        function Lt(e, t, n, s, c, l) {
            return (Array.isArray(n) || i(n)) && (c = s,
            s = n,
            n = void 0),
            o(l) && (c = 2),
            function(e, t, n, o, i) {
                if (r(n) && r(n.__ob__))
                    return ge();
                if (r(n) && r(n.is) && (t = n.is),
                !t)
                    return ge();
                var s, c, l;
                (Array.isArray(o) && "function" == typeof o[0] && ((n = n || {}).scopedSlots = {
                    default: o[0]
                },
                o.length = 0),
                2 === i ? o = ut(o) : 1 === i && (o = function(e) {
                    for (var t = 0; t < e.length; t++)
                        if (Array.isArray(e[t]))
                            return Array.prototype.concat.apply([], e);
                    return e
                }(o)),
                "string" == typeof t) ? (c = e.$vnode && e.$vnode.ns || z.getTagNamespace(t),
                s = z.isReservedTag(t) ? new he(z.parsePlatformTagName(t),n,o,void 0,void 0,e) : n && n.pre || !r(l = Pe(e.$options, "components", t)) ? new he(t,n,o,void 0,void 0,e) : Ft(l, n, e, o, t)) : s = Ft(t, n, e, o);
                return Array.isArray(s) ? s : r(s) ? (r(c) && Rt(s, c),
                r(n) && function(e) {
                    a(e.style) && rt(e.style),
                    a(e.class) && rt(e.class)
                }(n),
                s) : ge()
            }(e, t, n, s, c)
        }
        function Rt(e, n, i) {
            if (e.ns = n,
            "foreignObject" === e.tag && (n = void 0,
            i = !0),
            r(e.children))
                for (var a = 0, s = e.children.length; a < s; a++) {
                    var c = e.children[a];
                    r(c.tag) && (t(c.ns) || o(i) && "svg" !== c.tag) && Rt(c, n, i)
                }
        }
        var Ut, qt = null;
        function Vt(e, t) {
            return (e.__esModule || se && "Module" === e[Symbol.toStringTag]) && (e = e.default),
            a(e) ? t.extend(e) : e
        }
        function Zt(e) {
            return e.isComment && e.asyncFactory
        }
        function Yt(e) {
            if (Array.isArray(e))
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    if (r(n) && (r(n.componentOptions) || Zt(n)))
                        return n
                }
        }
        function Wt(e, t) {
            Ut.$on(e, t)
        }
        function Kt(e, t) {
            Ut.$off(e, t)
        }
        function Xt(e, t) {
            var n = Ut;
            return function r() {
                var o = t.apply(null, arguments);
                null !== o && n.$off(e, r)
            }
        }
        function Gt(e, t, n) {
            Ut = e,
            st(t, n || {}, Wt, Kt, Xt, e),
            Ut = void 0
        }
        var Qt = null;
        function Jt(e) {
            var t = Qt;
            return Qt = e,
            function() {
                Qt = t
            }
        }
        function en(e) {
            for (; e && (e = e.$parent); )
                if (e._inactive)
                    return !0;
            return !1
        }
        function tn(e, t) {
            if (t) {
                if (e._directInactive = !1,
                en(e))
                    return
            } else if (e._directInactive)
                return;
            if (e._inactive || null === e._inactive) {
                e._inactive = !1;
                for (var n = 0; n < e.$children.length; n++)
                    tn(e.$children[n]);
                rn(e, "activated")
            }
        }
        function nn(e, t) {
            if (!(t && (e._directInactive = !0,
            en(e)) || e._inactive)) {
                e._inactive = !0;
                for (var n = 0; n < e.$children.length; n++)
                    nn(e.$children[n]);
                rn(e, "deactivated")
            }
        }
        function rn(e, t) {
            de();
            var n = e.$options[t]
              , r = t + " hook";
            if (n)
                for (var o = 0, i = n.length; o < i; o++)
                    Ue(n[o], e, null, e, r);
            e._hasHookEvent && e.$emit("hook:" + t),
            pe()
        }
        var on = []
          , an = []
          , sn = {}
          , cn = !1
          , ln = !1
          , un = 0
          , fn = 0
          , dn = Date.now;
        if (V && !K) {
            var pn = window.performance;
            pn && "function" == typeof pn.now && dn() > document.createEvent("Event").timeStamp && (dn = function() {
                return pn.now()
            }
            )
        }
        function hn() {
            var e, t;
            for (fn = dn(),
            ln = !0,
            on.sort((function(e, t) {
                return e.id - t.id
            }
            )),
            un = 0; un < on.length; un++)
                (e = on[un]).before && e.before(),
                t = e.id,
                sn[t] = null,
                e.run();
            var n = an.slice()
              , r = on.slice();
            un = on.length = an.length = 0,
            sn = {},
            cn = ln = !1,
            function(e) {
                for (var t = 0; t < e.length; t++)
                    e[t]._inactive = !0,
                    tn(e[t], !0)
            }(n),
            function(e) {
                for (var t = e.length; t--; ) {
                    var n = e[t]
                      , r = n.vm;
                    r._watcher === n && r._isMounted && !r._isDestroyed && rn(r, "updated")
                }
            }(r),
            oe && z.devtools && oe.emit("flush")
        }
        var vn = 0
          , gn = function(e, t, n, r, o) {
            this.vm = e,
            o && (e._watcher = this),
            e._watchers.push(this),
            r ? (this.deep = !!r.deep,
            this.user = !!r.user,
            this.lazy = !!r.lazy,
            this.sync = !!r.sync,
            this.before = r.before) : this.deep = this.user = this.lazy = this.sync = !1,
            this.cb = n,
            this.id = ++vn,
            this.active = !0,
            this.dirty = this.lazy,
            this.deps = [],
            this.newDeps = [],
            this.depIds = new ae,
            this.newDepIds = new ae,
            this.expression = "",
            "function" == typeof t ? this.getter = t : (this.getter = function(e) {
                if (!U.test(e)) {
                    var t = e.split(".");
                    return function(e) {
                        for (var n = 0; n < t.length; n++) {
                            if (!e)
                                return;
                            e = e[t[n]]
                        }
                        return e
                    }
                }
            }(t),
            this.getter || (this.getter = O)),
            this.value = this.lazy ? void 0 : this.get()
        };
        gn.prototype.get = function() {
            var e;
            de(this);
            var t = this.vm;
            try {
                e = this.getter.call(t, t)
            } catch (e) {
                if (!this.user)
                    throw e;
                Re(e, t, 'getter for watcher "' + this.expression + '"')
            } finally {
                this.deep && rt(e),
                pe(),
                this.cleanupDeps()
            }
            return e
        }
        ,
        gn.prototype.addDep = function(e) {
            var t = e.id;
            this.newDepIds.has(t) || (this.newDepIds.add(t),
            this.newDeps.push(e),
            this.depIds.has(t) || e.addSub(this))
        }
        ,
        gn.prototype.cleanupDeps = function() {
            for (var e = this.deps.length; e--; ) {
                var t = this.deps[e];
                this.newDepIds.has(t.id) || t.removeSub(this)
            }
            var n = this.depIds;
            this.depIds = this.newDepIds,
            this.newDepIds = n,
            this.newDepIds.clear(),
            n = this.deps,
            this.deps = this.newDeps,
            this.newDeps = n,
            this.newDeps.length = 0
        }
        ,
        gn.prototype.update = function() {
            this.lazy ? this.dirty = !0 : this.sync ? this.run() : function(e) {
                var t = e.id;
                if (null == sn[t]) {
                    if (sn[t] = !0,
                    ln) {
                        for (var n = on.length - 1; n > un && on[n].id > e.id; )
                            n--;
                        on.splice(n + 1, 0, e)
                    } else
                        on.push(e);
                    cn || (cn = !0,
                    tt(hn))
                }
            }(this)
        }
        ,
        gn.prototype.run = function() {
            if (this.active) {
                var e = this.get();
                if (e !== this.value || a(e) || this.deep) {
                    var t = this.value;
                    if (this.value = e,
                    this.user)
                        try {
                            this.cb.call(this.vm, e, t)
                        } catch (e) {
                            Re(e, this.vm, 'callback for watcher "' + this.expression + '"')
                        }
                    else
                        this.cb.call(this.vm, e, t)
                }
            }
        }
        ,
        gn.prototype.evaluate = function() {
            this.value = this.get(),
            this.dirty = !1
        }
        ,
        gn.prototype.depend = function() {
            for (var e = this.deps.length; e--; )
                this.deps[e].depend()
        }
        ,
        gn.prototype.teardown = function() {
            if (this.active) {
                this.vm._isBeingDestroyed || g(this.vm._watchers, this);
                for (var e = this.deps.length; e--; )
                    this.deps[e].removeSub(this);
                this.active = !1
            }
        }
        ;
        var mn = {
            enumerable: !0,
            configurable: !0,
            get: O,
            set: O
        };
        function bn(e, t, n) {
            mn.get = function() {
                return this[t][n]
            }
            ,
            mn.set = function(e) {
                this[t][n] = e
            }
            ,
            Object.defineProperty(e, n, mn)
        }
        var yn = {
            lazy: !0
        };
        function An(e, t, n) {
            var r = !re();
            "function" == typeof n ? (mn.get = r ? Cn(t) : wn(n),
            mn.set = O) : (mn.get = n.get ? r && !1 !== n.cache ? Cn(t) : wn(n.get) : O,
            mn.set = n.set || O),
            Object.defineProperty(e, t, mn)
        }
        function Cn(e) {
            return function() {
                var t = this._computedWatchers && this._computedWatchers[e];
                if (t)
                    return t.dirty && t.evaluate(),
                    ue.target && t.depend(),
                    t.value
            }
        }
        function wn(e) {
            return function() {
                return e.call(this, this)
            }
        }
        function _n(e, t, n, r) {
            return c(n) && (r = n,
            n = n.handler),
            "string" == typeof n && (n = e[n]),
            e.$watch(t, n, r)
        }
        var $n = 0;
        function kn(e) {
            var t = e.options;
            if (e.super) {
                var n = kn(e.super);
                if (n !== e.superOptions) {
                    e.superOptions = n;
                    var r = function(e) {
                        var t, n = e.options, r = e.sealedOptions;
                        for (var o in n)
                            n[o] !== r[o] && (t || (t = {}),
                            t[o] = n[o]);
                        return t
                    }(e);
                    r && x(e.extendOptions, r),
                    (t = e.options = Me(n, e.extendOptions)).name && (t.components[t.name] = e)
                }
            }
            return t
        }
        function Bn(e) {
            this._init(e)
        }
        function xn(e) {
            return e && (e.Ctor.options.name || e.tag)
        }
        function Sn(e, t) {
            return Array.isArray(e) ? e.indexOf(t) > -1 : "string" == typeof e ? e.split(",").indexOf(t) > -1 : (n = e,
            !("[object RegExp]" !== s.call(n)) && e.test(t));
            var n
        }
        function On(e, t) {
            var n = e.cache
              , r = e.keys
              , o = e._vnode;
            for (var i in n) {
                var a = n[i];
                if (a) {
                    var s = xn(a.componentOptions);
                    s && !t(s) && jn(n, i, r, o)
                }
            }
        }
        function jn(e, t, n, r) {
            var o = e[t];
            !o || r && o.tag === r.tag || o.componentInstance.$destroy(),
            e[t] = null,
            g(n, t)
        }
        !function(t) {
            t.prototype._init = function(t) {
                var n = this;
                n._uid = $n++,
                n._isVue = !0,
                t && t._isComponent ? function(e, t) {
                    var n = e.$options = Object.create(e.constructor.options)
                      , r = t._parentVnode;
                    n.parent = t.parent,
                    n._parentVnode = r;
                    var o = r.componentOptions;
                    n.propsData = o.propsData,
                    n._parentListeners = o.listeners,
                    n._renderChildren = o.children,
                    n._componentTag = o.tag,
                    t.render && (n.render = t.render,
                    n.staticRenderFns = t.staticRenderFns)
                }(n, t) : n.$options = Me(kn(n.constructor), t || {}, n),
                n._renderProxy = n,
                n._self = n,
                function(e) {
                    var t = e.$options
                      , n = t.parent;
                    if (n && !t.abstract) {
                        for (; n.$options.abstract && n.$parent; )
                            n = n.$parent;
                        n.$children.push(e)
                    }
                    e.$parent = n,
                    e.$root = n ? n.$root : e,
                    e.$children = [],
                    e.$refs = {},
                    e._watcher = null,
                    e._inactive = null,
                    e._directInactive = !1,
                    e._isMounted = !1,
                    e._isDestroyed = !1,
                    e._isBeingDestroyed = !1
                }(n),
                function(e) {
                    e._events = Object.create(null),
                    e._hasHookEvent = !1;
                    var t = e.$options._parentListeners;
                    t && Gt(e, t)
                }(n),
                function(t) {
                    t._vnode = null,
                    t._staticTrees = null;
                    var n = t.$options
                      , r = t.$vnode = n._parentVnode
                      , o = r && r.context;
                    t.$slots = ht(n._renderChildren, o),
                    t.$scopedSlots = e,
                    t._c = function(e, n, r, o) {
                        return Lt(t, e, n, r, o, !1)
                    }
                    ,
                    t.$createElement = function(e, n, r, o) {
                        return Lt(t, e, n, r, o, !0)
                    }
                    ;
                    var i = r && r.data;
                    Be(t, "$attrs", i && i.attrs || e, null, !0),
                    Be(t, "$listeners", n._parentListeners || e, null, !0)
                }(n),
                rn(n, "beforeCreate"),
                function(e) {
                    var t = pt(e.$options.inject, e);
                    t && (_e(!1),
                    Object.keys(t).forEach((function(n) {
                        Be(e, n, t[n])
                    }
                    )),
                    _e(!0))
                }(n),
                function(e) {
                    e._watchers = [];
                    var t = e.$options;
                    t.props && function(e, t) {
                        var n = e.$options.propsData || {}
                          , r = e._props = {}
                          , o = e.$options._propKeys = [];
                        e.$parent && _e(!1);
                        var i = function(i) {
                            o.push(i);
                            var a = ze(i, t, n, e);
                            Be(r, i, a),
                            i in e || bn(e, "_props", i)
                        };
                        for (var a in t)
                            i(a);
                        _e(!0)
                    }(e, t.props),
                    t.methods && function(e, t) {
                        for (var n in e.$options.props,
                        t)
                            e[n] = "function" != typeof t[n] ? O : k(t[n], e)
                    }(e, t.methods),
                    t.data ? function(e) {
                        var t = e.$options.data;
                        c(t = e._data = "function" == typeof t ? function(e, t) {
                            de();
                            try {
                                return e.call(t, t)
                            } catch (e) {
                                return Re(e, t, "data()"),
                                {}
                            } finally {
                                pe()
                            }
                        }(t, e) : t || {}) || (t = {});
                        for (var n = Object.keys(t), r = e.$options.props, o = (e.$options.methods,
                        n.length); o--; ) {
                            var i = n[o];
                            r && b(r, i) || N(i) || bn(e, "_data", i)
                        }
                        ke(t, !0)
                    }(e) : ke(e._data = {}, !0),
                    t.computed && function(e, t) {
                        var n = e._computedWatchers = Object.create(null)
                          , r = re();
                        for (var o in t) {
                            var i = t[o]
                              , a = "function" == typeof i ? i : i.get;
                            r || (n[o] = new gn(e,a || O,O,yn)),
                            o in e || An(e, o, i)
                        }
                    }(e, t.computed),
                    t.watch && t.watch !== ee && function(e, t) {
                        for (var n in t) {
                            var r = t[n];
                            if (Array.isArray(r))
                                for (var o = 0; o < r.length; o++)
                                    _n(e, n, r[o]);
                            else
                                _n(e, n, r)
                        }
                    }(e, t.watch)
                }(n),
                function(e) {
                    var t = e.$options.provide;
                    t && (e._provided = "function" == typeof t ? t.call(e) : t)
                }(n),
                rn(n, "created"),
                n.$options.el && n.$mount(n.$options.el)
            }
        }(Bn),
        function(e) {
            Object.defineProperty(e.prototype, "$data", {
                get: function() {
                    return this._data
                }
            }),
            Object.defineProperty(e.prototype, "$props", {
                get: function() {
                    return this._props
                }
            }),
            e.prototype.$set = xe,
            e.prototype.$delete = Se,
            e.prototype.$watch = function(e, t, n) {
                var r = this;
                if (c(t))
                    return _n(r, e, t, n);
                (n = n || {}).user = !0;
                var o = new gn(r,e,t,n);
                if (n.immediate)
                    try {
                        t.call(r, o.value)
                    } catch (e) {
                        Re(e, r, 'callback for immediate watcher "' + o.expression + '"')
                    }
                return function() {
                    o.teardown()
                }
            }
        }(Bn),
        function(e) {
            var t = /^hook:/;
            e.prototype.$on = function(e, n) {
                var r = this;
                if (Array.isArray(e))
                    for (var o = 0, i = e.length; o < i; o++)
                        r.$on(e[o], n);
                else
                    (r._events[e] || (r._events[e] = [])).push(n),
                    t.test(e) && (r._hasHookEvent = !0);
                return r
            }
            ,
            e.prototype.$once = function(e, t) {
                var n = this;
                function r() {
                    n.$off(e, r),
                    t.apply(n, arguments)
                }
                return r.fn = t,
                n.$on(e, r),
                n
            }
            ,
            e.prototype.$off = function(e, t) {
                var n = this;
                if (!arguments.length)
                    return n._events = Object.create(null),
                    n;
                if (Array.isArray(e)) {
                    for (var r = 0, o = e.length; r < o; r++)
                        n.$off(e[r], t);
                    return n
                }
                var i, a = n._events[e];
                if (!a)
                    return n;
                if (!t)
                    return n._events[e] = null,
                    n;
                for (var s = a.length; s--; )
                    if ((i = a[s]) === t || i.fn === t) {
                        a.splice(s, 1);
                        break
                    }
                return n
            }
            ,
            e.prototype.$emit = function(e) {
                var t = this
                  , n = t._events[e];
                if (n) {
                    n = n.length > 1 ? B(n) : n;
                    for (var r = B(arguments, 1), o = 'event handler for "' + e + '"', i = 0, a = n.length; i < a; i++)
                        Ue(n[i], t, r, t, o)
                }
                return t
            }
        }(Bn),
        function(e) {
            e.prototype._update = function(e, t) {
                var n = this
                  , r = n.$el
                  , o = n._vnode
                  , i = Jt(n);
                n._vnode = e,
                n.$el = o ? n.__patch__(o, e) : n.__patch__(n.$el, e, t, !1),
                i(),
                r && (r.__vue__ = null),
                n.$el && (n.$el.__vue__ = n),
                n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el)
            }
            ,
            e.prototype.$forceUpdate = function() {
                this._watcher && this._watcher.update()
            }
            ,
            e.prototype.$destroy = function() {
                var e = this;
                if (!e._isBeingDestroyed) {
                    rn(e, "beforeDestroy"),
                    e._isBeingDestroyed = !0;
                    var t = e.$parent;
                    !t || t._isBeingDestroyed || e.$options.abstract || g(t.$children, e),
                    e._watcher && e._watcher.teardown();
                    for (var n = e._watchers.length; n--; )
                        e._watchers[n].teardown();
                    e._data.__ob__ && e._data.__ob__.vmCount--,
                    e._isDestroyed = !0,
                    e.__patch__(e._vnode, null),
                    rn(e, "destroyed"),
                    e.$off(),
                    e.$el && (e.$el.__vue__ = null),
                    e.$vnode && (e.$vnode.parent = null)
                }
            }
        }(Bn),
        function(e) {
            Dt(e.prototype),
            e.prototype.$nextTick = function(e) {
                return tt(e, this)
            }
            ,
            e.prototype._render = function() {
                var e, t = this, n = t.$options, r = n.render, o = n._parentVnode;
                o && (t.$scopedSlots = gt(o.data.scopedSlots, t.$slots, t.$scopedSlots)),
                t.$vnode = o;
                try {
                    qt = t,
                    e = r.call(t._renderProxy, t.$createElement)
                } catch (n) {
                    Re(n, t, "render"),
                    e = t._vnode
                } finally {
                    qt = null
                }
                return Array.isArray(e) && 1 === e.length && (e = e[0]),
                e instanceof he || (e = ge()),
                e.parent = o,
                e
            }
        }(Bn);
        var En = [String, RegExp, Array]
          , Tn = {
            KeepAlive: {
                name: "keep-alive",
                abstract: !0,
                props: {
                    include: En,
                    exclude: En,
                    max: [String, Number]
                },
                created: function() {
                    this.cache = Object.create(null),
                    this.keys = []
                },
                destroyed: function() {
                    for (var e in this.cache)
                        jn(this.cache, e, this.keys)
                },
                mounted: function() {
                    var e = this;
                    this.$watch("include", (function(t) {
                        On(e, (function(e) {
                            return Sn(t, e)
                        }
                        ))
                    }
                    )),
                    this.$watch("exclude", (function(t) {
                        On(e, (function(e) {
                            return !Sn(t, e)
                        }
                        ))
                    }
                    ))
                },
                render: function() {
                    var e = this.$slots.default
                      , t = Yt(e)
                      , n = t && t.componentOptions;
                    if (n) {
                        var r = xn(n)
                          , o = this.include
                          , i = this.exclude;
                        if (o && (!r || !Sn(o, r)) || i && r && Sn(i, r))
                            return t;
                        var a = this.cache
                          , s = this.keys
                          , c = null == t.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : t.key;
                        a[c] ? (t.componentInstance = a[c].componentInstance,
                        g(s, c),
                        s.push(c)) : (a[c] = t,
                        s.push(c),
                        this.max && s.length > parseInt(this.max) && jn(a, s[0], s, this._vnode)),
                        t.data.keepAlive = !0
                    }
                    return t || e && e[0]
                }
            }
        };
        !function(e) {
            var t = {
                get: function() {
                    return z
                }
            };
            Object.defineProperty(e, "config", t),
            e.util = {
                warn: ce,
                extend: x,
                mergeOptions: Me,
                defineReactive: Be
            },
            e.set = xe,
            e.delete = Se,
            e.nextTick = tt,
            e.observable = function(e) {
                return ke(e),
                e
            }
            ,
            e.options = Object.create(null),
            M.forEach((function(t) {
                e.options[t + "s"] = Object.create(null)
            }
            )),
            e.options._base = e,
            x(e.options.components, Tn),
            function(e) {
                e.use = function(e) {
                    var t = this._installedPlugins || (this._installedPlugins = []);
                    if (t.indexOf(e) > -1)
                        return this;
                    var n = B(arguments, 1);
                    return n.unshift(this),
                    "function" == typeof e.install ? e.install.apply(e, n) : "function" == typeof e && e.apply(null, n),
                    t.push(e),
                    this
                }
            }(e),
            function(e) {
                e.mixin = function(e) {
                    return this.options = Me(this.options, e),
                    this
                }
            }(e),
            function(e) {
                e.cid = 0;
                var t = 1;
                e.extend = function(e) {
                    e = e || {};
                    var n = this
                      , r = n.cid
                      , o = e._Ctor || (e._Ctor = {});
                    if (o[r])
                        return o[r];
                    var i = e.name || n.options.name
                      , a = function(e) {
                        this._init(e)
                    };
                    return (a.prototype = Object.create(n.prototype)).constructor = a,
                    a.cid = t++,
                    a.options = Me(n.options, e),
                    a.super = n,
                    a.options.props && function(e) {
                        var t = e.options.props;
                        for (var n in t)
                            bn(e.prototype, "_props", n)
                    }(a),
                    a.options.computed && function(e) {
                        var t = e.options.computed;
                        for (var n in t)
                            An(e.prototype, n, t[n])
                    }(a),
                    a.extend = n.extend,
                    a.mixin = n.mixin,
                    a.use = n.use,
                    M.forEach((function(e) {
                        a[e] = n[e]
                    }
                    )),
                    i && (a.options.components[i] = a),
                    a.superOptions = n.options,
                    a.extendOptions = e,
                    a.sealedOptions = x({}, a.options),
                    o[r] = a,
                    a
                }
            }(e),
            function(e) {
                M.forEach((function(t) {
                    e[t] = function(e, n) {
                        return n ? ("component" === t && c(n) && (n.name = n.name || e,
                        n = this.options._base.extend(n)),
                        "directive" === t && "function" == typeof n && (n = {
                            bind: n,
                            update: n
                        }),
                        this.options[t + "s"][e] = n,
                        n) : this.options[t + "s"][e]
                    }
                }
                ))
            }(e)
        }(Bn),
        Object.defineProperty(Bn.prototype, "$isServer", {
            get: re
        }),
        Object.defineProperty(Bn.prototype, "$ssrContext", {
            get: function() {
                return this.$vnode && this.$vnode.ssrContext
            }
        }),
        Object.defineProperty(Bn, "FunctionalRenderContext", {
            value: It
        }),
        Bn.version = "2.6.12";
        var Dn = p("style,class")
          , In = p("input,textarea,option,select,progress")
          , Hn = function(e, t, n) {
            return "value" === n && In(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e
        }
          , Mn = p("contenteditable,draggable,spellcheck")
          , Pn = p("events,caret,typing,plaintext-only")
          , zn = p("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible")
          , Fn = "http://www.w3.org/1999/xlink"
          , Nn = function(e) {
            return ":" === e.charAt(5) && "xlink" === e.slice(0, 5)
        }
          , Ln = function(e) {
            return Nn(e) ? e.slice(6, e.length) : ""
        }
          , Rn = function(e) {
            return null == e || !1 === e
        };
        function Un(e, t) {
            return {
                staticClass: qn(e.staticClass, t.staticClass),
                class: r(e.class) ? [e.class, t.class] : t.class
            }
        }
        function qn(e, t) {
            return e ? t ? e + " " + t : e : t || ""
        }
        function Vn(e) {
            return Array.isArray(e) ? function(e) {
                for (var t, n = "", o = 0, i = e.length; o < i; o++)
                    r(t = Vn(e[o])) && "" !== t && (n && (n += " "),
                    n += t);
                return n
            }(e) : a(e) ? function(e) {
                var t = "";
                for (var n in e)
                    e[n] && (t && (t += " "),
                    t += n);
                return t
            }(e) : "string" == typeof e ? e : ""
        }
        var Zn = {
            svg: "http://www.w3.org/2000/svg",
            math: "http://www.w3.org/1998/Math/MathML"
        }
          , Yn = p("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot")
          , Wn = p("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0)
          , Kn = function(e) {
            return Yn(e) || Wn(e)
        };
        function Xn(e) {
            return Wn(e) ? "svg" : "math" === e ? "math" : void 0
        }
        var Gn = Object.create(null)
          , Qn = p("text,number,password,search,email,tel,url");
        function Jn(e) {
            return "string" == typeof e ? document.querySelector(e) || document.createElement("div") : e
        }
        var er = Object.freeze({
            createElement: function(e, t) {
                var n = document.createElement(e);
                return "select" !== e || t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple"),
                n
            },
            createElementNS: function(e, t) {
                return document.createElementNS(Zn[e], t)
            },
            createTextNode: function(e) {
                return document.createTextNode(e)
            },
            createComment: function(e) {
                return document.createComment(e)
            },
            insertBefore: function(e, t, n) {
                e.insertBefore(t, n)
            },
            removeChild: function(e, t) {
                e.removeChild(t)
            },
            appendChild: function(e, t) {
                e.appendChild(t)
            },
            parentNode: function(e) {
                return e.parentNode
            },
            nextSibling: function(e) {
                return e.nextSibling
            },
            tagName: function(e) {
                return e.tagName
            },
            setTextContent: function(e, t) {
                e.textContent = t
            },
            setStyleScope: function(e, t) {
                e.setAttribute(t, "")
            }
        })
          , tr = {
            create: function(e, t) {
                nr(t)
            },
            update: function(e, t) {
                e.data.ref !== t.data.ref && (nr(e, !0),
                nr(t))
            },
            destroy: function(e) {
                nr(e, !0)
            }
        };
        function nr(e, t) {
            var n = e.data.ref;
            if (r(n)) {
                var o = e.context
                  , i = e.componentInstance || e.elm
                  , a = o.$refs;
                t ? Array.isArray(a[n]) ? g(a[n], i) : a[n] === i && (a[n] = void 0) : e.data.refInFor ? Array.isArray(a[n]) ? a[n].indexOf(i) < 0 && a[n].push(i) : a[n] = [i] : a[n] = i
            }
        }
        var rr = new he("",{},[])
          , or = ["create", "activate", "update", "remove", "destroy"];
        function ir(e, n) {
            return e.key === n.key && (e.tag === n.tag && e.isComment === n.isComment && r(e.data) === r(n.data) && function(e, t) {
                if ("input" !== e.tag)
                    return !0;
                var n, o = r(n = e.data) && r(n = n.attrs) && n.type, i = r(n = t.data) && r(n = n.attrs) && n.type;
                return o === i || Qn(o) && Qn(i)
            }(e, n) || o(e.isAsyncPlaceholder) && e.asyncFactory === n.asyncFactory && t(n.asyncFactory.error))
        }
        function ar(e, t, n) {
            var o, i, a = {};
            for (o = t; o <= n; ++o)
                r(i = e[o].key) && (a[i] = o);
            return a
        }
        var sr = {
            create: cr,
            update: cr,
            destroy: function(e) {
                cr(e, rr)
            }
        };
        function cr(e, t) {
            (e.data.directives || t.data.directives) && function(e, t) {
                var n, r, o, i = e === rr, a = t === rr, s = ur(e.data.directives, e.context), c = ur(t.data.directives, t.context), l = [], u = [];
                for (n in c)
                    r = s[n],
                    o = c[n],
                    r ? (o.oldValue = r.value,
                    o.oldArg = r.arg,
                    dr(o, "update", t, e),
                    o.def && o.def.componentUpdated && u.push(o)) : (dr(o, "bind", t, e),
                    o.def && o.def.inserted && l.push(o));
                if (l.length) {
                    var f = function() {
                        for (var n = 0; n < l.length; n++)
                            dr(l[n], "inserted", t, e)
                    };
                    i ? ct(t, "insert", f) : f()
                }
                if (u.length && ct(t, "postpatch", (function() {
                    for (var n = 0; n < u.length; n++)
                        dr(u[n], "componentUpdated", t, e)
                }
                )),
                !i)
                    for (n in s)
                        c[n] || dr(s[n], "unbind", e, e, a)
            }(e, t)
        }
        var lr = Object.create(null);
        function ur(e, t) {
            var n, r, o = Object.create(null);
            if (!e)
                return o;
            for (n = 0; n < e.length; n++)
                (r = e[n]).modifiers || (r.modifiers = lr),
                o[fr(r)] = r,
                r.def = Pe(t.$options, "directives", r.name);
            return o
        }
        function fr(e) {
            return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".")
        }
        function dr(e, t, n, r, o) {
            var i = e.def && e.def[t];
            if (i)
                try {
                    i(n.elm, e, n, r, o)
                } catch (r) {
                    Re(r, n.context, "directive " + e.name + " " + t + " hook")
                }
        }
        var pr = [tr, sr];
        function hr(e, n) {
            var o = n.componentOptions;
            if (!(r(o) && !1 === o.Ctor.options.inheritAttrs || t(e.data.attrs) && t(n.data.attrs))) {
                var i, a, s = n.elm, c = e.data.attrs || {}, l = n.data.attrs || {};
                for (i in r(l.__ob__) && (l = n.data.attrs = x({}, l)),
                l)
                    a = l[i],
                    c[i] !== a && vr(s, i, a);
                for (i in (K || G) && l.value !== c.value && vr(s, "value", l.value),
                c)
                    t(l[i]) && (Nn(i) ? s.removeAttributeNS(Fn, Ln(i)) : Mn(i) || s.removeAttribute(i))
            }
        }
        function vr(e, t, n) {
            e.tagName.indexOf("-") > -1 ? gr(e, t, n) : zn(t) ? Rn(n) ? e.removeAttribute(t) : (n = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t,
            e.setAttribute(t, n)) : Mn(t) ? e.setAttribute(t, function(e, t) {
                return Rn(t) || "false" === t ? "false" : "contenteditable" === e && Pn(t) ? t : "true"
            }(t, n)) : Nn(t) ? Rn(n) ? e.removeAttributeNS(Fn, Ln(t)) : e.setAttributeNS(Fn, t, n) : gr(e, t, n)
        }
        function gr(e, t, n) {
            if (Rn(n))
                e.removeAttribute(t);
            else {
                if (K && !X && "TEXTAREA" === e.tagName && "placeholder" === t && "" !== n && !e.__ieph) {
                    var r = function(t) {
                        t.stopImmediatePropagation(),
                        e.removeEventListener("input", r)
                    };
                    e.addEventListener("input", r),
                    e.__ieph = !0
                }
                e.setAttribute(t, n)
            }
        }
        var mr = {
            create: hr,
            update: hr
        };
        function br(e, n) {
            var o = n.elm
              , i = n.data
              , a = e.data;
            if (!(t(i.staticClass) && t(i.class) && (t(a) || t(a.staticClass) && t(a.class)))) {
                var s = function(e) {
                    for (var t = e.data, n = e, o = e; r(o.componentInstance); )
                        (o = o.componentInstance._vnode) && o.data && (t = Un(o.data, t));
                    for (; r(n = n.parent); )
                        n && n.data && (t = Un(t, n.data));
                    return i = t.staticClass,
                    a = t.class,
                    r(i) || r(a) ? qn(i, Vn(a)) : "";
                    var i, a
                }(n)
                  , c = o._transitionClasses;
                r(c) && (s = qn(s, Vn(c))),
                s !== o._prevClass && (o.setAttribute("class", s),
                o._prevClass = s)
            }
        }
        var yr, Ar, Cr, wr, _r, $r, kr = {
            create: br,
            update: br
        }, Br = /[\w).+\-_$\]]/;
        function xr(e) {
            var t, n, r, o, i, a = !1, s = !1, c = !1, l = !1, u = 0, f = 0, d = 0, p = 0;
            for (r = 0; r < e.length; r++)
                if (n = t,
                t = e.charCodeAt(r),
                a)
                    39 === t && 92 !== n && (a = !1);
                else if (s)
                    34 === t && 92 !== n && (s = !1);
                else if (c)
                    96 === t && 92 !== n && (c = !1);
                else if (l)
                    47 === t && 92 !== n && (l = !1);
                else if (124 !== t || 124 === e.charCodeAt(r + 1) || 124 === e.charCodeAt(r - 1) || u || f || d) {
                    switch (t) {
                    case 34:
                        s = !0;
                        break;
                    case 39:
                        a = !0;
                        break;
                    case 96:
                        c = !0;
                        break;
                    case 40:
                        d++;
                        break;
                    case 41:
                        d--;
                        break;
                    case 91:
                        f++;
                        break;
                    case 93:
                        f--;
                        break;
                    case 123:
                        u++;
                        break;
                    case 125:
                        u--
                    }
                    if (47 === t) {
                        for (var h = r - 1, v = void 0; h >= 0 && " " === (v = e.charAt(h)); h--)
                            ;
                        v && Br.test(v) || (l = !0)
                    }
                } else
                    void 0 === o ? (p = r + 1,
                    o = e.slice(0, r).trim()) : g();
            function g() {
                (i || (i = [])).push(e.slice(p, r).trim()),
                p = r + 1
            }
            if (void 0 === o ? o = e.slice(0, r).trim() : 0 !== p && g(),
            i)
                for (r = 0; r < i.length; r++)
                    o = Sr(o, i[r]);
            return o
        }
        function Sr(e, t) {
            var n = t.indexOf("(");
            if (n < 0)
                return '_f("' + t + '")(' + e + ")";
            var r = t.slice(0, n)
              , o = t.slice(n + 1);
            return '_f("' + r + '")(' + e + (")" !== o ? "," + o : o)
        }
        function Or(e, t) {
            console.error("[Vue compiler]: " + e)
        }
        function jr(e, t) {
            return e ? e.map((function(e) {
                return e[t]
            }
            )).filter((function(e) {
                return e
            }
            )) : []
        }
        function Er(e, t, n, r, o) {
            (e.props || (e.props = [])).push(Nr({
                name: t,
                value: n,
                dynamic: o
            }, r)),
            e.plain = !1
        }
        function Tr(e, t, n, r, o) {
            (o ? e.dynamicAttrs || (e.dynamicAttrs = []) : e.attrs || (e.attrs = [])).push(Nr({
                name: t,
                value: n,
                dynamic: o
            }, r)),
            e.plain = !1
        }
        function Dr(e, t, n, r) {
            e.attrsMap[t] = n,
            e.attrsList.push(Nr({
                name: t,
                value: n
            }, r))
        }
        function Ir(e, t, n, r, o, i, a, s) {
            (e.directives || (e.directives = [])).push(Nr({
                name: t,
                rawName: n,
                value: r,
                arg: o,
                isDynamicArg: i,
                modifiers: a
            }, s)),
            e.plain = !1
        }
        function Hr(e, t, n) {
            return n ? "_p(" + t + ',"' + e + '")' : e + t
        }
        function Mr(t, n, r, o, i, a, s, c) {
            var l;
            (o = o || e).right ? c ? n = "(" + n + ")==='click'?'contextmenu':(" + n + ")" : "click" === n && (n = "contextmenu",
            delete o.right) : o.middle && (c ? n = "(" + n + ")==='click'?'mouseup':(" + n + ")" : "click" === n && (n = "mouseup")),
            o.capture && (delete o.capture,
            n = Hr("!", n, c)),
            o.once && (delete o.once,
            n = Hr("~", n, c)),
            o.passive && (delete o.passive,
            n = Hr("&", n, c)),
            o.native ? (delete o.native,
            l = t.nativeEvents || (t.nativeEvents = {})) : l = t.events || (t.events = {});
            var u = Nr({
                value: r.trim(),
                dynamic: c
            }, s);
            o !== e && (u.modifiers = o);
            var f = l[n];
            Array.isArray(f) ? i ? f.unshift(u) : f.push(u) : l[n] = f ? i ? [u, f] : [f, u] : u,
            t.plain = !1
        }
        function Pr(e, t, n) {
            var r = zr(e, ":" + t) || zr(e, "v-bind:" + t);
            if (null != r)
                return xr(r);
            if (!1 !== n) {
                var o = zr(e, t);
                if (null != o)
                    return JSON.stringify(o)
            }
        }
        function zr(e, t, n) {
            var r;
            if (null != (r = e.attrsMap[t]))
                for (var o = e.attrsList, i = 0, a = o.length; i < a; i++)
                    if (o[i].name === t) {
                        o.splice(i, 1);
                        break
                    }
            return n && delete e.attrsMap[t],
            r
        }
        function Fr(e, t) {
            for (var n = e.attrsList, r = 0, o = n.length; r < o; r++) {
                var i = n[r];
                if (t.test(i.name))
                    return n.splice(r, 1),
                    i
            }
        }
        function Nr(e, t) {
            return t && (null != t.start && (e.start = t.start),
            null != t.end && (e.end = t.end)),
            e
        }
        function Lr(e, t, n) {
            var r = n || {}
              , o = r.number
              , i = "$$v";
            r.trim && (i = "(typeof $$v === 'string'? $$v.trim(): $$v)"),
            o && (i = "_n(" + i + ")");
            var a = Rr(t, i);
            e.model = {
                value: "(" + t + ")",
                expression: JSON.stringify(t),
                callback: "function ($$v) {" + a + "}"
            }
        }
        function Rr(e, t) {
            var n = function(e) {
                if (e = e.trim(),
                yr = e.length,
                e.indexOf("[") < 0 || e.lastIndexOf("]") < yr - 1)
                    return (wr = e.lastIndexOf(".")) > -1 ? {
                        exp: e.slice(0, wr),
                        key: '"' + e.slice(wr + 1) + '"'
                    } : {
                        exp: e,
                        key: null
                    };
                for (Ar = e,
                wr = _r = $r = 0; !qr(); )
                    Vr(Cr = Ur()) ? Yr(Cr) : 91 === Cr && Zr(Cr);
                return {
                    exp: e.slice(0, _r),
                    key: e.slice(_r + 1, $r)
                }
            }(e);
            return null === n.key ? e + "=" + t : "$set(" + n.exp + ", " + n.key + ", " + t + ")"
        }
        function Ur() {
            return Ar.charCodeAt(++wr)
        }
        function qr() {
            return wr >= yr
        }
        function Vr(e) {
            return 34 === e || 39 === e
        }
        function Zr(e) {
            var t = 1;
            for (_r = wr; !qr(); )
                if (Vr(e = Ur()))
                    Yr(e);
                else if (91 === e && t++,
                93 === e && t--,
                0 === t) {
                    $r = wr;
                    break
                }
        }
        function Yr(e) {
            for (var t = e; !qr() && (e = Ur()) !== t; )
                ;
        }
        var Wr;
        function Kr(e, t, n) {
            var r = Wr;
            return function o() {
                var i = t.apply(null, arguments);
                null !== i && Qr(e, o, n, r)
            }
        }
        var Xr = Ye && !(J && Number(J[1]) <= 53);
        function Gr(e, t, n, r) {
            if (Xr) {
                var o = fn
                  , i = t;
                t = i._wrapper = function(e) {
                    if (e.target === e.currentTarget || e.timeStamp >= o || e.timeStamp <= 0 || e.target.ownerDocument !== document)
                        return i.apply(this, arguments)
                }
            }
            Wr.addEventListener(e, t, te ? {
                capture: n,
                passive: r
            } : n)
        }
        function Qr(e, t, n, r) {
            (r || Wr).removeEventListener(e, t._wrapper || t, n)
        }
        function Jr(e, n) {
            if (!t(e.data.on) || !t(n.data.on)) {
                var o = n.data.on || {}
                  , i = e.data.on || {};
                Wr = n.elm,
                function(e) {
                    if (r(e.__r)) {
                        var t = K ? "change" : "input";
                        e[t] = [].concat(e.__r, e[t] || []),
                        delete e.__r
                    }
                    r(e.__c) && (e.change = [].concat(e.__c, e.change || []),
                    delete e.__c)
                }(o),
                st(o, i, Gr, Qr, Kr, n.context),
                Wr = void 0
            }
        }
        var eo, to = {
            create: Jr,
            update: Jr
        };
        function no(e, n) {
            if (!t(e.data.domProps) || !t(n.data.domProps)) {
                var o, i, a = n.elm, s = e.data.domProps || {}, c = n.data.domProps || {};
                for (o in r(c.__ob__) && (c = n.data.domProps = x({}, c)),
                s)
                    o in c || (a[o] = "");
                for (o in c) {
                    if (i = c[o],
                    "textContent" === o || "innerHTML" === o) {
                        if (n.children && (n.children.length = 0),
                        i === s[o])
                            continue;
                        1 === a.childNodes.length && a.removeChild(a.childNodes[0])
                    }
                    if ("value" === o && "PROGRESS" !== a.tagName) {
                        a._value = i;
                        var l = t(i) ? "" : String(i);
                        ro(a, l) && (a.value = l)
                    } else if ("innerHTML" === o && Wn(a.tagName) && t(a.innerHTML)) {
                        (eo = eo || document.createElement("div")).innerHTML = "<svg>" + i + "</svg>";
                        for (var u = eo.firstChild; a.firstChild; )
                            a.removeChild(a.firstChild);
                        for (; u.firstChild; )
                            a.appendChild(u.firstChild)
                    } else if (i !== s[o])
                        try {
                            a[o] = i
                        } catch (e) {}
                }
            }
        }
        function ro(e, t) {
            return !e.composing && ("OPTION" === e.tagName || function(e, t) {
                var n = !0;
                try {
                    n = document.activeElement !== e
                } catch (e) {}
                return n && e.value !== t
            }(e, t) || function(e, t) {
                var n = e.value
                  , o = e._vModifiers;
                if (r(o)) {
                    if (o.number)
                        return d(n) !== d(t);
                    if (o.trim)
                        return n.trim() !== t.trim()
                }
                return n !== t
            }(e, t))
        }
        var oo = {
            create: no,
            update: no
        }
          , io = y((function(e) {
            var t = {}
              , n = /:(.+)/;
            return e.split(/;(?![^(]*\))/g).forEach((function(e) {
                if (e) {
                    var r = e.split(n);
                    r.length > 1 && (t[r[0].trim()] = r[1].trim())
                }
            }
            )),
            t
        }
        ));
        function ao(e) {
            var t = so(e.style);
            return e.staticStyle ? x(e.staticStyle, t) : t
        }
        function so(e) {
            return Array.isArray(e) ? S(e) : "string" == typeof e ? io(e) : e
        }
        var co, lo = /^--/, uo = /\s*!important$/, fo = function(e, t, n) {
            if (lo.test(t))
                e.style.setProperty(t, n);
            else if (uo.test(n))
                e.style.setProperty($(t), n.replace(uo, ""), "important");
            else {
                var r = ho(t);
                if (Array.isArray(n))
                    for (var o = 0, i = n.length; o < i; o++)
                        e.style[r] = n[o];
                else
                    e.style[r] = n
            }
        }, po = ["Webkit", "Moz", "ms"], ho = y((function(e) {
            if (co = co || document.createElement("div").style,
            "filter" !== (e = C(e)) && e in co)
                return e;
            for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < po.length; n++) {
                var r = po[n] + t;
                if (r in co)
                    return r
            }
        }
        ));
        function vo(e, n) {
            var o = n.data
              , i = e.data;
            if (!(t(o.staticStyle) && t(o.style) && t(i.staticStyle) && t(i.style))) {
                var a, s, c = n.elm, l = i.staticStyle, u = i.normalizedStyle || i.style || {}, f = l || u, d = so(n.data.style) || {};
                n.data.normalizedStyle = r(d.__ob__) ? x({}, d) : d;
                var p = function(e, t) {
                    for (var n, r = {}, o = e; o.componentInstance; )
                        (o = o.componentInstance._vnode) && o.data && (n = ao(o.data)) && x(r, n);
                    (n = ao(e.data)) && x(r, n);
                    for (var i = e; i = i.parent; )
                        i.data && (n = ao(i.data)) && x(r, n);
                    return r
                }(n);
                for (s in f)
                    t(p[s]) && fo(c, s, "");
                for (s in p)
                    (a = p[s]) !== f[s] && fo(c, s, null == a ? "" : a)
            }
        }
        var go = {
            create: vo,
            update: vo
        }
          , mo = /\s+/;
        function bo(e, t) {
            if (t && (t = t.trim()))
                if (e.classList)
                    t.indexOf(" ") > -1 ? t.split(mo).forEach((function(t) {
                        return e.classList.add(t)
                    }
                    )) : e.classList.add(t);
                else {
                    var n = " " + (e.getAttribute("class") || "") + " ";
                    n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim())
                }
        }
        function yo(e, t) {
            if (t && (t = t.trim()))
                if (e.classList)
                    t.indexOf(" ") > -1 ? t.split(mo).forEach((function(t) {
                        return e.classList.remove(t)
                    }
                    )) : e.classList.remove(t),
                    e.classList.length || e.removeAttribute("class");
                else {
                    for (var n = " " + (e.getAttribute("class") || "") + " ", r = " " + t + " "; n.indexOf(r) >= 0; )
                        n = n.replace(r, " ");
                    (n = n.trim()) ? e.setAttribute("class", n) : e.removeAttribute("class")
                }
        }
        function Ao(e) {
            if (e) {
                if ("object" == typeof e) {
                    var t = {};
                    return !1 !== e.css && x(t, Co(e.name || "v")),
                    x(t, e),
                    t
                }
                return "string" == typeof e ? Co(e) : void 0
            }
        }
        var Co = y((function(e) {
            return {
                enterClass: e + "-enter",
                enterToClass: e + "-enter-to",
                enterActiveClass: e + "-enter-active",
                leaveClass: e + "-leave",
                leaveToClass: e + "-leave-to",
                leaveActiveClass: e + "-leave-active"
            }
        }
        ))
          , wo = V && !X
          , _o = "transition"
          , $o = "animation"
          , ko = "transition"
          , Bo = "transitionend"
          , xo = "animation"
          , So = "animationend";
        wo && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (ko = "WebkitTransition",
        Bo = "webkitTransitionEnd"),
        void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (xo = "WebkitAnimation",
        So = "webkitAnimationEnd"));
        var Oo = V ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function(e) {
            return e()
        }
        ;
        function jo(e) {
            Oo((function() {
                Oo(e)
            }
            ))
        }
        function Eo(e, t) {
            var n = e._transitionClasses || (e._transitionClasses = []);
            n.indexOf(t) < 0 && (n.push(t),
            bo(e, t))
        }
        function To(e, t) {
            e._transitionClasses && g(e._transitionClasses, t),
            yo(e, t)
        }
        function Do(e, t, n) {
            var r = Ho(e, t)
              , o = r.type
              , i = r.timeout
              , a = r.propCount;
            if (!o)
                return n();
            var s = o === _o ? Bo : So
              , c = 0
              , l = function() {
                e.removeEventListener(s, u),
                n()
            }
              , u = function(t) {
                t.target === e && ++c >= a && l()
            };
            setTimeout((function() {
                c < a && l()
            }
            ), i + 1),
            e.addEventListener(s, u)
        }
        var Io = /\b(transform|all)(,|$)/;
        function Ho(e, t) {
            var n, r = window.getComputedStyle(e), o = (r[ko + "Delay"] || "").split(", "), i = (r[ko + "Duration"] || "").split(", "), a = Mo(o, i), s = (r[xo + "Delay"] || "").split(", "), c = (r[xo + "Duration"] || "").split(", "), l = Mo(s, c), u = 0, f = 0;
            return t === _o ? a > 0 && (n = _o,
            u = a,
            f = i.length) : t === $o ? l > 0 && (n = $o,
            u = l,
            f = c.length) : f = (n = (u = Math.max(a, l)) > 0 ? a > l ? _o : $o : null) ? n === _o ? i.length : c.length : 0,
            {
                type: n,
                timeout: u,
                propCount: f,
                hasTransform: n === _o && Io.test(r[ko + "Property"])
            }
        }
        function Mo(e, t) {
            for (; e.length < t.length; )
                e = e.concat(e);
            return Math.max.apply(null, t.map((function(t, n) {
                return Po(t) + Po(e[n])
            }
            )))
        }
        function Po(e) {
            return 1e3 * Number(e.slice(0, -1).replace(",", "."))
        }
        function zo(e, n) {
            var o = e.elm;
            r(o._leaveCb) && (o._leaveCb.cancelled = !0,
            o._leaveCb());
            var i = Ao(e.data.transition);
            if (!t(i) && !r(o._enterCb) && 1 === o.nodeType) {
                for (var s = i.css, c = i.type, l = i.enterClass, u = i.enterToClass, f = i.enterActiveClass, p = i.appearClass, h = i.appearToClass, v = i.appearActiveClass, g = i.beforeEnter, m = i.enter, b = i.afterEnter, y = i.enterCancelled, A = i.beforeAppear, C = i.appear, w = i.afterAppear, _ = i.appearCancelled, $ = i.duration, k = Qt, B = Qt.$vnode; B && B.parent; )
                    k = B.context,
                    B = B.parent;
                var x = !k._isMounted || !e.isRootInsert;
                if (!x || C || "" === C) {
                    var S = x && p ? p : l
                      , O = x && v ? v : f
                      , j = x && h ? h : u
                      , E = x && A || g
                      , T = x && "function" == typeof C ? C : m
                      , D = x && w || b
                      , H = x && _ || y
                      , M = d(a($) ? $.enter : $)
                      , P = !1 !== s && !X
                      , z = Lo(T)
                      , F = o._enterCb = I((function() {
                        P && (To(o, j),
                        To(o, O)),
                        F.cancelled ? (P && To(o, S),
                        H && H(o)) : D && D(o),
                        o._enterCb = null
                    }
                    ));
                    e.data.show || ct(e, "insert", (function() {
                        var t = o.parentNode
                          , n = t && t._pending && t._pending[e.key];
                        n && n.tag === e.tag && n.elm._leaveCb && n.elm._leaveCb(),
                        T && T(o, F)
                    }
                    )),
                    E && E(o),
                    P && (Eo(o, S),
                    Eo(o, O),
                    jo((function() {
                        To(o, S),
                        F.cancelled || (Eo(o, j),
                        z || (No(M) ? setTimeout(F, M) : Do(o, c, F)))
                    }
                    ))),
                    e.data.show && (n && n(),
                    T && T(o, F)),
                    P || z || F()
                }
            }
        }
        function Fo(e, n) {
            var o = e.elm;
            r(o._enterCb) && (o._enterCb.cancelled = !0,
            o._enterCb());
            var i = Ao(e.data.transition);
            if (t(i) || 1 !== o.nodeType)
                return n();
            if (!r(o._leaveCb)) {
                var s = i.css
                  , c = i.type
                  , l = i.leaveClass
                  , u = i.leaveToClass
                  , f = i.leaveActiveClass
                  , p = i.beforeLeave
                  , h = i.leave
                  , v = i.afterLeave
                  , g = i.leaveCancelled
                  , m = i.delayLeave
                  , b = i.duration
                  , y = !1 !== s && !X
                  , A = Lo(h)
                  , C = d(a(b) ? b.leave : b)
                  , w = o._leaveCb = I((function() {
                    o.parentNode && o.parentNode._pending && (o.parentNode._pending[e.key] = null),
                    y && (To(o, u),
                    To(o, f)),
                    w.cancelled ? (y && To(o, l),
                    g && g(o)) : (n(),
                    v && v(o)),
                    o._leaveCb = null
                }
                ));
                m ? m(_) : _()
            }
            function _() {
                w.cancelled || (!e.data.show && o.parentNode && ((o.parentNode._pending || (o.parentNode._pending = {}))[e.key] = e),
                p && p(o),
                y && (Eo(o, l),
                Eo(o, f),
                jo((function() {
                    To(o, l),
                    w.cancelled || (Eo(o, u),
                    A || (No(C) ? setTimeout(w, C) : Do(o, c, w)))
                }
                ))),
                h && h(o, w),
                y || A || w())
            }
        }
        function No(e) {
            return "number" == typeof e && !isNaN(e)
        }
        function Lo(e) {
            if (t(e))
                return !1;
            var n = e.fns;
            return r(n) ? Lo(Array.isArray(n) ? n[0] : n) : (e._length || e.length) > 1
        }
        function Ro(e, t) {
            !0 !== t.data.show && zo(t)
        }
        var Uo = function(e) {
            var n, a, s = {}, c = e.modules, l = e.nodeOps;
            for (n = 0; n < or.length; ++n)
                for (s[or[n]] = [],
                a = 0; a < c.length; ++a)
                    r(c[a][or[n]]) && s[or[n]].push(c[a][or[n]]);
            function u(e) {
                var t = l.parentNode(e);
                r(t) && l.removeChild(t, e)
            }
            function f(e, t, n, i, a, c, u) {
                if (r(e.elm) && r(c) && (e = c[u] = be(e)),
                e.isRootInsert = !a,
                !function(e, t, n, i) {
                    var a = e.data;
                    if (r(a)) {
                        var c = r(e.componentInstance) && a.keepAlive;
                        if (r(a = a.hook) && r(a = a.init) && a(e, !1),
                        r(e.componentInstance))
                            return d(e, t),
                            h(n, e.elm, i),
                            o(c) && function(e, t, n, o) {
                                for (var i, a = e; a.componentInstance; )
                                    if (r(i = (a = a.componentInstance._vnode).data) && r(i = i.transition)) {
                                        for (i = 0; i < s.activate.length; ++i)
                                            s.activate[i](rr, a);
                                        t.push(a);
                                        break
                                    }
                                h(n, e.elm, o)
                            }(e, t, n, i),
                            !0
                    }
                }(e, t, n, i)) {
                    var f = e.data
                      , p = e.children
                      , g = e.tag;
                    r(g) ? (e.elm = e.ns ? l.createElementNS(e.ns, g) : l.createElement(g, e),
                    b(e),
                    v(e, p, t),
                    r(f) && m(e, t),
                    h(n, e.elm, i)) : o(e.isComment) ? (e.elm = l.createComment(e.text),
                    h(n, e.elm, i)) : (e.elm = l.createTextNode(e.text),
                    h(n, e.elm, i))
                }
            }
            function d(e, t) {
                r(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert),
                e.data.pendingInsert = null),
                e.elm = e.componentInstance.$el,
                g(e) ? (m(e, t),
                b(e)) : (nr(e),
                t.push(e))
            }
            function h(e, t, n) {
                r(e) && (r(n) ? l.parentNode(n) === e && l.insertBefore(e, t, n) : l.appendChild(e, t))
            }
            function v(e, t, n) {
                if (Array.isArray(t))
                    for (var r = 0; r < t.length; ++r)
                        f(t[r], n, e.elm, null, !0, t, r);
                else
                    i(e.text) && l.appendChild(e.elm, l.createTextNode(String(e.text)))
            }
            function g(e) {
                for (; e.componentInstance; )
                    e = e.componentInstance._vnode;
                return r(e.tag)
            }
            function m(e, t) {
                for (var o = 0; o < s.create.length; ++o)
                    s.create[o](rr, e);
                r(n = e.data.hook) && (r(n.create) && n.create(rr, e),
                r(n.insert) && t.push(e))
            }
            function b(e) {
                var t;
                if (r(t = e.fnScopeId))
                    l.setStyleScope(e.elm, t);
                else
                    for (var n = e; n; )
                        r(t = n.context) && r(t = t.$options._scopeId) && l.setStyleScope(e.elm, t),
                        n = n.parent;
                r(t = Qt) && t !== e.context && t !== e.fnContext && r(t = t.$options._scopeId) && l.setStyleScope(e.elm, t)
            }
            function y(e, t, n, r, o, i) {
                for (; r <= o; ++r)
                    f(n[r], i, e, t, !1, n, r)
            }
            function A(e) {
                var t, n, o = e.data;
                if (r(o))
                    for (r(t = o.hook) && r(t = t.destroy) && t(e),
                    t = 0; t < s.destroy.length; ++t)
                        s.destroy[t](e);
                if (r(t = e.children))
                    for (n = 0; n < e.children.length; ++n)
                        A(e.children[n])
            }
            function C(e, t, n) {
                for (; t <= n; ++t) {
                    var o = e[t];
                    r(o) && (r(o.tag) ? (w(o),
                    A(o)) : u(o.elm))
                }
            }
            function w(e, t) {
                if (r(t) || r(e.data)) {
                    var n, o = s.remove.length + 1;
                    for (r(t) ? t.listeners += o : t = function(e, t) {
                        function n() {
                            0 == --n.listeners && u(e)
                        }
                        return n.listeners = t,
                        n
                    }(e.elm, o),
                    r(n = e.componentInstance) && r(n = n._vnode) && r(n.data) && w(n, t),
                    n = 0; n < s.remove.length; ++n)
                        s.remove[n](e, t);
                    r(n = e.data.hook) && r(n = n.remove) ? n(e, t) : t()
                } else
                    u(e.elm)
            }
            function _(e, t, n, o) {
                for (var i = n; i < o; i++) {
                    var a = t[i];
                    if (r(a) && ir(e, a))
                        return i
                }
            }
            function $(e, n, i, a, c, u) {
                if (e !== n) {
                    r(n.elm) && r(a) && (n = a[c] = be(n));
                    var d = n.elm = e.elm;
                    if (o(e.isAsyncPlaceholder))
                        r(n.asyncFactory.resolved) ? x(e.elm, n, i) : n.isAsyncPlaceholder = !0;
                    else if (o(n.isStatic) && o(e.isStatic) && n.key === e.key && (o(n.isCloned) || o(n.isOnce)))
                        n.componentInstance = e.componentInstance;
                    else {
                        var p, h = n.data;
                        r(h) && r(p = h.hook) && r(p = p.prepatch) && p(e, n);
                        var v = e.children
                          , m = n.children;
                        if (r(h) && g(n)) {
                            for (p = 0; p < s.update.length; ++p)
                                s.update[p](e, n);
                            r(p = h.hook) && r(p = p.update) && p(e, n)
                        }
                        t(n.text) ? r(v) && r(m) ? v !== m && function(e, n, o, i, a) {
                            for (var s, c, u, d = 0, p = 0, h = n.length - 1, v = n[0], g = n[h], m = o.length - 1, b = o[0], A = o[m], w = !a; d <= h && p <= m; )
                                t(v) ? v = n[++d] : t(g) ? g = n[--h] : ir(v, b) ? ($(v, b, i, o, p),
                                v = n[++d],
                                b = o[++p]) : ir(g, A) ? ($(g, A, i, o, m),
                                g = n[--h],
                                A = o[--m]) : ir(v, A) ? ($(v, A, i, o, m),
                                w && l.insertBefore(e, v.elm, l.nextSibling(g.elm)),
                                v = n[++d],
                                A = o[--m]) : ir(g, b) ? ($(g, b, i, o, p),
                                w && l.insertBefore(e, g.elm, v.elm),
                                g = n[--h],
                                b = o[++p]) : (t(s) && (s = ar(n, d, h)),
                                t(c = r(b.key) ? s[b.key] : _(b, n, d, h)) ? f(b, i, e, v.elm, !1, o, p) : ir(u = n[c], b) ? ($(u, b, i, o, p),
                                n[c] = void 0,
                                w && l.insertBefore(e, u.elm, v.elm)) : f(b, i, e, v.elm, !1, o, p),
                                b = o[++p]);
                            d > h ? y(e, t(o[m + 1]) ? null : o[m + 1].elm, o, p, m, i) : p > m && C(n, d, h)
                        }(d, v, m, i, u) : r(m) ? (r(e.text) && l.setTextContent(d, ""),
                        y(d, null, m, 0, m.length - 1, i)) : r(v) ? C(v, 0, v.length - 1) : r(e.text) && l.setTextContent(d, "") : e.text !== n.text && l.setTextContent(d, n.text),
                        r(h) && r(p = h.hook) && r(p = p.postpatch) && p(e, n)
                    }
                }
            }
            function k(e, t, n) {
                if (o(n) && r(e.parent))
                    e.parent.data.pendingInsert = t;
                else
                    for (var i = 0; i < t.length; ++i)
                        t[i].data.hook.insert(t[i])
            }
            var B = p("attrs,class,staticClass,staticStyle,key");
            function x(e, t, n, i) {
                var a, s = t.tag, c = t.data, l = t.children;
                if (i = i || c && c.pre,
                t.elm = e,
                o(t.isComment) && r(t.asyncFactory))
                    return t.isAsyncPlaceholder = !0,
                    !0;
                if (r(c) && (r(a = c.hook) && r(a = a.init) && a(t, !0),
                r(a = t.componentInstance)))
                    return d(t, n),
                    !0;
                if (r(s)) {
                    if (r(l))
                        if (e.hasChildNodes())
                            if (r(a = c) && r(a = a.domProps) && r(a = a.innerHTML)) {
                                if (a !== e.innerHTML)
                                    return !1
                            } else {
                                for (var u = !0, f = e.firstChild, p = 0; p < l.length; p++) {
                                    if (!f || !x(f, l[p], n, i)) {
                                        u = !1;
                                        break
                                    }
                                    f = f.nextSibling
                                }
                                if (!u || f)
                                    return !1
                            }
                        else
                            v(t, l, n);
                    if (r(c)) {
                        var h = !1;
                        for (var g in c)
                            if (!B(g)) {
                                h = !0,
                                m(t, n);
                                break
                            }
                        !h && c.class && rt(c.class)
                    }
                } else
                    e.data !== t.text && (e.data = t.text);
                return !0
            }
            return function(e, n, i, a) {
                if (!t(n)) {
                    var c, u = !1, d = [];
                    if (t(e))
                        u = !0,
                        f(n, d);
                    else {
                        var p = r(e.nodeType);
                        if (!p && ir(e, n))
                            $(e, n, d, null, null, a);
                        else {
                            if (p) {
                                if (1 === e.nodeType && e.hasAttribute(H) && (e.removeAttribute(H),
                                i = !0),
                                o(i) && x(e, n, d))
                                    return k(n, d, !0),
                                    e;
                                c = e,
                                e = new he(l.tagName(c).toLowerCase(),{},[],void 0,c)
                            }
                            var h = e.elm
                              , v = l.parentNode(h);
                            if (f(n, d, h._leaveCb ? null : v, l.nextSibling(h)),
                            r(n.parent))
                                for (var m = n.parent, b = g(n); m; ) {
                                    for (var y = 0; y < s.destroy.length; ++y)
                                        s.destroy[y](m);
                                    if (m.elm = n.elm,
                                    b) {
                                        for (var w = 0; w < s.create.length; ++w)
                                            s.create[w](rr, m);
                                        var _ = m.data.hook.insert;
                                        if (_.merged)
                                            for (var B = 1; B < _.fns.length; B++)
                                                _.fns[B]()
                                    } else
                                        nr(m);
                                    m = m.parent
                                }
                            r(v) ? C([e], 0, 0) : r(e.tag) && A(e)
                        }
                    }
                    return k(n, d, u),
                    n.elm
                }
                r(e) && A(e)
            }
        }({
            nodeOps: er,
            modules: [mr, kr, to, oo, go, V ? {
                create: Ro,
                activate: Ro,
                remove: function(e, t) {
                    !0 !== e.data.show ? Fo(e, t) : t()
                }
            } : {}].concat(pr)
        });
        X && document.addEventListener("selectionchange", (function() {
            var e = document.activeElement;
            e && e.vmodel && Go(e, "input")
        }
        ));
        var qo = {
            inserted: function(e, t, n, r) {
                "select" === n.tag ? (r.elm && !r.elm._vOptions ? ct(n, "postpatch", (function() {
                    qo.componentUpdated(e, t, n)
                }
                )) : Vo(e, t, n.context),
                e._vOptions = [].map.call(e.options, Wo)) : ("textarea" === n.tag || Qn(e.type)) && (e._vModifiers = t.modifiers,
                t.modifiers.lazy || (e.addEventListener("compositionstart", Ko),
                e.addEventListener("compositionend", Xo),
                e.addEventListener("change", Xo),
                X && (e.vmodel = !0)))
            },
            componentUpdated: function(e, t, n) {
                if ("select" === n.tag) {
                    Vo(e, t, n.context);
                    var r = e._vOptions
                      , o = e._vOptions = [].map.call(e.options, Wo);
                    o.some((function(e, t) {
                        return !T(e, r[t])
                    }
                    )) && (e.multiple ? t.value.some((function(e) {
                        return Yo(e, o)
                    }
                    )) : t.value !== t.oldValue && Yo(t.value, o)) && Go(e, "change")
                }
            }
        };
        function Vo(e, t, n) {
            Zo(e, t),
            (K || G) && setTimeout((function() {
                Zo(e, t)
            }
            ), 0)
        }
        function Zo(e, t, n) {
            var r = t.value
              , o = e.multiple;
            if (!o || Array.isArray(r)) {
                for (var i, a, s = 0, c = e.options.length; s < c; s++)
                    if (a = e.options[s],
                    o)
                        i = D(r, Wo(a)) > -1,
                        a.selected !== i && (a.selected = i);
                    else if (T(Wo(a), r))
                        return void (e.selectedIndex !== s && (e.selectedIndex = s));
                o || (e.selectedIndex = -1)
            }
        }
        function Yo(e, t) {
            return t.every((function(t) {
                return !T(t, e)
            }
            ))
        }
        function Wo(e) {
            return "_value"in e ? e._value : e.value
        }
        function Ko(e) {
            e.target.composing = !0
        }
        function Xo(e) {
            e.target.composing && (e.target.composing = !1,
            Go(e.target, "input"))
        }
        function Go(e, t) {
            var n = document.createEvent("HTMLEvents");
            n.initEvent(t, !0, !0),
            e.dispatchEvent(n)
        }
        function Qo(e) {
            return !e.componentInstance || e.data && e.data.transition ? e : Qo(e.componentInstance._vnode)
        }
        var Jo = {
            model: qo,
            show: {
                bind: function(e, t, n) {
                    var r = t.value
                      , o = (n = Qo(n)).data && n.data.transition
                      , i = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
                    r && o ? (n.data.show = !0,
                    zo(n, (function() {
                        e.style.display = i
                    }
                    ))) : e.style.display = r ? i : "none"
                },
                update: function(e, t, n) {
                    var r = t.value;
                    !r != !t.oldValue && ((n = Qo(n)).data && n.data.transition ? (n.data.show = !0,
                    r ? zo(n, (function() {
                        e.style.display = e.__vOriginalDisplay
                    }
                    )) : Fo(n, (function() {
                        e.style.display = "none"
                    }
                    ))) : e.style.display = r ? e.__vOriginalDisplay : "none")
                },
                unbind: function(e, t, n, r, o) {
                    o || (e.style.display = e.__vOriginalDisplay)
                }
            }
        }
          , ei = {
            name: String,
            appear: Boolean,
            css: Boolean,
            mode: String,
            type: String,
            enterClass: String,
            leaveClass: String,
            enterToClass: String,
            leaveToClass: String,
            enterActiveClass: String,
            leaveActiveClass: String,
            appearClass: String,
            appearActiveClass: String,
            appearToClass: String,
            duration: [Number, String, Object]
        };
        function ti(e) {
            var t = e && e.componentOptions;
            return t && t.Ctor.options.abstract ? ti(Yt(t.children)) : e
        }
        function ni(e) {
            var t = {}
              , n = e.$options;
            for (var r in n.propsData)
                t[r] = e[r];
            var o = n._parentListeners;
            for (var i in o)
                t[C(i)] = o[i];
            return t
        }
        function ri(e, t) {
            if (/\d-keep-alive$/.test(t.tag))
                return e("keep-alive", {
                    props: t.componentOptions.propsData
                })
        }
        var oi = function(e) {
            return e.tag || Zt(e)
        }
          , ii = function(e) {
            return "show" === e.name
        }
          , ai = {
            name: "transition",
            props: ei,
            abstract: !0,
            render: function(e) {
                var t = this
                  , n = this.$slots.default;
                if (n && (n = n.filter(oi)).length) {
                    var r = this.mode
                      , o = n[0];
                    if (function(e) {
                        for (; e = e.parent; )
                            if (e.data.transition)
                                return !0
                    }(this.$vnode))
                        return o;
                    var a = ti(o);
                    if (!a)
                        return o;
                    if (this._leaving)
                        return ri(e, o);
                    var s = "__transition-" + this._uid + "-";
                    a.key = null == a.key ? a.isComment ? s + "comment" : s + a.tag : i(a.key) ? 0 === String(a.key).indexOf(s) ? a.key : s + a.key : a.key;
                    var c = (a.data || (a.data = {})).transition = ni(this)
                      , l = this._vnode
                      , u = ti(l);
                    if (a.data.directives && a.data.directives.some(ii) && (a.data.show = !0),
                    u && u.data && !function(e, t) {
                        return t.key === e.key && t.tag === e.tag
                    }(a, u) && !Zt(u) && (!u.componentInstance || !u.componentInstance._vnode.isComment)) {
                        var f = u.data.transition = x({}, c);
                        if ("out-in" === r)
                            return this._leaving = !0,
                            ct(f, "afterLeave", (function() {
                                t._leaving = !1,
                                t.$forceUpdate()
                            }
                            )),
                            ri(e, o);
                        if ("in-out" === r) {
                            if (Zt(a))
                                return l;
                            var d, p = function() {
                                d()
                            };
                            ct(c, "afterEnter", p),
                            ct(c, "enterCancelled", p),
                            ct(f, "delayLeave", (function(e) {
                                d = e
                            }
                            ))
                        }
                    }
                    return o
                }
            }
        }
          , si = x({
            tag: String,
            moveClass: String
        }, ei);
        function ci(e) {
            e.elm._moveCb && e.elm._moveCb(),
            e.elm._enterCb && e.elm._enterCb()
        }
        function li(e) {
            e.data.newPos = e.elm.getBoundingClientRect()
        }
        function ui(e) {
            var t = e.data.pos
              , n = e.data.newPos
              , r = t.left - n.left
              , o = t.top - n.top;
            if (r || o) {
                e.data.moved = !0;
                var i = e.elm.style;
                i.transform = i.WebkitTransform = "translate(" + r + "px," + o + "px)",
                i.transitionDuration = "0s"
            }
        }
        delete si.mode;
        var fi = {
            Transition: ai,
            TransitionGroup: {
                props: si,
                beforeMount: function() {
                    var e = this
                      , t = this._update;
                    this._update = function(n, r) {
                        var o = Jt(e);
                        e.__patch__(e._vnode, e.kept, !1, !0),
                        e._vnode = e.kept,
                        o(),
                        t.call(e, n, r)
                    }
                },
                render: function(e) {
                    for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, o = this.$slots.default || [], i = this.children = [], a = ni(this), s = 0; s < o.length; s++) {
                        var c = o[s];
                        c.tag && null != c.key && 0 !== String(c.key).indexOf("__vlist") && (i.push(c),
                        n[c.key] = c,
                        (c.data || (c.data = {})).transition = a)
                    }
                    if (r) {
                        for (var l = [], u = [], f = 0; f < r.length; f++) {
                            var d = r[f];
                            d.data.transition = a,
                            d.data.pos = d.elm.getBoundingClientRect(),
                            n[d.key] ? l.push(d) : u.push(d)
                        }
                        this.kept = e(t, null, l),
                        this.removed = u
                    }
                    return e(t, null, i)
                },
                updated: function() {
                    var e = this.prevChildren
                      , t = this.moveClass || (this.name || "v") + "-move";
                    e.length && this.hasMove(e[0].elm, t) && (e.forEach(ci),
                    e.forEach(li),
                    e.forEach(ui),
                    this._reflow = document.body.offsetHeight,
                    e.forEach((function(e) {
                        if (e.data.moved) {
                            var n = e.elm
                              , r = n.style;
                            Eo(n, t),
                            r.transform = r.WebkitTransform = r.transitionDuration = "",
                            n.addEventListener(Bo, n._moveCb = function e(r) {
                                r && r.target !== n || r && !/transform$/.test(r.propertyName) || (n.removeEventListener(Bo, e),
                                n._moveCb = null,
                                To(n, t))
                            }
                            )
                        }
                    }
                    )))
                },
                methods: {
                    hasMove: function(e, t) {
                        if (!wo)
                            return !1;
                        if (this._hasMove)
                            return this._hasMove;
                        var n = e.cloneNode();
                        e._transitionClasses && e._transitionClasses.forEach((function(e) {
                            yo(n, e)
                        }
                        )),
                        bo(n, t),
                        n.style.display = "none",
                        this.$el.appendChild(n);
                        var r = Ho(n);
                        return this.$el.removeChild(n),
                        this._hasMove = r.hasTransform
                    }
                }
            }
        };
        Bn.config.mustUseProp = Hn,
        Bn.config.isReservedTag = Kn,
        Bn.config.isReservedAttr = Dn,
        Bn.config.getTagNamespace = Xn,
        Bn.config.isUnknownElement = function(e) {
            if (!V)
                return !0;
            if (Kn(e))
                return !1;
            if (e = e.toLowerCase(),
            null != Gn[e])
                return Gn[e];
            var t = document.createElement(e);
            return e.indexOf("-") > -1 ? Gn[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : Gn[e] = /HTMLUnknownElement/.test(t.toString())
        }
        ,
        x(Bn.options.directives, Jo),
        x(Bn.options.components, fi),
        Bn.prototype.__patch__ = V ? Uo : O,
        Bn.prototype.$mount = function(e, t) {
            return function(e, t, n) {
                var r;
                return e.$el = t,
                e.$options.render || (e.$options.render = ge),
                rn(e, "beforeMount"),
                r = function() {
                    e._update(e._render(), n)
                }
                ,
                new gn(e,r,O,{
                    before: function() {
                        e._isMounted && !e._isDestroyed && rn(e, "beforeUpdate")
                    }
                },!0),
                n = !1,
                null == e.$vnode && (e._isMounted = !0,
                rn(e, "mounted")),
                e
            }(this, e = e && V ? Jn(e) : void 0, t)
        }
        ,
        V && setTimeout((function() {
            z.devtools && oe && oe.emit("init", Bn)
        }
        ), 0);
        var di, pi = /\{\{((?:.|\r?\n)+?)\}\}/g, hi = /[-.*+?^${}()|[\]\/\\]/g, vi = y((function(e) {
            var t = e[0].replace(hi, "\\$&")
              , n = e[1].replace(hi, "\\$&");
            return new RegExp(t + "((?:.|\\n)+?)" + n,"g")
        }
        )), gi = {
            staticKeys: ["staticClass"],
            transformNode: function(e, t) {
                t.warn;
                var n = zr(e, "class");
                n && (e.staticClass = JSON.stringify(n));
                var r = Pr(e, "class", !1);
                r && (e.classBinding = r)
            },
            genData: function(e) {
                var t = "";
                return e.staticClass && (t += "staticClass:" + e.staticClass + ","),
                e.classBinding && (t += "class:" + e.classBinding + ","),
                t
            }
        }, mi = {
            staticKeys: ["staticStyle"],
            transformNode: function(e, t) {
                t.warn;
                var n = zr(e, "style");
                n && (e.staticStyle = JSON.stringify(io(n)));
                var r = Pr(e, "style", !1);
                r && (e.styleBinding = r)
            },
            genData: function(e) {
                var t = "";
                return e.staticStyle && (t += "staticStyle:" + e.staticStyle + ","),
                e.styleBinding && (t += "style:(" + e.styleBinding + "),"),
                t
            }
        }, bi = p("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"), yi = p("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"), Ai = p("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"), Ci = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/, wi = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/, _i = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + F.source + "]*", $i = "((?:" + _i + "\\:)?" + _i + ")", ki = new RegExp("^<" + $i), Bi = /^\s*(\/?)>/, xi = new RegExp("^<\\/" + $i + "[^>]*>"), Si = /^<!DOCTYPE [^>]+>/i, Oi = /^<!\--/, ji = /^<!\[/, Ei = p("script,style,textarea", !0), Ti = {}, Di = {
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&amp;": "&",
            "&#10;": "\n",
            "&#9;": "\t",
            "&#39;": "'"
        }, Ii = /&(?:lt|gt|quot|amp|#39);/g, Hi = /&(?:lt|gt|quot|amp|#39|#10|#9);/g, Mi = p("pre,textarea", !0), Pi = function(e, t) {
            return e && Mi(e) && "\n" === t[0]
        };
        function zi(e, t) {
            var n = t ? Hi : Ii;
            return e.replace(n, (function(e) {
                return Di[e]
            }
            ))
        }
        var Fi, Ni, Li, Ri, Ui, qi, Vi, Zi, Yi = /^@|^v-on:/, Wi = /^v-|^@|^:|^#/, Ki = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/, Xi = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, Gi = /^\(|\)$/g, Qi = /^\[.*\]$/, Ji = /:(.*)$/, ea = /^:|^\.|^v-bind:/, ta = /\.[^.\]]+(?=[^\]]*$)/g, na = /^v-slot(:|$)|^#/, ra = /[\r\n]/, oa = /\s+/g, ia = y((function(e) {
            return (di = di || document.createElement("div")).innerHTML = e,
            di.textContent
        }
        )), aa = "_empty_";
        function sa(e, t, n) {
            return {
                type: 1,
                tag: e,
                attrsList: t,
                attrsMap: pa(t),
                rawAttrsMap: {},
                parent: n,
                children: []
            }
        }
        function ca(e, t) {
            var n;
            !function(e) {
                var t = Pr(e, "key");
                t && (e.key = t)
            }(e),
            e.plain = !e.key && !e.scopedSlots && !e.attrsList.length,
            function(e) {
                var t = Pr(e, "ref");
                t && (e.ref = t,
                e.refInFor = function(e) {
                    for (var t = e; t; ) {
                        if (void 0 !== t.for)
                            return !0;
                        t = t.parent
                    }
                    return !1
                }(e))
            }(e),
            function(e) {
                var t;
                "template" === e.tag ? (t = zr(e, "scope"),
                e.slotScope = t || zr(e, "slot-scope")) : (t = zr(e, "slot-scope")) && (e.slotScope = t);
                var n = Pr(e, "slot");
                if (n && (e.slotTarget = '""' === n ? '"default"' : n,
                e.slotTargetDynamic = !(!e.attrsMap[":slot"] && !e.attrsMap["v-bind:slot"]),
                "template" === e.tag || e.slotScope || Tr(e, "slot", n, function(e, t) {
                    return e.rawAttrsMap[":slot"] || e.rawAttrsMap["v-bind:slot"] || e.rawAttrsMap.slot
                }(e))),
                "template" === e.tag) {
                    var r = Fr(e, na);
                    if (r) {
                        var o = fa(r)
                          , i = o.name
                          , a = o.dynamic;
                        e.slotTarget = i,
                        e.slotTargetDynamic = a,
                        e.slotScope = r.value || aa
                    }
                } else {
                    var s = Fr(e, na);
                    if (s) {
                        var c = e.scopedSlots || (e.scopedSlots = {})
                          , l = fa(s)
                          , u = l.name
                          , f = l.dynamic
                          , d = c[u] = sa("template", [], e);
                        d.slotTarget = u,
                        d.slotTargetDynamic = f,
                        d.children = e.children.filter((function(e) {
                            if (!e.slotScope)
                                return e.parent = d,
                                !0
                        }
                        )),
                        d.slotScope = s.value || aa,
                        e.children = [],
                        e.plain = !1
                    }
                }
            }(e),
            "slot" === (n = e).tag && (n.slotName = Pr(n, "name")),
            function(e) {
                var t;
                (t = Pr(e, "is")) && (e.component = t),
                null != zr(e, "inline-template") && (e.inlineTemplate = !0)
            }(e);
            for (var r = 0; r < Li.length; r++)
                e = Li[r](e, t) || e;
            return function(e) {
                var t, n, r, o, i, a, s, c, l = e.attrsList;
                for (t = 0,
                n = l.length; t < n; t++)
                    if (r = o = l[t].name,
                    i = l[t].value,
                    Wi.test(r))
                        if (e.hasBindings = !0,
                        (a = da(r.replace(Wi, ""))) && (r = r.replace(ta, "")),
                        ea.test(r))
                            r = r.replace(ea, ""),
                            i = xr(i),
                            (c = Qi.test(r)) && (r = r.slice(1, -1)),
                            a && (a.prop && !c && "innerHtml" === (r = C(r)) && (r = "innerHTML"),
                            a.camel && !c && (r = C(r)),
                            a.sync && (s = Rr(i, "$event"),
                            c ? Mr(e, '"update:"+(' + r + ")", s, null, !1, 0, l[t], !0) : (Mr(e, "update:" + C(r), s, null, !1, 0, l[t]),
                            $(r) !== C(r) && Mr(e, "update:" + $(r), s, null, !1, 0, l[t])))),
                            a && a.prop || !e.component && Vi(e.tag, e.attrsMap.type, r) ? Er(e, r, i, l[t], c) : Tr(e, r, i, l[t], c);
                        else if (Yi.test(r))
                            r = r.replace(Yi, ""),
                            (c = Qi.test(r)) && (r = r.slice(1, -1)),
                            Mr(e, r, i, a, !1, 0, l[t], c);
                        else {
                            var u = (r = r.replace(Wi, "")).match(Ji)
                              , f = u && u[1];
                            c = !1,
                            f && (r = r.slice(0, -(f.length + 1)),
                            Qi.test(f) && (f = f.slice(1, -1),
                            c = !0)),
                            Ir(e, r, o, i, f, c, a, l[t])
                        }
                    else
                        Tr(e, r, JSON.stringify(i), l[t]),
                        !e.component && "muted" === r && Vi(e.tag, e.attrsMap.type, r) && Er(e, r, "true", l[t])
            }(e),
            e
        }
        function la(e) {
            var t;
            if (t = zr(e, "v-for")) {
                var n = function(e) {
                    var t = e.match(Ki);
                    if (t) {
                        var n = {};
                        n.for = t[2].trim();
                        var r = t[1].trim().replace(Gi, "")
                          , o = r.match(Xi);
                        return o ? (n.alias = r.replace(Xi, "").trim(),
                        n.iterator1 = o[1].trim(),
                        o[2] && (n.iterator2 = o[2].trim())) : n.alias = r,
                        n
                    }
                }(t);
                n && x(e, n)
            }
        }
        function ua(e, t) {
            e.ifConditions || (e.ifConditions = []),
            e.ifConditions.push(t)
        }
        function fa(e) {
            var t = e.name.replace(na, "");
            return t || "#" !== e.name[0] && (t = "default"),
            Qi.test(t) ? {
                name: t.slice(1, -1),
                dynamic: !0
            } : {
                name: '"' + t + '"',
                dynamic: !1
            }
        }
        function da(e) {
            var t = e.match(ta);
            if (t) {
                var n = {};
                return t.forEach((function(e) {
                    n[e.slice(1)] = !0
                }
                )),
                n
            }
        }
        function pa(e) {
            for (var t = {}, n = 0, r = e.length; n < r; n++)
                t[e[n].name] = e[n].value;
            return t
        }
        var ha = /^xmlns:NS\d+/
          , va = /^NS\d+:/;
        function ga(e) {
            return sa(e.tag, e.attrsList.slice(), e.parent)
        }
        var ma, ba, ya, Aa = [gi, mi, {
            preTransformNode: function(e, t) {
                if ("input" === e.tag) {
                    var n, r = e.attrsMap;
                    if (!r["v-model"])
                        return;
                    if ((r[":type"] || r["v-bind:type"]) && (n = Pr(e, "type")),
                    r.type || n || !r["v-bind"] || (n = "(" + r["v-bind"] + ").type"),
                    n) {
                        var o = zr(e, "v-if", !0)
                          , i = o ? "&&(" + o + ")" : ""
                          , a = null != zr(e, "v-else", !0)
                          , s = zr(e, "v-else-if", !0)
                          , c = ga(e);
                        la(c),
                        Dr(c, "type", "checkbox"),
                        ca(c, t),
                        c.processed = !0,
                        c.if = "(" + n + ")==='checkbox'" + i,
                        ua(c, {
                            exp: c.if,
                            block: c
                        });
                        var l = ga(e);
                        zr(l, "v-for", !0),
                        Dr(l, "type", "radio"),
                        ca(l, t),
                        ua(c, {
                            exp: "(" + n + ")==='radio'" + i,
                            block: l
                        });
                        var u = ga(e);
                        return zr(u, "v-for", !0),
                        Dr(u, ":type", n),
                        ca(u, t),
                        ua(c, {
                            exp: o,
                            block: u
                        }),
                        a ? c.else = !0 : s && (c.elseif = s),
                        c
                    }
                }
            }
        }], Ca = {
            expectHTML: !0,
            modules: Aa,
            directives: {
                model: function(e, t, n) {
                    var r = t.value
                      , o = t.modifiers
                      , i = e.tag
                      , a = e.attrsMap.type;
                    if (e.component)
                        return Lr(e, r, o),
                        !1;
                    if ("select" === i)
                        !function(e, t, n) {
                            var r = 'var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (n && n.number ? "_n(val)" : "val") + "});";
                            Mr(e, "change", r = r + " " + Rr(t, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), null, !0)
                        }(e, r, o);
                    else if ("input" === i && "checkbox" === a)
                        !function(e, t, n) {
                            var r = n && n.number
                              , o = Pr(e, "value") || "null"
                              , i = Pr(e, "true-value") || "true"
                              , a = Pr(e, "false-value") || "false";
                            Er(e, "checked", "Array.isArray(" + t + ")?_i(" + t + "," + o + ")>-1" + ("true" === i ? ":(" + t + ")" : ":_q(" + t + "," + i + ")")),
                            Mr(e, "change", "var $$a=" + t + ",$$el=$event.target,$$c=$$el.checked?(" + i + "):(" + a + ");if(Array.isArray($$a)){var $$v=" + (r ? "_n(" + o + ")" : o) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + Rr(t, "$$a.concat([$$v])") + ")}else{$$i>-1&&(" + Rr(t, "$$a.slice(0,$$i).concat($$a.slice($$i+1))") + ")}}else{" + Rr(t, "$$c") + "}", null, !0)
                        }(e, r, o);
                    else if ("input" === i && "radio" === a)
                        !function(e, t, n) {
                            var r = n && n.number
                              , o = Pr(e, "value") || "null";
                            Er(e, "checked", "_q(" + t + "," + (o = r ? "_n(" + o + ")" : o) + ")"),
                            Mr(e, "change", Rr(t, o), null, !0)
                        }(e, r, o);
                    else if ("input" === i || "textarea" === i)
                        !function(e, t, n) {
                            var r = e.attrsMap.type
                              , o = n || {}
                              , i = o.lazy
                              , a = o.number
                              , s = o.trim
                              , c = !i && "range" !== r
                              , l = i ? "change" : "range" === r ? "__r" : "input"
                              , u = "$event.target.value";
                            s && (u = "$event.target.value.trim()"),
                            a && (u = "_n(" + u + ")");
                            var f = Rr(t, u);
                            c && (f = "if($event.target.composing)return;" + f),
                            Er(e, "value", "(" + t + ")"),
                            Mr(e, l, f, null, !0),
                            (s || a) && Mr(e, "blur", "$forceUpdate()")
                        }(e, r, o);
                    else if (!z.isReservedTag(i))
                        return Lr(e, r, o),
                        !1;
                    return !0
                },
                text: function(e, t) {
                    t.value && Er(e, "textContent", "_s(" + t.value + ")", t)
                },
                html: function(e, t) {
                    t.value && Er(e, "innerHTML", "_s(" + t.value + ")", t)
                }
            },
            isPreTag: function(e) {
                return "pre" === e
            },
            isUnaryTag: bi,
            mustUseProp: Hn,
            canBeLeftOpenTag: yi,
            isReservedTag: Kn,
            getTagNamespace: Xn,
            staticKeys: (ya = Aa,
            ya.reduce((function(e, t) {
                return e.concat(t.staticKeys || [])
            }
            ), []).join(","))
        }, wa = y((function(e) {
            return p("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" + (e ? "," + e : ""))
        }
        ));
        function _a(e, t) {
            e && (ma = wa(t.staticKeys || ""),
            ba = t.isReservedTag || j,
            $a(e),
            ka(e, !1))
        }
        function $a(e) {
            if (e.static = function(e) {
                return 2 !== e.type && (3 === e.type || !(!e.pre && (e.hasBindings || e.if || e.for || h(e.tag) || !ba(e.tag) || function(e) {
                    for (; e.parent; ) {
                        if ("template" !== (e = e.parent).tag)
                            return !1;
                        if (e.for)
                            return !0
                    }
                    return !1
                }(e) || !Object.keys(e).every(ma))))
            }(e),
            1 === e.type) {
                if (!ba(e.tag) && "slot" !== e.tag && null == e.attrsMap["inline-template"])
                    return;
                for (var t = 0, n = e.children.length; t < n; t++) {
                    var r = e.children[t];
                    $a(r),
                    r.static || (e.static = !1)
                }
                if (e.ifConditions)
                    for (var o = 1, i = e.ifConditions.length; o < i; o++) {
                        var a = e.ifConditions[o].block;
                        $a(a),
                        a.static || (e.static = !1)
                    }
            }
        }
        function ka(e, t) {
            if (1 === e.type) {
                if ((e.static || e.once) && (e.staticInFor = t),
                e.static && e.children.length && (1 !== e.children.length || 3 !== e.children[0].type))
                    return void (e.staticRoot = !0);
                if (e.staticRoot = !1,
                e.children)
                    for (var n = 0, r = e.children.length; n < r; n++)
                        ka(e.children[n], t || !!e.for);
                if (e.ifConditions)
                    for (var o = 1, i = e.ifConditions.length; o < i; o++)
                        ka(e.ifConditions[o].block, t)
            }
        }
        var Ba = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/
          , xa = /\([^)]*?\);*$/
          , Sa = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/
          , Oa = {
            esc: 27,
            tab: 9,
            enter: 13,
            space: 32,
            up: 38,
            left: 37,
            right: 39,
            down: 40,
            delete: [8, 46]
        }
          , ja = {
            esc: ["Esc", "Escape"],
            tab: "Tab",
            enter: "Enter",
            space: [" ", "Spacebar"],
            up: ["Up", "ArrowUp"],
            left: ["Left", "ArrowLeft"],
            right: ["Right", "ArrowRight"],
            down: ["Down", "ArrowDown"],
            delete: ["Backspace", "Delete", "Del"]
        }
          , Ea = function(e) {
            return "if(" + e + ")return null;"
        }
          , Ta = {
            stop: "$event.stopPropagation();",
            prevent: "$event.preventDefault();",
            self: Ea("$event.target !== $event.currentTarget"),
            ctrl: Ea("!$event.ctrlKey"),
            shift: Ea("!$event.shiftKey"),
            alt: Ea("!$event.altKey"),
            meta: Ea("!$event.metaKey"),
            left: Ea("'button' in $event && $event.button !== 0"),
            middle: Ea("'button' in $event && $event.button !== 1"),
            right: Ea("'button' in $event && $event.button !== 2")
        };
        function Da(e, t) {
            var n = t ? "nativeOn:" : "on:"
              , r = ""
              , o = "";
            for (var i in e) {
                var a = Ia(e[i]);
                e[i] && e[i].dynamic ? o += i + "," + a + "," : r += '"' + i + '":' + a + ","
            }
            return r = "{" + r.slice(0, -1) + "}",
            o ? n + "_d(" + r + ",[" + o.slice(0, -1) + "])" : n + r
        }
        function Ia(e) {
            if (!e)
                return "function(){}";
            if (Array.isArray(e))
                return "[" + e.map((function(e) {
                    return Ia(e)
                }
                )).join(",") + "]";
            var t = Sa.test(e.value)
              , n = Ba.test(e.value)
              , r = Sa.test(e.value.replace(xa, ""));
            if (e.modifiers) {
                var o = ""
                  , i = ""
                  , a = [];
                for (var s in e.modifiers)
                    if (Ta[s])
                        i += Ta[s],
                        Oa[s] && a.push(s);
                    else if ("exact" === s) {
                        var c = e.modifiers;
                        i += Ea(["ctrl", "shift", "alt", "meta"].filter((function(e) {
                            return !c[e]
                        }
                        )).map((function(e) {
                            return "$event." + e + "Key"
                        }
                        )).join("||"))
                    } else
                        a.push(s);
                return a.length && (o += function(e) {
                    return "if(!$event.type.indexOf('key')&&" + e.map(Ha).join("&&") + ")return null;"
                }(a)),
                i && (o += i),
                "function($event){" + o + (t ? "return " + e.value + "($event)" : n ? "return (" + e.value + ")($event)" : r ? "return " + e.value : e.value) + "}"
            }
            return t || n ? e.value : "function($event){" + (r ? "return " + e.value : e.value) + "}"
        }
        function Ha(e) {
            var t = parseInt(e, 10);
            if (t)
                return "$event.keyCode!==" + t;
            var n = Oa[e]
              , r = ja[e];
            return "_k($event.keyCode," + JSON.stringify(e) + "," + JSON.stringify(n) + ",$event.key," + JSON.stringify(r) + ")"
        }
        var Ma = {
            on: function(e, t) {
                e.wrapListeners = function(e) {
                    return "_g(" + e + "," + t.value + ")"
                }
            },
            bind: function(e, t) {
                e.wrapData = function(n) {
                    return "_b(" + n + ",'" + e.tag + "'," + t.value + "," + (t.modifiers && t.modifiers.prop ? "true" : "false") + (t.modifiers && t.modifiers.sync ? ",true" : "") + ")"
                }
            },
            cloak: O
        }
          , Pa = function(e) {
            this.options = e,
            this.warn = e.warn || Or,
            this.transforms = jr(e.modules, "transformCode"),
            this.dataGenFns = jr(e.modules, "genData"),
            this.directives = x(x({}, Ma), e.directives);
            var t = e.isReservedTag || j;
            this.maybeComponent = function(e) {
                return !!e.component || !t(e.tag)
            }
            ,
            this.onceId = 0,
            this.staticRenderFns = [],
            this.pre = !1
        };
        function za(e, t) {
            var n = new Pa(t);
            return {
                render: "with(this){return " + (e ? Fa(e, n) : '_c("div")') + "}",
                staticRenderFns: n.staticRenderFns
            }
        }
        function Fa(e, t) {
            if (e.parent && (e.pre = e.pre || e.parent.pre),
            e.staticRoot && !e.staticProcessed)
                return Na(e, t);
            if (e.once && !e.onceProcessed)
                return La(e, t);
            if (e.for && !e.forProcessed)
                return qa(e, t);
            if (e.if && !e.ifProcessed)
                return Ra(e, t);
            if ("template" !== e.tag || e.slotTarget || t.pre) {
                if ("slot" === e.tag)
                    return function(e, t) {
                        var n = e.slotName || '"default"'
                          , r = Wa(e, t)
                          , o = "_t(" + n + (r ? "," + r : "")
                          , i = e.attrs || e.dynamicAttrs ? Ga((e.attrs || []).concat(e.dynamicAttrs || []).map((function(e) {
                            return {
                                name: C(e.name),
                                value: e.value,
                                dynamic: e.dynamic
                            }
                        }
                        ))) : null
                          , a = e.attrsMap["v-bind"];
                        return !i && !a || r || (o += ",null"),
                        i && (o += "," + i),
                        a && (o += (i ? "" : ",null") + "," + a),
                        o + ")"
                    }(e, t);
                var n;
                if (e.component)
                    n = function(e, t, n) {
                        var r = t.inlineTemplate ? null : Wa(t, n, !0);
                        return "_c(" + e + "," + Va(t, n) + (r ? "," + r : "") + ")"
                    }(e.component, e, t);
                else {
                    var r;
                    (!e.plain || e.pre && t.maybeComponent(e)) && (r = Va(e, t));
                    var o = e.inlineTemplate ? null : Wa(e, t, !0);
                    n = "_c('" + e.tag + "'" + (r ? "," + r : "") + (o ? "," + o : "") + ")"
                }
                for (var i = 0; i < t.transforms.length; i++)
                    n = t.transforms[i](e, n);
                return n
            }
            return Wa(e, t) || "void 0"
        }
        function Na(e, t) {
            e.staticProcessed = !0;
            var n = t.pre;
            return e.pre && (t.pre = e.pre),
            t.staticRenderFns.push("with(this){return " + Fa(e, t) + "}"),
            t.pre = n,
            "_m(" + (t.staticRenderFns.length - 1) + (e.staticInFor ? ",true" : "") + ")"
        }
        function La(e, t) {
            if (e.onceProcessed = !0,
            e.if && !e.ifProcessed)
                return Ra(e, t);
            if (e.staticInFor) {
                for (var n = "", r = e.parent; r; ) {
                    if (r.for) {
                        n = r.key;
                        break
                    }
                    r = r.parent
                }
                return n ? "_o(" + Fa(e, t) + "," + t.onceId++ + "," + n + ")" : Fa(e, t)
            }
            return Na(e, t)
        }
        function Ra(e, t, n, r) {
            return e.ifProcessed = !0,
            Ua(e.ifConditions.slice(), t, n, r)
        }
        function Ua(e, t, n, r) {
            if (!e.length)
                return r || "_e()";
            var o = e.shift();
            return o.exp ? "(" + o.exp + ")?" + i(o.block) + ":" + Ua(e, t, n, r) : "" + i(o.block);
            function i(e) {
                return n ? n(e, t) : e.once ? La(e, t) : Fa(e, t)
            }
        }
        function qa(e, t, n, r) {
            var o = e.for
              , i = e.alias
              , a = e.iterator1 ? "," + e.iterator1 : ""
              , s = e.iterator2 ? "," + e.iterator2 : "";
            return e.forProcessed = !0,
            (r || "_l") + "((" + o + "),function(" + i + a + s + "){return " + (n || Fa)(e, t) + "})"
        }
        function Va(e, t) {
            var n = "{"
              , r = function(e, t) {
                var n = e.directives;
                if (n) {
                    var r, o, i, a, s = "directives:[", c = !1;
                    for (r = 0,
                    o = n.length; r < o; r++) {
                        i = n[r],
                        a = !0;
                        var l = t.directives[i.name];
                        l && (a = !!l(e, i, t.warn)),
                        a && (c = !0,
                        s += '{name:"' + i.name + '",rawName:"' + i.rawName + '"' + (i.value ? ",value:(" + i.value + "),expression:" + JSON.stringify(i.value) : "") + (i.arg ? ",arg:" + (i.isDynamicArg ? i.arg : '"' + i.arg + '"') : "") + (i.modifiers ? ",modifiers:" + JSON.stringify(i.modifiers) : "") + "},")
                    }
                    return c ? s.slice(0, -1) + "]" : void 0
                }
            }(e, t);
            r && (n += r + ","),
            e.key && (n += "key:" + e.key + ","),
            e.ref && (n += "ref:" + e.ref + ","),
            e.refInFor && (n += "refInFor:true,"),
            e.pre && (n += "pre:true,"),
            e.component && (n += 'tag:"' + e.tag + '",');
            for (var o = 0; o < t.dataGenFns.length; o++)
                n += t.dataGenFns[o](e);
            if (e.attrs && (n += "attrs:" + Ga(e.attrs) + ","),
            e.props && (n += "domProps:" + Ga(e.props) + ","),
            e.events && (n += Da(e.events, !1) + ","),
            e.nativeEvents && (n += Da(e.nativeEvents, !0) + ","),
            e.slotTarget && !e.slotScope && (n += "slot:" + e.slotTarget + ","),
            e.scopedSlots && (n += function(e, t, n) {
                var r = e.for || Object.keys(t).some((function(e) {
                    var n = t[e];
                    return n.slotTargetDynamic || n.if || n.for || Za(n)
                }
                ))
                  , o = !!e.if;
                if (!r)
                    for (var i = e.parent; i; ) {
                        if (i.slotScope && i.slotScope !== aa || i.for) {
                            r = !0;
                            break
                        }
                        i.if && (o = !0),
                        i = i.parent
                    }
                var a = Object.keys(t).map((function(e) {
                    return Ya(t[e], n)
                }
                )).join(",");
                return "scopedSlots:_u([" + a + "]" + (r ? ",null,true" : "") + (!r && o ? ",null,false," + function(e) {
                    for (var t = 5381, n = e.length; n; )
                        t = 33 * t ^ e.charCodeAt(--n);
                    return t >>> 0
                }(a) : "") + ")"
            }(e, e.scopedSlots, t) + ","),
            e.model && (n += "model:{value:" + e.model.value + ",callback:" + e.model.callback + ",expression:" + e.model.expression + "},"),
            e.inlineTemplate) {
                var i = function(e, t) {
                    var n = e.children[0];
                    if (n && 1 === n.type) {
                        var r = za(n, t.options);
                        return "inlineTemplate:{render:function(){" + r.render + "},staticRenderFns:[" + r.staticRenderFns.map((function(e) {
                            return "function(){" + e + "}"
                        }
                        )).join(",") + "]}"
                    }
                }(e, t);
                i && (n += i + ",")
            }
            return n = n.replace(/,$/, "") + "}",
            e.dynamicAttrs && (n = "_b(" + n + ',"' + e.tag + '",' + Ga(e.dynamicAttrs) + ")"),
            e.wrapData && (n = e.wrapData(n)),
            e.wrapListeners && (n = e.wrapListeners(n)),
            n
        }
        function Za(e) {
            return 1 === e.type && ("slot" === e.tag || e.children.some(Za))
        }
        function Ya(e, t) {
            var n = e.attrsMap["slot-scope"];
            if (e.if && !e.ifProcessed && !n)
                return Ra(e, t, Ya, "null");
            if (e.for && !e.forProcessed)
                return qa(e, t, Ya);
            var r = e.slotScope === aa ? "" : String(e.slotScope)
              , o = "function(" + r + "){return " + ("template" === e.tag ? e.if && n ? "(" + e.if + ")?" + (Wa(e, t) || "undefined") + ":undefined" : Wa(e, t) || "undefined" : Fa(e, t)) + "}"
              , i = r ? "" : ",proxy:true";
            return "{key:" + (e.slotTarget || '"default"') + ",fn:" + o + i + "}"
        }
        function Wa(e, t, n, r, o) {
            var i = e.children;
            if (i.length) {
                var a = i[0];
                if (1 === i.length && a.for && "template" !== a.tag && "slot" !== a.tag) {
                    var s = n ? t.maybeComponent(a) ? ",1" : ",0" : "";
                    return "" + (r || Fa)(a, t) + s
                }
                var c = n ? function(e, t) {
                    for (var n = 0, r = 0; r < e.length; r++) {
                        var o = e[r];
                        if (1 === o.type) {
                            if (Ka(o) || o.ifConditions && o.ifConditions.some((function(e) {
                                return Ka(e.block)
                            }
                            ))) {
                                n = 2;
                                break
                            }
                            (t(o) || o.ifConditions && o.ifConditions.some((function(e) {
                                return t(e.block)
                            }
                            ))) && (n = 1)
                        }
                    }
                    return n
                }(i, t.maybeComponent) : 0
                  , l = o || Xa;
                return "[" + i.map((function(e) {
                    return l(e, t)
                }
                )).join(",") + "]" + (c ? "," + c : "")
            }
        }
        function Ka(e) {
            return void 0 !== e.for || "template" === e.tag || "slot" === e.tag
        }
        function Xa(e, t) {
            return 1 === e.type ? Fa(e, t) : 3 === e.type && e.isComment ? function(e) {
                return "_e(" + JSON.stringify(e.text) + ")"
            }(e) : "_v(" + (2 === (n = e).type ? n.expression : Qa(JSON.stringify(n.text))) + ")";
            var n
        }
        function Ga(e) {
            for (var t = "", n = "", r = 0; r < e.length; r++) {
                var o = e[r]
                  , i = Qa(o.value);
                o.dynamic ? n += o.name + "," + i + "," : t += '"' + o.name + '":' + i + ","
            }
            return t = "{" + t.slice(0, -1) + "}",
            n ? "_d(" + t + ",[" + n.slice(0, -1) + "])" : t
        }
        function Qa(e) {
            return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029")
        }
        function Ja(e, t) {
            try {
                return new Function(e)
            } catch (n) {
                return t.push({
                    err: n,
                    code: e
                }),
                O
            }
        }
        function es(e) {
            var t = Object.create(null);
            return function(n, r, o) {
                (r = x({}, r)).warn,
                delete r.warn;
                var i = r.delimiters ? String(r.delimiters) + n : n;
                if (t[i])
                    return t[i];
                var a = e(n, r)
                  , s = {}
                  , c = [];
                return s.render = Ja(a.render, c),
                s.staticRenderFns = a.staticRenderFns.map((function(e) {
                    return Ja(e, c)
                }
                )),
                t[i] = s
            }
        }
        new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b"),
        new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)");
        var ts, ns, rs = (ts = function(e, t) {
            var n = function(e, t) {
                Fi = t.warn || Or,
                qi = t.isPreTag || j,
                Vi = t.mustUseProp || j,
                Zi = t.getTagNamespace || j,
                t.isReservedTag,
                Li = jr(t.modules, "transformNode"),
                Ri = jr(t.modules, "preTransformNode"),
                Ui = jr(t.modules, "postTransformNode"),
                Ni = t.delimiters;
                var n, r, o = [], i = !1 !== t.preserveWhitespace, a = t.whitespace, s = !1, c = !1;
                function l(e) {
                    if (u(e),
                    s || e.processed || (e = ca(e, t)),
                    o.length || e === n || n.if && (e.elseif || e.else) && ua(n, {
                        exp: e.elseif,
                        block: e
                    }),
                    r && !e.forbidden)
                        if (e.elseif || e.else)
                            a = e,
                            (l = function(e) {
                                for (var t = e.length; t--; ) {
                                    if (1 === e[t].type)
                                        return e[t];
                                    e.pop()
                                }
                            }(r.children)) && l.if && ua(l, {
                                exp: a.elseif,
                                block: a
                            });
                        else {
                            if (e.slotScope) {
                                var i = e.slotTarget || '"default"';
                                (r.scopedSlots || (r.scopedSlots = {}))[i] = e
                            }
                            r.children.push(e),
                            e.parent = r
                        }
                    var a, l;
                    e.children = e.children.filter((function(e) {
                        return !e.slotScope
                    }
                    )),
                    u(e),
                    e.pre && (s = !1),
                    qi(e.tag) && (c = !1);
                    for (var f = 0; f < Ui.length; f++)
                        Ui[f](e, t)
                }
                function u(e) {
                    if (!c)
                        for (var t; (t = e.children[e.children.length - 1]) && 3 === t.type && " " === t.text; )
                            e.children.pop()
                }
                return function(e, t) {
                    for (var n, r, o = [], i = t.expectHTML, a = t.isUnaryTag || j, s = t.canBeLeftOpenTag || j, c = 0; e; ) {
                        if (n = e,
                        r && Ei(r)) {
                            var l = 0
                              , u = r.toLowerCase()
                              , f = Ti[u] || (Ti[u] = new RegExp("([\\s\\S]*?)(</" + u + "[^>]*>)","i"))
                              , d = e.replace(f, (function(e, n, r) {
                                return l = r.length,
                                Ei(u) || "noscript" === u || (n = n.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")),
                                Pi(u, n) && (n = n.slice(1)),
                                t.chars && t.chars(n),
                                ""
                            }
                            ));
                            c += e.length - d.length,
                            e = d,
                            B(u, c - l, c)
                        } else {
                            var p = e.indexOf("<");
                            if (0 === p) {
                                if (Oi.test(e)) {
                                    var h = e.indexOf("--\x3e");
                                    if (h >= 0) {
                                        t.shouldKeepComment && t.comment(e.substring(4, h), c, c + h + 3),
                                        _(h + 3);
                                        continue
                                    }
                                }
                                if (ji.test(e)) {
                                    var v = e.indexOf("]>");
                                    if (v >= 0) {
                                        _(v + 2);
                                        continue
                                    }
                                }
                                var g = e.match(Si);
                                if (g) {
                                    _(g[0].length);
                                    continue
                                }
                                var m = e.match(xi);
                                if (m) {
                                    var b = c;
                                    _(m[0].length),
                                    B(m[1], b, c);
                                    continue
                                }
                                var y = $();
                                if (y) {
                                    k(y),
                                    Pi(y.tagName, e) && _(1);
                                    continue
                                }
                            }
                            var A = void 0
                              , C = void 0
                              , w = void 0;
                            if (p >= 0) {
                                for (C = e.slice(p); !(xi.test(C) || ki.test(C) || Oi.test(C) || ji.test(C) || (w = C.indexOf("<", 1)) < 0); )
                                    p += w,
                                    C = e.slice(p);
                                A = e.substring(0, p)
                            }
                            p < 0 && (A = e),
                            A && _(A.length),
                            t.chars && A && t.chars(A, c - A.length, c)
                        }
                        if (e === n) {
                            t.chars && t.chars(e);
                            break
                        }
                    }
                    function _(t) {
                        c += t,
                        e = e.substring(t)
                    }
                    function $() {
                        var t = e.match(ki);
                        if (t) {
                            var n, r, o = {
                                tagName: t[1],
                                attrs: [],
                                start: c
                            };
                            for (_(t[0].length); !(n = e.match(Bi)) && (r = e.match(wi) || e.match(Ci)); )
                                r.start = c,
                                _(r[0].length),
                                r.end = c,
                                o.attrs.push(r);
                            if (n)
                                return o.unarySlash = n[1],
                                _(n[0].length),
                                o.end = c,
                                o
                        }
                    }
                    function k(e) {
                        var n = e.tagName
                          , c = e.unarySlash;
                        i && ("p" === r && Ai(n) && B(r),
                        s(n) && r === n && B(n));
                        for (var l = a(n) || !!c, u = e.attrs.length, f = new Array(u), d = 0; d < u; d++) {
                            var p = e.attrs[d]
                              , h = p[3] || p[4] || p[5] || ""
                              , v = "a" === n && "href" === p[1] ? t.shouldDecodeNewlinesForHref : t.shouldDecodeNewlines;
                            f[d] = {
                                name: p[1],
                                value: zi(h, v)
                            }
                        }
                        l || (o.push({
                            tag: n,
                            lowerCasedTag: n.toLowerCase(),
                            attrs: f,
                            start: e.start,
                            end: e.end
                        }),
                        r = n),
                        t.start && t.start(n, f, l, e.start, e.end)
                    }
                    function B(e, n, i) {
                        var a, s;
                        if (null == n && (n = c),
                        null == i && (i = c),
                        e)
                            for (s = e.toLowerCase(),
                            a = o.length - 1; a >= 0 && o[a].lowerCasedTag !== s; a--)
                                ;
                        else
                            a = 0;
                        if (a >= 0) {
                            for (var l = o.length - 1; l >= a; l--)
                                t.end && t.end(o[l].tag, n, i);
                            o.length = a,
                            r = a && o[a - 1].tag
                        } else
                            "br" === s ? t.start && t.start(e, [], !0, n, i) : "p" === s && (t.start && t.start(e, [], !1, n, i),
                            t.end && t.end(e, n, i))
                    }
                    B()
                }(e, {
                    warn: Fi,
                    expectHTML: t.expectHTML,
                    isUnaryTag: t.isUnaryTag,
                    canBeLeftOpenTag: t.canBeLeftOpenTag,
                    shouldDecodeNewlines: t.shouldDecodeNewlines,
                    shouldDecodeNewlinesForHref: t.shouldDecodeNewlinesForHref,
                    shouldKeepComment: t.comments,
                    outputSourceRange: t.outputSourceRange,
                    start: function(e, i, a, u, f) {
                        var d = r && r.ns || Zi(e);
                        K && "svg" === d && (i = function(e) {
                            for (var t = [], n = 0; n < e.length; n++) {
                                var r = e[n];
                                ha.test(r.name) || (r.name = r.name.replace(va, ""),
                                t.push(r))
                            }
                            return t
                        }(i));
                        var p, h = sa(e, i, r);
                        d && (h.ns = d),
                        "style" !== (p = h).tag && ("script" !== p.tag || p.attrsMap.type && "text/javascript" !== p.attrsMap.type) || re() || (h.forbidden = !0);
                        for (var v = 0; v < Ri.length; v++)
                            h = Ri[v](h, t) || h;
                        s || (function(e) {
                            null != zr(e, "v-pre") && (e.pre = !0)
                        }(h),
                        h.pre && (s = !0)),
                        qi(h.tag) && (c = !0),
                        s ? function(e) {
                            var t = e.attrsList
                              , n = t.length;
                            if (n)
                                for (var r = e.attrs = new Array(n), o = 0; o < n; o++)
                                    r[o] = {
                                        name: t[o].name,
                                        value: JSON.stringify(t[o].value)
                                    },
                                    null != t[o].start && (r[o].start = t[o].start,
                                    r[o].end = t[o].end);
                            else
                                e.pre || (e.plain = !0)
                        }(h) : h.processed || (la(h),
                        function(e) {
                            var t = zr(e, "v-if");
                            if (t)
                                e.if = t,
                                ua(e, {
                                    exp: t,
                                    block: e
                                });
                            else {
                                null != zr(e, "v-else") && (e.else = !0);
                                var n = zr(e, "v-else-if");
                                n && (e.elseif = n)
                            }
                        }(h),
                        function(e) {
                            null != zr(e, "v-once") && (e.once = !0)
                        }(h)),
                        n || (n = h),
                        a ? l(h) : (r = h,
                        o.push(h))
                    },
                    end: function(e, t, n) {
                        var i = o[o.length - 1];
                        o.length -= 1,
                        r = o[o.length - 1],
                        l(i)
                    },
                    chars: function(e, t, n) {
                        if (r && (!K || "textarea" !== r.tag || r.attrsMap.placeholder !== e)) {
                            var o, l, u, f = r.children;
                            (e = c || e.trim() ? "script" === (o = r).tag || "style" === o.tag ? e : ia(e) : f.length ? a ? "condense" === a && ra.test(e) ? "" : " " : i ? " " : "" : "") && (c || "condense" !== a || (e = e.replace(oa, " ")),
                            !s && " " !== e && (l = function(e, t) {
                                var n = t ? vi(t) : pi;
                                if (n.test(e)) {
                                    for (var r, o, i, a = [], s = [], c = n.lastIndex = 0; r = n.exec(e); ) {
                                        (o = r.index) > c && (s.push(i = e.slice(c, o)),
                                        a.push(JSON.stringify(i)));
                                        var l = xr(r[1].trim());
                                        a.push("_s(" + l + ")"),
                                        s.push({
                                            "@binding": l
                                        }),
                                        c = o + r[0].length
                                    }
                                    return c < e.length && (s.push(i = e.slice(c)),
                                    a.push(JSON.stringify(i))),
                                    {
                                        expression: a.join("+"),
                                        tokens: s
                                    }
                                }
                            }(e, Ni)) ? u = {
                                type: 2,
                                expression: l.expression,
                                tokens: l.tokens,
                                text: e
                            } : " " === e && f.length && " " === f[f.length - 1].text || (u = {
                                type: 3,
                                text: e
                            }),
                            u && f.push(u))
                        }
                    },
                    comment: function(e, t, n) {
                        if (r) {
                            var o = {
                                type: 3,
                                text: e,
                                isComment: !0
                            };
                            r.children.push(o)
                        }
                    }
                }),
                n
            }(e.trim(), t);
            !1 !== t.optimize && _a(n, t);
            var r = za(n, t);
            return {
                ast: n,
                render: r.render,
                staticRenderFns: r.staticRenderFns
            }
        }
        ,
        function(e) {
            function t(t, n) {
                var r = Object.create(e)
                  , o = []
                  , i = [];
                if (n)
                    for (var a in n.modules && (r.modules = (e.modules || []).concat(n.modules)),
                    n.directives && (r.directives = x(Object.create(e.directives || null), n.directives)),
                    n)
                        "modules" !== a && "directives" !== a && (r[a] = n[a]);
                r.warn = function(e, t, n) {
                    (n ? i : o).push(e)
                }
                ;
                var s = ts(t.trim(), r);
                return s.errors = o,
                s.tips = i,
                s
            }
            return {
                compile: t,
                compileToFunctions: es(t)
            }
        }
        )(Ca), os = (rs.compile,
        rs.compileToFunctions);
        function is(e) {
            return (ns = ns || document.createElement("div")).innerHTML = e ? '<a href="\n"/>' : '<div a="\n"/>',
            ns.innerHTML.indexOf("&#10;") > 0
        }
        var as = !!V && is(!1)
          , ss = !!V && is(!0)
          , cs = y((function(e) {
            var t = Jn(e);
            return t && t.innerHTML
        }
        ))
          , ls = Bn.prototype.$mount;
        Bn.prototype.$mount = function(e, t) {
            if ((e = e && Jn(e)) === document.body || e === document.documentElement)
                return this;
            var n = this.$options;
            if (!n.render) {
                var r = n.template;
                if (r)
                    if ("string" == typeof r)
                        "#" === r.charAt(0) && (r = cs(r));
                    else {
                        if (!r.nodeType)
                            return this;
                        r = r.innerHTML
                    }
                else
                    e && (r = function(e) {
                        if (e.outerHTML)
                            return e.outerHTML;
                        var t = document.createElement("div");
                        return t.appendChild(e.cloneNode(!0)),
                        t.innerHTML
                    }(e));
                if (r) {
                    var o = os(r, {
                        outputSourceRange: !1,
                        shouldDecodeNewlines: as,
                        shouldDecodeNewlinesForHref: ss,
                        delimiters: n.delimiters,
                        comments: n.comments
                    }, this)
                      , i = o.render
                      , a = o.staticRenderFns;
                    n.render = i,
                    n.staticRenderFns = a
                }
            }
            return ls.call(this, e, t)
        }
        ,
        Bn.compile = os;
        const us = Bn;
        var fs = n(379)
          , ds = n.n(fs)
          , ps = n(146);
        ds()(ps.Z, {
            insert: "head",
            singleton: !1
        }),
        ps.Z.locals;
        var hs = n(438);
        ds()(hs.Z, {
            insert: "head",
            singleton: !1
        }),
        hs.Z.locals;
        var vs = n(144)
          , gs = n.n(vs);
        class ms {
            static removeCssFragment(e, t) {
                const n = document.querySelector(`#${e}`);
                n && n.remove()
            }
            static addCssFragment(e, t) {
                let n = document.querySelector(`#${e}`);
                n || (n = document.createElement("style"),
                n.id = e,
                document.head.appendChild(n)),
                n.appendChild(document.createTextNode(t))
            }
        }
        var bs = gs().HocrViewer
          , ys = gs().HocrViewerStyle
          , As = gs().HocrToolbarStyle;
        us.component("hocr-viewer", bs);
        var Cs = document.querySelector("html").innerHTML;
        ms.addCssFragment("hocr-viewer-styles", ys.toString()),
        ms.addCssFragment("hocr-toolbar", As.toString()),
        document.body.innerHTML = '<div id="app"/>',
        window.hocrapp = new us({
            el: "#app",
            components: {
                HocrViewer: bs
            },
            template: '<hocr-viewer :hocr="hocr" />',
            data: {
                hocr: Cs
            }
        })
    }
    )()
}
)();
//# sourceMappingURL=https://unpkg.com/hocrjs/dist/fullscreen.map
