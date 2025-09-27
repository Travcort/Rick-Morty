import { View } from "react-native";
import { useMyAppContext } from "@/app/_layout";
import Colours from "@/lib/Colours";

export default function CardSeparator () {
    const { customTheme } = useMyAppContext();

    return (
        <View style={{ width: "80%", height: 6, borderRadius: 5, marginVertical: 10, margin: 'auto', backgroundColor: Colours[customTheme].background }} />
    );
}