import { Ai as setClassMetadata, Ga as ɵɵdefineNgModule, Gt as ChangeDetectionStrategy, Ji as ɵɵInheritDefinitionFeature, Jo as ɵɵprojectionDef, Jt as Component, Nn as NgModule, O as booleanAttribute, Ro as ɵɵlistener, Sn as Input, Ua as ɵɵdefineComponent, Wa as ɵɵdefineDirective, X as input, Xi as ɵɵProvidersFeature, _o as ɵɵgetInheritedFactory, aa as ɵɵattribute, ca as ɵɵclassMap, pr as ViewEncapsulation, qi as ɵɵHostDirectivesFeature, qo as ɵɵprojection, un as Directive, xn as Injectable } from "./core-D4dczhTZ.js";
import { N as NgControl } from "./forms-BhWnvdT_.js";
import { n as PARENT_INSTANCE, t as BaseComponent } from "./primeng-basecomponent-C8ezCQ4r.js";
import { U as InjectionToken, Ui as signal, c as computed, la as ɵɵdefineInjectable, ua as ɵɵdefineInjector, wr as inject, xn as effect } from "./_resource-chunk-B6oSsbEv.js";
import { t as CommonModule } from "./_common_module-chunk-CF6aUJZ1.js";
import { _ as l } from "./dist-2ljAlN4l.js";
import { Bind } from "./primeng_bind.js";
import "./common-BBp9OMOF.js";
import { s as BaseStyle } from "./primeng-config-Db_bbJUd.js";
// node_modules/primeng/fesm2022/primeng-basemodelholder.mjs
var BaseModelHolder = class BaseModelHolder extends BaseComponent {
	modelValue = signal(void 0, ...ngDevMode ? [{ debugName: "modelValue" }] : /* istanbul ignore next */ []);
	$filled = computed(() => l(this.modelValue()), ...ngDevMode ? [{ debugName: "$filled" }] : /* istanbul ignore next */ []);
	writeModelValue(value) {
		this.modelValue.set(value);
	}
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵBaseModelHolder_BaseFactory = void 0;
		return function BaseModelHolder_Factory(__ngFactoryType__) {
			return (ɵBaseModelHolder_BaseFactory || (ɵBaseModelHolder_BaseFactory = ɵɵgetInheritedFactory(BaseModelHolder)))(__ngFactoryType__ || BaseModelHolder);
		};
	})();
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: BaseModelHolder,
		features: [ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseModelHolder, [{
		type: Directive,
		args: [{ standalone: true }]
	}], null, null);
})();
// node_modules/primeng/fesm2022/primeng-fluid.mjs
var classes$1 = { root: "p-fluid" };
var FluidStyle = class FluidStyle extends BaseStyle {
	name = "fluid";
	classes = classes$1;
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵFluidStyle_BaseFactory = void 0;
		return function FluidStyle_Factory(__ngFactoryType__) {
			return (ɵFluidStyle_BaseFactory || (ɵFluidStyle_BaseFactory = ɵɵgetInheritedFactory(FluidStyle)))(__ngFactoryType__ || FluidStyle);
		};
	})();
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: FluidStyle,
		factory: FluidStyle.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FluidStyle, [{ type: Injectable }], null, null);
})();
var FluidClasses;
(function(FluidClasses) {
	FluidClasses["root"] = "p-fluid";
})(FluidClasses || (FluidClasses = {}));
var FLUID_INSTANCE = new InjectionToken("FLUID_INSTANCE");
var Fluid = class Fluid extends BaseComponent {
	componentName = "Fluid";
	$pcFluid = inject(FLUID_INSTANCE, {
		optional: true,
		skipSelf: true
	}) ?? void 0;
	bindDirectiveInstance = inject(Bind, { self: true });
	_componentStyle = inject(FluidStyle);
	onAfterViewChecked() {
		this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
	}
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵFluid_BaseFactory = void 0;
		return function Fluid_Factory(__ngFactoryType__) {
			return (ɵFluid_BaseFactory || (ɵFluid_BaseFactory = ɵɵgetInheritedFactory(Fluid)))(__ngFactoryType__ || Fluid);
		};
	})();
	static ɵcmp = (function() {
		return /*@__PURE__*/ ɵɵdefineComponent({
			type: Fluid,
			selectors: [["p-fluid"]],
			hostVars: 2,
			hostBindings: function Fluid_HostBindings(rf, ctx) {
				if (rf & 2) ɵɵclassMap(ctx.cx("root"));
			},
			features: [
				ɵɵProvidersFeature([
					FluidStyle,
					{
						provide: FLUID_INSTANCE,
						useExisting: Fluid
					},
					{
						provide: PARENT_INSTANCE,
						useExisting: Fluid
					}
				]),
				ɵɵHostDirectivesFeature([Bind]),
				ɵɵInheritDefinitionFeature
			],
			ngContentSelectors: ["*"],
			decls: 1,
			vars: 0,
			template: function Fluid_Template(rf, ctx) {
				if (rf & 1) {
					ɵɵprojectionDef();
					ɵɵprojection(0);
				}
			},
			dependencies: [CommonModule],
			encapsulation: 2
		});
	})();
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Fluid, [{
		type: Component,
		args: [{
			selector: "p-fluid",
			template: ` <ng-content></ng-content> `,
			standalone: true,
			imports: [CommonModule],
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			providers: [
				FluidStyle,
				{
					provide: FLUID_INSTANCE,
					useExisting: Fluid
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: Fluid
				}
			],
			host: { "[class]": "cx('root')" },
			hostDirectives: [Bind]
		}]
	}], null, null);
})();
var FluidModule = class FluidModule {
	static ɵfac = function FluidModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || FluidModule)();
	};
	static ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({
		type: FluidModule,
		imports: [Fluid],
		exports: [Fluid]
	});
	static ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ imports: [Fluid] });
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FluidModule, [{
		type: NgModule,
		args: [{
			imports: [Fluid],
			exports: [Fluid]
		}]
	}], null, null);
})();
// node_modules/@primeuix/styles/dist/inputtext/index.mjs
var style = "\n    .p-inputtext {\n        font-weight: dt('inputtext.font.weight');\n        font-size: dt('inputtext.font.size');\n        color: dt('inputtext.color');\n        background: dt('inputtext.background');\n        padding-block: dt('inputtext.padding.y');\n        padding-inline: dt('inputtext.padding.x');\n        border: 1px solid dt('inputtext.border.color');\n        transition:\n            background dt('inputtext.transition.duration'),\n            color dt('inputtext.transition.duration'),\n            border-color dt('inputtext.transition.duration'),\n            outline-color dt('inputtext.transition.duration'),\n            box-shadow dt('inputtext.transition.duration');\n        appearance: none;\n        border-radius: dt('inputtext.border.radius');\n        outline-color: transparent;\n        box-shadow: dt('inputtext.shadow');\n    }\n\n    .p-inputtext:enabled:hover {\n        border-color: dt('inputtext.hover.border.color');\n    }\n\n    .p-inputtext:enabled:focus {\n        border-color: dt('inputtext.focus.border.color');\n        box-shadow: dt('inputtext.focus.ring.shadow');\n        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');\n        outline-offset: dt('inputtext.focus.ring.offset');\n    }\n\n    .p-inputtext.p-invalid {\n        border-color: dt('inputtext.invalid.border.color');\n    }\n\n    .p-inputtext.p-variant-filled {\n        background: dt('inputtext.filled.background');\n    }\n\n    .p-inputtext.p-variant-filled:enabled:hover {\n        background: dt('inputtext.filled.hover.background');\n    }\n\n    .p-inputtext.p-variant-filled:enabled:focus {\n        background: dt('inputtext.filled.focus.background');\n    }\n\n    .p-inputtext:disabled {\n        opacity: 1;\n        background: dt('inputtext.disabled.background');\n        color: dt('inputtext.disabled.color');\n    }\n\n    .p-inputtext::placeholder {\n        color: dt('inputtext.placeholder.color');\n    }\n\n    .p-inputtext.p-invalid::placeholder {\n        color: dt('inputtext.invalid.placeholder.color');\n    }\n\n    .p-inputtext-sm {\n        font-size: dt('inputtext.sm.font.size');\n        padding-block: dt('inputtext.sm.padding.y');\n        padding-inline: dt('inputtext.sm.padding.x');\n    }\n\n    .p-inputtext-lg {\n        font-size: dt('inputtext.lg.font.size');\n        padding-block: dt('inputtext.lg.padding.y');\n        padding-inline: dt('inputtext.lg.padding.x');\n    }\n\n    .p-inputtext-fluid {\n        width: 100%;\n    }\n";
// node_modules/primeng/fesm2022/primeng-inputtext.mjs
var classes = { root: ({ instance }) => ["p-inputtext p-component", {
	"p-filled": instance.$filled(),
	"p-inputtext-sm": instance.pSize() === "small",
	"p-inputtext-lg": instance.pSize() === "large",
	"p-invalid": instance.invalid(),
	"p-variant-filled": instance.$variant() === "filled",
	"p-inputtext-fluid": instance.hasFluid
}] };
var InputTextStyle = class InputTextStyle extends BaseStyle {
	name = "inputtext";
	style = style;
	classes = classes;
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵInputTextStyle_BaseFactory = void 0;
		return function InputTextStyle_Factory(__ngFactoryType__) {
			return (ɵInputTextStyle_BaseFactory || (ɵInputTextStyle_BaseFactory = ɵɵgetInheritedFactory(InputTextStyle)))(__ngFactoryType__ || InputTextStyle);
		};
	})();
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: InputTextStyle,
		factory: InputTextStyle.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputTextStyle, [{ type: Injectable }], null, null);
})();
var InputTextClasses;
(function(InputTextClasses) {
	InputTextClasses["root"] = "p-inputtext";
})(InputTextClasses || (InputTextClasses = {}));
var INPUTTEXT_INSTANCE = new InjectionToken("INPUTTEXT_INSTANCE");
var InputText = class InputText extends BaseModelHolder {
	componentName = "InputText";
	hostName = input("", ...ngDevMode ? [{ debugName: "hostName" }] : /* istanbul ignore next */ []);
	pInputTextPT = input(...ngDevMode ? [void 0, { debugName: "pInputTextPT" }] : /* istanbul ignore next */ []);
	pInputTextUnstyled = input(...ngDevMode ? [void 0, { debugName: "pInputTextUnstyled" }] : /* istanbul ignore next */ []);
	bindDirectiveInstance = inject(Bind, { self: true });
	$pcInputText = inject(INPUTTEXT_INSTANCE, {
		optional: true,
		skipSelf: true
	}) ?? void 0;
	ngControl = inject(NgControl, {
		optional: true,
		self: true
	});
	pcFluid = inject(Fluid, {
		optional: true,
		host: true,
		skipSelf: true
	});
	pSize = input(...ngDevMode ? [void 0, { debugName: "pSize" }] : /* istanbul ignore next */ []);
	variant = input(...ngDevMode ? [void 0, { debugName: "variant" }] : /* istanbul ignore next */ []);
	fluid = input(void 0, {
		...ngDevMode ? { debugName: "fluid" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	invalid = input(void 0, {
		...ngDevMode ? { debugName: "invalid" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	$variant = computed(() => this.variant() || this.config.inputVariant() || void 0, ...ngDevMode ? [{ debugName: "$variant" }] : /* istanbul ignore next */ []);
	_componentStyle = inject(InputTextStyle);
	get hasFluid() {
		return this.fluid() ?? !!this.pcFluid;
	}
	dataP = computed(() => this.cn({
		invalid: this.invalid(),
		fluid: this.hasFluid,
		filled: this.$variant() === "filled",
		[this.pSize()]: this.pSize()
	}), ...ngDevMode ? [{ debugName: "dataP" }] : /* istanbul ignore next */ []);
	constructor() {
		super();
		effect(() => {
			const pt = this.pInputTextPT();
			if (pt) this.directivePT.set(pt);
		});
		effect(() => {
			if (this.pInputTextUnstyled()) this.directiveUnstyled.set(this.pInputTextUnstyled());
		});
	}
	onAfterViewInit() {
		this.writeModelValue(this.ngControl?.value ?? this.el.nativeElement.value);
		this.cd.detectChanges();
	}
	onAfterViewChecked() {
		this.bindDirectiveInstance.setAttrs(this.ptm("root"));
	}
	onDoCheck() {
		this.writeModelValue(this.ngControl?.value ?? this.el.nativeElement.value);
	}
	onInput() {
		this.writeModelValue(this.ngControl?.value ?? this.el.nativeElement.value);
	}
	static ɵfac = function InputText_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || InputText)();
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: InputText,
		selectors: [[
			"",
			"pInputText",
			""
		]],
		hostVars: 3,
		hostBindings: function InputText_HostBindings(rf, ctx) {
			if (rf & 1) ɵɵlistener("input", function InputText_input_HostBindingHandler() {
				return ctx.onInput();
			});
			if (rf & 2) {
				ɵɵattribute("data-p", ctx.dataP());
				ɵɵclassMap(ctx.cx("root"));
			}
		},
		inputs: {
			hostName: [1, "hostName"],
			pInputTextPT: [1, "pInputTextPT"],
			pInputTextUnstyled: [1, "pInputTextUnstyled"],
			pSize: [1, "pSize"],
			variant: [1, "variant"],
			fluid: [1, "fluid"],
			invalid: [1, "invalid"]
		},
		features: [
			ɵɵProvidersFeature([
				InputTextStyle,
				{
					provide: INPUTTEXT_INSTANCE,
					useExisting: InputText
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: InputText
				}
			]),
			ɵɵHostDirectivesFeature([Bind]),
			ɵɵInheritDefinitionFeature
		]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputText, [{
		type: Directive,
		args: [{
			selector: "[pInputText]",
			standalone: true,
			host: {
				"[class]": "cx('root')",
				"[attr.data-p]": "dataP()",
				"(input)": "onInput()"
			},
			providers: [
				InputTextStyle,
				{
					provide: INPUTTEXT_INSTANCE,
					useExisting: InputText
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: InputText
				}
			],
			hostDirectives: [Bind]
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
		pInputTextPT: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pInputTextPT",
				required: false
			}]
		}],
		pInputTextUnstyled: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pInputTextUnstyled",
				required: false
			}]
		}],
		pSize: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pSize",
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
		fluid: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "fluid",
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
		}]
	});
})();
var InputTextModule = class InputTextModule {
	static ɵfac = function InputTextModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || InputTextModule)();
	};
	static ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({
		type: InputTextModule,
		imports: [InputText],
		exports: [InputText]
	});
	static ɵinj = /*@__PURE__*/ ɵɵdefineInjector({});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputTextModule, [{
		type: NgModule,
		args: [{
			imports: [InputText],
			exports: [InputText]
		}]
	}], null, null);
})();
export { Fluid as a, InputTextStyle as i, InputTextClasses as n, BaseModelHolder as o, InputTextModule as r, InputText as t };
