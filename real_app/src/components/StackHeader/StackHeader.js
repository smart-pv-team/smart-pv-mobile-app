import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import styles from "./styles";

export default function StackHeader({ navigation, name }) {
  return (
    <View style={styles.header}>
      <MaterialIcons
        name="chevron-left"
        size={32}
        onPress={() => navigation.goBack()}
        style={styles.icon}
      />
      <Text style={styles.headerText}>{name}</Text>
    </View>
  );
}
