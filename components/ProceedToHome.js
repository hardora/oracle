import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, StyleSheet, ScrollView } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Color } from "../constant/Color";

export default function ProceedToHome() {
  const navigation = useNavigation();

  function nextHandler() {
    navigation.navigate("AccountDashboard");
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image source={require("../assets/images/logo_s.png")} />
        </View>
        <View>
          <Text style={styles.textBig}>Congratulations!</Text>
        </View>

        <View>
          <Text style={styles.description}>
            Your Node Id has been created successfully. Your new wallet address
            is:
          </Text>
        </View>

        <View style={styles.img}>
          <Image source={require("../assets/images/home.png")} />
        </View>

        <View style={styles.buttonHolder}>
          <Pressable
            onPress={nextHandler}
            style={
              ([({ pressed }) => pressed && styles.pressed], styles.nextButton)
            }
          >
            <View
              style={{
                marginHorizontal: 10,
              }}
            >
              <Text style={styles.next}>Proceed To Homepage</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    color: "white",
    paddingHorizontal: 20,
  },
  nextButton: {
    backgroundColor: "#ffc000",
    padding: 5,
    borderRadius: 35,
    marginVertical: 30,
  },
  next: {
    backgroundColor: "#ffc000",
    padding: 5,
    borderRadius: 35,
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    color: "white",
  },
  textBig: {
    color: "white",
    fontSize: 40,
    textAlign: "center",
    marginBottom: 20,
  },
  buttonHolder: {
    borderRadius: 40,
    marginVertical: 30,
    paddingHorizontal: 60,
    justifyContent: "center",
  },
  logo: {
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    marginTop: 60,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    flex: 1,
    backgroundColor: Color.bg,
    paddingTop: 10,
  },
});
