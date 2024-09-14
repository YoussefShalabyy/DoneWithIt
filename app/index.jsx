import { ActivityIndicator, Button, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

export default function App() {
  return <ActivityIndicator size={"large"} color={Colors.primary} />;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
