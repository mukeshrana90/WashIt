import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import {
  COLORS,
  CONTAINER,
  FONTS,
  icons,
  images,
  SIZES,
} from "../../constants";

const Profile = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <SafeAreaView style={{ ...CONTAINER.main }}>
      <ScrollView>
        <View style={{ paddingHorizontal: SIZES.basePadding }}>
          {/* Header */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: SIZES.basePadding * 3,
            }}
          >
            <View
              style={{
                position: "relative",
                height: SIZES.iconSize * 4.5,
                width: SIZES.iconSize * 4.5,
                borderRadius: SIZES.iconSize * 4.5,                
              }}
            >
              {!image && (
                <Image
                  source={images.user2}
                  style={{
                    height: SIZES.iconSize * 4.5,
                    width: SIZES.iconSize * 4.5,
                    resizeMode: "contain",
                  }}
                />
              )}

              {image && (
                <Image
                  source={{ uri: image }}
                  style={{
                    height: SIZES.iconSize * 4.5,
                    width: SIZES.iconSize * 4.5,
                    resizeMode: "cover",
                    borderRadius: SIZES.basePadding * 5,
                  }}
                />
              )}
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={pickImage}
                style={{ position: "absolute", bottom: -10, right: -10 }}
              >
                <Image
                  source={icons.cameraIcon}
                  style={{
                    height: SIZES.iconSize * 2,
                    width: SIZES.iconSize * 2,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ paddingLeft: SIZES.basePadding }}>
              <Text
                style={{
                  ...FONTS.h2,
                  fontFamily: "SecondaryMedium",
                  paddingBottom: SIZES.base / 2,
                }}
              >
                James Charles
              </Text>
              <Text style={{ ...FONTS.labelSM, color: COLORS.dark50 }}>
                James@gmail.com
              </Text>
            </View>
          </View>

          {/* Links */}

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("ChangePassword")}
          >
            <Image source={icons.lockIcon} style={styles.icon} />
            <Text style={styles.text}>Change Password</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}>
            <Image source={icons.faqIcon} style={styles.icon} />
            <Text style={styles.text}>FAQ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}>
            <Image source={icons.privacyIcon} style={styles.icon} />
            <Text style={styles.text}>Privacy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}>
            <Image source={icons.contactIcon} style={styles.icon} />
            <Text style={styles.text}>Contact Us</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("Login")}
          >
            <Image source={icons.logoutIcon} style={styles.icon} />
            <Text style={styles.text}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderColor: COLORS.dark10,
    paddingVertical: SIZES.basePadding * 1.2,
    paddingHorizontal: SIZES.basePadding,
    borderRadius: SIZES.basePadding,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SIZES.basePadding,
  },
  icon: {
    height: SIZES.iconSize,
    width: SIZES.iconSize,
  },
  text: {
    ...FONTS.labelMM,
    marginLeft: SIZES.basePadding,
  },
});
export default Profile;
