import { View, Text, StyleSheet, Pressable, useColorScheme } from "react-native";
import { Link } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FaAngleRight } from "react-icons/fa";
import { Theme } from "../store/colours";

export default function EpisodeCard({ name, airDate, episode, getCharacters, episodeID }) {
    const colorScheme = useColorScheme();
    const theme = Theme[colorScheme];

    return (
        <View style={[styles.card, {borderColor: theme.generalText }]}>
            <View style={styles.info}>
                {/* Fake Gradient Layer */}
                <View style={[styles.gradientLayer, {backgroundColor: theme.cardBackground}]} />

                <Text style={styles.episodeName}>{name}</Text>
                <View style={styles.details}>
                    <Text style={[styles.detailHeading, {color: theme.generalText}]}>Air Date:</Text>
                    <Text style={{color: theme.generalText}}>{airDate}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={[styles.detailHeading, {color: theme.generalText}]}>Episode:</Text>
                    <Text style={{color: theme.generalText}}>{episode}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={[styles.detailHeading, {color: theme.generalText}]}>Episode ID:</Text>
                    <Text style={{color: theme.generalText}}>{episodeID}</Text>
                </View>

                <Link href="/episodeCharacters" style={styles.charactersButton} asChild>
                    <Pressable onPress={getCharacters}>
                        <Text style={{ fontWeight: "bold", color: "#fff" }}>Characters</Text>
                        {Platform.OS === 'web'
                            ? <FaAngleRight size={24} color="white" />
                            : <FontAwesome name="angle-right" size={24} color="white" />
                        }
                    </Pressable>
                </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: "98%",
        height: 200,
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
        opacity: 0.9, // Simulated gradient effect
    },
    episodeName: {
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
    charactersButton: {
        marginTop: "auto",
        marginBottom: 5,
        marginLeft: "auto",
        marginRight: 5,
        gap: 5,
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 20,
        width: 90,
        justifyContent: "flex-end",
        backgroundColor: "#2563eb",
        alignItems: "center",
        flexDirection: "row",
    }
})