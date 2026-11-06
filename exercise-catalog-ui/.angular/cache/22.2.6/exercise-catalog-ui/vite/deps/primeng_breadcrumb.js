import { U as InjectionToken, _a as ɵɵnamespaceSVG, c as computed, la as ɵɵdefineInjectable, ua as ɵɵdefineInjector, va as ɵɵresetView, wr as inject, ya as ɵɵrestoreView } from "./_resource-chunk-B6oSsbEv.js";
import "./common-BBp9OMOF.js";
import { A as contentChild, Ai as setClassMetadata, Bo as ɵɵnextContext, Ds as ɵɵstyleMap, Es as ɵɵstoreLet, Ga as ɵɵdefineNgModule, Gt as ChangeDetectionStrategy, Ji as ɵɵInheritDefinitionFeature, Jt as Component, Nn as NgModule, Ns as ɵɵtext, O as booleanAttribute, Os as ɵɵstyleProp, Ps as ɵɵtextInterpolate, Ro as ɵɵlistener, Sn as Input, Ss as ɵɵsanitizeUrl, Ua as ɵɵdefineComponent, X as input, Xi as ɵɵProvidersFeature, Ya as ɵɵdomElement, Yo as ɵɵproperty, Zi as ɵɵadvance, Zo as ɵɵpureFunction1, _o as ɵɵgetInheritedFactory, aa as ɵɵattribute, ao as ɵɵelementContainer, at as output, ca as ɵɵclassMap, co as ɵɵelementEnd, cs as ɵɵreadContextLet, da as ɵɵconditional, ds as ɵɵrepeaterCreate, go as ɵɵgetCurrentView, ha as ɵɵcontentQuerySignal, i as ContentChild, io as ɵɵelement, js as ɵɵtemplate, lo as ɵɵelementStart, os as ɵɵqueryAdvance, pa as ɵɵconditionalCreate, pr as ViewEncapsulation, qi as ɵɵHostDirectivesFeature, us as ɵɵrepeater, va as ɵɵdeclareLet, vs as ɵɵsanitizeHtml, xn as Injectable, zn as Output } from "./core-D4dczhTZ.js";
import { f as RouterLink, m as RouterModule, p as RouterLinkActive } from "./router-CvGKRNmn.js";
import { r as NgTemplateOutlet } from "./_common_module-chunk-CF6aUJZ1.js";
import { SharedModule } from "./primeng_api.js";
import { n as PARENT_INSTANCE, t as BaseComponent } from "./primeng-basecomponent-C8ezCQ4r.js";
import { Bind } from "./primeng_bind.js";
import { _ as l, y as p } from "./dist-2ljAlN4l.js";
import { s as BaseStyle } from "./primeng-config-Db_bbJUd.js";
import { t as CoreIcon } from "./primeicons-angular-core-DpYT0758.js";
import { n as TooltipModule, t as Tooltip } from "./primeng-tooltip-ttxZZIh5.js";
// node_modules/primeng/fesm2022/primeng-badge.mjs
var style$1$1 = `
    
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }

`;
var classes$1 = { root: ({ instance }) => {
	const value = instance.value();
	const size = instance.size();
	const badgeSize = instance.badgeSize();
	const severity = instance.severity();
	return ["p-badge p-component", {
		"p-badge-circle": l(value) && String(value).length === 1,
		"p-badge-dot": p(value),
		"p-badge-sm": size === "small" || badgeSize === "small",
		"p-badge-lg": size === "large" || badgeSize === "large",
		"p-badge-xl": size === "xlarge" || badgeSize === "xlarge",
		"p-badge-info": severity === "info",
		"p-badge-success": severity === "success",
		"p-badge-warn": severity === "warn",
		"p-badge-danger": severity === "danger",
		"p-badge-secondary": severity === "secondary",
		"p-badge-contrast": severity === "contrast"
	}];
} };
var BadgeStyle = class BadgeStyle extends BaseStyle {
	name = "badge";
	style = style$1$1;
	classes = classes$1;
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵBadgeStyle_BaseFactory = void 0;
		return function BadgeStyle_Factory(__ngFactoryType__) {
			return (ɵBadgeStyle_BaseFactory || (ɵBadgeStyle_BaseFactory = ɵɵgetInheritedFactory(BadgeStyle)))(__ngFactoryType__ || BadgeStyle);
		};
	})();
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: BadgeStyle,
		factory: BadgeStyle.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeStyle, [{ type: Injectable }], null, null);
})();
var BadgeClasses;
(function(BadgeClasses) {
	BadgeClasses["root"] = "p-badge";
})(BadgeClasses || (BadgeClasses = {}));
var BADGE_INSTANCE = new InjectionToken("BADGE_INSTANCE");
var Badge = class Badge extends BaseComponent {
	componentName = "Badge";
	$pcBadge = inject(BADGE_INSTANCE, {
		optional: true,
		skipSelf: true
	}) ?? void 0;
	bindDirectiveInstance = inject(Bind, { self: true });
	badgeSize = input(...ngDevMode ? [void 0, { debugName: "badgeSize" }] : /* istanbul ignore next */ []);
	size = input(...ngDevMode ? [void 0, { debugName: "size" }] : /* istanbul ignore next */ []);
	severity = input(...ngDevMode ? [void 0, { debugName: "severity" }] : /* istanbul ignore next */ []);
	value = input(...ngDevMode ? [void 0, { debugName: "value" }] : /* istanbul ignore next */ []);
	badgeDisabled = input(false, {
		...ngDevMode ? { debugName: "badgeDisabled" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	_componentStyle = inject(BadgeStyle);
	displayStyle = computed(() => this.badgeDisabled() ? "none" : null, ...ngDevMode ? [{ debugName: "displayStyle" }] : /* istanbul ignore next */ []);
	dataP = computed(() => {
		const value = this.value();
		const severity = this.severity();
		const size = this.size();
		return this.cn({
			circle: value != null && String(value).length === 1,
			empty: value == null,
			disabled: this.badgeDisabled(),
			[severity]: severity,
			[size]: size
		});
	}, ...ngDevMode ? [{ debugName: "dataP" }] : /* istanbul ignore next */ []);
	onAfterViewChecked() {
		this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
	}
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵBadge_BaseFactory = void 0;
		return function Badge_Factory(__ngFactoryType__) {
			return (ɵBadge_BaseFactory || (ɵBadge_BaseFactory = ɵɵgetInheritedFactory(Badge)))(__ngFactoryType__ || Badge);
		};
	})();
	static ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({
		type: Badge,
		selectors: [["p-badge"]],
		hostVars: 5,
		hostBindings: function Badge_HostBindings(rf, ctx) {
			if (rf & 2) {
				ɵɵattribute("data-p", ctx.dataP());
				ɵɵclassMap(ctx.cx("root"));
				ɵɵstyleProp("display", ctx.displayStyle());
			}
		},
		inputs: {
			badgeSize: [1, "badgeSize"],
			size: [1, "size"],
			severity: [1, "severity"],
			value: [1, "value"],
			badgeDisabled: [1, "badgeDisabled"]
		},
		features: [
			ɵɵProvidersFeature([
				BadgeStyle,
				{
					provide: BADGE_INSTANCE,
					useExisting: Badge
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: Badge
				}
			]),
			ɵɵHostDirectivesFeature([Bind]),
			ɵɵInheritDefinitionFeature
		],
		decls: 1,
		vars: 1,
		template: function Badge_Template(rf, ctx) {
			if (rf & 1) ɵɵtext(0);
			if (rf & 2) ɵɵtextInterpolate(ctx.value());
		},
		dependencies: [SharedModule],
		encapsulation: 2
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Badge, [{
		type: Component,
		args: [{
			selector: "p-badge",
			template: `{{ value() }}`,
			standalone: true,
			imports: [SharedModule],
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			providers: [
				BadgeStyle,
				{
					provide: BADGE_INSTANCE,
					useExisting: Badge
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: Badge
				}
			],
			host: {
				"[class]": "cx('root')",
				"[style.display]": "displayStyle()",
				"[attr.data-p]": "dataP()"
			},
			hostDirectives: [Bind]
		}]
	}], null, {
		badgeSize: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "badgeSize",
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
		severity: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "severity",
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
		}],
		badgeDisabled: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "badgeDisabled",
				required: false
			}]
		}]
	});
})();
var BadgeModule = class BadgeModule {
	static ɵfac = function BadgeModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || BadgeModule)();
	};
	static ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({
		type: BadgeModule,
		imports: [Badge, SharedModule],
		exports: [Badge, SharedModule]
	});
	static ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ imports: [
		Badge,
		SharedModule,
		SharedModule
	] });
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeModule, [{
		type: NgModule,
		args: [{
			imports: [Badge, SharedModule],
			exports: [Badge, SharedModule]
		}]
	}], null, null);
})();
// node_modules/@primeicons/core/dist/esm/icons/chevron-right.mjs
var t = {
	name: "chevron-right",
	meta: { tags: [
		"chevron-right",
		"forward",
		"next",
		"right",
		"proceed"
	] },
	svg: {
		xmlns: "http://www.w3.org/2000/svg",
		width: 20,
		height: 20,
		viewBox: "0 0 20 20",
		fill: "none"
	},
	nodes: [["path", {
		d: "M6.96973 4.46972C7.26262 4.17683 7.73738 4.17683 8.03028 4.46972L13.0303 9.46972C13.3232 9.76262 13.3232 10.2374 13.0303 10.5303L8.03028 15.5303C7.73738 15.8232 7.26262 15.8232 6.96973 15.5303C6.67684 15.2374 6.67684 14.7626 6.96973 14.4697L11.4395 10L6.96973 5.53027C6.67684 5.23738 6.67684 4.76262 6.96973 4.46972Z",
		fill: "currentColor",
		key: "cn504p"
	}]]
};
// node_modules/@primeicons/angular/fesm2022/primeicons-angular-chevron-right.mjs
var ChevronRight = class ChevronRight extends CoreIcon {
	constructor() {
		super();
		this._icon = t;
	}
	static ɵfac = function ChevronRight_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || ChevronRight)();
	};
	static ɵcmp = (function() {
		const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
		function ChevronRight_For_1_Case_0_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "path");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function ChevronRight_For_1_Case_1_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "circle");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function ChevronRight_For_1_Case_2_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "rect");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function ChevronRight_For_1_Case_3_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "line");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function ChevronRight_For_1_Case_4_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "polyline");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function ChevronRight_For_1_Case_5_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "polygon");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function ChevronRight_For_1_Case_6_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "ellipse");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function ChevronRight_For_1_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, ChevronRight_For_1_Case_0_Template, 1, 9, "path")(1, ChevronRight_For_1_Case_1_Template, 1, 6, "circle")(2, ChevronRight_For_1_Case_2_Template, 1, 9, "rect")(3, ChevronRight_For_1_Case_3_Template, 1, 7, "line")(4, ChevronRight_For_1_Case_4_Template, 1, 4, "polyline")(5, ChevronRight_For_1_Case_5_Template, 1, 4, "polygon")(6, ChevronRight_For_1_Case_6_Template, 1, 7, "ellipse");
			if (rf & 2) {
				let tmp_10_0 = void 0;
				const node_r1 = ctx.$implicit;
				ɵɵconditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
			}
		}
		return /*@__PURE__*/ ɵɵdefineComponent({
			type: ChevronRight,
			selectors: [[
				"svg",
				"data-p-icon",
				"chevron-right"
			]],
			features: [ɵɵInheritDefinitionFeature],
			decls: 2,
			vars: 0,
			template: function ChevronRight_Template(rf, ctx) {
				if (rf & 1) ɵɵrepeaterCreate(0, ChevronRight_For_1_Template, 7, 1, null, null, _forTrack0);
				if (rf & 2) ɵɵrepeater(ctx.iconNodes());
			},
			encapsulation: 2,
			changeDetection: 1
		});
	})();
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChevronRight, [{
		type: Component,
		args: [{
			selector: "svg[data-p-icon=\"chevron-right\"]",
			standalone: true,
			template: "\n        @for (node of iconNodes(); track node[1]['key'] || $index) {\n            @switch (node[0]) {\n                @case ('path') {\n                    <svg:path\n                        [attr.d]=\"node[1]['d']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.fill-rule]=\"node[1]['fillRule']\"\n                        [attr.clip-rule]=\"node[1]['clipRule']\"\n                        [attr.stroke]=\"node[1]['stroke']\"\n                        [attr.stroke-width]=\"node[1]['strokeWidth']\"\n                        [attr.stroke-opacity]=\"node[1]['strokeOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('circle') {\n                    <svg:circle\n                        [attr.cx]=\"node[1]['cx']\"\n                        [attr.cy]=\"node[1]['cy']\"\n                        [attr.r]=\"node[1]['r']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('rect') {\n                    <svg:rect\n                        [attr.x]=\"node[1]['x']\"\n                        [attr.y]=\"node[1]['y']\"\n                        [attr.width]=\"node[1]['width']\"\n                        [attr.height]=\"node[1]['height']\"\n                        [attr.rx]=\"node[1]['rx']\"\n                        [attr.ry]=\"node[1]['ry']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('line') {\n                    <svg:line\n                        [attr.x1]=\"node[1]['x1']\"\n                        [attr.y1]=\"node[1]['y1']\"\n                        [attr.x2]=\"node[1]['x2']\"\n                        [attr.y2]=\"node[1]['y2']\"\n                        [attr.stroke]=\"node[1]['stroke']\"\n                        [attr.stroke-opacity]=\"node[1]['strokeOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('polyline') {\n                    <svg:polyline\n                        [attr.points]=\"node[1]['points']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('polygon') {\n                    <svg:polygon\n                        [attr.points]=\"node[1]['points']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('ellipse') {\n                    <svg:ellipse\n                        [attr.cx]=\"node[1]['cx']\"\n                        [attr.cy]=\"node[1]['cy']\"\n                        [attr.rx]=\"node[1]['rx']\"\n                        [attr.ry]=\"node[1]['ry']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n            }\n        }\n"
		}]
	}], () => [], null);
})();
// node_modules/@primeicons/core/dist/esm/icons/home.mjs
var e = {
	name: "home",
	meta: { tags: [
		"home",
		"house",
		"homepage",
		"shelter",
		"building"
	] },
	svg: {
		xmlns: "http://www.w3.org/2000/svg",
		width: 20,
		height: 20,
		viewBox: "0 0 20 20",
		fill: "none"
	},
	nodes: [["path", {
		d: "M9.55011 2.40073C9.81678 2.20073 10.1838 2.20073 10.4505 2.40073L18.4506 8.40073C18.7814 8.64939 18.8484 9.11939 18.6 9.45054C18.3515 9.78141 17.8814 9.84806 17.5502 9.59995L16.7504 8.99937V17.0003C16.7502 17.4143 16.4143 17.7502 16.0004 17.7503H4.00027C3.58618 17.7503 3.25047 17.4144 3.25026 17.0003V8.99937L2.45045 9.59995C2.11931 9.84828 1.64929 9.78131 1.40064 9.45054C1.15219 9.11928 1.21897 8.64933 1.55005 8.40073L9.55011 2.40073ZM4.75027 7.87437V16.2503H7.25029V10.0003C7.25029 9.58613 7.58608 9.25034 8.0003 9.25034H12.0003C12.4144 9.25048 12.7503 9.58621 12.7503 10.0003V16.2503H15.2504V7.87437L10.0003 3.93687L4.75027 7.87437ZM8.7503 16.2503H11.2503V10.7503H8.7503V16.2503Z",
		fill: "currentColor",
		key: "sk8l5t"
	}]]
};
// node_modules/@primeicons/angular/fesm2022/primeicons-angular-home.mjs
var Home = class Home extends CoreIcon {
	constructor() {
		super();
		this._icon = e;
	}
	static ɵfac = function Home_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || Home)();
	};
	static ɵcmp = (function() {
		const _forTrack0 = ($index, $item) => $item[1]["key"] || $index;
		function Home_For_1_Case_0_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "path");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("d", node_r1[1]["d"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("fill-rule", node_r1[1]["fillRule"])("clip-rule", node_r1[1]["clipRule"])("stroke", node_r1[1]["stroke"])("stroke-width", node_r1[1]["strokeWidth"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Home_For_1_Case_1_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "circle");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("r", node_r1[1]["r"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Home_For_1_Case_2_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "rect");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("x", node_r1[1]["x"])("y", node_r1[1]["y"])("width", node_r1[1]["width"])("height", node_r1[1]["height"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Home_For_1_Case_3_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "line");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("x1", node_r1[1]["x1"])("y1", node_r1[1]["y1"])("x2", node_r1[1]["x2"])("y2", node_r1[1]["y2"])("stroke", node_r1[1]["stroke"])("stroke-opacity", node_r1[1]["strokeOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Home_For_1_Case_4_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "polyline");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Home_For_1_Case_5_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "polygon");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("points", node_r1[1]["points"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Home_For_1_Case_6_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵdomElement(0, "ellipse");
			}
			if (rf & 2) {
				const node_r1 = ɵɵnextContext().$implicit;
				ɵɵattribute("cx", node_r1[1]["cx"])("cy", node_r1[1]["cy"])("rx", node_r1[1]["rx"])("ry", node_r1[1]["ry"])("fill", node_r1[1]["fill"])("fill-opacity", node_r1[1]["fillOpacity"])("opacity", node_r1[1]["opacity"]);
			}
		}
		function Home_For_1_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, Home_For_1_Case_0_Template, 1, 9, "path")(1, Home_For_1_Case_1_Template, 1, 6, "circle")(2, Home_For_1_Case_2_Template, 1, 9, "rect")(3, Home_For_1_Case_3_Template, 1, 7, "line")(4, Home_For_1_Case_4_Template, 1, 4, "polyline")(5, Home_For_1_Case_5_Template, 1, 4, "polygon")(6, Home_For_1_Case_6_Template, 1, 7, "ellipse");
			if (rf & 2) {
				let tmp_10_0 = void 0;
				const node_r1 = ctx.$implicit;
				ɵɵconditional((tmp_10_0 = node_r1[0]) === "path" ? 0 : tmp_10_0 === "circle" ? 1 : tmp_10_0 === "rect" ? 2 : tmp_10_0 === "line" ? 3 : tmp_10_0 === "polyline" ? 4 : tmp_10_0 === "polygon" ? 5 : tmp_10_0 === "ellipse" ? 6 : -1);
			}
		}
		return /*@__PURE__*/ ɵɵdefineComponent({
			type: Home,
			selectors: [[
				"svg",
				"data-p-icon",
				"home"
			]],
			features: [ɵɵInheritDefinitionFeature],
			decls: 2,
			vars: 0,
			template: function Home_Template(rf, ctx) {
				if (rf & 1) ɵɵrepeaterCreate(0, Home_For_1_Template, 7, 1, null, null, _forTrack0);
				if (rf & 2) ɵɵrepeater(ctx.iconNodes());
			},
			encapsulation: 2,
			changeDetection: 1
		});
	})();
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Home, [{
		type: Component,
		args: [{
			selector: "svg[data-p-icon=\"home\"]",
			standalone: true,
			template: "\n        @for (node of iconNodes(); track node[1]['key'] || $index) {\n            @switch (node[0]) {\n                @case ('path') {\n                    <svg:path\n                        [attr.d]=\"node[1]['d']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.fill-rule]=\"node[1]['fillRule']\"\n                        [attr.clip-rule]=\"node[1]['clipRule']\"\n                        [attr.stroke]=\"node[1]['stroke']\"\n                        [attr.stroke-width]=\"node[1]['strokeWidth']\"\n                        [attr.stroke-opacity]=\"node[1]['strokeOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('circle') {\n                    <svg:circle\n                        [attr.cx]=\"node[1]['cx']\"\n                        [attr.cy]=\"node[1]['cy']\"\n                        [attr.r]=\"node[1]['r']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('rect') {\n                    <svg:rect\n                        [attr.x]=\"node[1]['x']\"\n                        [attr.y]=\"node[1]['y']\"\n                        [attr.width]=\"node[1]['width']\"\n                        [attr.height]=\"node[1]['height']\"\n                        [attr.rx]=\"node[1]['rx']\"\n                        [attr.ry]=\"node[1]['ry']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('line') {\n                    <svg:line\n                        [attr.x1]=\"node[1]['x1']\"\n                        [attr.y1]=\"node[1]['y1']\"\n                        [attr.x2]=\"node[1]['x2']\"\n                        [attr.y2]=\"node[1]['y2']\"\n                        [attr.stroke]=\"node[1]['stroke']\"\n                        [attr.stroke-opacity]=\"node[1]['strokeOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('polyline') {\n                    <svg:polyline\n                        [attr.points]=\"node[1]['points']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('polygon') {\n                    <svg:polygon\n                        [attr.points]=\"node[1]['points']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n                @case ('ellipse') {\n                    <svg:ellipse\n                        [attr.cx]=\"node[1]['cx']\"\n                        [attr.cy]=\"node[1]['cy']\"\n                        [attr.rx]=\"node[1]['rx']\"\n                        [attr.ry]=\"node[1]['ry']\"\n                        [attr.fill]=\"node[1]['fill']\"\n                        [attr.fill-opacity]=\"node[1]['fillOpacity']\"\n                        [attr.opacity]=\"node[1]['opacity']\"\n                    />\n                }\n            }\n        }\n"
		}]
	}], () => [], null);
})();
// node_modules/primeng/fesm2022/primeng-breadcrumb.mjs
var style$1 = `

    .p-breadcrumb {
        background: dt('breadcrumb.background');
        padding: dt('breadcrumb.padding');
        overflow-x: auto;
    }

    .p-breadcrumb-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
        gap: dt('breadcrumb.gap');
    }

    .p-breadcrumb-separator {
        display: flex;
        align-items: center;
        color: dt('breadcrumb.separator.color');
    }

    .p-breadcrumb-separator-icon:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-breadcrumb::-webkit-scrollbar {
        display: none;
    }

    .p-breadcrumb-item-link {
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: dt('breadcrumb.item.gap');
        transition:
            background dt('breadcrumb.transition.duration'),
            color dt('breadcrumb.transition.duration'),
            outline-color dt('breadcrumb.transition.duration'),
            box-shadow dt('breadcrumb.transition.duration');
        border-radius: dt('breadcrumb.item.border.radius');
        outline-color: transparent;
        color: dt('breadcrumb.item.color');
        font-weight: dt('breadcrumb.item.label.font.weight');
        font-size: dt('breadcrumb.item.label.font.size');
    }

    .p-breadcrumb-item-link:focus-visible {
        box-shadow: dt('breadcrumb.item.focus.ring.shadow');
        outline: dt('breadcrumb.item.focus.ring.width') dt('breadcrumb.item.focus.ring.style') dt('breadcrumb.item.focus.ring.color');
        outline-offset: dt('breadcrumb.item.focus.ring.offset');
    }

    .p-breadcrumb-item-link:hover,
    .p-breadcrumb-item-link:hover .p-breadcrumb-item-label {
        color: dt('breadcrumb.item.hover.color');
    }

    .p-breadcrumb-item-label {
        transition: inherit;
        font-weight: dt('breadcrumb.item.label.font.weight');
        font-size: dt('breadcrumb.item.label.font.size');
    }

    .p-breadcrumb-item-icon,
    .p-breadcrumb-item-link svg,
    .p-breadcrumb-item-link i {
        color: dt('breadcrumb.item.icon.color');
        width: dt('breadcrumb.item.icon.size');
        height: dt('breadcrumb.item.icon.size');
        transition: inherit;
    }

    .p-breadcrumb-item-link i {
        font-size: dt('breadcrumb.item.icon.size');
    }

    .p-breadcrumb-item-link:hover .p-breadcrumb-item-icon,
    .p-breadcrumb-item-link:hover svg,
    .p-breadcrumb-item-link:hover i {
        color: dt('breadcrumb.item.icon.hover.color');
    }

    .p-breadcrumb-ellipsis {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: dt('breadcrumb.item.icon.color');
    }


/* For PrimeNG */
p-breadcrumb {
    max-width: 100%;
}
`;
var classes = {
	root: () => ["p-breadcrumb p-component"],
	list: "p-breadcrumb-list",
	homeItem: "p-breadcrumb-home-item",
	separator: "p-breadcrumb-separator",
	item: ({ menuitem }) => ["p-breadcrumb-item", { "p-disabled": menuitem.disabled }],
	itemLink: "p-breadcrumb-item-link",
	itemIcon: "p-breadcrumb-item-icon",
	itemLabel: "p-breadcrumb-item-label"
};
var BreadCrumbStyle = class BreadCrumbStyle extends BaseStyle {
	name = "breadcrumb";
	style = style$1;
	classes = classes;
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵBreadCrumbStyle_BaseFactory = void 0;
		return function BreadCrumbStyle_Factory(__ngFactoryType__) {
			return (ɵBreadCrumbStyle_BaseFactory || (ɵBreadCrumbStyle_BaseFactory = ɵɵgetInheritedFactory(BreadCrumbStyle)))(__ngFactoryType__ || BreadCrumbStyle);
		};
	})();
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: BreadCrumbStyle,
		factory: BreadCrumbStyle.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadCrumbStyle, [{ type: Injectable }], null, null);
})();
var BreadcrumbClasses;
(function(BreadcrumbClasses) {
	BreadcrumbClasses["root"] = "p-breadcrumb";
	BreadcrumbClasses["list"] = "p-breadcrumb-list";
	BreadcrumbClasses["homeItem"] = "p-breadcrumb-home-item";
	BreadcrumbClasses["separator"] = "p-breadcrumb-separator";
	BreadcrumbClasses["item"] = "p-breadcrumb-item";
	BreadcrumbClasses["itemLink"] = "p-breadcrumb-item-link";
	BreadcrumbClasses["itemIcon"] = "p-breadcrumb-item-icon";
	BreadcrumbClasses["itemLabel"] = "p-breadcrumb-item-label";
})(BreadcrumbClasses || (BreadcrumbClasses = {}));
var BREADCRUMB_INSTANCE = new InjectionToken("BREADCRUMB_INSTANCE");
var Breadcrumb = class Breadcrumb extends BaseComponent {
	componentName = "Breadcrumb";
	bindDirectiveInstance = inject(Bind, { self: true });
	model = input(...ngDevMode ? [void 0, { debugName: "model" }] : /* istanbul ignore next */ []);
	style = input(...ngDevMode ? [void 0, { debugName: "style" }] : /* istanbul ignore next */ []);
	styleClass = input(...ngDevMode ? [void 0, { debugName: "styleClass" }] : /* istanbul ignore next */ []);
	home = input(...ngDevMode ? [void 0, { debugName: "home" }] : /* istanbul ignore next */ []);
	homeAriaLabel = input(...ngDevMode ? [void 0, { debugName: "homeAriaLabel" }] : /* istanbul ignore next */ []);
	onItemClick = output();
	itemTemplate = contentChild("item", {
		...ngDevMode ? { debugName: "itemTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	separatorTemplate = contentChild("separator", {
		...ngDevMode ? { debugName: "separatorTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	showHome = computed(() => this.home() && this.home().visible !== false, ...ngDevMode ? [{ debugName: "showHome" }] : /* istanbul ignore next */ []);
	homeContext = computed(() => ({ $implicit: this.home() }), ...ngDevMode ? [{ debugName: "homeContext" }] : /* istanbul ignore next */ []);
	homeHref = computed(() => this.home()?.url ?? null, ...ngDevMode ? [{ debugName: "homeHref" }] : /* istanbul ignore next */ []);
	homeTabindex = computed(() => this.home()?.disabled ? null : this.home()?.tabindex || "0", ...ngDevMode ? [{ debugName: "homeTabindex" }] : /* istanbul ignore next */ []);
	showSeparator = computed(() => this.model() && this.home(), ...ngDevMode ? [{ debugName: "showSeparator" }] : /* istanbul ignore next */ []);
	_componentStyle = inject(BreadCrumbStyle);
	onClick(event, item) {
		if (item.disabled) {
			event.preventDefault();
			return;
		}
		if (!item.url && !item.routerLink) event.preventDefault();
		if (item.command) item.command({
			originalEvent: event,
			item
		});
		this.onItemClick.emit({
			originalEvent: event,
			item
		});
	}
	onAfterViewChecked() {
		this.bindDirectiveInstance.setAttrs(this.ptm("host"));
	}
	getPTOptions(item, index, key) {
		return this.ptm(key, { context: {
			item,
			index
		} });
	}
	getItemHref(item) {
		return item.url ?? null;
	}
	getItemTabindex(item) {
		return item.disabled ? null : item.tabindex || "0";
	}
	getRouterLinkActiveOptions(item) {
		return item.routerLinkActiveOptions || { exact: false };
	}
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵBreadcrumb_BaseFactory = void 0;
		return function Breadcrumb_Factory(__ngFactoryType__) {
			return (ɵBreadcrumb_BaseFactory || (ɵBreadcrumb_BaseFactory = ɵɵgetInheritedFactory(Breadcrumb)))(__ngFactoryType__ || Breadcrumb);
		};
	})();
	static ɵcmp = (function() {
		const _c0 = ["item"];
		const _c1 = ["separator"];
		const _c2 = (a0) => ({ menuitem: a0 });
		const _c3 = (a0) => ({ $implicit: a0 });
		const _forTrack0 = ($index, $item) => $item.id || $index;
		function Breadcrumb_Conditional_2_Conditional_2_ng_container_0_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Breadcrumb_Conditional_2_Conditional_2_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, Breadcrumb_Conditional_2_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 4);
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(2);
				ɵɵproperty("ngTemplateOutlet", ctx_r0.itemTemplate())("ngTemplateOutletContext", ctx_r0.homeContext());
			}
		}
		function Breadcrumb_Conditional_2_Conditional_3_Conditional_0_Conditional_1_Template(rf, ctx) {
			if (rf & 1) ɵɵelement(0, "span", 0);
			if (rf & 2) {
				ɵɵnextContext(3);
				const homeItem_r3 = ɵɵreadContextLet(0);
				const ctx_r0 = ɵɵnextContext();
				ɵɵstyleMap(homeItem_r3.iconStyle);
				ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("itemIcon"), homeItem_r3.icon, homeItem_r3.iconClass));
				ɵɵproperty("pBind", ctx_r0.ptm("itemIcon"));
			}
		}
		function Breadcrumb_Conditional_2_Conditional_3_Conditional_0_Conditional_2_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵelement(0, "svg", 11);
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(4);
				ɵɵclassMap(ctx_r0.cx("itemIcon"));
				ɵɵproperty("pBind", ctx_r0.ptm("itemIcon"));
			}
		}
		function Breadcrumb_Conditional_2_Conditional_3_Conditional_0_Conditional_3_Conditional_0_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "span", 0);
				ɵɵtext(1);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				ɵɵnextContext(4);
				const homeItem_r3 = ɵɵreadContextLet(0);
				const ctx_r0 = ɵɵnextContext();
				ɵɵstyleMap(homeItem_r3.labelStyle);
				ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("itemLabel"), homeItem_r3.labelClass));
				ɵɵproperty("pBind", ctx_r0.ptm("itemLabel"));
				ɵɵadvance();
				ɵɵtextInterpolate(homeItem_r3.label);
			}
		}
		function Breadcrumb_Conditional_2_Conditional_3_Conditional_0_Conditional_3_Conditional_1_Template(rf, ctx) {
			if (rf & 1) ɵɵelement(0, "span", 13);
			if (rf & 2) {
				ɵɵnextContext(4);
				const homeItem_r3 = ɵɵreadContextLet(0);
				const ctx_r0 = ɵɵnextContext();
				ɵɵstyleMap(homeItem_r3.labelStyle);
				ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("itemLabel"), homeItem_r3.labelClass));
				ɵɵproperty("innerHTML", homeItem_r3.label, ɵɵsanitizeHtml)("pBind", ctx_r0.ptm("itemLabel"));
			}
		}
		function Breadcrumb_Conditional_2_Conditional_3_Conditional_0_Conditional_3_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, Breadcrumb_Conditional_2_Conditional_3_Conditional_0_Conditional_3_Conditional_0_Template, 2, 6, "span", 8)(1, Breadcrumb_Conditional_2_Conditional_3_Conditional_0_Conditional_3_Conditional_1_Template, 1, 6, "span", 12);
			if (rf & 2) {
				ɵɵnextContext(3);
				const homeItem_r3 = ɵɵreadContextLet(0);
				ɵɵconditional(homeItem_r3.escape !== false ? 0 : 1);
			}
		}
		function Breadcrumb_Conditional_2_Conditional_3_Conditional_0_Conditional_4_Template(rf, ctx) {
			if (rf & 1) ɵɵelement(0, "p-badge", 14);
			if (rf & 2) {
				ɵɵnextContext(3);
				const homeItem_r3 = ɵɵreadContextLet(0);
				const ctx_r0 = ɵɵnextContext();
				ɵɵclassMap(homeItem_r3.badgeStyleClass);
				ɵɵproperty("value", homeItem_r3.badge)("pt", ctx_r0.ptm("pcBadge"))("unstyled", ctx_r0.unstyled());
			}
		}
		function Breadcrumb_Conditional_2_Conditional_3_Conditional_0_Template(rf, ctx) {
			if (rf & 1) {
				const _r2 = ɵɵgetCurrentView();
				ɵɵelementStart(0, "a", 7);
				ɵɵlistener("click", function Breadcrumb_Conditional_2_Conditional_3_Conditional_0_Template_a_click_0_listener($event) {
					ɵɵrestoreView(_r2);
					ɵɵnextContext(2);
					const homeItem_r3 = ɵɵreadContextLet(0);
					const ctx_r0 = ɵɵnextContext();
					return ɵɵresetView(ctx_r0.onClick($event, homeItem_r3));
				});
				ɵɵconditionalCreate(1, Breadcrumb_Conditional_2_Conditional_3_Conditional_0_Conditional_1_Template, 1, 5, "span", 8)(2, Breadcrumb_Conditional_2_Conditional_3_Conditional_0_Conditional_2_Template, 1, 3, "svg", 9);
				ɵɵconditionalCreate(3, Breadcrumb_Conditional_2_Conditional_3_Conditional_0_Conditional_3_Template, 2, 1);
				ɵɵconditionalCreate(4, Breadcrumb_Conditional_2_Conditional_3_Conditional_0_Conditional_4_Template, 1, 5, "p-badge", 10);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				ɵɵnextContext(2);
				const homeItem_r3 = ɵɵreadContextLet(0);
				const ctx_r0 = ɵɵnextContext();
				ɵɵstyleMap(homeItem_r3.linkStyle);
				ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("itemLink"), homeItem_r3.linkClass));
				ɵɵproperty("href", ctx_r0.homeHref(), ɵɵsanitizeUrl)("target", homeItem_r3.target)("pBind", ctx_r0.ptm("itemLink"));
				ɵɵattribute("aria-label", ctx_r0.homeAriaLabel())("title", homeItem_r3.title)("tabindex", ctx_r0.homeTabindex())("data-automationid", homeItem_r3.automationId);
				ɵɵadvance();
				ɵɵconditional(homeItem_r3.icon ? 1 : 2);
				ɵɵadvance(2);
				ɵɵconditional(homeItem_r3.label ? 3 : -1);
				ɵɵadvance();
				ɵɵconditional(homeItem_r3.badge ? 4 : -1);
			}
		}
		function Breadcrumb_Conditional_2_Conditional_3_Conditional_1_Conditional_1_Template(rf, ctx) {
			if (rf & 1) ɵɵelement(0, "span", 0);
			if (rf & 2) {
				ɵɵnextContext(3);
				const homeItem_r3 = ɵɵreadContextLet(0);
				const ctx_r0 = ɵɵnextContext();
				ɵɵstyleMap(homeItem_r3.iconStyle);
				ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("itemIcon"), homeItem_r3.icon, homeItem_r3.iconClass));
				ɵɵproperty("pBind", ctx_r0.ptm("itemIcon"));
			}
		}
		function Breadcrumb_Conditional_2_Conditional_3_Conditional_1_Conditional_2_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵelement(0, "svg", 11);
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(4);
				ɵɵclassMap(ctx_r0.cx("itemIcon"));
				ɵɵproperty("pBind", ctx_r0.ptm("itemIcon"));
			}
		}
		function Breadcrumb_Conditional_2_Conditional_3_Conditional_1_Conditional_3_Conditional_0_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "span", 0);
				ɵɵtext(1);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				ɵɵnextContext(4);
				const homeItem_r3 = ɵɵreadContextLet(0);
				const ctx_r0 = ɵɵnextContext();
				ɵɵstyleMap(homeItem_r3.labelStyle);
				ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("itemLabel"), homeItem_r3.labelClass));
				ɵɵproperty("pBind", ctx_r0.ptm("itemLabel"));
				ɵɵadvance();
				ɵɵtextInterpolate(homeItem_r3.label);
			}
		}
		function Breadcrumb_Conditional_2_Conditional_3_Conditional_1_Conditional_3_Conditional_1_Template(rf, ctx) {
			if (rf & 1) ɵɵelement(0, "span", 13);
			if (rf & 2) {
				ɵɵnextContext(4);
				const homeItem_r3 = ɵɵreadContextLet(0);
				const ctx_r0 = ɵɵnextContext();
				ɵɵstyleMap(homeItem_r3.labelStyle);
				ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("itemLabel"), homeItem_r3.labelClass));
				ɵɵproperty("innerHTML", homeItem_r3.label, ɵɵsanitizeHtml)("pBind", ctx_r0.ptm("itemLabel"));
			}
		}
		function Breadcrumb_Conditional_2_Conditional_3_Conditional_1_Conditional_3_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, Breadcrumb_Conditional_2_Conditional_3_Conditional_1_Conditional_3_Conditional_0_Template, 2, 6, "span", 8)(1, Breadcrumb_Conditional_2_Conditional_3_Conditional_1_Conditional_3_Conditional_1_Template, 1, 6, "span", 12);
			if (rf & 2) {
				ɵɵnextContext(3);
				const homeItem_r3 = ɵɵreadContextLet(0);
				ɵɵconditional(homeItem_r3.escape !== false ? 0 : 1);
			}
		}
		function Breadcrumb_Conditional_2_Conditional_3_Conditional_1_Conditional_4_Template(rf, ctx) {
			if (rf & 1) ɵɵelement(0, "p-badge", 14);
			if (rf & 2) {
				ɵɵnextContext(3);
				const homeItem_r3 = ɵɵreadContextLet(0);
				const ctx_r0 = ɵɵnextContext();
				ɵɵclassMap(homeItem_r3.badgeStyleClass);
				ɵɵproperty("value", homeItem_r3.badge)("pt", ctx_r0.ptm("pcBadge"))("unstyled", ctx_r0.unstyled());
			}
		}
		function Breadcrumb_Conditional_2_Conditional_3_Conditional_1_Template(rf, ctx) {
			if (rf & 1) {
				const _r4 = ɵɵgetCurrentView();
				ɵɵelementStart(0, "a", 15);
				ɵɵlistener("click", function Breadcrumb_Conditional_2_Conditional_3_Conditional_1_Template_a_click_0_listener($event) {
					ɵɵrestoreView(_r4);
					ɵɵnextContext(2);
					const homeItem_r3 = ɵɵreadContextLet(0);
					const ctx_r0 = ɵɵnextContext();
					return ɵɵresetView(ctx_r0.onClick($event, homeItem_r3));
				});
				ɵɵconditionalCreate(1, Breadcrumb_Conditional_2_Conditional_3_Conditional_1_Conditional_1_Template, 1, 5, "span", 8)(2, Breadcrumb_Conditional_2_Conditional_3_Conditional_1_Conditional_2_Template, 1, 3, "svg", 9);
				ɵɵconditionalCreate(3, Breadcrumb_Conditional_2_Conditional_3_Conditional_1_Conditional_3_Template, 2, 1);
				ɵɵconditionalCreate(4, Breadcrumb_Conditional_2_Conditional_3_Conditional_1_Conditional_4_Template, 1, 5, "p-badge", 10);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				ɵɵnextContext(2);
				const homeItem_r3 = ɵɵreadContextLet(0);
				const ctx_r0 = ɵɵnextContext();
				ɵɵstyleMap(homeItem_r3.linkStyle);
				ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("itemLink"), homeItem_r3.linkClass));
				ɵɵproperty("routerLink", homeItem_r3.routerLink)("queryParams", homeItem_r3.queryParams)("routerLinkActiveOptions", ctx_r0.getRouterLinkActiveOptions(homeItem_r3))("target", homeItem_r3.target)("fragment", homeItem_r3.fragment)("queryParamsHandling", homeItem_r3.queryParamsHandling)("preserveFragment", homeItem_r3.preserveFragment)("skipLocationChange", homeItem_r3.skipLocationChange)("replaceUrl", homeItem_r3.replaceUrl)("state", homeItem_r3.state)("pBind", ctx_r0.ptm("itemLink"));
				ɵɵattribute("aria-label", ctx_r0.homeAriaLabel())("title", homeItem_r3.title)("tabindex", ctx_r0.homeTabindex())("data-automationid", homeItem_r3.automationId);
				ɵɵadvance();
				ɵɵconditional(homeItem_r3.icon ? 1 : 2);
				ɵɵadvance(2);
				ɵɵconditional(homeItem_r3.label ? 3 : -1);
				ɵɵadvance();
				ɵɵconditional(homeItem_r3.badge ? 4 : -1);
			}
		}
		function Breadcrumb_Conditional_2_Conditional_3_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, Breadcrumb_Conditional_2_Conditional_3_Conditional_0_Template, 5, 14, "a", 5)(1, Breadcrumb_Conditional_2_Conditional_3_Conditional_1_Template, 5, 22, "a", 6);
			if (rf & 2) {
				ɵɵnextContext();
				const homeItem_r3 = ɵɵreadContextLet(0);
				ɵɵconditional(!homeItem_r3.routerLink ? 0 : 1);
			}
		}
		function Breadcrumb_Conditional_2_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵdeclareLet(0);
				ɵɵelementStart(1, "li", 3);
				ɵɵconditionalCreate(2, Breadcrumb_Conditional_2_Conditional_2_Template, 1, 2, "ng-container")(3, Breadcrumb_Conditional_2_Conditional_3_Template, 2, 1);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				const homeItem_r5 = ɵɵstoreLet(ctx_r0.home());
				ɵɵadvance();
				ɵɵstyleMap(homeItem_r5.style);
				ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("homeItem"), homeItem_r5.styleClass));
				ɵɵproperty("tooltipOptions", homeItem_r5.tooltipOptions)("pBind", ctx_r0.ptm("homeItem"))("unstyled", ctx_r0.unstyled());
				ɵɵattribute("id", homeItem_r5.id);
				ɵɵadvance();
				ɵɵconditional(ctx_r0.itemTemplate() ? 2 : 3);
			}
		}
		function Breadcrumb_Conditional_3_Conditional_1_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵelement(0, "svg", 16);
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(2);
				ɵɵproperty("pBind", ctx_r0.ptm("separatorIcon"));
			}
		}
		function Breadcrumb_Conditional_3_Conditional_2_ng_container_0_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Breadcrumb_Conditional_3_Conditional_2_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, Breadcrumb_Conditional_3_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 17);
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(2);
				ɵɵproperty("ngTemplateOutlet", ctx_r0.separatorTemplate());
			}
		}
		function Breadcrumb_Conditional_3_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "li", 0);
				ɵɵconditionalCreate(1, Breadcrumb_Conditional_3_Conditional_1_Template, 1, 1, "svg", 16)(2, Breadcrumb_Conditional_3_Conditional_2_Template, 1, 1, "ng-container");
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵclassMap(ctx_r0.cx("separator"));
				ɵɵproperty("pBind", ctx_r0.ptm("separator"));
				ɵɵadvance();
				ɵɵconditional(!ctx_r0.separatorTemplate() ? 1 : 2);
			}
		}
		function Breadcrumb_For_5_Conditional_0_Conditional_1_ng_container_0_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Breadcrumb_For_5_Conditional_0_Conditional_1_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, Breadcrumb_For_5_Conditional_0_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 4);
			if (rf & 2) {
				const menuitem_r6 = ɵɵnextContext(2).$implicit;
				const ctx_r0 = ɵɵnextContext();
				ɵɵproperty("ngTemplateOutlet", ctx_r0.itemTemplate())("ngTemplateOutletContext", ɵɵpureFunction1(2, _c3, menuitem_r6));
			}
		}
		function Breadcrumb_For_5_Conditional_0_Conditional_2_Conditional_0_Conditional_1_Template(rf, ctx) {
			if (rf & 1) ɵɵelement(0, "span", 0);
			if (rf & 2) {
				const ctx_r7 = ɵɵnextContext(4);
				const menuitem_r6 = ctx_r7.$implicit;
				const ɵ$index_66_r9 = ctx_r7.$index;
				const ctx_r0 = ɵɵnextContext();
				ɵɵstyleMap(menuitem_r6.iconStyle);
				ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("itemIcon"), menuitem_r6.icon, menuitem_r6.iconClass));
				ɵɵproperty("pBind", ctx_r0.getPTOptions(menuitem_r6, ɵ$index_66_r9, "itemIcon"));
			}
		}
		function Breadcrumb_For_5_Conditional_0_Conditional_2_Conditional_0_Conditional_2_Conditional_0_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "span", 0);
				ɵɵtext(1);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r7 = ɵɵnextContext(5);
				const menuitem_r6 = ctx_r7.$implicit;
				const ɵ$index_66_r9 = ctx_r7.$index;
				const ctx_r0 = ɵɵnextContext();
				ɵɵstyleMap(menuitem_r6.labelStyle);
				ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("itemLabel"), menuitem_r6.labelClass));
				ɵɵproperty("pBind", ctx_r0.getPTOptions(menuitem_r6, ɵ$index_66_r9, "itemLabel"));
				ɵɵadvance();
				ɵɵtextInterpolate(menuitem_r6.label);
			}
		}
		function Breadcrumb_For_5_Conditional_0_Conditional_2_Conditional_0_Conditional_2_Conditional_1_Template(rf, ctx) {
			if (rf & 1) ɵɵelement(0, "span", 13);
			if (rf & 2) {
				const ctx_r7 = ɵɵnextContext(5);
				const menuitem_r6 = ctx_r7.$implicit;
				const ɵ$index_66_r9 = ctx_r7.$index;
				const ctx_r0 = ɵɵnextContext();
				ɵɵstyleMap(menuitem_r6.labelStyle);
				ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("itemLabel"), menuitem_r6.labelClass));
				ɵɵproperty("innerHTML", menuitem_r6.label, ɵɵsanitizeHtml)("pBind", ctx_r0.getPTOptions(menuitem_r6, ɵ$index_66_r9, "itemLabel"));
			}
		}
		function Breadcrumb_For_5_Conditional_0_Conditional_2_Conditional_0_Conditional_2_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, Breadcrumb_For_5_Conditional_0_Conditional_2_Conditional_0_Conditional_2_Conditional_0_Template, 2, 6, "span", 8)(1, Breadcrumb_For_5_Conditional_0_Conditional_2_Conditional_0_Conditional_2_Conditional_1_Template, 1, 6, "span", 12);
			if (rf & 2) {
				const menuitem_r6 = ɵɵnextContext(4).$implicit;
				ɵɵconditional(menuitem_r6.escape !== false ? 0 : 1);
			}
		}
		function Breadcrumb_For_5_Conditional_0_Conditional_2_Conditional_0_Conditional_3_Template(rf, ctx) {
			if (rf & 1) ɵɵelement(0, "p-badge", 14);
			if (rf & 2) {
				const ctx_r7 = ɵɵnextContext(4);
				const menuitem_r6 = ctx_r7.$implicit;
				const ɵ$index_66_r9 = ctx_r7.$index;
				const ctx_r0 = ɵɵnextContext();
				ɵɵclassMap(menuitem_r6.badgeStyleClass);
				ɵɵproperty("value", menuitem_r6.badge)("pt", ctx_r0.getPTOptions(menuitem_r6, ɵ$index_66_r9, "pcBadge"))("unstyled", ctx_r0.unstyled());
			}
		}
		function Breadcrumb_For_5_Conditional_0_Conditional_2_Conditional_0_Template(rf, ctx) {
			if (rf & 1) {
				const _r7 = ɵɵgetCurrentView();
				ɵɵelementStart(0, "a", 20);
				ɵɵlistener("click", function Breadcrumb_For_5_Conditional_0_Conditional_2_Conditional_0_Template_a_click_0_listener($event) {
					ɵɵrestoreView(_r7);
					const menuitem_r6 = ɵɵnextContext(3).$implicit;
					const ctx_r0 = ɵɵnextContext();
					return ɵɵresetView(ctx_r0.onClick($event, menuitem_r6));
				});
				ɵɵconditionalCreate(1, Breadcrumb_For_5_Conditional_0_Conditional_2_Conditional_0_Conditional_1_Template, 1, 5, "span", 8);
				ɵɵconditionalCreate(2, Breadcrumb_For_5_Conditional_0_Conditional_2_Conditional_0_Conditional_2_Template, 2, 1);
				ɵɵconditionalCreate(3, Breadcrumb_For_5_Conditional_0_Conditional_2_Conditional_0_Conditional_3_Template, 1, 5, "p-badge", 10);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r7 = ɵɵnextContext(3);
				const menuitem_r6 = ctx_r7.$implicit;
				const ɵ$index_66_r9 = ctx_r7.$index;
				const ctx_r0 = ɵɵnextContext();
				ɵɵstyleMap(menuitem_r6.linkStyle);
				ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("itemLink"), menuitem_r6.linkClass));
				ɵɵproperty("target", menuitem_r6.target)("pBind", ctx_r0.getPTOptions(menuitem_r6, ɵ$index_66_r9, "itemLink"));
				ɵɵattribute("href", ctx_r0.getItemHref(menuitem_r6), ɵɵsanitizeUrl)("title", menuitem_r6.title)("tabindex", ctx_r0.getItemTabindex(menuitem_r6))("data-automationid", menuitem_r6.automationId);
				ɵɵadvance();
				ɵɵconditional(menuitem_r6.icon ? 1 : -1);
				ɵɵadvance();
				ɵɵconditional(menuitem_r6.label ? 2 : -1);
				ɵɵadvance();
				ɵɵconditional(menuitem_r6.badge ? 3 : -1);
			}
		}
		function Breadcrumb_For_5_Conditional_0_Conditional_2_Conditional_1_Conditional_1_Template(rf, ctx) {
			if (rf & 1) ɵɵelement(0, "span", 0);
			if (rf & 2) {
				const ctx_r7 = ɵɵnextContext(4);
				const menuitem_r6 = ctx_r7.$implicit;
				const ɵ$index_66_r9 = ctx_r7.$index;
				const ctx_r0 = ɵɵnextContext();
				ɵɵstyleMap(menuitem_r6.iconStyle);
				ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("itemIcon"), menuitem_r6.icon, menuitem_r6.iconClass));
				ɵɵproperty("pBind", ctx_r0.getPTOptions(menuitem_r6, ɵ$index_66_r9, "itemIcon"));
			}
		}
		function Breadcrumb_For_5_Conditional_0_Conditional_2_Conditional_1_Conditional_2_Conditional_0_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "span", 0);
				ɵɵtext(1);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r7 = ɵɵnextContext(5);
				const menuitem_r6 = ctx_r7.$implicit;
				const ɵ$index_66_r9 = ctx_r7.$index;
				const ctx_r0 = ɵɵnextContext();
				ɵɵstyleMap(menuitem_r6.labelStyle);
				ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("itemLabel"), menuitem_r6.labelClass));
				ɵɵproperty("pBind", ctx_r0.getPTOptions(menuitem_r6, ɵ$index_66_r9, "itemLabel"));
				ɵɵadvance();
				ɵɵtextInterpolate(menuitem_r6.label);
			}
		}
		function Breadcrumb_For_5_Conditional_0_Conditional_2_Conditional_1_Conditional_2_Conditional_1_Template(rf, ctx) {
			if (rf & 1) ɵɵelement(0, "span", 13);
			if (rf & 2) {
				const ctx_r7 = ɵɵnextContext(5);
				const menuitem_r6 = ctx_r7.$implicit;
				const ɵ$index_66_r9 = ctx_r7.$index;
				const ctx_r0 = ɵɵnextContext();
				ɵɵstyleMap(menuitem_r6.labelStyle);
				ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("itemLabel"), menuitem_r6.labelClass));
				ɵɵproperty("innerHTML", menuitem_r6.label, ɵɵsanitizeHtml)("pBind", ctx_r0.getPTOptions(menuitem_r6, ɵ$index_66_r9, "itemLabel"));
			}
		}
		function Breadcrumb_For_5_Conditional_0_Conditional_2_Conditional_1_Conditional_2_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, Breadcrumb_For_5_Conditional_0_Conditional_2_Conditional_1_Conditional_2_Conditional_0_Template, 2, 6, "span", 8)(1, Breadcrumb_For_5_Conditional_0_Conditional_2_Conditional_1_Conditional_2_Conditional_1_Template, 1, 6, "span", 12);
			if (rf & 2) {
				const menuitem_r6 = ɵɵnextContext(4).$implicit;
				ɵɵconditional(menuitem_r6.escape !== false ? 0 : 1);
			}
		}
		function Breadcrumb_For_5_Conditional_0_Conditional_2_Conditional_1_Conditional_3_Template(rf, ctx) {
			if (rf & 1) ɵɵelement(0, "p-badge", 14);
			if (rf & 2) {
				const ctx_r7 = ɵɵnextContext(4);
				const menuitem_r6 = ctx_r7.$implicit;
				const ɵ$index_66_r9 = ctx_r7.$index;
				const ctx_r0 = ɵɵnextContext();
				ɵɵclassMap(menuitem_r6.badgeStyleClass);
				ɵɵproperty("value", menuitem_r6.badge)("pt", ctx_r0.getPTOptions(menuitem_r6, ɵ$index_66_r9, "pcBadge"))("unstyled", ctx_r0.unstyled());
			}
		}
		function Breadcrumb_For_5_Conditional_0_Conditional_2_Conditional_1_Template(rf, ctx) {
			if (rf & 1) {
				const _r10 = ɵɵgetCurrentView();
				ɵɵelementStart(0, "a", 15);
				ɵɵlistener("click", function Breadcrumb_For_5_Conditional_0_Conditional_2_Conditional_1_Template_a_click_0_listener($event) {
					ɵɵrestoreView(_r10);
					const menuitem_r6 = ɵɵnextContext(3).$implicit;
					const ctx_r0 = ɵɵnextContext();
					return ɵɵresetView(ctx_r0.onClick($event, menuitem_r6));
				});
				ɵɵconditionalCreate(1, Breadcrumb_For_5_Conditional_0_Conditional_2_Conditional_1_Conditional_1_Template, 1, 5, "span", 8);
				ɵɵconditionalCreate(2, Breadcrumb_For_5_Conditional_0_Conditional_2_Conditional_1_Conditional_2_Template, 2, 1);
				ɵɵconditionalCreate(3, Breadcrumb_For_5_Conditional_0_Conditional_2_Conditional_1_Conditional_3_Template, 1, 5, "p-badge", 10);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r7 = ɵɵnextContext(3);
				const menuitem_r6 = ctx_r7.$implicit;
				const ɵ$index_66_r9 = ctx_r7.$index;
				const ctx_r0 = ɵɵnextContext();
				ɵɵstyleMap(menuitem_r6.linkStyle);
				ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("itemLink"), menuitem_r6.linkClass));
				ɵɵproperty("routerLink", menuitem_r6.routerLink)("queryParams", menuitem_r6.queryParams)("routerLinkActiveOptions", ctx_r0.getRouterLinkActiveOptions(menuitem_r6))("target", menuitem_r6.target)("fragment", menuitem_r6.fragment)("queryParamsHandling", menuitem_r6.queryParamsHandling)("preserveFragment", menuitem_r6.preserveFragment)("skipLocationChange", menuitem_r6.skipLocationChange)("replaceUrl", menuitem_r6.replaceUrl)("state", menuitem_r6.state)("pBind", ctx_r0.getPTOptions(menuitem_r6, ɵ$index_66_r9, "itemLink"));
				ɵɵattribute("title", menuitem_r6.title)("tabindex", ctx_r0.getItemTabindex(menuitem_r6))("data-automationid", menuitem_r6.automationId);
				ɵɵadvance();
				ɵɵconditional(menuitem_r6.icon ? 1 : -1);
				ɵɵadvance();
				ɵɵconditional(menuitem_r6.label ? 2 : -1);
				ɵɵadvance();
				ɵɵconditional(menuitem_r6.badge ? 3 : -1);
			}
		}
		function Breadcrumb_For_5_Conditional_0_Conditional_2_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, Breadcrumb_For_5_Conditional_0_Conditional_2_Conditional_0_Template, 4, 13, "a", 19)(1, Breadcrumb_For_5_Conditional_0_Conditional_2_Conditional_1_Template, 4, 21, "a", 6);
			if (rf & 2) {
				const menuitem_r6 = ɵɵnextContext(2).$implicit;
				ɵɵconditional(!menuitem_r6.routerLink ? 0 : 1);
			}
		}
		function Breadcrumb_For_5_Conditional_0_Conditional_3_Conditional_1_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵelement(0, "svg", 16);
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(4);
				ɵɵproperty("pBind", ctx_r0.ptm("separatorIcon"));
			}
		}
		function Breadcrumb_For_5_Conditional_0_Conditional_3_Conditional_2_ng_container_0_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Breadcrumb_For_5_Conditional_0_Conditional_3_Conditional_2_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, Breadcrumb_For_5_Conditional_0_Conditional_3_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 17);
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(4);
				ɵɵproperty("ngTemplateOutlet", ctx_r0.separatorTemplate());
			}
		}
		function Breadcrumb_For_5_Conditional_0_Conditional_3_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "li", 0);
				ɵɵconditionalCreate(1, Breadcrumb_For_5_Conditional_0_Conditional_3_Conditional_1_Template, 1, 1, "svg", 16)(2, Breadcrumb_For_5_Conditional_0_Conditional_3_Conditional_2_Template, 1, 1, "ng-container");
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(3);
				ɵɵclassMap(ctx_r0.cx("separator"));
				ɵɵproperty("pBind", ctx_r0.ptm("separator"));
				ɵɵadvance();
				ɵɵconditional(!ctx_r0.separatorTemplate() ? 1 : 2);
			}
		}
		function Breadcrumb_For_5_Conditional_0_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "li", 18);
				ɵɵconditionalCreate(1, Breadcrumb_For_5_Conditional_0_Conditional_1_Template, 1, 4, "ng-container")(2, Breadcrumb_For_5_Conditional_0_Conditional_2_Template, 2, 1);
				ɵɵelementEnd();
				ɵɵconditionalCreate(3, Breadcrumb_For_5_Conditional_0_Conditional_3_Template, 3, 4, "li", 2);
			}
			if (rf & 2) {
				const ctx_r7 = ɵɵnextContext();
				const menuitem_r6 = ctx_r7.$implicit;
				const ɵ$index_66_r9 = ctx_r7.$index;
				const ɵ$count_66_r11 = ctx_r7.$count;
				const ctx_r0 = ɵɵnextContext();
				ɵɵstyleMap(menuitem_r6.style);
				ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("item", ɵɵpureFunction1(10, _c2, menuitem_r6)), menuitem_r6.styleClass));
				ɵɵproperty("tooltipOptions", menuitem_r6.tooltipOptions)("pBind", ctx_r0.getPTOptions(menuitem_r6, ɵ$index_66_r9, "item"))("pTooltipUnstyled", ctx_r0.unstyled());
				ɵɵattribute("id", menuitem_r6.id);
				ɵɵadvance();
				ɵɵconditional(ctx_r0.itemTemplate() ? 1 : 2);
				ɵɵadvance(2);
				ɵɵconditional(!(ɵ$index_66_r9 === ɵ$count_66_r11 - 1) ? 3 : -1);
			}
		}
		function Breadcrumb_For_5_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, Breadcrumb_For_5_Conditional_0_Template, 4, 12);
			if (rf & 2) {
				const menuitem_r6 = ctx.$implicit;
				ɵɵconditional(menuitem_r6.visible !== false ? 0 : -1);
			}
		}
		return /*@__PURE__*/ ɵɵdefineComponent({
			type: Breadcrumb,
			selectors: [["p-breadcrumb"]],
			contentQueries: function Breadcrumb_ContentQueries(rf, ctx, dirIndex) {
				if (rf & 1) ɵɵcontentQuerySignal(dirIndex, ctx.itemTemplate, _c0, 4)(dirIndex, ctx.separatorTemplate, _c1, 4);
				if (rf & 2) ɵɵqueryAdvance(2);
			},
			inputs: {
				model: [1, "model"],
				style: [1, "style"],
				styleClass: [1, "styleClass"],
				home: [1, "home"],
				homeAriaLabel: [1, "homeAriaLabel"]
			},
			outputs: { onItemClick: "onItemClick" },
			features: [
				ɵɵProvidersFeature([
					BreadCrumbStyle,
					{
						provide: BREADCRUMB_INSTANCE,
						useExisting: Breadcrumb
					},
					{
						provide: PARENT_INSTANCE,
						useExisting: Breadcrumb
					}
				]),
				ɵɵHostDirectivesFeature([Bind]),
				ɵɵInheritDefinitionFeature
			],
			decls: 6,
			vars: 10,
			consts: [
				[3, "pBind"],
				[
					"pTooltip",
					"",
					3,
					"class",
					"style",
					"tooltipOptions",
					"pBind",
					"unstyled"
				],
				[
					3,
					"class",
					"pBind"
				],
				[
					"pTooltip",
					"",
					3,
					"tooltipOptions",
					"pBind",
					"unstyled"
				],
				[
					4,
					"ngTemplateOutlet",
					"ngTemplateOutletContext"
				],
				[
					3,
					"href",
					"class",
					"style",
					"target",
					"pBind"
				],
				[
					"routerLinkActive",
					"p-menuitem-link-active",
					3,
					"routerLink",
					"queryParams",
					"routerLinkActiveOptions",
					"class",
					"style",
					"target",
					"fragment",
					"queryParamsHandling",
					"preserveFragment",
					"skipLocationChange",
					"replaceUrl",
					"state",
					"pBind"
				],
				[
					3,
					"click",
					"href",
					"target",
					"pBind"
				],
				[
					3,
					"class",
					"style",
					"pBind"
				],
				[
					"data-p-icon",
					"home",
					3,
					"class",
					"pBind"
				],
				[
					3,
					"class",
					"value",
					"pt",
					"unstyled"
				],
				[
					"data-p-icon",
					"home",
					3,
					"pBind"
				],
				[
					3,
					"class",
					"style",
					"innerHTML",
					"pBind"
				],
				[
					3,
					"innerHTML",
					"pBind"
				],
				[
					3,
					"value",
					"pt",
					"unstyled"
				],
				[
					"routerLinkActive",
					"p-menuitem-link-active",
					3,
					"click",
					"routerLink",
					"queryParams",
					"routerLinkActiveOptions",
					"target",
					"fragment",
					"queryParamsHandling",
					"preserveFragment",
					"skipLocationChange",
					"replaceUrl",
					"state",
					"pBind"
				],
				[
					"data-p-icon",
					"chevron-right",
					3,
					"pBind"
				],
				[4, "ngTemplateOutlet"],
				[
					"pTooltip",
					"",
					3,
					"tooltipOptions",
					"pBind",
					"pTooltipUnstyled"
				],
				[
					3,
					"class",
					"style",
					"target",
					"pBind"
				],
				[
					3,
					"click",
					"target",
					"pBind"
				]
			],
			template: function Breadcrumb_Template(rf, ctx) {
				if (rf & 1) {
					ɵɵelementStart(0, "nav", 0)(1, "ol", 0);
					ɵɵconditionalCreate(2, Breadcrumb_Conditional_2_Template, 4, 10, "li", 1);
					ɵɵconditionalCreate(3, Breadcrumb_Conditional_3_Template, 3, 4, "li", 2);
					ɵɵrepeaterCreate(4, Breadcrumb_For_5_Template, 1, 1, null, null, _forTrack0);
					ɵɵelementEnd()();
				}
				if (rf & 2) {
					ɵɵstyleMap(ctx.style());
					ɵɵclassMap(ctx.cn(ctx.cx("root"), ctx.styleClass()));
					ɵɵproperty("pBind", ctx.ptm("root"));
					ɵɵadvance();
					ɵɵclassMap(ctx.cx("list"));
					ɵɵproperty("pBind", ctx.ptm("list"));
					ɵɵadvance();
					ɵɵconditional(ctx.showHome() ? 2 : -1);
					ɵɵadvance();
					ɵɵconditional(ctx.showSeparator() ? 3 : -1);
					ɵɵadvance();
					ɵɵrepeater(ctx.model());
				}
			},
			dependencies: [
				NgTemplateOutlet,
				RouterModule,
				RouterLink,
				RouterLinkActive,
				TooltipModule,
				Tooltip,
				Bind,
				ChevronRight,
				Home,
				SharedModule,
				Badge
			],
			encapsulation: 2
		});
	})();
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Breadcrumb, [{
		type: Component,
		args: [{
			selector: "p-breadcrumb",
			standalone: true,
			imports: [
				NgTemplateOutlet,
				RouterModule,
				RouterLink,
				RouterLinkActive,
				TooltipModule,
				ChevronRight,
				Home,
				SharedModule,
				Bind,
				Badge
			],
			template: `
        <nav [pBind]="ptm('root')" [class]="cn(cx('root'), styleClass())" [style]="style()">
            <ol [class]="cx('list')" [pBind]="ptm('list')">
                @if (showHome()) {
                    @let homeItem = home()!;
                    <li [attr.id]="homeItem.id" [class]="cn(cx('homeItem'), homeItem.styleClass)" [style]="homeItem.style" pTooltip [tooltipOptions]="homeItem.tooltipOptions" [pBind]="ptm('homeItem')" [unstyled]="unstyled()">
                        @if (itemTemplate()) {
                            <ng-container *ngTemplateOutlet="itemTemplate(); context: homeContext()"></ng-container>
                        } @else {
                            @if (!homeItem.routerLink) {
                                <a
                                    [href]="homeHref()"
                                    [attr.aria-label]="homeAriaLabel()"
                                    [class]="cn(cx('itemLink'), homeItem.linkClass)"
                                    [style]="homeItem.linkStyle"
                                    (click)="onClick($event, homeItem)"
                                    [target]="homeItem.target"
                                    [attr.title]="homeItem.title"
                                    [attr.tabindex]="homeTabindex()"
                                    [attr.data-automationid]="homeItem.automationId"
                                    [pBind]="ptm('itemLink')"
                                >
                                    @if (homeItem.icon) {
                                        <span [class]="cn(cx('itemIcon'), homeItem.icon, homeItem.iconClass)" [style]="homeItem.iconStyle" [pBind]="ptm('itemIcon')"></span>
                                    } @else {
                                        <svg data-p-icon="home" [class]="cx('itemIcon')" [pBind]="ptm('itemIcon')" />
                                    }
                                    @if (homeItem.label) {
                                        @if (homeItem.escape !== false) {
                                            <span [class]="cn(cx('itemLabel'), homeItem.labelClass)" [style]="homeItem.labelStyle" [pBind]="ptm('itemLabel')">{{ homeItem.label }}</span>
                                        } @else {
                                            <span [class]="cn(cx('itemLabel'), homeItem.labelClass)" [style]="homeItem.labelStyle" [innerHTML]="homeItem.label" [pBind]="ptm('itemLabel')"></span>
                                        }
                                    }
                                    @if (homeItem.badge) {
                                        <p-badge [class]="homeItem.badgeStyleClass" [value]="homeItem.badge" [pt]="ptm('pcBadge')" [unstyled]="unstyled()" />
                                    }
                                </a>
                            } @else {
                                <a
                                    [routerLink]="homeItem.routerLink"
                                    routerLinkActive="p-menuitem-link-active"
                                    [attr.aria-label]="homeAriaLabel()"
                                    [queryParams]="homeItem.queryParams"
                                    [routerLinkActiveOptions]="getRouterLinkActiveOptions(homeItem)"
                                    [class]="cn(cx('itemLink'), homeItem.linkClass)"
                                    [style]="homeItem.linkStyle"
                                    (click)="onClick($event, homeItem)"
                                    [target]="homeItem.target"
                                    [attr.title]="homeItem.title"
                                    [attr.tabindex]="homeTabindex()"
                                    [attr.data-automationid]="homeItem.automationId"
                                    [fragment]="homeItem.fragment"
                                    [queryParamsHandling]="homeItem.queryParamsHandling"
                                    [preserveFragment]="homeItem.preserveFragment"
                                    [skipLocationChange]="homeItem.skipLocationChange"
                                    [replaceUrl]="homeItem.replaceUrl"
                                    [state]="homeItem.state"
                                    [pBind]="ptm('itemLink')"
                                >
                                    @if (homeItem.icon) {
                                        <span [class]="cn(cx('itemIcon'), homeItem.icon, homeItem.iconClass)" [style]="homeItem.iconStyle" [pBind]="ptm('itemIcon')"></span>
                                    } @else {
                                        <svg data-p-icon="home" [class]="cx('itemIcon')" [pBind]="ptm('itemIcon')" />
                                    }
                                    @if (homeItem.label) {
                                        @if (homeItem.escape !== false) {
                                            <span [class]="cn(cx('itemLabel'), homeItem.labelClass)" [style]="homeItem.labelStyle" [pBind]="ptm('itemLabel')">{{ homeItem.label }}</span>
                                        } @else {
                                            <span [class]="cn(cx('itemLabel'), homeItem.labelClass)" [style]="homeItem.labelStyle" [innerHTML]="homeItem.label" [pBind]="ptm('itemLabel')"></span>
                                        }
                                    }
                                    @if (homeItem.badge) {
                                        <p-badge [class]="homeItem.badgeStyleClass" [value]="homeItem.badge" [pt]="ptm('pcBadge')" [unstyled]="unstyled()" />
                                    }
                                </a>
                            }
                        }
                    </li>
                }
                @if (showSeparator()) {
                    <li [class]="cx('separator')" [pBind]="ptm('separator')">
                        @if (!separatorTemplate()) {
                            <svg data-p-icon="chevron-right" [pBind]="ptm('separatorIcon')" />
                        } @else {
                            <ng-container *ngTemplateOutlet="separatorTemplate()"></ng-container>
                        }
                    </li>
                }
                @for (menuitem of model(); track menuitem.id || $index; let end = $last, i = $index) {
                    @if (menuitem.visible !== false) {
                        <li
                            [class]="cn(cx('item', { menuitem }), menuitem.styleClass)"
                            [attr.id]="menuitem.id"
                            [style]="menuitem.style"
                            pTooltip
                            [tooltipOptions]="menuitem.tooltipOptions"
                            [pBind]="getPTOptions(menuitem, i, 'item')"
                            [pTooltipUnstyled]="unstyled()"
                        >
                            @if (itemTemplate()) {
                                <ng-container *ngTemplateOutlet="itemTemplate(); context: { $implicit: menuitem }"></ng-container>
                            } @else {
                                @if (!menuitem.routerLink) {
                                    <a
                                        [attr.href]="getItemHref(menuitem)"
                                        [class]="cn(cx('itemLink'), menuitem.linkClass)"
                                        [style]="menuitem.linkStyle"
                                        (click)="onClick($event, menuitem)"
                                        [target]="menuitem.target"
                                        [attr.title]="menuitem.title"
                                        [attr.tabindex]="getItemTabindex(menuitem)"
                                        [attr.data-automationid]="menuitem.automationId"
                                        [pBind]="getPTOptions(menuitem, i, 'itemLink')"
                                    >
                                        @if (menuitem.icon) {
                                            <span [class]="cn(cx('itemIcon'), menuitem.icon, menuitem.iconClass)" [style]="menuitem.iconStyle" [pBind]="getPTOptions(menuitem, i, 'itemIcon')"></span>
                                        }
                                        @if (menuitem.label) {
                                            @if (menuitem.escape !== false) {
                                                <span [class]="cn(cx('itemLabel'), menuitem.labelClass)" [style]="menuitem.labelStyle" [pBind]="getPTOptions(menuitem, i, 'itemLabel')">{{ menuitem.label }}</span>
                                            } @else {
                                                <span [class]="cn(cx('itemLabel'), menuitem.labelClass)" [style]="menuitem.labelStyle" [innerHTML]="menuitem.label" [pBind]="getPTOptions(menuitem, i, 'itemLabel')"></span>
                                            }
                                        }
                                        @if (menuitem.badge) {
                                            <p-badge [class]="menuitem.badgeStyleClass" [value]="menuitem.badge" [pt]="getPTOptions(menuitem, i, 'pcBadge')" [unstyled]="unstyled()" />
                                        }
                                    </a>
                                } @else {
                                    <a
                                        [routerLink]="menuitem.routerLink"
                                        routerLinkActive="p-menuitem-link-active"
                                        [queryParams]="menuitem.queryParams"
                                        [routerLinkActiveOptions]="getRouterLinkActiveOptions(menuitem)"
                                        [class]="cn(cx('itemLink'), menuitem.linkClass)"
                                        [style]="menuitem.linkStyle"
                                        (click)="onClick($event, menuitem)"
                                        [target]="menuitem.target"
                                        [attr.title]="menuitem.title"
                                        [attr.tabindex]="getItemTabindex(menuitem)"
                                        [attr.data-automationid]="menuitem.automationId"
                                        [fragment]="menuitem.fragment"
                                        [queryParamsHandling]="menuitem.queryParamsHandling"
                                        [preserveFragment]="menuitem.preserveFragment"
                                        [skipLocationChange]="menuitem.skipLocationChange"
                                        [replaceUrl]="menuitem.replaceUrl"
                                        [state]="menuitem.state"
                                        [pBind]="getPTOptions(menuitem, i, 'itemLink')"
                                    >
                                        @if (menuitem.icon) {
                                            <span [class]="cn(cx('itemIcon'), menuitem.icon, menuitem.iconClass)" [style]="menuitem.iconStyle" [pBind]="getPTOptions(menuitem, i, 'itemIcon')"></span>
                                        }
                                        @if (menuitem.label) {
                                            @if (menuitem.escape !== false) {
                                                <span [class]="cn(cx('itemLabel'), menuitem.labelClass)" [style]="menuitem.labelStyle" [pBind]="getPTOptions(menuitem, i, 'itemLabel')">{{ menuitem.label }}</span>
                                            } @else {
                                                <span [class]="cn(cx('itemLabel'), menuitem.labelClass)" [style]="menuitem.labelStyle" [innerHTML]="menuitem.label" [pBind]="getPTOptions(menuitem, i, 'itemLabel')"></span>
                                            }
                                        }
                                        @if (menuitem.badge) {
                                            <p-badge [class]="menuitem.badgeStyleClass" [value]="menuitem.badge" [pt]="getPTOptions(menuitem, i, 'pcBadge')" [unstyled]="unstyled()" />
                                        }
                                    </a>
                                }
                            }
                        </li>
                        @if (!end) {
                            <li [class]="cx('separator')" [pBind]="ptm('separator')">
                                @if (!separatorTemplate()) {
                                    <svg data-p-icon="chevron-right" [pBind]="ptm('separatorIcon')" />
                                } @else {
                                    <ng-container *ngTemplateOutlet="separatorTemplate()"></ng-container>
                                }
                            </li>
                        }
                    }
                }
            </ol>
        </nav>
    `,
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			providers: [
				BreadCrumbStyle,
				{
					provide: BREADCRUMB_INSTANCE,
					useExisting: Breadcrumb
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: Breadcrumb
				}
			],
			hostDirectives: [Bind]
		}]
	}], null, {
		model: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "model",
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
		home: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "home",
				required: false
			}]
		}],
		homeAriaLabel: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "homeAriaLabel",
				required: false
			}]
		}],
		onItemClick: [{
			type: Output,
			args: ["onItemClick"]
		}],
		itemTemplate: [{
			type: ContentChild,
			args: ["item", {
				descendants: false,
				isSignal: true
			}]
		}],
		separatorTemplate: [{
			type: ContentChild,
			args: ["separator", {
				descendants: false,
				isSignal: true
			}]
		}]
	});
})();
var BreadcrumbModule = class BreadcrumbModule {
	static ɵfac = function BreadcrumbModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || BreadcrumbModule)();
	};
	static ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({
		type: BreadcrumbModule,
		imports: [Breadcrumb, SharedModule],
		exports: [Breadcrumb, SharedModule]
	});
	static ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ imports: [
		Breadcrumb,
		SharedModule,
		SharedModule
	] });
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbModule, [{
		type: NgModule,
		args: [{
			imports: [Breadcrumb, SharedModule],
			exports: [Breadcrumb, SharedModule]
		}]
	}], null, null);
})();
export { BreadCrumbStyle, Breadcrumb, BreadcrumbClasses, BreadcrumbModule };
