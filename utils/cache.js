import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";
const prefex = "my-key";
const ValidityPeriod = 5;

const store = async (key, value) => {
  try {
    const item = {
      value,
      timeStamp: Date.now(),
    };
    await AsyncStorage.setItem(prefex + key, JSON.stringify(item));
  } catch (e) {
    console.log(e);
  }
};

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prefex + key);
    const item = JSON.parse(value);

    if (!item) return null; //

    if (isExpired(item)) {
      AsyncStorage.removeItem(prefex + key);
      return null; //
    }

    return item.value; //
  } catch (error) {
    console.log(error);
  }
};

const isExpired = (item) => {
  const now = moment(Date.now());
  const storedAt = moment(item.timeStamp);
  return now.diff(storedAt, "minutes") > ValidityPeriod;
};

export default {
  store,
  get, 
};


// عملت اللي بيخزن الداتا عالجهاز ويجيبها منه
// دلوقتي المفروض اول ماجيب داتا مالسرفر اخزنها بقا او اجيبها من عندي