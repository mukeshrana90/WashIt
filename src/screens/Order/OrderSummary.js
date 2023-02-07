import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
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

const OrderSummary = ({ navigation }) => {
  return (
    <SafeAreaView style={{ ...CONTAINER.main }}>
      <View style={{ paddingHorizontal: SIZES.basePadding }}>
        <Header
          heading="Order Summery"
          backButton={true}
          navigation={navigation}
          style2
        />
      </View>
      <ScrollView>
        <View style={{ paddingHorizontal: SIZES.basePadding }}>
          <Text style={{ ...FONTS.labelLM }}>Summary</Text>

          <View style={styles.row}>
            <Text style={styles.label}>Order ID</Text>
            <Text style={styles.value}>#081996</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Service Selected</Text>
            <Text style={styles.value}>Dryclean</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Date & Time</Text>
            <Text style={styles.value}>Sun July 11, 02:30pm</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Total items</Text>
            <Text style={styles.value}>08</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Service charges</Text>
            <Text style={styles.value}>$25.0</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Pickup charges</Text>
            <Text style={styles.value}>$2.0</Text>
          </View>
          <View
            style={{
              marginTop: SIZES.basePadding,
              borderTopWidth: 1,
              borderColor: COLORS.dark10,
              borderStyle: "solid",
            }}
          ></View>
          <View style={styles.row}>
            <Text style={{ ...FONTS.labelLM }}>Total</Text>
            <Text style={{ ...FONTS.labelLM, color: COLORS.primary }}>
              $27.00
            </Text>
          </View>
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
            onPress={() => navigation.navigate("SelectAddress")}
          >
            <Text style={{ ...BUTTONTEXT.secondary }}>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 2 }}>
          <TouchableOpacity
            style={{ ...BUTTON.primary }}
            onPress={() => navigation.navigate("Dashboard")}
          >
            <Text style={{ ...BUTTONTEXT.primary }}>Let’s Washit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: SIZES.basePadding * 1.5,
  },
  label: {
    ...FONTS.labelMM,
    color: COLORS.dark50,
  },
  value: {
    ...FONTS.labelMM,
  },
});
export default OrderSummary;
