import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  ScrollView,
} from "react-native";
import React from "react";
import { Formik } from "formik";
import { SafeAreaView } from 'react-native-safe-area-context';
import { BUTTON, BUTTONTEXT, SIZES, icons, CONTAINER } from "../../constants";
import { Header, Input } from "../../components";

const Registration = ({ navigation }) => {
  const renderContent = () => {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.spacing}>
          <Header
            heading="Let’s create your account!"
            backButton={true}
            navigation={navigation}
          />
          <Formik
            initialValues={{ email: "", username: "", password: "" }}
            onSubmit={(values) => console.log(values)}
          >
            {({ handleChange, handleSubmit, values }) => (
              <>
                <Input
                  placeholder="Enter your name"
                  onChangeText={handleChange("username")}                  
                  value={values.username}
                  name="username"
                  label="Full Name"
                />

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
                  onPress={handleSubmit}
                >
                  <Text style={{ ...BUTTONTEXT.primary }}>Sign Up</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </View>
        <View>
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
                  Sign up with Google
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...BUTTON.secondary, marginTop: SIZES.basePadding }}
            >
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
                  Sign up with Apple
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{...CONTAINER.main}}>
      <ScrollView style={{...CONTAINER.main}} keyboardDismissMode="interactive">
        {renderContent()}
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

export default Registration;
