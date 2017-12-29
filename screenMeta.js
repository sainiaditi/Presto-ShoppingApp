const RootScreen = require("./views/RootScreen");
// Screens of page: Screens
const SplashScreen = require("./views/Screens/SplashScreen");
const ShoppingItemListScreen = require("./views/Screens/ShoppingItemListScreen");
const InvoiceScreen = require("./views/Screens/InvoiceScreen");
const CheckoutScreen = require("./views/Screens/CheckoutScreen");

const screens = {
	SplashScreen,
	ShoppingItemListScreen,
	InvoiceScreen,
	CheckoutScreen,
	RootScreen
};

const INIT_UI = "SplashScreen";

module.exports = {
	screens,
	INIT_UI
};
