import { ExpoConfig, ConfigContext } from 'expo/config';
import 'dotenv/config';
import appJson from './app.json';

const getAppName = () => process.env.APP_NAME ?? 'Rick And Morty Dev';
const getPackageName = () => process.env.PACKAGE_NAME ?? 'com.tirva.rickandmorty.dev';

export default ({ config }: ConfigContext): ExpoConfig => ({
    ...config,
    name: getAppName(),
    scheme: process.env.APP_SCHEME ?? 'rickandmortydev',
    slug: 'rick-and-morty',
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    splash: {
        image: "./assets/images/splash-icon.png",
        backgroundColor: "#000000",
        resizeMode: "contain"
    },
    ios: {
        runtimeVersion: appJson.expo.version,
        supportsTablet: true
    },
    android: {
        package: getPackageName(),
        runtimeVersion: appJson.expo.version,
        adaptiveIcon: {
            foregroundImage: "./assets/images/adaptive-icon.png",
            backgroundColor: "#000000"
        },
        edgeToEdgeEnabled: true,
        predictiveBackGestureEnabled: false
    },
    web: {
        bundler: "metro",
        output: "static",
        favicon: "./assets/images/favicon.png"
    },
    plugins: [
        "expo-router",
    ]
});