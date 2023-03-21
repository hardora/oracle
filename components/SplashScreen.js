import React, { useEffect } from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';


const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home');
        }, 2000);
    }, [navigation])

    return (
        <View style={styles.rootContainer} >
            <View style={styles.logoImage}>
                <SafeAreaView>
                    <Image source={require('../assets/images/logo.png')} />
                </SafeAreaView>
            </View>
            <View style={styles.nodeImage} >
                <Image source={require('../assets/images/illus.png')} />
            </View>
        </View>
    );
};
export default SplashScreen;

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: '#111432',
        flex: 1,
    },
    nodeImage: {
        marginTop: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImage: {
        marginTop: 80,
        alignItems: 'center',
        justifyContent: 'center',

    },
    splash: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
});

