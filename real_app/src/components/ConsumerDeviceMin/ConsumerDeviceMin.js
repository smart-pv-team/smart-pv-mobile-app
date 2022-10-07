import { View, Text, Image } from "react-native";
import styles from "./styles";

export default function ConsumerDeviceMin({
  deviceStatus,
  deviceName,
  powerConsumption,
}) {
  const renderStatus = () => {
    if (deviceStatus == "off") {
      return <View style={[styles.status, { backgroundColor: "lightgray" }]} />;
    }
    return <View style={[styles.status, { backgroundColor: "#48DA16" }]} />;
  };
  return (
    <View
      style={{
        flex: 1,
        padding: 5,
      }}
    >
      <View style={styles.container}>
        <Image
          style={styles.deviceIcon}
          source={require("../../../assets/temporaryMeter.png")}
        ></Image>
        <View style={styles.deviceInfo}>
          <Text style={{ fontSize: 15 }}>{deviceName}</Text>
          <Text style={{ fontSize: 20, paddingTop: 10 }}>
            {powerConsumption} kWh
          </Text>
        </View>
        <View style={styles.minorContainer}>
          <View style={{ flex: 1, justifyContent: "center" }}>
            {renderStatus()}
          </View>
        </View>
      </View>
    </View>
  );
}
