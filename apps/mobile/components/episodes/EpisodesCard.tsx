import { Button, Card, Text } from "react-native-paper";
import { View, StyleSheet } from 'react-native';
import Colours from "@/lib/Colours";
import { useRouter } from "expo-router";
import { useMyAppContext } from "@/lib/Context";

type EpisodeCardTypes = {
    episodeID: number;
    name: string; 
    episode: string;
    airDate: string;
    getCharacters: () => void;
};

const EpisodeCard: React.FC<EpisodeCardTypes> = ({ 
    episodeID, name, episode, airDate, getCharacters
}) => {
    const { customTheme } = useMyAppContext();
    const router = useRouter();

    return (
        <Card style={styles.card}>
            <Card.Content>
                <Text style={styles.episodeName}>{name}</Text>
                <View style={styles.details}>
                    <Text style={[styles.detailHeading, {color: Colours[customTheme].text}]}>Air Date:</Text>
                    <Text style={{color: Colours[customTheme].text}}>{airDate}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={[styles.detailHeading, {color: Colours[customTheme].text}]}>Episode:</Text>
                    <Text style={{color: Colours[customTheme].text}}>{episode}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={[styles.detailHeading, {color: Colours[customTheme].text}]}>Episode ID:</Text>
                    <Text style={{color: Colours[customTheme].text}}>{episodeID}</Text>
                </View>

                <Button 
                    icon="arrow-right"
                    mode="outlined"
                    onPress={() => {
                        getCharacters();
                        router.navigate("/characters?episodes=true");
                    }}
                >
                    Characters
                </Button>
            </Card.Content>
        </Card>
    );
};

export default EpisodeCard;

const styles = StyleSheet.create({
    card: {
        width: "98%",
        height: 200,
        margin: "auto",
        flexDirection: "row",
        gap: 4
    },
    info: {
        flexDirection: "column",
        flex: 1,
        alignItems: "center",
        gap: 2
    },
    episodeName: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold"
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
    }
});