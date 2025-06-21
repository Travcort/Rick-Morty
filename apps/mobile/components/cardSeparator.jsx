import { View, useColorScheme } from "react-native";
import { Theme } from "../data/colours";

export default function CardSeparator () {
    const colorScheme = useColorScheme();
    const theme = Theme[colorScheme];

    return (
        <View style={{ width: "80%", height: 6, borderRadius: 5, marginVertical: 10, margin: 'auto', backgroundColor: theme.inverseBackground }} />
    );
}