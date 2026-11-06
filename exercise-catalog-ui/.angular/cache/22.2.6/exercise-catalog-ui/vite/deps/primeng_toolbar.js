import { U as InjectionToken, la as ɵɵdefineInjectable, ua as ɵɵdefineInjector, wr as inject } from "./_resource-chunk-B6oSsbEv.js";
import "./common-BBp9OMOF.js";
import { A as contentChild, Ai as setClassMetadata, Bo as ɵɵnextContext, Ga as ɵɵdefineNgModule, Gt as ChangeDetectionStrategy, Ji as ɵɵInheritDefinitionFeature, Jo as ɵɵprojectionDef, Jt as Component, Nn as NgModule, Sn as Input, Ua as ɵɵdefineComponent, X as input, Xi as ɵɵProvidersFeature, Yo as ɵɵproperty, Zi as ɵɵadvance, _o as ɵɵgetInheritedFactory, aa as ɵɵattribute, ao as ɵɵelementContainer, ca as ɵɵclassMap, co as ɵɵelementEnd, da as ɵɵconditional, ha as ɵɵcontentQuerySignal, i as ContentChild, js as ɵɵtemplate, lo as ɵɵelementStart, os as ɵɵqueryAdvance, pa as ɵɵconditionalCreate, pr as ViewEncapsulation, qi as ɵɵHostDirectivesFeature, qo as ɵɵprojection, xn as Injectable } from "./core-D4dczhTZ.js";
import { r as NgTemplateOutlet } from "./_common_module-chunk-CF6aUJZ1.js";
import { SharedModule } from "./primeng_api.js";
import { n as PARENT_INSTANCE, t as BaseComponent } from "./primeng-basecomponent-C8ezCQ4r.js";
import { Bind, BindModule } from "./primeng_bind.js";
import { s as BaseStyle } from "./primeng-config-Db_bbJUd.js";
// node_modules/@primeuix/styles/dist/toolbar/index.mjs
var style = "\n    .p-toolbar {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        flex-wrap: wrap;\n        padding: dt('toolbar.padding');\n        background: dt('toolbar.background');\n        border: 1px solid dt('toolbar.border.color');\n        color: dt('toolbar.color');\n        border-radius: dt('toolbar.border.radius');\n        gap: dt('toolbar.gap');\n    }\n\n    .p-toolbar-start,\n    .p-toolbar-center,\n    .p-toolbar-end {\n        display: flex;\n        align-items: center;\n    }\n";
// node_modules/primeng/fesm2022/primeng-toolbar.mjs
var classes = {
	root: () => ["p-toolbar p-component"],
	start: "p-toolbar-start",
	center: "p-toolbar-center",
	end: "p-toolbar-end"
};
var ToolbarStyle = class ToolbarStyle extends BaseStyle {
	name = "toolbar";
	style = style;
	classes = classes;
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵToolbarStyle_BaseFactory = void 0;
		return function ToolbarStyle_Factory(__ngFactoryType__) {
			return (ɵToolbarStyle_BaseFactory || (ɵToolbarStyle_BaseFactory = ɵɵgetInheritedFactory(ToolbarStyle)))(__ngFactoryType__ || ToolbarStyle);
		};
	})();
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: ToolbarStyle,
		factory: ToolbarStyle.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolbarStyle, [{ type: Injectable }], null, null);
})();
var ToolbarClasses;
(function(ToolbarClasses) {
	ToolbarClasses["root"] = "p-toolbar";
	ToolbarClasses["start"] = "p-toolbar-start";
	ToolbarClasses["center"] = "p-toolbar-center";
	ToolbarClasses["end"] = "p-toolbar-end";
})(ToolbarClasses || (ToolbarClasses = {}));
var TOOLBAR_INSTANCE = new InjectionToken("TOOLBAR_INSTANCE");
var Toolbar = class Toolbar extends BaseComponent {
	componentName = "Toolbar";
	$pcToolbar = inject(TOOLBAR_INSTANCE, {
		optional: true,
		skipSelf: true
	}) ?? void 0;
	bindDirectiveInstance = inject(Bind, { self: true });
	ariaLabelledBy = input(...ngDevMode ? [void 0, { debugName: "ariaLabelledBy" }] : /* istanbul ignore next */ []);
	_componentStyle = inject(ToolbarStyle);
	startTemplate = contentChild("start", {
		...ngDevMode ? { debugName: "startTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	endTemplate = contentChild("end", {
		...ngDevMode ? { debugName: "endTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	centerTemplate = contentChild("center", {
		...ngDevMode ? { debugName: "centerTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	onAfterViewChecked() {
		this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
	}
	getBlockableElement() {
		return this.el.nativeElement.children[0];
	}
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵToolbar_BaseFactory = void 0;
		return function Toolbar_Factory(__ngFactoryType__) {
			return (ɵToolbar_BaseFactory || (ɵToolbar_BaseFactory = ɵɵgetInheritedFactory(Toolbar)))(__ngFactoryType__ || Toolbar);
		};
	})();
	static ɵcmp = (function() {
		const _c0 = ["start"];
		const _c1 = ["end"];
		const _c2 = ["center"];
		const _c3 = ["*"];
		function Toolbar_Conditional_1_ng_container_1_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Toolbar_Conditional_1_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "div", 1);
				ɵɵtemplate(1, Toolbar_Conditional_1_ng_container_1_Template, 1, 0, "ng-container", 2);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵclassMap(ctx_r0.cx("start"));
				ɵɵproperty("pBind", ctx_r0.ptm("start"));
				ɵɵadvance();
				ɵɵproperty("ngTemplateOutlet", ctx_r0.startTemplate());
			}
		}
		function Toolbar_Conditional_2_ng_container_1_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Toolbar_Conditional_2_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "div", 1);
				ɵɵtemplate(1, Toolbar_Conditional_2_ng_container_1_Template, 1, 0, "ng-container", 2);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵclassMap(ctx_r0.cx("center"));
				ɵɵproperty("pBind", ctx_r0.ptm("center"));
				ɵɵadvance();
				ɵɵproperty("ngTemplateOutlet", ctx_r0.centerTemplate());
			}
		}
		function Toolbar_Conditional_3_ng_container_1_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Toolbar_Conditional_3_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "div", 1);
				ɵɵtemplate(1, Toolbar_Conditional_3_ng_container_1_Template, 1, 0, "ng-container", 2);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵclassMap(ctx_r0.cx("end"));
				ɵɵproperty("pBind", ctx_r0.ptm("end"));
				ɵɵadvance();
				ɵɵproperty("ngTemplateOutlet", ctx_r0.endTemplate());
			}
		}
		return /*@__PURE__*/ ɵɵdefineComponent({
			type: Toolbar,
			selectors: [["p-toolbar"]],
			contentQueries: function Toolbar_ContentQueries(rf, ctx, dirIndex) {
				if (rf & 1) ɵɵcontentQuerySignal(dirIndex, ctx.startTemplate, _c0, 4)(dirIndex, ctx.endTemplate, _c1, 4)(dirIndex, ctx.centerTemplate, _c2, 4);
				if (rf & 2) ɵɵqueryAdvance(3);
			},
			hostAttrs: ["role", "toolbar"],
			hostVars: 3,
			hostBindings: function Toolbar_HostBindings(rf, ctx) {
				if (rf & 2) {
					ɵɵattribute("aria-labelledby", ctx.ariaLabelledBy());
					ɵɵclassMap(ctx.cx("root"));
				}
			},
			inputs: { ariaLabelledBy: [1, "ariaLabelledBy"] },
			features: [
				ɵɵProvidersFeature([
					ToolbarStyle,
					{
						provide: TOOLBAR_INSTANCE,
						useExisting: Toolbar
					},
					{
						provide: PARENT_INSTANCE,
						useExisting: Toolbar
					}
				]),
				ɵɵHostDirectivesFeature([Bind]),
				ɵɵInheritDefinitionFeature
			],
			ngContentSelectors: _c3,
			decls: 4,
			vars: 3,
			consts: [
				[
					3,
					"class",
					"pBind"
				],
				[3, "pBind"],
				[4, "ngTemplateOutlet"]
			],
			template: function Toolbar_Template(rf, ctx) {
				if (rf & 1) {
					ɵɵprojectionDef();
					ɵɵprojection(0);
					ɵɵconditionalCreate(1, Toolbar_Conditional_1_Template, 2, 4, "div", 0);
					ɵɵconditionalCreate(2, Toolbar_Conditional_2_Template, 2, 4, "div", 0);
					ɵɵconditionalCreate(3, Toolbar_Conditional_3_Template, 2, 4, "div", 0);
				}
				if (rf & 2) {
					ɵɵadvance();
					ɵɵconditional(ctx.startTemplate() ? 1 : -1);
					ɵɵadvance();
					ɵɵconditional(ctx.centerTemplate() ? 2 : -1);
					ɵɵadvance();
					ɵɵconditional(ctx.endTemplate() ? 3 : -1);
				}
			},
			dependencies: [
				NgTemplateOutlet,
				SharedModule,
				BindModule,
				Bind
			],
			encapsulation: 2
		});
	})();
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Toolbar, [{
		type: Component,
		args: [{
			selector: "p-toolbar",
			standalone: true,
			imports: [
				NgTemplateOutlet,
				SharedModule,
				BindModule
			],
			template: `
        <ng-content></ng-content>
        @if (startTemplate()) {
            <div [class]="cx('start')" [pBind]="ptm('start')">
                <ng-container *ngTemplateOutlet="startTemplate()"></ng-container>
            </div>
        }
        @if (centerTemplate()) {
            <div [class]="cx('center')" [pBind]="ptm('center')">
                <ng-container *ngTemplateOutlet="centerTemplate()"></ng-container>
            </div>
        }
        @if (endTemplate()) {
            <div [class]="cx('end')" [pBind]="ptm('end')">
                <ng-container *ngTemplateOutlet="endTemplate()"></ng-container>
            </div>
        }
    `,
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			providers: [
				ToolbarStyle,
				{
					provide: TOOLBAR_INSTANCE,
					useExisting: Toolbar
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: Toolbar
				}
			],
			host: {
				"[class]": "cx(\"root\")",
				role: "toolbar",
				"[attr.aria-labelledby]": "ariaLabelledBy()"
			},
			hostDirectives: [Bind]
		}]
	}], null, {
		ariaLabelledBy: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "ariaLabelledBy",
				required: false
			}]
		}],
		startTemplate: [{
			type: ContentChild,
			args: ["start", {
				descendants: false,
				isSignal: true
			}]
		}],
		endTemplate: [{
			type: ContentChild,
			args: ["end", {
				descendants: false,
				isSignal: true
			}]
		}],
		centerTemplate: [{
			type: ContentChild,
			args: ["center", {
				descendants: false,
				isSignal: true
			}]
		}]
	});
})();
var ToolbarModule = class ToolbarModule {
	static ɵfac = function ToolbarModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || ToolbarModule)();
	};
	static ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({
		type: ToolbarModule,
		imports: [
			Toolbar,
			SharedModule,
			BindModule
		],
		exports: [
			Toolbar,
			SharedModule,
			BindModule
		]
	});
	static ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ imports: [
		Toolbar,
		SharedModule,
		BindModule,
		SharedModule,
		BindModule
	] });
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolbarModule, [{
		type: NgModule,
		args: [{
			imports: [
				Toolbar,
				SharedModule,
				BindModule
			],
			exports: [
				Toolbar,
				SharedModule,
				BindModule
			]
		}]
	}], null, null);
})();
export { Toolbar, ToolbarClasses, ToolbarModule, ToolbarStyle };
