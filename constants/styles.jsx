const { Platform } = require("react-native");

export default {
  text: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 18,
  },
};
