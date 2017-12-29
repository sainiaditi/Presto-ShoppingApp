module Remote.Flow where

import Prelude

import Engineering.Types.App (Flow)
import Product.Types (ItemList, ShoppingFailure, ShoppingStatus(..))

itemList :: Array ItemList
itemList = [
    "Bucket"
  , "Wiper"
  , "Surf"
  , "Handwash"
  , "Lux"
  , "Nivea"
  , "Yardley"
  , "Sanitizer"
  , "Sparkle"
]

fetchList :: Flow ShoppingFailure (Array ItemList)
fetchList = pure itemList
