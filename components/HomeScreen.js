import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Color } from '../constant/Color';

export default function App() {
    return (
        <View style={styles.container}>
            <Text> This is react native expo</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.bg,
    },
});