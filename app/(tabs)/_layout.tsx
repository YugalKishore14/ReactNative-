import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "black",
          tabBarActiveBackgroundColor: "lightgray",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: () => <AntDesign name="home" size={20} color="black" />,
          }}
        />
        <Tabs.Screen
          name="login"
          options={{
            title: "Login",
            tabBarIcon: () => <MaterialIcons name="login" size={20} color="black" />,
          }}
        />
      </Tabs>
    </>
  );
}
