import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../../constants";

const Shops = (props) => {
  return (
    <View style={{ paddingHorizontal: SIZES.basePadding }}>
      {props.map((shop) => {
        return (
          <TouchableOpacity activeOpacity={.7} key={shop.id} style={styles.card}>
            <View style={{ marginRight: SIZES.basePadding }}>
              <Image
                source={shop.icon}
                style={{
                  height: 80,
                  width: 80,
                  resizeMode: "contain",
                  borderRadius: SIZES.base,
                }}
              />
            </View>
            <View>
              <Text style={{ ...FONTS.labelLM, marginBottom: SIZES.base }}>
                {shop.name}
              </Text>
              <View style={[styles.row, { marginBottom: SIZES.base }]}>
                <Text style={styles.label}>{shop.distance}</Text>
                <View style={styles.dot}></View>
                <Text style={styles.label}>{shop.timings}</Text>
              </View>
              <View style={styles.row}>
                <Text style={{ color: COLORS.primary, ...FONTS.labelMM }}>
                  {shop.price}
                </Text>
                <View style={[styles.row, { marginLeft: SIZES.basePadding }]}>
                  <Image
                    source={icons.starIcon}
                    style={{
                      height: 16,
                      width: 16,
                      resizeMode: "contain",
                      marginRight: SIZES.base,
                    }}
                  />
                  <Text style={{ ...FONTS.labelMM }}>{shop.rating}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderColor: COLORS.dark10,
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
    borderRadius: SIZES.base,
    padding: SIZES.base,
    marginBottom: SIZES.basePadding,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    marginHorizontal: SIZES.base,
    height: 6,
    width: 6,
    backgroundColor: COLORS.dark10,
    borderRadius: SIZES.base,
  },
  label: {
    color: COLORS.dark50,
    ...FONTS.labelSM,
  },
});

export default Shops;
