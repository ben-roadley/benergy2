import { i as isPlatformBrowser } from "./common-BBp9OMOF.js";
import { Ai as setClassMetadata, Ga as ɵɵdefineNgModule, Ji as ɵɵInheritDefinitionFeature, Nn as NgModule, Wa as ɵɵdefineDirective, Xi as ɵɵProvidersFeature, _o as ɵɵgetInheritedFactory, ca as ɵɵclassMap, un as Directive, xn as Injectable } from "./core-D4dczhTZ.js";
import { _ as untracked, la as ɵɵdefineInjectable, ua as ɵɵdefineInjector, wr as inject, xn as effect } from "./_resource-chunk-B6oSsbEv.js";
import { D as R, J as pe, L as Zt, M as W, T as M, V as ft, v as Dt, w as L } from "./primeng-utils-CVbKD6Wd.js";
import "./dist-2ljAlN4l.js";
import { t as BaseComponent } from "./primeng-basecomponent-C8ezCQ4r.js";
import { s as BaseStyle } from "./primeng-config-Db_bbJUd.js";
// node_modules/primeng/fesm2022/primeng-ripple.mjs
var style$1 = `
    
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }


    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;
var classes = { root: "p-ink" };
var RippleStyle = class RippleStyle extends BaseStyle {
	name = "ripple";
	style = style$1;
	classes = classes;
	static ɵfac = /*@__PURE__*/ (() => {
		let ɵRippleStyle_BaseFactory = void 0;
		return function RippleStyle_Factory(__ngFactoryType__) {
			return (ɵRippleStyle_BaseFactory || (ɵRippleStyle_BaseFactory = ɵɵgetInheritedFactory(RippleStyle)))(__ngFactoryType__ || RippleStyle);
		};
	})();
	static ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
		token: RippleStyle,
		factory: RippleStyle.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RippleStyle, [{ type: Injectable }], null, null);
})();
var RippleClasses;
(function(RippleClasses) {
	RippleClasses["root"] = "p-ink";
})(RippleClasses || (RippleClasses = {}));
var Ripple = class Ripple extends BaseComponent {
	componentName = "Ripple";
	_componentStyle = inject(RippleStyle);
	animationListener;
	mouseDownListener;
	timeout;
	constructor() {
		super();
		effect(() => {
			if (isPlatformBrowser(this.platformId)) {
				if (this.config.ripple()) untracked(() => {
					if (this.getInk()) return;
					this.create();
					this.mouseDownListener = this.renderer.listen(this.el.nativeElement, "mousedown", this.onMouseDown.bind(this));
				});
				else this.remove();
			}
		});
	}
	onMouseDown(event) {
		let ink = this.getInk();
		if (!ink || this.document.defaultView?.getComputedStyle(ink, null).display === "none") return;
		if (!this.$unstyled()) W(ink, this.pcn("p-ink-active"));
		ink.setAttribute("data-p-ink-active", "false");
		if (!Dt(ink) && !Zt(ink)) {
			let d = Math.max(L(this.el.nativeElement), R(this.el.nativeElement));
			ink.style.height = d + "px";
			ink.style.width = d + "px";
		}
		const offset = ft(this.el.nativeElement);
		let x = event.pageX - offset.left + this.document.body.scrollTop - Zt(ink) / 2;
		let y = event.pageY - offset.top + this.document.body.scrollLeft - Dt(ink) / 2;
		this.renderer.setStyle(ink, "top", y + "px");
		this.renderer.setStyle(ink, "left", x + "px");
		if (!this.$unstyled()) M(ink, this.pcn("p-ink-active"));
		ink.setAttribute("data-p-ink-active", "true");
		this.timeout = setTimeout(() => {
			let ink = this.getInk();
			if (ink) {
				if (!this.$unstyled()) W(ink, this.pcn("p-ink-active"));
				ink.setAttribute("data-p-ink-active", "false");
			}
		}, 401);
	}
	getInk() {
		const children = this.el.nativeElement.children;
		for (let i = 0; i < children.length; i++) if (children[i].getAttribute("data-p-ink") === "true") return children[i];
		return null;
	}
	resetInk() {
		let ink = this.getInk();
		if (ink) {
			if (!this.$unstyled()) W(ink, this.pcn("p-ink-active"));
			ink.setAttribute("data-p-ink-active", "false");
		}
	}
	onAnimationEnd(event) {
		if (this.timeout) clearTimeout(this.timeout);
		if (!this.$unstyled()) W(event.currentTarget, this.pcn("p-ink-active"));
		event.currentTarget.setAttribute("data-p-ink-active", "false");
	}
	create() {
		let ink = this.renderer.createElement("span");
		this.renderer.addClass(ink, this.pcn("p-ink"));
		this.renderer.appendChild(this.el.nativeElement, ink);
		this.renderer.setAttribute(ink, "data-p-ink", "true");
		this.renderer.setAttribute(ink, "data-p-ink-active", "false");
		this.renderer.setAttribute(ink, "aria-hidden", "true");
		this.renderer.setAttribute(ink, "role", "presentation");
		if (!this.animationListener) this.animationListener = this.renderer.listen(ink, "animationend", this.onAnimationEnd.bind(this));
	}
	remove() {
		let ink = this.getInk();
		if (ink) {
			if (this.mouseDownListener) this.mouseDownListener();
			if (this.animationListener) this.animationListener();
			this.mouseDownListener = null;
			this.animationListener = null;
			pe(ink);
		}
	}
	onDestroy() {
		if (this.config && this.config.ripple()) this.remove();
	}
	static ɵfac = function Ripple_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || Ripple)();
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: Ripple,
		selectors: [[
			"",
			"pRipple",
			""
		]],
		hostVars: 2,
		hostBindings: function Ripple_HostBindings(rf, ctx) {
			if (rf & 2) ɵɵclassMap(ctx.pcn("p-ripple"));
		},
		features: [ɵɵProvidersFeature([RippleStyle]), ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Ripple, [{
		type: Directive,
		args: [{
			selector: "[pRipple]",
			host: { "[class]": "pcn('p-ripple')" },
			standalone: true,
			providers: [RippleStyle]
		}]
	}], () => [], null);
})();
var RippleModule = class RippleModule {
	static ɵfac = function RippleModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || RippleModule)();
	};
	static ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({
		type: RippleModule,
		imports: [Ripple],
		exports: [Ripple]
	});
	static ɵinj = /*@__PURE__*/ ɵɵdefineInjector({});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RippleModule, [{
		type: NgModule,
		args: [{
			imports: [Ripple],
			exports: [Ripple]
		}]
	}], null, null);
})();
export { Ripple as t };
