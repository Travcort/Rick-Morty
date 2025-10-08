import { View, Text } from 'react-native';
import Colours from '@/lib/Colours';
import { useMyAppContext } from '@/lib/Context';

export default function NavListHeader () {
    const { customTheme } = useMyAppContext();

    return (
        <View>
            <Text 
                style={{ fontSize: 20, fontWeight: '900', color: Colours[customTheme].text, textAlign: 'center', padding: 10}}
            >
                Wubba Lubba Dub Dub
            </Text>
        </View>
    );
}