import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import MeasuringDeviceScreen from "./src/screens/MeasuringDevice/MeasuringDeviceScreen";

export default function App() {
  const [name, setName] = useState("Adam");
  const [person, setPerson] = useState({ name: "Adam", age: 22 });

  const clickHandler = () => {
    if (name === "Adam") {
      setName("Jacob");
    } else {
      setName("Adam");
    }
    setPerson({ ...person, age: person.age + 1 });
  };

  return (
    <MeasuringDeviceScreen></MeasuringDeviceScreen>
    //   <View style={styles.container}>
    //     <View style={styles.header}>
    //       <Text style={styles.boldText}>My name is {name}</Text>
    //       <Text>
    //         His name is {person.name} and he is {person.age}
    //       </Text>
    //     </View>
    //     <View style={styles.buttonContainer}>
    //       <Button title="update state" onPress={clickHandler} />
    //     </View>
    //   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 20,
  },
});
