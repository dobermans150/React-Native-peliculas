import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Movie } from '../interfaces/movieInterface';
import { RootStackParams } from '../navigation/Navigation';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParams, 'HomeScreen'>

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

export const MovieCard: FC<Props> = ({ movie, height = 420, width = 300 }) => {

    const { poster_path } = movie;

    const uri = `https://image.tmdb.org/t/p/w500${poster_path}`;

    const navigation = useNavigation<HomeScreenNavigationProp>();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('DetailScreen', movie)}
            activeOpacity={0.9}
            style={{ height, width, marginHorizontal: 2, paddingBottom: 20, paddingHorizontal: 7 }}>

            <View style={styles.imageContainer}>
                <Image
                    source={{ uri }}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
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