'use client'

import { createContext, useContext, useState } from 'react'

type User = {
  id: string
  email: string
  firstName: string
  lastName: string
  voiceLevel: number
} | null

type AppContext = {
  user: User
  loading: boolean
  setUser: (user: User) => void
  setLoading: (loading: boolean) => void
}

const Context = createContext<AppContext | undefined>(undefined)

export function Providers({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null)
  const [loading, setLoading] = useState(false)

  return (
    <Context.Provider value={{ user, loading, setUser, setLoading }}>
      {children}
    </Context.Provider>
  )
}

export const useApp = () => {
  const context = useContext(Context)
  if (context === undefined) {
    throw new Error('useApp must be used inside Providers')
  }
  return context
}