import { FlatList, Text, View } from "react-native";
import homeCss from "../css/indexCss";

const DATA = [
  { id: "1", title: "React Native" },
  { id: "2", title: "JavaScript" },
  { id: "3", title: "Node.js" },
  { id: "4", title: "MongoDB" },
  { id: "5", title: "Express.js" },
  { id: "6", title: "React Native" },
  { id: "7", title: "SQL" },
  { id: "8", title: "Linux" },
  { id: "9", title: "Git GitHub" },
];

type ItemType = {
  id: string;
  title: string;
};

export default function Index() {
  const renderItem = ({ item }: { item: ItemType }) => (
    <View style={homeCss.item}>
      <Text style={homeCss.title}>{item.title}</Text>
    </View>
  );

  return (
    <View style={homeCss.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
