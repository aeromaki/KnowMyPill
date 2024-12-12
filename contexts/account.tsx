import React, { createContext, useContext, useEffect, useReducer } from "react"
import { getItem, setItem } from "../storage"
import { AccountType } from "../types"


function accountReducer(account: AccountType, action: AccountType): AccountType {
  setItem('account', { accountType: action })
  return action
}

export const AccountContext = createContext<AccountType>(undefined)
export const AccountDispatchContext = createContext<React.Dispatch<AccountType>>(() => { })

export function AccountProvider({ children }: {
  children: React.ReactNode
}) {
  const [account, accountDispatch] = useReducer(
    accountReducer,
    undefined
  )

  useEffect(() => {
    const getAccount = async () => {
      return (await getItem<{ accountType: AccountType }>('account'))?.accountType ?? null
    }

    getAccount().then(accountDispatch)
  }, [])

  return (
    <AccountContext.Provider value={account}>
      <AccountDispatchContext.Provider value={accountDispatch}>
        {children}
      </AccountDispatchContext.Provider>
    </AccountContext.Provider>
  )
}

export function useAccount(): AccountType {
  return useContext(AccountContext)
}

export function useAccountDispatch(): React.Dispatch<AccountType> {
  return useContext(AccountDispatchContext)
}