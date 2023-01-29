import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CONTAINER, images, SIZES } from "../../constants";
import { Header, Shops } from "../../components";

const NearByShops = ({ navigation }) => {
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
    {
      id: "ajd32-yuw213",
      icon: images.shop1,
      name: "Hilarious Laundry",
      timings: "Opens 8AM - 9PM",
      price: "$3.0/Pcs",
      rating: "5.0",
      distance: "0.5 Miles",
    },
    {
      id: "ajd32-yuw232",
      icon: images.shop2,
      name: "Williams Drycleaner",
      timings: "Opens 8AM - 9PM",
      price: "$3.0/Pcs",
      rating: "4.8",
      distance: "1.2 Miles",
    },
    {
      id: "ajd32-yuw341",
      icon: images.shop3,
      name: "Mom’s Laundry",
      timings: "Opens 8AM - 9PM",
      price: "$2.0/Pcs",
      rating: "4.1",
      distance: "0.5 Miles",
    },
  ];

  return (
    <SafeAreaView style={{ ...CONTAINER.main }}>
      <View style={{ paddingHorizontal: SIZES.basePadding }}>
        <Header
          heading="Near By Shops"
          backButton={true}
          navigation={navigation}
          style2
        />
      </View>
      <ScrollView>
        <Shops data={shopsList} navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default NearByShops;
