import Header from "@/components/Header";
import ForecastCard from "@/components/ui/phone/weather/ForecastCard";
import ForecastCardBig from "@/components/ui/phone/weather/ForecastCardBig";
import SearchText from "@/components/ui/phone/weather/SearchText";
import WeatherIcon from "@/components/ui/phone/weather/WeatherIcon";
import { Colors } from "@/constant/Colors";
import { textStyle } from "@/constant/TextStyle";
import ForecastData from "@/dataset/forecast.json";
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Weather() {
  const [search, setSearch] = useState("");

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <View style={styles.infoSection}>
          <WeatherIcon />
          <Text style={[textStyle.header1, { color: Colors.Normal }]}>
            Weather Forecasting
          </Text>
          <Text style={[textStyle.header5, { color: Colors.Accent }]}>
            Using GenCast Model by Google DeepMind
          </Text>
          <Text
            onPress={() =>
              open(
                "https://deepmind.google/discover/blog/gencast-predicts-weather-and-the-risks-of-extreme-conditions-with-sota-accuracy/"
              )
            }
            style={[
              textStyle.body,
              { color: Colors.Normal, textDecorationLine: "underline" },
            ]}
          >
            About GenCast <Feather name="chevron-right"></Feather>
          </Text>
        </View>
        <View style={styles.weatherForecastContainer}>
          <View style={styles.search}>
            <Feather name="search" size={25}></Feather>
            <SearchText search={search} setSearch={setSearch} />
          </View>
          <View style={{ flexDirection: "row", gap: 20 }}>
            <ForecastCardBig
              day={ForecastData[0].day}
              temp={ForecastData[0].temp}
              icon={ForecastData[0].icon}
              wind={ForecastData[0].wind}
            />
            <View style={{ gap: 20 }}>
              <View style={{ flexDirection: "row", gap: 20 }}>
                <ForecastCard
                  day={ForecastData[1].day}
                  temp={ForecastData[1].temp}
                  icon={ForecastData[1].icon}
                  wind={ForecastData[1].wind}
                />
                <ForecastCard
                  day={ForecastData[2].day}
                  temp={ForecastData[2].temp}
                  icon={ForecastData[2].icon}
                  wind={ForecastData[2].wind}
                />
                <ForecastCard
                  day={ForecastData[3].day}
                  temp={ForecastData[3].temp}
                  icon={ForecastData[3].icon}
                  wind={ForecastData[3].wind}
                />
              </View>
              <View style={{ flexDirection: "row", gap: 20 }}>
                <ForecastCard
                  day={ForecastData[4].day}
                  temp={ForecastData[4].temp}
                  icon={ForecastData[4].icon}
                  wind={ForecastData[4].wind}
                />
                <ForecastCard
                  day={ForecastData[5].day}
                  temp={ForecastData[5].temp}
                  icon={ForecastData[5].icon}
                  wind={ForecastData[5].wind}
                />
                <ForecastCard
                  day={ForecastData[6].day}
                  temp={ForecastData[6].temp}
                  icon={ForecastData[6].icon}
                  wind={ForecastData[6].wind}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 50,
    paddingTop: 25,
  },
  infoSection: {
    height: 500,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  weatherForecastContainer: {
    paddingVertical: 25,
    alignItems: "center",
    gap: 20,
  },
  search: {
    width: 500,
    height: 70,
    backgroundColor: Colors.LightHover,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    borderRadius: 50,
    gap: 10,
  },
});
