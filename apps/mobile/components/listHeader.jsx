import { View, Text, useColorScheme } from 'react-native';
import { Theme } from "../data/colours";

export default function ListHeader () {
    const colorScheme = useColorScheme();
    const theme = Theme[colorScheme];

    return (
        <View>
        <Text style={{ fontSize: 20, fontWeight: '900', color: theme.inverseText, textAlign: 'center', padding: 10}}>Wubba Lubba Dub Dub</Text>
        </View>
    );
}