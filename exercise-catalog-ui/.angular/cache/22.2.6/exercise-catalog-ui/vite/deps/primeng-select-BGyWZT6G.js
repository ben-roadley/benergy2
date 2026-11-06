import { Fn as forwardRef, U as InjectionToken, Ui as signal, _ as untracked, _a as ɵɵnamespaceSVG, c as computed, la as ɵɵdefineInjectable, ua as ɵɵdefineInjector, va as ɵɵresetView, wr as inject, xn as effect, ya as ɵɵrestoreView } from "./_resource-chunk-B6oSsbEv.js";
import { i as isPlatformBrowser } from "./common-BBp9OMOF.js";
import { $ as isDevMode, A as contentChild, Ai as setClassMetadata, Bo as ɵɵnextContext, Ds as ɵɵstyleMap, Fs as ɵɵtextInterpolate1, Ga as ɵɵdefineNgModule, Gt as ChangeDetectionStrategy, Ji as ɵɵInheritDefinitionFeature, Jo as ɵɵprojectionDef, Jt as Component, Ms as ɵɵtemplateRefExtractor, Nn as NgModule, Ns as ɵɵtext, O as booleanAttribute, Os as ɵɵstyleProp, Ps as ɵɵtextInterpolate, Ro as ɵɵlistener, S as ViewChild, Sn as Input, T as afterRenderEffect, Ua as ɵɵdefineComponent, Wa as ɵɵdefineDirective, X as input, Xi as ɵɵProvidersFeature, Xo as ɵɵpureFunction0, Ya as ɵɵdomElement, Yo as ɵɵproperty, Zi as ɵɵadvance, Zo as ɵɵpureFunction1, Zs as ɵɵviewQuerySignal, _o as ɵɵgetInheritedFactory, aa as ɵɵattribute, ao as ɵɵelementContainer, at as output, ca as ɵɵclassMap, co as ɵɵelementEnd, da as ɵɵconditional, ds as ɵɵrepeaterCreate, fn as ElementRef, go as ɵɵgetCurrentView, gt as viewChild, ha as ɵɵcontentQuerySignal, i as ContentChild, io as ɵɵelement, js as ɵɵtemplate, lo as ɵɵelementStart, ls as ɵɵreference, nt as model, os as ɵɵqueryAdvance, pa as ɵɵconditionalCreate, pr as ViewEncapsulation, ps as ɵɵrepeaterTrackByIndex, qi as ɵɵHostDirectivesFeature, qo as ɵɵprojection, rt as numberAttribute, un as Directive, us as ɵɵrepeater, xn as Injectable, zn as Output } from "./core-D4dczhTZ.js";
import { s as toSignal } from "./rxjs-interop-BswAxQEY.js";
import { M as NG_VALUE_ACCESSOR } from "./forms-BhWnvdT_.js";
import { r as NgTemplateOutlet } from "./_common_module-chunk-CF6aUJZ1.js";
import { t as CoreIcon } from "./primeicons-angular-core-DpYT0758.js";
import { i as Times, r as MotionModule, t as Motion } from "./primeng-motion-DBtpchV9.js";
import { C as z, _ as l, a as J, c as R, f as b, l as Y, m as d, y as p } from "./dist-2ljAlN4l.js";
import { FilterService, OverlayService, SharedModule, TranslationKeys } from "./primeng_api.js";
import { a as getEventTarget, i as DomHandler, n as PARENT_INSTANCE, o as getShadowRoot, r as ConnectedOverlayScrollHandler, s as unblockBodyScroll, t as BaseComponent } from "./primeng-basecomponent-C8ezCQ4r.js";
import { a as Fluid, o as BaseModelHolder, t as InputText } from "./primeng-inputtext-Dy_wMP1G.js";
import { Bind, BindModule } from "./primeng_bind.js";
import { t as IconField } from "./primeng-iconfield-CoO2kKnx.js";
import { InputIcon } from "./primeng_inputicon.js";
import { $ as x, B as fe, F as Y$1, L as Zt, N as Wt, Y as pt, a as zindexutils_default, b as G, g as Ct, h as Bt, j as Vt, n as markInstance, nt as ye, q as nt, rt as z$1, v as Dt, w as L } from "./primeng-utils-CVbKD6Wd.js";
import { s as BaseStyle } from "./primeng-config-Db_bbJUd.js";
import { t as Tooltip } from "./primeng-tooltip-ttxZZIh5.js";
import { t as Ripple } from "./primeng-ripple-CyCwx_t1.js";
// node_modules/@primeicons/core/dist/esm/icons/chevron-down.mjs
var o = {
	name: "chevron-down",
	meta: { tags: [
		"chevron-down",
		"down",
		"fall",
		"decrease",
		"lower"
	] },
	svg: {
		xmlns: "http://www.w3.org/2000/svg",
		width: 20,
		height: 20,
		viewBox: "0 0 20 20",
		fill: "none"
	},
	nodes: [["path", {
		d: "M14.4697 6.96973C14.7626 6.67684 15.2374 6.67684 15.5303 6.96973C15.8232 7.26262 15.8232 7.73738 15.5303 8.03028L10.5303 13.0303C10.2374 13.3232 9.76262 13.3232 9.46972 13.0303L4.46972 8.03028C4.17683 7.73738 4.17683 7.26262 4.46972 6.96973C4.76262 6.67684 5.23738 6.67684 5.53027 6.96973L10 11.4395L14.4697 6.96973Z",
		fill: "currentColor",
		key: "a1s1p6"
	}]]
};
// node_modules/@primeicons/angular/fesm2022/primeicons-angular-chevron-down.mjs
var ChevronDown = class ChevronDown extends CoreIcon {
	constructor() {
		super();
		this._icon = o;
	}
	static ɵfac = function ChevronDown_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || ChevronDown)();
	};
	static ɵcmp = (function() {
		const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
		function ChevronDown_For_1_Case_0_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "path");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function ChevronDown_For_1_Case_1_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "circle");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function ChevronDown_For_1_Case_2_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "rect");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function ChevronDown_For_1_Case_3_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "line");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function ChevronDown_For_1_Case_4_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "polyline");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function ChevronDown_For_1_Case_5_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "polygon");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function ChevronDown_For_1_Case_6_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "ellipse");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function ChevronDown_For_1_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, ChevronDown_For_1_Case_0_Template, 1, 9, "path")(1, ChevronDown_For_1_Case_1_Template, 1, 6, "circle")(2, ChevronDown_For_1_Case_2_Template, 1, 9, "rect")(3, ChevronDown_For_1_Case_3_Template, 1, 7, "line")(4, ChevronDown_For_1_Case_4_Template, 1, 4, "polyline")(5, ChevronDown_For_1_Case_5_Template, 1, 4, "polygon")(6, ChevronDown_For_1_Case_6_Template, 1, 7, "ellipse");
			if (rf & 2) {
				let tmp_10_0 = void 0;
				const node_r1 = ctx.$implicit;
				ɵɵconditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
			}
		}
		return /*@__PURE__*/ ɵɵdefineComponent({
			type: ChevronDown,
			selectors: [[
				"svg",
				"data-p-icon",
				"chevron-down"
			]],
			features: [ɵɵInheritDefinitionFeature],
			decls: 2,
			vars: 0,
			template: function ChevronDown_Template(rf, ctx) {
				if (rf & 1) ɵɵrepeaterCreate(0, ChevronDown_For_1_Template, 7, 1, null, null, _forTrack0);
				if (rf & 2) ɵɵrepeater(ctx.iconNodes());
			},
			encapsulation: 2,
			changeDetection: 1
		});
	})();
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChevronDown, [{
		type: Component,
		args: [{
			selector: "svg[data-p-icon=\"chevron-down\"]",
			standalone: true,
			template: "\n        @for (node of iconNodes(); track node[1]['key'] || $index) {\n            @switch (node[0]) {\n                @case ('path') {\n                    <svg:path\n                        [attr.d]=\"node[1]['d']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.fill-rule]=\"node[1]['fillRule']\"\n                        [attr.clip-rule]=\"node[1]['clipRule']\"\n                        [attr.stroke]=\"node[1]['stroke']\"\n                        [attr.stroke-width]=\"node[1]['strokeWidth']\"\n                        [attr.stroke-opacity]=\"node[1]['strokeOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('circle') {\n                    <svg:circle\n                        [attr.cx]=\"node[1]['cx']\"\n                        [attr.cy]=\"node[1]['cy']\"\n                        [attr.r]=\"node[1]['r']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('rect') {\n                    <svg:rect\n                        [attr.x]=\"node[1]['x']\"\n                        [attr.y]=\"node[1]['y']\"\n                        [attr.width]=\"node[1]['width']\"\n                        [attr.height]=\"node[1]['height']\"\n                        [attr.rx]=\"node[1]['rx']\"\n                        [attr.ry]=\"node[1]['ry']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('line') {\n                    <svg:line\n                        [attr.x1]=\"node[1]['x1']\"\n                        [attr.y1]=\"node[1]['y1']\"\n                        [attr.x2]=\"node[1]['x2']\"\n                        [attr.y2]=\"node[1]['y2']\"\n                        [attr.stroke]=\"node[1]['stroke']\"\n                        [attr.stroke-opacity]=\"node[1]['strokeOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('polyline') {\n                    <svg:polyline\n                        [attr.points]=\"node[1]['points']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('polygon') {\n                    <svg:polygon\n                        [attr.points]=\"node[1]['points']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('ellipse') {\n                    <svg:ellipse\n                        [attr.cx]=\"node[1]['cx']\"\n                        [attr.cy]=\"node[1]['cy']\"\n                        [attr.rx]=\"node[1]['rx']\"\n                        [attr.ry]=\"node[1]['ry']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n            }\n        }\n"
		}]
	}], () => [], null);
})();
// node_modules/@primeicons/core/dist/esm/icons/search.mjs
var e$2 = {
	name: "search",
	meta: { tags: [
		"search",
		"find",
		"query",
		"lookup",
		"discover"
	] },
	svg: {
		xmlns: "http://www.w3.org/2000/svg",
		width: 20,
		height: 20,
		viewBox: "0 0 20 20",
		fill: "none"
	},
	nodes: [["path", {
		d: "M8.76953 1.25C12.9226 1.25 16.2898 4.61656 16.29 8.76953C16.29 10.576 15.6515 12.2326 14.5898 13.5293L18.5303 17.4697C18.823 17.7626 18.8231 18.2374 18.5303 18.5303C18.2374 18.8231 17.7626 18.823 17.4697 18.5303L13.5293 14.5898C12.2326 15.6515 10.576 16.29 8.76953 16.29C4.61656 16.2898 1.25 12.9226 1.25 8.76953C1.25025 4.61672 4.61672 1.25025 8.76953 1.25ZM8.76953 2.75C5.44515 2.75025 2.75025 5.44514 2.75 8.76953C2.75 12.0941 5.44499 14.7898 8.76953 14.79C12.0943 14.79 14.79 12.0943 14.79 8.76953C14.7898 5.445 12.0941 2.75 8.76953 2.75Z",
		fill: "currentColor",
		key: "nt0lcw"
	}]]
};
// node_modules/@primeicons/angular/fesm2022/primeicons-angular-search.mjs
var Search = class Search extends CoreIcon {
	constructor() {
		super();
		this._icon = e$2;
	}
	static ɵfac = function Search_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || Search)();
	};
	static ɵcmp = (function() {
		const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
		function Search_For_1_Case_0_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "path");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Search_For_1_Case_1_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "circle");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Search_For_1_Case_2_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "rect");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Search_For_1_Case_3_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "line");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Search_For_1_Case_4_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "polyline");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Search_For_1_Case_5_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "polygon");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Search_For_1_Case_6_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "ellipse");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Search_For_1_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, Search_For_1_Case_0_Template, 1, 9, "path")(1, Search_For_1_Case_1_Template, 1, 6, "circle")(2, Search_For_1_Case_2_Template, 1, 9, "rect")(3, Search_For_1_Case_3_Template, 1, 7, "line")(4, Search_For_1_Case_4_Template, 1, 4, "polyline")(5, Search_For_1_Case_5_Template, 1, 4, "polygon")(6, Search_For_1_Case_6_Template, 1, 7, "ellipse");
			if (rf & 2) {
				let tmp_10_0 = void 0;
				const node_r1 = ctx.$implicit;
				ɵɵconditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
			}
		}
		return /*@__PURE__*/ ɵɵdefineComponent({
			type: Search,
			selectors: [[
				"svg",
				"data-p-icon",
				"search"
			]],
			features: [ɵɵInheritDefinitionFeature],
			decls: 2,
			vars: 0,
			template: function Search_Template(rf, ctx) {
				if (rf & 1) ɵɵrepeaterCreate(0, Search_For_1_Template, 7, 1, null, null, _forTrack0);
				if (rf & 2) ɵɵrepeater(ctx.iconNodes());
			},
			encapsulation: 2,
			changeDetection: 1
		});
	})();
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Search, [{
		type: Component,
		args: [{
			selector: "svg[data-p-icon=\"search\"]",
			standalone: true,
			template: "\n        @for (node of iconNodes(); track node[1]['key'] || $index) {\n            @switch (node[0]) {\n                @case ('path') {\n                    <svg:path\n                        [attr.d]=\"node[1]['d']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.fill-rule]=\"node[1]['fillRule']\"\n                        [attr.clip-rule]=\"node[1]['clipRule']\"\n                        [attr.stroke]=\"node[1]['stroke']\"\n                        [attr.stroke-width]=\"node[1]['strokeWidth']\"\n                        [attr.stroke-opacity]=\"node[1]['strokeOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('circle') {\n                    <svg:circle\n                        [attr.cx]=\"node[1]['cx']\"\n                        [attr.cy]=\"node[1]['cy']\"\n                        [attr.r]=\"node[1]['r']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('rect') {\n                    <svg:rect\n                        [attr.x]=\"node[1]['x']\"\n                        [attr.y]=\"node[1]['y']\"\n                        [attr.width]=\"node[1]['width']\"\n                        [attr.height]=\"node[1]['height']\"\n                        [attr.rx]=\"node[1]['rx']\"\n                        [attr.ry]=\"node[1]['ry']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('line') {\n                    <svg:line\n                        [attr.x1]=\"node[1]['x1']\"\n                        [attr.y1]=\"node[1]['y1']\"\n                        [attr.x2]=\"node[1]['x2']\"\n                        [attr.y2]=\"node[1]['y2']\"\n                        [attr.stroke]=\"node[1]['stroke']\"\n                        [attr.stroke-opacity]=\"node[1]['strokeOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('polyline') {\n                    <svg:polyline\n                        [attr.points]=\"node[1]['points']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('polygon') {\n                    <svg:polygon\n                        [attr.points]=\"node[1]['points']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('ellipse') {\n                    <svg:ellipse\n                        [attr.cx]=\"node[1]['cx']\"\n                        [attr.cy]=\"node[1]['cy']\"\n                        [attr.rx]=\"node[1]['rx']\"\n                        [attr.ry]=\"node[1]['ry']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n            }\n        }\n"
		}]
	}], () => [], null);
})();
// node_modules/primeng/fesm2022/primeng-autofocus.mjs
var AutoFocus = class AutoFocus extends BaseComponent {
	autofocus = input(false, {
		...ngDevMode ? { debugName: "autofocus" } : /* istanbul ignore next */ {},
		alias: "pAutoFocus",
		transform: booleanAttribute
	});
	focused = false;
	host = inject(ElementRef);
	onAfterContentChecked() {
		if (this.autofocus() === false) this.host.nativeElement.removeAttribute("autofocus");
		else this.host.nativeElement.setAttribute("autofocus", true);
		if (!this.focused) this.autoFocus();
	}
	onAfterViewChecked() {
		if (!this.focused) this.autoFocus();
	}
	autoFocus() {
		if (isPlatformBrowser(this.platformId) && this.autofocus()) setTimeout(() => {
			const focusableElements = DomHandler.getFocusableElements(this.host?.nativeElement);
			if (focusableElements.length === 0) this.host.nativeElement.focus();
			if (focusableElements.length > 0) focusableElements[0].focus();
			this.focused = true;
		});
	}
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵAutoFocus_BaseFactory = void 0;
		return function AutoFocus_Factory(__ngFactoryType__) {
			return (ɵAutoFocus_BaseFactory || (ɵAutoFocus_BaseFactory = ɵɵgetInheritedFactory(AutoFocus)))(__ngFactoryType__ || AutoFocus);
		};
	})();
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: AutoFocus,
		selectors: [[
			"",
			"pAutoFocus",
			""
		]],
		inputs: { autofocus: [
			1,
			"pAutoFocus",
			"autofocus"
		] },
		features: [ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoFocus, [{
		type: Directive,
		args: [{
			selector: "[pAutoFocus]",
			standalone: true
		}]
	}], null, { autofocus: [{
		type: Input,
		args: [{
			isSignal: true,
			alias: "pAutoFocus",
			required: false
		}]
	}] });
})();
var AutoFocusModule = class AutoFocusModule {
	static ɵfac = function AutoFocusModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || AutoFocusModule)();
	};
	static ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({
		type: AutoFocusModule,
		imports: [AutoFocus],
		exports: [AutoFocus]
	});
	static ɵinj = /*@__PURE__*/ ɵɵdefineInjector({});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoFocusModule, [{
		type: NgModule,
		args: [{
			imports: [AutoFocus],
			exports: [AutoFocus]
		}]
	}], null, null);
})();
// node_modules/primeng/fesm2022/primeng-baseeditableholder.mjs
var BaseEditableHolder = class BaseEditableHolder extends BaseModelHolder {
	required = input(void 0, {
		...ngDevMode ? { debugName: "required" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	invalid = input(void 0, {
		...ngDevMode ? { debugName: "invalid" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	disabled = input(void 0, {
		...ngDevMode ? { debugName: "disabled" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	name = input(...ngDevMode ? [void 0, { debugName: "name" }] : /* istanbul ignore next */ []);
	_disabled = signal(false, ...ngDevMode ? [{ debugName: "_disabled" }] : /* istanbul ignore next */ []);
	$disabled = computed(() => this.disabled() || this._disabled(), ...ngDevMode ? [{ debugName: "$disabled" }] : /* istanbul ignore next */ []);
	onModelChange = () => {};
	onModelTouched = () => {};
	writeDisabledState(value) {
		this._disabled.set(value);
	}
	writeControlValue(value, setModelValue) {}
	writeValue(value) {
		this.writeControlValue(value, this.writeModelValue.bind(this));
	}
	registerOnChange(fn) {
		this.onModelChange = fn;
	}
	registerOnTouched(fn) {
		this.onModelTouched = fn;
	}
	setDisabledState(val) {
		this.writeDisabledState(val);
		this.cd.markForCheck();
	}
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵBaseEditableHolder_BaseFactory = void 0;
		return function BaseEditableHolder_Factory(__ngFactoryType__) {
			return (ɵBaseEditableHolder_BaseFactory || (ɵBaseEditableHolder_BaseFactory = ɵɵgetInheritedFactory(BaseEditableHolder)))(__ngFactoryType__ || BaseEditableHolder);
		};
	})();
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: BaseEditableHolder,
		inputs: {
			required: [1, "required"],
			invalid: [1, "invalid"],
			disabled: [1, "disabled"],
			name: [1, "name"]
		},
		features: [ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseEditableHolder, [{
		type: Directive,
		args: [{ standalone: true }]
	}], null, {
		required: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "required",
				required: false
			}]
		}],
		invalid: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "invalid",
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
		name: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "name",
				required: false
			}]
		}]
	});
})();
// node_modules/primeng/fesm2022/primeng-baseinput.mjs
var BaseInput = class BaseInput extends BaseEditableHolder {
	pcFluid = inject(Fluid, {
		optional: true,
		host: true,
		skipSelf: true
	});
	fluid = input(void 0, {
		...ngDevMode ? { debugName: "fluid" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	variant = input(...ngDevMode ? [void 0, { debugName: "variant" }] : /* istanbul ignore next */ []);
	size = input(...ngDevMode ? [void 0, { debugName: "size" }] : /* istanbul ignore next */ []);
	inputSize = input(...ngDevMode ? [void 0, { debugName: "inputSize" }] : /* istanbul ignore next */ []);
	pattern = input(...ngDevMode ? [void 0, { debugName: "pattern" }] : /* istanbul ignore next */ []);
	min = input(...ngDevMode ? [void 0, { debugName: "min" }] : /* istanbul ignore next */ []);
	max = input(...ngDevMode ? [void 0, { debugName: "max" }] : /* istanbul ignore next */ []);
	step = input(...ngDevMode ? [void 0, { debugName: "step" }] : /* istanbul ignore next */ []);
	minlength = input(...ngDevMode ? [void 0, { debugName: "minlength" }] : /* istanbul ignore next */ []);
	maxlength = input(...ngDevMode ? [void 0, { debugName: "maxlength" }] : /* istanbul ignore next */ []);
	$variant = computed(() => this.variant() || this.config.inputVariant() || void 0, ...ngDevMode ? [{ debugName: "$variant" }] : /* istanbul ignore next */ []);
	$pattern = computed(() => {
		const v = this.pattern();
		return typeof v === "string" && v.length > 0 ? v : void 0;
	}, ...ngDevMode ? [{ debugName: "$pattern" }] : /* istanbul ignore next */ []);
	get hasFluid() {
		return this.fluid() ?? !!this.pcFluid;
	}
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵBaseInput_BaseFactory = void 0;
		return function BaseInput_Factory(__ngFactoryType__) {
			return (ɵBaseInput_BaseFactory || (ɵBaseInput_BaseFactory = ɵɵgetInheritedFactory(BaseInput)))(__ngFactoryType__ || BaseInput);
		};
	})();
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: BaseInput,
		inputs: {
			fluid: [1, "fluid"],
			variant: [1, "variant"],
			size: [1, "size"],
			inputSize: [1, "inputSize"],
			pattern: [1, "pattern"],
			min: [1, "min"],
			max: [1, "max"],
			step: [1, "step"],
			minlength: [1, "minlength"],
			maxlength: [1, "maxlength"]
		},
		features: [ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseInput, [{
		type: Directive,
		args: [{ standalone: true }]
	}], null, {
		fluid: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "fluid",
				required: false
			}]
		}],
		variant: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "variant",
				required: false
			}]
		}],
		size: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "size",
				required: false
			}]
		}],
		inputSize: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "inputSize",
				required: false
			}]
		}],
		pattern: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pattern",
				required: false
			}]
		}],
		min: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "min",
				required: false
			}]
		}],
		max: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "max",
				required: false
			}]
		}],
		step: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "step",
				required: false
			}]
		}],
		minlength: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "minlength",
				required: false
			}]
		}],
		maxlength: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "maxlength",
				required: false
			}]
		}]
	});
})();
// node_modules/primeng/fesm2022/primeng-overlay.mjs
var inlineStyles = {
	root: ({ instance }) => {
		return {
			position: "absolute",
			top: "0",
			...instance.modal() ? instance.$overlayResponsiveOptions()?.style : instance.$overlayOptions()?.style,
			...instance.style()
		};
	},
	content: ({ instance }) => {
		return {
			...instance.modal() ? instance.$overlayResponsiveOptions()?.contentStyle : instance.$overlayOptions()?.contentStyle,
			...instance.contentStyle()
		};
	}
};
var style$1 = `
.p-overlay-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-content {
    transform-origin: inherit;
    will-change: transform;
}

/* Github Issue #18560 */
.p-component-overlay.p-component {
    position: relative;
}

.p-overlay-modal > .p-overlay-content {
    z-index: 1;
    width: 90%;
}

/* Position */
/* top */
.p-overlay-top {
    align-items: flex-start;
}
.p-overlay-top-start {
    align-items: flex-start;
    justify-content: flex-start;
}
.p-overlay-top-end {
    align-items: flex-start;
    justify-content: flex-end;
}

/* bottom */
.p-overlay-bottom {
    align-items: flex-end;
}
.p-overlay-bottom-start {
    align-items: flex-end;
    justify-content: flex-start;
}
.p-overlay-bottom-end {
    align-items: flex-end;
    justify-content: flex-end;
}

/* left */
.p-overlay-left {
    justify-content: flex-start;
}
.p-overlay-left-start {
    justify-content: flex-start;
    align-items: flex-start;
}
.p-overlay-left-end {
    justify-content: flex-start;
    align-items: flex-end;
}

/* right */
.p-overlay-right {
    justify-content: flex-end;
}
.p-overlay-right-start {
    justify-content: flex-end;
    align-items: flex-start;
}
.p-overlay-right-end {
    justify-content: flex-end;
    align-items: flex-end;
}

.p-overlay-content ~ .p-overlay-content {
    display: none;
}
`;
var classes$2 = {
	host: "p-overlay-host",
	root: ({ instance }) => {
		const modal = instance.modal();
		const dir = instance.overlayResponsiveDirection();
		return ["p-overlay p-component", {
			"p-overlay-modal p-overlay-mask p-overlay-mask-enter-active": modal,
			"p-overlay-center": modal && dir === "center",
			"p-overlay-top": modal && dir === "top",
			"p-overlay-top-start": modal && dir === "top-start",
			"p-overlay-top-end": modal && dir === "top-end",
			"p-overlay-bottom": modal && dir === "bottom",
			"p-overlay-bottom-start": modal && dir === "bottom-start",
			"p-overlay-bottom-end": modal && dir === "bottom-end",
			"p-overlay-left": modal && dir === "left",
			"p-overlay-left-start": modal && dir === "left-start",
			"p-overlay-left-end": modal && dir === "left-end",
			"p-overlay-right": modal && dir === "right",
			"p-overlay-right-start": modal && dir === "right-start",
			"p-overlay-right-end": modal && dir === "right-end"
		}];
	},
	content: "p-overlay-content"
};
var OverlayStyle = class OverlayStyle extends BaseStyle {
	name = "overlay";
	style = style$1;
	classes = classes$2;
	inlineStyles = inlineStyles;
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵOverlayStyle_BaseFactory = void 0;
		return function OverlayStyle_Factory(__ngFactoryType__) {
			return (ɵOverlayStyle_BaseFactory || (ɵOverlayStyle_BaseFactory = ɵɵgetInheritedFactory(OverlayStyle)))(__ngFactoryType__ || OverlayStyle);
		};
	})();
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: OverlayStyle,
		factory: OverlayStyle.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayStyle, [{ type: Injectable }], null, null);
})();
var OVERLAY_INSTANCE = new InjectionToken("OVERLAY_INSTANCE");
var Overlay = class Overlay extends BaseComponent {
	componentName = "Overlay";
	$pcOverlay = inject(OVERLAY_INSTANCE, {
		optional: true,
		skipSelf: true
	}) ?? void 0;
	hostName = input("", ...ngDevMode ? [{ debugName: "hostName" }] : /* istanbul ignore next */ []);
	visible = model(false, ...ngDevMode ? [{ debugName: "visible" }] : /* istanbul ignore next */ []);
	mode = input(...ngDevMode ? [void 0, { debugName: "mode" }] : /* istanbul ignore next */ []);
	style = input(...ngDevMode ? [void 0, { debugName: "style" }] : /* istanbul ignore next */ []);
	styleClass = input(...ngDevMode ? [void 0, { debugName: "styleClass" }] : /* istanbul ignore next */ []);
	contentStyle = input(...ngDevMode ? [void 0, { debugName: "contentStyle" }] : /* istanbul ignore next */ []);
	contentStyleClass = input(...ngDevMode ? [void 0, { debugName: "contentStyleClass" }] : /* istanbul ignore next */ []);
	target = input(...ngDevMode ? [void 0, { debugName: "target" }] : /* istanbul ignore next */ []);
	autoZIndex = input(...ngDevMode ? [void 0, { debugName: "autoZIndex" }] : /* istanbul ignore next */ []);
	baseZIndex = input(...ngDevMode ? [void 0, { debugName: "baseZIndex" }] : /* istanbul ignore next */ []);
	listener = input(...ngDevMode ? [void 0, { debugName: "listener" }] : /* istanbul ignore next */ []);
	responsive = input(...ngDevMode ? [void 0, { debugName: "responsive" }] : /* istanbul ignore next */ []);
	options = input(...ngDevMode ? [void 0, { debugName: "options" }] : /* istanbul ignore next */ []);
	appendTo = input(void 0, ...ngDevMode ? [{ debugName: "appendTo" }] : /* istanbul ignore next */ []);
	inline = input(false, ...ngDevMode ? [{ debugName: "inline" }] : /* istanbul ignore next */ []);
	motionOptions = input(void 0, ...ngDevMode ? [{ debugName: "motionOptions" }] : /* istanbul ignore next */ []);
	onBeforeShow = output();
	onShow = output();
	onBeforeHide = output();
	onHide = output();
	onAnimationStart = output();
	onAnimationDone = output();
	onBeforeEnter = output();
	onEnter = output();
	onAfterEnter = output();
	onBeforeLeave = output();
	onLeave = output();
	onAfterLeave = output();
	overlayViewChild = viewChild("overlay", ...ngDevMode ? [{ debugName: "overlayViewChild" }] : /* istanbul ignore next */ []);
	contentViewChild = viewChild("content", ...ngDevMode ? [{ debugName: "contentViewChild" }] : /* istanbul ignore next */ []);
	contentTemplate = contentChild("content", {
		...ngDevMode ? { debugName: "contentTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	hostAttrSelector = input(...ngDevMode ? [void 0, { debugName: "hostAttrSelector" }] : /* istanbul ignore next */ []);
	$appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{ debugName: "$appendTo" }] : /* istanbul ignore next */ []);
	$overlayOptions = computed(() => ({
		...this.config?.overlayOptions,
		...this.options()
	}), ...ngDevMode ? [{ debugName: "$overlayOptions" }] : /* istanbul ignore next */ []);
	$overlayResponsiveOptions = computed(() => ({
		...this.$overlayOptions()?.responsive,
		...this.responsive()
	}), ...ngDevMode ? [{ debugName: "$overlayResponsiveOptions" }] : /* istanbul ignore next */ []);
	overlayResponsiveDirection = computed(() => this.$overlayResponsiveOptions()?.direction || "center", ...ngDevMode ? [{ debugName: "overlayResponsiveDirection" }] : /* istanbul ignore next */ []);
	$mode = computed(() => this.mode() || this.$overlayOptions()?.mode, ...ngDevMode ? [{ debugName: "$mode" }] : /* istanbul ignore next */ []);
	mergedStyleClass = computed(() => this.cn(this.styleClass(), this.modal() ? this.$overlayResponsiveOptions()?.styleClass : this.$overlayOptions()?.styleClass), ...ngDevMode ? [{ debugName: "mergedStyleClass" }] : /* istanbul ignore next */ []);
	mergedContentStyleClass = computed(() => this.cn(this.contentStyleClass(), this.modal() ? this.$overlayResponsiveOptions()?.contentStyleClass : this.$overlayOptions()?.contentStyleClass), ...ngDevMode ? [{ debugName: "mergedContentStyleClass" }] : /* istanbul ignore next */ []);
	$target = computed(() => {
		const value = this.target() || this.$overlayOptions()?.target;
		return value === void 0 ? "@prev" : value;
	}, ...ngDevMode ? [{ debugName: "$target" }] : /* istanbul ignore next */ []);
	$autoZIndex = computed(() => {
		const value = this.autoZIndex() || this.$overlayOptions()?.autoZIndex;
		return value === void 0 ? true : value;
	}, ...ngDevMode ? [{ debugName: "$autoZIndex" }] : /* istanbul ignore next */ []);
	$baseZIndex = computed(() => {
		const value = this.baseZIndex() || this.$overlayOptions()?.baseZIndex;
		return value === void 0 ? 0 : value;
	}, ...ngDevMode ? [{ debugName: "$baseZIndex" }] : /* istanbul ignore next */ []);
	$listener = computed(() => this.listener() || this.$overlayOptions()?.listener, ...ngDevMode ? [{ debugName: "$listener" }] : /* istanbul ignore next */ []);
	modal = computed(() => {
		if (isPlatformBrowser(this.platformId)) return this.$mode() === "modal" || this.$overlayResponsiveOptions() && this.document.defaultView?.matchMedia(this.$overlayResponsiveOptions().media?.replace("@media", "") || `(max-width: ${this.$overlayResponsiveOptions().breakpoint})`).matches;
	}, ...ngDevMode ? [{ debugName: "modal" }] : /* istanbul ignore next */ []);
	overlayMode = computed(() => this.$mode() || (this.modal() ? "modal" : "overlay"), ...ngDevMode ? [{ debugName: "overlayMode" }] : /* istanbul ignore next */ []);
	overlayEl = computed(() => this.overlayViewChild()?.nativeElement, ...ngDevMode ? [{ debugName: "overlayEl" }] : /* istanbul ignore next */ []);
	contentEl = computed(() => this.contentViewChild()?.nativeElement, ...ngDevMode ? [{ debugName: "contentEl" }] : /* istanbul ignore next */ []);
	targetEl = computed(() => Y$1(this.$target(), this.el?.nativeElement), ...ngDevMode ? [{ debugName: "targetEl" }] : /* istanbul ignore next */ []);
	computedMotionOptions = computed(() => ({
		...this.ptm("motion"),
		...this.motionOptions() || this.$overlayOptions()?.motionOptions
	}), ...ngDevMode ? [{ debugName: "computedMotionOptions" }] : /* istanbul ignore next */ []);
	modalVisible = signal(false, ...ngDevMode ? [{ debugName: "modalVisible" }] : /* istanbul ignore next */ []);
	isOverlayClicked = false;
	isOverlayContentClicked = false;
	scrollHandler;
	documentClickListener;
	documentResizeListener;
	_componentStyle = inject(OverlayStyle);
	bindDirectiveInstance = inject(Bind, { self: true });
	documentKeyboardListener;
	parentDragSubscription = null;
	transformOptions = {
		default: "scaleY(0.8)",
		center: "scale(0.7)",
		top: "translate3d(0px, -100%, 0px)",
		"top-start": "translate3d(0px, -100%, 0px)",
		"top-end": "translate3d(0px, -100%, 0px)",
		bottom: "translate3d(0px, 100%, 0px)",
		"bottom-start": "translate3d(0px, 100%, 0px)",
		"bottom-end": "translate3d(0px, 100%, 0px)",
		left: "translate3d(-100%, 0px, 0px)",
		"left-start": "translate3d(-100%, 0px, 0px)",
		"left-end": "translate3d(-100%, 0px, 0px)",
		right: "translate3d(100%, 0px, 0px)",
		"right-start": "translate3d(100%, 0px, 0px)",
		"right-end": "translate3d(100%, 0px, 0px)"
	};
	overlayService = inject(OverlayService);
	constructor() {
		super();
		effect(() => {
			if (this.visible() && !this.modalVisible()) this.modalVisible.set(true);
		});
	}
	container = signal(void 0, ...ngDevMode ? [{ debugName: "container" }] : /* istanbul ignore next */ []);
	onAfterViewChecked() {
		this.bindDirectiveInstance.setAttrs(this.ptm("host"));
	}
	show(overlay, isFocus = false) {
		this.onVisibleChange(true);
		this.handleEvents("onShow", {
			overlay: overlay || this.overlayEl(),
			target: this.targetEl(),
			mode: this.overlayMode()
		});
		if (isFocus) Wt(this.targetEl());
		if (this.modal()) this.$blockBodyScroll();
	}
	hide(overlay, isFocus = false) {
		if (!this.visible()) return;
		else {
			this.onVisibleChange(false);
			this.handleEvents("onHide", {
				overlay: overlay || this.overlayEl(),
				target: this.targetEl(),
				mode: this.overlayMode()
			});
			if (isFocus) Wt(this.targetEl());
			if (this.modal()) this.$unblockBodyScroll();
		}
	}
	onVisibleChange(visible) {
		this.visible.set(visible);
	}
	onOverlayClick() {
		this.isOverlayClicked = true;
	}
	onOverlayContentClick(event) {
		this.overlayService.add({
			originalEvent: event,
			target: this.targetEl()
		});
		this.isOverlayContentClicked = true;
	}
	onOverlayBeforeEnter(event) {
		event.element.style.removeProperty("pointer-events");
		this.handleEvents("onBeforeShow", {
			overlay: this.overlayEl(),
			target: this.targetEl(),
			mode: this.overlayMode()
		});
		this.container.set(this.overlayEl() || event.element);
		this.show(this.overlayEl(), true);
		markInstance(this.overlayEl(), this.hostAttrSelector());
		this.appendOverlay();
		this.alignOverlay();
		this.bindParentDragListener();
		this.setZIndex();
		this.handleEvents("onBeforeEnter", event);
	}
	onOverlayEnter(event) {
		this.handleEvents("onEnter", event);
	}
	onOverlayAfterEnter(event) {
		this.bindListeners();
		this.handleEvents("onAfterEnter", event);
	}
	onOverlayBeforeLeave(event) {
		event.element.style.pointerEvents = "none";
		this.handleEvents("onBeforeHide", {
			overlay: this.overlayEl(),
			target: this.targetEl(),
			mode: this.overlayMode()
		});
		this.handleEvents("onBeforeLeave", event);
	}
	onOverlayLeave(event) {
		this.handleEvents("onLeave", event);
	}
	onOverlayAfterLeave(event) {
		this.hide(this.overlayEl(), true);
		this.container.set(null);
		this.unbindListeners();
		this.appendOverlay();
		zindexutils_default.clear(this.overlayEl());
		this.modalVisible.set(false);
		this.cd.markForCheck();
		this.handleEvents("onAfterLeave", event);
	}
	handleEvents(name, params) {
		this[name].emit(params);
		const opts = this.options();
		if (opts && opts[name]) opts[name](params);
		if (this.config?.overlayOptions && (this.config?.overlayOptions)[name]) (this.config?.overlayOptions)[name](params);
	}
	setZIndex() {
		if (this.$autoZIndex()) zindexutils_default.set(this.overlayMode(), this.overlayEl(), this.$baseZIndex() + this.config?.zIndex[this.overlayMode()]);
	}
	appendOverlay() {
		if (this.$appendTo() && this.$appendTo() !== "self") {
			if (this.$appendTo() === "body") Ct(this.$overlayParent(this.document.body, this.overlayEl()), this.overlayEl());
			else Ct(this.$overlayParent(this.$appendTo(), this.overlayEl()), this.overlayEl());
		}
	}
	alignOverlay() {
		if (!this.modal()) {
			if (this.overlayEl() && this.targetEl()) {
				this.overlayEl().style.minWidth = L(this.targetEl()) + "px";
				if (this.$appendTo() === "self") G(this.overlayEl(), this.targetEl());
				else z$1(this.overlayEl(), this.targetEl());
			}
		}
	}
	bindListeners() {
		this.bindScrollListener();
		this.bindDocumentClickListener();
		this.bindDocumentResizeListener();
		this.bindDocumentKeyboardListener();
	}
	unbindListeners() {
		this.unbindScrollListener();
		this.unbindDocumentClickListener();
		this.unbindDocumentResizeListener();
		this.unbindDocumentKeyboardListener();
		this.unbindParentDragListener();
	}
	bindParentDragListener() {
		if (!this.parentDragSubscription && this.$appendTo() !== "self" && this.targetEl) this.parentDragSubscription = this.overlayService.parentDragObservable.subscribe((container) => {
			if (container.contains(this.targetEl())) this.hide(this.overlayEl(), true);
		});
	}
	unbindParentDragListener() {
		if (this.parentDragSubscription) {
			this.parentDragSubscription.unsubscribe();
			this.parentDragSubscription = null;
		}
	}
	bindScrollListener() {
		if (!this.scrollHandler) this.scrollHandler = new ConnectedOverlayScrollHandler(this.targetEl(), (event) => {
			if (this.$listener() ? this.$listener()(event, {
				type: "scroll",
				mode: this.overlayMode(),
				valid: true
			}) : true) this.hide(event, true);
		});
		this.scrollHandler.bindScrollListener();
	}
	unbindScrollListener() {
		if (this.scrollHandler) this.scrollHandler.unbindScrollListener();
	}
	bindDocumentClickListener() {
		if (!this.documentClickListener) this.documentClickListener = this.renderer.listen(this.document, "click", (event) => {
			const node = getEventTarget(event, this.targetEl());
			const isOutsideClicked = !(this.targetEl() && (this.targetEl().isSameNode(node) || !this.isOverlayClicked && this.targetEl().contains(node))) && !this.isOverlayContentClicked;
			if (this.$listener() ? this.$listener()(event, {
				type: "outside",
				mode: this.overlayMode(),
				valid: event.which !== 3 && isOutsideClicked
			}) : isOutsideClicked) this.hide(event);
			this.isOverlayClicked = this.isOverlayContentClicked = false;
		});
	}
	unbindDocumentClickListener() {
		if (this.documentClickListener) {
			this.documentClickListener();
			this.documentClickListener = null;
		}
	}
	bindDocumentResizeListener() {
		if (!this.documentResizeListener) this.documentResizeListener = this.renderer.listen(this.document.defaultView, "resize", (event) => {
			if (this.$listener() ? this.$listener()(event, {
				type: "resize",
				mode: this.overlayMode(),
				valid: !fe()
			}) : !fe()) this.hide(event, true);
		});
	}
	unbindDocumentResizeListener() {
		if (this.documentResizeListener) {
			this.documentResizeListener();
			this.documentResizeListener = null;
		}
	}
	bindDocumentKeyboardListener() {
		if (this.documentKeyboardListener) return;
		this.documentKeyboardListener = this.renderer.listen(this.document.defaultView, "keydown", (event) => {
			if (this.$overlayOptions().hideOnEscape === false || event.code !== "Escape") return;
			if (this.$listener() ? this.$listener()(event, {
				type: "keydown",
				mode: this.overlayMode(),
				valid: !fe()
			}) : !fe()) this.hide(event, true);
		});
	}
	unbindDocumentKeyboardListener() {
		if (this.documentKeyboardListener) {
			this.documentKeyboardListener();
			this.documentKeyboardListener = null;
		}
	}
	onDestroy() {
		this.hide(this.overlayEl(), true);
		if (this.overlayEl() && this.$appendTo() !== "self") {
			this.renderer.appendChild(this.el.nativeElement, this.overlayEl());
			zindexutils_default.clear(this.overlayEl());
		}
		if (this.scrollHandler) {
			this.scrollHandler.destroy();
			this.scrollHandler = null;
		}
		this.unbindListeners();
	}
	static ɵfac = function Overlay_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || Overlay)();
	};
	static ɵcmp = (function() {
		const _c0 = ["content"];
		const _c1 = ["overlay"];
		const _c2 = ["*", "*"];
		const _c3 = () => ({ mode: null });
		const _c4 = (a0) => ({ $implicit: a0 });
		const _c5 = (a0) => ({ mode: a0 });
		function Overlay_Conditional_0_ng_container_1_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Overlay_Conditional_0_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojection(0);
				ɵɵtemplate(1, Overlay_Conditional_0_ng_container_1_Template, 1, 0, "ng-container", 2);
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵadvance();
				ɵɵproperty("ngTemplateOutlet", ctx_r0.contentTemplate())("ngTemplateOutletContext", ɵɵpureFunction1(3, _c4, ɵɵpureFunction0(2, _c3)));
			}
		}
		function Overlay_Conditional_1_Conditional_0_ng_container_6_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Overlay_Conditional_1_Conditional_0_Template(rf, ctx) {
			if (rf & 1) {
				const _r2 = ɵɵgetCurrentView();
				ɵɵelementStart(0, "div", 4, 0);
				ɵɵlistener("click", function Overlay_Conditional_1_Conditional_0_Template_div_click_0_listener() {
					ɵɵrestoreView(_r2);
					const ctx_r0 = ɵɵnextContext(2);
					return ɵɵresetView(ctx_r0.onOverlayClick());
				});
				ɵɵelementStart(2, "p-motion", 5);
				ɵɵlistener("onBeforeEnter", function Overlay_Conditional_1_Conditional_0_Template_p_motion_onBeforeEnter_2_listener($event) {
					ɵɵrestoreView(_r2);
					const ctx_r0 = ɵɵnextContext(2);
					return ɵɵresetView(ctx_r0.onOverlayBeforeEnter($event));
				})("onEnter", function Overlay_Conditional_1_Conditional_0_Template_p_motion_onEnter_2_listener($event) {
					ɵɵrestoreView(_r2);
					const ctx_r0 = ɵɵnextContext(2);
					return ɵɵresetView(ctx_r0.onOverlayEnter($event));
				})("onAfterEnter", function Overlay_Conditional_1_Conditional_0_Template_p_motion_onAfterEnter_2_listener($event) {
					ɵɵrestoreView(_r2);
					const ctx_r0 = ɵɵnextContext(2);
					return ɵɵresetView(ctx_r0.onOverlayAfterEnter($event));
				})("onBeforeLeave", function Overlay_Conditional_1_Conditional_0_Template_p_motion_onBeforeLeave_2_listener($event) {
					ɵɵrestoreView(_r2);
					const ctx_r0 = ɵɵnextContext(2);
					return ɵɵresetView(ctx_r0.onOverlayBeforeLeave($event));
				})("onLeave", function Overlay_Conditional_1_Conditional_0_Template_p_motion_onLeave_2_listener($event) {
					ɵɵrestoreView(_r2);
					const ctx_r0 = ɵɵnextContext(2);
					return ɵɵresetView(ctx_r0.onOverlayLeave($event));
				})("onAfterLeave", function Overlay_Conditional_1_Conditional_0_Template_p_motion_onAfterLeave_2_listener($event) {
					ɵɵrestoreView(_r2);
					const ctx_r0 = ɵɵnextContext(2);
					return ɵɵresetView(ctx_r0.onOverlayAfterLeave($event));
				});
				ɵɵelementStart(3, "div", 4, 1);
				ɵɵlistener("click", function Overlay_Conditional_1_Conditional_0_Template_div_click_3_listener($event) {
					ɵɵrestoreView(_r2);
					const ctx_r0 = ɵɵnextContext(2);
					return ɵɵresetView(ctx_r0.onOverlayContentClick($event));
				});
				ɵɵprojection(5, 1);
				ɵɵtemplate(6, Overlay_Conditional_1_Conditional_0_ng_container_6_Template, 1, 0, "ng-container", 2);
				ɵɵelementEnd()()();
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(2);
				ɵɵstyleMap(ctx_r0.sx("root"));
				ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("root"), ctx_r0.mergedStyleClass()));
				ɵɵproperty("pBind", ctx_r0.ptm("root"));
				ɵɵadvance(2);
				ɵɵproperty("visible", ctx_r0.visible())("name", ctx_r0.pcn("p-anchored-overlay"))("appear", true)("options", ctx_r0.computedMotionOptions());
				ɵɵadvance();
				ɵɵstyleMap(ctx_r0.sx("content"));
				ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("content"), ctx_r0.mergedContentStyleClass()));
				ɵɵproperty("pBind", ctx_r0.ptm("content"));
				ɵɵadvance(3);
				ɵɵproperty("ngTemplateOutlet", ctx_r0.contentTemplate())("ngTemplateOutletContext", ɵɵpureFunction1(18, _c4, ɵɵpureFunction1(16, _c5, ctx_r0.overlayMode())));
			}
		}
		function Overlay_Conditional_1_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, Overlay_Conditional_1_Conditional_0_Template, 7, 20, "div", 3);
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵconditional(ctx_r0.modalVisible() ? 0 : -1);
			}
		}
		return /*@__PURE__*/ ɵɵdefineComponent({
			type: Overlay,
			selectors: [["p-overlay"]],
			contentQueries: function Overlay_ContentQueries(rf, ctx, dirIndex) {
				if (rf & 1) ɵɵcontentQuerySignal(dirIndex, ctx.contentTemplate, _c0, 4);
				if (rf & 2) ɵɵqueryAdvance();
			},
			viewQuery: function Overlay_Query(rf, ctx) {
				if (rf & 1) ɵɵviewQuerySignal(ctx.overlayViewChild, _c1, 5)(ctx.contentViewChild, _c0, 5);
				if (rf & 2) ɵɵqueryAdvance(2);
			},
			inputs: {
				hostName: [1, "hostName"],
				visible: [1, "visible"],
				mode: [1, "mode"],
				style: [1, "style"],
				styleClass: [1, "styleClass"],
				contentStyle: [1, "contentStyle"],
				contentStyleClass: [1, "contentStyleClass"],
				target: [1, "target"],
				autoZIndex: [1, "autoZIndex"],
				baseZIndex: [1, "baseZIndex"],
				listener: [1, "listener"],
				responsive: [1, "responsive"],
				options: [1, "options"],
				appendTo: [1, "appendTo"],
				inline: [1, "inline"],
				motionOptions: [1, "motionOptions"],
				hostAttrSelector: [1, "hostAttrSelector"]
			},
			outputs: {
				visible: "visibleChange",
				onBeforeShow: "onBeforeShow",
				onShow: "onShow",
				onBeforeHide: "onBeforeHide",
				onHide: "onHide",
				onAnimationStart: "onAnimationStart",
				onAnimationDone: "onAnimationDone",
				onBeforeEnter: "onBeforeEnter",
				onEnter: "onEnter",
				onAfterEnter: "onAfterEnter",
				onBeforeLeave: "onBeforeLeave",
				onLeave: "onLeave",
				onAfterLeave: "onAfterLeave"
			},
			features: [
				ɵɵProvidersFeature([
					OverlayStyle,
					{
						provide: OVERLAY_INSTANCE,
						useExisting: Overlay
					},
					{
						provide: PARENT_INSTANCE,
						useExisting: Overlay
					}
				]),
				ɵɵHostDirectivesFeature([Bind]),
				ɵɵInheritDefinitionFeature
			],
			ngContentSelectors: _c2,
			decls: 2,
			vars: 1,
			consts: [
				["overlay", ""],
				["content", ""],
				[
					4,
					"ngTemplateOutlet",
					"ngTemplateOutletContext"
				],
				[
					3,
					"class",
					"style",
					"pBind"
				],
				[
					3,
					"click",
					"pBind"
				],
				[
					3,
					"onBeforeEnter",
					"onEnter",
					"onAfterEnter",
					"onBeforeLeave",
					"onLeave",
					"onAfterLeave",
					"visible",
					"name",
					"appear",
					"options"
				]
			],
			template: function Overlay_Template(rf, ctx) {
				if (rf & 1) {
					ɵɵprojectionDef(_c2);
					ɵɵconditionalCreate(0, Overlay_Conditional_0_Template, 2, 5)(1, Overlay_Conditional_1_Template, 1, 1);
				}
				if (rf & 2) ɵɵconditional(ctx.inline() ? 0 : 1);
			},
			dependencies: [
				NgTemplateOutlet,
				SharedModule,
				Bind,
				MotionModule,
				Motion
			],
			encapsulation: 2
		});
	})();
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Overlay, [{
		type: Component,
		args: [{
			selector: "p-overlay",
			standalone: true,
			imports: [
				NgTemplateOutlet,
				SharedModule,
				Bind,
				MotionModule
			],
			hostDirectives: [Bind],
			template: `
        @if (inline()) {
            <ng-content />
            <ng-container *ngTemplateOutlet="contentTemplate(); context: { $implicit: { mode: null } }" />
        } @else {
            @if (modalVisible()) {
                <div #overlay [class]="cn(cx('root'), mergedStyleClass())" [style]="sx('root')" [pBind]="ptm('root')" (click)="onOverlayClick()">
                    <p-motion
                        [visible]="visible()"
                        [name]="pcn('p-anchored-overlay')"
                        [appear]="true"
                        [options]="computedMotionOptions()"
                        (onBeforeEnter)="onOverlayBeforeEnter($event)"
                        (onEnter)="onOverlayEnter($event)"
                        (onAfterEnter)="onOverlayAfterEnter($event)"
                        (onBeforeLeave)="onOverlayBeforeLeave($event)"
                        (onLeave)="onOverlayLeave($event)"
                        (onAfterLeave)="onOverlayAfterLeave($event)"
                    >
                        <div #content [class]="cn(cx('content'), mergedContentStyleClass())" [style]="sx('content')" [pBind]="ptm('content')" (click)="onOverlayContentClick($event)">
                            <ng-content />
                            <ng-container *ngTemplateOutlet="contentTemplate(); context: { $implicit: { mode: overlayMode() } }" />
                        </div>
                    </p-motion>
                </div>
            }
        }
    `,
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			providers: [
				OverlayStyle,
				{
					provide: OVERLAY_INSTANCE,
					useExisting: Overlay
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: Overlay
				}
			]
		}]
	}], () => [], {
		hostName: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "hostName",
				required: false
			}]
		}],
		visible: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "visible",
				required: false
			}]
		}, {
			type: Output,
			args: ["visibleChange"]
		}],
		mode: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "mode",
				required: false
			}]
		}],
		style: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "style",
				required: false
			}]
		}],
		styleClass: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "styleClass",
				required: false
			}]
		}],
		contentStyle: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "contentStyle",
				required: false
			}]
		}],
		contentStyleClass: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "contentStyleClass",
				required: false
			}]
		}],
		target: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "target",
				required: false
			}]
		}],
		autoZIndex: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "autoZIndex",
				required: false
			}]
		}],
		baseZIndex: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "baseZIndex",
				required: false
			}]
		}],
		listener: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "listener",
				required: false
			}]
		}],
		responsive: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "responsive",
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
		appendTo: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "appendTo",
				required: false
			}]
		}],
		inline: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "inline",
				required: false
			}]
		}],
		motionOptions: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "motionOptions",
				required: false
			}]
		}],
		onBeforeShow: [{
			type: Output,
			args: ["onBeforeShow"]
		}],
		onShow: [{
			type: Output,
			args: ["onShow"]
		}],
		onBeforeHide: [{
			type: Output,
			args: ["onBeforeHide"]
		}],
		onHide: [{
			type: Output,
			args: ["onHide"]
		}],
		onAnimationStart: [{
			type: Output,
			args: ["onAnimationStart"]
		}],
		onAnimationDone: [{
			type: Output,
			args: ["onAnimationDone"]
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
		overlayViewChild: [{
			type: ViewChild,
			args: ["overlay", { isSignal: true }]
		}],
		contentViewChild: [{
			type: ViewChild,
			args: ["content", { isSignal: true }]
		}],
		contentTemplate: [{
			type: ContentChild,
			args: ["content", {
				descendants: false,
				isSignal: true
			}]
		}],
		hostAttrSelector: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "hostAttrSelector",
				required: false
			}]
		}]
	});
})();
var OverlayModule = class OverlayModule {
	static ɵfac = function OverlayModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || OverlayModule)();
	};
	static ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({
		type: OverlayModule,
		imports: [Overlay, SharedModule],
		exports: [Overlay, SharedModule]
	});
	static ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ imports: [
		Overlay,
		SharedModule,
		SharedModule
	] });
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayModule, [{
		type: NgModule,
		args: [{
			imports: [Overlay, SharedModule],
			exports: [Overlay, SharedModule]
		}]
	}], null, null);
})();
// node_modules/@primeicons/core/dist/esm/icons/spinner.mjs
var e$1 = {
	name: "spinner",
	meta: { tags: [
		"spinner",
		"loading",
		"process",
		"wait",
		"buffering"
	] },
	svg: {
		xmlns: "http://www.w3.org/2000/svg",
		width: 20,
		height: 20,
		viewBox: "0 0 20 20",
		fill: "none"
	},
	nodes: [["path", {
		d: "M1 10C1 5.02579 5.02579 1 10 1C12.3905 1 14.562 1.9393 16.1738 3.45312C16.4756 3.73669 16.4905 4.21178 16.207 4.51367C15.9235 4.81558 15.4484 4.83039 15.1465 4.54688C13.7983 3.2807 11.9895 2.5 10 2.5C5.85421 2.5 2.5 5.85421 2.5 10C2.5 14.1458 5.85421 17.5 10 17.5C14.1458 17.5 17.5 14.1458 17.5 10C17.5 9.58579 17.8358 9.25 18.25 9.25C18.6642 9.25 19 9.58579 19 10C19 14.9742 14.9742 19 10 19C5.02579 19 1 14.9742 1 10Z",
		fill: "currentColor",
		key: "p4wko0"
	}]]
};
// node_modules/@primeicons/angular/fesm2022/primeicons-angular-spinner.mjs
var Spinner = class Spinner extends CoreIcon {
	constructor() {
		super();
		this._icon = e$1;
	}
	static ɵfac = function Spinner_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || Spinner)();
	};
	static ɵcmp = (function() {
		const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
		function Spinner_For_1_Case_0_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "path");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Spinner_For_1_Case_1_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "circle");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Spinner_For_1_Case_2_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "rect");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Spinner_For_1_Case_3_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "line");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Spinner_For_1_Case_4_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "polyline");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Spinner_For_1_Case_5_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "polygon");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Spinner_For_1_Case_6_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "ellipse");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Spinner_For_1_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, Spinner_For_1_Case_0_Template, 1, 9, "path")(1, Spinner_For_1_Case_1_Template, 1, 6, "circle")(2, Spinner_For_1_Case_2_Template, 1, 9, "rect")(3, Spinner_For_1_Case_3_Template, 1, 7, "line")(4, Spinner_For_1_Case_4_Template, 1, 4, "polyline")(5, Spinner_For_1_Case_5_Template, 1, 4, "polygon")(6, Spinner_For_1_Case_6_Template, 1, 7, "ellipse");
			if (rf & 2) {
				let tmp_10_0 = void 0;
				const node_r1 = ctx.$implicit;
				ɵɵconditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
			}
		}
		return /*@__PURE__*/ ɵɵdefineComponent({
			type: Spinner,
			selectors: [[
				"svg",
				"data-p-icon",
				"spinner"
			]],
			features: [ɵɵInheritDefinitionFeature],
			decls: 2,
			vars: 0,
			template: function Spinner_Template(rf, ctx) {
				if (rf & 1) ɵɵrepeaterCreate(0, Spinner_For_1_Template, 7, 1, null, null, _forTrack0);
				if (rf & 2) ɵɵrepeater(ctx.iconNodes());
			},
			encapsulation: 2,
			changeDetection: 1
		});
	})();
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Spinner, [{
		type: Component,
		args: [{
			selector: "svg[data-p-icon=\"spinner\"]",
			standalone: true,
			template: "\n        @for (node of iconNodes(); track node[1]['key'] || $index) {\n            @switch (node[0]) {\n                @case ('path') {\n                    <svg:path\n                        [attr.d]=\"node[1]['d']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.fill-rule]=\"node[1]['fillRule']\"\n                        [attr.clip-rule]=\"node[1]['clipRule']\"\n                        [attr.stroke]=\"node[1]['stroke']\"\n                        [attr.stroke-width]=\"node[1]['strokeWidth']\"\n                        [attr.stroke-opacity]=\"node[1]['strokeOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('circle') {\n                    <svg:circle\n                        [attr.cx]=\"node[1]['cx']\"\n                        [attr.cy]=\"node[1]['cy']\"\n                        [attr.r]=\"node[1]['r']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('rect') {\n                    <svg:rect\n                        [attr.x]=\"node[1]['x']\"\n                        [attr.y]=\"node[1]['y']\"\n                        [attr.width]=\"node[1]['width']\"\n                        [attr.height]=\"node[1]['height']\"\n                        [attr.rx]=\"node[1]['rx']\"\n                        [attr.ry]=\"node[1]['ry']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('line') {\n                    <svg:line\n                        [attr.x1]=\"node[1]['x1']\"\n                        [attr.y1]=\"node[1]['y1']\"\n                        [attr.x2]=\"node[1]['x2']\"\n                        [attr.y2]=\"node[1]['y2']\"\n                        [attr.stroke]=\"node[1]['stroke']\"\n                        [attr.stroke-opacity]=\"node[1]['strokeOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('polyline') {\n                    <svg:polyline\n                        [attr.points]=\"node[1]['points']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('polygon') {\n                    <svg:polygon\n                        [attr.points]=\"node[1]['points']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('ellipse') {\n                    <svg:ellipse\n                        [attr.cx]=\"node[1]['cx']\"\n                        [attr.cy]=\"node[1]['cy']\"\n                        [attr.rx]=\"node[1]['rx']\"\n                        [attr.ry]=\"node[1]['ry']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n            }\n        }\n"
		}]
	}], () => [], null);
})();
// node_modules/primeng/fesm2022/primeng-scroller.mjs
var css = `
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: dt('virtualscroller.loader.mask.background');
    color: dt('virtualscroller.loader.mask.color');
}

.p-virtualscroller-loader-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-loading-icon {
    font-size: dt('virtualscroller.loader.icon.size');
    width: dt('virtualscroller.loader.icon.size');
    height: dt('virtualscroller.loader.icon.size');
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}
`;
var classes$1 = {
	root: ({ instance }) => ["p-virtualscroller", {
		"p-virtualscroller-inline": instance.inline(),
		"p-virtualscroller-both p-both-scroll": instance.both(),
		"p-virtualscroller-horizontal p-horizontal-scroll": instance.horizontal()
	}],
	content: "p-virtualscroller-content",
	spacer: "p-virtualscroller-spacer",
	loader: ({ instance }) => ["p-virtualscroller-loader", { "p-virtualscroller-loader-mask": !instance.loaderTemplate() }],
	loadingIcon: "p-virtualscroller-loading-icon"
};
var ScrollerStyle = class ScrollerStyle extends BaseStyle {
	name = "virtualscroller";
	css = css;
	classes = classes$1;
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵScrollerStyle_BaseFactory = void 0;
		return function ScrollerStyle_Factory(__ngFactoryType__) {
			return (ɵScrollerStyle_BaseFactory || (ɵScrollerStyle_BaseFactory = ɵɵgetInheritedFactory(ScrollerStyle)))(__ngFactoryType__ || ScrollerStyle);
		};
	})();
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: ScrollerStyle,
		factory: ScrollerStyle.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollerStyle, [{ type: Injectable }], null, null);
})();
var ScrollerClasses;
(function(ScrollerClasses) {
	ScrollerClasses["root"] = "p-virtualscroller";
	ScrollerClasses["content"] = "p-virtualscroller-content";
	ScrollerClasses["spacer"] = "p-virtualscroller-spacer";
	ScrollerClasses["loader"] = "p-virtualscroller-loader";
	ScrollerClasses["loadingIcon"] = "p-virtualscroller-loading-icon";
})(ScrollerClasses || (ScrollerClasses = {}));
var SCROLLER_INSTANCE = new InjectionToken("SCROLLER_INSTANCE");
var Scroller = class Scroller extends BaseComponent {
	componentName = "VirtualScroller";
	bindDirectiveInstance = inject(Bind, { self: true });
	$pcScroller = inject(SCROLLER_INSTANCE, {
		optional: true,
		skipSelf: true
	}) ?? void 0;
	hostName = input("", ...ngDevMode ? [{ debugName: "hostName" }] : /* istanbul ignore next */ []);
	id = input(...ngDevMode ? [void 0, { debugName: "id" }] : /* istanbul ignore next */ []);
	style = input(...ngDevMode ? [void 0, { debugName: "style" }] : /* istanbul ignore next */ []);
	styleClass = input(...ngDevMode ? [void 0, { debugName: "styleClass" }] : /* istanbul ignore next */ []);
	tabindex = input(0, ...ngDevMode ? [{ debugName: "tabindex" }] : /* istanbul ignore next */ []);
	items = input(...ngDevMode ? [void 0, { debugName: "items" }] : /* istanbul ignore next */ []);
	itemSize = input(0, ...ngDevMode ? [{ debugName: "itemSize" }] : /* istanbul ignore next */ []);
	scrollHeight = input(...ngDevMode ? [void 0, { debugName: "scrollHeight" }] : /* istanbul ignore next */ []);
	scrollWidth = input(...ngDevMode ? [void 0, { debugName: "scrollWidth" }] : /* istanbul ignore next */ []);
	orientation = input("vertical", ...ngDevMode ? [{ debugName: "orientation" }] : /* istanbul ignore next */ []);
	step = input(0, ...ngDevMode ? [{ debugName: "step" }] : /* istanbul ignore next */ []);
	delay = input(0, ...ngDevMode ? [{ debugName: "delay" }] : /* istanbul ignore next */ []);
	resizeDelay = input(10, ...ngDevMode ? [{ debugName: "resizeDelay" }] : /* istanbul ignore next */ []);
	appendOnly = input(false, ...ngDevMode ? [{ debugName: "appendOnly" }] : /* istanbul ignore next */ []);
	inline = input(false, ...ngDevMode ? [{ debugName: "inline" }] : /* istanbul ignore next */ []);
	lazy = input(false, ...ngDevMode ? [{ debugName: "lazy" }] : /* istanbul ignore next */ []);
	disabled = input(false, ...ngDevMode ? [{ debugName: "disabled" }] : /* istanbul ignore next */ []);
	loaderDisabled = input(false, ...ngDevMode ? [{ debugName: "loaderDisabled" }] : /* istanbul ignore next */ []);
	columns = input(...ngDevMode ? [void 0, { debugName: "columns" }] : /* istanbul ignore next */ []);
	showSpacer = input(true, ...ngDevMode ? [{ debugName: "showSpacer" }] : /* istanbul ignore next */ []);
	showLoader = input(false, ...ngDevMode ? [{ debugName: "showLoader" }] : /* istanbul ignore next */ []);
	numToleratedItems = input(...ngDevMode ? [void 0, { debugName: "numToleratedItems" }] : /* istanbul ignore next */ []);
	loading = input(...ngDevMode ? [void 0, { debugName: "loading" }] : /* istanbul ignore next */ []);
	autoSize = input(false, ...ngDevMode ? [{ debugName: "autoSize" }] : /* istanbul ignore next */ []);
	trackBy = input(...ngDevMode ? [void 0, { debugName: "trackBy" }] : /* istanbul ignore next */ []);
	options = input(...ngDevMode ? [void 0, { debugName: "options" }] : /* istanbul ignore next */ []);
	_id = computed(() => this.options()?.id ?? this.id(), ...ngDevMode ? [{ debugName: "_id" }] : /* istanbul ignore next */ []);
	_style = computed(() => this.options()?.style ?? this.style(), ...ngDevMode ? [{ debugName: "_style" }] : /* istanbul ignore next */ []);
	_styleClass = computed(() => this.options()?.styleClass ?? this.styleClass(), ...ngDevMode ? [{ debugName: "_styleClass" }] : /* istanbul ignore next */ []);
	_tabindex = computed(() => this.options()?.tabindex ?? this.tabindex(), ...ngDevMode ? [{ debugName: "_tabindex" }] : /* istanbul ignore next */ []);
	_items = computed(() => this.options()?.items ?? this.items(), ...ngDevMode ? [{ debugName: "_items" }] : /* istanbul ignore next */ []);
	_itemSize = computed(() => this.options()?.itemSize ?? this.itemSize(), ...ngDevMode ? [{ debugName: "_itemSize" }] : /* istanbul ignore next */ []);
	_scrollHeight = computed(() => this.options()?.scrollHeight ?? this.scrollHeight(), ...ngDevMode ? [{ debugName: "_scrollHeight" }] : /* istanbul ignore next */ []);
	_scrollWidth = computed(() => this.options()?.scrollWidth ?? this.scrollWidth(), ...ngDevMode ? [{ debugName: "_scrollWidth" }] : /* istanbul ignore next */ []);
	_orientation = computed(() => this.options()?.orientation ?? this.orientation(), ...ngDevMode ? [{ debugName: "_orientation" }] : /* istanbul ignore next */ []);
	_step = computed(() => this.options()?.step ?? this.step(), ...ngDevMode ? [{ debugName: "_step" }] : /* istanbul ignore next */ []);
	_delay = computed(() => this.options()?.delay ?? this.delay(), ...ngDevMode ? [{ debugName: "_delay" }] : /* istanbul ignore next */ []);
	_resizeDelay = computed(() => this.options()?.resizeDelay ?? this.resizeDelay(), ...ngDevMode ? [{ debugName: "_resizeDelay" }] : /* istanbul ignore next */ []);
	_appendOnly = computed(() => this.options()?.appendOnly ?? this.appendOnly(), ...ngDevMode ? [{ debugName: "_appendOnly" }] : /* istanbul ignore next */ []);
	_inline = computed(() => this.options()?.inline ?? this.inline(), ...ngDevMode ? [{ debugName: "_inline" }] : /* istanbul ignore next */ []);
	_lazy = computed(() => this.options()?.lazy ?? this.lazy(), ...ngDevMode ? [{ debugName: "_lazy" }] : /* istanbul ignore next */ []);
	_disabled = computed(() => this.options()?.disabled ?? this.disabled(), ...ngDevMode ? [{ debugName: "_disabled" }] : /* istanbul ignore next */ []);
	_loaderDisabled = computed(() => this.options()?.loaderDisabled ?? this.loaderDisabled(), ...ngDevMode ? [{ debugName: "_loaderDisabled" }] : /* istanbul ignore next */ []);
	_columns = computed(() => this.options()?.columns ?? this.columns(), ...ngDevMode ? [{ debugName: "_columns" }] : /* istanbul ignore next */ []);
	_showSpacer = computed(() => this.options()?.showSpacer ?? this.showSpacer(), ...ngDevMode ? [{ debugName: "_showSpacer" }] : /* istanbul ignore next */ []);
	_showLoader = computed(() => this.options()?.showLoader ?? this.showLoader(), ...ngDevMode ? [{ debugName: "_showLoader" }] : /* istanbul ignore next */ []);
	_numToleratedItems = computed(() => this.options()?.numToleratedItems ?? this.numToleratedItems(), ...ngDevMode ? [{ debugName: "_numToleratedItems" }] : /* istanbul ignore next */ []);
	_loading = computed(() => this.options()?.loading ?? this.loading(), ...ngDevMode ? [{ debugName: "_loading" }] : /* istanbul ignore next */ []);
	_autoSize = computed(() => this.options()?.autoSize ?? this.autoSize(), ...ngDevMode ? [{ debugName: "_autoSize" }] : /* istanbul ignore next */ []);
	_trackBy = computed(() => this.options()?.trackBy ?? this.trackBy(), ...ngDevMode ? [{ debugName: "_trackBy" }] : /* istanbul ignore next */ []);
	contentStyleClass = computed(() => this.options()?.contentStyleClass, ...ngDevMode ? [{ debugName: "contentStyleClass" }] : /* istanbul ignore next */ []);
	onLazyLoad = output();
	onScroll = output();
	onScrollIndexChange = output();
	elementViewChild = viewChild("element", ...ngDevMode ? [{ debugName: "elementViewChild" }] : /* istanbul ignore next */ []);
	contentViewChild = viewChild("content", ...ngDevMode ? [{ debugName: "contentViewChild" }] : /* istanbul ignore next */ []);
	hostHeight = signal(void 0, ...ngDevMode ? [{ debugName: "hostHeight" }] : /* istanbul ignore next */ []);
	contentTemplate = contentChild("content", {
		...ngDevMode ? { debugName: "contentTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	itemTemplate = contentChild("item", {
		...ngDevMode ? { debugName: "itemTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	loaderTemplate = contentChild("loader", {
		...ngDevMode ? { debugName: "loaderTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	loaderIconTemplate = contentChild("loadericon", {
		...ngDevMode ? { debugName: "loaderIconTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	d_loading = false;
	d_numToleratedItems;
	contentEl;
	vertical = computed(() => this._orientation() === "vertical", ...ngDevMode ? [{ debugName: "vertical" }] : /* istanbul ignore next */ []);
	horizontal = computed(() => this._orientation() === "horizontal", ...ngDevMode ? [{ debugName: "horizontal" }] : /* istanbul ignore next */ []);
	both = computed(() => this._orientation() === "both", ...ngDevMode ? [{ debugName: "both" }] : /* istanbul ignore next */ []);
	get loadedItems() {
		const items = this._items();
		if (items && !this.d_loading) {
			if (this.both()) return items.slice(this._appendOnly() ? 0 : this.first.rows, this.last.rows).map((item) => {
				if (this._columns()) return item;
				else if (Array.isArray(item)) return item.slice(this._appendOnly() ? 0 : this.first.cols, this.last.cols);
				else return item;
			});
			else if (this.horizontal() && this._columns()) return items;
			else return items.slice(this._appendOnly() ? 0 : this.first, this.last);
		}
		return [];
	}
	get loadedRows() {
		return this.d_loading ? this._loaderDisabled() ? this.loaderArr : [] : this.loadedItems;
	}
	get loadedColumns() {
		const columns = this._columns();
		if (columns && (this.both() || this.horizontal())) return this.d_loading && this._loaderDisabled() ? this.both() ? this.loaderArr[0] : this.loaderArr : columns.slice(this.both() ? this.first.cols : this.first, this.both() ? this.last.cols : this.last);
		return columns;
	}
	first = 0;
	last = 0;
	page = 0;
	isRangeChanged = false;
	numItemsInViewport = 0;
	lastScrollPos = 0;
	lazyLoadState = {};
	loaderArr = [];
	spacerStyle;
	contentStyle;
	scrollTimeout;
	resizeTimeout;
	_destroyed = false;
	initialized = false;
	windowResizeListener;
	defaultWidth;
	defaultHeight;
	defaultContentWidth;
	defaultContentHeight;
	_componentStyle = inject(ScrollerStyle);
	constructor() {
		super();
		effect(() => {
			if (this._scrollHeight() === "100%") this.hostHeight.set("100%");
		});
		effect(() => {
			const loading = this._loading();
			untracked(() => {
				if (this._lazy() && loading !== void 0 && loading !== this.d_loading) this.d_loading = loading;
			});
		});
		effect(() => {
			this._orientation();
			untracked(() => {
				this.lastScrollPos = this.both() ? {
					top: 0,
					left: 0
				} : 0;
			});
		});
		effect(() => {
			const numT = this._numToleratedItems();
			untracked(() => {
				if (numT !== void 0 && numT !== this.d_numToleratedItems) this.d_numToleratedItems = numT;
			});
		});
		effect(() => {
			this._itemSize();
			this._scrollHeight();
			this._scrollWidth();
			untracked(() => {
				if (this.initialized) {
					this.init();
					this.calculateAutoSize();
				}
			});
		});
		effect(() => {
			this._items();
			untracked(() => {
				if (this.initialized && !this._lazy()) this.init();
			});
		});
		effect(() => {
			const opts = this.options();
			untracked(() => {
				if (opts?.contentStyle !== void 0) this.contentStyle = opts.contentStyle;
			});
		});
		effect((onCleanup) => {
			const element = this.elementViewChild()?.nativeElement;
			if (element && isPlatformBrowser(this.platformId)) onCleanup(this.renderer.listen(element, "scroll", (event) => this.onElementScroll(event)));
		});
	}
	_loaderIconContext = computed(() => ({ options: { styleClass: this.pcn("p-virtualscroller-loading-icon") } }), ...ngDevMode ? [{ debugName: "_loaderIconContext" }] : /* istanbul ignore next */ []);
	get loaderIconContext() {
		return this._loaderIconContext();
	}
	onInit() {
		this.setInitialState();
	}
	onAfterViewInit() {
		Promise.resolve().then(() => {
			this.viewInit();
		});
	}
	onAfterViewChecked() {
		this.bindDirectiveInstance.setAttrs(this.ptm("host"));
		if (!this.initialized) this.viewInit();
	}
	onDestroy() {
		this._destroyed = true;
		this.unbindResizeListener();
		if (this.scrollTimeout) clearTimeout(this.scrollTimeout);
		if (this.resizeTimeout) clearTimeout(this.resizeTimeout);
		this.contentEl = null;
		this.initialized = false;
	}
	viewInit() {
		if (isPlatformBrowser(this.platformId) && !this.initialized) {
			if (pt(this.elementViewChild()?.nativeElement)) {
				this.setInitialState();
				this.setContentEl(this.contentEl);
				this.init();
				this.defaultWidth = Zt(this.elementViewChild()?.nativeElement);
				this.defaultHeight = Dt(this.elementViewChild()?.nativeElement);
				this.defaultContentWidth = Zt(this.contentEl);
				this.defaultContentHeight = Dt(this.contentEl);
				this.initialized = true;
			}
		}
	}
	init() {
		if (!this._disabled()) {
			this.bindResizeListener();
			setTimeout(() => {
				this.setSpacerSize();
				this.setSize();
				this.calculateOptions();
				this.calculateAutoSize();
				this.cd.detectChanges();
			}, 1);
		}
	}
	setContentEl(el) {
		this.contentEl = el || this.contentViewChild()?.nativeElement || nt(this.elementViewChild()?.nativeElement, this.psel(".p-virtualscroller-content"));
	}
	setInitialState() {
		this.first = this.both() ? {
			rows: 0,
			cols: 0
		} : 0;
		this.last = this.both() ? {
			rows: 0,
			cols: 0
		} : 0;
		this.numItemsInViewport = this.both() ? {
			rows: 0,
			cols: 0
		} : 0;
		this.lastScrollPos = this.both() ? {
			top: 0,
			left: 0
		} : 0;
		if (this.d_loading === void 0 || this.d_loading === false) this.d_loading = this._loading() || false;
		this.d_numToleratedItems = this._numToleratedItems();
		this.loaderArr = this.loaderArr.length > 0 ? this.loaderArr : [];
	}
	getElementRef() {
		return this.elementViewChild();
	}
	getPageByFirst(first) {
		return Math.floor(((first ?? this.first) + this.d_numToleratedItems * 4) / (this._step() || 1));
	}
	isPageChanged(first) {
		return this._step() ? this.page !== this.getPageByFirst(first ?? this.first) : true;
	}
	scrollTo(options) {
		this.elementViewChild()?.nativeElement?.scrollTo(options);
	}
	scrollToIndex(index, behavior = "auto") {
		if (this.both() ? index.every((i) => i > -1) : index > -1) {
			const first = this.first;
			const { scrollTop = 0, scrollLeft = 0 } = this.elementViewChild()?.nativeElement ?? {};
			const { numToleratedItems } = this.calculateNumItems();
			const contentPos = this.getContentPosition();
			const itemSize = this._itemSize();
			const calculateFirst = (_index = 0, _numT) => _index <= _numT ? 0 : _index;
			const calculateCoord = (_first, _size, _cpos) => _first * _size + _cpos;
			const scrollTo = (left = 0, top = 0) => this.scrollTo({
				left,
				top,
				behavior
			});
			let newFirst = this.both() ? {
				rows: 0,
				cols: 0
			} : 0;
			let isRangeChanged = false, isScrollChanged = false;
			if (this.both()) {
				newFirst = {
					rows: calculateFirst(index[0], numToleratedItems[0]),
					cols: calculateFirst(index[1], numToleratedItems[1])
				};
				scrollTo(calculateCoord(newFirst.cols, itemSize[1], contentPos.left), calculateCoord(newFirst.rows, itemSize[0], contentPos.top));
				isScrollChanged = this.lastScrollPos.top !== scrollTop || this.lastScrollPos.left !== scrollLeft;
				isRangeChanged = newFirst.rows !== first.rows || newFirst.cols !== first.cols;
			} else {
				newFirst = calculateFirst(index, numToleratedItems);
				if (this.horizontal()) scrollTo(calculateCoord(newFirst, itemSize, contentPos.left), scrollTop);
				else scrollTo(scrollLeft, calculateCoord(newFirst, itemSize, contentPos.top));
				isScrollChanged = this.lastScrollPos !== (this.horizontal() ? scrollLeft : scrollTop);
				isRangeChanged = newFirst !== first;
			}
			this.isRangeChanged = isRangeChanged;
			if (isScrollChanged) this.first = newFirst;
		}
	}
	scrollInView(index, to, behavior = "auto") {
		if (to) {
			const { first, viewport } = this.getRenderedRange();
			const scrollTo = (left = 0, top = 0) => this.scrollTo({
				left,
				top,
				behavior
			});
			const isToStart = to === "to-start";
			const isToEnd = to === "to-end";
			if (isToStart) {
				if (this.both()) {
					if (viewport.first.rows - first.rows > index[0]) scrollTo(viewport.first.cols * this._itemSize()[1], (viewport.first.rows - 1) * this._itemSize()[0]);
					else if (viewport.first.cols - first.cols > index[1]) scrollTo((viewport.first.cols - 1) * this._itemSize()[1], viewport.first.rows * this._itemSize()[0]);
				} else if (viewport.first - first > index) {
					const pos = (viewport.first - 1) * this._itemSize();
					if (this.horizontal()) scrollTo(pos, 0);
					else scrollTo(0, pos);
				}
			} else if (isToEnd) {
				if (this.both()) {
					if (viewport.last.rows - first.rows <= index[0] + 1) scrollTo(viewport.first.cols * this._itemSize()[1], (viewport.first.rows + 1) * this._itemSize()[0]);
					else if (viewport.last.cols - first.cols <= index[1] + 1) scrollTo((viewport.first.cols + 1) * this._itemSize()[1], viewport.first.rows * this._itemSize()[0]);
				} else if (viewport.last - first <= index + 1) {
					const pos = (viewport.first + 1) * this._itemSize();
					if (this.horizontal()) scrollTo(pos, 0);
					else scrollTo(0, pos);
				}
			}
		} else this.scrollToIndex(index, behavior);
	}
	getRenderedRange() {
		const calculateFirstInViewport = (_pos, _size) => _size || _pos ? Math.floor(_pos / (_size || _pos)) : 0;
		let firstInViewport = this.first;
		let lastInViewport = 0;
		const el = this.elementViewChild()?.nativeElement;
		if (el) {
			const { scrollTop, scrollLeft } = el;
			if (this.both()) {
				firstInViewport = {
					rows: calculateFirstInViewport(scrollTop, this._itemSize()[0]),
					cols: calculateFirstInViewport(scrollLeft, this._itemSize()[1])
				};
				lastInViewport = {
					rows: firstInViewport.rows + this.numItemsInViewport.rows,
					cols: firstInViewport.cols + this.numItemsInViewport.cols
				};
			} else {
				firstInViewport = calculateFirstInViewport(this.horizontal() ? scrollLeft : scrollTop, this._itemSize());
				lastInViewport = firstInViewport + this.numItemsInViewport;
			}
		}
		return {
			first: this.first,
			last: this.last,
			viewport: {
				first: firstInViewport,
				last: lastInViewport
			}
		};
	}
	calculateNumItems() {
		const contentPos = this.getContentPosition();
		const el = this.elementViewChild()?.nativeElement;
		const contentWidth = (el ? el.offsetWidth - contentPos.left : 0) || 0;
		const contentHeight = (el ? el.offsetHeight - contentPos.top : 0) || 0;
		const calculateNumItemsInViewport = (_contentSize, _itemSize) => _itemSize || _contentSize ? Math.ceil(_contentSize / (_itemSize || _contentSize)) : 0;
		const calculateNumToleratedItems = (_numItems) => Math.ceil(_numItems / 2);
		const numItemsInViewport = this.both() ? {
			rows: calculateNumItemsInViewport(contentHeight, this._itemSize()[0]),
			cols: calculateNumItemsInViewport(contentWidth, this._itemSize()[1])
		} : calculateNumItemsInViewport(this.horizontal() ? contentWidth : contentHeight, this._itemSize());
		return {
			numItemsInViewport,
			numToleratedItems: this.d_numToleratedItems || (this.both() ? [calculateNumToleratedItems(numItemsInViewport.rows), calculateNumToleratedItems(numItemsInViewport.cols)] : calculateNumToleratedItems(numItemsInViewport))
		};
	}
	calculateOptions() {
		const { numItemsInViewport, numToleratedItems } = this.calculateNumItems();
		const calculateLast = (_first, _num, _numT, _isCols = false) => this.getLast(_first + _num + (_first < _numT ? 2 : 3) * _numT, _isCols);
		const first = this.first;
		const last = this.both() ? {
			rows: calculateLast(this.first.rows, numItemsInViewport.rows, numToleratedItems[0]),
			cols: calculateLast(this.first.cols, numItemsInViewport.cols, numToleratedItems[1], true)
		} : calculateLast(this.first, numItemsInViewport, numToleratedItems);
		this.last = last;
		this.numItemsInViewport = numItemsInViewport;
		this.d_numToleratedItems = numToleratedItems;
		if (this._showLoader()) this.loaderArr = this.both() ? Array.from({ length: numItemsInViewport.rows }).map(() => Array.from({ length: numItemsInViewport.cols })) : Array.from({ length: numItemsInViewport });
		if (this._lazy()) Promise.resolve().then(() => {
			this.lazyLoadState = {
				first: this._step() ? this.both() ? {
					rows: 0,
					cols: first.cols
				} : 0 : first,
				last: Math.min(this._step() ? this._step() : this.last, this._items().length)
			};
			this.handleEvents("onLazyLoad", this.lazyLoadState);
		});
	}
	calculateAutoSize() {
		if (this._autoSize() && !this.d_loading) Promise.resolve().then(() => {
			if (this.contentEl) {
				const { scrollTop, scrollLeft } = this.elementViewChild().nativeElement;
				this.contentEl.style.minHeight = this.contentEl.style.minWidth = "auto";
				this.contentEl.style.position = "relative";
				this.elementViewChild().nativeElement.style.contain = "none";
				const [contentWidth, contentHeight] = [Zt(this.contentEl), Dt(this.contentEl)];
				if (contentWidth !== this.defaultContentWidth) this.elementViewChild().nativeElement.style.width = "";
				if (contentHeight !== this.defaultContentHeight) this.elementViewChild().nativeElement.style.height = "";
				const [width, height] = [Zt(this.elementViewChild().nativeElement), Dt(this.elementViewChild().nativeElement)];
				if (this.both() || this.horizontal()) this.elementViewChild().nativeElement.style.width = width < this.defaultWidth ? width + "px" : this._scrollWidth() || this.defaultWidth + "px";
				if (this.both() || this.vertical()) this.elementViewChild().nativeElement.style.height = height < this.defaultHeight ? height + "px" : this._scrollHeight() || this.defaultHeight + "px";
				this.contentEl.style.minHeight = this.contentEl.style.minWidth = "";
				this.contentEl.style.position = "";
				this.elementViewChild().nativeElement.style.contain = "";
				if (this.elementViewChild().nativeElement.scrollTop !== scrollTop || this.elementViewChild().nativeElement.scrollLeft !== scrollLeft) this.scrollTo({
					top: scrollTop,
					left: scrollLeft
				});
			}
		});
	}
	getLast(last = 0, isCols = false) {
		const items = this._items();
		const columns = this._columns();
		return items ? Math.min(isCols ? (columns || items[0]).length : items.length, last) : 0;
	}
	getContentPosition() {
		if (this.contentEl) {
			const style = getComputedStyle(this.contentEl);
			const left = parseFloat(style.paddingLeft) + Math.max(parseFloat(style.left) || 0, 0);
			const right = parseFloat(style.paddingRight) + Math.max(parseFloat(style.right) || 0, 0);
			const top = parseFloat(style.paddingTop) + Math.max(parseFloat(style.top) || 0, 0);
			const bottom = parseFloat(style.paddingBottom) + Math.max(parseFloat(style.bottom) || 0, 0);
			return {
				left,
				right,
				top,
				bottom,
				x: left + right,
				y: top + bottom
			};
		}
		return {
			left: 0,
			right: 0,
			top: 0,
			bottom: 0,
			x: 0,
			y: 0
		};
	}
	setSize() {
		const nativeElement = this.elementViewChild()?.nativeElement;
		if (nativeElement) {
			const parentElement = nativeElement.parentElement?.parentElement;
			const elementWidth = nativeElement.offsetWidth;
			const parentWidth = parentElement?.offsetWidth || 0;
			const width = this._scrollWidth() || `${elementWidth || parentWidth}px`;
			const elementHeight = nativeElement.offsetHeight;
			const parentHeight = parentElement?.offsetHeight || 0;
			const height = this._scrollHeight() || `${elementHeight || parentHeight}px`;
			const setProp = (_name, _value) => nativeElement.style[_name] = _value;
			if (this.both() || this.horizontal()) {
				setProp("height", height);
				setProp("width", width);
			} else setProp("height", height);
		}
	}
	setSpacerSize() {
		const items = this._items();
		if (items) {
			const contentPos = this.getContentPosition();
			const setProp = (_name, _value, _size, _cpos = 0) => this.spacerStyle = {
				...this.spacerStyle,
				[`${_name}`]: (_value || []).length * _size + _cpos + "px"
			};
			if (this.both()) {
				setProp("height", items, this._itemSize()[0], contentPos.y);
				setProp("width", this._columns() || items[1], this._itemSize()[1], contentPos.x);
			} else if (this.horizontal()) setProp("width", this._columns() || items, this._itemSize(), contentPos.x);
			else setProp("height", items, this._itemSize(), contentPos.y);
		}
	}
	setContentPosition(pos) {
		if (this.contentEl && !this._appendOnly()) {
			const first = pos ? pos.first : this.first;
			const calculateTranslateVal = (_first, _size) => _first * _size;
			const setTransform = (_x = 0, _y = 0) => this.contentStyle = {
				...this.contentStyle,
				transform: `translate3d(${_x}px, ${_y}px, 0)`
			};
			if (this.both()) setTransform(calculateTranslateVal(first.cols, this._itemSize()[1]), calculateTranslateVal(first.rows, this._itemSize()[0]));
			else {
				const translateVal = calculateTranslateVal(first, this._itemSize());
				if (this.horizontal()) setTransform(translateVal, 0);
				else setTransform(0, translateVal);
			}
		}
	}
	onScrollPositionChange(event) {
		const target = event.target;
		if (!target) throw new Error("Event target is null");
		const contentPos = this.getContentPosition();
		const calculateScrollPos = (_pos, _cpos) => _pos ? _pos > _cpos ? _pos - _cpos : _pos : 0;
		const calculateCurrentIndex = (_pos, _size) => _size || _pos ? Math.floor(_pos / (_size || _pos)) : 0;
		const calculateTriggerIndex = (_currentIndex, _first, _last, _num, _numT, _isScrollDownOrRight) => _currentIndex <= _numT ? _numT : _isScrollDownOrRight ? _last - _num - _numT : _first + _numT - 1;
		const calculateFirst = (_currentIndex, _triggerIndex, _first, _last, _num, _numT, _isScrollDownOrRight) => {
			if (_currentIndex <= _numT) return 0;
			else return Math.max(0, _isScrollDownOrRight ? _currentIndex < _triggerIndex ? _first : _currentIndex - _numT : _currentIndex > _triggerIndex ? _first : _currentIndex - 2 * _numT);
		};
		const calculateLast = (_currentIndex, _first, _last, _num, _numT, _isCols = false) => {
			let lastValue = _first + _num + 2 * _numT;
			if (_currentIndex >= _numT) lastValue += _numT + 1;
			return this.getLast(lastValue, _isCols);
		};
		const scrollTop = calculateScrollPos(target.scrollTop, contentPos.top);
		const scrollLeft = calculateScrollPos(target.scrollLeft, contentPos.left);
		let newFirst = this.both() ? {
			rows: 0,
			cols: 0
		} : 0;
		let newLast = this.last;
		let isRangeChanged = false;
		let newScrollPos = this.lastScrollPos;
		if (this.both()) {
			const isScrollDown = this.lastScrollPos.top <= scrollTop;
			const isScrollRight = this.lastScrollPos.left <= scrollLeft;
			if (!this._appendOnly() || this._appendOnly() && (isScrollDown || isScrollRight)) {
				const currentIndex = {
					rows: calculateCurrentIndex(scrollTop, this._itemSize()[0]),
					cols: calculateCurrentIndex(scrollLeft, this._itemSize()[1])
				};
				const triggerIndex = {
					rows: calculateTriggerIndex(currentIndex.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], isScrollDown),
					cols: calculateTriggerIndex(currentIndex.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], isScrollRight)
				};
				newFirst = {
					rows: calculateFirst(currentIndex.rows, triggerIndex.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], isScrollDown),
					cols: calculateFirst(currentIndex.cols, triggerIndex.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], isScrollRight)
				};
				newLast = {
					rows: calculateLast(currentIndex.rows, newFirst.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0]),
					cols: calculateLast(currentIndex.cols, newFirst.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], true)
				};
				isRangeChanged = newFirst.rows !== this.first.rows || newLast.rows !== this.last.rows || newFirst.cols !== this.first.cols || newLast.cols !== this.last.cols || this.isRangeChanged;
				newScrollPos = {
					top: scrollTop,
					left: scrollLeft
				};
			}
		} else {
			const scrollPos = this.horizontal() ? scrollLeft : scrollTop;
			const isScrollDownOrRight = this.lastScrollPos <= scrollPos;
			if (!this._appendOnly() || this._appendOnly() && isScrollDownOrRight) {
				const currentIndex = calculateCurrentIndex(scrollPos, this._itemSize());
				newFirst = calculateFirst(currentIndex, calculateTriggerIndex(currentIndex, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, isScrollDownOrRight), this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, isScrollDownOrRight);
				newLast = calculateLast(currentIndex, newFirst, this.last, this.numItemsInViewport, this.d_numToleratedItems);
				isRangeChanged = newFirst !== this.first || newLast !== this.last || this.isRangeChanged;
				newScrollPos = scrollPos;
			}
		}
		return {
			first: newFirst,
			last: newLast,
			isRangeChanged,
			scrollPos: newScrollPos
		};
	}
	onScrollChange(event) {
		const { first, last, isRangeChanged, scrollPos } = this.onScrollPositionChange(event);
		if (isRangeChanged) {
			const newState = {
				first,
				last
			};
			this.setContentPosition(newState);
			this.first = first;
			this.last = last;
			this.lastScrollPos = scrollPos;
			this.handleEvents("onScrollIndexChange", newState);
			if (this._lazy() && this.isPageChanged(first)) {
				const lazyLoadState = {
					first: this._step() ? Math.min(this.getPageByFirst(first) * this._step(), this._items().length - this._step()) : first,
					last: Math.min(this._step() ? (this.getPageByFirst(first) + 1) * this._step() : last, this._items().length)
				};
				if (this.lazyLoadState.first !== lazyLoadState.first || this.lazyLoadState.last !== lazyLoadState.last) this.handleEvents("onLazyLoad", lazyLoadState);
				this.lazyLoadState = lazyLoadState;
			}
		}
		return isRangeChanged;
	}
	onContainerScroll(event) {
		this.handleEvents("onScroll", { originalEvent: event });
		if (this._delay()) {
			if (this.scrollTimeout) clearTimeout(this.scrollTimeout);
			if (!this.d_loading && this._showLoader()) {
				const { isRangeChanged } = this.onScrollPositionChange(event);
				if (isRangeChanged || (this._step() ? this.isPageChanged() : false)) {
					this.d_loading = true;
					this.cd.detectChanges();
				}
			}
			this.scrollTimeout = setTimeout(() => {
				this.onScrollChange(event);
				if (this.d_loading && this._showLoader() && (!this._lazy() || this._loading() === void 0)) {
					this.d_loading = false;
					this.page = this.getPageByFirst();
				}
				this.cd.detectChanges();
			}, this._delay());
			return true;
		}
		return !this.d_loading && this.onScrollChange(event);
	}
	onElementScroll(event) {
		if (this.onContainerScroll(event) || this.options()?.onScroll) this.cd.markForCheck();
	}
	bindResizeListener() {
		if (isPlatformBrowser(this.platformId)) {
			if (!this.windowResizeListener) {
				const window = this.document.defaultView;
				const event = fe() ? "orientationchange" : "resize";
				this.windowResizeListener = this.renderer.listen(window, event, this.onWindowResize.bind(this));
			}
		}
	}
	unbindResizeListener() {
		if (this.windowResizeListener) {
			this.windowResizeListener();
			this.windowResizeListener = null;
		}
	}
	onWindowResize() {
		if (this.resizeTimeout) clearTimeout(this.resizeTimeout);
		this.resizeTimeout = setTimeout(() => {
			if (pt(this.elementViewChild()?.nativeElement)) {
				const [width, height] = [Zt(this.elementViewChild()?.nativeElement), Dt(this.elementViewChild()?.nativeElement)];
				const [isDiffWidth, isDiffHeight] = [width !== this.defaultWidth, height !== this.defaultHeight];
				if (this.both() ? isDiffWidth || isDiffHeight : this.horizontal() ? isDiffWidth : this.vertical() ? isDiffHeight : false) {
					this.d_numToleratedItems = this._numToleratedItems();
					this.defaultWidth = width;
					this.defaultHeight = height;
					this.defaultContentWidth = Zt(this.contentEl);
					this.defaultContentHeight = Dt(this.contentEl);
					this.init();
				}
			}
		}, this._resizeDelay());
	}
	handleEvents(name, params) {
		if (this._destroyed) return;
		const opts = this.options();
		return opts && opts[name] ? opts[name](params) : this[name].emit(params);
	}
	getContentTemplateContext() {
		return {
			$implicit: this.loadedItems,
			options: this.getContentOptions()
		};
	}
	getItemTemplateContext(item, index) {
		return {
			$implicit: item,
			options: this.getOptions(index)
		};
	}
	getLoaderTemplateContext(index) {
		return { options: this.getLoaderOptions(index, this.both() && { numCols: this.numItemsInViewport.cols }) };
	}
	getDisabledContentTemplateContext() {
		return {
			$implicit: this.items(),
			options: {
				rows: this._items() ?? void 0,
				columns: this.loadedColumns
			}
		};
	}
	getContentOptions() {
		return {
			contentStyleClass: this.pcn(`p-virtualscroller-content ${this.d_loading ? "p-virtualscroller-loading" : ""}`),
			items: this.loadedItems,
			getItemOptions: (index) => this.getOptions(index),
			loading: this.d_loading,
			getLoaderOptions: (index, options) => this.getLoaderOptions(index, options),
			itemSize: this._itemSize(),
			rows: this.loadedRows,
			columns: this.loadedColumns,
			spacerStyle: this.spacerStyle,
			contentStyle: this.contentStyle,
			vertical: this.vertical(),
			horizontal: this.horizontal(),
			both: this.both(),
			scrollTo: this.scrollTo.bind(this),
			scrollToIndex: this.scrollToIndex.bind(this),
			orientation: this._orientation(),
			scrollableElement: this.elementViewChild()?.nativeElement
		};
	}
	getOptions(renderedIndex) {
		const count = (this._items() || []).length;
		const index = this.both() ? this.first.rows + renderedIndex : this.first + renderedIndex;
		return {
			index,
			count,
			first: index === 0,
			last: index === count - 1,
			even: index % 2 === 0,
			odd: index % 2 !== 0
		};
	}
	getLoaderOptions(index, extOptions) {
		const count = this.loaderArr.length;
		return {
			index,
			count,
			first: index === 0,
			last: index === count - 1,
			even: index % 2 === 0,
			odd: index % 2 !== 0,
			loading: this.d_loading,
			...extOptions
		};
	}
	static ɵfac = function Scroller_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || Scroller)();
	};
	static ɵcmp = (function() {
		const _c0 = ["content"];
		const _c1 = ["item"];
		const _c2 = ["loader"];
		const _c3 = ["loadericon"];
		const _c4 = ["element"];
		const _c5 = ["*"];
		function _forTrack0($index, $item) {
			return this._trackBy() ? this._trackBy()($index, $item) : $index;
		}
		function Scroller_Conditional_0_Conditional_2_ng_container_0_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Scroller_Conditional_0_Conditional_2_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, Scroller_Conditional_0_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 6);
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(2);
				ɵɵproperty("ngTemplateOutlet", ctx_r0.contentTemplate())("ngTemplateOutletContext", ctx_r0.getContentTemplateContext());
			}
		}
		function Scroller_Conditional_0_Conditional_3_For_3_ng_container_0_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Scroller_Conditional_0_Conditional_3_For_3_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, Scroller_Conditional_0_Conditional_3_For_3_ng_container_0_Template, 1, 0, "ng-container", 6);
			if (rf & 2) {
				const item_r2 = ctx.$implicit;
				const ɵ$index_12_r3 = ctx.$index;
				const ctx_r0 = ɵɵnextContext(3);
				ɵɵproperty("ngTemplateOutlet", ctx_r0.itemTemplate())("ngTemplateOutletContext", ctx_r0.getItemTemplateContext(item_r2, ɵ$index_12_r3));
			}
		}
		function Scroller_Conditional_0_Conditional_3_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "div", 3, 1);
				ɵɵrepeaterCreate(2, Scroller_Conditional_0_Conditional_3_For_3_Template, 1, 2, "ng-container", null, _forTrack0, true);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(2);
				ɵɵstyleMap(ctx_r0.contentStyle);
				ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("content"), ctx_r0.contentStyleClass()));
				ɵɵproperty("pBind", ctx_r0.ptm("content"));
				ɵɵadvance(2);
				ɵɵrepeater(ctx_r0.loadedItems);
			}
		}
		function Scroller_Conditional_0_Conditional_4_Template(rf, ctx) {
			if (rf & 1) ɵɵelement(0, "div", 3);
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(2);
				ɵɵstyleMap(ctx_r0.spacerStyle);
				ɵɵclassMap(ctx_r0.cx("spacer"));
				ɵɵproperty("pBind", ctx_r0.ptm("spacer"));
			}
		}
		function Scroller_Conditional_0_Conditional_5_Conditional_1_For_1_ng_container_0_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Scroller_Conditional_0_Conditional_5_Conditional_1_For_1_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, Scroller_Conditional_0_Conditional_5_Conditional_1_For_1_ng_container_0_Template, 1, 0, "ng-container", 6);
			if (rf & 2) {
				const ɵ$index_24_r4 = ctx.$index;
				const ctx_r0 = ɵɵnextContext(4);
				ɵɵproperty("ngTemplateOutlet", ctx_r0.loaderTemplate())("ngTemplateOutletContext", ctx_r0.getLoaderTemplateContext(ɵ$index_24_r4));
			}
		}
		function Scroller_Conditional_0_Conditional_5_Conditional_1_Template(rf, ctx) {
			if (rf & 1) ɵɵrepeaterCreate(0, Scroller_Conditional_0_Conditional_5_Conditional_1_For_1_Template, 1, 2, "ng-container", null, ɵɵrepeaterTrackByIndex);
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(3);
				ɵɵrepeater(ctx_r0.loaderArr);
			}
		}
		function Scroller_Conditional_0_Conditional_5_Conditional_2_Conditional_0_ng_container_0_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Scroller_Conditional_0_Conditional_5_Conditional_2_Conditional_0_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, Scroller_Conditional_0_Conditional_5_Conditional_2_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 6);
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(4);
				ɵɵproperty("ngTemplateOutlet", ctx_r0.loaderIconTemplate())("ngTemplateOutletContext", ctx_r0.loaderIconContext);
			}
		}
		function Scroller_Conditional_0_Conditional_5_Conditional_2_Conditional_1_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵelement(0, "svg", 8);
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(4);
				ɵɵclassMap(ctx_r0.cx("loadingIcon"));
				ɵɵproperty("spin", true)("pBind", ctx_r0.ptm("loadingIcon"));
			}
		}
		function Scroller_Conditional_0_Conditional_5_Conditional_2_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, Scroller_Conditional_0_Conditional_5_Conditional_2_Conditional_0_Template, 1, 2, "ng-container")(1, Scroller_Conditional_0_Conditional_5_Conditional_2_Conditional_1_Template, 1, 4, "svg", 7);
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(3);
				ɵɵconditional(ctx_r0.loaderIconTemplate() ? 0 : 1);
			}
		}
		function Scroller_Conditional_0_Conditional_5_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "div", 3);
				ɵɵconditionalCreate(1, Scroller_Conditional_0_Conditional_5_Conditional_1_Template, 2, 0)(2, Scroller_Conditional_0_Conditional_5_Conditional_2_Template, 2, 1);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(2);
				ɵɵclassMap(ctx_r0.cx("loader"));
				ɵɵproperty("pBind", ctx_r0.ptm("loader"));
				ɵɵadvance();
				ɵɵconditional(ctx_r0.loaderTemplate() ? 1 : 2);
			}
		}
		function Scroller_Conditional_0_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "div", 3, 0);
				ɵɵconditionalCreate(2, Scroller_Conditional_0_Conditional_2_Template, 1, 2, "ng-container")(3, Scroller_Conditional_0_Conditional_3_Template, 4, 5, "div", 4);
				ɵɵconditionalCreate(4, Scroller_Conditional_0_Conditional_4_Template, 1, 5, "div", 4);
				ɵɵconditionalCreate(5, Scroller_Conditional_0_Conditional_5_Template, 3, 4, "div", 5);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵstyleMap(ctx_r0._style());
				ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("root"), ctx_r0._styleClass()));
				ɵɵproperty("pBind", ctx_r0.ptm("root"));
				ɵɵattribute("id", ctx_r0._id())("tabindex", ctx_r0._tabindex());
				ɵɵadvance(2);
				ɵɵconditional(ctx_r0.contentTemplate() ? 2 : 3);
				ɵɵadvance(2);
				ɵɵconditional(ctx_r0._showSpacer() ? 4 : -1);
				ɵɵadvance();
				ɵɵconditional(!ctx_r0._loaderDisabled() && ctx_r0._showLoader() && ctx_r0.d_loading ? 5 : -1);
			}
		}
		function Scroller_Conditional_1_Conditional_1_ng_container_0_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Scroller_Conditional_1_Conditional_1_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, Scroller_Conditional_1_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 6);
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(2);
				ɵɵproperty("ngTemplateOutlet", ctx_r0.contentTemplate())("ngTemplateOutletContext", ctx_r0.getDisabledContentTemplateContext());
			}
		}
		function Scroller_Conditional_1_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojection(0);
				ɵɵconditionalCreate(1, Scroller_Conditional_1_Conditional_1_Template, 1, 2, "ng-container");
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵadvance();
				ɵɵconditional(ctx_r0.contentTemplate() ? 1 : -1);
			}
		}
		return /*@__PURE__*/ ɵɵdefineComponent({
			type: Scroller,
			selectors: [
				["p-scroller"],
				["p-virtualscroller"],
				["p-virtual-scroller"]
			],
			contentQueries: function Scroller_ContentQueries(rf, ctx, dirIndex) {
				if (rf & 1) ɵɵcontentQuerySignal(dirIndex, ctx.contentTemplate, _c0, 4)(dirIndex, ctx.itemTemplate, _c1, 4)(dirIndex, ctx.loaderTemplate, _c2, 4)(dirIndex, ctx.loaderIconTemplate, _c3, 4);
				if (rf & 2) ɵɵqueryAdvance(4);
			},
			viewQuery: function Scroller_Query(rf, ctx) {
				if (rf & 1) ɵɵviewQuerySignal(ctx.elementViewChild, _c4, 5)(ctx.contentViewChild, _c0, 5);
				if (rf & 2) ɵɵqueryAdvance(2);
			},
			hostVars: 2,
			hostBindings: function Scroller_HostBindings(rf, ctx) {
				if (rf & 2) ɵɵstyleProp("height", ctx.hostHeight());
			},
			inputs: {
				hostName: [1, "hostName"],
				id: [1, "id"],
				style: [1, "style"],
				styleClass: [1, "styleClass"],
				tabindex: [1, "tabindex"],
				items: [1, "items"],
				itemSize: [1, "itemSize"],
				scrollHeight: [1, "scrollHeight"],
				scrollWidth: [1, "scrollWidth"],
				orientation: [1, "orientation"],
				step: [1, "step"],
				delay: [1, "delay"],
				resizeDelay: [1, "resizeDelay"],
				appendOnly: [1, "appendOnly"],
				inline: [1, "inline"],
				lazy: [1, "lazy"],
				disabled: [1, "disabled"],
				loaderDisabled: [1, "loaderDisabled"],
				columns: [1, "columns"],
				showSpacer: [1, "showSpacer"],
				showLoader: [1, "showLoader"],
				numToleratedItems: [1, "numToleratedItems"],
				loading: [1, "loading"],
				autoSize: [1, "autoSize"],
				trackBy: [1, "trackBy"],
				options: [1, "options"]
			},
			outputs: {
				onLazyLoad: "onLazyLoad",
				onScroll: "onScroll",
				onScrollIndexChange: "onScrollIndexChange"
			},
			features: [
				ɵɵProvidersFeature([
					ScrollerStyle,
					{
						provide: SCROLLER_INSTANCE,
						useExisting: Scroller
					},
					{
						provide: PARENT_INSTANCE,
						useExisting: Scroller
					}
				]),
				ɵɵHostDirectivesFeature([Bind]),
				ɵɵInheritDefinitionFeature
			],
			ngContentSelectors: _c5,
			decls: 2,
			vars: 1,
			consts: [
				["element", ""],
				["content", ""],
				[
					3,
					"style",
					"class",
					"pBind"
				],
				[3, "pBind"],
				[
					3,
					"class",
					"style",
					"pBind"
				],
				[
					3,
					"class",
					"pBind"
				],
				[
					4,
					"ngTemplateOutlet",
					"ngTemplateOutletContext"
				],
				[
					"data-p-icon",
					"spinner",
					3,
					"class",
					"spin",
					"pBind"
				],
				[
					"data-p-icon",
					"spinner",
					3,
					"spin",
					"pBind"
				]
			],
			template: function Scroller_Template(rf, ctx) {
				if (rf & 1) {
					ɵɵprojectionDef();
					ɵɵconditionalCreate(0, Scroller_Conditional_0_Template, 6, 10, "div", 2)(1, Scroller_Conditional_1_Template, 2, 1);
				}
				if (rf & 2) ɵɵconditional(!ctx._disabled() ? 0 : 1);
			},
			dependencies: [
				NgTemplateOutlet,
				Spinner,
				Bind
			],
			encapsulation: 2,
			changeDetection: 1
		});
	})();
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Scroller, [{
		type: Component,
		args: [{
			selector: "p-scroller, p-virtualscroller, p-virtual-scroller",
			imports: [
				NgTemplateOutlet,
				Spinner,
				Bind
			],
			standalone: true,
			template: `
        @if (!_disabled()) {
            <div #element [attr.id]="_id()" [attr.tabindex]="_tabindex()" [style]="_style()" [class]="cn(cx('root'), _styleClass())" [pBind]="ptm('root')">
                @if (contentTemplate()) {
                    <ng-container *ngTemplateOutlet="contentTemplate(); context: getContentTemplateContext()"></ng-container>
                } @else {
                    <div #content [class]="cn(cx('content'), contentStyleClass())" [style]="contentStyle" [pBind]="ptm('content')">
                        @for (item of loadedItems; track _trackBy() ? _trackBy()!($index, item) : $index; let index = $index) {
                            <ng-container *ngTemplateOutlet="itemTemplate(); context: getItemTemplateContext(item, index)"></ng-container>
                        }
                    </div>
                }
                @if (_showSpacer()) {
                    <div [class]="cx('spacer')" [style]="spacerStyle" [pBind]="ptm('spacer')"></div>
                }
                @if (!_loaderDisabled() && _showLoader() && d_loading) {
                    <div [class]="cx('loader')" [pBind]="ptm('loader')">
                        @if (loaderTemplate()) {
                            @for (item of loaderArr; track $index; let index = $index) {
                                <ng-container *ngTemplateOutlet="loaderTemplate(); context: getLoaderTemplateContext(index)"></ng-container>
                            }
                        } @else {
                            @if (loaderIconTemplate()) {
                                <ng-container *ngTemplateOutlet="loaderIconTemplate(); context: loaderIconContext"></ng-container>
                            } @else {
                                <svg data-p-icon="spinner" [class]="cx('loadingIcon')" [spin]="true" [pBind]="ptm('loadingIcon')" />
                            }
                        }
                    </div>
                }
            </div>
        } @else {
            <ng-content />
            @if (contentTemplate()) {
                <ng-container *ngTemplateOutlet="contentTemplate(); context: getDisabledContentTemplateContext()"></ng-container>
            }
        }
    `,
			changeDetection: ChangeDetectionStrategy.Default,
			encapsulation: ViewEncapsulation.None,
			providers: [
				ScrollerStyle,
				{
					provide: SCROLLER_INSTANCE,
					useExisting: Scroller
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: Scroller
				}
			],
			hostDirectives: [Bind],
			host: { "[style.height]": "hostHeight()" }
		}]
	}], () => [], {
		hostName: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "hostName",
				required: false
			}]
		}],
		id: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "id",
				required: false
			}]
		}],
		style: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "style",
				required: false
			}]
		}],
		styleClass: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "styleClass",
				required: false
			}]
		}],
		tabindex: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "tabindex",
				required: false
			}]
		}],
		items: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "items",
				required: false
			}]
		}],
		itemSize: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "itemSize",
				required: false
			}]
		}],
		scrollHeight: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "scrollHeight",
				required: false
			}]
		}],
		scrollWidth: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "scrollWidth",
				required: false
			}]
		}],
		orientation: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "orientation",
				required: false
			}]
		}],
		step: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "step",
				required: false
			}]
		}],
		delay: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "delay",
				required: false
			}]
		}],
		resizeDelay: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "resizeDelay",
				required: false
			}]
		}],
		appendOnly: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "appendOnly",
				required: false
			}]
		}],
		inline: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "inline",
				required: false
			}]
		}],
		lazy: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "lazy",
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
		loaderDisabled: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "loaderDisabled",
				required: false
			}]
		}],
		columns: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "columns",
				required: false
			}]
		}],
		showSpacer: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "showSpacer",
				required: false
			}]
		}],
		showLoader: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "showLoader",
				required: false
			}]
		}],
		numToleratedItems: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "numToleratedItems",
				required: false
			}]
		}],
		loading: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "loading",
				required: false
			}]
		}],
		autoSize: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "autoSize",
				required: false
			}]
		}],
		trackBy: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "trackBy",
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
		onLazyLoad: [{
			type: Output,
			args: ["onLazyLoad"]
		}],
		onScroll: [{
			type: Output,
			args: ["onScroll"]
		}],
		onScrollIndexChange: [{
			type: Output,
			args: ["onScrollIndexChange"]
		}],
		elementViewChild: [{
			type: ViewChild,
			args: ["element", { isSignal: true }]
		}],
		contentViewChild: [{
			type: ViewChild,
			args: ["content", { isSignal: true }]
		}],
		contentTemplate: [{
			type: ContentChild,
			args: ["content", {
				descendants: false,
				isSignal: true
			}]
		}],
		itemTemplate: [{
			type: ContentChild,
			args: ["item", {
				descendants: false,
				isSignal: true
			}]
		}],
		loaderTemplate: [{
			type: ContentChild,
			args: ["loader", {
				descendants: false,
				isSignal: true
			}]
		}],
		loaderIconTemplate: [{
			type: ContentChild,
			args: ["loadericon", {
				descendants: false,
				isSignal: true
			}]
		}]
	});
})();
var ScrollerModule = class ScrollerModule {
	static ɵfac = function ScrollerModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || ScrollerModule)();
	};
	static ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({
		type: ScrollerModule,
		imports: [Scroller],
		exports: [Scroller]
	});
	static ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ imports: [Scroller] });
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollerModule, [{
		type: NgModule,
		args: [{
			imports: [Scroller],
			exports: [Scroller]
		}]
	}], null, null);
})();
// node_modules/@primeicons/core/dist/esm/icons/blank.mjs
var t = {
	name: "blank",
	svg: {
		xmlns: "http://www.w3.org/2000/svg",
		width: 20,
		height: 20,
		viewBox: "0 0 20 20",
		fill: "none"
	},
	nodes: [["rect", {
		width: "1",
		height: "1",
		fill: "currentColor",
		fillOpacity: "0",
		key: "dqty8v"
	}]]
};
// node_modules/@primeicons/angular/fesm2022/primeicons-angular-blank.mjs
var Blank = class Blank extends CoreIcon {
	constructor() {
		super();
		this._icon = t;
	}
	static ɵfac = function Blank_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || Blank)();
	};
	static ɵcmp = (function() {
		const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
		function Blank_For_1_Case_0_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "path");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Blank_For_1_Case_1_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "circle");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Blank_For_1_Case_2_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "rect");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Blank_For_1_Case_3_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "line");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Blank_For_1_Case_4_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "polyline");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Blank_For_1_Case_5_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "polygon");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Blank_For_1_Case_6_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "ellipse");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Blank_For_1_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, Blank_For_1_Case_0_Template, 1, 9, "path")(1, Blank_For_1_Case_1_Template, 1, 6, "circle")(2, Blank_For_1_Case_2_Template, 1, 9, "rect")(3, Blank_For_1_Case_3_Template, 1, 7, "line")(4, Blank_For_1_Case_4_Template, 1, 4, "polyline")(5, Blank_For_1_Case_5_Template, 1, 4, "polygon")(6, Blank_For_1_Case_6_Template, 1, 7, "ellipse");
			if (rf & 2) {
				let tmp_10_0 = void 0;
				const node_r1 = ctx.$implicit;
				ɵɵconditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
			}
		}
		return /*@__PURE__*/ ɵɵdefineComponent({
			type: Blank,
			selectors: [[
				"svg",
				"data-p-icon",
				"blank"
			]],
			features: [ɵɵInheritDefinitionFeature],
			decls: 2,
			vars: 0,
			template: function Blank_Template(rf, ctx) {
				if (rf & 1) ɵɵrepeaterCreate(0, Blank_For_1_Template, 7, 1, null, null, _forTrack0);
				if (rf & 2) ɵɵrepeater(ctx.iconNodes());
			},
			encapsulation: 2,
			changeDetection: 1
		});
	})();
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Blank, [{
		type: Component,
		args: [{
			selector: "svg[data-p-icon=\"blank\"]",
			standalone: true,
			template: "\n        @for (node of iconNodes(); track node[1]['key'] || $index) {\n            @switch (node[0]) {\n                @case ('path') {\n                    <svg:path\n                        [attr.d]=\"node[1]['d']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.fill-rule]=\"node[1]['fillRule']\"\n                        [attr.clip-rule]=\"node[1]['clipRule']\"\n                        [attr.stroke]=\"node[1]['stroke']\"\n                        [attr.stroke-width]=\"node[1]['strokeWidth']\"\n                        [attr.stroke-opacity]=\"node[1]['strokeOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('circle') {\n                    <svg:circle\n                        [attr.cx]=\"node[1]['cx']\"\n                        [attr.cy]=\"node[1]['cy']\"\n                        [attr.r]=\"node[1]['r']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('rect') {\n                    <svg:rect\n                        [attr.x]=\"node[1]['x']\"\n                        [attr.y]=\"node[1]['y']\"\n                        [attr.width]=\"node[1]['width']\"\n                        [attr.height]=\"node[1]['height']\"\n                        [attr.rx]=\"node[1]['rx']\"\n                        [attr.ry]=\"node[1]['ry']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('line') {\n                    <svg:line\n                        [attr.x1]=\"node[1]['x1']\"\n                        [attr.y1]=\"node[1]['y1']\"\n                        [attr.x2]=\"node[1]['x2']\"\n                        [attr.y2]=\"node[1]['y2']\"\n                        [attr.stroke]=\"node[1]['stroke']\"\n                        [attr.stroke-opacity]=\"node[1]['strokeOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('polyline') {\n                    <svg:polyline\n                        [attr.points]=\"node[1]['points']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('polygon') {\n                    <svg:polygon\n                        [attr.points]=\"node[1]['points']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('ellipse') {\n                    <svg:ellipse\n                        [attr.cx]=\"node[1]['cx']\"\n                        [attr.cy]=\"node[1]['cy']\"\n                        [attr.rx]=\"node[1]['rx']\"\n                        [attr.ry]=\"node[1]['ry']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n            }\n        }\n"
		}]
	}], () => [], null);
})();
// node_modules/@primeicons/core/dist/esm/icons/check.mjs
var e = {
	name: "check",
	meta: { tags: [
		"check",
		"done",
		"complete",
		"ok",
		"approve"
	] },
	svg: {
		xmlns: "http://www.w3.org/2000/svg",
		width: 20,
		height: 20,
		viewBox: "0 0 20 20",
		fill: "none"
	},
	nodes: [["path", {
		d: "M17.4697 3.96973C17.7626 3.67684 18.2373 3.67684 18.5302 3.96973C18.8231 4.26262 18.8231 4.73738 18.5302 5.03028L7.53022 16.0303C7.23732 16.3232 6.76256 16.3232 6.46967 16.0303L1.46967 11.0303C1.17678 10.7374 1.17678 10.2626 1.46967 9.96973C1.76256 9.67684 2.23732 9.67684 2.53022 9.96973L6.99994 14.4395L17.4697 3.96973Z",
		fill: "currentColor",
		key: "9v7b3r"
	}]]
};
// node_modules/@primeicons/angular/fesm2022/primeicons-angular-check.mjs
var Check = class Check extends CoreIcon {
	constructor() {
		super();
		this._icon = e;
	}
	static ɵfac = function Check_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || Check)();
	};
	static ɵcmp = (function() {
		const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
		function Check_For_1_Case_0_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "path");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Check_For_1_Case_1_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "circle");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Check_For_1_Case_2_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "rect");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Check_For_1_Case_3_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "line");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Check_For_1_Case_4_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "polyline");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Check_For_1_Case_5_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "polygon");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Check_For_1_Case_6_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "ellipse");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Check_For_1_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, Check_For_1_Case_0_Template, 1, 9, "path")(1, Check_For_1_Case_1_Template, 1, 6, "circle")(2, Check_For_1_Case_2_Template, 1, 9, "rect")(3, Check_For_1_Case_3_Template, 1, 7, "line")(4, Check_For_1_Case_4_Template, 1, 4, "polyline")(5, Check_For_1_Case_5_Template, 1, 4, "polygon")(6, Check_For_1_Case_6_Template, 1, 7, "ellipse");
			if (rf & 2) {
				let tmp_10_0 = void 0;
				const node_r1 = ctx.$implicit;
				ɵɵconditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
			}
		}
		return /*@__PURE__*/ ɵɵdefineComponent({
			type: Check,
			selectors: [[
				"svg",
				"data-p-icon",
				"check"
			]],
			features: [ɵɵInheritDefinitionFeature],
			decls: 2,
			vars: 0,
			template: function Check_Template(rf, ctx) {
				if (rf & 1) ɵɵrepeaterCreate(0, Check_For_1_Template, 7, 1, null, null, _forTrack0);
				if (rf & 2) ɵɵrepeater(ctx.iconNodes());
			},
			encapsulation: 2,
			changeDetection: 1
		});
	})();
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Check, [{
		type: Component,
		args: [{
			selector: "svg[data-p-icon=\"check\"]",
			standalone: true,
			template: "\n        @for (node of iconNodes(); track node[1]['key'] || $index) {\n            @switch (node[0]) {\n                @case ('path') {\n                    <svg:path\n                        [attr.d]=\"node[1]['d']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.fill-rule]=\"node[1]['fillRule']\"\n                        [attr.clip-rule]=\"node[1]['clipRule']\"\n                        [attr.stroke]=\"node[1]['stroke']\"\n                        [attr.stroke-width]=\"node[1]['strokeWidth']\"\n                        [attr.stroke-opacity]=\"node[1]['strokeOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('circle') {\n                    <svg:circle\n                        [attr.cx]=\"node[1]['cx']\"\n                        [attr.cy]=\"node[1]['cy']\"\n                        [attr.r]=\"node[1]['r']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('rect') {\n                    <svg:rect\n                        [attr.x]=\"node[1]['x']\"\n                        [attr.y]=\"node[1]['y']\"\n                        [attr.width]=\"node[1]['width']\"\n                        [attr.height]=\"node[1]['height']\"\n                        [attr.rx]=\"node[1]['rx']\"\n                        [attr.ry]=\"node[1]['ry']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('line') {\n                    <svg:line\n                        [attr.x1]=\"node[1]['x1']\"\n                        [attr.y1]=\"node[1]['y1']\"\n                        [attr.x2]=\"node[1]['x2']\"\n                        [attr.y2]=\"node[1]['y2']\"\n                        [attr.stroke]=\"node[1]['stroke']\"\n                        [attr.stroke-opacity]=\"node[1]['strokeOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('polyline') {\n                    <svg:polyline\n                        [attr.points]=\"node[1]['points']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('polygon') {\n                    <svg:polygon\n                        [attr.points]=\"node[1]['points']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('ellipse') {\n                    <svg:ellipse\n                        [attr.cx]=\"node[1]['cx']\"\n                        [attr.cy]=\"node[1]['cy']\"\n                        [attr.rx]=\"node[1]['rx']\"\n                        [attr.ry]=\"node[1]['ry']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n            }\n        }\n"
		}]
	}], () => [], null);
})();
// node_modules/@primeuix/styles/dist/select/index.mjs
var style = "\n    .p-select {\n        display: inline-flex;\n        cursor: pointer;\n        position: relative;\n        user-select: none;\n        background: dt('select.background');\n        border: 1px solid dt('select.border.color');\n        transition:\n            background dt('select.transition.duration'),\n            color dt('select.transition.duration'),\n            border-color dt('select.transition.duration'),\n            outline-color dt('select.transition.duration'),\n            box-shadow dt('select.transition.duration');\n        border-radius: dt('select.border.radius');\n        outline-color: transparent;\n        box-shadow: dt('select.shadow');\n    }\n\n    .p-select:not(.p-disabled):hover {\n        border-color: dt('select.hover.border.color');\n    }\n\n    .p-select:not(.p-disabled).p-focus {\n        border-color: dt('select.focus.border.color');\n        box-shadow: dt('select.focus.ring.shadow');\n        outline: dt('select.focus.ring.width') dt('select.focus.ring.style') dt('select.focus.ring.color');\n        outline-offset: dt('select.focus.ring.offset');\n    }\n\n    .p-select.p-variant-filled {\n        background: dt('select.filled.background');\n    }\n\n    .p-select.p-variant-filled:not(.p-disabled):hover {\n        background: dt('select.filled.hover.background');\n    }\n\n    .p-select.p-variant-filled:not(.p-disabled).p-focus {\n        background: dt('select.filled.focus.background');\n    }\n\n    .p-select.p-invalid {\n        border-color: dt('select.invalid.border.color');\n    }\n\n    .p-select.p-disabled {\n        opacity: 1;\n        background: dt('select.disabled.background');\n    }\n\n    .p-select-clear-icon {\n        align-self: center;\n        color: dt('select.clear.icon.color');\n        inset-inline-end: dt('select.dropdown.width');\n    }\n\n    .p-select-dropdown {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-shrink: 0;\n        background: transparent;\n        color: dt('select.dropdown.color');\n        width: dt('select.dropdown.width');\n        border-start-end-radius: dt('select.border.radius');\n        border-end-end-radius: dt('select.border.radius');\n    }\n\n    .p-select-label {\n        display: block;\n        white-space: nowrap;\n        overflow: hidden;\n        flex: 1 1 auto;\n        width: 1%;\n        padding: dt('select.padding.y') dt('select.padding.x');\n        text-overflow: ellipsis;\n        cursor: pointer;\n        color: dt('select.color');\n        background: transparent;\n        border: 0 none;\n        outline: 0 none;\n        font-weight: dt('select.font.weight');\n        font-size: dt('select.font.size');\n    }\n\n    .p-select-label.p-placeholder {\n        color: dt('select.placeholder.color');\n    }\n\n    .p-select.p-invalid .p-select-label.p-placeholder {\n        color: dt('select.invalid.placeholder.color');\n    }\n\n    .p-select.p-disabled .p-select-label {\n        color: dt('select.disabled.color');\n    }\n\n    .p-select-label-empty {\n        overflow: hidden;\n        opacity: 0;\n    }\n\n    input.p-select-label {\n        cursor: default;\n    }\n\n    .p-select-overlay {\n        position: absolute;\n        top: 0;\n        left: 0;\n        background: dt('select.overlay.background');\n        color: dt('select.overlay.color');\n        border: 1px solid dt('select.overlay.border.color');\n        border-radius: dt('select.overlay.border.radius');\n        box-shadow: dt('select.overlay.shadow');\n        min-width: 100%;\n        transform-origin: inherit;\n        will-change: transform;\n    }\n\n    .p-select-header {\n        padding: dt('select.list.header.padding');\n    }\n\n    .p-select-filter {\n        width: 100%;\n    }\n\n    .p-select-list-container {\n        overflow: auto;\n    }\n\n    .p-select-option-group {\n        cursor: auto;\n        margin: 0;\n        padding: dt('select.option.group.padding');\n        background: dt('select.option.group.background');\n        color: dt('select.option.group.color');\n        font-weight: dt('select.option.group.font.weight');\n        font-size: dt('select.option.group.font.size');\n    }\n\n    .p-select-list {\n        margin: 0;\n        padding: 0;\n        list-style-type: none;\n        padding: dt('select.list.padding');\n        gap: dt('select.list.gap');\n        display: flex;\n        flex-direction: column;\n    }\n\n    .p-select-option {\n        cursor: pointer;\n        font-weight: dt('select.option.font.weight');\n        font-size: dt('select.option.font.size');\n        white-space: nowrap;\n        position: relative;\n        overflow: hidden;\n        display: flex;\n        align-items: center;\n        padding: dt('select.option.padding');\n        border: 0 none;\n        color: dt('select.option.color');\n        background: transparent;\n        transition:\n            background dt('list.option.transition.duration'),\n            color dt('list.option.transition.duration'),\n            border-color dt('list.option.transition.duration'),\n            box-shadow dt('list.option.transition.duration'),\n            outline-color dt('list.option.transition.duration');\n        border-radius: dt('list.option.border.radius');\n    }\n\n    .p-select-option:not(.p-select-option-selected):not(.p-disabled).p-focus {\n        background: dt('select.option.focus.background');\n        color: dt('select.option.focus.color');\n    }\n\n    .p-select-option:not(.p-select-option-selected):not(.p-disabled):hover {\n        background: dt('select.option.focus.background');\n        color: dt('select.option.focus.color');\n    }\n\n    .p-select-option.p-select-option-selected {\n        background: dt('select.option.selected.background');\n        color: dt('select.option.selected.color');\n        font-weight: dt('select.option.selected.font.weight');\n    }\n\n    .p-select-option.p-select-option-selected.p-focus {\n        background: dt('select.option.selected.focus.background');\n        color: dt('select.option.selected.focus.color');\n    }\n   \n    .p-select-option-blank-icon {\n        flex-shrink: 0;\n    }\n\n    .p-select-option-check-icon {\n        position: relative;\n        flex-shrink: 0;\n        margin-inline-start: dt('select.checkmark.gutter.start');\n        margin-inline-end: dt('select.checkmark.gutter.end');\n        color: dt('select.checkmark.color');\n    }\n\n    .p-select-empty-message {\n        padding: dt('select.empty.message.padding');\n        font-weight: dt('select.option.font.weight');\n        font-size: dt('select.option.font.size');\n    }\n\n    .p-select-fluid {\n        display: flex;\n        width: 100%;\n    }\n\n    .p-select-sm .p-select-label {\n        font-size: dt('select.sm.font.size');\n        padding-block: dt('select.sm.padding.y');\n        padding-inline: dt('select.sm.padding.x');\n    }\n\n    .p-select-sm .p-select-dropdown .p-icon {\n        font-size: dt('select.sm.font.size');\n        width: dt('select.sm.font.size');\n        height: dt('select.sm.font.size');\n    }\n\n    .p-select-lg .p-select-label {\n        font-size: dt('select.lg.font.size');\n        padding-block: dt('select.lg.padding.y');\n        padding-inline: dt('select.lg.padding.x');\n    }\n\n    .p-select-lg .p-select-dropdown .p-icon {\n        font-size: dt('select.lg.font.size');\n        width: dt('select.lg.font.size');\n        height: dt('select.lg.font.size');\n    }\n\n    .p-floatlabel-in .p-select-filter {\n        padding-block-start: dt('select.padding.y');\n        padding-block-end: dt('select.padding.y');\n    }\n";
// node_modules/primeng/fesm2022/primeng-select.mjs
var SELECT_INSTANCE = new InjectionToken("SELECT_INSTANCE");
var classes = {
	root: ({ instance }) => ["p-select p-component p-inputwrapper", {
		"p-disabled": instance.$disabled(),
		"p-invalid": instance.invalid(),
		"p-variant-filled": instance.$variant() === "filled",
		"p-focus": instance.focused(),
		"p-inputwrapper-filled": instance.$filled(),
		"p-inputwrapper-focus": instance.focused() || instance.overlayVisible(),
		"p-select-open": instance.overlayVisible(),
		"p-select-fluid": instance.hasFluid,
		"p-select-sm p-inputfield-sm": instance.size() === "small",
		"p-select-lg p-inputfield-lg": instance.size() === "large"
	}],
	label: ({ instance }) => ["p-select-label", {
		"p-placeholder": !instance.editable() && instance.placeholder() && instance.label() === instance.placeholder(),
		"p-select-label-empty": !instance.editable() && !instance.selectedItemTemplate() && (instance.label() === void 0 || instance.label() === null || instance.label() === "p-emptylabel" || instance.label().length === 0)
	}],
	clearIcon: "p-select-clear-icon",
	dropdown: "p-select-dropdown",
	loadingIcon: "p-select-loading-icon",
	dropdownIcon: "p-select-dropdown-icon",
	overlay: "p-select-overlay p-component-overlay p-component",
	header: "p-select-header",
	pcFilter: "p-select-filter",
	listContainer: "p-select-list-container",
	list: "p-select-list",
	optionGroup: "p-select-option-group",
	optionGroupLabel: "p-select-option-group-label",
	option: ({ instance }) => ["p-select-option", {
		"p-select-option-selected": instance.selected() && !instance.checkmark(),
		"p-disabled": instance.disabled(),
		"p-focus": instance.focused()
	}],
	optionLabel: "p-select-option-label",
	optionCheckIcon: "p-select-option-check-icon",
	optionBlankIcon: "p-select-option-blank-icon",
	emptyMessage: "p-select-empty-message"
};
var SelectStyle = class SelectStyle extends BaseStyle {
	name = "select";
	style = style;
	classes = classes;
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵSelectStyle_BaseFactory = void 0;
		return function SelectStyle_Factory(__ngFactoryType__) {
			return (ɵSelectStyle_BaseFactory || (ɵSelectStyle_BaseFactory = ɵɵgetInheritedFactory(SelectStyle)))(__ngFactoryType__ || SelectStyle);
		};
	})();
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: SelectStyle,
		factory: SelectStyle.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectStyle, [{ type: Injectable }], null, null);
})();
var SelectClasses;
(function(SelectClasses) {
	SelectClasses["root"] = "p-select";
	SelectClasses["label"] = "p-select-label";
	SelectClasses["clearIcon"] = "p-select-clear-icon";
	SelectClasses["dropdown"] = "p-select-dropdown";
	SelectClasses["loadingIcon"] = "p-select-loading-icon";
	SelectClasses["dropdownIcon"] = "p-select-dropdown-icon";
	SelectClasses["overlay"] = "p-select-overlay";
	SelectClasses["header"] = "p-select-header";
	SelectClasses["pcFilter"] = "p-select-filter";
	SelectClasses["listContainer"] = "p-select-list-container";
	SelectClasses["list"] = "p-select-list";
	SelectClasses["optionGroup"] = "p-select-option-group";
	SelectClasses["optionGroupLabel"] = "p-select-option-group-label";
	SelectClasses["option"] = "p-select-option";
	SelectClasses["optionLabel"] = "p-select-option-label";
	SelectClasses["optionCheckIcon"] = "p-select-option-check-icon";
	SelectClasses["optionBlankIcon"] = "p-select-option-blank-icon";
	SelectClasses["emptyMessage"] = "p-select-empty-message";
})(SelectClasses || (SelectClasses = {}));
var SelectItem = class SelectItem extends BaseComponent {
	hostName = "select";
	$pcSelect = inject(SELECT_INSTANCE, {
		optional: true,
		skipSelf: true
	});
	id = input(...ngDevMode ? [void 0, { debugName: "id" }] : /* istanbul ignore next */ []);
	option = input(...ngDevMode ? [void 0, { debugName: "option" }] : /* istanbul ignore next */ []);
	selected = input(void 0, {
		...ngDevMode ? { debugName: "selected" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	focused = input(void 0, {
		...ngDevMode ? { debugName: "focused" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	label = input(...ngDevMode ? [void 0, { debugName: "label" }] : /* istanbul ignore next */ []);
	disabled = input(void 0, {
		...ngDevMode ? { debugName: "disabled" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	ariaPosInset = input(...ngDevMode ? [void 0, { debugName: "ariaPosInset" }] : /* istanbul ignore next */ []);
	ariaSetSize = input(...ngDevMode ? [void 0, { debugName: "ariaSetSize" }] : /* istanbul ignore next */ []);
	template = input(...ngDevMode ? [void 0, { debugName: "template" }] : /* istanbul ignore next */ []);
	checkmark = input(false, {
		...ngDevMode ? { debugName: "checkmark" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	index = input(...ngDevMode ? [void 0, { debugName: "index" }] : /* istanbul ignore next */ []);
	scrollerOptions = input(...ngDevMode ? [void 0, { debugName: "scrollerOptions" }] : /* istanbul ignore next */ []);
	templateContext = computed(() => ({ $implicit: this.option() }), ...ngDevMode ? [{ debugName: "templateContext" }] : /* istanbul ignore next */ []);
	itemSizeStyle = computed(() => ({ height: this.scrollerOptions()?.itemSize + "px" }), ...ngDevMode ? [{ debugName: "itemSizeStyle" }] : /* istanbul ignore next */ []);
	onClick = output();
	onMouseEnter = output();
	_componentStyle = inject(SelectStyle);
	onOptionClick(event) {
		this.onClick.emit(event);
	}
	onOptionMouseEnter(event) {
		this.onMouseEnter.emit(event);
	}
	getPTOptions() {
		return this.$pcSelect?.ptm("option", { context: {
			option: this.option(),
			index: this.index() ?? 0,
			selected: this.selected(),
			focused: this.focused(),
			disabled: this.disabled()
		} });
	}
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵSelectItem_BaseFactory = void 0;
		return function SelectItem_Factory(__ngFactoryType__) {
			return (ɵSelectItem_BaseFactory || (ɵSelectItem_BaseFactory = ɵɵgetInheritedFactory(SelectItem)))(__ngFactoryType__ || SelectItem);
		};
	})();
	static ɵcmp = (function() {
		function SelectItem_Conditional_1_Conditional_0_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵelement(0, "svg", 5);
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(2);
				ɵɵclassMap(ctx_r0.cx("optionCheckIcon"));
				ɵɵproperty("pBind", ctx_r0.$pcSelect?.ptm("optionCheckIcon"));
			}
		}
		function SelectItem_Conditional_1_Conditional_1_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵelement(0, "svg", 6);
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(2);
				ɵɵclassMap(ctx_r0.cx("optionBlankIcon"));
				ɵɵproperty("pBind", ctx_r0.$pcSelect?.ptm("optionBlankIcon"));
			}
		}
		function SelectItem_Conditional_1_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, SelectItem_Conditional_1_Conditional_0_Template, 1, 3, "svg", 3)(1, SelectItem_Conditional_1_Conditional_1_Template, 1, 3, "svg", 4);
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵconditional(ctx_r0.selected() ? 0 : 1);
			}
		}
		function SelectItem_Conditional_2_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "span", 1);
				ɵɵtext(1);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵproperty("pBind", ctx_r0.$pcSelect?.ptm("optionLabel"));
				ɵɵadvance();
				ɵɵtextInterpolate(ctx_r0.label() ?? "empty");
			}
		}
		function SelectItem_ng_container_3_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		return /*@__PURE__*/ ɵɵdefineComponent({
			type: SelectItem,
			selectors: [["p-select-item"]],
			inputs: {
				id: [1, "id"],
				option: [1, "option"],
				selected: [1, "selected"],
				focused: [1, "focused"],
				label: [1, "label"],
				disabled: [1, "disabled"],
				ariaPosInset: [1, "ariaPosInset"],
				ariaSetSize: [1, "ariaSetSize"],
				template: [1, "template"],
				checkmark: [1, "checkmark"],
				index: [1, "index"],
				scrollerOptions: [1, "scrollerOptions"]
			},
			outputs: {
				onClick: "onClick",
				onMouseEnter: "onMouseEnter"
			},
			features: [ɵɵProvidersFeature([SelectStyle, {
				provide: PARENT_INSTANCE,
				useExisting: SelectItem
			}]), ɵɵInheritDefinitionFeature],
			decls: 4,
			vars: 18,
			consts: [
				[
					"role",
					"option",
					"pRipple",
					"",
					3,
					"click",
					"mouseenter",
					"id",
					"pBind"
				],
				[3, "pBind"],
				[
					4,
					"ngTemplateOutlet",
					"ngTemplateOutletContext"
				],
				[
					"data-p-icon",
					"check",
					3,
					"class",
					"pBind"
				],
				[
					"data-p-icon",
					"blank",
					3,
					"class",
					"pBind"
				],
				[
					"data-p-icon",
					"check",
					3,
					"pBind"
				],
				[
					"data-p-icon",
					"blank",
					3,
					"pBind"
				]
			],
			template: function SelectItem_Template(rf, ctx) {
				if (rf & 1) {
					ɵɵelementStart(0, "li", 0);
					ɵɵlistener("click", function SelectItem_Template_li_click_0_listener($event) {
						return ctx.onOptionClick($event);
					})("mouseenter", function SelectItem_Template_li_mouseenter_0_listener($event) {
						return ctx.onOptionMouseEnter($event);
					});
					ɵɵconditionalCreate(1, SelectItem_Conditional_1_Template, 2, 1);
					ɵɵconditionalCreate(2, SelectItem_Conditional_2_Template, 2, 2, "span", 1);
					ɵɵtemplate(3, SelectItem_ng_container_3_Template, 1, 0, "ng-container", 2);
					ɵɵelementEnd();
				}
				if (rf & 2) {
					ɵɵstyleMap(ctx.itemSizeStyle());
					ɵɵclassMap(ctx.cx("option"));
					ɵɵproperty("id", ctx.id())("pBind", ctx.getPTOptions());
					ɵɵattribute("aria-label", ctx.template() ? void 0 : ctx.label())("aria-setsize", ctx.ariaSetSize())("aria-posinset", ctx.ariaPosInset())("aria-selected", ctx.selected())("data-p-focused", ctx.focused())("data-p-highlight", ctx.selected())("data-p-selected", ctx.selected())("data-p-disabled", ctx.disabled());
					ɵɵadvance();
					ɵɵconditional(ctx.checkmark() ? 1 : -1);
					ɵɵadvance();
					ɵɵconditional(!ctx.template() ? 2 : -1);
					ɵɵadvance();
					ɵɵproperty("ngTemplateOutlet", ctx.template())("ngTemplateOutletContext", ctx.templateContext());
				}
			},
			dependencies: [
				NgTemplateOutlet,
				SharedModule,
				Ripple,
				Check,
				Blank,
				BindModule,
				Bind
			],
			encapsulation: 2
		});
	})();
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectItem, [{
		type: Component,
		args: [{
			selector: "p-select-item",
			standalone: true,
			imports: [
				NgTemplateOutlet,
				SharedModule,
				Ripple,
				Check,
				Blank,
				BindModule
			],
			template: `
        <li
            [id]="id()"
            [pBind]="getPTOptions()"
            (click)="onOptionClick($event)"
            (mouseenter)="onOptionMouseEnter($event)"
            role="option"
            pRipple
            [attr.aria-label]="template() ? undefined : label()"
            [attr.aria-setsize]="ariaSetSize()"
            [attr.aria-posinset]="ariaPosInset()"
            [attr.aria-selected]="selected()"
            [attr.data-p-focused]="focused()"
            [attr.data-p-highlight]="selected()"
            [attr.data-p-selected]="selected()"
            [attr.data-p-disabled]="disabled()"
            [style]="itemSizeStyle()"
            [class]="cx('option')"
        >
            @if (checkmark()) {
                @if (selected()) {
                    <svg data-p-icon="check" [class]="cx('optionCheckIcon')" [pBind]="$pcSelect?.ptm('optionCheckIcon')" />
                } @else {
                    <svg data-p-icon="blank" [class]="cx('optionBlankIcon')" [pBind]="$pcSelect?.ptm('optionBlankIcon')" />
                }
            }
            @if (!template()) {
                <span [pBind]="$pcSelect?.ptm('optionLabel')">{{ label() ?? 'empty' }}</span>
            }
            <ng-container *ngTemplateOutlet="template(); context: templateContext()"></ng-container>
        </li>
    `,
			providers: [SelectStyle, {
				provide: PARENT_INSTANCE,
				useExisting: SelectItem
			}]
		}]
	}], null, {
		id: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "id",
				required: false
			}]
		}],
		option: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "option",
				required: false
			}]
		}],
		selected: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "selected",
				required: false
			}]
		}],
		focused: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "focused",
				required: false
			}]
		}],
		label: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "label",
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
		ariaPosInset: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "ariaPosInset",
				required: false
			}]
		}],
		ariaSetSize: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "ariaSetSize",
				required: false
			}]
		}],
		template: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "template",
				required: false
			}]
		}],
		checkmark: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "checkmark",
				required: false
			}]
		}],
		index: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "index",
				required: false
			}]
		}],
		scrollerOptions: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "scrollerOptions",
				required: false
			}]
		}],
		onClick: [{
			type: Output,
			args: ["onClick"]
		}],
		onMouseEnter: [{
			type: Output,
			args: ["onMouseEnter"]
		}]
	});
})();
var SELECT_VALUE_ACCESSOR = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => Select),
	multi: true
};
var Select = class Select extends BaseInput {
	componentName = "Select";
	bindDirectiveInstance = inject(Bind, { self: true });
	filterService = inject(FilterService);
	id = input(...ngDevMode ? [void 0, { debugName: "id" }] : /* istanbul ignore next */ []);
	_internalId = this.$useId.next("pn_id_");
	$id = computed(() => this.id() || this._internalId, ...ngDevMode ? [{ debugName: "$id" }] : /* istanbul ignore next */ []);
	scrollHeight = input("200px", ...ngDevMode ? [{ debugName: "scrollHeight" }] : /* istanbul ignore next */ []);
	filter = input(void 0, {
		...ngDevMode ? { debugName: "filter" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	panelStyle = input(...ngDevMode ? [void 0, { debugName: "panelStyle" }] : /* istanbul ignore next */ []);
	panelStyleClass = input(...ngDevMode ? [void 0, { debugName: "panelStyleClass" }] : /* istanbul ignore next */ []);
	readonly = input(void 0, {
		...ngDevMode ? { debugName: "readonly" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	editable = input(void 0, {
		...ngDevMode ? { debugName: "editable" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	tabindex = input(0, {
		...ngDevMode ? { debugName: "tabindex" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	placeholder = input(...ngDevMode ? [void 0, { debugName: "placeholder" }] : /* istanbul ignore next */ []);
	loadingIcon = input(...ngDevMode ? [void 0, { debugName: "loadingIcon" }] : /* istanbul ignore next */ []);
	filterPlaceholder = input(...ngDevMode ? [void 0, { debugName: "filterPlaceholder" }] : /* istanbul ignore next */ []);
	filterLocale = input(...ngDevMode ? [void 0, { debugName: "filterLocale" }] : /* istanbul ignore next */ []);
	inputId = input(...ngDevMode ? [void 0, { debugName: "inputId" }] : /* istanbul ignore next */ []);
	dataKey = input(...ngDevMode ? [void 0, { debugName: "dataKey" }] : /* istanbul ignore next */ []);
	filterBy = input(...ngDevMode ? [void 0, { debugName: "filterBy" }] : /* istanbul ignore next */ []);
	filterFields = input(...ngDevMode ? [void 0, { debugName: "filterFields" }] : /* istanbul ignore next */ []);
	autofocus = input(void 0, {
		...ngDevMode ? { debugName: "autofocus" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	resetFilterOnHide = input(false, {
		...ngDevMode ? { debugName: "resetFilterOnHide" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	checkmark = input(false, {
		...ngDevMode ? { debugName: "checkmark" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	dropdownIcon = input(...ngDevMode ? [void 0, { debugName: "dropdownIcon" }] : /* istanbul ignore next */ []);
	loading = input(false, {
		...ngDevMode ? { debugName: "loading" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	optionLabel = input(...ngDevMode ? [void 0, { debugName: "optionLabel" }] : /* istanbul ignore next */ []);
	optionValue = input(...ngDevMode ? [void 0, { debugName: "optionValue" }] : /* istanbul ignore next */ []);
	optionDisabled = input(...ngDevMode ? [void 0, { debugName: "optionDisabled" }] : /* istanbul ignore next */ []);
	optionGroupLabel = input("label", ...ngDevMode ? [{ debugName: "optionGroupLabel" }] : /* istanbul ignore next */ []);
	optionGroupChildren = input("items", ...ngDevMode ? [{ debugName: "optionGroupChildren" }] : /* istanbul ignore next */ []);
	group = input(void 0, {
		...ngDevMode ? { debugName: "group" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	showClear = input(void 0, {
		...ngDevMode ? { debugName: "showClear" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	emptyFilterMessage = input("", ...ngDevMode ? [{ debugName: "emptyFilterMessage" }] : /* istanbul ignore next */ []);
	emptyMessage = input("", ...ngDevMode ? [{ debugName: "emptyMessage" }] : /* istanbul ignore next */ []);
	filterMessage = input(...ngDevMode ? [void 0, { debugName: "filterMessage" }] : /* istanbul ignore next */ []);
	selectionMessage = input(...ngDevMode ? [void 0, { debugName: "selectionMessage" }] : /* istanbul ignore next */ []);
	emptySelectionMessage = input(...ngDevMode ? [void 0, { debugName: "emptySelectionMessage" }] : /* istanbul ignore next */ []);
	lazy = input(false, {
		...ngDevMode ? { debugName: "lazy" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	virtualScroll = input(void 0, {
		...ngDevMode ? { debugName: "virtualScroll" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	virtualScrollItemSize = input(void 0, {
		...ngDevMode ? { debugName: "virtualScrollItemSize" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	virtualScrollOptions = input(...ngDevMode ? [void 0, { debugName: "virtualScrollOptions" }] : /* istanbul ignore next */ []);
	overlayOptions = input(...ngDevMode ? [void 0, { debugName: "overlayOptions" }] : /* istanbul ignore next */ []);
	ariaFilterLabel = input(...ngDevMode ? [void 0, { debugName: "ariaFilterLabel" }] : /* istanbul ignore next */ []);
	ariaLabel = input(...ngDevMode ? [void 0, { debugName: "ariaLabel" }] : /* istanbul ignore next */ []);
	ariaLabelledBy = input(...ngDevMode ? [void 0, { debugName: "ariaLabelledBy" }] : /* istanbul ignore next */ []);
	filterMatchMode = input("contains", ...ngDevMode ? [{ debugName: "filterMatchMode" }] : /* istanbul ignore next */ []);
	tooltip = input("", ...ngDevMode ? [{ debugName: "tooltip" }] : /* istanbul ignore next */ []);
	tooltipPosition = input("right", ...ngDevMode ? [{ debugName: "tooltipPosition" }] : /* istanbul ignore next */ []);
	tooltipPositionStyle = input("absolute", ...ngDevMode ? [{ debugName: "tooltipPositionStyle" }] : /* istanbul ignore next */ []);
	tooltipStyleClass = input(...ngDevMode ? [void 0, { debugName: "tooltipStyleClass" }] : /* istanbul ignore next */ []);
	focusOnHover = input(true, {
		...ngDevMode ? { debugName: "focusOnHover" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	selectOnFocus = input(false, {
		...ngDevMode ? { debugName: "selectOnFocus" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	multiple = input(false, {
		...ngDevMode ? { debugName: "multiple" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	autoOptionFocus = input(false, {
		...ngDevMode ? { debugName: "autoOptionFocus" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	autofocusFilter = input(true, {
		...ngDevMode ? { debugName: "autofocusFilter" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	filterValue = input(...ngDevMode ? [void 0, { debugName: "filterValue" }] : /* istanbul ignore next */ []);
	options = input(...ngDevMode ? [void 0, { debugName: "options" }] : /* istanbul ignore next */ []);
	appendTo = input(void 0, ...ngDevMode ? [{ debugName: "appendTo" }] : /* istanbul ignore next */ []);
	motionOptions = input(void 0, ...ngDevMode ? [{ debugName: "motionOptions" }] : /* istanbul ignore next */ []);
	onChange = output();
	onFilter = output();
	onFocus = output();
	onBlur = output();
	onClick = output();
	onShow = output();
	onHide = output();
	onClear = output();
	onLazyLoad = output();
	_componentStyle = inject(SelectStyle);
	filterViewChild = viewChild("filter", ...ngDevMode ? [{ debugName: "filterViewChild" }] : /* istanbul ignore next */ []);
	focusInputViewChild = viewChild("focusInput", ...ngDevMode ? [{ debugName: "focusInputViewChild" }] : /* istanbul ignore next */ []);
	editableInputViewChild = viewChild("editableInput", ...ngDevMode ? [{ debugName: "editableInputViewChild" }] : /* istanbul ignore next */ []);
	itemsViewChild = viewChild("items", ...ngDevMode ? [{ debugName: "itemsViewChild" }] : /* istanbul ignore next */ []);
	scroller = viewChild("scroller", ...ngDevMode ? [{ debugName: "scroller" }] : /* istanbul ignore next */ []);
	overlayViewChild = viewChild("overlay", ...ngDevMode ? [{ debugName: "overlayViewChild" }] : /* istanbul ignore next */ []);
	firstHiddenFocusableElementOnOverlay = viewChild("firstHiddenFocusableEl", ...ngDevMode ? [{ debugName: "firstHiddenFocusableElementOnOverlay" }] : /* istanbul ignore next */ []);
	lastHiddenFocusableElementOnOverlay = viewChild("lastHiddenFocusableEl", ...ngDevMode ? [{ debugName: "lastHiddenFocusableElementOnOverlay" }] : /* istanbul ignore next */ []);
	itemsWrapper;
	$appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{ debugName: "$appendTo" }] : /* istanbul ignore next */ []);
	itemTemplate = contentChild("item", {
		...ngDevMode ? { debugName: "itemTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	groupTemplate = contentChild("group", {
		...ngDevMode ? { debugName: "groupTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	loaderTemplate = contentChild("loader", {
		...ngDevMode ? { debugName: "loaderTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	selectedItemTemplate = contentChild("selectedItem", {
		...ngDevMode ? { debugName: "selectedItemTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	headerTemplate = contentChild("header", {
		...ngDevMode ? { debugName: "headerTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	filterTemplate = contentChild("filter", {
		...ngDevMode ? { debugName: "filterTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	footerTemplate = contentChild("footer", {
		...ngDevMode ? { debugName: "footerTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	emptyFilterTemplate = contentChild("emptyfilter", {
		...ngDevMode ? { debugName: "emptyFilterTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	emptyTemplate = contentChild("empty", {
		...ngDevMode ? { debugName: "emptyTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	dropdownIconTemplate = contentChild("dropdownicon", {
		...ngDevMode ? { debugName: "dropdownIconTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	loadingIconTemplate = contentChild("loadingicon", {
		...ngDevMode ? { debugName: "loadingIconTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	clearIconTemplate = contentChild("clearicon", {
		...ngDevMode ? { debugName: "clearIconTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	filterIconTemplate = contentChild("filtericon", {
		...ngDevMode ? { debugName: "filterIconTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	onIconTemplate = contentChild("onicon", {
		...ngDevMode ? { debugName: "onIconTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	offIconTemplate = contentChild("officon", {
		...ngDevMode ? { debugName: "offIconTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	cancelIconTemplate = contentChild("cancelicon", {
		...ngDevMode ? { debugName: "cancelIconTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	filterOptions;
	_filterValue = signal(null, ...ngDevMode ? [{ debugName: "_filterValue" }] : /* istanbul ignore next */ []);
	_options = signal(null, ...ngDevMode ? [{ debugName: "_options" }] : /* istanbul ignore next */ []);
	value;
	focused = signal(false, ...ngDevMode ? [{ debugName: "focused" }] : /* istanbul ignore next */ []);
	overlayVisible = signal(false, ...ngDevMode ? [{ debugName: "overlayVisible" }] : /* istanbul ignore next */ []);
	optionsChanged;
	selectedOptionUpdated;
	searchValue;
	searchTimeout;
	alignOverlayTimeout;
	changeTimeout;
	scrollToSelectedTimeout;
	scrollInViewTimeout;
	preventModelTouched;
	focusedOptionIndex = signal(-1, ...ngDevMode ? [{ debugName: "focusedOptionIndex" }] : /* istanbul ignore next */ []);
	clicked = signal(false, ...ngDevMode ? [{ debugName: "clicked" }] : /* istanbul ignore next */ []);
	translation = toSignal(this.config.translationObserver, { initialValue: this.config.translation });
	emptyMessageLabel = computed(() => this.emptyMessage() || this.translation()?.emptyMessage || "", ...ngDevMode ? [{ debugName: "emptyMessageLabel" }] : /* istanbul ignore next */ []);
	emptyFilterMessageLabel = computed(() => this.emptyFilterMessage() || this.translation()?.emptyFilterMessage || "", ...ngDevMode ? [{ debugName: "emptyFilterMessageLabel" }] : /* istanbul ignore next */ []);
	filterMessageText = computed(() => this.filterMessage() || this.translation()?.searchMessage || "", ...ngDevMode ? [{ debugName: "filterMessageText" }] : /* istanbul ignore next */ []);
	emptyFilterMessageText = computed(() => this.emptyFilterMessage() || this.translation()?.emptySearchMessage || this.translation()?.emptyFilterMessage || "", ...ngDevMode ? [{ debugName: "emptyFilterMessageText" }] : /* istanbul ignore next */ []);
	filterResultMessageText = computed(() => {
		const count = this.visibleOptions()?.filter((option) => !this.isOptionGroup(option)).length ?? 0;
		return count ? this.filterMessageText().replaceAll("{0}", String(count)) : this.emptyFilterMessageText();
	}, ...ngDevMode ? [{ debugName: "filterResultMessageText" }] : /* istanbul ignore next */ []);
	selectionMessageText = computed(() => this.selectionMessage() || this.translation()?.selectionMessage || "", ...ngDevMode ? [{ debugName: "selectionMessageText" }] : /* istanbul ignore next */ []);
	emptySelectionMessageText = computed(() => this.emptySelectionMessage() || this.translation()?.emptySelectionMessage || "", ...ngDevMode ? [{ debugName: "emptySelectionMessageText" }] : /* istanbul ignore next */ []);
	selectedMessageText = computed(() => {
		const value = this.modelValue();
		const selectedCount = this.multiple() ? Array.isArray(value) ? value.length : 0 : 1;
		return this.$filled() ? this.selectionMessageText().replaceAll("{0}", String(selectedCount)) : this.emptySelectionMessageText();
	}, ...ngDevMode ? [{ debugName: "selectedMessageText" }] : /* istanbul ignore next */ []);
	largeListWarned = false;
	isVisibleClearIcon = computed(() => {
		if (!this.showClear() || this.$disabled() || this.readonly() || this.loading()) return false;
		const value = this.modelValue();
		if (this.multiple()) return Array.isArray(value) && value.length > 0;
		return value != null && this.hasSelectedOption();
	}, ...ngDevMode ? [{ debugName: "isVisibleClearIcon" }] : /* istanbul ignore next */ []);
	listLabel = computed(() => this.translate(TranslationKeys.ARIA, "listLabel"), ...ngDevMode ? [{ debugName: "listLabel" }] : /* istanbul ignore next */ []);
	focusedOptionId = computed(() => this.focusedOptionIndex() !== -1 ? `${this.$id()}_${this.focusedOptionIndex()}` : null, ...ngDevMode ? [{ debugName: "focusedOptionId" }] : /* istanbul ignore next */ []);
	visibleOptions = computed(() => {
		const options = this.getAllVisibleAndNonVisibleOptions();
		if (this._filterValue()) {
			const filteredOptions = !(this.filterBy() || this.optionLabel()) && !this.filterFields() && !this.optionValue() ? this._options()?.filter((option) => {
				if (option.label) return option.label.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim()) !== -1;
				return option.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim()) !== -1;
			}) : this.filterService.filter(options, this.searchFields(), this._filterValue().trim(), this.filterMatchMode(), this.filterLocale());
			if (this.group()) {
				const optionGroups = this._options() || [];
				const filtered = [];
				const filteredSet = new Set(filteredOptions);
				optionGroups.forEach((group) => {
					const groupChildren = this.getOptionGroupChildren(group);
					if (!groupChildren || !groupChildren.length) return;
					const filteredItems = groupChildren.filter((item) => filteredSet.has(item));
					if (filteredItems.length > 0) filtered.push({
						...group,
						[typeof this.optionGroupChildren() === "string" ? this.optionGroupChildren() : "items"]: [...filteredItems]
					});
				});
				return this.flatOptions(filtered);
			}
			return filteredOptions;
		}
		return options;
	}, ...ngDevMode ? [{ debugName: "visibleOptions" }] : /* istanbul ignore next */ []);
	label = computed(() => {
		if (this.multiple()) {
			const currentValue = this.modelValue();
			if (!Array.isArray(currentValue) || currentValue.length === 0) return this.placeholder() || "p-emptylabel";
			const options = this.getAllVisibleAndNonVisibleOptions();
			return currentValue.map((val) => {
				const opt = options.find((o) => !this.isOptionGroup(o) && b(val, this.getOptionValue(o), this.equalityKey()));
				return opt ? this.getOptionLabel(opt) : String(val);
			}).filter(Boolean).join(", ");
		}
		const options = this.getAllVisibleAndNonVisibleOptions();
		const selectedOptionIndex = options.findIndex((option) => {
			return this.isOptionValueEqualsModelValue(option);
		});
		if (selectedOptionIndex !== -1) {
			const selectedOption = options[selectedOptionIndex];
			return this.getOptionLabel(selectedOption);
		}
		return this.getValueLabel(this.modelValue()) ?? (this.placeholder() || "p-emptylabel");
	}, ...ngDevMode ? [{ debugName: "label" }] : /* istanbul ignore next */ []);
	$ariaLabel = computed(() => this.ariaLabel() || (this.label() === "p-emptylabel" ? void 0 : this.label()), ...ngDevMode ? [{ debugName: "$ariaLabel" }] : /* istanbul ignore next */ []);
	$ariaMultiselectable = computed(() => this.multiple() || void 0, ...ngDevMode ? [{ debugName: "$ariaMultiselectable" }] : /* istanbul ignore next */ []);
	$ariaReadonly = computed(() => this.readonly() || void 0, ...ngDevMode ? [{ debugName: "$ariaReadonly" }] : /* istanbul ignore next */ []);
	$placeholder = computed(() => {
		const modelVal = this.modelValue();
		return modelVal === void 0 || modelVal === null ? this.placeholder() : void 0;
	}, ...ngDevMode ? [{ debugName: "$placeholder" }] : /* istanbul ignore next */ []);
	$required = computed(() => this.required() ? "" : void 0, ...ngDevMode ? [{ debugName: "$required" }] : /* istanbul ignore next */ []);
	$readonly = computed(() => this.readonly() ? "" : void 0, ...ngDevMode ? [{ debugName: "$readonly" }] : /* istanbul ignore next */ []);
	$disabledAttr = computed(() => this.$disabled() ? "" : void 0, ...ngDevMode ? [{ debugName: "$disabledAttr" }] : /* istanbul ignore next */ []);
	$tabindex = computed(() => !this.$disabled() ? this.tabindex() : -1, ...ngDevMode ? [{ debugName: "$tabindex" }] : /* istanbul ignore next */ []);
	filterInputValue = computed(() => this._filterValue() || "", ...ngDevMode ? [{ debugName: "filterInputValue" }] : /* istanbul ignore next */ []);
	get $ariaActivedescendant() {
		return this.focused() ? this.focusedOptionId() : void 0;
	}
	get $ariaExpanded() {
		return this.overlayVisible();
	}
	$ariaControls = computed(() => this.overlayVisible() ? this.$id() + "_list" : null, ...ngDevMode ? [{ debugName: "$ariaControls" }] : /* istanbul ignore next */ []);
	showEmptyFilterMessage = computed(() => this._filterValue() && this.isEmpty(), ...ngDevMode ? [{ debugName: "showEmptyFilterMessage" }] : /* istanbul ignore next */ []);
	showEmptyMessage = computed(() => !this._filterValue() && this.isEmpty(), ...ngDevMode ? [{ debugName: "showEmptyMessage" }] : /* istanbul ignore next */ []);
	hasEmptyTemplate = computed(() => this.emptyFilterTemplate() || this.emptyTemplate(), ...ngDevMode ? [{ debugName: "hasEmptyTemplate" }] : /* istanbul ignore next */ []);
	$ariaOwns = computed(() => this.$id() + "_list", ...ngDevMode ? [{ debugName: "$ariaOwns" }] : /* istanbul ignore next */ []);
	selectedItemContext = computed(() => ({ $implicit: this.selectedOption() }), ...ngDevMode ? [{ debugName: "selectedItemContext" }] : /* istanbul ignore next */ []);
	clearIconContext = computed(() => ({ class: this.cx("clearIcon") ?? "" }), ...ngDevMode ? [{ debugName: "clearIconContext" }] : /* istanbul ignore next */ []);
	dropdownIconContext = computed(() => ({ class: this.cx("dropdownIcon") ?? "" }), ...ngDevMode ? [{ debugName: "dropdownIconContext" }] : /* istanbul ignore next */ []);
	filterTemplateContext = computed(() => ({ options: this.filterBy() ? this.filterOptions ?? this.createFilterOptions() : {} }), ...ngDevMode ? [{ debugName: "filterTemplateContext" }] : /* istanbul ignore next */ []);
	defaultBuildInItemsContext = computed(() => ({
		$implicit: this.visibleOptions(),
		options: {}
	}), ...ngDevMode ? [{ debugName: "defaultBuildInItemsContext" }] : /* istanbul ignore next */ []);
	ariaSetSize = computed(() => this.visibleOptions().filter((option) => !this.isOptionGroup(option)).length, ...ngDevMode ? [{ debugName: "ariaSetSize" }] : /* istanbul ignore next */ []);
	containerDataP = computed(() => this.cn({
		invalid: this.invalid(),
		disabled: this.$disabled(),
		focus: this.focused(),
		fluid: this.hasFluid,
		filled: this.$variant() === "filled",
		[this.size()]: this.size()
	}), ...ngDevMode ? [{ debugName: "containerDataP" }] : /* istanbul ignore next */ []);
	labelDataP = computed(() => this.cn({
		placeholder: !this.editable() && this.label() === this.placeholder(),
		clearable: this.showClear(),
		disabled: this.$disabled(),
		[this.size()]: this.size(),
		empty: !this.editable() && !this.selectedItemTemplate() && (!this.label() || this.label() === "p-emptylabel" || this.label().length === 0)
	}), ...ngDevMode ? [{ debugName: "labelDataP" }] : /* istanbul ignore next */ []);
	dropdownIconDataP = computed(() => this.cn({ [this.size()]: this.size() }), ...ngDevMode ? [{ debugName: "dropdownIconDataP" }] : /* istanbul ignore next */ []);
	overlayDataP = computed(() => this.cn({ ["overlay-" + this.$appendTo()]: "overlay-" + this.$appendTo() }), ...ngDevMode ? [{ debugName: "overlayDataP" }] : /* istanbul ignore next */ []);
	selectedOption = signal(null, ...ngDevMode ? [{ debugName: "selectedOption" }] : /* istanbul ignore next */ []);
	constructor() {
		super();
		effect(() => {
			const modelValue = this.modelValue();
			const visibleOptions = this.visibleOptions();
			if (visibleOptions && l(visibleOptions)) {
				const selectedOptionIndex = this.findSelectedOptionIndex();
				if (selectedOptionIndex !== -1 || modelValue === void 0 || typeof modelValue === "string" && modelValue.length === 0 || this.isModelValueNotSet() || this.editable()) this.selectedOption.set(visibleOptions[selectedOptionIndex]);
				else {
					const disabledSelectedIndex = visibleOptions.findIndex((option) => this.isSelected(option));
					if (disabledSelectedIndex !== -1) this.selectedOption.set(visibleOptions[disabledSelectedIndex]);
				}
			}
			if (p(visibleOptions) && (modelValue === void 0 || this.isModelValueNotSet()) && l(this.selectedOption())) this.selectedOption.set(null);
			if (modelValue !== void 0 && this.editable()) this.updateEditableLabel();
		});
		effect(() => {
			const filterVal = this.filterValue();
			if (filterVal !== void 0) this._filterValue.set(filterVal);
		});
		effect(() => {
			const opts = this.options();
			if (!R(opts, this._options())) {
				this._options.set(opts ?? null);
				this.optionsChanged = true;
			}
		});
		afterRenderEffect((onCleanup) => {
			const inputId = this.inputId();
			if (!inputId || this.editable()) return;
			const label = (getShadowRoot(this.el.nativeElement) ?? this.document).querySelector(`label[for="${inputId}"]`);
			if (label) onCleanup(this.renderer.listen(label, "click", () => !this.$disabled() && Wt(this.focusInputViewChild()?.nativeElement)));
		});
		effect(() => {
			const options = this.visibleOptions();
			if (!this.overlayVisible()) return;
			untracked(() => {
				const index = this.focusedOptionIndex();
				if (index !== -1 && this.isValidOption(options[index])) return;
				if (index === -1 && !(this.autoOptionFocus() && !this.editable() && this._filterValue() == null)) return;
				const next = this.autoOptionFocus() ? this.findFirstFocusedOptionIndex() : this.findSelectedOptionIndex();
				this.focusedOptionIndex.set(next);
				if (next !== -1) this.scrollInView(next);
			});
		});
	}
	isModelValueNotSet() {
		return this.modelValue() === null && !this.isOptionValueEqualsModelValue(this.selectedOption());
	}
	getAllVisibleAndNonVisibleOptions() {
		return this.group() ? this.flatOptions(this._options()) : this._options() || [];
	}
	virtualScrollerDisabled = computed(() => !this.virtualScroll(), ...ngDevMode ? [{ debugName: "virtualScrollerDisabled" }] : /* istanbul ignore next */ []);
	getBuildInItemsContext(items, scrollerOptions) {
		return {
			$implicit: items,
			options: scrollerOptions
		};
	}
	getLoaderContext(scrollerOptions) {
		return { options: scrollerOptions };
	}
	getItemSizeStyle(scrollerOptions) {
		return { height: scrollerOptions.itemSize + "px" };
	}
	getGroupContext(optionGroup) {
		return { $implicit: optionGroup };
	}
	onInit() {
		this.autoUpdateModel();
		if (this.filterBy()) this.filterOptions = this.createFilterOptions();
	}
	createFilterOptions() {
		return {
			filter: (value) => this.onFilterInputChange(value),
			reset: () => this.resetFilter()
		};
	}
	onAfterViewChecked() {
		this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
		if (this.optionsChanged && this.overlayVisible()) {
			this.optionsChanged = false;
			clearTimeout(this.alignOverlayTimeout);
			this.alignOverlayTimeout = setTimeout(() => {
				if (this.overlayViewChild()) this.overlayViewChild()?.alignOverlay();
			}, 1);
		}
		if (this.selectedOptionUpdated && this.itemsWrapper) {
			if (!this.multiple()) {
				let selectedItem = nt(this.overlayViewChild()?.overlayViewChild()?.nativeElement, "li[data-p-selected=\"true\"]");
				if (selectedItem) ye(this.itemsWrapper, selectedItem);
			}
			this.selectedOptionUpdated = false;
		}
	}
	flatOptions(options) {
		return (options || []).reduce((result, option, index) => {
			result.push({
				optionGroup: option,
				group: true,
				index
			});
			const optionGroupChildren = this.getOptionGroupChildren(option);
			if (optionGroupChildren) optionGroupChildren.forEach((o) => result.push(o));
			return result;
		}, []);
	}
	autoUpdateModel() {
		if (this.selectOnFocus() && this.autoOptionFocus() && !this.hasSelectedOption()) {
			this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex());
			this.onOptionSelect(null, this.visibleOptions()[this.focusedOptionIndex()], false);
		}
	}
	onOptionSelect(event, option, isHide = true, preventChange = false) {
		if (this.isOptionDisabled(option)) return;
		if (this.multiple()) {
			this.onOptionSelectMultiple(event, option, preventChange);
			return;
		}
		if (!this.isSelected(option)) {
			const value = this.getOptionValue(option);
			this.updateModel(value, event);
			this.focusedOptionIndex.set(this.findSelectedOptionIndex());
			if (preventChange === false) this.onChange.emit({
				originalEvent: event,
				value
			});
		}
		if (isHide) this.hide(true);
	}
	onOptionSelectMultiple(event, option, preventChange = false) {
		const value = this.getOptionValue(option);
		const currentValue = this.modelValue() ?? [];
		const newValue = this.isSelected(option) ? currentValue.filter((v) => !b(v, value, this.equalityKey())) : [...currentValue, value];
		this.updateModel(newValue, event);
		if (preventChange === false) this.onChange.emit({
			originalEvent: event,
			value: newValue
		});
	}
	onOptionMouseEnter(event, index) {
		if (this.focusOnHover()) this.changeFocusedOptionIndex(event, index);
	}
	updateModel(value, _event) {
		this.value = value;
		this.onModelChange(value);
		this.writeModelValue(value);
		this.selectedOptionUpdated = true;
	}
	isSelected(option) {
		if (this.multiple()) {
			const currentValue = this.modelValue();
			if (!Array.isArray(currentValue)) return false;
			const optionValue = this.getOptionValue(option);
			return currentValue.some((v) => b(v, optionValue, this.equalityKey()));
		}
		return this.isOptionValueEqualsModelValue(option);
	}
	isOptionValueEqualsModelValue(option) {
		return option !== void 0 && option !== null && !this.isOptionGroup(option) && b(this.modelValue(), this.getOptionValue(option), this.equalityKey());
	}
	onAfterViewInit() {
		if (!isPlatformBrowser(this.platformId)) return;
		if (this.editable()) this.updateEditableLabel();
	}
	updateEditableLabel() {
		if (this.editableInputViewChild()) this.editableInputViewChild().nativeElement.value = this.getOptionLabel(this.selectedOption()) || this.getValueLabel(this.modelValue()) || this.modelValue() || "";
	}
	clearEditableLabel() {
		if (this.editableInputViewChild()) this.editableInputViewChild().nativeElement.value = "";
	}
	getOptionIndex(index, scrollerOptions) {
		return this.virtualScrollerDisabled() ? index : scrollerOptions && scrollerOptions.getItemOptions(index)["index"];
	}
	getOptionLabel(option) {
		return this.optionLabel() !== void 0 && this.optionLabel() !== null ? d(option, this.optionLabel()) : option && option.label !== void 0 ? option.label : option;
	}
	getValueLabel(value) {
		if (this.optionValue() || value == null) return null;
		const label = this.getOptionLabel(value);
		return Y(label) && label !== "" ? label : null;
	}
	getOptionValue(option) {
		return this.optionValue() && this.optionValue() !== null ? d(option, this.optionValue()) : !this.optionLabel() && option && option.value !== void 0 ? option.value : option;
	}
	getPTItemOptions(option, itemOptions, index, key) {
		return this.ptm(key, { context: {
			option,
			index,
			selected: this.isSelected(option),
			focused: this.focusedOptionIndex() === this.getOptionIndex(index, itemOptions),
			disabled: this.isOptionDisabled(option)
		} });
	}
	isSelectedOptionEmpty() {
		if (this.multiple()) {
			const currentValue = this.modelValue();
			return !Array.isArray(currentValue) || currentValue.length === 0;
		}
		return p(this.selectedOption());
	}
	isOptionDisabled(option) {
		return this.optionDisabled() ? d(option, this.optionDisabled()) : option && option.disabled !== void 0 ? option.disabled : false;
	}
	getOptionGroupLabel(optionGroup) {
		return this.optionGroupLabel() !== void 0 && this.optionGroupLabel() !== null ? d(optionGroup, this.optionGroupLabel()) : optionGroup && optionGroup.label !== void 0 ? optionGroup.label : optionGroup;
	}
	getOptionGroupChildren(optionGroup) {
		return this.optionGroupChildren() !== void 0 && this.optionGroupChildren() !== null ? d(optionGroup, this.optionGroupChildren()) : optionGroup.items;
	}
	getAriaPosInset(index) {
		return (this.optionGroupLabel() ? index - this.visibleOptions().slice(0, index).filter((option) => this.isOptionGroup(option)).length : index) + 1;
	}
	resetFilter() {
		this._filterValue.set(null);
		if (this.filterViewChild() && this.filterViewChild().nativeElement) this.filterViewChild().nativeElement.value = "";
	}
	onContainerClick(event) {
		if (this.$disabled() || this.readonly() || this.loading()) return;
		if (event.target.tagName === "INPUT" || event.target.getAttribute("data-pc-section") === "clearicon" || event.target.closest("[data-pc-section=\"clearicon\"]")) return;
		else if (!this.overlayViewChild() || !this.overlayViewChild().el.nativeElement.contains(event.target)) {
			if (this.overlayVisible()) this.hide(true);
			else this.show(true);
		}
		this.focusInputViewChild()?.nativeElement.focus({ preventScroll: true });
		this.onClick.emit(event);
		this.clicked.set(true);
	}
	isEmpty() {
		return !this._options() || this.visibleOptions() && this.visibleOptions().length === 0;
	}
	onEditableInput(event) {
		const value = event.target.value;
		this.searchValue = "";
		if (!this.searchOptions(event, value, false)) this.focusedOptionIndex.set(-1);
		this.updateModel(value || null, event);
		this.changeTimeout = setTimeout(() => {
			this.onChange.emit({
				originalEvent: event,
				value
			});
		}, 1);
		if (!this.overlayVisible() && l(value)) this.show();
	}
	show(isFocus) {
		this.overlayVisible.set(true);
		this.focusedOptionIndex.set(this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.autoOptionFocus() ? this.findFirstFocusedOptionIndex() : this.editable() ? -1 : this.findSelectedOptionIndex());
		this.warnLargeListWithoutVirtualScroll();
		if (isFocus) Wt(this.focusInputViewChild()?.nativeElement);
	}
	warnLargeListWithoutVirtualScroll() {
		if (!isDevMode() || this.largeListWarned || this.virtualScroll()) return;
		const count = this.visibleOptions().length;
		if (count > 1e3) {
			this.largeListWarned = true;
			console.warn(`[PrimeNG] Select is rendering ${count} options without virtualScroll, which scales DOM nodes and memory linearly with the option count. Enable [virtualScroll]="true" with [virtualScrollItemSize] to keep the panel lightweight.`);
		}
	}
	onOverlayBeforeEnter(event) {
		this.itemsWrapper = nt(this.overlayViewChild()?.overlayViewChild()?.nativeElement, this.virtualScroll() ? "[data-pc-name=\"virtualscroller\"]" : "[data-pc-section=\"listcontainer\"]");
		if (this.virtualScroll()) this.scroller()?.setContentEl(this.itemsViewChild()?.nativeElement);
		if (this._options() && this._options().length) {
			if (this.virtualScroll()) {
				const selectedIndex = this.modelValue() ? this.focusedOptionIndex() : -1;
				if (selectedIndex !== -1) {
					if (this.scrollToSelectedTimeout) clearTimeout(this.scrollToSelectedTimeout);
					this.scrollToSelectedTimeout = setTimeout(() => {
						this.scroller()?.scrollToIndex(selectedIndex);
					}, 10);
				}
			} else {
				let selectedListItem = nt(this.itemsWrapper, "[data-p-selected=\"true\"]");
				if (selectedListItem) selectedListItem.scrollIntoView({
					block: "nearest",
					inline: "nearest"
				});
			}
		}
		if (this.filterViewChild() && this.filterViewChild().nativeElement) {
			this.preventModelTouched = true;
			if (this.autofocusFilter() && !this.editable()) this.filterViewChild().nativeElement.focus();
		}
		this.onShow.emit(event);
	}
	onOverlayAfterLeave(event) {
		this.itemsWrapper = null;
		this.onModelTouched();
		this.onHide.emit(event);
	}
	hide(isFocus) {
		this.overlayVisible.set(false);
		this.focusedOptionIndex.set(-1);
		this.clicked.set(false);
		this.searchValue = "";
		if (this.overlayOptions()?.mode === "modal") unblockBodyScroll();
		if (this.filter() && this.resetFilterOnHide()) this.resetFilter();
		if (isFocus) {
			if (this.focusInputViewChild()) Wt(this.focusInputViewChild()?.nativeElement);
			if (this.editable() && this.editableInputViewChild()) Wt(this.editableInputViewChild()?.nativeElement);
		}
	}
	onInputFocus(event) {
		if (this.$disabled()) return;
		this.focused.set(true);
		const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.overlayVisible() && this.autoOptionFocus() ? this.findFirstFocusedOptionIndex() : -1;
		this.focusedOptionIndex.set(focusedOptionIndex);
		if (this.overlayVisible()) this.scrollInView(this.focusedOptionIndex());
		this.onFocus.emit(event);
	}
	onInputBlur(event) {
		this.focused.set(false);
		this.onBlur.emit(event);
		if (!this.preventModelTouched && !this.overlayVisible()) this.onModelTouched();
		this.preventModelTouched = false;
	}
	onKeyDown(event, search = false) {
		if (event.isComposing || event.keyCode === 229) return;
		if (this.$disabled() || this.readonly() || this.loading()) return;
		switch (event.code) {
			case "ArrowDown":
				this.onArrowDownKey(event);
				break;
			case "ArrowUp":
				this.onArrowUpKey(event, this.editable());
				break;
			case "ArrowLeft":
			case "ArrowRight":
				this.onArrowLeftKey(event, this.editable());
				break;
			case "Delete":
				this.onDeleteKey(event);
				break;
			case "Home":
				this.onHomeKey(event, this.editable());
				break;
			case "End":
				this.onEndKey(event, this.editable());
				break;
			case "PageDown":
				this.onPageDownKey(event);
				break;
			case "PageUp":
				this.onPageUpKey(event);
				break;
			case "Space":
				this.onSpaceKey(event, search);
				break;
			case "Enter":
			case "NumpadEnter":
				this.onEnterKey(event);
				break;
			case "Escape":
				this.onEscapeKey(event);
				break;
			case "Tab":
				this.onTabKey(event);
				break;
			case "Backspace":
				this.onBackspaceKey(event, this.editable());
				break;
			case "ShiftLeft":
			case "ShiftRight": break;
			default: if (!event.metaKey && J(event.key)) {
				if (!this.overlayVisible()) this.show();
				if (!this.editable()) this.searchOptions(event, event.key);
			}
		}
		this.clicked.set(false);
	}
	onFilterTemplateKeyDown(event) {
		if (this.filterTemplate() && event.target instanceof HTMLInputElement) this.onFilterKeyDown(event);
	}
	onFilterKeyDown(event) {
		if (event.isComposing || event.keyCode === 229) return;
		switch (event.code) {
			case "ArrowDown":
				this.onArrowDownKey(event);
				break;
			case "ArrowUp":
				this.onArrowUpKey(event, true);
				break;
			case "ArrowLeft":
			case "ArrowRight":
				this.onArrowLeftKey(event, true);
				break;
			case "Home":
				this.onHomeKey(event, true);
				break;
			case "End":
				this.onEndKey(event, true);
				break;
			case "Enter":
			case "NumpadEnter":
				this.onEnterKey(event, true);
				break;
			case "Escape":
				this.onEscapeKey(event);
				break;
			case "Tab": this.onTabKey(event, true);
		}
	}
	onFilterBlur(event) {
		this.focusedOptionIndex.set(-1);
	}
	onArrowDownKey(event) {
		if (!this.overlayVisible()) {
			this.show();
			if (this.editable()) this.changeFocusedOptionIndex(event, this.findSelectedOptionIndex());
		} else {
			const optionIndex = this.focusedOptionIndex() !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex()) : this.clicked() ? this.findFirstOptionIndex() : this.findFirstFocusedOptionIndex();
			this.changeFocusedOptionIndex(event, optionIndex);
		}
		event.preventDefault();
		event.stopPropagation();
	}
	changeFocusedOptionIndex(event, index, withSelection = true) {
		if (this.focusedOptionIndex() !== index) {
			this.focusedOptionIndex.set(index);
			this.scrollInView();
			if (this.selectOnFocus() && withSelection && !this.multiple()) {
				const option = this.visibleOptions()[index];
				this.onOptionSelect(event, option, false);
			}
		}
	}
	scrollInView(index = -1) {
		if (this.scrollInViewTimeout) clearTimeout(this.scrollInViewTimeout);
		this.scrollInViewTimeout = setTimeout(() => {
			const id = index !== -1 ? `${this.$id()}_${index}` : this.focusedOptionId();
			const element = this.itemsViewChild()?.nativeElement ? nt(this.itemsViewChild().nativeElement, `li[id="${id}"]`) : null;
			if (element) element.scrollIntoView?.({
				block: "nearest",
				inline: "nearest"
			});
			else if (!this.virtualScrollerDisabled() && this.virtualScroll()) this.scroller()?.scrollToIndex(index !== -1 ? index : this.focusedOptionIndex());
		}, 0);
	}
	hasSelectedOption() {
		return this.modelValue() !== void 0;
	}
	isValidSelectedOption(option) {
		return this.isValidOption(option) && this.isSelected(option);
	}
	equalityKey() {
		return this.optionValue() ? void 0 : this.dataKey();
	}
	findFirstFocusedOptionIndex() {
		const selectedIndex = this.findSelectedOptionIndex();
		return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
	}
	findFirstOptionIndex() {
		return this.visibleOptions().findIndex((option) => this.isValidOption(option));
	}
	findSelectedOptionIndex() {
		return this.hasSelectedOption() ? this.visibleOptions().findIndex((option) => this.isValidSelectedOption(option)) : -1;
	}
	findNextOptionIndex(index) {
		const matchedOptionIndex = index < this.visibleOptions().length - 1 ? this.visibleOptions().slice(index + 1).findIndex((option) => this.isValidOption(option)) : -1;
		return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
	}
	findPrevOptionIndex(index) {
		const matchedOptionIndex = index > 0 ? z(this.visibleOptions().slice(0, index), (option) => this.isValidOption(option)) : -1;
		return matchedOptionIndex > -1 ? matchedOptionIndex : index;
	}
	findLastOptionIndex() {
		return z(this.visibleOptions(), (option) => this.isValidOption(option));
	}
	findLastFocusedOptionIndex() {
		const selectedIndex = this.findSelectedOptionIndex();
		return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
	}
	isValidOption(option) {
		return option !== void 0 && option !== null && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
	}
	isOptionGroup(option) {
		return this.optionGroupLabel() !== void 0 && this.optionGroupLabel() !== null && option.optionGroup !== void 0 && option.optionGroup !== null && option.group;
	}
	isOptionFocused(index, scrollerOptions) {
		return this.focusedOptionIndex() === this.getOptionIndex(index, scrollerOptions);
	}
	trackOption(option, index) {
		if (this.isOptionGroup(option)) return `group_${option.index}`;
		const dataKey = this.dataKey();
		if (dataKey) return d(option, dataKey);
		return this.getOptionValue(option);
	}
	onArrowUpKey(event, pressedInInputText = false) {
		if (event.altKey && !pressedInInputText) {
			if (this.focusedOptionIndex() !== -1) {
				const option = this.visibleOptions()[this.focusedOptionIndex()];
				this.onOptionSelect(event, option);
			}
			if (!this.multiple() && this.overlayVisible()) this.hide();
		} else {
			const optionIndex = this.focusedOptionIndex() !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex()) : this.clicked() ? this.findLastOptionIndex() : this.findLastFocusedOptionIndex();
			this.changeFocusedOptionIndex(event, optionIndex);
			if (!this.overlayVisible()) this.show();
		}
		event.preventDefault();
		event.stopPropagation();
	}
	onArrowLeftKey(event, pressedInInputText = false) {
		if (pressedInInputText) this.focusedOptionIndex.set(-1);
	}
	onDeleteKey(event) {
		if (this.showClear()) {
			this.clear(event);
			event.preventDefault();
		}
	}
	onHomeKey(event, pressedInInputText = false) {
		if (pressedInInputText && event.currentTarget && event.currentTarget.setSelectionRange) {
			const target = event.currentTarget;
			if (event.shiftKey) target.setSelectionRange(0, target.value.length);
			else {
				target.setSelectionRange(0, 0);
				this.focusedOptionIndex.set(-1);
			}
		} else {
			this.changeFocusedOptionIndex(event, this.findFirstOptionIndex());
			if (!this.overlayVisible()) this.show();
		}
		event.preventDefault();
	}
	onEndKey(event, pressedInInputText = false) {
		if (pressedInInputText && event.currentTarget && event.currentTarget.setSelectionRange) {
			const target = event.currentTarget;
			if (event.shiftKey) target.setSelectionRange(0, target.value.length);
			else {
				const len = target.value.length;
				target.setSelectionRange(len, len);
				this.focusedOptionIndex.set(-1);
			}
		} else {
			this.changeFocusedOptionIndex(event, this.findLastOptionIndex());
			if (!this.overlayVisible()) this.show();
		}
		event.preventDefault();
	}
	onPageDownKey(event) {
		this.scrollInView(this.visibleOptions().length - 1);
		event.preventDefault();
	}
	onPageUpKey(event) {
		this.scrollInView(0);
		event.preventDefault();
	}
	onSpaceKey(event, pressedInInputText = false) {
		if (!this.editable() && !pressedInInputText) this.onEnterKey(event);
	}
	onEnterKey(event, pressedInInput = false) {
		if (!this.overlayVisible()) {
			this.focusedOptionIndex.set(-1);
			this.onArrowDownKey(event);
		} else {
			if (this.focusedOptionIndex() !== -1) {
				const option = this.visibleOptions()[this.focusedOptionIndex()];
				this.onOptionSelect(event, option);
			}
			if (!pressedInInput && !this.multiple()) this.hide();
		}
		event.preventDefault();
	}
	onEscapeKey(event) {
		if (this.overlayVisible()) {
			this.hide(true);
			event.preventDefault();
			event.stopPropagation();
		}
	}
	onTabKey(event, pressedInInputText = false) {
		if (!pressedInInputText) {
			if (this.overlayVisible() && this.hasFocusableElements()) {
				Wt(event.shiftKey ? this.lastHiddenFocusableElementOnOverlay()?.nativeElement : this.firstHiddenFocusableElementOnOverlay()?.nativeElement);
				event.preventDefault();
				event.stopPropagation();
			} else {
				const consumedByOverlay = this.overlayVisible();
				if (this.focusedOptionIndex() !== -1 && consumedByOverlay) {
					const option = this.visibleOptions()[this.focusedOptionIndex()];
					this.onOptionSelect(event, option);
				}
				if (this.overlayVisible()) this.hide(this.filter());
			}
		}
	}
	onFirstHiddenFocus(event) {
		const focusableEl = event.relatedTarget === this.focusInputViewChild()?.nativeElement ? Bt(this.overlayViewChild()?.el?.nativeElement, ":not([data-p-hidden-focusable=\"true\"])") : this.focusInputViewChild()?.nativeElement;
		Wt(focusableEl);
	}
	onLastHiddenFocus(event) {
		const focusableEl = event.relatedTarget === this.focusInputViewChild()?.nativeElement ? Vt(this.overlayViewChild()?.overlayViewChild()?.nativeElement, ":not([data-p-hidden-focusable=\"true\"])") : this.focusInputViewChild()?.nativeElement;
		Wt(focusableEl);
	}
	hasFocusableElements() {
		return x(this.overlayViewChild()?.overlayViewChild()?.nativeElement, ":not([data-p-hidden-focusable=\"true\"])").length > 0;
	}
	onBackspaceKey(event, pressedInInputText = false) {
		if (pressedInInputText) {
			if (!this.overlayVisible()) this.show();
		}
	}
	searchFields() {
		return this.filterBy()?.split(",") || this.filterFields() || [this.optionLabel()];
	}
	searchOptions(event, char, withSelection = true) {
		this.searchValue = (this.searchValue || "") + char;
		let matched = false;
		if (l(this.searchValue)) {
			let optionIndex = this.visibleOptions().findIndex((option) => this.isOptionExactMatched(option));
			if (optionIndex === -1) optionIndex = this.visibleOptions().findIndex((option) => this.isOptionMatched(option));
			if (optionIndex !== -1) matched = true;
			if (optionIndex === -1 && this.focusedOptionIndex() === -1) optionIndex = this.findFirstFocusedOptionIndex();
			if (optionIndex !== -1) this.changeFocusedOptionIndex(event, optionIndex, withSelection);
		}
		if (this.searchTimeout) clearTimeout(this.searchTimeout);
		this.searchTimeout = setTimeout(() => {
			this.searchValue = "";
			this.searchTimeout = null;
		}, 500);
		return matched;
	}
	isOptionExactMatched(option) {
		return this.isValidOption(option) && this.getOptionLabel(option).toString().toLocaleLowerCase(this.filterLocale()) === (this.searchValue ?? "").toLocaleLowerCase(this.filterLocale());
	}
	isOptionMatched(option) {
		return this.isValidOption(option) && this.getOptionLabel(option).toString().toLocaleLowerCase(this.filterLocale()).startsWith((this.searchValue ?? "").toLocaleLowerCase(this.filterLocale()));
	}
	onFilterInputChange(event) {
		let value = event.target.value;
		this._filterValue.set(value);
		this.focusedOptionIndex.set(-1);
		this.onFilter.emit({
			originalEvent: event,
			filter: this._filterValue()
		});
		if (!this.virtualScrollerDisabled()) this.scroller()?.scrollToIndex(0);
		clearTimeout(this.alignOverlayTimeout);
		this.alignOverlayTimeout = setTimeout(() => {
			this.overlayViewChild()?.alignOverlay();
		});
	}
	clearTimers() {
		clearTimeout(this.alignOverlayTimeout);
		clearTimeout(this.changeTimeout);
		clearTimeout(this.scrollToSelectedTimeout);
		clearTimeout(this.scrollInViewTimeout);
		clearTimeout(this.searchTimeout);
		this.alignOverlayTimeout = null;
		this.changeTimeout = null;
		this.scrollToSelectedTimeout = null;
		this.scrollInViewTimeout = null;
		this.searchTimeout = null;
	}
	onDestroy() {
		this.clearTimers();
	}
	applyFocus() {
		if (this.editable()) nt(this.el.nativeElement, "[data-pc-section=\"label\"]").focus();
		else Wt(this.focusInputViewChild()?.nativeElement);
	}
	focus() {
		this.applyFocus();
	}
	clear(event) {
		if (this.$disabled() || this.readonly() || this.loading()) return;
		this.updateModel(this.multiple() ? [] : null, event);
		this.clearEditableLabel();
		this.onModelTouched();
		this.onChange.emit({
			originalEvent: event,
			value: this.value
		});
		this.onClear.emit(event);
		this.resetFilter();
	}
	writeControlValue(value, setModelValue) {
		if (this.filter()) this.resetFilter();
		this.value = value;
		setModelValue(this.value);
		this.updateEditableLabel();
	}
	static ɵfac = function Select_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || Select)();
	};
	static ɵcmp = (function() {
		const _c0 = ["item"];
		const _c1 = ["group"];
		const _c2 = ["loader"];
		const _c3 = ["selectedItem"];
		const _c4 = ["header"];
		const _c5 = ["filter"];
		const _c6 = ["footer"];
		const _c7 = ["emptyfilter"];
		const _c8 = ["empty"];
		const _c9 = ["dropdownicon"];
		const _c10 = ["loadingicon"];
		const _c11 = ["clearicon"];
		const _c12 = ["filtericon"];
		const _c13 = ["onicon"];
		const _c14 = ["officon"];
		const _c15 = ["cancelicon"];
		const _c16 = ["focusInput"];
		const _c17 = ["editableInput"];
		const _c18 = ["items"];
		const _c19 = ["scroller"];
		const _c20 = ["overlay"];
		const _c21 = ["firstHiddenFocusableEl"];
		const _c22 = ["lastHiddenFocusableEl"];
		const _c23 = (a0) => ({ class: a0 });
		const _c24 = (a0) => ({ height: a0 });
		function _forTrack0($index, $item) {
			return this.trackOption($item, $index);
		}
		function Select_Conditional_0_Conditional_2_Template(rf, ctx) {
			if (rf & 1) ɵɵtext(0);
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(2);
				ɵɵtextInterpolate1(" ", ctx_r1.label() === "p-emptylabel" ? "\xA0" : ctx_r1.label(), " ");
			}
		}
		function Select_Conditional_0_Conditional_3_Conditional_0_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "span");
				ɵɵtext(1);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(3);
				ɵɵadvance();
				ɵɵtextInterpolate(ctx_r1.label() === "p-emptylabel" ? "\xA0" : ctx_r1.label());
			}
		}
		function Select_Conditional_0_Conditional_3_Conditional_1_ng_container_0_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Select_Conditional_0_Conditional_3_Conditional_1_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, Select_Conditional_0_Conditional_3_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 16);
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(3);
				ɵɵproperty("ngTemplateOutlet", ctx_r1.selectedItemTemplate())("ngTemplateOutletContext", ctx_r1.selectedItemContext());
			}
		}
		function Select_Conditional_0_Conditional_3_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, Select_Conditional_0_Conditional_3_Conditional_0_Template, 2, 1, "span")(1, Select_Conditional_0_Conditional_3_Conditional_1_Template, 1, 2, "ng-container");
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(2);
				ɵɵconditional(ctx_r1.isSelectedOptionEmpty() ? 0 : 1);
			}
		}
		function Select_Conditional_0_Template(rf, ctx) {
			if (rf & 1) {
				const _r1 = ɵɵgetCurrentView();
				ɵɵelementStart(0, "span", 15, 2);
				ɵɵlistener("focus", function Select_Conditional_0_Template_span_focus_0_listener($event) {
					ɵɵrestoreView(_r1);
					const ctx_r1 = ɵɵnextContext();
					return ɵɵresetView(ctx_r1.onInputFocus($event));
				})("blur", function Select_Conditional_0_Template_span_blur_0_listener($event) {
					ɵɵrestoreView(_r1);
					const ctx_r1 = ɵɵnextContext();
					return ɵɵresetView(ctx_r1.onInputBlur($event));
				})("keydown", function Select_Conditional_0_Template_span_keydown_0_listener($event) {
					ɵɵrestoreView(_r1);
					const ctx_r1 = ɵɵnextContext();
					return ɵɵresetView(ctx_r1.onKeyDown($event));
				});
				ɵɵconditionalCreate(2, Select_Conditional_0_Conditional_2_Template, 1, 1)(3, Select_Conditional_0_Conditional_3_Template, 2, 1);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext();
				ɵɵclassMap(ctx_r1.cx("label"));
				ɵɵproperty("pBind", ctx_r1.ptm("label"))("pTooltip", ctx_r1.tooltip())("pTooltipUnstyled", ctx_r1.unstyled())("tooltipPosition", ctx_r1.tooltipPosition())("positionStyle", ctx_r1.tooltipPositionStyle())("tooltipStyleClass", ctx_r1.tooltipStyleClass())("pAutoFocus", ctx_r1.autofocus());
				ɵɵattribute("aria-disabled", ctx_r1.$disabled())("id", ctx_r1.inputId())("aria-label", ctx_r1.$ariaLabel())("aria-labelledby", ctx_r1.ariaLabelledBy())("aria-haspopup", "listbox")("aria-expanded", ctx_r1.$ariaExpanded)("aria-readonly", ctx_r1.$ariaReadonly())("aria-controls", ctx_r1.$ariaControls())("tabindex", ctx_r1.$tabindex())("aria-activedescendant", ctx_r1.$ariaActivedescendant)("aria-required", ctx_r1.required())("disabled", ctx_r1.$disabledAttr())("data-p", ctx_r1.labelDataP());
				ɵɵadvance(2);
				ɵɵconditional(!ctx_r1.selectedItemTemplate() ? 2 : 3);
			}
		}
		function Select_Conditional_1_Template(rf, ctx) {
			if (rf & 1) {
				const _r3 = ɵɵgetCurrentView();
				ɵɵelementStart(0, "input", 17, 3);
				ɵɵlistener("input", function Select_Conditional_1_Template_input_input_0_listener($event) {
					ɵɵrestoreView(_r3);
					const ctx_r1 = ɵɵnextContext();
					return ɵɵresetView(ctx_r1.onEditableInput($event));
				})("keydown", function Select_Conditional_1_Template_input_keydown_0_listener($event) {
					ɵɵrestoreView(_r3);
					const ctx_r1 = ɵɵnextContext();
					return ɵɵresetView(ctx_r1.onKeyDown($event));
				})("focus", function Select_Conditional_1_Template_input_focus_0_listener($event) {
					ɵɵrestoreView(_r3);
					const ctx_r1 = ɵɵnextContext();
					return ɵɵresetView(ctx_r1.onInputFocus($event));
				})("blur", function Select_Conditional_1_Template_input_blur_0_listener($event) {
					ɵɵrestoreView(_r3);
					const ctx_r1 = ɵɵnextContext();
					return ɵɵresetView(ctx_r1.onInputBlur($event));
				});
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext();
				ɵɵclassMap(ctx_r1.cx("label"));
				ɵɵproperty("pBind", ctx_r1.ptm("label"))("pAutoFocus", ctx_r1.autofocus());
				ɵɵattribute("id", ctx_r1.inputId())("aria-autocomplete", "list")("aria-haspopup", "listbox")("aria-expanded", ctx_r1.$ariaExpanded)("aria-controls", ctx_r1.$ariaControls())("placeholder", ctx_r1.$placeholder())("aria-label", ctx_r1.ariaLabel())("aria-labelledby", ctx_r1.ariaLabelledBy())("aria-activedescendant", ctx_r1.$ariaActivedescendant)("name", ctx_r1.name())("minlength", ctx_r1.minlength())("min", ctx_r1.min())("max", ctx_r1.max())("pattern", ctx_r1.$pattern())("size", ctx_r1.inputSize())("maxlength", ctx_r1.maxlength())("required", ctx_r1.$required())("readonly", ctx_r1.$readonly())("disabled", ctx_r1.$disabledAttr())("data-p", ctx_r1.labelDataP());
			}
		}
		function Select_Conditional_2_Conditional_0_Template(rf, ctx) {
			if (rf & 1) {
				const _r4 = ɵɵgetCurrentView();
				ɵɵnamespaceSVG();
				ɵɵelementStart(0, "svg", 20);
				ɵɵlistener("click", function Select_Conditional_2_Conditional_0_Template_svg_click_0_listener($event) {
					ɵɵrestoreView(_r4);
					const ctx_r1 = ɵɵnextContext(2);
					return ɵɵresetView(ctx_r1.clear($event));
				});
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(2);
				ɵɵclassMap(ctx_r1.cx("clearIcon"));
				ɵɵproperty("pBind", ctx_r1.ptm("clearIcon"));
				ɵɵattribute("data-pc-section", "clearicon");
			}
		}
		function Select_Conditional_2_Conditional_1_1_ng_template_0_Template(rf, ctx) {}
		function Select_Conditional_2_Conditional_1_1_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, Select_Conditional_2_Conditional_1_1_ng_template_0_Template, 0, 0, "ng-template");
		}
		function Select_Conditional_2_Conditional_1_Template(rf, ctx) {
			if (rf & 1) {
				const _r5 = ɵɵgetCurrentView();
				ɵɵelementStart(0, "span", 21);
				ɵɵlistener("click", function Select_Conditional_2_Conditional_1_Template_span_click_0_listener($event) {
					ɵɵrestoreView(_r5);
					const ctx_r1 = ɵɵnextContext(2);
					return ɵɵresetView(ctx_r1.clear($event));
				});
				ɵɵtemplate(1, Select_Conditional_2_Conditional_1_1_Template, 1, 0, null, 16);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(2);
				ɵɵclassMap(ctx_r1.cx("clearIcon"));
				ɵɵproperty("pBind", ctx_r1.ptm("clearIcon"));
				ɵɵattribute("data-pc-section", "clearicon");
				ɵɵadvance();
				ɵɵproperty("ngTemplateOutlet", ctx_r1.clearIconTemplate())("ngTemplateOutletContext", ctx_r1.clearIconContext());
			}
		}
		function Select_Conditional_2_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, Select_Conditional_2_Conditional_0_Template, 1, 4, "svg", 18)(1, Select_Conditional_2_Conditional_1_Template, 2, 6, "span", 19);
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext();
				ɵɵconditional(!ctx_r1.clearIconTemplate() ? 0 : 1);
			}
		}
		function Select_Conditional_4_Conditional_0_ng_container_0_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Select_Conditional_4_Conditional_0_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, Select_Conditional_4_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 22);
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(2);
				ɵɵproperty("ngTemplateOutlet", ctx_r1.loadingIconTemplate());
			}
		}
		function Select_Conditional_4_Conditional_1_Conditional_0_Template(rf, ctx) {
			if (rf & 1) ɵɵelement(0, "span", 24);
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(3);
				ɵɵclassMap(ctx_r1.cn(ctx_r1.cx("loadingIcon"), "pi-spin" + ctx_r1.loadingIcon()));
				ɵɵproperty("pBind", ctx_r1.ptm("loadingIcon"));
			}
		}
		function Select_Conditional_4_Conditional_1_Conditional_1_Template(rf, ctx) {
			if (rf & 1) ɵɵelement(0, "span", 24);
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(3);
				ɵɵclassMap(ctx_r1.cn(ctx_r1.cx("loadingIcon"), "pi pi-spinner pi-spin"));
				ɵɵproperty("pBind", ctx_r1.ptm("loadingIcon"));
			}
		}
		function Select_Conditional_4_Conditional_1_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, Select_Conditional_4_Conditional_1_Conditional_0_Template, 1, 3, "span", 23)(1, Select_Conditional_4_Conditional_1_Conditional_1_Template, 1, 3, "span", 23);
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(2);
				ɵɵconditional(ctx_r1.loadingIcon() ? 0 : 1);
			}
		}
		function Select_Conditional_4_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, Select_Conditional_4_Conditional_0_Template, 1, 1, "ng-container")(1, Select_Conditional_4_Conditional_1_Template, 2, 1);
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext();
				ɵɵconditional(ctx_r1.loadingIconTemplate() ? 0 : 1);
			}
		}
		function Select_Conditional_5_Conditional_0_Conditional_0_Template(rf, ctx) {
			if (rf & 1) ɵɵelement(0, "span", 26);
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(3);
				ɵɵclassMap(ctx_r1.cn(ctx_r1.cx("dropdownIcon"), ctx_r1.dropdownIcon()));
				ɵɵproperty("pBind", ctx_r1.ptm("dropdownIcon"));
				ɵɵattribute("aria-hidden", true)("data-p", ctx_r1.dropdownIconDataP());
			}
		}
		function Select_Conditional_5_Conditional_0_Conditional_1_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵelement(0, "svg", 27);
			}
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(3);
				ɵɵclassMap(ctx_r1.cx("dropdownIcon"));
				ɵɵproperty("pBind", ctx_r1.ptm("dropdownIcon"));
				ɵɵattribute("aria-hidden", true)("data-p", ctx_r1.dropdownIconDataP());
			}
		}
		function Select_Conditional_5_Conditional_0_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, Select_Conditional_5_Conditional_0_Conditional_0_Template, 1, 5, "span", 19)(1, Select_Conditional_5_Conditional_0_Conditional_1_Template, 1, 5, "svg", 25);
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(2);
				ɵɵconditional(ctx_r1.dropdownIcon() ? 0 : 1);
			}
		}
		function Select_Conditional_5_Conditional_1_1_ng_template_0_Template(rf, ctx) {}
		function Select_Conditional_5_Conditional_1_1_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, Select_Conditional_5_Conditional_1_1_ng_template_0_Template, 0, 0, "ng-template");
		}
		function Select_Conditional_5_Conditional_1_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "span", 26);
				ɵɵtemplate(1, Select_Conditional_5_Conditional_1_1_Template, 1, 0, null, 16);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(2);
				ɵɵclassMap(ctx_r1.cx("dropdownIcon"));
				ɵɵproperty("pBind", ctx_r1.ptm("dropdownIcon"));
				ɵɵattribute("aria-hidden", true);
				ɵɵadvance();
				ɵɵproperty("ngTemplateOutlet", ctx_r1.dropdownIconTemplate())("ngTemplateOutletContext", ctx_r1.dropdownIconContext());
			}
		}
		function Select_Conditional_5_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, Select_Conditional_5_Conditional_0_Template, 2, 1)(1, Select_Conditional_5_Conditional_1_Template, 2, 6, "span", 19);
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext();
				ɵɵconditional(!ctx_r1.dropdownIconTemplate() ? 0 : 1);
			}
		}
		function Select_ng_template_8_ng_container_3_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Select_ng_template_8_Conditional_4_Conditional_1_ng_container_0_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Select_ng_template_8_Conditional_4_Conditional_1_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, Select_ng_template_8_Conditional_4_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 16);
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(3);
				ɵɵproperty("ngTemplateOutlet", ctx_r1.filterTemplate())("ngTemplateOutletContext", ctx_r1.filterTemplateContext());
			}
		}
		function Select_ng_template_8_Conditional_4_Conditional_2_Conditional_4_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵelement(0, "svg", 35);
			}
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(4);
				ɵɵproperty("pBind", ctx_r1.ptm("filterIcon"));
			}
		}
		function Select_ng_template_8_Conditional_4_Conditional_2_Conditional_5_1_ng_template_0_Template(rf, ctx) {}
		function Select_ng_template_8_Conditional_4_Conditional_2_Conditional_5_1_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, Select_ng_template_8_Conditional_4_Conditional_2_Conditional_5_1_ng_template_0_Template, 0, 0, "ng-template");
		}
		function Select_ng_template_8_Conditional_4_Conditional_2_Conditional_5_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "span", 26);
				ɵɵtemplate(1, Select_ng_template_8_Conditional_4_Conditional_2_Conditional_5_1_Template, 1, 0, null, 22);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(4);
				ɵɵproperty("pBind", ctx_r1.ptm("filterIcon"));
				ɵɵadvance();
				ɵɵproperty("ngTemplateOutlet", ctx_r1.filterIconTemplate());
			}
		}
		function Select_ng_template_8_Conditional_4_Conditional_2_Template(rf, ctx) {
			if (rf & 1) {
				const _r8 = ɵɵgetCurrentView();
				ɵɵelementStart(0, "p-iconfield", 33)(1, "input", 34, 7);
				ɵɵlistener("input", function Select_ng_template_8_Conditional_4_Conditional_2_Template_input_input_1_listener($event) {
					ɵɵrestoreView(_r8);
					const ctx_r1 = ɵɵnextContext(3);
					return ɵɵresetView(ctx_r1.onFilterInputChange($event));
				})("keydown", function Select_ng_template_8_Conditional_4_Conditional_2_Template_input_keydown_1_listener($event) {
					ɵɵrestoreView(_r8);
					const ctx_r1 = ɵɵnextContext(3);
					return ɵɵresetView(ctx_r1.onFilterKeyDown($event));
				})("blur", function Select_ng_template_8_Conditional_4_Conditional_2_Template_input_blur_1_listener($event) {
					ɵɵrestoreView(_r8);
					const ctx_r1 = ɵɵnextContext(3);
					return ɵɵresetView(ctx_r1.onFilterBlur($event));
				});
				ɵɵelementEnd();
				ɵɵelementStart(3, "p-inputicon", 33);
				ɵɵconditionalCreate(4, Select_ng_template_8_Conditional_4_Conditional_2_Conditional_4_Template, 1, 1, "svg", 35)(5, Select_ng_template_8_Conditional_4_Conditional_2_Conditional_5_Template, 2, 2, "span", 26);
				ɵɵelementEnd()();
			}
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(3);
				ɵɵproperty("pt", ctx_r1.ptm("pcFilterContainer"))("unstyled", ctx_r1.unstyled());
				ɵɵadvance();
				ɵɵclassMap(ctx_r1.cx("pcFilter"));
				ɵɵproperty("pSize", ctx_r1.size())("value", ctx_r1.filterInputValue())("variant", ctx_r1.$variant())("pt", ctx_r1.ptm("pcFilter"))("unstyled", ctx_r1.unstyled());
				ɵɵattribute("placeholder", ctx_r1.filterPlaceholder())("aria-owns", ctx_r1.$ariaOwns())("aria-label", ctx_r1.ariaFilterLabel())("aria-activedescendant", ctx_r1.focusedOptionId());
				ɵɵadvance(2);
				ɵɵproperty("pt", ctx_r1.ptm("pcFilterIconContainer"))("unstyled", ctx_r1.unstyled());
				ɵɵadvance();
				ɵɵconditional(!ctx_r1.filterIconTemplate() ? 4 : 5);
			}
		}
		function Select_ng_template_8_Conditional_4_Template(rf, ctx) {
			if (rf & 1) {
				const _r7 = ɵɵgetCurrentView();
				ɵɵelementStart(0, "div", 32);
				ɵɵlistener("click", function Select_ng_template_8_Conditional_4_Template_div_click_0_listener($event) {
					return $event.stopPropagation();
				})("keydown", function Select_ng_template_8_Conditional_4_Template_div_keydown_0_listener($event) {
					ɵɵrestoreView(_r7);
					const ctx_r1 = ɵɵnextContext(2);
					return ɵɵresetView(ctx_r1.onFilterTemplateKeyDown($event));
				});
				ɵɵconditionalCreate(1, Select_ng_template_8_Conditional_4_Conditional_1_Template, 1, 2, "ng-container")(2, Select_ng_template_8_Conditional_4_Conditional_2_Template, 6, 16, "p-iconfield", 33);
				ɵɵelementStart(3, "span", 31);
				ɵɵtext(4);
				ɵɵelementEnd()();
			}
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(2);
				ɵɵclassMap(ctx_r1.cx("header"));
				ɵɵproperty("pBind", ctx_r1.ptm("header"));
				ɵɵadvance();
				ɵɵconditional(ctx_r1.filterTemplate() ? 1 : 2);
				ɵɵadvance(2);
				ɵɵclassMap(ctx_r1.pcn("p-hidden-accessible"));
				ɵɵproperty("pBind", ctx_r1.ptm("hiddenFilterResult"));
				ɵɵattribute("data-p-hidden-accessible", true);
				ɵɵadvance();
				ɵɵtextInterpolate1(" ", ctx_r1.filterResultMessageText(), " ");
			}
		}
		function Select_ng_template_8_Conditional_6_ng_template_2_ng_container_0_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Select_ng_template_8_Conditional_6_ng_template_2_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, Select_ng_template_8_Conditional_6_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 16);
			if (rf & 2) {
				const items_r10 = ctx.$implicit;
				const scrollerOptions_r11 = ctx.options;
				ɵɵnextContext(2);
				const buildInItems_r12 = ɵɵreference(9);
				const ctx_r1 = ɵɵnextContext();
				ɵɵproperty("ngTemplateOutlet", buildInItems_r12)("ngTemplateOutletContext", ctx_r1.getBuildInItemsContext(items_r10, scrollerOptions_r11));
			}
		}
		function Select_ng_template_8_Conditional_6_Conditional_4_ng_template_0_ng_container_0_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Select_ng_template_8_Conditional_6_Conditional_4_ng_template_0_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, Select_ng_template_8_Conditional_6_Conditional_4_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 16);
			if (rf & 2) {
				const scrollerOptions_r13 = ctx.options;
				const ctx_r1 = ɵɵnextContext(4);
				ɵɵproperty("ngTemplateOutlet", ctx_r1.loaderTemplate())("ngTemplateOutletContext", ctx_r1.getLoaderContext(scrollerOptions_r13));
			}
		}
		function Select_ng_template_8_Conditional_6_Conditional_4_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, Select_ng_template_8_Conditional_6_Conditional_4_ng_template_0_Template, 1, 2, "ng-template", null, 9, ɵɵtemplateRefExtractor);
		}
		function Select_ng_template_8_Conditional_6_Template(rf, ctx) {
			if (rf & 1) {
				const _r9 = ɵɵgetCurrentView();
				ɵɵelementStart(0, "p-scroller", 36, 8);
				ɵɵlistener("onLazyLoad", function Select_ng_template_8_Conditional_6_Template_p_scroller_onLazyLoad_0_listener($event) {
					ɵɵrestoreView(_r9);
					const ctx_r1 = ɵɵnextContext(2);
					return ɵɵresetView(ctx_r1.onLazyLoad.emit($event));
				});
				ɵɵtemplate(2, Select_ng_template_8_Conditional_6_ng_template_2_Template, 1, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor);
				ɵɵconditionalCreate(4, Select_ng_template_8_Conditional_6_Conditional_4_Template, 2, 0);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(2);
				ɵɵstyleMap(ɵɵpureFunction1(9, _c24, ctx_r1.scrollHeight()));
				ɵɵproperty("items", ctx_r1.visibleOptions())("itemSize", ctx_r1.virtualScrollItemSize())("autoSize", true)("lazy", ctx_r1.lazy())("options", ctx_r1.virtualScrollOptions())("pt", ctx_r1.ptm("virtualScroller"));
				ɵɵadvance(4);
				ɵɵconditional(ctx_r1.loaderTemplate() ? 4 : -1);
			}
		}
		function Select_ng_template_8_Conditional_7_ng_container_0_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Select_ng_template_8_Conditional_7_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, Select_ng_template_8_Conditional_7_ng_container_0_Template, 1, 0, "ng-container", 16);
			if (rf & 2) {
				ɵɵnextContext();
				const buildInItems_r12 = ɵɵreference(9);
				const ctx_r1 = ɵɵnextContext();
				ɵɵproperty("ngTemplateOutlet", buildInItems_r12)("ngTemplateOutletContext", ctx_r1.defaultBuildInItemsContext());
			}
		}
		function Select_ng_template_8_ng_template_8_For_3_Conditional_0_Conditional_1_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "span", 26);
				ɵɵtext(1);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const option_r14 = ɵɵnextContext(2).$implicit;
				const ctx_r1 = ɵɵnextContext(3);
				ɵɵclassMap(ctx_r1.cx("optionGroupLabel"));
				ɵɵproperty("pBind", ctx_r1.ptm("optionGroupLabel"));
				ɵɵadvance();
				ɵɵtextInterpolate(ctx_r1.getOptionGroupLabel(option_r14.optionGroup));
			}
		}
		function Select_ng_template_8_ng_template_8_For_3_Conditional_0_ng_container_2_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Select_ng_template_8_ng_template_8_For_3_Conditional_0_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "li", 40);
				ɵɵconditionalCreate(1, Select_ng_template_8_ng_template_8_For_3_Conditional_0_Conditional_1_Template, 2, 4, "span", 19);
				ɵɵtemplate(2, Select_ng_template_8_ng_template_8_For_3_Conditional_0_ng_container_2_Template, 1, 0, "ng-container", 16);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r14 = ɵɵnextContext();
				const option_r14 = ctx_r14.$implicit;
				const ɵ$index_127_r16 = ctx_r14.$index;
				const scrollerOptions_r17 = ɵɵnextContext().options;
				const ctx_r1 = ɵɵnextContext(2);
				ɵɵstyleMap(ctx_r1.getItemSizeStyle(scrollerOptions_r17));
				ɵɵclassMap(ctx_r1.cx("optionGroup"));
				ɵɵproperty("pBind", ctx_r1.ptm("optionGroup"));
				ɵɵattribute("id", ctx_r1.$id() + "_" + ctx_r1.getOptionIndex(ɵ$index_127_r16, scrollerOptions_r17));
				ɵɵadvance();
				ɵɵconditional(!ctx_r1.groupTemplate() ? 1 : -1);
				ɵɵadvance();
				ɵɵproperty("ngTemplateOutlet", ctx_r1.groupTemplate())("ngTemplateOutletContext", ctx_r1.getGroupContext(option_r14.optionGroup));
			}
		}
		function Select_ng_template_8_ng_template_8_For_3_Conditional_1_Template(rf, ctx) {
			if (rf & 1) {
				const _r18 = ɵɵgetCurrentView();
				ɵɵelementStart(0, "p-select-item", 41);
				ɵɵlistener("onClick", function Select_ng_template_8_ng_template_8_For_3_Conditional_1_Template_p_select_item_onClick_0_listener($event) {
					ɵɵrestoreView(_r18);
					const option_r14 = ɵɵnextContext().$implicit;
					const ctx_r1 = ɵɵnextContext(3);
					return ɵɵresetView(ctx_r1.onOptionSelect($event, option_r14));
				})("onMouseEnter", function Select_ng_template_8_ng_template_8_For_3_Conditional_1_Template_p_select_item_onMouseEnter_0_listener($event) {
					ɵɵrestoreView(_r18);
					const ɵ$index_127_r16 = ɵɵnextContext().$index;
					const scrollerOptions_r17 = ɵɵnextContext().options;
					const ctx_r1 = ɵɵnextContext(2);
					return ɵɵresetView(ctx_r1.onOptionMouseEnter($event, ctx_r1.getOptionIndex(ɵ$index_127_r16, scrollerOptions_r17)));
				});
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r14 = ɵɵnextContext();
				const option_r14 = ctx_r14.$implicit;
				const ɵ$index_127_r16 = ctx_r14.$index;
				const scrollerOptions_r17 = ɵɵnextContext().options;
				const ctx_r1 = ɵɵnextContext(2);
				ɵɵproperty("id", ctx_r1.$id() + "_" + ctx_r1.getOptionIndex(ɵ$index_127_r16, scrollerOptions_r17))("option", option_r14)("checkmark", ctx_r1.checkmark())("selected", ctx_r1.isSelected(option_r14))("label", ctx_r1.getOptionLabel(option_r14))("disabled", ctx_r1.isOptionDisabled(option_r14))("template", ctx_r1.itemTemplate())("focused", ctx_r1.isOptionFocused(ɵ$index_127_r16, scrollerOptions_r17))("ariaPosInset", ctx_r1.getAriaPosInset(ctx_r1.getOptionIndex(ɵ$index_127_r16, scrollerOptions_r17)))("ariaSetSize", ctx_r1.ariaSetSize())("index", ɵ$index_127_r16)("unstyled", ctx_r1.unstyled())("scrollerOptions", scrollerOptions_r17);
			}
		}
		function Select_ng_template_8_ng_template_8_For_3_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, Select_ng_template_8_ng_template_8_For_3_Conditional_0_Template, 3, 9, "li", 38)(1, Select_ng_template_8_ng_template_8_For_3_Conditional_1_Template, 1, 13, "p-select-item", 39);
			if (rf & 2) {
				const option_r14 = ctx.$implicit;
				const ctx_r1 = ɵɵnextContext(3);
				ɵɵconditional(ctx_r1.isOptionGroup(option_r14) ? 0 : 1);
			}
		}
		function Select_ng_template_8_ng_template_8_Conditional_4_Conditional_1_Template(rf, ctx) {
			if (rf & 1) ɵɵtext(0);
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(4);
				ɵɵtextInterpolate1(" ", ctx_r1.emptyFilterMessageLabel(), " ");
			}
		}
		function Select_ng_template_8_ng_template_8_Conditional_4_Conditional_2_ng_container_0_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Select_ng_template_8_ng_template_8_Conditional_4_Conditional_2_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, Select_ng_template_8_ng_template_8_Conditional_4_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 22);
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(4);
				ɵɵproperty("ngTemplateOutlet", ctx_r1.hasEmptyTemplate());
			}
		}
		function Select_ng_template_8_ng_template_8_Conditional_4_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "li", 40);
				ɵɵconditionalCreate(1, Select_ng_template_8_ng_template_8_Conditional_4_Conditional_1_Template, 1, 1)(2, Select_ng_template_8_ng_template_8_Conditional_4_Conditional_2_Template, 1, 1, "ng-container");
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const scrollerOptions_r17 = ɵɵnextContext().options;
				const ctx_r1 = ɵɵnextContext(2);
				ɵɵstyleMap(ctx_r1.getItemSizeStyle(scrollerOptions_r17));
				ɵɵclassMap(ctx_r1.cx("emptyMessage"));
				ɵɵproperty("pBind", ctx_r1.ptm("emptyMessage"));
				ɵɵadvance();
				ɵɵconditional(!ctx_r1.hasEmptyTemplate() ? 1 : 2);
			}
		}
		function Select_ng_template_8_ng_template_8_Conditional_5_Conditional_1_Template(rf, ctx) {
			if (rf & 1) ɵɵtext(0);
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(4);
				ɵɵtextInterpolate1(" ", ctx_r1.emptyMessageLabel() || ctx_r1.emptyFilterMessageLabel(), " ");
			}
		}
		function Select_ng_template_8_ng_template_8_Conditional_5_Conditional_2_ng_container_0_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Select_ng_template_8_ng_template_8_Conditional_5_Conditional_2_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, Select_ng_template_8_ng_template_8_Conditional_5_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 22);
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(4);
				ɵɵproperty("ngTemplateOutlet", ctx_r1.emptyTemplate());
			}
		}
		function Select_ng_template_8_ng_template_8_Conditional_5_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "li", 40);
				ɵɵconditionalCreate(1, Select_ng_template_8_ng_template_8_Conditional_5_Conditional_1_Template, 1, 1)(2, Select_ng_template_8_ng_template_8_Conditional_5_Conditional_2_Template, 1, 1, "ng-container");
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const scrollerOptions_r17 = ɵɵnextContext().options;
				const ctx_r1 = ɵɵnextContext(2);
				ɵɵstyleMap(ctx_r1.getItemSizeStyle(scrollerOptions_r17));
				ɵɵclassMap(ctx_r1.cx("emptyMessage"));
				ɵɵproperty("pBind", ctx_r1.ptm("emptyMessage"));
				ɵɵadvance();
				ɵɵconditional(!ctx_r1.emptyTemplate() ? 1 : 2);
			}
		}
		function Select_ng_template_8_ng_template_8_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "ul", 37, 10);
				ɵɵrepeaterCreate(2, Select_ng_template_8_ng_template_8_For_3_Template, 2, 1, null, null, _forTrack0, true);
				ɵɵconditionalCreate(4, Select_ng_template_8_ng_template_8_Conditional_4_Template, 3, 6, "li", 38);
				ɵɵconditionalCreate(5, Select_ng_template_8_ng_template_8_Conditional_5_Template, 3, 6, "li", 38);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const items_r19 = ctx.$implicit;
				const scrollerOptions_r17 = ctx.options;
				const ctx_r1 = ɵɵnextContext(2);
				ɵɵstyleMap(scrollerOptions_r17.contentStyle);
				ɵɵclassMap(ctx_r1.cn(ctx_r1.cx("list"), scrollerOptions_r17.contentStyleClass));
				ɵɵproperty("pBind", ctx_r1.ptm("list"));
				ɵɵattribute("id", ctx_r1.$id() + "_list")("aria-label", ctx_r1.listLabel())("aria-multiselectable", ctx_r1.$ariaMultiselectable());
				ɵɵadvance(2);
				ɵɵrepeater(items_r19);
				ɵɵadvance(2);
				ɵɵconditional(ctx_r1.showEmptyFilterMessage() ? 4 : -1);
				ɵɵadvance();
				ɵɵconditional(ctx_r1.showEmptyMessage() ? 5 : -1);
			}
		}
		function Select_ng_template_8_ng_container_10_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Select_ng_template_8_Conditional_11_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "span", 31);
				ɵɵtext(1);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(2);
				ɵɵclassMap(ctx_r1.pcn("p-hidden-accessible"));
				ɵɵproperty("pBind", ctx_r1.ptm("hiddenEmptyMessage"));
				ɵɵattribute("data-p-hidden-accessible", true);
				ɵɵadvance();
				ɵɵtextInterpolate1(" ", ctx_r1.emptyMessageLabel(), " ");
			}
		}
		function Select_ng_template_8_Template(rf, ctx) {
			if (rf & 1) {
				const _r6 = ɵɵgetCurrentView();
				ɵɵelementStart(0, "div", 26)(1, "span", 28, 4);
				ɵɵlistener("focus", function Select_ng_template_8_Template_span_focus_1_listener($event) {
					ɵɵrestoreView(_r6);
					const ctx_r1 = ɵɵnextContext();
					return ɵɵresetView(ctx_r1.onFirstHiddenFocus($event));
				});
				ɵɵelementEnd();
				ɵɵtemplate(3, Select_ng_template_8_ng_container_3_Template, 1, 0, "ng-container", 16);
				ɵɵconditionalCreate(4, Select_ng_template_8_Conditional_4_Template, 5, 9, "div", 19);
				ɵɵelementStart(5, "div", 26);
				ɵɵconditionalCreate(6, Select_ng_template_8_Conditional_6_Template, 5, 11, "p-scroller", 29)(7, Select_ng_template_8_Conditional_7_Template, 1, 2, "ng-container");
				ɵɵtemplate(8, Select_ng_template_8_ng_template_8_Template, 6, 10, "ng-template", null, 5, ɵɵtemplateRefExtractor);
				ɵɵelementEnd();
				ɵɵtemplate(10, Select_ng_template_8_ng_container_10_Template, 1, 0, "ng-container", 22);
				ɵɵconditionalCreate(11, Select_ng_template_8_Conditional_11_Template, 2, 5, "span", 30);
				ɵɵelementStart(12, "span", 31);
				ɵɵtext(13);
				ɵɵelementEnd();
				ɵɵelementStart(14, "span", 28, 6);
				ɵɵlistener("focus", function Select_ng_template_8_Template_span_focus_14_listener($event) {
					ɵɵrestoreView(_r6);
					const ctx_r1 = ɵɵnextContext();
					return ɵɵresetView(ctx_r1.onLastHiddenFocus($event));
				});
				ɵɵelementEnd()();
			}
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext();
				ɵɵstyleMap(ctx_r1.panelStyle());
				ɵɵclassMap(ctx_r1.cn(ctx_r1.cx("overlay"), ctx_r1.panelStyleClass()));
				ɵɵproperty("pBind", ctx_r1.ptm("overlay"));
				ɵɵattribute("data-p", ctx_r1.overlayDataP());
				ɵɵadvance();
				ɵɵclassMap(ctx_r1.pcn("p-hidden-accessible p-hidden-focusable"));
				ɵɵproperty("pBind", ctx_r1.ptm("hiddenFirstFocusableEl"));
				ɵɵattribute("tabindex", 0)("data-p-hidden-accessible", true)("data-p-hidden-focusable", true);
				ɵɵadvance(2);
				ɵɵproperty("ngTemplateOutlet", ctx_r1.headerTemplate())("ngTemplateOutletContext", ɵɵpureFunction1(34, _c23, ctx_r1.cx("header")));
				ɵɵadvance();
				ɵɵconditional(ctx_r1.filter() ? 4 : -1);
				ɵɵadvance();
				ɵɵclassMap(ctx_r1.cx("listContainer"));
				ɵɵstyleProp("max-height", ctx_r1.virtualScroll() ? "auto" : ctx_r1.scrollHeight() || "auto");
				ɵɵproperty("pBind", ctx_r1.ptm("listContainer"));
				ɵɵadvance();
				ɵɵconditional(ctx_r1.virtualScroll() ? 6 : 7);
				ɵɵadvance(4);
				ɵɵproperty("ngTemplateOutlet", ctx_r1.footerTemplate());
				ɵɵadvance();
				ɵɵconditional(!ctx_r1.filter() && !ctx_r1._options()?.length ? 11 : -1);
				ɵɵadvance();
				ɵɵclassMap(ctx_r1.pcn("p-hidden-accessible"));
				ɵɵproperty("pBind", ctx_r1.ptm("hiddenSelectedMessage"));
				ɵɵattribute("data-p-hidden-accessible", true);
				ɵɵadvance();
				ɵɵtextInterpolate1(" ", ctx_r1.selectedMessageText(), " ");
				ɵɵadvance();
				ɵɵclassMap(ctx_r1.pcn("p-hidden-accessible p-hidden-focusable"));
				ɵɵproperty("pBind", ctx_r1.ptm("hiddenLastFocusableEl"));
				ɵɵattribute("tabindex", 0)("data-p-hidden-accessible", true)("data-p-hidden-focusable", true);
			}
		}
		return /*@__PURE__*/ ɵɵdefineComponent({
			type: Select,
			selectors: [["p-select"]],
			contentQueries: function Select_ContentQueries(rf, ctx, dirIndex) {
				if (rf & 1) ɵɵcontentQuerySignal(dirIndex, ctx.itemTemplate, _c0, 4)(dirIndex, ctx.groupTemplate, _c1, 4)(dirIndex, ctx.loaderTemplate, _c2, 4)(dirIndex, ctx.selectedItemTemplate, _c3, 4)(dirIndex, ctx.headerTemplate, _c4, 4)(dirIndex, ctx.filterTemplate, _c5, 4)(dirIndex, ctx.footerTemplate, _c6, 4)(dirIndex, ctx.emptyFilterTemplate, _c7, 4)(dirIndex, ctx.emptyTemplate, _c8, 4)(dirIndex, ctx.dropdownIconTemplate, _c9, 4)(dirIndex, ctx.loadingIconTemplate, _c10, 4)(dirIndex, ctx.clearIconTemplate, _c11, 4)(dirIndex, ctx.filterIconTemplate, _c12, 4)(dirIndex, ctx.onIconTemplate, _c13, 4)(dirIndex, ctx.offIconTemplate, _c14, 4)(dirIndex, ctx.cancelIconTemplate, _c15, 4);
				if (rf & 2) ɵɵqueryAdvance(16);
			},
			viewQuery: function Select_Query(rf, ctx) {
				if (rf & 1) ɵɵviewQuerySignal(ctx.filterViewChild, _c5, 5)(ctx.focusInputViewChild, _c16, 5)(ctx.editableInputViewChild, _c17, 5)(ctx.itemsViewChild, _c18, 5)(ctx.scroller, _c19, 5)(ctx.overlayViewChild, _c20, 5)(ctx.firstHiddenFocusableElementOnOverlay, _c21, 5)(ctx.lastHiddenFocusableElementOnOverlay, _c22, 5);
				if (rf & 2) ɵɵqueryAdvance(8);
			},
			hostVars: 4,
			hostBindings: function Select_HostBindings(rf, ctx) {
				if (rf & 1) ɵɵlistener("click", function Select_click_HostBindingHandler($event) {
					return ctx.onContainerClick($event);
				});
				if (rf & 2) {
					ɵɵattribute("id", ctx.$id())("data-p", ctx.containerDataP());
					ɵɵclassMap(ctx.cx("root"));
				}
			},
			inputs: {
				id: [1, "id"],
				scrollHeight: [1, "scrollHeight"],
				filter: [1, "filter"],
				panelStyle: [1, "panelStyle"],
				panelStyleClass: [1, "panelStyleClass"],
				readonly: [1, "readonly"],
				editable: [1, "editable"],
				tabindex: [1, "tabindex"],
				placeholder: [1, "placeholder"],
				loadingIcon: [1, "loadingIcon"],
				filterPlaceholder: [1, "filterPlaceholder"],
				filterLocale: [1, "filterLocale"],
				inputId: [1, "inputId"],
				dataKey: [1, "dataKey"],
				filterBy: [1, "filterBy"],
				filterFields: [1, "filterFields"],
				autofocus: [1, "autofocus"],
				resetFilterOnHide: [1, "resetFilterOnHide"],
				checkmark: [1, "checkmark"],
				dropdownIcon: [1, "dropdownIcon"],
				loading: [1, "loading"],
				optionLabel: [1, "optionLabel"],
				optionValue: [1, "optionValue"],
				optionDisabled: [1, "optionDisabled"],
				optionGroupLabel: [1, "optionGroupLabel"],
				optionGroupChildren: [1, "optionGroupChildren"],
				group: [1, "group"],
				showClear: [1, "showClear"],
				emptyFilterMessage: [1, "emptyFilterMessage"],
				emptyMessage: [1, "emptyMessage"],
				filterMessage: [1, "filterMessage"],
				selectionMessage: [1, "selectionMessage"],
				emptySelectionMessage: [1, "emptySelectionMessage"],
				lazy: [1, "lazy"],
				virtualScroll: [1, "virtualScroll"],
				virtualScrollItemSize: [1, "virtualScrollItemSize"],
				virtualScrollOptions: [1, "virtualScrollOptions"],
				overlayOptions: [1, "overlayOptions"],
				ariaFilterLabel: [1, "ariaFilterLabel"],
				ariaLabel: [1, "ariaLabel"],
				ariaLabelledBy: [1, "ariaLabelledBy"],
				filterMatchMode: [1, "filterMatchMode"],
				tooltip: [1, "tooltip"],
				tooltipPosition: [1, "tooltipPosition"],
				tooltipPositionStyle: [1, "tooltipPositionStyle"],
				tooltipStyleClass: [1, "tooltipStyleClass"],
				focusOnHover: [1, "focusOnHover"],
				selectOnFocus: [1, "selectOnFocus"],
				multiple: [1, "multiple"],
				autoOptionFocus: [1, "autoOptionFocus"],
				autofocusFilter: [1, "autofocusFilter"],
				filterValue: [1, "filterValue"],
				options: [1, "options"],
				appendTo: [1, "appendTo"],
				motionOptions: [1, "motionOptions"]
			},
			outputs: {
				onChange: "onChange",
				onFilter: "onFilter",
				onFocus: "onFocus",
				onBlur: "onBlur",
				onClick: "onClick",
				onShow: "onShow",
				onHide: "onHide",
				onClear: "onClear",
				onLazyLoad: "onLazyLoad"
			},
			features: [
				ɵɵProvidersFeature([
					SELECT_VALUE_ACCESSOR,
					SelectStyle,
					{
						provide: SELECT_INSTANCE,
						useExisting: Select
					},
					{
						provide: PARENT_INSTANCE,
						useExisting: Select
					}
				]),
				ɵɵHostDirectivesFeature([Bind]),
				ɵɵInheritDefinitionFeature
			],
			decls: 10,
			vars: 16,
			consts: [
				["overlay", ""],
				["content", ""],
				["focusInput", ""],
				["editableInput", ""],
				["firstHiddenFocusableEl", ""],
				["buildInItems", ""],
				["lastHiddenFocusableEl", ""],
				["filter", ""],
				["scroller", ""],
				["loader", ""],
				["items", ""],
				[
					"role",
					"combobox",
					3,
					"class",
					"pBind",
					"pTooltip",
					"pTooltipUnstyled",
					"tooltipPosition",
					"positionStyle",
					"tooltipStyleClass",
					"pAutoFocus"
				],
				[
					"type",
					"text",
					"role",
					"combobox",
					3,
					"class",
					"pBind",
					"pAutoFocus"
				],
				[
					"role",
					"button",
					"aria-label",
					"dropdown trigger",
					"aria-haspopup",
					"listbox",
					3,
					"pBind"
				],
				[
					3,
					"visibleChange",
					"onBeforeEnter",
					"onAfterLeave",
					"onHide",
					"hostAttrSelector",
					"visible",
					"options",
					"target",
					"appendTo",
					"unstyled",
					"pt",
					"motionOptions"
				],
				[
					"role",
					"combobox",
					3,
					"focus",
					"blur",
					"keydown",
					"pBind",
					"pTooltip",
					"pTooltipUnstyled",
					"tooltipPosition",
					"positionStyle",
					"tooltipStyleClass",
					"pAutoFocus"
				],
				[
					4,
					"ngTemplateOutlet",
					"ngTemplateOutletContext"
				],
				[
					"type",
					"text",
					"role",
					"combobox",
					3,
					"input",
					"keydown",
					"focus",
					"blur",
					"pBind",
					"pAutoFocus"
				],
				[
					"data-p-icon",
					"times",
					3,
					"class",
					"pBind"
				],
				[
					3,
					"class",
					"pBind"
				],
				[
					"data-p-icon",
					"times",
					3,
					"click",
					"pBind"
				],
				[
					3,
					"click",
					"pBind"
				],
				[4, "ngTemplateOutlet"],
				[
					"aria-hidden",
					"true",
					3,
					"class",
					"pBind"
				],
				[
					"aria-hidden",
					"true",
					3,
					"pBind"
				],
				[
					"data-p-icon",
					"chevron-down",
					3,
					"class",
					"pBind"
				],
				[3, "pBind"],
				[
					"data-p-icon",
					"chevron-down",
					3,
					"pBind"
				],
				[
					3,
					"focus",
					"pBind"
				],
				[
					"hostName",
					"select",
					3,
					"items",
					"style",
					"itemSize",
					"autoSize",
					"lazy",
					"options",
					"pt"
				],
				[
					"role",
					"status",
					"aria-live",
					"polite",
					3,
					"class",
					"pBind"
				],
				[
					"role",
					"status",
					"aria-live",
					"polite",
					3,
					"pBind"
				],
				[
					3,
					"click",
					"keydown",
					"pBind"
				],
				[
					3,
					"pt",
					"unstyled"
				],
				[
					"pInputText",
					"",
					"type",
					"text",
					"role",
					"searchbox",
					"autocomplete",
					"off",
					3,
					"input",
					"keydown",
					"blur",
					"pSize",
					"value",
					"variant",
					"pt",
					"unstyled"
				],
				[
					"data-p-icon",
					"search",
					3,
					"pBind"
				],
				[
					"hostName",
					"select",
					3,
					"onLazyLoad",
					"items",
					"itemSize",
					"autoSize",
					"lazy",
					"options",
					"pt"
				],
				[
					"role",
					"listbox",
					3,
					"pBind"
				],
				[
					"role",
					"presentation",
					3,
					"class",
					"style",
					"pBind"
				],
				[
					3,
					"id",
					"option",
					"checkmark",
					"selected",
					"label",
					"disabled",
					"template",
					"focused",
					"ariaPosInset",
					"ariaSetSize",
					"index",
					"unstyled",
					"scrollerOptions"
				],
				[
					"role",
					"presentation",
					3,
					"pBind"
				],
				[
					3,
					"onClick",
					"onMouseEnter",
					"id",
					"option",
					"checkmark",
					"selected",
					"label",
					"disabled",
					"template",
					"focused",
					"ariaPosInset",
					"ariaSetSize",
					"index",
					"unstyled",
					"scrollerOptions"
				]
			],
			template: function Select_Template(rf, ctx) {
				if (rf & 1) {
					ɵɵconditionalCreate(0, Select_Conditional_0_Template, 4, 23, "span", 11)(1, Select_Conditional_1_Template, 2, 24, "input", 12);
					ɵɵconditionalCreate(2, Select_Conditional_2_Template, 2, 1);
					ɵɵelementStart(3, "div", 13);
					ɵɵconditionalCreate(4, Select_Conditional_4_Template, 2, 1)(5, Select_Conditional_5_Template, 2, 1);
					ɵɵelementEnd();
					ɵɵelementStart(6, "p-overlay", 14, 0);
					ɵɵlistener("visibleChange", function Select_Template_p_overlay_visibleChange_6_listener($event) {
						return ctx.overlayVisible.set($event);
					})("onBeforeEnter", function Select_Template_p_overlay_onBeforeEnter_6_listener($event) {
						return ctx.onOverlayBeforeEnter($event);
					})("onAfterLeave", function Select_Template_p_overlay_onAfterLeave_6_listener($event) {
						return ctx.onOverlayAfterLeave($event);
					})("onHide", function Select_Template_p_overlay_onHide_6_listener() {
						return ctx.hide();
					});
					ɵɵtemplate(8, Select_ng_template_8_Template, 16, 36, "ng-template", null, 1, ɵɵtemplateRefExtractor);
					ɵɵelementEnd();
				}
				if (rf & 2) {
					ɵɵconditional(!ctx.editable() ? 0 : 1);
					ɵɵadvance(2);
					ɵɵconditional(ctx.isVisibleClearIcon() ? 2 : -1);
					ɵɵadvance();
					ɵɵclassMap(ctx.cx("dropdown"));
					ɵɵproperty("pBind", ctx.ptm("dropdown"));
					ɵɵattribute("aria-expanded", ctx.$ariaExpanded)("data-pc-section", "trigger");
					ɵɵadvance();
					ɵɵconditional(ctx.loading() ? 4 : 5);
					ɵɵadvance(2);
					ɵɵproperty("hostAttrSelector", ctx.$attrSelector)("visible", ctx.overlayVisible())("options", ctx.overlayOptions())("target", "@parent")("appendTo", ctx.$appendTo())("unstyled", ctx.unstyled())("pt", ctx.ptm("pcOverlay"))("motionOptions", ctx.motionOptions());
				}
			},
			dependencies: [
				NgTemplateOutlet,
				SelectItem,
				Overlay,
				Tooltip,
				AutoFocus,
				Times,
				ChevronDown,
				Search,
				InputText,
				IconField,
				InputIcon,
				Scroller,
				SharedModule,
				BindModule,
				Bind
			],
			encapsulation: 2
		});
	})();
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Select, [{
		type: Component,
		args: [{
			selector: "p-select",
			standalone: true,
			imports: [
				NgTemplateOutlet,
				SelectItem,
				Overlay,
				Tooltip,
				AutoFocus,
				Times,
				ChevronDown,
				Search,
				InputText,
				IconField,
				InputIcon,
				Scroller,
				SharedModule,
				BindModule
			],
			template: `
        @if (!editable()) {
            <span
                #focusInput
                [class]="cx('label')"
                [pBind]="ptm('label')"
                [pTooltip]="tooltip()"
                [pTooltipUnstyled]="unstyled()"
                [tooltipPosition]="tooltipPosition()"
                [positionStyle]="tooltipPositionStyle()"
                [tooltipStyleClass]="tooltipStyleClass()"
                [attr.aria-disabled]="$disabled()"
                [attr.id]="inputId()"
                role="combobox"
                [attr.aria-label]="$ariaLabel()"
                [attr.aria-labelledby]="ariaLabelledBy()"
                [attr.aria-haspopup]="'listbox'"
                [attr.aria-expanded]="$ariaExpanded"
                [attr.aria-readonly]="$ariaReadonly()"
                [attr.aria-controls]="$ariaControls()"
                [attr.tabindex]="$tabindex()"
                [pAutoFocus]="autofocus()"
                [attr.aria-activedescendant]="$ariaActivedescendant"
                (focus)="onInputFocus($event)"
                (blur)="onInputBlur($event)"
                (keydown)="onKeyDown($event)"
                [attr.aria-required]="required()"
                [attr.disabled]="$disabledAttr()"
                [attr.data-p]="labelDataP()"
            >
                @if (!selectedItemTemplate()) {
                    {{ label() === 'p-emptylabel' ? '&nbsp;' : label() }}
                } @else {
                    @if (isSelectedOptionEmpty()) {
                        <span>{{ label() === 'p-emptylabel' ? '&nbsp;' : label() }}</span>
                    } @else {
                        <ng-container *ngTemplateOutlet="selectedItemTemplate(); context: selectedItemContext()"></ng-container>
                    }
                }
            </span>
        } @else {
            <input
                #editableInput
                type="text"
                [attr.id]="inputId()"
                [class]="cx('label')"
                [pBind]="ptm('label')"
                role="combobox"
                [attr.aria-autocomplete]="'list'"
                [attr.aria-haspopup]="'listbox'"
                [attr.aria-expanded]="$ariaExpanded"
                [attr.aria-controls]="$ariaControls()"
                [attr.placeholder]="$placeholder()"
                [attr.aria-label]="ariaLabel()"
                [attr.aria-labelledby]="ariaLabelledBy()"
                (input)="onEditableInput($event)"
                (keydown)="onKeyDown($event)"
                [pAutoFocus]="autofocus()"
                [attr.aria-activedescendant]="$ariaActivedescendant"
                (focus)="onInputFocus($event)"
                (blur)="onInputBlur($event)"
                [attr.name]="name()"
                [attr.minlength]="minlength()"
                [attr.min]="min()"
                [attr.max]="max()"
                [attr.pattern]="$pattern()"
                [attr.size]="inputSize()"
                [attr.maxlength]="maxlength()"
                [attr.required]="$required()"
                [attr.readonly]="$readonly()"
                [attr.disabled]="$disabledAttr()"
                [attr.data-p]="labelDataP()"
            />
        }
        @if (isVisibleClearIcon()) {
            @if (!clearIconTemplate()) {
                <svg data-p-icon="times" [class]="cx('clearIcon')" [pBind]="ptm('clearIcon')" (click)="clear($event)" [attr.data-pc-section]="'clearicon'" />
            } @else {
                <span [class]="cx('clearIcon')" [pBind]="ptm('clearIcon')" (click)="clear($event)" [attr.data-pc-section]="'clearicon'">
                    <ng-template *ngTemplateOutlet="clearIconTemplate(); context: clearIconContext()"></ng-template>
                </span>
            }
        }

        <div [class]="cx('dropdown')" [pBind]="ptm('dropdown')" role="button" aria-label="dropdown trigger" aria-haspopup="listbox" [attr.aria-expanded]="$ariaExpanded" [attr.data-pc-section]="'trigger'">
            @if (loading()) {
                @if (loadingIconTemplate()) {
                    <ng-container *ngTemplateOutlet="loadingIconTemplate()"></ng-container>
                } @else {
                    @if (loadingIcon()) {
                        <span [class]="cn(cx('loadingIcon'), 'pi-spin' + loadingIcon())" [pBind]="ptm('loadingIcon')" aria-hidden="true"></span>
                    } @else {
                        <span [class]="cn(cx('loadingIcon'), 'pi pi-spinner pi-spin')" [pBind]="ptm('loadingIcon')" aria-hidden="true"></span>
                    }
                }
            } @else {
                @if (!dropdownIconTemplate()) {
                    @if (dropdownIcon()) {
                        <span [class]="cn(cx('dropdownIcon'), dropdownIcon())" [pBind]="ptm('dropdownIcon')" [attr.aria-hidden]="true" [attr.data-p]="dropdownIconDataP()"></span>
                    } @else {
                        <svg data-p-icon="chevron-down" [class]="cx('dropdownIcon')" [pBind]="ptm('dropdownIcon')" [attr.aria-hidden]="true" [attr.data-p]="dropdownIconDataP()" />
                    }
                } @else {
                    <span [class]="cx('dropdownIcon')" [pBind]="ptm('dropdownIcon')" [attr.aria-hidden]="true">
                        <ng-template *ngTemplateOutlet="dropdownIconTemplate(); context: dropdownIconContext()"></ng-template>
                    </span>
                }
            }
        </div>

        <p-overlay
            #overlay
            [hostAttrSelector]="$attrSelector"
            [visible]="overlayVisible()"
            (visibleChange)="overlayVisible.set($event)"
            [options]="overlayOptions()"
            [target]="'@parent'"
            [appendTo]="$appendTo()"
            [unstyled]="unstyled()"
            [pt]="ptm('pcOverlay')"
            [motionOptions]="motionOptions()"
            (onBeforeEnter)="onOverlayBeforeEnter($event)"
            (onAfterLeave)="onOverlayAfterLeave($event)"
            (onHide)="hide()"
        >
            <ng-template #content>
                <div [class]="cn(cx('overlay'), panelStyleClass())" [style]="panelStyle()" [pBind]="ptm('overlay')" [attr.data-p]="overlayDataP()">
                    <span
                        #firstHiddenFocusableEl
                        [class]="pcn('p-hidden-accessible p-hidden-focusable')"
                        [attr.tabindex]="0"
                        (focus)="onFirstHiddenFocus($event)"
                        [attr.data-p-hidden-accessible]="true"
                        [attr.data-p-hidden-focusable]="true"
                        [pBind]="ptm('hiddenFirstFocusableEl')"
                    >
                    </span>
                    <ng-container *ngTemplateOutlet="headerTemplate(); context: { class: cx('header') }"></ng-container>
                    @if (filter()) {
                        <div [class]="cx('header')" (click)="$event.stopPropagation()" (keydown)="onFilterTemplateKeyDown($event)" [pBind]="ptm('header')">
                            @if (filterTemplate()) {
                                <ng-container *ngTemplateOutlet="filterTemplate(); context: filterTemplateContext()"></ng-container>
                            } @else {
                                <p-iconfield [pt]="ptm('pcFilterContainer')" [unstyled]="unstyled()">
                                    <input
                                        #filter
                                        pInputText
                                        [pSize]="size()"
                                        type="text"
                                        role="searchbox"
                                        autocomplete="off"
                                        [value]="filterInputValue()"
                                        [class]="cx('pcFilter')"
                                        [variant]="$variant()"
                                        [attr.placeholder]="filterPlaceholder()"
                                        [attr.aria-owns]="$ariaOwns()"
                                        (input)="onFilterInputChange($event)"
                                        [attr.aria-label]="ariaFilterLabel()"
                                        [attr.aria-activedescendant]="focusedOptionId()"
                                        (keydown)="onFilterKeyDown($event)"
                                        (blur)="onFilterBlur($event)"
                                        [pt]="ptm('pcFilter')"
                                        [unstyled]="unstyled()"
                                    />
                                    <p-inputicon [pt]="ptm('pcFilterIconContainer')" [unstyled]="unstyled()">
                                        @if (!filterIconTemplate()) {
                                            <svg data-p-icon="search" [pBind]="ptm('filterIcon')" />
                                        } @else {
                                            <span [pBind]="ptm('filterIcon')">
                                                <ng-template *ngTemplateOutlet="filterIconTemplate()"></ng-template>
                                            </span>
                                        }
                                    </p-inputicon>
                                </p-iconfield>
                            }
                            <span role="status" aria-live="polite" [class]="pcn('p-hidden-accessible')" [pBind]="ptm('hiddenFilterResult')" [attr.data-p-hidden-accessible]="true">
                                {{ filterResultMessageText() }}
                            </span>
                        </div>
                    }
                    <div [class]="cx('listContainer')" [style.max-height]="virtualScroll() ? 'auto' : scrollHeight() || 'auto'" [pBind]="ptm('listContainer')">
                        @if (virtualScroll()) {
                            <p-scroller
                                hostName="select"
                                #scroller
                                [items]="visibleOptions()"
                                [style]="{ height: scrollHeight() }"
                                [itemSize]="virtualScrollItemSize()!"
                                [autoSize]="true"
                                [lazy]="lazy()"
                                (onLazyLoad)="onLazyLoad.emit($event)"
                                [options]="virtualScrollOptions()"
                                [pt]="ptm('virtualScroller')"
                            >
                                <ng-template #content let-items let-scrollerOptions="options">
                                    <ng-container *ngTemplateOutlet="buildInItems; context: getBuildInItemsContext(items, scrollerOptions)"></ng-container>
                                </ng-template>
                                @if (loaderTemplate()) {
                                    <ng-template #loader let-scrollerOptions="options">
                                        <ng-container *ngTemplateOutlet="loaderTemplate(); context: getLoaderContext(scrollerOptions)"></ng-container>
                                    </ng-template>
                                }
                            </p-scroller>
                        } @else {
                            <ng-container *ngTemplateOutlet="buildInItems; context: defaultBuildInItemsContext()"></ng-container>
                        }

                        <ng-template #buildInItems let-items let-scrollerOptions="options">
                            <ul
                                #items
                                [attr.id]="$id() + '_list'"
                                [attr.aria-label]="listLabel()"
                                [class]="cn(cx('list'), scrollerOptions.contentStyleClass)"
                                [style]="scrollerOptions.contentStyle"
                                role="listbox"
                                [attr.aria-multiselectable]="$ariaMultiselectable()"
                                [pBind]="ptm('list')"
                            >
                                @for (option of items; track trackOption(option, i); let i = $index) {
                                    @if (isOptionGroup(option)) {
                                        <li [class]="cx('optionGroup')" [attr.id]="$id() + '_' + getOptionIndex(i, scrollerOptions)" [style]="getItemSizeStyle(scrollerOptions)" role="presentation" [pBind]="ptm('optionGroup')">
                                            @if (!groupTemplate()) {
                                                <span [class]="cx('optionGroupLabel')" [pBind]="ptm('optionGroupLabel')">{{ getOptionGroupLabel(option.optionGroup) }}</span>
                                            }
                                            <ng-container *ngTemplateOutlet="groupTemplate(); context: getGroupContext(option.optionGroup)"></ng-container>
                                        </li>
                                    } @else {
                                        <p-select-item
                                            [id]="$id() + '_' + getOptionIndex(i, scrollerOptions)"
                                            [option]="option"
                                            [checkmark]="checkmark()"
                                            [selected]="isSelected(option)"
                                            [label]="getOptionLabel(option)"
                                            [disabled]="isOptionDisabled(option)"
                                            [template]="itemTemplate()"
                                            [focused]="isOptionFocused(i, scrollerOptions)"
                                            [ariaPosInset]="getAriaPosInset(getOptionIndex(i, scrollerOptions))"
                                            [ariaSetSize]="ariaSetSize()"
                                            [index]="i"
                                            [unstyled]="unstyled()"
                                            [scrollerOptions]="scrollerOptions"
                                            (onClick)="onOptionSelect($event, option)"
                                            (onMouseEnter)="onOptionMouseEnter($event, getOptionIndex(i, scrollerOptions))"
                                        ></p-select-item>
                                    }
                                }
                                @if (showEmptyFilterMessage()) {
                                    <li [class]="cx('emptyMessage')" [style]="getItemSizeStyle(scrollerOptions)" role="presentation" [pBind]="ptm('emptyMessage')">
                                        @if (!hasEmptyTemplate()) {
                                            {{ emptyFilterMessageLabel() }}
                                        } @else {
                                            <ng-container *ngTemplateOutlet="hasEmptyTemplate()"></ng-container>
                                        }
                                    </li>
                                }
                                @if (showEmptyMessage()) {
                                    <li [class]="cx('emptyMessage')" [style]="getItemSizeStyle(scrollerOptions)" role="presentation" [pBind]="ptm('emptyMessage')">
                                        @if (!emptyTemplate()) {
                                            {{ emptyMessageLabel() || emptyFilterMessageLabel() }}
                                        } @else {
                                            <ng-container *ngTemplateOutlet="emptyTemplate()"></ng-container>
                                        }
                                    </li>
                                }
                            </ul>
                        </ng-template>
                    </div>
                    <ng-container *ngTemplateOutlet="footerTemplate()"></ng-container>
                    @if (!filter() && !_options()?.length) {
                        <span role="status" aria-live="polite" [class]="pcn('p-hidden-accessible')" [pBind]="ptm('hiddenEmptyMessage')" [attr.data-p-hidden-accessible]="true">
                            {{ emptyMessageLabel() }}
                        </span>
                    }
                    <span role="status" aria-live="polite" [class]="pcn('p-hidden-accessible')" [pBind]="ptm('hiddenSelectedMessage')" [attr.data-p-hidden-accessible]="true">
                        {{ selectedMessageText() }}
                    </span>
                    <span
                        #lastHiddenFocusableEl
                        [class]="pcn('p-hidden-accessible p-hidden-focusable')"
                        [pBind]="ptm('hiddenLastFocusableEl')"
                        [attr.tabindex]="0"
                        (focus)="onLastHiddenFocus($event)"
                        [attr.data-p-hidden-accessible]="true"
                        [attr.data-p-hidden-focusable]="true"
                    ></span>
                </div>
            </ng-template>
        </p-overlay>
    `,
			host: {
				"[class]": "cx('root')",
				"[attr.id]": "$id()",
				"[attr.data-p]": "containerDataP()",
				"(click)": "onContainerClick($event)"
			},
			providers: [
				SELECT_VALUE_ACCESSOR,
				SelectStyle,
				{
					provide: SELECT_INSTANCE,
					useExisting: Select
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: Select
				}
			],
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			hostDirectives: [Bind]
		}]
	}], () => [], {
		id: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "id",
				required: false
			}]
		}],
		scrollHeight: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "scrollHeight",
				required: false
			}]
		}],
		filter: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "filter",
				required: false
			}]
		}],
		panelStyle: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "panelStyle",
				required: false
			}]
		}],
		panelStyleClass: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "panelStyleClass",
				required: false
			}]
		}],
		readonly: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "readonly",
				required: false
			}]
		}],
		editable: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "editable",
				required: false
			}]
		}],
		tabindex: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "tabindex",
				required: false
			}]
		}],
		placeholder: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "placeholder",
				required: false
			}]
		}],
		loadingIcon: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "loadingIcon",
				required: false
			}]
		}],
		filterPlaceholder: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "filterPlaceholder",
				required: false
			}]
		}],
		filterLocale: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "filterLocale",
				required: false
			}]
		}],
		inputId: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "inputId",
				required: false
			}]
		}],
		dataKey: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "dataKey",
				required: false
			}]
		}],
		filterBy: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "filterBy",
				required: false
			}]
		}],
		filterFields: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "filterFields",
				required: false
			}]
		}],
		autofocus: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "autofocus",
				required: false
			}]
		}],
		resetFilterOnHide: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "resetFilterOnHide",
				required: false
			}]
		}],
		checkmark: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "checkmark",
				required: false
			}]
		}],
		dropdownIcon: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "dropdownIcon",
				required: false
			}]
		}],
		loading: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "loading",
				required: false
			}]
		}],
		optionLabel: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "optionLabel",
				required: false
			}]
		}],
		optionValue: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "optionValue",
				required: false
			}]
		}],
		optionDisabled: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "optionDisabled",
				required: false
			}]
		}],
		optionGroupLabel: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "optionGroupLabel",
				required: false
			}]
		}],
		optionGroupChildren: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "optionGroupChildren",
				required: false
			}]
		}],
		group: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "group",
				required: false
			}]
		}],
		showClear: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "showClear",
				required: false
			}]
		}],
		emptyFilterMessage: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "emptyFilterMessage",
				required: false
			}]
		}],
		emptyMessage: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "emptyMessage",
				required: false
			}]
		}],
		filterMessage: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "filterMessage",
				required: false
			}]
		}],
		selectionMessage: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "selectionMessage",
				required: false
			}]
		}],
		emptySelectionMessage: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "emptySelectionMessage",
				required: false
			}]
		}],
		lazy: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "lazy",
				required: false
			}]
		}],
		virtualScroll: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "virtualScroll",
				required: false
			}]
		}],
		virtualScrollItemSize: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "virtualScrollItemSize",
				required: false
			}]
		}],
		virtualScrollOptions: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "virtualScrollOptions",
				required: false
			}]
		}],
		overlayOptions: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "overlayOptions",
				required: false
			}]
		}],
		ariaFilterLabel: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "ariaFilterLabel",
				required: false
			}]
		}],
		ariaLabel: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "ariaLabel",
				required: false
			}]
		}],
		ariaLabelledBy: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "ariaLabelledBy",
				required: false
			}]
		}],
		filterMatchMode: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "filterMatchMode",
				required: false
			}]
		}],
		tooltip: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "tooltip",
				required: false
			}]
		}],
		tooltipPosition: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "tooltipPosition",
				required: false
			}]
		}],
		tooltipPositionStyle: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "tooltipPositionStyle",
				required: false
			}]
		}],
		tooltipStyleClass: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "tooltipStyleClass",
				required: false
			}]
		}],
		focusOnHover: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "focusOnHover",
				required: false
			}]
		}],
		selectOnFocus: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "selectOnFocus",
				required: false
			}]
		}],
		multiple: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "multiple",
				required: false
			}]
		}],
		autoOptionFocus: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "autoOptionFocus",
				required: false
			}]
		}],
		autofocusFilter: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "autofocusFilter",
				required: false
			}]
		}],
		filterValue: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "filterValue",
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
		appendTo: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "appendTo",
				required: false
			}]
		}],
		motionOptions: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "motionOptions",
				required: false
			}]
		}],
		onChange: [{
			type: Output,
			args: ["onChange"]
		}],
		onFilter: [{
			type: Output,
			args: ["onFilter"]
		}],
		onFocus: [{
			type: Output,
			args: ["onFocus"]
		}],
		onBlur: [{
			type: Output,
			args: ["onBlur"]
		}],
		onClick: [{
			type: Output,
			args: ["onClick"]
		}],
		onShow: [{
			type: Output,
			args: ["onShow"]
		}],
		onHide: [{
			type: Output,
			args: ["onHide"]
		}],
		onClear: [{
			type: Output,
			args: ["onClear"]
		}],
		onLazyLoad: [{
			type: Output,
			args: ["onLazyLoad"]
		}],
		filterViewChild: [{
			type: ViewChild,
			args: ["filter", { isSignal: true }]
		}],
		focusInputViewChild: [{
			type: ViewChild,
			args: ["focusInput", { isSignal: true }]
		}],
		editableInputViewChild: [{
			type: ViewChild,
			args: ["editableInput", { isSignal: true }]
		}],
		itemsViewChild: [{
			type: ViewChild,
			args: ["items", { isSignal: true }]
		}],
		scroller: [{
			type: ViewChild,
			args: ["scroller", { isSignal: true }]
		}],
		overlayViewChild: [{
			type: ViewChild,
			args: ["overlay", { isSignal: true }]
		}],
		firstHiddenFocusableElementOnOverlay: [{
			type: ViewChild,
			args: ["firstHiddenFocusableEl", { isSignal: true }]
		}],
		lastHiddenFocusableElementOnOverlay: [{
			type: ViewChild,
			args: ["lastHiddenFocusableEl", { isSignal: true }]
		}],
		itemTemplate: [{
			type: ContentChild,
			args: ["item", {
				descendants: false,
				isSignal: true
			}]
		}],
		groupTemplate: [{
			type: ContentChild,
			args: ["group", {
				descendants: false,
				isSignal: true
			}]
		}],
		loaderTemplate: [{
			type: ContentChild,
			args: ["loader", {
				descendants: false,
				isSignal: true
			}]
		}],
		selectedItemTemplate: [{
			type: ContentChild,
			args: ["selectedItem", {
				descendants: false,
				isSignal: true
			}]
		}],
		headerTemplate: [{
			type: ContentChild,
			args: ["header", {
				descendants: false,
				isSignal: true
			}]
		}],
		filterTemplate: [{
			type: ContentChild,
			args: ["filter", {
				descendants: false,
				isSignal: true
			}]
		}],
		footerTemplate: [{
			type: ContentChild,
			args: ["footer", {
				descendants: false,
				isSignal: true
			}]
		}],
		emptyFilterTemplate: [{
			type: ContentChild,
			args: ["emptyfilter", {
				descendants: false,
				isSignal: true
			}]
		}],
		emptyTemplate: [{
			type: ContentChild,
			args: ["empty", {
				descendants: false,
				isSignal: true
			}]
		}],
		dropdownIconTemplate: [{
			type: ContentChild,
			args: ["dropdownicon", {
				descendants: false,
				isSignal: true
			}]
		}],
		loadingIconTemplate: [{
			type: ContentChild,
			args: ["loadingicon", {
				descendants: false,
				isSignal: true
			}]
		}],
		clearIconTemplate: [{
			type: ContentChild,
			args: ["clearicon", {
				descendants: false,
				isSignal: true
			}]
		}],
		filterIconTemplate: [{
			type: ContentChild,
			args: ["filtericon", {
				descendants: false,
				isSignal: true
			}]
		}],
		onIconTemplate: [{
			type: ContentChild,
			args: ["onicon", {
				descendants: false,
				isSignal: true
			}]
		}],
		offIconTemplate: [{
			type: ContentChild,
			args: ["officon", {
				descendants: false,
				isSignal: true
			}]
		}],
		cancelIconTemplate: [{
			type: ContentChild,
			args: ["cancelicon", {
				descendants: false,
				isSignal: true
			}]
		}]
	});
})();
var SelectModule = class SelectModule {
	static ɵfac = function SelectModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || SelectModule)();
	};
	static ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({
		type: SelectModule,
		imports: [Select, SharedModule],
		exports: [Select, SharedModule]
	});
	static ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ imports: [
		Select,
		SharedModule,
		SharedModule
	] });
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectModule, [{
		type: NgModule,
		args: [{
			imports: [Select, SharedModule],
			exports: [Select, SharedModule]
		}]
	}], null, null);
})();
export { SelectStyle as a, AutoFocus as c, SelectModule as i, Select as n, Spinner as o, SelectClasses as r, BaseInput as s, SELECT_VALUE_ACCESSOR as t };
