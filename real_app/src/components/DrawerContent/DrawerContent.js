import { View, Text, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

import styles from "./styles";
import AppStyles from "../../AppStyles";

export default function CustomDrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      {/* <LinearGradient
        style={styles.header}
        colors={["#227BEA", "#459FF0"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      > */}
      <LinearGradient
        style={{ flex: 1 }}
        colors={["#404040", "#1F1F1F"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      >
        <View style={styles.profile}>
          <Image
            source={require("../../../assets/default_avatar.jpg")}
            style={styles.profileImage}
          />
          <Text style={styles.profileText}>Adam</Text>
        </View>
        {/* </LinearGradient> */}
        {/* <LinearGradient
        style={{ flex: 1 }}
        colors={["#404040", "#1F1F1F"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      > */}
        <DrawerContentScrollView
          {...props}
          // style={{ backgroundColor: AppStyles.color.secondaryColor }}
          // style={{ backgroundColor: "#3D3D44" }}
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
            <Entypo
              name="log-out"
              size={30}
              style={{ paddingLeft: 10, color: "white" }}
            />
            <Text style={styles.settingText}>Log out</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}
