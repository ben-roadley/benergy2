import { Jr as isSignal, T as DOCUMENT, U as InjectionToken, Ui as signal, W as Injector, c as computed, la as ɵɵdefineInjectable, rt as PLATFORM_ID, wr as inject, xn as effect, y as APP_ID } from "./_resource-chunk-B6oSsbEv.js";
import { Ai as setClassMetadata, Sn as Input, Wa as ɵɵdefineDirective, Wn as Renderer2, X as input, Xi as ɵɵProvidersFeature, Yi as ɵɵNgOnChangesFeature, _o as ɵɵgetInheritedFactory, fn as ElementRef, r as ChangeDetectorRef, un as Directive, xn as Injectable } from "./core-D4dczhTZ.js";
import { a as isPlatformServer } from "./common-BBp9OMOF.js";
import { O as S, Q as wt, R as b, f as _e, it as a, l as F, n as markInstance, tt as xt, u as G, x as Gt, y as Ft } from "./primeng-utils-CVbKD6Wd.js";
import { S as x$1, _ as l$1, o as K, p as c$1, r as C, t as A, v as m$1 } from "./dist-2ljAlN4l.js";
import { c as base_default, l as StyleScope, n as PrimeNG, o as showInvalidLicenseBanner, s as BaseStyle } from "./primeng-config-Db_bbJUd.js";
// node_modules/@primeuix/utils/dist/mergeprops/index.mjs
var x = Object.defineProperty;
var d = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty;
var y = Object.prototype.propertyIsEnumerable;
var p = (t, o, e) => o in t ? x(t, o, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: e
}) : t[o] = e;
var i = (t, o) => {
	for (var e in o || (o = {})) c.call(o, e) && p(t, e, o[e]);
	if (d) for (var e of d(o)) y.call(o, e) && p(t, e, o[e]);
	return t;
};
function f(...t) {
	let o = [];
	for (let e = 0; e < t.length; e++) {
		let a = t[e];
		if (!a) continue;
		let r = typeof a;
		if (r === "string" || r === "number") o.push(a);
		else if (r === "object") {
			let n = Array.isArray(a) ? [f(...a)] : Object.entries(a).map(([s, u]) => u ? s : void 0);
			o = n.length ? o.concat(n.filter((s) => !!s)) : o;
		}
	}
	return o.join(" ").trim();
}
function l(t) {
	return typeof t == "function" && "call" in t && "apply" in t;
}
function m({ skipUndefined: t = !1 }, ...o) {
	return o == null ? void 0 : o.reduce((e, a = {}) => {
		for (let r in a) {
			let n = a[r];
			if (!(t && n === void 0)) if (r === "style") e.style = i(i({}, e.style), a.style);
			else if (r === "class" || r === "className") e[r] = f(e[r], a[r]);
			else if (l(n)) {
				let s = e[r];
				e[r] = s ? (...u) => {
					s(...u), n(...u);
				} : n;
			} else e[r] = n;
		}
		return e;
	}, {});
}
function P(...t) {
	return m({ skipUndefined: !1 }, ...t);
}
// node_modules/primeng/fesm2022/primeng-dom.mjs
var DomHandler = class DomHandler {
	static zindex = 1e3;
	static calculatedScrollbarWidth = null;
	static calculatedScrollbarHeight = null;
	static browser;
	static addClass(element, className) {
		if (element && className) {
			if (element.classList) element.classList.add(className);
			else element.className += " " + className;
		}
	}
	static addMultipleClasses(element, className) {
		if (element && className) {
			if (element.classList) {
				let styles = className.trim().split(" ");
				for (let i = 0; i < styles.length; i++) element.classList.add(styles[i]);
			} else {
				let styles = className.split(" ");
				for (let i = 0; i < styles.length; i++) element.className += " " + styles[i];
			}
		}
	}
	static removeClass(element, className) {
		if (element && className) {
			if (element.classList) element.classList.remove(className);
			else element.className = element.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
		}
	}
	static removeMultipleClasses(element, classNames) {
		if (element && classNames) [classNames].flat().filter(Boolean).forEach((cNames) => cNames.split(" ").forEach((className) => this.removeClass(element, className)));
	}
	static hasClass(element, className) {
		if (element && className) {
			if (element.classList) return element.classList.contains(className);
			else return new RegExp("(^| )" + className + "( |$)", "gi").test(element.className);
		}
		return false;
	}
	static siblings(element) {
		return Array.prototype.filter.call(element.parentNode.children, function(child) {
			return child !== element;
		});
	}
	static find(element, selector) {
		return Array.from(element.querySelectorAll(selector));
	}
	static findSingle(element, selector) {
		return this.isElement(element) ? element.querySelector(selector) : null;
	}
	static index(element) {
		let children = element.parentNode.childNodes;
		let num = 0;
		for (let i = 0; i < children.length; i++) {
			if (children[i] == element) return num;
			if (children[i].nodeType == 1) num++;
		}
		return -1;
	}
	static indexWithinGroup(element, attributeName) {
		let children = element.parentNode ? element.parentNode.childNodes : [];
		let num = 0;
		for (let i = 0; i < children.length; i++) {
			if (children[i] == element) return num;
			if (children[i].attributes && children[i].attributes[attributeName] && children[i].nodeType == 1) num++;
		}
		return -1;
	}
	static appendOverlay(overlay, target, appendTo = "self") {
		if (appendTo !== "self" && overlay && target) this.appendChild(overlay, target);
	}
	static alignOverlay(overlay, target, appendTo = "self", calculateMinWidth = true) {
		if (overlay && target) {
			if (calculateMinWidth) overlay.style.minWidth = `${DomHandler.getOuterWidth(target)}px`;
			if (appendTo === "self") this.relativePosition(overlay, target);
			else this.absolutePosition(overlay, target);
		}
	}
	static relativePosition(element, target, gutter = true) {
		const getClosestRelativeElement = (el) => {
			if (!el) return;
			return getComputedStyle(el).getPropertyValue("position") === "relative" ? el : getClosestRelativeElement(el.parentElement);
		};
		const elementDimensions = element.offsetParent ? {
			width: element.offsetWidth,
			height: element.offsetHeight
		} : this.getHiddenElementDimensions(element);
		const targetHeight = target.offsetHeight;
		const targetOffset = target.getBoundingClientRect();
		const windowScrollTop = this.getWindowScrollTop();
		const windowScrollLeft = this.getWindowScrollLeft();
		const viewport = this.getViewport();
		const relativeElementOffset = getClosestRelativeElement(element)?.getBoundingClientRect() || {
			top: -1 * windowScrollTop,
			left: -1 * windowScrollLeft
		};
		let top, left, origin = "top";
		if (targetOffset.top + targetHeight + elementDimensions.height > viewport.height) {
			top = targetOffset.top - relativeElementOffset.top - elementDimensions.height;
			origin = "bottom";
			if (targetOffset.top + top < 0) top = -1 * targetOffset.top;
		} else {
			top = targetHeight + targetOffset.top - relativeElementOffset.top;
			origin = "top";
		}
		const horizontalOverflow = targetOffset.left + elementDimensions.width - viewport.width;
		const targetLeftOffsetInSpaceOfRelativeElement = targetOffset.left - relativeElementOffset.left;
		if (elementDimensions.width > viewport.width) left = (targetOffset.left - relativeElementOffset.left) * -1;
		else if (horizontalOverflow > 0) left = targetLeftOffsetInSpaceOfRelativeElement - horizontalOverflow;
		else left = targetOffset.left - relativeElementOffset.left;
		element.style.top = top + "px";
		element.style.left = left + "px";
		element.style.transformOrigin = origin;
		if (gutter) {
			const gutterValue = S(/-anchor-gutter$/)?.value;
			element.style.marginTop = origin === "bottom" ? `calc(${gutterValue ?? "2px"} * -1)` : gutterValue ?? "";
		}
	}
	static absolutePosition(element, target, gutter = true) {
		const elementDimensions = element.offsetParent ? {
			width: element.offsetWidth,
			height: element.offsetHeight
		} : this.getHiddenElementDimensions(element);
		const elementOuterHeight = elementDimensions.height;
		const elementOuterWidth = elementDimensions.width;
		const targetOuterHeight = target.offsetHeight;
		const targetOuterWidth = target.offsetWidth;
		const targetOffset = target.getBoundingClientRect();
		const windowScrollTop = this.getWindowScrollTop();
		const windowScrollLeft = this.getWindowScrollLeft();
		const viewport = this.getViewport();
		let top, left;
		if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
			top = targetOffset.top + windowScrollTop - elementOuterHeight;
			element.style.transformOrigin = "bottom";
			if (top < 0) top = windowScrollTop;
		} else {
			top = targetOuterHeight + targetOffset.top + windowScrollTop;
			element.style.transformOrigin = "top";
		}
		if (targetOffset.left + elementOuterWidth > viewport.width) left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);
		else left = targetOffset.left + windowScrollLeft;
		element.style.top = top + "px";
		element.style.left = left + "px";
		if (gutter) element.style.marginTop = origin === "bottom" ? "calc(var(--p-anchor-gutter) * -1)" : "calc(var(--p-anchor-gutter))";
	}
	static getParents(element, parents = []) {
		const parent = element["parentNode"] instanceof ShadowRoot ? element["parentNode"].host : element["parentNode"];
		return parent == null ? parents : this.getParents(parent, parents.concat([parent]));
	}
	static getScrollableParents(element) {
		let scrollableParents = [];
		if (element) {
			let parents = this.getParents(element);
			const overflowRegex = /(auto|scroll)/;
			const overflowCheck = (node) => {
				let styleDeclaration = window["getComputedStyle"](node, null);
				return overflowRegex.test(styleDeclaration.getPropertyValue("overflow")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflowX")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflowY"));
			};
			for (let parent of parents) {
				let scrollSelectors = parent.nodeType === 1 && parent.dataset["scrollselectors"];
				if (scrollSelectors) {
					let selectors = scrollSelectors.split(",");
					for (let selector of selectors) {
						let el = this.findSingle(parent, selector);
						if (el && overflowCheck(el)) scrollableParents.push(el);
					}
				}
				if (parent.nodeType !== 9 && overflowCheck(parent)) scrollableParents.push(parent);
			}
		}
		return scrollableParents;
	}
	static getHiddenElementOuterHeight(element) {
		element.style.visibility = "hidden";
		element.style.display = "block";
		let elementHeight = element.offsetHeight;
		element.style.display = "none";
		element.style.visibility = "visible";
		return elementHeight;
	}
	static getHiddenElementOuterWidth(element) {
		element.style.visibility = "hidden";
		element.style.display = "block";
		let elementWidth = element.offsetWidth;
		element.style.display = "none";
		element.style.visibility = "visible";
		return elementWidth;
	}
	static getHiddenElementDimensions(element) {
		let dimensions = {};
		element.style.visibility = "hidden";
		element.style.display = "block";
		dimensions.width = element.offsetWidth;
		dimensions.height = element.offsetHeight;
		element.style.display = "none";
		element.style.visibility = "visible";
		return dimensions;
	}
	static scrollInView(container, item) {
		let borderTopValue = getComputedStyle(container).getPropertyValue("borderTopWidth");
		let borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
		let paddingTopValue = getComputedStyle(container).getPropertyValue("paddingTop");
		let paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
		let containerRect = container.getBoundingClientRect();
		let offset = item.getBoundingClientRect().top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
		let scroll = container.scrollTop;
		let elementHeight = container.clientHeight;
		let itemHeight = this.getOuterHeight(item);
		if (offset < 0) container.scrollTop = scroll + offset;
		else if (offset + itemHeight > elementHeight) container.scrollTop = scroll + offset - elementHeight + itemHeight;
	}
	static fadeIn(element, duration) {
		element.style.opacity = 0;
		let last = +/* @__PURE__ */ new Date();
		let opacity = 0;
		let tick = function() {
			opacity = +element.style.opacity.replace(",", ".") + ((/* @__PURE__ */ new Date()).getTime() - last) / duration;
			element.style.opacity = opacity;
			last = +/* @__PURE__ */ new Date();
			if (+opacity < 1) {
				if (window.requestAnimationFrame) window.requestAnimationFrame(tick);
				else setTimeout(tick, 16);
			}
		};
		tick();
	}
	static fadeOut(element, ms) {
		let opacity = 1, interval = 50, gap = interval / ms;
		let fading = setInterval(() => {
			opacity = opacity - gap;
			if (opacity <= 0) {
				opacity = 0;
				clearInterval(fading);
			}
			element.style.opacity = opacity;
		}, interval);
	}
	static getWindowScrollTop() {
		let doc = document.documentElement;
		return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
	}
	static getWindowScrollLeft() {
		let doc = document.documentElement;
		return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
	}
	static matches(element, selector) {
		let p = Element.prototype;
		return (p["matches"] || p.webkitMatchesSelector || p["mozMatchesSelector"] || p["msMatchesSelector"] || function(s) {
			return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
		}).call(element, selector);
	}
	static getOuterWidth(el, margin) {
		let width = el.offsetWidth;
		if (margin) {
			let style = getComputedStyle(el);
			width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
		}
		return width;
	}
	static getHorizontalPadding(el) {
		let style = getComputedStyle(el);
		return parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
	}
	static getHorizontalMargin(el) {
		let style = getComputedStyle(el);
		return parseFloat(style.marginLeft) + parseFloat(style.marginRight);
	}
	static innerWidth(el) {
		let width = el.offsetWidth;
		let style = getComputedStyle(el);
		width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
		return width;
	}
	static width(el) {
		let width = el.offsetWidth;
		let style = getComputedStyle(el);
		width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
		return width;
	}
	static getInnerHeight(el) {
		let height = el.offsetHeight;
		let style = getComputedStyle(el);
		height += parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
		return height;
	}
	static getOuterHeight(el, margin) {
		let height = el.offsetHeight;
		if (margin) {
			let style = getComputedStyle(el);
			height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
		}
		return height;
	}
	static getHeight(el) {
		let height = el.offsetHeight;
		let style = getComputedStyle(el);
		height -= parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
		return height;
	}
	static getWidth(el) {
		let width = el.offsetWidth;
		let style = getComputedStyle(el);
		width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
		return width;
	}
	static getViewport() {
		let win = window, d = document, e = d.documentElement, g = d.getElementsByTagName("body")[0];
		return {
			width: win.innerWidth || e.clientWidth || g.clientWidth,
			height: win.innerHeight || e.clientHeight || g.clientHeight
		};
	}
	static getOffset(el) {
		let rect = el.getBoundingClientRect();
		return {
			top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
			left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
		};
	}
	static replaceElementWith(element, replacementElement) {
		let parentNode = element.parentNode;
		if (!parentNode) throw `Can't replace element`;
		return parentNode.replaceChild(replacementElement, element);
	}
	static getUserAgent() {
		if (navigator && this.isClient()) return navigator.userAgent;
	}
	static isIE() {
		let ua = window.navigator.userAgent;
		if (ua.indexOf("MSIE ") > 0) return true;
		if (ua.indexOf("Trident/") > 0) return true;
		if (ua.indexOf("Edge/") > 0) return true;
		return false;
	}
	static isIOS() {
		return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window["MSStream"];
	}
	static isAndroid() {
		return /(android)/i.test(navigator.userAgent);
	}
	static isTouchDevice() {
		return "ontouchstart" in window || navigator.maxTouchPoints > 0;
	}
	static appendChild(element, target) {
		if (this.isElement(target)) target.appendChild(element);
		else if (target && target.el && target.el.nativeElement) target.el.nativeElement.appendChild(element);
		else throw "Cannot append " + target + " to " + element;
	}
	static removeChild(element, target) {
		if (this.isElement(target)) target.removeChild(element);
		else if (target.el && target.el.nativeElement) target.el.nativeElement.removeChild(element);
		else throw "Cannot remove " + element + " from " + target;
	}
	static removeElement(element) {
		if (!("remove" in Element.prototype)) element.parentNode?.removeChild(element);
		else element.remove();
	}
	static isElement(obj) {
		return typeof HTMLElement === "object" ? obj instanceof HTMLElement : obj && typeof obj === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string";
	}
	static calculateScrollbarWidth(el) {
		if (el) {
			let style = getComputedStyle(el);
			return el.offsetWidth - el.clientWidth - parseFloat(style.borderLeftWidth) - parseFloat(style.borderRightWidth);
		} else {
			if (this.calculatedScrollbarWidth !== null) return this.calculatedScrollbarWidth;
			let scrollDiv = document.createElement("div");
			scrollDiv.className = "p-scrollbar-measure";
			document.body.appendChild(scrollDiv);
			let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
			document.body.removeChild(scrollDiv);
			this.calculatedScrollbarWidth = scrollbarWidth;
			return scrollbarWidth;
		}
	}
	static calculateScrollbarHeight() {
		if (this.calculatedScrollbarHeight !== null) return this.calculatedScrollbarHeight;
		let scrollDiv = document.createElement("div");
		scrollDiv.className = "p-scrollbar-measure";
		document.body.appendChild(scrollDiv);
		let scrollbarHeight = scrollDiv.offsetHeight - scrollDiv.clientHeight;
		document.body.removeChild(scrollDiv);
		this.calculatedScrollbarWidth = scrollbarHeight;
		return scrollbarHeight;
	}
	static invokeElementMethod(element, methodName, args) {
		element[methodName].apply(element, args);
	}
	static clearSelection() {
		if (window.getSelection && window.getSelection()) {
			if (window.getSelection()?.empty) window.getSelection()?.empty();
			else if (window.getSelection()?.removeAllRanges && (window.getSelection()?.rangeCount || 0) > 0 && (window.getSelection()?.getRangeAt(0)?.getClientRects()?.length || 0) > 0) window.getSelection()?.removeAllRanges();
		} else if (document["selection"] && document["selection"].empty) try {
			document["selection"].empty();
		} catch {}
	}
	static getBrowser() {
		if (!this.browser) {
			let matched = this.resolveUserAgent();
			this.browser = {};
			if (matched.browser) {
				this.browser[matched.browser] = true;
				this.browser["version"] = matched.version;
			}
			if (this.browser["chrome"]) this.browser["webkit"] = true;
			else if (this.browser["webkit"]) this.browser["safari"] = true;
		}
		return this.browser;
	}
	static resolveUserAgent() {
		let ua = navigator.userAgent.toLowerCase();
		let match = /(chrome)[ /]([\w.]+)/.exec(ua) || /(webkit)[ /]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ /]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
		return {
			browser: match[1] || "",
			version: match[2] || "0"
		};
	}
	static isInteger(value) {
		if (Number.isInteger) return Number.isInteger(value);
		else return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
	}
	static isHidden(element) {
		return !element || element.offsetParent === null;
	}
	static isVisible(element) {
		return element && element.offsetParent != null;
	}
	static isExist(element) {
		return element !== null && typeof element !== "undefined" && element.nodeName && element.parentNode;
	}
	static focus(element, options) {
		if (element && document.activeElement !== element) element.focus(options);
	}
	static getFocusableSelectorString(selector = "") {
		return `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector}`;
	}
	static getFocusableElements(element, selector = "") {
		let focusableElements = this.find(element, this.getFocusableSelectorString(selector));
		let visibleFocusableElements = [];
		for (let focusableElement of focusableElements) {
			const computedStyle = getComputedStyle(focusableElement);
			if (this.isVisible(focusableElement) && computedStyle.display != "none" && computedStyle.visibility != "hidden") visibleFocusableElements.push(focusableElement);
		}
		return visibleFocusableElements;
	}
	static getFocusableElement(element, selector = "") {
		let focusableElement = this.findSingle(element, this.getFocusableSelectorString(selector));
		if (focusableElement) {
			const computedStyle = getComputedStyle(focusableElement);
			if (this.isVisible(focusableElement) && computedStyle.display != "none" && computedStyle.visibility != "hidden") return focusableElement;
		}
		return null;
	}
	static getFirstFocusableElement(element, selector = "") {
		const focusableElements = this.getFocusableElements(element, selector);
		return focusableElements.length > 0 ? focusableElements[0] : null;
	}
	static getLastFocusableElement(element, selector) {
		const focusableElements = this.getFocusableElements(element, selector);
		return focusableElements.length > 0 ? focusableElements[focusableElements.length - 1] : null;
	}
	static getNextFocusableElement(element, reverse = false) {
		const focusableElements = DomHandler.getFocusableElements(element);
		let index = 0;
		if (focusableElements && focusableElements.length > 0) {
			const focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);
			if (reverse) {
				if (focusedIndex == -1 || focusedIndex === 0) index = focusableElements.length - 1;
				else index = focusedIndex - 1;
			} else if (focusedIndex != -1 && focusedIndex !== focusableElements.length - 1) index = focusedIndex + 1;
		}
		return focusableElements[index];
	}
	static generateZIndex() {
		this.zindex = this.zindex || 999;
		return ++this.zindex;
	}
	static getSelection() {
		if (window.getSelection) return window.getSelection()?.toString();
		else if (document.getSelection) return document.getSelection()?.toString();
		else if (document["selection"]) return document["selection"].createRange().text;
		return null;
	}
	static getTargetElement(target, el) {
		if (!target) return null;
		switch (target) {
			case "document": return document;
			case "window": return window;
			case "@next": return el?.nextElementSibling;
			case "@prev": return el?.previousElementSibling;
			case "@parent": return el?.parentElement;
			case "@grandparent": return el?.parentElement?.parentElement;
			default: {
				const type = typeof target;
				if (type === "string") return document.querySelector(target);
				else if (type === "object" && Object.prototype.hasOwnProperty.call(target, "nativeElement")) return this.isExist(target.nativeElement) ? target.nativeElement : void 0;
				const isFunction = (obj) => !!(obj && obj.constructor && obj.call && obj.apply);
				const element = isFunction(target) ? target() : target;
				return element && element.nodeType === 9 || this.isExist(element) ? element : null;
			}
		}
	}
	static isClient() {
		return !!(typeof window !== "undefined" && window.document && window.document.createElement);
	}
	static getAttribute(element, name) {
		if (element) {
			const value = element.getAttribute(name);
			if (!isNaN(value)) return +value;
			if (value === "true" || value === "false") return value === "true";
			return value;
		}
	}
	static calculateBodyScrollbarWidth() {
		return window.innerWidth - document.documentElement.offsetWidth;
	}
	static blockBodyScroll(className = "p-overflow-hidden") {
		document.body.style.setProperty("--px-scrollbar-width", this.calculateBodyScrollbarWidth() + "px");
		this.addClass(document.body, className);
	}
	static unblockBodyScroll(className = "p-overflow-hidden") {
		document.body.style.removeProperty("--px-scrollbar-width");
		this.removeClass(document.body, className);
	}
	static createElement(type, attributes = {}, ...children) {
		if (type) {
			const element = document.createElement(type);
			this.setAttributes(element, attributes);
			element.append(...children);
			return element;
		}
	}
	static setAttribute(element, attribute = "", value) {
		if (this.isElement(element) && value !== null && value !== void 0) element.setAttribute(attribute, value);
	}
	static setAttributes(element, attributes = {}) {
		if (this.isElement(element)) {
			const computedStyles = (rule, value) => {
				const styles = element?.$attrs?.[rule] ? [element?.$attrs?.[rule]] : [];
				return [value].flat().reduce((cv, v) => {
					if (v !== null && v !== void 0) {
						const type = typeof v;
						if (type === "string" || type === "number") cv.push(v);
						else if (type === "object") {
							const _cv = Array.isArray(v) ? computedStyles(rule, v) : Object.entries(v).map(([_k, _v]) => rule === "style" && (!!_v || _v === 0) ? `${_k.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${_v}` : _v ? _k : void 0);
							cv = _cv.length ? cv.concat(_cv.filter((c) => !!c)) : cv;
						}
					}
					return cv;
				}, styles);
			};
			Object.entries(attributes).forEach(([key, value]) => {
				if (value !== void 0 && value !== null) {
					const matchedEvent = key.match(/^on(.+)/);
					if (matchedEvent) element.addEventListener(matchedEvent[1].toLowerCase(), value);
					else if (key === "pBind") this.setAttributes(element, value);
					else {
						value = key === "class" ? [...new Set(computedStyles("class", value))].join(" ").trim() : key === "style" ? computedStyles("style", value).join(";").trim() : value;
						if (element.$attrs = element.$attrs || {}) element.$attrs[key] = value;
						element.setAttribute(key, value);
					}
				}
			});
		}
	}
	static isFocusableElement(element, selector = "") {
		return this.isElement(element) ? element.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector}`) : false;
	}
};
function blockBodyScroll(options) {
	xt({
		variableName: _e("scrollbar.width").name,
		...options
	});
}
function unblockBodyScroll(options) {
	wt({
		variableName: _e("scrollbar.width").name,
		...options
	});
}
var ConnectedOverlayScrollHandler = class {
	element;
	listener;
	scrollableParents;
	constructor(element, listener = () => {}) {
		this.element = element;
		this.listener = listener;
	}
	bindScrollListener() {
		this.scrollableParents = DomHandler.getScrollableParents(this.element);
		for (let i = 0; i < this.scrollableParents.length; i++) this.scrollableParents[i].addEventListener("scroll", this.listener);
	}
	unbindScrollListener() {
		if (this.scrollableParents) for (let i = 0; i < this.scrollableParents.length; i++) this.scrollableParents[i].removeEventListener("scroll", this.listener);
	}
	destroy() {
		this.unbindScrollListener();
		this.element = null;
		this.listener = null;
		this.scrollableParents = null;
	}
};
function getShadowRoot(el) {
	return Gt(b(el) ?? el);
}
function getEventTarget(event, element) {
	return Ft(event, element);
}
// node_modules/primeng/fesm2022/primeng-useid.mjs
var UseId = class UseId {
	counters = /* @__PURE__ */ new Map();
	scope = ((appId) => appId === "ng" ? "" : `${appId}_`)(inject(APP_ID));
	next(prefix = "pui_id_") {
		const value = (this.counters.get(prefix) ?? 0) + 1;
		this.counters.set(prefix, value);
		return `${prefix}${this.scope}${value}`;
	}
	static ɵfac = function UseId_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || UseId)();
	};
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: UseId,
		factory: UseId.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UseId, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], null, null);
})();
// node_modules/primeng/fesm2022/primeng-basecomponent.mjs
var BaseComponentStyle = class BaseComponentStyle extends BaseStyle {
	name = "common";
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵBaseComponentStyle_BaseFactory = void 0;
		return function BaseComponentStyle_Factory(__ngFactoryType__) {
			return (ɵBaseComponentStyle_BaseFactory || (ɵBaseComponentStyle_BaseFactory = ɵɵgetInheritedFactory(BaseComponentStyle)))(__ngFactoryType__ || BaseComponentStyle);
		};
	})();
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: BaseComponentStyle,
		factory: BaseComponentStyle.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseComponentStyle, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], null, null);
})();
var PARENT_INSTANCE = new InjectionToken("PARENT_INSTANCE");
var BaseComponent = class BaseComponent {
	document = inject(DOCUMENT);
	platformId = inject(PLATFORM_ID);
	el = inject(ElementRef);
	injector = inject(Injector);
	cd = inject(ChangeDetectorRef);
	renderer = inject(Renderer2);
	config = inject(PrimeNG);
	$parentInstance = inject(PARENT_INSTANCE, {
		optional: true,
		skipSelf: true
	}) ?? void 0;
	baseComponentStyle = inject(BaseComponentStyle);
	baseStyle = inject(BaseStyle);
	$styleScope = inject(StyleScope);
	scopedStyleEl;
	_scopedStyleName;
	parent = this.$params.parent;
	cn = a;
	_themeScopedListener;
	_instanceStyles;
	themeChangeListenerMap = /* @__PURE__ */ new Map();
	dt = input(...ngDevMode ? [void 0, { debugName: "dt" }] : /* istanbul ignore next */ []);
	unstyled = input(...ngDevMode ? [void 0, { debugName: "unstyled" }] : /* istanbul ignore next */ []);
	pt = input(...ngDevMode ? [void 0, { debugName: "pt" }] : /* istanbul ignore next */ []);
	ptOptions = input(...ngDevMode ? [void 0, { debugName: "ptOptions" }] : /* istanbul ignore next */ []);
	$useId = inject(UseId);
	$attrSelector = this.$useId.next("pc");
	get $name() {
		return this["componentName"] || "UnknownComponent";
	}
	get $hostName() {
		const hostName = this["hostName"];
		return isSignal(hostName) ? hostName() : hostName;
	}
	get $el() {
		return this.el?.nativeElement;
	}
	directivePT = signal(void 0, ...ngDevMode ? [{ debugName: "directivePT" }] : /* istanbul ignore next */ []);
	directiveUnstyled = signal(void 0, ...ngDevMode ? [{ debugName: "directiveUnstyled" }] : /* istanbul ignore next */ []);
	$unstyled = computed(() => this.unstyled() ?? this.directiveUnstyled() ?? this.config?.unstyled() ?? false, ...ngDevMode ? [{ debugName: "$unstyled" }] : /* istanbul ignore next */ []);
	$preflight = computed(() => !this.$unstyled() && this.config?.preflight() === true, ...ngDevMode ? [{ debugName: "$preflight" }] : /* istanbul ignore next */ []);
	$pt = computed(() => x$1(this.pt() || this.directivePT(), this.$params), ...ngDevMode ? [{ debugName: "$pt" }] : /* istanbul ignore next */ []);
	get $globalPT() {
		return this._getPT(this.config?.pt(), void 0, (value) => x$1(value, this.$params));
	}
	get $defaultPT() {
		return this._getPT(this.config?.pt(), void 0, (value) => this._getOptionValue(value, this.$hostName || this.$name, this.$params) || x$1(value, this.$params));
	}
	_$styleCache;
	get $style() {
		if (!this._$styleCache) this._$styleCache = {
			theme: void 0,
			css: void 0,
			classes: void 0,
			inlineStyles: void 0,
			...(this._getHostInstance(this) || {}).$style,
			...this["_componentStyle"]
		};
		return this._$styleCache;
	}
	get $styleOptions() {
		return { nonce: this.config?.csp().nonce };
	}
	_$paramsCache;
	get $params() {
		if (!this._$paramsCache) {
			const parentInstance = this._getHostInstance(this) || this.$parentInstance;
			this._$paramsCache = {
				instance: this,
				parent: { instance: parentInstance }
			};
		}
		return this._$paramsCache;
	}
	onInit() {}
	onChanges(_changes) {}
	onDoCheck() {}
	onAfterContentInit() {}
	onAfterContentChecked() {}
	onAfterViewInit() {}
	onAfterViewChecked() {}
	onDestroy() {}
	constructor() {
		effect((onCleanup) => {
			if (this.document && !isPlatformServer(this.platformId)) {
				if (this.dt()) {
					this._loadScopedThemeStyles(this.dt());
					this._themeScopedListener = () => this._loadScopedThemeStyles(this.dt());
					this._themeChangeListener("_themeScopedListener", this._themeScopedListener);
				} else this._unloadScopedThemeStyles();
			}
			onCleanup(() => {
				this._offThemeChangeListener("_themeScopedListener");
			});
		});
		effect((onCleanup) => {
			if (this.document && !isPlatformServer(this.platformId)) {
				if (!this.$unstyled()) {
					this._loadCoreStyles();
					this._themeChangeListener("_loadCoreStyles", this._loadCoreStyles);
				}
			}
			onCleanup(() => {
				this._offThemeChangeListener("_loadCoreStyles");
			});
		});
		this._hook("onBeforeInit");
	}
	ngOnInit() {
		this._$paramsCache = void 0;
		this._$styleCache = void 0;
		this.$styleScope.batch(() => {
			this._loadCoreStyles();
			this._loadStyles();
			this.$styleScope.connect(this.$el, this.injector);
		});
		this.onInit();
		this._hook("onInit");
	}
	ngOnChanges(changes) {
		this.onChanges(changes);
		this._hook("onChanges", changes);
	}
	ngDoCheck() {
		this.onDoCheck();
		this._hook("onDoCheck");
	}
	ngAfterContentInit() {
		this.onAfterContentInit();
		this._hook("onAfterContentInit");
	}
	ngAfterContentChecked() {
		this.onAfterContentChecked();
		this._hook("onAfterContentChecked");
	}
	ngAfterViewInit() {
		this.$markInstance(this.$el);
		if (this.config?.verified() === false) showInvalidLicenseBanner();
		this.onAfterViewInit();
		this._hook("onAfterViewInit");
	}
	ngAfterViewChecked() {
		this.onAfterViewChecked();
		this._hook("onAfterViewChecked");
	}
	ngOnDestroy() {
		this._removeThemeListeners();
		this._unloadScopedThemeStyles();
		this.onDestroy();
		if (this.$styleScope.isolated) {
			this._instanceStyles?.forEach((name) => this.$styleScope.removeInstanceStyle(name));
			this._instanceStyles = void 0;
		}
		this._hook("onDestroy");
	}
	_mergeProps(fn, ...args) {
		return m$1(fn) ? fn(...args) : P(...args);
	}
	_getHostInstance(instance) {
		return instance ? this.$hostName ? this.$name === this.$hostName ? instance : this._getHostInstance(instance.$parentInstance) : instance.$parentInstance : void 0;
	}
	_getPropValue(name) {
		return this[name] || this._getHostInstance(this)?.[name];
	}
	_getOptionValue(options, key = "", params = {}) {
		return K(options, key, params);
	}
	_hook(hookName, ...args) {
		if (this.$hostName) return;
		if (!this.pt() && !this.directivePT() && !this.config?.pt()) return;
		const selfHook = this._usePT(this._getPT(this.$pt(), this.$name), this._getOptionValue, `hooks.${hookName}`);
		const defaultHook = this._useDefaultPT(this._getOptionValue, `hooks.${hookName}`);
		selfHook?.(...args);
		defaultHook?.(...args);
	}
	get $theme() {
		return this.$styleScope.theme;
	}
	get $base() {
		return this.$styleScope.coreStyleNames ?? base_default;
	}
	_load() {
		if (!this.$base.isStyleNameLoaded("base")) {
			this.baseStyle.loadBaseCSS(this.$styleOptions);
			this._loadGlobalStyles();
			this.$base.setLoadedStyleName("base");
		}
		if (this.$preflight() && !this.$base.isStyleNameLoaded("preflight")) {
			this.baseStyle.loadPreflight(this.$styleOptions);
			this.$base.setLoadedStyleName("preflight");
		}
		this._loadThemeStyles();
	}
	_loadStyles() {
		this._load();
		this._themeChangeListener("_load", () => this._load());
	}
	_loadGlobalStyles() {
		const globalCSS = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
		if (l$1(globalCSS)) this.baseStyle.load(globalCSS, {
			name: "global",
			...this.$styleOptions
		}, (computedStyle) => this.$styleScope.scopeCSS(computedStyle));
	}
	_loadCoreStyles() {
		if (!this.$base.isStyleNameLoaded(this.$style?.name) && this.$style?.name) {
			this.baseComponentStyle.loadCSS(this.$styleOptions);
			this.$style.loadCSS(this.$styleOptions);
			this.$base.setLoadedStyleName(this.$style.name);
		}
	}
	_loadThemeStyles() {
		if (this.$unstyled()) return;
		if (this.config?.theme() !== "none") this._loadThemeSheets();
		if (!this.$theme.isStyleNameLoaded("layer-order")) {
			const layerOrder = G(this.$preflight() ? F : void 0, this.$style?.getLayerOrderThemeCSS?.());
			this.baseStyle.load(layerOrder, {
				name: "layer-order",
				first: true,
				...this.$styleOptions
			});
			this.$theme.setLoadedStyleName("layer-order");
		}
	}
	_loadThemeSheets() {
		if (!this.$theme.isStyleNameLoaded("common")) {
			const { primitive, semantic, global, style } = this.$style?.getCommonTheme?.() || {};
			this.baseStyle.load(primitive?.css, {
				name: "primitive-variables",
				variables: true,
				raw: true,
				...this.$styleOptions
			});
			this.baseStyle.load(semantic?.css, {
				name: "semantic-variables",
				variables: true,
				raw: true,
				...this.$styleOptions
			});
			this.baseStyle.load(global?.css, {
				name: "global-variables",
				variables: true,
				raw: true,
				...this.$styleOptions
			});
			this.baseStyle.loadBaseStyle({
				name: "global-style",
				...this.$styleOptions
			}, style);
			this.$theme.setLoadedStyleName("common");
		}
		if (!this.$theme.isStyleNameLoaded(this.$style?.name) && this.$style?.name) {
			const { css, style } = this.$style?.getComponentTheme?.() || {};
			this.baseStyle.load(css, {
				name: `${this.$style?.name}-variables`,
				variables: true,
				raw: true,
				...this.$styleOptions
			});
			this.$style?.loadStyle({
				name: `${this.$style?.name}-style`,
				...this.$styleOptions
			}, style);
			this.$theme.setLoadedStyleName(this.$style?.name);
		}
	}
	_loadScopedThemeStyles(preset) {
		if (this.config?.theme()?.options?.cssVariables === false && this.$style?.name) {
			if (this.$theme.addScopedToken({ [this.$style.name]: preset })) {
				this.$theme.deleteLoadedStyleName(this.$style.name);
				this._loadThemeStyles();
			}
		}
		const { css } = this.$style?.getPresetTheme?.(preset, this.$instanceSelector) || {};
		const scopedStyle = this.baseStyle.load(css, {
			name: `${this.$attrSelector}-${this.$style?.name}`,
			raw: true,
			...this.$styleOptions
		});
		this._scopedStyleName = scopedStyle?.name ?? this._scopedStyleName;
		this.scopedStyleEl = scopedStyle?.el;
	}
	_unloadScopedThemeStyles() {
		if (this._scopedStyleName === void 0) return;
		this.baseStyle.useStyle.remove(this._scopedStyleName, this.scopedStyleEl);
		this._scopedStyleName = void 0;
		this.scopedStyleEl = void 0;
	}
	_themeChangeListener(id, callback = () => {}) {
		this._offThemeChangeListener(id);
		const hold = callback.bind(this);
		this.themeChangeListenerMap.set(id, hold);
		this.$styleScope.service.on("theme:change", hold);
	}
	_removeThemeListeners() {
		this._offThemeChangeListener("_themeScopedListener");
		this._offThemeChangeListener("_loadCoreStyles");
		this._offThemeChangeListener("_load");
	}
	_offThemeChangeListener(id) {
		if (this.themeChangeListenerMap.has(id)) {
			this.$styleScope.service.off("theme:change", this.themeChangeListenerMap.get(id));
			this.themeChangeListenerMap.delete(id);
		}
	}
	_getPTValue(obj = {}, key = "", params = {}, searchInDefaultPT = true) {
		const searchOut = /./g.test(key) && !!params[key.split(".")[0]];
		const { mergeSections = true, mergeProps: useMergeProps = false } = this._getPropValue("ptOptions")?.() || this.config?.["ptOptions"]?.() || {};
		const global = searchInDefaultPT ? searchOut ? this._useGlobalPT(this._getPTClassValue, key, params) : this._useDefaultPT(this._getPTClassValue, key, params) : void 0;
		const self = searchOut ? void 0 : this._usePT(this._getPT(obj, this.$hostName || this.$name), this._getPTClassValue, key, {
			...params,
			global: global || {}
		});
		const datasets = this._getPTDatasets(key);
		return mergeSections || !mergeSections && self ? useMergeProps ? this._mergeProps(useMergeProps, global, self, datasets) : {
			...global,
			...self,
			...datasets
		} : {
			...self,
			...datasets
		};
	}
	_getPTDatasets(key = "") {
		const datasetPrefix = "data-pc-";
		const isExtended = key === "root" && l$1(this.$pt()?.["data-pc-section"]);
		return key !== "transition" && {
			...key === "root" && {
				[`${datasetPrefix}name`]: C(isExtended ? this.$pt()?.["data-pc-section"] : this.$name),
				...isExtended && { [`${datasetPrefix}extend`]: C(this.$name) },
				"data-pc-id": this.$attrSelector,
				[this.$attrSelector]: ""
			},
			[`${datasetPrefix}section`]: C(key.includes(".") ? key.split(".").at(-1) ?? "" : key)
		};
	}
	_getPTClassValue(options, key, params) {
		const value = this._getOptionValue(options, key, params);
		return c$1(value) || A(value) ? { class: value } : value;
	}
	_getPT(pt, key = "", callback) {
		const getValue = (value, checkSameKey = false) => {
			const computedValue = callback ? callback(value) : value;
			const _key = C(key);
			const _cKey = C(this.$hostName || this.$name);
			return (checkSameKey ? _key !== _cKey ? computedValue?.[_key] : void 0 : computedValue?.[_key]) ?? computedValue;
		};
		return pt != null && Object.prototype.hasOwnProperty.call(pt, "_usept") ? {
			_usept: pt["_usept"],
			originalValue: getValue(pt.originalValue),
			value: getValue(pt.value)
		} : getValue(pt, true);
	}
	_usePT(pt, callback, key, params) {
		const fn = (value) => callback?.call(this, value, key, params);
		if (pt != null && Object.prototype.hasOwnProperty.call(pt, "_usept")) {
			const { mergeSections = true, mergeProps: useMergeProps = false } = pt["_usept"] || this.config?.["ptOptions"]() || {};
			const originalValue = fn(pt.originalValue);
			const value = fn(pt.value);
			if (originalValue === void 0 && value === void 0) return void 0;
			else if (c$1(value)) return value;
			else if (c$1(originalValue)) return originalValue;
			return mergeSections || !mergeSections && value ? useMergeProps ? this._mergeProps(useMergeProps, originalValue, value) : {
				...originalValue,
				...value
			} : value;
		}
		return fn(pt);
	}
	_useGlobalPT(callback, key, params) {
		return this._usePT(this.$globalPT, callback, key, params);
	}
	_useDefaultPT(callback, key, params) {
		return this._usePT(this.$defaultPT, callback, key, params);
	}
	ptm(key = "", params = {}) {
		return this._getPTValue(this.$pt(), key, {
			...this.$params,
			...params
		});
	}
	ptms(keys, params = {}) {
		return keys.reduce((acc, arg) => {
			acc = P(acc, this.ptm(arg, params)) || {};
			return acc;
		}, {});
	}
	ptmo(obj = {}, key = "", params = {}) {
		return this._getPTValue(obj, key, {
			instance: this,
			...params
		}, false);
	}
	cx(key, params = {}) {
		return !this.$unstyled() ? this.$styleScope.pcn(this._getOptionValue(this.$style.classes, key, {
			...this.$params,
			...params
		})) : void 0;
	}
	pcn(...classes) {
		return this.$styleScope.pcn(...classes);
	}
	psel(selector) {
		return this.$styleScope.psel(selector);
	}
	get $bodyScrollOptions() {
		if (!this.$styleScope.isolated && this.$styleScope.classPrefix() === "p") return void 0;
		return {
			className: this.pcn("p-overflow-hidden"),
			variableName: this.$styleScope.resolvers.$dt("scrollbar.width").name
		};
	}
	$blockBodyScroll() {
		const options = this.$bodyScrollOptions;
		blockBodyScroll(options);
		this.$styleScope.lockBodyScroll(options);
	}
	$unblockBodyScroll() {
		unblockBodyScroll(this.$bodyScrollOptions);
		this.$styleScope.unlockBodyScroll();
	}
	sx(key = "", when = true, params = {}) {
		if (when) {
			const self = this._getOptionValue(this.$style.inlineStyles, key, {
				...this.$params,
				...params
			});
			return {
				...this._getOptionValue(this.baseComponentStyle.inlineStyles, key, {
					...this.$params,
					...params
				}),
				...self
			};
		}
	}
	$markInstance(el) {
		markInstance(el, this.$attrSelector);
	}
	get $instanceSelector() {
		return `[data-pc-id~="${this.$attrSelector}"]`;
	}
	$keyedId(id) {
		return this.$styleScope.keyedId(id);
	}
	$isolatedStyle(name, css) {
		const id = `${this.$attrSelector}-${name}`;
		if (css === null) {
			this.$styleScope.removeInstanceStyle(id);
			this._instanceStyles?.delete(id);
			return;
		}
		this.$styleScope.setInstanceStyle(id, css, this.config?.csp()?.nonce);
		(this._instanceStyles ??= /* @__PURE__ */ new Set()).add(id);
	}
	$overlayParent(target, overlay) {
		return this.$styleScope.overlayParent(target, overlay);
	}
	translate(key, subKey) {
		const value = this.config.getTranslation(key);
		return subKey ? value?.[subKey] : value;
	}
	static ɵfac = function BaseComponent_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || BaseComponent)();
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: BaseComponent,
		inputs: {
			dt: [1, "dt"],
			unstyled: [1, "unstyled"],
			pt: [1, "pt"],
			ptOptions: [1, "ptOptions"]
		},
		features: [ɵɵProvidersFeature([BaseComponentStyle, BaseStyle]), ɵɵNgOnChangesFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseComponent, [{
		type: Directive,
		args: [{
			standalone: true,
			providers: [BaseComponentStyle, BaseStyle]
		}]
	}], () => [], {
		dt: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "dt",
				required: false
			}]
		}],
		unstyled: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "unstyled",
				required: false
			}]
		}],
		pt: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pt",
				required: false
			}]
		}],
		ptOptions: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "ptOptions",
				required: false
			}]
		}]
	});
})();
export { getEventTarget as a, DomHandler as i, PARENT_INSTANCE as n, getShadowRoot as o, ConnectedOverlayScrollHandler as r, unblockBodyScroll as s, BaseComponent as t };
