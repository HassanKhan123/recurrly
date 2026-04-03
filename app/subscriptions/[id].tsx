import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Text, View, Pressable } from "react-native";

const SubscriptionDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  return (
    <View>
      <Text>SubscriptionDetails</Text>
      <Text>{id}</Text>

      <Pressable onPress={() => router.back()}>
        <Text>Go Back</Text>
      </Pressable>
    </View>
  );
};

export default SubscriptionDetails;
