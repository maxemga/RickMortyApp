import React from 'react';
import StackNavigation from './components/Navigation/StackNavigation';
import { ApolloProvider } from '@apollo/client'
import { client } from './db';


const App = () => {

  return (
    <ApolloProvider client={client}>
        <StackNavigation/>
    </ApolloProvider>
    
  )

}

export default App;
