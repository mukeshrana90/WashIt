import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const SectionHeader = (props) => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.basePadding,
        paddingBottom: SIZES.basePadding,
        paddingTop: SIZES.basePadding * 1.5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={{ ...FONTS.labelL, fontFamily: "SecondaryBold" }}>
        {props.title}
      </Text>
      {props.seeAll ? (
        <TouchableOpacity
          onPress={() => props.navigation.navigate(props.redirectTo)}
        >
          <Text style={{ color: COLORS.primary, ...FONTS.labelMM }}>
            See All
          </Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};
export default SectionHeader;
