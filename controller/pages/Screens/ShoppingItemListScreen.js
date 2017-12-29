const View = require("presto-ui").baseView;

class ShoppingItemListScreen extends View {

	constructor(props, children, state) {
		super(props, children, state);
		this.shouldCacheScreen = false;

		this.style_Button = {
			onClick : this.onProceedClick.bind(this)
		}
	}

	onProceedClick = () => {
		let finalObj = window.__itemName.map((value, index) => ({
			name: value,
			price: window.__itemPrice[index],
			quantity: window.__itemQuantity[index]
		}))
		if(finalObj.length==0){
			console.log("Please add item to cart");
		}else{
			window.__runDuiCallback(JSON.stringify({tag:"ListSelected",contents:finalObj}))
		}
	}
}

module.exports = ShoppingItemListScreen;
