import {  
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,  
} from "react-native";
import React from "react";
import { Formik } from "formik";
import { SafeAreaView } from 'react-native-safe-area-context';
import { BUTTON, BUTTONTEXT, SIZES, CONTAINER } from "../../constants";
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
    <SafeAreaView style={{...CONTAINER.main}} keyboardDismissMode="interactive">
      {renderContent()}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({  
  spacing: {
    paddingTop: Platform.OS == "android" ? SIZES.basePadding : 0,
    paddingHorizontal: SIZES.basePadding,
  },
});

export default ForgotPassword;
