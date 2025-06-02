import { Text, View } from "react-native";
import homeCss from "../css/homeCss";

export default function Index() {
  return (
    <>
      <View style={homeCss.view}>
        <Text style={homeCss.text}>this is home page</Text>
      </View>
    </>
  );
}
