/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
import React, { createContext, FC, useState } from "react";


export const GradientContext = createContext<ContextProps>({} as ContextProps);

interface ProviderProps {
    children: JSX.Element | JSX.Element[]
}

interface ImageColors {
    primary: string
    secondary: string
}

interface ContextProps {
    colors: ImageColors;
    prevColors: ImageColors;
    setMainColors: (colors: ImageColors) => void;
    setPrevMainColors: (colors: ImageColors) => void;
}

export const GradientProvider: FC<ProviderProps> = ({ children }) => {

    const [colors, setColors] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent',
    });


    const [prevColors, setPrevColors] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent',
    });

    const setMainColors = (colorsArg: ImageColors) => {
        setColors(colorsArg);
    };

    const setPrevMainColors = (colorsArg: ImageColors) => {
        setPrevColors(colorsArg);
    };


    return (
        <GradientContext.Provider
            value={{
                colors,
                prevColors,
                setMainColors,
                setPrevMainColors,
            }}>
            {children}
        </GradientContext.Provider>
    );
};
