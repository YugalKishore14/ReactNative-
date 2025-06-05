import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from "react-native";
import styles from "./css/authCss";

export default function AuthScreen() {
  return (
     <KeyboardAvoidingView
      style={styles.containerr}
      behavior={Platform.OS === "android" ? "height" : "padding"}
    >
      <View style={styles.innerView}>
        <Text style={styles.titleText}>Create Account</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Enter your email"
        />
      </View>
    </KeyboardAvoidingView>
  );
}
