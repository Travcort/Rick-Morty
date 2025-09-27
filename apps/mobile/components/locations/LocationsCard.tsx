import { Button, Card, Text } from "react-native-paper";
import { View, StyleSheet } from 'react-native';
import { useMyAppContext } from "@/app/_layout";
import Colours from "@/lib/Colours";
import { useRouter } from "expo-router";

type LocationCardTypes = {
    locationID: number;
    name: string; 
    type: string; 
    dimension: string;
    getResidents: () => void;
};

const LocationCard: React.FC<LocationCardTypes> = ({ 
    locationID, name, type, dimension, getResidents
}) => {
    const { customTheme } = useMyAppContext();
    const router = useRouter();

    return (
        <Card style={styles.card}>
            <Card.Content>
                <Text style={styles.locationName}>{name}</Text>
                <View style={styles.details}>
                    <Text style={[styles.detailHeading, {color: Colours[customTheme].text}]}>Type:</Text>
                    <Text style={{color: Colours[customTheme].text}}>{type}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={[styles.detailHeading, {color: Colours[customTheme].text}]}>Dimension:</Text>
                    <Text style={{color: Colours[customTheme].text}}>{dimension}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={[styles.detailHeading, {color: Colours[customTheme].text}]}>Location ID:</Text>
                    <Text style={{color: Colours[customTheme].text}}>{locationID}</Text>
                </View>

                <Button 
                    icon="arrow-right"
                    mode="outlined"
                    onPress={() => {
                        getResidents();
                        router.navigate("/residents");
                    }}
                >
                    Residents
                </Button>
            </Card.Content>
        </Card>
    );
};

export default LocationCard;

const styles = StyleSheet.create({
    card: {
        width: "98%",
        height: 180,
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
    locationName: {
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