import { Colors } from "@/constant/Colors";
import { textStyle } from "@/constant/TextStyle";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.navigation}>
      <Text
        onPress={() => router.navigate("/")}
        style={[textStyle.body, { color: Colors.Normal, cursor: "pointer" }]}
      >
        A.R.I.C.E.
      </Text>
      <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
        <Text style={{ color: Colors.Normal }}>About</Text>
        <Text style={{ color: Colors.Normal }}>Feedback</Text>
        <TouchableOpacity>
          <Text
            style={{
              backgroundColor: Colors.Normal,
              padding: 10,
              borderRadius: 10,
              color: Colors.White,
            }}
          >
            Download
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navigation: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
