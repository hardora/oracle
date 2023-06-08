import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Image, Pressable } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Color } from "../constant/Color";

export default function Settings() {
  const navigation = useNavigation();
  function nextHandler() {
    navigation.navigate("Proceed");
  }
  function nextHandlerHome() {
    navigation.navigate("AccountDashboard");
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View>
          <Text style={styles.textBig}>Connect Trusted Device</Text>
        </View>

        <View>
          <Image source={require("../assets/images/cpu-setting.png")} />
          <Text style={styles.description}>
            Please insert device and click the button below
          </Text>
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
    </SafeAreaView>
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
    marginTop: 15,
  },
});
