import { View, Text, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

import styles from "./styles";

export default function CustomDrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.profile}>
        <Image
          source={require("../../../assets/ac-unit.webp")}
          style={{
            width: 150,
            height: 150,
            borderRadius: 150 / 2,
            borderWidth: 1,
            borderColor: "black",
          }}
        />
        <Text style={styles.profileText}>Admin</Text>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.settingsLabel}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            paddingLeft: 2,
          }}
        >
          <MaterialIcons name="settings" size={30} />
          <Text style={styles.settingText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
