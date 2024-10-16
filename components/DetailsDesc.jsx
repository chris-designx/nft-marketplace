import React, { useState } from "react";
import { View, Text } from "react-native";
import { EthPrice, NFTTitle } from "./SubInfo";

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <View className="w-full flex-row justify-between items-center">
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize="text-xl" // Tailwind handles font size, adjust as needed
          subTitleSize="text-sm"
        />
        <EthPrice price={data.price} />
      </View>

      <View className="my-6">
        <Text className="text-base font-semibold text-primary">Description</Text>
        <View className="mt-2">
          <Text className="text-secondary text-sm font-inregular leading-6">
            {text}
            {!readMore && "..."}
            <Text
              className="text-primary font-semibold"
              onPress={() => {
                if (!readMore) {
                  setText(data.description);
                  setReadMore(true);
                } else {
                  setText(data.description.slice(0, 100));
                  setReadMore(false);
                }
              }}
            >
              {readMore ? " Show Less" : " Read More"}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default DetailsDesc;
