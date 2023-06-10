import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Image, ImageBackground, Pressable, ScrollView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Color } from "../constant/Color";

export default function VerifyScreen() {
  const navigation = useNavigation();
  function nextHandler() {
    navigation.navigate("Proceed");
  }
  function nextHandlerSeed() {
    navigation.navigate("SetupWalletScreen");
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image source={require("../assets/images/logo_s.png")} />
        </View>
        <View style={styles.row}>
          <Ionicons
            onPress={nextHandlerSeed}
            name="arrow-back-outline"
            color="white"
            size={30}
          />
          <Text style={styles.text}>Verify Seed Phrase</Text>
        </View>

        <View>
          <Text style={styles.description}>
            Please select the seed phrase in the correct order
          </Text>
        </View>
        <ImageBackground
          source={require("../assets/images/bg.png")}
          resizeMode="cover"
        >
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
                ([({ pressed }) => pressed && styles.pressed],
                styles.nextButton)
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
    marginBottom: 20,
    marginTop: 10,
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    color: "#f5f5f5",
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
    color: "#f5f5f5",
  },
  textBig: {
    color: "#f5f5f5",
    fontSize: 40,
    textAlign: "center",
    marginBottom: 20,
  },
  buttonHolder: {
    borderRadius: 40,
    paddingHorizontal: 60,
    justifyContent: "center",
    marginTop: 30,
  },
  seeds: {
    marginHorizontal: 10,
    flexDirection: "row",
    flexBasis: 3,
  },
  seed: {
    color: "#f5f5f5",
    marginTop: 5,
    fontSize: 20,
    textAlign: "center",
    fontWeight: 900,
  },

  logo: {
    marginTop: 40,
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
