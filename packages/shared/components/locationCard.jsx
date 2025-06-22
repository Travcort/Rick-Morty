import { View, Text, StyleSheet, Pressable, useColorScheme, Platform } from "react-native";
// import { Link } from "expo-router";
// import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FaAngleRight } from "react-icons/fa";
import { Theme } from "../store/colours";

export default function LocationCard({ name, type, dimension, getResidents, locationID }) {
    const colorScheme = useColorScheme();
    const theme = Theme[colorScheme];

    return (
        <View style={[styles.card, {borderColor: theme.generalText}]}>
            <View style={styles.info}>
                {/* Fake Gradient Layer */}
                <View style={[styles.gradientLayer, {backgroundColor: theme.cardBackground}]} />
                
                <Text style={styles.locationName}>{name}</Text>
                <View style={styles.details}>
                    <Text style={[styles.detailHeading, {color: theme.generalText}]}>Type:</Text>
                    <Text style={{color: theme.generalText}}>{type}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={[styles.detailHeading, {color: theme.generalText}]}>Dimension:</Text>
                    <Text style={{color: theme.generalText}}>{dimension}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={[styles.detailHeading, {color: theme.generalText}]}>Location ID:</Text>
                    <Text style={{color: theme.generalText}}>{locationID}</Text>
                </View>

                {Platform.OS === 'web'
                ?(
                    <a href="/residents" style={styles.residentsButton}>
                        <Pressable onPress={getResidents}>
                            <Text style={{ fontWeight: "bold", color: "#fff" }}>Residents</Text>
                            <FaAngleRight size={24} color="white" />
                        </Pressable>
                    </a>
                )
                :(
                    <Link href="/residents" style={styles.residentsButton} asChild>
                        <Pressable onPress={getResidents}>
                            <Text style={{ fontWeight: "bold", color: "#fff" }}>Residents</Text>
                            <FontAwesome name="angle-right" size={24} color="white" />
                        </Pressable>
                    </Link>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: "98%",
        height: 180,
        margin: "auto",
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: "row",
        gap: 4
    },
    info: {
        flexDirection: "column",
        flex: 1,
        alignItems: "center",
        gap: 2
    },
    gradientLayer: {
        ...StyleSheet.absoluteFillObject, // Covers the whole "info" area
        opacity: 0.8, // Simulated gradient effect
    },
    locationName: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        color: "#fff",
    },
    details: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
    },
    detailHeading: {
        fontWeight: "bold",
        fontSize: 16,
        marginRight: 5,
        marginLeft: 4
    },
    residentsButton: {
        marginTop: "auto",
        marginBottom: 5,
        marginLeft: "auto",
        marginRight: 5,
        gap: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 20,
        width: 90,
        justifyContent: "flex-end",
        backgroundColor: "#2563eb",
        alignItems: "center",
        flexDirection: "row",
    }
})