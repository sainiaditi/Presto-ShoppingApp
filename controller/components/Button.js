const View = require("presto-ui").baseView;

class Button extends View {

	constructor(props, children, state) {
		super(props, children, state);
		this.shouldCacheScreen = false;
		this.style_Button = {
			onClick : this.onButtonClick.bind(this)
		}
	}

	onButtonClick = () => {
		// this.props.onClick(this.props.text);
		window.__runDuiCallback(JSON.stringify({tag:"InvoiceScreenRendered",contents:""}))
	}

}

module.exports = Button;
