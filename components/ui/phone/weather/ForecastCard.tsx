import { Colors } from "@/constant/Colors";
import { textStyle } from "@/constant/TextStyle";
import { ForecastProps } from "@/types/forecastProps";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ForecastCard({ day, temp, icon, wind }: ForecastProps) {
  return (
    <View style={styles.forecastCard}>
      <Text style={[textStyle.body, styles.forecastCardHeader]}>{day}</Text>
      <View style={styles.forecastCardInfo}>
        <Text style={[textStyle.header5, { fontWeight: "bold" }]}>
          {temp}˚C
        </Text>
        <Feather
          name={icon as React.ComponentProps<typeof Feather>["name"]}
          size={120 / 2}
        ></Feather>
        <Text style={[textStyle.body]}>{wind} km/h</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  forecastCard: {
    backgroundColor: Colors.LightHover,
    borderRadius: 10,
  },
  forecastCardHeader: {
    backgroundColor: Colors.Normal,
    textAlign: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    color: Colors.White,
    paddingVertical: 10,
  },
  forecastCardInfo: {
    gap: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
