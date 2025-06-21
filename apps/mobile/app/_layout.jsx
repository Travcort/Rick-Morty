import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';
import * as Network from 'expo-network';
import {  useColorScheme, ToastAndroid, Platform } from "react-native";
import { Theme } from "shared/store/colours";
import PageStack from "../components/pageStack";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = Theme[colorScheme]
  if (Platform.OS === 'android') {
    NavigationBar.setButtonStyleAsync(colorScheme === 'light' ? "dark" : "light");
  }
  const statusBackgroundStyle = colorScheme === 'light' ? "dark" : "light";


  Network.addNetworkStateListener(({ isConnected, isInternetReachable }) => {
    if(isConnected === false || isInternetReachable === false ) {
      ToastAndroid.show('Please Connect to the Internet', ToastAndroid.SHORT)
    }
  });

  return (
    <>
      <Stack screenOptions={{ 
        headerTitleAlign: "center",
        headerTintColor: theme.inverseText, 
        headerStyle: {
          backgroundColor: theme.backgroundColour,
        },
      }}
      >
        <Stack.Screen name="index" options={{headerShown: false}} />
        <Stack.Screen name="charEpi" options={{ headerTitle: () => <PageStack title={"Character Episodes"} iconName={"person"} /> }} />
        <Stack.Screen name="locations" options={{ headerTitle: () => <PageStack title={"Locations"} iconName={"location"} />}} />
        <Stack.Screen name="episodes" options={{ headerTitle: () => <PageStack title={"Episodes"} iconName={"film"} /> }} />
        <Stack.Screen name="characters" options={{ headerTitle: () => <PageStack title={"Characters"} iconName={"person"} /> }} />
        <Stack.Screen name="residents" options={{ headerTitle: () => <PageStack title={"Residents"} iconName={"people"} /> }} />
        <Stack.Screen name="episodeCharacters" options={{ headerTitle: () => <PageStack title={"Episode Characters"} iconName={"people"} /> }} />
        <Stack.Screen name="filteredLocations" options={{ headerTitle: () => <PageStack title={"Locations Search"} iconName={"location"} />}} />
        <Stack.Screen name="filteredCharacters" options={{ headerTitle: () => <PageStack title={"Characters Search"} iconName={"people"} />}} />
        <Stack.Screen name="filteredEpisodes" options={{ headerTitle: () => <PageStack title={"Episodes Search"} iconName={"film"} />}} />
      </Stack>
      <StatusBar style={statusBackgroundStyle} />
    </>
  );
}
