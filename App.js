import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './components/SplashScreen';
import FirstScreen from './onBoardingScreen/UI/FirstScreen';
// import HomeScreen from './components/HomeScreen';
// import onBoardingScreen from './onBoardingScreen';
// import OnBoardingSwiper from './onBoardingScreen/OnBoardingSwiper';
// import ScreenBoarding from './onBoardingScreen/ScreenBoarding';


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
                <Stack.Screen name="Home" component={FirstScreen}
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
