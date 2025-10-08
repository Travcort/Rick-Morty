import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Asset } from 'expo-asset';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { PaperProvider } from 'react-native-paper';
import Theme from '@/lib/Theme';
import { useColorScheme } from 'react-native';
import AnimatedSplashScreen from '@/components/AnimatedSplashScreen';
import { MyAppContext } from '@/lib/Context';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
        ...FontAwesome.font,
    });

    const cacheImages = (images: string[]) => {
        return images.map(image => {
            return Asset.fromModule(image).downloadAsync();
        })
    };

    const imageAssets = cacheImages([
        require('../assets/images/homeBackground.png')
    ]);

    const [appReady, setAppReady] = useState(false);
    const [splashAnimationFinished, setSplashAnimationFinished] = useState(false);

    // Expo Router uses Error Boundaries to catch errors in the navigation tree.
    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded && imageAssets) {
            SplashScreen.hideAsync();
            setAppReady(true);
        }
    }, [loaded]);

    if (!appReady || !splashAnimationFinished) {
        return <AnimatedSplashScreen onAnimationFinish={(isCancelled) => {
        if(!isCancelled) {
            setSplashAnimationFinished(true);
        }
        }} />;
    }

    return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colourScheme = useColorScheme();
  const customTheme = useColorScheme() ?? 'light';

  const theme = {
    colors: colourScheme === 'light' ? Theme.light : Theme.dark
  };

  return (
    <PaperProvider theme={theme}>
        <StatusBar hidden={true} />
        <MyAppContext.Provider value={{ customTheme }}>
            <Stack>
                <Stack.Screen name="index" options={{headerShown: false}} />
                <Stack.Screen name="characters" options={{headerShown: false}} />
                <Stack.Screen name="episodes" options={{headerShown: false}} />
                <Stack.Screen name="locations" options={{headerShown: false}} />
            </Stack>
        </MyAppContext.Provider>
    </PaperProvider>
  );
}