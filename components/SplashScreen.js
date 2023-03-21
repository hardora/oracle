import React from 'react';
import { Image, StyleSheet } from 'react-native';

const SplashScreen = () => {
    return (
        <Image
            source={require('../assets/icon.png')}
            style={styles.splash}
        />
    );
};

const styles = StyleSheet.create({
    splash: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
});

export default SplashScreen;