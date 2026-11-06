import { Ca as operate, Oa as noop, Sa as createOperatorSubscriber } from "./_resource-chunk-B6oSsbEv.js";
import { t as innerFrom } from "./innerFrom-uZvcaiBf.js";
// node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js
function takeUntil(notifier) {
	return operate(function(source, subscriber) {
		innerFrom(notifier).subscribe(createOperatorSubscriber(subscriber, function() {
			return subscriber.complete();
		}, noop));
		!subscriber.closed && source.subscribe(subscriber);
	});
}
export { takeUntil as t };
