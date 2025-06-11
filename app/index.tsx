import Header from "@/components/Header";
import PhoneWeather from "@/components/ui/phone/HomeWeather";
import PhoneSoil from "@/components/ui/phone/PhoneSoil";
import { Colors } from "@/constant/Colors";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import PhoneHome from "../components/ui/phone/PhoneHome";
import { textStyle } from "../constant/TextStyle";

export default function index() {
  return (
    <ScrollView>
      <LinearGradient
        colors={[Colors.White, Colors.LightHover]}
        style={styles.heroSection}
      >
        <Header />
        <View style={styles.logoSection}>
          <Image
            style={{ width: 200, height: 200 }}
            source={require("../assets/images/logos/icon.png")}
            resizeMode="contain"
          />
          <View style={{ alignItems: "center", gap: 10 }}>
            <Text
              style={[
                textStyle.header1,
                { fontWeight: "bold", color: Colors.Normal },
              ]}
            >
              A.R.I.C.E.
            </Text>
            <Text
              style={[
                textStyle.header5,
                { fontWeight: "normal", color: Colors.Accent },
              ]}
            >
              Automate, Resilient, Innovate, Cultivate, Elevate in Farming
            </Text>
          </View>
        </View>
        <View style={styles.phoneContainer}>
          <PhoneHome />
          <PhoneWeather />
          <PhoneSoil />
        </View>
      </LinearGradient>
      <View style={styles.detailesSecction}>
        <View style={styles.detailesTextContainer}>
          <Text
            style={[
              textStyle.header1,
              {
                fontWeight: "bold",
                textAlign: "center",
              },
            ]}
          >
            Improved Rice Production
          </Text>
          <Text style={[textStyle.header5, { textAlign: "center" }]}>
            Provide suggestion and recommendation farming methods to improve
            production
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.imageDesign}>
            <Image
              style={styles.imageStyle}
              source={require("@/assets/images/showcase/improve.png")}
            />
          </View>
        </View>
      </View>
      <View
        style={[
          styles.detailesSecction,
          { backgroundColor: Colors.LightHover },
        ]}
      >
        <View style={{ flex: 2, alignItems: "center" }}>
          <View style={styles.imageDesign}>
            <Image
              style={styles.imageStyle}
              source={require("@/assets/images/showcase/schedule.png")}
            />
          </View>
        </View>
        <View style={styles.detailesTextContainer}>
          <Text
            style={[
              textStyle.header1,
              { fontWeight: "bold", textAlign: "center" },
            ]}
          >
            Schedule the activities
          </Text>
          <Text style={[textStyle.header5, { textAlign: "center" }]}>
            Automate farming schedules based on weather and soil conditions to
            boost efficiency, reduce labor, and increase crop yield for success
          </Text>
        </View>
      </View>
      <View style={styles.detailesSecction}>
        <View style={styles.detailesTextContainer}>
          <Text
            style={[
              textStyle.header1,
              {
                fontWeight: "bold",
                textAlign: "center",
              },
            ]}
          >
            Decision-Support
          </Text>
          <Text style={[textStyle.header5, { textAlign: "center" }]}>
            Equip with AI chatbot to ask and ask advice
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.imageDesign}>
            <Image
              style={styles.imageStyle}
              source={require("@/assets/images/showcase/chatbot.png")}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  heroSection: {
    paddingTop: 25,
    paddingBottom: 100,
    paddingHorizontal: 50,
  },

  logoSection: {
    justifyContent: "center",
    alignItems: "center",
    height: 500,
    gap: 20,
  },
  phoneContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 50,
  },
  detailesSecction: {
    paddingTop: 50,
    paddingHorizontal: 100,
    flexDirection: "row",
  },
  detailesTextContainer: {
    flex: 1,
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 100,
  },
  imageContainer: { flex: 2, alignItems: "center" },
  imageDesign: {
    width: 892 / 2,
    height: 832 / 2,
    borderWidth: 2,
    borderBottomWidth: 0,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderColor: Colors.Black,
    backgroundColor: Colors.Black,
    padding: 10,
    paddingBottom: 0,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
});
