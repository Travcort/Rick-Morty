import {  FlatList, Image, ImageBackground, StyleSheet, View } from "react-native";
import Colours from "@/lib/Colours";
import { useMyAppContext } from "./_layout";
import NavListHeader from "@/components/index/NavListHeader";
import { Card, Text } from "react-native-paper";
import { useRouter } from "expo-router";

type NavLink = {
    id: string;
    text: string;
    image: any;
    href: string;
};

export default function Index() {
  const { customTheme } = useMyAppContext();
  const router = useRouter();

    const navLinks: NavLink[] = [
        {
            id: '1',
            text: 'Characters',
            image: require('@/assets/images/characters.jpg'),
            href: '/Characters'
        },
        {
            id: '2',
            text: 'Locations',
            image: require('@/assets/images/locations.jpg'),
            href: '/Locations'
        },
        {
            id: '3',
            text: 'Episodes',
            image: require('@/assets/images/episodes.jpg'),
            href: '/Episodes'
        }
    ];

    return (
        <View style={{ flex: 1, justifyContent: 'space-evenly', backgroundColor: Colours[customTheme].background }}>
            <Image source={require("@/assets/images/homeBackground.png")} style={{ width: "100%", height: '50%' }} resizeMode="contain" />

            <View>
                <FlatList
                    contentContainerStyle={{ width: "100%" }}
                    ListHeaderComponent={<NavListHeader />}
                    numColumns={3}
                    horizontal={false}
                    data={navLinks}
                    keyExtractor={({id}) => id}
                    renderItem={({item}: { item: NavLink }) => (
                        <Card style={styles.card} onPress={() => router.navigate(item.href)}>
                            <ImageBackground
                                source={item.image}
                                style={styles.imageBackground}
                                imageStyle={styles.imageStyle}
                            >
                                <View style={styles.overlay} />
                                <Text style={styles.cardText}>{item.text}</Text>
                            </ImageBackground>
                        </Card>
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        margin: 8,
        borderRadius: 12,
        overflow: "hidden",
        elevation: 4,
    },
    imageBackground: {
        height: 150,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    imageStyle: {
        borderRadius: 12,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0,0,0,0.4)", // dark overlay for contrast
    },
    cardText: {
        color: "white",
        fontSize: 18,
        fontWeight: "600",
        margin: 10,
        textAlign: "center",
    },
});