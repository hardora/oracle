import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Image, ImageBackground, Pressable, TextInput } from "react-native";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Color } from "../constant/Color";

export default function ValidateStake() {
  const navigation = useNavigation();
  function nextHandler() {
    navigation.navigate("Staked");
  }
  function nextHandlerBack() {
    navigation.navigate("StakeToken");
  }
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.row}>
          <Ionicons
            onPress={nextHandlerBack}
            name="arrow-back-outline"
            color="#f5f5f5"
            size={30}
          />
        </View>
        <View style={styles.drop}>
          <Text style={styles.textBig}>Validate Stake With Pin</Text>
        </View>
        <View style={styles.rowed}>
          <TextInput style={styles.box}></TextInput>
          <TextInput style={styles.box}></TextInput>
          <TextInput style={styles.box}></TextInput>
          <TextInput style={styles.box}></TextInput>
          <TextInput style={styles.box}></TextInput>
        </View>
        <ImageBackground
          source={require("../assets/images/bg.png")}
          resizeMode="cover"
        >
          <View style={styles.col}>
            <Text style={styles.text}>Staked: 10.00</Text>
          </View>

          <View style={styles.flex}>
            <Pressable
              style={
                ([({ pressed }) => pressed && styles.pressed], styles.textBox)
              }
            >
              <View>
                <Text style={styles.textInput}>1</Text>
              </View>
            </Pressable>
            <Pressable
              style={
                ([({ pressed }) => pressed && styles.pressed], styles.textBox)
              }
            >
              <View>
                <Text style={styles.textInput}>2</Text>
              </View>
            </Pressable>
            <Pressable
              style={
                ([({ pressed }) => pressed && styles.pressed], styles.textBox)
              }
            >
              <View>
                <Text style={styles.textInput}>3</Text>
              </View>
            </Pressable>
            <Pressable
              style={
                ([({ pressed }) => pressed && styles.pressed], styles.textBox)
              }
            >
              <View>
                <Text style={styles.textInput}>4</Text>
              </View>
            </Pressable>
            <Pressable
              style={
                ([({ pressed }) => pressed && styles.pressed], styles.textBox)
              }
            >
              <View>
                <Text style={styles.textInput}>5</Text>
              </View>
            </Pressable>
            <Pressable
              style={
                ([({ pressed }) => pressed && styles.pressed], styles.textBox)
              }
            >
              <View>
                <Text style={styles.textInput}>6</Text>
              </View>
            </Pressable>
            <Pressable
              style={
                ([({ pressed }) => pressed && styles.pressed], styles.textBox)
              }
            >
              <View>
                <Text style={styles.textInput}>7</Text>
              </View>
            </Pressable>
            <Pressable
              style={
                ([({ pressed }) => pressed && styles.pressed], styles.textBox)
              }
            >
              <View>
                <Text style={styles.textInput}>8</Text>
              </View>
            </Pressable>
            <Pressable
              style={
                ([({ pressed }) => pressed && styles.pressed], styles.textBox)
              }
            >
              <View>
                <Text style={styles.textInput}>9</Text>
              </View>
            </Pressable>
            <Pressable
              style={
                ([({ pressed }) => pressed && styles.pressed], styles.textBox)
              }
            >
              <View>
                <Text style={styles.textInput}>.</Text>
              </View>
            </Pressable>
            <Pressable
              style={
                ([({ pressed }) => pressed && styles.pressed], styles.textBox)
              }
            >
              <View>
                <Text style={styles.textInput}>0</Text>
              </View>
            </Pressable>
            <Pressable
              style={
                ([({ pressed }) => pressed && styles.pressed], styles.textBox)
              }
            >
              <View>
                <Text style={styles.textInput}>X</Text>
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
                <Text style={styles.next}>Validate</Text>
              </View>
            </Pressable>
          </View>
          <Pressable onPress={nextHandler}>
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
    backgroundColor: "green",
  },
  row: {
    flexDirection: "row",
    marginHorizontal: 20,
    justifyContent: "space-between",
    marginTop: 40,
    marginBottom: 20,
  },
  drop: {
    marginTop: 10,
  },
  rowed: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    gap: 10,
    marginTop: 10,
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
  },
  col: {
    alignItems: "center",
    marginVertical: 10,
  },
  nextButton: {
    backgroundColor: "#ffc000",
    padding: 5,
    borderRadius: 35,
  },
  next: {
    backgroundColor: "#ffc000",
    padding: 5,
    borderRadius: 35,
    fontSize: 24,
    textAlign: "center",
  },
  textBig: {
    color: "#f5f5f5",
    fontSize: 24,
    textAlign: "center",
  },
  flex: {
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
    marginTop: 60,
    marginLeft: 20,
    marginBottom: 20,
  },
  textBox: {
    width: "30%",
    color: "#f5f5f5",
    fontSize: 24,
    borderColor: "#ffc000",
    borderWidth: 1,
    padding: 10,
    textAlign: "center",
    borderRadius: 10,
    fontWeight: 700,
  },
  textInput: {
    color: "#f5f5f5",
    fontSize: 24,
    textAlign: "center",
    fontWeight: 700,
  },
  text: {
    color: "#f5f5f5",
    fontSize: 14,
    textAlign: "center",
    borderColor: "#f5f5f5",
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  buttonHolder: {
    borderRadius: 40,
    marginBottom: 10,
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
