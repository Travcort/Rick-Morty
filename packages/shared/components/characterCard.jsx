import { memo } from 'react';
import { View, ScrollView, StyleSheet, Platform, Text, Image, Pressable, useColorScheme } from "react-native";
// import { Link } from 'expo-router';
import Octicons from '@expo/vector-icons/Octicons';
import { GoDotFill } from "react-icons/go";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FaAngleRight } from "react-icons/fa";
import { Theme } from "../store/colours";

const CharacterCard = memo(({ name, imageUri, status, species, gender, origin, location, characterID, getEpisodes }) => {
    const colorScheme = useColorScheme();
    const theme = Theme[colorScheme];

    return (
        <View style={[styles.card, {borderColor: theme.generalText }]}>
            {/* Fake Gradient Layer */}
            <View style={[styles.gradientLayer, {backgroundColor: theme.cardBackground}]} />

            <Image source={{ uri: imageUri }} style={styles.image} resizeMode="cover" alt="Character" />

            <ScrollView
                style={styles.info}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.infoContent}
            >
                <Text style={styles.characterName}>{name}</Text>

                <View style={styles.status}>
                    <Text style={{color: theme.generalText}}>{status}</Text>
                    {Platform.OS === 'web'
                    ? (
                        <GoDotFill
                        size={24}
                        color={status === "Alive" ? "green" : status === "Dead" ? "red" : "grey"}
                        />
                    )
                    : (
                        <Octicons
                        name="dot-fill"
                        size={24}
                        color={status === "Alive" ? "green" : status === "Dead" ? "red" : "grey"}
                        />
                    )}
                </View>

                <View style={styles.details}>
                    <Text style={[styles.detailHeading, {color: theme.generalText}]}>Species:</Text>
                    <Text style={{color: theme.generalText}}>{species}</Text>
                </View>

                <View style={styles.details}>
                    <Text style={[styles.detailHeading, {color: theme.generalText}]}>Gender:</Text>
                    <Text style={{color: theme.generalText}}>{gender}</Text>
                </View>

                <View style={styles.details}>
                    <Text style={[styles.detailHeading, {color: theme.generalText}]}>Origin:</Text>
                    <Text style={{color: theme.generalText}}>{origin}</Text>
                </View>

                <View style={styles.details}>
                    <Text style={[styles.detailHeading, {color: theme.generalText}]}>Location:</Text>
                    <Text style={{color: theme.generalText}}>{location}</Text>
                </View>

                <View style={styles.details}>
                    <Text style={[styles.detailHeading, {color: theme.generalText}]}>Character ID:</Text>
                    <Text style={{color: theme.generalText}}>{characterID}</Text>
                </View>

                {Platform.OS === 'web'
                ? (
                    <a href="/charEpi" onClick={getEpisodes} style={styles.episodesButton}>
                        <Text style={{ fontWeight: "bold", color: "#fff" }}>Episodes</Text>
                        <FaAngleRight size={20} color="white" />
                    </a>
                )
                : (
                    <Link href="/charEpi" style={styles.episodesButton} asChild>
                        <Pressable onPress={getEpisodes}>
                            <Text style={{ fontWeight: "bold", color: "#fff" }}>Episodes</Text>
                            <FontAwesome name="angle-right" size={24} color="white" />
                        </Pressable>
                    </Link>
                )}
                
            </ScrollView>

        </View>
    );
});

const styles = StyleSheet.create({
    card: {
        width: "98%",
        flex: 1,
        margin: "auto",
        padding: 4,
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: "row",
        gap: 4
    },
    image: {
        height: "auto",
        width: 150,
        padding: 4,
        borderRadius: 8
    },
    info: {
        flexDirection: "column",
        flex: 1,
        gap: 2
    },
    infoContent: {
        paddingBottom: 10
    },
    gradientLayer: {
      ...StyleSheet.absoluteFillObject, // Covers the whole "info" area
      opacity: 0.9, // Simulated gradient effect
      borderRadius: 10
    },
    characterName: {
      fontSize: 20,
      textAlign: "center",
      fontWeight: "bold",
      color: "#fff",
    },
    status: {
      flexDirection: "row",
      alignItems: "center",
      gap: 4, 
      justifyContent: "center", 
      marginTop: 5,
    },
    details: {
      flexDirection: "row",
      flexWrap: 'wrap',
      alignItems: "center",
      marginTop: 5,
    },
    detailHeading: {
      fontWeight: "bold",
      fontSize: 16,
      marginRight: 5,
      marginLeft: 4
    },
    episodesButton: Platform.select({
        web: {
            display: 'flex',
            marginTop: "auto",
            marginLeft: "auto",
            marginRight: 5,
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 10,
            width: "40%",
            backgroundColor: "#2563eb",
        },
        native: {
            alignItems: "center",
            flexDirection: "row",
            marginTop: "auto",
            marginLeft: "auto",
            marginRight: 5,
            gap: 5,
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderRadius: 20,
            width: 90,
            justifyContent: "flex-end",
            backgroundColor: "#2563eb"
        }
    })
  });
  

export default CharacterCard;