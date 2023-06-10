import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Image, ImageBackground, Pressable } from "react-native";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Color } from "../constant/Color";

export default function StakeToken() {
  const navigation = useNavigation();
  function nextHandler() {
    navigation.navigate("ValidateStake");
  }
  function nextHandlerHome() {
    navigation.navigate("AccountDashboard");
  }
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.row}>
          <Ionicons
            onPress={nextHandlerHome}
            name="arrow-back-outline"
            color="#f5f5f5"
            size={30}
          />
          <Text style={styles.textBig}>Stake Token</Text>
        </View>
        <View>
          <View style={styles.rowed}>
            <Text style={styles.text}>Available Balance</Text>
          </View>
          <View style={styles.accountInfo}>
            <Image
              source={require("../assets/images/app-logo.png")}
              style={styles.logo}
            />
            <Text style={styles.amount}>23.008</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.text}>Equiv: $500.27</Text>
          </View>
        </View>
        <ImageBackground
          source={require("../assets/images/bg.png")}
          resizeMode="cover"
        >
          <View style={styles.col}>
            <Text style={styles.textBig}>Amount To Stake</Text>
            <Text style={styles.textBigger}>10.00</Text>
          </View>

          <View>
            <Text style={styles.textsm}>
              Please note: You are about to stake 10.00 Hardora token as a
              node/validator. Click the button below to validate your stake.
            </Text>
          </View>

          <View style={styles.buttonHolder}>
            <Pressable
              onPress={nextHandler}
              style={
                ([({ pressed }) => pressed && styles.pressed],
                styles.nextButton)
              }
            >
              <View
                style={{
                  marginHorizontal: 10,
                }}
              >
                <Text style={styles.next}>Stake</Text>
              </View>
            </Pressable>
          </View>
          <Pressable onPress={nextHandlerHome}>
            <View style={styles.home}>
              <Ionicons name="home-outline" color="#f5f5f5" size={30} />
            </View>
          </Pressable>
        </ImageBackground>
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
    marginTop: 40,
    marginBottom: 20,
  },
  amount: {
    color: "#f5f5f5",
    marginHorizontal: 10,
    fontSize: 40,
    fontWeight: 700,
  },
  logo: { width: 20, height: 20 },
  rowed: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  accountInfo: {
    flexDirection: "row",
    marginLeft: 30,
    alignItems: "center",
  },
  line: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  col: {
    alignItems: "center",
    gap: 10,
    marginVertical: 30,
  },
  nextButton: {
    backgroundColor: "#ffc000",
    padding: 5,
    borderRadius: 35,
    marginTop: 20,
  },
  next: {
    backgroundColor: "#ffc000",
    padding: 5,
    borderRadius: 35,
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    color: "#f5f5f5",
    fontSize: 20,
    marginHorizontal: 20,
    marginVertical: 5,
  },
  textsm: {
    color: "#f5f5f5",
    fontSize: 18,
    paddingHorizontal: 40,
    textAlign: "center",
    marginTop: 80,
  },
  textBig: {
    color: "#f5f5f5",
    fontSize: 24,
    textAlign: "center",
  },
  textBigger: {
    color: "#f5f5f5",
    fontSize: 45,
    fontWeight: 700,
    textAlign: "center",
    borderColor: "#f5f5f5",
    borderWidth: 1,
    borderRadius: 30,
    padding: 5,
  },
  buttonHolder: {
    borderRadius: 40,
    marginBottom: 30,
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
