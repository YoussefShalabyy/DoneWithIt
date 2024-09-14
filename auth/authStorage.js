import * as SecureStore from "expo-secure-store";
const key = "token";
const store = (value) => {
  SecureStore.setItem(key, value);
};

const get = () => {
  return SecureStore.getItem(key);
};

const remove = () => {
  return SecureStore.deleteItemAsync(key);
};

export default {
  store,
  get,
  remove,
};
