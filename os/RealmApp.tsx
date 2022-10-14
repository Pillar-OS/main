import React, {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState
} from 'react'
import * as Realm from 'realm-web'
import * as config from './config.json'

const createRealmApp = (id: string): Realm.App => {
  return new Realm.App({
    id: id
  })
}

const RealmAppContext = createContext<Realm.App | null>(null)

export const RealmAppProvider: FC<PropsWithChildren<{ appId: string }>> = ({
  appId,
  children
}) => {
  const [realmApp, setRealmApp] = useState<Realm.App>(createRealmApp(appId))

  useEffect(() => {
    setRealmApp(createRealmApp(appId))
  }, [appId])

  return (
    <RealmAppContext.Provider value={realmApp}>
      {children}
    </RealmAppContext.Provider>
  )
}

export const useRealmApp = (): Realm.App => {
  const realmApp = React.useContext(RealmAppContext)
  if (realmApp === null) {
    throw new Error('useRealmApp() called outside of a RealmAppProvider?')
  }
  return realmApp
}

const realmApp = createRealmApp(config['realm-app-id'])

export default realmApp
