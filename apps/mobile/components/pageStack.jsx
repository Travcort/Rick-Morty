import { View, Text, useColorScheme } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Theme } from "../data/colours";

export default function PageStack ({ title, iconName }) {
    const colorScheme = useColorScheme();
    const theme = Theme[colorScheme];

    return (
      <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
        <Text style={{  color: theme.inverseText , fontSize: 30, fontFamily: "Montserrat" }}>{title}</Text>
        <Ionicons name={iconName} size={24} color={theme.inverseText} />
      </View>
    );
}