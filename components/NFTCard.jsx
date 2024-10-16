import React from "react";
import { View, Image } from "react-native";
import { useRouter } from "expo-router"; // Import useRouter from expo-router
import { SubInfo, EthPrice, NFTTitle } from "./SubInfo";
import { RectButton, CircleButton } from "./Button";
import { assets } from "../constants";

const NFTCard = ({ data }) => {
  const router = useRouter(); // Use the router hook

  return (
    <View className="bg-white rounded-lg mb-6 mx-2 shadow-lg">
      <View className="w-full h-[250px]">
        <Image
          source={data.image}
          resizeMode="cover"
          className="w-full h-full rounded-t-lg"
        />
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>

      <SubInfo />

      <View className="w-full p-4">
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={18} // NativeWind replaces SIZES.large
          subTitleSize={12} // NativeWind replaces SIZES.small
        />

        <View className="mt-4 flex-row justify-between items-center">
          <EthPrice price={data.price} />
          <RectButton
            fontSize={14}
            handlePress={() => router.push(`/Details?id=${data.id}`)} // Navigate to details page
          />
        </View>
      </View>
    </View>
  );
};

export default NFTCard;
