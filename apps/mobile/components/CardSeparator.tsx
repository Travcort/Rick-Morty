import { View } from "react-native";
import Colours from "@/lib/Colours";
import { useMyAppContext } from "@/lib/Context";

export default function CardSeparator () {
    const { customTheme } = useMyAppContext();

    return (
        <View style={{ width: "80%", height: 6, borderRadius: 5, marginVertical: 10, margin: 'auto', backgroundColor: Colours[customTheme].background }} />
    );
}