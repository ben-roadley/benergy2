import { U as InjectionToken, Ui as signal, _a as ɵɵnamespaceSVG, c as computed, la as ɵɵdefineInjectable, ua as ɵɵdefineInjector, va as ɵɵresetView, wr as inject, xn as effect, ya as ɵɵrestoreView } from "./_resource-chunk-B6oSsbEv.js";
import { i as isPlatformBrowser } from "./common-BBp9OMOF.js";
import { A as contentChild, Ai as setClassMetadata, Bo as ɵɵnextContext, Ds as ɵɵstyleMap, Ga as ɵɵdefineNgModule, Gt as ChangeDetectionStrategy, Ji as ɵɵInheritDefinitionFeature, Jt as Component, Nn as NgModule, O as booleanAttribute, Ro as ɵɵlistener, S as ViewChild, Sn as Input, Ua as ɵɵdefineComponent, Wa as ɵɵdefineDirective, X as input, Xi as ɵɵProvidersFeature, Ya as ɵɵdomElement, Yo as ɵɵproperty, Zi as ɵɵadvance, Zs as ɵɵviewQuerySignal, _o as ɵɵgetInheritedFactory, aa as ɵɵattribute, ao as ɵɵelementContainer, at as output, ca as ɵɵclassMap, co as ɵɵelementEnd, da as ɵɵconditional, ds as ɵɵrepeaterCreate, go as ɵɵgetCurrentView, gs as ɵɵresolveDocument, gt as viewChild, ha as ɵɵcontentQuerySignal, hn as HostListener, i as ContentChild, io as ɵɵelement, js as ɵɵtemplate, lo as ɵɵelementStart, os as ɵɵqueryAdvance, pa as ɵɵconditionalCreate, pr as ViewEncapsulation, qi as ɵɵHostDirectivesFeature, un as Directive, us as ɵɵrepeater, xn as Injectable, zn as Output } from "./core-D4dczhTZ.js";
import { r as NgTemplateOutlet } from "./_common_module-chunk-CF6aUJZ1.js";
import "./dist-2ljAlN4l.js";
import { SharedModule } from "./primeng_api.js";
import { n as PARENT_INSTANCE, t as BaseComponent } from "./primeng-basecomponent-C8ezCQ4r.js";
import { Bind, BindModule } from "./primeng_bind.js";
import { t as CoreIcon } from "./primeicons-angular-core-DpYT0758.js";
import { i as Times, n as MotionDirective, r as MotionModule, t as Motion } from "./primeng-motion-DBtpchV9.js";
import { I as Z, N as Wt, a as zindexutils_default, g as Ct, h as Bt, j as Vt } from "./primeng-utils-CVbKD6Wd.js";
import { s as BaseStyle } from "./primeng-config-Db_bbJUd.js";
// node_modules/primeng/fesm2022/primeng-focustrap.mjs
var FocusTrap = class FocusTrap extends BaseComponent {
	pFocusTrapDisabled = input(false, {
		...ngDevMode ? { debugName: "pFocusTrapDisabled" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	firstHiddenFocusableElement;
	lastHiddenFocusableElement;
	constructor() {
		super();
		effect(() => {
			const disabled = this.pFocusTrapDisabled();
			if (isPlatformBrowser(this.platformId)) {
				if (disabled) this.removeHiddenFocusableElements();
				else if (!this.firstHiddenFocusableElement && !this.lastHiddenFocusableElement) this.createHiddenFocusableElements();
			}
		});
	}
	onInit() {
		if (isPlatformBrowser(this.platformId) && !this.pFocusTrapDisabled()) {
			if (!this.firstHiddenFocusableElement && !this.lastHiddenFocusableElement) this.createHiddenFocusableElements();
		}
	}
	removeHiddenFocusableElements() {
		if (this.firstHiddenFocusableElement && this.firstHiddenFocusableElement.parentNode) this.firstHiddenFocusableElement.parentNode.removeChild(this.firstHiddenFocusableElement);
		if (this.lastHiddenFocusableElement && this.lastHiddenFocusableElement.parentNode) this.lastHiddenFocusableElement.parentNode.removeChild(this.lastHiddenFocusableElement);
		this.firstHiddenFocusableElement = null;
		this.lastHiddenFocusableElement = null;
	}
	getComputedSelector(selector) {
		return this.psel(`:not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])${selector ?? ""}`);
	}
	createHiddenFocusableElements() {
		const tabindex = "0";
		const createFocusableElement = (onFocus) => Z("span", {
			class: this.pcn("p-hidden-accessible p-hidden-focusable"),
			tabindex,
			role: "presentation",
			"aria-hidden": true,
			"data-p-hidden-accessible": true,
			"data-p-hidden-focusable": true,
			onFocus: onFocus?.bind(this)
		});
		this.firstHiddenFocusableElement = createFocusableElement(this.onFirstHiddenElementFocus);
		this.lastHiddenFocusableElement = createFocusableElement(this.onLastHiddenElementFocus);
		this.firstHiddenFocusableElement.setAttribute("data-pc-section", "firstfocusableelement");
		this.lastHiddenFocusableElement.setAttribute("data-pc-section", "lastfocusableelement");
		this.el.nativeElement.prepend(this.firstHiddenFocusableElement);
		this.el.nativeElement.append(this.lastHiddenFocusableElement);
	}
	onFirstHiddenElementFocus(event) {
		const { currentTarget, relatedTarget } = event;
		const focusableElement = relatedTarget === this.lastHiddenFocusableElement || !this.el.nativeElement?.contains(relatedTarget) ? Bt(currentTarget.parentElement, this.psel(":not(.p-hidden-focusable)")) : this.lastHiddenFocusableElement;
		Wt(focusableElement);
	}
	onLastHiddenElementFocus(event) {
		const { currentTarget, relatedTarget } = event;
		const focusableElement = relatedTarget === this.firstHiddenFocusableElement || !this.el.nativeElement?.contains(relatedTarget) ? Vt(currentTarget.parentElement, this.psel(":not(.p-hidden-focusable)")) : this.firstHiddenFocusableElement;
		Wt(focusableElement);
	}
	static ɵfac = function FocusTrap_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || FocusTrap)();
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: FocusTrap,
		selectors: [[
			"",
			"pFocusTrap",
			""
		]],
		inputs: { pFocusTrapDisabled: [1, "pFocusTrapDisabled"] },
		features: [ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrap, [{
		type: Directive,
		args: [{
			selector: "[pFocusTrap]",
			standalone: true
		}]
	}], () => [], { pFocusTrapDisabled: [{
		type: Input,
		args: [{
			isSignal: true,
			alias: "pFocusTrapDisabled",
			required: false
		}]
	}] });
})();
var FocusTrapModule = class FocusTrapModule {
	static ɵfac = function FocusTrapModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || FocusTrapModule)();
	};
	static ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({
		type: FocusTrapModule,
		imports: [FocusTrap],
		exports: [FocusTrap]
	});
	static ɵinj = /*@__PURE__*/ ɵɵdefineInjector({});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrapModule, [{
		type: NgModule,
		args: [{
			imports: [FocusTrap],
			exports: [FocusTrap]
		}]
	}], null, null);
})();
// node_modules/@primeicons/core/dist/esm/icons/eye.mjs
var C = {
	name: "eye",
	meta: { tags: [
		"eye",
		"view",
		"see",
		"look",
		"watch"
	] },
	svg: {
		xmlns: "http://www.w3.org/2000/svg",
		width: 20,
		height: 20,
		viewBox: "0 0 20 20",
		fill: "none"
	},
	nodes: [["path", {
		d: "M10 3.25C13.0062 3.25008 15.1939 4.92099 16.5908 6.50391C17.2931 7.2997 17.8141 8.09259 18.1592 8.68555C18.3321 8.98266 18.462 9.2321 18.5498 9.40918C18.5937 9.49765 18.6274 9.56828 18.6504 9.61816C18.6619 9.64298 18.6714 9.66258 18.6778 9.67676C18.6809 9.68379 18.6827 9.69008 18.6846 9.69434C18.6855 9.69632 18.6869 9.69786 18.6875 9.69922L18.6885 9.70117V9.70215C18.6885 9.7025 18.6793 9.70678 18 10C18.6793 10.2932 18.6885 10.2975 18.6885 10.2979V10.2988L18.6875 10.3008C18.6869 10.3021 18.6855 10.3037 18.6846 10.3057C18.6827 10.3099 18.6809 10.3162 18.6778 10.3232C18.6714 10.3374 18.6619 10.357 18.6504 10.3818C18.6274 10.4317 18.5937 10.5024 18.5498 10.5908C18.462 10.7679 18.3321 11.0173 18.1592 11.3145C17.8141 11.9074 17.2931 12.7003 16.5908 13.4961C15.1939 15.079 13.0062 16.7499 10 16.75C6.99381 16.75 4.80615 15.079 3.40917 13.4961C2.70689 12.7003 2.18589 11.9074 1.84081 11.3145C1.66792 11.0173 1.53804 10.7679 1.45019 10.5908C1.40631 10.5024 1.37264 10.4317 1.3496 10.3818C1.33814 10.357 1.32859 10.3374 1.32226 10.3232C1.31912 10.3162 1.31728 10.3099 1.31542 10.3057C1.31455 10.3037 1.31311 10.3021 1.31249 10.3008L1.31151 10.2988V10.2979C1.31398 10.2965 1.35491 10.2785 1.99999 10C1.35491 9.72154 1.31398 9.70354 1.31151 9.70215V9.70117L1.31249 9.69922C1.31311 9.69786 1.31455 9.69632 1.31542 9.69434C1.31728 9.69007 1.31912 9.68378 1.32226 9.67676C1.32859 9.66257 1.33814 9.64297 1.3496 9.61816C1.37264 9.56827 1.40631 9.49764 1.45019 9.40918C1.53804 9.23209 1.66792 8.98265 1.84081 8.68555C2.18589 8.09258 2.70689 7.2997 3.40917 6.50391C4.80615 4.92098 6.99381 3.25 10 3.25ZM10 4.75C7.59635 4.75 5.78373 6.0791 4.5332 7.49609C3.91198 8.20004 3.44728 8.90751 3.13769 9.43945C3.00747 9.66322 2.90566 9.85501 2.83202 10C2.90566 10.145 3.00747 10.3368 3.13769 10.5605C3.44728 11.0925 3.91198 11.8 4.5332 12.5039C5.78373 13.9209 7.59635 15.25 10 15.25C12.4036 15.2499 14.2163 13.9209 15.4668 12.5039C16.088 11.7999 16.5527 11.0925 16.8623 10.5605C16.9924 10.337 17.0934 10.1449 17.167 10C17.0934 9.85507 16.9924 9.66302 16.8623 9.43945C16.5527 8.90752 16.088 8.20005 15.4668 7.49609C14.2163 6.0791 12.4036 4.75008 10 4.75ZM10 6.75C11.7948 6.75012 13.25 8.20515 13.25 10C13.25 11.7949 11.7948 13.2499 10 13.25C8.20508 13.25 6.75 11.7949 6.75 10C6.75 8.20507 8.20508 6.75 10 6.75ZM10 8.25C9.03351 8.25 8.25 9.0335 8.25 10C8.25 10.9665 9.03351 11.75 10 11.75C10.9664 11.7499 11.75 10.9664 11.75 10C11.75 9.03358 10.9664 8.25012 10 8.25ZM1.99999 10L1.31151 10.2969C1.22978 10.1073 1.22978 9.89267 1.31151 9.70312L1.99999 10ZM18.6885 9.70312C18.7702 9.89262 18.7702 10.1074 18.6885 10.2969L18 10L18.6885 9.70312Z",
		fill: "currentColor",
		key: "buowgx"
	}]]
};
// node_modules/@primeicons/angular/fesm2022/primeicons-angular-eye.mjs
var Eye = class Eye extends CoreIcon {
	constructor() {
		super();
		this._icon = C;
	}
	static ɵfac = function Eye_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || Eye)();
	};
	static ɵcmp = (function() {
		const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
		function Eye_For_1_Case_0_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "path");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Eye_For_1_Case_1_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "circle");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Eye_For_1_Case_2_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "rect");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Eye_For_1_Case_3_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "line");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Eye_For_1_Case_4_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "polyline");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Eye_For_1_Case_5_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "polygon");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Eye_For_1_Case_6_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "ellipse");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Eye_For_1_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, Eye_For_1_Case_0_Template, 1, 9, "path")(1, Eye_For_1_Case_1_Template, 1, 6, "circle")(2, Eye_For_1_Case_2_Template, 1, 9, "rect")(3, Eye_For_1_Case_3_Template, 1, 7, "line")(4, Eye_For_1_Case_4_Template, 1, 4, "polyline")(5, Eye_For_1_Case_5_Template, 1, 4, "polygon")(6, Eye_For_1_Case_6_Template, 1, 7, "ellipse");
			if (rf & 2) {
				let tmp_10_0 = void 0;
				const node_r1 = ctx.$implicit;
				ɵɵconditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
			}
		}
		return /*@__PURE__*/ ɵɵdefineComponent({
			type: Eye,
			selectors: [[
				"svg",
				"data-p-icon",
				"eye"
			]],
			features: [ɵɵInheritDefinitionFeature],
			decls: 2,
			vars: 0,
			template: function Eye_Template(rf, ctx) {
				if (rf & 1) ɵɵrepeaterCreate(0, Eye_For_1_Template, 7, 1, null, null, _forTrack0);
				if (rf & 2) ɵɵrepeater(ctx.iconNodes());
			},
			encapsulation: 2,
			changeDetection: 1
		});
	})();
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Eye, [{
		type: Component,
		args: [{
			selector: "svg[data-p-icon=\"eye\"]",
			standalone: true,
			template: "\n        @for (node of iconNodes(); track node[1]['key'] || $index) {\n            @switch (node[0]) {\n                @case ('path') {\n                    <svg:path\n                        [attr.d]=\"node[1]['d']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.fill-rule]=\"node[1]['fillRule']\"\n                        [attr.clip-rule]=\"node[1]['clipRule']\"\n                        [attr.stroke]=\"node[1]['stroke']\"\n                        [attr.stroke-width]=\"node[1]['strokeWidth']\"\n                        [attr.stroke-opacity]=\"node[1]['strokeOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('circle') {\n                    <svg:circle\n                        [attr.cx]=\"node[1]['cx']\"\n                        [attr.cy]=\"node[1]['cy']\"\n                        [attr.r]=\"node[1]['r']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('rect') {\n                    <svg:rect\n                        [attr.x]=\"node[1]['x']\"\n                        [attr.y]=\"node[1]['y']\"\n                        [attr.width]=\"node[1]['width']\"\n                        [attr.height]=\"node[1]['height']\"\n                        [attr.rx]=\"node[1]['rx']\"\n                        [attr.ry]=\"node[1]['ry']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('line') {\n                    <svg:line\n                        [attr.x1]=\"node[1]['x1']\"\n                        [attr.y1]=\"node[1]['y1']\"\n                        [attr.x2]=\"node[1]['x2']\"\n                        [attr.y2]=\"node[1]['y2']\"\n                        [attr.stroke]=\"node[1]['stroke']\"\n                        [attr.stroke-opacity]=\"node[1]['strokeOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('polyline') {\n                    <svg:polyline\n                        [attr.points]=\"node[1]['points']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('polygon') {\n                    <svg:polygon\n                        [attr.points]=\"node[1]['points']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('ellipse') {\n                    <svg:ellipse\n                        [attr.cx]=\"node[1]['cx']\"\n                        [attr.cy]=\"node[1]['cy']\"\n                        [attr.rx]=\"node[1]['rx']\"\n                        [attr.ry]=\"node[1]['ry']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n            }\n        }\n"
		}]
	}], () => [], null);
})();
// node_modules/@primeicons/core/dist/esm/icons/refresh.mjs
var e$3 = {
	name: "refresh",
	meta: { tags: [
		"refresh",
		"update",
		"reload",
		"renew",
		"repeat"
	] },
	svg: {
		xmlns: "http://www.w3.org/2000/svg",
		width: 20,
		height: 20,
		viewBox: "0 0 20 20",
		fill: "none"
	},
	nodes: [["path", {
		d: "M9.46973 1.46973C9.76262 1.17684 10.2374 1.17684 10.5303 1.46973L13.5303 4.46973C13.8231 4.76263 13.8232 5.23739 13.5303 5.53028L10.5303 8.53028C10.2374 8.82313 9.76261 8.82313 9.46973 8.53028C9.17684 8.23739 9.17686 7.76263 9.46973 7.46973L11.1895 5.75H10C6.82421 5.75 4.25 8.32422 4.25 11.5C4.25003 14.6758 6.82423 17.25 10 17.25C13.1758 17.25 15.75 14.6758 15.75 11.5C15.75 11.0858 16.0858 10.75 16.5 10.75C16.9142 10.75 17.25 11.0858 17.25 11.5C17.25 15.5042 14.0042 18.75 10 18.75C5.99581 18.75 2.75003 15.5042 2.75 11.5C2.75 7.49579 5.99579 4.25 10 4.25H11.1895L9.46973 2.53028C9.17684 2.23739 9.17686 1.76263 9.46973 1.46973Z",
		fill: "currentColor",
		key: "9h86tx"
	}]]
};
// node_modules/@primeicons/angular/fesm2022/primeicons-angular-refresh.mjs
var Refresh = class Refresh extends CoreIcon {
	constructor() {
		super();
		this._icon = e$3;
	}
	static ɵfac = function Refresh_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || Refresh)();
	};
	static ɵcmp = (function() {
		const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
		function Refresh_For_1_Case_0_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "path");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Refresh_For_1_Case_1_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "circle");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Refresh_For_1_Case_2_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "rect");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Refresh_For_1_Case_3_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "line");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Refresh_For_1_Case_4_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "polyline");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Refresh_For_1_Case_5_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "polygon");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Refresh_For_1_Case_6_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "ellipse");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Refresh_For_1_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, Refresh_For_1_Case_0_Template, 1, 9, "path")(1, Refresh_For_1_Case_1_Template, 1, 6, "circle")(2, Refresh_For_1_Case_2_Template, 1, 9, "rect")(3, Refresh_For_1_Case_3_Template, 1, 7, "line")(4, Refresh_For_1_Case_4_Template, 1, 4, "polyline")(5, Refresh_For_1_Case_5_Template, 1, 4, "polygon")(6, Refresh_For_1_Case_6_Template, 1, 7, "ellipse");
			if (rf & 2) {
				let tmp_10_0 = void 0;
				const node_r1 = ctx.$implicit;
				ɵɵconditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
			}
		}
		return /*@__PURE__*/ ɵɵdefineComponent({
			type: Refresh,
			selectors: [[
				"svg",
				"data-p-icon",
				"refresh"
			]],
			features: [ɵɵInheritDefinitionFeature],
			decls: 2,
			vars: 0,
			template: function Refresh_Template(rf, ctx) {
				if (rf & 1) ɵɵrepeaterCreate(0, Refresh_For_1_Template, 7, 1, null, null, _forTrack0);
				if (rf & 2) ɵɵrepeater(ctx.iconNodes());
			},
			encapsulation: 2,
			changeDetection: 1
		});
	})();
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Refresh, [{
		type: Component,
		args: [{
			selector: "svg[data-p-icon=\"refresh\"]",
			standalone: true,
			template: "\n        @for (node of iconNodes(); track node[1]['key'] || $index) {\n            @switch (node[0]) {\n                @case ('path') {\n                    <svg:path\n                        [attr.d]=\"node[1]['d']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.fill-rule]=\"node[1]['fillRule']\"\n                        [attr.clip-rule]=\"node[1]['clipRule']\"\n                        [attr.stroke]=\"node[1]['stroke']\"\n                        [attr.stroke-width]=\"node[1]['strokeWidth']\"\n                        [attr.stroke-opacity]=\"node[1]['strokeOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('circle') {\n                    <svg:circle\n                        [attr.cx]=\"node[1]['cx']\"\n                        [attr.cy]=\"node[1]['cy']\"\n                        [attr.r]=\"node[1]['r']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('rect') {\n                    <svg:rect\n                        [attr.x]=\"node[1]['x']\"\n                        [attr.y]=\"node[1]['y']\"\n                        [attr.width]=\"node[1]['width']\"\n                        [attr.height]=\"node[1]['height']\"\n                        [attr.rx]=\"node[1]['rx']\"\n                        [attr.ry]=\"node[1]['ry']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('line') {\n                    <svg:line\n                        [attr.x1]=\"node[1]['x1']\"\n                        [attr.y1]=\"node[1]['y1']\"\n                        [attr.x2]=\"node[1]['x2']\"\n                        [attr.y2]=\"node[1]['y2']\"\n                        [attr.stroke]=\"node[1]['stroke']\"\n                        [attr.stroke-opacity]=\"node[1]['strokeOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('polyline') {\n                    <svg:polyline\n                        [attr.points]=\"node[1]['points']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('polygon') {\n                    <svg:polygon\n                        [attr.points]=\"node[1]['points']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('ellipse') {\n                    <svg:ellipse\n                        [attr.cx]=\"node[1]['cx']\"\n                        [attr.cy]=\"node[1]['cy']\"\n                        [attr.rx]=\"node[1]['rx']\"\n                        [attr.ry]=\"node[1]['ry']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n            }\n        }\n"
		}]
	}], () => [], null);
})();
// node_modules/@primeicons/core/dist/esm/icons/search-minus.mjs
var e$2 = {
	name: "search-minus",
	meta: { tags: [
		"search-minus",
		"reduce-search",
		"less-results",
		"narrow-filter",
		"restrict-search"
	] },
	svg: {
		xmlns: "http://www.w3.org/2000/svg",
		width: 20,
		height: 20,
		viewBox: "0 0 20 20",
		fill: "none"
	},
	nodes: [["path", {
		d: "M8.76953 1.25C12.9227 1.25 16.29 4.61733 16.29 8.77051C16.2899 10.5767 15.6514 12.2329 14.5898 13.5293L18.5303 17.4697C18.8231 17.7626 18.8231 18.2374 18.5303 18.5303C18.2374 18.8231 17.7626 18.8231 17.4697 18.5303L13.5303 14.5908C12.2336 15.6525 10.5761 16.29 8.76953 16.29C4.61674 16.2898 1.25026 12.9233 1.25 8.77051C1.25 4.61749 4.61657 1.25026 8.76953 1.25ZM8.76953 2.75C5.445 2.75026 2.75 5.44591 2.75 8.77051C2.75026 12.0949 5.44515 14.7898 8.76953 14.79C12.0941 14.79 14.7898 12.095 14.79 8.77051C14.79 5.44575 12.0943 2.75 8.76953 2.75ZM11.25 8C11.6642 8 12 8.33579 12 8.75C12 9.16421 11.6642 9.5 11.25 9.5H6.25C5.83579 9.5 5.5 9.16421 5.5 8.75C5.5 8.33579 5.83579 8 6.25 8H11.25Z",
		fill: "currentColor",
		key: "r5qbcd"
	}]]
};
// node_modules/@primeicons/angular/fesm2022/primeicons-angular-search-minus.mjs
var SearchMinus = class SearchMinus extends CoreIcon {
	constructor() {
		super();
		this._icon = e$2;
	}
	static ɵfac = function SearchMinus_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || SearchMinus)();
	};
	static ɵcmp = (function() {
		const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
		function SearchMinus_For_1_Case_0_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "path");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function SearchMinus_For_1_Case_1_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "circle");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function SearchMinus_For_1_Case_2_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "rect");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function SearchMinus_For_1_Case_3_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "line");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function SearchMinus_For_1_Case_4_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "polyline");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function SearchMinus_For_1_Case_5_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "polygon");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function SearchMinus_For_1_Case_6_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "ellipse");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function SearchMinus_For_1_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, SearchMinus_For_1_Case_0_Template, 1, 9, "path")(1, SearchMinus_For_1_Case_1_Template, 1, 6, "circle")(2, SearchMinus_For_1_Case_2_Template, 1, 9, "rect")(3, SearchMinus_For_1_Case_3_Template, 1, 7, "line")(4, SearchMinus_For_1_Case_4_Template, 1, 4, "polyline")(5, SearchMinus_For_1_Case_5_Template, 1, 4, "polygon")(6, SearchMinus_For_1_Case_6_Template, 1, 7, "ellipse");
			if (rf & 2) {
				let tmp_10_0 = void 0;
				const node_r1 = ctx.$implicit;
				ɵɵconditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
			}
		}
		return /*@__PURE__*/ ɵɵdefineComponent({
			type: SearchMinus,
			selectors: [[
				"svg",
				"data-p-icon",
				"search-minus"
			]],
			features: [ɵɵInheritDefinitionFeature],
			decls: 2,
			vars: 0,
			template: function SearchMinus_Template(rf, ctx) {
				if (rf & 1) ɵɵrepeaterCreate(0, SearchMinus_For_1_Template, 7, 1, null, null, _forTrack0);
				if (rf & 2) ɵɵrepeater(ctx.iconNodes());
			},
			encapsulation: 2,
			changeDetection: 1
		});
	})();
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchMinus, [{
		type: Component,
		args: [{
			selector: "svg[data-p-icon=\"search-minus\"]",
			standalone: true,
			template: "\n        @for (node of iconNodes(); track node[1]['key'] || $index) {\n            @switch (node[0]) {\n                @case ('path') {\n                    <svg:path\n                        [attr.d]=\"node[1]['d']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.fill-rule]=\"node[1]['fillRule']\"\n                        [attr.clip-rule]=\"node[1]['clipRule']\"\n                        [attr.stroke]=\"node[1]['stroke']\"\n                        [attr.stroke-width]=\"node[1]['strokeWidth']\"\n                        [attr.stroke-opacity]=\"node[1]['strokeOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('circle') {\n                    <svg:circle\n                        [attr.cx]=\"node[1]['cx']\"\n                        [attr.cy]=\"node[1]['cy']\"\n                        [attr.r]=\"node[1]['r']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('rect') {\n                    <svg:rect\n                        [attr.x]=\"node[1]['x']\"\n                        [attr.y]=\"node[1]['y']\"\n                        [attr.width]=\"node[1]['width']\"\n                        [attr.height]=\"node[1]['height']\"\n                        [attr.rx]=\"node[1]['rx']\"\n                        [attr.ry]=\"node[1]['ry']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('line') {\n                    <svg:line\n                        [attr.x1]=\"node[1]['x1']\"\n                        [attr.y1]=\"node[1]['y1']\"\n                        [attr.x2]=\"node[1]['x2']\"\n                        [attr.y2]=\"node[1]['y2']\"\n                        [attr.stroke]=\"node[1]['stroke']\"\n                        [attr.stroke-opacity]=\"node[1]['strokeOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('polyline') {\n                    <svg:polyline\n                        [attr.points]=\"node[1]['points']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('polygon') {\n                    <svg:polygon\n                        [attr.points]=\"node[1]['points']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('ellipse') {\n                    <svg:ellipse\n                        [attr.cx]=\"node[1]['cx']\"\n                        [attr.cy]=\"node[1]['cy']\"\n                        [attr.rx]=\"node[1]['rx']\"\n                        [attr.ry]=\"node[1]['ry']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n            }\n        }\n"
		}]
	}], () => [], null);
})();
// node_modules/@primeicons/core/dist/esm/icons/search-plus.mjs
var e$1 = {
	name: "search-plus",
	meta: { tags: [
		"search-plus",
		"increase-search",
		"more-search",
		"wide-filter",
		"expand-search"
	] },
	svg: {
		xmlns: "http://www.w3.org/2000/svg",
		width: 20,
		height: 20,
		viewBox: "0 0 20 20",
		fill: "none"
	},
	nodes: [["path", {
		d: "M8.76953 1.25C12.9227 1.25 16.29 4.61733 16.29 8.77051C16.2899 10.5767 15.6514 12.2329 14.5898 13.5293L18.5303 17.4697C18.8231 17.7626 18.8231 18.2374 18.5303 18.5303C18.2374 18.8231 17.7626 18.8231 17.4697 18.5303L13.5303 14.5908C12.2336 15.6525 10.5761 16.29 8.76953 16.29C4.61674 16.2898 1.25026 12.9233 1.25 8.77051C1.25 4.61749 4.61657 1.25026 8.76953 1.25ZM8.76953 2.75C5.445 2.75026 2.75 5.44591 2.75 8.77051C2.75026 12.0949 5.44515 14.7898 8.76953 14.79C12.0941 14.79 14.7898 12.095 14.79 8.77051C14.79 5.44575 12.0943 2.75 8.76953 2.75ZM8.75 5.5C9.16421 5.5 9.5 5.83579 9.5 6.25V8H11.25C11.6642 8 12 8.33579 12 8.75C12 9.16421 11.6642 9.5 11.25 9.5H9.5V11.25C9.5 11.6642 9.16421 12 8.75 12C8.33579 12 8 11.6642 8 11.25V9.5H6.25C5.83579 9.5 5.5 9.16421 5.5 8.75C5.5 8.33579 5.83579 8 6.25 8H8V6.25C8 5.83579 8.33579 5.5 8.75 5.5Z",
		fill: "currentColor",
		key: "yki2e3"
	}]]
};
// node_modules/@primeicons/angular/fesm2022/primeicons-angular-search-plus.mjs
var SearchPlus = class SearchPlus extends CoreIcon {
	constructor() {
		super();
		this._icon = e$1;
	}
	static ɵfac = function SearchPlus_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || SearchPlus)();
	};
	static ɵcmp = (function() {
		const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
		function SearchPlus_For_1_Case_0_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "path");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function SearchPlus_For_1_Case_1_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "circle");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function SearchPlus_For_1_Case_2_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "rect");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function SearchPlus_For_1_Case_3_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "line");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function SearchPlus_For_1_Case_4_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "polyline");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function SearchPlus_For_1_Case_5_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "polygon");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function SearchPlus_For_1_Case_6_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "ellipse");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function SearchPlus_For_1_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, SearchPlus_For_1_Case_0_Template, 1, 9, "path")(1, SearchPlus_For_1_Case_1_Template, 1, 6, "circle")(2, SearchPlus_For_1_Case_2_Template, 1, 9, "rect")(3, SearchPlus_For_1_Case_3_Template, 1, 7, "line")(4, SearchPlus_For_1_Case_4_Template, 1, 4, "polyline")(5, SearchPlus_For_1_Case_5_Template, 1, 4, "polygon")(6, SearchPlus_For_1_Case_6_Template, 1, 7, "ellipse");
			if (rf & 2) {
				let tmp_10_0 = void 0;
				const node_r1 = ctx.$implicit;
				ɵɵconditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
			}
		}
		return /*@__PURE__*/ ɵɵdefineComponent({
			type: SearchPlus,
			selectors: [[
				"svg",
				"data-p-icon",
				"search-plus"
			]],
			features: [ɵɵInheritDefinitionFeature],
			decls: 2,
			vars: 0,
			template: function SearchPlus_Template(rf, ctx) {
				if (rf & 1) ɵɵrepeaterCreate(0, SearchPlus_For_1_Template, 7, 1, null, null, _forTrack0);
				if (rf & 2) ɵɵrepeater(ctx.iconNodes());
			},
			encapsulation: 2,
			changeDetection: 1
		});
	})();
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchPlus, [{
		type: Component,
		args: [{
			selector: "svg[data-p-icon=\"search-plus\"]",
			standalone: true,
			template: "\n        @for (node of iconNodes(); track node[1]['key'] || $index) {\n            @switch (node[0]) {\n                @case ('path') {\n                    <svg:path\n                        [attr.d]=\"node[1]['d']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.fill-rule]=\"node[1]['fillRule']\"\n                        [attr.clip-rule]=\"node[1]['clipRule']\"\n                        [attr.stroke]=\"node[1]['stroke']\"\n                        [attr.stroke-width]=\"node[1]['strokeWidth']\"\n                        [attr.stroke-opacity]=\"node[1]['strokeOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('circle') {\n                    <svg:circle\n                        [attr.cx]=\"node[1]['cx']\"\n                        [attr.cy]=\"node[1]['cy']\"\n                        [attr.r]=\"node[1]['r']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('rect') {\n                    <svg:rect\n                        [attr.x]=\"node[1]['x']\"\n                        [attr.y]=\"node[1]['y']\"\n                        [attr.width]=\"node[1]['width']\"\n                        [attr.height]=\"node[1]['height']\"\n                        [attr.rx]=\"node[1]['rx']\"\n                        [attr.ry]=\"node[1]['ry']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('line') {\n                    <svg:line\n                        [attr.x1]=\"node[1]['x1']\"\n                        [attr.y1]=\"node[1]['y1']\"\n                        [attr.x2]=\"node[1]['x2']\"\n                        [attr.y2]=\"node[1]['y2']\"\n                        [attr.stroke]=\"node[1]['stroke']\"\n                        [attr.stroke-opacity]=\"node[1]['strokeOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('polyline') {\n                    <svg:polyline\n                        [attr.points]=\"node[1]['points']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('polygon') {\n                    <svg:polygon\n                        [attr.points]=\"node[1]['points']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('ellipse') {\n                    <svg:ellipse\n                        [attr.cx]=\"node[1]['cx']\"\n                        [attr.cy]=\"node[1]['cy']\"\n                        [attr.rx]=\"node[1]['rx']\"\n                        [attr.ry]=\"node[1]['ry']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n            }\n        }\n"
		}]
	}], () => [], null);
})();
// node_modules/@primeicons/core/dist/esm/icons/undo.mjs
var e = {
	name: "undo",
	meta: { tags: [
		"undo",
		"revert",
		"back",
		"cancel",
		"reverse"
	] },
	svg: {
		xmlns: "http://www.w3.org/2000/svg",
		width: 20,
		height: 20,
		viewBox: "0 0 20 20",
		fill: "none"
	},
	nodes: [["path", {
		d: "M9.46973 1.46973C9.76262 1.17684 10.2374 1.17684 10.5303 1.46973C10.8231 1.76263 10.8232 2.23739 10.5303 2.53028L8.81055 4.25H10C14.0042 4.25 17.25 7.49579 17.25 11.5C17.25 15.5042 14.0042 18.75 10 18.75C5.99581 18.75 2.75003 15.5042 2.75 11.5C2.75 11.0858 3.08579 10.75 3.5 10.75C3.91421 10.75 4.25 11.0858 4.25 11.5C4.25003 14.6758 6.82423 17.25 10 17.25C13.1758 17.25 15.75 14.6758 15.75 11.5C15.75 8.32422 13.1758 5.75 10 5.75H8.81055L10.5303 7.46973C10.8231 7.76263 10.8232 8.23739 10.5303 8.53028C10.2374 8.82313 9.76261 8.82313 9.46973 8.53028L6.46973 5.53028C6.17684 5.23739 6.17686 4.76263 6.46973 4.46973L9.46973 1.46973Z",
		fill: "currentColor",
		key: "xu5ao6"
	}]]
};
// node_modules/@primeicons/angular/fesm2022/primeicons-angular-undo.mjs
var Undo = class Undo extends CoreIcon {
	constructor() {
		super();
		this._icon = e;
	}
	static ɵfac = function Undo_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || Undo)();
	};
	static ɵcmp = (function() {
		const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
		function Undo_For_1_Case_0_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "path");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Undo_For_1_Case_1_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "circle");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Undo_For_1_Case_2_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "rect");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Undo_For_1_Case_3_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "line");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Undo_For_1_Case_4_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "polyline");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Undo_For_1_Case_5_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "polygon");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Undo_For_1_Case_6_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "ellipse");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Undo_For_1_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, Undo_For_1_Case_0_Template, 1, 9, "path")(1, Undo_For_1_Case_1_Template, 1, 6, "circle")(2, Undo_For_1_Case_2_Template, 1, 9, "rect")(3, Undo_For_1_Case_3_Template, 1, 7, "line")(4, Undo_For_1_Case_4_Template, 1, 4, "polyline")(5, Undo_For_1_Case_5_Template, 1, 4, "polygon")(6, Undo_For_1_Case_6_Template, 1, 7, "ellipse");
			if (rf & 2) {
				let tmp_10_0 = void 0;
				const node_r1 = ctx.$implicit;
				ɵɵconditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
			}
		}
		return /*@__PURE__*/ ɵɵdefineComponent({
			type: Undo,
			selectors: [[
				"svg",
				"data-p-icon",
				"undo"
			]],
			features: [ɵɵInheritDefinitionFeature],
			decls: 2,
			vars: 0,
			template: function Undo_Template(rf, ctx) {
				if (rf & 1) ɵɵrepeaterCreate(0, Undo_For_1_Template, 7, 1, null, null, _forTrack0);
				if (rf & 2) ɵɵrepeater(ctx.iconNodes());
			},
			encapsulation: 2,
			changeDetection: 1
		});
	})();
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Undo, [{
		type: Component,
		args: [{
			selector: "svg[data-p-icon=\"undo\"]",
			standalone: true,
			template: "\n        @for (node of iconNodes(); track node[1]['key'] || $index) {\n            @switch (node[0]) {\n                @case ('path') {\n                    <svg:path\n                        [attr.d]=\"node[1]['d']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.fill-rule]=\"node[1]['fillRule']\"\n                        [attr.clip-rule]=\"node[1]['clipRule']\"\n                        [attr.stroke]=\"node[1]['stroke']\"\n                        [attr.stroke-width]=\"node[1]['strokeWidth']\"\n                        [attr.stroke-opacity]=\"node[1]['strokeOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('circle') {\n                    <svg:circle\n                        [attr.cx]=\"node[1]['cx']\"\n                        [attr.cy]=\"node[1]['cy']\"\n                        [attr.r]=\"node[1]['r']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('rect') {\n                    <svg:rect\n                        [attr.x]=\"node[1]['x']\"\n                        [attr.y]=\"node[1]['y']\"\n                        [attr.width]=\"node[1]['width']\"\n                        [attr.height]=\"node[1]['height']\"\n                        [attr.rx]=\"node[1]['rx']\"\n                        [attr.ry]=\"node[1]['ry']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('line') {\n                    <svg:line\n                        [attr.x1]=\"node[1]['x1']\"\n                        [attr.y1]=\"node[1]['y1']\"\n                        [attr.x2]=\"node[1]['x2']\"\n                        [attr.y2]=\"node[1]['y2']\"\n                        [attr.stroke]=\"node[1]['stroke']\"\n                        [attr.stroke-opacity]=\"node[1]['strokeOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('polyline') {\n                    <svg:polyline\n                        [attr.points]=\"node[1]['points']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('polygon') {\n                    <svg:polygon\n                        [attr.points]=\"node[1]['points']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('ellipse') {\n                    <svg:ellipse\n                        [attr.cx]=\"node[1]['cx']\"\n                        [attr.cy]=\"node[1]['cy']\"\n                        [attr.rx]=\"node[1]['rx']\"\n                        [attr.ry]=\"node[1]['ry']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n            }\n        }\n"
		}]
	}], () => [], null);
})();
// node_modules/@primeuix/styles/dist/image/index.mjs
var style = "\n    .p-image-mask {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n\n    .p-image-preview {\n        position: relative;\n        display: inline-flex;\n        line-height: 0;\n    }\n\n    .p-image-preview-mask {\n        position: absolute;\n        inset-inline-start: 0;\n        inset-block-start: 0;\n        width: 100%;\n        height: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        opacity: 0;\n        border: 0 none;\n        padding: 0;\n        cursor: pointer;\n        background: transparent;\n        color: dt('image.preview.mask.color');\n        transition: background dt('image.transition.duration');\n    }\n\n    .p-image-preview:hover > .p-image-preview-mask,\n    .p-image-preview-mask:focus-visible {\n        opacity: 1;\n        cursor: pointer;\n        background: dt('image.preview.mask.background');\n        outline: 0 none;\n    }\n\n    .p-image-preview-icon {\n        font-size: dt('image.preview.icon.size');\n        width: dt('image.preview.icon.size');\n        height: dt('image.preview.icon.size');\n    }\n\n    .p-image-toolbar {\n        position: absolute;\n        inset-block-start: dt('image.toolbar.position.top');\n        inset-inline-end: dt('image.toolbar.position.right');\n        inset-inline-start: dt('image.toolbar.position.left');\n        inset-block-end: dt('image.toolbar.position.bottom');\n        display: flex;\n        z-index: 1;\n        padding: dt('image.toolbar.padding');\n        background: dt('image.toolbar.background');\n        backdrop-filter: blur(dt('image.toolbar.blur'));\n        border-color: dt('image.toolbar.border.color');\n        border-style: solid;\n        border-width: dt('image.toolbar.border.width');\n        border-radius: dt('image.toolbar.border.radius');\n        gap: dt('image.toolbar.gap');\n    }\n\n    .p-image-action {\n        display: inline-flex;\n        justify-content: center;\n        align-items: center;\n        color: dt('image.action.color');\n        background: transparent;\n        width: dt('image.action.size');\n        height: dt('image.action.size');\n        margin: 0;\n        padding: 0;\n        border: 0 none;\n        cursor: pointer;\n        user-select: none;\n        border-radius: dt('image.action.border.radius');\n        outline-color: transparent;\n        transition:\n            background dt('image.transition.duration'),\n            color dt('image.transition.duration'),\n            outline-color dt('image.transition.duration'),\n            box-shadow dt('image.transition.duration');\n    }\n\n    .p-image-action:hover {\n        color: dt('image.action.hover.color');\n        background: dt('image.action.hover.background');\n    }\n\n    .p-image-action:focus-visible {\n        box-shadow: dt('image.action.focus.ring.shadow');\n        outline: dt('image.action.focus.ring.width') dt('image.action.focus.ring.style') dt('image.action.focus.ring.color');\n        outline-offset: dt('image.action.focus.ring.offset');\n    }\n\n    .p-image-action .p-icon {\n        font-size: dt('image.action.icon.size');\n        width: dt('image.action.icon.size');\n        height: dt('image.action.icon.size');\n    }\n\n    .p-image-action.p-disabled {\n        pointer-events: auto;\n    }\n\n    .p-image-original {\n        max-width: 100vw;\n        max-height: 100vh;\n        transition: transform 300ms;\n    }\n\n    .p-image-original-enter-active {\n        animation: p-animate-image-original-enter 300ms cubic-bezier(.19,1,.22,1);\n    }\n\n    .p-image-original-leave-active {\n        animation: p-animate-image-original-leave 300ms cubic-bezier(.19,1,.22,1);\n    }\n\n    @keyframes p-animate-image-original-enter {\n        from {\n            opacity: 0;\n            transform: scale(0.93);\n        }\n    }\n\n    @keyframes p-animate-image-original-leave {\n        to {\n            opacity: 0;\n            transform: scale(0.93);\n        }\n    }\n";
// node_modules/primeng/fesm2022/primeng-image.mjs
var classes = {
	root: ({ instance }) => ["p-image p-component", { "p-image-preview": instance.preview() }],
	previewMask: "p-image-preview-mask",
	previewIcon: "p-image-preview-icon",
	mask: "p-image-mask p-overlay-mask",
	toolbar: "p-image-toolbar",
	rotateRightButton: "p-image-action p-image-rotate-right-button",
	rotateLeftButton: "p-image-action p-image-rotate-left-button",
	zoomOutButton: ({ instance }) => ["p-image-action p-image-zoom-out-button", { "p-disabled": instance.isZoomOutDisabled() }],
	zoomInButton: ({ instance }) => ["p-image-action p-image-zoom-in-button", { "p-disabled": instance.isZoomInDisabled() }],
	closeButton: "p-image-action p-image-close-button",
	original: "p-image-original"
};
var ImageStyle = class ImageStyle extends BaseStyle {
	name = "image";
	style = style;
	classes = classes;
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵImageStyle_BaseFactory = void 0;
		return function ImageStyle_Factory(__ngFactoryType__) {
			return (ɵImageStyle_BaseFactory || (ɵImageStyle_BaseFactory = ɵɵgetInheritedFactory(ImageStyle)))(__ngFactoryType__ || ImageStyle);
		};
	})();
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: ImageStyle,
		factory: ImageStyle.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImageStyle, [{ type: Injectable }], null, null);
})();
var ImageClasses;
(function(ImageClasses) {
	ImageClasses["root"] = "p-image";
	ImageClasses["previewMask"] = "p-image-preview-mask";
	ImageClasses["previewIcon"] = "p-image-preview-icon";
	ImageClasses["mask"] = "p-image-mask";
	ImageClasses["toolbar"] = "p-image-toolbar";
	ImageClasses["rotateRightButton"] = "p-image-rotate-right-button";
	ImageClasses["rotateLeftButton"] = "p-image-rotate-left-button";
	ImageClasses["zoomOutButton"] = "p-image-zoom-out-button";
	ImageClasses["zoomInButton"] = "p-image-zoom-in-button";
	ImageClasses["closeButton"] = "p-image-close-button";
	ImageClasses["original"] = "p-image-original";
})(ImageClasses || (ImageClasses = {}));
var IMAGE_INSTANCE = new InjectionToken("IMAGE_INSTANCE");
var Image = class Image extends BaseComponent {
	componentName = "Image";
	constructor() {
		super();
	}
	$pcImage = inject(IMAGE_INSTANCE, {
		optional: true,
		skipSelf: true
	}) ?? void 0;
	bindDirectiveInstance = inject(Bind, { self: true });
	imageClass = input(...ngDevMode ? [void 0, { debugName: "imageClass" }] : /* istanbul ignore next */ []);
	imageStyle = input(...ngDevMode ? [void 0, { debugName: "imageStyle" }] : /* istanbul ignore next */ []);
	src = input(...ngDevMode ? [void 0, { debugName: "src" }] : /* istanbul ignore next */ []);
	srcSet = input(...ngDevMode ? [void 0, { debugName: "srcSet" }] : /* istanbul ignore next */ []);
	sizes = input(...ngDevMode ? [void 0, { debugName: "sizes" }] : /* istanbul ignore next */ []);
	previewImageSrc = input(...ngDevMode ? [void 0, { debugName: "previewImageSrc" }] : /* istanbul ignore next */ []);
	previewImageSrcSet = input(...ngDevMode ? [void 0, { debugName: "previewImageSrcSet" }] : /* istanbul ignore next */ []);
	previewImageSizes = input(...ngDevMode ? [void 0, { debugName: "previewImageSizes" }] : /* istanbul ignore next */ []);
	alt = input(...ngDevMode ? [void 0, { debugName: "alt" }] : /* istanbul ignore next */ []);
	width = input(...ngDevMode ? [void 0, { debugName: "width" }] : /* istanbul ignore next */ []);
	height = input(...ngDevMode ? [void 0, { debugName: "height" }] : /* istanbul ignore next */ []);
	loading = input(...ngDevMode ? [void 0, { debugName: "loading" }] : /* istanbul ignore next */ []);
	preview = input(false, {
		...ngDevMode ? { debugName: "preview" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	modalEnterAnimation = input("p-modal-enter", ...ngDevMode ? [{ debugName: "modalEnterAnimation" }] : /* istanbul ignore next */ []);
	modalLeaveAnimation = input("p-modal-leave", ...ngDevMode ? [{ debugName: "modalLeaveAnimation" }] : /* istanbul ignore next */ []);
	appendTo = input(void 0, ...ngDevMode ? [{ debugName: "appendTo" }] : /* istanbul ignore next */ []);
	maskMotionOptions = input(...ngDevMode ? [void 0, { debugName: "maskMotionOptions" }] : /* istanbul ignore next */ []);
	computedMaskMotionOptions = computed(() => ({
		...this.ptm("maskMotion"),
		...this.maskMotionOptions()
	}), ...ngDevMode ? [{ debugName: "computedMaskMotionOptions" }] : /* istanbul ignore next */ []);
	motionOptions = input(...ngDevMode ? [void 0, { debugName: "motionOptions" }] : /* istanbul ignore next */ []);
	computedMotionOptions = computed(() => ({
		...this.ptm("motion"),
		...this.motionOptions()
	}), ...ngDevMode ? [{ debugName: "computedMotionOptions" }] : /* istanbul ignore next */ []);
	onShow = output();
	onHide = output();
	onImageError = output();
	mask = viewChild("mask", ...ngDevMode ? [{ debugName: "mask" }] : /* istanbul ignore next */ []);
	previewButton = viewChild("previewButton", ...ngDevMode ? [{ debugName: "previewButton" }] : /* istanbul ignore next */ []);
	closeButton = viewChild("closeButton", ...ngDevMode ? [{ debugName: "closeButton" }] : /* istanbul ignore next */ []);
	indicatorTemplate = contentChild("indicator", {
		...ngDevMode ? { debugName: "indicatorTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	rotateRightIconTemplate = contentChild("rotaterighticon", {
		...ngDevMode ? { debugName: "rotateRightIconTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	rotateLeftIconTemplate = contentChild("rotatelefticon", {
		...ngDevMode ? { debugName: "rotateLeftIconTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	zoomOutIconTemplate = contentChild("zoomouticon", {
		...ngDevMode ? { debugName: "zoomOutIconTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	zoomInIconTemplate = contentChild("zoominicon", {
		...ngDevMode ? { debugName: "zoomInIconTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	closeIconTemplate = contentChild("closeicon", {
		...ngDevMode ? { debugName: "closeIconTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	previewTemplate = contentChild("preview", {
		...ngDevMode ? { debugName: "previewTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	imageTemplate = contentChild("image", {
		...ngDevMode ? { debugName: "imageTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	renderMask = signal(false, ...ngDevMode ? [{ debugName: "renderMask" }] : /* istanbul ignore next */ []);
	renderPreview = signal(false, ...ngDevMode ? [{ debugName: "renderPreview" }] : /* istanbul ignore next */ []);
	maskVisible = signal(false, ...ngDevMode ? [{ debugName: "maskVisible" }] : /* istanbul ignore next */ []);
	previewVisible = false;
	rotate = signal(0, ...ngDevMode ? [{ debugName: "rotate" }] : /* istanbul ignore next */ []);
	scale = signal(1, ...ngDevMode ? [{ debugName: "scale" }] : /* istanbul ignore next */ []);
	previewClick = false;
	container;
	wrapper;
	_componentStyle = inject(ImageStyle);
	$appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{ debugName: "$appendTo" }] : /* istanbul ignore next */ []);
	zoomSettings = {
		default: 1,
		step: .1,
		max: 1.5,
		min: .5
	};
	get aria() {
		return this.config.translation.aria;
	}
	isZoomOutDisabled = computed(() => this.scale() - this.zoomSettings.step <= this.zoomSettings.min, ...ngDevMode ? [{ debugName: "isZoomOutDisabled" }] : /* istanbul ignore next */ []);
	isZoomInDisabled = computed(() => this.scale() + this.zoomSettings.step >= this.zoomSettings.max, ...ngDevMode ? [{ debugName: "isZoomInDisabled" }] : /* istanbul ignore next */ []);
	previewMaskStyle = computed(() => ({
		height: this.height() + "px",
		width: this.width() + "px"
	}), ...ngDevMode ? [{ debugName: "previewMaskStyle" }] : /* istanbul ignore next */ []);
	imageTemplateContext() {
		return { errorCallback: this.imageError.bind(this) };
	}
	previewTemplateContext() {
		return {
			class: this.cx("original") ?? "",
			style: this.imagePreviewStyle(),
			previewCallback: this.onPreviewImageClick.bind(this)
		};
	}
	onAfterViewChecked() {
		this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
	}
	onImageClick() {
		if (this.preview()) {
			this.maskVisible.set(true);
			this.previewVisible = true;
			this.renderMask.set(true);
			this.renderPreview.set(true);
			this.$blockBodyScroll();
		}
	}
	onMaskClick() {
		if (!this.previewClick) this.closePreview();
		this.previewClick = false;
	}
	onMaskKeydown(event) {
		switch (event.code) {
			case "Escape":
				this.onMaskClick();
				setTimeout(() => {
					Wt(this.previewButton()?.nativeElement);
				}, 25);
				event.preventDefault();
		}
	}
	onPreviewImageClick() {
		this.previewClick = true;
	}
	rotateRight() {
		this.rotate.update((v) => v + 90);
		this.previewClick = true;
	}
	rotateLeft() {
		this.rotate.update((v) => v - 90);
		this.previewClick = true;
	}
	zoomIn() {
		this.scale.update((v) => v + this.zoomSettings.step);
		this.previewClick = true;
	}
	zoomOut() {
		this.scale.update((v) => v - this.zoomSettings.step);
		this.previewClick = true;
	}
	onAnimationStart(event) {
		this.container = event.element;
		this.wrapper = this.container?.parentElement;
		if (this.$attrSelector) this.$markInstance(this.wrapper);
		this.appendContainer();
		this.moveOnTop();
		this.onShow.emit({});
		setTimeout(() => {
			Wt(this.closeButton()?.nativeElement);
		}, 25);
	}
	onBeforeLeave() {
		this.maskVisible.set(false);
	}
	onAnimationEnd() {
		this.renderPreview.set(false);
	}
	onMaskAfterLeave() {
		if (!this.renderPreview()) this.renderMask.set(false);
		zindexutils_default.clear(this.wrapper);
		this.container = null;
		this.wrapper = null;
		this.rotate.set(0);
		this.scale.set(this.zoomSettings.default);
		this.$unblockBodyScroll();
		this.onHide.emit({});
	}
	moveOnTop() {
		zindexutils_default.set("modal", this.wrapper, this.config.zIndex.modal);
	}
	appendContainer() {
		if (this.$appendTo() && this.$appendTo() !== "self") {
			if (this.$appendTo() === "body" && this.wrapper) this.$overlayParent(this.document.body, this.wrapper).appendChild(this.wrapper);
			else if (this.wrapper) Ct(this.$overlayParent(this.$appendTo(), this.wrapper), this.wrapper);
		}
	}
	imagePreviewStyle() {
		return { transform: "rotate(" + this.rotate() + "deg) scale(" + this.scale() + ")" };
	}
	zoomImageAriaLabel() {
		return this.aria?.zoomImage;
	}
	handleToolbarClick(event) {
		event.stopPropagation();
	}
	closePreview() {
		this.previewVisible = false;
	}
	imageError(event) {
		this.onImageError.emit(event);
	}
	rightAriaLabel() {
		return this.aria?.rotateRight;
	}
	leftAriaLabel() {
		return this.aria?.rotateLeft;
	}
	zoomInAriaLabel() {
		return this.aria?.zoomIn;
	}
	zoomOutAriaLabel() {
		return this.aria?.zoomOut;
	}
	closeAriaLabel() {
		return this.aria?.close;
	}
	onKeydownHandler() {
		if (this.previewVisible) this.closePreview();
	}
	onDestroy() {
		if (this.wrapper) {
			zindexutils_default.clear(this.wrapper);
			this.wrapper.remove();
			this.wrapper = null;
		}
		this.container = null;
		if (this.maskVisible()) this.$unblockBodyScroll();
	}
	static ɵfac = function Image_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || Image)();
	};
	static ɵcmp = (function() {
		const _c0 = ["indicator"];
		const _c1 = ["rotaterighticon"];
		const _c2 = ["rotatelefticon"];
		const _c3 = ["zoomouticon"];
		const _c4 = ["zoominicon"];
		const _c5 = ["closeicon"];
		const _c6 = ["preview"];
		const _c7 = ["image"];
		const _c8 = ["mask"];
		const _c9 = ["previewButton"];
		const _c10 = ["closeButton"];
		function Image_Conditional_0_Template(rf, ctx) {
			if (rf & 1) {
				const _r1 = ɵɵgetCurrentView();
				ɵɵelementStart(0, "img", 7);
				ɵɵlistener("error", function Image_Conditional_0_Template_img_error_0_listener($event) {
					ɵɵrestoreView(_r1);
					const ctx_r1 = ɵɵnextContext();
					return ɵɵresetView(ctx_r1.imageError($event));
				});
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext();
				ɵɵstyleMap(ctx_r1.imageStyle());
				ɵɵclassMap(ctx_r1.imageClass());
				ɵɵproperty("pBind", ctx_r1.ptm("image"));
				ɵɵattribute("src", ctx_r1.src())("srcset", ctx_r1.srcSet())("sizes", ctx_r1.sizes())("alt", ctx_r1.alt())("width", ctx_r1.width())("height", ctx_r1.height())("loading", ctx_r1.loading());
			}
		}
		function Image_ng_container_1_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Image_Conditional_2_Conditional_2_ng_container_0_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Image_Conditional_2_Conditional_2_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, Image_Conditional_2_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 10);
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(2);
				ɵɵproperty("ngTemplateOutlet", ctx_r1.indicatorTemplate());
			}
		}
		function Image_Conditional_2_Conditional_3_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵelement(0, "svg", 11);
			}
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(2);
				ɵɵclassMap(ctx_r1.cx("previewIcon"));
				ɵɵproperty("pBind", ctx_r1.ptm("previewIcon"));
			}
		}
		function Image_Conditional_2_Template(rf, ctx) {
			if (rf & 1) {
				const _r3 = ɵɵgetCurrentView();
				ɵɵelementStart(0, "button", 8, 0);
				ɵɵlistener("click", function Image_Conditional_2_Template_button_click_0_listener() {
					ɵɵrestoreView(_r3);
					const ctx_r1 = ɵɵnextContext();
					return ɵɵresetView(ctx_r1.onImageClick());
				});
				ɵɵconditionalCreate(2, Image_Conditional_2_Conditional_2_Template, 1, 1, "ng-container")(3, Image_Conditional_2_Conditional_3_Template, 1, 3, "svg", 9);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext();
				ɵɵstyleMap(ctx_r1.previewMaskStyle());
				ɵɵclassMap(ctx_r1.cx("previewMask"));
				ɵɵproperty("pBind", ctx_r1.ptm("previewMask"));
				ɵɵattribute("aria-label", ctx_r1.zoomImageAriaLabel());
				ɵɵadvance(2);
				ɵɵconditional(ctx_r1.indicatorTemplate() ? 2 : 3);
			}
		}
		function Image_Conditional_3_Conditional_4_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵelement(0, "svg", 14);
			}
		}
		function Image_Conditional_3_ng_container_5_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Image_Conditional_3_Conditional_7_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵelement(0, "svg", 15);
			}
		}
		function Image_Conditional_3_ng_container_8_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Image_Conditional_3_Conditional_10_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵelement(0, "svg", 17);
			}
		}
		function Image_Conditional_3_ng_container_11_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Image_Conditional_3_Conditional_13_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵelement(0, "svg", 18);
			}
		}
		function Image_Conditional_3_ng_container_14_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Image_Conditional_3_Conditional_17_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵelement(0, "svg", 19);
			}
		}
		function Image_Conditional_3_ng_container_18_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Image_Conditional_3_Conditional_19_Conditional_1_Template(rf, ctx) {
			if (rf & 1) {
				const _r6 = ɵɵgetCurrentView();
				ɵɵelementStart(0, "img", 13);
				ɵɵlistener("click", function Image_Conditional_3_Conditional_19_Conditional_1_Template_img_click_0_listener() {
					ɵɵrestoreView(_r6);
					const ctx_r1 = ɵɵnextContext(3);
					return ɵɵresetView(ctx_r1.onPreviewImageClick());
				});
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(3);
				ɵɵstyleMap(ctx_r1.imagePreviewStyle());
				ɵɵclassMap(ctx_r1.cx("original"));
				ɵɵproperty("pBind", ctx_r1.ptm("original"));
				ɵɵattribute("src", ctx_r1.previewImageSrc() ? ctx_r1.previewImageSrc() : ctx_r1.src())("srcset", ctx_r1.previewImageSrcSet())("sizes", ctx_r1.previewImageSizes());
			}
		}
		function Image_Conditional_3_Conditional_19_ng_container_2_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Image_Conditional_3_Conditional_19_Template(rf, ctx) {
			if (rf & 1) {
				const _r5 = ɵɵgetCurrentView();
				ɵɵelementStart(0, "p-motion", 21);
				ɵɵlistener("onBeforeEnter", function Image_Conditional_3_Conditional_19_Template_p_motion_onBeforeEnter_0_listener($event) {
					ɵɵrestoreView(_r5);
					const ctx_r1 = ɵɵnextContext(2);
					return ɵɵresetView(ctx_r1.onAnimationStart($event));
				})("onBeforeLeave", function Image_Conditional_3_Conditional_19_Template_p_motion_onBeforeLeave_0_listener() {
					ɵɵrestoreView(_r5);
					const ctx_r1 = ɵɵnextContext(2);
					return ɵɵresetView(ctx_r1.onBeforeLeave());
				})("onAfterLeave", function Image_Conditional_3_Conditional_19_Template_p_motion_onAfterLeave_0_listener() {
					ɵɵrestoreView(_r5);
					const ctx_r1 = ɵɵnextContext(2);
					return ɵɵresetView(ctx_r1.onAnimationEnd());
				});
				ɵɵconditionalCreate(1, Image_Conditional_3_Conditional_19_Conditional_1_Template, 1, 8, "img", 22);
				ɵɵtemplate(2, Image_Conditional_3_Conditional_19_ng_container_2_Template, 1, 0, "ng-container", 4);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext(2);
				ɵɵproperty("visible", ctx_r1.previewVisible)("name", ctx_r1.pcn("p-image-original"))("appear", true)("options", ctx_r1.computedMotionOptions());
				ɵɵadvance();
				ɵɵconditional(!ctx_r1.previewTemplate() ? 1 : -1);
				ɵɵadvance();
				ɵɵproperty("ngTemplateOutlet", ctx_r1.previewTemplate())("ngTemplateOutletContext", ctx_r1.previewTemplateContext());
			}
		}
		function Image_Conditional_3_Template(rf, ctx) {
			if (rf & 1) {
				const _r4 = ɵɵgetCurrentView();
				ɵɵelementStart(0, "div", 12, 1);
				ɵɵlistener("click", function Image_Conditional_3_Template_div_click_0_listener() {
					ɵɵrestoreView(_r4);
					const ctx_r1 = ɵɵnextContext();
					return ɵɵresetView(ctx_r1.onMaskClick());
				})("keydown", function Image_Conditional_3_Template_div_keydown_0_listener($event) {
					ɵɵrestoreView(_r4);
					const ctx_r1 = ɵɵnextContext();
					return ɵɵresetView(ctx_r1.onMaskKeydown($event));
				})("pMotionOnAfterLeave", function Image_Conditional_3_Template_div_pMotionOnAfterLeave_0_listener() {
					ɵɵrestoreView(_r4);
					const ctx_r1 = ɵɵnextContext();
					return ɵɵresetView(ctx_r1.onMaskAfterLeave());
				});
				ɵɵelementStart(2, "div", 13);
				ɵɵlistener("click", function Image_Conditional_3_Template_div_click_2_listener($event) {
					ɵɵrestoreView(_r4);
					const ctx_r1 = ɵɵnextContext();
					return ɵɵresetView(ctx_r1.handleToolbarClick($event));
				});
				ɵɵelementStart(3, "button", 8);
				ɵɵlistener("click", function Image_Conditional_3_Template_button_click_3_listener() {
					ɵɵrestoreView(_r4);
					const ctx_r1 = ɵɵnextContext();
					return ɵɵresetView(ctx_r1.rotateRight());
				});
				ɵɵconditionalCreate(4, Image_Conditional_3_Conditional_4_Template, 1, 0, "svg", 14);
				ɵɵtemplate(5, Image_Conditional_3_ng_container_5_Template, 1, 0, "ng-container", 10);
				ɵɵelementEnd();
				ɵɵelementStart(6, "button", 8);
				ɵɵlistener("click", function Image_Conditional_3_Template_button_click_6_listener() {
					ɵɵrestoreView(_r4);
					const ctx_r1 = ɵɵnextContext();
					return ɵɵresetView(ctx_r1.rotateLeft());
				});
				ɵɵconditionalCreate(7, Image_Conditional_3_Conditional_7_Template, 1, 0, "svg", 15);
				ɵɵtemplate(8, Image_Conditional_3_ng_container_8_Template, 1, 0, "ng-container", 10);
				ɵɵelementEnd();
				ɵɵelementStart(9, "button", 16);
				ɵɵlistener("click", function Image_Conditional_3_Template_button_click_9_listener() {
					ɵɵrestoreView(_r4);
					const ctx_r1 = ɵɵnextContext();
					return ɵɵresetView(ctx_r1.zoomOut());
				});
				ɵɵconditionalCreate(10, Image_Conditional_3_Conditional_10_Template, 1, 0, "svg", 17);
				ɵɵtemplate(11, Image_Conditional_3_ng_container_11_Template, 1, 0, "ng-container", 10);
				ɵɵelementEnd();
				ɵɵelementStart(12, "button", 16);
				ɵɵlistener("click", function Image_Conditional_3_Template_button_click_12_listener() {
					ɵɵrestoreView(_r4);
					const ctx_r1 = ɵɵnextContext();
					return ɵɵresetView(ctx_r1.zoomIn());
				});
				ɵɵconditionalCreate(13, Image_Conditional_3_Conditional_13_Template, 1, 0, "svg", 18);
				ɵɵtemplate(14, Image_Conditional_3_ng_container_14_Template, 1, 0, "ng-container", 10);
				ɵɵelementEnd();
				ɵɵelementStart(15, "button", 8, 2);
				ɵɵlistener("click", function Image_Conditional_3_Template_button_click_15_listener() {
					ɵɵrestoreView(_r4);
					const ctx_r1 = ɵɵnextContext();
					return ɵɵresetView(ctx_r1.closePreview());
				});
				ɵɵconditionalCreate(17, Image_Conditional_3_Conditional_17_Template, 1, 0, "svg", 19);
				ɵɵtemplate(18, Image_Conditional_3_ng_container_18_Template, 1, 0, "ng-container", 10);
				ɵɵelementEnd()();
				ɵɵconditionalCreate(19, Image_Conditional_3_Conditional_19_Template, 3, 7, "p-motion", 20);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r1 = ɵɵnextContext();
				ɵɵclassMap(ctx_r1.cx("mask"));
				ɵɵproperty("pBind", ctx_r1.ptm("mask"))("pMotion", ctx_r1.maskVisible())("pMotionAppear", true)("pMotionEnterActiveClass", "p-overlay-mask-enter-active")("pMotionLeaveActiveClass", "p-overlay-mask-leave-active")("pMotionOptions", ctx_r1.computedMaskMotionOptions());
				ɵɵattribute("aria-modal", ctx_r1.maskVisible());
				ɵɵadvance(2);
				ɵɵclassMap(ctx_r1.cx("toolbar"));
				ɵɵproperty("pBind", ctx_r1.ptm("toolbar"));
				ɵɵadvance();
				ɵɵclassMap(ctx_r1.cx("rotateRightButton"));
				ɵɵproperty("pBind", ctx_r1.ptm("rotateRightButton"));
				ɵɵattribute("aria-label", ctx_r1.rightAriaLabel());
				ɵɵadvance();
				ɵɵconditional(!ctx_r1.rotateRightIconTemplate() ? 4 : -1);
				ɵɵadvance();
				ɵɵproperty("ngTemplateOutlet", ctx_r1.rotateRightIconTemplate());
				ɵɵadvance();
				ɵɵclassMap(ctx_r1.cx("rotateLeftButton"));
				ɵɵproperty("pBind", ctx_r1.ptm("rotateLeftButton"));
				ɵɵattribute("aria-label", ctx_r1.leftAriaLabel());
				ɵɵadvance();
				ɵɵconditional(!ctx_r1.rotateLeftIconTemplate() ? 7 : -1);
				ɵɵadvance();
				ɵɵproperty("ngTemplateOutlet", ctx_r1.rotateLeftIconTemplate());
				ɵɵadvance();
				ɵɵclassMap(ctx_r1.cx("zoomOutButton"));
				ɵɵproperty("disabled", ctx_r1.isZoomOutDisabled())("pBind", ctx_r1.ptm("zoomOutButton"));
				ɵɵattribute("aria-label", ctx_r1.zoomOutAriaLabel());
				ɵɵadvance();
				ɵɵconditional(!ctx_r1.zoomOutIconTemplate() ? 10 : -1);
				ɵɵadvance();
				ɵɵproperty("ngTemplateOutlet", ctx_r1.zoomOutIconTemplate());
				ɵɵadvance();
				ɵɵclassMap(ctx_r1.cx("zoomInButton"));
				ɵɵproperty("disabled", ctx_r1.isZoomInDisabled())("pBind", ctx_r1.ptm("zoomInButton"));
				ɵɵattribute("aria-label", ctx_r1.zoomInAriaLabel());
				ɵɵadvance();
				ɵɵconditional(!ctx_r1.zoomInIconTemplate() ? 13 : -1);
				ɵɵadvance();
				ɵɵproperty("ngTemplateOutlet", ctx_r1.zoomInIconTemplate());
				ɵɵadvance();
				ɵɵclassMap(ctx_r1.cx("closeButton"));
				ɵɵproperty("pBind", ctx_r1.ptm("closeButton"));
				ɵɵattribute("aria-label", ctx_r1.closeAriaLabel());
				ɵɵadvance(2);
				ɵɵconditional(!ctx_r1.closeIconTemplate() ? 17 : -1);
				ɵɵadvance();
				ɵɵproperty("ngTemplateOutlet", ctx_r1.closeIconTemplate());
				ɵɵadvance();
				ɵɵconditional(ctx_r1.renderPreview() ? 19 : -1);
			}
		}
		return /*@__PURE__*/ ɵɵdefineComponent({
			type: Image,
			selectors: [["p-image"]],
			contentQueries: function Image_ContentQueries(rf, ctx, dirIndex) {
				if (rf & 1) ɵɵcontentQuerySignal(dirIndex, ctx.indicatorTemplate, _c0, 4)(dirIndex, ctx.rotateRightIconTemplate, _c1, 4)(dirIndex, ctx.rotateLeftIconTemplate, _c2, 4)(dirIndex, ctx.zoomOutIconTemplate, _c3, 4)(dirIndex, ctx.zoomInIconTemplate, _c4, 4)(dirIndex, ctx.closeIconTemplate, _c5, 4)(dirIndex, ctx.previewTemplate, _c6, 4)(dirIndex, ctx.imageTemplate, _c7, 4);
				if (rf & 2) ɵɵqueryAdvance(8);
			},
			viewQuery: function Image_Query(rf, ctx) {
				if (rf & 1) ɵɵviewQuerySignal(ctx.mask, _c8, 5)(ctx.previewButton, _c9, 5)(ctx.closeButton, _c10, 5);
				if (rf & 2) ɵɵqueryAdvance(3);
			},
			hostVars: 2,
			hostBindings: function Image_HostBindings(rf, ctx) {
				if (rf & 1) ɵɵlistener("keydown.escape", function Image_keydown_escape_HostBindingHandler() {
					return ctx.onKeydownHandler();
				}, ɵɵresolveDocument);
				if (rf & 2) ɵɵclassMap(ctx.cx("root"));
			},
			inputs: {
				imageClass: [1, "imageClass"],
				imageStyle: [1, "imageStyle"],
				src: [1, "src"],
				srcSet: [1, "srcSet"],
				sizes: [1, "sizes"],
				previewImageSrc: [1, "previewImageSrc"],
				previewImageSrcSet: [1, "previewImageSrcSet"],
				previewImageSizes: [1, "previewImageSizes"],
				alt: [1, "alt"],
				width: [1, "width"],
				height: [1, "height"],
				loading: [1, "loading"],
				preview: [1, "preview"],
				modalEnterAnimation: [1, "modalEnterAnimation"],
				modalLeaveAnimation: [1, "modalLeaveAnimation"],
				appendTo: [1, "appendTo"],
				maskMotionOptions: [1, "maskMotionOptions"],
				motionOptions: [1, "motionOptions"]
			},
			outputs: {
				onShow: "onShow",
				onHide: "onHide",
				onImageError: "onImageError"
			},
			features: [
				ɵɵProvidersFeature([
					ImageStyle,
					{
						provide: IMAGE_INSTANCE,
						useExisting: Image
					},
					{
						provide: PARENT_INSTANCE,
						useExisting: Image
					}
				]),
				ɵɵHostDirectivesFeature([Bind]),
				ɵɵInheritDefinitionFeature
			],
			decls: 4,
			vars: 5,
			consts: [
				["previewButton", ""],
				["mask", ""],
				["closeButton", ""],
				[
					3,
					"style",
					"class",
					"pBind"
				],
				[
					4,
					"ngTemplateOutlet",
					"ngTemplateOutletContext"
				],
				[
					"type",
					"button",
					3,
					"class",
					"style",
					"pBind"
				],
				[
					"role",
					"dialog",
					"pFocusTrap",
					"",
					3,
					"class",
					"pBind",
					"pMotion",
					"pMotionAppear",
					"pMotionEnterActiveClass",
					"pMotionLeaveActiveClass",
					"pMotionOptions"
				],
				[
					3,
					"error",
					"pBind"
				],
				[
					"type",
					"button",
					3,
					"click",
					"pBind"
				],
				[
					"data-p-icon",
					"eye",
					3,
					"class",
					"pBind"
				],
				[4, "ngTemplateOutlet"],
				[
					"data-p-icon",
					"eye",
					3,
					"pBind"
				],
				[
					"role",
					"dialog",
					"pFocusTrap",
					"",
					3,
					"click",
					"keydown",
					"pMotionOnAfterLeave",
					"pBind",
					"pMotion",
					"pMotionAppear",
					"pMotionEnterActiveClass",
					"pMotionLeaveActiveClass",
					"pMotionOptions"
				],
				[
					3,
					"click",
					"pBind"
				],
				["data-p-icon", "refresh"],
				["data-p-icon", "undo"],
				[
					"type",
					"button",
					3,
					"click",
					"disabled",
					"pBind"
				],
				["data-p-icon", "search-minus"],
				["data-p-icon", "search-plus"],
				["data-p-icon", "times"],
				[
					3,
					"visible",
					"name",
					"appear",
					"options"
				],
				[
					3,
					"onBeforeEnter",
					"onBeforeLeave",
					"onAfterLeave",
					"visible",
					"name",
					"appear",
					"options"
				],
				[
					3,
					"class",
					"style",
					"pBind"
				]
			],
			template: function Image_Template(rf, ctx) {
				if (rf & 1) {
					ɵɵconditionalCreate(0, Image_Conditional_0_Template, 1, 12, "img", 3);
					ɵɵtemplate(1, Image_ng_container_1_Template, 1, 0, "ng-container", 4);
					ɵɵconditionalCreate(2, Image_Conditional_2_Template, 4, 7, "button", 5);
					ɵɵconditionalCreate(3, Image_Conditional_3_Template, 20, 45, "div", 6);
				}
				if (rf & 2) {
					ɵɵconditional(!ctx.imageTemplate() ? 0 : -1);
					ɵɵadvance();
					ɵɵproperty("ngTemplateOutlet", ctx.imageTemplate())("ngTemplateOutletContext", ctx.imageTemplateContext());
					ɵɵadvance();
					ɵɵconditional(ctx.preview() ? 2 : -1);
					ɵɵadvance();
					ɵɵconditional(ctx.renderMask() ? 3 : -1);
				}
			},
			dependencies: [
				NgTemplateOutlet,
				Refresh,
				Eye,
				Undo,
				SearchMinus,
				SearchPlus,
				Times,
				FocusTrap,
				SharedModule,
				BindModule,
				Bind,
				MotionModule,
				Motion,
				MotionDirective
			],
			encapsulation: 2
		});
	})();
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Image, [{
		type: Component,
		args: [{
			selector: "p-image",
			standalone: true,
			imports: [
				NgTemplateOutlet,
				Refresh,
				Eye,
				Undo,
				SearchMinus,
				SearchPlus,
				Times,
				FocusTrap,
				SharedModule,
				BindModule,
				MotionModule
			],
			template: `
        @if (!imageTemplate()) {
            <img
                [attr.src]="src()"
                [attr.srcset]="srcSet()"
                [attr.sizes]="sizes()"
                [attr.alt]="alt()"
                [attr.width]="width()"
                [attr.height]="height()"
                [attr.loading]="loading()"
                [style]="imageStyle()"
                [class]="imageClass()"
                (error)="imageError($event)"
                [pBind]="ptm('image')"
            />
        }

        <ng-container *ngTemplateOutlet="imageTemplate(); context: imageTemplateContext()"></ng-container>

        @if (preview()) {
            <button [attr.aria-label]="zoomImageAriaLabel()" type="button" [class]="cx('previewMask')" (click)="onImageClick()" #previewButton [style]="previewMaskStyle()" [pBind]="ptm('previewMask')">
                @if (indicatorTemplate()) {
                    <ng-container *ngTemplateOutlet="indicatorTemplate()"></ng-container>
                } @else {
                    <svg data-p-icon="eye" [class]="cx('previewIcon')" [pBind]="ptm('previewIcon')" />
                }
            </button>
        }
        @if (renderMask()) {
            <div
                #mask
                [class]="cx('mask')"
                [attr.aria-modal]="maskVisible()"
                role="dialog"
                (click)="onMaskClick()"
                (keydown)="onMaskKeydown($event)"
                pFocusTrap
                [pBind]="ptm('mask')"
                [pMotion]="maskVisible()"
                [pMotionAppear]="true"
                [pMotionEnterActiveClass]="'p-overlay-mask-enter-active'"
                [pMotionLeaveActiveClass]="'p-overlay-mask-leave-active'"
                [pMotionOptions]="computedMaskMotionOptions()"
                (pMotionOnAfterLeave)="onMaskAfterLeave()"
            >
                <div [class]="cx('toolbar')" (click)="handleToolbarClick($event)" [pBind]="ptm('toolbar')">
                    <button [class]="cx('rotateRightButton')" (click)="rotateRight()" type="button" [attr.aria-label]="rightAriaLabel()" [pBind]="ptm('rotateRightButton')">
                        @if (!rotateRightIconTemplate()) {
                            <svg data-p-icon="refresh" />
                        }
                        <ng-container *ngTemplateOutlet="rotateRightIconTemplate()"></ng-container>
                    </button>
                    <button [class]="cx('rotateLeftButton')" (click)="rotateLeft()" type="button" [attr.aria-label]="leftAriaLabel()" [pBind]="ptm('rotateLeftButton')">
                        @if (!rotateLeftIconTemplate()) {
                            <svg data-p-icon="undo" />
                        }
                        <ng-container *ngTemplateOutlet="rotateLeftIconTemplate()"></ng-container>
                    </button>
                    <button [class]="cx('zoomOutButton')" (click)="zoomOut()" type="button" [disabled]="isZoomOutDisabled()" [attr.aria-label]="zoomOutAriaLabel()" [pBind]="ptm('zoomOutButton')">
                        @if (!zoomOutIconTemplate()) {
                            <svg data-p-icon="search-minus" />
                        }
                        <ng-container *ngTemplateOutlet="zoomOutIconTemplate()"></ng-container>
                    </button>
                    <button [class]="cx('zoomInButton')" (click)="zoomIn()" type="button" [disabled]="isZoomInDisabled()" [attr.aria-label]="zoomInAriaLabel()" [pBind]="ptm('zoomInButton')">
                        @if (!zoomInIconTemplate()) {
                            <svg data-p-icon="search-plus" />
                        }
                        <ng-container *ngTemplateOutlet="zoomInIconTemplate()"></ng-container>
                    </button>
                    <button [class]="cx('closeButton')" type="button" (click)="closePreview()" [attr.aria-label]="closeAriaLabel()" #closeButton [pBind]="ptm('closeButton')">
                        @if (!closeIconTemplate()) {
                            <svg data-p-icon="times" />
                        }
                        <ng-container *ngTemplateOutlet="closeIconTemplate()"></ng-container>
                    </button>
                </div>
                @if (renderPreview()) {
                    <p-motion
                        [visible]="previewVisible"
                        [name]="pcn('p-image-original')"
                        [appear]="true"
                        [options]="computedMotionOptions()"
                        (onBeforeEnter)="onAnimationStart($event)"
                        (onBeforeLeave)="onBeforeLeave()"
                        (onAfterLeave)="onAnimationEnd()"
                    >
                        @if (!previewTemplate()) {
                            <img
                                [attr.src]="previewImageSrc() ? previewImageSrc() : src()"
                                [attr.srcset]="previewImageSrcSet()"
                                [attr.sizes]="previewImageSizes()"
                                [class]="cx('original')"
                                [style]="imagePreviewStyle()"
                                (click)="onPreviewImageClick()"
                                [pBind]="ptm('original')"
                            />
                        }
                        <ng-container *ngTemplateOutlet="previewTemplate(); context: previewTemplateContext()"></ng-container>
                    </p-motion>
                }
            </div>
        }
    `,
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			providers: [
				ImageStyle,
				{
					provide: IMAGE_INSTANCE,
					useExisting: Image
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: Image
				}
			],
			host: { "[class]": "cx('root')" },
			hostDirectives: [Bind]
		}]
	}], () => [], {
		imageClass: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "imageClass",
				required: false
			}]
		}],
		imageStyle: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "imageStyle",
				required: false
			}]
		}],
		src: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "src",
				required: false
			}]
		}],
		srcSet: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "srcSet",
				required: false
			}]
		}],
		sizes: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "sizes",
				required: false
			}]
		}],
		previewImageSrc: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "previewImageSrc",
				required: false
			}]
		}],
		previewImageSrcSet: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "previewImageSrcSet",
				required: false
			}]
		}],
		previewImageSizes: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "previewImageSizes",
				required: false
			}]
		}],
		alt: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "alt",
				required: false
			}]
		}],
		width: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "width",
				required: false
			}]
		}],
		height: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "height",
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
		preview: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "preview",
				required: false
			}]
		}],
		modalEnterAnimation: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "modalEnterAnimation",
				required: false
			}]
		}],
		modalLeaveAnimation: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "modalLeaveAnimation",
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
		maskMotionOptions: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "maskMotionOptions",
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
		onShow: [{
			type: Output,
			args: ["onShow"]
		}],
		onHide: [{
			type: Output,
			args: ["onHide"]
		}],
		onImageError: [{
			type: Output,
			args: ["onImageError"]
		}],
		mask: [{
			type: ViewChild,
			args: ["mask", { isSignal: true }]
		}],
		previewButton: [{
			type: ViewChild,
			args: ["previewButton", { isSignal: true }]
		}],
		closeButton: [{
			type: ViewChild,
			args: ["closeButton", { isSignal: true }]
		}],
		indicatorTemplate: [{
			type: ContentChild,
			args: ["indicator", {
				descendants: false,
				isSignal: true
			}]
		}],
		rotateRightIconTemplate: [{
			type: ContentChild,
			args: ["rotaterighticon", {
				descendants: false,
				isSignal: true
			}]
		}],
		rotateLeftIconTemplate: [{
			type: ContentChild,
			args: ["rotatelefticon", {
				descendants: false,
				isSignal: true
			}]
		}],
		zoomOutIconTemplate: [{
			type: ContentChild,
			args: ["zoomouticon", {
				descendants: false,
				isSignal: true
			}]
		}],
		zoomInIconTemplate: [{
			type: ContentChild,
			args: ["zoominicon", {
				descendants: false,
				isSignal: true
			}]
		}],
		closeIconTemplate: [{
			type: ContentChild,
			args: ["closeicon", {
				descendants: false,
				isSignal: true
			}]
		}],
		previewTemplate: [{
			type: ContentChild,
			args: ["preview", {
				descendants: false,
				isSignal: true
			}]
		}],
		imageTemplate: [{
			type: ContentChild,
			args: ["image", {
				descendants: false,
				isSignal: true
			}]
		}],
		onKeydownHandler: [{
			type: HostListener,
			args: ["document:keydown.escape"]
		}]
	});
})();
var ImageModule = class ImageModule {
	static ɵfac = function ImageModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || ImageModule)();
	};
	static ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({
		type: ImageModule,
		imports: [Image, SharedModule],
		exports: [Image, SharedModule]
	});
	static ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ imports: [
		Image,
		SharedModule,
		SharedModule
	] });
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImageModule, [{
		type: NgModule,
		args: [{
			imports: [Image, SharedModule],
			exports: [Image, SharedModule]
		}]
	}], null, null);
})();
export { Image, ImageClasses, ImageModule, ImageStyle };
