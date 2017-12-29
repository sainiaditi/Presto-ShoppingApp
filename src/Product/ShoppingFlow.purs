module Product.ShoppingFlow where

import Prelude

import Engineering.Types.App (Flow)
import Product.Types (ShoppingFailure)
import Remote.Flow (fetchList) as Remote
import UI.Flow (checkoutScreen, invoiceScreen, shoppingItemList, splashScreen) as UI

shoppingFlow :: Flow ShoppingFailure Unit
shoppingFlow = do
  _              <- UI.splashScreen
  items          <- Remote.fetchList
  selectedItems  <- UI.shoppingItemList items
  _              <- UI.invoiceScreen selectedItems
  UI.checkoutScreen
  pure unit
