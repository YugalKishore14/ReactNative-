import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
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
            title: "Home",
            tabBarIcon: ({ color, focused }) => {
              return focused ? (
                <Entypo name="home" size={20} color={color} />
              ) : (
                <FontAwesome name="home" size={20} color={color} />
              );
            },
          }}
        />
        <Tabs.Screen
          name="login"
          options={{
            title: "Login",
            tabBarIcon: ({ color, focused }) => {
              return focused ? (
                <MaterialIcons name="login" size={20} color={color} />
              ) : (
                <MaterialCommunityIcons name="login" size={20} color={color} />
              );
            },
          }}
        />
      </Tabs>
    </>
  );
}
