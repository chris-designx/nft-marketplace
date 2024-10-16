import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, Image, FlatList, StatusBar } from "react-native";
import { useLocalSearchParams } from "expo-router"; // Correct import for search params
import { CircleButton, SubInfo, DetailsDesc, DetailsBid, FocusedStatusBar } from "../components";
import { assets, NFTData } from "../constants";

const DetailsHeader = ({ data, navigation }) => (
  <View className="w-full h-[373px]">
    <Image
      source={data.image}
      resizeMode="cover"
      className="w-full h-full"
    />
    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      className="absolute left-3 top-[${StatusBar.currentHeight + 10}px]"
    />
    <CircleButton
      imgUrl={assets.heart}
      className="absolute right-3 top-[${StatusBar.currentHeight + 10}px]"
    />
  </View>
);

const Details = ({ navigation }) => {
  const { id } = useLocalSearchParams(); // Use useLocalSearchParams instead of useSearchParams
  const [data, setData] = useState(null); // State to hold NFT data

  // Fetch NFT data based on the ID
  useEffect(() => {
    const fetchData = async () => {
      // Mock fetching data (replace with your data fetching logic)
      const fetchedData = NFTData.find((item) => item.id === id);
      setData(fetchedData);
    };

    fetchData();
  }, [id]);

  // Loader while fetching data
  if (!data) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />

      <FlatList
        data={data.bids} // List of bids on the NFT
        renderItem={({ item }) => <DetailsBid bid={item} />} // Render bid details
        keyExtractor={(item) => item.id} // Unique key for each item
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
        ListHeaderComponent={() => (
          <>
            {/* Header Image and Buttons */}
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: 16 }}>
              <DetailsDesc data={data} />
              {data.bids.length > 0 && (
                <Text style={{ fontSize: 16, fontWeight: "600", color: "#3F3D56" }}>Current Bid</Text>
              )}
            </View>
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;


