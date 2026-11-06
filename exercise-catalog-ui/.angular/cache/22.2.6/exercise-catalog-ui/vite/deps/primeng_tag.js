import { U as InjectionToken, c as computed, la as ɵɵdefineInjectable, ua as ɵɵdefineInjector, wr as inject } from "./_resource-chunk-B6oSsbEv.js";
import "./common-BBp9OMOF.js";
import { A as contentChild, Ai as setClassMetadata, Bo as ɵɵnextContext, Ga as ɵɵdefineNgModule, Gt as ChangeDetectionStrategy, Ji as ɵɵInheritDefinitionFeature, Jo as ɵɵprojectionDef, Jt as Component, Nn as NgModule, Ns as ɵɵtext, O as booleanAttribute, Ps as ɵɵtextInterpolate, Sn as Input, Ua as ɵɵdefineComponent, X as input, Xi as ɵɵProvidersFeature, Yo as ɵɵproperty, Zi as ɵɵadvance, _o as ɵɵgetInheritedFactory, aa as ɵɵattribute, ao as ɵɵelementContainer, ca as ɵɵclassMap, co as ɵɵelementEnd, da as ɵɵconditional, ha as ɵɵcontentQuerySignal, i as ContentChild, io as ɵɵelement, lo as ɵɵelementStart, os as ɵɵqueryAdvance, pa as ɵɵconditionalCreate, pr as ViewEncapsulation, qi as ɵɵHostDirectivesFeature, qo as ɵɵprojection, xn as Injectable } from "./core-D4dczhTZ.js";
import { r as NgTemplateOutlet } from "./_common_module-chunk-CF6aUJZ1.js";
import { SharedModule } from "./primeng_api.js";
import { n as PARENT_INSTANCE, t as BaseComponent } from "./primeng-basecomponent-C8ezCQ4r.js";
import { Bind } from "./primeng_bind.js";
import { s as BaseStyle } from "./primeng-config-Db_bbJUd.js";
// node_modules/@primeuix/styles/dist/tag/index.mjs
var style = "\n    .p-tag {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        background: dt('tag.primary.background');\n        color: dt('tag.primary.color');\n        font-size: dt('tag.font.size');\n        font-weight: dt('tag.font.weight');\n        padding: dt('tag.padding');\n        border-radius: dt('tag.border.radius');\n        gap: dt('tag.gap');\n    }\n\n    .p-tag-icon {\n        font-size: dt('tag.icon.size');\n        width: dt('tag.icon.size');\n        height: dt('tag.icon.size');\n    }\n\n    .p-tag-rounded {\n        border-radius: dt('tag.rounded.border.radius');\n    }\n\n    .p-tag-success {\n        background: dt('tag.success.background');\n        color: dt('tag.success.color');\n    }\n\n    .p-tag-info {\n        background: dt('tag.info.background');\n        color: dt('tag.info.color');\n    }\n\n    .p-tag-warn {\n        background: dt('tag.warn.background');\n        color: dt('tag.warn.color');\n    }\n\n    .p-tag-danger {\n        background: dt('tag.danger.background');\n        color: dt('tag.danger.color');\n    }\n\n    .p-tag-secondary {\n        background: dt('tag.secondary.background');\n        color: dt('tag.secondary.color');\n    }\n\n    .p-tag-contrast {\n        background: dt('tag.contrast.background');\n        color: dt('tag.contrast.color');\n    }\n";
// node_modules/primeng/fesm2022/primeng-tag.mjs
var classes = {
	root: ({ instance }) => {
		const severity = instance.severity();
		const rounded = instance.rounded();
		return ["p-tag p-component", {
			"p-tag-info": severity === "info",
			"p-tag-success": severity === "success",
			"p-tag-warn": severity === "warn",
			"p-tag-danger": severity === "danger",
			"p-tag-secondary": severity === "secondary",
			"p-tag-contrast": severity === "contrast",
			"p-tag-rounded": rounded
		}];
	},
	icon: "p-tag-icon",
	label: "p-tag-label"
};
var TagStyle = class TagStyle extends BaseStyle {
	name = "tag";
	style = style;
	classes = classes;
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵTagStyle_BaseFactory = void 0;
		return function TagStyle_Factory(__ngFactoryType__) {
			return (ɵTagStyle_BaseFactory || (ɵTagStyle_BaseFactory = ɵɵgetInheritedFactory(TagStyle)))(__ngFactoryType__ || TagStyle);
		};
	})();
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: TagStyle,
		factory: TagStyle.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagStyle, [{ type: Injectable }], null, null);
})();
var TagClasses;
(function(TagClasses) {
	TagClasses["root"] = "p-tag";
	TagClasses["icon"] = "p-tag-icon";
	TagClasses["label"] = "p-tag-label";
})(TagClasses || (TagClasses = {}));
var TAG_INSTANCE = new InjectionToken("TAG_INSTANCE");
var Tag = class Tag extends BaseComponent {
	componentName = "Tag";
	$pcTag = inject(TAG_INSTANCE, {
		optional: true,
		skipSelf: true
	}) ?? void 0;
	bindDirectiveInstance = inject(Bind, { self: true });
	severity = input(...ngDevMode ? [void 0, { debugName: "severity" }] : /* istanbul ignore next */ []);
	value = input(...ngDevMode ? [void 0, { debugName: "value" }] : /* istanbul ignore next */ []);
	icon = input(...ngDevMode ? [void 0, { debugName: "icon" }] : /* istanbul ignore next */ []);
	rounded = input(false, {
		...ngDevMode ? { debugName: "rounded" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	iconTemplate = contentChild("icon", {
		...ngDevMode ? { debugName: "iconTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	_componentStyle = inject(TagStyle);
	dataP = computed(() => {
		const severity = this.severity();
		const rounded = this.rounded();
		return this.cn({
			rounded,
			[severity]: severity
		});
	}, ...ngDevMode ? [{ debugName: "dataP" }] : /* istanbul ignore next */ []);
	onAfterViewChecked() {
		this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
	}
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵTag_BaseFactory = void 0;
		return function Tag_Factory(__ngFactoryType__) {
			return (ɵTag_BaseFactory || (ɵTag_BaseFactory = ɵɵgetInheritedFactory(Tag)))(__ngFactoryType__ || Tag);
		};
	})();
	static ɵcmp = (function() {
		const _c0 = ["icon"];
		const _c1 = ["*"];
		function Tag_Conditional_1_Conditional_0_Template(rf, ctx) {
			if (rf & 1) ɵɵelement(0, "span", 1);
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(2);
				ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("icon"), ctx_r0.icon()));
				ɵɵproperty("pBind", ctx_r0.ptm("icon"));
			}
		}
		function Tag_Conditional_1_Template(rf, ctx) {
			if (rf & 1) ɵɵconditionalCreate(0, Tag_Conditional_1_Conditional_0_Template, 1, 3, "span", 0);
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵconditional(ctx_r0.icon() ? 0 : -1);
			}
		}
		function Tag_Conditional_2_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "span", 1);
				ɵɵelementContainer(1, 2);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵclassMap(ctx_r0.cx("icon"));
				ɵɵproperty("pBind", ctx_r0.ptm("icon"));
				ɵɵadvance();
				ɵɵproperty("ngTemplateOutlet", ctx_r0.iconTemplate());
			}
		}
		return /*@__PURE__*/ ɵɵdefineComponent({
			type: Tag,
			selectors: [["p-tag"]],
			contentQueries: function Tag_ContentQueries(rf, ctx, dirIndex) {
				if (rf & 1) ɵɵcontentQuerySignal(dirIndex, ctx.iconTemplate, _c0, 4);
				if (rf & 2) ɵɵqueryAdvance();
			},
			hostVars: 3,
			hostBindings: function Tag_HostBindings(rf, ctx) {
				if (rf & 2) {
					ɵɵattribute("data-p", ctx.dataP());
					ɵɵclassMap(ctx.cx("root"));
				}
			},
			inputs: {
				severity: [1, "severity"],
				value: [1, "value"],
				icon: [1, "icon"],
				rounded: [1, "rounded"]
			},
			features: [
				ɵɵProvidersFeature([
					TagStyle,
					{
						provide: TAG_INSTANCE,
						useExisting: Tag
					},
					{
						provide: PARENT_INSTANCE,
						useExisting: Tag
					}
				]),
				ɵɵHostDirectivesFeature([Bind]),
				ɵɵInheritDefinitionFeature
			],
			ngContentSelectors: _c1,
			decls: 5,
			vars: 5,
			consts: [
				[
					3,
					"class",
					"pBind"
				],
				[3, "pBind"],
				[3, "ngTemplateOutlet"]
			],
			template: function Tag_Template(rf, ctx) {
				if (rf & 1) {
					ɵɵprojectionDef();
					ɵɵprojection(0);
					ɵɵconditionalCreate(1, Tag_Conditional_1_Template, 1, 1)(2, Tag_Conditional_2_Template, 2, 4, "span", 0);
					ɵɵelementStart(3, "span", 1);
					ɵɵtext(4);
					ɵɵelementEnd();
				}
				if (rf & 2) {
					ɵɵadvance();
					ɵɵconditional(!ctx.iconTemplate() ? 1 : 2);
					ɵɵadvance(2);
					ɵɵclassMap(ctx.cx("label"));
					ɵɵproperty("pBind", ctx.ptm("label"));
					ɵɵadvance();
					ɵɵtextInterpolate(ctx.value());
				}
			},
			dependencies: [
				NgTemplateOutlet,
				SharedModule,
				Bind
			],
			encapsulation: 2
		});
	})();
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tag, [{
		type: Component,
		args: [{
			selector: "p-tag",
			standalone: true,
			imports: [
				NgTemplateOutlet,
				SharedModule,
				Bind
			],
			template: `
        <ng-content></ng-content>
        @if (!iconTemplate()) {
            @if (icon()) {
                <span [class]="cn(cx('icon'), icon())" [pBind]="ptm('icon')"></span>
            }
        } @else {
            <span [class]="cx('icon')" [pBind]="ptm('icon')">
                <ng-container [ngTemplateOutlet]="iconTemplate()!"></ng-container>
            </span>
        }
        <span [class]="cx('label')" [pBind]="ptm('label')">{{ value() }}</span>
    `,
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			providers: [
				TagStyle,
				{
					provide: TAG_INSTANCE,
					useExisting: Tag
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: Tag
				}
			],
			host: {
				"[class]": "cx('root')",
				"[attr.data-p]": "dataP()"
			},
			hostDirectives: [Bind]
		}]
	}], null, {
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
		icon: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "icon",
				required: false
			}]
		}],
		rounded: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "rounded",
				required: false
			}]
		}],
		iconTemplate: [{
			type: ContentChild,
			args: ["icon", {
				descendants: false,
				isSignal: true
			}]
		}]
	});
})();
var TagModule = class TagModule {
	static ɵfac = function TagModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || TagModule)();
	};
	static ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({
		type: TagModule,
		imports: [Tag, SharedModule],
		exports: [Tag, SharedModule]
	});
	static ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ imports: [
		Tag,
		SharedModule,
		SharedModule
	] });
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagModule, [{
		type: NgModule,
		args: [{
			imports: [Tag, SharedModule],
			exports: [Tag, SharedModule]
		}]
	}], null, null);
})();
export { Tag, TagClasses, TagModule, TagStyle };
