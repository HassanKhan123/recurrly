import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Onboarding = () => {
  return (
    <View>
      <Text>Onboarding</Text>

      <Link href="/" className="mt-4 rounded bg-primary text-white p-4">
        Go to Home
      </Link>
    </View>
  );
};

export default Onboarding;
