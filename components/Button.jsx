import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      className={`w-10 h-10 bg-white absolute rounded-full items-center justify-center shadow-xl top-3 right-3 ${{...props}}`}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        className="w-6 h-6"
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      className={`bg-primary py-2 rounded-full min-w-[142px]`}
      onPress={handlePress}
    >
      <Text
        className={`text-white text-center font-insemibold text-[${fontSize}px]`}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};
