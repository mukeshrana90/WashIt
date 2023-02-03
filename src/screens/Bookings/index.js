import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header, EmptyState } from "../../components";
import { COLORS, CONTAINER, FONTS, SIZES } from "../../constants";

const Bookings = () => {
  const [selectedTab, setSelectedTab] = useState("InProgress");

  const data = [
    {
      name: "Hilarious Laundry",
      service: "Laundry",
      status: "Delivered",
      orderID: 220819,
      time: "02:30pm",
      date: "Sun, 11 July",
    },
    {
      name: "Mom’s Laundry",
      service: "Dryclean",
      status: "On Time",
      orderID: 220820,
      time: "04:30pm",
      date: "Mon, 12 July",
    },
    {
      name: "Williams Drycleaner",
      service: "Ironing",
      status: "Slight Delay",
      orderID: 220821,
      time: "06:00pm",
      date: "Tues, 13 July",
    },
  ];

  const renderStatus = (order) => {
    return (
      <View
        style={[
          order.status === "Slight Delay" && { backgroundColor: "#F13D4A" },
          order.status === "On Time" && { backgroundColor: "#FFCD1A" },
          order.status === "Delivered" && { backgroundColor: "#4CD964" },
          {
            paddingHorizontal: SIZES.base * 1.5,
            paddingVertical: SIZES.base / 1.5,
            borderRadius: SIZES.base,
          },
        ]}
      >
        <Text style={{ ...FONTS.labelXSM, color: COLORS.white }}>
          {order.status}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ ...CONTAINER.main }}>
      <View style={{ paddingHorizontal: SIZES.basePadding }}>
        <Header heading="Bookings" />

        <View
          style={{
            flexDirection: "row",
            backgroundColor: COLORS.dark10,
            borderRadius: SIZES.basePadding,
            padding: SIZES.base,
          }}
        >
          <TouchableOpacity
            onPress={() => setSelectedTab("InProgress")}
            activeOpacity={0.7}
            style={[
              styles.button,
              {
                backgroundColor:
                  selectedTab === "InProgress" ? COLORS.light : "transparent",
              },
            ]}
          >
            <Text
              style={[
                styles.buttonText,
                {
                  color:
                    selectedTab === "InProgress" ? COLORS.primary : COLORS.dark,
                },
              ]}
            >
              In-progress
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedTab("History")}
            activeOpacity={0.7}
            style={[
              styles.button,
              {
                backgroundColor:
                  selectedTab === "History" ? COLORS.light : "transparent",
              },
            ]}
          >
            <Text
              style={[
                styles.buttonText,
                {
                  color:
                    selectedTab === "History" ? COLORS.primary : COLORS.dark,
                },
              ]}
            >
              History
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        {selectedTab === "InProgress" ? (
          <View
            style={{
              paddingHorizontal: SIZES.basePadding,
              marginTop: SIZES.basePadding * 1.5,
            }}
          >
            {data.map((order) => {
              return (
                <View style={styles.card} key={order.orderID}>
                  {/* Header */}
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <View>
                      <Text style={{ ...FONTS.labelLM }}>{order.name}</Text>
                      <View
                        style={{
                          backgroundColor: COLORS.light,
                          paddingHorizontal: SIZES.base * 1.5,
                          paddingVertical: SIZES.base / 1.5,
                          borderRadius: SIZES.base,
                          alignSelf: "flex-start",
                          marginTop: SIZES.base,
                        }}
                      >
                        <Text style={{ ...FONTS.labelXSM }}>
                          {order.service}
                        </Text>
                      </View>
                    </View>
                    {renderStatus(order)}
                  </View>

                  {/* Body */}
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: SIZES.basePadding,
                    }}
                  >
                    <View style={styles.col}>
                      <Text style={styles.label}>Order Id</Text>
                      <Text style={styles.value}>{order.orderID}</Text>
                    </View>

                    <View style={styles.col}>
                      <Text style={styles.label}>Delivery Time</Text>
                      <Text style={styles.value}>{order.time}</Text>
                    </View>

                    <View style={styles.col}>
                      <Text style={styles.label}>Delivery Date</Text>
                      <Text style={styles.value}>{order.date}</Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        ) : (
          <View style={{ paddingHorizontal: SIZES.basePadding }}>
            <EmptyState
              heading="No Washing History"
              subheading="Currently, you don't have any previous washing history, but if you book in the future, it will appear here."
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: "center",
    padding: SIZES.base * 1.5,
    borderRadius: SIZES.base * 1.5,
  },
  buttonText: {
    ...FONTS.labelMM,
  },
  card: {
    borderWidth: 1,
    borderColor: COLORS.dark10,
    borderRadius: SIZES.basePadding,
    padding: SIZES.basePadding,
    marginBottom: SIZES.basePadding,
  },
  col: {
    flex: 1,
  },
  label: {
    ...FONTS.labelXS,
    fontFamily: "Regular",
    color: COLORS.dark50,
    paddingBottom: SIZES.base / 2,
  },
  value: {
    ...FONTS.labelSM,
  },
});
export default Bookings;
