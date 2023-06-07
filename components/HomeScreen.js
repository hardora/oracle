import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Color } from "../constant/Color";

export default function HomeScreen() {
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
          <View style={styles.clicks}>
            <Ionicons name="add-circle-outline" color="#ffc000" size={30} />
            <Text style={styles.click}>Connect Trusted Device</Text>
          </View>
          <View style={styles.clicks}>
            <Ionicons name="wallet-outline" color="#ffc000" size={30} />
            <Text style={styles.click}>Stake Token</Text>
          </View>
          <View style={styles.clicks}>
            <Ionicons
              name="document-attach-outline"
              color="#ffc000"
              size={30}
            />
            <Text style={styles.click}>Account Information</Text>
          </View>
          <View style={styles.clicks}>
            <Ionicons
              name="information-circle-outline"
              color="#ffc000"
              size={30}
            />
            <Text style={styles.click}>Trusted Device Info</Text>
          </View>
          <View style={styles.clicks}>
            <Ionicons name="settings-outline" color="#ffc000" size={30} />
            <Text style={styles.click}>Settings</Text>
          </View>
        </View>
        <View style={styles.home}>
          <Ionicons name="home-outline" color="#ffc000" size={30} />
        </View>
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
