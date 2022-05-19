/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { Animated, Button, View } from 'react-native';
import { UseFade } from '../hooks/UseFade';

export const FadeScreen = () => {

    const { fadeIn, fadeOut, opacity } = UseFade();

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'grey',
            justifyContent: 'center',
            alignItems: 'center',
        }}>

            <Animated.View style={{
                backgroundColor: '#084f6a',
                width: 150,
                height: 150,
                borderColor: 'white',
                borderWidth: 10,
                marginBottom: 20,
                opacity: opacity,
            }} />

            <Button
                title="Fade In"
                onPress={() => fadeIn()}
            />

            <Button
                title="Fade Out"
                onPress={() => fadeOut()}
            />
        </View>
    )
}
