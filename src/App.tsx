import React from 'react';
import { StackNavigation } from './components/Navigation/StackNavigation';
import { ApolloProvider } from '@apollo/client';
import { client } from './db';
import { FilterProvider } from './context/filterContext';
import { TypeModalProvider } from './context/typeModalContext';
import { ActiveDataProvider } from './context/activeData';

export const App = () => {
    return (
        <ApolloProvider client={client}>
            <FilterProvider>
                <TypeModalProvider>
                    <ActiveDataProvider>
                        <StackNavigation />
                    </ActiveDataProvider>
                </TypeModalProvider>
            </FilterProvider>
        </ApolloProvider>
    );
};
