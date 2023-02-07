import React from "react";
import { Image, Text, View, ScrollView } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const Services = (props) => {
  const renderServices = () => {
    {
      return props.data.map((service) => {
        return (
          <View
            style={[
              {
                marginHorizontal: SIZES.base,
                width: 75,
                alignItems: "center",
              },
            ]}
            key={service.id}
          >
            <View
              style={{
                backgroundColor: COLORS.light,
                height: 64,
                width: 64,
                borderRadius: SIZES.basePadding,
                marginBottom: SIZES.base,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={service.icon}
                style={{
                  height: 38,
                  width: 38,
                  resizeMode: "contain",
                }}
              />
            </View>
            <Text
              style={{
                textAlign: "center",
                ...FONTS.labelSM,
                color: COLORS.dark50,
              }}
            >
              {service.name}
            </Text>
          </View>
        );
      });
    }
  };
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {renderServices()}
    </ScrollView>
  );
};
export default Services;
