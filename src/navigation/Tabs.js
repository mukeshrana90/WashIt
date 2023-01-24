import React from "react";
import { View, Image } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Home, Search, Bookings, Profile } from "../screens";

import { icons, COLORS, FONTS } from "../constants";

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
            backgroundColor: "#ffffff",
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
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          ...FONTS.labelXSM,
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: "#9999A7",
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
                  height: 24,
                  width: 24,
                  tintColor: COLORS.primary,
                }}
              />
            ) : (
              <Image
                source={icons.homeIcon}
                style={{
                  height: 24,
                  width: 24,
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
                  height: 24,
                  width: 24,
                  tintColor: COLORS.primary,
                }}
              />
            ) : (
              <Image
                source={icons.searchIcon}
                style={{
                  height: 24,
                  width: 24,
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
                  height: 24,
                  width: 24,
                  tintColor: COLORS.primary,
                }}
              />
            ) : (
              <Image
                source={icons.bookingIcon}
                style={{
                  height: 24,
                  width: 24,
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
                  height: 24,
                  width: 24,
                  tintColor: COLORS.primary,
                }}
              />
            ) : (
              <Image
                source={icons.profileIcon}
                style={{
                  height: 24,
                  width: 24,
                }}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
