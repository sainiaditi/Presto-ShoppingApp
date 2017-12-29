module Product.Types where

import Data.Foreign.Class (class Encode, class Decode)
import Data.Foreign.Generic (defaultOptions, genericEncode, genericDecode)
import Data.Generic.Rep (class Generic)
import Presto.Core.Utils.Encoding (defaultDecode, defaultEncode)

type ItemList = String

newtype SelectedList = SelectedList {
	name::String,
	quantity::Number,
	price::Number
}

data ShoppingStatus = SUCCESS | FAILURE
data ShoppingFailure = FetchListFailure String
					           | ShoppingFailure String
					           | UserAbort

derive instance genericShoppingStatus  :: Generic ShoppingStatus _
instance encodeShoppingStatus :: Encode ShoppingStatus where
  encode = genericEncode (defaultOptions { unwrapSingleConstructors = false })

derive instance genericSelectedList  :: Generic SelectedList _
instance encodeSelectedList :: Encode SelectedList where
  encode = defaultEncode
instance decodeSelectedList :: Decode SelectedList where
  decode = defaultDecode
