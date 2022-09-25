import { Text, View, Button } from "react-native";
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

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
      <Text style={styles.headerText}>{name}</Text>
      <MaterialIcons
        name="menu"
        size={32}
        onPress={() => navigation.getParent("LeftDrawer").openDrawer()}
        style={styles.icon}
      />
    </View>
  );
}

export default DrawerHeader;
