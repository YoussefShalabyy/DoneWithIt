import MyButton from "@/components/MyButton";
import { useFonts } from "expo-font";
import { router } from "expo-router";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";


export default function WelcomeScreen() {
  const [loaded] = useFonts({
    RalewayRegular: require("../../assets/fonts/Raleway-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <ImageBackground
      source={require("../../assets/images/background.jpg")}
      style={styles.Background}
      blurRadius={5}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/logo-red.png")}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>Welcome To Youssef Shalaby's app</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <MyButton title={"login"} onPress={() => router.push("login")} />
        <MyButton
          title={"register"}
          color="secondary"
          onPress={() => router.push("register")}
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  Background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 80,
    alignItems: "center",
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  logoText: {
    fontFamily: "RalewaySemiBold",
    fontSize: 22,
    marginTop: 10,
  },
  buttonsContainer: {
    padding: 10,
    width: "100%",
    gap: 10,
    marginBottom: 15,
  },
});
