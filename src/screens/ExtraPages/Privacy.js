import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CONTAINER, SIZES } from "../../constants";
import { Header } from "../../components";
import { WebView } from "react-native-webview";

export default function Privacy({ navigation }) {
  return (
    <SafeAreaView style={{ ...CONTAINER.main }}>
      <View style={{ paddingHorizontal: SIZES.basePadding }}>
        <Header
          heading="Privacy Policy"
          backButton={true}
          navigation={navigation}
          style2
        />
      </View>
      <WebView originWhitelist={["*"]} source={{ uri: "https://expo.dev" }} />
    </SafeAreaView>
  );
}
