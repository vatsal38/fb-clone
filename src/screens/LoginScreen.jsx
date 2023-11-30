import { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Colors } from "../utils/Colors";
import VectorIcon from "../utils/VectorIcon";
import Logo from "../assets/images/logo.png";
import MetaLogo from "../assets/images/meta-logo.png";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onCreateAccount = () => {
    navigation.navigate("RegisterScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image source={Logo} style={styles.logo} />
        <TextInput
          placeholder="Mobile number or Email"
          value={email}
          onChangeText={(v) => setEmail(v)}
          style={styles.inputBox}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(v) => setPassword(v)}
          style={styles.inputBox}
        />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("MainScreen")}
        >
          <Text style={styles.login}>Log in</Text>
        </TouchableOpacity>
        <Text style={styles.forgotPass}>Forgot Password?</Text>
        <TouchableOpacity style={styles.newAccount} onPress={onCreateAccount}>
          <Text style={styles.newAccountText}>Create new account</Text>
        </TouchableOpacity>
        <Image source={MetaLogo} style={styles.metaLogo} />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: 50,
    marginVertical: "20%",
  },
  container: {
    padding: 15,
  },
  subContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputBox: {
    borderWidth: 1,
    borderColor: Colors.borderGrey,
    padding: 10,
    borderRadius: 12,
    width: "100%",
    marginTop: 12,
  },
  loginButton: {
    backgroundColor: Colors.primaryColor,
    padding: 10,
    borderRadius: 9999,
    width: "100%",
    color: Colors.white,
    alignItems: "center",
    marginTop: 12,
  },
  login: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: "500",
  },
  forgotPass: {
    color: Colors.grey,
    fontSize: 14,
    fontWeight: "400",
    marginTop: 12,
  },
  newAccount: {
    borderColor: Colors.primaryColor,
    borderWidth: 1,
    padding: 10,
    borderRadius: 9999,
    width: "100%",
    alignItems: "center",
    marginTop: "35%",
  },
  newAccountText: {
    color: Colors.primaryColor,
    fontSize: 15,
    fontWeight: "500",
  },
  metaLogo: {
    marginTop: 15,
    height: 15,
    width: 70,
  },
});
