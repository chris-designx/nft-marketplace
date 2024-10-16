import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import { assets } from "../constants";

const HomeHeader = ({ onSearch }) => {
  return (
    <View className="bg-primary p-4">
      <View className="flex-row justify-between items-center">
        <Image source={assets.logo} resizeMode="contain" className="w-[90px] h-[25px]" />

        <View className="w-[45px] h-[45px] relative">
          <Image source={assets.person01} resizeMode="contain" className="w-full h-full" />
          <Image
            source={assets.badge}
            resizeMode="contain"
            className="absolute w-[15px] h-[15px] bottom-0 right-0"
          />
        </View>
      </View>

      <View className="my-4">
        <Text className="text-white font-inregular text-sm">Hello Chris 👋</Text>
        <Text className="text-white font-inbold text-xl mt-2">Let’s find masterpiece Art</Text>
      </View>

      <View className="mt-4">
        <View className="w-full rounded-lg bg-gray-400 flex-row items-center px-4 py-2">
          <Image source={assets.search} resizeMode="contain" className="w-[20px] h-[20px] mr-3" />
          <TextInput
            placeholder="Search NFTs"
            placeholderTextColor={"#ffff"}
            style={{ color: "#fff" }} // Change text color here
            className="flex-1"
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
