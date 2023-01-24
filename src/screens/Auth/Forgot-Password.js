import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ScrollView,
} from "react-native";
import React from "react";
import { Formik } from "formik";
import { BUTTON, BUTTONTEXT, SIZES } from "../../constants";
import { Header, Input } from "../../components";

const ForgotPassword = ({ navigation }) => {
  const renderContent = () => {
    return (
      <View style={{ flex: 1, height: SIZES.height }}>
        <View style={styles.spacing}>
          <Header
            heading="Forgot Password!"            
            backButton={true}
            navigation={navigation}
          />
          <Formik
            initialValues={{ email: "" }}
            onSubmit={(values) => console.log(values)}
          >
            {({ handleChange, values }) => (
              <>
                <Input
                  placeholder="Enter your registered email"
                  keyboardType="email-address"
                  onChangeText={handleChange("email")}                  
                  value={values.email}
                  label="Email Address"
                />

                <TouchableOpacity
                  style={{ ...BUTTON.primary }}
                  onPress={() => navigation.navigate("ResetPassword")}                  
                >
                  <Text style={{ ...BUTTONTEXT.primary }}>Send Email</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container} keyboardDismissMode="interactive">
      {renderContent()}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  spacing: {
    paddingTop: Platform.OS == "android" ? SIZES.basePadding : 0,
    paddingHorizontal: SIZES.basePadding,
  },
});

export default ForgotPassword;
