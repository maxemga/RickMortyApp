import React, { createContext, useEffect, useMemo, useState } from 'react';
import { Appearance, useColorScheme } from 'react-native';
import { colors } from 'src/theme/config';

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }: { children: Element }) => {
    const isDarkMode = useColorScheme() === 'dark';

    const value = useMemo(
        () => ({
            isDarkMode,
        }),
        [isDarkMode],
    );

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
