import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, CONTAINER, FONTS, SIZES, BUTTON, BUTTONTEXT } from "../../constants";
import { Header } from "../../components";
import { Calendar } from "react-native-calendars";

const SelectDateTime = ({ navigation }) => {
  const [selectSlot, setSelectSlot] = useState(null);
  const timeSlots = [
    {
      morning: [
        {
          time: "08:30AM",
        },
        {
          time: "09:30AM",
        },
        {
          time: "10:30AM",
        },
        {
          time: "11:30AM",
        },
      ],
      afternoon: [
        {
          time: "12:30PM",
        },
        {
          time: "01:30PM",
        },
        {
          time: "02:30PM",
        },
        {
          time: "03:30PM",
        },
      ],
      evening: [
        {
          time: "04:30PM",
        },
        {
          time: "05:30PM",
        },
        {
          time: "06:30PM",
        },
        {
          time: "07:30PM",
        },
      ],
    },
  ];

  const renderSlot = (slot) => {
    return (
      <TouchableOpacity
        key={slot.time}
        activeOpacity={0.7}
        style={[
          styles.slot,
          {
            backgroundColor:
              selectSlot == slot.time ? COLORS.primary : COLORS.white,
            borderColor:
              selectSlot == slot.time ? COLORS.primary : COLORS.dark10,
          },
        ]}
        onPress={() => setSelectSlot(slot.time)}
      >
        <Text
          style={[
            styles.slotText,
            {
              color: selectSlot == slot.time ? COLORS.white : COLORS.dark,
            },
          ]}
        >
          {slot.time}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ ...CONTAINER.main }}>
      <View style={{ paddingHorizontal: SIZES.basePadding }}>
        <Header
          heading="Select Date & Time "
          backButton={true}
          navigation={navigation}
          style2
        />
      </View>
      <ScrollView>
        <View style={{ paddingHorizontal: SIZES.basePadding }}>
          <Text style={styles.title}>Select Date</Text>
          <Calendar
            theme={{
              todayTextColor: COLORS.primary,
              dayTextColor: COLORS.dark,
              arrowColor: COLORS.dark,
              disabledArrowColor: COLORS.dark50,
              monthTextColor: COLORS.dark,
              indicatorColor: COLORS.dark,
              textDayFontFamily: "SecondaryMedium",
              textMonthFontFamily: "SecondaryMedium",
              textDayHeaderFontFamily: "SecondaryMedium",
              textDayFontSize: 15,
              textMonthFontSize: 18,
              textDayHeaderFontSize: 15,
            }}
          />
          <View style={{ marginTop: SIZES.basePadding * 1.5 }}>
            <Text style={styles.title}>Select Time</Text>

            <Text style={styles.label}>Morning</Text>
            <View style={styles.row}>
              {timeSlots[0].morning.map((slot) => {
                return renderSlot(slot);
              })}
            </View>

            <Text style={styles.label}>Afternoon</Text>
            <View style={styles.row}>
              {timeSlots[0].afternoon.map((slot) => {
                return renderSlot(slot);
              })}
            </View>
            <Text style={styles.label}>Evening</Text>
            <View style={styles.row}>
              {timeSlots[0].evening.map((slot) => {
                return renderSlot(slot);
              })}
            </View>
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
            onPress={() => navigation.navigate("SelectServices")}
          >
            <Text style={{ ...BUTTONTEXT.secondary }}>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 2 }}>
          <TouchableOpacity
            style={{ ...BUTTON.primary }}
            onPress={() => navigation.navigate("SelectDateTime")}
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
  label: {
    ...FONTS.labelSM,
    marginBottom: SIZES.base,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: SIZES.basePadding * 1.5,
  },
  slot: {
    paddingVertical: SIZES.base,
    paddingHorizontal: SIZES.base * 1.5,
    borderColor: COLORS.dark10,
    borderWidth: 1,
    borderRadius: SIZES.base * 1.5,
    marginRight: SIZES.base,
  },
  slotText: {
    ...FONTS.labelXSM,
  },
});
export default SelectDateTime;
