import { View, Text, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

import styles from "./styles";
import AppStyles from "../../AppStyles";

export default function CustomDrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.profile}>
        <Image
          source={require("../../../assets/ac-unit.webp")}
          style={styles.profileImage}
        />
        <Text style={styles.profileText}>Admin</Text>
      </View>
      <DrawerContentScrollView
        {...props}
        style={{ backgroundColor: AppStyles.color.secondaryColor }}
      >
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
          <Entypo name="log-out" size={30} style={{ paddingLeft: 10 }} />
          <Text style={styles.settingText}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
