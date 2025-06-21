import {  FlatList, Image, Pressable, View, useColorScheme } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import { Asset } from 'expo-asset';
import { Link } from "expo-router";
import Card from "../components/card";
import navLinks from '../data/navLInks';
import React, { useEffect, useState } from "react";
import { Theme } from "../data/colours";
import ListHeader from "../components/listHeader";

const cacheImages = (images) => {
  return images.map(image => {
    return Asset.fromModule(image).downloadAsync();
  })
}

export default function Index() {
  const colorScheme = useColorScheme();
  const theme = Theme[colorScheme];
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function loadResources () {
      try {
        SplashScreen.preventAutoHideAsync();

        const imageAssets = cacheImages([
          require('../assets/images/homeBackground.png')
        ]);

        await Promise.all([...imageAssets]);
      } catch (error) {
        console.log(error);
      }
      finally {
        setAppIsReady(true);
        SplashScreen.hideAsync();
      }
    }
    loadResources();
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={{ flex: 1, backgroundColor: theme.backgroundColour }}>
      <Image source={require("../assets/images/homeBackground.png")} style={{ width: "100%", height: 400 }} resizeMode="contain" />

      <View style={{margin: "auto"}}>
        <FlatList
          contentContainerStyle={{ margin: "auto", width: "100%"}}
          ListHeaderComponent={<ListHeader />}
          numColumns={3}
          horizontal={false}
          data={navLinks}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Link href={item.href} asChild>
              <Pressable>
                <Card text={item.text} />
              </Pressable>
            </Link>
          )}
        />
      </View>

    </View>
  );
}