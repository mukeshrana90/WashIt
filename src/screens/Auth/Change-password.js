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

const ResetPassword = ({ navigation }) => {
  const renderContent = () => {
    return (
      <View style={{ flex: 1, height: SIZES.height }}>
        <View style={styles.spacing}>
          <Header
            heading="Change Password"            
            backButton={true}
            navigation={navigation}
          />
          <Formik
            initialValues={{ password: "", confirmPassword: "" }}
            onSubmit={(values) => console.log(values)}
          >
            {({ handleChange, values }) => (
              <>
                <Input
                  placeholder="Enter old password"
                  secureTextEntry={true}
                  onChangeText={handleChange("password")}                
                  value={values.password}
                  label="Old Password"
                />
                <Input
                  placeholder="Enter new password"
                  secureTextEntry={true}
                  onChangeText={handleChange("password")}                
                  value={values.password}
                  label="New password"
                />
                <Input
                  placeholder="Confirm password"
                  secureTextEntry={true}
                  onChangeText={handleChange("confirmPassword")}                  
                  value={values.confirmPassword}
                  label="Confirm password"
                />

                <TouchableOpacity
                  style={{ ...BUTTON.primary }}
                  onPress={() => navigation.navigate("Registration")}                  
                >
                  <Text style={{ ...BUTTONTEXT.primary }}>Change Password</Text>
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

export default ResetPassword;
