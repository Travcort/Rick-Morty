import { Button, Card, Text } from "react-native-paper";
import { Image, ScrollView, View, StyleSheet } from 'react-native';
import { useMyAppContext } from "@/app/_layout";
import Colours from "@/lib/Colours";
import { useRouter } from "expo-router";
import Octicons from '@expo/vector-icons/Octicons';

type CharacterCardTypes = {
    name: string; 
    imageUri: string; 
    status: string; 
    species: string; 
    gender: string; 
    origin: string; 
    location: string; 
    characterID: number; 
    getEpisodes: () => void;
};

const CharacterCard: React.FC<CharacterCardTypes> = ({ 
    name, imageUri, status, species, gender, origin, location, characterID, getEpisodes 
}) => {
    const { customTheme } = useMyAppContext();
    const router = useRouter();

    return (
        <Card>
            <Card.Content style={styles.card}>
                <Image source={{ uri: imageUri }} style={styles.image} resizeMode="cover" alt="Character" />
                
                <ScrollView
                    style={styles.info}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.infoContent}
                >
                    <Text style={styles.characterName}>{name}</Text>
    
                    <View style={styles.status}>
                        <Text style={{color: Colours[customTheme].text}}>{status}</Text>
                        <Octicons
                            name="dot-fill"
                            size={24}
                            color={status === "Alive" ? "green" : status === "Dead" ? "red" : "grey"}
                        />
                    </View>
    
                    <View style={styles.details}>
                        <Text style={[styles.detailHeading, {color: Colours[customTheme].text}]}>Species:</Text>
                        <Text style={{color: Colours[customTheme].text}}>{species}</Text>
                    </View>
    
                    <View style={styles.details}>
                        <Text style={[styles.detailHeading, {color: Colours[customTheme].text}]}>Gender:</Text>
                        <Text style={{color: Colours[customTheme].text}}>{gender}</Text>
                    </View>
    
                    <View style={styles.details}>
                        <Text style={[styles.detailHeading, {color: Colours[customTheme].text}]}>Origin:</Text>
                        <Text style={{color: Colours[customTheme].text}}>{origin}</Text>
                    </View>
    
                    <View style={styles.details}>
                        <Text style={[styles.detailHeading, {color: Colours[customTheme].text}]}>Location:</Text>
                        <Text style={{color: Colours[customTheme].text}}>{location}</Text>
                    </View>
    
                    <View style={styles.details}>
                        <Text style={[styles.detailHeading, {color: Colours[customTheme].text}]}>Character ID:</Text>
                        <Text style={{color: Colours[customTheme].text}}>{characterID}</Text>
                    </View>

                    <Button 
                        icon="arrow-right"
                        mode="outlined"
                        onPress={() => {
                            getEpisodes();
                            router.navigate("/charEpi");
                        }}
                    >
                        Episodes
                    </Button>
                    
                </ScrollView>
            </Card.Content>
        </Card>
    );
};

export default CharacterCard;

const styles = StyleSheet.create({
    card: {
        width: "98%",
        flex: 1,
        margin: "auto",
        padding: 4,
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
    characterName: {
      fontSize: 20,
      textAlign: "center",
      fontWeight: "bold"
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
    }
});