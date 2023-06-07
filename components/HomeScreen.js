import { StatusBar } from "expo-status-bar";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Color } from "../constant/Color";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  function nextHandlerHome() {
    navigation.navigate("AccountDashboard");
  }
  function nextHandler() {
    navigation.navigate("TrustedDevices");
  }
  function nextHandlerStake() {
    navigation.navigate("StakeToken");
  }
  function nextHandlerAccount() {
    navigation.navigate("AccountInformation");
  }
  function nextHandlerDevice() {
    navigation.navigate("DeviceInfo");
  }
  function nextHandlerSettings() {
    navigation.navigate("Settings");
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>
          {" "}
          <Ionicons name="add-outline" color="white" size={30} /> Add Username
        </Text>
      </View>
      <View>
        <View style={styles.row}>
          <Text style={styles.text}>Available Balance</Text>
          <Ionicons name="alarm" color="white" size={30} />
        </View>
        <View style={styles.line}>
          <Image source={require("../assets/images/layer.png")} />
          <Text style={styles.text}>23.008</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.text}>Equiv: 5500.27</Text>
          <Text style={styles.text}>Validation: 17</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Ionicons
              style={styles.ion}
              name="add-outline"
              color={Color.bg}
              size={24}
            />
            <Text style={styles.text}>Buy</Text>
          </View>
          <View style={styles.col}>
            <Ionicons
              style={styles.ion}
              name="arrow-down-outline"
              color={Color.bg}
              size={24}
            />
            <Text style={styles.text}>Receive</Text>
          </View>
          <View style={styles.col}>
            <Ionicons
              style={styles.ion}
              name="arrow-up-outline"
              color={Color.bg}
              size={24}
            />
            <Text style={styles.text}>Send</Text>
          </View>
          <View style={styles.col}>
            <Ionicons
              style={styles.ion}
              name="grid-outline"
              color={Color.bg}
              size={24}
            />
            <Text style={styles.text}>More</Text>
          </View>
        </View>
      </View>
      <View style={styles.account}>
        <View>
          <Pressable onPress={nextHandler}>
            <View style={styles.clicks}>
              <Ionicons name="add-circle-outline" color="#ffc000" size={30} />
              <Text style={styles.click}>Connect Trusted Device</Text>
            </View>
          </Pressable>
          <Pressable onPress={nextHandlerStake}>
            <View style={styles.clicks}>
              <Ionicons name="wallet-outline" color="#ffc000" size={30} />
              <Text style={styles.click}>Stake Token</Text>
            </View>
          </Pressable>
          <Pressable onPress={nextHandlerAccount}>
            <View style={styles.clicks}>
              <Ionicons
                name="document-attach-outline"
                color="#ffc000"
                size={30}
              />
              <Text style={styles.click}>Account Information</Text>
            </View>
          </Pressable>
          <Pressable onPress={nextHandlerDevice}>
            <View style={styles.clicks}>
              <Ionicons
                name="information-circle-outline"
                color="#ffc000"
                size={30}
              />
              <Text style={styles.click}>Trusted Device Info</Text>
            </View>
          </Pressable>
          <Pressable onPress={nextHandlerSettings}>
            <View style={styles.clicks}>
              <Ionicons name="settings-outline" color="#ffc000" size={30} />
              <Text style={styles.click}>Settings</Text>
            </View>
          </Pressable>
        </View>
        <Pressable onPress={nextHandlerHome}>
          <View style={styles.home}>
            <Ionicons name="home-outline" color="#ffc000" size={30} />
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.bg,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    marginVertical: 20,
    justifyContent: "space-between",
    width: "60%",
    marginHorizontal: 20,
    alignItems: "center",
  },
  line: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    marginHorizontal: 20,
  },
  col: {
    alignItems: "center",
    gap: 10,
  },
  ion: {
    padding: 12,
    backgroundColor: "white",
    borderRadius: 10,
  },
  account: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    justifyContent: "center",
  },
  clicks: {
    backgroundColor: Color.bg,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    gap: 20,
    marginVertical: 5,
  },
  click: {
    color: "white",
    fontSize: 24,
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
