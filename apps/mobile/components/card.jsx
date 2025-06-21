import { View, StyleSheet, Text, useColorScheme } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Theme } from "../data/colours";

export default function Card ({text}) {
    const colorScheme = useColorScheme();
    const theme = Theme[colorScheme];

    return (
    <View style={styles.container}>
        <LinearGradient
            colors={["#AF40FF", "#5B42F3", "#00DDEB"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientBackground}
        />

        <View style={styles.card}>
            <View style={[styles.cardContent, {backgroundColor: theme.inverseBackground}]}>
                <Text style={[styles.cardText, {color: theme.generalText}]}>{text}</Text>
            </View>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        overflow: 'hidden',
        marginRight: 10
    },
    gradientBackground: {
        position: "absolute",
        width: "100%",
        height: "110%" 
    },
    card: {
        width: 100,
        height: 150,
        margin: 'auto',
        borderRadius: 20,
        padding: 5
    },
    cardContent: {
        borderRadius: 17,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",  
        height: "100%",
    },
    cardText: {
        fontSize: 18,
        fontWeight: '600'
    }
})