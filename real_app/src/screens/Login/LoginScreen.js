import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import AppStyles from "../../AppStyles";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// import global from "../../global.js";

import styles from "./styles";

export default function LoginScreen({ setIsSignedIn }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={{ flex: 1 }}>
        <KeyboardAvoidingView style={styles.appLogoContainer}>
          <Image
            source={require("../../../assets/green_energy.png")}
            style={styles.appLogo}
          />
        </KeyboardAvoidingView>
      </View>
      <KeyboardAvoidingView
        style={{
          height: 200,
          // backgroundColor: "blue",
        }}
      >
        <View style={{}}>
          <TextInput
            style={styles.inputField}
            placeholder="Login"
            onChangeText={(login) => {
              setLogin(login);
            }}
          ></TextInput>
          <View style={{ padding: 2 }} />
          <TextInput
            secureTextEntry={true}
            style={styles.inputField}
            placeholder="Password"
            onChangeText={(passwd) => {
              setPassword(passwd);
            }}
          ></TextInput>
        </View>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            setIsSignedIn(true);
          }}
        >
          <LinearGradient
            // style={{ flex: 2, width: "100%", alignItems: "center" }}
            colors={["#227BEA", "#459FF0"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            // style={{
            //   flex: 1,
            //   width: "100%",
            //   overflow: "hidden",
            //   borderRadius: 9,
            // }}
            style={[styles.loginButton, { marginTop: 0 }]}
          >
            <Text style={{ color: "white" }}>LOG IN</Text>
          </LinearGradient>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </KeyboardAvoidingView>
  );
}

// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TextInput,
//   Button,
//   TouchableOpacity,
//   StatusBar,
//   KeyboardAvoidingView
// } from "react-native";

// export default function App() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <View style={styles.container}>
//       {/* <Image style={styles.image} source={require("./assets/log2.png")} /> */}

//       <StatusBar style="auto" />
//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.TextInput}
//           placeholder="Email."
//           placeholderTextColor="#003f5c"
//           onChangeText={(email) => setEmail(email)}
//         />
//       </View>

//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.TextInput}
//           placeholder="Password."
//           placeholderTextColor="#003f5c"
//           secureTextEntry={true}
//           onChangeText={(password) => setPassword(password)}
//         />
//       </View>

//       <TouchableOpacity>
//         <Text style={styles.forgot_button}>Forgot Password?</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.loginBtn}>
//         <Text style={styles.loginText}>LOGIN</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   image: {
//     marginBottom: 40,
//   },

//   inputView: {
//     backgroundColor: "#FFC0CB",
//     borderRadius: 30,
//     width: "70%",
//     height: 45,
//     marginBottom: 20,

//     alignItems: "center",
//   },

//   TextInput: {
//     height: 50,
//     flex: 1,
//     padding: 10,
//     marginLeft: 20,
//   },

//   forgot_button: {
//     height: 30,
//     marginBottom: 30,
//   },

//   loginBtn: {
//     width: "80%",
//     borderRadius: 25,
//     height: 50,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 40,
//     backgroundColor: "#FF1493",
//   },
// });
