import React, { useState } from "react";
import { View, SafeAreaView, FlatList } from "react-native";

import { NFTCard, HomeHeader } from "../components";
import { NFTData } from "../constants";

const Home = () => {
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (value) => {
    if (value.length === 0) {
      setNftData(NFTData);
    }

    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setNftData(filteredData.length === 0 ? NFTData : filteredData);
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 pt-7">
        <View className="z-0">
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>

        <View className="absolute top-0 bottom-0 right-0 left-0 z-[-1]">
          <View className="h-[300px] bg-primary" />
          <View className="flex-1 bg-white" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
