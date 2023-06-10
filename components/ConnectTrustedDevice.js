import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Image, Pressable } from "react-native";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Color } from "../constant/Color";

export default function ConnectTrustedDevices() {
  const navigation = useNavigation();
  function nextHandler() {
    navigation.navigate("Proceed");
  }
  function nextHandlerHome() {
    navigation.navigate("AccountDashboard");
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.row}>
          <Ionicons
            onPress={nextHandlerHome}
            name="arrow-back-outline"
            color="white"
            size={30}
          />
          <Text style={styles.text}>Connect Trusted Device</Text>
        </View>

        <View style={styles.col}>
          <Image source={require("../assets/images/cpu-setting.png")} />
          <Text style={styles.description}>
            Please insert device and click the button below
          </Text>
        </View>

        <View style={styles.buttonHolder}>
          <Pressable
            onPress={nextHandlerHome}
            style={
              ([({ pressed }) => pressed && styles.pressed], styles.nextButton)
            }
          >
            <View
              style={{
                marginHorizontal: 10,
              }}
            >
              <Text style={styles.next}>Connect</Text>
            </View>
          </Pressable>
        </View>
        <Pressable onPress={nextHandlerHome}>
          <View style={styles.home}>
            <Ionicons name="home-outline" color="#f5f5f5" size={30} />
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
  row: {
    flexDirection: "row",
    marginHorizontal: 20,
    justifyContent: "space-between",
    marginVertical: 40,
  },
  col: {
    flexDirection: "column",
    marginHorizontal: 20,
    justifyContent: "space-between",
    marginVertical: 10,
    alignItems: "center",
  },
  description: {
    fontSize: 22,
    textAlign: "center",
    color: "white",
    paddingHorizontal: 60,
    marginVertical: 10,
  },
  nextButton: {
    backgroundColor: "#ffc000",
    padding: 5,
    borderRadius: 35,
    marginTop: 100,
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
  container: {
    flex: 1,
    backgroundColor: Color.bg,
  },
  home: {
    backgroundColor: Color.bg,
    borderRadius: 50,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "20%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});
