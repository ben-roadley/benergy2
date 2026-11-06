import { U as InjectionToken, la as ɵɵdefineInjectable, ua as ɵɵdefineInjector, wr as inject } from "./_resource-chunk-B6oSsbEv.js";
import { Ai as setClassMetadata, Ga as ɵɵdefineNgModule, Gt as ChangeDetectionStrategy, Ji as ɵɵInheritDefinitionFeature, Jo as ɵɵprojectionDef, Jt as Component, Nn as NgModule, Sn as Input, Ua as ɵɵdefineComponent, X as input, Xi as ɵɵProvidersFeature, _o as ɵɵgetInheritedFactory, ca as ɵɵclassMap, pr as ViewEncapsulation, qi as ɵɵHostDirectivesFeature, qo as ɵɵprojection, xn as Injectable } from "./core-D4dczhTZ.js";
import { SharedModule } from "./primeng_api.js";
import { n as PARENT_INSTANCE, t as BaseComponent } from "./primeng-basecomponent-C8ezCQ4r.js";
import { Bind } from "./primeng_bind.js";
import { s as BaseStyle } from "./primeng-config-Db_bbJUd.js";
// node_modules/primeng/fesm2022/primeng-inputicon.mjs
var classes = { root: "p-inputicon" };
var InputIconStyle = class InputIconStyle extends BaseStyle {
	name = "inputicon";
	classes = classes;
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵInputIconStyle_BaseFactory = void 0;
		return function InputIconStyle_Factory(__ngFactoryType__) {
			return (ɵInputIconStyle_BaseFactory || (ɵInputIconStyle_BaseFactory = ɵɵgetInheritedFactory(InputIconStyle)))(__ngFactoryType__ || InputIconStyle);
		};
	})();
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: InputIconStyle,
		factory: InputIconStyle.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputIconStyle, [{ type: Injectable }], null, null);
})();
var INPUTICON_INSTANCE = new InjectionToken("INPUTICON_INSTANCE");
var InputIcon = class InputIcon extends BaseComponent {
	componentName = "InputIcon";
	hostName = input("", ...ngDevMode ? [{ debugName: "hostName" }] : /* istanbul ignore next */ []);
	_componentStyle = inject(InputIconStyle);
	$pcInputIcon = inject(INPUTICON_INSTANCE, {
		optional: true,
		skipSelf: true
	}) ?? void 0;
	bindDirectiveInstance = inject(Bind, { self: true });
	onAfterViewChecked() {
		this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
	}
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵInputIcon_BaseFactory = void 0;
		return function InputIcon_Factory(__ngFactoryType__) {
			return (ɵInputIcon_BaseFactory || (ɵInputIcon_BaseFactory = ɵɵgetInheritedFactory(InputIcon)))(__ngFactoryType__ || InputIcon);
		};
	})();
	static ɵcmp = (function() {
		return /*@__PURE__*/ ɵɵdefineComponent({
			type: InputIcon,
			selectors: [["p-inputicon"]],
			hostVars: 2,
			hostBindings: function InputIcon_HostBindings(rf, ctx) {
				if (rf & 2) ɵɵclassMap(ctx.cx("root"));
			},
			inputs: { hostName: [1, "hostName"] },
			features: [
				ɵɵProvidersFeature([
					InputIconStyle,
					{
						provide: INPUTICON_INSTANCE,
						useExisting: InputIcon
					},
					{
						provide: PARENT_INSTANCE,
						useExisting: InputIcon
					}
				]),
				ɵɵHostDirectivesFeature([Bind]),
				ɵɵInheritDefinitionFeature
			],
			ngContentSelectors: ["*"],
			decls: 1,
			vars: 0,
			template: function InputIcon_Template(rf, ctx) {
				if (rf & 1) {
					ɵɵprojectionDef();
					ɵɵprojection(0);
				}
			},
			dependencies: [SharedModule],
			encapsulation: 2
		});
	})();
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputIcon, [{
		type: Component,
		args: [{
			selector: "p-inputicon",
			standalone: true,
			imports: [SharedModule],
			template: `<ng-content></ng-content>`,
			encapsulation: ViewEncapsulation.None,
			changeDetection: ChangeDetectionStrategy.OnPush,
			providers: [
				InputIconStyle,
				{
					provide: INPUTICON_INSTANCE,
					useExisting: InputIcon
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: InputIcon
				}
			],
			hostDirectives: [Bind],
			host: { "[class]": "cx('root')" }
		}]
	}], null, { hostName: [{
		type: Input,
		args: [{
			isSignal: true,
			alias: "hostName",
			required: false
		}]
	}] });
})();
var InputIconModule = class InputIconModule {
	static ɵfac = function InputIconModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || InputIconModule)();
	};
	static ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({
		type: InputIconModule,
		imports: [InputIcon, SharedModule],
		exports: [InputIcon, SharedModule]
	});
	static ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ imports: [
		InputIcon,
		SharedModule,
		SharedModule
	] });
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputIconModule, [{
		type: NgModule,
		args: [{
			imports: [InputIcon, SharedModule],
			exports: [InputIcon, SharedModule]
		}]
	}], null, null);
})();
export { InputIcon, InputIconModule, InputIconStyle };
