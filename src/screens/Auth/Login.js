import {  
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ScrollView,
} from "react-native";
import React from "react";
import { Formik } from "formik";
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  BUTTON,
  BUTTONTEXT,
  SIZES,
  FONTS,
  COLORS,
  CONTAINER,
  icons,
} from "../../constants";
import { Header, Input } from "../../components";

const Login = ({ navigation }) => {
  const renderContent = () => {
    return (
      <View style={{...CONTAINER.main}}>
        <View style={styles.spacing}>
          <Header
            heading="Please login to your account"
            backButton={true}
            navigation={navigation}
          />
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => console.log(values)}
          >
            {({ handleChange, values }) => (
              <>
                <Input
                  placeholder="Enter your email"
                  keyboardType="email-address"
                  onChangeText={handleChange("email")}                  
                  value={values.email}
                  label="Email Address"
                />

                <Input
                  placeholder="Enter your password"
                  secureTextEntry={true}
                  onChangeText={handleChange("password")}                  
                  value={values.password}
                  label="Password"
                />
                <TouchableOpacity
                  style={{ ...BUTTON.primary }}
                  onPress={() => navigation.navigate("Dashboard")}                  
                >
                  <Text style={{ ...BUTTONTEXT.primary }}>Sign In</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>

          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={{
                padding: SIZES.base,
                alignItems: "center",
                marginTop: SIZES.base,
              }}
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              <Text
                style={{
                  ...FONTS.labelSM,
                  color: COLORS.dark50,
                  textAlign: "center",
                }}
              >
                Forgot password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.spacing}>
          <TouchableOpacity
            style={{ ...BUTTON.secondary, marginTop: SIZES.basePadding * 2 }}
          >
            <View style={styles.row}>
              <Image
                source={icons.googleIcon}
                style={{
                  width: 16,
                  height: 16,
                  resizeMode: "contain",
                }}
              />
              <Text
                style={{ ...BUTTONTEXT.secondary, paddingLeft: SIZES.base }}
              >
                Login with Google
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ ...BUTTON.secondary, marginTop: SIZES.basePadding }}>
            <View style={styles.row}>
              <Image
                source={icons.appleIcon}
                style={{
                  width: 16,
                  height: 16,
                  resizeMode: "contain",
                }}
              />
              <Text
                style={{ ...BUTTONTEXT.secondary, paddingLeft: SIZES.base }}
              >
                Login with Apple
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{...CONTAINER.main}}>
      <ScrollView
        style={{...CONTAINER.main}}
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="interactive"
      >
        <View style={{ marginBottom: 200 }}>{renderContent()}</View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({  
  spacing: {
    paddingTop: Platform.OS == "android" ? SIZES.basePadding : 0,
    paddingHorizontal: SIZES.basePadding,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Login;
