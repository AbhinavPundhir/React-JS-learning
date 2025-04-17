import React from "react";
import { useContext } from "react";
import { createContext } from "react";

export const ThemeContext = createContext({
    themeMode: 'Light',
    lightTheme: ()=>{},
    darkTheme: ()=>{}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme() {
    return  useContext(ThemeContext)
}