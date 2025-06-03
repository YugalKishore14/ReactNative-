import {
  default as Ionicons,
  default as Ioniconss,
} from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "red",
          tabBarActiveBackgroundColor: "whitesmoke",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Messages",
            tabBarIcon: ({ color, focused }) => {
              return focused ? (
                <MaterialCommunityIcons
                  name="android-messages"
                  size={20}
                  color={color}
                />
              ) : (
                <MaterialIcons name="message" size={20} color={color} />
              );
            },
          }}
        />
        <Tabs.Screen
          name="login"
          options={{
            title: "Notices",
            tabBarIcon: ({ color, focused }) => {
              return focused ? (
                <Ionicons name="file-tray-full-sharp" size={20} color={color} />
              ) : (
                <Ioniconss name="file-tray-stacked" size={20} color={color} />
              );
            },
          }}
        />
      </Tabs>
    </>
  );
}
