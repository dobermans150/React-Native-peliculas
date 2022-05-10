import React, { FC } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

export const MovieCard: FC<Props> = ({ movie, height = 420, width = 300 }) => {

    const { title, poster_path } = movie;

    const uri = `https://image.tmdb.org/t/p/w500${poster_path}`;

    return (
        <View style={{ height, width, marginHorizontal: 8 }}>

            <View style={styles.imageContainer}>
                <Image
                    source={{ uri }}
                    style={styles.image}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 10,
    },
    image: {
        flex: 1,
        borderRadius: 18,
    },
});


// https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg