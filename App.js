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
import ProceedToHome from "./components/ProceedToHome";
import ConnectTrustedDevices from "./components/ConnectTrustedDevice";
import StakeToken from "./components/StakeToken";
import AccountInformation from "./components/AccountInformation";
import DeviceInfo from "./components/DeviceInfo";
import Settings from "./components/Settings";
import ValidateStake from "./components/ValidateStake";
import Staked from "./components/Staked";

const Stack = createStackNavigator();

const App = () => {
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
          name="Proceed"
          component={ProceedToHome}
          options={{
            headerLeft: () => null,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TrustedDevices"
          component={ConnectTrustedDevices}
          options={{
            headerLeft: () => null,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="StakeToken"
          component={StakeToken}
          options={{
            headerLeft: () => null,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AccountInformation"
          component={AccountInformation}
          options={{
            headerLeft: () => null,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DeviceInfo"
          component={DeviceInfo}
          options={{
            headerLeft: () => null,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            headerLeft: () => null,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ValidateStake"
          component={ValidateStake}
          options={{
            headerLeft: () => null,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Staked"
          component={Staked}
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
