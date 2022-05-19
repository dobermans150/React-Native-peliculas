/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useEffect } from 'react';
import Carousel from 'react-native-snap-carousel';
import { ActivityIndicator, LogBox, ScrollView, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { MovieCard } from '../components/MovieCard';
import { useMovies } from '../hooks/useMovies';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import { getImageColors } from '../helpers/getColors';
import { GradientContext } from '../context/gradiantContext';

LogBox.ignoreLogs(["ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'."]);



export const HomeScreen = () => {

    const { setMainColors, setPrevMainColors } = useContext(GradientContext);

    const { nowPlaying, popular, topRated, upComing, isLoading } = useMovies();

    const { top } = useSafeAreaInsets();
    const { width } = useWindowDimensions();


    const getPosterColors = async (index: number) => {
        const movie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

        const { primary, secondary } = await getImageColors(uri);
        setMainColors({ primary, secondary });
    };

    useEffect(() => {
        if (nowPlaying.length > 0) {
            getPosterColors(0);
        }
    }, [nowPlaying]);


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
        <GradientBackground >
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
                            onSnapToItem={(index) => getPosterColors(index)}
                        />
                    </View>

                    {/* Popular Movies */}

                    <HorizontalSlider title="Populares" movies={popular} />
                    <HorizontalSlider title="Top Rated" movies={topRated} />
                    <HorizontalSlider title="Upcoming" movies={upComing} />

                </View>
            </ScrollView>
        </GradientBackground>
    );
};

