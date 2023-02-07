import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header, SectionHeader } from "../../components";
import { CONTAINER, icons, INPUT, SIZES } from "../../constants";
import Services from "../../components/services";

const Search = () => {
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
        <Header heading="Search" />

        <View style={styles.inputWrap}>
          <TextInput
            placeholder="Search here"
            style={{
              ...INPUT.primary,
              marginBottom: 0,
              paddingRight: SIZES.basePadding * 3,
            }}
          />
          <TouchableOpacity style={styles.searchIcon}>
            <Image
              source={icons.searchIcon}
              style={{
                height: SIZES.iconSize,
                width: SIZES.iconSize,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
        </View>

        <SectionHeader title="Our Services" />
        <Services data={serviceList} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputWrap: {
    position: "relative",
    paddingBottom: SIZES.base,
  },
  searchIcon: {
    position: "absolute",
    right: 1,
    height: 52,
    width: 52,
    top: 1,
    zIndex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Search;
