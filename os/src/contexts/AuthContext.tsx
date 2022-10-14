import { useStore } from '@nanostores/react'
import React, { FC, createContext, PropsWithChildren, useState } from 'react'
import { currentUserStore } from '../store/auth'

export const AuthContext = createContext<Realm.User | null>(null)

export const AuthProvider: FC<
  PropsWithChildren<{ fallback: React.ReactNode }>
> = ({ fallback, children }) => {
  const currentUser = useStore(currentUserStore)

  if (currentUser === null) {
    return <>{fallback}</>
  }

  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  )
}
