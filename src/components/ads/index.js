import React from "react";
import { Image, View, ScrollView } from "react-native";
import { SIZES } from "../../constants";

const Ads = (props) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {props.map((ad, index) => {
        return (
          <View
            style={[
              { marginRight: SIZES.basePadding },
              index === 0 && { marginLeft: SIZES.basePadding },
            ]}
            key={ad.id}
          >
            <Image
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
export default Ads;
