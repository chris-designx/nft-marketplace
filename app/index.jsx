import { StatusBar } from "expo-status-bar";
import { View, Text, SafeAreaView, ScrollView } from "react-native";

const Index = () => {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}>
        <View className="w-full justify-center items-center px-5 bg-blue-600 min-h-full">
          <Text className="text-primary text-2xl font-cdlight">Welcome to React Native App!</Text>
          <Text className="font-cdbold">Start Coding!</Text>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="transparent" translucent={true} />
    </SafeAreaView>
  );
};

export default Index;
