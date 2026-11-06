import { Fn as forwardRef, U as InjectionToken, c as computed, la as ɵɵdefineInjectable, ua as ɵɵdefineInjector, wr as inject } from "./_resource-chunk-B6oSsbEv.js";
import "./common-BBp9OMOF.js";
import { A as contentChild, Ai as setClassMetadata, Bo as ɵɵnextContext, Fs as ɵɵtextInterpolate1, Ga as ɵɵdefineNgModule, Gt as ChangeDetectionStrategy, Ji as ɵɵInheritDefinitionFeature, Jo as ɵɵprojectionDef, Jt as Component, Nn as NgModule, Ns as ɵɵtext, Sn as Input, Ua as ɵɵdefineComponent, X as input, Xi as ɵɵProvidersFeature, Yo as ɵɵproperty, Zi as ɵɵadvance, _o as ɵɵgetInheritedFactory, ao as ɵɵelementContainer, ca as ɵɵclassMap, co as ɵɵelementEnd, da as ɵɵconditional, ha as ɵɵcontentQuerySignal, i as ContentChild, js as ɵɵtemplate, lo as ɵɵelementStart, os as ɵɵqueryAdvance, pa as ɵɵconditionalCreate, pr as ViewEncapsulation, qi as ɵɵHostDirectivesFeature, qo as ɵɵprojection, xn as Injectable } from "./core-D4dczhTZ.js";
import { r as NgTemplateOutlet } from "./_common_module-chunk-CF6aUJZ1.js";
import { Footer, Header, SharedModule } from "./primeng_api.js";
import { n as PARENT_INSTANCE, t as BaseComponent } from "./primeng-basecomponent-C8ezCQ4r.js";
import { Bind, BindModule } from "./primeng_bind.js";
import { s as BaseStyle } from "./primeng-config-Db_bbJUd.js";
// node_modules/@primeuix/styles/dist/card/index.mjs
var style = "\n    .p-card {\n        display: block;\n        background: dt('card.background');\n        color: dt('card.color');\n        box-shadow: dt('card.shadow');\n        border-radius: dt('card.border.radius');\n        display: flex;\n        flex-direction: column;\n    }\n\n    .p-card-caption {\n        display: flex;\n        flex-direction: column;\n        gap: dt('card.caption.gap');\n    }\n\n    .p-card-body {\n        padding: dt('card.body.padding');\n        display: flex;\n        flex-direction: column;\n        gap: dt('card.body.gap');\n    }\n\n    .p-card-title {\n        font-size: dt('card.title.font.size');\n        font-weight: dt('card.title.font.weight');\n    }\n\n    .p-card-subtitle {\n        color: dt('card.subtitle.color');\n        font-size: dt('card.subtitle.font.size');\n        font-weight: dt('card.subtitle.font.weight');\n    }\n";
// node_modules/primeng/fesm2022/primeng-card.mjs
var classes = {
	root: "p-card p-component",
	header: "p-card-header",
	body: "p-card-body",
	caption: "p-card-caption",
	title: "p-card-title",
	subtitle: "p-card-subtitle",
	content: "p-card-content",
	footer: "p-card-footer"
};
var CardStyle = class CardStyle extends BaseStyle {
	name = "card";
	style = style;
	classes = classes;
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵCardStyle_BaseFactory = void 0;
		return function CardStyle_Factory(__ngFactoryType__) {
			return (ɵCardStyle_BaseFactory || (ɵCardStyle_BaseFactory = ɵɵgetInheritedFactory(CardStyle)))(__ngFactoryType__ || CardStyle);
		};
	})();
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: CardStyle,
		factory: CardStyle.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardStyle, [{ type: Injectable }], null, null);
})();
var CardClasses;
(function(CardClasses) {
	CardClasses["root"] = "p-card";
	CardClasses["header"] = "p-card-header";
	CardClasses["body"] = "p-card-body";
	CardClasses["caption"] = "p-card-caption";
	CardClasses["title"] = "p-card-title";
	CardClasses["subtitle"] = "p-card-subtitle";
	CardClasses["content"] = "p-card-content";
	CardClasses["footer"] = "p-card-footer";
})(CardClasses || (CardClasses = {}));
var CARD_INSTANCE = new InjectionToken("CARD_INSTANCE");
var Card = class Card extends BaseComponent {
	componentName = "Card";
	$pcCard = inject(CARD_INSTANCE, {
		optional: true,
		skipSelf: true
	}) ?? void 0;
	bindDirectiveInstance = inject(Bind, { self: true });
	_componentStyle = inject(CardStyle);
	header = input(...ngDevMode ? [void 0, { debugName: "header" }] : /* istanbul ignore next */ []);
	subheader = input(...ngDevMode ? [void 0, { debugName: "subheader" }] : /* istanbul ignore next */ []);
	headerFacet = contentChild(Header, {
		...ngDevMode ? { debugName: "headerFacet" } : /* istanbul ignore next */ {},
		descendants: false
	});
	footerFacet = contentChild(Footer, {
		...ngDevMode ? { debugName: "footerFacet" } : /* istanbul ignore next */ {},
		descendants: false
	});
	headerTemplate = contentChild("header", {
		...ngDevMode ? { debugName: "headerTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	titleTemplate = contentChild("title", {
		...ngDevMode ? { debugName: "titleTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	subtitleTemplate = contentChild("subtitle", {
		...ngDevMode ? { debugName: "subtitleTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	contentTemplate = contentChild("content", {
		...ngDevMode ? { debugName: "contentTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	footerTemplate = contentChild("footer", {
		...ngDevMode ? { debugName: "footerTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	hasHeader = computed(() => !!(this.headerFacet() || this.headerTemplate()), ...ngDevMode ? [{ debugName: "hasHeader" }] : /* istanbul ignore next */ []);
	hasTitle = computed(() => !!(this.header() || this.titleTemplate()), ...ngDevMode ? [{ debugName: "hasTitle" }] : /* istanbul ignore next */ []);
	hasSubtitle = computed(() => !!(this.subheader() || this.subtitleTemplate()), ...ngDevMode ? [{ debugName: "hasSubtitle" }] : /* istanbul ignore next */ []);
	hasFooter = computed(() => !!(this.footerFacet() || this.footerTemplate()), ...ngDevMode ? [{ debugName: "hasFooter" }] : /* istanbul ignore next */ []);
	showHeaderText = computed(() => this.header() && !this.titleTemplate(), ...ngDevMode ? [{ debugName: "showHeaderText" }] : /* istanbul ignore next */ []);
	showSubheaderText = computed(() => this.subheader() && !this.subtitleTemplate(), ...ngDevMode ? [{ debugName: "showSubheaderText" }] : /* istanbul ignore next */ []);
	onAfterViewChecked() {
		this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
	}
	getBlockableElement() {
		return this.el.nativeElement;
	}
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵCard_BaseFactory = void 0;
		return function Card_Factory(__ngFactoryType__) {
			return (ɵCard_BaseFactory || (ɵCard_BaseFactory = ɵɵgetInheritedFactory(Card)))(__ngFactoryType__ || Card);
		};
	})();
	static ɵcmp = (function() {
		const _c0 = ["header"];
		const _c1 = ["title"];
		const _c2 = ["subtitle"];
		const _c3 = ["content"];
		const _c4 = ["footer"];
		const _c5 = [
			"*",
			[["p-header"]],
			[["p-footer"]]
		];
		const _c6 = [
			"*",
			"p-header",
			"p-footer"
		];
		function Card_Conditional_0_ng_container_2_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Card_Conditional_0_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "div", 1);
				ɵɵprojection(1, 1);
				ɵɵtemplate(2, Card_Conditional_0_ng_container_2_Template, 1, 0, "ng-container", 2);
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
		function Card_Conditional_2_Conditional_1_Template(rf, ctx) {
			if (rf & 1) ɵɵtext(0);
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(2);
				ɵɵtextInterpolate1(" ", ctx_r0.header(), " ");
			}
		}
		function Card_Conditional_2_ng_container_2_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Card_Conditional_2_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "div", 1);
				ɵɵconditionalCreate(1, Card_Conditional_2_Conditional_1_Template, 1, 1);
				ɵɵtemplate(2, Card_Conditional_2_ng_container_2_Template, 1, 0, "ng-container", 2);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵclassMap(ctx_r0.cx("title"));
				ɵɵproperty("pBind", ctx_r0.ptm("title"));
				ɵɵadvance();
				ɵɵconditional(ctx_r0.showHeaderText() ? 1 : -1);
				ɵɵadvance();
				ɵɵproperty("ngTemplateOutlet", ctx_r0.titleTemplate());
			}
		}
		function Card_Conditional_3_Conditional_1_Template(rf, ctx) {
			if (rf & 1) ɵɵtext(0);
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(2);
				ɵɵtextInterpolate1(" ", ctx_r0.subheader(), " ");
			}
		}
		function Card_Conditional_3_ng_container_2_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Card_Conditional_3_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "div", 1);
				ɵɵconditionalCreate(1, Card_Conditional_3_Conditional_1_Template, 1, 1);
				ɵɵtemplate(2, Card_Conditional_3_ng_container_2_Template, 1, 0, "ng-container", 2);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵclassMap(ctx_r0.cx("subtitle"));
				ɵɵproperty("pBind", ctx_r0.ptm("subtitle"));
				ɵɵadvance();
				ɵɵconditional(ctx_r0.showSubheaderText() ? 1 : -1);
				ɵɵadvance();
				ɵɵproperty("ngTemplateOutlet", ctx_r0.subtitleTemplate());
			}
		}
		function Card_ng_container_6_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Card_Conditional_7_ng_container_2_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Card_Conditional_7_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "div", 1);
				ɵɵprojection(1, 2);
				ɵɵtemplate(2, Card_Conditional_7_ng_container_2_Template, 1, 0, "ng-container", 2);
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
			type: Card,
			selectors: [["p-card"]],
			contentQueries: function Card_ContentQueries(rf, ctx, dirIndex) {
				if (rf & 1) ɵɵcontentQuerySignal(dirIndex, ctx.headerFacet, Header, 4)(dirIndex, ctx.footerFacet, Footer, 4)(dirIndex, ctx.headerTemplate, _c0, 4)(dirIndex, ctx.titleTemplate, _c1, 4)(dirIndex, ctx.subtitleTemplate, _c2, 4)(dirIndex, ctx.contentTemplate, _c3, 4)(dirIndex, ctx.footerTemplate, _c4, 4);
				if (rf & 2) ɵɵqueryAdvance(7);
			},
			hostVars: 2,
			hostBindings: function Card_HostBindings(rf, ctx) {
				if (rf & 2) ɵɵclassMap(ctx.cx("root"));
			},
			inputs: {
				header: [1, "header"],
				subheader: [1, "subheader"]
			},
			features: [
				ɵɵProvidersFeature([
					CardStyle,
					{
						provide: CARD_INSTANCE,
						useExisting: Card
					},
					{
						provide: PARENT_INSTANCE,
						useExisting: Card
					}
				]),
				ɵɵHostDirectivesFeature([Bind]),
				ɵɵInheritDefinitionFeature
			],
			ngContentSelectors: _c6,
			decls: 8,
			vars: 11,
			consts: [
				[
					3,
					"pBind",
					"class"
				],
				[3, "pBind"],
				[4, "ngTemplateOutlet"]
			],
			template: function Card_Template(rf, ctx) {
				if (rf & 1) {
					ɵɵprojectionDef(_c5);
					ɵɵconditionalCreate(0, Card_Conditional_0_Template, 3, 4, "div", 0);
					ɵɵelementStart(1, "div", 1);
					ɵɵconditionalCreate(2, Card_Conditional_2_Template, 3, 5, "div", 0);
					ɵɵconditionalCreate(3, Card_Conditional_3_Template, 3, 5, "div", 0);
					ɵɵelementStart(4, "div", 1);
					ɵɵprojection(5);
					ɵɵtemplate(6, Card_ng_container_6_Template, 1, 0, "ng-container", 2);
					ɵɵelementEnd();
					ɵɵconditionalCreate(7, Card_Conditional_7_Template, 3, 4, "div", 0);
					ɵɵelementEnd();
				}
				if (rf & 2) {
					ɵɵconditional(ctx.hasHeader() ? 0 : -1);
					ɵɵadvance();
					ɵɵclassMap(ctx.cx("body"));
					ɵɵproperty("pBind", ctx.ptm("body"));
					ɵɵadvance();
					ɵɵconditional(ctx.hasTitle() ? 2 : -1);
					ɵɵadvance();
					ɵɵconditional(ctx.hasSubtitle() ? 3 : -1);
					ɵɵadvance();
					ɵɵclassMap(ctx.cx("content"));
					ɵɵproperty("pBind", ctx.ptm("content"));
					ɵɵadvance(2);
					ɵɵproperty("ngTemplateOutlet", ctx.contentTemplate());
					ɵɵadvance();
					ɵɵconditional(ctx.hasFooter() ? 7 : -1);
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
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Card, [{
		type: Component,
		args: [{
			selector: "p-card",
			standalone: true,
			imports: [
				NgTemplateOutlet,
				SharedModule,
				BindModule
			],
			template: `
        @if (hasHeader()) {
            <div [pBind]="ptm('header')" [class]="cx('header')">
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate()"></ng-container>
            </div>
        }
        <div [pBind]="ptm('body')" [class]="cx('body')">
            @if (hasTitle()) {
                <div [pBind]="ptm('title')" [class]="cx('title')">
                    @if (showHeaderText()) {
                        {{ header() }}
                    }
                    <ng-container *ngTemplateOutlet="titleTemplate()"></ng-container>
                </div>
            }
            @if (hasSubtitle()) {
                <div [pBind]="ptm('subtitle')" [class]="cx('subtitle')">
                    @if (showSubheaderText()) {
                        {{ subheader() }}
                    }
                    <ng-container *ngTemplateOutlet="subtitleTemplate()"></ng-container>
                </div>
            }
            <div [pBind]="ptm('content')" [class]="cx('content')">
                <ng-content></ng-content>
                <ng-container *ngTemplateOutlet="contentTemplate()"></ng-container>
            </div>
            @if (hasFooter()) {
                <div [pBind]="ptm('footer')" [class]="cx('footer')">
                    <ng-content select="p-footer"></ng-content>
                    <ng-container *ngTemplateOutlet="footerTemplate()"></ng-container>
                </div>
            }
        </div>
    `,
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			providers: [
				CardStyle,
				{
					provide: CARD_INSTANCE,
					useExisting: Card
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: Card
				}
			],
			host: { "[class]": "cx('root')" },
			hostDirectives: [Bind]
		}]
	}], null, {
		header: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "header",
				required: false
			}]
		}],
		subheader: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "subheader",
				required: false
			}]
		}],
		headerFacet: [{
			type: ContentChild,
			args: [forwardRef(() => Header), {
				descendants: false,
				isSignal: true
			}]
		}],
		footerFacet: [{
			type: ContentChild,
			args: [forwardRef(() => Footer), {
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
		titleTemplate: [{
			type: ContentChild,
			args: ["title", {
				descendants: false,
				isSignal: true
			}]
		}],
		subtitleTemplate: [{
			type: ContentChild,
			args: ["subtitle", {
				descendants: false,
				isSignal: true
			}]
		}],
		contentTemplate: [{
			type: ContentChild,
			args: ["content", {
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
		}]
	});
})();
var CardModule = class CardModule {
	static ɵfac = function CardModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || CardModule)();
	};
	static ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({
		type: CardModule,
		imports: [
			Card,
			SharedModule,
			BindModule
		],
		exports: [
			Card,
			SharedModule,
			BindModule
		]
	});
	static ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ imports: [
		Card,
		SharedModule,
		BindModule,
		SharedModule,
		BindModule
	] });
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardModule, [{
		type: NgModule,
		args: [{
			imports: [
				Card,
				SharedModule,
				BindModule
			],
			exports: [
				Card,
				SharedModule,
				BindModule
			]
		}]
	}], null, null);
})();
export { Card, CardClasses, CardModule, CardStyle };
