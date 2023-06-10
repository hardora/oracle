import { Ionicons } from "@expo/vector-icons";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
  Text,
  ScrollView,
} from "react-native";
import { Color } from "../../constant/Color";
// import { useNavigation } from "@react-navigation/native";

function ThirdScreen({ navigation }) {
  // const navigation = useNavigation();

  function nextHandler() {
    navigation.navigate("Dashboard");
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.nobHolder}>
            <View style={[styles.nob, styles.defaultNob]}></View>
            <View style={[styles.nob, styles.defaultNob]}></View>
            <View style={[styles.nob, styles.activeNob]}></View>
          </View>
        </SafeAreaView>
        <View style={styles.logo}>
          <Image source={require("../../assets/images/logo_s.png")} />
        </View>
        <View style={styles.imageHolder}>
          <Image
            resizeMode="contain"
            style={{}}
            source={require("../../assets/images/computer.png")}
          />
        </View>

        <View style={styles.swiperTextHolder}>
          <Text style={styles.italyText}>Simple</Text>
          <Text style={styles.italyText}>hardware</Text>
          <Text style={styles.boldText}>Compute-enabled</Text>
          <Text style={styles.description}>
            Earn with a hardware compute-enabled oracle that computes
            “deterministic” and “non-deterministic” validation.
          </Text>
        </View>

        <View style={styles.buttonHolder}>
          {/* <Pressable style={({ pressed }) => pressed && styles.pressed} onPress={skipHandler}>
                        <Text style={styles.text}> Skip </Text>
                    </Pressable> */}

          <Pressable
            onPress={nextHandler}
            style={[
              ({ pressed }) => pressed && styles.pressed,
              styles.nextButton,
            ]}
          >
            <View
              style={{
                marginHorizontal: 10,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={[styles.text, { marginHorizontal: 15, color: Color.bg }]}
              >
                Get Started{" "}
              </Text>
              <Ionicons name="arrow-forward" color={Color.bg} size={30} />
            </View>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

export default ThirdScreen;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
  nextButton: {
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 25,
  },
  italyText: {
    color: "white",
    fontSize: 30,
    fontWeight: 100,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  buttonHolder: {
    marginVertical: 30,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  swiperTextHolder: {
    marginHorizontal: 10,
  },
  description: {
    color: "white",
    marginTop: 10,
    fontSize: 16,
  },
  boldText: {
    color: "white",
    fontWeight: 700,
    fontSize: 30,
  },
  imageHolder: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
  },
  logo: {
    marginVertical: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  height: {
    height: 40,
  },
  container: {
    flex: 1,
    backgroundColor: Color.bg,
  },
  nob: {
    height: 4,
    width: 94,
    paddingHorizontal: 5,
    borderWidth: 1,
    alignItems: "center",
    borderRadius: 10,
  },
  activeNob: {
    backgroundColor: "#D9D9D9",
    borderColor: "#D9D9D9",
  },
  defaultNob: {
    backgroundColor: "#424674",
    borderColor: "#424674",
  },
  nobHolder: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 40,
  },
});
