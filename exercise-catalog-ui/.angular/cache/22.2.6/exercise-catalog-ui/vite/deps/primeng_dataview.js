import { Fn as forwardRef, U as InjectionToken, Ui as signal, W as Injector, _ as untracked, _a as ɵɵnamespaceSVG, c as computed, la as ɵɵdefineInjectable, ua as ɵɵdefineInjector, va as ɵɵresetView, wr as inject, xn as effect, ya as ɵɵrestoreView } from "./_resource-chunk-B6oSsbEv.js";
import "./common-BBp9OMOF.js";
import { A as contentChild, Ai as setClassMetadata, Bo as ɵɵnextContext, Ds as ɵɵstyleMap, Fs as ɵɵtextInterpolate1, Ga as ɵɵdefineNgModule, Gt as ChangeDetectionStrategy, Ji as ɵɵInheritDefinitionFeature, Jo as ɵɵprojectionDef, Jt as Component, Ms as ɵɵtemplateRefExtractor, Nn as NgModule, Ns as ɵɵtext, O as booleanAttribute, Os as ɵɵstyleProp, Ps as ɵɵtextInterpolate, Ro as ɵɵlistener, S as ViewChild, Sn as Input, Ua as ɵɵdefineComponent, X as input, Xi as ɵɵProvidersFeature, Xo as ɵɵpureFunction0, Ya as ɵɵdomElement, Yo as ɵɵproperty, Zi as ɵɵadvance, Zo as ɵɵpureFunction1, Zs as ɵɵviewQuerySignal, _a as ɵɵcontrolCreate, _o as ɵɵgetInheritedFactory, aa as ɵɵattribute, ao as ɵɵelementContainer, at as output, ca as ɵɵclassMap, co as ɵɵelementEnd, da as ɵɵconditional, ds as ɵɵrepeaterCreate, ga as ɵɵcontrol, go as ɵɵgetCurrentView, gt as viewChild, ha as ɵɵcontentQuerySignal, i as ContentChild, io as ɵɵelement, js as ɵɵtemplate, lo as ɵɵelementStart, nt as model, oo as ɵɵelementContainerEnd, os as ɵɵqueryAdvance, pa as ɵɵconditionalCreate, pr as ViewEncapsulation, ps as ɵɵrepeaterTrackByIndex, qi as ɵɵHostDirectivesFeature, qo as ɵɵprojection, rt as numberAttribute, so as ɵɵelementContainerStart, us as ɵɵrepeater, xn as Injectable, zn as Output } from "./core-D4dczhTZ.js";
import { s as toSignal } from "./rxjs-interop-BswAxQEY.js";
import { c as AutoFocus, n as Select, o as Spinner, s as BaseInput } from "./primeng-select-BGyWZT6G.js";
import { r as NgTemplateOutlet } from "./_common_module-chunk-CF6aUJZ1.js";
import { m as d } from "./dist-2ljAlN4l.js";
import { P as Xt } from "./primeng-utils-CVbKD6Wd.js";
import { FilterService, Footer, Header, SharedModule, TranslationKeys } from "./primeng_api.js";
import { n as PARENT_INSTANCE, t as BaseComponent } from "./primeng-basecomponent-C8ezCQ4r.js";
import { Bind, BindModule } from "./primeng_bind.js";
import { L as NgModel, M as NG_VALUE_ACCESSOR, N as NgControl, P as NgControlStatus, T as FormsModule } from "./forms-BhWnvdT_.js";
import { t as CoreIcon } from "./primeicons-angular-core-DpYT0758.js";
import { i as Times } from "./primeng-motion-DBtpchV9.js";
import { t as InputText } from "./primeng-inputtext-Dy_wMP1G.js";
import { s as BaseStyle } from "./primeng-config-Db_bbJUd.js";
import { t as Ripple } from "./primeng-ripple-CyCwx_t1.js";
// node_modules/@primeicons/core/dist/esm/icons/angle-double-left.mjs
var e$4 = {
	name: "angle-double-left",
	meta: { tags: [
		"angle-double-left",
		"fast-return",
		"left",
		"back",
		"previous"
	] },
	svg: {
		xmlns: "http://www.w3.org/2000/svg",
		width: 20,
		height: 20,
		viewBox: "0 0 20 20",
		fill: "none"
	},
	nodes: [["path", {
		d: "M8.46974 5.96973C8.76263 5.67684 9.2374 5.67684 9.53029 5.96973C9.82313 6.26263 9.82317 6.73741 9.53029 7.03028L6.56056 10L9.53029 12.9698C9.82313 13.2627 9.82317 13.7374 9.53029 14.0303C9.23742 14.3232 8.76264 14.3231 8.46974 14.0303L4.96973 10.5303C4.67684 10.2374 4.67684 9.76264 4.96973 9.46974L8.46974 5.96973ZM13.9698 5.96973C14.2626 5.67684 14.7374 5.67684 15.0303 5.96973C15.3231 6.26263 15.3232 6.73741 15.0303 7.03028L12.0606 10L15.0303 12.9698C15.3231 13.2627 15.3232 13.7374 15.0303 14.0303C14.7374 14.3232 14.2627 14.3231 13.9698 14.0303L10.4697 10.5303C10.1769 10.2374 10.1769 9.76264 10.4697 9.46974L13.9698 5.96973Z",
		fill: "currentColor",
		key: "yswbnk"
	}]]
};
// node_modules/@primeicons/angular/fesm2022/primeicons-angular-angle-double-left.mjs
var AngleDoubleLeft = class AngleDoubleLeft extends CoreIcon {
	constructor() {
		super();
		this._icon = e$4;
	}
	static ɵfac = function AngleDoubleLeft_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || AngleDoubleLeft)();
	};
	static ɵcmp = (function() {
		const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
		function AngleDoubleLeft_For_1_Case_0_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "path");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleDoubleLeft_For_1_Case_1_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "circle");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleDoubleLeft_For_1_Case_2_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "rect");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleDoubleLeft_For_1_Case_3_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "line");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleDoubleLeft_For_1_Case_4_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "polyline");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleDoubleLeft_For_1_Case_5_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "polygon");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleDoubleLeft_For_1_Case_6_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "ellipse");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleDoubleLeft_For_1_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, AngleDoubleLeft_For_1_Case_0_Template, 1, 9, "path")(1, AngleDoubleLeft_For_1_Case_1_Template, 1, 6, "circle")(2, AngleDoubleLeft_For_1_Case_2_Template, 1, 9, "rect")(3, AngleDoubleLeft_For_1_Case_3_Template, 1, 7, "line")(4, AngleDoubleLeft_For_1_Case_4_Template, 1, 4, "polyline")(5, AngleDoubleLeft_For_1_Case_5_Template, 1, 4, "polygon")(6, AngleDoubleLeft_For_1_Case_6_Template, 1, 7, "ellipse");
			if (rf & 2) {
				let tmp_10_0 = void 0;
				const node_r1 = ctx.$implicit;
				ɵɵconditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
			}
		}
		return /*@__PURE__*/ ɵɵdefineComponent({
			type: AngleDoubleLeft,
			selectors: [[
				"svg",
				"data-p-icon",
				"angle-double-left"
			]],
			features: [ɵɵInheritDefinitionFeature],
			decls: 2,
			vars: 0,
			template: function AngleDoubleLeft_Template(rf, ctx) {
				if (rf & 1) ɵɵrepeaterCreate(0, AngleDoubleLeft_For_1_Template, 7, 1, null, null, _forTrack0);
				if (rf & 2) ɵɵrepeater(ctx.iconNodes());
			},
			encapsulation: 2,
			changeDetection: 1
		});
	})();
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngleDoubleLeft, [{
		type: Component,
		args: [{
			selector: "svg[data-p-icon=\"angle-double-left\"]",
			standalone: true,
			template: "\n        @for (node of iconNodes(); track node[1]['key'] || $index) {\n            @switch (node[0]) {\n                @case ('path') {\n                    <svg:path\n                        [attr.d]=\"node[1]['d']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.fill-rule]=\"node[1]['fillRule']\"\n                        [attr.clip-rule]=\"node[1]['clipRule']\"\n                        [attr.stroke]=\"node[1]['stroke']\"\n                        [attr.stroke-width]=\"node[1]['strokeWidth']\"\n                        [attr.stroke-opacity]=\"node[1]['strokeOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('circle') {\n                    <svg:circle\n                        [attr.cx]=\"node[1]['cx']\"\n                        [attr.cy]=\"node[1]['cy']\"\n                        [attr.r]=\"node[1]['r']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('rect') {\n                    <svg:rect\n                        [attr.x]=\"node[1]['x']\"\n                        [attr.y]=\"node[1]['y']\"\n                        [attr.width]=\"node[1]['width']\"\n                        [attr.height]=\"node[1]['height']\"\n                        [attr.rx]=\"node[1]['rx']\"\n                        [attr.ry]=\"node[1]['ry']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('line') {\n                    <svg:line\n                        [attr.x1]=\"node[1]['x1']\"\n                        [attr.y1]=\"node[1]['y1']\"\n                        [attr.x2]=\"node[1]['x2']\"\n                        [attr.y2]=\"node[1]['y2']\"\n                        [attr.stroke]=\"node[1]['stroke']\"\n                        [attr.stroke-opacity]=\"node[1]['strokeOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('polyline') {\n                    <svg:polyline\n                        [attr.points]=\"node[1]['points']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('polygon') {\n                    <svg:polygon\n                        [attr.points]=\"node[1]['points']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('ellipse') {\n                    <svg:ellipse\n                        [attr.cx]=\"node[1]['cx']\"\n                        [attr.cy]=\"node[1]['cy']\"\n                        [attr.rx]=\"node[1]['rx']\"\n                        [attr.ry]=\"node[1]['ry']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n            }\n        }\n"
		}]
	}], () => [], null);
})();
// node_modules/@primeicons/core/dist/esm/icons/angle-double-right.mjs
var e$3 = {
	name: "angle-double-right",
	meta: { tags: [
		"angle-double-right",
		"fast-proceed",
		"right",
		"next",
		"forward"
	] },
	svg: {
		xmlns: "http://www.w3.org/2000/svg",
		width: 20,
		height: 20,
		viewBox: "0 0 20 20",
		fill: "none"
	},
	nodes: [["path", {
		d: "M4.96972 5.96973C5.26262 5.67683 5.73738 5.67683 6.03027 5.96973L9.53028 9.46974C9.82312 9.76264 9.82316 10.2374 9.53028 10.5303L6.03027 14.0303C5.7374 14.3232 5.26262 14.3231 4.96972 14.0303C4.67683 13.7374 4.67683 13.2626 4.96972 12.9698L7.93946 10L4.96972 7.03028C4.67683 6.73738 4.67683 6.26262 4.96972 5.96973ZM10.4697 5.96973C10.7626 5.67683 11.2374 5.67683 11.5303 5.96973L15.0303 9.46974C15.3231 9.76264 15.3232 10.2374 15.0303 10.5303L11.5303 14.0303C11.2374 14.3232 10.7626 14.3231 10.4697 14.0303C10.1768 13.7374 10.1768 13.2626 10.4697 12.9698L13.4395 10L10.4697 7.03028C10.1768 6.73738 10.1768 6.26262 10.4697 5.96973Z",
		fill: "currentColor",
		key: "r8emu"
	}]]
};
// node_modules/@primeicons/angular/fesm2022/primeicons-angular-angle-double-right.mjs
var AngleDoubleRight = class AngleDoubleRight extends CoreIcon {
	constructor() {
		super();
		this._icon = e$3;
	}
	static ɵfac = function AngleDoubleRight_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || AngleDoubleRight)();
	};
	static ɵcmp = (function() {
		const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
		function AngleDoubleRight_For_1_Case_0_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "path");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleDoubleRight_For_1_Case_1_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "circle");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleDoubleRight_For_1_Case_2_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "rect");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleDoubleRight_For_1_Case_3_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "line");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleDoubleRight_For_1_Case_4_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "polyline");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleDoubleRight_For_1_Case_5_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "polygon");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleDoubleRight_For_1_Case_6_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "ellipse");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleDoubleRight_For_1_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, AngleDoubleRight_For_1_Case_0_Template, 1, 9, "path")(1, AngleDoubleRight_For_1_Case_1_Template, 1, 6, "circle")(2, AngleDoubleRight_For_1_Case_2_Template, 1, 9, "rect")(3, AngleDoubleRight_For_1_Case_3_Template, 1, 7, "line")(4, AngleDoubleRight_For_1_Case_4_Template, 1, 4, "polyline")(5, AngleDoubleRight_For_1_Case_5_Template, 1, 4, "polygon")(6, AngleDoubleRight_For_1_Case_6_Template, 1, 7, "ellipse");
			if (rf & 2) {
				let tmp_10_0 = void 0;
				const node_r1 = ctx.$implicit;
				ɵɵconditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
			}
		}
		return /*@__PURE__*/ ɵɵdefineComponent({
			type: AngleDoubleRight,
			selectors: [[
				"svg",
				"data-p-icon",
				"angle-double-right"
			]],
			features: [ɵɵInheritDefinitionFeature],
			decls: 2,
			vars: 0,
			template: function AngleDoubleRight_Template(rf, ctx) {
				if (rf & 1) ɵɵrepeaterCreate(0, AngleDoubleRight_For_1_Template, 7, 1, null, null, _forTrack0);
				if (rf & 2) ɵɵrepeater(ctx.iconNodes());
			},
			encapsulation: 2,
			changeDetection: 1
		});
	})();
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngleDoubleRight, [{
		type: Component,
		args: [{
			selector: "svg[data-p-icon=\"angle-double-right\"]",
			standalone: true,
			template: "\n        @for (node of iconNodes(); track node[1]['key'] || $index) {\n            @switch (node[0]) {\n                @case ('path') {\n                    <svg:path\n                        [attr.d]=\"node[1]['d']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.fill-rule]=\"node[1]['fillRule']\"\n                        [attr.clip-rule]=\"node[1]['clipRule']\"\n                        [attr.stroke]=\"node[1]['stroke']\"\n                        [attr.stroke-width]=\"node[1]['strokeWidth']\"\n                        [attr.stroke-opacity]=\"node[1]['strokeOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('circle') {\n                    <svg:circle\n                        [attr.cx]=\"node[1]['cx']\"\n                        [attr.cy]=\"node[1]['cy']\"\n                        [attr.r]=\"node[1]['r']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('rect') {\n                    <svg:rect\n                        [attr.x]=\"node[1]['x']\"\n                        [attr.y]=\"node[1]['y']\"\n                        [attr.width]=\"node[1]['width']\"\n                        [attr.height]=\"node[1]['height']\"\n                        [attr.rx]=\"node[1]['rx']\"\n                        [attr.ry]=\"node[1]['ry']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('line') {\n                    <svg:line\n                        [attr.x1]=\"node[1]['x1']\"\n                        [attr.y1]=\"node[1]['y1']\"\n                        [attr.x2]=\"node[1]['x2']\"\n                        [attr.y2]=\"node[1]['y2']\"\n                        [attr.stroke]=\"node[1]['stroke']\"\n                        [attr.stroke-opacity]=\"node[1]['strokeOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('polyline') {\n                    <svg:polyline\n                        [attr.points]=\"node[1]['points']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('polygon') {\n                    <svg:polygon\n                        [attr.points]=\"node[1]['points']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('ellipse') {\n                    <svg:ellipse\n                        [attr.cx]=\"node[1]['cx']\"\n                        [attr.cy]=\"node[1]['cy']\"\n                        [attr.rx]=\"node[1]['rx']\"\n                        [attr.ry]=\"node[1]['ry']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n            }\n        }\n"
		}]
	}], () => [], null);
})();
// node_modules/@primeicons/core/dist/esm/icons/angle-left.mjs
var e$2 = {
	name: "angle-left",
	meta: { tags: [
		"angle-left",
		"back",
		"return",
		"left",
		"previous"
	] },
	svg: {
		xmlns: "http://www.w3.org/2000/svg",
		width: 20,
		height: 20,
		viewBox: "0 0 20 20",
		fill: "none"
	},
	nodes: [["path", {
		d: "M11.2197 5.96973C11.5126 5.67683 11.9874 5.67683 12.2803 5.96973C12.5732 6.26262 12.5732 6.73738 12.2803 7.03027L9.31054 10L12.2803 12.9697C12.5732 13.2626 12.5732 13.7374 12.2803 14.0303C11.9874 14.3232 11.5126 14.3232 11.2197 14.0303L7.71972 10.5303C7.42683 10.2374 7.42683 9.76262 7.71972 9.46973L11.2197 5.96973Z",
		fill: "currentColor",
		key: "6ofr4b"
	}]]
};
// node_modules/@primeicons/angular/fesm2022/primeicons-angular-angle-left.mjs
var AngleLeft = class AngleLeft extends CoreIcon {
	constructor() {
		super();
		this._icon = e$2;
	}
	static ɵfac = function AngleLeft_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || AngleLeft)();
	};
	static ɵcmp = (function() {
		const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
		function AngleLeft_For_1_Case_0_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "path");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleLeft_For_1_Case_1_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "circle");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleLeft_For_1_Case_2_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "rect");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleLeft_For_1_Case_3_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "line");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleLeft_For_1_Case_4_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "polyline");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleLeft_For_1_Case_5_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "polygon");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleLeft_For_1_Case_6_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "ellipse");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleLeft_For_1_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, AngleLeft_For_1_Case_0_Template, 1, 9, "path")(1, AngleLeft_For_1_Case_1_Template, 1, 6, "circle")(2, AngleLeft_For_1_Case_2_Template, 1, 9, "rect")(3, AngleLeft_For_1_Case_3_Template, 1, 7, "line")(4, AngleLeft_For_1_Case_4_Template, 1, 4, "polyline")(5, AngleLeft_For_1_Case_5_Template, 1, 4, "polygon")(6, AngleLeft_For_1_Case_6_Template, 1, 7, "ellipse");
			if (rf & 2) {
				let tmp_10_0 = void 0;
				const node_r1 = ctx.$implicit;
				ɵɵconditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
			}
		}
		return /*@__PURE__*/ ɵɵdefineComponent({
			type: AngleLeft,
			selectors: [[
				"svg",
				"data-p-icon",
				"angle-left"
			]],
			features: [ɵɵInheritDefinitionFeature],
			decls: 2,
			vars: 0,
			template: function AngleLeft_Template(rf, ctx) {
				if (rf & 1) ɵɵrepeaterCreate(0, AngleLeft_For_1_Template, 7, 1, null, null, _forTrack0);
				if (rf & 2) ɵɵrepeater(ctx.iconNodes());
			},
			encapsulation: 2,
			changeDetection: 1
		});
	})();
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngleLeft, [{
		type: Component,
		args: [{
			selector: "svg[data-p-icon=\"angle-left\"]",
			standalone: true,
			template: "\n        @for (node of iconNodes(); track node[1]['key'] || $index) {\n            @switch (node[0]) {\n                @case ('path') {\n                    <svg:path\n                        [attr.d]=\"node[1]['d']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.fill-rule]=\"node[1]['fillRule']\"\n                        [attr.clip-rule]=\"node[1]['clipRule']\"\n                        [attr.stroke]=\"node[1]['stroke']\"\n                        [attr.stroke-width]=\"node[1]['strokeWidth']\"\n                        [attr.stroke-opacity]=\"node[1]['strokeOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('circle') {\n                    <svg:circle\n                        [attr.cx]=\"node[1]['cx']\"\n                        [attr.cy]=\"node[1]['cy']\"\n                        [attr.r]=\"node[1]['r']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('rect') {\n                    <svg:rect\n                        [attr.x]=\"node[1]['x']\"\n                        [attr.y]=\"node[1]['y']\"\n                        [attr.width]=\"node[1]['width']\"\n                        [attr.height]=\"node[1]['height']\"\n                        [attr.rx]=\"node[1]['rx']\"\n                        [attr.ry]=\"node[1]['ry']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('line') {\n                    <svg:line\n                        [attr.x1]=\"node[1]['x1']\"\n                        [attr.y1]=\"node[1]['y1']\"\n                        [attr.x2]=\"node[1]['x2']\"\n                        [attr.y2]=\"node[1]['y2']\"\n                        [attr.stroke]=\"node[1]['stroke']\"\n                        [attr.stroke-opacity]=\"node[1]['strokeOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('polyline') {\n                    <svg:polyline\n                        [attr.points]=\"node[1]['points']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('polygon') {\n                    <svg:polygon\n                        [attr.points]=\"node[1]['points']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('ellipse') {\n                    <svg:ellipse\n                        [attr.cx]=\"node[1]['cx']\"\n                        [attr.cy]=\"node[1]['cy']\"\n                        [attr.rx]=\"node[1]['rx']\"\n                        [attr.ry]=\"node[1]['ry']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n            }\n        }\n"
		}]
	}], () => [], null);
})();
// node_modules/@primeicons/core/dist/esm/icons/angle-right.mjs
var t = {
	name: "angle-right",
	meta: { tags: [
		"angle-right",
		"next",
		"proceed",
		"right",
		"forward"
	] },
	svg: {
		xmlns: "http://www.w3.org/2000/svg",
		width: 20,
		height: 20,
		viewBox: "0 0 20 20",
		fill: "none"
	},
	nodes: [["path", {
		d: "M7.71972 5.96973C8.01262 5.67684 8.48738 5.67684 8.78027 5.96973L12.2803 9.46973C12.5732 9.76262 12.5732 10.2374 12.2803 10.5303L8.78027 14.0303C8.48738 14.3232 8.01262 14.3232 7.71972 14.0303C7.42683 13.7374 7.42683 13.2626 7.71972 12.9697L10.6894 10L7.71972 7.03028C7.42683 6.73738 7.42683 6.26262 7.71972 5.96973Z",
		fill: "currentColor",
		key: "gqatxy"
	}]]
};
// node_modules/@primeicons/angular/fesm2022/primeicons-angular-angle-right.mjs
var AngleRight = class AngleRight extends CoreIcon {
	constructor() {
		super();
		this._icon = t;
	}
	static ɵfac = function AngleRight_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || AngleRight)();
	};
	static ɵcmp = (function() {
		const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
		function AngleRight_For_1_Case_0_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "path");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleRight_For_1_Case_1_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "circle");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleRight_For_1_Case_2_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "rect");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleRight_For_1_Case_3_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "line");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleRight_For_1_Case_4_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "polyline");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleRight_For_1_Case_5_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "polygon");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleRight_For_1_Case_6_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "ellipse");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleRight_For_1_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, AngleRight_For_1_Case_0_Template, 1, 9, "path")(1, AngleRight_For_1_Case_1_Template, 1, 6, "circle")(2, AngleRight_For_1_Case_2_Template, 1, 9, "rect")(3, AngleRight_For_1_Case_3_Template, 1, 7, "line")(4, AngleRight_For_1_Case_4_Template, 1, 4, "polyline")(5, AngleRight_For_1_Case_5_Template, 1, 4, "polygon")(6, AngleRight_For_1_Case_6_Template, 1, 7, "ellipse");
			if (rf & 2) {
				let tmp_10_0 = void 0;
				const node_r1 = ctx.$implicit;
				ɵɵconditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
			}
		}
		return /*@__PURE__*/ ɵɵdefineComponent({
			type: AngleRight,
			selectors: [[
				"svg",
				"data-p-icon",
				"angle-right"
			]],
			features: [ɵɵInheritDefinitionFeature],
			decls: 2,
			vars: 0,
			template: function AngleRight_Template(rf, ctx) {
				if (rf & 1) ɵɵrepeaterCreate(0, AngleRight_For_1_Template, 7, 1, null, null, _forTrack0);
				if (rf & 2) ɵɵrepeater(ctx.iconNodes());
			},
			encapsulation: 2,
			changeDetection: 1
		});
	})();
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngleRight, [{
		type: Component,
		args: [{
			selector: "svg[data-p-icon=\"angle-right\"]",
			standalone: true,
			template: "\n        @for (node of iconNodes(); track node[1]['key'] || $index) {\n            @switch (node[0]) {\n                @case ('path') {\n                    <svg:path\n                        [attr.d]=\"node[1]['d']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.fill-rule]=\"node[1]['fillRule']\"\n                        [attr.clip-rule]=\"node[1]['clipRule']\"\n                        [attr.stroke]=\"node[1]['stroke']\"\n                        [attr.stroke-width]=\"node[1]['strokeWidth']\"\n                        [attr.stroke-opacity]=\"node[1]['strokeOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('circle') {\n                    <svg:circle\n                        [attr.cx]=\"node[1]['cx']\"\n                        [attr.cy]=\"node[1]['cy']\"\n                        [attr.r]=\"node[1]['r']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('rect') {\n                    <svg:rect\n                        [attr.x]=\"node[1]['x']\"\n                        [attr.y]=\"node[1]['y']\"\n                        [attr.width]=\"node[1]['width']\"\n                        [attr.height]=\"node[1]['height']\"\n                        [attr.rx]=\"node[1]['rx']\"\n                        [attr.ry]=\"node[1]['ry']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('line') {\n                    <svg:line\n                        [attr.x1]=\"node[1]['x1']\"\n                        [attr.y1]=\"node[1]['y1']\"\n                        [attr.x2]=\"node[1]['x2']\"\n                        [attr.y2]=\"node[1]['y2']\"\n                        [attr.stroke]=\"node[1]['stroke']\"\n                        [attr.stroke-opacity]=\"node[1]['strokeOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('polyline') {\n                    <svg:polyline\n                        [attr.points]=\"node[1]['points']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('polygon') {\n                    <svg:polygon\n                        [attr.points]=\"node[1]['points']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('ellipse') {\n                    <svg:ellipse\n                        [attr.cx]=\"node[1]['cx']\"\n                        [attr.cy]=\"node[1]['cy']\"\n                        [attr.rx]=\"node[1]['rx']\"\n                        [attr.ry]=\"node[1]['ry']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n            }\n        }\n"
		}]
	}], () => [], null);
})();
// node_modules/@primeicons/core/dist/esm/icons/angle-down.mjs
var e$1 = {
	name: "angle-down",
	meta: { tags: [
		"angle-down",
		"fall",
		"down",
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
		d: "M12.9697 7.71973C13.2626 7.42684 13.7374 7.42684 14.0303 7.71973C14.3232 8.01262 14.3232 8.48738 14.0303 8.78028L10.5303 12.2803C10.2374 12.5732 9.76262 12.5732 9.46973 12.2803L5.96973 8.78028C5.67684 8.48738 5.67684 8.01262 5.96973 7.71973C6.26262 7.42684 6.73738 7.42684 7.03028 7.71973L10 10.6895L12.9697 7.71973Z",
		fill: "currentColor",
		key: "r6am4n"
	}]]
};
// node_modules/@primeicons/angular/fesm2022/primeicons-angular-angle-down.mjs
var AngleDown = class AngleDown extends CoreIcon {
	constructor() {
		super();
		this._icon = e$1;
	}
	static ɵfac = function AngleDown_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || AngleDown)();
	};
	static ɵcmp = (function() {
		const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
		function AngleDown_For_1_Case_0_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "path");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleDown_For_1_Case_1_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "circle");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleDown_For_1_Case_2_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "rect");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleDown_For_1_Case_3_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "line");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleDown_For_1_Case_4_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "polyline");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleDown_For_1_Case_5_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "polygon");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleDown_For_1_Case_6_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "ellipse");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleDown_For_1_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, AngleDown_For_1_Case_0_Template, 1, 9, "path")(1, AngleDown_For_1_Case_1_Template, 1, 6, "circle")(2, AngleDown_For_1_Case_2_Template, 1, 9, "rect")(3, AngleDown_For_1_Case_3_Template, 1, 7, "line")(4, AngleDown_For_1_Case_4_Template, 1, 4, "polyline")(5, AngleDown_For_1_Case_5_Template, 1, 4, "polygon")(6, AngleDown_For_1_Case_6_Template, 1, 7, "ellipse");
			if (rf & 2) {
				let tmp_10_0 = void 0;
				const node_r1 = ctx.$implicit;
				ɵɵconditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
			}
		}
		return /*@__PURE__*/ ɵɵdefineComponent({
			type: AngleDown,
			selectors: [[
				"svg",
				"data-p-icon",
				"angle-down"
			]],
			features: [ɵɵInheritDefinitionFeature],
			decls: 2,
			vars: 0,
			template: function AngleDown_Template(rf, ctx) {
				if (rf & 1) ɵɵrepeaterCreate(0, AngleDown_For_1_Template, 7, 1, null, null, _forTrack0);
				if (rf & 2) ɵɵrepeater(ctx.iconNodes());
			},
			encapsulation: 2,
			changeDetection: 1
		});
	})();
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngleDown, [{
		type: Component,
		args: [{
			selector: "svg[data-p-icon=\"angle-down\"]",
			standalone: true,
			template: "\n        @for (node of iconNodes(); track node[1]['key'] || $index) {\n            @switch (node[0]) {\n                @case ('path') {\n                    <svg:path\n                        [attr.d]=\"node[1]['d']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.fill-rule]=\"node[1]['fillRule']\"\n                        [attr.clip-rule]=\"node[1]['clipRule']\"\n                        [attr.stroke]=\"node[1]['stroke']\"\n                        [attr.stroke-width]=\"node[1]['strokeWidth']\"\n                        [attr.stroke-opacity]=\"node[1]['strokeOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('circle') {\n                    <svg:circle\n                        [attr.cx]=\"node[1]['cx']\"\n                        [attr.cy]=\"node[1]['cy']\"\n                        [attr.r]=\"node[1]['r']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('rect') {\n                    <svg:rect\n                        [attr.x]=\"node[1]['x']\"\n                        [attr.y]=\"node[1]['y']\"\n                        [attr.width]=\"node[1]['width']\"\n                        [attr.height]=\"node[1]['height']\"\n                        [attr.rx]=\"node[1]['rx']\"\n                        [attr.ry]=\"node[1]['ry']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('line') {\n                    <svg:line\n                        [attr.x1]=\"node[1]['x1']\"\n                        [attr.y1]=\"node[1]['y1']\"\n                        [attr.x2]=\"node[1]['x2']\"\n                        [attr.y2]=\"node[1]['y2']\"\n                        [attr.stroke]=\"node[1]['stroke']\"\n                        [attr.stroke-opacity]=\"node[1]['strokeOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('polyline') {\n                    <svg:polyline\n                        [attr.points]=\"node[1]['points']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('polygon') {\n                    <svg:polygon\n                        [attr.points]=\"node[1]['points']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('ellipse') {\n                    <svg:ellipse\n                        [attr.cx]=\"node[1]['cx']\"\n                        [attr.cy]=\"node[1]['cy']\"\n                        [attr.rx]=\"node[1]['rx']\"\n                        [attr.ry]=\"node[1]['ry']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n            }\n        }\n"
		}]
	}], () => [], null);
})();
// node_modules/@primeicons/core/dist/esm/icons/angle-up.mjs
var e = {
	name: "angle-up",
	meta: { tags: [
		"angle-up",
		"rise",
		"lift",
		"up",
		"increase"
	] },
	svg: {
		xmlns: "http://www.w3.org/2000/svg",
		width: 20,
		height: 20,
		viewBox: "0 0 20 20",
		fill: "none"
	},
	nodes: [["path", {
		d: "M9.52637 7.66796C9.82095 7.42765 10.2557 7.44512 10.5303 7.71972L14.0303 11.2197C14.3232 11.5126 14.3232 11.9874 14.0303 12.2803C13.7374 12.5732 13.2626 12.5732 12.9697 12.2803L10 9.31054L7.03028 12.2803C6.73738 12.5732 6.26262 12.5732 5.96973 12.2803C5.67684 11.9874 5.67684 11.5126 5.96973 11.2197L9.46973 7.71972L9.52637 7.66796Z",
		fill: "currentColor",
		key: "sz2v2o"
	}]]
};
// node_modules/@primeicons/angular/fesm2022/primeicons-angular-angle-up.mjs
var AngleUp = class AngleUp extends CoreIcon {
	constructor() {
		super();
		this._icon = e;
	}
	static ɵfac = function AngleUp_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || AngleUp)();
	};
	static ɵcmp = (function() {
		const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
		function AngleUp_For_1_Case_0_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "path");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleUp_For_1_Case_1_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "circle");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleUp_For_1_Case_2_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "rect");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleUp_For_1_Case_3_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "line");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleUp_For_1_Case_4_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "polyline");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleUp_For_1_Case_5_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "polygon");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleUp_For_1_Case_6_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "ellipse");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function AngleUp_For_1_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, AngleUp_For_1_Case_0_Template, 1, 9, "path")(1, AngleUp_For_1_Case_1_Template, 1, 6, "circle")(2, AngleUp_For_1_Case_2_Template, 1, 9, "rect")(3, AngleUp_For_1_Case_3_Template, 1, 7, "line")(4, AngleUp_For_1_Case_4_Template, 1, 4, "polyline")(5, AngleUp_For_1_Case_5_Template, 1, 4, "polygon")(6, AngleUp_For_1_Case_6_Template, 1, 7, "ellipse");
			if (rf & 2) {
				let tmp_10_0 = void 0;
				const node_r1 = ctx.$implicit;
				ɵɵconditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
			}
		}
		return /*@__PURE__*/ ɵɵdefineComponent({
			type: AngleUp,
			selectors: [[
				"svg",
				"data-p-icon",
				"angle-up"
			]],
			features: [ɵɵInheritDefinitionFeature],
			decls: 2,
			vars: 0,
			template: function AngleUp_Template(rf, ctx) {
				if (rf & 1) ɵɵrepeaterCreate(0, AngleUp_For_1_Template, 7, 1, null, null, _forTrack0);
				if (rf & 2) ɵɵrepeater(ctx.iconNodes());
			},
			encapsulation: 2,
			changeDetection: 1
		});
	})();
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngleUp, [{
		type: Component,
		args: [{
			selector: "svg[data-p-icon=\"angle-up\"]",
			standalone: true,
			template: "\n        @for (node of iconNodes(); track node[1]['key'] || $index) {\n            @switch (node[0]) {\n                @case ('path') {\n                    <svg:path\n                        [attr.d]=\"node[1]['d']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.fill-rule]=\"node[1]['fillRule']\"\n                        [attr.clip-rule]=\"node[1]['clipRule']\"\n                        [attr.stroke]=\"node[1]['stroke']\"\n                        [attr.stroke-width]=\"node[1]['strokeWidth']\"\n                        [attr.stroke-opacity]=\"node[1]['strokeOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('circle') {\n                    <svg:circle\n                        [attr.cx]=\"node[1]['cx']\"\n                        [attr.cy]=\"node[1]['cy']\"\n                        [attr.r]=\"node[1]['r']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('rect') {\n                    <svg:rect\n                        [attr.x]=\"node[1]['x']\"\n                        [attr.y]=\"node[1]['y']\"\n                        [attr.width]=\"node[1]['width']\"\n                        [attr.height]=\"node[1]['height']\"\n                        [attr.rx]=\"node[1]['rx']\"\n                        [attr.ry]=\"node[1]['ry']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('line') {\n                    <svg:line\n                        [attr.x1]=\"node[1]['x1']\"\n                        [attr.y1]=\"node[1]['y1']\"\n                        [attr.x2]=\"node[1]['x2']\"\n                        [attr.y2]=\"node[1]['y2']\"\n                        [attr.stroke]=\"node[1]['stroke']\"\n                        [attr.stroke-opacity]=\"node[1]['strokeOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('polyline') {\n                    <svg:polyline\n                        [attr.points]=\"node[1]['points']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('polygon') {\n                    <svg:polygon\n                        [attr.points]=\"node[1]['points']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('ellipse') {\n                    <svg:ellipse\n                        [attr.cx]=\"node[1]['cx']\"\n                        [attr.cy]=\"node[1]['cy']\"\n                        [attr.rx]=\"node[1]['rx']\"\n                        [attr.ry]=\"node[1]['ry']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n            }\n        }\n"
		}]
	}], () => [], null);
})();
// node_modules/@primeuix/styles/dist/inputnumber/index.mjs
var style$2 = "\n    .p-inputnumber {\n        display: inline-flex;\n        position: relative;\n    }\n\n    .p-inputnumber-button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex: 0 0 auto;\n        cursor: pointer;\n        background: dt('inputnumber.button.background');\n        color: dt('inputnumber.button.color');\n        width: dt('inputnumber.button.width');\n        transition:\n            background dt('inputnumber.transition.duration'),\n            color dt('inputnumber.transition.duration'),\n            border-color dt('inputnumber.transition.duration'),\n            outline-color dt('inputnumber.transition.duration');\n    }\n\n    .p-inputnumber-button:disabled {\n        cursor: auto;\n    }\n\n    .p-inputnumber-button:not(:disabled):hover {\n        background: dt('inputnumber.button.hover.background');\n        color: dt('inputnumber.button.hover.color');\n    }\n\n    .p-inputnumber-button:not(:disabled):active {\n        background: dt('inputnumber.button.active.background');\n        color: dt('inputnumber.button.active.color');\n    }\n\n    .p-inputnumber-stacked .p-inputnumber-button {\n        position: relative;\n        flex: 1 1 auto;\n        border: 0 none;\n    }\n\n    .p-inputnumber-stacked .p-inputnumber-button-group {\n        display: flex;\n        flex-direction: column;\n        position: absolute;\n        inset-block-start: 1px;\n        inset-inline-end: 1px;\n        height: calc(100% - 2px);\n        z-index: 1;\n    }\n\n    .p-inputnumber-stacked .p-inputnumber-increment-button {\n        padding: 0;\n        border-start-end-radius: calc(dt('inputnumber.button.border.radius') - 1px);\n    }\n\n    .p-inputnumber-stacked .p-inputnumber-decrement-button {\n        padding: 0;\n        border-end-end-radius: calc(dt('inputnumber.button.border.radius') - 1px);\n    }\n\n    .p-inputnumber-stacked .p-inputnumber-input {\n        padding-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));\n    }\n\n    .p-inputnumber-horizontal .p-inputnumber-button {\n        border: 1px solid dt('inputnumber.button.border.color');\n    }\n\n    .p-inputnumber-horizontal .p-inputnumber-button:hover {\n        border-color: dt('inputnumber.button.hover.border.color');\n    }\n\n    .p-inputnumber-horizontal .p-inputnumber-button:active {\n        border-color: dt('inputnumber.button.active.border.color');\n    }\n\n    .p-inputnumber-horizontal .p-inputnumber-increment-button {\n        order: 3;\n        border-start-end-radius: dt('inputnumber.button.border.radius');\n        border-end-end-radius: dt('inputnumber.button.border.radius');\n        border-inline-start: 0 none;\n    }\n\n    .p-inputnumber-horizontal .p-inputnumber-input {\n        order: 2;\n        border-radius: 0;\n    }\n\n    .p-inputnumber-horizontal .p-inputnumber-decrement-button {\n        order: 1;\n        border-start-start-radius: dt('inputnumber.button.border.radius');\n        border-end-start-radius: dt('inputnumber.button.border.radius');\n        border-inline-end: 0 none;\n    }\n\n    .p-floatlabel:has(.p-inputnumber-horizontal) label {\n        margin-inline-start: dt('inputnumber.button.width');\n    }\n\n    .p-inputnumber-vertical {\n        flex-direction: column;\n    }\n\n    .p-inputnumber-vertical .p-inputnumber-button {\n        border: 1px solid dt('inputnumber.button.border.color');\n        padding: dt('inputnumber.button.vertical.padding');\n    }\n\n    .p-inputnumber-vertical .p-inputnumber-button:hover {\n        border-color: dt('inputnumber.button.hover.border.color');\n    }\n\n    .p-inputnumber-vertical .p-inputnumber-button:active {\n        border-color: dt('inputnumber.button.active.border.color');\n    }\n\n    .p-inputnumber-vertical .p-inputnumber-increment-button {\n        order: 1;\n        border-start-start-radius: dt('inputnumber.button.border.radius');\n        border-start-end-radius: dt('inputnumber.button.border.radius');\n        width: 100%;\n        border-block-end: 0 none;\n    }\n\n    .p-inputnumber-vertical .p-inputnumber-input {\n        order: 2;\n        border-radius: 0;\n        text-align: center;\n    }\n\n    .p-inputnumber-vertical .p-inputnumber-decrement-button {\n        order: 3;\n        border-end-start-radius: dt('inputnumber.button.border.radius');\n        border-end-end-radius: dt('inputnumber.button.border.radius');\n        width: 100%;\n        border-block-start: 0 none;\n    }\n\n    .p-inputnumber-input {\n        flex: 1 1 auto;\n    }\n\n    .p-inputnumber-fluid {\n        width: 100%;\n    }\n\n    .p-inputnumber-fluid .p-inputnumber-input {\n        width: 1%;\n    }\n\n    .p-inputnumber-fluid.p-inputnumber-vertical .p-inputnumber-input {\n        width: 100%;\n    }\n\n    .p-inputnumber:has(.p-inputtext-sm) .p-inputnumber-button .p-icon {\n        font-size: dt('form.field.sm.font.size');\n        width: dt('form.field.sm.font.size');\n        height: dt('form.field.sm.font.size');\n    }\n\n    .p-inputnumber:has(.p-inputtext-lg) .p-inputnumber-button .p-icon {\n        font-size: dt('form.field.lg.font.size');\n        width: dt('form.field.lg.font.size');\n        height: dt('form.field.lg.font.size');\n    }\n\n    .p-inputnumber-clear-icon {\n        position: absolute;\n        top: 50%;\n        margin-top: calc(-1 * dt('icon.size') / 2);\n        cursor: pointer;\n        inset-inline-end: dt('form.field.padding.x');\n        color: dt('form.field.icon.color');\n    }\n\n    .p-inputnumber:has(.p-inputnumber-clear-icon) .p-inputnumber-input {\n        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));\n    }\n\n    .p-inputnumber-stacked .p-inputnumber-clear-icon {\n        inset-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));\n    }\n\n    .p-inputnumber-stacked:has(.p-inputnumber-clear-icon) .p-inputnumber-input {\n        padding-inline-end: calc(dt('inputnumber.button.width') + (dt('form.field.padding.x') * 2) + dt('icon.size'));\n    }\n\n    .p-inputnumber-horizontal .p-inputnumber-clear-icon {\n        inset-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));\n    }\n";
// node_modules/primeng/fesm2022/primeng-inputnumber.mjs
var classes$2 = {
	root: ({ instance }) => ["p-inputnumber p-component p-inputwrapper", {
		"p-invalid": instance.invalid(),
		"p-inputwrapper-filled": instance.$filled() || instance.allowEmpty() === false,
		"p-inputwrapper-focus": instance.focused,
		"p-inputnumber-stacked": instance.showButtons() && instance.buttonLayout() === "stacked",
		"p-inputnumber-horizontal": instance.showButtons() && instance.buttonLayout() === "horizontal",
		"p-inputnumber-vertical": instance.showButtons() && instance.buttonLayout() === "vertical",
		"p-inputnumber-fluid": instance.hasFluid
	}],
	pcInputText: "p-inputnumber-input",
	clearIcon: "p-inputnumber-clear-icon",
	buttonGroup: "p-inputnumber-button-group",
	incrementButton: ({ instance }) => ["p-inputnumber-button p-inputnumber-increment-button", { "p-disabled": instance.showButtons() && instance.max() != null && instance.maxlength() }],
	decrementButton: ({ instance }) => ["p-inputnumber-button p-inputnumber-decrement-button", { "p-disabled": instance.showButtons() && instance.min() != null && instance.minlength() }]
};
var InputNumberStyle = class InputNumberStyle extends BaseStyle {
	name = "inputnumber";
	style = style$2;
	classes = classes$2;
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵInputNumberStyle_BaseFactory = void 0;
		return function InputNumberStyle_Factory(__ngFactoryType__) {
			return (ɵInputNumberStyle_BaseFactory || (ɵInputNumberStyle_BaseFactory = ɵɵgetInheritedFactory(InputNumberStyle)))(__ngFactoryType__ || InputNumberStyle);
		};
	})();
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: InputNumberStyle,
		factory: InputNumberStyle.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputNumberStyle, [{ type: Injectable }], null, null);
})();
var InputNumberClasses;
(function(InputNumberClasses) {
	InputNumberClasses["root"] = "p-inputnumber";
	InputNumberClasses["pcInputText"] = "p-inputnumber-input";
	InputNumberClasses["buttonGroup"] = "p-inputnumber-button-group";
	InputNumberClasses["incrementButton"] = "p-inputnumber-increment-button";
	InputNumberClasses["decrementButton"] = "p-inputnumber-decrement-button";
	InputNumberClasses["clearIcon"] = "p-autocomplete-clear-icon";
})(InputNumberClasses || (InputNumberClasses = {}));
var INPUTNUMBER_INSTANCE = new InjectionToken("INPUTNUMBER_INSTANCE");
var INPUTNUMBER_VALUE_ACCESSOR = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => InputNumber),
	multi: true
};
var InputNumber = class InputNumber extends BaseInput {
	componentName = "InputNumber";
	$pcInputNumber = inject(INPUTNUMBER_INSTANCE, {
		optional: true,
		skipSelf: true
	}) ?? void 0;
	_componentStyle = inject(InputNumberStyle);
	bindDirectiveInstance = inject(Bind, { self: true });
	showButtons = input(false, {
		...ngDevMode ? { debugName: "showButtons" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	format = input(true, {
		...ngDevMode ? { debugName: "format" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	buttonLayout = input("stacked", ...ngDevMode ? [{ debugName: "buttonLayout" }] : /* istanbul ignore next */ []);
	inputId = input(...ngDevMode ? [void 0, { debugName: "inputId" }] : /* istanbul ignore next */ []);
	placeholder = input(...ngDevMode ? [void 0, { debugName: "placeholder" }] : /* istanbul ignore next */ []);
	tabindex = input(void 0, {
		...ngDevMode ? { debugName: "tabindex" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	title = input(...ngDevMode ? [void 0, { debugName: "title" }] : /* istanbul ignore next */ []);
	ariaLabelledBy = input(...ngDevMode ? [void 0, { debugName: "ariaLabelledBy" }] : /* istanbul ignore next */ []);
	ariaDescribedBy = input(...ngDevMode ? [void 0, { debugName: "ariaDescribedBy" }] : /* istanbul ignore next */ []);
	ariaLabel = input(...ngDevMode ? [void 0, { debugName: "ariaLabel" }] : /* istanbul ignore next */ []);
	ariaRequired = input(void 0, {
		...ngDevMode ? { debugName: "ariaRequired" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	autocomplete = input(...ngDevMode ? [void 0, { debugName: "autocomplete" }] : /* istanbul ignore next */ []);
	incrementButtonClass = input(...ngDevMode ? [void 0, { debugName: "incrementButtonClass" }] : /* istanbul ignore next */ []);
	decrementButtonClass = input(...ngDevMode ? [void 0, { debugName: "decrementButtonClass" }] : /* istanbul ignore next */ []);
	incrementButtonIcon = input(...ngDevMode ? [void 0, { debugName: "incrementButtonIcon" }] : /* istanbul ignore next */ []);
	decrementButtonIcon = input(...ngDevMode ? [void 0, { debugName: "decrementButtonIcon" }] : /* istanbul ignore next */ []);
	readonly = input(void 0, {
		...ngDevMode ? { debugName: "readonly" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	allowEmpty = input(true, {
		...ngDevMode ? { debugName: "allowEmpty" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	locale = input(...ngDevMode ? [void 0, { debugName: "locale" }] : /* istanbul ignore next */ []);
	localeMatcher = input(...ngDevMode ? [void 0, { debugName: "localeMatcher" }] : /* istanbul ignore next */ []);
	mode = input("decimal", ...ngDevMode ? [{ debugName: "mode" }] : /* istanbul ignore next */ []);
	currency = input(...ngDevMode ? [void 0, { debugName: "currency" }] : /* istanbul ignore next */ []);
	currencyDisplay = input(...ngDevMode ? [void 0, { debugName: "currencyDisplay" }] : /* istanbul ignore next */ []);
	useGrouping = input(true, {
		...ngDevMode ? { debugName: "useGrouping" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	minFractionDigits = input(void 0, {
		...ngDevMode ? { debugName: "minFractionDigits" } : /* istanbul ignore next */ {},
		transform: (value) => numberAttribute(value, void 0)
	});
	maxFractionDigits = input(void 0, {
		...ngDevMode ? { debugName: "maxFractionDigits" } : /* istanbul ignore next */ {},
		transform: (value) => numberAttribute(value, void 0)
	});
	prefix = input(...ngDevMode ? [void 0, { debugName: "prefix" }] : /* istanbul ignore next */ []);
	suffix = input(...ngDevMode ? [void 0, { debugName: "suffix" }] : /* istanbul ignore next */ []);
	inputStyle = input(...ngDevMode ? [void 0, { debugName: "inputStyle" }] : /* istanbul ignore next */ []);
	inputStyleClass = input(...ngDevMode ? [void 0, { debugName: "inputStyleClass" }] : /* istanbul ignore next */ []);
	showClear = input(false, {
		...ngDevMode ? { debugName: "showClear" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	autofocus = input(void 0, {
		...ngDevMode ? { debugName: "autofocus" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	onInput = output();
	onFocus = output();
	onBlur = output();
	onKeyDown = output();
	onClear = output();
	clearIconTemplate = contentChild("clearicon", {
		...ngDevMode ? { debugName: "clearIconTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	incrementButtonIconTemplate = contentChild("incrementbuttonicon", {
		...ngDevMode ? { debugName: "incrementButtonIconTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	decrementButtonIconTemplate = contentChild("decrementbuttonicon", {
		...ngDevMode ? { debugName: "decrementButtonIconTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	input = viewChild.required("input", ...ngDevMode ? [{ debugName: "input" }] : /* istanbul ignore next */ []);
	requiredAttr = computed(() => this.required() ? "" : void 0, ...ngDevMode ? [{ debugName: "requiredAttr" }] : /* istanbul ignore next */ []);
	readonlyAttr = computed(() => this.readonly() ? "" : void 0, ...ngDevMode ? [{ debugName: "readonlyAttr" }] : /* istanbul ignore next */ []);
	disabledAttr = computed(() => this.$disabled() ? "" : void 0, ...ngDevMode ? [{ debugName: "disabledAttr" }] : /* istanbul ignore next */ []);
	get showClearIcon() {
		return this.buttonLayout() !== "vertical" && this.showClear() && this.value() != null;
	}
	showStackedButtons = computed(() => this.showButtons() && this.buttonLayout() === "stacked", ...ngDevMode ? [{ debugName: "showStackedButtons" }] : /* istanbul ignore next */ []);
	showNonStackedButtons = computed(() => this.showButtons() && this.buttonLayout() !== "stacked", ...ngDevMode ? [{ debugName: "showNonStackedButtons" }] : /* istanbul ignore next */ []);
	hasIncrementButtonIcon = computed(() => !!this.incrementButtonIcon(), ...ngDevMode ? [{ debugName: "hasIncrementButtonIcon" }] : /* istanbul ignore next */ []);
	hasDecrementButtonIcon = computed(() => !!this.decrementButtonIcon(), ...ngDevMode ? [{ debugName: "hasDecrementButtonIcon" }] : /* istanbul ignore next */ []);
	parserConfig = computed(() => ({
		locale: this.locale(),
		localeMatcher: this.localeMatcher(),
		mode: this.mode(),
		currency: this.currency(),
		currencyDisplay: this.currencyDisplay(),
		useGrouping: this.useGrouping(),
		minFractionDigits: this.minFractionDigits(),
		maxFractionDigits: this.maxFractionDigits(),
		prefix: this.prefix(),
		suffix: this.suffix()
	}), ...ngDevMode ? [{ debugName: "parserConfig" }] : /* istanbul ignore next */ []);
	constructor() {
		super();
		effect(() => {
			this.parserConfig();
			this.updateConstructParser();
		});
	}
	_injector = inject(Injector);
	value = signal(void 0, ...ngDevMode ? [{ debugName: "value" }] : /* istanbul ignore next */ []);
	focused;
	initialized;
	groupChar = "";
	prefixChar = "";
	suffixChar = "";
	isSpecialChar;
	timer = null;
	lastValue;
	_numeral = /./g;
	numberFormat = null;
	_decimal = /./g;
	_decimalChar = "";
	_group = /./g;
	_minusSign = /./g;
	_currency;
	_prefix;
	_suffix;
	ngControl = null;
	formattedValue = computed(() => {
		const value = this.value();
		const val = !value && !this.allowEmpty() ? 0 : value;
		return this.formatValue(val);
	}, ...ngDevMode ? [{ debugName: "formattedValue" }] : /* istanbul ignore next */ []);
	_index = () => void 0;
	onAfterViewChecked() {
		this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
	}
	onInit() {
		this.ngControl = this._injector.get(NgControl, null, { optional: true });
		this.constructParser();
		this.initialized = true;
	}
	getOptions() {
		const validateFractionDigits = (value, min, max) => {
			if (value == null || isNaN(value) || !isFinite(value)) return;
			return Math.max(min, Math.min(max, Math.floor(value)));
		};
		const minFractionDigits = validateFractionDigits(this.minFractionDigits(), 0, 20);
		const maxFractionDigits = validateFractionDigits(this.maxFractionDigits(), 0, 100);
		const validatedMinFractionDigits = minFractionDigits != null && maxFractionDigits != null && minFractionDigits > maxFractionDigits ? maxFractionDigits : minFractionDigits;
		return {
			localeMatcher: this.localeMatcher(),
			style: this.mode(),
			currency: this.currency(),
			currencyDisplay: this.currencyDisplay(),
			useGrouping: this.useGrouping(),
			minimumFractionDigits: validatedMinFractionDigits,
			maximumFractionDigits: maxFractionDigits
		};
	}
	constructParser() {
		const options = this.getOptions();
		const cleanOptions = Object.fromEntries(Object.entries(options).filter(([, value]) => value !== void 0));
		this.numberFormat = new Intl.NumberFormat(this.locale(), cleanOptions);
		const numerals = [...new Intl.NumberFormat(this.locale(), { useGrouping: false }).format(9876543210)].reverse();
		const index = new Map(numerals.map((d, i) => [d, i]));
		this._numeral = new RegExp(`[${numerals.join("")}]`, "g");
		this._group = this.getGroupingExpression();
		this._minusSign = this.getMinusSignExpression();
		this._currency = this.getCurrencyExpression();
		this._decimal = this.getDecimalExpression();
		this._decimalChar = this.getDecimalChar();
		this._suffix = this.getSuffixExpression();
		this._prefix = this.getPrefixExpression();
		this._index = (d) => index.get(d);
	}
	updateConstructParser() {
		if (this.initialized) this.constructParser();
	}
	escapeRegExp(text) {
		return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
	}
	getDecimalExpression() {
		const decimalChar = this.getDecimalChar();
		return new RegExp(`[${decimalChar}]`, "g");
	}
	getDecimalChar() {
		return new Intl.NumberFormat(this.locale(), {
			...this.getOptions(),
			useGrouping: false
		}).format(1.1).replace(this._currency, "").trim().replace(this._numeral, "");
	}
	getGroupingExpression() {
		const groupPart = new Intl.NumberFormat(this.locale(), {
			...this.getOptions(),
			useGrouping: true
		}).formatToParts(1e6).find((part) => part.type === "group");
		this.groupChar = groupPart ? groupPart.value : "";
		return new RegExp(`[${this.groupChar}]`, "g");
	}
	getMinusSignExpression() {
		const formatter = new Intl.NumberFormat(this.locale(), { useGrouping: false });
		return new RegExp(`[${formatter.format(-1).trim().replace(this._numeral, "")}]`, "g");
	}
	getCurrencyExpression() {
		if (this.currency()) {
			const formatter = new Intl.NumberFormat(this.locale(), {
				style: "currency",
				currency: this.currency(),
				currencyDisplay: this.currencyDisplay(),
				minimumFractionDigits: 0,
				maximumFractionDigits: 0
			});
			return new RegExp(`[${formatter.format(1).replace(/\s/g, "").replace(this._numeral, "").replace(this._group, "")}]`, "g");
		}
		return new RegExp(`[]`, "g");
	}
	getPrefixExpression() {
		const prefix = this.prefix();
		if (prefix) this.prefixChar = prefix;
		else {
			const formatter = new Intl.NumberFormat(this.locale(), {
				style: this.mode(),
				currency: this.currency(),
				currencyDisplay: this.currencyDisplay()
			});
			this.prefixChar = formatter.format(1).split("1")[0];
		}
		return new RegExp(`${this.escapeRegExp(this.prefixChar || "")}`, "g");
	}
	getSuffixExpression() {
		const suffix = this.suffix();
		if (suffix) this.suffixChar = suffix;
		else {
			const formatter = new Intl.NumberFormat(this.locale(), {
				style: this.mode(),
				currency: this.currency(),
				currencyDisplay: this.currencyDisplay(),
				minimumFractionDigits: 0,
				maximumFractionDigits: 0
			});
			this.suffixChar = formatter.format(1).split("1")[1];
		}
		return new RegExp(`${this.escapeRegExp(this.suffixChar || "")}`, "g");
	}
	formatValue(value) {
		if (value != null) {
			if (value === "-") return value;
			const prefix = this.prefix();
			const suffix = this.suffix();
			if (this.format()) {
				let formattedValue = new Intl.NumberFormat(this.locale(), this.getOptions()).format(value);
				if (prefix && value != prefix) formattedValue = prefix + formattedValue;
				if (suffix && value != suffix) formattedValue = formattedValue + suffix;
				return formattedValue;
			}
			return value.toString();
		}
		return "";
	}
	parseValue(text) {
		const suffixRegex = this._suffix ? new RegExp(this._suffix, "") : /(?:)/;
		const prefixRegex = this._prefix ? new RegExp(this._prefix, "") : /(?:)/;
		const currencyRegex = this._currency ? new RegExp(this._currency, "") : /(?:)/;
		let filteredText = text.replace(suffixRegex, "").replace(prefixRegex, "").trim().replace(/\s/g, "").replace(currencyRegex, "").replace(this._group, "").replace(this._minusSign, "-").replace(this._decimal, ".").replace(this._numeral, this._index);
		if (filteredText) {
			if (filteredText === "-") return filteredText;
			let parsedValue = +filteredText;
			return isNaN(parsedValue) ? null : parsedValue;
		}
		return null;
	}
	repeat(event, interval, dir) {
		if (this.readonly()) return;
		let i = interval || 500;
		this.clearTimer();
		this.timer = setTimeout(() => {
			this.repeat(event, 40, dir);
		}, i);
		this.spin(event, dir);
	}
	spin(event, dir) {
		let step = (this.step() ?? 1) * dir;
		let currentValue = this.parseValue(this.input()?.nativeElement.value) || 0;
		let newValue = this.validateValue(currentValue + step);
		const max = this.maxlength();
		if (max && max < this.formatValue(newValue).length) return;
		this.updateInput(newValue, null, "spin", null);
		this.updateModel(event, newValue);
		this.handleOnInput(event, currentValue, newValue);
	}
	clear() {
		this.value.set(null);
		this.onModelChange(this.value());
		this.onClear.emit();
	}
	onUpButtonMouseDown(event) {
		if (event.button === 2) {
			this.clearTimer();
			return;
		}
		if (!this.$disabled()) {
			this.input()?.nativeElement.focus();
			this.repeat(event, null, 1);
			event.preventDefault();
		}
	}
	onUpButtonMouseUp() {
		if (!this.$disabled()) this.clearTimer();
	}
	onUpButtonMouseLeave() {
		if (!this.$disabled()) this.clearTimer();
	}
	onUpButtonKeyDown(event) {
		if (event.keyCode === 32 || event.keyCode === 13) this.repeat(event, null, 1);
	}
	onUpButtonKeyUp() {
		if (!this.$disabled()) this.clearTimer();
	}
	onDownButtonMouseDown(event) {
		if (event.button === 2) {
			this.clearTimer();
			return;
		}
		if (!this.$disabled()) {
			this.input()?.nativeElement.focus();
			this.repeat(event, null, -1);
			event.preventDefault();
		}
	}
	onDownButtonMouseUp() {
		if (!this.$disabled()) this.clearTimer();
	}
	onDownButtonMouseLeave() {
		if (!this.$disabled()) this.clearTimer();
	}
	onDownButtonKeyUp() {
		if (!this.$disabled()) this.clearTimer();
	}
	onDownButtonKeyDown(event) {
		if (event.keyCode === 32 || event.keyCode === 13) this.repeat(event, null, -1);
	}
	onUserInput(event) {
		if (this.readonly()) return;
		if (this.isSpecialChar) event.target.value = this.lastValue;
		this.isSpecialChar = false;
	}
	onInputKeyDown(event) {
		if (this.readonly()) return;
		this.lastValue = event.target.value;
		if (event.shiftKey || event.altKey) {
			this.isSpecialChar = true;
			return;
		}
		let selectionStart = event.target.selectionStart;
		let selectionEnd = event.target.selectionEnd;
		let inputValue = event.target.value;
		let newValueStr = null;
		if (event.altKey) event.preventDefault();
		switch (event.key) {
			case "ArrowUp":
				this.spin(event, 1);
				event.preventDefault();
				break;
			case "ArrowDown":
				this.spin(event, -1);
				event.preventDefault();
				break;
			case "ArrowLeft":
				for (let index = selectionStart; index <= inputValue.length; index++) {
					const previousCharIndex = index === 0 ? 0 : index - 1;
					if (this.isNumeralChar(inputValue.charAt(previousCharIndex))) {
						this.input().nativeElement.setSelectionRange(index, index);
						break;
					}
				}
				break;
			case "ArrowRight":
				for (let index = selectionEnd; index >= 0; index--) if (this.isNumeralChar(inputValue.charAt(index))) {
					this.input().nativeElement.setSelectionRange(index, index);
					break;
				}
				break;
			case "Tab":
			case "Enter":
				newValueStr = this.validateValue(this.parseValue(this.input().nativeElement.value));
				this.input().nativeElement.value = this.formatValue(newValueStr);
				this.input().nativeElement.setAttribute("aria-valuenow", newValueStr);
				this.updateModel(event, newValueStr);
				break;
			case "Backspace":
				event.preventDefault();
				if (selectionStart === selectionEnd) {
					if (selectionStart == 1 && this.prefix() || selectionStart == inputValue.length && this.suffix()) break;
					const deleteChar = inputValue.charAt(selectionStart - 1);
					const { decimalCharIndex, decimalCharIndexWithoutPrefix } = this.getDecimalCharIndexes(inputValue);
					if (this.isNumeralChar(deleteChar)) {
						const decimalLength = this.getDecimalLength(inputValue);
						if (this._group.test(deleteChar)) {
							this._group.lastIndex = 0;
							newValueStr = inputValue.slice(0, selectionStart - 2) + inputValue.slice(selectionStart - 1);
						} else if (this._decimal.test(deleteChar)) {
							this._decimal.lastIndex = 0;
							if (decimalLength) this.input()?.nativeElement.setSelectionRange(selectionStart - 1, selectionStart - 1);
							else newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
						} else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
							const insertedText = this.isDecimalMode() && (this.minFractionDigits() || 0) < decimalLength ? "" : "0";
							newValueStr = inputValue.slice(0, selectionStart - 1) + insertedText + inputValue.slice(selectionStart);
						} else if (decimalCharIndexWithoutPrefix === 1) {
							newValueStr = inputValue.slice(0, selectionStart - 1) + "0" + inputValue.slice(selectionStart);
							newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : "";
						} else newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
					} else if (this.mode() === "currency" && this._currency && deleteChar.search(this._currency) != -1) newValueStr = inputValue.slice(1);
					this.updateValue(event, newValueStr, null, "delete-single");
				} else {
					newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
					this.updateValue(event, newValueStr, null, "delete-range");
				}
				break;
			case "Delete":
				event.preventDefault();
				if (selectionStart === selectionEnd) {
					if (selectionStart == 0 && this.prefix() || selectionStart == inputValue.length - 1 && this.suffix()) break;
					const deleteChar = inputValue.charAt(selectionStart);
					const { decimalCharIndex, decimalCharIndexWithoutPrefix } = this.getDecimalCharIndexes(inputValue);
					if (this.isNumeralChar(deleteChar)) {
						const decimalLength = this.getDecimalLength(inputValue);
						if (this._group.test(deleteChar)) {
							this._group.lastIndex = 0;
							newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 2);
						} else if (this._decimal.test(deleteChar)) {
							this._decimal.lastIndex = 0;
							if (decimalLength) this.input()?.nativeElement.setSelectionRange(selectionStart + 1, selectionStart + 1);
							else newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
						} else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
							const insertedText = this.isDecimalMode() && (this.minFractionDigits() || 0) < decimalLength ? "" : "0";
							newValueStr = inputValue.slice(0, selectionStart) + insertedText + inputValue.slice(selectionStart + 1);
						} else if (decimalCharIndexWithoutPrefix === 1) {
							newValueStr = inputValue.slice(0, selectionStart) + "0" + inputValue.slice(selectionStart + 1);
							newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : "";
						} else newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
					}
					this.updateValue(event, newValueStr, null, "delete-back-single");
				} else {
					newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
					this.updateValue(event, newValueStr, null, "delete-range");
				}
				break;
			case "Home":
				if (this.min()) {
					this.updateModel(event, this.min());
					event.preventDefault();
				}
				break;
			case "End": if (this.max()) {
				this.updateModel(event, this.max());
				event.preventDefault();
			}
		}
		this.onKeyDown.emit(event);
	}
	onInputKeyPress(event) {
		if (this.readonly()) return;
		let code = event.which || event.keyCode;
		let char = String.fromCharCode(code);
		let isDecimalSign = this.isDecimalSign(char);
		const isMinusSign = this.isMinusSign(char);
		if (code != 13) event.preventDefault();
		if (!isDecimalSign && event.code === "NumpadDecimal") {
			isDecimalSign = true;
			char = this._decimalChar;
			code = char.charCodeAt(0);
		}
		const { value, selectionStart, selectionEnd } = this.input().nativeElement;
		const newValue = this.parseValue(value + char);
		const newValueStr = newValue != null ? newValue.toString() : "";
		const selectedValue = value.substring(selectionStart, selectionEnd);
		const selectedValueParsed = this.parseValue(selectedValue);
		const selectedValueStr = selectedValueParsed != null ? selectedValueParsed.toString() : "";
		if (selectionStart !== selectionEnd && selectedValueStr.length > 0) {
			this.insert(event, char, {
				isDecimalSign,
				isMinusSign
			});
			return;
		}
		const max = this.maxlength();
		if (max && newValueStr.length > max) return;
		if (48 <= code && code <= 57 || isMinusSign || isDecimalSign) this.insert(event, char, {
			isDecimalSign,
			isMinusSign
		});
	}
	onPaste(event) {
		if (!this.$disabled() && !this.readonly()) {
			event.preventDefault();
			let data = (event.clipboardData || this.document.defaultView["clipboardData"]).getData("Text");
			if (this.inputId() === "integeronly" && /[^\d-]/.test(data)) return;
			if (data) {
				if (this.maxlength()) data = data.toString().substring(0, this.maxlength());
				let filteredData = this.parseValue(data);
				if (filteredData != null) this.insert(event, filteredData.toString());
			}
		}
	}
	allowMinusSign() {
		const min = this.min();
		return min == null || min < 0;
	}
	isMinusSign(char) {
		if (this._minusSign.test(char) || char === "-") {
			this._minusSign.lastIndex = 0;
			return true;
		}
		return false;
	}
	isDecimalSign(char) {
		if (this._decimal.test(char)) {
			this._decimal.lastIndex = 0;
			return true;
		}
		return false;
	}
	isDecimalMode() {
		return this.mode() === "decimal";
	}
	getDecimalCharIndexes(val) {
		let decimalCharIndex = val.search(this._decimal);
		this._decimal.lastIndex = 0;
		const decimalCharIndexWithoutPrefix = val.replace(this._prefix, "").trim().replace(/\s/g, "").replace(this._currency, "").search(this._decimal);
		this._decimal.lastIndex = 0;
		return {
			decimalCharIndex,
			decimalCharIndexWithoutPrefix
		};
	}
	getCharIndexes(val) {
		const decimalCharIndex = val.search(this._decimal);
		this._decimal.lastIndex = 0;
		const minusCharIndex = val.search(this._minusSign);
		this._minusSign.lastIndex = 0;
		const suffixCharIndex = val.search(this._suffix);
		this._suffix.lastIndex = 0;
		const currencyCharIndex = val.search(this._currency);
		this._currency.lastIndex = 0;
		return {
			decimalCharIndex,
			minusCharIndex,
			suffixCharIndex,
			currencyCharIndex
		};
	}
	insert(event, text, sign = {
		isDecimalSign: false,
		isMinusSign: false
	}) {
		const minusCharIndexOnText = text.search(this._minusSign);
		this._minusSign.lastIndex = 0;
		if (!this.allowMinusSign() && minusCharIndexOnText !== -1) return;
		let selectionStart = this.input()?.nativeElement.selectionStart ?? 0;
		let selectionEnd = this.input()?.nativeElement.selectionEnd ?? 0;
		let inputValue = this.input()?.nativeElement.value.trim();
		const { decimalCharIndex, minusCharIndex, suffixCharIndex, currencyCharIndex } = this.getCharIndexes(inputValue);
		let newValueStr;
		if (sign.isMinusSign) {
			if (selectionStart === 0) {
				newValueStr = inputValue;
				if (minusCharIndex === -1 || selectionEnd !== 0) newValueStr = this.insertText(inputValue, text, 0, selectionEnd);
				this.updateValue(event, newValueStr, text, "insert");
			}
		} else if (sign.isDecimalSign) {
			if (decimalCharIndex > 0 && selectionStart === decimalCharIndex) this.updateValue(event, inputValue, text, "insert");
			else if (decimalCharIndex > selectionStart && decimalCharIndex < selectionEnd) {
				newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
				this.updateValue(event, newValueStr, text, "insert");
			} else if (decimalCharIndex === -1 && this.maxFractionDigits()) {
				newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
				this.updateValue(event, newValueStr, text, "insert");
			}
		} else {
			const maxFractionDigits = this.numberFormat?.resolvedOptions().maximumFractionDigits ?? 0;
			const operation = selectionStart !== selectionEnd ? "range-insert" : "insert";
			if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
				if (selectionStart + text.length - (decimalCharIndex + 1) <= maxFractionDigits) {
					const charIndex = currencyCharIndex >= selectionStart ? currencyCharIndex - 1 : suffixCharIndex >= selectionStart ? suffixCharIndex : inputValue.length;
					newValueStr = inputValue.slice(0, selectionStart) + text + inputValue.slice(selectionStart + text.length, charIndex) + inputValue.slice(charIndex);
					this.updateValue(event, newValueStr, text, operation);
				}
			} else {
				newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
				this.updateValue(event, newValueStr, text, operation);
			}
		}
	}
	insertText(value, text, start, end) {
		if ((text === "." ? text : text.split(".")).length === 2) {
			const decimalCharIndex = value.slice(start, end).search(this._decimal);
			this._decimal.lastIndex = 0;
			return decimalCharIndex > 0 ? value.slice(0, start) + this.formatValue(text) + value.slice(end) : value || this.formatValue(text);
		} else if (end - start === value.length) return this.formatValue(text);
		else if (start === 0) return text + value.slice(end);
		else if (end === value.length) return value.slice(0, start) + text;
		else return value.slice(0, start) + text + value.slice(end);
	}
	deleteRange(value, start, end) {
		let newValueStr;
		if (end - start === value.length) newValueStr = "";
		else if (start === 0) newValueStr = value.slice(end);
		else if (end === value.length) newValueStr = value.slice(0, start);
		else newValueStr = value.slice(0, start) + value.slice(end);
		return newValueStr;
	}
	initCursor() {
		let selectionStart = this.input()?.nativeElement.selectionStart ?? 0;
		let selectionEnd = this.input()?.nativeElement.selectionEnd ?? 0;
		let inputValue = this.input()?.nativeElement.value;
		let valueLength = inputValue.length;
		let index = null;
		let prefixLength = (this.prefixChar || "").length;
		inputValue = inputValue.replace(this._prefix, "");
		if (selectionStart === selectionEnd || selectionStart !== 0 || selectionEnd < prefixLength) selectionStart -= prefixLength;
		let char = inputValue.charAt(selectionStart);
		if (this.isNumeralChar(char)) return selectionStart + prefixLength;
		let i = selectionStart - 1;
		while (i >= 0) {
			char = inputValue.charAt(i);
			if (this.isNumeralChar(char)) {
				index = i + prefixLength;
				break;
			} else i--;
		}
		if (index !== null) this.input()?.nativeElement.setSelectionRange(index + 1, index + 1);
		else {
			i = selectionStart;
			while (i < valueLength) {
				char = inputValue.charAt(i);
				if (this.isNumeralChar(char)) {
					index = i + prefixLength;
					break;
				} else i++;
			}
			if (index !== null) this.input()?.nativeElement.setSelectionRange(index, index);
		}
		return index || 0;
	}
	onInputClick() {
		const currentValue = this.input()?.nativeElement.value;
		if (!this.readonly() && currentValue !== Xt()) this.initCursor();
	}
	isNumeralChar(char) {
		if (char.length === 1 && (this._numeral.test(char) || this._decimal.test(char) || this._group.test(char) || this._minusSign.test(char))) {
			this.resetRegex();
			return true;
		}
		return false;
	}
	resetRegex() {
		this._numeral.lastIndex = 0;
		this._decimal.lastIndex = 0;
		this._group.lastIndex = 0;
		this._minusSign.lastIndex = 0;
	}
	updateValue(event, valueStr, insertedValueStr, operation) {
		let currentValue = this.input()?.nativeElement.value;
		let newValue = null;
		if (valueStr != null) {
			newValue = this.parseValue(valueStr);
			newValue = !newValue && !this.allowEmpty() ? 0 : newValue;
			this.updateInput(newValue, insertedValueStr, operation, valueStr);
			this.handleOnInput(event, currentValue, newValue);
		}
	}
	handleOnInput(event, currentValue, newValue) {
		if (this.isValueChanged(currentValue, newValue)) {
			this.input().nativeElement.value = this.formatValue(newValue);
			this.input()?.nativeElement.setAttribute("aria-valuenow", newValue);
			this.updateModel(event, newValue);
			this.onInput.emit({
				originalEvent: event,
				value: newValue,
				formattedValue: currentValue
			});
		}
	}
	isValueChanged(currentValue, newValue) {
		if (newValue === null && currentValue !== null) return true;
		if (newValue != null) return newValue !== (typeof currentValue === "string" ? this.parseValue(currentValue) : currentValue);
		return false;
	}
	validateValue(value) {
		if (value === "-" || value == null) return null;
		const min = this.min();
		const max = this.max();
		if (min != null && value < min) return this.min();
		if (max != null && value > max) return max;
		return value;
	}
	updateInput(value, insertedValueStr, operation, valueStr) {
		insertedValueStr = insertedValueStr || "";
		let inputValue = this.input()?.nativeElement.value;
		let newValue = this.formatValue(value);
		let currentLength = inputValue.length;
		if (newValue !== valueStr) newValue = this.concatValues(newValue, valueStr);
		if (currentLength === 0) {
			this.input().nativeElement.value = newValue;
			this.input().nativeElement.setSelectionRange(0, 0);
			const selectionEnd = this.initCursor() + insertedValueStr.length;
			this.input().nativeElement.setSelectionRange(selectionEnd, selectionEnd);
		} else {
			let selectionStart = this.input().nativeElement.selectionStart ?? 0;
			let selectionEnd = this.input().nativeElement.selectionEnd ?? 0;
			const maxlength = this.maxlength();
			if (maxlength && newValue.length > maxlength) {
				newValue = newValue.slice(0, maxlength);
				selectionStart = Math.min(selectionStart, maxlength);
				selectionEnd = Math.min(selectionEnd, maxlength);
			}
			if (maxlength && maxlength < newValue.length) return;
			this.input().nativeElement.value = newValue;
			let newLength = newValue.length;
			if (operation === "range-insert") {
				const startValue = this.parseValue((inputValue || "").slice(0, selectionStart));
				const startExpr = (startValue !== null ? startValue.toString() : "").split("").join(`(${this.groupChar})?`);
				const sRegex = new RegExp(startExpr, "g");
				sRegex.test(newValue);
				const tExpr = insertedValueStr.split("").join(`(${this.groupChar})?`);
				const tRegex = new RegExp(tExpr, "g");
				tRegex.test(newValue.slice(sRegex.lastIndex));
				selectionEnd = sRegex.lastIndex + tRegex.lastIndex;
				this.input().nativeElement.setSelectionRange(selectionEnd, selectionEnd);
			} else if (newLength === currentLength) {
				if (operation === "insert" || operation === "delete-back-single") this.input().nativeElement.setSelectionRange(selectionEnd + 1, selectionEnd + 1);
				else if (operation === "delete-single") this.input().nativeElement.setSelectionRange(selectionEnd - 1, selectionEnd - 1);
				else if (operation === "delete-range" || operation === "spin") this.input().nativeElement.setSelectionRange(selectionEnd, selectionEnd);
			} else if (operation === "delete-back-single") {
				let prevChar = inputValue.charAt(selectionEnd - 1);
				let nextChar = inputValue.charAt(selectionEnd);
				let diff = currentLength - newLength;
				let isGroupChar = this._group.test(nextChar);
				if (isGroupChar && diff === 1) selectionEnd += 1;
				else if (!isGroupChar && this.isNumeralChar(prevChar)) selectionEnd += -1 * diff + 1;
				this._group.lastIndex = 0;
				this.input().nativeElement.setSelectionRange(selectionEnd, selectionEnd);
			} else if (inputValue === "-" && operation === "insert") {
				this.input().nativeElement.setSelectionRange(0, 0);
				const selectionEnd = this.initCursor() + insertedValueStr.length + 1;
				this.input().nativeElement.setSelectionRange(selectionEnd, selectionEnd);
			} else {
				selectionEnd = selectionEnd + (newLength - currentLength);
				this.input().nativeElement.setSelectionRange(selectionEnd, selectionEnd);
			}
		}
		this.input().nativeElement.setAttribute("aria-valuenow", value);
	}
	concatValues(val1, val2) {
		if (val1 && val2) {
			let decimalCharIndex = val2.search(this._decimal);
			this._decimal.lastIndex = 0;
			if (this.suffixChar) return decimalCharIndex !== -1 ? val1.replace(this.suffixChar, "").split(this._decimal)[0] + val2.replace(this.suffixChar, "").slice(decimalCharIndex) + this.suffixChar : val1;
			else return decimalCharIndex !== -1 ? val1.split(this._decimal)[0] + val2.slice(decimalCharIndex) : val1;
		}
		return val1;
	}
	getDecimalLength(value) {
		if (value) {
			const valueSplit = value.split(this._decimal);
			if (valueSplit.length === 2) return valueSplit[1].replace(this._suffix, "").trim().replace(/\s/g, "").replace(this._currency, "").length;
		}
		return 0;
	}
	onInputFocus(event) {
		this.focused = true;
		this.onFocus.emit(event);
	}
	onInputBlur(event) {
		this.focused = false;
		const newValueNumber = this.validateValue(this.parseValue(this.input().nativeElement.value));
		const newValueString = newValueNumber?.toString() ?? "";
		this.input().nativeElement.value = this.formatValue(newValueNumber);
		this.input().nativeElement.setAttribute("aria-valuenow", newValueString);
		this.updateModel(event, newValueNumber);
		this.onModelTouched();
		this.onBlur.emit(event);
	}
	updateModel(event, value) {
		const isBlurUpdateOnMode = this.ngControl?.control?.updateOn === "blur";
		if (this.value() !== value) {
			this.value.set(value);
			if (!(isBlurUpdateOnMode && this.focused)) this.onModelChange(value);
		} else if (isBlurUpdateOnMode) this.onModelChange(value);
	}
	writeControlValue(value, setModelValue) {
		this.value.set(value ? Number(value) : value);
		setModelValue(value);
	}
	onDestroy() {
		this.clearTimer();
	}
	clearTimer() {
		if (this.timer) clearInterval(this.timer);
	}
	get dataP() {
		return this.cn({
			invalid: this.invalid(),
			disabled: this.$disabled(),
			focus: this.focused,
			fluid: this.hasFluid,
			filled: this.$variant() === "filled",
			empty: !this.$filled(),
			[this.size()]: this.size(),
			[this.buttonLayout()]: this.showButtons() && this.buttonLayout()
		});
	}
	static ɵfac = function InputNumber_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || InputNumber)();
	};
	static ɵcmp = (function() {
		const _c0 = ["clearicon"];
		const _c1 = ["incrementbuttonicon"];
		const _c2 = ["decrementbuttonicon"];
		const _c3 = ["input"];
		function InputNumber_Conditional_2_Conditional_0_Template(rf, ctx) {
			if (rf & 1) {
				const _r1 = ɵɵgetCurrentView();
				ɵɵnamespaceSVG();
				ɵɵelementStart(0, "svg", 4);
				ɵɵlistener("click", function InputNumber_Conditional_2_Conditional_0_Template_svg_click_0_listener() {
					ɵɵrestoreView(_r1);
					const ctx_r1 = ɵɵnextContext(2);
					return ɵɵresetView(ctx_r1.clear());
				});
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(2);
				ɵɵclassMap(ctx_r1.cx("clearIcon"));
				ɵɵproperty("pBind", ctx_r1.ptm("clearIcon"));
			}
		}
		function InputNumber_Conditional_2_Conditional_1_ng_container_1_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function InputNumber_Conditional_2_Conditional_1_Template(rf, ctx) {
			if (rf & 1) {
				const _r3 = ɵɵgetCurrentView();
				ɵɵelementStart(0, "span", 5);
				ɵɵlistener("click", function InputNumber_Conditional_2_Conditional_1_Template_span_click_0_listener() {
					ɵɵrestoreView(_r3);
					const ctx_r1 = ɵɵnextContext(2);
					return ɵɵresetView(ctx_r1.clear());
				});
				ɵɵtemplate(1, InputNumber_Conditional_2_Conditional_1_ng_container_1_Template, 1, 0, "ng-container", 6);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(2);
				ɵɵclassMap(ctx_r1.cx("clearIcon"));
				ɵɵproperty("pBind", ctx_r1.ptm("clearIcon"));
				ɵɵadvance();
				ɵɵproperty("ngTemplateOutlet", ctx_r1.clearIconTemplate());
			}
		}
		function InputNumber_Conditional_2_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, InputNumber_Conditional_2_Conditional_0_Template, 1, 3, "svg", 3)(1, InputNumber_Conditional_2_Conditional_1_Template, 2, 4, "span", 2);
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext();
				ɵɵconditional(!ctx_r1.clearIconTemplate() ? 0 : 1);
			}
		}
		function InputNumber_Conditional_3_Conditional_2_Template(rf, ctx) {
			if (rf & 1) ɵɵelement(0, "span", 7);
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(2);
				ɵɵclassMap(ctx_r1.incrementButtonIcon());
				ɵɵproperty("pBind", ctx_r1.ptm("incrementButtonIcon"));
			}
		}
		function InputNumber_Conditional_3_Conditional_3_Conditional_0_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵelement(0, "svg", 9);
			}
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(3);
				ɵɵproperty("pBind", ctx_r1.ptm("incrementButtonIcon"));
			}
		}
		function InputNumber_Conditional_3_Conditional_3_Conditional_1_ng_container_0_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function InputNumber_Conditional_3_Conditional_3_Conditional_1_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, InputNumber_Conditional_3_Conditional_3_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 6);
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(3);
				ɵɵproperty("ngTemplateOutlet", ctx_r1.incrementButtonIconTemplate());
			}
		}
		function InputNumber_Conditional_3_Conditional_3_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, InputNumber_Conditional_3_Conditional_3_Conditional_0_Template, 1, 1, "svg", 9)(1, InputNumber_Conditional_3_Conditional_3_Conditional_1_Template, 1, 1, "ng-container");
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(2);
				ɵɵconditional(!ctx_r1.incrementButtonIconTemplate() ? 0 : 1);
			}
		}
		function InputNumber_Conditional_3_Conditional_5_Template(rf, ctx) {
			if (rf & 1) ɵɵelement(0, "span", 7);
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(2);
				ɵɵclassMap(ctx_r1.decrementButtonIcon());
				ɵɵproperty("pBind", ctx_r1.ptm("decrementButtonIcon"));
			}
		}
		function InputNumber_Conditional_3_Conditional_6_Conditional_0_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵelement(0, "svg", 10);
			}
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(3);
				ɵɵproperty("pBind", ctx_r1.ptm("decrementButtonIcon"));
			}
		}
		function InputNumber_Conditional_3_Conditional_6_Conditional_1_ng_container_0_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function InputNumber_Conditional_3_Conditional_6_Conditional_1_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, InputNumber_Conditional_3_Conditional_6_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 6);
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(3);
				ɵɵproperty("ngTemplateOutlet", ctx_r1.decrementButtonIconTemplate());
			}
		}
		function InputNumber_Conditional_3_Conditional_6_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, InputNumber_Conditional_3_Conditional_6_Conditional_0_Template, 1, 1, "svg", 10)(1, InputNumber_Conditional_3_Conditional_6_Conditional_1_Template, 1, 1, "ng-container");
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(2);
				ɵɵconditional(!ctx_r1.decrementButtonIconTemplate() ? 0 : 1);
			}
		}
		function InputNumber_Conditional_3_Template(rf, ctx) {
			if (rf & 1) {
				const _r4 = ɵɵgetCurrentView();
				ɵɵelementStart(0, "span", 7)(1, "button", 8);
				ɵɵlistener("mousedown", function InputNumber_Conditional_3_Template_button_mousedown_1_listener($event) {
					ɵɵrestoreView(_r4);
					const ctx_r1 = ɵɵnextContext();
					return ɵɵresetView(ctx_r1.onUpButtonMouseDown($event));
				})("mouseup", function InputNumber_Conditional_3_Template_button_mouseup_1_listener() {
					ɵɵrestoreView(_r4);
					const ctx_r1 = ɵɵnextContext();
					return ɵɵresetView(ctx_r1.onUpButtonMouseUp());
				})("mouseleave", function InputNumber_Conditional_3_Template_button_mouseleave_1_listener() {
					ɵɵrestoreView(_r4);
					const ctx_r1 = ɵɵnextContext();
					return ɵɵresetView(ctx_r1.onUpButtonMouseLeave());
				})("keydown", function InputNumber_Conditional_3_Template_button_keydown_1_listener($event) {
					ɵɵrestoreView(_r4);
					const ctx_r1 = ɵɵnextContext();
					return ɵɵresetView(ctx_r1.onUpButtonKeyDown($event));
				})("keyup", function InputNumber_Conditional_3_Template_button_keyup_1_listener() {
					ɵɵrestoreView(_r4);
					const ctx_r1 = ɵɵnextContext();
					return ɵɵresetView(ctx_r1.onUpButtonKeyUp());
				});
				ɵɵconditionalCreate(2, InputNumber_Conditional_3_Conditional_2_Template, 1, 3, "span", 2)(3, InputNumber_Conditional_3_Conditional_3_Template, 2, 1);
				ɵɵelementEnd();
				ɵɵelementStart(4, "button", 8);
				ɵɵlistener("mousedown", function InputNumber_Conditional_3_Template_button_mousedown_4_listener($event) {
					ɵɵrestoreView(_r4);
					const ctx_r1 = ɵɵnextContext();
					return ɵɵresetView(ctx_r1.onDownButtonMouseDown($event));
				})("mouseup", function InputNumber_Conditional_3_Template_button_mouseup_4_listener() {
					ɵɵrestoreView(_r4);
					const ctx_r1 = ɵɵnextContext();
					return ɵɵresetView(ctx_r1.onDownButtonMouseUp());
				})("mouseleave", function InputNumber_Conditional_3_Template_button_mouseleave_4_listener() {
					ɵɵrestoreView(_r4);
					const ctx_r1 = ɵɵnextContext();
					return ɵɵresetView(ctx_r1.onDownButtonMouseLeave());
				})("keydown", function InputNumber_Conditional_3_Template_button_keydown_4_listener($event) {
					ɵɵrestoreView(_r4);
					const ctx_r1 = ɵɵnextContext();
					return ɵɵresetView(ctx_r1.onDownButtonKeyDown($event));
				})("keyup", function InputNumber_Conditional_3_Template_button_keyup_4_listener() {
					ɵɵrestoreView(_r4);
					const ctx_r1 = ɵɵnextContext();
					return ɵɵresetView(ctx_r1.onDownButtonKeyUp());
				});
				ɵɵconditionalCreate(5, InputNumber_Conditional_3_Conditional_5_Template, 1, 3, "span", 2)(6, InputNumber_Conditional_3_Conditional_6_Template, 2, 1);
				ɵɵelementEnd()();
			}
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext();
				ɵɵclassMap(ctx_r1.cx("buttonGroup"));
				ɵɵproperty("pBind", ctx_r1.ptm("buttonGroup"));
				ɵɵattribute("data-p", ctx_r1.dataP);
				ɵɵadvance();
				ɵɵclassMap(ctx_r1.cn(ctx_r1.cx("incrementButton"), ctx_r1.incrementButtonClass()));
				ɵɵproperty("pBind", ctx_r1.ptm("incrementButton"));
				ɵɵattribute("disabled", ctx_r1.disabledAttr())("aria-hidden", true)("data-p", ctx_r1.dataP);
				ɵɵadvance();
				ɵɵconditional(ctx_r1.hasIncrementButtonIcon() ? 2 : 3);
				ɵɵadvance(2);
				ɵɵclassMap(ctx_r1.cn(ctx_r1.cx("decrementButton"), ctx_r1.decrementButtonClass()));
				ɵɵproperty("pBind", ctx_r1.ptm("decrementButton"));
				ɵɵattribute("disabled", ctx_r1.disabledAttr())("aria-hidden", true)("data-p", ctx_r1.dataP);
				ɵɵadvance();
				ɵɵconditional(ctx_r1.hasDecrementButtonIcon() ? 5 : 6);
			}
		}
		function InputNumber_Conditional_4_Conditional_1_Template(rf, ctx) {
			if (rf & 1) ɵɵelement(0, "span", 7);
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(2);
				ɵɵclassMap(ctx_r1.incrementButtonIcon());
				ɵɵproperty("pBind", ctx_r1.ptm("incrementButtonIcon"));
			}
		}
		function InputNumber_Conditional_4_Conditional_2_Conditional_0_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵelement(0, "svg", 9);
			}
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(3);
				ɵɵproperty("pBind", ctx_r1.ptm("incrementButtonIcon"));
			}
		}
		function InputNumber_Conditional_4_Conditional_2_Conditional_1_ng_container_0_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function InputNumber_Conditional_4_Conditional_2_Conditional_1_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, InputNumber_Conditional_4_Conditional_2_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 6);
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(3);
				ɵɵproperty("ngTemplateOutlet", ctx_r1.incrementButtonIconTemplate());
			}
		}
		function InputNumber_Conditional_4_Conditional_2_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, InputNumber_Conditional_4_Conditional_2_Conditional_0_Template, 1, 1, "svg", 9)(1, InputNumber_Conditional_4_Conditional_2_Conditional_1_Template, 1, 1, "ng-container");
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(2);
				ɵɵconditional(!ctx_r1.incrementButtonIconTemplate() ? 0 : 1);
			}
		}
		function InputNumber_Conditional_4_Conditional_4_Template(rf, ctx) {
			if (rf & 1) ɵɵelement(0, "span", 7);
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(2);
				ɵɵclassMap(ctx_r1.decrementButtonIcon());
				ɵɵproperty("pBind", ctx_r1.ptm("decrementButtonIcon"));
			}
		}
		function InputNumber_Conditional_4_Conditional_5_Conditional_0_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵelement(0, "svg", 10);
			}
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(3);
				ɵɵproperty("pBind", ctx_r1.ptm("decrementButtonIcon"));
			}
		}
		function InputNumber_Conditional_4_Conditional_5_Conditional_1_ng_container_0_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function InputNumber_Conditional_4_Conditional_5_Conditional_1_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, InputNumber_Conditional_4_Conditional_5_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 6);
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(3);
				ɵɵproperty("ngTemplateOutlet", ctx_r1.decrementButtonIconTemplate());
			}
		}
		function InputNumber_Conditional_4_Conditional_5_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, InputNumber_Conditional_4_Conditional_5_Conditional_0_Template, 1, 1, "svg", 10)(1, InputNumber_Conditional_4_Conditional_5_Conditional_1_Template, 1, 1, "ng-container");
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(2);
				ɵɵconditional(!ctx_r1.decrementButtonIconTemplate() ? 0 : 1);
			}
		}
		function InputNumber_Conditional_4_Template(rf, ctx) {
			if (rf & 1) {
				const _r5 = ɵɵgetCurrentView();
				ɵɵelementStart(0, "button", 8);
				ɵɵlistener("mousedown", function InputNumber_Conditional_4_Template_button_mousedown_0_listener($event) {
					ɵɵrestoreView(_r5);
					const ctx_r1 = ɵɵnextContext();
					return ɵɵresetView(ctx_r1.onUpButtonMouseDown($event));
				})("mouseup", function InputNumber_Conditional_4_Template_button_mouseup_0_listener() {
					ɵɵrestoreView(_r5);
					const ctx_r1 = ɵɵnextContext();
					return ɵɵresetView(ctx_r1.onUpButtonMouseUp());
				})("mouseleave", function InputNumber_Conditional_4_Template_button_mouseleave_0_listener() {
					ɵɵrestoreView(_r5);
					const ctx_r1 = ɵɵnextContext();
					return ɵɵresetView(ctx_r1.onUpButtonMouseLeave());
				})("keydown", function InputNumber_Conditional_4_Template_button_keydown_0_listener($event) {
					ɵɵrestoreView(_r5);
					const ctx_r1 = ɵɵnextContext();
					return ɵɵresetView(ctx_r1.onUpButtonKeyDown($event));
				})("keyup", function InputNumber_Conditional_4_Template_button_keyup_0_listener() {
					ɵɵrestoreView(_r5);
					const ctx_r1 = ɵɵnextContext();
					return ɵɵresetView(ctx_r1.onUpButtonKeyUp());
				});
				ɵɵconditionalCreate(1, InputNumber_Conditional_4_Conditional_1_Template, 1, 3, "span", 2)(2, InputNumber_Conditional_4_Conditional_2_Template, 2, 1);
				ɵɵelementEnd();
				ɵɵelementStart(3, "button", 8);
				ɵɵlistener("mousedown", function InputNumber_Conditional_4_Template_button_mousedown_3_listener($event) {
					ɵɵrestoreView(_r5);
					const ctx_r1 = ɵɵnextContext();
					return ɵɵresetView(ctx_r1.onDownButtonMouseDown($event));
				})("mouseup", function InputNumber_Conditional_4_Template_button_mouseup_3_listener() {
					ɵɵrestoreView(_r5);
					const ctx_r1 = ɵɵnextContext();
					return ɵɵresetView(ctx_r1.onDownButtonMouseUp());
				})("mouseleave", function InputNumber_Conditional_4_Template_button_mouseleave_3_listener() {
					ɵɵrestoreView(_r5);
					const ctx_r1 = ɵɵnextContext();
					return ɵɵresetView(ctx_r1.onDownButtonMouseLeave());
				})("keydown", function InputNumber_Conditional_4_Template_button_keydown_3_listener($event) {
					ɵɵrestoreView(_r5);
					const ctx_r1 = ɵɵnextContext();
					return ɵɵresetView(ctx_r1.onDownButtonKeyDown($event));
				})("keyup", function InputNumber_Conditional_4_Template_button_keyup_3_listener() {
					ɵɵrestoreView(_r5);
					const ctx_r1 = ɵɵnextContext();
					return ɵɵresetView(ctx_r1.onDownButtonKeyUp());
				});
				ɵɵconditionalCreate(4, InputNumber_Conditional_4_Conditional_4_Template, 1, 3, "span", 2)(5, InputNumber_Conditional_4_Conditional_5_Template, 2, 1);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext();
				ɵɵclassMap(ctx_r1.cn(ctx_r1.cx("incrementButton"), ctx_r1.incrementButtonClass()));
				ɵɵproperty("pBind", ctx_r1.ptm("incrementButton"));
				ɵɵattribute("disabled", ctx_r1.disabledAttr())("aria-hidden", true)("data-p", ctx_r1.dataP);
				ɵɵadvance();
				ɵɵconditional(ctx_r1.hasIncrementButtonIcon() ? 1 : 2);
				ɵɵadvance(2);
				ɵɵclassMap(ctx_r1.cn(ctx_r1.cx("decrementButton"), ctx_r1.decrementButtonClass()));
				ɵɵproperty("pBind", ctx_r1.ptm("decrementButton"));
				ɵɵattribute("disabled", ctx_r1.disabledAttr())("aria-hidden", true)("data-p", ctx_r1.dataP);
				ɵɵadvance();
				ɵɵconditional(ctx_r1.hasDecrementButtonIcon() ? 4 : 5);
			}
		}
		return /*@__PURE__*/ ɵɵdefineComponent({
			type: InputNumber,
			selectors: [["p-inputnumber"], ["p-input-number"]],
			contentQueries: function InputNumber_ContentQueries(rf, ctx, dirIndex) {
				if (rf & 1) ɵɵcontentQuerySignal(dirIndex, ctx.clearIconTemplate, _c0, 4)(dirIndex, ctx.incrementButtonIconTemplate, _c1, 4)(dirIndex, ctx.decrementButtonIconTemplate, _c2, 4);
				if (rf & 2) ɵɵqueryAdvance(3);
			},
			viewQuery: function InputNumber_Query(rf, ctx) {
				if (rf & 1) ɵɵviewQuerySignal(ctx.input, _c3, 5);
				if (rf & 2) ɵɵqueryAdvance();
			},
			hostVars: 3,
			hostBindings: function InputNumber_HostBindings(rf, ctx) {
				if (rf & 2) {
					ɵɵattribute("data-p", ctx.dataP);
					ɵɵclassMap(ctx.cx("root"));
				}
			},
			inputs: {
				showButtons: [1, "showButtons"],
				format: [1, "format"],
				buttonLayout: [1, "buttonLayout"],
				inputId: [1, "inputId"],
				placeholder: [1, "placeholder"],
				tabindex: [1, "tabindex"],
				title: [1, "title"],
				ariaLabelledBy: [1, "ariaLabelledBy"],
				ariaDescribedBy: [1, "ariaDescribedBy"],
				ariaLabel: [1, "ariaLabel"],
				ariaRequired: [1, "ariaRequired"],
				autocomplete: [1, "autocomplete"],
				incrementButtonClass: [1, "incrementButtonClass"],
				decrementButtonClass: [1, "decrementButtonClass"],
				incrementButtonIcon: [1, "incrementButtonIcon"],
				decrementButtonIcon: [1, "decrementButtonIcon"],
				readonly: [1, "readonly"],
				allowEmpty: [1, "allowEmpty"],
				locale: [1, "locale"],
				localeMatcher: [1, "localeMatcher"],
				mode: [1, "mode"],
				currency: [1, "currency"],
				currencyDisplay: [1, "currencyDisplay"],
				useGrouping: [1, "useGrouping"],
				minFractionDigits: [1, "minFractionDigits"],
				maxFractionDigits: [1, "maxFractionDigits"],
				prefix: [1, "prefix"],
				suffix: [1, "suffix"],
				inputStyle: [1, "inputStyle"],
				inputStyleClass: [1, "inputStyleClass"],
				showClear: [1, "showClear"],
				autofocus: [1, "autofocus"]
			},
			outputs: {
				onInput: "onInput",
				onFocus: "onFocus",
				onBlur: "onBlur",
				onKeyDown: "onKeyDown",
				onClear: "onClear"
			},
			features: [
				ɵɵProvidersFeature([
					INPUTNUMBER_VALUE_ACCESSOR,
					InputNumberStyle,
					{
						provide: INPUTNUMBER_INSTANCE,
						useExisting: InputNumber
					},
					{
						provide: PARENT_INSTANCE,
						useExisting: InputNumber
					}
				]),
				ɵɵHostDirectivesFeature([Bind]),
				ɵɵInheritDefinitionFeature
			],
			decls: 5,
			vars: 38,
			consts: [
				["input", ""],
				[
					"pInputText",
					"",
					"role",
					"spinbutton",
					"inputmode",
					"decimal",
					3,
					"input",
					"keydown",
					"keypress",
					"paste",
					"click",
					"focus",
					"blur",
					"value",
					"variant",
					"invalid",
					"pSize",
					"pt",
					"unstyled",
					"pAutoFocus",
					"fluid"
				],
				[
					3,
					"pBind",
					"class"
				],
				[
					"data-p-icon",
					"times",
					3,
					"pBind",
					"class"
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
				[3, "pBind"],
				[
					"type",
					"button",
					"tabindex",
					"-1",
					3,
					"mousedown",
					"mouseup",
					"mouseleave",
					"keydown",
					"keyup",
					"pBind"
				],
				[
					"data-p-icon",
					"angle-up",
					3,
					"pBind"
				],
				[
					"data-p-icon",
					"angle-down",
					3,
					"pBind"
				]
			],
			template: function InputNumber_Template(rf, ctx) {
				if (rf & 1) {
					ɵɵelementStart(0, "input", 1, 0);
					ɵɵlistener("input", function InputNumber_Template_input_input_0_listener($event) {
						return ctx.onUserInput($event);
					})("keydown", function InputNumber_Template_input_keydown_0_listener($event) {
						return ctx.onInputKeyDown($event);
					})("keypress", function InputNumber_Template_input_keypress_0_listener($event) {
						return ctx.onInputKeyPress($event);
					})("paste", function InputNumber_Template_input_paste_0_listener($event) {
						return ctx.onPaste($event);
					})("click", function InputNumber_Template_input_click_0_listener() {
						return ctx.onInputClick();
					})("focus", function InputNumber_Template_input_focus_0_listener($event) {
						return ctx.onInputFocus($event);
					})("blur", function InputNumber_Template_input_blur_0_listener($event) {
						return ctx.onInputBlur($event);
					});
					ɵɵelementEnd();
					ɵɵconditionalCreate(2, InputNumber_Conditional_2_Template, 2, 1);
					ɵɵconditionalCreate(3, InputNumber_Conditional_3_Template, 7, 18, "span", 2);
					ɵɵconditionalCreate(4, InputNumber_Conditional_4_Template, 6, 14);
				}
				if (rf & 2) {
					ɵɵstyleMap(ctx.inputStyle());
					ɵɵclassMap(ctx.cn(ctx.cx("pcInputText"), ctx.inputStyleClass()));
					ɵɵproperty("value", ctx.formattedValue())("variant", ctx.$variant())("invalid", ctx.invalid())("pSize", ctx.size())("pt", ctx.ptm("pcInputText"))("unstyled", ctx.unstyled())("pAutoFocus", ctx.autofocus())("fluid", ctx.hasFluid);
					ɵɵattribute("id", ctx.inputId())("aria-valuemin", ctx.min())("aria-valuemax", ctx.max())("aria-valuenow", ctx.value())("placeholder", ctx.placeholder())("aria-label", ctx.ariaLabel())("aria-labelledby", ctx.ariaLabelledBy())("aria-describedby", ctx.ariaDescribedBy())("title", ctx.title())("size", ctx.inputSize())("name", ctx.name())("autocomplete", ctx.autocomplete())("maxlength", ctx.maxlength())("minlength", ctx.minlength())("tabindex", ctx.tabindex())("aria-required", ctx.ariaRequired())("min", ctx.min())("max", ctx.max())("step", ctx.step() ?? 1)("required", ctx.requiredAttr())("readonly", ctx.readonlyAttr())("disabled", ctx.disabledAttr())("data-p", ctx.dataP);
					ɵɵadvance(2);
					ɵɵconditional(ctx.showClearIcon ? 2 : -1);
					ɵɵadvance();
					ɵɵconditional(ctx.showStackedButtons() ? 3 : -1);
					ɵɵadvance();
					ɵɵconditional(ctx.showNonStackedButtons() ? 4 : -1);
				}
			},
			dependencies: [
				NgTemplateOutlet,
				InputText,
				AutoFocus,
				Times,
				AngleUp,
				AngleDown,
				SharedModule,
				BindModule,
				Bind
			],
			encapsulation: 2
		});
	})();
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputNumber, [{
		type: Component,
		args: [{
			selector: "p-inputnumber, p-input-number",
			standalone: true,
			imports: [
				NgTemplateOutlet,
				InputText,
				AutoFocus,
				Times,
				AngleUp,
				AngleDown,
				SharedModule,
				BindModule
			],
			template: `
        <input
            pInputText
            #input
            [attr.id]="inputId()"
            role="spinbutton"
            [class]="cn(cx('pcInputText'), inputStyleClass())"
            [value]="formattedValue()"
            [style]="inputStyle()"
            [variant]="$variant()"
            [invalid]="invalid()"
            [attr.aria-valuemin]="min()"
            [attr.aria-valuemax]="max()"
            [attr.aria-valuenow]="value()"
            [attr.placeholder]="placeholder()"
            [attr.aria-label]="ariaLabel()"
            [attr.aria-labelledby]="ariaLabelledBy()"
            [attr.aria-describedby]="ariaDescribedBy()"
            [attr.title]="title()"
            [pSize]="size()"
            [attr.size]="inputSize()"
            [attr.name]="name()"
            [attr.autocomplete]="autocomplete()"
            [attr.maxlength]="maxlength()"
            [attr.minlength]="minlength()"
            [attr.tabindex]="tabindex()"
            [attr.aria-required]="ariaRequired()"
            [attr.min]="min()"
            [attr.max]="max()"
            [attr.step]="step() ?? 1"
            [attr.required]="requiredAttr()"
            [attr.readonly]="readonlyAttr()"
            [attr.disabled]="disabledAttr()"
            inputmode="decimal"
            (input)="onUserInput($event)"
            (keydown)="onInputKeyDown($event)"
            (keypress)="onInputKeyPress($event)"
            (paste)="onPaste($event)"
            (click)="onInputClick()"
            (focus)="onInputFocus($event)"
            (blur)="onInputBlur($event)"
            [pt]="ptm('pcInputText')"
            [unstyled]="unstyled()"
            [pAutoFocus]="autofocus()"
            [fluid]="hasFluid"
            [attr.data-p]="dataP"
        />
        @if (showClearIcon) {
            @if (!clearIconTemplate()) {
                <svg data-p-icon="times" [pBind]="ptm('clearIcon')" [class]="cx('clearIcon')" (click)="clear()" />
            } @else {
                <span [pBind]="ptm('clearIcon')" (click)="clear()" [class]="cx('clearIcon')">
                    <ng-container *ngTemplateOutlet="clearIconTemplate()"></ng-container>
                </span>
            }
        }
        @if (showStackedButtons()) {
            <span [pBind]="ptm('buttonGroup')" [class]="cx('buttonGroup')" [attr.data-p]="dataP">
                <button
                    type="button"
                    [pBind]="ptm('incrementButton')"
                    [class]="cn(cx('incrementButton'), incrementButtonClass())"
                    [attr.disabled]="disabledAttr()"
                    tabindex="-1"
                    (mousedown)="onUpButtonMouseDown($event)"
                    (mouseup)="onUpButtonMouseUp()"
                    (mouseleave)="onUpButtonMouseLeave()"
                    (keydown)="onUpButtonKeyDown($event)"
                    (keyup)="onUpButtonKeyUp()"
                    [attr.aria-hidden]="true"
                    [attr.data-p]="dataP"
                >
                    @if (hasIncrementButtonIcon()) {
                        <span [pBind]="ptm('incrementButtonIcon')" [class]="incrementButtonIcon()"></span>
                    } @else {
                        @if (!incrementButtonIconTemplate()) {
                            <svg data-p-icon="angle-up" [pBind]="ptm('incrementButtonIcon')" />
                        } @else {
                            <ng-container *ngTemplateOutlet="incrementButtonIconTemplate()"></ng-container>
                        }
                    }
                </button>

                <button
                    type="button"
                    [pBind]="ptm('decrementButton')"
                    [class]="cn(cx('decrementButton'), decrementButtonClass())"
                    [attr.disabled]="disabledAttr()"
                    tabindex="-1"
                    [attr.aria-hidden]="true"
                    (mousedown)="onDownButtonMouseDown($event)"
                    (mouseup)="onDownButtonMouseUp()"
                    (mouseleave)="onDownButtonMouseLeave()"
                    (keydown)="onDownButtonKeyDown($event)"
                    (keyup)="onDownButtonKeyUp()"
                    [attr.data-p]="dataP"
                >
                    @if (hasDecrementButtonIcon()) {
                        <span [pBind]="ptm('decrementButtonIcon')" [class]="decrementButtonIcon()"></span>
                    } @else {
                        @if (!decrementButtonIconTemplate()) {
                            <svg data-p-icon="angle-down" [pBind]="ptm('decrementButtonIcon')" />
                        } @else {
                            <ng-container *ngTemplateOutlet="decrementButtonIconTemplate()"></ng-container>
                        }
                    }
                </button>
            </span>
        }
        @if (showNonStackedButtons()) {
            <button
                type="button"
                [pBind]="ptm('incrementButton')"
                [class]="cn(cx('incrementButton'), incrementButtonClass())"
                [attr.disabled]="disabledAttr()"
                tabindex="-1"
                [attr.aria-hidden]="true"
                (mousedown)="onUpButtonMouseDown($event)"
                (mouseup)="onUpButtonMouseUp()"
                (mouseleave)="onUpButtonMouseLeave()"
                (keydown)="onUpButtonKeyDown($event)"
                (keyup)="onUpButtonKeyUp()"
                [attr.data-p]="dataP"
            >
                @if (hasIncrementButtonIcon()) {
                    <span [pBind]="ptm('incrementButtonIcon')" [class]="incrementButtonIcon()"></span>
                } @else {
                    @if (!incrementButtonIconTemplate()) {
                        <svg data-p-icon="angle-up" [pBind]="ptm('incrementButtonIcon')" />
                    } @else {
                        <ng-container *ngTemplateOutlet="incrementButtonIconTemplate()"></ng-container>
                    }
                }
            </button>
            <button
                type="button"
                [pBind]="ptm('decrementButton')"
                [class]="cn(cx('decrementButton'), decrementButtonClass())"
                [attr.disabled]="disabledAttr()"
                tabindex="-1"
                [attr.aria-hidden]="true"
                (mousedown)="onDownButtonMouseDown($event)"
                (mouseup)="onDownButtonMouseUp()"
                (mouseleave)="onDownButtonMouseLeave()"
                (keydown)="onDownButtonKeyDown($event)"
                (keyup)="onDownButtonKeyUp()"
                [attr.data-p]="dataP"
            >
                @if (hasDecrementButtonIcon()) {
                    <span [pBind]="ptm('decrementButtonIcon')" [class]="decrementButtonIcon()"></span>
                } @else {
                    @if (!decrementButtonIconTemplate()) {
                        <svg data-p-icon="angle-down" [pBind]="ptm('decrementButtonIcon')" />
                    } @else {
                        <ng-container *ngTemplateOutlet="decrementButtonIconTemplate()"></ng-container>
                    }
                }
            </button>
        }
    `,
			changeDetection: ChangeDetectionStrategy.OnPush,
			providers: [
				INPUTNUMBER_VALUE_ACCESSOR,
				InputNumberStyle,
				{
					provide: INPUTNUMBER_INSTANCE,
					useExisting: InputNumber
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: InputNumber
				}
			],
			encapsulation: ViewEncapsulation.None,
			host: {
				"[class]": "cx('root')",
				"[attr.data-p]": "dataP"
			},
			hostDirectives: [Bind]
		}]
	}], () => [], {
		showButtons: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "showButtons",
				required: false
			}]
		}],
		format: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "format",
				required: false
			}]
		}],
		buttonLayout: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "buttonLayout",
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
		placeholder: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "placeholder",
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
		title: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "title",
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
		ariaDescribedBy: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "ariaDescribedBy",
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
		ariaRequired: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "ariaRequired",
				required: false
			}]
		}],
		autocomplete: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "autocomplete",
				required: false
			}]
		}],
		incrementButtonClass: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "incrementButtonClass",
				required: false
			}]
		}],
		decrementButtonClass: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "decrementButtonClass",
				required: false
			}]
		}],
		incrementButtonIcon: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "incrementButtonIcon",
				required: false
			}]
		}],
		decrementButtonIcon: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "decrementButtonIcon",
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
		allowEmpty: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "allowEmpty",
				required: false
			}]
		}],
		locale: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "locale",
				required: false
			}]
		}],
		localeMatcher: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "localeMatcher",
				required: false
			}]
		}],
		mode: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "mode",
				required: false
			}]
		}],
		currency: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "currency",
				required: false
			}]
		}],
		currencyDisplay: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "currencyDisplay",
				required: false
			}]
		}],
		useGrouping: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "useGrouping",
				required: false
			}]
		}],
		minFractionDigits: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "minFractionDigits",
				required: false
			}]
		}],
		maxFractionDigits: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "maxFractionDigits",
				required: false
			}]
		}],
		prefix: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "prefix",
				required: false
			}]
		}],
		suffix: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "suffix",
				required: false
			}]
		}],
		inputStyle: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "inputStyle",
				required: false
			}]
		}],
		inputStyleClass: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "inputStyleClass",
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
		autofocus: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "autofocus",
				required: false
			}]
		}],
		onInput: [{
			type: Output,
			args: ["onInput"]
		}],
		onFocus: [{
			type: Output,
			args: ["onFocus"]
		}],
		onBlur: [{
			type: Output,
			args: ["onBlur"]
		}],
		onKeyDown: [{
			type: Output,
			args: ["onKeyDown"]
		}],
		onClear: [{
			type: Output,
			args: ["onClear"]
		}],
		clearIconTemplate: [{
			type: ContentChild,
			args: ["clearicon", {
				descendants: false,
				isSignal: true
			}]
		}],
		incrementButtonIconTemplate: [{
			type: ContentChild,
			args: ["incrementbuttonicon", {
				descendants: false,
				isSignal: true
			}]
		}],
		decrementButtonIconTemplate: [{
			type: ContentChild,
			args: ["decrementbuttonicon", {
				descendants: false,
				isSignal: true
			}]
		}],
		input: [{
			type: ViewChild,
			args: ["input", { isSignal: true }]
		}]
	});
})();
var InputNumberModule = class InputNumberModule {
	static ɵfac = function InputNumberModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || InputNumberModule)();
	};
	static ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({
		type: InputNumberModule,
		imports: [InputNumber, SharedModule],
		exports: [InputNumber, SharedModule]
	});
	static ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ imports: [
		InputNumber,
		SharedModule,
		SharedModule
	] });
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputNumberModule, [{
		type: NgModule,
		args: [{
			imports: [InputNumber, SharedModule],
			exports: [InputNumber, SharedModule]
		}]
	}], null, null);
})();
// node_modules/@primeuix/styles/dist/paginator/index.mjs
var style$1 = "\n    .p-paginator {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-wrap: wrap;\n        background: dt('paginator.background');\n        color: dt('paginator.color');\n        padding: dt('paginator.padding');\n        border-radius: dt('paginator.border.radius');\n        gap: dt('paginator.gap');\n    }\n\n    .p-paginator-content {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-wrap: wrap;\n        gap: dt('paginator.gap');\n    }\n\n    .p-paginator-content-start {\n        margin-inline-end: auto;\n    }\n\n    .p-paginator-content-end {\n        margin-inline-start: auto;\n    }\n\n    .p-paginator-page,\n    .p-paginator-next,\n    .p-paginator-last,\n    .p-paginator-first,\n    .p-paginator-prev {\n        cursor: pointer;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        user-select: none;\n        overflow: hidden;\n        position: relative;\n        background: dt('paginator.nav.button.background');\n        border: 0 none;\n        color: dt('paginator.nav.button.color');\n        min-width: dt('paginator.nav.button.width');\n        height: dt('paginator.nav.button.height');\n        font-weight: dt('paginator.nav.button.font.weight');\n        font-size: dt('paginator.nav.button.font.size');\n        transition:\n            background dt('paginator.transition.duration'),\n            color dt('paginator.transition.duration'),\n            outline-color dt('paginator.transition.duration'),\n            box-shadow dt('paginator.transition.duration');\n        border-radius: dt('paginator.nav.button.border.radius');\n        padding: 0;\n        margin: 0;\n    }\n\n    .p-paginator-page:focus-visible,\n    .p-paginator-next:focus-visible,\n    .p-paginator-last:focus-visible,\n    .p-paginator-first:focus-visible,\n    .p-paginator-prev:focus-visible {\n        box-shadow: dt('paginator.nav.button.focus.ring.shadow');\n        outline: dt('paginator.nav.button.focus.ring.width') dt('paginator.nav.button.focus.ring.style') dt('paginator.nav.button.focus.ring.color');\n        outline-offset: dt('paginator.nav.button.focus.ring.offset');\n    }\n\n    .p-paginator-page:not(.p-disabled):not(.p-paginator-page-selected):hover,\n    .p-paginator-first:not(.p-disabled):hover,\n    .p-paginator-prev:not(.p-disabled):hover,\n    .p-paginator-next:not(.p-disabled):hover,\n    .p-paginator-last:not(.p-disabled):hover {\n        background: dt('paginator.nav.button.hover.background');\n        color: dt('paginator.nav.button.hover.color');\n    }\n\n    .p-paginator-page.p-paginator-page-selected {\n        background: dt('paginator.nav.button.selected.background');\n        color: dt('paginator.nav.button.selected.color');\n    }\n\n    .p-paginator-current {\n        color: dt('paginator.current.page.report.color');\n        font-weight: dt('paginator.current.page.report.font.weight');\n        font-size: dt('paginator.current.page.report.font.size');\n    }\n\n    .p-paginator-pages {\n        display: flex;\n        align-items: center;\n        gap: dt('paginator.gap');\n    }\n\n    .p-paginator-jtp-input .p-inputtext {\n        max-width: dt('paginator.jump.to.page.input.max.width');\n    }\n\n    .p-paginator-first:dir(rtl),\n    .p-paginator-prev:dir(rtl),\n    .p-paginator-next:dir(rtl),\n    .p-paginator-last:dir(rtl) {\n        transform: rotate(180deg);\n    }\n";
// node_modules/primeng/fesm2022/primeng-paginator.mjs
var classes$1 = {
	paginator: () => ["p-paginator p-component"],
	content: "p-paginator-content",
	contentStart: "p-paginator-content-start",
	contentEnd: "p-paginator-content-end",
	first: ({ instance }) => ["p-paginator-first", { "p-disabled": instance.isFirstPage() || instance.empty() }],
	firstIcon: "p-paginator-first-icon",
	prev: ({ instance }) => ["p-paginator-prev", { "p-disabled": instance.isFirstPage() || instance.empty() }],
	prevIcon: "p-paginator-prev-icon",
	next: ({ instance }) => ["p-paginator-next", { "p-disabled": instance.isLastPage() || instance.empty() }],
	nextIcon: "p-paginator-next-icon",
	last: ({ instance }) => ["p-paginator-last", { "p-disabled": instance.isLastPage() || instance.empty() }],
	lastIcon: "p-paginator-last-icon",
	pages: "p-paginator-pages",
	page: ({ instance, pageLink }) => ["p-paginator-page", { "p-paginator-page-selected": pageLink - 1 == instance.getPage() }],
	current: "p-paginator-current",
	pcRowPerPageDropdown: "p-paginator-rpp-dropdown",
	pcJumpToPageDropdown: "p-paginator-jtp-dropdown",
	pcJumpToPageInput: "p-paginator-jtp-input"
};
var PaginatorStyle = class PaginatorStyle extends BaseStyle {
	name = "paginator";
	style = style$1;
	classes = classes$1;
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵPaginatorStyle_BaseFactory = void 0;
		return function PaginatorStyle_Factory(__ngFactoryType__) {
			return (ɵPaginatorStyle_BaseFactory || (ɵPaginatorStyle_BaseFactory = ɵɵgetInheritedFactory(PaginatorStyle)))(__ngFactoryType__ || PaginatorStyle);
		};
	})();
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: PaginatorStyle,
		factory: PaginatorStyle.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginatorStyle, [{ type: Injectable }], null, null);
})();
var PaginatorClasses;
(function(PaginatorClasses) {
	PaginatorClasses["paginator"] = "p-paginator";
	PaginatorClasses["contentStart"] = "p-paginator-content-start";
	PaginatorClasses["contentEnd"] = "p-paginator-content-end";
	PaginatorClasses["first"] = "p-paginator-first";
	PaginatorClasses["firstIcon"] = "p-paginator-first-icon";
	PaginatorClasses["prev"] = "p-paginator-prev";
	PaginatorClasses["prevIcon"] = "p-paginator-prev-icon";
	PaginatorClasses["next"] = "p-paginator-next";
	PaginatorClasses["nextIcon"] = "p-paginator-next-icon";
	PaginatorClasses["last"] = "p-paginator-last";
	PaginatorClasses["lastIcon"] = "p-paginator-last-icon";
	PaginatorClasses["pages"] = "p-paginator-pages";
	PaginatorClasses["page"] = "p-paginator-page";
	PaginatorClasses["current"] = "p-paginator-current";
	PaginatorClasses["pcRowPerPageDropdown"] = "p-paginator-rpp-dropdown";
	PaginatorClasses["pcJumpToPageDropdown"] = "p-paginator-jtp-dropdown";
	PaginatorClasses["pcJumpToPageInput"] = "p-paginator-jtp-input";
})(PaginatorClasses || (PaginatorClasses = {}));
var PAGINATOR_INSTANCE = new InjectionToken("PAGINATOR_INSTANCE");
var Paginator = class Paginator extends BaseComponent {
	componentName = "Paginator";
	bindDirectiveInstance = inject(Bind, { self: true });
	$pcPaginator = inject(PAGINATOR_INSTANCE, {
		optional: true,
		skipSelf: true
	}) ?? void 0;
	pageLinkSize = input(5, {
		...ngDevMode ? { debugName: "pageLinkSize" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	alwaysShow = input(true, {
		...ngDevMode ? { debugName: "alwaysShow" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	templateLeft = input(...ngDevMode ? [void 0, { debugName: "templateLeft" }] : /* istanbul ignore next */ []);
	templateRight = input(...ngDevMode ? [void 0, { debugName: "templateRight" }] : /* istanbul ignore next */ []);
	dropdownScrollHeight = input("200px", ...ngDevMode ? [{ debugName: "dropdownScrollHeight" }] : /* istanbul ignore next */ []);
	currentPageReportTemplate = input("{currentPage} of {totalPages}", ...ngDevMode ? [{ debugName: "currentPageReportTemplate" }] : /* istanbul ignore next */ []);
	showCurrentPageReport = input(false, {
		...ngDevMode ? { debugName: "showCurrentPageReport" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	showFirstLastIcon = input(true, {
		...ngDevMode ? { debugName: "showFirstLastIcon" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	totalRecords = input(0, {
		...ngDevMode ? { debugName: "totalRecords" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	rows = model(0, ...ngDevMode ? [{ debugName: "rows" }] : /* istanbul ignore next */ []);
	first = model(0, ...ngDevMode ? [{ debugName: "first" }] : /* istanbul ignore next */ []);
	rowsPerPageOptions = input(...ngDevMode ? [void 0, { debugName: "rowsPerPageOptions" }] : /* istanbul ignore next */ []);
	showJumpToPageDropdown = input(false, {
		...ngDevMode ? { debugName: "showJumpToPageDropdown" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	showJumpToPageInput = input(false, {
		...ngDevMode ? { debugName: "showJumpToPageInput" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	jumpToPageItemTemplate = input(...ngDevMode ? [void 0, { debugName: "jumpToPageItemTemplate" }] : /* istanbul ignore next */ []);
	showPageLinks = input(true, {
		...ngDevMode ? { debugName: "showPageLinks" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	locale = input(...ngDevMode ? [void 0, { debugName: "locale" }] : /* istanbul ignore next */ []);
	dropdownItemTemplate = input(...ngDevMode ? [void 0, { debugName: "dropdownItemTemplate" }] : /* istanbul ignore next */ []);
	appendTo = input(void 0, ...ngDevMode ? [{ debugName: "appendTo" }] : /* istanbul ignore next */ []);
	onPageChange = output();
	dropdownIconTemplate = contentChild("dropdownicon", {
		...ngDevMode ? { debugName: "dropdownIconTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	firstPageLinkIconTemplate = contentChild("firstpagelinkicon", {
		...ngDevMode ? { debugName: "firstPageLinkIconTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	previousPageLinkIconTemplate = contentChild("previouspagelinkicon", {
		...ngDevMode ? { debugName: "previousPageLinkIconTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	lastPageLinkIconTemplate = contentChild("lastpagelinkicon", {
		...ngDevMode ? { debugName: "lastPageLinkIconTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	nextPageLinkIconTemplate = contentChild("nextpagelinkicon", {
		...ngDevMode ? { debugName: "nextPageLinkIconTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	_componentStyle = inject(PaginatorStyle);
	$appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{ debugName: "$appendTo" }] : /* istanbul ignore next */ []);
	pageLinks = computed(() => {
		const numberOfPages = this.getPageCount();
		const visiblePages = Math.min(this.pageLinkSize(), numberOfPages);
		const page = this.getPage();
		let start = Math.max(0, Math.ceil(page - visiblePages / 2));
		const end = Math.min(numberOfPages - 1, start + visiblePages - 1);
		const delta = this.pageLinkSize() - (end - start + 1);
		start = Math.max(0, start - delta);
		const links = [];
		for (let i = start; i <= end; i++) links.push(i + 1);
		return links;
	}, ...ngDevMode ? [{ debugName: "pageLinks" }] : /* istanbul ignore next */ []);
	pageItems = computed(() => {
		if (!this.showJumpToPageDropdown()) return [];
		const items = [];
		for (let i = 0; i < this.getPageCount(); i++) items.push({
			label: String(i + 1),
			value: i
		});
		return items;
	}, ...ngDevMode ? [{ debugName: "pageItems" }] : /* istanbul ignore next */ []);
	rowsPerPageItems = computed(() => {
		const options = this.rowsPerPageOptions();
		if (!options) return [];
		const items = [];
		let showAllItem = null;
		for (const opt of options) if (typeof opt === "object" && opt["showAll"]) showAllItem = {
			label: opt["showAll"],
			value: this.totalRecords()
		};
		else items.push({
			label: String(this.getLocalization(opt)),
			value: opt
		});
		if (showAllItem) items.push(showAllItem);
		return items;
	}, ...ngDevMode ? [{ debugName: "rowsPerPageItems" }] : /* istanbul ignore next */ []);
	paginatorState = computed(() => ({
		page: this.getPage(),
		pageCount: this.getPageCount(),
		rows: this.rows(),
		first: this.first(),
		totalRecords: this.totalRecords()
	}), ...ngDevMode ? [{ debugName: "paginatorState" }] : /* istanbul ignore next */ []);
	hostDisplay = computed(() => this.alwaysShow() || this.pageLinks().length > 1 ? null : "none", ...ngDevMode ? [{ debugName: "hostDisplay" }] : /* istanbul ignore next */ []);
	constructor() {
		super();
		effect(() => {
			const totalRecords = this.totalRecords();
			untracked(() => {
				const page = this.getPage();
				if (page > 0 && totalRecords && this.first() >= totalRecords) Promise.resolve(null).then(() => this.changePage(page - 1));
			});
		});
	}
	onAfterViewChecked() {
		this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
	}
	getAriaLabel(labelType) {
		return this.config.translation.aria ? this.config.translation.aria[labelType] : void 0;
	}
	getPageAriaLabel(value) {
		return this.config.translation.aria ? this.config.translation.aria.pageLabel?.replace(/{page}/g, `${value}`) : void 0;
	}
	getLocalization(digit) {
		const numerals = [...new Intl.NumberFormat(this.locale(), { useGrouping: false }).format(9876543210)].reverse();
		const index = new Map(numerals.map((d, i) => [i, d]));
		if (digit > 9) return String(digit).split("").map((number) => index.get(Number(number))).join("");
		else return index.get(digit);
	}
	isFirstPage() {
		return this.getPage() === 0;
	}
	isLastPage() {
		return this.getPage() === this.getPageCount() - 1;
	}
	getPageCount() {
		return Math.ceil(this.totalRecords() / this.rows());
	}
	getPage() {
		return Math.floor(this.first() / this.rows());
	}
	currentPage() {
		return this.getPageCount() > 0 ? this.getPage() + 1 : 0;
	}
	get currentPageReport() {
		return this.currentPageReportTemplate().replace("{currentPage}", String(this.currentPage())).replace("{totalPages}", String(this.getPageCount())).replace("{first}", String(this.totalRecords() > 0 ? this.first() + 1 : 0)).replace("{last}", String(Math.min(this.first() + this.rows(), this.totalRecords()))).replace("{rows}", String(this.rows())).replace("{totalRecords}", String(this.totalRecords()));
	}
	changePage(p) {
		const pc = this.getPageCount();
		if (p >= 0 && p < pc) {
			this.first.set(this.rows() * p);
			this.onPageChange.emit({
				page: p,
				first: this.first(),
				rows: this.rows(),
				pageCount: pc
			});
		}
	}
	changePageToFirst(event) {
		if (!this.isFirstPage()) this.changePage(0);
		event.preventDefault();
	}
	changePageToPrev(event) {
		this.changePage(this.getPage() - 1);
		event.preventDefault();
	}
	changePageToNext(event) {
		this.changePage(this.getPage() + 1);
		event.preventDefault();
	}
	changePageToLast(event) {
		if (!this.isLastPage()) this.changePage(this.getPageCount() - 1);
		event.preventDefault();
	}
	onPageLinkClick(event, page) {
		this.changePage(page);
		event.preventDefault();
	}
	onRppChange(_event) {
		this.changePage(this.getPage());
	}
	onPageDropdownChange(event) {
		this.changePage(event.value);
	}
	empty() {
		return this.getPageCount() === 0;
	}
	static ɵfac = function Paginator_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || Paginator)();
	};
	static ɵcmp = (function() {
		const _c0 = ["dropdownicon"];
		const _c1 = ["firstpagelinkicon"];
		const _c2 = ["previouspagelinkicon"];
		const _c3 = ["lastpagelinkicon"];
		const _c4 = ["nextpagelinkicon"];
		const _c5 = (a0) => ({ $implicit: a0 });
		const _c6 = (a0) => ({ pageLink: a0 });
		function Paginator_Conditional_0_ng_container_1_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Paginator_Conditional_0_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "div", 13);
				ɵɵtemplate(1, Paginator_Conditional_0_ng_container_1_Template, 1, 0, "ng-container", 14);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵclassMap(ctx_r0.cx("contentStart"));
				ɵɵproperty("pBind", ctx_r0.ptm("contentStart"));
				ɵɵadvance();
				ɵɵproperty("ngTemplateOutlet", ctx_r0.templateLeft())("ngTemplateOutletContext", ɵɵpureFunction1(5, _c5, ctx_r0.paginatorState()));
			}
		}
		function Paginator_Conditional_1_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "span", 13);
				ɵɵtext(1);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵclassMap(ctx_r0.cx("current"));
				ɵɵproperty("pBind", ctx_r0.ptm("current"));
				ɵɵadvance();
				ɵɵtextInterpolate(ctx_r0.currentPageReport);
			}
		}
		function Paginator_Conditional_2_Conditional_1_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵelement(0, "svg", 17);
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(2);
				ɵɵclassMap(ctx_r0.cx("firstIcon"));
				ɵɵproperty("pBind", ctx_r0.ptm("firstIcon"));
			}
		}
		function Paginator_Conditional_2_Conditional_2_1_ng_template_0_Template(rf, ctx) {}
		function Paginator_Conditional_2_Conditional_2_1_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, Paginator_Conditional_2_Conditional_2_1_ng_template_0_Template, 0, 0, "ng-template");
		}
		function Paginator_Conditional_2_Conditional_2_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "span");
				ɵɵtemplate(1, Paginator_Conditional_2_Conditional_2_1_Template, 1, 0, null, 18);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(2);
				ɵɵclassMap(ctx_r0.cx("firstIcon"));
				ɵɵadvance();
				ɵɵproperty("ngTemplateOutlet", ctx_r0.firstPageLinkIconTemplate());
			}
		}
		function Paginator_Conditional_2_Template(rf, ctx) {
			if (rf & 1) {
				const _r2 = ɵɵgetCurrentView();
				ɵɵelementStart(0, "button", 15);
				ɵɵlistener("click", function Paginator_Conditional_2_Template_button_click_0_listener($event) {
					ɵɵrestoreView(_r2);
					const ctx_r0 = ɵɵnextContext();
					return ɵɵresetView(ctx_r0.changePageToFirst($event));
				});
				ɵɵconditionalCreate(1, Paginator_Conditional_2_Conditional_1_Template, 1, 3, "svg", 16)(2, Paginator_Conditional_2_Conditional_2_Template, 2, 3, "span", 7);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵclassMap(ctx_r0.cx("first"));
				ɵɵproperty("pBind", ctx_r0.ptm("first"));
				ɵɵattribute("aria-label", ctx_r0.getAriaLabel("firstPageLabel"));
				ɵɵadvance();
				ɵɵconditional(!ctx_r0.firstPageLinkIconTemplate() ? 1 : 2);
			}
		}
		function Paginator_Conditional_4_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵelement(0, "svg", 19);
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵclassMap(ctx_r0.cx("prevIcon"));
				ɵɵproperty("pBind", ctx_r0.ptm("prevIcon"));
			}
		}
		function Paginator_Conditional_5_1_ng_template_0_Template(rf, ctx) {}
		function Paginator_Conditional_5_1_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, Paginator_Conditional_5_1_ng_template_0_Template, 0, 0, "ng-template");
		}
		function Paginator_Conditional_5_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "span");
				ɵɵtemplate(1, Paginator_Conditional_5_1_Template, 1, 0, null, 18);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵclassMap(ctx_r0.cx("prevIcon"));
				ɵɵadvance();
				ɵɵproperty("ngTemplateOutlet", ctx_r0.previousPageLinkIconTemplate());
			}
		}
		function Paginator_Conditional_6_For_2_Template(rf, ctx) {
			if (rf & 1) {
				const _r3 = ɵɵgetCurrentView();
				ɵɵelementStart(0, "button", 15);
				ɵɵlistener("click", function Paginator_Conditional_6_For_2_Template_button_click_0_listener($event) {
					const pageLink_r4 = ɵɵrestoreView(_r3).$implicit;
					const ctx_r0 = ɵɵnextContext(2);
					return ɵɵresetView(ctx_r0.onPageLinkClick($event, pageLink_r4 - 1));
				});
				ɵɵtext(1);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const pageLink_r4 = ctx.$implicit;
				const ctx_r0 = ɵɵnextContext(2);
				ɵɵclassMap(ctx_r0.cx("page", ɵɵpureFunction1(6, _c6, pageLink_r4)));
				ɵɵproperty("pBind", ctx_r0.ptm("page"));
				ɵɵattribute("aria-label", ctx_r0.getPageAriaLabel(pageLink_r4))("aria-current", pageLink_r4 - 1 === ctx_r0.getPage() ? "page" : void 0);
				ɵɵadvance();
				ɵɵtextInterpolate1(" ", ctx_r0.getLocalization(pageLink_r4), " ");
			}
		}
		function Paginator_Conditional_6_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "span", 13);
				ɵɵrepeaterCreate(1, Paginator_Conditional_6_For_2_Template, 2, 8, "button", 4, ɵɵrepeaterTrackByIndex);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵclassMap(ctx_r0.cx("pages"));
				ɵɵproperty("pBind", ctx_r0.ptm("pages"));
				ɵɵadvance();
				ɵɵrepeater(ctx_r0.pageLinks());
			}
		}
		function Paginator_Conditional_7_ng_template_1_Template(rf, ctx) {
			if (rf & 1) ɵɵtext(0);
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(2);
				ɵɵtextInterpolate(ctx_r0.currentPageReport);
			}
		}
		function Paginator_Conditional_7_Conditional_3_ng_template_0_ng_container_0_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Paginator_Conditional_7_Conditional_3_ng_template_0_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, Paginator_Conditional_7_Conditional_3_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 14);
			if (rf & 2) {
				const item_r6 = ctx.$implicit;
				const ctx_r0 = ɵɵnextContext(3);
				ɵɵproperty("ngTemplateOutlet", ctx_r0.jumpToPageItemTemplate())("ngTemplateOutletContext", ɵɵpureFunction1(2, _c5, item_r6));
			}
		}
		function Paginator_Conditional_7_Conditional_3_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, Paginator_Conditional_7_Conditional_3_ng_template_0_Template, 1, 4, "ng-template", null, 1, ɵɵtemplateRefExtractor);
		}
		function Paginator_Conditional_7_Conditional_4_ng_template_0_ng_container_0_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Paginator_Conditional_7_Conditional_4_ng_template_0_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, Paginator_Conditional_7_Conditional_4_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 18);
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(3);
				ɵɵproperty("ngTemplateOutlet", ctx_r0.dropdownIconTemplate());
			}
		}
		function Paginator_Conditional_7_Conditional_4_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, Paginator_Conditional_7_Conditional_4_ng_template_0_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
		}
		function Paginator_Conditional_7_Template(rf, ctx) {
			if (rf & 1) {
				const _r5 = ɵɵgetCurrentView();
				ɵɵelementStart(0, "p-select", 20);
				ɵɵcontrolCreate();
				ɵɵlistener("onChange", function Paginator_Conditional_7_Template_p_select_onChange_0_listener($event) {
					ɵɵrestoreView(_r5);
					const ctx_r0 = ɵɵnextContext();
					return ɵɵresetView(ctx_r0.onPageDropdownChange($event));
				});
				ɵɵtemplate(1, Paginator_Conditional_7_ng_template_1_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
				ɵɵconditionalCreate(3, Paginator_Conditional_7_Conditional_3_Template, 2, 0);
				ɵɵconditionalCreate(4, Paginator_Conditional_7_Conditional_4_Template, 2, 0);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵclassMap(ctx_r0.cx("pcJumpToPageDropdown"));
				ɵɵproperty("options", ctx_r0.pageItems())("ngModel", ctx_r0.getPage())("disabled", ctx_r0.empty())("appendTo", ctx_r0.$appendTo())("scrollHeight", ctx_r0.dropdownScrollHeight())("pt", ctx_r0.ptm("pcJumpToPageDropdown"))("unstyled", ctx_r0.unstyled());
				ɵɵattribute("aria-label", ctx_r0.getAriaLabel("jumpToPageDropdownLabel"));
				ɵɵcontrol();
				ɵɵadvance(3);
				ɵɵconditional(ctx_r0.jumpToPageItemTemplate() ? 3 : -1);
				ɵɵadvance();
				ɵɵconditional(ctx_r0.dropdownIconTemplate() ? 4 : -1);
			}
		}
		function Paginator_Conditional_9_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵelement(0, "svg", 21);
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵclassMap(ctx_r0.cx("nextIcon"));
				ɵɵproperty("pBind", ctx_r0.ptm("nextIcon"));
			}
		}
		function Paginator_Conditional_10_1_ng_template_0_Template(rf, ctx) {}
		function Paginator_Conditional_10_1_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, Paginator_Conditional_10_1_ng_template_0_Template, 0, 0, "ng-template");
		}
		function Paginator_Conditional_10_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "span");
				ɵɵtemplate(1, Paginator_Conditional_10_1_Template, 1, 0, null, 18);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵclassMap(ctx_r0.cx("nextIcon"));
				ɵɵadvance();
				ɵɵproperty("ngTemplateOutlet", ctx_r0.nextPageLinkIconTemplate());
			}
		}
		function Paginator_Conditional_11_Conditional_1_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵelement(0, "svg", 23);
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(2);
				ɵɵclassMap(ctx_r0.cx("lastIcon"));
				ɵɵproperty("pBind", ctx_r0.ptm("lastIcon"));
			}
		}
		function Paginator_Conditional_11_Conditional_2_1_ng_template_0_Template(rf, ctx) {}
		function Paginator_Conditional_11_Conditional_2_1_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, Paginator_Conditional_11_Conditional_2_1_ng_template_0_Template, 0, 0, "ng-template");
		}
		function Paginator_Conditional_11_Conditional_2_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "span");
				ɵɵtemplate(1, Paginator_Conditional_11_Conditional_2_1_Template, 1, 0, null, 18);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(2);
				ɵɵclassMap(ctx_r0.cx("lastIcon"));
				ɵɵadvance();
				ɵɵproperty("ngTemplateOutlet", ctx_r0.lastPageLinkIconTemplate());
			}
		}
		function Paginator_Conditional_11_Template(rf, ctx) {
			if (rf & 1) {
				const _r7 = ɵɵgetCurrentView();
				ɵɵelementStart(0, "button", 5);
				ɵɵlistener("click", function Paginator_Conditional_11_Template_button_click_0_listener($event) {
					ɵɵrestoreView(_r7);
					const ctx_r0 = ɵɵnextContext();
					return ɵɵresetView(ctx_r0.changePageToLast($event));
				});
				ɵɵconditionalCreate(1, Paginator_Conditional_11_Conditional_1_Template, 1, 3, "svg", 22)(2, Paginator_Conditional_11_Conditional_2_Template, 2, 3, "span", 7);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵclassMap(ctx_r0.cx("last"));
				ɵɵproperty("pBind", ctx_r0.ptm("last"))("disabled", ctx_r0.isLastPage() || ctx_r0.empty());
				ɵɵattribute("aria-label", ctx_r0.getAriaLabel("lastPageLabel"));
				ɵɵadvance();
				ɵɵconditional(!ctx_r0.lastPageLinkIconTemplate() ? 1 : 2);
			}
		}
		function Paginator_Conditional_12_Template(rf, ctx) {
			if (rf & 1) {
				const _r8 = ɵɵgetCurrentView();
				ɵɵelementStart(0, "p-inputnumber", 24);
				ɵɵcontrolCreate();
				ɵɵlistener("ngModelChange", function Paginator_Conditional_12_Template_p_inputnumber_ngModelChange_0_listener($event) {
					ɵɵrestoreView(_r8);
					const ctx_r0 = ɵɵnextContext();
					return ɵɵresetView(ctx_r0.changePage($event - 1));
				});
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵclassMap(ctx_r0.cx("pcJumpToPageInput"));
				ɵɵproperty("pt", ctx_r0.ptm("pcJumpToPageInput"))("ngModel", ctx_r0.currentPage())("disabled", ctx_r0.empty())("unstyled", ctx_r0.unstyled());
				ɵɵcontrol();
			}
		}
		function Paginator_Conditional_13_Conditional_1_ng_template_0_ng_container_0_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Paginator_Conditional_13_Conditional_1_ng_template_0_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, Paginator_Conditional_13_Conditional_1_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 14);
			if (rf & 2) {
				const item_r10 = ctx.$implicit;
				const ctx_r0 = ɵɵnextContext(3);
				ɵɵproperty("ngTemplateOutlet", ctx_r0.dropdownItemTemplate())("ngTemplateOutletContext", ɵɵpureFunction1(2, _c5, item_r10));
			}
		}
		function Paginator_Conditional_13_Conditional_1_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, Paginator_Conditional_13_Conditional_1_ng_template_0_Template, 1, 4, "ng-template", null, 1, ɵɵtemplateRefExtractor);
		}
		function Paginator_Conditional_13_Conditional_2_ng_template_0_ng_container_0_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Paginator_Conditional_13_Conditional_2_ng_template_0_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, Paginator_Conditional_13_Conditional_2_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 18);
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(3);
				ɵɵproperty("ngTemplateOutlet", ctx_r0.dropdownIconTemplate());
			}
		}
		function Paginator_Conditional_13_Conditional_2_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, Paginator_Conditional_13_Conditional_2_ng_template_0_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
		}
		function Paginator_Conditional_13_Template(rf, ctx) {
			if (rf & 1) {
				const _r9 = ɵɵgetCurrentView();
				ɵɵelementStart(0, "p-select", 25);
				ɵɵcontrolCreate();
				ɵɵlistener("ngModelChange", function Paginator_Conditional_13_Template_p_select_ngModelChange_0_listener($event) {
					ɵɵrestoreView(_r9);
					const ctx_r0 = ɵɵnextContext();
					return ɵɵresetView(ctx_r0.rows.set($event));
				})("onChange", function Paginator_Conditional_13_Template_p_select_onChange_0_listener($event) {
					ɵɵrestoreView(_r9);
					const ctx_r0 = ɵɵnextContext();
					return ɵɵresetView(ctx_r0.onRppChange($event));
				});
				ɵɵconditionalCreate(1, Paginator_Conditional_13_Conditional_1_Template, 2, 0);
				ɵɵconditionalCreate(2, Paginator_Conditional_13_Conditional_2_Template, 2, 0);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵclassMap(ctx_r0.cx("pcRowPerPageDropdown"));
				ɵɵproperty("options", ctx_r0.rowsPerPageItems())("ngModel", ctx_r0.rows())("disabled", ctx_r0.empty())("appendTo", ctx_r0.$appendTo())("scrollHeight", ctx_r0.dropdownScrollHeight())("ariaLabel", ctx_r0.getAriaLabel("rowsPerPageLabel"))("pt", ctx_r0.ptm("pcRowPerPageDropdown"))("unstyled", ctx_r0.unstyled());
				ɵɵcontrol();
				ɵɵadvance();
				ɵɵconditional(ctx_r0.dropdownItemTemplate() ? 1 : -1);
				ɵɵadvance();
				ɵɵconditional(ctx_r0.dropdownIconTemplate() ? 2 : -1);
			}
		}
		function Paginator_Conditional_14_ng_container_1_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Paginator_Conditional_14_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "div", 13);
				ɵɵtemplate(1, Paginator_Conditional_14_ng_container_1_Template, 1, 0, "ng-container", 14);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵclassMap(ctx_r0.cx("contentEnd"));
				ɵɵproperty("pBind", ctx_r0.ptm("contentEnd"));
				ɵɵadvance();
				ɵɵproperty("ngTemplateOutlet", ctx_r0.templateRight())("ngTemplateOutletContext", ɵɵpureFunction1(5, _c5, ctx_r0.paginatorState()));
			}
		}
		return /*@__PURE__*/ ɵɵdefineComponent({
			type: Paginator,
			selectors: [["p-paginator"]],
			contentQueries: function Paginator_ContentQueries(rf, ctx, dirIndex) {
				if (rf & 1) ɵɵcontentQuerySignal(dirIndex, ctx.dropdownIconTemplate, _c0, 4)(dirIndex, ctx.firstPageLinkIconTemplate, _c1, 4)(dirIndex, ctx.previousPageLinkIconTemplate, _c2, 4)(dirIndex, ctx.lastPageLinkIconTemplate, _c3, 4)(dirIndex, ctx.nextPageLinkIconTemplate, _c4, 4);
				if (rf & 2) ɵɵqueryAdvance(5);
			},
			hostVars: 4,
			hostBindings: function Paginator_HostBindings(rf, ctx) {
				if (rf & 2) {
					ɵɵclassMap(ctx.cx("paginator"));
					ɵɵstyleProp("display", ctx.hostDisplay());
				}
			},
			inputs: {
				pageLinkSize: [1, "pageLinkSize"],
				alwaysShow: [1, "alwaysShow"],
				templateLeft: [1, "templateLeft"],
				templateRight: [1, "templateRight"],
				dropdownScrollHeight: [1, "dropdownScrollHeight"],
				currentPageReportTemplate: [1, "currentPageReportTemplate"],
				showCurrentPageReport: [1, "showCurrentPageReport"],
				showFirstLastIcon: [1, "showFirstLastIcon"],
				totalRecords: [1, "totalRecords"],
				rows: [1, "rows"],
				first: [1, "first"],
				rowsPerPageOptions: [1, "rowsPerPageOptions"],
				showJumpToPageDropdown: [1, "showJumpToPageDropdown"],
				showJumpToPageInput: [1, "showJumpToPageInput"],
				jumpToPageItemTemplate: [1, "jumpToPageItemTemplate"],
				showPageLinks: [1, "showPageLinks"],
				locale: [1, "locale"],
				dropdownItemTemplate: [1, "dropdownItemTemplate"],
				appendTo: [1, "appendTo"]
			},
			outputs: {
				rows: "rowsChange",
				first: "firstChange",
				onPageChange: "onPageChange"
			},
			features: [
				ɵɵProvidersFeature([
					PaginatorStyle,
					{
						provide: PAGINATOR_INSTANCE,
						useExisting: Paginator
					},
					{
						provide: PARENT_INSTANCE,
						useExisting: Paginator
					}
				]),
				ɵɵHostDirectivesFeature([Bind]),
				ɵɵInheritDefinitionFeature
			],
			decls: 15,
			vars: 21,
			consts: [
				["selectedItem", ""],
				["item", ""],
				["dropdownicon", ""],
				[
					3,
					"pBind",
					"class"
				],
				[
					"type",
					"button",
					"pRipple",
					"",
					3,
					"pBind",
					"class"
				],
				[
					"type",
					"button",
					"pRipple",
					"",
					3,
					"click",
					"pBind",
					"disabled"
				],
				[
					"data-p-icon",
					"angle-left",
					3,
					"pBind",
					"class"
				],
				[3, "class"],
				[
					3,
					"options",
					"ngModel",
					"disabled",
					"class",
					"appendTo",
					"scrollHeight",
					"pt",
					"unstyled"
				],
				[
					"data-p-icon",
					"angle-right",
					3,
					"pBind",
					"class"
				],
				[
					"type",
					"button",
					"pRipple",
					"",
					3,
					"pBind",
					"disabled",
					"class"
				],
				[
					3,
					"pt",
					"ngModel",
					"class",
					"disabled",
					"unstyled"
				],
				[
					3,
					"options",
					"ngModel",
					"class",
					"disabled",
					"appendTo",
					"scrollHeight",
					"ariaLabel",
					"pt",
					"unstyled"
				],
				[3, "pBind"],
				[
					4,
					"ngTemplateOutlet",
					"ngTemplateOutletContext"
				],
				[
					"type",
					"button",
					"pRipple",
					"",
					3,
					"click",
					"pBind"
				],
				[
					"data-p-icon",
					"angle-double-left",
					3,
					"pBind",
					"class"
				],
				[
					"data-p-icon",
					"angle-double-left",
					3,
					"pBind"
				],
				[4, "ngTemplateOutlet"],
				[
					"data-p-icon",
					"angle-left",
					3,
					"pBind"
				],
				[
					3,
					"onChange",
					"options",
					"ngModel",
					"disabled",
					"appendTo",
					"scrollHeight",
					"pt",
					"unstyled"
				],
				[
					"data-p-icon",
					"angle-right",
					3,
					"pBind"
				],
				[
					"data-p-icon",
					"angle-double-right",
					3,
					"pBind",
					"class"
				],
				[
					"data-p-icon",
					"angle-double-right",
					3,
					"pBind"
				],
				[
					3,
					"ngModelChange",
					"pt",
					"ngModel",
					"disabled",
					"unstyled"
				],
				[
					3,
					"ngModelChange",
					"onChange",
					"options",
					"ngModel",
					"disabled",
					"appendTo",
					"scrollHeight",
					"ariaLabel",
					"pt",
					"unstyled"
				]
			],
			template: function Paginator_Template(rf, ctx) {
				if (rf & 1) {
					ɵɵconditionalCreate(0, Paginator_Conditional_0_Template, 2, 7, "div", 3);
					ɵɵconditionalCreate(1, Paginator_Conditional_1_Template, 2, 4, "span", 3);
					ɵɵconditionalCreate(2, Paginator_Conditional_2_Template, 3, 5, "button", 4);
					ɵɵelementStart(3, "button", 5);
					ɵɵlistener("click", function Paginator_Template_button_click_3_listener($event) {
						return ctx.changePageToPrev($event);
					});
					ɵɵconditionalCreate(4, Paginator_Conditional_4_Template, 1, 3, "svg", 6)(5, Paginator_Conditional_5_Template, 2, 3, "span", 7);
					ɵɵelementEnd();
					ɵɵconditionalCreate(6, Paginator_Conditional_6_Template, 3, 3, "span", 3);
					ɵɵconditionalCreate(7, Paginator_Conditional_7_Template, 5, 12, "p-select", 8);
					ɵɵelementStart(8, "button", 5);
					ɵɵlistener("click", function Paginator_Template_button_click_8_listener($event) {
						return ctx.changePageToNext($event);
					});
					ɵɵconditionalCreate(9, Paginator_Conditional_9_Template, 1, 3, "svg", 9)(10, Paginator_Conditional_10_Template, 2, 3, "span", 7);
					ɵɵelementEnd();
					ɵɵconditionalCreate(11, Paginator_Conditional_11_Template, 3, 6, "button", 10);
					ɵɵconditionalCreate(12, Paginator_Conditional_12_Template, 1, 6, "p-inputnumber", 11);
					ɵɵconditionalCreate(13, Paginator_Conditional_13_Template, 3, 12, "p-select", 12);
					ɵɵconditionalCreate(14, Paginator_Conditional_14_Template, 2, 7, "div", 3);
				}
				if (rf & 2) {
					ɵɵconditional(ctx.templateLeft() ? 0 : -1);
					ɵɵadvance();
					ɵɵconditional(ctx.showCurrentPageReport() ? 1 : -1);
					ɵɵadvance();
					ɵɵconditional(ctx.showFirstLastIcon() ? 2 : -1);
					ɵɵadvance();
					ɵɵclassMap(ctx.cx("prev"));
					ɵɵproperty("pBind", ctx.ptm("prev"))("disabled", ctx.isFirstPage() || ctx.empty());
					ɵɵattribute("aria-label", ctx.getAriaLabel("prevPageLabel"));
					ɵɵadvance();
					ɵɵconditional(!ctx.previousPageLinkIconTemplate() ? 4 : 5);
					ɵɵadvance(2);
					ɵɵconditional(ctx.showPageLinks() ? 6 : -1);
					ɵɵadvance();
					ɵɵconditional(ctx.showJumpToPageDropdown() ? 7 : -1);
					ɵɵadvance();
					ɵɵclassMap(ctx.cx("next"));
					ɵɵproperty("pBind", ctx.ptm("next"))("disabled", ctx.isLastPage() || ctx.empty());
					ɵɵattribute("aria-label", ctx.getAriaLabel("nextPageLabel"));
					ɵɵadvance();
					ɵɵconditional(!ctx.nextPageLinkIconTemplate() ? 9 : 10);
					ɵɵadvance(2);
					ɵɵconditional(ctx.showFirstLastIcon() ? 11 : -1);
					ɵɵadvance();
					ɵɵconditional(ctx.showJumpToPageInput() ? 12 : -1);
					ɵɵadvance();
					ɵɵconditional(ctx.rowsPerPageOptions() ? 13 : -1);
					ɵɵadvance();
					ɵɵconditional(ctx.templateRight() ? 14 : -1);
				}
			},
			dependencies: [
				NgTemplateOutlet,
				Select,
				InputNumber,
				FormsModule,
				NgControlStatus,
				NgModel,
				Ripple,
				AngleDoubleLeft,
				AngleDoubleRight,
				AngleLeft,
				AngleRight,
				Bind
			],
			encapsulation: 2
		});
	})();
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Paginator, [{
		type: Component,
		args: [{
			selector: "p-paginator",
			standalone: true,
			imports: [
				NgTemplateOutlet,
				Select,
				InputNumber,
				FormsModule,
				Ripple,
				AngleDoubleLeft,
				AngleDoubleRight,
				AngleLeft,
				AngleRight,
				Bind
			],
			template: `
        @if (templateLeft()) {
            <div [pBind]="ptm('contentStart')" [class]="cx('contentStart')">
                <ng-container *ngTemplateOutlet="templateLeft()!; context: { $implicit: paginatorState() }"></ng-container>
            </div>
        }
        @if (showCurrentPageReport()) {
            <span [pBind]="ptm('current')" [class]="cx('current')">{{ currentPageReport }}</span>
        }
        @if (showFirstLastIcon()) {
            <button [pBind]="ptm('first')" type="button" (click)="changePageToFirst($event)" pRipple [class]="cx('first')" [attr.aria-label]="getAriaLabel('firstPageLabel')">
                @if (!firstPageLinkIconTemplate()) {
                    <svg [pBind]="ptm('firstIcon')" data-p-icon="angle-double-left" [class]="cx('firstIcon')" />
                } @else {
                    <span [class]="cx('firstIcon')">
                        <ng-template *ngTemplateOutlet="firstPageLinkIconTemplate()!"></ng-template>
                    </span>
                }
            </button>
        }
        <button [pBind]="ptm('prev')" type="button" [disabled]="isFirstPage() || empty()" (click)="changePageToPrev($event)" pRipple [class]="cx('prev')" [attr.aria-label]="getAriaLabel('prevPageLabel')">
            @if (!previousPageLinkIconTemplate()) {
                <svg [pBind]="ptm('prevIcon')" data-p-icon="angle-left" [class]="cx('prevIcon')" />
            } @else {
                <span [class]="cx('prevIcon')">
                    <ng-template *ngTemplateOutlet="previousPageLinkIconTemplate()!"></ng-template>
                </span>
            }
        </button>
        @if (showPageLinks()) {
            <span [pBind]="ptm('pages')" [class]="cx('pages')">
                @for (pageLink of pageLinks(); track $index) {
                    <button
                        [pBind]="ptm('page')"
                        type="button"
                        [class]="cx('page', { pageLink })"
                        [attr.aria-label]="getPageAriaLabel(pageLink)"
                        [attr.aria-current]="pageLink - 1 === getPage() ? 'page' : undefined"
                        (click)="onPageLinkClick($event, pageLink - 1)"
                        pRipple
                    >
                        {{ getLocalization(pageLink) }}
                    </button>
                }
            </span>
        }
        @if (showJumpToPageDropdown()) {
            <p-select
                [options]="pageItems()"
                [ngModel]="getPage()"
                [disabled]="empty()"
                [attr.aria-label]="getAriaLabel('jumpToPageDropdownLabel')"
                [class]="cx('pcJumpToPageDropdown')"
                (onChange)="onPageDropdownChange($event)"
                [appendTo]="$appendTo()"
                [scrollHeight]="dropdownScrollHeight()"
                [pt]="ptm('pcJumpToPageDropdown')"
                [unstyled]="unstyled()"
            >
                <ng-template #selectedItem>{{ currentPageReport }}</ng-template>
                @if (jumpToPageItemTemplate()) {
                    <ng-template #item let-item>
                        <ng-container *ngTemplateOutlet="jumpToPageItemTemplate()!; context: { $implicit: item }"></ng-container>
                    </ng-template>
                }
                @if (dropdownIconTemplate()) {
                    <ng-template #dropdownicon>
                        <ng-container *ngTemplateOutlet="dropdownIconTemplate()!"></ng-container>
                    </ng-template>
                }
            </p-select>
        }
        <button [pBind]="ptm('next')" type="button" [disabled]="isLastPage() || empty()" (click)="changePageToNext($event)" pRipple [class]="cx('next')" [attr.aria-label]="getAriaLabel('nextPageLabel')">
            @if (!nextPageLinkIconTemplate()) {
                <svg [pBind]="ptm('nextIcon')" data-p-icon="angle-right" [class]="cx('nextIcon')" />
            } @else {
                <span [class]="cx('nextIcon')">
                    <ng-template *ngTemplateOutlet="nextPageLinkIconTemplate()!"></ng-template>
                </span>
            }
        </button>
        @if (showFirstLastIcon()) {
            <button [pBind]="ptm('last')" type="button" [disabled]="isLastPage() || empty()" (click)="changePageToLast($event)" pRipple [class]="cx('last')" [attr.aria-label]="getAriaLabel('lastPageLabel')">
                @if (!lastPageLinkIconTemplate()) {
                    <svg [pBind]="ptm('lastIcon')" data-p-icon="angle-double-right" [class]="cx('lastIcon')" />
                } @else {
                    <span [class]="cx('lastIcon')">
                        <ng-template *ngTemplateOutlet="lastPageLinkIconTemplate()!"></ng-template>
                    </span>
                }
            </button>
        }
        @if (showJumpToPageInput()) {
            <p-inputnumber [pt]="ptm('pcJumpToPageInput')" [ngModel]="currentPage()" [class]="cx('pcJumpToPageInput')" [disabled]="empty()" (ngModelChange)="changePage($event - 1)" [unstyled]="unstyled()" />
        }
        @if (rowsPerPageOptions()) {
            <p-select
                [options]="rowsPerPageItems()"
                [ngModel]="rows()"
                (ngModelChange)="rows.set($event)"
                [class]="cx('pcRowPerPageDropdown')"
                [disabled]="empty()"
                (onChange)="onRppChange($event)"
                [appendTo]="$appendTo()"
                [scrollHeight]="dropdownScrollHeight()"
                [ariaLabel]="getAriaLabel('rowsPerPageLabel')"
                [pt]="ptm('pcRowPerPageDropdown')"
                [unstyled]="unstyled()"
            >
                @if (dropdownItemTemplate()) {
                    <ng-template #item let-item>
                        <ng-container *ngTemplateOutlet="dropdownItemTemplate()!; context: { $implicit: item }"></ng-container>
                    </ng-template>
                }
                @if (dropdownIconTemplate()) {
                    <ng-template #dropdownicon>
                        <ng-container *ngTemplateOutlet="dropdownIconTemplate()!"></ng-container>
                    </ng-template>
                }
            </p-select>
        }
        @if (templateRight()) {
            <div [pBind]="ptm('contentEnd')" [class]="cx('contentEnd')">
                <ng-container *ngTemplateOutlet="templateRight()!; context: { $implicit: paginatorState() }"></ng-container>
            </div>
        }
    `,
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			providers: [
				PaginatorStyle,
				{
					provide: PAGINATOR_INSTANCE,
					useExisting: Paginator
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: Paginator
				}
			],
			host: {
				"[class]": "cx('paginator')",
				"[style.display]": "hostDisplay()"
			},
			hostDirectives: [Bind]
		}]
	}], () => [], {
		pageLinkSize: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pageLinkSize",
				required: false
			}]
		}],
		alwaysShow: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "alwaysShow",
				required: false
			}]
		}],
		templateLeft: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "templateLeft",
				required: false
			}]
		}],
		templateRight: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "templateRight",
				required: false
			}]
		}],
		dropdownScrollHeight: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "dropdownScrollHeight",
				required: false
			}]
		}],
		currentPageReportTemplate: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "currentPageReportTemplate",
				required: false
			}]
		}],
		showCurrentPageReport: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "showCurrentPageReport",
				required: false
			}]
		}],
		showFirstLastIcon: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "showFirstLastIcon",
				required: false
			}]
		}],
		totalRecords: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "totalRecords",
				required: false
			}]
		}],
		rows: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "rows",
				required: false
			}]
		}, {
			type: Output,
			args: ["rowsChange"]
		}],
		first: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "first",
				required: false
			}]
		}, {
			type: Output,
			args: ["firstChange"]
		}],
		rowsPerPageOptions: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "rowsPerPageOptions",
				required: false
			}]
		}],
		showJumpToPageDropdown: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "showJumpToPageDropdown",
				required: false
			}]
		}],
		showJumpToPageInput: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "showJumpToPageInput",
				required: false
			}]
		}],
		jumpToPageItemTemplate: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "jumpToPageItemTemplate",
				required: false
			}]
		}],
		showPageLinks: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "showPageLinks",
				required: false
			}]
		}],
		locale: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "locale",
				required: false
			}]
		}],
		dropdownItemTemplate: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "dropdownItemTemplate",
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
		onPageChange: [{
			type: Output,
			args: ["onPageChange"]
		}],
		dropdownIconTemplate: [{
			type: ContentChild,
			args: ["dropdownicon", {
				descendants: false,
				isSignal: true
			}]
		}],
		firstPageLinkIconTemplate: [{
			type: ContentChild,
			args: ["firstpagelinkicon", {
				descendants: false,
				isSignal: true
			}]
		}],
		previousPageLinkIconTemplate: [{
			type: ContentChild,
			args: ["previouspagelinkicon", {
				descendants: false,
				isSignal: true
			}]
		}],
		lastPageLinkIconTemplate: [{
			type: ContentChild,
			args: ["lastpagelinkicon", {
				descendants: false,
				isSignal: true
			}]
		}],
		nextPageLinkIconTemplate: [{
			type: ContentChild,
			args: ["nextpagelinkicon", {
				descendants: false,
				isSignal: true
			}]
		}]
	});
})();
var PaginatorModule = class PaginatorModule {
	static ɵfac = function PaginatorModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || PaginatorModule)();
	};
	static ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({
		type: PaginatorModule,
		imports: [Paginator],
		exports: [Paginator]
	});
	static ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ imports: [Paginator] });
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginatorModule, [{
		type: NgModule,
		args: [{
			imports: [Paginator],
			exports: [Paginator]
		}]
	}], null, null);
})();
// node_modules/@primeuix/styles/dist/dataview/index.mjs
var style = "\n    .p-dataview {\n        position: relative;\n        display: block;\n        border-color: dt('dataview.border.color');\n        border-width: dt('dataview.border.width');\n        border-style: solid;\n        border-radius: dt('dataview.border.radius');\n        padding: dt('dataview.padding');\n    }\n\n    .p-dataview-header {\n        background: dt('dataview.header.background');\n        color: dt('dataview.header.color');\n        border-color: dt('dataview.header.border.color');\n        border-width: dt('dataview.header.border.width');\n        border-style: solid;\n        padding: dt('dataview.header.padding');\n        border-radius: dt('dataview.header.border.radius');\n    }\n\n    .p-dataview-content {\n        background: dt('dataview.content.background');\n        border-color: dt('dataview.content.border.color');\n        border-width: dt('dataview.content.border.width');\n        border-style: solid;\n        color: dt('dataview.content.color');\n        padding: dt('dataview.content.padding');\n        border-radius: dt('dataview.content.border.radius');\n    }\n\n    .p-dataview-footer {\n        background: dt('dataview.footer.background');\n        color: dt('dataview.footer.color');\n        border-color: dt('dataview.footer.border.color');\n        border-width: dt('dataview.footer.border.width');\n        border-style: solid;\n        padding: dt('dataview.footer.padding');\n        border-radius: dt('dataview.footer.border.radius');\n    }\n\n    .p-dataview-paginator-top {\n        border-width: dt('dataview.paginator.top.border.width');\n        border-color: dt('dataview.paginator.top.border.color');\n        border-style: solid;\n    }\n\n    .p-dataview-paginator-bottom {\n        border-width: dt('dataview.paginator.bottom.border.width');\n        border-color: dt('dataview.paginator.bottom.border.color');\n        border-style: solid;\n    }\n\n    .p-dataview-loading-overlay {\n        position: absolute;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        z-index: 2;\n    }\n";
// node_modules/primeng/fesm2022/primeng-dataview.mjs
var classes = {
	root: ({ instance }) => {
		const layout = instance.layout();
		return ["p-dataview p-component", {
			"p-dataview-list": layout === "list",
			"p-dataview-grid": layout === "grid"
		}];
	},
	header: "p-dataview-header",
	loading: "p-dataview-loading",
	loadingOverlay: "p-dataview-loading-overlay p-overlay-mask",
	loadingIcon: "p-dataview-loading-icon",
	pcPaginator: ({ position }) => "p-dataview-paginator-" + position,
	content: "p-dataview-content",
	emptyMessage: "p-dataview-empty-message",
	footer: "p-dataview-footer"
};
var DataViewStyle = class DataViewStyle extends BaseStyle {
	name = "dataview";
	style = style;
	classes = classes;
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵDataViewStyle_BaseFactory = void 0;
		return function DataViewStyle_Factory(__ngFactoryType__) {
			return (ɵDataViewStyle_BaseFactory || (ɵDataViewStyle_BaseFactory = ɵɵgetInheritedFactory(DataViewStyle)))(__ngFactoryType__ || DataViewStyle);
		};
	})();
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: DataViewStyle,
		factory: DataViewStyle.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataViewStyle, [{ type: Injectable }], null, null);
})();
var DataViewClasses;
(function(DataViewClasses) {
	DataViewClasses["root"] = "p-dataview";
	DataViewClasses["header"] = "p-dataview-header";
	DataViewClasses["loading"] = "p-dataview-loading";
	DataViewClasses["loadingOverlay"] = "p-dataview-loading-overlay";
	DataViewClasses["loadingIcon"] = "p-dataview-loading-icon";
	DataViewClasses["pcPaginator"] = "p-dataview-paginator-[position]";
	DataViewClasses["content"] = "p-dataview-content";
	DataViewClasses["emptyMessage"] = "p-dataview-empty-message";
	DataViewClasses["footer"] = "p-dataview-footer";
})(DataViewClasses || (DataViewClasses = {}));
var DATAVIEW_INSTANCE = new InjectionToken("DATAVIEW_INSTANCE");
var DataView = class DataView extends BaseComponent {
	componentName = "DataView";
	bindDirectiveInstance = inject(Bind, { self: true });
	$pcDataView = inject(DATAVIEW_INSTANCE, {
		optional: true,
		skipSelf: true
	}) ?? void 0;
	paginator = input(false, {
		...ngDevMode ? { debugName: "paginator" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	rows = model(0, ...ngDevMode ? [{ debugName: "rows" }] : /* istanbul ignore next */ []);
	totalRecords = model(...ngDevMode ? [void 0, { debugName: "totalRecords" }] : /* istanbul ignore next */ []);
	pageLinks = input(5, {
		...ngDevMode ? { debugName: "pageLinks" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	rowsPerPageOptions = input(...ngDevMode ? [void 0, { debugName: "rowsPerPageOptions" }] : /* istanbul ignore next */ []);
	paginatorPosition = input("bottom", ...ngDevMode ? [{ debugName: "paginatorPosition" }] : /* istanbul ignore next */ []);
	paginatorStyleClass = input(...ngDevMode ? [void 0, { debugName: "paginatorStyleClass" }] : /* istanbul ignore next */ []);
	alwaysShowPaginator = input(true, {
		...ngDevMode ? { debugName: "alwaysShowPaginator" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	paginatorDropdownAppendTo = input(...ngDevMode ? [void 0, { debugName: "paginatorDropdownAppendTo" }] : /* istanbul ignore next */ []);
	paginatorDropdownScrollHeight = input("200px", ...ngDevMode ? [{ debugName: "paginatorDropdownScrollHeight" }] : /* istanbul ignore next */ []);
	currentPageReportTemplate = input("{currentPage} of {totalPages}", ...ngDevMode ? [{ debugName: "currentPageReportTemplate" }] : /* istanbul ignore next */ []);
	showCurrentPageReport = input(false, {
		...ngDevMode ? { debugName: "showCurrentPageReport" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	showJumpToPageDropdown = input(false, {
		...ngDevMode ? { debugName: "showJumpToPageDropdown" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	showFirstLastIcon = input(true, {
		...ngDevMode ? { debugName: "showFirstLastIcon" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	showPageLinks = input(true, {
		...ngDevMode ? { debugName: "showPageLinks" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	lazy = input(false, {
		...ngDevMode ? { debugName: "lazy" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	lazyLoadOnInit = input(true, {
		...ngDevMode ? { debugName: "lazyLoadOnInit" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	emptyMessage = input("", ...ngDevMode ? [{ debugName: "emptyMessage" }] : /* istanbul ignore next */ []);
	gridStyleClass = input("", ...ngDevMode ? [{ debugName: "gridStyleClass" }] : /* istanbul ignore next */ []);
	trackBy = input((_index, item) => item, ...ngDevMode ? [{ debugName: "trackBy" }] : /* istanbul ignore next */ []);
	filterBy = input(...ngDevMode ? [void 0, { debugName: "filterBy" }] : /* istanbul ignore next */ []);
	filterLocale = input(...ngDevMode ? [void 0, { debugName: "filterLocale" }] : /* istanbul ignore next */ []);
	loading = input(false, {
		...ngDevMode ? { debugName: "loading" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	loadingIcon = input(...ngDevMode ? [void 0, { debugName: "loadingIcon" }] : /* istanbul ignore next */ []);
	first = model(0, ...ngDevMode ? [{ debugName: "first" }] : /* istanbul ignore next */ []);
	sortField = input(...ngDevMode ? [void 0, { debugName: "sortField" }] : /* istanbul ignore next */ []);
	sortOrder = input(...ngDevMode ? [void 0, { debugName: "sortOrder" }] : /* istanbul ignore next */ []);
	value = model(...ngDevMode ? [void 0, { debugName: "value" }] : /* istanbul ignore next */ []);
	layout = input("list", ...ngDevMode ? [{ debugName: "layout" }] : /* istanbul ignore next */ []);
	onLazyLoad = output();
	onPage = output();
	onSort = output();
	onChangeLayout = output();
	listTemplate = contentChild("list", {
		...ngDevMode ? { debugName: "listTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	gridTemplate = contentChild("grid", {
		...ngDevMode ? { debugName: "gridTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	headerTemplate = contentChild("header", {
		...ngDevMode ? { debugName: "headerTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	emptymessageTemplate = contentChild("emptymessage", {
		...ngDevMode ? { debugName: "emptymessageTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	footerTemplate = contentChild("footer", {
		...ngDevMode ? { debugName: "footerTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	paginatorleft = contentChild("paginatorleft", {
		...ngDevMode ? { debugName: "paginatorleft" } : /* istanbul ignore next */ {},
		descendants: false
	});
	paginatorright = contentChild("paginatorright", {
		...ngDevMode ? { debugName: "paginatorright" } : /* istanbul ignore next */ {},
		descendants: false
	});
	paginatordropdownitem = contentChild("paginatordropdownitem", {
		...ngDevMode ? { debugName: "paginatordropdownitem" } : /* istanbul ignore next */ {},
		descendants: false
	});
	loadingicon = contentChild("loadingicon", {
		...ngDevMode ? { debugName: "loadingicon" } : /* istanbul ignore next */ {},
		descendants: false
	});
	listicon = contentChild("listicon", {
		...ngDevMode ? { debugName: "listicon" } : /* istanbul ignore next */ {},
		descendants: false
	});
	gridicon = contentChild("gridicon", {
		...ngDevMode ? { debugName: "gridicon" } : /* istanbul ignore next */ {},
		descendants: false
	});
	header = contentChild(Header, {
		...ngDevMode ? { debugName: "header" } : /* istanbul ignore next */ {},
		descendants: false
	});
	footer = contentChild(Footer, {
		...ngDevMode ? { debugName: "footer" } : /* istanbul ignore next */ {},
		descendants: false
	});
	filteredValue = signal(null, ...ngDevMode ? [{ debugName: "filteredValue" }] : /* istanbul ignore next */ []);
	filterValue = signal(null, ...ngDevMode ? [{ debugName: "filterValue" }] : /* istanbul ignore next */ []);
	initialized = false;
	translation = toSignal(this.config.translationObserver, { initialValue: this.config.translation });
	_componentStyle = inject(DataViewStyle);
	emptyMessageLabel = computed(() => {
		this.translation();
		return this.emptyMessage() || this.translate(TranslationKeys.EMPTY_MESSAGE);
	}, ...ngDevMode ? [{ debugName: "emptyMessageLabel" }] : /* istanbul ignore next */ []);
	displayedItems = computed(() => {
		const items = this.filteredValue() || this.value();
		if (!this.paginator()) return items;
		const start = this.lazy() ? 0 : this.first();
		const end = start + this.rows();
		return items?.slice(start, end) ?? [];
	}, ...ngDevMode ? [{ debugName: "displayedItems" }] : /* istanbul ignore next */ []);
	showHeader = computed(() => !!this.header() || !!this.headerTemplate(), ...ngDevMode ? [{ debugName: "showHeader" }] : /* istanbul ignore next */ []);
	showFooter = computed(() => !!this.footer() || !!this.footerTemplate(), ...ngDevMode ? [{ debugName: "showFooter" }] : /* istanbul ignore next */ []);
	showTopPaginator = computed(() => this.paginator() && (this.paginatorPosition() === "top" || this.paginatorPosition() === "both"), ...ngDevMode ? [{ debugName: "showTopPaginator" }] : /* istanbul ignore next */ []);
	showBottomPaginator = computed(() => this.paginator() && (this.paginatorPosition() === "bottom" || this.paginatorPosition() === "both"), ...ngDevMode ? [{ debugName: "showBottomPaginator" }] : /* istanbul ignore next */ []);
	isListLayout = computed(() => this.layout() === "list", ...ngDevMode ? [{ debugName: "isListLayout" }] : /* istanbul ignore next */ []);
	isGridLayout = computed(() => this.layout() === "grid", ...ngDevMode ? [{ debugName: "isGridLayout" }] : /* istanbul ignore next */ []);
	$isEmpty = computed(() => {
		const data = this.filteredValue() || this.value();
		return data == null || data.length == 0;
	}, ...ngDevMode ? [{ debugName: "$isEmpty" }] : /* istanbul ignore next */ []);
	showEmptyMessage = computed(() => this.$isEmpty() && !this.loading(), ...ngDevMode ? [{ debugName: "showEmptyMessage" }] : /* istanbul ignore next */ []);
	filterService = inject(FilterService);
	constructor() {
		super();
		let layoutInit = false;
		effect(() => {
			const layout = this.layout();
			if (layoutInit) untracked(() => this.onChangeLayout.emit({ layout }));
			layoutInit = true;
		});
		effect(() => {
			this.value();
			untracked(() => {
				this.updateTotalRecords();
				if (!this.lazy() && this.hasFilter()) this.filter(this.filterValue());
			});
		});
		let sortInit = false;
		effect(() => {
			this.sortField();
			this.sortOrder();
			if (sortInit) untracked(() => this.sort());
			sortInit = true;
		});
	}
	onAfterViewChecked() {
		this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
	}
	onInit() {
		if (this.lazy() && this.lazyLoadOnInit()) this.onLazyLoad.emit(this.createLazyLoadMetadata());
		this.initialized = true;
	}
	updateTotalRecords() {
		if (!this.lazy()) this.totalRecords.set(this.value()?.length ?? 0);
	}
	paginate(event) {
		this.first.set(event.first);
		this.rows.set(event.rows);
		if (this.lazy()) this.onLazyLoad.emit(this.createLazyLoadMetadata());
		this.onPage.emit({
			first: this.first(),
			rows: this.rows()
		});
	}
	sort() {
		this.first.set(0);
		if (this.lazy()) this.onLazyLoad.emit(this.createLazyLoadMetadata());
		else if (this.value()) {
			const sorted = [...this.value()].sort((data1, data2) => {
				let value1 = d(data1, this.sortField());
				let value2 = d(data2, this.sortField());
				let result;
				if (value1 == null && value2 != null) result = -1;
				else if (value1 != null && value2 == null) result = 1;
				else if (value1 == null && value2 == null) result = 0;
				else if (typeof value1 === "string" && typeof value2 === "string") result = value1.localeCompare(value2);
				else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
				return this.sortOrder() * result;
			});
			this.value.set(sorted);
			if (this.hasFilter()) this.filter(this.filterValue());
		}
		this.onSort.emit({
			sortField: this.sortField(),
			sortOrder: this.sortOrder()
		});
	}
	createLazyLoadMetadata() {
		return {
			first: this.first(),
			rows: this.rows(),
			sortField: this.sortField(),
			sortOrder: this.sortOrder()
		};
	}
	getBlockableElement() {
		return this.el.nativeElement.children[0];
	}
	filter(filter, filterMatchMode = "contains") {
		this.filterValue.set(filter);
		const val = this.value();
		if (val && val.length) {
			let searchFields = this.filterBy().split(",");
			const filtered = this.filterService.filter(val, searchFields, filter, filterMatchMode, this.filterLocale());
			if (filtered.length === val.length) this.filteredValue.set(null);
			else this.filteredValue.set(filtered);
			if (this.paginator()) {
				this.first.set(0);
				this.totalRecords.set(this.filteredValue() ? this.filteredValue().length : val.length);
			}
			this.cd.markForCheck();
		}
	}
	hasFilter() {
		const fv = this.filterValue();
		return fv && fv.trim().length > 0;
	}
	static ɵfac = function DataView_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || DataView)();
	};
	static ɵcmp = (function() {
		const _c0 = ["list"];
		const _c1 = ["grid"];
		const _c2 = ["header"];
		const _c3 = ["emptymessage"];
		const _c4 = ["footer"];
		const _c5 = ["paginatorleft"];
		const _c6 = ["paginatorright"];
		const _c7 = ["paginatordropdownitem"];
		const _c8 = ["loadingicon"];
		const _c9 = ["listicon"];
		const _c10 = ["gridicon"];
		const _c11 = [[["p-header"]], [["p-footer"]]];
		const _c12 = ["p-header", "p-footer"];
		const _c13 = () => ({ position: "top" });
		const _c14 = (a0) => ({ $implicit: a0 });
		const _c15 = () => ({ position: "bottom" });
		function DataView_Conditional_0_Conditional_2_Template(rf, ctx) {
			if (rf & 1) ɵɵelement(0, "i");
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(2);
				ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("loadingIcon"), "pi-spin" + ctx_r0.loadingIcon()));
			}
		}
		function DataView_Conditional_0_Conditional_3_2_ng_template_0_Template(rf, ctx) {}
		function DataView_Conditional_0_Conditional_3_2_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, DataView_Conditional_0_Conditional_3_2_ng_template_0_Template, 0, 0, "ng-template");
		}
		function DataView_Conditional_0_Conditional_3_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementContainerStart(0);
				ɵɵnamespaceSVG();
				ɵɵelement(1, "svg", 4);
				ɵɵtemplate(2, DataView_Conditional_0_Conditional_3_2_Template, 1, 0, null, 5);
				ɵɵelementContainerEnd();
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(2);
				ɵɵadvance();
				ɵɵclassMap(ctx_r0.cx("loadingIcon"));
				ɵɵproperty("pBind", ctx_r0.ptm("loadingIcon"))("spin", true);
				ɵɵadvance();
				ɵɵproperty("ngTemplateOutlet", ctx_r0.loadingicon());
			}
		}
		function DataView_Conditional_0_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "div", 2)(1, "div", 2);
				ɵɵconditionalCreate(2, DataView_Conditional_0_Conditional_2_Template, 1, 2, "i", 3)(3, DataView_Conditional_0_Conditional_3_Template, 3, 5, "ng-container");
				ɵɵelementEnd()();
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵclassMap(ctx_r0.cx("loading"));
				ɵɵproperty("pBind", ctx_r0.ptm("loading"));
				ɵɵadvance();
				ɵɵclassMap(ctx_r0.cx("loadingOverlay"));
				ɵɵproperty("pBind", ctx_r0.ptm("loadingOverlay"));
				ɵɵadvance();
				ɵɵconditional(ctx_r0.loadingIcon() ? 2 : 3);
			}
		}
		function DataView_Conditional_1_ng_container_2_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function DataView_Conditional_1_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "div", 2);
				ɵɵprojection(1);
				ɵɵtemplate(2, DataView_Conditional_1_ng_container_2_Template, 1, 0, "ng-container", 5);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵclassMap(ctx_r0.cx("header"));
				ɵɵproperty("pBind", ctx_r0.ptm("header"));
				ɵɵadvance(2);
				ɵɵproperty("ngTemplateOutlet", ctx_r0.headerTemplate());
			}
		}
		function DataView_Conditional_2_Template(rf, ctx) {
			if (rf & 1) {
				const _r2 = ɵɵgetCurrentView();
				ɵɵelementStart(0, "p-paginator", 6);
				ɵɵlistener("onPageChange", function DataView_Conditional_2_Template_p_paginator_onPageChange_0_listener($event) {
					ɵɵrestoreView(_r2);
					const ctx_r0 = ɵɵnextContext();
					return ɵɵresetView(ctx_r0.paginate($event));
				});
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("pcPaginator", ɵɵpureFunction0(20, _c13)), ctx_r0.paginatorStyleClass()));
				ɵɵproperty("rows", ctx_r0.rows())("first", ctx_r0.first())("totalRecords", ctx_r0.totalRecords())("pageLinkSize", ctx_r0.pageLinks())("alwaysShow", ctx_r0.alwaysShowPaginator())("rowsPerPageOptions", ctx_r0.rowsPerPageOptions())("appendTo", ctx_r0.paginatorDropdownAppendTo())("dropdownScrollHeight", ctx_r0.paginatorDropdownScrollHeight())("templateLeft", ctx_r0.paginatorleft())("templateRight", ctx_r0.paginatorright())("currentPageReportTemplate", ctx_r0.currentPageReportTemplate())("showFirstLastIcon", ctx_r0.showFirstLastIcon())("dropdownItemTemplate", ctx_r0.paginatordropdownitem())("showCurrentPageReport", ctx_r0.showCurrentPageReport())("showJumpToPageDropdown", ctx_r0.showJumpToPageDropdown())("showPageLinks", ctx_r0.showPageLinks())("pt", ctx_r0.ptm("pcPaginator"))("unstyled", ctx_r0.unstyled());
			}
		}
		function DataView_Conditional_4_ng_container_0_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function DataView_Conditional_4_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, DataView_Conditional_4_ng_container_0_Template, 1, 0, "ng-container", 7);
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵproperty("ngTemplateOutlet", ctx_r0.listTemplate())("ngTemplateOutletContext", ɵɵpureFunction1(2, _c14, ctx_r0.displayedItems()));
			}
		}
		function DataView_Conditional_5_ng_container_0_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function DataView_Conditional_5_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, DataView_Conditional_5_ng_container_0_Template, 1, 0, "ng-container", 7);
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵproperty("ngTemplateOutlet", ctx_r0.gridTemplate())("ngTemplateOutletContext", ɵɵpureFunction1(2, _c14, ctx_r0.displayedItems()));
			}
		}
		function DataView_Conditional_6_Conditional_1_Template(rf, ctx) {
			if (rf & 1) ɵɵtext(0);
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(2);
				ɵɵtextInterpolate1(" ", ctx_r0.emptyMessageLabel(), " ");
			}
		}
		function DataView_Conditional_6_Conditional_2_ng_container_0_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function DataView_Conditional_6_Conditional_2_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, DataView_Conditional_6_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 5);
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(2);
				ɵɵproperty("ngTemplateOutlet", ctx_r0.emptymessageTemplate());
			}
		}
		function DataView_Conditional_6_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "div", 2);
				ɵɵconditionalCreate(1, DataView_Conditional_6_Conditional_1_Template, 1, 1)(2, DataView_Conditional_6_Conditional_2_Template, 1, 1, "ng-container");
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵclassMap(ctx_r0.cx("emptyMessage"));
				ɵɵproperty("pBind", ctx_r0.ptm("emptyMessage"));
				ɵɵadvance();
				ɵɵconditional(!ctx_r0.emptymessageTemplate() ? 1 : 2);
			}
		}
		function DataView_Conditional_7_Template(rf, ctx) {
			if (rf & 1) {
				const _r3 = ɵɵgetCurrentView();
				ɵɵelementStart(0, "p-paginator", 6);
				ɵɵlistener("onPageChange", function DataView_Conditional_7_Template_p_paginator_onPageChange_0_listener($event) {
					ɵɵrestoreView(_r3);
					const ctx_r0 = ɵɵnextContext();
					return ɵɵresetView(ctx_r0.paginate($event));
				});
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("pcPaginator", ɵɵpureFunction0(20, _c15)), ctx_r0.paginatorStyleClass()));
				ɵɵproperty("rows", ctx_r0.rows())("first", ctx_r0.first())("totalRecords", ctx_r0.totalRecords())("pageLinkSize", ctx_r0.pageLinks())("alwaysShow", ctx_r0.alwaysShowPaginator())("rowsPerPageOptions", ctx_r0.rowsPerPageOptions())("appendTo", ctx_r0.paginatorDropdownAppendTo())("dropdownScrollHeight", ctx_r0.paginatorDropdownScrollHeight())("templateLeft", ctx_r0.paginatorleft())("templateRight", ctx_r0.paginatorright())("currentPageReportTemplate", ctx_r0.currentPageReportTemplate())("showFirstLastIcon", ctx_r0.showFirstLastIcon())("dropdownItemTemplate", ctx_r0.paginatordropdownitem())("showCurrentPageReport", ctx_r0.showCurrentPageReport())("showJumpToPageDropdown", ctx_r0.showJumpToPageDropdown())("showPageLinks", ctx_r0.showPageLinks())("pt", ctx_r0.ptm("pcPaginator"))("unstyled", ctx_r0.unstyled());
			}
		}
		function DataView_Conditional_8_ng_container_2_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function DataView_Conditional_8_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "div", 2);
				ɵɵprojection(1, 1);
				ɵɵtemplate(2, DataView_Conditional_8_ng_container_2_Template, 1, 0, "ng-container", 5);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵclassMap(ctx_r0.cx("footer"));
				ɵɵproperty("pBind", ctx_r0.ptm("footer"));
				ɵɵadvance(2);
				ɵɵproperty("ngTemplateOutlet", ctx_r0.footerTemplate());
			}
		}
		return /*@__PURE__*/ ɵɵdefineComponent({
			type: DataView,
			selectors: [["p-dataview"], ["p-data-view"]],
			contentQueries: function DataView_ContentQueries(rf, ctx, dirIndex) {
				if (rf & 1) ɵɵcontentQuerySignal(dirIndex, ctx.listTemplate, _c0, 4)(dirIndex, ctx.gridTemplate, _c1, 4)(dirIndex, ctx.headerTemplate, _c2, 4)(dirIndex, ctx.emptymessageTemplate, _c3, 4)(dirIndex, ctx.footerTemplate, _c4, 4)(dirIndex, ctx.paginatorleft, _c5, 4)(dirIndex, ctx.paginatorright, _c6, 4)(dirIndex, ctx.paginatordropdownitem, _c7, 4)(dirIndex, ctx.loadingicon, _c8, 4)(dirIndex, ctx.listicon, _c9, 4)(dirIndex, ctx.gridicon, _c10, 4)(dirIndex, ctx.header, Header, 4)(dirIndex, ctx.footer, Footer, 4);
				if (rf & 2) ɵɵqueryAdvance(13);
			},
			hostVars: 2,
			hostBindings: function DataView_HostBindings(rf, ctx) {
				if (rf & 2) ɵɵclassMap(ctx.cx("root"));
			},
			inputs: {
				paginator: [1, "paginator"],
				rows: [1, "rows"],
				totalRecords: [1, "totalRecords"],
				pageLinks: [1, "pageLinks"],
				rowsPerPageOptions: [1, "rowsPerPageOptions"],
				paginatorPosition: [1, "paginatorPosition"],
				paginatorStyleClass: [1, "paginatorStyleClass"],
				alwaysShowPaginator: [1, "alwaysShowPaginator"],
				paginatorDropdownAppendTo: [1, "paginatorDropdownAppendTo"],
				paginatorDropdownScrollHeight: [1, "paginatorDropdownScrollHeight"],
				currentPageReportTemplate: [1, "currentPageReportTemplate"],
				showCurrentPageReport: [1, "showCurrentPageReport"],
				showJumpToPageDropdown: [1, "showJumpToPageDropdown"],
				showFirstLastIcon: [1, "showFirstLastIcon"],
				showPageLinks: [1, "showPageLinks"],
				lazy: [1, "lazy"],
				lazyLoadOnInit: [1, "lazyLoadOnInit"],
				emptyMessage: [1, "emptyMessage"],
				gridStyleClass: [1, "gridStyleClass"],
				trackBy: [1, "trackBy"],
				filterBy: [1, "filterBy"],
				filterLocale: [1, "filterLocale"],
				loading: [1, "loading"],
				loadingIcon: [1, "loadingIcon"],
				first: [1, "first"],
				sortField: [1, "sortField"],
				sortOrder: [1, "sortOrder"],
				value: [1, "value"],
				layout: [1, "layout"]
			},
			outputs: {
				rows: "rowsChange",
				totalRecords: "totalRecordsChange",
				first: "firstChange",
				value: "valueChange",
				onLazyLoad: "onLazyLoad",
				onPage: "onPage",
				onSort: "onSort",
				onChangeLayout: "onChangeLayout"
			},
			features: [
				ɵɵProvidersFeature([
					DataViewStyle,
					{
						provide: DATAVIEW_INSTANCE,
						useExisting: DataView
					},
					{
						provide: PARENT_INSTANCE,
						useExisting: DataView
					}
				]),
				ɵɵHostDirectivesFeature([Bind]),
				ɵɵInheritDefinitionFeature
			],
			ngContentSelectors: _c12,
			decls: 9,
			vars: 11,
			consts: [
				[
					3,
					"pBind",
					"class"
				],
				[
					3,
					"rows",
					"first",
					"totalRecords",
					"pageLinkSize",
					"alwaysShow",
					"rowsPerPageOptions",
					"appendTo",
					"dropdownScrollHeight",
					"templateLeft",
					"templateRight",
					"currentPageReportTemplate",
					"showFirstLastIcon",
					"dropdownItemTemplate",
					"showCurrentPageReport",
					"showJumpToPageDropdown",
					"showPageLinks",
					"class",
					"pt",
					"unstyled"
				],
				[3, "pBind"],
				[3, "class"],
				[
					"data-p-icon",
					"spinner",
					3,
					"pBind",
					"spin"
				],
				[4, "ngTemplateOutlet"],
				[
					3,
					"onPageChange",
					"rows",
					"first",
					"totalRecords",
					"pageLinkSize",
					"alwaysShow",
					"rowsPerPageOptions",
					"appendTo",
					"dropdownScrollHeight",
					"templateLeft",
					"templateRight",
					"currentPageReportTemplate",
					"showFirstLastIcon",
					"dropdownItemTemplate",
					"showCurrentPageReport",
					"showJumpToPageDropdown",
					"showPageLinks",
					"pt",
					"unstyled"
				],
				[
					4,
					"ngTemplateOutlet",
					"ngTemplateOutletContext"
				]
			],
			template: function DataView_Template(rf, ctx) {
				if (rf & 1) {
					ɵɵprojectionDef(_c11);
					ɵɵconditionalCreate(0, DataView_Conditional_0_Template, 4, 7, "div", 0);
					ɵɵconditionalCreate(1, DataView_Conditional_1_Template, 3, 4, "div", 0);
					ɵɵconditionalCreate(2, DataView_Conditional_2_Template, 1, 21, "p-paginator", 1);
					ɵɵelementStart(3, "div", 2);
					ɵɵconditionalCreate(4, DataView_Conditional_4_Template, 1, 4, "ng-container");
					ɵɵconditionalCreate(5, DataView_Conditional_5_Template, 1, 4, "ng-container");
					ɵɵconditionalCreate(6, DataView_Conditional_6_Template, 3, 4, "div", 0);
					ɵɵelementEnd();
					ɵɵconditionalCreate(7, DataView_Conditional_7_Template, 1, 21, "p-paginator", 1);
					ɵɵconditionalCreate(8, DataView_Conditional_8_Template, 3, 4, "div", 0);
				}
				if (rf & 2) {
					ɵɵconditional(ctx.loading() ? 0 : -1);
					ɵɵadvance();
					ɵɵconditional(ctx.showHeader() ? 1 : -1);
					ɵɵadvance();
					ɵɵconditional(ctx.showTopPaginator() ? 2 : -1);
					ɵɵadvance();
					ɵɵclassMap(ctx.cx("content"));
					ɵɵproperty("pBind", ctx.ptm("content"));
					ɵɵadvance();
					ɵɵconditional(ctx.isListLayout() ? 4 : -1);
					ɵɵadvance();
					ɵɵconditional(ctx.isGridLayout() ? 5 : -1);
					ɵɵadvance();
					ɵɵconditional(ctx.showEmptyMessage() ? 6 : -1);
					ɵɵadvance();
					ɵɵconditional(ctx.showBottomPaginator() ? 7 : -1);
					ɵɵadvance();
					ɵɵconditional(ctx.showFooter() ? 8 : -1);
				}
			},
			dependencies: [
				NgTemplateOutlet,
				PaginatorModule,
				Paginator,
				Spinner,
				Bind
			],
			encapsulation: 2
		});
	})();
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataView, [{
		type: Component,
		args: [{
			selector: "p-dataview, p-data-view",
			standalone: true,
			imports: [
				NgTemplateOutlet,
				PaginatorModule,
				Spinner,
				Bind
			],
			template: `
        @if (loading()) {
            <div [pBind]="ptm('loading')" [class]="cx('loading')">
                <div [pBind]="ptm('loadingOverlay')" [class]="cx('loadingOverlay')">
                    @if (loadingIcon()) {
                        <i [class]="cn(cx('loadingIcon'), 'pi-spin' + loadingIcon())"></i>
                    } @else {
                        <ng-container>
                            <svg [pBind]="ptm('loadingIcon')" data-p-icon="spinner" [class]="cx('loadingIcon')" [spin]="true" />
                            <ng-template *ngTemplateOutlet="loadingicon()"></ng-template>
                        </ng-container>
                    }
                </div>
            </div>
        }
        @if (showHeader()) {
            <div [pBind]="ptm('header')" [class]="cx('header')">
                <ng-content select="p-header" />
                <ng-container *ngTemplateOutlet="headerTemplate()"></ng-container>
            </div>
        }
        @if (showTopPaginator()) {
            <p-paginator
                [rows]="rows()"
                [first]="first()"
                [totalRecords]="totalRecords()"
                [pageLinkSize]="pageLinks()"
                [alwaysShow]="alwaysShowPaginator()"
                (onPageChange)="paginate($event)"
                [rowsPerPageOptions]="rowsPerPageOptions()"
                [appendTo]="paginatorDropdownAppendTo()"
                [dropdownScrollHeight]="paginatorDropdownScrollHeight()"
                [templateLeft]="paginatorleft()"
                [templateRight]="paginatorright()"
                [currentPageReportTemplate]="currentPageReportTemplate()"
                [showFirstLastIcon]="showFirstLastIcon()"
                [dropdownItemTemplate]="paginatordropdownitem()"
                [showCurrentPageReport]="showCurrentPageReport()"
                [showJumpToPageDropdown]="showJumpToPageDropdown()"
                [showPageLinks]="showPageLinks()"
                [class]="cn(cx('pcPaginator', { position: 'top' }), paginatorStyleClass())"
                [pt]="ptm('pcPaginator')"
                [unstyled]="unstyled()"
            ></p-paginator>
        }
        <div [pBind]="ptm('content')" [class]="cx('content')">
            @if (isListLayout()) {
                <ng-container
                    *ngTemplateOutlet="
                        listTemplate();
                        context: {
                            $implicit: displayedItems()
                        }
                    "
                ></ng-container>
            }
            @if (isGridLayout()) {
                <ng-container
                    *ngTemplateOutlet="
                        gridTemplate();
                        context: {
                            $implicit: displayedItems()
                        }
                    "
                ></ng-container>
            }
            @if (showEmptyMessage()) {
                <div [pBind]="ptm('emptyMessage')" [class]="cx('emptyMessage')">
                    @if (!emptymessageTemplate()) {
                        {{ emptyMessageLabel() }}
                    } @else {
                        <ng-container *ngTemplateOutlet="emptymessageTemplate()"></ng-container>
                    }
                </div>
            }
        </div>
        @if (showBottomPaginator()) {
            <p-paginator
                [rows]="rows()"
                [first]="first()"
                [totalRecords]="totalRecords()"
                [pageLinkSize]="pageLinks()"
                [alwaysShow]="alwaysShowPaginator()"
                (onPageChange)="paginate($event)"
                [rowsPerPageOptions]="rowsPerPageOptions()"
                [appendTo]="paginatorDropdownAppendTo()"
                [dropdownScrollHeight]="paginatorDropdownScrollHeight()"
                [templateLeft]="paginatorleft()"
                [templateRight]="paginatorright()"
                [currentPageReportTemplate]="currentPageReportTemplate()"
                [showFirstLastIcon]="showFirstLastIcon()"
                [dropdownItemTemplate]="paginatordropdownitem()"
                [showCurrentPageReport]="showCurrentPageReport()"
                [showJumpToPageDropdown]="showJumpToPageDropdown()"
                [showPageLinks]="showPageLinks()"
                [class]="cn(cx('pcPaginator', { position: 'bottom' }), paginatorStyleClass())"
                [pt]="ptm('pcPaginator')"
                [unstyled]="unstyled()"
            ></p-paginator>
        }
        @if (showFooter()) {
            <div [pBind]="ptm('footer')" [class]="cx('footer')">
                <ng-content select="p-footer" />
                <ng-container *ngTemplateOutlet="footerTemplate()"></ng-container>
            </div>
        }
    `,
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			providers: [
				DataViewStyle,
				{
					provide: DATAVIEW_INSTANCE,
					useExisting: DataView
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: DataView
				}
			],
			host: { "[class]": "cx('root')" },
			hostDirectives: [Bind]
		}]
	}], () => [], {
		paginator: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "paginator",
				required: false
			}]
		}],
		rows: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "rows",
				required: false
			}]
		}, {
			type: Output,
			args: ["rowsChange"]
		}],
		totalRecords: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "totalRecords",
				required: false
			}]
		}, {
			type: Output,
			args: ["totalRecordsChange"]
		}],
		pageLinks: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pageLinks",
				required: false
			}]
		}],
		rowsPerPageOptions: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "rowsPerPageOptions",
				required: false
			}]
		}],
		paginatorPosition: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "paginatorPosition",
				required: false
			}]
		}],
		paginatorStyleClass: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "paginatorStyleClass",
				required: false
			}]
		}],
		alwaysShowPaginator: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "alwaysShowPaginator",
				required: false
			}]
		}],
		paginatorDropdownAppendTo: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "paginatorDropdownAppendTo",
				required: false
			}]
		}],
		paginatorDropdownScrollHeight: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "paginatorDropdownScrollHeight",
				required: false
			}]
		}],
		currentPageReportTemplate: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "currentPageReportTemplate",
				required: false
			}]
		}],
		showCurrentPageReport: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "showCurrentPageReport",
				required: false
			}]
		}],
		showJumpToPageDropdown: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "showJumpToPageDropdown",
				required: false
			}]
		}],
		showFirstLastIcon: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "showFirstLastIcon",
				required: false
			}]
		}],
		showPageLinks: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "showPageLinks",
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
		lazyLoadOnInit: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "lazyLoadOnInit",
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
		gridStyleClass: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "gridStyleClass",
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
		filterBy: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "filterBy",
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
		loading: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "loading",
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
		first: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "first",
				required: false
			}]
		}, {
			type: Output,
			args: ["firstChange"]
		}],
		sortField: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "sortField",
				required: false
			}]
		}],
		sortOrder: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "sortOrder",
				required: false
			}]
		}],
		value: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "value",
				required: false
			}]
		}, {
			type: Output,
			args: ["valueChange"]
		}],
		layout: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "layout",
				required: false
			}]
		}],
		onLazyLoad: [{
			type: Output,
			args: ["onLazyLoad"]
		}],
		onPage: [{
			type: Output,
			args: ["onPage"]
		}],
		onSort: [{
			type: Output,
			args: ["onSort"]
		}],
		onChangeLayout: [{
			type: Output,
			args: ["onChangeLayout"]
		}],
		listTemplate: [{
			type: ContentChild,
			args: ["list", {
				descendants: false,
				isSignal: true
			}]
		}],
		gridTemplate: [{
			type: ContentChild,
			args: ["grid", {
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
		emptymessageTemplate: [{
			type: ContentChild,
			args: ["emptymessage", {
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
		paginatorleft: [{
			type: ContentChild,
			args: ["paginatorleft", {
				descendants: false,
				isSignal: true
			}]
		}],
		paginatorright: [{
			type: ContentChild,
			args: ["paginatorright", {
				descendants: false,
				isSignal: true
			}]
		}],
		paginatordropdownitem: [{
			type: ContentChild,
			args: ["paginatordropdownitem", {
				descendants: false,
				isSignal: true
			}]
		}],
		loadingicon: [{
			type: ContentChild,
			args: ["loadingicon", {
				descendants: false,
				isSignal: true
			}]
		}],
		listicon: [{
			type: ContentChild,
			args: ["listicon", {
				descendants: false,
				isSignal: true
			}]
		}],
		gridicon: [{
			type: ContentChild,
			args: ["gridicon", {
				descendants: false,
				isSignal: true
			}]
		}],
		header: [{
			type: ContentChild,
			args: [forwardRef(() => Header), {
				descendants: false,
				isSignal: true
			}]
		}],
		footer: [{
			type: ContentChild,
			args: [forwardRef(() => Footer), {
				descendants: false,
				isSignal: true
			}]
		}]
	});
})();
var DataViewModule = class DataViewModule {
	static ɵfac = function DataViewModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || DataViewModule)();
	};
	static ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({
		type: DataViewModule,
		imports: [DataView],
		exports: [DataView]
	});
	static ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ imports: [DataView] });
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataViewModule, [{
		type: NgModule,
		args: [{
			imports: [DataView],
			exports: [DataView]
		}]
	}], null, null);
})();
export { DataView, DataViewClasses, DataViewModule, DataViewStyle };
