import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import React, { useState } from "react";
import { SIZES, INPUT, icons, FONTS } from "../../constants";

export default function Input(props) {
  const [passwordVisible, setPasswordVisible] = useState(true);

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <View style={styles.inputWrap}>
      {props.label && (
        <Text style={{ ...FONTS.labelMM, marginBottom: SIZES.base * 0.8 }}>
          {props.label}
        </Text>
      )}
      {props.secureTextEntry ? (
        <TextInput
          style={{ ...INPUT.primary, paddingRight: SIZES.basePadding * 3 }}
          placeholder={props.placeholder}
          secureTextEntry={passwordVisible}
          keyboardType={props.keyboardType}
          onBlur={props.onBlur}
          value={props.value}
          onChangeText={props.onChangeText}
          maxLength={props.maxLength}
        />
      ) : (
        <TextInput
          style={[
            { ...INPUT.primary },
            props.multiline ? { ...INPUT.largeInput } : null,
          ]}
          placeholder={props.placeholder}
          keyboardType={props.keyboardType}
          onBlur={props.onBlur}
          value={props.value}
          onChangeText={props.onChangeText}
          multiline={props.multiline}
          maxLength={props.maxLength}
        />
      )}

      {props.secureTextEntry ? (
        <TouchableOpacity
          activeOpacity={1}
          style={styles.eyeIcon}
          onPress={togglePassword}
        >
          <Image
            source={passwordVisible ? icons.eyeCloseIcon : icons.eyeOpenIcon}
            style={{
              width: 20,
              height: 20,
              resizeMode: "contain",
            }}
          />
        </TouchableOpacity>
      ) : null}      
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrap: {
    position: "relative",
    paddingBottom: SIZES.base,
  },
  eyeIcon: {
    position: "absolute",
    right: 1,
    height: 52,
    width: 52,
    top: 29,
    zIndex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
