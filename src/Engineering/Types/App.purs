module Engineering.Types.App where

import Control.Monad.Aff.AVar (AVAR)
import Control.Monad.Eff (kind Effect)
import Control.Monad.Eff.Console (CONSOLE)
import Control.Monad.Eff.Exception (EXCEPTION)
import Control.Monad.Except.Trans (ExceptT(..))
import Control.Monad.Free (Free)
import Data.Either (Either(..))
import Prelude (pure, (<$>))
import Presto.Core.Types.App (LOCAL_STORAGE, NETWORK, STORAGE, UI)
import Presto.Core.Types.Language.Flow (FlowWrapper)

foreign import data TIMER :: Effect

type AppEffects = ( 
    avar :: AVAR
  , exception :: EXCEPTION
  , exception :: EXCEPTION
  , ui :: UI
  , storage :: STORAGE
  , ls :: LOCAL_STORAGE
  , console :: CONSOLE
  , network :: NETWORK
  , timer :: TIMER)

type CancelerEffects = (
	  avar :: AVAR
  , ui :: UI
  , storage :: STORAGE
  , ls :: LOCAL_STORAGE
  , exception :: EXCEPTION
  , network :: NETWORK
  , console :: CONSOLE
  , timer :: TIMER)

type Flow e a = (ExceptT e (Free FlowWrapper) a)
                  

liftLeft :: forall e b. e -> Flow e b
liftLeft e = ExceptT (Left <$> pure e)
