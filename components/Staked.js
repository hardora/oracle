import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Image, ImageBackground, Pressable } from "react-native";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Color } from "../constant/Color";

export default function Staked() {
  const navigation = useNavigation();
  function nextHandlerHome() {
    navigation.navigate("AccountDashboard");
  }
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.row}>
          <Image source={require("../assets/images/logo_s.png")} />
        </View>

        <View>
          <Text style={styles.textBig}>Stake Submitted Successfully</Text>
        </View>

        <ImageBackground
          source={require("../assets/images/bg.png")}
          resizeMode="cover"
        >
          <View style={styles.col}>
            <Image
              source={require("../assets/images/success.png")}
              style={{ width: 200, height: 200 }}
            />
          </View>

          <View style={styles.account}>
            <View>
              <View style={styles.rowed}>
                <Text style={styles.text}>Amount Staked</Text>
                <Ionicons
                  style={styles.ion}
                  name="copy-outline"
                  color="#ffc000"
                  size={30}
                />
              </View>
              <View style={styles.accountInfo}>
                <Image
                  source={require("../assets/images/app-logo.png")}
                  style={styles.logo}
                />
                <Text style={styles.amount}>10.0000</Text>
              </View>
              <View style={styles.line}>
                <Text style={styles.textsm}>Equiv: $217.50</Text>
              </View>
            </View>
            <View style={styles.drop}>
              <View style={styles.rowed}>
                <Text style={styles.text}>Node ID:</Text>
                <Text style={styles.text}>0xad40234i...564bbb4</Text>
              </View>
              <View style={styles.rowed}>
                <Text style={styles.text}>Date:</Text>
                <Text style={styles.text}>16/03/2023</Text>
              </View>
              <View style={styles.rowed}>
                <Text style={styles.text}>Time:</Text>
                <Text style={styles.text}>09:23:01 am</Text>
              </View>
            </View>
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
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  logo: {
    width: 20,
    height: 20,
  },
  amount: {
    color: "#f5f5f5",
    marginHorizontal: 10,
    fontSize: 40,
    fontWeight: 700,
  },
  rowed: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  account: {
    backgroundColor: "#424674",
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 40,
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
  },
  ion: {
    marginRight: 20,
  },
  text: {
    color: "#f5f5f5",
    fontSize: 20,
    marginHorizontal: 20,
    marginVertical: 5,
  },
  textsm: {
    color: "#f5f5f5",
    fontSize: 14,
    paddingHorizontal: 20,
  },
  textBig: {
    color: "#f5f5f5",
    fontSize: 24,
    fontWeight: 500,
    textAlign: "center",
    marginHorizontal: 60,
    marginTop: 20,
  },
  drop: {
    marginTop: 20,
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
