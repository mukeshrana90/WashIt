import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { COLORS, FONTS, icons, images, SIZES } from "../../constants";

const ReviewBox = (props) => {
  return (
    <>
      {props.data.map((review) => {
        return (
          <View style={styles.box} key={review.name}>
            <View style={[styles.row, { justifyContent: "space-between" }]}>
              <View style={styles.row}>
                <Image
                  source={review.icon}
                  style={{
                    height: SIZES.iconSize * 2,
                    width: SIZES.iconSize * 2,
                    resizeMode: "contain",
                  }}
                />
                <View style={{ marginLeft: SIZES.base }}>
                  <Text
                    style={{ ...FONTS.labelMM, marginBottom: SIZES.base / 4 }}
                  >
                    {review.name}
                  </Text>
                  <Text style={{ ...FONTS.labelXSM, color: COLORS.dark50 }}>
                    {review.time}
                  </Text>
                </View>
              </View>
              <View style={styles.row}>
                <Image
                  source={icons.starIcon}
                  style={{
                    height: 16,
                    width: 16,
                    resizeMode: "contain",
                    marginRight: SIZES.base / 2,
                  }}
                />
                <Text style={{ ...FONTS.labelMM }}>{review.rate}</Text>
              </View>
            </View>
            <Text
              style={{
                ...FONTS.labelS,
                fontFamily: "Regular",
                lineHeight: 20,
                marginTop: SIZES.base,
                color: COLORS.dark,
              }}
            >{review.review}
            </Text>
          </View>
        );
      })}
    </>
  );
};
const styles = StyleSheet.create({
  box: {
    padding: SIZES.basePadding,
    borderWidth: 1,
    borderColor: COLORS.dark10,
    borderRadius: SIZES.basePadding,
    marginBottom: SIZES.basePadding
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});
export default ReviewBox;
