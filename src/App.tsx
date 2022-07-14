import React from 'react';
import { StackNavigation } from 'src/components/Navigation/StackNavigation';
import { ApolloProvider } from '@apollo/client';
import { FilterProvider } from 'src/context/filterContext';
import { TypeModalProvider } from 'src/context/typeModalContext';
import { ActiveDataProvider } from 'src/context/activeData';
import { client } from 'src/db';

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
