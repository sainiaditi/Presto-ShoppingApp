module UI.Flow where

import Prelude

import Engineering.Helpers.Commons (runUI')
import Engineering.Types.App (Flow, liftLeft)
import Product.Types (ItemList, SelectedList, ShoppingFailure(..))
import Remote.Flow as Remote
import UI.Flow as UI
import UI.Types (CheckoutScreen(..), CheckoutScreenAction(..), InvoiceScreen(..), InvoiceScreenAction(..), ShoppingItemListScreen(..), ShoppingItemListScreenAction(..), SplashScreen(..), SplashScreenAction(..))


splashScreen :: Flow ShoppingFailure Unit
splashScreen = do
	action <- runUI' SplashScreen
	case action of
		SplashScreenRendered -> pure unit


shoppingItemList :: Array ItemList ->  Flow ShoppingFailure (Array SelectedList)
shoppingItemList items = do
 action <- runUI' (ShoppingItemListScreen items)
 case action of
	 ListSelected arrObj -> pure arrObj
	 ChooseListScreenAbort -> liftLeft UserAbort

invoiceScreen ::Array SelectedList->Flow ShoppingFailure Unit
invoiceScreen selectedList = do
	action <- runUI' (InvoiceScreen selectedList)
	case action of
		InvoiceScreenRendered -> pure unit
		InvoiceScreenAbort -> do
			items <- Remote.fetchList
			res <- shoppingItemList items
			_ <- invoiceScreen res
			pure unit
		-- InvoiceScreenAbort -> liftLeft UserAbort

checkoutScreen :: Flow ShoppingFailure Unit
checkoutScreen = do
	action <- runUI' CheckoutScreen
	case action of
		CheckoutScreenRendered -> pure unit
