import { StatusBar } from "expo-status-bar";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Color } from "../constant/Color";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native";

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
    <ScrollView style={styles.container}>
      <View style={styles.right}>
        <Ionicons name="add-outline" color="#f5f5f5" size={30} />
        <Text style={styles.text}>Add Username</Text>
      </View>
      <View>
        <View style={styles.rowed}>
          <Text style={styles.text}>Available Balance</Text>
          <Image source={require("../assets/images/Vector.png")} />
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
            <Text style={styles.action}>Buy</Text>
          </View>
          <View style={styles.col}>
            <Ionicons
              style={styles.ion}
              name="arrow-down-outline"
              color={Color.bg}
              size={24}
            />
            <Text style={styles.action}>Receive</Text>
          </View>
          <View style={styles.col}>
            <Ionicons
              style={styles.ion}
              name="arrow-up-outline"
              color={Color.bg}
              size={24}
            />
            <Text style={styles.action}>Send</Text>
          </View>
          <View style={styles.col}>
            <Ionicons
              style={styles.ion}
              name="grid-outline"
              color={Color.bg}
              size={24}
            />
            <Text style={styles.action}>More</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={require("../assets/images/bg2.png")}
        resizeMode="cover"
      >
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
            <Pressable>
              <View style={styles.clicks}>
                <Ionicons name="settings-outline" color="#ffc000" size={30} />
                <Text style={styles.click}>Settings</Text>
              </View>
            </Pressable>
          </View>
          <Pressable onPress={nextHandlerHome}>
            <View style={styles.home}>
              <Ionicons name="home-outline" color="#f5f5f5" size={30} />
            </View>
          </Pressable>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.bg,
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 10,
    marginVertical: 10,
  },
  logo: { width: 20, height: 20 },
  text: {
    color: "#f5f5f5",
    fontSize: 20,
    marginHorizontal: 20,
    marginVertical: 5,
  },
  action: {
    color: "#f5f5f5",
    fontSize: 20,
    marginVertical: 5,
  },
  amount: {
    color: "#f5f5f5",
    marginHorizontal: 10,
    fontSize: 40,
    fontWeight: 700,
  },
  row: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
    width: "60%",
    marginHorizontal: 20,
    alignItems: "center",
  },
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
    gap: 5,
  },
  ion: {
    padding: 12,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
  },
  account: {
    backgroundColor: "#f5f5f5",
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
    color: "#f5f5f5",
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
