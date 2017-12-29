module UI.Types where

import Control.Monad.Eff.Exception (Error)
import Data.Foreign.Class (class Decode, class Encode)
import Data.Foreign.Generic (defaultOptions, genericDecode, genericEncode)
import Data.Generic.Rep (class Generic)
import Presto.Core.Flow (class Interact, defaultInteract)
import Product.Types (ItemList,ShoppingStatus,SelectedList)

data InitScreen = InitScreen
data InitScreenAction = InitScreenRendered

data SplashScreen = SplashScreen
data SplashScreenAction = SplashScreenRendered

data ShoppingItemListScreen = ShoppingItemListScreen (Array ItemList)
data ShoppingItemListScreenAction = ListSelected (Array SelectedList) | ChooseListScreenAbort

data InvoiceScreen = InvoiceScreen (Array SelectedList)
data InvoiceScreenAction = InvoiceScreenRendered | InvoiceScreenAbort

data CheckoutScreen = CheckoutScreen
data CheckoutScreenAction = CheckoutScreenRendered

-- Interact typeclass to tie input and output of the screen
instance splashScreenInteract :: Interact Error SplashScreen SplashScreenAction where
  interact x = defaultInteract x

-- To encode screen and state before sending to UI
derive instance genericSplashScreen  :: Generic SplashScreen _
instance encodeSplashScreen :: Encode SplashScreen where
  encode = genericEncode (defaultOptions { unwrapSingleConstructors = false })

-- To decode action received from UI
derive instance genericSplashScreenAction  :: Generic SplashScreenAction _
instance decodegenericSplashScreenAction :: Decode SplashScreenAction where
  decode = genericDecode defaultOptions

instance initScreenInteract :: Interact Error InitScreen InitScreenAction where
  interact x = defaultInteract x

derive instance genericInitScreen  :: Generic InitScreen _
instance encodeInitScreen :: Encode InitScreen where
  encode = genericEncode (defaultOptions { unwrapSingleConstructors = false })

derive instance genericInitScreenAction  :: Generic InitScreenAction _
instance decodegenericInitScreenAction :: Decode InitScreenAction where
  decode = genericDecode defaultOptions

-- Interact typeclass to tie input and output of the screen
instance shoppingItemListScreenInteract :: Interact Error ShoppingItemListScreen ShoppingItemListScreenAction where
  interact x = defaultInteract x

-- To encode screen and state before sending to UI
derive instance genericShoppingItemListScreenInteract  :: Generic ShoppingItemListScreen _
instance encodeShoppingItemListScreen :: Encode ShoppingItemListScreen where
  encode = genericEncode (defaultOptions { unwrapSingleConstructors = false })

-- To decode action received from UI
derive instance genericShoppingItemListScreenAction  :: Generic ShoppingItemListScreenAction _
instance decodegenericShoppingItemListScreenAction :: Decode ShoppingItemListScreenAction where
  decode = genericDecode defaultOptions

-- Interact typeclass to tie input and output of the screen
instance invoiceScreenInteract :: Interact Error InvoiceScreen InvoiceScreenAction where
  interact x = defaultInteract x

-- To encode screen and state before sending to UI
derive instance genericInvoiceScreen  :: Generic InvoiceScreen _
instance encodeInvoiceScreen :: Encode InvoiceScreen where
  encode = genericEncode (defaultOptions { unwrapSingleConstructors = false })

-- To decode action received from UI
derive instance genericInvoiceScreenAction  :: Generic InvoiceScreenAction _
instance decodegenericInvoiceScreenAction :: Decode InvoiceScreenAction where
  decode = genericDecode defaultOptions

-- Interact typeclass to tie input and output of the screen
instance checkoutScreenInteract :: Interact Error CheckoutScreen CheckoutScreenAction where
  interact x = defaultInteract x

-- To encode screen and state before sending to UI
derive instance generiCheckoutScreen  :: Generic CheckoutScreen _
instance encodeCheckoutScreen :: Encode CheckoutScreen where
  encode = genericEncode (defaultOptions { unwrapSingleConstructors = false })

-- To decode action received from UI
derive instance genericCheckoutScreenAction  :: Generic CheckoutScreenAction _
instance decodegenericCheckoutScreenAction :: Decode CheckoutScreenAction where
  decode = genericDecode defaultOptions
