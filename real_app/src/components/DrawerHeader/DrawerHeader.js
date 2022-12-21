import { Text, View, Button, TouchableOpacity } from "react-native";
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

// export default function Header({ navigation, title, showSettingsIcon }) {
//   const openMenu = () => {
//     navigation.openDrawer();
//   };

//   const settingsStyle = () => {
//     if (showSettingsIcon === undefined || showSettingsIcon) {
//       return {};
//     }
//     return { display: "none" };
//   };

//   return (
//     <View style={styles.header}>
//       <MaterialIcons
//         name="menu"
//         size={28}
//         onPress={openMenu}
//         style={styles.icon}
//       />
//       <MaterialIcons
//         name="settings"
//         size={28}
//         onPress={openMenu}
//         style={[{ position: "absolute", right: 0 }, settingsStyle()]}
//       />
//       <View>
//         <Text style={styles.headerText}>{title}</Text>
//       </View>
//     </View>
//   );
// } //24.09

function DrawerHeader({ navigation, name }) {
  return (
    <View style={styles.header}>
      <LinearGradient
        style={styles.header}
        colors={["#227BEA", "#459FF0"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      >
        <Text style={styles.headerText}>{name}</Text>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.getParent("LeftDrawer").openDrawer()}
        >
          <MaterialIcons name="menu" size={32} style={{ color: "white" }} />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

export default DrawerHeader;
