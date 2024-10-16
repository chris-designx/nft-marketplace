import React from "react";
import { View, Text, Image } from "react-native";
import { EthPrice } from "./SubInfo";

const DetailsBid = ({ bid }) => {
  return (
    <View className="w-full flex-row justify-between items-center my-2 px-2" key={bid.id}>
      <Image source={bid.image} resizeMode="contain" className="w-12 h-12" />

      <View className="flex-1 items-center px-2">
        <Text className="font-semibold text-sm text-primary">Bid placed by {bid.name}</Text>
        <Text className="font-inregular text-xs text-secondary mt-1">{bid.date}</Text>
      </View>

      <EthPrice price={bid.price} />
    </View>
  );
};

export default DetailsBid;
