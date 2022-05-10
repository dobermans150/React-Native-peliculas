/* eslint-disable react-native/no-inline-styles */
import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Movie } from '../interfaces/movieInterface';
import { MovieCard } from './MovieCard';

interface Props {
    title?: string;
    movies: Movie[];

}

export const HorizontalSlider: FC<Props> = ({ title, movies }) => {
    return (

        <View style={{
            height: title ? 260 : 220,
        }}>

            {title && <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 10 }}>{title}</Text>}

            <FlatList
                data={movies}
                renderItem={({ item }) => (
                    <MovieCard key={item.id} width={140} height={200} movie={item} />
                )}
                keyExtractor={item => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />

        </View>

    );
};
