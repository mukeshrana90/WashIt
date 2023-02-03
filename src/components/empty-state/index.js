import React from "react";
import { View, Text, Image } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../../constants";

const EmptyState = (props) => {
  return (
    <View
      style={{
        width: 280,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: SIZES.basePadding * 5,
      }}
    >
      <Image
        source={icons.emptyStateIcon}
        style={{ height: 100, width: 100, resizeMode: "contain" }}
      />
      <Text
        style={{
          textAlign: "center",
          ...FONTS.labelLM,
          marginBottom: SIZES.base,
        }}
      >
        {props.heading}
      </Text>
      <Text
        style={{
          textAlign: "center",
          ...FONTS.labelXSM,
          color: COLORS.dark50,
          lineHeight: 20,
        }}
      >
        {props.subheading}
      </Text>
    </View>
  );
};

export default EmptyState;
