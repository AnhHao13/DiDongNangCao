import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

const Stack = createStackNavigator();

function IntroScreen({ navigation }: { navigation: any }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Home");
    }, 10000); // Chuyển sau 10 giây

    return () => clearTimeout(timer); // Dọn dẹp timer khi component unmount
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Xin chào! Đây là trang giới thiệu bản thân.</Text>
      <Text>Nguyễn Anh Hào 21110823</Text>
      <Text>Chúng tôi sẽ chuyển bạn đến trang chính sau 10 giây.</Text>
    </View>
  );
}

function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Chào mừng đến với Homepage!</Text>
    </View>
  );
}

export default function App() {
  return (
    //<NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    //</NavigationContainer>
  );
}