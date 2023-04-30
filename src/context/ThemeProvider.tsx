import { FC, ReactNode } from 'react';
import { ThemeProvider as TProvider, DefaultTheme } from 'styled-components';

interface props {
    children: ReactNode
}

const theme: DefaultTheme = {
    primaryColor: '#2196f3',
    secundaryColor: 'blue',
    primaryShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
    gray01: '#F8F9FA',
    gray02: '#DEE2E6',
    gray03: '#ADB5BD'
};

const ThemeProvider: FC<props> = ({ children }) => (
    <TProvider theme={theme}>
        {children}
    </TProvider>
);

export default ThemeProvider;