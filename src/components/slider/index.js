import React from "react";
import { ScrollView } from "react-native";

const Slider = (props) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {props.children}
    </ScrollView>
  );
};
export default Slider;
