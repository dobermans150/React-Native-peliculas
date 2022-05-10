/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import { ActivityIndicator, LogBox, ScrollView, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MovieCard } from '../components/MovieCard';
import { useMovies } from '../hooks/useMovies';
import { HorizontalSlider } from '../components/HorizontalSlider';

LogBox.ignoreLogs(["ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'."]);



export const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upComing, isLoading } = useMovies();

    const { top } = useSafeAreaInsets();
    const { width } = useWindowDimensions();


    if (isLoading) {
        return (
            <View
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            >
                <ActivityIndicator color="red" size={100} />
            </View>
        );
    }


    return (
        <ScrollView>
            <View style={{ marginTop: top + 20 }}>

                {/* Carousel */}
                <View style={{ height: 440 }}>
                    <Carousel
                        data={nowPlaying}
                        renderItem={({ item }) => <MovieCard movie={item} />}
                        sliderWidth={width}
                        itemWidth={300}
                        inactiveSlideOpacity={0.9}
                    />
                </View>

                {/* Popular Movies */}

                <HorizontalSlider title="Populares" movies={popular} />
                <HorizontalSlider title="Top Rated" movies={topRated} />
                <HorizontalSlider title="Upcoming" movies={upComing} />

            </View>
        </ScrollView>
    );
};

