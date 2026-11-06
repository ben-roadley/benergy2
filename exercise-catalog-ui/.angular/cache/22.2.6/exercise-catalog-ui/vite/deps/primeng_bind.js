import { Ui as signal, c as computed, dt as SecurityContext, ua as ɵɵdefineInjector, wr as inject, xn as effect } from "./_resource-chunk-B6oSsbEv.js";
import { Ai as setClassMetadata, Ds as ɵɵstyleMap, Ga as ɵɵdefineNgModule, Nn as NgModule, Sn as Input, Wa as ɵɵdefineDirective, Wn as Renderer2, X as input, ca as ɵɵclassMap, fn as ElementRef, un as Directive } from "./core-D4dczhTZ.js";
import { r as DomSanitizer } from "./platform-browser-DRbHptTv.js";
import { f as b } from "./dist-2ljAlN4l.js";
import { it as a, n as markInstance } from "./primeng-utils-CVbKD6Wd.js";
// node_modules/primeng/fesm2022/primeng-bind.mjs
var SANITIZED_SINKS = {
	innerhtml: SecurityContext.HTML,
	srcdoc: SecurityContext.HTML,
	href: SecurityContext.URL,
	src: SecurityContext.URL,
	action: SecurityContext.URL,
	formaction: SecurityContext.URL
};
var REJECTED_SINKS = /* @__PURE__ */ new Set(["outerhtml"]);
var Bind = class Bind {
	pBind = input(void 0, ...ngDevMode ? [{ debugName: "pBind" }] : /* istanbul ignore next */ []);
	_attrs = signal(void 0, ...ngDevMode ? [{ debugName: "_attrs" }] : /* istanbul ignore next */ []);
	attrs = computed(() => this._attrs() || this.pBind(), ...ngDevMode ? [{ debugName: "attrs" }] : /* istanbul ignore next */ []);
	styles = computed(() => this.attrs()?.style, ...ngDevMode ? [{ debugName: "styles" }] : /* istanbul ignore next */ []);
	classes = computed(() => a(this.attrs()?.class), ...ngDevMode ? [{ debugName: "classes" }] : /* istanbul ignore next */ []);
	listeners = [];
	el = inject(ElementRef);
	renderer = inject(Renderer2);
	sanitizer = inject(DomSanitizer);
	constructor() {
		effect(() => {
			const attrs = this.attrs() || {};
			const rest = Object.fromEntries(Object.entries(attrs).filter(([key]) => key !== "style" && key !== "class"));
			for (const [key, value] of Object.entries(rest)) {
				const normalizedKey = key.toLowerCase();
				if (normalizedKey.startsWith("on")) {
					if (typeof value === "function") {
						const eventName = normalizedKey.slice(2);
						if (!this.listeners.some((l) => l.eventName === eventName)) {
							const unlisten = this.renderer.listen(this.el.nativeElement, eventName, value);
							this.listeners.push({
								eventName,
								unlisten
							});
						}
					}
				} else if (value === null || value === void 0) this.renderer.removeAttribute(this.el.nativeElement, key);
				else if (REJECTED_SINKS.has(normalizedKey)) continue;
				else if (SANITIZED_SINKS[normalizedKey] !== void 0) {
					const safe = this.sanitizer.sanitize(SANITIZED_SINKS[normalizedKey], value.toString()) ?? "";
					this.renderer.setAttribute(this.el.nativeElement, key, safe);
					if (key in this.el.nativeElement) this.el.nativeElement[key] = safe;
				} else if (key === "data-pc-id") markInstance(this.el.nativeElement, value.toString());
				else {
					this.renderer.setAttribute(this.el.nativeElement, key, value.toString());
					if (key in this.el.nativeElement) this.el.nativeElement[key] = value;
				}
			}
		});
	}
	ngOnDestroy() {
		this.clearListeners();
	}
	setAttrs(attrs) {
		if (!b(this._attrs(), attrs)) this._attrs.set(attrs);
	}
	clearListeners() {
		this.listeners.forEach(({ unlisten }) => unlisten());
		this.listeners = [];
	}
	static ɵfac = function Bind_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || Bind)();
	};
	static ɵdir = /*@__PURE__*/ ɵɵdefineDirective({
		type: Bind,
		selectors: [[
			"",
			"pBind",
			""
		]],
		hostVars: 4,
		hostBindings: function Bind_HostBindings(rf, ctx) {
			if (rf & 2) {
				ɵɵstyleMap(ctx.styles());
				ɵɵclassMap(ctx.classes());
			}
		},
		inputs: { pBind: [1, "pBind"] }
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Bind, [{
		type: Directive,
		args: [{
			selector: "[pBind]",
			standalone: true,
			host: {
				"[style]": "styles()",
				"[class]": "classes()"
			}
		}]
	}], () => [], { pBind: [{
		type: Input,
		args: [{
			isSignal: true,
			alias: "pBind",
			required: false
		}]
	}] });
})();
var BindModule = class BindModule {
	static ɵfac = function BindModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || BindModule)();
	};
	static ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({
		type: BindModule,
		imports: [Bind],
		exports: [Bind]
	});
	static ɵinj = /*@__PURE__*/ ɵɵdefineInjector({});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BindModule, [{
		type: NgModule,
		args: [{
			imports: [Bind],
			exports: [Bind]
		}]
	}], null, null);
})();
export { Bind, BindModule };
