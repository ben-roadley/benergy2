import { U as InjectionToken, c as computed, la as ɵɵdefineInjectable, ua as ɵɵdefineInjector, wr as inject } from "./_resource-chunk-B6oSsbEv.js";
import { Ai as setClassMetadata, Ds as ɵɵstyleMap, Ga as ɵɵdefineNgModule, Gt as ChangeDetectionStrategy, Ji as ɵɵInheritDefinitionFeature, Jt as Component, Nn as NgModule, Sn as Input, Ua as ɵɵdefineComponent, X as input, Xi as ɵɵProvidersFeature, _o as ɵɵgetInheritedFactory, aa as ɵɵattribute, ca as ɵɵclassMap, pr as ViewEncapsulation, qi as ɵɵHostDirectivesFeature, xn as Injectable } from "./core-D4dczhTZ.js";
import { SharedModule } from "./primeng_api.js";
import { n as PARENT_INSTANCE, t as BaseComponent } from "./primeng-basecomponent-C8ezCQ4r.js";
import { Bind } from "./primeng_bind.js";
import { s as BaseStyle } from "./primeng-config-Db_bbJUd.js";
// node_modules/@primeuix/styles/dist/skeleton/index.mjs
var style = "\n    .p-skeleton {\n        display: block;\n        overflow: hidden;\n        background: dt('skeleton.background');\n        border-radius: dt('skeleton.border.radius');\n    }\n\n    .p-skeleton::after {\n        content: '';\n        animation: p-skeleton-animation 1.2s infinite;\n        height: 100%;\n        left: 0;\n        position: absolute;\n        right: 0;\n        top: 0;\n        transform: translateX(-100%);\n        z-index: 1;\n        background: linear-gradient(90deg, rgba(255, 255, 255, 0), dt('skeleton.animation.background'), rgba(255, 255, 255, 0));\n    }\n\n    [dir='rtl'] .p-skeleton::after {\n        animation-name: p-skeleton-animation-rtl;\n    }\n\n    .p-skeleton-circle {\n        border-radius: 50%;\n    }\n\n    .p-skeleton-animation-none::after {\n        animation: none;\n    }\n\n    @keyframes p-skeleton-animation {\n        from {\n            transform: translateX(-100%);\n        }\n        to {\n            transform: translateX(100%);\n        }\n    }\n\n    @keyframes p-skeleton-animation-rtl {\n        from {\n            transform: translateX(100%);\n        }\n        to {\n            transform: translateX(-100%);\n        }\n    }\n";
// node_modules/primeng/fesm2022/primeng-skeleton.mjs
var inlineStyles = { root: { position: "relative" } };
var classes = { root: ({ instance }) => ["p-skeleton p-component", {
	"p-skeleton-circle": instance.shape() === "circle",
	"p-skeleton-animation-none": instance.animation() === "none"
}] };
var SkeletonStyle = class SkeletonStyle extends BaseStyle {
	name = "skeleton";
	style = style;
	classes = classes;
	inlineStyles = inlineStyles;
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵSkeletonStyle_BaseFactory = void 0;
		return function SkeletonStyle_Factory(__ngFactoryType__) {
			return (ɵSkeletonStyle_BaseFactory || (ɵSkeletonStyle_BaseFactory = ɵɵgetInheritedFactory(SkeletonStyle)))(__ngFactoryType__ || SkeletonStyle);
		};
	})();
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: SkeletonStyle,
		factory: SkeletonStyle.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkeletonStyle, [{ type: Injectable }], null, null);
})();
var SkeletonClasses;
(function(SkeletonClasses) {
	SkeletonClasses["root"] = "p-skeleton";
})(SkeletonClasses || (SkeletonClasses = {}));
var SKELETON_INSTANCE = new InjectionToken("SKELETON_INSTANCE");
var Skeleton = class Skeleton extends BaseComponent {
	componentName = "Skeleton";
	$pcSkeleton = inject(SKELETON_INSTANCE, {
		optional: true,
		skipSelf: true
	}) ?? void 0;
	bindDirectiveInstance = inject(Bind, { self: true });
	shape = input("rectangle", ...ngDevMode ? [{ debugName: "shape" }] : /* istanbul ignore next */ []);
	animation = input("wave", ...ngDevMode ? [{ debugName: "animation" }] : /* istanbul ignore next */ []);
	borderRadius = input(...ngDevMode ? [void 0, { debugName: "borderRadius" }] : /* istanbul ignore next */ []);
	size = input(...ngDevMode ? [void 0, { debugName: "size" }] : /* istanbul ignore next */ []);
	width = input("100%", ...ngDevMode ? [{ debugName: "width" }] : /* istanbul ignore next */ []);
	height = input("1rem", ...ngDevMode ? [{ debugName: "height" }] : /* istanbul ignore next */ []);
	_componentStyle = inject(SkeletonStyle);
	containerStyle = computed(() => {
		const inlineStyles = this._componentStyle?.inlineStyles["root"];
		const size = this.size();
		const width = this.width();
		const height = this.height();
		const borderRadius = this.borderRadius();
		if (this.$unstyled()) return;
		if (size) return {
			...inlineStyles,
			width: size,
			height: size,
			borderRadius
		};
		return {
			...inlineStyles,
			width,
			height,
			borderRadius
		};
	}, ...ngDevMode ? [{ debugName: "containerStyle" }] : /* istanbul ignore next */ []);
	dataP = computed(() => {
		const shape = this.shape();
		return this.cn({ [shape]: shape });
	}, ...ngDevMode ? [{ debugName: "dataP" }] : /* istanbul ignore next */ []);
	onAfterViewChecked() {
		this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
	}
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵSkeleton_BaseFactory = void 0;
		return function Skeleton_Factory(__ngFactoryType__) {
			return (ɵSkeleton_BaseFactory || (ɵSkeleton_BaseFactory = ɵɵgetInheritedFactory(Skeleton)))(__ngFactoryType__ || Skeleton);
		};
	})();
	static ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({
		type: Skeleton,
		selectors: [["p-skeleton"]],
		hostVars: 6,
		hostBindings: function Skeleton_HostBindings(rf, ctx) {
			if (rf & 2) {
				ɵɵattribute("aria-hidden", true)("data-p", ctx.dataP());
				ɵɵstyleMap(ctx.containerStyle());
				ɵɵclassMap(ctx.cx("root"));
			}
		},
		inputs: {
			shape: [1, "shape"],
			animation: [1, "animation"],
			borderRadius: [1, "borderRadius"],
			size: [1, "size"],
			width: [1, "width"],
			height: [1, "height"]
		},
		features: [
			ɵɵProvidersFeature([
				SkeletonStyle,
				{
					provide: SKELETON_INSTANCE,
					useExisting: Skeleton
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: Skeleton
				}
			]),
			ɵɵHostDirectivesFeature([Bind]),
			ɵɵInheritDefinitionFeature
		],
		decls: 0,
		vars: 0,
		template: function Skeleton_Template(rf, ctx) {},
		dependencies: [SharedModule],
		encapsulation: 2
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Skeleton, [{
		type: Component,
		args: [{
			selector: "p-skeleton",
			standalone: true,
			imports: [SharedModule],
			template: ``,
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			providers: [
				SkeletonStyle,
				{
					provide: SKELETON_INSTANCE,
					useExisting: Skeleton
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: Skeleton
				}
			],
			host: {
				"[attr.aria-hidden]": "true",
				"[class]": "cx(\"root\")",
				"[style]": "containerStyle()",
				"[attr.data-p]": "dataP()"
			},
			hostDirectives: [Bind]
		}]
	}], null, {
		shape: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "shape",
				required: false
			}]
		}],
		animation: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "animation",
				required: false
			}]
		}],
		borderRadius: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "borderRadius",
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
		}]
	});
})();
var SkeletonModule = class SkeletonModule {
	static ɵfac = function SkeletonModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || SkeletonModule)();
	};
	static ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({
		type: SkeletonModule,
		imports: [Skeleton, SharedModule],
		exports: [Skeleton, SharedModule]
	});
	static ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ imports: [
		Skeleton,
		SharedModule,
		SharedModule
	] });
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkeletonModule, [{
		type: NgModule,
		args: [{
			imports: [Skeleton, SharedModule],
			exports: [Skeleton, SharedModule]
		}]
	}], null, null);
})();
export { Skeleton, SkeletonClasses, SkeletonModule, SkeletonStyle };
