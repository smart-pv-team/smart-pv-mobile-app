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
    return <View style={[styles.status, { backgroundColor: "#48DA16" }]} />;
  };

  return (
    <View style={[styles.container, { overflow: "hidden" }]}>
      <View style={[styles.minorContainer]}>
        <Image
          style={styles.deviceIcon}
          source={require("../../../assets/temporaryMeter.png")}
        />
      </View>
      <View
        style={[
          styles.minorContainer,
          {
            flexDirection: "column",
            height: "100%",
            flex: 1.5,
          },
        ]}
      >
        <View style={{ flex: 5, justifyContent: "flex-end" }}>
          <Text style={{ fontSize: 20 }}>{production} kWh</Text>
        </View>
        <View style={{ flex: 4, justifyContent: "center" }}>
          <Text style={{ fontSize: 15 }}>{deviceName}</Text>
        </View>
      </View>
      <View style={{ flex: 0.3 }} />
      <View
        style={[
          styles.minorContainer,
          {
            flex: 0.7,
            backgroundColor: "#4CAF50",
          },
        ]}
      >
        <View style={{ flex: 1, justifyContent: "center" }}>
          {renderStatus()}
        </View>
      </View>
    </View>
  );
}
