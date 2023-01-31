import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../components";
import {
  BUTTON,
  BUTTONTEXT,
  COLORS,
  CONTAINER,
  FONTS,
  icons,
  SIZES,
} from "../../constants";

const SelectQuantities = ({ navigation }) => {
  const items = [
    {
      id: "ajd32-werw19",
      icon: icons.SuitIcon,
      name: "Suits",
    },
    {
      id: "ajd32-werw29",
      icon: icons.JacketIcon,
      name: "Jackets",
    },
    {
      id: "ajd32-werw39",
      icon: icons.TshirtIcon,
      name: "T-shirts",
    },
    {
      id: "ajd32-werw49",
      icon: icons.PantIcon,
      name: "Pants",
    },
    {
      id: "ajd32-werw59",
      icon: icons.ShortIcon,
      name: "Shorts",
    },
    {
      id: "ajd32-werw69",
      icon: icons.BedsheetIcon,
      name: "Bedsheets",
    },
  ];
  return (
    <SafeAreaView style={{ ...CONTAINER.main }}>
      <View style={{ paddingHorizontal: SIZES.basePadding }}>
        <Header
          heading="Select Quantity"
          backButton={true}
          navigation={navigation}
          style2
        />
      </View>
      <ScrollView>
        <View style={{ paddingHorizontal: SIZES.basePadding }}>
          {items.map((service) => {
            return (
              <View key={service.id} style={styles.box}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={service.icon}
                    style={{
                      height: SIZES.iconSize * 2,
                      width: SIZES.iconSize * 2,
                    }}
                  />
                  <View style={{ marginLeft: SIZES.basePadding }}>
                    <Text
                      style={{ ...FONTS.labelLM, marginBottom: SIZES.base / 2 }}
                    >
                      {service.name}
                    </Text>
                    <Text style={{ color: COLORS.dark50, ...FONTS.labelSM }}>
                      $0
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TouchableOpacity style={styles.button} activeOpacity={0.8}>
                    <Text style={styles.buttonText}>-</Text>
                  </TouchableOpacity>

                  <View style={{ width: 50, alignItems: "center" }}>
                    <Text style={{ textAlign: "center", ...FONTS.labelLM }}>
                      0
                    </Text>
                  </View>

                  <TouchableOpacity style={styles.button} activeOpacity={0.8}>
                    <Text style={styles.buttonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>

      <View
        style={{
          paddingHorizontal: SIZES.basePadding,
          paddingTop: SIZES.basePadding,
          borderTopColor: COLORS.dark10,
          borderTopWidth: 1,
          flexDirection: "row",
        }}
      >
        <View style={{ flex: 1, marginRight: SIZES.basePadding }}>
          <TouchableOpacity
            style={{ ...BUTTON.secondary }}
            onPress={() => navigation.navigate("SelectServices")}
          >
            <Text style={{ ...BUTTONTEXT.secondary }}>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 2 }}>
          <TouchableOpacity
            style={{ ...BUTTON.primary }}
            onPress={() => navigation.navigate("SelectServices")}
          >
            <Text style={{ ...BUTTONTEXT.primary }}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  box: {
    width: "100%",
    padding: SIZES.basePadding,
    marginBottom: SIZES.basePadding,
    borderColor: COLORS.dark10,
    borderWidth: 1,
    borderRadius: SIZES.basePadding,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    height: 40,
    width: 40,
    borderRadius: 40,
    borderColor: COLORS.dark10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    ...FONTS.h2,
  },
});
export default SelectQuantities;
