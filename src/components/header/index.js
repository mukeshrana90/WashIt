import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES, icons } from "../../constants";

export default function Header(props) {
  const headings = () => {
    return (
      <>
        {props.heading && (
          <Text style={{ ...FONTS.h2, fontFamily: "SecondaryBold" }}>
            {props.heading}
          </Text>
        )}
      </>
    );
  };

  return (
    <View
      style={[
        styles.header,
        props.style2 ? { flexDirection: "row", alignItems: "center" } : null,
      ]}
    >
      {props.backButton && (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => props.navigation.goBack()}
          style={[
            styles.backButton,
            props.style2
              ? { marginBottom: 0, marginRight: SIZES.basePadding }
              : null,
          ]}
        >
          <Image
            source={icons.backArrowIcon}
            style={{ height: 20, width: 20, resizeMode: "contain" }}
          />
        </TouchableOpacity>
      )}

      {headings()}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: SIZES.base * 2,
    paddingBottom: SIZES.base * 3,
    backgroundColor: "#fff",
  },
  backButton: {
    height: 40,
    width: 40,
    justifyContent: "center",
    marginBottom: SIZES.basePadding,
    borderColor: COLORS.dark10,
    borderWidth: 1,
    borderRadius: SIZES.basePadding * 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
