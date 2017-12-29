const View = require("presto-ui").baseView;

class InvoiceScreen extends View {

	constructor(props, children, state) {
		super(props, children, state);
		this.shouldCacheScreen = false;

		this.style_InvoiceWithArrow = {
				onClick : this.onBackPressed.bind(this)
			}
	}

	onBackPressed = () => {
		window.__runDuiCallback(JSON.stringify({tag:"InvoiceScreenAbort"}))
	}

}

module.exports = InvoiceScreen;
