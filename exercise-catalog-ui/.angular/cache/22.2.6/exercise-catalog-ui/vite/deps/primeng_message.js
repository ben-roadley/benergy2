import { U as InjectionToken, Ui as signal, _a as ɵɵnamespaceSVG, c as computed, la as ɵɵdefineInjectable, ua as ɵɵdefineInjector, va as ɵɵresetView, wr as inject, ya as ɵɵrestoreView } from "./_resource-chunk-B6oSsbEv.js";
import "./common-BBp9OMOF.js";
import { A as contentChild, Ai as setClassMetadata, Bo as ɵɵnextContext, Ga as ɵɵdefineNgModule, Gt as ChangeDetectionStrategy, Ji as ɵɵInheritDefinitionFeature, Jo as ɵɵprojectionDef, Jt as Component, Nn as NgModule, O as booleanAttribute, Qi as ɵɵanimateEnter, Ro as ɵɵlistener, Sn as Input, Ua as ɵɵdefineComponent, X as input, Xi as ɵɵProvidersFeature, Yo as ɵɵproperty, Zi as ɵɵadvance, _o as ɵɵgetInheritedFactory, aa as ɵɵattribute, ao as ɵɵelementContainer, at as output, ca as ɵɵclassMap, co as ɵɵelementEnd, da as ɵɵconditional, ea as ɵɵanimateLeave, go as ɵɵgetCurrentView, ha as ɵɵcontentQuerySignal, i as ContentChild, io as ɵɵelement, js as ɵɵtemplate, lo as ɵɵelementStart, os as ɵɵqueryAdvance, pa as ɵɵconditionalCreate, pr as ViewEncapsulation, qi as ɵɵHostDirectivesFeature, qo as ɵɵprojection, rt as numberAttribute, xn as Injectable, zn as Output } from "./core-D4dczhTZ.js";
import { r as NgTemplateOutlet } from "./_common_module-chunk-CF6aUJZ1.js";
import { SharedModule } from "./primeng_api.js";
import { n as PARENT_INSTANCE, t as BaseComponent } from "./primeng-basecomponent-C8ezCQ4r.js";
import { Bind } from "./primeng_bind.js";
import { i as Times, r as MotionModule } from "./primeng-motion-DBtpchV9.js";
import { t as Ripple } from "./primeng-ripple-CyCwx_t1.js";
import { s as BaseStyle } from "./primeng-config-Db_bbJUd.js";
// node_modules/@primeuix/styles/dist/message/index.mjs
var style = "\n    .p-message {\n        display: grid;\n        grid-template-rows: 1fr;\n        border-radius: dt('message.border.radius');\n        outline-width: dt('message.border.width');\n        outline-style: solid;\n    }\n\n    .p-message-content-wrapper {\n        min-height: 0;\n    }\n\n    .p-message-content {\n        display: flex;\n        align-items: center;\n        padding: dt('message.content.padding');\n        gap: dt('message.content.gap');\n    }\n\n    .p-message-close-button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-shrink: 0;\n        margin-inline-start: auto;\n        overflow: hidden;\n        position: relative;\n        width: dt('message.close.button.width');\n        height: dt('message.close.button.height');\n        border-radius: dt('message.close.button.border.radius');\n        background: transparent;\n        transition:\n            background dt('message.transition.duration'),\n            color dt('message.transition.duration'),\n            outline-color dt('message.transition.duration'),\n            box-shadow dt('message.transition.duration'),\n            opacity 0.3s;\n        outline-color: transparent;\n        color: inherit;\n        padding: 0;\n        border: none;\n        cursor: pointer;\n        user-select: none;\n    }\n\n    .p-message-close-button svg,\n    .p-message-close-button i {\n        font-size: dt('message.close.icon.size');\n        width: dt('message.close.icon.size');\n        height: dt('message.close.icon.size');\n    }\n\n    .p-message-close-button:focus-visible {\n        outline-width: dt('message.close.button.focus.ring.width');\n        outline-style: dt('message.close.button.focus.ring.style');\n        outline-offset: dt('message.close.button.focus.ring.offset');\n    }\n\n    .p-message-info {\n        background: dt('message.info.background');\n        outline-color: dt('message.info.border.color');\n        color: dt('message.info.color');\n        box-shadow: dt('message.info.shadow');\n    }\n\n    .p-message-info .p-message-close-button:focus-visible {\n        outline-color: dt('message.info.close.button.focus.ring.color');\n        box-shadow: dt('message.info.close.button.focus.ring.shadow');\n    }\n\n    .p-message-info .p-message-close-button:hover {\n        background: dt('message.info.close.button.hover.background');\n    }\n\n    .p-message-info.p-message-outlined {\n        color: dt('message.info.outlined.color');\n        outline-color: dt('message.info.outlined.border.color');\n    }\n\n    .p-message-info.p-message-simple {\n        color: dt('message.info.simple.color');\n    }\n\n    .p-message-success {\n        background: dt('message.success.background');\n        outline-color: dt('message.success.border.color');\n        color: dt('message.success.color');\n        box-shadow: dt('message.success.shadow');\n    }\n\n    .p-message-success .p-message-close-button:focus-visible {\n        outline-color: dt('message.success.close.button.focus.ring.color');\n        box-shadow: dt('message.success.close.button.focus.ring.shadow');\n    }\n\n    .p-message-success .p-message-close-button:hover {\n        background: dt('message.success.close.button.hover.background');\n    }\n\n    .p-message-success.p-message-outlined {\n        color: dt('message.success.outlined.color');\n        outline-color: dt('message.success.outlined.border.color');\n    }\n\n    .p-message-success.p-message-simple {\n        color: dt('message.success.simple.color');\n    }\n\n    .p-message-warn {\n        background: dt('message.warn.background');\n        outline-color: dt('message.warn.border.color');\n        color: dt('message.warn.color');\n        box-shadow: dt('message.warn.shadow');\n    }\n\n    .p-message-warn .p-message-close-button:focus-visible {\n        outline-color: dt('message.warn.close.button.focus.ring.color');\n        box-shadow: dt('message.warn.close.button.focus.ring.shadow');\n    }\n\n    .p-message-warn .p-message-close-button:hover {\n        background: dt('message.warn.close.button.hover.background');\n    }\n\n    .p-message-warn.p-message-outlined {\n        color: dt('message.warn.outlined.color');\n        outline-color: dt('message.warn.outlined.border.color');\n    }\n\n    .p-message-warn.p-message-simple {\n        color: dt('message.warn.simple.color');\n    }\n\n    .p-message-error {\n        background: dt('message.error.background');\n        outline-color: dt('message.error.border.color');\n        color: dt('message.error.color');\n        box-shadow: dt('message.error.shadow');\n    }\n\n    .p-message-error .p-message-close-button:focus-visible {\n        outline-color: dt('message.error.close.button.focus.ring.color');\n        box-shadow: dt('message.error.close.button.focus.ring.shadow');\n    }\n\n    .p-message-error .p-message-close-button:hover {\n        background: dt('message.error.close.button.hover.background');\n    }\n\n    .p-message-error.p-message-outlined {\n        color: dt('message.error.outlined.color');\n        outline-color: dt('message.error.outlined.border.color');\n    }\n\n    .p-message-error.p-message-simple {\n        color: dt('message.error.simple.color');\n    }\n\n    .p-message-secondary {\n        background: dt('message.secondary.background');\n        outline-color: dt('message.secondary.border.color');\n        color: dt('message.secondary.color');\n        box-shadow: dt('message.secondary.shadow');\n    }\n\n    .p-message-secondary .p-message-close-button:focus-visible {\n        outline-color: dt('message.secondary.close.button.focus.ring.color');\n        box-shadow: dt('message.secondary.close.button.focus.ring.shadow');\n    }\n\n    .p-message-secondary .p-message-close-button:hover {\n        background: dt('message.secondary.close.button.hover.background');\n    }\n\n    .p-message-secondary.p-message-outlined {\n        color: dt('message.secondary.outlined.color');\n        outline-color: dt('message.secondary.outlined.border.color');\n    }\n\n    .p-message-secondary.p-message-simple {\n        color: dt('message.secondary.simple.color');\n    }\n\n    .p-message-contrast {\n        background: dt('message.contrast.background');\n        outline-color: dt('message.contrast.border.color');\n        color: dt('message.contrast.color');\n        box-shadow: dt('message.contrast.shadow');\n    }\n\n    .p-message-contrast .p-message-close-button:focus-visible {\n        outline-color: dt('message.contrast.close.button.focus.ring.color');\n        box-shadow: dt('message.contrast.close.button.focus.ring.shadow');\n    }\n\n    .p-message-contrast .p-message-close-button:hover {\n        background: dt('message.contrast.close.button.hover.background');\n    }\n\n    .p-message-contrast.p-message-outlined {\n        color: dt('message.contrast.outlined.color');\n        outline-color: dt('message.contrast.outlined.border.color');\n    }\n\n    .p-message-contrast.p-message-simple {\n        color: dt('message.contrast.simple.color');\n    }\n\n    .p-message-text {\n        font-size: dt('message.text.font.size');\n        font-weight: dt('message.text.font.weight');\n    }\n\n    .p-message-icon {\n        display: inline-flex;\n    }\n\n    .p-message-icon,\n    .p-message-icon svg,\n    .p-message-icon i {\n        flex-shrink: 0;\n        font-size: dt('message.icon.size');\n        width: dt('message.icon.size');\n        height: dt('message.icon.size');\n    }\n\n    .p-message-sm .p-message-content {\n        padding: dt('message.content.sm.padding');\n    }\n\n    .p-message-sm .p-message-text {\n        font-size: dt('message.text.sm.font.size');\n    }\n\n    .p-message-sm .p-message-icon,\n    .p-message-sm .p-message-icon svg,\n    .p-message-sm .p-message-icon i {\n        font-size: dt('message.icon.sm.size');\n        width: dt('message.icon.sm.size');\n        height: dt('message.icon.sm.size');\n    }\n\n    .p-message-sm .p-message-close-button svg,\n    .p-message-sm .p-message-close-button i {\n        width: dt('message.close.icon.sm.size');\n        height: dt('message.close.icon.sm.size');\n    }\n\n    .p-message-lg .p-message-content {\n        padding: dt('message.content.lg.padding');\n    }\n\n    .p-message-lg .p-message-text {\n        font-size: dt('message.text.lg.font.size');\n    }\n\n    .p-message-lg .p-message-icon,\n    .p-message-lg .p-message-icon svg,\n    .p-message-lg .p-message-icon i {\n        font-size: dt('message.icon.lg.size');\n        width: dt('message.icon.lg.size');\n        height: dt('message.icon.lg.size');\n    }\n\n    .p-message-lg .p-message-close-button svg,\n    .p-message-lg .p-message-close-button i {\n        font-size: dt('message.close.icon.lg.size');\n        width: dt('message.close.icon.lg.size');\n        height: dt('message.close.icon.lg.size');\n    }\n\n    .p-message-outlined {\n        background: transparent;\n        outline-width: dt('message.outlined.border.width');\n    }\n\n    .p-message-simple {\n        background: transparent;\n        outline-color: transparent;\n        box-shadow: none;\n    }\n\n    .p-message-simple .p-message-content {\n        padding: dt('message.simple.content.padding');\n    }\n\n    .p-message-outlined .p-message-close-button:hover,\n    .p-message-simple .p-message-close-button:hover {\n        background: transparent;\n    }\n\n    .p-message-enter-active {\n        animation: p-animate-message-enter 0.3s ease-out forwards;\n        overflow: hidden;\n    }\n\n    .p-message-leave-active {\n        animation: p-animate-message-leave 0.15s ease-in forwards;\n        overflow: hidden;\n    }\n\n    @keyframes p-animate-message-enter {\n        from {\n            opacity: 0;\n            grid-template-rows: 0fr;\n        }\n        to {\n            opacity: 1;\n            grid-template-rows: 1fr;\n        }\n    }\n\n    @keyframes p-animate-message-leave {\n        from {\n            opacity: 1;\n            grid-template-rows: 1fr;\n        }\n        to {\n            opacity: 0;\n            margin: 0;\n            grid-template-rows: 0fr;\n        }\n    }\n";
// node_modules/primeng/fesm2022/primeng-message.mjs
var classes = {
	root: ({ instance }) => {
		const severity = instance.severity();
		const variant = instance.variant();
		const size = instance.size();
		return [
			"p-message p-component p-message-" + severity,
			variant && "p-message-" + variant,
			{
				"p-message-sm": size === "small",
				"p-message-lg": size === "large"
			}
		];
	},
	contentWrapper: "p-message-content-wrapper",
	content: "p-message-content",
	icon: "p-message-icon",
	text: "p-message-text",
	closeButton: "p-message-close-button",
	closeIcon: "p-message-close-icon"
};
var MessageStyle = class MessageStyle extends BaseStyle {
	name = "message";
	style = style;
	classes = classes;
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵMessageStyle_BaseFactory = void 0;
		return function MessageStyle_Factory(__ngFactoryType__) {
			return (ɵMessageStyle_BaseFactory || (ɵMessageStyle_BaseFactory = ɵɵgetInheritedFactory(MessageStyle)))(__ngFactoryType__ || MessageStyle);
		};
	})();
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: MessageStyle,
		factory: MessageStyle.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageStyle, [{ type: Injectable }], null, null);
})();
var MessageClasses;
(function(MessageClasses) {
	MessageClasses["root"] = "p-message";
	MessageClasses["content"] = "p-message-content";
	MessageClasses["icon"] = "p-message-icon";
	MessageClasses["text"] = "p-message-text";
	MessageClasses["closeButton"] = "p-message-close-button";
	MessageClasses["closeIcon"] = "p-message-close-icon";
})(MessageClasses || (MessageClasses = {}));
var MESSAGE_INSTANCE = new InjectionToken("MESSAGE_INSTANCE");
var Message = class Message extends BaseComponent {
	componentName = "Message";
	_componentStyle = inject(MessageStyle);
	bindDirectiveInstance = inject(Bind, { self: true });
	$pcMessage = inject(MESSAGE_INSTANCE, {
		optional: true,
		skipSelf: true
	}) ?? void 0;
	severity = input("info", ...ngDevMode ? [{ debugName: "severity" }] : /* istanbul ignore next */ []);
	closable = input(false, {
		...ngDevMode ? { debugName: "closable" } : /* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	icon = input(...ngDevMode ? [void 0, { debugName: "icon" }] : /* istanbul ignore next */ []);
	closeIcon = input(...ngDevMode ? [void 0, { debugName: "closeIcon" }] : /* istanbul ignore next */ []);
	life = input(void 0, {
		...ngDevMode ? { debugName: "life" } : /* istanbul ignore next */ {},
		transform: numberAttribute
	});
	size = input(...ngDevMode ? [void 0, { debugName: "size" }] : /* istanbul ignore next */ []);
	variant = input(...ngDevMode ? [void 0, { debugName: "variant" }] : /* istanbul ignore next */ []);
	motionOptions = input(...ngDevMode ? [void 0, { debugName: "motionOptions" }] : /* istanbul ignore next */ []);
	computedMotionOptions = computed(() => ({
		...this.ptm("motion"),
		...this.motionOptions()
	}), ...ngDevMode ? [{ debugName: "computedMotionOptions" }] : /* istanbul ignore next */ []);
	onClose = output();
	get closeAriaLabel() {
		return this.config.translation.aria ? this.config.translation.aria.close : void 0;
	}
	visible = signal(true, ...ngDevMode ? [{ debugName: "visible" }] : /* istanbul ignore next */ []);
	containerTemplate = contentChild("container", {
		...ngDevMode ? { debugName: "containerTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	iconTemplate = contentChild("icon", {
		...ngDevMode ? { debugName: "iconTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	closeIconTemplate = contentChild("closeicon", {
		...ngDevMode ? { debugName: "closeIconTemplate" } : /* istanbul ignore next */ {},
		descendants: false
	});
	containerContext = { closeCallback: (event) => this.closeCallback(event) };
	dataP = computed(() => this.cn({
		outlined: this.variant() === "outlined",
		simple: this.variant() === "simple",
		[this.severity()]: this.severity(),
		[this.size()]: this.size()
	}), ...ngDevMode ? [{ debugName: "dataP" }] : /* istanbul ignore next */ []);
	closeCallback = (event) => {
		this.close(event);
	};
	onAfterViewChecked() {
		this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
	}
	onInit() {
		const lifeValue = this.life();
		if (lifeValue) setTimeout(() => {
			this.close(new Event("close"));
		}, lifeValue);
	}
	close(event) {
		this.visible.set(false);
		this.onClose.emit({ originalEvent: event });
	}
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵMessage_BaseFactory = void 0;
		return function Message_Factory(__ngFactoryType__) {
			return (ɵMessage_BaseFactory || (ɵMessage_BaseFactory = ɵɵgetInheritedFactory(Message)))(__ngFactoryType__ || Message);
		};
	})();
	static ɵcmp = (function() {
		const _c0 = ["container"];
		const _c1 = ["icon"];
		const _c2 = ["closeicon"];
		const _c3 = ["*"];
		function Message_Conditional_2_ng_container_0_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Message_Conditional_2_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, Message_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 3);
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵproperty("ngTemplateOutlet", ctx_r0.iconTemplate());
			}
		}
		function Message_Conditional_3_Template(rf, ctx) {
			if (rf & 1) ɵɵelement(0, "i", 0);
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("icon"), ctx_r0.icon()));
				ɵɵproperty("pBind", ctx_r0.ptm("icon"));
				ɵɵattribute("data-p", ctx_r0.dataP());
			}
		}
		function Message_Conditional_4_ng_container_0_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Message_Conditional_4_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, Message_Conditional_4_ng_container_0_Template, 1, 0, "ng-container", 4);
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵproperty("ngTemplateOutlet", ctx_r0.containerTemplate())("ngTemplateOutletContext", ctx_r0.containerContext);
			}
		}
		function Message_Conditional_5_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵelementStart(0, "span", 0);
				ɵɵprojection(1);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵclassMap(ctx_r0.cx("text"));
				ɵɵproperty("pBind", ctx_r0.ptm("text"));
				ɵɵattribute("data-p", ctx_r0.dataP());
			}
		}
		function Message_Conditional_6_Conditional_1_Template(rf, ctx) {
			if (rf & 1) ɵɵelement(0, "i", 0);
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(2);
				ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("closeIcon"), ctx_r0.closeIcon()));
				ɵɵproperty("pBind", ctx_r0.ptm("closeIcon"));
				ɵɵattribute("data-p", ctx_r0.dataP());
			}
		}
		function Message_Conditional_6_Conditional_2_ng_container_0_Template(rf, ctx) {
			if (rf & 1) ɵɵelementContainer(0);
		}
		function Message_Conditional_6_Conditional_2_Template(rf, ctx) {
			if (rf & 1) ɵɵtemplate(0, Message_Conditional_6_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 3);
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(2);
				ɵɵproperty("ngTemplateOutlet", ctx_r0.closeIconTemplate());
			}
		}
		function Message_Conditional_6_Conditional_3_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵnamespaceSVG();
				ɵɵelement(0, "svg", 7);
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext(2);
				ɵɵclassMap(ctx_r0.cx("closeIcon"));
				ɵɵproperty("pBind", ctx_r0.ptm("closeIcon"));
				ɵɵattribute("data-p", ctx_r0.dataP());
			}
		}
		function Message_Conditional_6_Template(rf, ctx) {
			if (rf & 1) {
				const _r2 = ɵɵgetCurrentView();
				ɵɵelementStart(0, "button", 5);
				ɵɵlistener("click", function Message_Conditional_6_Template_button_click_0_listener($event) {
					ɵɵrestoreView(_r2);
					const ctx_r0 = ɵɵnextContext();
					return ɵɵresetView(ctx_r0.close($event));
				});
				ɵɵconditionalCreate(1, Message_Conditional_6_Conditional_1_Template, 1, 4, "i", 1)(2, Message_Conditional_6_Conditional_2_Template, 1, 1, "ng-container")(3, Message_Conditional_6_Conditional_3_Template, 1, 4, "svg", 6);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				const ctx_r0 = ɵɵnextContext();
				ɵɵclassMap(ctx_r0.cx("closeButton"));
				ɵɵproperty("pBind", ctx_r0.ptm("closeButton"));
				ɵɵattribute("aria-label", ctx_r0.closeAriaLabel)("data-p", ctx_r0.dataP());
				ɵɵadvance();
				ɵɵconditional(ctx_r0.closeIcon() ? 1 : ctx_r0.closeIconTemplate() ? 2 : 3);
			}
		}
		return /*@__PURE__*/ ɵɵdefineComponent({
			type: Message,
			selectors: [["p-message"]],
			contentQueries: function Message_ContentQueries(rf, ctx, dirIndex) {
				if (rf & 1) ɵɵcontentQuerySignal(dirIndex, ctx.containerTemplate, _c0, 4)(dirIndex, ctx.iconTemplate, _c1, 4)(dirIndex, ctx.closeIconTemplate, _c2, 4);
				if (rf & 2) ɵɵqueryAdvance(3);
			},
			hostAttrs: [
				"role",
				"alert",
				"aria-live",
				"polite"
			],
			hostVars: 3,
			hostBindings: function Message_HostBindings(rf, ctx) {
				if (rf & 1) {
					ɵɵanimateEnter(function Message_HostBindings_animateenter_cb() {
						return ctx.pcn("p-message-enter-active");
					});
					ɵɵanimateLeave(function Message_HostBindings_animateleave_cb() {
						return ctx.pcn("p-message-leave-active");
					});
				}
				if (rf & 2) {
					ɵɵattribute("data-p", ctx.dataP());
					ɵɵclassMap(ctx.cn(ctx.cx("root"), !ctx.visible() ? ctx.pcn("p-message-leave-active") : void 0));
				}
			},
			inputs: {
				severity: [1, "severity"],
				closable: [1, "closable"],
				icon: [1, "icon"],
				closeIcon: [1, "closeIcon"],
				life: [1, "life"],
				size: [1, "size"],
				variant: [1, "variant"],
				motionOptions: [1, "motionOptions"]
			},
			outputs: { onClose: "onClose" },
			features: [
				ɵɵProvidersFeature([
					MessageStyle,
					{
						provide: MESSAGE_INSTANCE,
						useExisting: Message
					},
					{
						provide: PARENT_INSTANCE,
						useExisting: Message
					}
				]),
				ɵɵHostDirectivesFeature([Bind]),
				ɵɵInheritDefinitionFeature
			],
			ngContentSelectors: _c3,
			decls: 7,
			vars: 12,
			consts: [
				[3, "pBind"],
				[
					3,
					"pBind",
					"class"
				],
				[
					"pRipple",
					"",
					"type",
					"button",
					3,
					"pBind",
					"class"
				],
				[4, "ngTemplateOutlet"],
				[
					4,
					"ngTemplateOutlet",
					"ngTemplateOutletContext"
				],
				[
					"pRipple",
					"",
					"type",
					"button",
					3,
					"click",
					"pBind"
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
					"pBind"
				]
			],
			template: function Message_Template(rf, ctx) {
				if (rf & 1) {
					ɵɵprojectionDef();
					ɵɵelementStart(0, "div", 0)(1, "div", 0);
					ɵɵconditionalCreate(2, Message_Conditional_2_Template, 1, 1, "ng-container");
					ɵɵconditionalCreate(3, Message_Conditional_3_Template, 1, 4, "i", 1);
					ɵɵconditionalCreate(4, Message_Conditional_4_Template, 1, 2, "ng-container")(5, Message_Conditional_5_Template, 2, 4, "span", 1);
					ɵɵconditionalCreate(6, Message_Conditional_6_Template, 4, 6, "button", 2);
					ɵɵelementEnd()();
				}
				if (rf & 2) {
					ɵɵclassMap(ctx.cx("contentWrapper"));
					ɵɵproperty("pBind", ctx.ptm("contentWrapper"));
					ɵɵattribute("data-p", ctx.dataP());
					ɵɵadvance();
					ɵɵclassMap(ctx.cx("content"));
					ɵɵproperty("pBind", ctx.ptm("content"));
					ɵɵattribute("data-p", ctx.dataP());
					ɵɵadvance();
					ɵɵconditional(ctx.iconTemplate() ? 2 : -1);
					ɵɵadvance();
					ɵɵconditional(ctx.icon() ? 3 : -1);
					ɵɵadvance();
					ɵɵconditional(ctx.containerTemplate() ? 4 : 5);
					ɵɵadvance(2);
					ɵɵconditional(ctx.closable() ? 6 : -1);
				}
			},
			dependencies: [
				NgTemplateOutlet,
				Times,
				Ripple,
				SharedModule,
				Bind,
				MotionModule
			],
			encapsulation: 2
		});
	})();
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Message, [{
		type: Component,
		args: [{
			selector: "p-message",
			standalone: true,
			imports: [
				NgTemplateOutlet,
				Times,
				Ripple,
				SharedModule,
				Bind,
				MotionModule
			],
			template: `
        <div [pBind]="ptm('contentWrapper')" [class]="cx('contentWrapper')" [attr.data-p]="dataP()">
            <div [pBind]="ptm('content')" [class]="cx('content')" [attr.data-p]="dataP()">
                @if (iconTemplate()) {
                    <ng-container *ngTemplateOutlet="iconTemplate()"></ng-container>
                }
                @if (icon()) {
                    <i [pBind]="ptm('icon')" [class]="cn(cx('icon'), icon())" [attr.data-p]="dataP()"></i>
                }

                @if (containerTemplate()) {
                    <ng-container *ngTemplateOutlet="containerTemplate(); context: containerContext"></ng-container>
                } @else {
                    <span [pBind]="ptm('text')" [class]="cx('text')" [attr.data-p]="dataP()">
                        <ng-content />
                    </span>
                }
                @if (closable()) {
                    <button [pBind]="ptm('closeButton')" pRipple type="button" [class]="cx('closeButton')" (click)="close($event)" [attr.aria-label]="closeAriaLabel" [attr.data-p]="dataP()">
                        @if (closeIcon()) {
                            <i [pBind]="ptm('closeIcon')" [class]="cn(cx('closeIcon'), closeIcon())" [attr.data-p]="dataP()"></i>
                        } @else if (closeIconTemplate()) {
                            <ng-container *ngTemplateOutlet="closeIconTemplate()"></ng-container>
                        } @else {
                            <svg [pBind]="ptm('closeIcon')" data-p-icon="times" [class]="cx('closeIcon')" [attr.data-p]="dataP()" />
                        }
                    </button>
                }
            </div>
        </div>
    `,
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			providers: [
				MessageStyle,
				{
					provide: MESSAGE_INSTANCE,
					useExisting: Message
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: Message
				}
			],
			hostDirectives: [Bind],
			host: {
				"[attr.data-p]": "dataP()",
				role: "alert",
				"aria-live": "polite",
				"[class]": "cn(cx('root'), !visible() ? pcn('p-message-leave-active') : undefined)",
				"[animate.enter]": "pcn('p-message-enter-active')",
				"[animate.leave]": "pcn('p-message-leave-active')"
			}
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
		closable: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "closable",
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
		closeIcon: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "closeIcon",
				required: false
			}]
		}],
		life: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "life",
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
		variant: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "variant",
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
		onClose: [{
			type: Output,
			args: ["onClose"]
		}],
		containerTemplate: [{
			type: ContentChild,
			args: ["container", {
				descendants: false,
				isSignal: true
			}]
		}],
		iconTemplate: [{
			type: ContentChild,
			args: ["icon", {
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
		}]
	});
})();
var MessageModule = class MessageModule {
	static ɵfac = function MessageModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || MessageModule)();
	};
	static ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({
		type: MessageModule,
		imports: [Message, SharedModule],
		exports: [Message, SharedModule]
	});
	static ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ imports: [
		Message,
		SharedModule,
		SharedModule
	] });
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageModule, [{
		type: NgModule,
		args: [{
			imports: [Message, SharedModule],
			exports: [Message, SharedModule]
		}]
	}], null, null);
})();
export { Message, MessageClasses, MessageModule, MessageStyle };
