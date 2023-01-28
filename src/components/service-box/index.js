import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const ServiceBox = (props) => {
  return (
    <>
      {props.data.map((service) => {
        return (
          <View style={styles.box} key={service.name}>
            <View style={{flexDirection: "row", alignItems: "center"}}>
              <Image
                source={service.icon}
                style={{
                  height: 40,
                  width: 40,
                  resizeMode: "contain",
                  marginRight: SIZES.base
                }}
              />
              <Text style={styles.textBig}>{service.name}</Text>
            </View>
            <View style={styles.boxRight}>
              <Text style={styles.textBig}>$8</Text>
              <Text style={{ ...FONTS.labelSM, color: COLORS.dark50 }}>
                Per Piece
              </Text>
            </View>
          </View>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    borderColor: COLORS.dark10,
    borderWidth: 1,
    borderRadius: SIZES.basePadding,
    padding: SIZES.basePadding,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: SIZES.basePadding
  },
  textBig: {
    ...FONTS.labelM,
    fontFamily: "SecondaryBold",
  },
  boxRight: {
    alignItems: "flex-end",
  },
});
export default ServiceBox;
