import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, ActivityIndicator, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { styles } from '../styles/styles';
import { StatusBar } from 'expo-status-bar';
import { CalendarDaysIcon, MagnifyingGlassIcon, XCircleIcon } from "react-native-heroicons/outline";
import * as Location from 'expo-location';

const apiKey = '462691efff054d478a7140508242302';

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.weatherapi.com/v1/' }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: (city) => `current.json?key=${apiKey}&q=${city}`,
    }),
    getForecast: builder.query({
      query: (city) => `forecast.json?key=${apiKey}&q=${city}&days=7`,
    }),
  }),
});

const { useGetWeatherQuery, useGetForecastQuery } = api;

const Weather = () => {
  const [city, setCity] = useState('');
  const [isCelsius, setIsCelsius] = useState(true);
  const { data: weatherData, error: weatherError, isLoading: weatherLoading, refetch: refetchWeather } = useGetWeatherQuery(city);
  const { data: forecastData, error: forecastError, isLoading: forecastLoading, refetch: refetchForecast } = useGetForecastQuery(city);

  const getDefaultCity = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        const location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`);
        const data = await response.json();
        setCity(data.location.name);
      }
    } catch (error) {
      console.error('Error fetching default city:', error);
      throw error; // Throw the error to be caught in handleClear
    }
  };

  useEffect(() => {
    getDefaultCity();
  }, []);

  const handleSearch = async () => {
    if (city.trim() !== '') {
      try {
        await refetchWeather();
        await refetchForecast();
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
  };

  const handleClear = async () => {
    try {
      await getDefaultCity();
      await refetchWeather();
      await refetchForecast();
    } catch (error) {
      console.error('Error clearing and fetching default city:', error);
    }
  };
  
  const getFormattedTime = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert timestamp to milliseconds
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style='light' />
        <ImageBackground blurRadius={40} style={styles.backgroundImage} source={require("../../assets/10.png")} className='Absolute w-full h-full'>
          <View style={styles.card}>
            {/* Search Bar */}
            <View style={styles.searchBar}>
              <TextInput
                style={styles.input}
                placeholder="Enter city"
                value={city}
                onChangeText={(text) => setCity(text)}
              />
              <TouchableOpacity style={styles.iconButton} onPress={handleClear}>
                <XCircleIcon size={30} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton} onPress={handleSearch}>
                <MagnifyingGlassIcon size={25} color="white" />
              </TouchableOpacity>
            </View>

            {/* Loading Indicator */}
            {weatherLoading || forecastLoading ? (
              <ActivityIndicator size="large" color="blue" />
            ) : (
              <>
                {/* Weather and Forecast Content */}
                {weatherError && <Text style={styles.errorText}>Weather Error: {weatherError.message}</Text>}

                {weatherData && forecastData && (
                  <View style={styles.weatherContainer}>
                    {/* Current Weather */}
                    <Text style={styles.citytext}> {weatherData.location.name}<Text style={{ fontSize: 20 }}>, {weatherData.location.country}</Text></Text>
                    <View style={styles.circularBackground}>
                                <Image source={{ uri: 'https:' + weatherData.current.condition.icon }} style={styles.weatherImage} />
                                <TouchableOpacity onPress={() => setIsCelsius(!isCelsius)} >
                                    <Text style={styles.temperature}>
                                        {isCelsius ? weatherData.current.temp_c : weatherData.current.temp_f}°
                                        {isCelsius ? 'C' : 'F'}
                                    </Text>
                                </TouchableOpacity>


                                <Text style={styles.condition}> {weatherData.current.condition.text}</Text>
                            </View>


                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, justifyContent: 'space-evenly' }} >
                                <View style={styles.box}>
                                    <Image source={require('../../assets/wind.png')} style={styles.icon} />
                                    <Text style={{ color: 'white' }}>  {weatherData.current.wind_kph} kph</Text>
                                </View>
                                <View style={styles.box}>
                                    <Image source={require('../../assets/drop.png')} style={styles.icon} />
                                    <Text style={{ color: 'white' }}>{weatherData.current.humidity}%</Text>
                                </View>
                                <View style={styles.box}>
                                    <Image source={require('../../assets/sun.png')} style={styles.icon} />
                                    <Text style={{ color: 'white' }}>  6:05 AM</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            </View>
                    
                    {/* Daily Forecast */}
                    <View style={{ marginTop: 40 }}>
                      <View style={{ flexDirection: 'row' }}>
                        <CalendarDaysIcon size="25" color="white" style={{ alignSelf: "center" }} />
                        <Text style={{ textAlign: 'center', fontSize: 20, marginLeft: 10, color: 'white' }}>Daily Forecast:</Text>
                      </View>

                      <ScrollView horizontal contentContainerStyle={{ paddingHorizontal: 15 }} showsHorizontalScrollIndicator={false}>
                        {forecastData?.forecast?.forecastday?.map((item, index) => {
                          let date = new Date(item.date);
                          let option = { weekday: 'long' }
                          let dayname = date.toLocaleDateString('en-us', option)
                          dayname = dayname.split(',')[0]
                          return (
                            <View style={styles.forecastbox} key={index}>
                            <Image source={{ uri: 'https:' + item?.day?.condition?.icon }} style={styles.forecasticon} />
                                                <Text style={{color:'white'}}>{dayname}</Text>
                                                <Text style={{color:'white'}}>
                                                 {isCelsius ? item?.day?.avgtemp_c : item?.day?.avgtemp_f}°
                                                    {isCelsius ? 'C' : 'F'}
                                                </Text>
                                                <Text style={{color:'white'}}>{item?.day?.condition?.text}</Text>
                            </View>
                          )
                        })}
                      </ScrollView>
                    </View>
                  </View>
                )}
              </>
            )}
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

export default Weather;
