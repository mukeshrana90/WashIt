import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { CONTAINER } from "../../constants"; 

const Bookings = () => {
  return (
    <SafeAreaView style={{...CONTAINER.main}}>
      <Text>Bookings</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
})
export default Bookings;
