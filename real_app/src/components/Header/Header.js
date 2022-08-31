import { Text, View } from "react-native";
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation, title }) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      <MaterialIcons
        name="settings"
        size={28}
        onPress={openMenu}
        // style={{ display: "none" }}
      />
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}
