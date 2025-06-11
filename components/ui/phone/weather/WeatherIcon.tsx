import { Colors } from "@/constant/Colors";
import { Feather } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { View } from "react-native";

export default function WeatherIcon() {
  const [icon, setIcon] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      if (icon === 4) {
        setIcon(1);
        return;
      }
      setIcon(icon + 1);
    }, 1000);
  }, [icon]);

  return (
    <View>
      {icon === 1 && <Feather name="sun" size={200} color={Colors.Normal} />}
      {icon === 2 && <Feather name="cloud" size={200} color={Colors.Normal} />}
      {icon === 3 && (
        <Feather name="cloud-rain" size={200} color={Colors.Normal} />
      )}
      {icon === 4 && <Feather name="wind" size={200} color={Colors.Normal} />}
    </View>
  );
}
