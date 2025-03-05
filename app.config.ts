import { ExpoConfig } from "expo/config";

const isProduction = process.env.EAS_BUILD_PROFILE === "production";

const config: ExpoConfig = {
  version: "1.1.0",
  name: "QRU?",
  slug: "qru",
  orientation: "portrait",
  platforms: ["ios", "android"],
  icon: isProduction
    ? "./assets/images/icon.png"
    : "./assets/images/icon-dev.png",
  scheme: "qru",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  ios: {
    supportsTablet: true,
    bundleIdentifier: `com.jonsamp.qru${isProduction ? "" : "-dev"}`,
    infoPlist: {
      ITSAppUsesNonExemptEncryption: false,
    },
  },
  android: {
    permissions: [
      "android.permission.CAMERA",
      "android.permission.RECORD_AUDIO",
    ],
    package: `com.jonsamp.qru${isProduction ? "" : "_dev"}`,
    icon: isProduction
      ? "./assets/images/icon.png"
      : "./assets/images/icon-dev.png",
    adaptiveIcon: {
      foregroundImage: isProduction
        ? "./assets/images/adaptive-foreground.png"
        : "./assets/images/adaptive-foreground-dev.png",
      backgroundImage: "./assets/images/adaptive-background.png",
    },
  },
  web: {
    bundler: "metro",
    output: "static",
  },
  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./assets/images/splash-icon.png",
        imageWidth: 125,
        backgroundColor: "#1c1917",
      },
    ],
    [
      "expo-camera",
      {
        cameraPermission: "The camera will be used to scan QR codes.",
      },
    ],
    [
      "expo-font",
      {
        fonts: [
          "./assets/fonts/JetBrainsMono-Regular.ttf",
          "./assets/fonts/JetBrainsMono-Bold.ttf",
          "./assets/fonts/JetBrainsMono-Italic.ttf",
        ],
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
  },
  extra: {
    router: {
      origin: false,
    },
  },
  runtimeVersion: {
    policy: "appVersion",
  },
  owner: "jonexpo",
};

export default config;
