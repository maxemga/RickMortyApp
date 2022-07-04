import React from 'react';
import StackNavigation from './components/Navigation/StackNavigation';
import { ApolloProvider } from '@apollo/client'
import { client } from './db';
import { FilterProvider } from './context/filterContext';



const App = () => {
 
  return (
    
    <ApolloProvider client={client}>
      <FilterProvider>
        <StackNavigation/>
      </FilterProvider>
    </ApolloProvider>
    
    
  )

}

export default App;
