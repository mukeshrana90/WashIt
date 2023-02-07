import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../components";
import {
  CONTAINER,
  SIZES,
  FONTS,
  icons,
  COLORS,
  BUTTON,
  BUTTONTEXT,
} from "../../constants";

const SelectAddress = ({ navigation }) => {
  return (
    <SafeAreaView style={{ ...CONTAINER.main }}>
      <View style={{ paddingHorizontal: SIZES.basePadding }}>
        <Header
          heading="Select Address "
          backButton={true}
          navigation={navigation}
          style2
        />
      </View>
      <ScrollView>
        <View style={{ paddingHorizontal: SIZES.basePadding }}>
          <Text style={styles.title}>Pickup address</Text>
          <TouchableOpacity activeOpacity={0.6} style={styles.box}>
            <View style={styles.iconBox}>
              <Image
                source={icons.locationIcon}
                style={{
                  height: SIZES.iconSize,
                  width: SIZES.iconSize,
                  tintColor: COLORS.primary,
                }}
              />
            </View>
            <View>
              <Text style={{ ...FONTS.labelSM, marginBottom: SIZES.base / 2 }}>
                Add Pickup Location
              </Text>
              <Text style={{ color: COLORS.dark50, ...FONTS.labelXSM }}>
                Use my current location.
              </Text>
            </View>
          </TouchableOpacity>
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
            onPress={() => navigation.navigate("SelectDateTime")}
          >
            <Text style={{ ...BUTTONTEXT.secondary }}>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 2 }}>
          <TouchableOpacity
            style={{ ...BUTTON.primary }}
            onPress={() => navigation.navigate("OrderSummary")}
          >
            <Text style={{ ...BUTTONTEXT.primary }}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  title: {
    ...FONTS.labelLM,
    marginBottom: SIZES.basePadding,
  },
  box: {
    borderWidth: 1,
    borderColor: COLORS.dark10,
    borderRadius: SIZES.basePadding,
    padding: SIZES.basePadding,
    flexDirection: "row",
    alignItems: "center",
  },
  iconBox: {
    backgroundColor: "rgba(120, 117, 252, 0.1)",
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.base,
    marginRight: SIZES.base,
  },
});
export default SelectAddress;
