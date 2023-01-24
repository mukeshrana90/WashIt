import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import {
  BUTTON,
  BUTTONTEXT,
  images,
  SIZES,
  FONTS,
  COLORS,
} from "../../constants";

const Onboarding = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Image
          source={images.onboarding}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "60%",
          }}
        />
        <View style={styles.contentWrap}>
          <Text
            style={{
              textAlign: "center",
              ...FONTS.h1,
              fontFamily: "SecondaryBold",
            }}
          >
            Get your laundry and dry cleaning in 24 hours.
          </Text>
          <Text
            style={{
              textAlign: "center",
              ...FONTS.labelSM,
              marginVertical: SIZES.base * 2,
              color: COLORS.dark50,
            }}
          >
            A laundry solution that is eco-friendly and helps protect the
            environment.
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Registration")}
            style={{ ...BUTTON.primary }}
          >
            <Text style={{ ...BUTTONTEXT.primary }}>Let’s Start</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: SIZES.base * 2,
            }}
          >
            <Text style={{ ...FONTS.labelSM, fontFamily: "SecondaryBold" }}>
              Already a user?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  color: COLORS.primary,
                  ...FONTS.labelSM,
                  fontFamily: "SecondaryBold",
                }}
              >
                {" "}
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentWrap: {
    padding: SIZES.base * 3,
  },
});

export default Onboarding;
