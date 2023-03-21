import React from "react";
import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, Image, } from "react-native-elements";
import Onboarding from "react-native-onboarding-swiper";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

const Square = ({ isLight, selected }) => {
  let backgroundColor;
  if (isLight) {
    backgroundColor = selected ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.3)";
  } else {
    backgroundColor = selected ? "#fff" : "rgba(255, 255, 255, 0.5)";
  }
  return (
    <View
      style={{
        width: 6,
        height: 6,
        marginHorizontal: 3,
      }}
    />
  );
};

const backgroundColor = isLight => (isLight ? "blue" : "lightblue");
const color = isLight => backgroundColor(!isLight);

const Done = ({ isLight, ...props }) => (
  <Button
    title={"Accept"}
    buttonStyle={{}}
    containerViewStyle={{
      marginVertical: 10,
      width: 70
    }}
    textStyle={{ color: "black" }}
    type="clear"
    {...props}
  />
);

const Skip = ({ isLight, skipLabel, ...props }) => (
  <Button
    title={"Skip"}
    buttonStyle={{}}
    containerViewStyle={{
      marginVertical: 10,
      width: 70
    }}
    textStyle={{ color: "#000" }}
    type="clear"
    {...props}
  >
    {skipLabel}
  </Button>
);

const Next = ({ isLight, ...props }) => (
  <Pressable {...props} >
    <Ionicons name="arrow-forward" size={30} color="#fff" />

    {/* <Button
      title={"Next"}
      buttonStyle={{
        backgroundColor: '#F5F5F5',
        marginHorizontal: 20,
        paddingHorizontal: 50,
        paddingVertical: 13,
        borderRadius: 24,
      }}
      containerViewStyle={{
        marginVertical: 10,
        width: 70
      }}
      textStyle={{ color: "black" }}
      type="clear"
      {...props}
    /> */}
  </Pressable>

);

/*
 * Boarding is the onboarding component.
 * react-native-onboarding-swiper requires an image for every page, so we
 * provide an dummy View.
 */
class ScreenBoarding extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Onboarding

        DotComponent={Square}
        NextButtonComponent={Next}
        SkipButtonComponent={Skip}
        skipToPage={3}
        DoneButtonComponent={Done}
        bottomBarColor={'#111432'}

        onDone={() => {
          // navigate to main app experience
        }}

        titleStyles={{ fontSize: 44, fontWeight: "800" }}
        subTitleStyles={{ fontSize: 24 }}

        pages={[
          {
            backgroundColor: "#fff",
            image: <Eula />,
            title: "Foobar",
            subtitle: "new app for you"
          },
          {
            image: <View />,
            title: "apple",
            titleStyles: { color: "white" },
            subtitle: "apple for you"
          },
          {
            image: <View />,
            title: "Triangle",
            subtitle: "Triangle for you",
          },
          {
            backgroundColor: "#fff",
            image: <View />,
            title: "End-User License Agreement (EULA) of Foobar",
            titleStyles: { color: "black", fontSize: 16 },
            subtitle: <Eula />
          }
        ]}
      />
    );
  }
}

const Eula = () => (
  <ScrollView style={{ paddingHorizontal: 0, paddingTop: 0 }}>
    <Text>
      This End-User License Agreement ("EULA") is a legal agreement between you
      and Foobar Inc.
    </Text>

    <View style={{ height: 100 }} />
  </ScrollView>
);

const styles = StyleSheet.create({
  eulaSubtitle: {
    fontSize: 18
  },
});

export default ScreenBoarding;