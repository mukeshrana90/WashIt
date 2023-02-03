import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header, ReviewBox, ServiceBox, Slider } from "../../components";
import {
  BUTTON,
  BUTTONTEXT,
  COLORS,
  CONTAINER,
  FONTS,
  icons,
  images,
  SIZES,
} from "../../constants";

const ShopDetails = ({ navigation }) => {
  const ShopData = [
    {
      name: "Hilarious Laundry",
      distance: "2Km",
      timing: "Opens 8AM - 9PM",
      price: "$1.0/Pcs",
      address: "8502 Preston Rd. Inglewood, Maine 98380",
      orders: "700+",
      experience: "3 Years",
      rate: "4.0",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor ac leo lorem nisl. Viverra vulputate sodales quis et dui, lacus. Iaculis eu egestas leo egestas vel. Ultrices ut magna nulla facilisi commodo enim, orci feugiat pharetra. Id sagittis, ullamcorper turpis ultrices platea pharetra.",
      services: [
        {
          name: "Laundry",
          icon: icons.LaundryIcon,
          price: "$8",
          priceBy: "Per Piece",
        },
        {
          name: "Dryclean",
          icon: icons.DrycleanIcon,
          price: "$10",
          priceBy: "Per Piece",
        },
        {
          name: "Tailor",
          icon: icons.TailorIcon,
          price: "$4",
          priceBy: "Per Piece",
        },
        {
          name: "Ironing",
          icon: icons.IroningIcon,
          price: "$2",
          priceBy: "Per Piece",
        },
      ],
      reviews: [
        {
          name: "Jacky Frnadiese",
          icon: images.user,
          time: "3 days ago",
          rate: "5.0",
          review:
            "Lorem ipsum dolor sit amet, consectetur piscing elit. Tortor ac leo lorem nisl. Viverra vulputate dales quis et dui, lacus. Iaculis eu egestas leo egestas vel. Ultrices ut magna nulla facilisi commodo enim, orci feugiat pharetra. Id sagittis, ullamcorper turpis ultrices platea pharetra.",
        },
        {
          name: "Devon Lane",
          icon: images.user2,
          time: "2 week ago",
          rate: "4.5",
          review:
            "Lorem ipsum dolor sit amet, consectetur piscing elit. Tortor ac leo lorem nisl. Viverra vulputate dales quis et dui, lacus.",
        },
      ],
    },
  ];

  const Galleryimages = [
    {
      id: "image1",
      url: images.shop1,
    },
    {
      id: "image2",
      url: images.shop3,
    },
    {
      id: "image3",
      url: images.shop2,
    },
    {
      id: "image4",
      url: images.shop4,
    },
  ];

  return (
    <SafeAreaView style={{ ...CONTAINER.main }}>
      <View style={{ paddingHorizontal: SIZES.basePadding }}>
        <Header
          style2
          heading="Shop Detail"
          backButton={true}
          navigation={navigation}
        />
      </View>
      <ScrollView>        
        <Slider>
          {Galleryimages.map((image) => {
            return (
              <View key={image.id}>
                <Image source={image.url} style={{ height: 200, width:280, resizeMode: "cover" }} />
              </View>
            );
          })}
        </Slider>

        <View style={{ paddingHorizontal: SIZES.basePadding, marginTop: SIZES.basePadding }}>
          <Text style={styles.title}>{ShopData[0].name}</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: SIZES.base,
            }}
          >
            <Text style={styles.label}>{ShopData[0].distance}</Text>
            <View style={styles.dot}></View>
            <Text style={styles.label}>{ShopData[0].timing}</Text>
            <View style={styles.dot}></View>
            <Text style={styles.label}>{ShopData[0].price}</Text>
          </View>

          <View
            style={[
              styles.spacing,
              { flexDirection: "row", alignItems: "center" },
            ]}
          >
            <Image
              source={icons.locationIcon}
              style={{
                height: SIZES.iconSize / 1.2,
                width: SIZES.iconSize / 1.2,
              }}
            />
            <Text style={{ ...FONTS.labelSM, marginLeft: SIZES.base / 2 }}>
              {ShopData[0].address}
            </Text>
          </View>

          <View style={[styles.spacing, styles.row]}>
            <View style={{ marginRight: SIZES.basePadding * 2 }}>
              <Text style={styles.text}>Orders</Text>
              <Text style={styles.value}>{ShopData[0].orders}</Text>
            </View>
            <View style={{ marginRight: SIZES.basePadding * 2 }}>
              <Text style={styles.text}>Experience</Text>
              <Text style={styles.value}>{ShopData[0].experience}</Text>
            </View>
            <View style={{ marginRight: SIZES.basePadding * 2 }}>
              <Text style={styles.text}>Rate</Text>
              <Text style={styles.value}>{ShopData[0].rate}</Text>
            </View>
          </View>

          <View style={styles.spacing}>
            <Text style={styles.title}>Description</Text>
            <Text
              style={{ ...FONTS.labelSM, lineHeight: 20, color: COLORS.dark50 }}
            >
              {ShopData[0].description}
            </Text>
          </View>
          <View style={styles.spacing}>
            <Text style={styles.title}>Location</Text>
            <Image
              source={images.map}
              style={{
                height: 200,
                width: "100%",
                resizeMode: "cover",
                borderRadius: SIZES.basePadding,
              }}
            />
          </View>

          <View style={styles.spacing}>
            <Text style={styles.title}>Service & Price </Text>
            <ServiceBox data={ShopData[0].services} />
          </View>
          <View style={styles.spacing}>
            <Text style={styles.title}>Reviews</Text>
            <ReviewBox data={ShopData[0].reviews} />
          </View>
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
          onPress={() => navigation.navigate("SelectServices")}
        >
          <Text style={{ ...BUTTONTEXT.primary }}>Book A Laundry</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    ...FONTS.labelLM,
    marginBottom: SIZES.base,
  },
  spacing: {
    marginBottom: SIZES.basePadding * 1.5,
  },
  dot: {
    marginHorizontal: SIZES.base,
    height: 6,
    width: 6,
    backgroundColor: COLORS.dark10,
    borderRadius: SIZES.base,
  },
  label: {
    color: COLORS.dark50,
    ...FONTS.labelSM,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    ...FONTS.labelSM,
  },
  value: {
    ...FONTS.labelMM,
    color: COLORS.primary,
  },
});

export default ShopDetails;
