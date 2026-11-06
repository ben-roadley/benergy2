import { U as InjectionToken, Ui as signal, _ as untracked, _a as ɵɵnamespaceSVG, c as computed, la as ɵɵdefineInjectable, ua as ɵɵdefineInjector, wr as inject, xn as effect } from "./_resource-chunk-B6oSsbEv.js";
import { Ai as setClassMetadata, Bo as ɵɵnextContext, Ga as ɵɵdefineNgModule, Ji as ɵɵInheritDefinitionFeature, Jo as ɵɵprojectionDef, Jt as Component, Nn as NgModule, Sn as Input, T as afterRenderEffect, Ua as ɵɵdefineComponent, Wa as ɵɵdefineDirective, X as input, Xi as ɵɵProvidersFeature, Ya as ɵɵdomElement, _o as ɵɵgetInheritedFactory, aa as ɵɵattribute, at as output, ca as ɵɵclassMap, da as ɵɵconditional, ds as ɵɵrepeaterCreate, pa as ɵɵconditionalCreate, qi as ɵɵHostDirectivesFeature, qo as ɵɵprojection, un as Directive, us as ɵɵrepeater, xn as Injectable, zn as Output } from "./core-D4dczhTZ.js";
import "./common-BBp9OMOF.js";
import { t as CommonModule } from "./_common_module-chunk-CF6aUJZ1.js";
import { t as CoreIcon } from "./primeicons-angular-core-DpYT0758.js";
import { G as le, M as W$1, T as M, X as ue, Z as v, et as xe } from "./primeng-utils-CVbKD6Wd.js";
import { x as se } from "./dist-2ljAlN4l.js";
import { n as PARENT_INSTANCE, t as BaseComponent } from "./primeng-basecomponent-C8ezCQ4r.js";
import { s as BaseStyle } from "./primeng-config-Db_bbJUd.js";
import { Bind, BindModule } from "./primeng_bind.js";
// node_modules/@primeicons/core/dist/esm/icons/times.mjs
var e = {
	name: "times",
	meta: { tags: [
		"times",
		"close",
		"cancel",
		"delete",
		"remove"
	] },
	svg: {
		xmlns: "http://www.w3.org/2000/svg",
		width: 20,
		height: 20,
		viewBox: "0 0 20 20",
		fill: "none"
	},
	nodes: [["path", {
		d: "M14.4199 4.51962C14.7128 4.22696 15.1876 4.22685 15.4805 4.51962C15.7731 4.81246 15.7731 5.28732 15.4805 5.58016L11.0606 10L15.4805 14.4199C15.773 14.7129 15.7732 15.1877 15.4805 15.4805C15.1877 15.7732 14.7128 15.773 14.4199 15.4805L10 11.0606L5.58014 15.4805C5.2873 15.7731 4.81245 15.7731 4.5196 15.4805C4.22682 15.1876 4.22692 14.7128 4.5196 14.4199L8.93949 10L4.5196 5.58016C4.22676 5.28727 4.22673 4.8125 4.5196 4.51962C4.81248 4.22677 5.28726 4.22678 5.58014 4.51962L10 8.93951L14.4199 4.51962Z",
		fill: "currentColor",
		key: "ow8ecl"
	}]]
};
// node_modules/@primeicons/angular/fesm2022/primeicons-angular-times.mjs
var Times = class Times extends CoreIcon {
	constructor() {
		super();
		this._icon = e;
	}
	static ɵfac = function Times_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || Times)();
	};
	static ɵcmp = (function() {
		const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
		function Times_For_1_Case_0_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "path");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Times_For_1_Case_1_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "circle");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Times_For_1_Case_2_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "rect");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Times_For_1_Case_3_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "line");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Times_For_1_Case_4_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "polyline");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Times_For_1_Case_5_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "polygon");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Times_For_1_Case_6_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "ellipse");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Times_For_1_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, Times_For_1_Case_0_Template, 1, 9, "path")(1, Times_For_1_Case_1_Template, 1, 6, "circle")(2, Times_For_1_Case_2_Template, 1, 9, "rect")(3, Times_For_1_Case_3_Template, 1, 7, "line")(4, Times_For_1_Case_4_Template, 1, 4, "polyline")(5, Times_For_1_Case_5_Template, 1, 4, "polygon")(6, Times_For_1_Case_6_Template, 1, 7, "ellipse");
			if (rf & 2) {
				let tmp_10_0 = void 0;
				const node_r1 = ctx.$implicit;
				ɵɵconditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
			}
		}
		return /*@__PURE__*/ ɵɵdefineComponent({
			type: Times,
			selectors: [[
				"svg",
				"data-p-icon",
				"times"
			]],
			features: [ɵɵInheritDefinitionFeature],
			decls: 2,
			vars: 0,
			template: function Times_Template(rf, ctx) {
				if (rf & 1) ɵɵrepeaterCreate(0, Times_For_1_Template, 7, 1, null, null, _forTrack0);
				if (rf & 2) ɵɵrepeater(ctx.iconNodes());
			},
			encapsulation: 2,
			changeDetection: 1
		});
	})();
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Times, [{
		type: Component,
		args: [{
			selector: "svg[data-p-icon=\"times\"]",
			standalone: true,
			template: "\n        @for (node of iconNodes(); track node[1]['key'] || $index) {\n            @switch (node[0]) {\n                @case ('path') {\n                    <svg:path\n                        [attr.d]=\"node[1]['d']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.fill-rule]=\"node[1]['fillRule']\"\n                        [attr.clip-rule]=\"node[1]['clipRule']\"\n                        [attr.stroke]=\"node[1]['stroke']\"\n                        [attr.stroke-width]=\"node[1]['strokeWidth']\"\n                        [attr.stroke-opacity]=\"node[1]['strokeOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('circle') {\n                    <svg:circle\n                        [attr.cx]=\"node[1]['cx']\"\n                        [attr.cy]=\"node[1]['cy']\"\n                        [attr.r]=\"node[1]['r']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('rect') {\n                    <svg:rect\n                        [attr.x]=\"node[1]['x']\"\n                        [attr.y]=\"node[1]['y']\"\n                        [attr.width]=\"node[1]['width']\"\n                        [attr.height]=\"node[1]['height']\"\n                        [attr.rx]=\"node[1]['rx']\"\n                        [attr.ry]=\"node[1]['ry']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('line') {\n                    <svg:line\n                        [attr.x1]=\"node[1]['x1']\"\n                        [attr.y1]=\"node[1]['y1']\"\n                        [attr.x2]=\"node[1]['x2']\"\n                        [attr.y2]=\"node[1]['y2']\"\n                        [attr.stroke]=\"node[1]['stroke']\"\n                        [attr.stroke-opacity]=\"node[1]['strokeOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('polyline') {\n                    <svg:polyline\n                        [attr.points]=\"node[1]['points']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('polygon') {\n                    <svg:polygon\n                        [attr.points]=\"node[1]['points']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('ellipse') {\n                    <svg:ellipse\n                        [attr.cx]=\"node[1]['cx']\"\n                        [attr.cy]=\"node[1]['cy']\"\n                        [attr.rx]=\"node[1]['rx']\"\n                        [attr.ry]=\"node[1]['ry']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n            }\n        }\n"
		}]
	}], () => [], null);
})();
// node_modules/@primeuix/motion/dist/index.mjs
var J = Object.defineProperty;
var N = Object.getOwnPropertySymbols;
var K = Object.prototype.hasOwnProperty;
var Q = Object.prototype.propertyIsEnumerable;
var S = (t, o, e) => o in t ? J(t, o, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: e
}) : t[o] = e;
var x = (t, o) => {
	for (var e in o || (o = {})) K.call(o, e) && S(t, e, o[e]);
	if (N) for (var e of N(o)) Q.call(o, e) && S(t, e, o[e]);
	return t;
};
var k = (t, o, e) => new Promise((i, u) => {
	var a = (s) => {
		try {
			h(e.next(s));
		} catch (f) {
			u(f);
		}
	}, M = (s) => {
		try {
			h(e.throw(s));
		} catch (f) {
			u(f);
		}
	}, h = (s) => s.done ? i(s.value) : Promise.resolve(s.value).then(a, M);
	h((e = e.apply(t, o)).next());
});
var p = "animation";
var E = "transition";
var Z = [
	"data-enter-phase",
	"data-enter-from",
	"data-enter-to",
	"data-enter-active",
	"data-leave-phase",
	"data-leave-from",
	"data-leave-to",
	"data-leave-active"
];
function j(t) {
	return t ? t.disabled || !!(t.safe && le()) : !1;
}
function V(t, o) {
	return t ? x(x({}, t), Object.entries(o).reduce((e, [i, u]) => {
		var a;
		return e[i] = (a = t[i]) != null ? a : u, e;
	}, {})) : x({}, o);
}
function _(t) {
	let { name: o, enterClass: e, leaveClass: i } = t || {};
	return {
		enter: {
			from: (e == null ? void 0 : e.from) || `${o}-enter-from`,
			to: (e == null ? void 0 : e.to) || `${o}-enter-to`,
			active: (e == null ? void 0 : e.active) || `${o}-enter-active`
		},
		leave: {
			from: (i == null ? void 0 : i.from) || `${o}-leave-from`,
			to: (i == null ? void 0 : i.to) || `${o}-leave-to`,
			active: (i == null ? void 0 : i.active) || `${o}-leave-active`
		}
	};
}
function C(t) {
	return {
		enter: {
			onBefore: t == null ? void 0 : t.onBeforeEnter,
			onStart: t == null ? void 0 : t.onEnter,
			onAfter: t == null ? void 0 : t.onAfterEnter,
			onCancelled: t == null ? void 0 : t.onEnterCancelled
		},
		leave: {
			onBefore: t == null ? void 0 : t.onBeforeLeave,
			onStart: t == null ? void 0 : t.onLeave,
			onAfter: t == null ? void 0 : t.onAfterLeave,
			onCancelled: t == null ? void 0 : t.onLeaveCancelled
		}
	};
}
function R(t, o) {
	let e = window.getComputedStyle(t), i = (d) => {
		let l = e[`${d}Duration`].split(", ").map(se), m = e[`${d}Delay`].split(", ").map(se);
		return m.length < l.length && m.length > 0 && (m = l.map((v, b) => m[b % m.length])), [m, l];
	}, [u, a] = i(E), [M, h] = i(p), s = Math.max(...a.map((d, l) => d + u[l])), f = Math.max(...h.map((d, l) => d + M[l])), r, n = 0, c = 0;
	return o === "transition" ? s > 0 && (r = "transition", n = s, c = a.length) : o === "animation" ? f > 0 && (r = "animation", n = f, c = h.length) : (n = Math.max(s, f), r = n > 0 ? s > f ? E : p : void 0, c = r ? r === "transition" ? a.length : h.length : 0), {
		type: r,
		timeout: n,
		count: c
	};
}
function q(t, o) {
	return typeof t == "number" ? t : t != null && typeof t == "object" && t[o] != null ? t[o] : null;
}
function W(t, o) {
	return t ? `--${t}-${o}` : `--${o}`;
}
function g(t, o, e) {
	let { autoHeight: i, autoWidth: u, cssVarPrefix: a } = o, M = typeof e == "object";
	i && xe(t, W(a, "height"), M ? e.height : e), u && xe(t, W(a, "width"), M ? e.width : e);
}
function P(t, o) {
	if (!o.autoHeight && !o.autoWidth) return;
	let e = t.scrollHeight, i = t.scrollWidth;
	if (!e || !i) {
		let u = v(t);
		e || (e = u.height), i || (i = u.width);
	}
	g(t, o, {
		height: e + "px",
		width: i + "px"
	});
}
function z(t, o) {
	t.setAttribute(`data-${o}-phase`, "");
}
function O(t, o, e) {
	t.removeAttribute("data-enter-from"), t.removeAttribute("data-enter-to"), t.removeAttribute("data-leave-from"), t.removeAttribute("data-leave-to"), t.setAttribute(`data-${o}-${e}`, ""), t.setAttribute(`data-${o}-active`, "");
}
function T(t) {
	t.removeAttribute("data-enter-phase"), t.removeAttribute("data-leave-phase");
}
function B(t) {
	Z.forEach((o) => t.removeAttribute(o));
}
var tt = Object.freeze({
	name: "p",
	safe: !0,
	disabled: !1,
	enter: !0,
	leave: !0,
	autoHeight: !0,
	autoWidth: !0,
	cssVarPrefix: ""
});
function dt(t, o) {
	if (!t) throw new Error("Element is required.");
	let e = {}, i = !1, u = {}, a = null, M$1 = {}, h = (r) => {
		for (let n of Object.keys(e)) delete e[n];
		if (Object.assign(e, V(r, tt)), !e.enter && !e.leave) throw new Error("Enter or leave must be true.");
		M$1 = C(e), i = j(e), u = _(e), a = null;
	}, s = (r) => k(null, null, function* () {
		a?.();
		let n = t, { onBefore: c, onStart: d, onAfter: l, onCancelled: m } = M$1[r] || {}, v = { element: t };
		if (z(n, r), i) {
			c?.(v), d?.(v), l?.(v), T(n), g(n, e, r === "enter" ? "auto" : "0px");
			return;
		}
		let { from: b, active: A, to: H } = u[r] || {};
		return c?.(v), r === "enter" ? g(n, e, "0px") : r === "leave" && P(n, e), M(n, b), M(n, A), O(n, r, "from"), n.offsetHeight, r === "enter" ? P(n, e) : r === "leave" && g(n, e, "0px"), W$1(n, b), M(n, H), O(n, r, "to"), d?.(v), new Promise((D) => {
			let U = q(e.duration, r), w = () => {
				W$1(n, [H, A]), a = null, B(n), T(n);
			}, G = () => {
				w(), l?.(v), D(), r === "enter" ? g(n, e, "auto") : r === "leave" && g(n, e, "0px");
			}, L = () => {};
			a = () => {
				L(), w(), m?.(v), D();
			}, L = ot(n, e.type, U, G);
		});
	});
	h(o), g(t, e, "0px");
	let f = {
		enter: () => e.enter ? s("enter") : Promise.resolve(),
		leave: () => e.leave ? s("leave") : Promise.resolve(),
		cancel: () => {
			a?.(), a = null;
		},
		update: (r, n) => {
			if (!r) throw new Error("Element is required.");
			t = r, f.cancel(), n && h(n);
		}
	};
	return e.appear && f.enter(), f;
}
var et = 0;
function ot(t, o, e, i) {
	let u = t._motionEndId = ++et, a = () => {
		u === t._motionEndId && i();
	};
	if (e != null) {
		let m = setTimeout(a, e);
		return () => clearTimeout(m);
	}
	let { type: M, timeout: h, count: s } = R(t, o);
	if (!M) return i(), () => {};
	let f = M + "end", r = 0, n = () => {
		t.removeEventListener(f, d, !0), clearTimeout(l);
	}, c = () => {
		n(), a();
	}, d = (m) => {
		m.target === t && ++r >= s && c();
	};
	t.addEventListener(f, d, { capture: !0 });
	let l = setTimeout(() => {
		r < s && c();
	}, h + 1);
	return n;
}
// node_modules/primeng/fesm2022/primeng-motion.mjs
var originalStyles = /* @__PURE__ */ new WeakMap();
function applyHiddenStyles(element, strategy) {
	if (!element) return;
	if (!originalStyles.has(element)) originalStyles.set(element, {
		display: element.style.display,
		visibility: element.style.visibility,
		maxHeight: element.style.maxHeight
	});
	switch (strategy) {
		case "display":
			element.style.display = "none";
			break;
		case "visibility":
			element.style.visibility = "hidden";
			element.style.maxHeight = "0";
	}
}
function resetStyles(element, strategy) {
	if (!element) return;
	const original = originalStyles.get(element) ?? element.style;
	switch (strategy) {
		case "display":
			element.style.display = original?.display || "";
			break;
		case "visibility":
			element.style.visibility = original?.visibility || "";
			element.style.maxHeight = original?.maxHeight || "";
	}
	originalStyles.delete(element);
}
var style = `
    .p-motion {
        display: block;
    }
`;
var classes = { root: "p-motion" };
var MotionStyle = class MotionStyle extends BaseStyle {
	name = "motion";
	style = style;
	classes = classes;
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵMotionStyle_BaseFactory = void 0;
		return function MotionStyle_Factory(__ngFactoryType__) {
			return (ɵMotionStyle_BaseFactory || (ɵMotionStyle_BaseFactory = ɵɵgetInheritedFactory(MotionStyle)))(__ngFactoryType__ || MotionStyle);
		};
	})();
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: MotionStyle,
		factory: MotionStyle.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MotionStyle, [{ type: Injectable }], null, null);
})();
var MotionClasses;
(function(MotionClasses) {
	MotionClasses["root"] = "p-motion";
})(MotionClasses || (MotionClasses = {}));
var MOTION_INSTANCE = new InjectionToken("MOTION_INSTANCE");
var Motion = class Motion extends BaseComponent {
	$pcMotion = inject(MOTION_INSTANCE, {
		optional: true,
		skipSelf: true
	}) ?? void 0;
	bindDirectiveInstance = inject(Bind, { self: true });
	_componentStyle = inject(MotionStyle);
	visible = input(false, {
		...ngDevMode ? { debugName: "visible" } : /* istanbul ignore next */ {},
		transform: (value) => value ?? false
	});
	mountOnEnter = input(true, ...ngDevMode ? [{ debugName: "mountOnEnter" }] : /* istanbul ignore next */ []);
	unmountOnLeave = input(true, ...ngDevMode ? [{ debugName: "unmountOnLeave" }] : /* istanbul ignore next */ []);
	name = input(void 0, ...ngDevMode ? [{ debugName: "name" }] : /* istanbul ignore next */ []);
	type = input(void 0, ...ngDevMode ? [{ debugName: "type" }] : /* istanbul ignore next */ []);
	safe = input(void 0, ...ngDevMode ? [{ debugName: "safe" }] : /* istanbul ignore next */ []);
	disabled = input(false, ...ngDevMode ? [{ debugName: "disabled" }] : /* istanbul ignore next */ []);
	appear = input(false, ...ngDevMode ? [{ debugName: "appear" }] : /* istanbul ignore next */ []);
	enter = input(true, ...ngDevMode ? [{ debugName: "enter" }] : /* istanbul ignore next */ []);
	leave = input(true, ...ngDevMode ? [{ debugName: "leave" }] : /* istanbul ignore next */ []);
	duration = input(void 0, ...ngDevMode ? [{ debugName: "duration" }] : /* istanbul ignore next */ []);
	hideStrategy = input("display", ...ngDevMode ? [{ debugName: "hideStrategy" }] : /* istanbul ignore next */ []);
	enterFromClass = input(void 0, ...ngDevMode ? [{ debugName: "enterFromClass" }] : /* istanbul ignore next */ []);
	enterToClass = input(void 0, ...ngDevMode ? [{ debugName: "enterToClass" }] : /* istanbul ignore next */ []);
	enterActiveClass = input(void 0, ...ngDevMode ? [{ debugName: "enterActiveClass" }] : /* istanbul ignore next */ []);
	leaveFromClass = input(void 0, ...ngDevMode ? [{ debugName: "leaveFromClass" }] : /* istanbul ignore next */ []);
	leaveToClass = input(void 0, ...ngDevMode ? [{ debugName: "leaveToClass" }] : /* istanbul ignore next */ []);
	leaveActiveClass = input(void 0, ...ngDevMode ? [{ debugName: "leaveActiveClass" }] : /* istanbul ignore next */ []);
	options = input({}, {
		...ngDevMode ? { debugName: "options" } : /* istanbul ignore next */ {},
		transform: (value) => value ?? {}
	});
	onBeforeEnter = output();
	onEnter = output();
	onAfterEnter = output();
	onEnterCancelled = output();
	onBeforeLeave = output();
	onLeave = output();
	onAfterLeave = output();
	onLeaveCancelled = output();
	motionOptions = computed(() => {
		const options = this.options();
		return {
			name: options.name ?? this.name(),
			type: options.type ?? this.type(),
			safe: options.safe ?? this.safe(),
			disabled: options.disabled ?? this.disabled(),
			appear: false,
			enter: options.enter ?? this.enter(),
			leave: options.leave ?? this.leave(),
			duration: options.duration ?? this.duration(),
			enterClass: {
				from: options.enterClass?.from ?? (!options.name ? this.enterFromClass() : void 0),
				to: options.enterClass?.to ?? (!options.name ? this.enterToClass() : void 0),
				active: options.enterClass?.active ?? (!options.name ? this.enterActiveClass() : void 0)
			},
			leaveClass: {
				from: options.leaveClass?.from ?? (!options.name ? this.leaveFromClass() : void 0),
				to: options.leaveClass?.to ?? (!options.name ? this.leaveToClass() : void 0),
				active: options.leaveClass?.active ?? (!options.name ? this.leaveActiveClass() : void 0)
			},
			onBeforeEnter: options.onBeforeEnter ?? this.handleBeforeEnter,
			onEnter: options.onEnter ?? this.handleEnter,
			onAfterEnter: options.onAfterEnter ?? this.handleAfterEnter,
			onEnterCancelled: options.onEnterCancelled ?? this.handleEnterCancelled,
			onBeforeLeave: options.onBeforeLeave ?? this.handleBeforeLeave,
			onLeave: options.onLeave ?? this.handleLeave,
			onAfterLeave: options.onAfterLeave ?? this.handleAfterLeave,
			onLeaveCancelled: options.onLeaveCancelled ?? this.handleLeaveCancelled
		};
	}, ...ngDevMode ? [{ debugName: "motionOptions" }] : /* istanbul ignore next */ []);
	motion;
	isInitialMount = true;
	cancelled = false;
	destroyed = false;
	rendered = signal(false, ...ngDevMode ? [{ debugName: "rendered" }] : /* istanbul ignore next */ []);
	handleBeforeEnter = (event) => !this.destroyed && this.onBeforeEnter.emit(event);
	handleEnter = (event) => !this.destroyed && this.onEnter.emit(event);
	handleAfterEnter = (event) => !this.destroyed && this.onAfterEnter.emit(event);
	handleEnterCancelled = (event) => !this.destroyed && this.onEnterCancelled.emit(event);
	handleBeforeLeave = (event) => !this.destroyed && this.onBeforeLeave.emit(event);
	handleLeave = (event) => !this.destroyed && this.onLeave.emit(event);
	handleAfterLeave = (event) => !this.destroyed && this.onAfterLeave.emit(event);
	handleLeaveCancelled = (event) => !this.destroyed && this.onLeaveCancelled.emit(event);
	constructor() {
		super();
		effect(() => {
			const hideStrategy = this.hideStrategy();
			if (this.isInitialMount) {
				applyHiddenStyles(this.$el, hideStrategy);
				this.rendered.set(this.visible() && this.mountOnEnter() || !this.mountOnEnter());
			} else if (this.visible() && !this.rendered()) {
				applyHiddenStyles(this.$el, hideStrategy);
				this.rendered.set(true);
			}
		});
		effect(() => {
			if (!this.motion) this.motion = dt(this.$el, this.motionOptions());
		});
		afterRenderEffect(async () => {
			if (!this.$el) return;
			const shouldAppear = this.isInitialMount && this.visible() && this.appear();
			const hideStrategy = this.hideStrategy();
			if (this.visible()) {
				await ue();
				resetStyles(this.$el, hideStrategy);
				if (shouldAppear || !this.isInitialMount) {
					this.applyMotionDuration("enter");
					this.motion?.enter();
				}
			} else if (!this.isInitialMount) {
				await ue();
				this.applyMotionDuration("leave");
				this.motion?.leave()?.then(async () => {
					if (this.$el && !this.cancelled && !this.visible()) {
						applyHiddenStyles(this.$el, hideStrategy);
						if (this.unmountOnLeave()) {
							await ue();
							if (!this.cancelled) this.rendered.set(false);
						}
					}
				});
			}
			this.isInitialMount = false;
		});
	}
	applyMotionDuration(phase) {
		const options = untracked(this.motionOptions);
		const ms = q(options.duration, phase);
		if (ms == null || !this.$el) return;
		const el = this.$el;
		const durationValue = `${ms}ms`;
		if (options.type === "transition") el.style.transitionDuration = durationValue;
		else el.style.animationDuration = durationValue;
	}
	onAfterViewChecked() {
		const optionsAttrs = this.options()?.root || {};
		this.bindDirectiveInstance.setAttrs({
			...this.ptms(["host", "root"]),
			...optionsAttrs
		});
	}
	onDestroy() {
		this.destroyed = true;
		this.cancelled = true;
		this.motion?.cancel();
		this.motion = void 0;
		resetStyles(this.$el, this.hideStrategy());
		this.$el?.remove();
		this.isInitialMount = true;
	}
	static ɵfac = function Motion_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || Motion)();
	};
	static ɵcmp = (function() {
		const _c0 = ["*"];
		function Motion_Conditional_0_Template(rf, ctx) {
			if (rf & 1) ɵɵprojection(0);
		}
		return /*@__PURE__*/ ɵɵdefineComponent({
			type: Motion,
			selectors: [["p-motion"]],
			hostVars: 2,
			hostBindings: function Motion_HostBindings(rf, ctx) {
				if (rf & 2) ɵɵclassMap(ctx.cx("root"));
			},
			inputs: {
				visible: [1, "visible"],
				mountOnEnter: [1, "mountOnEnter"],
				unmountOnLeave: [1, "unmountOnLeave"],
				name: [1, "name"],
				type: [1, "type"],
				safe: [1, "safe"],
				disabled: [1, "disabled"],
				appear: [1, "appear"],
				enter: [1, "enter"],
				leave: [1, "leave"],
				duration: [1, "duration"],
				hideStrategy: [1, "hideStrategy"],
				enterFromClass: [1, "enterFromClass"],
				enterToClass: [1, "enterToClass"],
				enterActiveClass: [1, "enterActiveClass"],
				leaveFromClass: [1, "leaveFromClass"],
				leaveToClass: [1, "leaveToClass"],
				leaveActiveClass: [1, "leaveActiveClass"],
				options: [1, "options"]
			},
			outputs: {
				onBeforeEnter: "onBeforeEnter",
				onEnter: "onEnter",
				onAfterEnter: "onAfterEnter",
				onEnterCancelled: "onEnterCancelled",
				onBeforeLeave: "onBeforeLeave",
				onLeave: "onLeave",
				onAfterLeave: "onAfterLeave",
				onLeaveCancelled: "onLeaveCancelled"
			},
			features: [
				ɵɵProvidersFeature([
					MotionStyle,
					{
						provide: MOTION_INSTANCE,
						useExisting: Motion
					},
					{
						provide: PARENT_INSTANCE,
						useExisting: Motion
					}
				]),
				ɵɵHostDirectivesFeature([Bind]),
				ɵɵInheritDefinitionFeature
			],
			ngContentSelectors: _c0,
			decls: 1,
			vars: 1,
			template: function Motion_Template(rf, ctx) {
				if (rf & 1) {
					ɵɵprojectionDef();
					ɵɵconditionalCreate(0, Motion_Conditional_0_Template, 1, 0);
				}
				if (rf & 2) ɵɵconditional(ctx.rendered() ? 0 : -1);
			},
			dependencies: [CommonModule, BindModule],
			encapsulation: 2
		});
	})();
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Motion, [{
		type: Component,
		args: [{
			selector: "p-motion",
			standalone: true,
			imports: [CommonModule, BindModule],
			template: `
        @if (rendered()) {
            <ng-content />
        }
    `,
			providers: [
				MotionStyle,
				{
					provide: MOTION_INSTANCE,
					useExisting: Motion
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: Motion
				}
			],
			host: { "[class]": "cx('root')" },
			hostDirectives: [Bind]
		}]
	}], () => [], {
		visible: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "visible",
				required: false
			}]
		}],
		mountOnEnter: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "mountOnEnter",
				required: false
			}]
		}],
		unmountOnLeave: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "unmountOnLeave",
				required: false
			}]
		}],
		name: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "name",
				required: false
			}]
		}],
		type: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "type",
				required: false
			}]
		}],
		safe: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "safe",
				required: false
			}]
		}],
		disabled: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "disabled",
				required: false
			}]
		}],
		appear: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "appear",
				required: false
			}]
		}],
		enter: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "enter",
				required: false
			}]
		}],
		leave: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "leave",
				required: false
			}]
		}],
		duration: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "duration",
				required: false
			}]
		}],
		hideStrategy: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "hideStrategy",
				required: false
			}]
		}],
		enterFromClass: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "enterFromClass",
				required: false
			}]
		}],
		enterToClass: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "enterToClass",
				required: false
			}]
		}],
		enterActiveClass: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "enterActiveClass",
				required: false
			}]
		}],
		leaveFromClass: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "leaveFromClass",
				required: false
			}]
		}],
		leaveToClass: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "leaveToClass",
				required: false
			}]
		}],
		leaveActiveClass: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "leaveActiveClass",
				required: false
			}]
		}],
		options: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "options",
				required: false
			}]
		}],
		onBeforeEnter: [{
			type: Output,
			args: ["onBeforeEnter"]
		}],
		onEnter: [{
			type: Output,
			args: ["onEnter"]
		}],
		onAfterEnter: [{
			type: Output,
			args: ["onAfterEnter"]
		}],
		onEnterCancelled: [{
			type: Output,
			args: ["onEnterCancelled"]
		}],
		onBeforeLeave: [{
			type: Output,
			args: ["onBeforeLeave"]
		}],
		onLeave: [{
			type: Output,
			args: ["onLeave"]
		}],
		onAfterLeave: [{
			type: Output,
			args: ["onAfterLeave"]
		}],
		onLeaveCancelled: [{
			type: Output,
			args: ["onLeaveCancelled"]
		}]
	});
})();
var MOTION_DIRECTIVE_INSTANCE = new InjectionToken("MOTION_DIRECTIVE_INSTANCE");
var MotionDirective = class MotionDirective extends BaseComponent {
	$pcMotionDirective = inject(MOTION_DIRECTIVE_INSTANCE, {
		optional: true,
		skipSelf: true
	}) ?? void 0;
	visible = input(false, {
		...ngDevMode ? { debugName: "visible" } : /* istanbul ignore next */ {},
		alias: "pMotion",
		transform: (value) => value ?? false
	});
	name = input(void 0, {
		...ngDevMode ? { debugName: "name" } : /* istanbul ignore next */ {},
		alias: "pMotionName"
	});
	type = input(void 0, {
		...ngDevMode ? { debugName: "type" } : /* istanbul ignore next */ {},
		alias: "pMotionType"
	});
	safe = input(void 0, {
		...ngDevMode ? { debugName: "safe" } : /* istanbul ignore next */ {},
		alias: "pMotionSafe"
	});
	disabled = input(false, {
		...ngDevMode ? { debugName: "disabled" } : /* istanbul ignore next */ {},
		alias: "pMotionDisabled"
	});
	appear = input(false, {
		...ngDevMode ? { debugName: "appear" } : /* istanbul ignore next */ {},
		alias: "pMotionAppear"
	});
	enter = input(true, {
		...ngDevMode ? { debugName: "enter" } : /* istanbul ignore next */ {},
		alias: "pMotionEnter"
	});
	leave = input(true, {
		...ngDevMode ? { debugName: "leave" } : /* istanbul ignore next */ {},
		alias: "pMotionLeave"
	});
	duration = input(void 0, {
		...ngDevMode ? { debugName: "duration" } : /* istanbul ignore next */ {},
		alias: "pMotionDuration"
	});
	hideStrategy = input("display", {
		...ngDevMode ? { debugName: "hideStrategy" } : /* istanbul ignore next */ {},
		alias: "pMotionHideStrategy"
	});
	enterFromClass = input(void 0, {
		...ngDevMode ? { debugName: "enterFromClass" } : /* istanbul ignore next */ {},
		alias: "pMotionEnterFromClass"
	});
	enterToClass = input(void 0, {
		...ngDevMode ? { debugName: "enterToClass" } : /* istanbul ignore next */ {},
		alias: "pMotionEnterToClass"
	});
	enterActiveClass = input(void 0, {
		...ngDevMode ? { debugName: "enterActiveClass" } : /* istanbul ignore next */ {},
		alias: "pMotionEnterActiveClass"
	});
	leaveFromClass = input(void 0, {
		...ngDevMode ? { debugName: "leaveFromClass" } : /* istanbul ignore next */ {},
		alias: "pMotionLeaveFromClass"
	});
	leaveToClass = input(void 0, {
		...ngDevMode ? { debugName: "leaveToClass" } : /* istanbul ignore next */ {},
		alias: "pMotionLeaveToClass"
	});
	leaveActiveClass = input(void 0, {
		...ngDevMode ? { debugName: "leaveActiveClass" } : /* istanbul ignore next */ {},
		alias: "pMotionLeaveActiveClass"
	});
	options = input({}, {
		...ngDevMode ? { debugName: "options" } : /* istanbul ignore next */ {},
		alias: "pMotionOptions",
		transform: (value) => value ?? {}
	});
	onBeforeEnter = output({ alias: "pMotionOnBeforeEnter" });
	onEnter = output({ alias: "pMotionOnEnter" });
	onAfterEnter = output({ alias: "pMotionOnAfterEnter" });
	onEnterCancelled = output({ alias: "pMotionOnEnterCancelled" });
	onBeforeLeave = output({ alias: "pMotionOnBeforeLeave" });
	onLeave = output({ alias: "pMotionOnLeave" });
	onAfterLeave = output({ alias: "pMotionOnAfterLeave" });
	onLeaveCancelled = output({ alias: "pMotionOnLeaveCancelled" });
	motionOptions = computed(() => {
		const options = this.options() ?? {};
		return {
			name: options.name ?? this.name(),
			type: options.type ?? this.type(),
			safe: options.safe ?? this.safe(),
			disabled: options.disabled ?? this.disabled(),
			appear: false,
			enter: options.enter ?? this.enter(),
			leave: options.leave ?? this.leave(),
			duration: options.duration ?? this.duration(),
			enterClass: {
				from: options.enterClass?.from ?? (!options.name ? this.enterFromClass() : void 0),
				to: options.enterClass?.to ?? (!options.name ? this.enterToClass() : void 0),
				active: options.enterClass?.active ?? (!options.name ? this.enterActiveClass() : void 0)
			},
			leaveClass: {
				from: options.leaveClass?.from ?? (!options.name ? this.leaveFromClass() : void 0),
				to: options.leaveClass?.to ?? (!options.name ? this.leaveToClass() : void 0),
				active: options.leaveClass?.active ?? (!options.name ? this.leaveActiveClass() : void 0)
			},
			onBeforeEnter: options.onBeforeEnter ?? this.handleBeforeEnter,
			onEnter: options.onEnter ?? this.handleEnter,
			onAfterEnter: options.onAfterEnter ?? this.handleAfterEnter,
			onEnterCancelled: options.onEnterCancelled ?? this.handleEnterCancelled,
			onBeforeLeave: options.onBeforeLeave ?? this.handleBeforeLeave,
			onLeave: options.onLeave ?? this.handleLeave,
			onAfterLeave: options.onAfterLeave ?? this.handleAfterLeave,
			onLeaveCancelled: options.onLeaveCancelled ?? this.handleLeaveCancelled
		};
	}, ...ngDevMode ? [{ debugName: "motionOptions" }] : /* istanbul ignore next */ []);
	motion;
	isInitialMount = true;
	cancelled = false;
	destroyed = false;
	handleBeforeEnter = (event) => !this.destroyed && this.onBeforeEnter.emit(event);
	handleEnter = (event) => !this.destroyed && this.onEnter.emit(event);
	handleAfterEnter = (event) => !this.destroyed && this.onAfterEnter.emit(event);
	handleEnterCancelled = (event) => !this.destroyed && this.onEnterCancelled.emit(event);
	handleBeforeLeave = (event) => !this.destroyed && this.onBeforeLeave.emit(event);
	handleLeave = (event) => !this.destroyed && this.onLeave.emit(event);
	handleAfterLeave = (event) => !this.destroyed && this.onAfterLeave.emit(event);
	handleLeaveCancelled = (event) => !this.destroyed && this.onLeaveCancelled.emit(event);
	constructor() {
		super();
		afterRenderEffect(() => {
			if (!this.$el) return;
			this.motion ??= dt(this.$el, untracked(this.motionOptions));
			const shouldAppear = this.isInitialMount && this.visible() && this.appear();
			const hideStrategy = this.hideStrategy();
			if (this.visible()) {
				resetStyles(this.$el, hideStrategy);
				if (shouldAppear || !this.isInitialMount) {
					this.applyMotionDuration("enter");
					this.motion?.enter();
				}
			} else if (!this.isInitialMount) {
				this.applyMotionDuration("leave");
				this.motion?.leave()?.then(() => {
					if (this.$el && !this.cancelled && !this.visible()) applyHiddenStyles(this.$el, hideStrategy);
				});
			} else applyHiddenStyles(this.$el, hideStrategy);
			this.isInitialMount = false;
		});
	}
	applyMotionDuration(phase) {
		const options = untracked(this.motionOptions);
		const ms = q(options.duration, phase);
		if (ms == null || !this.$el) return;
		const el = this.$el;
		const durationValue = `${ms}ms`;
		if (options.type === "transition") el.style.transitionDuration = durationValue;
		else el.style.animationDuration = durationValue;
	}
	onDestroy() {
		this.destroyed = true;
		this.cancelled = true;
		this.motion?.cancel();
		this.motion = void 0;
		resetStyles(this.$el, this.hideStrategy());
		this.$el?.remove();
		this.isInitialMount = true;
	}
	static ɵfac = function MotionDirective_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || MotionDirective)();
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: MotionDirective,
		selectors: [[
			"",
			"pMotion",
			""
		]],
		inputs: {
			visible: [
				1,
				"pMotion",
				"visible"
			],
			name: [
				1,
				"pMotionName",
				"name"
			],
			type: [
				1,
				"pMotionType",
				"type"
			],
			safe: [
				1,
				"pMotionSafe",
				"safe"
			],
			disabled: [
				1,
				"pMotionDisabled",
				"disabled"
			],
			appear: [
				1,
				"pMotionAppear",
				"appear"
			],
			enter: [
				1,
				"pMotionEnter",
				"enter"
			],
			leave: [
				1,
				"pMotionLeave",
				"leave"
			],
			duration: [
				1,
				"pMotionDuration",
				"duration"
			],
			hideStrategy: [
				1,
				"pMotionHideStrategy",
				"hideStrategy"
			],
			enterFromClass: [
				1,
				"pMotionEnterFromClass",
				"enterFromClass"
			],
			enterToClass: [
				1,
				"pMotionEnterToClass",
				"enterToClass"
			],
			enterActiveClass: [
				1,
				"pMotionEnterActiveClass",
				"enterActiveClass"
			],
			leaveFromClass: [
				1,
				"pMotionLeaveFromClass",
				"leaveFromClass"
			],
			leaveToClass: [
				1,
				"pMotionLeaveToClass",
				"leaveToClass"
			],
			leaveActiveClass: [
				1,
				"pMotionLeaveActiveClass",
				"leaveActiveClass"
			],
			options: [
				1,
				"pMotionOptions",
				"options"
			]
		},
		outputs: {
			onBeforeEnter: "pMotionOnBeforeEnter",
			onEnter: "pMotionOnEnter",
			onAfterEnter: "pMotionOnAfterEnter",
			onEnterCancelled: "pMotionOnEnterCancelled",
			onBeforeLeave: "pMotionOnBeforeLeave",
			onLeave: "pMotionOnLeave",
			onAfterLeave: "pMotionOnAfterLeave",
			onLeaveCancelled: "pMotionOnLeaveCancelled"
		},
		features: [ɵɵProvidersFeature([
			MotionStyle,
			{
				provide: MOTION_DIRECTIVE_INSTANCE,
				useExisting: MotionDirective
			},
			{
				provide: PARENT_INSTANCE,
				useExisting: MotionDirective
			}
		]), ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MotionDirective, [{
		type: Directive,
		args: [{
			selector: "[pMotion]",
			standalone: true,
			providers: [
				MotionStyle,
				{
					provide: MOTION_DIRECTIVE_INSTANCE,
					useExisting: MotionDirective
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: MotionDirective
				}
			]
		}]
	}], () => [], {
		visible: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pMotion",
				required: false
			}]
		}],
		name: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pMotionName",
				required: false
			}]
		}],
		type: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pMotionType",
				required: false
			}]
		}],
		safe: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pMotionSafe",
				required: false
			}]
		}],
		disabled: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pMotionDisabled",
				required: false
			}]
		}],
		appear: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pMotionAppear",
				required: false
			}]
		}],
		enter: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pMotionEnter",
				required: false
			}]
		}],
		leave: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pMotionLeave",
				required: false
			}]
		}],
		duration: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pMotionDuration",
				required: false
			}]
		}],
		hideStrategy: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pMotionHideStrategy",
				required: false
			}]
		}],
		enterFromClass: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pMotionEnterFromClass",
				required: false
			}]
		}],
		enterToClass: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pMotionEnterToClass",
				required: false
			}]
		}],
		enterActiveClass: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pMotionEnterActiveClass",
				required: false
			}]
		}],
		leaveFromClass: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pMotionLeaveFromClass",
				required: false
			}]
		}],
		leaveToClass: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pMotionLeaveToClass",
				required: false
			}]
		}],
		leaveActiveClass: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pMotionLeaveActiveClass",
				required: false
			}]
		}],
		options: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pMotionOptions",
				required: false
			}]
		}],
		onBeforeEnter: [{
			type: Output,
			args: ["pMotionOnBeforeEnter"]
		}],
		onEnter: [{
			type: Output,
			args: ["pMotionOnEnter"]
		}],
		onAfterEnter: [{
			type: Output,
			args: ["pMotionOnAfterEnter"]
		}],
		onEnterCancelled: [{
			type: Output,
			args: ["pMotionOnEnterCancelled"]
		}],
		onBeforeLeave: [{
			type: Output,
			args: ["pMotionOnBeforeLeave"]
		}],
		onLeave: [{
			type: Output,
			args: ["pMotionOnLeave"]
		}],
		onAfterLeave: [{
			type: Output,
			args: ["pMotionOnAfterLeave"]
		}],
		onLeaveCancelled: [{
			type: Output,
			args: ["pMotionOnLeaveCancelled"]
		}]
	});
})();
var MotionModule = class MotionModule {
	static ɵfac = function MotionModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || MotionModule)();
	};
	static ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({
		type: MotionModule,
		imports: [Motion, MotionDirective],
		exports: [Motion, MotionDirective]
	});
	static ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ imports: [Motion] });
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MotionModule, [{
		type: NgModule,
		args: [{
			imports: [Motion, MotionDirective],
			exports: [Motion, MotionDirective]
		}]
	}], null, null);
})();
export { Times as i, MotionDirective as n, MotionModule as r, Motion as t };
