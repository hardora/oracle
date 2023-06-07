import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Image, Pressable } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Color } from "../constant/Color";

export default function VerifyScreen() {
  const navigation = useNavigation();
  function nextHandler() {
    navigation.navigate("Proceed");
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image source={require("../assets/images/logo_s.png")} />
        </View>
        <View>
          <Text style={styles.textBig}>Verify Seed Phrase</Text>
        </View>

        <View>
          <Text style={styles.description}>
            Please select the seed phrase in the correct order
          </Text>
        </View>

        <View style={styles.grid}>
          <Pressable style={styles.flex}>
            <View>
              <Text style={styles.text}>1</Text>
            </View>
          </Pressable>
          <Pressable style={styles.flex}>
            <View>
              <Text style={styles.text}>2</Text>
            </View>
          </Pressable>
          <Pressable style={styles.flex}>
            <View>
              <Text style={styles.text}>3</Text>
            </View>
          </Pressable>
          <Pressable style={styles.flex}>
            <View>
              <Text style={styles.text}>4</Text>
            </View>
          </Pressable>
          <Pressable style={styles.flex}>
            <View>
              <Text style={styles.text}>5</Text>
            </View>
          </Pressable>
          <Pressable style={styles.flex}>
            <View>
              <Text style={styles.text}>6</Text>
            </View>
          </Pressable>
          <Pressable style={styles.flex}>
            <View>
              <Text style={styles.text}>7</Text>
            </View>
          </Pressable>
          <Pressable style={styles.flex}>
            <View>
              <Text style={styles.text}>8</Text>
            </View>
          </Pressable>
          <Pressable style={styles.flex}>
            <View>
              <Text style={styles.text}>9</Text>
            </View>
          </Pressable>
          <Pressable style={styles.flex}>
            <View>
              <Text style={styles.text}>10</Text>
            </View>
          </Pressable>
          <Pressable style={styles.flex}>
            <View>
              <Text style={styles.text}>11</Text>
            </View>
          </Pressable>
          <Pressable style={styles.flex}>
            <View>
              <Text style={styles.text}>12</Text>
            </View>
          </Pressable>
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
              <Text style={styles.next}>Verify Seed Phrase</Text>
            </View>
          </Pressable>
        </View>
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
  seeds: {
    marginHorizontal: 10,
    flexDirection: "row",
    flexBasis: 3,
  },
  seed: {
    color: "white",
    marginTop: 5,
    fontSize: 20,
    textAlign: "center",
    fontWeight: 900,
  },

  logo: {
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    flex: 1,
    backgroundColor: Color.bg,
  },
  grid: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 20,
    marginHorizontal: 15,
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  },
  flex: {
    backgroundColor: "#424274",
    borderRadius: 10,
    width: "32.5%",
    marginHorizontal: "auto",
    marginVertical: 2,
    height: 70,
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
});
