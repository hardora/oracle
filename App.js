// import './global';
// const Web3 = require('web3');

import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./components/SplashScreen";
import HomeScreen from "./components/HomeScreen";
import FirstScreen from "./onBoardingScreen/UI/FirstScreen";
import SecondScreen from "./onBoardingScreen/UI/SecondScreen";
import ThirdScreen from "./onBoardingScreen/UI/ThirdScreen";
import CreateWalletScreen from "./components/CreateWalletScreen";
import SetupWalletScreen from "./components/SetupWalletScreen";
import VerifyScreen from "./components/VerifyScreen";
import Create from "./components/ProceedToHome";
import ProceedToHome from "./components/ProceedToHome";
// import onBoardingScreen from './onBoardingScreen';
// import OnBoardingSwiper from './onBoardingScreen/OnBoardingSwiper';
// import ScreenBoarding from './onBoardingScreen/ScreenBoarding';

const Stack = createStackNavigator();

const App = () => {
  // function componentWillMount() {
  // const web3 = new Web3(
  //     new Web3.providers.HttpProvider('https://mainnet.infura.io/')
  // );

  // web3.eth.getBlock('latest').then(console.log)
  // }
  // componentWillMount();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={FirstScreen}
          options={{
            headerLeft: () => null,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SecondScreen"
          component={SecondScreen}
          options={{
            headerLeft: () => null,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ThirdScreen"
          component={ThirdScreen}
          options={{
            headerLeft: () => null,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Dashboard"
          component={CreateWalletScreen}
          options={{
            headerLeft: () => null,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AccountDashboard"
          component={HomeScreen}
          options={{
            headerLeft: () => null,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SetupWalletScreen"
          component={SetupWalletScreen}
          options={{
            headerLeft: () => null,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Verify"
          component={VerifyScreen}
          options={{
            headerLeft: () => null,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Create"
          component={Create}
          options={{
            headerLeft: () => null,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Proceed"
          component={ProceedToHome}
          options={{
            headerLeft: () => null,
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
