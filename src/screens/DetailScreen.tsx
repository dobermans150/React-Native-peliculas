import { StackScreenProps } from '@react-navigation/stack';
import React, { FC } from 'react';
import { Image, StyleSheet, useWindowDimensions, View, ScrollView, Text } from 'react-native';
import { RootStackParams } from '../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { }

export const DetailScreen: FC<Props> = ({ route: { params: movie } }) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const { height } = useWindowDimensions();

    return (
        <ScrollView>
            <View style={{ ...styles.ImageContainer, height: height * 0.7 }}>
                <Image
                    source={{ uri }}
                    style={styles.PosterImage}
                />
            </View>

            <View style={styles.marginContainer}>
                <Text style={styles.subTitle}>{movie.original_title}</Text>
                <Text style={styles.title}>{movie.title}</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    ImageContainer: {
        width: '100%',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
        overflow: 'hidden',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 10,
    },
    PosterImage: {
        flex: 1,
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    subTitle: {
        fontSize: 16,
        opacity: 0.8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
