import { View, Image, Text } from "react-native";
import styles from "./styles";

export default function MeasuringDeviceMin({
  deviceName,
  deviceStatus,
  production,
}) {
  const renderStatus = () => {
    if (deviceStatus == "off") {
      return <View style={[styles.status, { backgroundColor: "lightgray" }]} />;
    }
    return <View style={[styles.status, { backgroundColor: "green" }]} />;
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.deviceIcon}
        source={require("../../../assets/temporaryMeter.png")}
      ></Image>
      <View style={styles.deviceInfo} />

      <View style={[styles.absoluteText, { top: -10 }]}>
        <Text style={{ fontSize: 20 }}>{production} kWh</Text>
      </View>
      <View style={[styles.absoluteText, { top: 50 }]}>
        <Text style={{ fontSize: 15 }}>{deviceName}</Text>
      </View>
      <View style={{ flex: 1 }}>{renderStatus()}</View>
    </View>
  );
}
