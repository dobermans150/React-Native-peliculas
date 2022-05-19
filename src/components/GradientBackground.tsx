/* eslint-disable react-native/no-inline-styles */
import React, { FC, useContext, useEffect } from 'react'
import { Animated, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/gradiantContext';
import { UseFade } from '../hooks/UseFade';

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const GradientBackground: FC<Props> = ({ children }) => {

    const { colors, prevColors, setPrevMainColors } = useContext(GradientContext);

    const { opacity, fadeIn, fadeOut } = UseFade();

    useEffect(() => {
        fadeIn(() => {
            fadeOut();
            setPrevMainColors(colors);
        });
    }, [colors])



    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={[prevColors.primary, prevColors.secondary, 'white']}
                style={{ ...StyleSheet.absoluteFillObject }}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 0.5, y: 0.7 }}
            />

            <Animated.View
                style={{
                    ...StyleSheet.absoluteFillObject
                    , opacity: opacity,
                }}
            >
                <LinearGradient
                    colors={[colors.primary, colors.secondary, 'white']}
                    style={{ ...StyleSheet.absoluteFillObject }}
                    start={{ x: 0.1, y: 0.1 }}
                    end={{ x: 0.5, y: 0.7 }}
                />
            </Animated.View>

            {children}
        </View>
    );
};
