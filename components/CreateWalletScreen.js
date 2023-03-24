import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { border } from "@shopify/restyle";
import { View, StyleSheet, SafeAreaView, Image, Pressable, Text, ScrollView } from "react-native";
import { Color } from "../constant/Color";
// import { useNavigation } from "@react-navigation/native";

function CreateWalletScreen({ navigation }) {

    // const navigation = useNavigation();

    function nextHandler() {
        navigation.navigate('Dashboard');
    }

    return (
        <ScrollView style={styles.container} >
            <View style={styles.container} >

                <View style={styles.logo} >
                    <Image source={require('../assets/images/logo_s.png')} />
                </View>

                <View style={styles.swiperTextHolder}>
                    <Text style={styles.description}>
                        Become one of the amazing validators on the network to start earning.
                    </Text>
                </View>

                <View style={styles.buttonHolder}>

                    <Pressable onPress={nextHandler} style={[({ pressed }) => pressed && styles.pressed, styles.walletButton]}>
                        <View style={{ marginHorizontal: 80, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={[styles.text, { marginHorizontal: 15, color: Color.bg }]}>Create Node ID</Text>
                            <FontAwesome name="chain" color={Color.bg} size={30} />
                        </View>
                    </Pressable>

                    <Pressable onPress={nextHandler} style={[({ pressed }) => pressed && styles.pressed, styles.importButton]}>
                        <View style={{ marginHorizontal: 80, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={[styles.text, { marginHorizontal: 15, color: 'white' }]}>Import Existing ID </Text>
                            <MaterialIcons name="import-export" color='white' size={30} />
                        </View>
                    </Pressable>

                </View>

            </View>
        </ScrollView>
    )
}

export default CreateWalletScreen;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7

    },
    walletButton: {
        backgroundColor: '#FFC000',
        padding: 10,
        borderRadius: 25,
        marginVertical: 5,
        marginTop: 90,
    },

    importButton: {
        backgroundColor: Color.bg,
        padding: 10,
        borderRadius: 25,
        marginVertical: 20,
        borderColor: 'white',
        borderWidth: 1,

    },

    buttonHolder: {
        marginVertical: 100,
        marginHorizontal: 20,
        justifyContent: 'space-around',

    },
    swiperTextHolder: {
        marginHorizontal: 10,
    },
    description: {
        color: 'white',
        marginTop: 10,
        fontSize: 36,
        fontWeight: 700,
    },

    logo: {
        marginVertical: 90,
        alignItems: 'center',
        justifyContent: 'center',
    },

    container: {
        flex: 1,
        backgroundColor: Color.bg
    },

});

