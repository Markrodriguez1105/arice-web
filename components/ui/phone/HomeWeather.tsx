import { Colors } from "@/constant/Colors";
import { textStyle } from "@/constant/TextStyle";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export default function PhoneWeather() {
  const [swap, setSwap] = useState(false);

  const opacity = useSharedValue(1);

  const fadeSwap = (toSwap: boolean) => {
    opacity.value = withTiming(0, { duration: 100 }, (finished) => {
      if (finished) {
        runOnJS(setSwap)(toSwap);
        opacity.value = withTiming(1, { duration: 150 });
      }
    });
  };

  const hover: any = Gesture.Hover()
    .onStart(() => {
      fadeSwap(true);
    })
    .onEnd(() => {
      fadeSwap(false);
    });

  const fadeAnimatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  function showPhoneTemp() {
    return (
      <>
        <View
          style={{
            backgroundColor: Colors.White,
            flex: 1,
            borderRadius: 10,
          }}
        ></View>
        <View
          style={{
            backgroundColor: Colors.White,
            flex: 3,
            borderRadius: 10,
          }}
        ></View>
        <View
          style={{
            backgroundColor: Colors.White,
            flex: 1,
            borderRadius: 10,
          }}
        ></View>
        <View
          style={{
            backgroundColor: Colors.White,
            flex: 1,
            borderRadius: 10,
          }}
        ></View>
      </>
    );
  }

  function showPhoneDesign() {
    return (
      <Image
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 10,
        }}
        source={require("@/assets/images/phone/weather.png")}
      />
    );
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <GestureDetector gesture={hover}>
        <View
          style={{
            borderColor: Colors.Black,
            width: 428 / 2,
            height: 926 / 2,
            borderWidth: 1,
            borderRadius: 20,
            backgroundColor: Colors.Black,
            padding: 10,
            position: "relative",
          }}
        >
          <Animated.View style={[{ flex: 1, gap: 10 }, fadeAnimatedStyle]}>
            {swap ? showPhoneDesign() : showPhoneTemp()}
          </Animated.View>
          <TouchableOpacity onPress={() => router.navigate("/Weather")}>
            <View
              style={{
                width: 70,
                height: 70,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: Colors.Normal,
                borderRadius: 10,
                position: "absolute",
                bottom: -30,
                left: "50%",
                transform: [{ translateX: "-50%" }],
              }}
            >
              <MaterialCommunityIcons
                name="weather-cloudy"
                size={30}
                color={Colors.White}
              />
              <Text style={[textStyle.note, { color: Colors.White }]}>
                Weather
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
