import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Image, ImageBackground, Pressable } from "react-native";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Color } from "../constant/Color";

export default function DeviceInfo() {
  const navigation = useNavigation();

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
          <Text style={styles.textBig}>Device Information</Text>
        </View>

        <View>
          <ImageBackground
            source={require("../assets/images/bg.png")}
            resizeMode="cover"
          >
            <View style={styles.account}>
              <View style={styles.right}>
                <Ionicons
                  style={styles.ion}
                  name="copy-outline"
                  color="#ffc000"
                  size={30}
                />
              </View>

              <View style={styles.drop}>
                <View style={styles.rowed}>
                  <Text style={styles.text}>Unique Device ID:</Text>
                  <Text style={styles.text}>85AFF0A879CE</Text>
                </View>
                <View style={styles.rowed}>
                  <Text style={styles.text}>Public Address:</Text>
                  <Text style={styles.text}>0xab58051b...aec9</Text>
                </View>
                <View style={styles.rowed}>
                  <Text style={styles.text}>Total Request:</Text>
                  <Text style={styles.text}>50</Text>
                </View>
                <View style={styles.rowed}>
                  <Text style={styles.text}>Node Availability:</Text>
                  <Text style={styles.text}>100%</Text>
                </View>
                <View style={styles.rowed}>
                  <Text style={styles.text}>Token Earned:</Text>
                  <Text style={styles.text}>5.0008</Text>
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
  right: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 10,
  },
  textxs: {
    fontSize: 14,
    textAlign: "center",
    color: "#f5f5f5",
  },
  textBorder: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#f5f5f5",
    padding: 3,
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
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 40,
    marginTop: 60,
  },
  accountInfo: {
    flexDirection: "row",
    marginLeft: 20,
    alignItems: "center",
  },
  line: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginHorizontal: 30,
  },
  col: {
    alignItems: "center",
    marginBottom: 10,
  },
  ion: {
    marginVertical: 10,
  },
  text: {
    color: "#f5f5f5",
    fontSize: 20,
    marginVertical: 5,
  },
  textsm: {
    color: "#f5f5f5",
    fontSize: 18,
    paddingHorizontal: 20,
  },
  textBig: {
    color: "#f5f5f5",
    fontSize: 24,
    fontWeight: 500,
    marginHorizontal: 20,
  },
  drop: {
    marginTop: 10,
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
    marginTop: 180,
  },
});
