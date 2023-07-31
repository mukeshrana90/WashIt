import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CONTAINER, SIZES, COLORS, FONTS } from "../../constants";
import { Header } from "../../components";

export default function Faq({ navigation }) {
  return (
    <SafeAreaView style={{ ...CONTAINER.main }}>
      <View style={{ paddingHorizontal: SIZES.basePadding }}>
        <Header
          heading="FAQ"
          backButton={true}
          navigation={navigation}
          style2
        />
      </View>
      <ScrollView>
        <View style={{ paddingHorizontal: SIZES.basePadding }}>
          <View style={styles.box}>
            <Text style={styles.heading}>
              1. What is your company all about?
            </Text>
            <Text style={styles.text}>
              Our company is a leading provider of [your product/service]. We
              strive to deliver top-notch solutions that cater to your specific
              needs. With a team of experts and cutting-edge technology, we are
              committed to offering the best products/services in the industry.
            </Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.heading}>
              2. How can I contact your customer support team?
            </Text>
            <Text style={styles.text}>
              You can reach our friendly customer support team through multiple
              channels. The easiest way is to use the "Contact Us" page on our
              website, where you can submit a support ticket. Alternatively, you
              can also email us at [your support email] or call our toll-free
              number [your phone number]. We aim to respond promptly and assist
              you with any queries or concerns you may have.
            </Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.heading}>
              3. What payment methods do you accept?
            </Text>
            <Text style={styles.text}>
              We accept a wide range of payment methods to ensure a convenient
              and secure transaction process for our customers. You can pay
              using major credit cards, such as Visa, Mastercard, and American
              Express. Additionally, we also support payments through PayPal and
              other online payment platforms.
            </Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.heading}>
              4. Is my personal information safe and secure on your website?
            </Text>
            <Text style={styles.text}>
              Yes, absolutely. We take data security very seriously. Our website
              employs industry-standard encryption protocols to safeguard your
              personal information. We do not store any payment details on our
              servers, ensuring maximum security for your sensitive data.
            </Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.heading}>
              5. Do you offer international shipping?
            </Text>
            <Text style={styles.text}>
              Yes, we offer international shipping to many countries worldwide.
              During the checkout process, you will be able to select your
              country, and the shipping cost will be calculated based on your
              location. Please note that international shipping times may vary
              depending on your country's customs and regulations.
            </Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.heading}>6. What is your return policy?</Text>
            <Text style={styles.text}>
              We want you to be completely satisfied with your purchase. If for
              any reason you are not happy with your order, you can return it
              within [number of days] days of receiving the product. Please
              refer to our "Returns and Refunds" page for detailed information
              on the return process and eligibility criteria.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderColor: COLORS.dark10,
    paddingVertical: SIZES.basePadding * 1.2,
    paddingHorizontal: SIZES.basePadding,
    borderRadius: SIZES.basePadding,
    marginBottom: SIZES.basePadding,
  },
  heading: {
    ...FONTS.labelLM,
    marginBottom: SIZES.base,
  },
  text: {
    ...FONTS.labelS,
    lineHeight: 18,
    color: COLORS.dark50,
  },
});
