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

const SelectServices = ({ navigation }) => {
  const serviceList = [
    {
      id: "ajd32-werw1",
      icon: icons.TailorIcon,
      name: "Tailor",
    },
    {
      id: "ajd32-werw2",
      icon: icons.DrycleanIcon,
      name: "Dryclean",
    },
    {
      id: "ajd32-werw3",
      icon: icons.IroningIcon,
      name: "Ironing",
    },
    {
      id: "ajd32-werw4",
      icon: icons.LaundryIcon,
      name: "Laundry",
    },
    {
      id: "ajd32-werw5",
      icon: icons.BagCleanIcon,
      name: "Bag Clean",
    },
    {
      id: "ajd32-werw6",
      icon: icons.ShoeCleanIcon,
      name: "Shoe Clean",
    },
  ];
  return (
    <SafeAreaView style={{ ...CONTAINER.main }}>
      <View style={{ paddingHorizontal: SIZES.basePadding }}>
        <Header
          heading="Select Services"
          backButton={true}
          navigation={navigation}
          style2
        />
      </View>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {serviceList.map((service) => {
            return (
              <View key={service.id} style={styles.box}>
                <Image
                  source={service.icon}
                  style={{
                    height: SIZES.iconSize * 3,
                    width: SIZES.iconSize * 3,
                  }}
                />
                <Text style={{ ...FONTS.labelMM, marginTop: SIZES.base }}>
                  {service.name}
                </Text>
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
        }}
      >
        <TouchableOpacity
          style={{ ...BUTTON.primary }}
          onPress={() => navigation.navigate("SelectQuantities")}
        >
          <Text style={{ ...BUTTONTEXT.primary }}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  box: {
    height: 140,
    width: SIZES.width / 2 - SIZES.basePadding * 2,
    paddingHorizontal: SIZES.basePadding,
    marginBottom: SIZES.basePadding,
    borderColor: COLORS.dark10,
    borderWidth: 1,
    borderRadius: SIZES.basePadding,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default SelectServices;
