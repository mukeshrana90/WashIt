import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  COLORS,
  CONTAINER,
  FONTS,
  icons,
  images,
  SIZES,
} from "../../constants";
import { Ads, SectionHeader, Shops } from "../../components";
import Services from "../../components/services";

const Home = ({ navigation }) => {
  const adsData = [
    {
      id: "ajd32-tdh98-yre23-yet43",
      icon: images.adcard,
    },
    {
      id: "ajd32-tdh98-yre23-yet09",
      icon: images.adcard,
    },
    {
      id: "ajd32-tdh98-yre23-yet12",
      icon: images.adcard,
    },
  ];
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
  const shopsList = [
    {
      id: "ajd32-yuw21",
      icon: images.shop1,
      name: "Hilarious Laundry",
      timings: "Opens 8AM - 9PM",
      price: "$3.0/Pcs",
      rating: "5.0",
      distance: "0.5 Miles",
    },
    {
      id: "ajd32-yuw23",
      icon: images.shop2,
      name: "Williams Drycleaner",
      timings: "Opens 8AM - 9PM",
      price: "$3.0/Pcs",
      rating: "4.8",
      distance: "1.2 Miles",
    },
    {
      id: "ajd32-yuw34",
      icon: images.shop3,
      name: "Mom’s Laundry",
      timings: "Opens 8AM - 9PM",
      price: "$2.0/Pcs",
      rating: "4.1",
      distance: "0.5 Miles",
    },
    {
      id: "ajd32-yuw45",
      icon: images.shop4,
      name: "Pro Cleaners",
      timings: "Opens 8AM - 9PM",
      price: "$3.0/Pcs",
      rating: "3.4",
      distance: "0.5 Miles",
    },
    {
      id: "ajd32-sd321",
      icon: images.shop2,
      name: "Hilarious Laundry",
      timings: "Opens 8AM - 9PM",
      price: "$3.0/Pcs",
      rating: "5.0",
      distance: "0.5 Miles",
    },
  ];

  const renderHeader = () => {
    return (
      <View
        style={{
          marginTop: SIZES.base,
          marginHorizontal: SIZES.basePadding,
        }}
      >
        <Text style={{ color: COLORS.dark50, ...FONTS.labelSM }}>
          Current region
        </Text>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Image
            source={icons.locationIcon}
            style={{
              height: 14,
              width: 14,
            }}
          />
          <Text style={{ ...FONTS.labelMM, paddingLeft: SIZES.base * 0.5 }}>
            Allentown, London
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ ...CONTAINER.main }}>
      <ScrollView>
        {renderHeader()}

        {Ads(adsData)}

        <SectionHeader title="Popular Services" />
        <Services data={serviceList} />

        <SectionHeader
          title="Near By Shops"
          navigation={navigation}
          seeAll={true}
          redirectTo="NearByShops"
        />
        {Shops(shopsList)}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default Home;
