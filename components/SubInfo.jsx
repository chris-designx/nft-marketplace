import { View, Image, Text } from "react-native";
import { assets } from "../constants";

export const NFTTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <View>
      <Text className={`font-semibold text-[${titleSize}px] text-primary`}>{title}</Text>
      <Text className={`font-inregular text-[${subTitleSize}px] text-primary`}>by {subTitle}</Text>
    </View>
  );
};

export const EthPrice = ({ price }) => {
  return (
    <View className="flex-row items-center">
      <Image source={assets.eth} resizeMode="contain" className="w-5 h-5 mr-1" />
      <Text className="font-medium text-[14px] text-primary">{price}</Text>
    </View>
  );
};

const ImageCmp = ({ imgUrl, index }) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      className={`w-12 h-12 ${index === 0 ? "ml-0" : "-ml-4"}`}
    />
  );
};

export const People = () => {
  return (
    <View className="flex-row">
      {[assets.person02, assets.person03, assets.person04].map((imgUrl, index) => (
        <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />
      ))}
    </View>
  );
};

export const EndDate = () => {
  return (
    <View className="px-4 py-2 bg-white rounded-md justify-center items-center shadow-sm max-w-[50%]">
      <Text className="font-inregular text-[12px] text-primary">Ending in</Text>
      <Text className="font-semibold text-[16px] text-primary">12h 30m</Text>
    </View>
  );
};

export const SubInfo = () => {
  return (
    <View className="w-full px-4 mt-[-24px] flex-row justify-between">
      <People />
      <EndDate />
    </View>
  );
};
