import React from "react";
import { View, Image } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Home, Search, Bookings, Profile } from "../screens";

import { icons, COLORS, FONTS, SIZES } from "../constants";

const Tab = createBottomTabNavigator();

const CustomTabBar = (props) => {
  if (isIphoneX()) {
    return (
      <View>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 30,
            backgroundColor: COLORS.white,
          }}
        ></View>
        <BottomTabBar {...props.props} />
      </View>
    );
  } else {
    return <BottomTabBar {...props.props} />;
  }
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          ...FONTS.labelXSM,
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.dark50,
      }}
      tabBar={(props) => <CustomTabBar props={props} />}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={icons.homeIcon}
                style={{
                  height: SIZES.iconSize,
                  width: SIZES.iconSize,
                  tintColor: COLORS.primary,
                }}
              />
            ) : (
              <Image
                source={icons.homeIcon}
                style={{
                  height: SIZES.iconSize,
                  width: SIZES.iconSize,
                }}
              />
            ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={icons.searchIcon}
                style={{
                  height: SIZES.iconSize,
                  width: SIZES.iconSize,
                  tintColor: COLORS.primary,
                }}
              />
            ) : (
              <Image
                source={icons.searchIcon}
                style={{
                  height: SIZES.iconSize,
                  width: SIZES.iconSize,
                }}
              />
            ),
        }}
      />

      <Tab.Screen
        name="Bookings"
        component={Bookings}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={icons.bookingIcon}
                style={{
                  height: SIZES.iconSize,
                  width: SIZES.iconSize,
                  tintColor: COLORS.primary,
                }}
              />
            ) : (
              <Image
                source={icons.bookingIcon}
                style={{
                  height: SIZES.iconSize,
                  width: SIZES.iconSize,
                }}
              />
            ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={icons.profileIcon}
                style={{
                  height: SIZES.iconSize,
                  width: SIZES.iconSize,
                  tintColor: COLORS.primary,
                }}
              />
            ) : (
              <Image
                source={icons.profileIcon}
                style={{
                  height: SIZES.iconSize,
                  width: SIZES.iconSize,
                }}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
