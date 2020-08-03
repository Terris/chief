import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { Auth } from './auth'

export const ChiefProvider = ({ children, apolloClient }) => {
  return (
    <ApolloProvider apolloClient={apolloClient}>
      <Auth>{children}</Auth>
    </ApolloProvider>
  )
}
