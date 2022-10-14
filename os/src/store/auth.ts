import { atom } from 'nanostores'
import * as Realm from 'realm-web'
import realmApp from '../../RealmApp'

export const currentUserStore = atom<Realm.User | null>(null)

export const login = async (email: string, password: string) => {
  const credentials = Realm.Credentials.emailPassword(email, password)
  const user = await realmApp.logIn(credentials)
  currentUserStore.set(user)
}

export const logout = async () => {
  await realmApp.currentUser?.logOut()
  currentUserStore.set(null)
}

export const register = async (email: string, password: string) => {
  await realmApp.emailPasswordAuth.registerUser(email, password)
}
