import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CONTAINER, images, SIZES } from "../../constants";

const Home = () => {
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
      id: "ajd32-tdh98-yre23-yet34",
      icon: images.adcard,
    },
  ];

  const renderAds = () => {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {adsData.map((ad) => {
          return (
            <View style={{marginLeft: SIZES.basePadding}}>              
              <Image
                key={ad.id}
                source={ad.icon}
                style={{
                  height: 150,
                  width: 300,
                  resizeMode: "contain",
                }}
              />
            </View>
          );
        })}
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={{ ...CONTAINER.main }}>
      <ScrollView>
        {renderAds()}
        <Text>Home 2</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default Home;
