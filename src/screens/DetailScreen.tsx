import { StackScreenProps } from '@react-navigation/stack';
import React, { FC } from 'react';
import { Image, StyleSheet, TouchableOpacity, useWindowDimensions, View, ScrollView, Text, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


import { MovieDetails } from '../components/MovieDetails';

import { useMovieDetails } from '../hooks/useMovieDetails';

import { Navigation, RootStackParams } from '../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { }

export const DetailScreen: FC<Props> = ({ route: { params: movie }, navigation }) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const { height } = useWindowDimensions();

    const { isLoading, cast, movieFull } = useMovieDetails(movie.id);

    return (
        <ScrollView>
            <View style={{ ...styles.ImageContainer, height: height * 0.7 }}>
                <View style={styles.imageBorder}>
                    <Image
                        source={{ uri }}
                        style={styles.PosterImage}
                    />
                </View>
            </View>

            <View style={styles.marginContainer}>
                <Text style={styles.subTitle}>{movie.original_title}</Text>
                <Text style={styles.title}>{movie.title}</Text>
            </View>


            {
                isLoading
                    ? <ActivityIndicator size={35} color="grey" style={{ marginTop: 20 }} />
                    : <MovieDetails movieFull={movieFull!} cast={cast} />
            }

            {/* Boton para cerrar */}

            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.pop()}>

                <Icon color="white" name="arrow-back-outline" size={50} />
            </TouchableOpacity>


        </ScrollView>
    );
};

const styles = StyleSheet.create({
    ImageContainer: {
        width: '100%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 10,

        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    imageBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
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
    backButton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 30,
        left: 5,
    },
});
